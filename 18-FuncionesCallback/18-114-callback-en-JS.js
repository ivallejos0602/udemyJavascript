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

//llamadas asincronas con setTimeout

function miFuncionCallback(){
    console.log('Primer saludo asíncrono después de 3 segundos.');
}

setTimeout(miFuncionCallback, 6000);

setTimeout(function(){console.log('Segundo Saludo Asíncrono')},4000);

setTimeout(()=> console.log('Tercer Saludo Asincrono 3'),5000);
