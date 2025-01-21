// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));

/**
 * greetUser() will personalize the h1.intro element with a Welcome messge.
 * @param {string} username The name of someone
 */
const greetUser = function (username) { // the function is an anonymous function
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + mainTitle.innerHTML;
};


// Now I will call my greetUser function
greetUser('Uncle Bob');
