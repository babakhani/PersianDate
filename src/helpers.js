let durationUnit = require('./constants').durationUnit;

class Helpers {

    /**
     * @description return converted string to persian digit
     * @param digit
     * @returns {string|*}
     */
    toPersianDigit (digit, latinDigit = false) {
        return digit.toString().replace(/\d+/g, function (digit) {
            let enDigitArr = [], peDigitArr = [], i, j;
            for (i = 0; i < digit.length; i += 1) {
                enDigitArr.push(digit.charCodeAt(i));
            }
            for (j = 0; j < enDigitArr.length; j += 1) {
                peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!latinDigit && latinDigit === true) ? 1584 : 1728)));
            }
            return peDigitArr.join('');
        });
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
        else if (durationUnit.week.indexOf(unit) > -1) {
            unit = 'week';
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
        else if (durationUnit.millisecond.indexOf(unit) > -1) {
            unit = 'millisecond';
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
     * @param number
     * @return {number}
     */
    absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }
}

module.exports = Helpers;
