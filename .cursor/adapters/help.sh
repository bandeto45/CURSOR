#!/usr/bin/env bash
# .cursor/adapters/help.sh — token-free help: prints shortcuts, commands, prompts, and token tips
# straight from the pack files (no AI call, costs 0 tokens).
# Usage: bash .cursor/adapters/help.sh [keys|cmds|prompts|tokens|all]      (default: keys + cmds)

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RULES="$ROOT/.cursor/rules/shortcuts.mdc"
CMDS="$ROOT/.cursor/commands"
GUIDE="$ROOT/.cursor/reference/usage-guide.md"

clean() { sed -e 's/`//g' -e 's/\\|/¦/g' -e 's/\*\*//g'; }

keys() {
  echo "SHORTCUTS  (start a message with .key — any language after it)"
  echo
  # table rows of section 1 (between "### 1." and the "Modifier" line)
  awk '/^### 1\. Shortcuts/{on=1;next} /^- \*\*Modifier/{on=0} on && /^\| `/{print}' "$RULES" | clean |
    awk -F'|' '{for(i=2;i<=4;i++){gsub(/^ +| +$/,"",$i); if($i=="—")$i=""} printf "  %-16s %-26s %s\n",$2,$3,$4}'
  echo
  echo "  +plan          plan only, no code        e.g. .b R-07 +plan"
  echo "  ;              chain                     e.g. .b R-01; .b R-02"
  echo "  deploy/delete/push always ask you to confirm."
}

cmds() {
  echo "COMMANDS  (slash commands; tools without slash support: open .cursor/commands/<name>.md)"
  echo
  for f in "$CMDS"/*.md; do
    n="$(sed -n 's/^name: *//p' "$f" | head -1)"
    d="$(sed -n 's/^description: *//p' "$f" | head -1)"
    printf "  /%-20s %s\n" "$n" "$d"
  done
}

section() {  # print a "## N. Title" section of the guide (without the heading marks)
  awk -v pat="$1" '$0 ~ "^## [0-9]+\\. " pat {on=1; print toupper(substr($0,4)); next} /^## /{on=0} on{print}' "$GUIDE" | clean
}

case "${1:-}" in
  ""|keys+cmds) keys; echo; cmds ;;
  keys)    keys ;;
  cmds|commands) cmds ;;
  prompts) section "Prompts" ;;
  tokens)  section "Save tokens" ;;
  all)     keys; echo; cmds; echo; section "Prompts"; echo; section "Save tokens" ;;
  *) echo "usage: help.sh [keys|cmds|prompts|tokens|all]" >&2; exit 1 ;;
esac
