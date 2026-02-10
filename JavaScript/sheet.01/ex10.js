function ButtonPressed() {
  const text = document.getElementById("123").value;
  if (text == "") {
    alert("input can not be empty");
  } else {
    alert(text);
  }
}
