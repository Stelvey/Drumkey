// The very thing that makes keys go brr
let triggerKey = (key, state) => {
    // The line below prevents errors from pushing other keys
    if (!key) return;
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
const soundpacks = new Map([
    ['Drumkey', ['CLAP', 'HIHAT', 'KICK', 'PERCUSSION', 'RIDE', 'RIMSHOT', 'SHAKER', 'SNAP', 'SNARE']],
    ['Drunkey', ['CAN', 'CAN', 'CAN', 'CAN', 'CAN', 'CAN', 'CAN', 'CAN', 'CAN']]
]);
function checkTitle(title) {
    switch (title) {
        case 'Drumkey':
            for (let i = 0; i < keys.length; i++) {
                keys[i].lastElementChild.textContent = soundpacks.get('Drumkey')[i];
            }
            return true;
        case 'Drunkey':
            for (let i = 0; i < keys.length; i++) {
                keys[i].lastElementChild.textContent = soundpacks.get('Drunkey')[i];
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

// Attempt at preloading audio so that there's no "first delay"
for (const [key, values] of soundpacks.entries()) {
    for (value of values) {
        audio = new Audio(`media/${key.toLowerCase()}/${value.toLowerCase()}.wav`);
    }
}