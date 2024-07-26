dayjs.extend(dayjs_plugin_duration);

function activateCountDown(element, dateString) {
const targetDate = dayjs(dateString);

element.querySelector(".until_event").textContent = `Until ${ targetDate.format("D MMMM YYYY") }`;

setInterval(() => {
const now = dayjs();
const duration = dayjs.duration(targetDate.diff(now));

if (duration.asMilliseconds() <= 0) return;

element.querySelector(".until_numeric-seconds").textContent = duration.seconds().toString().padStart(2, "0")
element.querySelector(".until_numeric-minutes").textContent = duration.minutes().toString().padStart(2, "0")
element.querySelector(".until_numeric-hours").textContent = duration.hours().toString().padStart(2, "0")
element.querySelector(".until_numeric-days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0")

}, 250)
}

activateCountDown(document.getElementById("myCountDown"), "2024-10-27")