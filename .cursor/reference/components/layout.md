# Components — Layout

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **Page** | Shell + `Navbar` + `PageContent` + optional `Footer`/`BottomToolbar` | Page transition; scroll restore; safe areas | Shell per class (`project-structure.mdc`) |
| **PageContent** | Max-width container + gutters; `narrow` (prose) · `default` · `wide` · `full` | Reserves header/toolbar height; sticky offsets | gutters 16 · 24 · 32; max-w `prose` / `7xl` |
| **Section** | Eyebrow · title · description · body · actions; bands (`plain` · `tint` · `contrast`) | One H2 per section; anchor id | `py-10` · `py-14` · `py-20` |
| **Grid layout** | `Grid` with `cols` per class, `gap`, `auto-fit minmax`; `Stack` (vertical) · `Row` (horizontal) · `Cluster` (wrap) | Items equal height option; masonry for feeds | 1–2 cols · 2–3 · 3–4 (per pattern catalog) |
| **Panels (left/right)** | `Panel side` (`left` or `right`); fixed · collapsible · resizable; header + scroll body + footer | Persist open/closed; focus moves in/out; `Esc` closes overlay mode | Mobile: sheet/drawer overlay · Tablet: collapsible push panel · Desktop: docked pane |
| **Footers** | `Footer` (site: link columns, legal, social) · `ActionFooter` (sticky form actions) · `PageFooter` | Sticky variant respects safe area | Mobile: stacked/accordion columns · Tablet: 2 cols · Desktop: 4 cols + bottom bar |
| **Component page** | `/_components` (see rule 3) | Theme + width switcher | — |
| **Hero** | Eyebrow · headline · lead · primary/secondary CTA · media; `centered` · `split` · `media-bg` (overlay for contrast) | One H1; LCP image eager, rest lazy; parallax optional (marketing only) | Mobile: stacked, media below · Tablet: split 50/50 · Desktop: split with larger media |
| **Split view (master–detail)** | List/nav pane + detail pane; resizable optional | Selection persists in URL; empty-detail state | Mobile: two pages (list → detail push) · Tablet: 40/60 panes · Desktop: 30/70 panes |
| **Sticky action bar** | Primary/secondary actions pinned to bottom (mobile) or header (desktop); shows total/summary | Safe-area padding; hides on keyboard open; never covers content (bottom padding reserved) | Mobile: bottom bar · Desktop: page-header actions |
| **CTA banner / Section CTA** | Headline + one action, tint band | One CTA per band | Stacked → inline row |
| **Scroll-to-top / Anchor nav** | Floating button after 1.5 screens; in-page section links (`scroll-margin-top` = header height) | Smooth scroll off under reduced motion | Mobile: FAB above tab bar · Desktop: corner button |
