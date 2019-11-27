const myObj = {
    first: 'James',
    last: 'Harrys'
};

let temp = JSON.stringify(myObj);
localStorage.setItem('object', temp);
let nObj = JSON.parse(localStorage.getItem('object'));
console.log(nObj);

if (localStorage.getItem('num')){
    let count = localStorage.getItem('num');
    count = Number(count);
    count++;
    localStorage.setItem('num', count);
} else {
    localStorage.setItem('num', 1);
}

console.log(localStorage.getItem('num'));
