@echo off
echo ========================================
echo  🚀 INICIANDO SISTEMA DE CENTROS BARRIALES
echo ========================================
echo.

cd /d C:\sistema-centros-barriales

echo Limpiando cache...
if exist ".next" rmdir /s /q .next

echo.
echo Verificando Node.js...
node --version
npm --version

echo.
echo Instalando Next.js localmente...
call npm install next@latest react@latest react-dom@latest

echo.
echo Iniciando servidor con Node.js directamente...
echo ========================================
echo.

REM Usar el ejecutable de next desde node_modules
call node_modules\.bin\next.cmd dev --port=3001

pause