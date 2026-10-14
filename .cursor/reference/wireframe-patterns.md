# Wireframe pattern grammar

> Companion to `.cursor/reference/layout-patterns.md`. That file names what each pattern *is* per breakpoint (cards, grids, drawers…). This file goes one level deeper: where the photo, icons, buttons, menu, and sections actually sit — the placement grammar every route's wireframe in `.cursor/reference/wireframes/<group>.md` inherits from. Rules and flow: `.cursor/rules/layout-strategy.mdc`. Component names here match `.cursor/rules/ui-components.mdc`'s catalog — never invent a component name.
>
> Breakpoints: Mobile `<768` · Tablet `768–1023` · Desktop `≥1024` (`layout-strategy.mdc`).
>
> A per-route wireframe cites a pattern below, inherits its diagram and callouts, and only states what's route-specific (its own sections, its own icons/buttons/menu items). It does not redraw the pattern from scratch.

---

## 1. Dashboard

```
MOBILE <768                    TABLET 768–1023              DESKTOP ≥1024
┌──────────────────┐           ┌──┬───────────────┐         ┌────────┬──────────────────────────┐
│ Title              │          │Ra│ KPI    KPI      │         │Sidebar │ Title            [🔔][👤]  │
├──────────────────┤           │il├───────────────┤         │ nav    ├──────────────────────────┤
│ ┌────────────────┐│           │  │┌─────┐┌─────┐  │         │ item   │ KPI  KPI  KPI  KPI         │
│ │ KPI card         ││           │  ││Chart││Chart│  │         │ item   │ ┌──────┐┌──────┐┌──────┐ │
│ └────────────────┘│           │  │└─────┘└─────┘  │         │ item   │ │Chart ││Chart ││Widget│ │
│ ┌────────────────┐│           └──┴───────────────┘         │        │ └──────┘└──────┘└──────┘ │
│ │ KPI card         ││                                        └────────┴──────────────────────────┘
│ └────────────────┘│
│ ┌────────────────┐│
│ │ Chart (1 at a   ││
│ │ time, swipe)     ││
│ └────────────────┘│
├──────────────────┤
│[Home][Tab][Tab][Tab]│
└──────────────────┘
```
- **Photo:** none by default (data-dense). If a KPI card needs identity (branch/vehicle/user), a small square `Avatar`/`Image` (28–32px) sits left of the number — never full-bleed.
- **Icons:** one leading icon per KPI card, 24px, left of the label (`items-center gap-2`). Nav items in `TabBar`/Rail/`Sidebar` each carry one icon above or left of its label.
- **Buttons:** primary action ("New X") top-right of the title row on tablet/desktop; `FAB` only when no title-row CTA exists and the action is the single most common task on the screen.
- **Menu:** `TabBar` (mobile, ≤5 items) → nav rail (tablet, icon + tooltip) → `Sidebar` (desktop, icon + label, grouped).
- **Sections, in order:** Title + primary action → KPI row → Chart(s) → secondary widgets/lists.

## 2. List → Detail

```
MOBILE <768 (list)              MOBILE <768 (detail, pushed)     TABLET/DESKTOP (split pane)
┌──────────────────┐           ┌──────────────────┐             ┌───────────┬──────────────────┐
│ ← Title       [+]  │           │ ← Back              │             │ 🔍 Search   │ Selected item      │
├──────────────────┤           ├──────────────────┤             │ ○ Item (sel)│  header + action   │
│ 🔍 Search            │           │ Header + actions    │             │ ○ Item      │  body sections     │
│ ○ Item 1    status ›│           │ Body sections       │             │ ○ Item      │                    │
│ ○ Item 2    status ›│           │                      │             │ ○ Item      │                    │
│ ○ Item 3    status ›│           │                      │             │             │                    │
└──────────────────┘           └──────────────────┘             └───────────┴──────────────────┘
```
- **Photo:** leading avatar/thumbnail (40px mobile/tablet row, 48px desktop row) left of each row, only when the entity has one (person, branch, vehicle) — never on text-only rows (e.g. ledger entries).
- **Icons:** status icon or color `Badge`/`Chip` right-aligned in each row; chevron `›` at the row's far right on mobile signals "opens detail."
- **Buttons:** primary "create" as a header-row icon-button or full `Button`; the detail pane's own primary action sits top-right of its own header.
- **Menu:** none added — inherits the page's existing shell nav.
- **Sections, in order:** Header (title + primary action) → Search/Filter → Row list → (tablet/desktop only) Detail pane.

