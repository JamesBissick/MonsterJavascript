const imgList = document.querySelectorAll('img');
for (let i = 0; i < imgList.length; i++){
    imgList[i].addEventListener('click', function () {
        window.open(this.src, 'image', 'resizable=yes')
    })
}
