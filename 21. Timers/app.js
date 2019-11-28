// Runs the func once after 500ms
const timeoutID = window.setTimeout(cb, 500, 'TimeOut');

// Runs the func every 500ms
//const intervalID = window.setInterval(cb, 500, 'interval');

function cb(mes) {
    console.log(mes);
}

function stopInterval(){
    clearInterval(intervalID);
}

let x = 0;
const el = document.querySelector('div');
el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = '#2E76F5';

function step() {
    x++;
    el.style.transform = 'translateX(' + x + 'px)';
    if (x < 450){
        window.requestAnimationFrame(step);
    }
}
window.requestAnimationFrame(step);


// Challenge Countdown

const countdown = window.setInterval(decreaseByOne, 1000);
const display = document.getElementById('countdown');
display.style.textAlign = 'center';
display.style.marginTop = '150px';
display.style.fontSize = '3em';
display.style.fontFamily = 'Operator Mono';
display.style.color = '#249A95';
let i = 20;

function decreaseByOne() {
    if (i > 0) {
        display.innerHTML = i;
        i--;
    } else {
        clearInterval(countdown);
        display.innerHTML = '🔥 BOOM! 🧨';
    }
}

