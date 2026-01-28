@echo off
echo Iniciando Sistema de Centros Barriales...
echo.

REM Limpiar cache
echo Limpiando cache de Next.js...
if exist ".next" rmdir /s /q .next
if exist "node_modules\.cache" rmdir /s /q node_modules\.cache

REM Iniciar con modo compatible
echo.
echo Iniciando servidor en modo compatible...
echo.

REM Usar variables de entorno para SWC
set SWC_BINARY_PATH=
set NODE_OPTIONS=--experimental-vm-modules

REM Iniciar Next.js
npx next dev --experimental-https --experimental-app --turbo=false

pause