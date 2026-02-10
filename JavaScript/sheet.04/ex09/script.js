let act1ve = true;

function activate() {
  const div = document.getElementById("di");
  div.classList.add("active");
  act1ve = true;
}

function remove() {
  const div = document.getElementById("di");
  div.classList.remove("active");
  act1ve = false;
}
