@echo off
echo Sincronizando com GitHub...
git add .
git commit -m "Auto-sync: %date% %time%"
git push origin main
echo.
echo Concluido! Suas alteracoes estao sendo enviadas para a Vercel.
pause
