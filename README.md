# ProyectoAn

Para poder correr el proyecto, lo primero que debemos hacer es realizar la descarga desde el respectivo repositorio de git, luego de descargarlo descomprimimos el archivo en una carpeta,
luego abriremos el proyecto en el editor de codigo de preferencia, ahi abriremos la terminal
de dicho editor de codigo y ahi posicionados ejecutaremos el siguiente comenado "npm install"
para descargar todos los modulos y dependencias que falten, luego en ejecutar el comando
"ng add @angular/material" para descargar los modulos de angular material, luego de tener todos
los paquetes instalados abrir la terminal de la computadora o cmd, a parte de la del editor de codigo (visualStudiCode) posicionandose en la carpeta del proyecto, mas especificamente en la carpeta que se encuentra dentro del proyecto llamada db, al estar posicionados en dicha carpeta,
ejecutar el comando "npm install -g json-server" y posteriormente, ejecutar el comando
"json-server --watch db.json", al tener corriendo la base de datos, en la terminarl del editor
de codigo ejecutar el comando "ng serve -o" el cual abrira una pestaña en el navegador con el
proyecto.

La interfaz del proyecto, es que te abres en la seccion del menu, en caso de no haber dejado la sesion iniciada, te redirecciona directamente a la pagina del dashboard con tu respectiva sesion
que quedo inicada con anterioridad, en el otro caso te abre en el menu, donde decides crear un nuevo usuario, que al crearlo te redirecciona al login para poder iniciar sesion e ir al dashboard y en caso de tener el usuario ir al login directamente iniciar sesion para poder ingresar al dashboard
directamente, usuario ya creado "test1@test.com" password "123456".
