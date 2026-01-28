@echo off
echo ========================================
echo  🔧 CONFIGURANDO PATH DE NODE.JS
echo ========================================
echo.

REM Agregar Node.js al PATH de esta sesión
set PATH=%PATH%;C:\Program Files\nodejs;C:\Users\PROPIETARIO\AppData\Roaming\npm;C:\sistema-centros-barriales\node_modules\.bin

echo Node.js agregado al PATH
echo.

cd /d C:\sistema-centros-barriales

echo Versión de Node.js:
node --version

echo Versión de npm:
npm --version

echo.
echo Iniciando Next.js...
call npx next dev --port=3001

pause