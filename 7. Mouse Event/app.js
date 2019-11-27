const eleList = document.querySelectorAll('li');

for (let x = 0; x < eleList.length; x++){
    eleList[x].style.padding = '15px';
    eleList[x].addEventListener('mouseover', function () {
        console.log(eleList[x]);
        this.classList.add('red');
    });
    eleList[x].addEventListener('mouseout', function () {
        this.classList.remove('red');
    })
}
