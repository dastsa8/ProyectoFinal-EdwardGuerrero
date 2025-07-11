🛒 Tienda React Edward

Proyecto de tienda online creado con **React** como parte del curso de **React JS de Coderhouse**. La aplicación permite explorar productos, ver sus detalles, agregarlos al carrito y realizar una simulación de compra. Todo en una interfaz moderna y responsive.

---

## 🚀 Tecnologías utilizadas

- **React** – Para construir la interfaz de usuario.
- **React Router DOM** – Para la navegación entre vistas.
- **Firebase (Firestore)** – Para la gestión de productos desde una base de datos.
- **Bootstrap / React-Bootstrap** – Para el diseño responsivo y rápido desarrollo visual.
- **React Icons** – Para iconografía moderna.
- **Vite** – Herramienta de desarrollo y build eficiente.
- **ESLint** – Para mantener la calidad y consistencia del código.

---

## ⚙️ Funcionalidades

- Carga dinámica de productos desde **Firestore**.
- Manejo de un **carrito de compras**, con contador, resumen y vaciado.
- Navegación fluida entre vistas mediante rutas dinámicas.
- Simulación del proceso de compra (checkout).
- Interfaz completamente responsive.
- Manejo de rutas inexistentes mediante una página **404 NotFound**.
- Componentes organizados y reutilizables con estilos propios.

---

## 📂 Estructura del proyecto
```
src/
├── assets/             # Recursos estáticos (imágenes, íconos, etc.)
├── components/         # Componentes funcionales y visuales de la app
│   ├── Cart.jsx
│   ├── CartContext.jsx
│   ├── CartWidget.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── NavBar.jsx
│   └── NotFound.jsx
│
├── css/                # Estilos específicos de cada componente
│   ├── App.css
│   ├── CartWidget.css
│   ├── Checkout.css
│   ├── index.css
│   ├── ItemCount.css
│   ├── ItemDetailContainer.css
│   └── ItemListContainer.css
│
├── firebase/           # Configuración y conexión a Firebase
│   ├── config.js
│   └── db.js
│
├── App.jsx             # Componente raíz de la aplicación
├── Index.js            # Punto de entrada principal
└── main.jsx            # Renderiza la app en el DOM
```

## 📦 Scripts disponibles

| Comando           | Descripción                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Inicia la app en modo desarrollo.        |
| `npm run build`   | Compila el proyecto para producción.     |
| `npm run preview` | Previsualiza la build local.             |
| `npm run lint`    | Ejecuta el linter para revisar el código.|

---
