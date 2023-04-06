let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
}

setInterval(reloj,1000); // la funcion que esta en reloj se llama cada 1 segundo