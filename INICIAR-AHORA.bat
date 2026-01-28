@echo off
echo ========================================
echo  🚀 INICIANDO SISTEMA DE CENTROS BARRIALES
echo ========================================
echo.

cd /d C:\sistema-centros-barriales

echo Limpiando cache...
if exist ".next" rmdir /s /q .next

echo.
echo Iniciando servidor web...
echo ========================================
echo.

REM Iniciar con configuración optimizada
set NODE_OPTIONS=--max-old-space-size=4096
set NEXT_TELEMETRY_DISABLED=1

npx next dev --port=3001

pause