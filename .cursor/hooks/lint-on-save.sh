#!/usr/bin/env bash
# .cursor/hooks/lint-on-save.sh
# Formats/lints a file after the agent writes it (PostToolUse).
# Usage: lint-on-save.sh <filepath>

set -euo pipefail

FILE="${1:-}"

if [[ -z "$FILE" ]]; then
  echo "Usage: lint-on-save.sh <filepath>"
  exit 1
fi

if [[ ! -f "$FILE" ]]; then
  echo "  → File not found: $FILE — skipping."
  exit 0
fi

if [[ ! -f package.json ]]; then
  echo "  → No package.json — skipping lint-on-save."
  exit 0
fi

pm=""
if command -v pnpm >/dev/null 2>&1; then
  pm="pnpm"
elif command -v npm >/dev/null 2>&1; then
  pm="npm"
else
  echo "  → No pnpm/npm — skipping lint-on-save."
  exit 0
fi

EXT="${FILE##*.}"

format_file() {
  if node -e "const p=require('./package.json'); process.exit(p.scripts?.format?0:1)" 2>/dev/null; then
    if [[ "$pm" == "pnpm" ]]; then
      pnpm format -- "$FILE"
    else
      npm run format -- "$FILE"
    fi
  elif [[ "$pm" == "pnpm" ]] && pnpm exec prettier --version >/dev/null 2>&1; then
    pnpm exec prettier --write "$FILE"
  elif npx prettier --version >/dev/null 2>&1; then
    npx prettier --write "$FILE"
  fi
}

lint_file() {
  if node -e "const p=require('./package.json'); process.exit(p.scripts?.lint?0:1)" 2>/dev/null; then
    if [[ "$pm" == "pnpm" ]]; then
      pnpm exec eslint --fix "$FILE" 2>/dev/null || true
    else
      npx eslint --fix "$FILE" 2>/dev/null || true
    fi
  fi
}

case "$EXT" in
  ts|tsx|js|jsx|mjs|cjs)
    echo "  → Processing $FILE..."
    format_file
    lint_file
    ;;
  css|scss|json|md|mdx)
    echo "  → Formatting $FILE..."
    format_file
    ;;
  *)
    echo "  → Skipping $FILE (extension .$EXT not handled)"
    ;;
esac

echo "✅ lint-on-save complete for $FILE"
