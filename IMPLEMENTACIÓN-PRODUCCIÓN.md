# 🚀 GUÍA DE IMPLEMENTACIÓN EN PRODUCCIÓN

## 📋 Requisitos Previos

### 1. Servidor Web
Puedes usar cualquiera de estas opciones:
- **Apache** (Linux/Windows)
- **Nginx** (Linux/Windows)  
- **IIS** (Windows)
- **Hosting compartido** (cPanel/Plesk)
- **VPS/Dedicado**
- **Cloud Hosting** (AWS, Azure, Google Cloud, DigitalOcean)

### 2. Base de Datos
- **PostgreSQL** (recomendado)
- **MySQL** (compatible)
- **SQLite** (para desarrollo/bajo tráfico)

## 🎯 Opción 1: Implementación SIMPLE (Archivos Estáticos)

### Paso 1: Subir archivos
Sube estos archivos a tu hosting:
```
sistema-centros-barriales/
├── login-funcional.html
├── dashboard-funcional.html
├── dashboard-script.js
├── database/
│   └── schema.sql
└── assets/
    ├── css/
    └── images/
```

### Paso 2: Configurar dominio
- Apunta tu dominio al directorio donde subiste los archivos
- Configura el archivo `login-funcional.html` como página de inicio

### Paso 3: Probar
- Visita: `https://tudominio.com/login-funcional.html`
- ¡Listo! Ya está funcionando

---

## 🎯 Opción 2: Implementación con Backend (Recomendada)

### Paso 1: Configurar el Backend

#### Requisitos del servidor:
- Node.js 18+ 
- PostgreSQL 14+
- Nginx/Apache como reverse proxy

#### Instalación:
```bash
# Clonar archivos
git clone <repositorio>
cd sistema-centros-barriales

# Instalar dependencias
npm install
cd server && npm install

# Configurar base de datos
createdb centros_barriales
psql centros_barriales < database/schema.sql

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Iniciar en producción
npm run build
npm start
```

### Paso 2: Configurar Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name tudominio.com;
    
    # Frontend
    location / {
        root /var/www/sistema-centros-barriales/.next;
        try_files $uri $uri/ @next;
    }
    
    location @next {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # API Backend
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Paso 3: Configurar SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tudominio.com
```

---

## 🎯 Opción 3: Hosting en la Nube

### AWS (Amazon Web Services)
1. **S3** para archivos estáticos
2. **EC2** para el backend
3. **RDS** para base de datos PostgreSQL
4. **CloudFront** para CDN
5. **Route 53** para DNS

### Google Cloud Platform
1. **Cloud Storage** para archivos estáticos
2. **Compute Engine** para backend
3. **Cloud SQL** para base de datos
4. **Cloud CDN** para CDN
5. **Cloud DNS** para DNS

### DigitalOcean (Más económico)
1. **Droplet** con Docker
2. **Managed Database**
3. **Spaces** para almacenamiento
4. **Load Balancer**

---

## 🔧 Configuración de Base de Datos

### PostgreSQL Setup
```sql
-- Crear base de datos
CREATE DATABASE centros_barriales;

-- Crear usuario
CREATE USER centros_user WITH PASSWORD 'tu_contraseña_secreta';

-- Dar permisos
GRANT ALL PRIVILEGES ON DATABASE centros_barriales TO centros_user;

-- Importar esquema
\i database/schema.sql
```

### Configuración de conexión
```javascript
// server/config/database.js
module.exports = {
  host: 'localhost',
  database: 'centros_barriales',
  user: 'centros_user',
  password: process.env.DB_PASSWORD,
  port: 5432,
  max: 20, // máximo de conexiones
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};
```

---

## 🔐 Configuración de Seguridad

### 1. Variables de entorno (.env)
```bash
# Database
DB_PASSWORD=tu_contraseña_muy_segura
DB_HOST=localhost
DB_PORT=5432

# JWT Secret
JWT_SECRET=jwt_secret_muy_largo_y_seguro

# OAuth
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret

MICROSOFT_CLIENT_ID=tu_microsoft_client_id
MICROSOFT_CLIENT_SECRET=tu_microsoft_client_secret

# Session
SESSION_SECRET=session_secret_seguro

# CORS
CORS_ORIGIN=https://tudominio.com
```

### 2. HTTPS obligatorio
```javascript
// server/middleware/security.js
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
```

---

## 📊 Monitoreo y Logs

### PM2 (Process Manager)
```bash
# Instalar PM2
npm install -g pm2

# Iniciar aplicación
pm2 start ecosystem.config.js

# Monitorear
pm2 monit

# Logs
pm2 logs
```

### ecosystem.config.js
```javascript
module.exports = {
  apps: [{
    name: 'centros-barriales',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
```

---

## 🔄 Backups Automáticos

### PostgreSQL Backup Script
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/centros_barriales"
DB_NAME="centros_barriales"

mkdir -p $BACKUP_DIR

pg_dump $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Mantener solo los últimos 7 días
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete
```

### Cron para backups diarios
```bash
# Editar crontab
crontab -e

# Agregar línea (todos los días a las 2 AM)
0 2 * * * /ruta/al/script/backup.sh
```

---

## 🌐 Configuración de Dominio

### DNS Records
```
A     @        tu_ip_servidor
A     www      tu_ip_servidor
AAAA  @        tu_ipv6_servidor
AAAA  www      tu_ipv6_servidor
MX    @        tu_proveedor_email
TXT   @        "v=spf1 include:_spf.google.com ~all"
```

---

## 🚀 Configuración de Producción Final

### package.json scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "server": "node server.js",
    "prod": "npm run build && npm run start"
  }
}
```

### Comando final de producción
```bash
# Compilar y iniciar
npm run build
npm run start

# O con PM2
pm2 start ecosystem.config.js --env production
```

---

## 📱 Acceso Móvil PWA

Para convertir en aplicación móvil:
```javascript
// public/manifest.json
{
  "name": "Sistema de Centros Barriales",
  "short_name": "Centros Barriales",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3B82F6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## ✅ Checklist de Producción

- [ ] Servidor configurado con Node.js
- [ ] Base de datos PostgreSQL instalada
- [ ] Dominio apuntando al servidor
- [ ] SSL/TLS configurado
- [ ] Variables de entorno configuradas
- [ ] Firewall configurado
- [ ] Backups automáticos
- [ ] Monitoreo configurado
- [ ] Logs rotativos
- [ ] Actualizaciones automáticas de seguridad
- [ ] Testing de carga realizado
- [ ] Documentación para mantención

---

## 🆘 Soporte y Mantención

### Costos mensuales estimados:
- **VPS básico**: $5-15/mes
- **Managed Database**: $15-30/mes  
- **Dominio**: $10-15/año
- **SSL**: Gratis (Let's Encrypt)

**Total estimado: $20-50/mes**

Para más de 1000 usuarios concurrentes, considera servidor más potente ($50-100/mes).

---

## 🎯 ¡Listo para Producción!

Con esta guía tienes todo lo necesario para implementar tu Sistema de Centros Barriales en producción de forma segura y profesional.

¿Quieres que te ayude con algún paso específico o prefieres la opción simple (solo archivos HTML) o la completa con backend?