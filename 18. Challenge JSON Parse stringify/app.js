let d = new Date();
d = Date.now();
d = new Date(2020, 10, 7, 6, 35, 44, 13);
// d = d.toString();
d = d.toDateString();

let value = d;
console.log(value);

let days = 10;
const newDate = new Date(Date.now() + (days *24*60*60*1000));
console.log(newDate);
