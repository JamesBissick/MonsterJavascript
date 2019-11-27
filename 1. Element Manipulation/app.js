var temp = document.querySelector('#output');

temp.innerHTML = '<h2>James</h2>';
temp.setAttribute('class', 'message');

const listItems = document.querySelectorAll('li');
listItems.forEach(function (item, count) {
    item.id = 'li' + count;
    item.textContent = 'list item #' + (count + 1);
    if (item.getAttribute('class')){
        console.log(item.getAttribute('class'));
        item.style.color = '#EA555B';
    } else {
        item.textContent = 'No class';
        item.classList.add('test');
        console.log(item.classList.contains('test'));
    }
});
