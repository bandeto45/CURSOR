# Shortcut aliases in other languages

> Examples only — the AI infers intent from any language, mix, slang, or typo. Shortcut table and rules: `.cursor/rules/shortcuts.mdc`.

| Intent (key) | Filipino / Taglish | Cebuano | Spanish | English |
|--------------|--------------------|---------|---------|---------|
| Continue (`.go`) | ituloy mo · tuloy · next na | ipadayon · sunod na | continúa · sigue | continue · next |
| Status (`.st`) | kumusta na · ano na status · nasaan na tayo | unsa na ang status · asa na ta | estado · cómo vamos | status · where are we |
| Build screen/endpoint (`.b` `.e` `.u`) | gawin mo · buuin mo · gawa ka ng… | buhata · himoa | construye · haz | build · make |
| Wire to API (`.w`) | ikonekta sa API · i-wire na | ikonektar sa API | conecta a la API | wire up · connect to API |
| Fix (`.fix`) | ayusin mo · may bug sa… · sira ang… | ayohon · naay bug sa… | arregla · hay un bug en… | fix · bug in… |
| Change (`.chg`) | baguhin · palitan · gawing… | usba · ilisi | cambia · modifica | change · update |
| Add feature (`.add`) | dagdagan ng… · gusto ko ng… | dugangi og… · gusto ko og… | agrega · añade | add · I want… |
| You decide (`.yd`) | ikaw na bahala · ikaw na · bahala ka | ikaw na bahala | tú decides · lo que creas mejor | you decide · your call |
| Accept (`.ok`) | sige · oo · ayos · tama | sige · oo · okay | vale · de acuerdo · sí | ok · yes · looks good |
| Reject (`.no`) | hindi · wag · ayoko nyan | dili · ayaw | no · mejor no | no · not that |
| Alternatives (`.alt`) | ano pa ibang option · may iba pa ba | unsa pa ang lain | otras opciones | other options |
| Phase exit (`.px`) | tapos na ang phase · i-close na natin | human na ang phase | cierra la fase | close the phase |
| Deploy (`.dep`) | i-deploy sa staging/production | i-deploy sa staging/production | despliega a staging/producción | deploy to staging/production |
| Brief reply (`.brief`) | sagot na maikli lang · wag mo nang ulitin | mubo ra ang tubag | responde breve | short answer only |
| Error console (`.dbg`) | buksan/isara ang error console · may error, tingnan mo ang log | buksi/sirad-i ang error console · tan-awa ang log | activa/desactiva la consola de errores | turn the error console on/off · look at this error log |
| Guide (`.g`) | paano gamitin · tips | unsaon paggamit | cómo se usa · consejos | how to use · tips |

## Notes
- **Confirmation** words (sige, oo, dale, vale…) count as a yes **only** when replying to a specific question the AI just asked.
- Mixed sentences work: `.b R-07 pero gawing mas compact sa mobile` → build R-07, record the compact-mobile change (`.chg` semantics: update `route-layouts` first).
- Non-Latin scripts and other languages are understood the same way; there is no need to add them here.
