let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if (expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

/*
miPromesa.then( 
    valor => console.log(valor), 
    error => console.log(error)
);
*/  

// Sintaxis mejorada del código anterior :
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

// En esta promesa usaremos funciones asincronas (setInterval) y callback

let promesa2 = new Promise( (resolver) => {
    console.log('inicio promesa');
    setTimeout(() => resolver('Saludos con Promesa y funcion timeout'), 4000);
    console.log('fin promesa');
});

// No es obligatorio pasar como argumento en caso de que falle ....se 
// puede implementar en caso de error o no, es optativo.

// promesa2.then( valor => console.log(valor) );

// Ahora trabajeremos con lña funcion con Async
// Async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

// Ahora con el uso de Async / Await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    //aqui consumimos la respuesta de la promesa
    console.log( await miPromesa );
}

//funcionConPromesaYAwait();

// promesas . await. async y setTimeOut

async function funcionConPromesaAwaitTimeout(){

    console.log('inicio de función fuera de la promesa');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'),4000);
    }); 

    // procesamos la promesa
    console.log(await miPromesa);

    console.log('fin de función fuera de la promesa');
}

funcionConPromesaAwaitTimeout();
