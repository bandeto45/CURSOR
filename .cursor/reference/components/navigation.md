# Components — Navigation

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **Navbar** | Logo · primary nav · search · actions · profile; sticky/transparent-on-hero | Active item, scroll shadow, `nav` landmark | Mobile: title + back + menu button → drawer · Tablet: rail or condensed bar · Desktop: full bar/sidebar |
| **SubNavbar** | Secondary bar under navbar: section links, filters, breadcrumbs, or page tabs | Sticky below navbar (`top-[var(--header-h)]`); horizontal scroll with fade edges | Mobile: scrollable chips · Tablet/Desktop: inline links + actions |
| **Toolbar** | Row of actions (icon/text buttons), selection count, bulk actions, overflow menu | Contextual (appears on selection); disabled states | Mobile: bottom toolbar (≤5 actions, safe area) · Tablet: top bar · Desktop: top bar with labels |
| **Tabs** | `Tabs` + `TabList` + `Tab` + `TabPanel`; underline · pill · segmented | Roving focus, arrows/Home/End, controlled/uncontrolled, lazy panels | Mobile: scrollable · Tablet/Desktop: fixed |
| **TabBar** | Bottom app tab bar: 3–5 items, icon + label, badge | Active = primary; hides on scroll optional; safe area | Mobile only (app shell); tablet → rail; desktop → sidebar |
| **TabPage** | A routed page whose sections are tabs; URL reflects active tab | Deep-linkable; preserves scroll per tab; skeleton per panel | Mobile: tabs sticky under header · Desktop: tabs left or top |
| **Breadcrumb** | Path with current page last | Collapses middle items | Mobile: back link only · Desktop: full path |
| **Back** | Icon + optional label | `history.back()` or explicit route | Mobile header-left · others in page header |
| **Sidebar / Nav rail** | Sidebar (labels, groups, collapsible) · Rail (icons + tooltip) · footer with profile | Active + expanded-group memory; collapse persisted | Mobile: drawer · Tablet: rail · Desktop: full sidebar |
| **Drawer menu** | Slide-in nav with profile header, groups, close | Focus trap, Esc, swipe-to-close | Mobile primary menu; hidden on desktop |
| **Pagination** | Prev/next + numbered (desktop) · "Load more" · infinite (see lists) | URL-synced page/size; `nav aria-label="Pagination"`; disabled ends | Mobile: prev/next + "page x of y" · Desktop: numbered with ellipsis |
| **Command palette** | `Ctrl/⌘+K` overlay: search, actions, recent, grouped results | Combobox pattern; keyboard-first | Desktop/tablet-with-keyboard; mobile uses Search |
| **Account menu / switcher** | Avatar → menu: profile, workspace/role switch, theme, language, sign out | Menu pattern; confirm on sign out if unsaved | Mobile: in drawer/tab "Me" · Desktop: navbar dropdown |
| **Notification center** | Bell + badge → list (unread, grouped by date), mark read, settings | Realtime/poll, empty state, deep-link on tap | Mobile: full page · Tablet/Desktop: popover panel |
| **Language & theme switcher** | Select/segmented: language, light/dark/system | Persists preference; no reload flash | Mobile: in settings/drawer · Desktop: navbar menu |
