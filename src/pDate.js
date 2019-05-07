let TypeChecking = require('./type-checking');
let Algorithms = require('./algorithms');
let Helpers = require('./helpers');
let Duration = require('./duration');
let Validator = require('./validator');
let toPersianDigit = new Helpers().toPersianDigit;
let leftZeroFill = new Helpers().leftZeroFill;
let normalizeDuration = new Helpers().normalizeDuration;
let fa = require('./fa');
let en = require('./en');


/**
 * @description persian date class
 */
class PersianDateClass {

    /**
     * @param input
     * @return {PersianDateClass}
     */
    constructor(input) {

        this.calendarType = PersianDateClass.calendarType;
        this.localType = PersianDateClass.localType;
        this.leapYearMode = PersianDateClass.leapYearMode;

        this.algorithms = new Algorithms(this);
        this.version = __VERSION__;
        this._utcMode = false;
        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }
        this.State = this.algorithms.State;
        this.setup(input);
        if (this.State.isInvalidDate) {
          // Return Date like message
          return new Date([-1, -1]);
        }
        return this;
    }

    /**
     * @param input
     */
    setup(input) {
        // Convert Any thing to Gregorian Date
        if (TypeChecking.isDate(input)) {
            this._gDateToCalculators(input);
        }
        else if (TypeChecking.isArray(input)) {
            if (!Validator.validateInputArray(input)) {
              this.State.isInvalidDate = true;
              return false;
            }
            this.algorithmsCalc([
              input[0], 
              input[1] ? input[1] : 1, 
              input[2] ? input[2] : 1, 
              input[3] ? input[3] : 0,
              input[4] ? input[4] : 0,
              input[5] ? input[5] : 0,
              input[6] ? input[6] : 0
            ]);
        }
        else if (TypeChecking.isNumber(input)) {
            const fromUnix = new Date(input);
            this._gDateToCalculators(fromUnix);
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
            this._gDateToCalculators(fromDotNet);
        }
        else {
            const now = new Date();
            this._gDateToCalculators(now);
        }
    }

    /**
     * @param input
     * @return {*}
     * @private
     */
    _getSyncedClass(input) {
        let syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode);
        return new syncedCelander(input);
    }

    /**
     * @param inputgDate
     * @private
     */
    _gDateToCalculators(inputgDate) {
        this.algorithms.calcGregorian(
            [
                inputgDate.getFullYear(),
                inputgDate.getMonth(),
                inputgDate.getDate(),
                inputgDate.getHours(),
                inputgDate.getMinutes(),
                inputgDate.getSeconds(),
                inputgDate.getMilliseconds()
            ]);
    }

    /**
     * @since 1.0.0
     * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
     * @static
     * @return {*}
     */
    static rangeName() {
        const p = PersianDateClass,
            t = p.calendarType;
        if (p.localType === 'fa') {
            if (t === 'persian') {
                return fa.persian;
            }
            else {
                return fa.gregorian;
            }
        } else {
            if (t === 'persian') {
                return en.persian;
            }
            else {
                return en.gregorian;
            }
        }
    }

    /**
     * @since 1.0.0
     * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
     * @return {*}
     */
    rangeName() {
        const t = this.calendarType;
        if (this.localType === 'fa') {
            if (t === 'persian') {
                return fa.persian;
            }
            else {
                return fa.gregorian;
            }
        } else {
            if (t === 'persian') {
                return en.persian;
            }
            else {
                return en.gregorian;
            }
        }
    }

    /**
     * @since 1.0.0
     * @param input
     * @return {PersianDateClass}
     */
    toLeapYearMode(input) {
        this.leapYearMode = input;
        if (input === 'astronomical' && this.calendarType == 'persian') {
            this.leapYearMode = 'astronomical';
        }
        else if (input === 'algorithmic' && this.calendarType == 'persian') {
            this.leapYearMode = 'algorithmic';
        }
        this.algorithms.updateFromGregorian();
        return this;
    }

    /**
     * @since 1.0.0
     * @static
     * @param input
     * @return {PersianDateClass}
     */
    static toLeapYearMode(input) {
        let d = PersianDateClass;
        d.leapYearMode = input;
        return d;
    }

    /**
     * @since 1.0.0
     * @param input
     * @return {PersianDateClass}
     */
    toCalendar(input) {
        this.calendarType = input;
        this.algorithms.updateFromGregorian();
        return this;
    }


    /**
     * @since 1.0.0
     * @static
     * @param input
     * @return {PersianDateClass}
     */
    static toCalendar(input) {
        let d = PersianDateClass;
        d.calendarType = input;
        return d;
    }


    /**
     * @since 1.0.0
     * @static
     * @param input
     * @return {PersianDateClass}
     */
    static toLocale(input) {
        let d = PersianDateClass;
        d.localType = input;
        if (d.localType !== 'fa') {
            d.formatPersian = false;
        } else {
            d.formatPersian = '_default';
        }
        return d;
    }

    /**
     * @since 1.0.0
     * @param input
     * @return {PersianDateClass}
     */
    toLocale(input) {
        this.localType = input;
        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }
        return this;
    }

    /**
     * @return {*}
     * @private
     */
    _locale() {
        const t = this.calendarType;
        if (this.localType === 'fa') {
            if (t === 'persian') {
                return fa.persian;
            }
            else {
                return fa.gregorian;
            }
        } else {
            if (t === 'persian') {
                return en.persian;
            }
            else {
                return en.gregorian;
            }
        }
    }

    /**
     * @param input
     * @private
     */
    _weekName(input) {
        return this._locale().weekdays[input - 1];
    }

    /**
     * @param input
     * @private
     */
    _weekNameShort(input) {
        return this._locale().weekdaysShort[input - 1];
    }

    /**
     * @param input
     * @private
     */
    _weekNameMin(input) {
        return this._locale().weekdaysMin[input - 1];
    }

    /**
     * @param input
     * @return {*}
     * @private
     */
    _dayName(input) {
        return this._locale().persianDaysName[input - 1];
    }

    /**
     * @param input
     * @private
     */
    _monthName(input) {
        return this._locale().months[input - 1];
    }

    /**
     * @param input
     * @private
     */
    _monthNameShort(input) {
        return this._locale().monthsShort[input - 1];
    }


    /**
     * @param obj
     * @returns {boolean}
     */
    static isPersianDate(obj) {
        return obj instanceof PersianDateClass;
    }

    /**
     * @param obj
     * @return {boolean}
     */
    isPersianDate(obj) {
        return obj instanceof PersianDateClass;
    }

    /**
     * @returns {PersianDate}
     */
    clone() {
        return this._getSyncedClass(this.State.gDate);
    }

    /**
     * @since 1.0.0
     * @param dateArray
     * @return {*}
     */
    algorithmsCalc(dateArray) {
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
        if (this.calendarType === 'persian' && this.leapYearMode == 'algorithmic') {
            return this.algorithms.calcPersian(dateArray);
        }
        else if (this.calendarType === 'persian' && this.leapYearMode == 'astronomical') {
            return this.algorithms.calcPersiana(dateArray);
        }
        else if (this.calendarType === 'gregorian') {
          dateArray[1] = dateArray[1] - 1;
          return this.algorithms.calcGregorian(dateArray);
        }
    }

    /**
     * @since 1.0.0
     * @return {*}
     */
    calendar() {
        let key;
        if (this.calendarType == 'persian') {
            if (this.leapYearMode == 'astronomical') {
                key = 'persianAstro';
            }
            else if (this.leapYearMode == 'algorithmic') {
                key = 'persianAlgo';
            }
        } else {
            key = 'gregorian';
        }
        return this.State[key];
    }


    /**
     * @description return Duration object
     * @param input
     * @param key
     * @returns {Duration}
     */
    static duration(input, key) {
        return new Duration(input, key);
    }

    /**
     * @description return Duration object
     * @param input
     * @param key
     * @returns {Duration}
     */
    duration(input, key) {
        return new Duration(input, key);
    }

    /**
     * @description check if passed object is duration
     * @param obj
     * @returns {boolean}
     */
    static isDuration(obj) {
        return obj instanceof Duration;
    }

    /**
     * @description check if passed object is duration
     * @param obj
     * @returns {boolean}
     */
    isDuration(obj) {
        return obj instanceof Duration;
    }


    /**
     * @param input
     * @returns {*}
     */
    years(input) {
        return this.year(input);
    }


    /**
     * @param input
     * @returns {*}
     */
    year(input) {
        if (input || input === 0) {
            this.algorithmsCalc(
                [input, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
            );
            return this;
        } else {
            return this.calendar().year;
        }
    }


    /**
     * @param input
     * @returns {*}
     */
    month(input) {
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
    days() {
        return this.day();
    }


    /**
     * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
     */
    day() {
        return this.calendar().weekday;
    }


    /**
     * Day of Months
     * @param input
     * @returns {*}
     */
    dates(input) {
        return this.date(input);
    }


    /**
     * @param input
     * @returns {*}
     */
    date(input) {
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), input]);
            return this;
        } else {
            return this.calendar().day;
        }
    }

    /**
     * @param input
     * @returns {*}
     */
    hour(input) {
        return this.hours(input);
    }


    /**
     * @param input
     * @returns {*}
     */
    hours(input) {
        if (input || input === 0) {
            if (input === 0 ) {
              input = 24;
            }
            this.algorithmsCalc([this.year(), this.month(), this.date(), input]);
            return this;
        } else {
            return this.State.gDate.getHours();
        }
    }

    /**
     * @param input
     * @returns {*}
     */
    minute(input) {
        return this.minutes(input);
    }


    /**
     * @param input
     * @returns {*}
     */
    minutes(input) {
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), input]);
            return this;
        } else {
            return this.State.gDate.getMinutes();
        }
    }

    /**
     * @param input
     * @returns {*}
     */
    second(input) {
        return this.seconds(input);

    }


    /**
     * @param input
     * @returns {*}
     */
    seconds(input) {
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), input]);
            return this;
        } else {
            return this.State.gDate.getSeconds();
        }
    }


    /**
     * @param input
     * @returns {*}
     * Getter Setter
     */
    millisecond(input) {
        return this.milliseconds(input);
    }


    /**
     * @param input
     * @returns {*}
     */
    milliseconds(input) {
        if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), input]);
            return this;
        } else {
            return this.State.gregorian.millisecond;
        }
    }


    /**
     * Return Milliseconds since the Unix Epoch (1318874398806)
     * @returns {*}
     * @private
     */
    //    _valueOf () {
    //        return this.State.gDate.valueOf();
    //    }


    static unix(timestamp) {
        if (timestamp) {
            return new PersianDateClass(timestamp * 1000);
        } else {
            return new PersianDateClass().unix();
        }
    }

    /**
     * Return Unix Timestamp (1318874398)
     * @param timestamp
     * @returns {*}
     */
    unix(timestamp) {
        let output;
        if (timestamp) {
            return this._getSyncedClass(timestamp * 1000);
        } else {
            let str = this.State.gDate.valueOf().toString();
            output = str.substring(0, str.length - 3);
        }
        return parseInt(output);
    }

    /**
     * @returns {*}
     */
    valueOf() {
        return this.State.gDate.valueOf();
    }


    /**
     * @param year
     * @param month
     * @returns {*}
     * @since 1.0.0
     */
    static getFirstWeekDayOfMonth(year, month) {
        return new PersianDateClass([year, month, 1]).day();
    }

    /**
     * @param year
     * @param month
     * @returns {*}
     * @since 1.0.0
     */
    getFirstWeekDayOfMonth(year, month) {
        return this._getSyncedClass([year, month, 1]).day();
    }


    /**
     * @param input
     * @param val
     * @param asFloat
     * @returns {*}
     */
    diff(input, val, asFloat) {
        let self = this,
            inputMoment = input,
            zoneDiff = 0,
            diff = self.State.gDate - inputMoment.toDate() - zoneDiff,
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
        return asFloat ? output : Math.round(output);
    }


    /**
     * @param key
     * @returns {*}
     */
    startOf(key) {
        let syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
        let newArray = new PersianDateClass(this.valueOf() - ((this.calendar().weekday - 1) * 86400000)).toArray();
        // Simplify this\
        /* jshint ignore:start */
        switch (key) {
            case 'years':
            case 'year':
                return new syncedCelander([this.year(), 1, 1]);
            case 'months':
            case 'month':
                return new syncedCelander([this.year(), this.month(), 1]);
            case 'days':
            case 'day':
                return new syncedCelander([this.year(), this.month(), this.date(), 0, 0, 0]);
            case 'hours':
            case 'hour':
                return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
            case 'minutes':
            case 'minute':
                return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
            case 'seconds':
            case 'second':
                return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case 'weeks':
            case 'week':
                return new syncedCelander(newArray);
            default:
                return this.clone();
        }
        /* jshint ignore:end */
    }


    /**
     * @param key
     * @returns {*}
     */
    /* eslint-disable no-case-declarations */
    endOf(key) {
        let syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
        // Simplify this
        switch (key) {
            case 'years':
            case 'year':
                let days = this.isLeapYear() ? 30 : 29;
                return new syncedCelander([this.year(), 12, days, 23, 59, 59]);
            case 'months':
            case 'month':
                let monthDays = this.daysInMonth(this.year(), this.month());
                return new syncedCelander([this.year(), this.month(), monthDays, 23, 59, 59]);
            case 'days':
            case 'day':
                return new syncedCelander([this.year(), this.month(), this.date(), 23, 59, 59]);
            case 'hours':
            case 'hour':
                return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
            case 'minutes':
            case 'minute':
                return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
            case 'seconds':
            case 'second':
                return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case 'weeks':
            case 'week':
                let weekDayNumber = this.calendar().weekday;
                return new syncedCelander([this.year(), this.month(), this.date() + (7 - weekDayNumber)]);
            default:
                return this.clone();
        }
        /* eslint-enable no-case-declarations */
    }


    /**
     * @returns {*}
     */
    sod() {
        return this.startOf('day');
    }


    /**
     * @returns {*}
     */
    eod() {
        return this.endOf('day');
    }

    /** Get the timezone offset in minutes.
     * @return {*}
     */
    zone(input) {
        if (input || input === 0) {
            this.State.zone = input;
            return this;
        } else {
            return this.State.zone;
        }
    }


    /**
     * @returns {PersianDate}
     */
    local() {
        let utcStamp;
        if (this._utcMode) {
            let ThatDayOffset = new Date(this.toDate()).getTimezoneOffset();
            let offsetMils = ThatDayOffset * 60 * 1000;
            if (ThatDayOffset < 0) {
                utcStamp = this.valueOf() - offsetMils;
            } else {
                /* istanbul ignore next */
                utcStamp = this.valueOf() + offsetMils;
            }
            this.toCalendar(PersianDateClass.calendarType);
            const utcDate = new Date(utcStamp);
            this._gDateToCalculators(utcDate);
            this._utcMode = false;
            this.zone(ThatDayOffset);
            return this;
        }
        else {
            return this;
        }
    }

    /**
     * @param input
     * @return {*}
     */
    static utc(input) {
        if (input) {
            return new PersianDateClass(input).utc();
        }
        else {
            return new PersianDateClass().utc();
        }
    }


    /**
     * @description Current date/time in UTC mode
     * @param input
     * @returns {*}
     */
    utc(input) {
        let utcStamp;
        if (input) {
            return this._getSyncedClass(input).utc();
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
                d = this._getSyncedClass(utcDate);
            this.algorithmsCalc(d);
            this._utcMode = true;
            this.zone(0);
            return this;
        }
    }


    /**
     * @returns {boolean}
     */
    isUtc() {
        return this._utcMode;
    }


    /**
     * @returns {boolean}
     * @link https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C
     */
    isDST() {
        let month = this.month(),
            day = this.date();
        if ((month == 1 && day > 1) || (month == 6 && day < 31) || (month < 6 && month >= 2)) {
            return true;
        }
        else {
            return false;
        }
    }



    /**
     * @returns {boolean}
     */
    isLeapYear(year) {
        if (year === undefined) {
            year = this.year();
        }
        if (this.calendarType == 'persian' && this.leapYearMode === 'algorithmic') {
            return this.algorithms.leap_persian(year);
        }
        if (this.calendarType == 'persian' && this.leapYearMode === 'astronomical') {
            return this.algorithms.leap_persiana(year);
        }
        else if (this.calendarType == 'gregorian') {
            return this.algorithms.leap_gregorian(year);
        }
    }


    /**
     * @param yearInput
     * @param monthInput
     * @returns {number}
     */
    daysInMonth(yearInput, monthInput) {
        let year = yearInput ? yearInput : this.year(),
            month = monthInput ? monthInput : this.month();
        if (this.calendarType === 'persian') {
            if (month < 1 || month > 12)
                return 0;
            if (month < 7)
                return 31;
            if (month < 12)
                return 30;
            if (this.isLeapYear(year)) {
                return 30;
            }
            return 29;
        }
        if (this.calendarType === 'gregorian') {
            return new Date(year, month, 0).getDate();
        }
    }


    /**
     * @description Return Native Javascript Date
     * @returns {*|PersianDate.gDate}
     */
    toDate() {
        return this.State.gDate;
    }


    /**
     * @description Returns Array Of Persian Date
     * @returns {array}
     */
    toArray() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    }


    /**
     * @returns {*}
     */
    formatNumber() {
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
     * @param inputString
     * @returns {*}
     */
    format(inputString) {
        if (this.State.isInvalidDate) {
          return false;
        }
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
        function replaceFunction(input) {
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
                    return self.format('H:m a');
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
                    return self.format('MMMM YYYY DD   H:m  a');
                }
                // Sep 4 1986 8:30 PM
                case ('lll'): {
                    return self.format('MMM YYYY DD   H:m  a');
                }
                //Thursday, September 4th 1986 8:30 PM
                case ('LLLL'): {
                    return self.format('dddd D MMMM YYYY  H:m  a');
                }
                // Thu, Sep 4 1986 8:30 PM
                case ('llll'): {
                    return self.format('ddd D MMM YYYY  H:m  a');
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
     * @param key
     * @param value
     * @returns {PersianDate}
     */
    add(key, value) {
        if (value === 0 ) {
          return this;
        }
        let unit = normalizeDuration(key, value).unit,
            arr = this.toArray();
        value = normalizeDuration(key, value).value;
        if (unit === 'year') {
            let normalizedDate = arr[2] ,
              monthDays = this.daysInMonth(arr[0] + value, arr[1]);
            if (arr[2] > monthDays) {
                normalizedDate = monthDays;
            }
            let tempDate = new PersianDateClass([arr[0] + value, arr[1], normalizedDate, arr[3], arr[4], arr[5], arr[6], arr[7]]);
            return tempDate;
        }
        if (unit === 'month') {
            let tempYear = Math.floor(value / 12);
            let remainingMonth = value - (tempYear * 12),
                calcedMonth = null;
            if (arr[1] + remainingMonth > 12) {
                tempYear += 1;
                calcedMonth = arr[1] + remainingMonth - 12;
            } else {
                calcedMonth = arr[1] + remainingMonth ;
            }
            let normalizaedDate = arr[2],
                tempDateArray = new PersianDateClass([arr[0] + tempYear, calcedMonth, 1, arr[3], arr[4], arr[5], arr[6], arr[7]]).toArray(),
                monthDays = this.daysInMonth(arr[0] + tempYear, calcedMonth);
            if (arr[2] > monthDays) {
                normalizaedDate = monthDays;
            }
            return new PersianDateClass([tempDateArray[0], tempDateArray[1], normalizaedDate, tempDateArray[3], tempDateArray[4], tempDateArray[5], tempDateArray[6], tempDateArray[7]]);
        }
        if (unit === 'day') {
            let calcedDay = new PersianDateClass(this.valueOf()).hour(12),
                newMillisecond = calcedDay.valueOf() + (value * 86400000),
                newDate = new PersianDateClass(newMillisecond);
            return newDate.hour(arr[3]);
        }
        if (unit === 'week') {
            let calcedDay = new PersianDateClass(this.valueOf()).hour(12),
                newMillisecond = calcedDay.valueOf() + (7 * value * 86400000),
                newDate = new PersianDateClass(newMillisecond);
            return newDate.hour(arr[3]);
        }
        if (unit === 'hour') {
            let newMillisecond = this.valueOf() + (value * 3600000);
            return this.unix(newMillisecond / 1000);
        }
        if (unit === 'minute') {
            let newMillisecond = this.valueOf() + (value * 60000);
            return this.unix(newMillisecond / 1000);
        }
        if (unit === 'second') {
            let newMillisecond = this.valueOf() + (value * 1000);
            return this.unix(newMillisecond / 1000);
        }
        if (unit === 'millisecond') {
            let newMillisecond = this.valueOf() + value;
            return this.unix(newMillisecond / 1000);
        }
        return this._getSyncedClass(this.valueOf());
    }


    /**
     * @param key
     * @param value
     * @returns {PersianDate}
     */
    subtract(key, value) {
        return this.add(key, value * -1);
    }

    /**
     * check if a date is same as b
     * @param dateA
     * @param dateB
     * @since 1.0.0
     * @return {boolean}
     * @static
     */
    static isSameDay(dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    }

    /**
     * @param dateB
     * @since 1.0.0
     * @return {PersianDateClass|*|boolean}
     */
    isSameDay(dateB) {
        return this && dateB && this.date() == dateB.date() && this.year() == dateB.year() && this.month() == dateB.month();
    }

    /**
     * @desc check if a month is same as b
     * @param {Date} dateA
     * @param {Date} dateB
     * @return {boolean}
     * @since 1.0.0
     * @static
     */
    static isSameMonth(dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    }

    /**
     * @desc check two for month similarity
     * @param dateA
     * @param dateB
     * @since 1.0.0
     * @return {*|boolean}
     */
    isSameMonth(dateB) {
        return this && dateB && this.year() == this.year() && this.month() == dateB.month();
    }
}

/**
 * @type {PersianDateClass}
 */
module.exports = PersianDateClass;
