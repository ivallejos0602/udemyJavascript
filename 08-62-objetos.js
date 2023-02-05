let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,

    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido ;
    }
}

console.log("nombre :"+persona.nombre);
console.log("apellido :"+persona.apellido);
console.log("edad :"+persona.edad);

//Objeto Persona Completo
console.log("Objeto Persona : ");
console.log(persona);

// accedemos al método del objeto
console.log(persona.nombreCompleto());

//Otra manera de crear un objeto (menos convencional)

let humano = new Object();
humano.nombre = 'Alan';
humano.direccion = 'Lah Heras 1057';
humano.telefono = '011-15345679';

console.log(humano.telefono);

