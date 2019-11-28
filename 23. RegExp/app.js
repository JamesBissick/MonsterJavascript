// https://regexr.com/

let myString = 'Hello World Javascript 12345 this works I love Javascript';
let reg = /(\w+)\s(\w+)/;

let temp1 = myString.replace(reg, 'Bye People');
console.log(temp1);
console.log(myString.match(/J/));
console.log(myString.match(/J/gi));

// test() search for a match between a regular expression and a specified string, return true or false
console.log(/Javascript/.test(myString));
console.log(/[0-9]/.test(myString));

// exec() search for a match in a specified string, returns a result array
console.log(/\d+/.exec(myString));


let myArray = ['one', 'two', 'three', 'four'];
let temp2 = myArray.toString();
let temp3 = myArray.join('-');
console.log(temp2);
console.log(temp3);
console.log(temp3.search(/two/));

// Challenge

let myString2 = 'Hellow World Javascript 1234 this works example@mail.com I love javascript sample@email.com';
let emailOutput = myString2.match(/([A-Za-z0-9._]+@+[A-Za-z0-9._]+\.[A-Za-z._])\w+/gi);

/*for (let email of emailOutput){
    console.log(email);
}*/

for (let i = 0; i < emailOutput.length; i++){
    console.log(emailOutput[i]);
}
