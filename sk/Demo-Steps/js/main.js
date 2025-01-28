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