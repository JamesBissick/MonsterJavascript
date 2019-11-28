const el = document.createElement('input');
el.setAttribute('type', 'text');
document.body.appendChild(el);
const btn = document.querySelector('button');
btn.addEventListener('click', multiply);

function tester() {
    let num = el.value;
    try {
        if (num === '') throw 'No value';
        if (isNaN(num)) throw 'Not a number';
        num = Number(num);

        if (num > 5) throw 'Over 5';
        if (num < 5) throw 'Over 5';
    }
    catch (e) {
        console.log(e);
    }
    finally {
        console.log('This will always run');
    }
}


// Challenge

function multiply(e) {
    let value = el.value;
    try {
        if (value === '') throw 'No value';
        if (isNaN(value)) throw 'Not a number';
        numValue = Number(value);
        console.log(numValue * 10);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        el.value = '';
    }
}
