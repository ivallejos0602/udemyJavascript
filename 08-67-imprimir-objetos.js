let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,

    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido ;
    }
}

// imprimir el objeto
console.log( persona );

//concatenar cada valor de la propiedad

console.log( persona.nombre + " , " + persona.apellido + " , "+ persona.email );

//for in
for (nombrePropiedad in persona){
    console.log( persona[nombrePropiedad] );
}

// Usando la clase Object
console.log( Object.values( persona ) );

//Usando la clase Stringify

let personaString = JSON.stringify( persona );

console.log( personaString);
