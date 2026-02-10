function addToList() {
  const text = document.getElementById("2").value;
  if (text == "") {
    alert("input can not be empty");
  } else {
    const add = document.createElement("li");
    add.textContent = text;
    const list = document.getElementById("1");
    list.appendChild(add);
  }
}
