# Portafolio — DS DigitalCode

Ejemplos de páginas web para consultorios y negocios locales (nutrición, psicología, odontología, veterinaria, abogados, estéticas, barberías, tatuajes).

- Entrada única: `index.html` (el portafolio)
- Cada ejemplo: `/<giro>/<n>/` (p. ej. `/psicologia/1/`)
- Motor compartido: `assets/` (`core.js`, `core.css`, `giros.js`)
- Todo es demostración: datos ficticios y botones de demo.

Contacto: WhatsApp +52 55 8563 7134

## Publicar
Settings → Pages → Branch `main` / root.
URL: https://dulcesanchez-design.github.io/portafolio/

## Ejemplos de salud, belleza y escuelas deportivas

20 páginas nuevas (una por giro, carpeta `<giro>/1/`) con 5 temas visuales (`assets/themes.css`: aura, clínico, cristal, mono, noche) y efectos en `assets/fx.js`. Las escuelas y ligas incluyen un panel de ejemplo (asistencia, rendimiento, cobranza y calendario) definido en `core.js` (`panel`). El contenido está en `assets/giros2.js`, generado con `tools/gen2.py`.
