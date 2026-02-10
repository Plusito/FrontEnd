function sum() {
  const numOne = parseInt(document.getElementById("1").value);
  const numTwo = parseInt(document.getElementById("2").value);
  const p = document.getElementById("p");
  p.textContent = `resultado de la suma es ${numOne + numTwo}`;
}

function res() {
  const numOne = parseInt(document.getElementById("1").value);
  const numTwo = parseInt(document.getElementById("2").value);
  const p = document.getElementById("p");
  p.textContent = `resultado de la resta es ${numOne - numTwo}`;
}

function mul() {
  const numOne = parseInt(document.getElementById("1").value);
  const numTwo = parseInt(document.getElementById("2").value);
  const p = document.getElementById("p");
  p.textContent = `resultado de la multiplicacion es ${numOne * numTwo}`;
}

function div() {
  const numOne = parseInt(document.getElementById("1").value);
  const numTwo = parseInt(document.getElementById("2").value);
  const p = document.getElementById("p");
  p.textContent = `resultado de la division es ${numOne / numTwo}`;
  if (numTwo == 0) {
    alert("nebiznacheno");
  }
}
