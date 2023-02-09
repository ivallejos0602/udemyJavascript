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

//uso del método set
persona.lang = 'en';

//uso del metodo get
console.log(persona.lang);
console.log(persona.idioma);
