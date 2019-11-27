const mainList = document.querySelector('ul');
const input = document.querySelector('#input');
const clicker = document.querySelector('#btn');

clicker.addEventListener('click', func);

function func() {
    if (input.value.length >= 3){
        let li = document.createElement('li');
        let temp = document.createTextNode(input.value);
        li.appendChild(temp);
        mainList.appendChild(li);
    } else {
        console.log('Invalid!');
    }
}

function colorChange() {
    const colorList = [
        '#D87063',
        '#E7A540',
        '#E6835C',
        '#00796B'
    ];
    let random = colorList[Math.floor(Math.random() * 4)];
    document.querySelector('body').style.backgroundColor = random;
}
