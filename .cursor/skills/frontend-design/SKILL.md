---
name: frontend-design
description: >-
  Project visual system — fill after intake (theme, typography, icons, baseline).
  Triggers: theme, branding, tokens, landing, UI baseline, forms chrome, icons.
triggers:
  - theme, branding, design tokens, colors, typography
  - landing, hero, UI baseline, visual system
  - forms, buttons, icons, logo, wordmark
---

# Frontend Design Skill (template)

> **Status:** Template. Replace every `TBD` after **Mandatory intake** in `CURSOR.md`.

## Project

| Field | Value |
|-------|--------|
| Product name | TBD |
| Visual direction | TBD |
| UI baseline route | TBD (e.g. marketing `/`) |
| Default mode | TBD (light / dark / both) |

## Theme tokens (fill from intake)

| Role | Hex | CSS variable |
|------|-----|----------------|
| Primary | TBD | `--color-primary` |
| Primary pressed | TBD | `--color-primary-pressed` |
| Text | TBD | `--color-fg` |
| Muted text | TBD | `--color-muted` |
| Page surface | TBD | `--color-surface-page` |
| Card surface | TBD | `--color-surface-card` |
| Border | TBD | `--color-border` |
| Focus ring | TBD | `--color-focus` |
| Danger | TBD | `--color-danger` |
| Success | TBD | `--color-success` |

## Typography

| Role | Family / weight |
|------|------------------|
| UI / body | TBD |
| Display / hero | TBD |
| Mono (if any) | TBD |

## Icons & brand

| Item | Choice |
|------|--------|
| Icon library | TBD (prefer one library only) |
| Logo / mark | TBD |
| Wordmark rules | TBD |

## Forms chrome

Must match `.cursor/rules/forms.mdc`: shared height, radius, border, focus, error — for text, email, tel, password (show/hide), search, select, checkbox, picker, stepper, editor, upload, buttons (± icon), and `a` links.

## Motion

- Intentional motions only (budget 2–3 on marketing)
- Respect `prefers-reduced-motion`

## Do not

- Ship a second unrelated visual language for product shells
- Mix icon libraries or use emoji as product chrome
- Use default unstyled browser form controls in product UI
