console.log('JavaScript file loaded!');

// This is what can be called an Event Handler - a function that you create for the
// purpose of responding to some kind of event.
/**
 * handleClick() is designed for handling click events
 * @param {Event} event The details of the event sent in from the browser
 */
const handleClick = function(event) { // const because I don't trust myself or other developers
    //                       \___/  <--- Receive an object with details of the event
    // TODO: Use for exploration purposes
    event.preventDefault();     // This will stop the default behaviour of the .target element
    console.log(event);         // Let's see what is inside this object
    const target = event.target;// This is the DOM element that the event happened on
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
    //             the name of the HTML tag for that DOM element -->      \______/
}

let heading = document.querySelector('h1');
// We "register" or "hook-up" our event handler with the DOM element by
// adding an "event listener". This tells the browser to call our method
// whenever that event happens on that DOM element.
heading.addEventListener('click', handleClick);
//                       \_____/  \_________/   <== these two arguments are "values" I pass in
//                         |         |  <--- Notice that this is the NAME of the function,
//                         |                 not a "call" of the function.
//                         |  <--- String that identifies the type of event


// TODO: Add an event listener for the button with id "register".
//       Listen for the 'dblclick' event.
//       Prompt the user for their name, then for their email,
//       then output the information to the #feedback element.
document.querySelector('#register') // <-- This gets the DOM element
        .addEventListener('dblclick', function(evt) {   // I am passing in a function declaration
            let name = prompt('Tell me your name');
            let email = prompt('Tell me your email');
            document.querySelector('#feedback').innerHTML += `<br />Thank you ${name}. You have been added to the No Fly list. Check your spam folder at ${email}`;
        });

// TODO: Add another event listener for the heading, this time for
//       the 'dblclick' event.
//       Try changing the theme by assigning either 'light' or 'dark'
//       to the following element's property:
//          document.querySelector('html').dataset.theme
//       Try it out, then inspect the elements in the Dev Tools.
