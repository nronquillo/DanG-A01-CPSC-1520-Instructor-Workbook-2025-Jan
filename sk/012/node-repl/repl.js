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
