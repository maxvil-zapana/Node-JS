/* ************************ */
/*    fs  SINCRONO	*/
/* ************************ */
/* ===	Leer archivos	===*/
/**	 permite trabajar con archivos y directorios de manera sincrónica y asíncrona 	 */
const fs= require('fs');
//leer un archivo de manera asincrona
const primerTextoSinFormato= fs.readFileSync('./data/texto1.txt'); //al poner solo el archivo solo extrae el texto en formato crudo
const primerTextoConFormato= fs.readFileSync('./data/texto1.txt', 'utf-8'); //al poner solo el archivo solo extrae el texto en formato crudo

console.log(primerTextoSinFormato);
console.log(primerTextoConFormato);
//otra forma de leer el archivo

const segundoTexto= fs.readFileSync('./data/texto2.txt');
console.log(segundoTexto.toString());//otra forma de convertir con formato de texto.

/* ===	Crear archivos	===*/

/**	  	 */
fs.writeFileSync('./data/texto3.txt', 'vengo desde el texto3.txt');//crea un archivo con el texto que se le pase como segundo parametro
/* ===	Actualizar archivos	===*/
/**	 */
fs.appendFileSync('./data/texto3.txt', ' y ahora estoy actualizado');//agrega texto al archivo existente
/* ===	Eliminar archivos	===*/
/**	 */
// fs.unlinkSync('./data/texto3.txt');//elimina el archivo existente

/* ===	Controla archivos 	===*/
fs.writeFileSync('./data/texto4.txt', 'vengo desde el texto.txt',{
    flag:'w'//flag w es para escribir en el archivo, si no existe lo crea, si existe lo sobreescribe
});

// 🚀 Flag	🔍 Descripción
// 'w'	Escribe en el archivo. Si existe, lo sobrescribe. Si no, lo crea. (⚠️ Peligroso si no quieres perder datos)
// 'a'	Agrega contenido al final del archivo. Si no existe, lo crea. (✔️ Útil para logs)
// 'r'	Solo lee el archivo. Si no existe, lanza error.
// 'r+'	Lee y escribe en el archivo sin sobrescribirlo. Si no existe, lanza error.
// 'a+'	Lee y escribe, pero sin borrar el contenido existente. Si el archivo no existe, lo crea.
// 'wx'	Igual a 'w', pero falla si el archivo ya existe (no sobrescribe).
// 'ax'	Igual a 'a', pero falla si el archivo ya existe.

/* ************************ */
/*    fs ASINCRONO	*/
/* ************************ */

/* ===	Leer archivos	===*/
/**	 Node.js es asíncrono y no bloqueante, lo que significa que no espera a que una operación termine para continuar con la siguiente.
 *  En lugar de eso, usa callbacks, promesas o async/await para manejar tareas que toman tiempo, como leer archivos, 
 * hacer peticiones HTTP o consultar bases de datos.
 * 
 * En este código usamos fs.readFile, que es una función asíncrona del módulo fs (File System). 
 * En lugar de detener la ejecución del programa hasta que el archivo sea leído,
 *  Node.js continúa ejecutando otras tareas y ejecuta el callback cuando la lectura se complete. 	 */

// Iniciamos la lectura del archivo 'texto1.txt' de forma ASÍNCRONA.
fs.readFile('./data/texto1.txt', function(error, data) { 
    // Node.js NO espera a que esta operación termine. 
    // Mientras lee el archivo, puede ejecutar otras tareas en paralelo.

    //  Verificamos si hubo un error en la lectura
    if (error) {
        console.error('Error al leer el archivo:', error.message); 
        return; // Detenemos la ejecución del callback si hubo un error
    }

    // Si no hay error, mostramos el contenido del archivo
    console.log('Contenido del archivo:', data.toString()); 
    // 'data' es un Buffer, por eso usamos 'toString()' para convertirlo a texto legible
});
//Aquí podemos realizar otras operaciones sin esperar a que 'fs.readFile' termine
console.log('Mientras se lee el archivo, Node.js sigue ejecutando otras tareas...');

//LO ANTERIOR SIN toString()
fs.readFile('./data/texto1.txt','utf-8', function(error, data) {
    if (error) {
        console.error('Error al leer el archivo:', error.message);
        return;
    }
    console.log('Contenido del archivo:', data);
});


