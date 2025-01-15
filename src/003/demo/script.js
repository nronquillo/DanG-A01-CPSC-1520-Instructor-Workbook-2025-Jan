console.log('script.js has loaded');
// Single-line and multi-line comments in JavaScript
// are the same as the ones in C#

// JavaScript is a dynamically-typed language.
// Our JS variables are not declared with a specific data type.
// Instead, their data type is determined by the value we store
// in the variable.
let myHeading = document.querySelector('h2'); // first <h2>
console.log('myHeading is:', myHeading);
console.log('The text in that element is:', myHeading.innerText);

myHeading.innerText = 'Modify HTML with JavaScript';

/*
    JavaScript is a dynamically-typed language. That means that
    whenever we change the value in a variable, we have also changed
    the data type of that variable.
*/
myHeading = "words of text."; // changed the variable to a string
console.log(myHeading);

// In C#, you could do string interplolation like this: $"Hello {name}"
// The JavaScript equivalent for that would be this: `Hello ${name}`
console.log(`I changed the myHeading variable to be "${myHeading}"`);