## 3. Data table

```
MOBILE <768 (card list)         TABLET (condensed table)              DESKTOP (full table)
┌──────────────────┐           ┌────────────────────────┐            ┌──────────────────────────────┐
│ Title          [≡]  │          │ 🔍 filter bar    [Filter] │           │ Filter toolbar   [Bulk▾][Export]│
├──────────────────┤           ├────────────────────────┤            ├──────────────────────────────┤
│ 🔍 sticky search     │           │ Col │ Col │ Col │ …    │            │☐│Col│Col│Col│Col│Col│Col│  (sticky)│
├──────────────────┤           │ row → opens side Drawer │            │☐│   │   │   │   │   │   │          │
│ ┌────────────────┐│           └────────────────────────┘            ├──────────────────────────────┤
│ │ Key field 1       ││                                               │        ‹ 1  2  3 ›  Pagination  │
│ │ Key field 2  [▾]  ││ ← tap to expand                               └──────────────────────────────┘
│ └────────────────┘│
└──────────────────┘
```
- **Photo:** only when a row's entity has an avatar/thumbnail column (user/branch/vehicle) — first data column, 32px (table row) / 40px (card); never a decorative photo.
- **Icons:** status `Badge`/`Chip` per row (color + short label, never color alone); sort-direction icon in the column header on hover/focus; row action icons (view/edit), 20px, right-aligned.
- **Buttons:** bulk-action buttons appear only once ≥1 row is selected, in the toolbar; per-row action as a text/icon `Button` at the row's right edge; "Create new" `Button` top-right of the title row at every breakpoint.
- **Menu:** none added.
- **Sections, in order:** Title + Create → Filter/Search → Table/Card list → Pagination (tablet/desktop) — not infinite scroll, unless a specific route says otherwise.

## 4. Form / wizard

```
MOBILE <768                     TABLET (centered card, stepper top)   DESKTOP (two-col + live summary)
┌──────────────────┐           ┌────────────────────────┐            ┌───────────────────┬──────────┐
│ ← Step 2 of 4        │          │   ① ─ ② ─ ③ ─ ④          │            │  ① ─ ② ─ ③ ─ ④       │ Summary   │
├──────────────────┤           │  ┌────────────────┐   │            │  Field    Field      │ live      │
│ Field label            │          │  │ Field   Field   │   │            │  Field    Field      │ totals    │
│ [ Input            ]  │          │  │ Field   Field   │   │            │                      │ [Continue]│
│ Field label            │          │  │       [Continue]│   │            └───────────────────┴──────────┘
│ [ Input            ]  │          │  └────────────────┘   │
├──────────────────┤           └────────────────────────┘
│ [     Continue      ]│ ← sticky, full-width primary
└──────────────────┘
```
- **Photo:** none in the field column. The live-summary aside (desktop) may hold a small preview (e.g. `MapPanel`) when the concept calls for it — never a decorative photo.
- **Icons:** field-level validation icon (16px), right-aligned inside the input, on error/success; step dots/numbers in the stepper.
- **Buttons:** exactly one primary per step ("Continue"/"Submit") — full-width + sticky-bottom on mobile, inline bottom-right of the card on tablet/desktop. "Back" is a secondary/ghost `Button` or a `Back` icon, never visually competing with the primary.
- **Menu:** none — a wizard suppresses the main nav chrome; `Back` substitutes for it.
- **Sections, in order:** Step indicator → Field group(s) → (desktop) live summary aside → Primary CTA.

## 5. Settings / profile

