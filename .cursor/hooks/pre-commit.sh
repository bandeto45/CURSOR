#!/usr/bin/env bash
# .cursor/hooks/pre-commit.sh
# Runs before every commit when wired via git hooks or PreToolUse.

set -euo pipefail

echo "Running pre-commit checks..."

run_npm_script() {
  local script="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts?.['$script']?0:1)" 2>/dev/null; then
    if command -v pnpm >/dev/null 2>&1; then
      pnpm "$script"
    elif command -v npm >/dev/null 2>&1; then
      npm run "$script"
    else
      echo "  → Skipping '$script' (no pnpm/npm)"
      return 0
    fi
  else
    echo "  → Skipping '$script' (not defined in package.json)"
  fi
}

if [[ -f package.json ]]; then
  echo "  → Typecheck / lint / test (if defined)..."
  run_npm_script typecheck
  run_npm_script lint
  if node -e "const p=require('./package.json'); process.exit(p.scripts?.test?0:1)" 2>/dev/null; then
    if command -v pnpm >/dev/null 2>&1; then
      pnpm test --run 2>/dev/null || pnpm test
    else
      npm test -- --run 2>/dev/null || npm test
    fi
  else
    echo "  → Skipping 'test' (not defined in package.json)"
  fi
else
  echo "  → No package.json — skipping JS checks"
fi

# PHP syntax check (api, migrations, seeds, or any *.php under common roots)
php_roots=()
for d in api server backend migrations seeds; do
  [[ -d "$d" ]] && php_roots+=("$d")
done

if [[ ${#php_roots[@]} -gt 0 ]] && command -v php >/dev/null 2>&1; then
  echo "  → PHP syntax check..."
  while IFS= read -r -d '' file; do
    php -l "$file" >/dev/null
  done < <(find "${php_roots[@]}" -name '*.php' -print0 2>/dev/null)
fi

# Reject committed .sql migrations/seeds (source of truth must be PHP)
if git diff --cached --name-only | grep -E '(^|/)(migrations|seeds)/.*\.sql$' >/dev/null 2>&1; then
  echo "❌ Staged .sql under migrations/ or seeds/ — use PHP migration/seed files only."
  exit 1
fi

# Secret scan
scan_dirs=()
for d in web/src src app api server backend mobile/src; do
  [[ -d "$d" ]] && scan_dirs+=("$d")
done

if [[ ${#scan_dirs[@]} -gt 0 ]]; then
  echo "  → Scanning for hardcoded secrets..."
  if grep -rE "(api[_-]?key|secret|password|jwt[_-]?secret)\s*[:=]\s*['\"][^'\"]{8,}" \
    --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.php" \
    "${scan_dirs[@]}" 2>/dev/null; then
    echo "❌ Possible hardcoded secret detected. Aborting commit."
    exit 1
  fi
fi

echo "✅ Pre-commit checks passed."
