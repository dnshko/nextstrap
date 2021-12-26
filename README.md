## Folder Structure

```
📦nextstrap
 ┣ 📂.storybook
 ┃ ┣ 📜main.js
 ┃ ┗ 📜preview.js
 ┣ 📂components
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜Button.stories.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Card
 ┃ ┃ ┣ 📜card.stories.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂TextInput
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜text.js
 ┃ ┃ ┗ 📜TextField.stories.jsx
 ┃ ┗ 📜index.js
 ┣ 📂cypress
 ┃ ┣ 📂fixtures
 ┃ ┃ ┗ 📜example.json
 ┃ ┣ 📂integration
 ┃ ┃ ┗ 📂SignUpFrom
 ┃ ┃ ┃ ┗ 📜homepage.spec.js
 ┃ ┣ 📂plugins
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂support
 ┃ ┃ ┣ 📜commands.js
 ┃ ┃ ┗ 📜index.js
 ┣ 📂pages
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜_app.js
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜vercel.svg
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜cypress.json
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

## Getting Started

Run the development server:

```bash
npm i
npm run dev
```

Run the storybook server

```bash
npm run storybook
```

Run the cypress

```bash
npm run cy:open

(or)

npm run cy:cli
```
