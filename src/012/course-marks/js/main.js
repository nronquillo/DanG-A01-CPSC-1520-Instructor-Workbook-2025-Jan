console.log("script file loaded");

/**
 * Displays HTML in the `<code id="output">` element.
 * @param {string} htmlMarkup A string value that can include HTML markup
 * @param {boolean} replace False if you wish to append the HTML, true if you wish to replace it
 */
const outputLine = function (htmlMarkup, replace) {
  const out = document.getElementById("output");
  htmlMarkup += "<br />";
  if (replace) {
    out.innerHTML = htmlMarkup;
  } else {
    out.innerHTML += htmlMarkup;
  }
};

/**
 * Adds evaluation items and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const addEvalItem = function (evt) {
  evt.preventDefault();
  // TODO: Write your exploratory code here
  outputLine("The <b>Add Eval Item</b> was clicked", true);

  // Get our form inputs
  let elements = evt.target.elements;
  console.log(elements);
  let inputEvalName = elements.evalName;
  let inputWeight = elements.weight;

  let message;
  // Challenge: Make sure the user has supplied the
  //            name and weight. Display an error
  //            message if they haven't, otherwise
  //            display the data they entered.
  if(inputEvalName.value && inputWeight.value) {
    message = `The <b>${inputEvalName.value}</b> has a weight of <u>${inputWeight.value}</u>.`;
    outputLine(message);
  } else {
    if(isBlank(inputEvalName)) {
      outputLine(errorHtml("The eval name is required."));
    }
    if(isBlank(inputWeight)) {
      outputLine(errorHtml("The weight is required"));
    }
  }
};

/**
* Generate a span styled with the .error class.
* @param {string} htmlMarkup A string value that can include HTML markup
* @returns The htmlMarkup enclosed in a '<span class="error"></span>' tag
*/
const errorHtml = function (htmlMarkup) {
  return `<span class="error">${htmlMarkup}</span>`;
};

/**
* Determine if the text in an input is blank, treating leading and trailing whitespace as blank.
* @param {HTMLInputElement} formInput A reference to an '<input>' element
* @returns boolean - true if the trimmed value is an empty string
*/
const isBlank = function(formInput) {
  return formInput.value.trim() === '';
}        

/**
 * Reports information about the last state of the form before the reset was applied to the input controls.
 * @param {Event} evt A `reset` event on the `<form>` element.
 */
const resetForm = function (evt) {
  outputLine("The form has been reset");
};

// Register the form event handlers
const form = document.querySelector("form");

form.addEventListener("submit", addEvalItem);
form.addEventListener("reset", resetForm);

// Register the calculation of final grades
const calc = document.getElementById("calc");

calc.addEventListener("click", function () {
  // TODO:
});

// Register the generation of fake data
const fake = document.getElementById("fake");

fake.addEventListener("click", function () {
  // TODO: Generate some random evaluation items with marks
});
