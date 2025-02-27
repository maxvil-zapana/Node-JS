/* ************************ */
/*    MODULES	*/
/* ************************ */
/**	 
 *  los modulos en Node.js son archivos de código reutilizable que encapsulan funciones, objetos o valores, permitiendo dividir el código en partes más manejables. Esto ayuda a mantener un código más organizado, reutilizable y fácil de mantener.
 
 * el objeto module contiene varias propiedades que son útiles para trabajar con módulos. Algunas de las propiedades más importantes son:
        - module.exports: es la propiedad que se utiliza para exportar un módulo.
        - module.id: es una cadena que representa la identificación del módulo.
        - module.filename: es una cadena que representa la ruta absoluta del archivo del módulo.
 

*/
// console.log(module)//vemos las propiedades de module
/**
 * para utilizar los modulos se tiene que utilizar module.exports y require con el primero se establece que se va a exportar cuando se trata de crear modulos por uno mismo y con el segundo se importa el modulo.
 * 
*/
//para nuestro ejemplo se tiene creado la carpeta modules donde se establecen los modulos que se pueden utilizar
// una vez dado un valor en module.exports se puede importar con require()
const myWeb = require('./module/myModule.js');
console.log(myWeb);//trae todo los valores exortados
console.log(myWeb.myWebAddress);//trae un solo valor exportado ESPECIFICO
console.log(myWeb.usuario);//trae un solo valor exportado especifico 


//para traer un solo valor exportado especifico se puede hacer de la siguiente manera
const {myWebAddress}=require('./module/myModule.js');//lo qu esta entre llaves es destructuración
console.log(myWebAddress);

//otra forma  de traer los valores exportados
const {myWebAddress, usuario}=require('./module/myModule.js');//lo qu esta entre llaves es destructuración
console.log(usuario);

// si queremos asignrles un valor diferente se realiza colocando : despues del componente exportado
const {myWebAddress: miurl, usuario: user}=require('./module/myModule.js');//lo que esta entre llaves es destructuración
console.log(miurl);

