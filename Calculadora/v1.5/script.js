let Ahora = "";
let Operatoria = "";
let Antes = "";
let Borron = false;

// Detecta y maneja el tipo de tecla presionada
function PresionarTecla(event) {
  const key = event.key;
  if (!isNaN(key) || key === ".") {
    press(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    setOP(key);
  } else if (key === "Enter" || key === "=") {
    calcular();
  } else if (key === "Backspace" || key === "C") {
    clr();
  }
}

// Gestiona la entrada de números y actualiza la pantalla
function press(num) {
  if (Borron) {
    Ahora = "";
    Borron = false;
  }
  Ahora += num;
  updateDisplay(Ahora);
}

// Guarda el operador y el número actual para realizar el cálculo
function setOP(op) {
  if (Ahora === "") return;
  if (Antes !== "") {
    calcular();
  }
  Operatoria = op;
  Antes = Ahora;
  Ahora = "";
}

// Realiza el cálculo y muestra el resultado en la pantalla
function calcular() {
  if (Ahora === "" || Antes === "" || Operatoria === "") return;
  
  let result;
  switch (Operatoria) {
    case "+":
      result = parseFloat(Antes) + parseFloat(Ahora);
      break;
    case "-":
      result = parseFloat(Antes) - parseFloat(Ahora);
      break;
    case "*":
      result = parseFloat(Antes) * parseFloat(Ahora);
      break;
    case "/":
      result = parseFloat(Antes) / parseFloat(Ahora);
      break;
  }
  
  updateDisplay(result);
  Ahora = result;
  Antes = "";
  Operatoria = "";
  Borron = true;
}

// Resetea todos los valores y limpia la pantalla
function clr() {
  Ahora = "";
  Antes = "";
  Operatoria = "";
  updateDisplay(0);
  Borron = false;
}

// Actualiza el valor mostrado en la pantalla
function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}