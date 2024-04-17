/* Recibir un arreglo numerico con numeros negativos y positivos.
Todos los valores negativos reemplazarlos por 0 */

function noNegative(){
    let array = [];
    let N = parseInt(prompt("Ingrese la cantidad de números a trabajar:"));

    for(let i = 0; i < N; i++){
        let num = parseInt(prompt("ingrese numero: "))
        array.push(num);
    }
    let original = array.slice();

    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            array[i] = 0;
        }
    }
    document.getElementById("elemento").innerHTML = `Arreglo Original : ${original.join(" ,")} <br> Nuevo Arreglo : ${array.join(" ,")}`
};
