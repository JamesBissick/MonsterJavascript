let myString = 'Hello World Javascript 123 this works, I love Javascript';

// Basic methods
console.log(myString.length);
console.log(myString.toLowerCase());

// Remove starting and ending spaces
console.log(myString.trim());

// Split by a selected char
console.log(myString.split(' '));

// What char is char (7)
console.log(myString.charAt(7));

// Select start and ending of string
console.log(myString.slice(6, 12));
console.log(myString.substring(0, 6));
console.log(myString.substr(12, 20));

// Replace words
let output;
output = myString.replace('love', 'enjoy');
console.log(output);
