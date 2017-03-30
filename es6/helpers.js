/**
 * Helpers functions
 * @module helpers
 */


/**
 *
 * @param latinDigit
 * @returns {string} Persian equivalent unicode character of the given latin digits.
 */
String.prototype.toPersianDigit = function (latinDigit) {
    return this.replace(/\d+/g, function (digit) {
        var enDigitArr = [], peDigitArr = [], i, j;
        for (i = 0; i < digit.length; i += 1) {
            enDigitArr.push(digit.charCodeAt(i));
        }
        for (j = 0; j < enDigitArr.length; j += 1) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!latinDigit && latinDigit === true) ? 1584 : 1728)));
        }
        return peDigitArr.join('');
    });
};


/**
 *
 * @param digit
 * @returns {string|*}
 */
function toPersianDigit(digit) {
    return digit.toString().toPersianDigit();
}


/**
 *
 * @param input
 * @returns {boolean}
 */
function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}


/**
 *
 * @param input
 * @returns {boolean}
 */
function isString(input) {
    return typeof input === "string" ? true : false;
}


/**
 *
 * @param input
 * @returns {boolean}
 */
function isNumber(input) {
    return typeof input === "number" ? true : false;
}


/**
 *
 * @param input
 * @returns {boolean}
 */
function isDate(input) {
    return input instanceof Date;
}


/**
 *
 * @param input
 * @returns {boolean}
 */
function isUndefined(input) {
    if (typeof input === "undefined")
        return true;
    else
        return false;
}


/**
 *
 * @param number
 * @param targetLength
 * @returns {string}
 */
function leftZeroFill(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function log(input) {
    console.log(input)
}

function normalizeDuration() {
    let unit, value, output = {};

    // console.log(arguments[0]);
    // console.log(arguments[1]);

    if (typeof arguments[0] == 'string') {
        unit = arguments[0];
        value = arguments[1];
    }
    else {
        value = arguments[0];
        unit = arguments[1];
    }

    if (durationUnit.year.indexOf(unit) > -1) {
        unit = 'year';
    }
    else if (durationUnit.month.indexOf(unit) > -1) {
        unit = 'month';
    }
    else if (durationUnit.day.indexOf(unit) > -1) {
        unit = 'day';
    }
    else if (durationUnit.hour.indexOf(unit) > -1) {
        unit = 'hour';
    }
    else if (durationUnit.minute.indexOf(unit) > -1) {
        unit = 'minute';
    }
    else if (durationUnit.second.indexOf(unit) > -1) {
        unit = 'second';
    }

    return {
        unit: unit,
        value: value
    }
}


/**
 *
 * @param number
 * @returns {number}
 */
function absRound(number) {
    if (number < 0) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}


/**
 *
 * @param a
 * @param b
 * @returns {number}
 */
function mod(a, b) {
    return a - (b * Math.floor(a / b));
}
