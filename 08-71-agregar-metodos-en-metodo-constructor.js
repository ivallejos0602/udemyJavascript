function Persona(nom,ap,email){
    this.nombre=nom;
    this.apellido=ap;
    this.email=email;

    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

let padre=new Persona('Juan','Perez','jperez@mail.com');
//llamada a la funcion del constructor
console.log(padre.nombreCompleto);
let madre=new Persona('Maria','Garcia','mgarcia@mail.com');
//lo mismo para la variable madre
console.log(madre.nombreCompleto);

console.log(padre);
console.log(madre);