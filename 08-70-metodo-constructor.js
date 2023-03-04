function Persona(nom,ap,email){
    this.nombre=nom;
    this.apellido=ap;
    this.email=email;
}

let padre=new Persona('Juan','Perez','jperez@mail.com');
let madre=new Persona('Maria','Garcia','mgarcia@mail.com');

console.log(padre);
console.log(madre);