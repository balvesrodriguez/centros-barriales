# 🌐 COMPRAR DOMINIO Y HOSTING - GUÍA PASO A PASO

## 🎯 OPCIÓN 1: La Más FÁCIL Y ECONÓMICA

### Hostinger (Recomendado para empezar)
1. **Ve a**: https://www.hostinger.com.ar/
2. **Plan recomendado**: "Premium Web Hosting" ($2.99/mes)
3. **Incluye**:
   - Dominio gratis por 1 año
   - 100GB SSD
   - Certificado SSL gratuito
   - Panel de control cPanel
   - Soporte 24/7

### Pasos:
1. **Regístrate** en Hostinger
2. **Elegí tu plan** (Premium o Business)
3. **Registra tu dominio** (ej: centrosbarriales.com)
4. **Paga** anualmente para mejor precio
5. **Accede al cPanel** para subir archivos

---

## 🎯 OPCIÓN 2: Para Crecimiento

### GoDaddy
1. **Ve a**: https://www.godaddy.com/
2. **Dominio**: $12-15/año
3. **Hosting**: $5-10/mes

### SiteGround
1. **Ve a**: https://www.siteground.com/
2. **Plan**: GrowBig ($6.99/mes)
3. **Ideal para WordPress y Node.js**

---

## 🎯 OPCIÓN 3: GRATIS para pruebas

### GitHub Pages
1. **Gratis** para sitios estáticos
2. **URL**: `https://tuusuario.github.io/sistema-centros-barriales`
3. **Perfecto** para demostración

### Vercel
1. **Gratis** para Next.js
2. **Despliegue automático**
3. **URL personalizada**

---

## 🛒 CÓMO COMPRAR EN HOSTINGER (Paso a paso)

### 1. Registrarte
```
1. Ve a www.hostinger.com.ar
2. Hacé clic en "Hosting"
3. Elegí "Premium Web Hosting"
4. Hacé clic en "Comprar ahora"
```

### 2. Elegir Dominio
```
1. Busca tu dominio: centros-mi-barrio.com
2. Si no está disponible, probá con:
   - centrosbarriales-online.com
   - gestion-centros.com
   - centros-barriales-sistema.com
3. Agregá el dominio al carrito
```

### 3. Configurar Plan
```
1. Período: 12 meses (mejor precio)
2. Ubicación del servidor: Estados Unidos o Brasil
3. Agregá extras (opcional):
   - Copias de seguridad diarias: $1/mes
   - Protección de SiteLock: $1/mes
```

### 4. Pagar
```
1. Creá cuenta o ingresá con Google/Facebook
2. Completá tus datos personales
3. Elegí método de pago:
   - Tarjeta de crédito/débito
   - Mercado Pago
   - PayPal
4. Confirmá la compra
```

---

## 📁 SUBIR ARCHIVOS AL HOSTING

### Método 1: cPanel File Manager
1. **Ingresá a tu cPanel** (usualmente: `tudominio.com/cpanel`)
2. **Buscá "File Manager"**
3. **Navegá a `public_html`**
4. **Subí los archivos**:
   - login-funcional.html
   - dashboard-funcional.html
   - dashboard-script.js
   - Carpeta `assets/` (si la creaste)

### Método 2: FTP
1. **Descargá FileZilla** (gratuito)
2. **Conectá con tus credenciales FTP**
3. **Subí todos los archivos a `public_html`**

### Método 3: Git (para desarrolladores)
```bash
git clone https://github.com/tu-usuario/sistema-centros-barriales.git
cd sistema-centros-barriales
# Subir archivos específicos al hosting
```

---

## 🔧 CONFIGURACIÓN POST-INSTALACIÓN

### 1. Configurar Dominio Principal
```
En cPanel > Dominios > Dominios Principales:
- Asegurate que "Root Directory" apunte a "public_html"
- Activar "Force HTTPS Redirect"
```

### 2. Certificado SSL
```
En cPanel > Seguridad > Let's Encrypt SSL:
- Activar SSL gratuito
- Incluir dominio principal y www
- Activar renovación automática
```

### 3. Página de Inicio
```
En cPanel > Dominios > Redirecciones:
- Opcional: redirigir tudominio.com a tudominio.com/login-funcional.html
```

---

## 🎯 URLS DE ACCESO

### Una vez subido:
- **Login**: `https://centros-mi-barrio.com/login-funcional.html`
- **Dashboard**: `https://centros-mi-barrio.com/dashboard-funcional.html`

### Si querés URLs más amigables:
```
/login -> /login-funcional.html
/dashboard -> /dashboard-funcional.html
```

---

## 💰 COSTOS ESTIMADOS

### Hostinger (Opción más económica):
- **Dominio .com**: $12/año
- **Hosting Premium**: $3/mes ($36/año)
- **SSL**: Gratis
- **Total**: ~$48/año

### Recomendación:
- **Empezá con hosting compartido** ($3-5/mes)
- **Upgrade a VPS** cuando tengas más usuarios
- **Dominio propio** es obligatorio para ser profesional

---

## 🌐 OTROS PROVEEDORES

### Para Argentina:
- **Donweb.com.ar**: Hosting local con soporte en español
- **Dattatec.com**: Planes económicos para pymes
- **TyC Hosting**: Servidores en Argentina

### Para Latinoamérica:
- **Cloudflare Pages**: Gratis con CDN global
- **Netlify**: Gratis para sitios estáticos
- **Firebase Hosting**: Gratis de Google

---

## ✅ CHECKLIST ANTES DE COMPRAR

- [ ] Comparar precios de al menos 3 proveedores
- [ ] Verificar que soporte HTML5/JavaScript
- [ ] Confirmar SSL gratuito
- [ ] Leer reseñas de otros usuarios
- [ ] Verificar política de reembolso
- [ ] Confirmar soporte técnico 24/7

---

## 🚀 LISTO PARA EMPEZAR

### Tu primer sistema en producción:
1. **Comprá hosting y dominio** (~$50/año)
2. **Subí los archivos HTML**
3. **¡Listo! Ya está funcionando**

### Para actualizaciones futuras:
1. **Modificá los archivos localmente**
2. **Subí los archivos actualizados al hosting**
3. **¡Listo! Cambios en vivo**

---

## 🎊 ¡FELICITACIONES!

Con esto tendrás tu Sistema de Centros Barriales funcionando en producción, accessible para cualquier usuario con internet.

**¿Querés que te ayude con algún paso específico del proceso?**