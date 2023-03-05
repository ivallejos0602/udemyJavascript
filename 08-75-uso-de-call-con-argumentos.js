let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function( titulo, tel ){
        return titulo +' '+ this.nombre+' '+this.apellido +' '+ tel ;
    }
}

let persona2 = {
     nombre: 'Carlos',
     apellido:'Lara'
}

/* Uso de call
   la idea es usar el método del objeto persona1 con los datos del objeto persona2.
   Podemos realizar esto porque los objetos contienen los mismos atributos.

   En este caso se utiliza una función que, a diferencia del anterior, contiene argumentos

*/

console.log( persona1.nombreCompleto('Licenciado', '2494321546' ) );

console.log( persona1.nombreCompleto.call( persona2, 'Ingeniero', '223562317' ) );