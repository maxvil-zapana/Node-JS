/* ===	CREA ARCHIVO PESADO	===*/
// en este ejemplo se crea un archivo llamado bigFile.txt que contiene la palabra hola mundo repetida 10 000 veces
// para crear el archivo se utiliza el método writeFile del módulo fs/promises

const {writeFile}=require('fs/promises')
const createBigFile =async()=>{
    // recibe dos parámetros, el path del archivo a crear y el contenido del archivo
    await writeFile('./6.modulosNativos/data/bigFile.txt','hola mundo'.repeat(10000))
}
createBigFile()

/* ===	STREAM	===*/
//stream es una secuencia de datos que se lee o se escribe de forma continua
// en este ejemplo se utiliza el método createReadStream del módulo fs para leer un archivo de forma asíncrona

// se importa la función createReadStream del módulo fs
// no se está utilizando el valor promises despues de fs porque createReadStream retorna en formato de promesa.
const {createReadStream}=require('fs') 

const stream = createReadStream('./6.modulosNativos/data/bigFile.txt') // Crea un Readable Stream para leer el archivo 'bigFile.txt'
//const stream = createReadStream('./6.modulosNativos/data/bigFile.txt','utf-8') // Crea un Readable Stream para leer el archivo 'bigFile.txt' con el encoding 'utf-8'

stream.on('data', (chunk) => { // Registra un listener para el evento 'data' que se ejecuta cuando hay un nuevo fragmento de datos
//chunk representa un fragmento de datos que se lee del archivo
console.log(chunk) // Imprime el fragmento de datos en formato Buffer, osea cada buffer representa un fragmento de datos
console.log(chunk.toString()) // Imprime el fragmento de datos en formato de cadena de texto 
// para solo imprimir el contenido del archivo en texto se tiene que poner el encoding utf-8 en la creación del stream
})

stream.on('end', () => { // Registra un listener para el evento 'end' que se ejecuta cuando no hay más datos para leer
    console.log('Lectura completa.') // Imprime un mensaje indicando que la lectura ha finalizado
})

stream.on('error', (error) => { // Registra un listener para el evento 'error' que se ejecuta si ocurre un error durante la lectura
    console.error('Error:', error.message) // Imprime un mensaje de error con el mensaje del error
});