// Some global variables that we will re-use frequently
const userInput = document.getElementById('userInput');    // <input />
const output = document.getElementById('transformedText'); // <pre></pre>
// Show the user input in the output
output.innerText = userInput.value;
// Form input tags have a .value property that holds the value of the input control.
// A little prep....
const presetPaddingLength = function() {
    let input = document.getElementById('minLength');
    input.value = userInput.value.length + 5;
}
presetPaddingLength();

// And now for the lesson....
document.getElementById('transformToUpperCase').addEventListener('click', function() {
    let newValue = userInput.value.toUpperCase(); // userInput is a <input type="text">
    //             \  string     /                // .value property
    output.innerText = newValue;
});

// TODO: 1) Write the code to transform the user's input to lower case and display it
//          The ID of the button is 'transformToLowerCase'
//       STUDENT_CODE_HERE
document.getElementById('transformToLowerCase').addEventListener('click', function() {
    let value = userInput.value;
    output.innerText = value.toLowerCase();
})


// Demo: 2) Write the code to pad the end of input text with the supplied character(s).
// TODO:    Modify the code below to use the appropriate user input for padding.
document.querySelector('#transformPadEnd').addEventListener('click', function() {
    let currentValue = userInput.value;
    let padText = document.getElementById('endText').value;
    let minLength = document.getElementById('minLength').value;
    let newValue = currentValue.padEnd(minLength, padText);
    output.innerText = newValue;
});

// TODO: 3) Write the code to output the input text with spaces trimmed from the left-hand side.
document.querySelector('#transformTrimLeft').addEventListener('click', function() {
    output.innerText = userInput.value.trimLeft();
});

// TODO: 4) Write the code to output the input text with spaces trimmed from the right-hand side.
document.querySelector('#transformTrimRight').addEventListener('click', function() {
    output.innerText = userInput.value.trimRight();
});

// TODO: 5) Write the code to output the input text with spaces trimmed from the both sides.
document.querySelector('#transformTrim').addEventListener('click', function() {
    output.innerText = userInput.value.trim();
});

// TODO: 6) Write the code to pad the start of input text with the supplied character(s).
document.querySelector('#transformPadStart').addEventListener('click', function() {
    let padText = document.querySelector('#startText').value;
    let length = parseInt(document.querySelector('#minLength').value);
    output.innerText = userInput.value.padStart(length, padText);
});

// TODO: 7) Write the code to replace text in the user's input.
document.querySelector('#transformReplace').addEventListener('click', function() {
    let searchText = document.querySelector('#replaceThis').value;
    let replaceText = document.querySelector('#replaceWith').value;
    output.innerText = userInput.value.replace(searchText, replaceText);
});

// TODO: 8) Write the code to repeat the text the specified number of times on separate lines.
document.querySelector('#transformRepeat').addEventListener('click', function() {
    let repeat = parseInt(document.querySelector('#repeatText').value);
    output.innerText = `${userInput.value}\n`.repeat(repeat);
});

