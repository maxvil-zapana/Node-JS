/* ************************ */
/*    path	*/
/* ************************ */

/**	 el módulo path proporciona utilidades para trabajar con rutas de archivos y directorios.	 */
const path=require('path');
//obtiene la ruta (carpeta) donde esta un archivo, pero lo hace dependiendo al sistema operativo
console.log('obtener directorio: ',path.dirname('C:\\Users\\Usuario\\Desktop\\CursoNode\\6.modulosNativos\\6.2.path.js'));
//une rutas correctamente, dependiendo del sistema operativo
console.log('unir rutas: ',path.join('/usuario', 'documentos', 'archivo.txt'));
// En Windows:  \usuario\documentos\archivo.txt
// En Linux/macOS: /usuario/documentos/archivo.txt