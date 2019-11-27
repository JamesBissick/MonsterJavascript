const arr = ['Hello!', 'Welcome!', 'Bye!'];
let temp = randItem(arr);
let message = document.createTextNode(temp);
document.body.appendChild(message);

function randItem(arr) {
    let temp = Math.floor(Math.random() * arr.length);
    return arr[temp];
}

