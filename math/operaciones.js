function add (x,y){
    return x+y;
}
function substract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
// lo siguiente se utiliza con require
// module.exports = {
//     add,
//     substract,
//     multiply,    
//     divide
// } //exportamos el objeto add, substract, multiply y divide

//lo siguiente se utiliza con import
export default {
    add,
    substract,
    multiply,
    divide
} //exportamos el objeto add, substract, multiply y divide