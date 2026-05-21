# Motorsight

Proyecto demo: marketplace de vehículos + panel interno para Marketing/Ventas.

Stack:
- HTML5, CSS3
- Bootstrap 5
- JavaScript ES6+
- Vue 3 (Composition API)
- Vue Router
- Axios
- Vite
- JSON Server (mock API)

Instalación y ejecución (desarrollo):

1. Instalar dependencias:

```bash
npm install
```

2. Levantar json-server (mock API):

```bash
npm run json-server
# por defecto corre en http://localhost:3000
```

3. Levantar la app (Vite):

```bash
npm run dev
```

Endpoints mock (json-server):
- `GET /vehicles`, `GET /vehicles/:id`, `POST /vehicles`, `PUT /vehicles/:id`, `DELETE /vehicles/:id`
- `GET /campaigns`, `POST /campaigns`, etc.
- `GET /leads`, `POST /leads`

Despliegue en Netlify:
- En Netlify setear `build` como `npm run build` y `publish` a `dist/`.
- Añadir el archivo `_redirects` en `public/` con:

```
/*    /index.html   200
```

Notas de arquitectura y buenas prácticas:
- Componentes modulares en `src/components`.
- Servicios API en `src/services` (axios) para separar llamadas a backend.
- Rutas en `src/router`.
- Diseño responsive con Bootstrap.
- `db.json` sirve como fuente para `json-server`.

Puedes extender este proyecto añadiendo autenticación, paginación y pruebas.
