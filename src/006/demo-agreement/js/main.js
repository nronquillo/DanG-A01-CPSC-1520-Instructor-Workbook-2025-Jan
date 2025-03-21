/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
let firstParty = prompt('Enter the name of the disclosing party');
let secondParty = prompt('Enter the name of the receiving party');

let disclosing = document.querySelector('.disclosing-party'); // selector is a class name
let receiving = document.querySelector('.receiving-party');

disclosing.innerText = firstParty;
receiving.innerText = secondParty;

// Put the values above the signature lines as well
disclosing = document.querySelector('.signature .disclosing-party');
receiving = document.querySelector('.signature .receiving-party');

disclosing.innerText = firstParty;
receiving.innerText = secondParty;
