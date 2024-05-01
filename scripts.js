function triggerKey(code, state) {
    for (key of keys.children) {
        if (`Key${key.firstElementChild.textContent}` === code) {
            if (state) {
                key.classList.add('played');
            } else {
                key.classList.remove('played');
            }
        }
    }
}

keys = document.querySelector('.keys');

document.addEventListener('keydown', e => {
    triggerKey(e.code, 1);
});

document.addEventListener('keyup', e => {
    triggerKey(e.code, 0);
});