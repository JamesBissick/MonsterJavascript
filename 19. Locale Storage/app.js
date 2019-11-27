const myObj = {
    first: 'James',
    last: 'Harrys'
};

// Parse it into a string
let myString = JSON.stringify(myObj);
console.log(myString);

// Parse it into an object
let newObj = JSON.parse(myString);
console.log(newObj);
