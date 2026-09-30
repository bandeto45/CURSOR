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

# Frontend Design Skill (template)

> **Status:** Template. Replace every `TBD` after **Mandatory intake** in `CURSOR.md`.

## Project

| Field | Value |
|-------|--------|
| Product name | TBD |
| Design direction | TBD — name + mood, **proposed by the AI from the concept, approved by dev** (`design-direction.mdc`) |
| Direction chosen by | TBD (dev picked option X / dev tweaked / AI-chosen "you decide") |
| Baseline goals | **UX-first · Modern · Eye-comfortable · Return-worthy · Simplified** (locked) |
| UI / UX goal | **Beautiful and easy to use** — clear hierarchy, calm layouts, simple flows |
| CSS stack | **Tailwind CSS** (locked) |
| UI baseline route | TBD (e.g. marketing `/`) |
| Default mode | TBD (light / dark / both) |

## UI & UX (locked)

- **Simplified design** — fewer elements, stronger hierarchy, one clear action per view when possible
- **Beautiful through restraint** — spacing, typography, and tokens; not visual noise
- **Easy to use** — predictable nav, forms, feedback (loading/success/error/empty), back/escape paths
- **Accessible** — contrast, focus, labels, touch targets (~44px min where practical)
- Full rules: `ui-styling.mdc` UX section

## Theme tokens (fill from the approved AI design proposal → map to `tailwind.config` / `@theme`)

Include measured contrast for text/UI pairs. Comfort rules (no pure black on pure white, one accent, soft dark mode) live in `design-direction.mdc`.

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

## Spacing & layout (locked)

- Spacing scale: Tailwind default or extended 4/8 rhythm
- Page max-width: TBD (e.g. `max-w-7xl mx-auto px-4`)
- Header height token: TBD (e.g. `h-14` / `--header-height`)
- Grid/flex/gap: per `ui-styling.mdc`
- **Clients / surfaces:** TBD — `web` \| `mobile` \| `web + mobile`
- **Layout strategy:** TBD — `normal` \| `layout` \| `auto` (resolved: `normal` \| `layout` \| `mixed`)
  - `normal` → one composition reflowing · `layout` → distinct mobile · tablet · desktop layouts · `auto` → AI recommends, dev confirms
  - Always single codebase; per-route layouts in `route-layouts.mdc`
- See `layout-strategy.mdc`

## Icons & brand

| Item | Choice |
|------|--------|
| Icon system | TBD — `material` \| `lottie` (AI recommends in the design proposal; locked after intake) |
| Lottie asset path | TBD if `lottie` |
| Logo / mark | TBD |
| Wordmark rules | TBD |

## Component baseline (must use shared `components/ui/`)

Modal · popover · popup · custom alerts · navbar · bottom toolbar · tabs · cards · headers · back · buttons (text / icon / both) · forms · skeleton · loaders — all Tailwind-themed per `ui-styling.mdc`.

## States & loading (locked — `icons-states.mdc`)

404 · status-error · empty · skeleton · lazy load · Lottie/Material per Profile.

## Motion

- Page transitions: subtle fade/slide via layout wrapper
- Marketing: slideshow/parallax optional — reduced-motion safe
- Budget 2–3 intentional motions on landing

## Extension (allowed)

Add brand-specific Tailwind theme keys, marketing gradients, extra component variants — **do not replace** locked primitives.

## Do not

- Second CSS framework on product surfaces
- Ship cluttered UI, hidden primary actions, or confusing flows for the sake of decoration
- Skip shared modal/nav/form/button primitives
- Emoji as product chrome
- Unstyled native form controls
- When Layout strategy = `layout`: stretch one layout instead of distinct mobile · tablet · desktop layouts, or split into separate projects
- Build screens that are not in `route-layouts.mdc`
- Use colors/fonts that are not from the approved design direction
- Harsh pairs (pure black on pure white), large saturated fills, or manipulative patterns
