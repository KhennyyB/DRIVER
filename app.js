const countdown = () => {
    const countDate = new Date('Septeber 13, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;



    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute / seconds));
    
    
    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".minute").innerText = textMinute
    document.querySelector(".seconds").innerText = textSeconds
}

setInterval(countdown);
