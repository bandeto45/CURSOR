#!/usr/bin/env bash
# .cursor/adapters/sync-ai-adapters.sh
# Creates tiny pointer files so every AI tool finds CURSOR.md.
# Never copies rules (they would drift). Existing files are kept unless --force.
# Usage: sync-ai-adapters.sh [--force] [tool ...]
#   tools: agents claude gemini copilot windsurf   (default: all)

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
FORCE=0
TOOLS=()
for arg in "$@"; do
  case "$arg" in
    --force) FORCE=1 ;;
    *) TOOLS+=("$arg") ;;
  esac
done
[[ ${#TOOLS[@]} -eq 0 ]] && TOOLS=(agents claude gemini copilot windsurf)

POINTER="This project uses the CURSOR pack (AI-agnostic). Read CURSOR.md first — it is the single source of truth (Project Profile, intake, phases, rules). Also read .cursor/rules/multi-ai.mdc. When you finish work, append a row to the AI Handoff Log in CURSOR.md. Do not duplicate rules here."

write_file() {
  local rel="$1" body="$2" path="$ROOT/$1"
  if [[ -e "$path" && $FORCE -eq 0 ]]; then
    echo "keep   $rel (exists; use --force to overwrite)"
    return
  fi
  mkdir -p "$(dirname "$path")"
  printf '%s\n' "$body" > "$path"
  echo "write  $rel"
}

for tool in "${TOOLS[@]}"; do
  case "$tool" in
    agents)   write_file "AGENTS.md" "# AGENTS.md

$POINTER" ;;
    claude)   write_file "CLAUDE.md" "# CLAUDE.md

@CURSOR.md
@AGENTS.md" ;;
    gemini)   write_file "GEMINI.md" "# GEMINI.md

$POINTER" ;;
    copilot)  write_file ".github/copilot-instructions.md" "$POINTER" ;;
    windsurf) write_file ".windsurfrules" "$POINTER" ;;
    *) echo "unknown tool: $tool" >&2; exit 1 ;;
  esac
done
