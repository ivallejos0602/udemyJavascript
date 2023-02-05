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
//otra manera de acceder a las propiedades de un objeto
console.log("apellido :"+persona['apellido']);

//accedo a las propiedades de un objeto recorriendo con un for sus propiedades

//for in

console.log("imprimimos por consola todas las props de un obj usando un for");

for (nombreProp in persona){
    console.log(nombreProp+" : ");
    console.log(persona[nombreProp]);
}

