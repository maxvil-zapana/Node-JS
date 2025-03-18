const {readFile} = require('fs');

const getText = (pathFile)=>{
    return new Promise((resolve, reject)=>{
        readFile(pathFile, 'utf8',(err, data)=>{
            if(err){
                reject(err);
            }
                resolve(data);
        }
    );
});
};
// Define una función asíncrona llamada read
async function read() {
    // la palabra await se usa para esperar a que una promesa se resuelva y devuelva su valor si ocurre un error, se lanza una excepción que podemos capturar con un bloque try...catch
    try {
        // Espera a que se resuelva la Promesa de getText para el primer archivo y guarda el resultado en 'result'
        const result = await getText('./6.modulosNativos/data/texto1.txt');
        // Espera a que se resuelva la Promesa de getText para el segundo archivo y guarda el resultado en 'result2'
        const result2 = await getText('./6.modulosNativos/data/texto2.txt');
        // Espera a que se resuelva la Promesa de getText para el tercer archivo y guarda el resultado en 'result3'
        const result3 = await getText('./6.modulosNativos/data/texto3.txt');
        // Espera a que se resuelva la Promesa de getText para el cuarto archivo y guarda el resultado en 'result4'
        const result4 = await getText('./6.modulosNativos/data/texto4.txt');
        
        // Imprime los datos leídos de cada archivo
        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) { // Si ocurre un error en cualquiera de las Promesas
        console.log(error); // Imprime el error
    }
}
read();