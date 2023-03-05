let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
}

let persona2 = {
     nombre: 'Carlos',
     apellido:'Lara'
}

/* Uso de call
   la idea es usar el método del objeto persona1 con los datos del objeto persona2.
   Podemos realizar esto porque los objetos contienen los mismos atributos

*/

console.log( persona1.nombreCompleto() );

console.log( persona1.nombreCompleto.call( persona2 ) );