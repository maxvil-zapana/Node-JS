const http =require('http')
const {createReadStream} = require('fs') // Importa la función createReadStream del módulo 'fs' de Node.js

const server = http.createServer((req, res) => { // Crea un servidor HTTP con un callback que se ejecuta cada vez que se recibe una solicitud
    const fileStream = createReadStream('./6.modulosNativos/data/bigFile.txt',{
        encoding:'utf-8'    // Crea un Readable Stream para leer el archivo 'bigFile.txt' con el encoding 'utf-8'
    })

    fileStream.on('data', (chunk) => { // Registra un listener para el evento 'data' que se ejecuta cuando hay un nuevo fragmento de datos
        fileStream.pipe(res) // Pasa los datos del archivo al objeto de respuesta
        // pipe es un método que se utiliza para leer datos de un stream y escribirlos en otro stream
    }) 
    fileStream.on('error', (error) => { // Registra un listener para el evento 'error' que se ejecuta si ocurre un error durante la lectura
        console.error('Error:', error.message) // Imprime un mensaje de error con el mensaje del error
    })

});

server.listen(3000) // El servidor escucha en el puerto 3000
console.log('Servidor en el puerto 3000') // Imprime un mensaje indicando que el servidor está en ejecución;
