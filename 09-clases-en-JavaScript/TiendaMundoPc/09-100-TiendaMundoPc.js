class DispositivoEntrada{

    constructor( tipoEntrada, marca ){
            this._tipoEntrada = tipoEntrada;
            this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada( tipoEntrada ){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca( marca ){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 1000;

    constructor( tipoEntrada, marca ){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton [ id ratón : ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclado = 2000;

    constructor( tipoEntrada, marca ){
            super( tipoEntrada, marca );
            this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor {
 
        static contadorMonitores = 3000;
        
        constructor( marca, tamaño ){
            this._idMonitor = ++ Monitor.contadorMonitores;
             this._marca = marca;
             this._tamaño = tamaño;
        }

        get idMonitor(){
            return this._idMonitor;
        }

        get tamaño(){
            return this.tamaño;
        }

        toString(){
            return `Monitor :[idMonitor: ${this._idMonitor}, Tamaño: ${this._tamaño}]`;
        }
    }

    class Computadora{
        static contadorComputadora = 4000;

        constructor( nombre,monitor,raton,teclado ){
            this._idComputadora = ++Computadora.contadorComputadora;
            this._nombre = nombre;
            this._monitor = monitor;
            this._raton = raton;
            this._teclado = teclado;
        }

        get nombreComputadora(){
            return this._nombre;
        }

        get idComputadora(){
            return this._idComputadora;
        }

        toString(){
            return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} `;
        }
    }

    class Orden{

        static contadorOrden = 5000;

        constructor(){
            this._idOrden = ++Orden.contadorOrden;
            this._computadoras = [];
        }

        get idOrden(){
            return this._idOrden;
        }

        agregarComputadora( computadora) {
            this._computadoras.push( computadora );
        }

        mostrarOrden(){
            let computadorasOrden = '';
            for ( let computadora of this._computadoras ){
                computadorasOrden += `\n ${ computadora }`; 
            }

            console.log(`Orden: ${this._idOrden}, Computadoras : ${computadorasOrden}`);
        }
    }

let raton1 = new Raton('USB','HP');

let raton2 = new Raton('Bluetooth','DELL');


let teclado1 = new Teclado('Bluetooth','MSI');
let teclado2 = new Teclado('USB','Acer');


let monitor1 = new Monitor('HP',19);
let monitor2 = new Monitor('Samsung',22);

let computadora1 = new Computadora('HP',monitor1,raton1,teclado1);

let computadora2 = new Computadora('PC-CLON',monitor2,raton2,teclado2);

let computadora3 = new Computadora('DELL',monitor1,raton2,teclado1);

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);

orden1.mostrarOrden();
