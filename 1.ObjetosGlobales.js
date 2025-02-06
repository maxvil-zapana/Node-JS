/* ************************ */
/*      OBJETOS GLOBALES    */
/* ************************ */  
/** son aquellos que están disponibles en todos los módulos y no necesitan ser importados explicitamente para ser utilizados.
    Son parte del entorno de ejecución de NODE.JS y estan diseñados para facilitar el desarrollo al proporcionar funcionalidades esenciales   **/

/* ===	Global	=== */
/**	 Equivalente a window en el navegador 
 * Contiene todas las variables globales del sistema
 * permite definir variables o funciones accesibles en todo el entorno (globales)
*/
global.miVariable = 'holamundo';
console.log(miVariable);

/* ===	process	===*/
/**	
 *  Proporciona información y control sobre el proceso de ejecución de Node.js
 * metodos comunes: 
    * process.exit() : termina el proceso actual
    * process.cwd() : devuelve el directorio de trabajo actual
    * process.memoryUsage() : devuelve información sobre el uso de memoria
    * process.platform : devuelve la plataforma en la que se ejecuta Node.js
    * process.argv : devuelve una matriz con los argumentos de la línea de comandos
    * process.env : devuelve un objeto con las variables de entorno
    * process.stdin : un stream de lectura que permite leer datos de la consola
    * process.stdout : un stream de escritura que permite escribir datos en la consola
    * process.stderr : un stream de escritura que permite escribir errores en la consola
    * process.pid : devuelve el ID de proceso del proceso actual
*/

    console.log(`PID: ${process.pid}`);
    console.log(`ruta de ejecución: ${process.cwd()}`);

/* ===	__dirname	===*/
    /**	 ruta Absoluta al directorio del archivo que se esta ejecutando 
         */
    console.log(`Directorio del script: ${__dirname}`);

/* ===	__filename	===*/
/**	 ruta Absoluta al archivo que se esta ejecutando, incluyendo el nombre del archivo
 	 */
    console.log(`Nombre del archivo: ${__filename}`);

/* ===	module	===*/
/**	 Representa el módulo actual y contiene información sobre él  	 */
    console.log(`Nombre del archivo: ${module.exports}`);

/* ===	require	===*/
/**	 Función para importar modulos en Node.js 	 */
    const modulo = require('./2.Modulos.js');
    console.log(modulo);