```
MOBILE <768 (group list)        MOBILE <768 (sub-page, pushed)        TABLET/DESKTOP (nav + pane)
┌──────────────────┐           ┌──────────────────┐                 ┌─────────────┬────────────┐
│ ← Settings            │          │ ← Profile             │                 │ 👤 Profile(sel)│ Field  Field │
├──────────────────┤           ├──────────────────┤                 │ 🔒 Security    │ Field  Field │
│ 👤 Profile          ›│           │ Avatar [edit]        │                 │ 🔔 Notifications│       [Save] │
│ 🔒 Security          ›│           │ Field                │                 └─────────────┴────────────┘
│ 🔔 Notifications    ›│           │ [Save]               │
└──────────────────┘           └──────────────────┘
```
- **Photo:** `Avatar` only, top of the Profile sub-page/content pane, with an edit-overlay icon (`AvatarUploadCrop`) — real upload only, never a stock image.
- **Icons:** one leading icon per settings group/row, 20–24px, `items-center gap-2`; chevron `›` at row end on mobile.
- **Buttons:** "Save" primary, bottom-right of the content pane (tablet/desktop) or sticky-bottom (mobile sub-page); destructive actions use the danger variant, placed last and visually separated.
- **Menu:** grouped `List` (mobile) → left section list (tablet/desktop) — a page-scoped secondary nav, not the global one.
- **Sections, in order:** Group/section list → selected group's content → Save/Cancel actions.

## 6. Auth

```
MOBILE <768                     TABLET (centered card)                DESKTOP (centered card, or split)
┌──────────────────┐           ┌────────────────────────┐            ┌────────────┬────────────┐
│       Logo             │          │        ┌──────────┐    │            │ Brand panel  │  ┌──────────┐ │
│  Field                 │          │        │  Logo     │    │            │ (brand surface,       │  │  Logo     │ │
│  Field                 │          │        │  Field    │    │            │  wordmark)   │  │  Field    │ │
│  [    Sign in     ]  │          │        │ [Sign in] │    │            │              │  │ [Sign in] │ │
│  [G] [] OAuth          │          │        └──────────┘    │            │              │  └──────────┘ │
│  Sign up · Forgot        │          └────────────────────────┘            └────────────┴────────────┘
└──────────────────┘
```
- **Photo:** none. A split-brand panel (when a route chooses it) carries the wordmark on the brand surface, never a photo — matches the "no marketing chrome" rule on Calm-clinical auth screens.
- **Icons:** OAuth provider icons (Google/Apple), 20px, left of each secondary button's label; inline field validation icon on the right.
- **Buttons:** one primary ("Sign in"/"Create account") full-width; OAuth as secondary/outline buttons below it, equal width, never above the primary.
- **Menu:** none — auth pages carry no `Navbar`/`TabBar`.
- **Sections, in order:** Logo/wordmark → field group → primary button → OAuth buttons → helper links (sign up/forgot) — identical order at every breakpoint.

## 7. Landing

```
MOBILE/TABLET <768 & 768–1023 (slide)        DESKTOP ≥1024 (stacked sections)
┌──────────────────┐                        ┌─────────────────────────────────────┐
│ ●●○         01/03    │                        │ Navbar: Logo  Nav…Nav…Nav   [Sign in]│
├──────────────────┤                        ├─────────────────────────────────────┤
│                        │                        │  Hero: headline + CTA + tracker field │
│  [ Illustration ]     │                        ├─────────────────────────────────────┤
│                        │                        │  Section 2 (e.g. How it works)         │
│  Headline               │                        ├─────────────────────────────────────┤
│  Supporting line         │                        │  Section 3 (…)                         │
│                        │                        ├─────────────────────────────────────┤
│ ‹        ›   Skip/Next│                        │  Footer                                │
└──────────────────┘                        └─────────────────────────────────────┘
```
- **Photo:** hero may carry a full-bleed image/illustration on desktop only where the route's assigned style allows it (e.g. Warm commerce "photo-first"); mobile/tablet slides use brand illustration only — never a stock/fake "proof" photo.
- **Icons:** step dots + Skip/Next chevrons in slide chrome; one icon per feature/benefit card where a section lists features.
- **Buttons:** exactly one primary CTA per slide/section; a final step's multiple entry choices (e.g. Book/Track/Sign in) are stacked equal-weight buttons, primary styling reserved for the single most common action.
- **Menu:** none on mobile/tablet (slide chrome only); public `Navbar` on desktop.
- **Sections:** whatever list the route itself names (its own Mobile/Tablet/Desktop lines in `route-layouts.mdc`) — always one primary step first, `Footer` last, same order at every breakpoint.

