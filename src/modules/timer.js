export const timer = (dedline) => {
  const timerHour = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimerRemaining = () => {
    let dateStop = new Date(dedline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      days,
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimerRemaining();

    let nullcheck = () => {
      if (getTime.hours < 10) {
        getTime.hours = "0" + getTime.hours;
      }
      if (getTime.minutes < 10) {
        getTime.minutes = "0" + getTime.minutes;
      }
      if (getTime.seconds < 10) {
        getTime.seconds = "0" + getTime.seconds;
      }
    };
    nullcheck();

    timerHour.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
    }
    if (getTime.timeRemaining < 0) {
      timerHour.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };
  let interval = setInterval(updateClock, 1000);
};
