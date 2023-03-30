'use strict'
let resultado = -4;

try{
    if (isNaN(resultado)){
        throw 'No es un número';
    }else
        if ( resultado === '' ) throw 'Es Cadena Vacia';
        else if (resultado >= 0) throw 'valor positivo';
        else if (resultado < 0) throw 'valor negativo';

}
catch(error){
    console.log(error);
   // console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('termina revision errores');
}