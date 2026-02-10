function choose(e) {
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    document.querySelectorAll("#idk li").forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  }
}
