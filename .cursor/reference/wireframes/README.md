# Wireframes (generated at install)

The pattern diagrams live in `../wireframe-patterns.md`. During install, after `route-layouts.mdc` is written, add one file per route group:

`public.md` · `auth.md` · `app.md` · `admin.md` — only the groups this concept has.

Each route is a short delta:

```
### R-nn <path> — <Page name>
**Inherits:** <pattern name> (`wireframe-patterns.md` §n)

<ASCII: mobile · tablet · desktop, only where this route differs>

- Photo:
- Icons:
- Buttons:
- Menu:
- Sections, in order:
```

Do not redraw the whole pattern. Do not invent component names. P2 builds the screen from this diagram plus the route block.
