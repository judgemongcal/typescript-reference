// Part 1
var twoFer = function (name) {
    if (name === void 0) { name = 'you'; }
    return "one for ".concat(name, ", one for me.");
};
console.log(twoFer('Kevin'));
// Part 2
var isLeapyear = function (year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    else if (year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
};
var isLeapyear2 = function (year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
};
console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
console.log(isLeapyear2(2012));
console.log(isLeapyear2(2013));
