@echo off
rem Starts the ESK Properties site for local preview. Usage: start-dev.cmd [port]
cd /d "%~dp0"
if not "%1"=="" set PORT=%1
if "%PORT%"=="" set PORT=3000
node node_modules\next\dist\bin\next dev -p %PORT%
