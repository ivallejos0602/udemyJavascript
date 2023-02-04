let resultado = sumarTodo(3,4,6,9,12,15,34);

function sumarTodo(){
    let suma=0;
    for (let i=0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

console.log("el resultado de la sumatoria de los argumentos es :"+resultado);