let TypeChecking = require('./type-checking');
let Algorithms = require('./algorithms');
let Helpers = require('./helpers');
let Duration = require('./duration');
let toPersianDigit = new Helpers().toPersianDigit;
let leftZeroFill = new Helpers().leftZeroFill;
let normalizeDuration = new Helpers().normalizeDuration;
let fa = require('./fa');
let en = require('./en');

class PersianDateClass {

    //    static calendarType : 'persianAstro';
    constructor (input) {
        this.calendarType = PersianDateClass.calendarType;
        this.localType = PersianDateClass.localType;
        this.algorithms = new Algorithms();
        this.version = __VERSION__;

        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }

        this._utcMode = false;

        // Convert Any thing to Gregorian Date
        if (TypeChecking.isDate(input)) {
            this.algorithms.calcGregorian(
              [
                  input.getFullYear(),
                  input.getMonth(),
                  input.getDate(),
                  input.getHours(),
                  input.getMinutes(),
                  input.getSeconds(),
                  input.getMilliseconds()
              ]);
        }
        else if (TypeChecking.isArray(input)) {
            this.algorithmsCalc([input[0], (input[1] ? input[1] : 1), (input[2] ? input[2] : 1), input[3], input[4], input[5], (input[6] ? input[6] : 0)]);
        }
        else if (TypeChecking.isNumber(input)) {
            const fromUnix = new Date(input);
            this.algorithms.calcGregorian(
              [
                  fromUnix.getFullYear(),
                  fromUnix.getMonth(),
                  fromUnix.getDate(),
                  fromUnix.getHours(),
                  fromUnix.getMinutes(),
                  fromUnix.getSeconds(),
                  fromUnix.getMilliseconds()
              ]);
        }
        // instance of pDate
        else if (input instanceof PersianDateClass) {
            this.algorithmsCalc([
                input.year(),
                input.month(),
                input.date(),
                input.hour(),
                input.minute(),
                input.second(),
                input.millisecond()
            ]);
        }
        // ASP.NET JSON Date
        else if (input && input.substring(0, 6) === '/Date(') {
            const fromDotNet = new Date(parseInt(input.substr(6)));
            this.algorithms.calcGregorian(
              [
                  fromDotNet.getFullYear(),
                  fromDotNet.getMonth(),
                  fromDotNet.getDate(),
                  fromDotNet.getHours(),
                  fromDotNet.getMinutes(),
                  fromDotNet.getSeconds(),
                  fromDotNet.getMilliseconds()
              ]);
        }
        else {
            const now = new Date();
            this.algorithms.calcGregorian(
              [
                  now.getFullYear(),
                  now.getMonth(),
                  now.getDate(),
                  now.getHours(),
                  now.getMinutes(),
                  now.getSeconds(),
                  now.getMilliseconds()
              ]);
        }

        this.ON = this.algorithms.ON;

