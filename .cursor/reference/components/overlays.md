# Components — Overlays

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **Modal** | Header · body (scrolls) · footer actions; sizes `sm md lg full` | `role="dialog"` `aria-modal`, focus trap, Esc, scrim click optional, restores focus, locks scroll | Mobile: bottom sheet or full-screen · Tablet: centered · Desktop: centered (max-w by size) |
| **Popup** | Small anchored/centered confirm or info surface; confirm (destructive) variant | Click-outside dismiss (non-destructive), primary action right | Mobile: bottom sheet · Desktop: centered small |
| **Popover** | Anchored to trigger; arrow optional; placement auto-flip | `aria-expanded`, `Esc`, click-outside, focus returns; no essential content only here | Mobile: converts to bottom sheet if tall · Desktop: anchored |
| **Dropdown menu** | Trigger + menu: items, groups, dividers, icons, shortcuts, checkable items, submenu | `role="menu"`/`menuitem`; arrows, typeahead, Esc; disabled items skipped | Mobile: action sheet · Desktop: anchored menu (shadow-md) |
| **Overlay / Drawer** | Side sheet (left/right/bottom) | Same as Modal + swipe to close on touch | Mobile: full/bottom · Desktop: 360–480px side |
| **Bottom sheet / Action sheet** | Handle + title + content/actions; snap points (peek · half · full); cancel row | Drag to resize/dismiss, focus trap, scrim; scroll inside without dragging sheet | Mobile primary overlay · Tablet/Desktop → Modal/Popover |
| **Lightbox** | Full-screen image/video viewer: swipe/arrows, zoom/pinch, caption, close, thumbnails | Preload neighbors, `Esc`, focus trap, return focus | Mobile: swipe + pinch · Desktop: arrows + wheel zoom |
| **Share sheet** | Native `navigator.share` with fallback (copy link, social, email, QR) | Feature-detect; copy feedback | Mobile: native · Desktop: popover |
| **Tour / Coach marks** | Step highlights (spotlight + popover), next/skip, progress; first-run only | Skippable, resumable, `aria-live` step text, never blocks critical tasks | Mobile: bottom-sheet steps · Desktop: anchored popover |
