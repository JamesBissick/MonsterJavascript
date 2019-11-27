const outputEl = document.querySelector('section');
const els = document.querySelectorAll('div');

for (let i = 0; i < els.length; i++){
    el = els[i];
    el.style.border = '1px solid red';
    el.style.width = '100px';
    el.style.padding = '20px';
    el.v = (i + 1);
    el.addEventListener('click', capture, true);
    el.addEventListener('click', bubble, false);
}

function output(msg) {
    outputEl.innerHTML += `${msg}<br>`;
}

function bubble() {
    output('bubble: ' + this.v);
}

function capture() {
    output('capture: ' + this.v);
}
