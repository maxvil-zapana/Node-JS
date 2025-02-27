/* ************************ */
/*    modulos nativos  */
/* ************************ */
/**	 los modulos nativos, son los modulos que vienen por defecto con node.js y no es necesario instalarlos.	 */
/* ===	logica de módulos nativos	===*/
/**	 cuando se utiliza require con ./ busca en archivos locales
 * cuando se coloca el nombre de un modulo nativo, node busca los módulos nativos
 	 */
/* ===	módulo os	===*/
/**	 el módulo os proporciona información sobre el sistema operativo y el entorno en el que se está ejecutando Node.js.
 * esto incluye información sobre la arquitectura del sistema, la cantidad de memoria libre y utilizada, la carga de la CPU, la interfaz de red, etc.
	 */
const os=require('os');
console.log('Arquitectura='+ os.arch());//x64
console.log('SistemaOperativo='+ os.platform());//win32
console.log('MemoriaLibre='+ os.freemem());//memoria libre
console.log('MemoriaTotal='+ os.totalmem());//memoria total
console.log('VersionSO='+ os.version());//10.0.19041+
console.log('Interfaces Red='+ os.networkInterfaces());//interfaces de red

/**	  Para ver con una interfaz de tabla	 */
console.table({
    os:os.platform(),
    version:os.release(),
    arquitectura:os.arch(),
});
console.table(os.networkInterfaces());





