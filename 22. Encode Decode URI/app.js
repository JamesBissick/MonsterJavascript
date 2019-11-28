let url = window.location.href;
console.log(url);
let encodeURL = encodeURIComponent(url);
let decodeURL = decodeURIComponent(encodeURL);
console.log(encodeURL);
console.log(decodeURL);

let url2 = 'https://www.google.com/';
console.log(encodeURI(url2));
console.log(decodeURI(url2));
console.log(encodeURIComponent(url2));
