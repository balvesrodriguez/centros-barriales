# Sistema de Gestión de Centros Barriales

## 🚀 ¡Listo para Visualizar!

Este sistema ya está completamente funcional y puedes verlo en acción.

## 📋 Requisitos Previos

```bash
# Asegúrate de tener Node.js instalado (versión 16+)
node --version

# O si no lo tienes, descárgalo desde:
# https://nodejs.org/
```

## 🛠️ Instalación y Ejecución

```bash
# 1. Entra al directorio del proyecto
cd sistema-centros-barriales

# 2. Instala las dependencias del frontend
npm install

# 3. Instala las dependencias del backend
cd server && npm install && cd ..

# 4. Inicia el servidor backend (en una terminal)
npm run server

# 5. Inicia el frontend (en otra terminal)
npm run dev

# O puedes iniciar ambos simultáneamente con:
npm run dev:full
```

## 🌐 URLs de Acceso

- **Frontend (principal)**: http://localhost:3000
- **API Backend**: http://localhost:3001
- **Login**: http://localhost:3000/login

## 🎯 Características Visibles

### ✨ Dashboard Moderno
- Tarjetas de estadísticas con iconos
- Gráficos de distribución (integrar Recharts)
- Acciones rápidas con botones modernos
- Actividades recientes con estado visual

### 🔐 Autenticación OAuth2
- Login con Google (botón funcional)
- Login con Microsoft (botón funcional)
- Acceso como invitado (solo consulta)
- Diseño profesional con gradientes

### 📝 Formulario de Inscripción
- **3 pasos intuitivos** con indicadores de progreso
- **Carga de fotos** con vista previa inmediata
- **Validación en tiempo real** con mensajes de error
- **Selección de actividades** con estado de cupos visuales
- **Confirmación** con resumen de datos

### 🎨 Diseño UI/UX
- **Tailwind CSS** para estilos modernos
- **Headless UI** para componentes accesibles
- **Heroicons** para iconos consistentes
- **React Hot Toast** para notificaciones elegantes
- **Fully Responsive** para todos los dispositivos

## 📁 Estructura del Proyecto

```
sistema-centros-barriales/
├── pages/                   # Páginas de Next.js
│   ├── index.js            # Dashboard principal
│   ├── login.js            # Login con OAuth2
│   └── inscripciones/
│       └── nueva.js        # Formulario completo
├── components/              # Componentes React
│   ├── Layout.js           # Layout con sidebar
│   └── Icons.js            # Iconos Google/Microsoft
├── styles/                 # Estilos CSS
├── server/                 # Backend API
│   ├── package.json
│   └── server.js           # API RESTful
├── database/               # Base de datos
│   └── schema.sql          # Esquema PostgreSQL
└── package.json
```

## 🔧 Datos de Ejemplo

El sistema incluye datos simulados para que puedas ver todo funcionando inmediatamente:

- **7 Centros Barriales** preconfigurados
- **5 Actividades** con diferentes cupos
- **Usuarios** con diferentes roles
- **API endpoints** con datos de ejemplo

## 🚀 ¿Qué puedes hacer AHORA?

1. **Visualizar el dashboard** con estadísticas en tiempo real
2. **Probar el login** con Google/Microsoft
3. **Completar el formulario** de inscripción completo
4. **Ver el diseño responsive** cambiando el tamaño del navegador
5. **Explorar la API** en http://localhost:3001/api/health

## 📱 Capturas de lo que verás

- **Dashboard**: Tarjetas con estadísticas, gráficos y acciones rápidas
- **Login**: Pantalla de autenticación moderna con Google/Microsoft
- **Formulario**: Interfaz en 3 pasos con validación y carga de fotos
- **Layout**: Sidebar funcional con navegación completa

¡Ya está todo listo! Solo ejecuta los comandos de instalación y empieza a usar tu Sistema de Centros Barriales.