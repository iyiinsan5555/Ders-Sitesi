document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('June 22, 2025');
    const countdownElement = document.getElementById('countdown');
    const animationElement = document.getElementById('animationElement');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} gün ${hours} saaat ${minutes} dakika ${seconds} saniye`;
    }

    setInterval(updateCountdown, 1000);
});
