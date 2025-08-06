var firstName = "john";
var lastName = "doe";
var capitalize = function (word) {
    if (word.length === 0) {
        return "";
    }
    var firstChar = word[0].toUpperCase();
    var rest = word.slice(1);
    return firstChar + rest;
};
firstName = capitalize(firstName);
lastName = capitalize(lastName);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
