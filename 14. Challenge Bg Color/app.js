function genRandColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

document.body.style.backgroundColor = genRandColor();

genRandColor();
