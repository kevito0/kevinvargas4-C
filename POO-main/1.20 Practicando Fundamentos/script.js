/* 10. Leer 2 números y solicitar al usuario que ingrese la opción de sumarlos,
restarlos, multiplicarlos y dividirlos según elija quien ingresa.*/

let n1 = parseInt(prompt("Ingresar primer numero: "));
let n2 = parseInt(prompt("Ingresar segundo numero: "));
let input = prompt("Ingrese Sumar, Restar, Multiplicar o Dividir");

function operar(a, b, operar) {
    if(operar == "Sumar"){
        return a + b;
    } else if(operar == "Restar"){
        return a - b;
    } else if(operar == "Multiplicar"){
        return a * b;
    } else if(operar == "Dividir"){
        return a / b; 
    }else {
        alert("Ingrese un valor correcto: Sumar, Restar, Multiplicar o Dividir")
    }
    console.log(`La operacion de ${input} entre ${n1} y ${n2} es: `)
};
console.log(`Resultado : ${operar(n1, n2, input)}`);

/*11. Sumar N números pares.*/

let n = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function sumarPares(array) {
    let suma = [0];
    array = 0;
    for(let i = 1; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese ${i}° numero: `))
        array.push(input)
    }
    for(let i = 0; i < array.length; i++ ){
        if(array[i] % 2 == 0){
            suma += array[i];
        }
    }
    return suma;
};
console.log(`Resultado de suma pares es: ${sumarPares(n)}`)

/*12. Sumar los N primeros pares. */

let Num = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function ImprimirPares(limite){
    pares = [];
    sumar = 0;
    for(let i = 2; i <= limite*2; i+=2){
        pares.push(i);
    }
    for(let i = 0 ; i < pares.length; i++){
        sumar += pares[i];
    }
    console.log(pares.join(" - "))
    return sumar;
};
console.log(`Resultado de suma es: ${ImprimirPares(Num)}`)

/*13. Sumar N números impares. */

let N = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function sumarImpares(array) {
    let suma = [0];
    array = 0;
    for(let i = 1; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese ${i}° numero: `))
        array.push(input)
    }
    for(let i = 0; i < array.length; i++ ){
        if(array[i] % 2 ==! 0){
            suma += array[i];
        }
    }
    return suma;
};
console.log(`Resultado de suma pares es: ${sumarImpares(n)}`)


/*14. Sumar los N primeros impares. */

let Nume = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function ImprimirImpares(limite){
    impares = [];
    sumar = 0;
    for(let i = 1; i <= limite*2; i+=2){
        impares.push(i);
    }
    for(let i = 0 ; i < impares.length; i++){
        sumar += impares[i];
    }
    console.log(impares.join(" - "))
    return sumar;
};
console.log(`Resultado de suma es: ${ImprimirImpares(Nume)}`)

