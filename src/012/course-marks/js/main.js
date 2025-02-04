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
  outputLine("Edit this form's event handler to compare the values");
};

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
