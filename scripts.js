clap = new Audio('media/clap.wav');
hihat = new Audio('media/hihat.wav');
kick = new Audio('media/kick.wav');
percussion = new Audio('media/percussion.wav');
ride = new Audio('media/ride.wav');
rimshot = new Audio('media/rimshot.wav');
shaker = new Audio('media/shaker.wav');
snap = new Audio('media/snap.wav');
snare = new Audio('media/snare.wav');


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