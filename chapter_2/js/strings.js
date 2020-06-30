// strings
console.log('hello, world');

let email = 'bob@thelad.co.uk';
console.log(email);

// string concatenation
let firstName = 'Bob';
let lastName = 'Dobb';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);