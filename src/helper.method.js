String.prototype.toPersianDigit = function (a) {
    return this.replace(/\d+/g, function (digit) {
        var enDigitArr = [], peDigitArr = [], i, j;
        for (i = 0; i < digit.length; i += 1) {
            enDigitArr.push(digit.charCodeAt(i));
        }
        for (j = 0; j < enDigitArr.length; j += 1) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!a && a === true) ? 1584 : 1728)));
        }
        return peDigitArr.join('');
    });
};

var toPersianDigit = function (digit) {
    return digit.toString().toPersianDigit();
}, isArray = function (input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}, isString = function (input) {
    return typeof input === "string" ? true : false;
}, isNumber = function (input) {
    return typeof input === "number" ? true : false;
}, isDate = function (input) {
    return input instanceof Date;
}, isUndefined = function (input) {
    if (typeof input === "undefined")
        return true;
    else
        return false;
}, leftZeroFill = function (number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}, absRound = function (number) {
    if (number < 0) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}, mod = function (a, b) {
    return a - (b * Math.floor(a / b));
};