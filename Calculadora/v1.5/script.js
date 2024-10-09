let Ahora = "";
let Operatoria = "";
let Antes = "";

function press(num) {
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
}

function clr() {
  Ahora = "";
  Antes = "";
  Operatoria = "";
  updateDisplay(0);
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}
