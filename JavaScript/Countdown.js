document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('June 21, 2025');
    const OkultargetDate = new Date('September 9, 2024');
    const countdownElement = document.getElementById('countdown');
    const okulcountdownElement = document.getElementById('okulcountdown');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
    }

    function updateOkulCountdown() {
        const now = new Date();
        const difference = OkultargetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        okulcountdownElement.innerHTML ="Okulların Açılmasına: " + `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
    }

    setInterval(updateCountdown, 1000);
    setInterval(updateOkulCountdown, 1000);
});
