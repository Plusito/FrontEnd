let sec = 0;
let task;

function count() {
  document.getElementById("1").textContent = sec;
  sec++;
}

function start() {
  task = setInterval(count, 1000);
}

function stop() {
  clearInterval(task);
  task = null;
}
