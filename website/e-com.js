// Simple Countdown Timer
const countdown = () => {
    const endDate = new Date("Dec 31, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = mins;
    document.getElementById("seconds").innerText = secs;
}

setInterval(countdown, 1000);