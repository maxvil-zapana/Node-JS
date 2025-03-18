/* -	fs/promises:
    -	Es un módulo que proporciona versiones basadas en promesas de las funciones del módulo fs de Node.js.
    -	lo que permite usar async/await de forma nativa sin necesidad de util promisify.
    -	Para usar fs/promises, simplemente importa fs/promises en lugar de fs.
    -   El módulo fs/promises proporciona las mismas funciones que el módulo fs, pero con un nombre de función adicional que termina con 'Sync'. 
*/

const {readFile} = require('fs/promises'); // Importa la función readFile del módulo 'fs/promises' (sistema de archivos) en formato de promesas.
async function read() { // Define una función asíncrona llamada read
    try {
        const result = await readFile('./6.modulosNativos/data/texto1.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el primer archivo y guarda el resultado en 'result'
        console.log(result) // Imprime los datos leídos de cada archivo
        const result2 = await readFile('./6.modulosNativos/data/texto2.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el segundo archivo y guarda el resultado en 'result2'
        console.log(result2)
        const result3 = await readFile('./6.modulosNativos/data/texto3.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el tercer archivo y guarda el resultado en 'result3'
        console.log(result3)
        const result4 = await readFile('./6.modulosNativos/data/texto4.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el cuarto archivo y guarda el resultado en 'result4'
        console.log(result4)
        
    } catch (error) { // Si ocurre un error en cualquiera de las Promesas
        console.log(error) // Imprime el error
    }          
}

