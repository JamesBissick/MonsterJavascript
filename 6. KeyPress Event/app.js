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

const ul = document.querySelector('ul');
document.addEventListener('keydown', function (e) {
    let li = document.createElement('li');
    let temp = e.key + '(' + e.keyCode + ')';
    let textC = document.createTextNode(temp);
    li.appendChild(textC);
    ul.appendChild(li);
})
