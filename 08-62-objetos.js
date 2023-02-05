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

