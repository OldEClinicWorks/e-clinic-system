@echo off
setlocal enabledelayedexpansion

:: Specify the target port number
set "port=5414"

:: Find the process ID (PID) using the specified port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%port%') do (
    set "pid=%%a"
)

:: Check if a PID was found
if defined pid (
    echo Found process with PID %pid% listening on port %port%.
    echo Terminating the process...
    
    :: Terminate the process with the identified PID
    taskkill /F /PID %pid%
    
    echo Process with PID %pid% has been terminated.
) else (
    echo No process found listening on port %port%.
)

:: Pause to keep the Command Prompt window open
pause
