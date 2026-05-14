# English Land — Adventure Quest — Mission Stars

Cartilla pedagógica digital para docentes de inglés, grado tercero de básica primaria. Propuesta de gamificación fundamentada en el aprendizaje significativo de Bruner.

**Autor:** Manuel Vega — Especialización en Práctica Pedagógica.

## Estructura

```
index.html                         Pagina principal (cartilla + hub de juegos)
juego.html                         Estructura del minijuego Runner (canvas + UI)
games.html                         Entrada secundaria del hub de juegos
js/                                Scripts de juegos y logica interactiva
assets/characters/                 Personajes de English Land
assets/story/                      Imagenes del cuaderno e historia
assets/people/                     Autores
assets/resources/                  Recursos visuales para juegos y actividades
assets/resources/noto-icons/       Iconos SVG locales de Noto Emoji
assets/previews/                   Previsualizaciones de packs
assets/source-packs/               Imagenes fuente no usadas directamente por la pagina
docs/                              Documentos de apoyo y versiones finales en Markdown
docs/integrations/google-sheets/   Apps Script y contrato de eventos
fondos/                            Parallax de los 4 niveles
netlify.toml                       Configuracion de deploy
_headers                           Cache + seguridad para Netlify
_redirects                         Fallback de rutas para Netlify
```

## Juegos

`js/practice-games.js` contiene el hub de práctica:

- Word Bingo Quest con modos de llamada por palabra, definición o frase contextual.
- Simon Says 6 con 24 comandos por nivel.
- Memory Quest con parejas de palabra, definición, frase, prompt y pregunta.
- Sentence Builder con 30 frases por nivel y modos `order`, `missing` y `choose`.
- Analíticas locales exportables para el docente.

## Créditos de assets

El hub de juegos usa iconos SVG locales de [Noto Emoji](https://github.com/googlefonts/noto-emoji) para unificar visualmente Word Bingo Quest y Simon Says 6. Noto Emoji es un proyecto open source de Google Fonts; su README indica que las fuentes están bajo SIL Open Font License 1.1 y que la mayoría de recursos de imagen están bajo Apache License 2.0.

## Seguridad

El despliegue en Netlify aplica cabeceras de seguridad desde `netlify.toml` y `_headers`: CSP, `nosniff`, política de permisos, `frame-ancestors` y cache diferenciada para assets. El iframe del Runner usa `sandbox` con permisos mínimos para ejecutar el juego local.

## Correr localmente

Como el juego usa `fetch` y se carga via `<iframe>`, hay que servirlo por HTTP. Abrir `index.html` con `file://` no funciona.

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node
npx serve .
```

Luego abre <http://localhost:8000>.

## Deploy a Netlify

1. Sube esta carpeta a un repo de GitHub.
2. En Netlify: **Add new site → Import from Git → selecciona el repo**.
3. Build command: *(vacío)*. Publish directory: `.`
4. Deploy.

Netlify detecta `netlify.toml`, `_headers` y `_redirects` automáticamente.

## Preparacion para GitHub

La raiz del repositorio ya esta organizada para publicacion estatica. Antes de subir:

```bash
git init
git add .
git commit -m "Prepare English Adventure Quest site"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

Las carpetas `_dev/` y `.claude/` estan excluidas por `.gitignore` porque son material de trabajo local.

## Deploy a GitHub Pages

1. Settings → Pages → Source: `main` / `(root)`.
2. La página queda en `https://<usuario>.github.io/<repo>/`.

Nota: GitHub Pages no respeta `_headers` ni `_redirects` (son de Netlify), pero la cartilla funciona igual porque no depende de ellos.





