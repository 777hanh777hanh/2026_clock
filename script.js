const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let intervalID = null;
let isConvertTo12Hour = true;

if (intervalID) {
  clearInterval(intervalID);
}

intervalID = setInterval(() => {
  const hrsEle = $("#hrs");
  const minEle = $("#min");
  const secEle = $("#sec");

  const day = new Date();
  const hrs = day.getHours() * 30;
  const min = day.getMinutes() * 6;
  const sec = day.getSeconds() * 6;

  hrsEle.style.transform = `rotateZ(${hrs + min / 12}deg)`;
  minEle.style.transform = `rotateZ(${min}deg)`;
  secEle.style.transform = `rotateZ(${sec}deg)`;

  // digital clock

  const hourEle = $("#hour");
  const minutesEle = $("#minutes");
  const secondsEle = $("#seconds");
  const ampmEle = $("#ampm");

  let hour = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  if (isConvertTo12Hour) {
    hour = hour - 12;
  }

  hourEle.innerHTML = hour.toString().padStart(2, "0");
  minutesEle.innerHTML = minutes.toString().padStart(2, "0");
  secondsEle.innerHTML = seconds.toString().padStart(2, "0");
  ampmEle.innerHTML = ampm;
}, 500);

const modeClockEle = $(".modeClock");

if (isConvertTo12Hour) modeClockEle.classList.add("active");

modeClockEle.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  modeClockEle.classList.toggle("active");

  isConvertTo12Hour = !isConvertTo12Hour;

  !isConvertTo12Hour ? $("#ampm").classList.add("hide-ele") : $("#ampm").classList.remove("hide-ele");
});
