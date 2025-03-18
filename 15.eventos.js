/* -	EVENTOS EN NODE JS:
    -	En Node JS, los eventos son una forma de comunicación asíncrona entre distintas partes de un programa.
    -	Un evento es una señal que indica que algo ha sucedido, como la finalización de una operación, la recepción de datos, o la interacción del usuario.
    -	El módulo 'events' de Node JS proporciona una clase llamada 'EventEmitter' que permite emitir eventos y registrar listeners para manejarlos.
    -	Para definir un evento personalizado, se debe crear una instancia de la clase 'EventEmitter' y registrar listeners para el evento.
    -   Para emitir un evento personalizado, se debe llamar al método 'emit()' con el nombre del evento y los datos asociados.
        -   DEFINICIÓN DE EVENTOS EN NODE JS:
        -   Los eventos en Node.js son una característica fundamental que permite la comunicación asíncrona entre diferentes partes de una aplicación.
        -   Node.js utiliza un modelo basado en eventos, lo que significa que las operaciones se ejecutan en respuesta a eventos específicos.
        -   Un evento es una señal que indica que algo ha sucedido, como la finalización de una operación, la recepción de datos, o la interacción del usuario.
        -   
        -   MECANISMO DE EVENTOS:
        -   -   Node.js incluye un módulo llamado 'events', que proporciona una clase llamada 'EventEmitter'.
        -   -   La clase 'EventEmitter' es la base para manejar eventos en Node.js.
        -   -   Los objetos de esta clase pueden emitir eventos y registrar funciones (listeners) que se ejecutarán cuando ocurra un evento.
        -   
        -   FUNCIONAMIENTO:
        -   -   Se emite un evento utilizando el método 'emit()'.
        -   -   Se registran listeners para un evento específico utilizando el método 'on()' o 'addListener()'.
        -   -   Cuando se emite un evento, todos los listeners asociados a ese evento se ejecutan en el orden en que fueron registrados.
        -   
        -   VENTAJAS:
        -   -   Facilita la programación asíncrona y no bloqueante.
        -   -   Permite construir aplicaciones altamente escalables y eficientes.
        -   
        -   CONSIDERACIONES:
        -   -   Es importante manejar correctamente los eventos para evitar fugas de memoria.
        -   -   Se recomienda eliminar listeners innecesarios utilizando el método 'removeListener()' o 'off()'.
        -   
        -   EN RESUMEN:
        -   Los eventos en Node.js son una herramienta poderosa para construir aplicaciones asíncronas y basadas en eventos, aprovechando el modelo no bloqueante de Node.js.
    */

        const EventEmitter = require('events')
        const emitter = new EventEmitter()
        emitter.on('response', (data) => {
            console.log('recibido')
            console.log(data)
        }) 
        emitter.emit('response', 'Hola Mundo')
