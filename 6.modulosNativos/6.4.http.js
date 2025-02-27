/* ************************ */
/*    http	*/
/* ************************ */
/**	 el módulo http nos permite crear servidores web y manejar solicitudes http (request, response)
 * a diferencia de otros entornos donde se necesita un servidor como Apache o Nginx, en Node.js podemos crear y manejar nuestro propio servidor web.
 	 */
/* ===	Estructura Básica	===*/
//importamos el módulo http de Node.js
const http= require ('http');

//Creamos un servidor con createServer(peticion, respuesta)
http.createServer((request, response) => {
    response.write('Hello world');//Escribimos una respuesta al cliente
    response.end();//Finalizamos la respuesta
}).listen(3000)//Establecemos el puerto en el que escuchará el servidor
console.log('Servidor escuchado en el puerto 3000');
//Lo anterior lo podemos comprobar buscando en el navegador http://localhost:3000/
/* ===	REQUEST	===*/
//El objeto request contiene información sobre la solicitud del cliente, como la URL, los encabezados y los datos enviados. 
//Por ejemplo, podemos obtener la URL solicitada con request.url.

const myweb=http.createServer((request, response) => {
//console.log(request);//vemos el objeto request, osea lo que se puede enviar al servidor
console.log(request.url);//vemos la URL solicitada
//el resultado en la consola será 
    // /  
    // /favicon.ico, ya que el navegador solicita el favicon.ico por defecto para mostrar el icono de la pestaña
    if (request.url==="/") {//si el buscador esta en la página inicial "localhost:3001/"
        response.write("Bienvenidos a mi página");
        return response.end();
    }
    if (request.url==="/about") {//si en el buscador se escribe "localhost:3001/about"
        response.write("Acerca de");
        return response.end();
    }
    response.write(`
        <h1> not Found</h1>
        <p>La página solicitada no existe</p>
        <br> <a href="/">Volver a la página principal</a>
        `);// si no se especifica en el buscador una página existente, se mostrará este mensaje

    response.end();//Finalizamos la respuesta
});
myweb.listen(3001)//Establecemos el puerto en el que escuchará el servidor
//Server.listen(PORT,callback)
console.log('Servidor escuchado en el puerto 3001');
