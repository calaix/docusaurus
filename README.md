# 🦖 Calaix - Documentació amb Docusaurus

Aquest repositori conté el lloc web de documentació del projecte **Calaix**, construït utilitzant [Docusaurus](https://docusaurus.io/) (versió 3), un generador de llocs web estàtics modern i optimitzat per a documentació tècnica i projectes de codi obert.

---

## 📋 Taula de continguts

- [Requisits previs](#-requisits-previs)
- [Instal·lació](#-instal·lació)
- [Desenvolupament local](#-desenvolupament-local)
- [Estructura del projecte](#-estructura-del-projecte)
- [Com afegir contingut](#-com-afegir-contingut)
- [Construcció i producció](#-construcció-i-producció)
- [Desplegament](#-desplegament)
- [Contribució](#-contribució)
- [Llicència](#-llicència)

---

## ⚙️ Requisits previs

Abans de començar, assegura't de tenir instal·lat al teu sistema:

- **Node.js**: versió 18.0.0 o superior ([Descarregar Node.js](https://nodejs.org/))
- Un gestor de paquets com **npm** (inclòs amb Node.js), **yarn** o **pnpm**
- **Git** per al control de versions

---

## 🚀 Instal·lació

1. Clona aquest repositori a la teva màquina local:

   ```bash
   git clone https://github.com/calaix/docusaurus.git
   cd docusaurus
   ```

2. Instal·la les dependències del projecte:

   ```bash
   npm install
   # o si utilitzes yarn / pnpm:
   # yarn install
   # pnpm install
   ```

---

## 💻 Desenvolupament local

Per iniciar el servidor de desenvolupament local i veure els canvis en temps real:

```bash
npm start
```

Aquest comandament executa el servidor local i obre una pestanya al navegador a `http://localhost:3000`. La majoria de canvis que facis es reflectiran immediatament sense necessitat de reiniciar el servidor (*hot reloading*).

---

## 📂 Estructura del projecte

L'estructura principal del repositori és la següent:

```text
docusaurus/
├── blog/                  # Articles del blog (opcional)
├── docs/                  # Fitxers Markdown / MDX de la documentació
├── src/
│   ├── css/               # Estils personalitzats (custom.css)
│   ├── pages/             # Pàgines React personalitzades (ex. pàgina d'inici)
│   └── components/        # Components React reutilitzables
├── static/                # Fitxers estàtics (imatges, favicon, PDF, etc.)
├── docusaurus.config.js   # Fitxer principal de configuració de Docusaurus
├── sidebars.js            # Configuració de la barra lateral de navegació
├── package.json           # Dependències i scripts del projecte
└── README.md              # Fitxer d'informació del projecte
```

---

## 📝 Com afegir contingut

### Crear un nou document

1. Afegeix un nou fitxer `.md` o `.mdx` dins de la carpeta `docs/`.
2. Inclou la capçalera (*front matter*) a l'inici del fitxer:

   ```markdown
   ---
   id: el-meu-document
   title: Títol del Document
   sidebar_label: Títol Curt
   sidebar_position: 1
   ---

   Aquest és el contingut del document escrit en format Markdown.
   ```

3. Si utilitzes una estructura de carpetes, pots organitzar els fitxers en subdirectoris dins de `docs/`. Docusaurus generarà la jerarquia automàticament.

---

## 🏗️ Construcció i producció

Per generar els fitxers estàtics optimitzats per a entorns de producció:

```bash
npm run build
```

Aquest comandament generarà una carpeta `build/` amb tot el lloc web compilat.

Per provar la versió de producció localment abans de desplegar-la:

```bash
npm run serve
```

---

## 🌐 Desplegament

Pots desplegar aquest projecte fàcilment a diferents serveis:

- **GitHub Pages**:
  ```bash
  GIT_USER=<el-teu-usuari> USE_SSH=true npm run deploy
  ```
- **Vercel / Netlify**: Enllaça el repositori de GitHub a la plataforma. Defineix el comandament de construcció com a `npm run build` i el directori de sortida com a `build`.

---

## 🤝 Contribució

Les contribucions són molt benvingudes. Si vols col·laborar:

1. Fes un **Fork** d'aquest repositori.
2. Crea una nova branca per a la teva funcionalitat (`git checkout -b feature/nova-seccio`).
3. Guarda els teus canvis i fes un commit (`git commit -m 'Afegida nova secció a la documentació'`).
4. Puja la branca al teu repositori (`git push origin feature/nova-seccio`).
5. Obre una **Pull Request** cap a la branca principal d'aquest repositori.

---

## 📄 Llicència

Aquest projecte està sota la llicència [MIT](LICENSE).
