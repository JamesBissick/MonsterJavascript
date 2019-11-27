const inputSelect = document.querySelector('input[name="new"]');
const mainList = document.querySelector('ul');
const allListItems = document.querySelectorAll('li');

for (let i = 0; i < allListItems.length; i++){
    allListItems[i].addEventListener('click', myList);
}

inputSelect.addEventListener('keypress', function (event) {
    if (event.keyCode === 13){
        makeNew();
    }
});

function makeNew() {
    let li = document.createElement('li');
    li.addEventListener('click', myList);
    let textValue = inputSelect.value;
    inputSelect.value = '';
    let tempNode = document.createTextNode(textValue);
    li.appendChild(tempNode);
    console.log(li);
    mainList.appendChild(li);
}

function myList(){
    let temp = this.classList.toggle('red');
    if (temp){
        let span = document.createElement('span');
        span.textContent = ' X';
        span.addEventListener('click', function () {
            this.parentElement.remove();
        });
        this.appendChild(span);
    } else {
        this.getElementsByName('span')[0].remove();
    }
}

inputSelect.addEventListener('keypress', function (event) {
    if (event.keyCode === 13){
        console.log(event.keyCode);
        makeNew();
    }
});

