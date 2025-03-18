/* ************************ */
/*    npm init	*/
/* ************************ */

/**	 el comando npm init se usa para inicializar un nuevo proyecto en Node.js creando el archivo package.json en el directorio actual. 
 * Este archivo contiene metadatos sobre el proyecto, como su nombre, versión, descripción, autor, licencia, dependencias, scripts, etc.
 *  	 */
/* -	PREGUNTAS QUE SE REALIZAN AL EJECUTAR npm init:
    -	package name : nombre-del-proyecto //sin mayusculas al inicio y sin espacios
    -	version : 0.0.1 //version del proyecto (semver semantic version)
    -	description : Este es mi primer proyecto //descripcion del proyecto
    -   entry point : index.js //archivo principal inicial del proyecto
    -   test command : (vacio y enter)//comando para ejecutar pruebas
    -   git repository : (https://github.com/maxvil-zapana/Node-JS.git) //repositorio git
    -   keywords : node, proyecto, etc.//palabras clave para el proyecto
    -   author : Maxvil Zapana //nombre del autor
    -   license : (ISC) //tipo de licencia del proyecto

    -   Is This OK? (yes) :  yes//confirmar si los datos ingresados son correctos
    -		*/

    /**	 despues de responder estas preguntas, se genera o actualiza el archivo package.json con la configuración ingresada 	 */
    
    /* - FUNCIONAMIENTO DE TEST COMAND EN NPM	
        -	Se usa para ejecutar las pruebas de un proyecto en Node.js
        -	Se puede configurar en el archivo package.json en el fragmento de scripts
            - "scripts": {"ejecutar": "winget upgrade"
  },
        -	en el cmd se ejecuta con "npm run ejecutar" lo que ejecutara el comando winget upgrade
        -	Cuando la clave del script es "start" para iniciar se omite el run solo se ejecutaría con "npm start"
        -   se puede confiugrar varios comandos en los scripts
            -   "scripts":{
                "start": "node 5.exportsFunction.js",   //se puede utilizar para iniciar el proyecto
                "dev": "node 4.exportsIndividuals.js"    //se puede utilizar para ejecutar en modo desarrollo
                }	*/
    /* -	NODEMON:
        -	es una herramienta muy útil para el desarrollo en Node.js
        -   ya que monitorea los archivos del proyecto y reinicia automaticamente el servidor cuando detecta cambios
        -	Evita que tengas que detener y volver a iniciar el servidor manualmente cada vez que haces un cambio en el código
            -   Para instalarlo de manera global se usa el comando npm install -g nodemon
            -   Para instalarlo de manera local npm install nodemon
||||||||||||* lo anterior lo instala en la parte de 
                    "Dependencies":{
                        "nodemon": "^2.0.7"
                    } 
            -   Si se instala en Dependencies el paquete nodemon estara tanto para el ambiente de producción como para el desarrollo. 
                lo cual no es recomendable, ya que nodemon es solo para desarrollo
            -   Para instalarlo solo en desarrollo se debe instalar con la bandera --save-dev
                -   'npm install nodemon --save-dev' o 'npm install nodemon -D' //cualquiera de esos comandos lo instala en
                    "devDependencies":{
                        "nodemon": "^2.0.7"
                    }  
            * cuando se instala de manera global no se considera dependency ni devDependency dentro de ningun proyecto
            * las dependencias (dependencies) y las dependencias de desarrollo (devDependencies) 
            * solo se registran en el archivo package.json cuando la instalación es local dentro del proyecto. 
            * Una instalación global (-g) almacena nodemon en un directorio de sistema y no en el proyecto.
                se utiliza con el comando nodemon index.js
            * Si nodemon no esta instalado globalmente, pero si como devDependency en un proyecto, para ejecutarlo se usa el comando 
            -   forma de usar nodemon en el archivo package.json
                npx nodemon index.js
              "scripts":{
                "start": "node 5.exportsFunction.js",   //se puede utilizar para iniciar el proyecto
                "dev": "nodemon 4.exportsIndividuals.js"    //se puede utilizar para ejecutar en modo desarrollo y se reinicia automaticamente
                }	
        -		*/
    /* -	DEPENDENCIAS :
        -	Las dependencias son paquetes (librerías o módulos) que un proyecto necesita para funcionar.
        -	cuando se instala un paquete con npm, este se guarda en la carpeta node_modules del proyecto
        -	Además, se registra en el archivo package.json en la sección de dependencias
            * CATEGORIAS
            | TIPO	                | USO	                | COMANDO INSTALACION	                    |
            | depencencies	        | producción	        | npm install nombre-paquete	            |
            | devDependencies	    | desarrollo	        | npm install nombre-paquete --save-dev	    |	    
            | optionalDependencies	| opcionales	        | npm install nombre-paquete --save-optional|
            | peerDependencies	    | instalación manual	| npm install nombre-paquete --save-peer	|
            | bundledDependencies	| asegurar paquetes	    | npm install nombre-paquete --save-bundled	|
            | noDependencies	    | bloquea dependencias	| npm install nombre-paquete --no-save	    |
            *   GESTIÓN DE DEPENDENCIAS
            | OPERACION	            | COMANDO	                                    | DESCRIPCION	                                |
o           | Instalar              | npm install <paquete>	                        | Instala todas las dependencias del proyecto   |
            | Eliminar	            | npm uninstall <paquete> o npm remove <paquete>| Desinstala una dependencia específica         |
            | Eliminar devDependency| npm uninstall <paquete> --save-dev            | Desinstala solo las dependencias de desarrollo|
            | Actualizar	        | npm update	                                | Actualiza las dependencias del proyecto	    |
            | Listar                | npm list	                                    | Muestra todas las dependencias del proyecto   |
            | Listar solo	        | npm list --depth=0	                        | Muestra solo las dependencias directas        |
        -		*/
    
    




        
    