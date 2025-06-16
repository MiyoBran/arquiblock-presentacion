# ArquiBlock - Presentación Web del Informe Final

Este proyecto es una presentación web interactiva para el informe final de ArquiBlock, desarrollada con Vite, React y TypeScript.

## Estructura de la Presentación

La web está organizada en las siguientes secciones/páginas:

1. **Portada e Introducción**: Presentación de ArquiBlock y objetivo del trabajo.
2. **Diagnóstico Organizacional**: Contexto, problemáticas, análisis sistémico y FODA.
3. **Fundamentación de la Solución Propuesta**: Árboles de decisión y justificación de la solución elegida.
4. **Propuesta del Sistema de Información SIGOP**: Detalles del sistema, diagramas, casos de uso, bocetos de interfaz e historias de usuario.
5. **Conclusión**: Impacto esperado y reflexiones finales.

## Tecnologías
- Vite
- React
- TypeScript

## Desarrollo
Para iniciar el entorno de desarrollo:

```bash
npm install
npm run dev
```

Luego, abre el navegador en la URL que aparece en la terminal.

---

## Publicación en GitHub Pages

Puedes publicar esta web directamente desde GitHub usando GitHub Pages:

1. Construye el sitio:
   ```bash
   npm run build
   ```
2. Instala el paquete gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Agrega estos scripts a tu `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Ejecuta:
   ```bash
   npm run deploy
   ```
5. En la configuración del repositorio en GitHub, sección **Pages**, selecciona la rama `gh-pages` como fuente.

La web estará disponible en: `https://miyobran.github.io/arquiblock-presentacion/`

---

Este proyecto busca ser visualmente atractivo, moderno y fácil de navegar, ideal para presentaciones académicas.
