# Guía Pas a Pas: Instalar y Desplegar Docusaurus en GitHub
Aquesta guia t'ajudarà  des de la creació d'un lloc web amb Docusaurus en la teva màquina  local fins la seva publicació automatitzada a GitHub Pages.
## 1. Prerrequisits
Antes de comenzar, asegúrate de tener instalado en tu sistema:
- Node.js: Versión 20.0 o superior (node -v).
- Git: Para el control de versiones (git --version).
- Una cuenta de GitHub.
## 2. Paso 1: Crear el sitio Docusaurus localmente
- Abre tu terminal en la carpeta donde desees guardar el proyecto y ejecuta el siguiente comando:
``` bash
npx create-docusaurus@latest docusaurus classic
```



- Sustituye docusaurus por el nombre que prefieras para la carpeta de tu proyecto.
- La plantilla classic creará la estructura recomendada con blog y documentación.
- Resolución del error Minimum Node.js version not met:
- Las versiones recientes de Docusaurus requieren Node.js 20+. Si estás usando Node 18, tienes dos opciones:
  - Actualizar Node.js (Recomendado): Usa NVM ejecutando nvm install 20 && nvm use 20, o descarga la versión LTS desde nodejs.org.
  - Usar versión anterior (Alternativa rápida): Ejecuta npx create-docusaurus@3.0.0 docusaurus classic.
Una vez finalizada la instalación, ingresa a la carpeta y prueba el sitio en tu entorno local:

``` bash
cd docusaurus
npm start
```



- Abre tu navegador en http://localhost:3000 para verificar que el sitio carga correctamente. Presiona Ctrl + C en la terminal para detener el servidor local.
## Paso 2: Crear el repositorio en GitHub y Vincularlo
- Ve a GitHub y crea un nuevo repositorio público (ej. docusaurus).
- No lo inicialices con README, .gitignore ni Licencia (Docusaurus ya genera estos archivos).
- Conecta tu proyecto local con el repositorio remoto ejecutando en tu terminal:

```bash 
git init
git add .
git commit -m "Initial commit: Proyecto Docusaurus"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/docusaurus.git
git push -u origin main
```



- (Recuerda cambiar TU_USUARIO y docusaurus por los datos reales de tu repositorio).


# Paso 3: Configurar docusaurus.config.js

- Abre el archivo docusaurus.config.js ubicado en la raíz de tu proyecto y actualiza los siguientes campos clave para GitHub Pages:

``` bash
// docusaurus.config.js
const config = {
  title: 'Mi Sitio de Documentación',
  tagline: 'Documentación construida con Docusaurus',
  favicon: 'img/favicon.ico',

  // Configuración de GitHub Pages
  url: 'https://TU_USUARIO.github.io', // Tu dominio de GitHub Pages
  baseUrl: '/docusaurus/', // El nombre de tu repositorio con barras al inicio y al final

  // Organización o Usuario de GitHub
  organizationName: 'TU_USUARIO', // Tu nombre de usuario de GitHub
  projectName: 'docusaurus', // El nombre de tu repositorio
  trailingSlash: false,

  // ... resto de la configuración
};

module.exports = config;
```



# Paso 4: Despliegue Automático con GitHub Actions (Recomendado)

La forma más eficiente y moderna de desplegar Docusaurus es mediante GitHub Actions.

## A. Crear el archivo de Flujo de Trabajo (Workflow)

- Crea la siguiente estructura de carpetas y archivo en la raíz de tu proyecto: .github/workflows/deploy.yml
- Añade el siguiente contenido al archivo deploy.yml:

 ``` bash 
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```



## B. Activar GitHub Pages en el repositorio
- Entra a tu repositorio en GitHub web.
- Ve a Settings > Pages (en el menú lateral izquierdo).
- En la sección Build and deployment -> Source, selecciona GitHub Actions.
  
## C. Subir los cambios a GitHub

- Guarda los archivos localmente y haz push:

``` bash  
git add .
git commit -m "ci: agregar workflow de GitHub Actions para despliegue"
git push origin main
```


## Paso 5: Verificar la publicación

- Ve a la pestaña Actions en tu repositorio de GitHub para ver el estado de la compilación.
- Una vez que el workflow aparezca con un check verde (✔), tu sitio estará disponible públicamente en:
https://TU_USUARIO.github.io/docusaurus/
** Resumen de Comandos Frecuentes**
  
- Iniciar en desarrollo: npm start
- Compilar para producción: npm run build
- Probar compilación en local: npm run serve
