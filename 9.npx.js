/* -	NPX:
    -	npx es una herramienta que se utiliza para ejecutar paquetes de npm sin necesidad de instalarlos globalmente en el sistema operativo
    -	viene incluido con npm desde la versión 5.2.0
    -	osea si necesitas ejecutar un paquete npm sin instalarlo en tu proyecto, npx lo descargará temporalmente y ejecutará
        *npx cowsay "hola mundo"	//cuando se ejecuta el codigo le pedira confirmación para instalarlo de manera temporal.
    -   Cuando se instala paquetes en un proyecto, sus ejecutables quedan en node_modules/.bin/
    -   En lugar de ejecutar un paquete de node_modules/.bin/ con ./node_modules/.bin/nombre_paquete, se puede usar npx nombre_paquete
    -   npx también se puede utilizar para ejecutar scripts de package.json
        *npx nodemon index.js  
    -   También se usa para ejecutar versiones especificas de paquetes sin modificar el proyecto principal
        *npx create-react-app@4.0.3 mi-proyecto
    - */
