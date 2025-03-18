const {readFile} = require('fs') // Importa la función readFile del módulo 'fs' (sistema de archivos) de Node.js
// osea lo que esta entre llaves es una destructuración de objetos, es decir que solo se importa la función readFile del módulo fs

function getText(path) { // Define una función llamada getText que toma un parámetro 'path'
    return new Promise((resolve, reject) => { // Retorna una nueva Promesa
        // una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. 
        // osea en terminos simples es una promesa de que algo va a pasar
        // resolve es una función que se llama cuando la promesa se resuelve exitosamente
        // reject es una función que se llama cuando la promesa se rechaza
        // el proposito de resolve y reject es para realizar varias operaciones asincronas y saber cuando terminan
        readFile(path, 'utf8', (err, data) => { // Llama a readFile con el path, el encoding 'utf8' y un callback
            if (err) { // Si hay un error al leer el archivo
                reject(err) // Rechaza la Promesa con el error
             // Si la lectura del archivo es exitosa
             }
                resolve(data) // Resuelve la Promesa con los datos leídos
        })
    })
}

getText('./6.modulosNativos/data/texto1.txt') // Llama a la función getText con el path del archivo 'first.txt'
    .then(result => { // Cuando la Promesa se resuelve exitosamente, ejecuta el callback con los datos leídos
        console.log(result) // Imprime los datos leídos
        return getText('./6.modulosNativos/data/texto2.txt') // Retorna una nueva Promesa para leer el segundo archivo
    })
    .then(resultado => { // Cuando la segunda Promesa se resuelve exitosamente, ejecuta el callback con los datos leídos
        console.log(resultado) // Imprime los datos leídos del segundo archivo
    })
    .catch(error => { // Cuando la Promesa se rechaza, ejecuta el callback con el error
        console.log(error) // Imprime el error
    })

// el then se ejecuta cuando una promesa se resuelve exitosamente, es decir que si una promesa se resuelve exitosamente, se ejecuta el then siguiente.
// el catch se ejecuta cuando cualquiera de las promesas es rechazada, es decir que si una promesa falla, se ejecuta el catch, no importa si hay mas promesas despues de la que falló




