/* ************************ */
    /*    TIMERS	*/
/* ************************ */
/**	 son funciones que permiten ejecutar código de forma diferida o repetitiva después de un cierto período de tiempo.
 * 
 	 */
/* ===	setInterval	===*/
/**	 ejecuta un codigo cada cierto tiempo 	 */
setInterval(()=>{//ejecutara el console.log cada dos segundos
    console.log('hello world')
},2000);
/* ===	setTimeOut	===*/
/**	 Ejecuta el código despues de un tiempo indicado 	 */
setTimetOut(()=>{//ejecuta el console.log despues de 2 segundos
    console.log('hello world')
},2000);
