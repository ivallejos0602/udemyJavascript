function miFuncion1(){
    console.log('Función 1');
}

function miFuncion2(){
    console.log('Función 2');
}

function imprimir(mensaje){
    console.log(mensaje);
}

let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado : ${res}`);
}

sumar(4,7,imp);
miFuncion2();
miFuncion1();