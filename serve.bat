@echo off
echo Starting server...
start "DevCrow Local Server" python .claude/serve.py 3000
timeout /t 2 /nobreak >nul
start http://localhost:3000/portfolio.html
