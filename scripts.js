// Attempt at preloading audio so that there's no "first delay"
clap = new Audio('media/drumkey/clap.wav');
hihat = new Audio('media/drumkey/hihat.wav');
kick = new Audio('media/drumkey/kick.wav');
percussion = new Audio('media/drumkey/percussion.wav');
ride = new Audio('media/drumkey/ride.wav');
rimshot = new Audio('media/drumkey/rimshot.wav');
shaker = new Audio('media/drumkey/shaker.wav');
snap = new Audio('media/drumkey/snap.wav');
snare = new Audio('media/drumkey/snare.wav');
can = new Audio('media/drunkey/can.wav');

// The very thing that makes keys go brr
let triggerKey = (key, state) => {
    if (state) {
        new Audio(`media/${title.textContent.toLowerCase()}/${key.lastElementChild.textContent.toLowerCase()}.wav`).play();
        key.classList.add('played');
    } else {
        key.classList.remove('played');
    }
}

// Keyboard controls
document.addEventListener('keydown', e => {
    // The line below prevents repeated sounds when the key is held
    if (e.repeat) return;
    triggerKey(document.querySelector(`[data-key="${e.code}"]`), 1);
});
document.addEventListener('keyup', e => {
    triggerKey(document.querySelector(`[data-key="${e.code}"]`), 0);
});

keys = document.querySelector('.keys').children;
for (key of keys) {
    // Mouse controls
    key.addEventListener('mousedown', e => {
        triggerKey(e.currentTarget, 1);
    });
    key.addEventListener('mouseup', e => {
        triggerKey(e.currentTarget, 0);
    })
    key.addEventListener('mouseleave', e => {
        triggerKey(e.currentTarget, 0);
    })

    // Touch controls
    key.addEventListener('touchstart', e => {
        triggerKey(e.currentTarget, 1);
        e.preventDefault();
    });
    key.addEventListener('touchend', e => {
        triggerKey(e.currentTarget, 0);
        e.preventDefault();
    })
    // IF YOU MOVE YOUR FINGER OFF IT IS STILL KINDA ACTIVE
    key.addEventListener('touchcancel', e => {
        triggerKey(e.currentTarget, 0);
        e.preventDefault();
    })
}

// Dumb easter egg
function checkTitle(title) {
    switch (title) {
        case 'Drumkey':
            const soundpack = ['clap', 'hihat', 'kick', 'percussion', 'ride', 'rimshot', 'shaker', 'snap', 'snare'];
            for (let i = 0; i < keys.length; i++) {
                keys[i].lastElementChild.textContent = soundpack[i];
            }
            return true;
        case 'Drunkey':
            for (let i = 0; i < keys.length; i++) {
                keys[i].lastElementChild.textContent = 'can';
            }
            return true;
    }
}
title = document.querySelector('header .primary');
title.addEventListener('input', e => {
    if (checkTitle(e.target.textContent)) {
        e.target.blur();
    }
})