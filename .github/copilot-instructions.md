<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is a Vite + React + TypeScript web presentation for the ArquiBlock final report. The site should have clear sections/pages for: Portada e Introducción, Diagnóstico Organizacional (con FODA y análisis sistémico), Fundamentación de la Solución Propuesta (con árboles de decisión y justificación), Propuesta del Sistema de Información SIGOP (con diagramas, casos de uso, bocetos de interfaz, historias de usuario), y Conclusión. Use modern, visually attractive, and easy-to-navigate UI components.

# CONTEXTO DE TRABAJO Y FLUJO
- El contenido real de cada sección se debe cargar desde archivos `.txt` ubicados en `src/content/` (uno por sección: PortadaIntroduccion.txt, Diagnostico.txt, FundamentacionSolucion.txt, SIGOP.txt, Diagramas.txt, Interfaces.txt, HistoriasUsuario.txt, Conclusion.txt, Metodologia.txt).
- Las imágenes de diagramas deben ir en `src/assets/diagramas/` y las de interfaces en `src/assets/interfaces/`.
- El flujo de trabajo es: primero completar los archivos `.txt` con el contenido real, luego poblar las páginas web usando ese contenido.
- Si los archivos `.txt` están incompletos, priorizar la carga y edición de esos archivos antes de continuar con la generación de componentes o páginas.
- Cuando los archivos estén completos, usar su contenido para poblar las secciones web de forma estructurada y profesional.

# DEPLOY EN GITHUB PAGES
- Cuando el contenido y la estructura estén listos, agregar a `package.json` los scripts:
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
- Instalar el paquete gh-pages como devDependency.
- Ejecutar `npm run deploy` para publicar la web en GitHub Pages.
- Verificar que la rama `gh-pages` esté seleccionada como fuente en la configuración de Pages del repositorio.

# NOTA
Si retomas este proyecto, revisa primero los archivos de `src/content/` y espera a que estén completos antes de avanzar con la generación de la web final. Cuando todo esté listo, sigue las instrucciones de deploy para publicar la web.
