var string = "hello world";
var newString = "";
for (var i = 0; i < string.length; i++) {
    if (newString.includes(string[i])) {
        continue;
    }
    else {
        newString += string[i];
    }
}
console.log("New string: ", newString);
