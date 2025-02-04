# Conditional Expressions

To understand condition expressions as used in `if` and looping statements, use these files in a Node REPL environment.

1. Open a new Node REPL in this directory.
1. Load up the data with `.load data.js`
1. Since `if` statements enclose the conditional expressions in parenthesis, explore creating those expressions by themselves. For example
    - `(numberEight == textEight)`
    - `(numberEight === textEight)`
    - `(seven > oneThousand)`
1. Emphasize the fact that the `.value` property of `<input>`, `<select>` and `<textarea>` elements is **always a string**
1. If you are ever uncertain about the data type during this exercise, bring in `.load repl.js` and run `dataType(value)`


```js
// data.js
let textZero = '0';
let numberZero = 0;
let numberEight = 8;
let numberFive = 5;
let textEight = '8';
let name = 'Stewart';
let textDate = '2025-02-28'; // ISO format, date only
// let textTime = '07:43:13.340Z'; // ISO format, time only
// let textDateTime = "2025-02-28T07:43:07.620Z";
let success = true;
let failure = false;

// numbers as strings
let oneThousand = '1000';
let seven = '7';
```

```js
//repl.js
// Utility functions for explorations
const stringFormat = function (template, ...args) {
  return template.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== "undefined" ? args[number] : match;
  });
}

const dataType = function (value) {
    let result;
    if(value == undefined || value == null) {
        result = `The value is ${value}`;
    } else {
        result = `The data type is ${value.constructor.name}`;
    }
    return result;
}
```
