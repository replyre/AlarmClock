const time = document.querySelector(".current-time");
const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const ActiveAlarms = document.querySelector(".alarm-list");
const setAlarm = document.getElementById("set");
const ClearAll = document.querySelector(".clear");
const alarmsound = new Audio("./alarm.wav");

let alarmIndex = 0;
let alarmArray = [];
let IniitialHour = 0;
let initialMinute = 0;

const appendZero = (value) => (value < 10 ? "0" + value : value);
const displayTimer = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString("en-US", { hour12: false });
  time.textContent = currentTime;

  alarmArray.forEach((alarm) => {
    if (alarm.isActive && alarm.time === currentTime.slice(0, 5)) {
      alarmsound.play();
    }
  });
};
