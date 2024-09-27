let countdown;
let isCounting = false;

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    countdown = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = Math.floor(timer % 60);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', function () {
    if (!isCounting) {
        let fiveMinutes = 60 * 5; // 5 minutes in seconds
        startTimer(fiveMinutes);
        isCounting = true;
    }
});
