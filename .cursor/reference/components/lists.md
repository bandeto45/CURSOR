# Components — Lists & content

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **List** | Rows: leading (icon/avatar) · title · subtitle · meta · trailing (chevron/switch/action); dividers/inset; grouped with sticky headers | Row hover/press, selected, swipe actions (mobile), skeleton rows, empty | Mobile: full-bleed rows · Tablet: rows in card · Desktop: rows or table |
| **Media list** | List row with thumbnail (square/16:9), title, meta, trailing action; duration/badge overlay | Lazy thumbnails, fixed aspect, skeleton | Mobile: thumb left 64–96px · Desktop: larger thumb, meta inline |
| **Blog list** | Post card/row: cover, category chip, title, excerpt (2–3 lines), author, date, read time | Pagination or infinite scroll; category filter; `Article` schema when SEO on | Mobile: single column · Tablet: 2 cols · Desktop: featured + 3-col grid or list + sidebar |
| **Product list** | Product card: image, name, price (+ compare-at), rating, badges, quick action | Grid/list toggle, filters (sheet on mobile), sort, pagination/infinite, out-of-stock state | Mobile: 2-col grid, filter sheet · Tablet: 3-col · Desktop: 4-col + filter sidebar |
| **Feeds layout** | Vertical stream of posts/activity: author row, content, media, actions (like/comment/share), timestamps | Infinite scroll with skeleton, new-items pill, optimistic actions, virtualized when long | Mobile: single column full-bleed · Tablet: centered column · Desktop: feed center + left nav + right aside |
| **Card** | Slots: media · header · body · footer/actions; `elevated` · `outlined` · `interactive` (whole card is link/button) | Hover lift only if interactive; focus ring on the interactive element | Grid item; consistent height option |
| **Ticket card** | Event/booking/support ticket: header (title, status chip), key details (date/time, place/seat, code), tear line, QR/barcode, action | Statuses (valid · used · expired · cancelled); copy/share/add-to-wallet; QR contrast-safe | Mobile: full-width vertical ticket, QR large · Tablet/Desktop: horizontal ticket with side stub |
| **Chip / Badge / Avatar** | Status/tag/count/person markers | Color + text, never color only | Same |
| **Table** | See catalog pattern in `layout-strategy.mdc` (card list → condensed → full) | Sticky head, sort, select, bulk actions, pagination | per pattern |
| **Accordion / FAQ / Collapse** | Header button + panel; single or multiple open; icon rotates | `aria-expanded`/`aria-controls`; arrows between headers; animate height (reduced-motion safe) | Full-width all classes |
| **Table / Data table** | Header (sort), rows, select, bulk actions, pagination, sticky head/first column, column visibility, row expand, inline edit optional | Pattern per class in `layout-strategy.mdc`; empty/loading rows | card list · condensed + drawer · full |
| **Stats / KPI tile** | Label · value · delta (▲▼ with text) · sparkline · period | Skeleton, "as of" time, color + icon for delta | Mobile: swipeable/2-col · Desktop: 4-col |
| **Timeline / Activity log** | Vertical events: time, actor, action, detail; grouped by day; filters | Load older, live append, relative + absolute time | Single column; desktop adds side detail |
| **Comments / Thread** | Author, body, timestamp, reactions, reply nesting (max depth), composer | Optimistic post, edit/delete own, report; mentions optional | Mobile: composer sticky bottom · Desktop: inline composer |
| **Chat / Messaging** | Conversation list + message thread + composer; bubbles, status (sent/read), attachments, typing indicator | Scroll anchoring, unread divider, virtualized, retry failed | Mobile: list → thread push · Tablet/Desktop: split view |
| **Kanban board / Sortable list** | Columns + cards, drag & drop, WIP limits; sortable rows with handle | Keyboard reorder (Space + arrows), drop indicators, optimistic move + rollback | Mobile: column tabs/swipe · Desktop: multi-column board |
| **Tree view (generic)** | Expandable hierarchy (folders, categories, org chart) | `role="tree"`, arrows, lazy children | Mobile: drill-down · Desktop: inline tree |
| **Pricing table / Plan cards** | Plan name, price/period toggle, features, highlighted plan, CTA | Monthly/yearly switch, comparison rows | Mobile: swipe/accordion · Desktop: 3–4 columns |
| **Testimonial / Social proof** | Quote, person, rating, logo strip | Carousel optional (paused by default) | 1 · 2 · 3 columns |
| **Cart & Checkout summary** | Line items (image, name, qty stepper, price), promo code, totals, shipping/tax, CTA | Optimistic qty change, stock warnings, empty cart state | Mobile: sticky total bar + expandable summary · Desktop: right-hand summary |
| **Order / Status tracker** | Steps with timestamps (placed → shipped → delivered), current highlighted, ETA | `aria-current`, failure/cancel branches | Mobile: vertical · Desktop: horizontal |
| **Profile header / Avatar group** | Cover + avatar + name + stats + actions; stacked avatars with +n | Edit affordance for owner only | Mobile: stacked · Desktop: inline |
| **Notification list** | Rows with icon, text, time, unread dot; swipe/menu to mark | Group by day, empty state | Same as List |
