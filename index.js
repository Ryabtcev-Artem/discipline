const timer = document.querySelector('.timer');
const daysCountElement = document.querySelector('.timerSigns__daysCount')
const hoursCountElement = document.querySelector('.timerSigns__hoursCount')
const minutesCountElement = document.querySelector('.timerSigns__minutesCount')
const secondsCountElement = document.querySelector('.timerSigns__secondsCount')
const startTime = new Date(2025,5,23,21,52);

setInterval(() => {
    const currentTime = new Date();
    const difference = Math.floor((currentTime - startTime) / 1000); // в секундах
    const days = String(Math.floor(difference / 86400)).padStart(2, '0');
    const hours = String(Math.floor((difference % 86400)/3600)).padStart(2, '0');
    const minutes = String(Math.floor((difference % 3600) / 60)).padStart(2, '0');
    const seconds = String(difference % 60).padStart(2, '0');
    daysCountElement.innerText = days+':'
    hoursCountElement.innerText = hours+':'
    minutesCountElement.innerText = minutes+':'
    secondsCountElement.innerText = seconds
}, 1000);
