clap = new Audio('media/clap.wav');
hihat = new Audio('media/hihat.wav');
kick = new Audio('media/kick.wav');
percussion = new Audio('media/percussion.wav');
ride = new Audio('media/ride.wav');
rimshot = new Audio('media/rimshot.wav');
shaker = new Audio('media/shaker.wav');
snap = new Audio('media/snap.wav');
snare = new Audio('media/snare.wav');

function triggerKey(key, state) {
    if (state) {
        new Audio(`media/${key.lastElementChild.textContent.toLowerCase()}.wav`).play();
        key.classList.add('played');
    } else {
        key.classList.remove('played');
    }
}

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    triggerKey(document.querySelector(`[data-key="${e.code}"]`), 1);
});

document.addEventListener('keyup', e => {
    triggerKey(document.querySelector(`[data-key="${e.code}"]`), 0);
});

keys = document.querySelector('.keys').children;

for (key of keys) {
    key.addEventListener('mousedown', e => {
        triggerKey(e.currentTarget, 1);
        e.preventDefault();
    });
    key.addEventListener('mouseup', e => {
        triggerKey(e.currentTarget, 0);
        e.preventDefault();
    })
    key.addEventListener('mouseleave', e => {
        triggerKey(e.currentTarget, 0);
        e.preventDefault();
    })
}