[English Version](#english)

# 📚 Shelf Space – Biblioteca Digital

<div align="center">
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" />
  </a>
  <a href="https://redux.js.org/">
    <img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat-square" alt="Redux" />
  </a>
  <a href="https://styled-components.com/">
    <img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white&style=flat-square" alt="Styled Components" />
  </a>
  <a href="https://testing-library.com/">
    <img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" alt="Jest + RTL" />
  </a>
  <a href="https://alex0-8.github.io/Shelf_Space/">
    <img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" alt="Live demo" />
  </a>
</div>

---

**Shelf Space** es una aplicación web sencilla y agradable que te ayuda a descubrir libros y organizar tu viaje de lectura. Imagina tener una estantería digital donde puedes buscar cualquier título, marcar si lo estás leyendo, si te encantó o si quieres leerlo más adelante, todo desde tu teléfono o computadora.

Funcionando como un gestor personal de biblioteca: buscas libros (obteniendo datos de una base de datos libre en línea), los agregas a tu lista con etiquetas como "Leyendo ahora", "Favorito", "Leído" o "Por leer", y navegas tu colección en cualquier momento.

🔗 **Demo en vivo** → [Shelf Space](https://alex0-8.github.io/Shelf_Space/)

*(Consejo: busca un libro como "Harry Potter" para ver cómo funciona. Tu lista se guarda automáticamente en el dispositivo.)*

<div align="center">
  <img width="300" alt="ShelfSpace_MyShelf" src="https://github.com/user-attachments/assets/9983f8b7-325e-4088-af4e-7de859767c70" />
  
  <img width="500" alt="ShelfSpace_Home" src="https://github.com/user-attachments/assets/31811885-f6bf-4aa5-9f42-b0920389bf47" />
</div>

---

## ✨ Características principales

- **Búsqueda de libros**: escribe un título o autor para obtener resumen, portadas y más desde una API pública
- **Biblioteca personal**: agrega libros a tu estante y etiquétalos:
  - 📖 Leyendo ahora
  - ❤️ Favorito
  - ✅ Leído
  - ⏳ Por leer
  - ¡y más!
- **Gestión sencilla**: edita o elimina libros cuando quieras; la lista se mantiene aún cerrando el navegador
- **Adaptable a móviles**: funciona bien en teléfonos, tablets y computadoras sin necesidad de hacer zoom
- **Fiable y accesible**: maneja errores (libro no encontrado) y cuenta con pruebas para garantizar fluidez

---

## 🛠️ Stack Tecnológico

| Categoría          | Tecnología / Herramienta                          | Notas                                      |
|--------------------|---------------------------------------------------|--------------------------------------------|
| Framework          | React                                         | Hooks + componentes funcionales            |
| Estado             | Redux Toolkit                                     | Store centralizado y slices                |
| Estilos            | styled-components                                | Tema central y estilos encapsulados       |
| Formularios        | Manejados con componentes controlados            | Validación manual sencilla                 |
| HTTP               | Axios                                             | Peticiones a API pública de libros        |
| Routing            | React Router                                   | Navegación entre pantallas                 |
| Testing            | Jest + React Testing Library + jest-dom           | Cobertura en lógica y componentes UI       |
| Build & Deploy     | Create React App + gh-pages                       | Publicación automática en GitHub Pages     |

---

## 🔥 Retos enfrentados y cómo los resolví

| Reto                                          | Solución aplicada                                                                 | Impacto / Aprendizaje                              |
|-----------------------------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------|
| Integración con API de libros pública         | Configuré Axios con baseURL y manejo de errores; caché local en sessionStorage   | Respuestas rápidas y UX estable                    |
| Sincronizar estado global con localStorage    | Usé middleware personalizado para guardar el store en cada cambio importante    | Persistencia automática sin librerías extras       |
| Tests de flujos asíncronos                    | Simulé llamadas con jest.mock y user-event para interacciones completas         | Cobertura confiable del comportamiento real       |
| Diseño responsive                             | Flexbox + media queries en styled-components, foco en mobile-first             | UI adaptable en todos los dispositivos             |
| Manejo de rutas 404/estado no encontrado      | Implementé página de error y alertas sencillas                                 | Mejor feedback para búsquedas fallidas            |

---

## 🚀 Cómo empezar

### 1. ¿Qué necesito tener instalado?

- **Node.js** 16+  
  → [Descargar](https://nodejs.org/)

### 2. Pasos para verlo en tu computadora

1. Clona el repositorio  
   ```bash
   git clone https://github.com/Alex0-8/Shelf_Space.git
   cd Shelf_Space
   ```
2. Instala las dependencias
   ```bash
   npm install
   ```
3. Inicia la aplicación
   ```bash
   npm start
   ```
→ Se abrirá en http://localhost:3000 en tu navegador

Comandos útiles

```bash
  # Desarrollo
  npm start

  # Pruebas interactivas
  npm test

  # Cobertura de tests
  npm run test:coverage

  # Generar build de producción
  npm run build
```
---

# 🛠️ Posibles futuras Mejoras

- [ ] Mejorar el estilizado
- [ ] Añadir animaciones suaves con framer motion

---

# 📄 Licencia
Siéntete libre de usar, modificar y aprender de este proyecto.
Última actualización importante: 1 de Marzo de 2026
¡Gracias por visitar Shelf Space!

---

## English

# 📚 Shelf Space – Digital Library

<div align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" /></a>
  <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat-square" alt="Redux" /></a>
  <a href="https://styled-components.com/"><img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white&style=flat-square" alt="Styled Components" /></a>
  <a href="https://testing-library.com/"><img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" alt="Jest + RTL" /></a>
  <a href="https://alex0-8.github.io/Shelf_Space/"><img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" alt="Live demo" /></a>
</div>

---

**Shelf Space** is a simple, pleasant web app that helps you discover books and organize your reading journey. Imagine having a digital shelf where you can search any title, mark if you're reading it, loved it, or want to read later—right from your phone or computer.

Working like a personal library manager: search for books (fetching data from a public online database), add them to your list with labels like "Reading now", "Favorite", "Read" or "To-Read", and browse your collection anytime.

🔗 **Live demo** → [Shelf Space](https://alex0-8.github.io/Shelf_Space/)

*(Tip: search for a book such as "Harry Potter" to see it in action. Your list saves automatically in the device.)*

<div align="center">
  <img width="300" alt="ShelfSpace_MyShelf" src="https://github.com/user-attachments/assets/9983f8b7-325e-4088-af4e-7de859767c70" />
  
  <img width="500" alt="ShelfSpace_Home" src="https://github.com/user-attachments/assets/31811885-f6bf-4aa5-9f42-b0920389bf47" />
</div>

---

## ✨ Key Features

- **Book search**: enter a title or author to get summaries, covers and more from a public API
- **Personal library**: add books to your shelf and tag them:
  - 📖 Reading Now
  - ❤️ Favorite
  - ✅ Read
  - ⏳ To-Read
  - and more!
- **Easy management**: edit or remove books whenever you like; list persists across sessions
- **Mobile‑friendly**: works nicely on phones, tablets and desktops without zooming
- **Reliable and accessible**: handles errors (book not found) and includes tests for smooth UX

---

## 🛠️ Tech Stack

| Category          | Technology / Tool                          | Notes                                      |
|-------------------|---------------------------------------------|--------------------------------------------|
| Framework         | React                                   | Hooks + functional components              |
| State             | Redux Toolkit                               | Central store and slices                   |
| Styling           | styled-components                          | Central theme and encapsulated styles      |
| Forms             | Controlled components                       | Simple manual validation                   |
| HTTP              | Axios                                       | Requests to public book API                |
| Routing           | React Router                             | Screen navigation                          |
| Testing           | Jest + React Testing Library + jest-dom     | Coverage on logic and UI components        |
| Build & Deploy    | Create React App + gh-pages                 | Auto-publish to GitHub Pages               |

---

## 🔥 Challenges Faced and Solutions

| Challenge                                   | Applied Solution                                                       | Impact / Learning                             |
|---------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------|
| Integrating with public books API           | Configured Axios with baseURL and error handling; local cache via sessionStorage | Faster responses and stable UX               |
| Synchronizing global state with localStorage| Used custom middleware to persist store on key updates                | Automatic persistence without extra libraries|
| Testing asynchronous flows                  | Mocked calls with jest.mock and user-event for complete interaction flows | Reliable coverage of real behavior           |
| Responsive design                           | Flexbox + media queries inside styled-components, mobile-first focus  | UI adapts across all devices                  |
| Handling 404/not-found states               | Implemented error page and simple alerts                              | Better feedback for failed searches          |

---

## 🚀 Getting Started (for beginners)

### 1. What do I need installed?

- **Node.js** 16+ (18+ recommended)  
  → [Download](https://nodejs.org/)

### 2. Steps to run it on your machine

1. Clone the repo  
   ```bash
   git clone https://github.com/Alex0-8/Shelf_Space.git
   cd Shelf_Space
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the app
   ```bash
   npm start
   ```
→ It will open at http://localhost:3000

Useful commands

```bash
  # Development
  npm start

  # Run tests
  npm test

  # View coverage
  npm run test:coverage

  # Build for production
  npm run build

  # Publish to GitHub Pages
  npm run deploy
```
---

# 🛠️ Possible Future Improvements

- [ ] Improve styling
- [ ] Add smooth animations with Framer Motion

---

# 📄 License
Feel free to use, modify, and learn from this project.
Last important update: 1 March 2026
Thank you for visiting Shelf Space!
