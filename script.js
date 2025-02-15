function search() {
  window.location.href =
    "https://duckduckgo.com/?q=" + document.getElementById("search").value;
}
function classToggle(a, r) {
  a.classList.add("active");
  r.classList.remove("active");
}
function setTime() {
  let greeting = document.getElementById("greeting");
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let moon = document.getElementById("moon-icon");
  let sun = document.getElementById("sun-icon");

  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (h < 12 && h > 5) {
    greeting.innerHTML = "Moin Moin!";
    classToggle(sun, moon);
  } else if (h < 18) {
    greeting.innerHTML = "Hallo!";
    classToggle(sun, moon);
  } else if (h <= 23) {
    greeting.innerHTML = "Guten Abend!";
    classToggle(moon, sun);
  } else {
    gretting.innerHTML = "Gute Nacht!";
    classToggle(moon, sun);
  }
  hour.innerHTML = h < 10 ? "0" + h : h;
  minute.innerHTML = m < 10 ? "0" + m : m;
  second.innerHTML = s < 10 ? "0" + s : s;
  setTimeout(setTime, 1000);
}
setTime();
