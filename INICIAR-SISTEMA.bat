@echo off
echo ========================================
echo  Sistema de Centros Barriales
echo  Iniciando servidor web...
echo ========================================
echo.

REM Cambiar al directorio correcto
cd /d C:\sistema-centros-barriales

REM Limpiar cache problemática
echo Limpiando cache de Next.js...
if exist ".next" (
    echo Eliminando carpeta .next...
    rmdir /s /q .next
)
if exist "node_modules\.cache" (
    echo Eliminando cache de node_modules...
    rmdir /s /q node_modules\.cache
)

echo.
echo Instalando dependencias faltantes...
call npm install @next/swc-win32-x64-msvc@latest --force

echo.
echo Iniciando servidor web...
echo ========================================
echo.

REM Desactivar SWC y usar modo compatible
set NEXT_TURBO=false
set NODE_OPTIONS=--max-old-space-size=4096
set SWC_BINARY_PATH=

REM Iniciar con puerto alternativo y sin HTTPS
npx next dev --port=3001 --hostname=0.0.0.0 --no-turbo

echo.
echo Si el servidor se detuvo, presiona cualquier tecla para salir...
pause