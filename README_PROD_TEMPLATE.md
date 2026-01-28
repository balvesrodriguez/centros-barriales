Producción: Plantilla de arranque para Centros Barriales (con herramientas gratuitas)

Resumen
- Stack recomendado: Frontend (Vercel/Netlify), Backend (FastAPI) + PostgreSQL (Oracle Cloud Always Free o Postgres en su host), Observabilidad (Prometheus/Grafana en el host).

Despliegue recomendado (free tier)
- Frontend: despliegue en Netlify o Vercel (gratis).
- Backend API: desplegar en un VPS del tier gratis (Oracle Cloud Always Free) o en un proveedor de nube con tier gratuito; usar Docker para empaquetar la API.
- Base de datos: PostgreSQL en el mismo VPS o servicio gratuito (Oracle Cloud Always Free o Render/Postgres Free).
- Observabilidad: Prometheus + Grafana en el mismo VPS como contenedores Docker.

Entornos
- dev, staging, prod – usar variables de entorno para URLs y secretos.

Seguridad
- JWT con rotación de secretos y expiración de tokens; TLS a través de servicios de hosting.
- Secreto: no subir a repositorios; usar mecanismos de secrets en hosting o archivos .env no versionados.

Guía rápida de verificación (checklist)
- API health endpoint responde OK.
- Endpoint de login genera token JWT válido.
- Endpoints de datos responden sin errores.
- Despliegue reproducible con Docker Compose para local y script de despliegue para cloud.
