const persona = {
    nombre: 'juan',
    apellido: 'perez',
}

function cambiarValorObjeto(p1){
    p1.nombre = 'carlos';
    p1.apellido = 'gonzalez';
}

// Paso por Referencia
console.log( persona );
cambiarValorObjeto( persona );
console.log( persona );