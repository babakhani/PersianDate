let durationUnit = require('./constants').durationUnit;

class Helpers {

    /**
     * @description return converted string to persian digit
     * @param digit
     * @returns {string|*}
     */
    toPersianDigit (digit) {
        return digit.toString().toPersianDigit();
    }

    /**
     * @param input
     * @returns {boolean}
     */
    isArray (input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isNumber (input) {
        return typeof input === 'number';
    }


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isDate (input) {
        return input instanceof Date;
    }


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isUndefined (input) {
        return typeof input === 'undefined';
    }


    /**
     * @param number
     * @param targetLength
     * @returns {string}
     */
    leftZeroFill (number, targetLength) {
        let output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    /**
     * @description normalize duration params and return valid param
     * @return {{unit: *, value: *}}
     */
    normalizeDuration () {
        let unit, value;
        if (typeof arguments[0] === 'string') {
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
        };
    }


    /**
     *
     * @param number
     * @returns {number}
     */
    absRound (number) {
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
    mod (a, b) {
        return a - (b * Math.floor(a / b));
    }
}

module.exports = Helpers;
