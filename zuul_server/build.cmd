del src\main\resources\static\*.* /s /q
del src\main\resources\templates\*.* /s /q
Xcopy frontend\build src\main\resources\static  /E/H/C/I
copy frontend\build\index.html src\main\resources\templates
del src\main\resources\static\index.html
ren src\main\resources\templates\index.html project.html