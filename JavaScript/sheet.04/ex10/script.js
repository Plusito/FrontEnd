function changeClass(e) {
  e.preventDefault();
  const form = document.getElementById("formulario");
  const corr = document.getElementById("correo");

  if (corr.value == "") {
    form.classList.remove("exito");
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    form.classList.add("exito");
  }
}
