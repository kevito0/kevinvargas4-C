let Ahora = "";
let Operatoria = "";
let Antes = "";
let Borron = false; // Nueva variable para controlar si se mostró el resultado


function PresionarTecla(event) {
  const key = event.key;

  if (!isNaN(key) || key === ".") { // Si es número o punto decimal
    press(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") { // Operadores
    setOP(key);
  } else if (key === "Enter" || key === "=") { // Enter o igual para calcular
    calcular();
  } else if (key === "Backspace" || key === "C") { // Backspace o 'C' para limpiar
    clr();
  }
}

function press(num) {
  if (Borron) {
    // Si se mostró un resultado previamente, reiniciar la entrada actual
    Ahora = "";
    Borron = false; // Reiniciar el estado
  }
  Ahora += num;
  updateDisplay(Ahora);
}

function setOP(op) {
  if (Ahora === "") return;
  if (Antes !== "") {
    calcular();
  }
  Operatoria = op;
  Antes = Ahora;
  Ahora = "";
}

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
  Borron = true; // Indicar que se mostró un resultado
}

function clr() {
  Ahora = "";
  Antes = "";
  Operatoria = "";
  updateDisplay(0);
  Borron = false; // Reiniciar el estado
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}
