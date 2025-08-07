# Distribuciones Pereira

¡Bienvenido al repositorio de la página web de Distribuciones Pereira! Este proyecto es una aplicación web moderna construida con React, TypeSript y Vite.

## ✨ Características Principales

- **Interfaz de Usuario Moderna:** Construida con **React 19** para una interfaz de usuario dinámica y reactiva.
- **Desarrollo Rápido:** Utiliza **Vite** como herramienta de construcción, ofreciendo un servidor de desarrollo eficiente.
- **Tipado Estático:** Desarrollado con **TypeScript** para un código más robusto, legible y fácil de mantener, minimizando posibles errores.
- **Enrutamiento Eficiente:** Gestionado con **React Router DOM v7**, permitiendo navegación declarativa entre las distintas secciones de la página.
- **Formularios Potentes y Validados:** Implementación de formularios con **React Hook Form** para un manejo de estado eficiente y **Zod** para una validación de esquemas robusta y segura.
- **Componentes Reutilizables:** Una arquitectura basada en componentes que promueve la reutilización y la consistencia en toda la aplicación.
- **Carga Perezosa (Lazy Loading):** Las imágenes y las páginas se cargan de forma perezosa para optimizar el rendimiento y la velocidad de carga inicial.
- **Manejo de Errores:** Implementación de `Error Boundaries` para capturar y manejar errores en cada una de las paginas, evitando que toda la aplicación se bloquee.
- **Calidad de Código:** Se utiliza **ESLint** para mantener un estilo de código consistente y detectar problemas potenciales.

## 🚀 Scripts Disponibles

En el `package.json`, encontrarás los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila y optimiza la aplicación para producción en el directorio `dist/`.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
- `npm run preview`: Inicia un servidor local para previsualizar la versión de producción.
- `npm run deploy`: Despliega la aplicación en GitHub Pages.

## 🛠️ Dependencias Clave

### Producción

- **`react`**: Biblioteca principal para construir la interfaz de usuario.
- **`react-dom`**: Proporciona los métodos específicos del DOM para React.
- **`react-router-dom`**: Para el enrutamiento del lado del cliente.
- **`react-hook-form`**: Para la gestión de formularios.
- **`@hookform/resolvers`**: Para usar Zod con React Hook Form.
- **`zod`**: Para la validación de esquemas.
- **`@emailjs/browser`**: Para el envío de correos electrónicos desde el cliente.
- **`react-icons`**: Proporciona una gran variedad de iconos como componentes de React.
- **`react-imask`**: Para la creación de máscaras de entrada.

### Desarrollo

- **`vite`**: Herramienta de construcción y servidor de desarrollo.
- **`@vitejs/plugin-react`**: Plugin oficial de Vite para proyectos de React.
- **`typescript`**: Superset de JavaScript que añade tipado estático.
- **`eslint`**: Herramienta para el análisis estático del código.
- **`gh-pages`**: Para desplegar en GitHub Pages.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar la navegación y el mantenimiento:

```
/src
|-- /assets
|-- /Components  # Componentes reutilizables
|-- /Context     # Contexto de React
|-- /Hooks       # Hooks personalizados
|-- /Pages       # Componentes de página
|-- /Types       # Tipos y esquemas de TypeScript
|-- App.tsx
|-- main.tsx
```
