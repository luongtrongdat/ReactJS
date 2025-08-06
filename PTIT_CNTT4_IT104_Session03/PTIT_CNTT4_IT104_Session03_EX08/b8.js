var sum = function (num1, num2) {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7";
    }
    else {
        return Number(num1) + Number(num2);
    }
};
var subtract = function (num1, num2) {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7";
    }
    else {
        return Number(num1) - Number(num2);
    }
};
var multi = function (num1, num2) {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7";
    }
    else {
        return Number(num1) * Number(num2);
    }
};
var divide = function (num1, num2) {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return "Gi\u00E1 tr\u1ECB kh\u00F4ng h\u1EE3p l\u1EC7";
    }
    else {
        return Number(num1) / Number(num2);
    }
};
console.log("Sum: ", sum(12, "ab"));
console.log("Sum: ", sum(8, "10"));
console.log("\nSubtraction: ", subtract("abc", 26));
console.log("Subtraction: ", subtract("30", 26));
console.log("\nMulti: ", multi(2, 12));
console.log("Multi: ", multi("15", "a"));
console.log("\nDivide: ", divide(15, 5));
console.log("Divide: ", divide("15", "3"));
console.log("Divide: ", divide("15", "ba"));
