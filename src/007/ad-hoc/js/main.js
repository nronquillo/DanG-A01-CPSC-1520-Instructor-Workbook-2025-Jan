console.log('main.js has been loaded');
let step = 0; // A global variable to track our current step
const appendTitle = function(someText) {
    const sandbox = document.querySelector('output#sandbox');
    sandbox.innerHTML += `<h6>${someText}</h6>`;
}
const appendLine = function(someText) {
    let letter = `${offsetStepA(step++)}) `;
    const sandbox = document.querySelector('output#sandbox');
    sandbox.innerHTML += '<br>';
    sandbox.innerHTML += letter + someText;
}
const offsetStepA = function(offset) {
    let step = 'A';
    let characterCode = step.charCodeAt(0);
    characterCode += offset;
    let text = String.fromCharCode(characterCode);
    return text;
}

// TODO: Use the space below for playing with JavaScript.
appendTitle('Explore string functions');
// .trim() (plus left/right trim), .toUpperCase()/.toLowerCase(), .padStart()/.padEnd(), .repeat(), .replace() + .replaceAll(), .substr() vs. .substring()
let myName = 'Guido Andropov Drozdowski';
appendLine(`The text in "${myName}" has ${myName.length} characters.`);
let someText = '   Bob  \n\t'; // "\n" is a New Line character, "\t" is tab character
appendLine(`someText has ${someText.length} characters, but I can trim it: "${someText.trimEnd()}"`);
// someText.trim()
// \______/\_____/
//  string    |
//         .trim() is a function naitive to string objects/variables
//         \_____/
// returns a string
myName += '. '; // append some text to my existing value
appendLine(myName.repeat(3));
//         \______________/
//            string
appendLine(myName.padEnd(30, '!'));
myName = 'Inigo Montoya';
let message = `My name is ${myName.bold()}! You killed my father! Prepare to die!`;
appendLine(message);
// Student TODO: Explore some of the other string functions

// Math operator and functions
appendLine(''); // visual line break
step = 0; // reset for my display on the page
appendTitle('Exploring Math operators and functions');

/* Math Assignment Operators
    count += 1; // same as count = count + 1
    count += 5; // same as count = count + 5
    count *= 2; // same as count = count * 2
    ++ is the increment operator; -- is the decrement operator
    count++;    // same as count = count + 1
    count--;    // same as count = count - 1
    ++ and -- can be put in front of (prefix) the variable or after (postfix) the variable
 */
// Code copied from agenda...
let count = 1;
appendLine(`Count starts out as ${count}`);
appendLine(`Postfix increment: count is ${count++} and then ${count}`);
//                                        \_1_/          
//                                        \_++__/
//                                                          \ next /  
appendLine(`Prefix increment: count is ${++count} and then ${count}`);
//                                       \_____/ Increases before getting value
// ... end of copy/paste

// We have a Math object in JavaScript for various math operations
// <sup> is for super-script and <sub> is for subscript
appendLine('Pythagorean Theorm: C<sup>2</sup> = A<sup>2</sup> + B<sup>2</sup>');
let adjacent = 3;
let opposite = 4;

let hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
appendLine(`My triangle has sides of length ${hypotenuse}, ${opposite} and ${adjacent}`);
appendLine(`The value of PI is ${Math.PI}`);

