function addItem() {
  const text = document.getElementById("text").value;
  if (text == "") {
    alert("input can't be empty");
  } else {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  }
}

function magic() {
  const div = document.getElementById("magic");
  div.style.backgroundColor = "purple";
}
function backColor() {
  const div = document.getElementById("magic");
  div.style.backgroundColor = "grey";
}
