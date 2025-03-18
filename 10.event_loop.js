/* -	EVENT LOOP:
    -	Node.js es Single Threaded, lo que significa que usa un solo hilo para ejecutar código JavaScript. 
    -	Sin embargo, gracias al Event Loop, puede manejar múltiples tareas asíncronas 
        (como consultas a la base de datos o peticiones HTTP) sin bloquear el hilo principal.
    -		*/

    const fs = require("fs");

    console.log("Inicio");
    
    //operacion sincrona de lectura de archivo
    fs.readFile("archivo.txt", () => {
        console.log("Lectura de archivo completada");
      });
      
      // setTimeout con 0ms de retraso (se ejecuta en la fase Timers)
      setTimeout(() => {
        console.log("Timeout ejecutado");
      }, 0);
      
      // setImmediate (se ejecuta en la fase Check)
      setImmediate(() => {
        console.log("setImmediate ejecutado");
      });
      
      console.log("Fin");
    
      /* -	EXPLICACIÓN DE SALIDA DEL CODIGÓ ANTERIOR:
        -1  "Inicio" y "Fin" se imprimen inmediatamente, ya que son operaciones síncronas.
        -2  fs.readFile() es una operación asíncrona que se procesa en la fase poll del Event Loop.
        -3  setTimeout(()=> {...}) se ejecuta en la fase timers
        -4  setInmediate() se eejecuta en la fase Check, que ocurre despues de poll	*/
      