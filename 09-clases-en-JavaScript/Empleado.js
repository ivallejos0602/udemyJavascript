class Empleado extends Persona {
    
    static contadorEmpleado;

    constructor( sueldo ){
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
        return super.toString()+' '+this.sueldo()+' '+this.idEmpleado();
    }


}