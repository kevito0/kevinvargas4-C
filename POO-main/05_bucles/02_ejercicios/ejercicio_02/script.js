
function calcularSuma() {
    let suma = 0;
    let contador = 0;
    let array = [];

    while (contador <= 10) {
        array.push(contador);
        suma += contador;
        contador++;
    }
    document.getElementById('resultado').innerHTML = `La suma del 1 al 10 es: <h2>${array} = ${suma}</h2>`;
}
