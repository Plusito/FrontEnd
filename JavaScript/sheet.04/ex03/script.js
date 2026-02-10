function addLine() {
  const list = document.getElementById("lista");
  const newLine = document.createElement("li");
  newLine.textContent = "New Line";
  list.appendChild(newLine);
}

function removeLast() {
  const list = document.getElementById("lista");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
