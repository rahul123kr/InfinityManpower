@echo off
REM Install frontend dependencies without using npm command
cd /d "c:\Users\hp\Desktop\Manpower\frontend"
echo Installing dependencies...
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install --no-audit --no-fund --legacy-peer-deps --verbose
echo.
if errorlevel 0 (
    echo Dependencies installed successfully!
    echo.
    echo Starting React development server...
    node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" start
) else (
    echo Installation failed!
    pause
)
