---
name: frontend-design
description: >-
  Tailwind visual system — AI-proposed, dev-approved look (UX-first, modern, eye-comfortable, return-worthy). Theme, typography, icons, UI baseline.
  Triggers: theme, branding, tokens, landing, UI baseline, forms, buttons, modals, layout.
triggers:
  - theme, branding, design tokens, colors, typography, tailwind
  - landing, hero, UI baseline, visual system, modal, navbar, card
  - forms, buttons, icons, logo, wordmark, layout, grid, flex
---

# Frontend Design

> Status: TEMPLATE — filled by —, —; approved by —
> Purpose: this project's visual tokens, from the approved `REC-design-n` (`design-direction.mdc`). Structure is locked in `ui-styling.mdc`.

## Project

| Field | Value |
|-------|--------|
| Product name | TBD |
| Design direction | TBD — name + mood (`REC-design-n`) |
| Decision | TBD — `accepted` \| `changed` \| `AI-chosen`, date |
| UI baseline route | TBD (e.g. marketing `/`) |
| Default mode | TBD (light / dark / both) |

## Theme tokens (→ `tailwind.config` / `@theme`; include measured contrast per text/UI pair)

| Role | Hex | Tailwind / CSS variable |
|------|-----|-------------------------|
| Primary | TBD | `primary` / `--color-primary` |
| Primary pressed | TBD | `primary-pressed` |
| Text | TBD | `foreground` / `--color-fg` |
| Muted text | TBD | `muted-foreground` |
| Page surface | TBD | `background` |
| Card surface | TBD | `card` |
| Border | TBD | `border` |
| Focus ring | TBD | `ring` |
| Danger | TBD | `destructive` |
| Success | TBD | `success` |

## Typography scale (locked structure — families from the approved direction)

| Token | Typical use |
|-------|-------------|
| `text-xs` | Captions, badges |
| `text-sm` | Labels, buttons, secondary |
| `text-base` | Body, inputs |
| `text-lg` | Lead paragraph |
| `text-xl`–`text-4xl` | Headings / display |

| Role | Family / weight |
|------|------------------|
| UI / body | TBD |
| Display / hero | TBD |
| Mono (if any) | TBD |

## Spacing & shell

| Token | Value |
|-------|-------|
| Page max-width | TBD (e.g. `max-w-7xl mx-auto px-4`) |
| Header height | TBD (e.g. `h-14` / `--header-height`) |
| Radius · shadow | TBD |

## Icons & brand

| Item | Choice |
|------|--------|
| Icon system | TBD — `material` \| `lottie` |
| Lottie asset path | TBD if `lottie` |
| Logo / mark | TBD |
| Wordmark rules | TBD |

## Motion

| Item | Choice |
|------|--------|
| Character | TBD (from the approved direction) |

## Change log

| Date | AI | Change | Why |
|------|----|--------|-----|
| — | — | — | — |
