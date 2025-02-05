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

  let isValid = true; // Optimistic that the data will be good
  let message;
  // Challenge: Make sure the user has supplied the
  //            name and weight. Display an error
  //            message if they haven't, otherwise
  //            display the data they entered.
  if(inputEvalName.value && inputWeight.value) {
    message = `The <b>${inputEvalName.value}</b> has a weight of <u>${inputWeight.value}</u>%.`;
    outputLine(message);
  } else {
    if(isBlank(inputEvalName)) {
      outputLine(errorHtml("The eval name is required."));
  //  \          \         \_____ string arg _________///
  //   \          \________  retuns a string _________//
  //    \_________ returns   undefined _______________/ 
      isValid = false; // We're missing information
    }
    if(isBlank(inputWeight)) {
      outputLine(errorHtml("The weight is required"));
      isValid = false;
    }
  }

  // TODO: Validate the total and earned points
  let inputTotal = elements.totalPoints;
  let inputEarned = elements['earnedPoints']; // indexer
  let canCalculate = false;
  if(isBlank(inputTotal)) {
    if(!isBlank(inputEarned)) {
      isValid = false; //   25 / ??
      outputLine(errorHtml('You must supply a total to go with the earned points.'));
    }
  } else {
    if(!isBlank(inputEarned)) {
      // make sure the earned is not greater than the total
      if(parseInput(inputEarned) > parseInput(inputTotal)) {
        outputLine(errorHtml('The earned cannot be bigger than the total'));
        isValid = false;
      } else {
        canCalculate = true;
      }
    } else {
      outputLine(`The total possible is ${parseInput(inputTotal)}, but you don't have your marks back yet.`);
    }
  }

  // final processing
  if(isValid) {
    message = "Processing the evaluation item....";
    if(canCalculate) {
      let avg = parseInput(inputEarned) / parseInput(inputTotal) * 100;
      let weightedAvg = avg * parseInput(inputWeight) / 100;
      outputLine(`Your mark was ${avg} %, and you earned ${weightedAvg} % towards your final mark.`);
    }

    // Clear the form inputs.
    inputEvalName.value = '';
    inputWeight.value = '';

    inputEvalName.focus(); // to set this <input> to have keyboard focus
  }
}; // end of the event handler

/**
 * Parses `<input type="number">` elements to get the value as a numeric type.
 * @param {HTMLInputElement} inputElement An input whose value should be numeric
 * @returns {number} - The parsed value, or NaN
 */
const parseInput = function(inputElement) {
  return parseFloat(inputElement.value);
}

/**
* Generate a span styled with the .error class.
* @param {string} htmlMarkup A string value that can include HTML markup
* @returns The htmlMarkup enclosed in a `<span class="error"></span>` tag
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
