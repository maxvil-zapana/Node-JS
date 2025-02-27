/* ************************ */
/*    exports Individuales	*/
/* ************************ */
/**	 
 * igual que 3.modules.js, pero en este caso se exportan los valores de manera individual 
*/

const myWeb = require('./module/exportsIndividuales.js');
console.log(myWeb);//trae todo los valores exortados
console.log(myWeb.mipage);//trae un solo valor exportado ESPECIFICO
console.log(myWeb.user);//trae un solo valor exportado especifico 


// //para traer un solo valor exportado especifico se puede hacer de la siguiente manera
// const {myWebAddress}=require('./module/myModule.js');//lo qu esta entre llaves es destructuración
// console.log(myWebAddress);

// //otra forma  de traer los valores exportados
// const {myWebAddress, usuario}=require('./module/myModule.js');//lo qu esta entre llaves es destructuración
// console.log(usuario);

// // si queremos asignrles un valor diferente se realiza colocando : despues del componente exportado
// const {myWebAddress: miurl, usuario: user}=require('./module/myModule.js');//lo que esta entre llaves es destructuración
// console.log(miurl);
