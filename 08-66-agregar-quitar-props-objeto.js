let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,

    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido ;
    }
}

//agrego una propiedad al objeto
persona.tel = '249-154321645';
//por error, agrego otra propiedad...
persona.te1 = '249-234567';

console.log(persona);
//eliminamos la propiedad te1 ya que la agregamos por error

delete persona.te1;

console.log(persona);
