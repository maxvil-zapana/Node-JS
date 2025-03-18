/* -	fetch en el navegador:
    -	es una función integrada en Javascript que nos permite realizar peticicones HTTP.
    -	se basa en promesas, lo que la hace mpás moderna y legible que el antiguo XMLHttpRequest.
    -	para usar fetch, simplemente llamamos a la función fetch con la URL del recurso que queremos obtener.
    -		*/

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())//convierte la respuesta a un objeto json
//     .then(data => console.log(data))//mostrar los datos obtenidos
//     .catch(error => console.log(error));

/* -	fetch en Node.js:
    -	se incluye await y async para hacer fetch en Node.js.
    -   await: pausa la ejecución de la función asíncrona y espera la resolución de la promesa pasada, y luego reanuda la ejecución de la función y devuelve el valor resuelto.
    -		*/

try {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();
    console.log(data); 
} catch (error) {
    console.log(error);
}