## 8. Feed / gallery

```
MOBILE <768 (grid)              DESKTOP (masonry, hover preview)
┌──────────────────┐           ┌───────────────────────────────┐
│ [img]  [img]        │          │ [img][img][img][img]            │
│ [img]  [img]        │          │ [img][img][img][img]            │
│ (infinite scroll)      │          │ (hover → preview overlay)       │
└──────────────────┘           └───────────────────────────────┘
```
- **Photo:** the content unit itself is an `Image`/`Gallery` tile, aspect-locked and lazy-loaded; caption/label overlays sit at the tile's bottom edge only, never over the main subject.
- **Icons:** a single type/status icon as a top-right corner badge per tile, 16–20px.
- **Buttons:** no persistent in-grid buttons; a floating `FAB` only if "add media" is the page's single most common action.
- **Menu:** none added beyond the page's existing shell nav.
- **Sections, in order:** Filter/sort bar (optional) → Grid → load-more/infinite-scroll sentinel.

## 9. Detail / article

```
MOBILE <768                     DESKTOP (reading column + aside)
┌──────────────────┐           ┌──────────────────────┬────────┐
│ ← Title                │          │ Lead image               │ TOC/   │
│ Lead image (16:9)       │          │ Body column (reading w.)│ Aside  │
│ Body text…               │          │                          │ sticky │
│ Body text…               │          └──────────────────────┴────────┘
├──────────────────┤
│ [ Primary action ]    │ ← sticky bottom action bar
└──────────────────┘
```
- **Photo:** one lead `Image` at the top of the body column, 16:9, caption below if provided; inline body images follow the same aspect/caption rule.
- **Icons:** share/save icon-buttons in the sticky action bar (mobile) or inline header (desktop/tablet), 20–24px.
- **Buttons:** one primary action in the sticky bottom bar (mobile) or inline at the top of the reading column (desktop); secondary actions (share) as icon-only buttons beside it.
- **Menu:** optional in-page TOC/anchor nav as the aside (desktop/tablet only).
- **Sections, in order:** Title/header → lead image → body → (desktop/tablet) aside — sticky action bar present throughout.

## 10. Checkout / confirm

```
MOBILE <768 (stepped)           TABLET/DESKTOP (two-col)
┌──────────────────┐           ┌───────────────────┬────────────┐
│ Step: Payment            │          │ Payment form         │ Summary     │
│ [ Payment fields ]     │          │ Field    Field       │  line items │
├──────────────────┤           │                      │  [Pay {amount}] │
│ ▾ Order summary (amt) │ ← collapsible              └───────────────────┴────────────┘
├──────────────────┤
│ [    Pay {amount}     ]  │ ← sticky, shows live amount
└──────────────────┘
```
- **Photo:** small line-item thumbnails (if any), 40px square, left of each summary row; none on the payment form itself.
- **Icons:** payment-method icons (card/OTC/e-wallet), 24px, inside the method selector; a lock icon beside "secure payment" microcopy.
- **Buttons:** one primary "Pay {amount}" button carrying the live amount — sticky-bottom on mobile, inline bottom-right of the summary column on tablet/desktop; never a second competing CTA on this screen.
- **Menu:** none — checkout suppresses the main nav chrome.
- **Sections, in order:** Payment step/form → order/line-item summary (collapsible on mobile) → Pay CTA (always shows the live total).

---
