let sumar = function( a=4,b=5 ){
    console.log("argumento 1 : "+arguments[0]);  // arguments es una propiedad del objeto function
    console.log("argumento 2 : "+arguments[1]);
    return a + b;
}

resultado = sumar(4,10);
// resultado = sumar(); // como tiene seteados argumentos x defecto, el resultado de sumar retornaria 9
console.log("suma de ambos argumentos : "+resultado);