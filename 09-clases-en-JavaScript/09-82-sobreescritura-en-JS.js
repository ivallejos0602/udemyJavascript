class Persona{

    constructor(nombre,apellido){
         this._nombre=nombre;
         this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    set apellido( apellido){
       this._apellido = apellido;
    }

    nombreCompleto(){
       return this._nombre+' '+this._apellido;
       
    }
} // Clase Persona

class Empleado extends Persona{
    constructor( nombre,apellido, departamento ){
        super(nombre,apellido); // llama al constructor de la clase Padre       
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }

    set departamento( departamento ){
        this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ',' + this._departamento;
    }
}

let persona1= new Persona('octavio','paz');
persona1.nombre='ethernity';
console.log(persona1.nombre+' '+persona1.apellido);

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');

console.log(empleado1);
//console.log(empleado1.nombre());
//console.log(empleado1.apellido());
console.log("Nombre Completo :"+empleado1.nombreCompleto() );
