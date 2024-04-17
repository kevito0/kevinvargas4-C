
function sumaArr() {
    let suma = 0;
    let contador = 1;
    let array = [];

    while (contador <= 10) {
        array.push(contador);
        suma += contador;
        contador++;
    }
    document.getElementById('resultado').innerHTML = ``;
}

