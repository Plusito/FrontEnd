let Actual = true;

function changeIMG() {
  const image = document.getElementById("myImage");

  if (Actual) {
    image.src = "https://www.educima.com/imagen-alegre-s19863.jpg";
    Actual = false;
  } else {
    image.src = "https://www.educima.com/imagen-triste-s19861.jpg";
    Actual = true;
  }
}
