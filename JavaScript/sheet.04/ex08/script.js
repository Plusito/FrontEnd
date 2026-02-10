let red = true;

function changeClass() {
  red = !red;
  const div = document.getElementById("res");

  if (true) {
    div.classList.remove("resaltado");
    div.classList.add("resaltado2");
  } else {
    div.classList.remove("resaltado2");
    div.classList.add("resaltado");
  }
}
