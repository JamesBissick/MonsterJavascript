const btn = document.querySelector('button');
btn.addEventListener('click', func);

function func(event) {
/*    console.log(event); // Return click position
    console.log(event.target);  // Return event's element
    console.log(this); // Return event's element*/
}

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

const colorList = [
    '#D87063',
    '#E7A540',
    '#E6835C',
    '#00796B'
];

const btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++){
    btns[i].style.width = '65px';
    btns[i].style.padding = '15px';
    btns[i].style.backgroundColor = colorList[i];
    btns[i].addEventListener('click', function () {
        document.body.style.backgroundColor = colorList[i];
    });
}


