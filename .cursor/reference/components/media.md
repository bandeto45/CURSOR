# Components — Media

> Read this file before building any component in this group. Spec format, customization (`className`), and universal requirements: `.cursor/rules/ui-components.mdc`.

| Component | Anatomy / variants | Behavior & states | Mobile · Tablet · Desktop |
|-----------|--------------------|-------------------|---------------------------|
| **Image** | `Image` with `aspect` (1:1, 4:3, 16:9), `fit` (cover/contain), radius, lazy + `srcset/sizes`, blur/skeleton placeholder, error fallback, `alt` required | Lightbox optional; no layout shift | Sizes per class |
| **Slides** | Carousel/slideshow: slides, arrows, dots, thumbnails, swipe, loop; hero variant | Keyboard, focus-visible controls, autoplay off (or paused on hover/focus/reduced motion), lazy off-screen slides, `aria-roledescription="carousel"` | Mobile: 1 slide + swipe + dots · Tablet: 2 peek · Desktop: arrows + multi-slide |
| **Player (play)** | Video/audio: play/pause, seek, time, volume, speed, captions, fullscreen, picture-in-picture, poster; playlist optional | Buffering/error states, remembers position, never autoplays with sound, keyboard (Space, ←/→, M, F) | Mobile: tap controls, native fullscreen · Desktop: hover controls, keyboard |
| **Camera** | Capture photo/video via `getUserMedia`/`input capture`; preview, retake, flip camera, flash, crop; permission + denied + no-camera states; file-picker fallback | Explicit permission prompt copy; stops tracks on unmount; size/type limits (`validation.mdc`); upload progress | Mobile: full-screen capture with bottom controls · Desktop: modal with webcam or file picker |
| **Chart (graph)** | Line · bar · area · pie/donut · sparkline; legend, tooltip, axis; theme colors; one library per project | Responsive container, skeleton, empty, table fallback, `aria-label` + data summary, colors distinguishable without hue alone | Mobile: simplified, one chart per view, horizontal scroll for many points · Desktop: full with legend/hover |
| **Upload** | see `forms.mdc` | — | — |
| **Gallery / Media grid** | Uniform or masonry grid, selection mode, opens Lightbox | Lazy, aspect-ratio boxes, multi-select toolbar | 2 · 3 · 4–5 columns |
| **QR / Barcode** | QR generator (with download/share) · scanner via camera with torch + manual entry fallback | Permission states, decode errors, contrast-safe render | Mobile: full-screen scanner · Desktop: generator, upload-image scan |
| **Avatar upload & crop** | Pick/camera → crop (circle/square) → preview → save | Size/type limits, zoom slider, keyboard nudge | Mobile: full-screen crop · Desktop: modal |
