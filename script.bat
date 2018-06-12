
REM :WAITFORCREATE
REM IF NOT EXIST %USERPROFILE%\.android\avd\%AVD_NAME%.avd\config.ini (
REM  echo Waiting for AVD creation
REM  timeout /t 2
REM  GOTO WAITFORCREATE
REM )

timeout /t 10
cmd /k "yarn start"