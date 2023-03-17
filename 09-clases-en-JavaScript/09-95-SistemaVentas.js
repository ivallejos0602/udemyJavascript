class Producto{
    static contadorProductos = 0;

    constructor( nombre, precio ){
       this._idProducto = ++Producto.contadorProductos;
       this._nombre = nombre;
       this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    toString(){
        return `id Producto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio}`;
    }

}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto( producto ){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
    }

    calcularTotal(){
        let totalVenta = 0;

        for ( let producto of this._productos ){
            totalVenta += producto.precio;
        }

        return totalVenta;
    }

    mostrarOrden(){

        let productoOrden='';
        for ( let producto of this._productos ) {
            productoOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this.idOrden} Total: $${this.calcularTotal()} Productos: ${productoOrden}`);
    }
        
}


    let producto1 = new Producto('Pantalón', 200);
    let producto2 = new Producto('Camisa',100);

    let orden1 = new Orden();
    orden1.agregarProducto(producto1);
    orden1.agregarProducto(producto2);
    console.log(producto1.toString());
    console.log(producto2.toString());

    orden1.mostrarOrden();

    let producto3 = new Producto('Cinturón',80);

    let orden2 = new Orden();

    orden2.agregarProducto(producto3);
    orden2.agregarProducto(producto2);
    orden2.agregarProducto(producto1);

    orden2.mostrarOrden();