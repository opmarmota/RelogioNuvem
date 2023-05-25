document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MeuRelogio").innerText = time;
  document.getElementById("MeuRelogio").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

document.addEventListener("DOMContentLoaded", function () {
  var hora = new Date().getHours();
  var body = document.querySelector("body");

  if (hora >= 6 && hora < 12) {
    body.classList.add("manha");
  } else if (hora >= 12 && hora < 18) {
    body.classList.add("tarde");
  } else {
    body.classList.add("noite");
  }
});