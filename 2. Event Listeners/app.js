const eleList = document.querySelectorAll('.active');
for (let x = 0; x < eleList.length; x++){
    console.log(eleList[x]);
    eleList[x].style.color = '#E6835C';
    eleList[x].addEventListener('click', makeItGreen);
}

function makeItGreen() {
    console.log(this);
    let temp = this.classList.toggle('green');
    this.style.color = '#00796B';
    console.log(temp);
}


