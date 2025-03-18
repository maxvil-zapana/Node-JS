// La función `promisify` es una utilidad que convierte una función basada en callbacks en una que devuelve una Promesa.
// Esto es útil para trabajar con código asincrónico de una manera más legible y manejable.


const { isUtf8 } = require('buffer')
const {readFile} = require('fs') // Importa la función readFile del módulo 'fs' (sistema de archivos) de Node.js
const {promisify} = require('util') // Importa la función promisify del módulo 'util' de Node.js

const readFilePromise = promisify(readFile) // Convierte la función readFile en una que devuelve una Promesa

async function read() { // Define una función asíncrona llamada read
    try {
        const result = await readFilePromise('./6.modulosNativos/data/texto1.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el primer archivo y guarda el resultado en 'result'
        console.log(result) // Imprime los datos leídos de cada archivo
        const result2 = await readFilePromise('./6.modulosNativos/data/texto2.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el segundo archivo y guarda el resultado en 'result2'
        console.log(result2)
        const result3 = await readFilePromise('./6.modulosNativos/data/texto3.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el tercer archivo y guarda el resultado en 'result3'
        console.log(result3)
        const result4 = await readFilePromise('./6.modulosNativos/data/texto4.txt','utf-8') // Espera a que se resuelva la Promesa de readFilePromise para el cuarto archivo y guarda el resultado en 'result4'
        console.log(result4)
        
    } catch (error) { // Si ocurre un error en cualquiera de las Promesas
        console.log(error) // Imprime el error
    }          
}
read(); // Llama a la función read