let player = {
    speed: 100,
    x: 100,
    y: 100
};

window.addEventListener('DOMContentLoaded', build);
document.addEventListener('keydown', function (e) {
    let key = e.keyCode;
    console.log(key);
    if (key === 37){
        player.y -= player.speed;
    } else if (key === 39){
        player.y += player.speed;
    } else if (key === 38){
        player.x -= player.speed;
    } else if (key === 40){
        player.x += player.speed;
    }
    player.elmnt.style.top = player.x + 'px';
    player.elmnt.style.left = player.y + 'px';
});

function build() {
    player.elmnt = document.createElement('div');
    player.elmnt.style.position = 'absolute';
    player.elmnt.style.width = '100px';
    player.elmnt.style.height = '100px';
    player.elmnt.style.backgroundColor = '#F86B60';
    player.elmnt.style.top = player.x + 'px';
    player.elmnt.style.left = player.y + 'px';
    document.body.appendChild(player.elmnt);
}
