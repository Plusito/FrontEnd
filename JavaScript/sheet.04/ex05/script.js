function check(e) {
  e.preventDefault();
  const text = document.getElementById("nombre").value;
  if (text === "") {
    const error = document.getElementById("error");
    error.textContent = "Por favor, rellena el campo";
    error.style.display = "grid";
    error.style.color = "red";
  } else {
    error.style.display = "none";
  }
}
