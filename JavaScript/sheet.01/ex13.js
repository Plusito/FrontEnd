function generate() {
  const num = Math.round(Math.random() * 100);
  const p = document.getElementById("p");
  p.textContent = "the random number is " + num;
}
