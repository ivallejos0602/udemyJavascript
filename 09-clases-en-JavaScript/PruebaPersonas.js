class Persona {
 
    static contadorPersona = 0;

    constructor(idPersona, nombre, apellido, edad){
        this._idPersona = idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre( nombre ){
       this._nombre = nombre;   
    }

    get apellido(){
        return this._apellido;
    }

    set apellido( apellido ) {
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad( edad ){
        this._edad = edad;
    }

    toString(){
        return `${++Persona.contadorPersona} 
                ${this.idPersona} 
                ${this.edad} 
                ${this.nombre} 
                ${this.apellido}`;
    }

}

class Empleado extends Persona {
    
    static contadorEmpleado = 12;

    constructor( idPersona, nombreP, apellidoP, edadP, sueldo ){
          super(idPersona,nombreP,apellidoP,edadP); 
          this._idEmpleado = ++ Empleado.contadorEmpleado;
          this._sueldo = sueldo; 
        }

    get idEmpleado(){
        return this._idEmpleado;
    }    

    get sueldo(){
        return this._sueldo;
    }

    set sueldo( sueldo ){
        this._sueldo = sueldo;
    }

    toString(){
        return `${Empleado.contadorEmpleado}  ${super.toString()} ${this.sueldo}`;
    }
}

class Cliente extends Persona {

    static contadorCliente = 0;

    constructor(idPersona, nombreP, apellidoP, edadP, fechaRegistro ){
        super(idPersona, nombreP, apellidoP, edadP);
        this._idCliente = ++Cliente.contadorCliente;
        //this._idCliente = 345;
        this.fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro( fechaRegistro ){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${Cliente.contadorCliente} ${super.toString()} ${this._idCliente} ${this.fechaRegistro}`;
    }
}


// prueba de la clase Persona

let persona1 = new Persona(100,'juan','Perez',28);
console.log(persona1.toString());

let empleado1 = new Empleado(200,'Nacho','Del troccio',34,345000);
console.log(empleado1.toString());

let cliente1 = new Cliente(300,'Hugo','Rampolla',35,23042020);
console.log(cliente1.toString());



