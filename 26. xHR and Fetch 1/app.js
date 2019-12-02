let xhr = new XMLHttpRequest();
const url = 'https://api.chucknorris.io/jokes/random';
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        let joke = JSON.parse(xhr.response);
        console.log(joke);
        document.querySelector('div').innerHTML = '<img src="' + joke.icon_url + '"><br>' + joke.value;
    }
};
xhr.open('GET', url);
xhr.send();
console.log(xhr);
