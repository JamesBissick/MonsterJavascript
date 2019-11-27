const excNums = [2, 3, 7, 11, 8, 14, 10, 18];

function genRandNum(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return  excNums.includes(num) ? genRandNum(min, max) : num;
}

for (let x = 0; x < 20; x++) {
    let min = 1;
    let max = 20;
    let num = genRandNum(min, max);
    console.log(num);
}
