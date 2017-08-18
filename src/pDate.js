let Algorithms = require('./algorithms');
let Helpers = require('./helpers');
let Duration = require('./duration');
let toPersianDigit = new Helpers().toPersianDigit;
let leftZeroFill = new Helpers().leftZeroFill;
let weekRange = require('./constants').weekRange;
let persianDaysName = require('./constants').persianDaysName;
let monthRange = require('./constants').monthRange;

class PersianDateClass {
    constructor (input) {
        this.algorithms = new Algorithms();
        const helpers = new Helpers();
        // Convert Any thing to Gregorian Date
        if (helpers.isUndefined(input)) {
            this.gDate = new Date();
        }
        else if (helpers.isDate(input)) {
            this.gDate = input;
        }
        else if (helpers.isArray(input)) {
            //  Encapsulate Input Array
            let arrayInput = input.slice();
            this.gDate = this.algorithms.persianArrayToGregorianDate(arrayInput);
        }
        else if (helpers.isNumber(input)) {
            this.gDate = new Date(input);
        }
        // instance of pDate
        else if (input instanceof PersianDateClass) {
            this.gDate = input.gDate;
        }
        // ASP.NET JSON Date
        else if (input.substring(0, 6) === '/Date(') {
            this.gDate = new Date(parseInt(input.substr(6)));
        }
        else {
            this.gDate = new Date();
        }
        this.pDate = this.algorithms.toPersianDate(this.gDate);
        this.version = __VERSION__;
        this.formatPersian = '_default';
        this._utcMode = false;
        return this;
    }


    /**
     * @description return Duration object
     * @param input
     * @param key
     * @returns {Duration}
     */
    duration (input, key) {
        return new Duration(input, key);
    }


    /**
     * @description check if passed object is duration
     * @param obj
     * @returns {boolean}
     */
    isDuration (obj) {
        return obj instanceof Duration;
    }


    /**
     *
     * @param key
     * @param input
     * @returns {PersianDate}
     */
    add (key, value) {
        let duration = new Duration(key, value)._data;
        // log(duration)
        if (duration.years > 0) {
            let newYear = this.year() + duration.years;
            this.year(newYear);
        }
        if (duration.months > 0) {
            let newMonth = this.month() + duration.months;
            this.month(newMonth);
        }
        if (duration.days > 0) {
            let newDate = this.date() + duration.days;
            this.date(newDate);
        }
        if (duration.hours > 0) {
            let newHour = this.hour() + duration.hours;
            this.hour(newHour);
        }
        if (duration.minutes > 0) {
            let newMinute = this.minute() + duration.minutes;
            this.minute(newMinute);
        }
        if (duration.seconds > 0) {
            let newSecond = this.second() + duration.seconds;
            this.second(newSecond);
        }
        if (duration.milliseconds > 0) {
            // log('add millisecond')
            let newMillisecond = this.milliseconds() + duration.milliseconds;
            this.milliseconds(newMillisecond);
        }
        return new PersianDateClass(this.valueOf());
    }


    /**
     *
     * @param key
     * @param input
     * @returns {PersianDate}
     */
    subtract (key, value) {
        let duration = new Duration(key, value)._data;
        // log(duration)
        if (duration.years > 0) {
            let newYear = this.year() - duration.years;
            this.year(newYear);
        }
        if (duration.months > 0) {
            let newMonth = this.month() - duration.months;
            this.month(newMonth);
        }
        if (duration.days > 0) {
            let newDate = this.date() - duration.days;
            this.date(newDate);
        }
        if (duration.hours > 0) {
            let newHour = this.hour() - duration.hours;
            this.hour(newHour);
        }
        if (duration.minutes > 0) {
            let newMinute = this.minute() - duration.minutes;
            this.minute(newMinute);
        }
        if (duration.seconds > 0) {
            let newSecond = this.second() - duration.seconds;
            this.second(newSecond);
        }
        if (duration.milliseconds > 0) {
            // log('add millisecond')
            let newMillisecond = this.milliseconds() - duration.milliseconds;
            this.milliseconds(newMillisecond);
        }
        return new PersianDateClass(this.valueOf());
    }

