/* ************************** */
/* NPM - Node Package Manager */
/* ************************** */
/**	 Es el gestor de paquetes de Node:js.
 * Se utiliza para instalar, compartir y gestionar librerias y herramientas dentro de un proyecto.
 * Es el repositorio de paquetes más grande del mundo para javascript.
 * Para buscar los paquetes se tiene que ingresar a npmjs.com
 * 
 	 */
/* ===	INSTALACION	===*/
/* -	LOS COMANDOS SE REALIZA EN CMD (Command Prompt)	:
    -	Para validar que tenemos instalado (no es necesario, ya que se instala por defecto con node.js) se utiliza el comando npm -v / npm --version.
    -   Para instalar un paquete se utiliza el comando npm install nombre-del-paquete / npm i nombre-del-paquete.
    -	Para instalar un paquete de manera global se utiliza el comando npm install -g nombre-del-paquete.
    -	
    -		*/
/* ===	Archivos generados después de la instalación	===*/
    /* -	node_modules/:
        -	Contiene todas las dependencias instaladas del proyecto
        -	Cada paquete instalado tiene su propia carpeta dentro de node_modules.
        -   PUede incluir subdependencias (dependencias de las dependencias).
        -   No se debe modificar nada dentro de esta carpeta.
        -   Se genera automáticamente y no se recomienda subirla al repositorio (por eso se incluye en .gitignore).
        -		*/
    /* -	package-lock.json:
        -	Se genera o actualiza automáticamente después de ejecutar npm install.
        -	Contiene información sobre las versiones exactas de las dependencias instaladas.
        -	Se utiliza para asegurar que todos los desarrolladores trabajen con las mismas versiones de las dependencias.
        -	Si este archivo está presente, npm install instalará exactamente las versiones especificadas en él
        -		*/
    /* -	package.json:
        -	Contiene información sobre el proyecto y las dependencias.
        -   Se puede crear manualmente o con el comando npm init.
        -	Se utiliza para instalar las dependencias del proyecto con npm install.
        -	Se recomienda subirlo al repositorio.
        -	contiene información como:
            -   "dependencies": son paquetes que se necesitan para que el proyecto funcione.
            -   "devDependencies": son paquetes que solo se necesitan en desarrollo.
        -		*/
    

//npm --version //verificamos la versión de npm
//npm install colors //instalamos el paquete colors

/* ************************ */
/*    USO 	*/
/* ************************ */
/**	 require tiene el siguiente orden de busqueda de modulos o paquetes
 * 1.busca en la carpeta local
 * 2.luego busca en la carpeta node_modules(donde encuentra modulos instalados)
 * 3.luego busca modulos nativos
 * 
 	 */

const colors =require('colors'); //importamos el paquete colors
// a partir de ahora el texto console.log tendra una propiedad adicional
console.log('Hola mundo'.green); //imprimimos en consola el texto en color verde
console.log('mazach.com'.bgBlue);//imprimimos en consola el texto con fondo azul
console.log('Hola mundo'.rainbow);//imprimimos en consola el texto con colores del arcoiris


/* ************************ */
/*    ELIMINAR MODULOS 	*/
/* ************************ */
/**	 npm remove colors //eliminamos el paquete colors
 * borra el modulo y todos sus subdependencias
 	 */
/**	 si por algun motivo se elimino la carpeta node_modules y se quiere volver a instalar los modulos se puede usar el siguiente comando
 * 'npm install' //instala todos los modulos que estan en el archivo package.json
 	 */
