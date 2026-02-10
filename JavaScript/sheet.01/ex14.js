function generate() {
  return Math.round(Math.random() * 100);
}

let generatedNumber = generate();

function guess() {
  const myNumber = document.getElementById("input").value;
  const text = document.getElementById("text");

  if (myNumber === "") {
    alert("Empty INPUT ERROR ");
  } else {
    if (myNumber > generatedNumber) {
      text.textContent = "secret number is lower";
      text.style.color = "red";
    } else if (myNumber < generatedNumber) {
      text.textContent = "secret number is bigger";
      text.style.color = "red";
    } else {
      text.textContent = "you guess the secret number, now you can try again";
      text.style.color = "green";
      generatedNumber = generate();
    }
  }
}
