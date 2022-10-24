function relogio() {
function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.clock');
let segundos = 0;
let timer;

function startTimer() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('reset')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado');
    }
    if (el.classList.contains('stop')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    if (el.classList.contains('start')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startTimer();
    }
});
}
relogio();