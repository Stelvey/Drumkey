clap = new Audio('media/ride.wav');

function triggerKey(code, state) {
    for (key of keys.children) {
        if (`Key${key.firstElementChild.textContent}` === code) {
            if (state) {
                new Audio(`media/${key.lastElementChild.textContent.toLowerCase()}.wav`).play();
                key.classList.add('played');
            } else {
                key.classList.remove('played');
            }
        }
    }
}

keys = document.querySelector('.keys');

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    triggerKey(e.code, 1);
});

document.addEventListener('keyup', e => {
    triggerKey(e.code, 0);
});