    /**
     *
     * @returns {*}
     */
    formatNumber () {
        let output, self = this;

        // if default conf dosent set follow golbal config
        if (this.formatPersian === '_default') {
            if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
                /* istanbul ignore next */
                if (self.formatPersian === false) {
                    output = false;
                } else {
                    // Default Conf
                    output = true;
                }
            }
            /* istanbul ignore next */
            else {
                if (window.formatPersian === false) {
                    output = false;
                } else {
                    // Default Conf
                    output = true;
                }
            }
        } else {
            if (this.formatPersian === true) {
                output = true;
            } else if (this.formatPersian === false) {
                output = false;
            } else {
                Error('Invalid Config "formatPersian" !!');
            }
        }
        return output;
    }


    /**
     *
     * @param inputString
     * @returns {*}
     */
    format (inputString) {
        let self = this, formattingTokens = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|ddddd|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g, info = {
              year: self.year(),
              month: self.month(),
              hour: self.hours(),
              minute: self.minutes(),
              second: self.seconds(),
              date: self.date(),
              timezone: self.zone(),
              unix: self.unix()
          },
          formatToPersian = self.formatNumber();

        let checkPersian = function (i) {
            if (formatToPersian) {
                return toPersianDigit(i);
            } else {
                return i;
            }
        };


        /* jshint ignore:start */
        function replaceFunction (input) {
            switch (input) {
              // AM/PM
                case('a'): {
                    if (formatToPersian)
                        return ((info.hour >= 12) ? 'ب ظ' : 'ق ظ');
                    else
                        return ((info.hour >= 12) ? 'PM' : 'AM');
                }
              // Hours (Int)
                case('H'): {
                    return checkPersian(info.hour);
                }
                case('HH'): {
                    return checkPersian(leftZeroFill(info.hour, 2));
                }
                case('h'): {
                    return checkPersian(info.hour % 12);
                }
                case('hh'): {
                    return checkPersian(leftZeroFill(info.hour % 12, 2));
                }
              // Minutes
                case('m'): {
                    return checkPersian(leftZeroFill(info.minute, 2));
                }
              // Two Digit Minutes
                case('mm'): {
                    return checkPersian(leftZeroFill(info.minute, 2));
                }
              // Second
                case('s'): {
                    return checkPersian(info.second);
                }
                case('ss'): {
                    return checkPersian(leftZeroFill(info.second, 2));
                }
              // Day (Int)
                case('D'): {
                    return checkPersian(leftZeroFill(info.date));
                }
              // Return Two Digit
                case('DD'): {
                    return checkPersian(leftZeroFill(info.date, 2));
                }
              // Return day Of Month
                case('DDD'): {
                    let t = self.startOf('year');
                    return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                }
              // Return Day of Year
                case('DDDD'): {
                    let t = self.startOf('year');
                    return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                }
              // Return day Of week
                case('d'): {
                    return checkPersian(self.pDate.weekDayNumber);
                }
              // Return week day name abbr
                case('ddd'): {
                    return weekRange[self.pDate.weekDayNumber].abbr.fa;
                }
                case('dddd'): {
                    return weekRange[self.pDate.weekDayNumber].name.fa;
                }
              // Return Persian Day Name
                case('ddddd'): {
                    return persianDaysName[self.pDate.monthDayNumber];
                }
              // Return Persian Day Name
                case('w'): {
                    let t = self.startOf('year'),
                      day = parseInt(self.diff(t, 'days') / 7) + 1;
                    return checkPersian(day);
                }
              // Return Persian Day Name
                case('ww'): {
                    let t = self.startOf('year'),
                      day = leftZeroFill(parseInt(self.diff(t, 'days') / 7) + 1, 2);
                    return checkPersian(day);
                }
              // Month  (Int)
                case('M'): {
                    return checkPersian(info.month);
                }
              // Two Digit Month (Str)
                case('MM'): {
                    return checkPersian(leftZeroFill(info.month, 2));
                }
              // Abbr String of Month (Str)
                case('MMM'): {
                    return monthRange[info.month].abbr.fa;
                }
              // Full String name of Month (Str)
                case('MMMM'): {
                    return monthRange[info.month].name.fa;
                }
              // Year
              // Two Digit Year (Str)
                case('YY'): {
                    let yearDigitArray = info.year.toString().split('');
                    return checkPersian(yearDigitArray[2] + yearDigitArray[3]);
                }
              // Full Year (Int)
                case('YYYY'): {
                    return checkPersian(info.year);
                }
              /* istanbul ignore next */
                case('Z'): {
                    let flag = '+',
                      hours = Math.round(info.timezone / 60),
                      minutes = info.timezone % 60;

                    if (minutes < 0) {
                        minutes *= -1;
                    }
                    if (hours < 0) {
                        flag = '-';
                        hours *= -1;
                    }

                    let z = flag + leftZeroFill(hours, 2) + ':' + leftZeroFill(minutes, 2);
                    return checkPersian(z);
                }
              /* istanbul ignore next */
                case('ZZ'): {
                    let flag = '+',
                      hours = Math.round(info.timezone / 60),
                      minutes = info.timezone % 60;

                    if (minutes < 0) {
                        minutes *= -1;
                    }
                    if (hours < 0) {
                        flag = '-';
                        hours *= -1;
                    }
                    let z = flag + leftZeroFill(hours, 2) + '' + leftZeroFill(minutes, 2);
                    return checkPersian(z);
                }
              /* istanbul ignore next */
                case('X'): {
                    return self.unix();
                }
              // 8:30 PM
                case('LT'): {
                    return self.format('h:m a');
                }
              // 09/04/1986
                case('L'): {
                    return self.format('YYYY/MM/DD');
                }
              // 9/4/1986
                case('l'): {
                    return self.format('YYYY/M/D');
                }
              // September 4th 1986
                case('LL'): {
                    return self.format('MMMM DD YYYY');
                }
              // Sep 4 1986
                case('ll'): {
                    return self.format('MMM DD YYYY');
                }
              //September 4th 1986 8:30 PM
                case('LLL'): {
                    return self.format('MMMM YYYY DD   h:m  a');
                }
              // Sep 4 1986 8:30 PM
                case('lll'): {
                    return self.format('MMM YYYY DD   h:m  a');
                }
              //Thursday, September 4th 1986 8:30 PM
                case('LLLL'): {
                    return self.format('dddd D MMMM YYYY  h:m  a');
                }
              // Thu, Sep 4 1986 8:30 PM
                case('llll'): {
                    return self.format('ddd D MMM YYYY  h:m  a');
                }
            }
        }

        /* jshint ignore:end */

        if (inputString) {
            return inputString.replace(formattingTokens, replaceFunction);
        } else {
            let inputString = 'YYYY-MM-DD HH:mm:ss a';
            return inputString.replace(formattingTokens, replaceFunction);
        }
    }


    /**
     *
     * @param input
     * @param val
     * @param asFloat
     * @returns {*}
     */
    diff (input, val, asFloat) {
        let self = this,
          inputMoment = input,
          zoneDiff = 0,
          diff = self.gDate - inputMoment.gDate - zoneDiff,
          year = self.year() - inputMoment.year(),
          month = self.month() - inputMoment.month(),
          date = (self.date() - inputMoment.date()) * -1, output;

        if (val === 'months' || val === 'month') {
            output = year * 12 + month + date / 30;
        } else if (val === 'years' || val === 'year') {
            output = year + (month + date / 30) / 12;
        } else {
            output = val === 'seconds' || val === 'second' ? diff / 1e3 : // 1000
              val === 'minutes' || val === 'minute' ? diff / 6e4 : // 1000 * 60
                val === 'hours' || val === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                  val === 'days' || val === 'day' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                    val === 'weeks' || val === 'week' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                      diff;
        }
        if (output < 0) {
            output = output * -1;
        }
        return asFloat ? output : Math.round(output);
    }


    /**
     *
     * @param key
     * @returns {*}
     */
    startOf (key) {
        // Simplify this\
        /* jshint ignore:start */
        switch (key) {
            case 'years':
            case 'year' :
                return new PersianDateClass([this.year(), 1, 1]);
            case 'months':
            case 'month':
                return new PersianDateClass([this.year(), this.month(), 1]);
            case 'days' :
            case 'day' :
                return new PersianDateClass([this.year(), this.month(), this.date(), 0, 0, 0]);
            case 'hours' :
            case 'hour' :
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
            case 'minutes':
            case 'minute':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
            case 'seconds':
            case 'second':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case 'weeks':
            case 'week':
                var weekDayNumber = this.pDate.weekDayNumber;
                if (weekDayNumber === 0) {
                    return new PersianDateClass([this.year(), this.month(), this.date()]);
                } else {
                    return new PersianDateClass([this.year(), this.month(), this.date()]).subtract('days', weekDayNumber);
                }
            default:
                return this;
        }
        /* jshint ignore:end */
    }


    /**
     *
     * @param key
     * @returns {*}
     */
    /* eslint-disable no-case-declarations */
    endOf (key) {
        // Simplify this
        switch (key) {
            case 'years':
            case 'year':
                let days = this.isLeapYear() ? 30 : 29;
                return new PersianDateClass([this.year(), 12, days, 23, 59, 59]);
            case 'months':
            case 'month':
                let monthDays = this.daysInMonth(this.year(), this.month());
                return new PersianDateClass([this.year(), this.month(), monthDays, 23, 59, 59]);
            case 'days' :
            case 'day' :
                return new PersianDateClass([this.year(), this.month(), this.date(), 23, 59, 59]);
            case 'hours' :
            case 'hour' :
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
            case 'minutes':
            case 'minute':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
            case 'seconds':
            case 'second':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case 'weeks':
            case 'week':
                let weekDayNumber = this.pDate.weekDayNumber;
                if (weekDayNumber === 6) {
                    weekDayNumber = 7;
                } else {
                    weekDayNumber = 6 - weekDayNumber;
                }
                return new PersianDateClass([this.year(), this.month(), this.date()]).add('days', weekDayNumber);
            default:
                return this;
        }
        /* eslint-enable no-case-declarations */
    }


    /**
     *
     * @returns {*}
     */
    sod () {
        return this.startOf('day');
    }


    /**
     *
     * @returns {*}
     */
    eod () {
        return this.endOf('day');
    }

    /** Get the timezone offset in minutes.
     * @return {*}
     */
    zone () {
        return this.pDate.timeZoneOffset;
    }


    /**
     *
     * @returns {PersianDate}
     */
    local () {
        let utcStamp;
        if (!this._utcMode) {
            return this;
        } else {
            let offsetMils = this.pDate.timeZoneOffset * 60 * 1000;
            if (this.pDate.timeZoneOffset < 0) {
                utcStamp = this.valueOf() - offsetMils;
            } else {
                /* istanbul ignore next */
                utcStamp = this.valueOf() + offsetMils;
            }
            this.gDate = new Date(utcStamp);
            this._updatePDate();
            this._utcMode = false;
            return this;
        }
    }


    static _utc (input) {
        if (input) {
            return new PersianDateClass(input).utc();
        }
        else {
            return new PersianDateClass().utc();
        }
    }


    /**
     * Current date/time in UTC mode
     * @param input
     * @returns {*}
     */
    utc (input) {
        let utcStamp;
        if (input) {
            return new PersianDateClass(input).utc();
        }
        if (this._utcMode) {
            return this;
        } else {
            let offsetMils = this.pDate.timeZoneOffset * 60 * 1000;
            if (this.pDate.timeZoneOffset < 0) {
                utcStamp = this.valueOf() + offsetMils;
            } else {
                /* istanbul ignore next */
                utcStamp = this.valueOf() - offsetMils;
            }
            this.gDate = new Date(utcStamp);
            this._updatePDate();
            this._utcMode = true;
            return this;
        }
    }


    /**
     *
     * @returns {boolean}
     */
    isUtc () {
        return this._utcMode;
    }


    /**
     *
     * @returns {boolean}
     * version 0.0.1
     */
    isDST () {
        let month = this.month(),
          day = this.date();
        if (month < 7) {
            return false;
        }
        else if ((month == 7 && day >= 2) || month >= 7) {
            return true;
        }
    }


    /**
     *
     * @returns {boolean}
     */
    isLeapYear () {
        return this.algorithms.isLeapPersian(this.year());
    }


    /**
     *
     * @param yearInput
     * @param monthInput
     * @returns {number}
     */
    daysInMonth (yearInput, monthInput) {
        let year = yearInput ? yearInput : this.year(),
          month = monthInput ? monthInput : this.month();
        if (month < 1 || month > 12)
            return 0;
        if (month < 7)
            return 31;
        if (month < 12)
            return 30;
        if (this.algorithms.isLeapPersian(year))
            return 30;
        return 29;
    }


    /**
     * Return Native Javascript Date
     * @returns {*|PersianDate.gDate}
     */
    toDate () {
        return this.gDate;
    }


    /**
     * Returns Array Of Persian Date
     * @returns {array}
     */
    toArray () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    }


    /**
     * Return Milliseconds since the Unix Epoch (1318874398806)
     * @returns {*}
     * @private
     */
    _valueOf () {
        return this.gDate.valueOf();
    }

    // static unix(timestamp) {
    //     return this.unix(timestamp);
    // }


    static _unix (timestamp) {
        if (timestamp) {
            return new PersianDateClass(timestamp * 1000).unix();
        } else {
            return new PersianDateClass().unix();
        }
    }

    /**
     * Return Unix Timestamp (1318874398)
     * @param timestamp
     * @returns {*}
     */
    unix (timestamp) {
        let output;
        if (timestamp) {
            return new PersianDateClass(timestamp * 1000);
        } else {
            let str = this.gDate.valueOf().toString();
            output = str.substring(0, str.length - 3);
        }
        return parseInt(output);
    }


    /**
     *
     * @param obj
     * @returns {boolean}
     */
    isPersianDate (obj) {
        return obj instanceof PersianDateClass;
    }


    /**
     *
     * @param input
     * @returns {*}
     * Getter Setter
     */
    millisecond (input) {
        return this.milliseconds(input);
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    milliseconds (input) {
        if (input) {
            this.gDate.setMilliseconds(input);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.milliseconds;
        }
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    second (input) {
        return this.seconds(input);

    }


    /**
     *
     * @param input
     * @returns {*}
     */
    seconds (input) {
        if (input | input === 0) {
            this.gDate.setSeconds(input);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.seconds;
        }
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    minute (input) {
        return this.minutes(input);
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    minutes (input) {
        if (input || input === 0) {
            this.gDate.setMinutes(input);
            this._updatePDate();
            return this;
        } else {
            // TODO: remove this
            return parseInt(this.pDate.minutes);
        }
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    hour (input) {
        return this.hours(input);
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    hours (input) {
        if (input | input === 0) {
            this.gDate.setHours(input);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.hours;
        }
    }


    /**
     * Day of Months
     * @param input
     * @returns {*}
     */
    dates (input) {
        return this.date(input);
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    date (input) {
        if (input || input === 0) {
            var pDateArray = this.algorithms.getPersianArrayFromPDate(this.pDate);
            pDateArray[2] = input;
            this.gDate = this.algorithms.persianArrayToGregorianDate(pDateArray);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.date;
        }
    }


    /**
     * Day of week
     * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
     */
    days () {
        return this.day();
    }


    /**
     *
     * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
     */
    day () {
        return this.pDate.day;
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    month (input) {
        if (input | input === 0) {
            var pDateArray = this.algorithms.getPersianArrayFromPDate(this.pDate);
            pDateArray[1] = input;
            this.gDate = this.algorithms.persianArrayToGregorianDate(pDateArray);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.month;
        }
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    years (input) {
        return this.year(input);
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    year (input) {
        if (input | input === 0) {
            var pDateArray = this.algorithms.getPersianArrayFromPDate(this.pDate);
            pDateArray[0] = input;
            this.gDate = this.algorithms.persianArrayToGregorianDate(pDateArray);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.year;
        }
    }

    /**
     *
     * @param year
     * @param month
     * @returns {*}
     */
    getFirstWeekDayOfMonth (year, month) {
        var dateArray = this.algorithms.calcPersian(year, month, 1), pdate = this.algorithms.calcGregorian(dateArray[0], dateArray[1], dateArray[2]);
        if (pdate[3] + 2 === 8) {
            return 1;
        } else if (pdate[3] + 2 === 7) {
            return 7;
        } else {
            return pdate[3] + 2;
        }
    }


    /**
     *
     * @returns {PersianDate}
     */
    clone () {
        var self = this;
        return new PersianDateClass(self.gDate);
    }


    /**
     *
     * @private
     */
    _updatePDate () {
        this.pDate = this.algorithms.toPersianDate(this.gDate);
    }


    /**
     *
     * @returns {*}
     */
    valueOf () {
        return this._valueOf();
    }
}

module.exports = PersianDateClass;