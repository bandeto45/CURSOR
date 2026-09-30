# Components — Foundations (utilities & tokens — `ui-styling.mdc` owns the scales)

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Item | Rules |
|------|-------|
| **Colors** | Roles only: `primary` · `primary-pressed` · `surface` · `card` · `border` · `foreground` · `muted-foreground` · `ring` · `success` · `warning` · `danger` · `info`. Status never by color alone (add icon/text). Text pairs meet AA |
| **Themes** | `light` · `dark` · `system` via CSS variables on `:root` / `[data-theme]`; persisted preference; no un-themed surface; theme toggle is a shared component |
| **Backgrounds** | Page = `background`; bands alternate `background`/`card`; image backgrounds get an overlay gradient guaranteeing text contrast; no busy pattern behind text; hero/marketing only for gradients |
| **Typography** | Scale in `ui-styling.mdc`. `Heading` (h1–h6 mapped to display scale, one H1) · `Text` (sizes, weights, tones) · `Paragraph` |
| **Paragraph** | `text-base leading-relaxed`, measure 60–75ch (`max-w-prose`), `mt-3` between paragraphs, muted variant, lead variant (`text-lg`), truncation via `line-clamp-n` with expand |
| **Text alignment** | Start-aligned by default (`text-start`); centered only for hero, empty states, short titles; never justified; numbers in tables end-aligned (`tabular-nums`); use logical props (`ms-`/`me-`/`ps-`/`pe-`, `text-start`) so RTL works |
| **Alignment (layout)** | `flex`/`grid` with `items-*`/`justify-*`/`place-*`; one alignment axis per row; icon + text `items-center gap-2`; form labels start-aligned |
| **Margin & padding** | Scale only (4/8px rhythm). **Padding inside a component, gap between siblings, margin only for outer separation.** Page gutter `px-4` mobile · `px-6` tablet · `px-8` desktop; section `py-10 md:py-14 lg:py-20`; card padding `p-4 md:p-5`; never negative margins for layout |
| **Positioning** | `static` default; `relative` for anchors; `absolute` only inside a `relative` parent; `fixed` for shells (navbar, toolbar, overlays); `sticky` for headers, table heads, section titles, aside (`top-[var(--header-h)]`). Use logical offsets (`inset-*`) |
| **Z-index scale** | `base 0 · raised 10 · sticky 20 · header 30 · drawer 40 · overlay 50 · modal 60 · popover 70 · toast 80 · tooltip 90` — tokens only, no ad-hoc numbers |
| **Overflow** | `overflow-hidden` only with a reason (rounded clip); scrollable regions get `overflow-auto` + `overscroll-contain` + visible focus; tables/wide content scroll in their own wrapper (`overflow-x-auto`), never the page; no horizontal page scroll at 375px; `truncate` needs `min-w-0` on flex children |
| **Overlay** | One `Overlay` primitive (scrim `bg-black/40`, blur optional), locks body scroll, traps focus when modal, restores focus on close; stacking by z-index scale |
| **Shadows** | Elevation tokens: `shadow-xs` (inputs) · `sm` (cards) · `md` (dropdowns/popovers) · `lg` (modals/drawers) · `xl` (rare). Soft, low-opacity; dark mode uses lighter surface + border instead of heavy shadow |
| **Blocks** | `Block` (display:block, full width) · `Inline` / `InlineBlock` (chips, badges, inline icons; align baseline/center) · **Outer block** = the wrapper that owns margin/width/position; **inner block** owns padding/content. Outer never carries content styling; inner never carries margin |
| **Icons** | System per Profile (`icons-states.mdc`). `Icon` sizes 16 · 20 · 24 · 32; inherits `currentColor`; decorative → `aria-hidden`; meaningful → label; one stroke/fill style |
| **Links** | `Link` variants: inline (underline offset, brand color) · nav (no underline, active state) · standalone (icon + text). External → `rel="noopener noreferrer"` + indicator; visited/hover/focus states from tokens |
| **Divider / Spacer** | `Divider` (hairline, inset, labeled "or") · `Spacer` (token gap) — separates, never decorates; border token only |
| **Accessibility helpers** | `SkipLink` (first focusable → main), `VisuallyHidden` (`sr-only`), `LiveRegion` (polite/assertive), `FocusRing` utility; focus moves to page `<h1>` on route change |
| **Print styles** | Print layout hides navigation/overlays, forces light tokens, avoids splitting rows/cards (`break-inside-avoid`), shows link URLs when useful |
