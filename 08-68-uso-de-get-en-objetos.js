let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    idioma: 'es',
    edad: 28,

    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },

    get nombreCompleto(){
        return this.nombre +" "+ this.apellido ;
    }
}

console.log( persona.nombreCompleto );