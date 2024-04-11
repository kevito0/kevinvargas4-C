function numeroMayor() {
    let numeros = []; 

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    document.getElementById('resultado').innerHTML = `El número mayor es: ${numeros}`;
}
