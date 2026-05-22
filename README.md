# 🏎️ Motorsight - Marketplace Renault

**Marketplace de vehículos Renault + Panel interno para Marketing/Ventas**

## 📋 Descripción

Motorsight es una aplicación web moderna construida con **Vue 3 + Vite** en el frontend y **JSON Server** como API mock. Incluye un marketplace público y un panel administrativo para gestionar campañas de marketing y ventas.

### ✨ Características

- **Marketplace público** con filtrado avanzado de vehículos Renault
- **Panel de administración** para marketing y ventas
- **Gestión de campañas** con presupuesto y cronograma
- **Sistema de leads** para capturar consultas de clientes
- **Responsive design** con Bootstrap 5
- **API REST** completa con JSON Server

---

## 🚀 Instalación y Setup

### Prerequisitos
- Node.js 16+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/LucianoCMInteligencia/Motorsight.git
cd Motorsight
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Crear archivo .env** (opcional, usa valores por defecto)
```bash
cp .env.example .env
```

---

## 🏃 Ejecución Local

### Terminal 1 - Frontend (Vite Dev Server)
```bash
npm run dev
```
Accede a: **http://localhost:5173**

### Terminal 2 - API (JSON Server)
```bash
npm run api
```
API disponible en: **http://localhost:3000**

---

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo Vite |
| `npm run build` | Construye la app para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run api` | Inicia JSON Server en puerto 3000 |
| `npm run api:production` | Inicia API con datos de producción |

---

## 📁 Estructura del Proyecto

```
Motorsight/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── VehicleCard.vue
│   │   ├── FiltersBar.vue
│   │   ├── CampaignForm.vue
│   │   └── DashboardStats.vue
│   ├── views/               # Páginas/vistas
│   │   ├── HomeView.vue
│   │   ├── VehicleDetailView.vue
│   │   ├── CampaignsView.vue
│   │   └── DashboardView.vue
│   ├── services/            # Llamadas a API
│   │   ├── vehiclesApi.js
│   │   └── campaignsApi.js
│   ├── router/              # Enrutamiento
│   │   └── index.js
│   ├── assets/              # Estilos y assets
│   │   └── placeholder.css
│   ├── App.vue              # Componente raíz
│   └── main.js              # Entry point
├── db.json                  # Base de datos JSON Server
├── api/
│   └── db.json             # BD para producción
├── vite.config.js          # Configuración Vite
├── package.json            # Dependencias y scripts
├── index.html              # HTML principal
└── .env.example            # Variables de entorno

```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue 3** - Framework reactivo
- **Vue Router** - Enrutamiento SPA
- **Axios** - Cliente HTTP
- **Bootstrap 5** - UI Framework
- **Vite** - Build tool moderno

### Backend (Mock)
- **JSON Server** - REST API fake para desarrollo

### DevOps
- **Node.js** - Runtime JavaScript
- **npm** - Gestor de paquetes

---

## 🔑 Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
VITE_API_URL=http://localhost:3000
```

---

## 📱 Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Marketplace - Listado de vehículos Renault |
| `/vehicle/:id` | Detalle del vehículo y solicitud de información |
| `/campaigns` | Gestión de campañas (Admin) |
| `/dashboard` | Panel de estadísticas (Admin) |

---

## 📊 Datos de Ejemplo

### Vehículos Renault (db.json)
- Renault Clio - €12,000
- Renault Megane - €18,000
- Renault Captur - €22,000
- Renault Scenic - €25,000
- Renault Koleos - €28,000

### Campañas
- Campaña Primavera Renault (Activa)
- Ofertas Renault KM0 (Pausada)

---

## 🚢 Deployment

### Build para Producción
```bash
npm run build
```

Esto genera la carpeta `dist/` lista para desplegar.

### Upload a Servidor (FileZilla)
1. Comprime carpeta `dist/`
2. Sube vía SFTP/FTP a tu servidor
3. Configura web server para servir `dist/index.html`

### Render (recomendado)
```bash
# Instancia backend en Render
npm install -g json-server
json-server --watch api/db.json --port $PORT
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module 'vue'"
```bash
npm install
```

### API no responde (localhost:3000)
- Verifica que JSON Server esté ejecutándose
- Comprueba que el puerto 3000 no está en uso
- Reinicia el servidor: `npm run api`

### Build fallando
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📝 Notas Importantes

- **CORS**: JSON Server tiene CORS habilitado por defecto
- **Base de datos**: Los cambios en db.json se persisten automáticamente
- **Hot Reload**: Vite soporta HMR para desarrollo rápido
- **Production**: Usa `api/db.json` en lugar de `db.json`

---

## 👨‍💻 Autor

**LucianoCMInteligencia**
- GitHub: [@LucianoCMInteligencia](https://github.com/LucianoCMInteligencia)

---

## 📄 Licencia

Este proyecto es de código cerrado para uso de cliente.

---

## 🎯 Roadmap Futuro

- [ ] Autenticación de usuarios
- [ ] Base de datos PostgreSQL
- [ ] Integración con Stripe
- [ ] Notificaciones por email
- [ ] PWA Support
- [ ] Analytics dashboard

---

**¡Listo para producción! 🚀**