        return this;
    }

    _locale () {
        if (this.localType === 'fa') {
            if (this.calendarType === 'persianAlgo' || this.calendarType === 'persianAstro') {
                return fa.persian;
            }
            else {
                return fa.gregorian;
            }
        } else {
            if (this.calendarType === 'persianAlgo' || this.calendarType === 'persianAstro') {
                return en.persian;
            }
            else {
                return en.gregorian;
            }
        }
    }

    toCalendar (input) {
        this.calendarType = input;
        return this;
    }

    locale (input) {
        this.localType = input;

        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }

        return this;
    }

    _weekName (input) {
        return this._locale().weekdays[input - 1];
    }

    _weekNameShort (input) {
        return this._locale().weekdaysShort[input - 1];
    }

    _weekNameMin (input) {
        return this._locale().weekdaysMin[input - 1];
    }

    _dayName (input) {
        return this._locale().persianDaysName[input - 1];
    }


    _monthName (input) {
        return this._locale().months[input - 1];
    }

    _monthNameShort (input) {
        return this._locale().monthsShort[input - 1];
    }


    /**
     *
     * @param obj
     * @returns {boolean}
     */
    static isPersianDate (obj) {
        return obj instanceof PersianDateClass;
    }

    isPersianDate (obj) {
        return obj instanceof PersianDateClass;
    }

    /**
     *
     * @returns {PersianDate}
     */
    clone () {
        return new PersianDateClass(this.ON.gDate);
    }


    algorithmsCalc (dateArray) {
        if (this.isPersianDate(dateArray)) {
            dateArray = [
                dateArray.year(),
                dateArray.month(),
                dateArray.date(),
                dateArray.hour(),
                dateArray.minute(),
                dateArray.second(),
                dateArray.millisecond()
            ];
        }
        if (this.calendarType === 'persianAlgo') {
            return this.algorithms.calcPersian(dateArray);
        }
        else if (this.calendarType === 'persianAstro') {
            return this.algorithms.calcPersiana(dateArray);
        }
        else if (this.calendarType === 'gregorian') {
            return this.algorithms.calcGregorian(dateArray);
        }
    }

    calendar () {
        return this.ON[this.calendarType];
    }


    /**
     * @description return Duration object
     * @param input
     * @param key
     * @returns {Duration}
     */
    static duration (input, key) {
        return new Duration(input, key);
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
    static isDuration (obj) {
        return obj instanceof Duration;
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
        if (input || input === 0) {
            this.algorithmsCalc([input, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]);
            return this;
        } else {
            return this.calendar().year;
        }
    }


    /**
     *
     * @param input
     * @returns {*}
     */
    month (input) {
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), input, this.date()]);
            return this;
        } else {
            return this.calendar().month + 1;
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
        return this.calendar().weekday;
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
            this.algorithmsCalc([this.year(), this.month(), input]);
            return this;
        } else {
            return this.calendar().day;
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
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), input]);
            return this;
        } else {
            return this.ON.gDate.getHours();
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
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), input]);
            return this;
        } else {
            return this.ON.gDate.getMinutes();
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
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), input]);
            return this;
        } else {
            return this.ON.gDate.getSeconds();
        }
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
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), input]);
            return this;
        } else {
            return this.ON.gregorian.millisecond;
        }
    }


    /**
     * Return Milliseconds since the Unix Epoch (1318874398806)
     * @returns {*}
     * @private
     */
    //    _valueOf () {
    //        return this.ON.gDate.valueOf();
    //    }


    static unix (timestamp) {
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
            let str = this.ON.gDate.valueOf().toString();
            output = str.substring(0, str.length - 3);
        }
        return parseInt(output);
    }

    /**
     *
     * @returns {*}
     */
    valueOf () {
        return this.ON.gDate.valueOf();
    }


    /**
     *
     * @param year
     * @param month
     * @returns {*}
     */
    static getFirstWeekDayOfMonth (year, month) {
        return new PersianDateClass([year, month, 1]).day();
    }

    /**
     *
     * @param year
     * @param month
     * @returns {*}
     */
    getFirstWeekDayOfMonth (year, month) {
        return new PersianDateClass([year, month, 1]).day();
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
          diff = self.ON.gDate - inputMoment.toDate() - zoneDiff,
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
            case 'year':
                return new PersianDateClass([this.year(), 1, 1]);
            case 'months':
            case 'month':
                return new PersianDateClass([this.year(), this.month(), 1]);
            case 'days':
            case 'day':
                return new PersianDateClass([this.year(), this.month(), this.date(), 0, 0, 0]);
            case 'hours':
            case 'hour':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
            case 'minutes':
            case 'minute':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
            case 'seconds':
            case 'second':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case 'weeks':
            case 'week':
                return new PersianDateClass([this.year(), this.month(), this.date() - (this.calendar().weekday - 1)]);
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
            case 'days':
            case 'day':
                return new PersianDateClass([this.year(), this.month(), this.date(), 23, 59, 59]);
            case 'hours':
            case 'hour':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
            case 'minutes':
            case 'minute':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
            case 'seconds':
            case 'second':
                return new PersianDateClass([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case 'weeks':
            case 'week':
                let weekDayNumber = this.calendar().weekday;
                return new PersianDateClass([this.year(), this.month(), this.date() + (7 - weekDayNumber)]);
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
        return this.ON.gDate.getTimezoneOffset();
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
            let offsetMils = this.zone() * 60 * 1000;
            if (this.zone() < 0) {
                utcStamp = this.valueOf() - offsetMils;
            } else {
                /* istanbul ignore next */
                utcStamp = this.valueOf() + offsetMils;
            }

            const utcDate = new Date(utcStamp),
              d = new PersianDateClass(utcDate);
            this.algorithmsCalc(d);
            this._utcMode = false;
            return this;
        }
    }


    static utc (input) {
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
            let offsetMils = this.zone() * 60 * 1000;
            if (this.zone() < 0) {
                utcStamp = this.valueOf() + offsetMils;
            } else {
                /* istanbul ignore next */
                utcStamp = this.valueOf() - offsetMils;
            }
            const utcDate = new Date(utcStamp),
              d = new PersianDateClass(utcDate);
            this.algorithmsCalc(d);
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
        else if ((month === 7 && day >= 2) || month >= 7) {
            return true;
        }
    }


    /**
     *
     * @returns {boolean}
     */
    isLeapYear (year) {
        if (year === undefined) {
            year = this.year();
        }
        if (this.calendarType === 'persianAlgo') {
            return this.algorithms.leap_persian(year);
        }
        if (this.calendarType === 'persianAstro') {
            return this.algorithms.leap_persiana(year);
        }
        if (this.calendarType === 'gregorian') {
            return this.algorithms.leap_gregorian(year);
        }
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
        // TODO: need fix in gregorian mode
        if (this.isLeapYear(year)) {
            return 30;
        }
        return 29;
    }


    /**
     * Return Native Javascript Date
     * @returns {*|PersianDate.gDate}
     */
    toDate () {
        return this.ON.gDate;
    }


    /**
     * Returns Array Of Persian Date
     * @returns {array}
     */
    toArray () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
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
        let self = this,
          formattingTokens = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g,
          info = {
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
                case ('a'): {
                    if (formatToPersian)
                        return ((info.hour >= 12) ? 'ب ظ' : 'ق ظ');
                    else
                        return ((info.hour >= 12) ? 'PM' : 'AM');
                }
              // Hours (Int)
                case ('H'): {
                    return checkPersian(info.hour);
                }
                case ('HH'): {
                    return checkPersian(leftZeroFill(info.hour, 2));
                }
                case ('h'): {
                    return checkPersian(info.hour % 12);
                }
                case ('hh'): {
                    return checkPersian(leftZeroFill(info.hour % 12, 2));
                }
              // Minutes
                case ('m'): {
                    return checkPersian(leftZeroFill(info.minute, 2));
                }
              // Two Digit Minutes
                case ('mm'): {
                    return checkPersian(leftZeroFill(info.minute, 2));
                }
              // Second
                case ('s'): {
                    return checkPersian(info.second);
                }
                case ('ss'): {
                    return checkPersian(leftZeroFill(info.second, 2));
                }
              // Day (Int)
                case ('D'): {
                    return checkPersian(leftZeroFill(info.date));
                }
              // Return Two Digit
                case ('DD'): {
                    return checkPersian(leftZeroFill(info.date, 2));
                }
              // Return day Of Month
                case ('DDD'): {
                    let t = self.startOf('year');
                    return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                }
              // Return Day of Year
                case ('DDDD'): {
                    let t = self.startOf('year');
                    return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                }
              // Return day Of week
                case ('d'): {
                    return checkPersian(self.calendar().weekday);
                }
              // Return week day name abbr
                case ('ddd'): {
                    return self._weekNameShort(self.calendar().weekday);
                }
                case ('dddd'): {
                    return self._weekName(self.calendar().weekday);
                }
              // Return Persian Day Name
                case ('ddddd'): {
                    return self._dayName(self.calendar().day);
                }
              // Return Persian Day Name
                case ('dddddd'): {
                    return self._weekNameMin(self.calendar().weekday);
                }
              // Return Persian Day Name
                case ('w'): {
                    let t = self.startOf('year'),
                      day = parseInt(self.diff(t, 'days') / 7) + 1;
                    return checkPersian(day);
                }
              // Return Persian Day Name
                case ('ww'): {
                    let t = self.startOf('year'),
                      day = leftZeroFill(parseInt(self.diff(t, 'days') / 7) + 1, 2);
                    return checkPersian(day);
                }
              // Month  (Int)
                case ('M'): {
                    return checkPersian(info.month);
                }
              // Two Digit Month (Str)
                case ('MM'): {
                    return checkPersian(leftZeroFill(info.month, 2));
                }
              // Abbr String of Month (Str)
                case ('MMM'): {
                    return self._monthNameShort(info.month);
                }
              // Full String name of Month (Str)
                case ('MMMM'): {
                    return self._monthName(info.month);
                }
              // Year
              // Two Digit Year (Str)
                case ('YY'): {
                    let yearDigitArray = info.year.toString().split('');
                    return checkPersian(yearDigitArray[2] + yearDigitArray[3]);
                }
              // Full Year (Int)
                case ('YYYY'): {
                    return checkPersian(info.year);
                }
              /* istanbul ignore next */
                case ('Z'): {
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
                case ('ZZ'): {
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
                case ('X'): {
                    return self.unix();
                }
              // 8:30 PM
                case ('LT'): {
                    return self.format('h:m a');
                }
              // 09/04/1986
                case ('L'): {
                    return self.format('YYYY/MM/DD');
                }
              // 9/4/1986
                case ('l'): {
                    return self.format('YYYY/M/D');
                }
              // September 4th 1986
                case ('LL'): {
                    return self.format('MMMM DD YYYY');
                }
              // Sep 4 1986
                case ('ll'): {
                    return self.format('MMM DD YYYY');
                }
              //September 4th 1986 8:30 PM
                case ('LLL'): {
                    return self.format('MMMM YYYY DD   h:m  a');
                }
              // Sep 4 1986 8:30 PM
                case ('lll'): {
                    return self.format('MMM YYYY DD   h:m  a');
                }
              //Thursday, September 4th 1986 8:30 PM
                case ('LLLL'): {
                    return self.format('dddd D MMMM YYYY  h:m  a');
                }
              // Thu, Sep 4 1986 8:30 PM
                case ('llll'): {
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
     * @param key
     * @param value
     * @returns {PersianDate}
     */
    add (key, value) {
        let duration = new Duration(key, value)._data,
          unit = normalizeDuration(key, value).unit;
        value = normalizeDuration(key, value).value;

        if (unit === 'year' || unit === 'month') {
            if (duration.years > 0) {
                let newYear = this.year() + duration.years;
                this.year(newYear);
            }
            if (duration.months > 0) {
                let oldDate = this.date();
                let newMonth = this.month() + duration.months;
                let thisMonthDaysCount = this.daysInMonth(this.year(), newMonth);
                if (oldDate >= thisMonthDaysCount) {
                    oldDate = thisMonthDaysCount;
                }
                this.date(oldDate);
                this.month(newMonth);
            }
        }
        if (unit === 'day') {
            const oldHour = this.hour();
            let newDate = this.valueOf() + (value * 24 * 60 * 60 * 1000);
            return this.unix(newDate / 1000).hour(oldHour);
        }
        if (unit === 'hour') {
            let newDate = this.valueOf() + (value * 60 * 60 * 1000);
            return this.unix(newDate / 1000);
        }
        if (unit === 'minute') {
            let newDate = this.valueOf() + (value * 60 * 1000);
            return this.unix(newDate / 1000);
        }
        if (unit === 'second') {
            let newDate = this.valueOf() + (value * 1000);
            return this.unix(newDate / 1000);
        }
        if (unit === 'millisecond') {
            // log('add millisecond')
            let newMillisecond = this.valueOf() + value;
            return this.unix(newMillisecond / 1000);
        }
        return new PersianDateClass(this.valueOf());
    }


    /**
     *
     * @param key
     * @param value
     * @returns {PersianDate}
     */
    subtract (key, value) {
        let duration = new Duration(key, value)._data;
        let unit = normalizeDuration(key, value).unit;
        value = normalizeDuration(key, value).value;

        if (unit === 'year' || unit === 'month') {
            if (duration.years > 0) {
                let newYear = this.year() - duration.years;
                this.year(newYear);
            }
            if (duration.months > 0) {
                let oldDate = this.date();
                let newMonth = this.month() - duration.months;
                this.month(newMonth);
                let thisMonthDaysCount = this.daysInMonth(this.year(), this.month());
                if (oldDate > thisMonthDaysCount) {
                    oldDate = thisMonthDaysCount;
                }
                this.date(oldDate);
            }
        }
        if (unit === 'day') {
            const oldHour = this.hour();
            let newDate = this.valueOf() - (value * 24 * 60 * 60 * 1000);
            return this.unix(newDate / 1000).hour(oldHour);
        }
        if (unit === 'hour') {
            let newDate = this.valueOf() - (value * 60 * 60 * 1000);
            return this.unix(newDate / 1000);
        }
        if (unit === 'minute') {
            let newDate = this.valueOf() - (value * 60 * 1000);
            return this.unix(newDate / 1000);
        }
        if (unit === 'second') {
            let newDate = this.valueOf() - (value * 1000);
            return this.unix(newDate / 1000);
        }
        if (unit === 'millisecond') {
            // log('add millisecond')
            let newMillisecond = this.valueOf() - value;
            return this.unix(newMillisecond / 1000);
        }
        return new PersianDateClass(this.valueOf());
    }


}

module.exports = PersianDateClass;