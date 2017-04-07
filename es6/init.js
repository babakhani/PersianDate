let PersianDateClass = require('./pDate');
String.prototype.toPersianDigit = function (latinDigit) {
    return this.replace(/\d+/g, function (digit) {
        let enDigitArr = [], peDigitArr = [], i, j;
        for (i = 0; i < digit.length; i += 1) {
            enDigitArr.push(digit.charCodeAt(i));
        }
        for (j = 0; j < enDigitArr.length; j += 1) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!latinDigit && latinDigit === true) ? 1584 : 1728)));
        }
        return peDigitArr.join('');
    });

};
PersianDateClass.unix = PersianDateClass._unix;
PersianDateClass.utc = PersianDateClass._utc;

module.exports = PersianDateClass;

