function plus() {
  const count = document.getElementById("count");
  let text = parseInt(count.textContent);
  text++;
  count.textContent = text;
}

function minus() {
  const count = document.getElementById("count");
  let text = parseInt(count.textContent);
  text--;
  count.textContent = text;
}
