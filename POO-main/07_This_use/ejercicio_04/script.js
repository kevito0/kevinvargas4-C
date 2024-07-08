function agregarNombre(button) {
    const input = document.getElementById('nombreInput');
    const nombre = input.value;
    if (nombre) {
        const lista = document.getElementById('listaNombres');
        lista.innerHTML += `<li>${nombre}</li>`;
        input.value = '';
}
}