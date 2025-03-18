// La declaración `import` es parte de los módulos ES6 (ECMAScript 2015) y se utiliza para importar funciones, objetos o valores desde otros archivos o módulos.
// La declaración `require` es parte de CommonJS, un sistema de módulos utilizado en Node.js, y se utiliza para importar módulos o paquetes de Node.js.
// En resumen, usa `import` si estás trabajando con módulos ES6 o en un entorno moderno, y usa `require` si estás trabajando con CommonJS o en un entorno más antiguo.

//para utilizar en el archivo a importar se debe exportar de la siguiente manera:
// export function add(a, b) {...} // Exporta funcion en funcion
//export default {add, substract, multiply, divide} // Exporta varias funciones en un objeto

//para poder importar tambien se debe agregar en el package.json la siguiente linea:
// "type": "module" //para que node.js pueda reconocer los modulos

import math from "./math/operaciones.js";

console.log(math.add(1, 2)); // Output: 3