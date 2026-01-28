# 🚀 GUÍA RÁPIDA PARA VER EL SISTEMA

## PASO 1: Verificar si tienes Node.js

1. Abre una terminal/consola (Windows: cmd o PowerShell, Mac: Terminal)
2. Escribe este comando y presiona Enter:

```bash
node --version
```

**Si te sale un número (ej: v18.17.0)** → ¡Perfecto! Continúa con el Paso 2

**Si te sale error o no lo reconoces** → Instala Node.js:
- Ve a https://nodejs.org/
- Descarga la versión "LTS" (la izquierda)
- Instálalo y vuelve a intentar el comando anterior

---

## PASO 2: Navegar al proyecto

En la misma terminal, escribe:

```bash
cd sistema-centros-barriales
```

*Si te dice que no existe, verifica que estás en el lugar correcto.*

---

## PASO 3: Instalar dependencias (espera 1-2 minutos)

Escribe el siguiente comando y espera a que termine:

```bash
npm install
```

Verás que descarga muchos paquetes. **¡No cierres la terminal!** Espera a que vuelva a aparecer el cursor.

---

## PASO 4: Instalar dependencias del servidor

Ahora escribe:

```bash
cd server
npm install
cd ..
```

Esto instalará lo necesario para el backend.

---

## PASO 5: Iniciar el sistema (EL PASO MÁGICO ✨)

Tienes 2 opciones:

### Opción A: Todo automático (recomendado)
```bash
npm run dev:full
```

### Opción B: Manual (si la opción A no funciona)

**Abrir 2 terminales:**

**Terminal 1 (Backend):**
```bash
cd sistema-centros-barriales
npm run server
```

**Terminal 2 (Frontend):**
```bash
cd sistema-centros-barriales
npm run dev
```

---

## PASO 6: Ver el resultado en tu navegador 🎉

1. Abre tu navegador web (Chrome, Firefox, etc.)
2. Ve a esta dirección: **http://localhost:3000**
3. ¡Listo! Ya deberías ver el Sistema de Centros Barriales

---

## ¿Qué verás exactamente?

### Página Principal (Dashboard)
- 4 tarjetas con estadísticas
- Menú lateral con todas las opciones
- Diseño moderno y profesional

### Login
- Botones de Google y Microsoft
- Diseño con gradiente bonito

### Formulario de Inscripción
- 3 pasos con indicadores de progreso
- Carga de fotos con vista previa
- Selección de actividades

---

## 🆘 Si algo no funciona:

**Problema: "El puerto 3000 está ocupado"**
- Cierra otros programas o usa http://localhost:3001

**Problema: "No encuentra el comando cd"**
- Asegúrate de escribir bien: `cd sistema-centros-barriales`

**Problema: "npm install da error"**
- Intenta con: `npm install --force`

---

## 🔗 Enlaces útiles

- **Dashboard**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **API**: http://localhost:3001/api/health

---

## ✅ Lista de verificación final

- [ ] Tengo Node.js instalado
- [ ] Ejecuté `cd sistema-centros-barriales`
- [ ] Ejecuté `npm install`
- [ ] Ejecuté `cd server && npm install && cd ..`
- [ ] Inicié el sistema con `npm run dev:full`
- [ ] Abrí http://localhost:3000 en mi navegador
- [ ] ¡Veo el Sistema de Centros Barriales funcionando!

¡Si llegaste hasta aquí, felicidades! Ya tienes tu sistema funcionando 🎊