/*!
 * 
 * persian-date -  1.0.5
 * Reza Babakhani <babakhani.reza@gmail.com>
 * http://babakhani.github.io/PersianWebToolkit/docs/persian-date/
 * Under WTFPL license 
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["persianDate"] = factory();
	else
		root["persianDate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var durationUnit = __webpack_require__(4).durationUnit;

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, [{
        key: 'toPersianDigit',


        /**
         * @description return converted string to persian digit
         * @param digit
         * @returns {string|*}
         */
        value: function toPersianDigit(digit) {
            var latinDigit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return digit.toString().replace(/\d+/g, function (digit) {
                var enDigitArr = [],
                    peDigitArr = [],
                    i = void 0,
                    j = void 0;
                for (i = 0; i < digit.length; i += 1) {
                    enDigitArr.push(digit.charCodeAt(i));
                }
                for (j = 0; j < enDigitArr.length; j += 1) {
                    peDigitArr.push(String.fromCharCode(enDigitArr[j] + (!!latinDigit && latinDigit === true ? 1584 : 1728)));
                }
                return peDigitArr.join('');
            });
        }

        /**
         * @param number
         * @param targetLength
         * @returns {string}
         */

    }, {
        key: 'leftZeroFill',
        value: function leftZeroFill(number, targetLength) {
            var output = number + '';
            while (output.length < targetLength) {
                output = '0' + output;
            }
            return output;
        }

        /**
         * @description normalize duration params and return valid param
         * @return {{unit: *, value: *}}
         */

    }, {
        key: 'normalizeDuration',
        value: function normalizeDuration() {
            var unit = void 0,
                value = void 0;
            if (typeof arguments[0] === 'string') {
                unit = arguments[0];
                value = arguments[1];
            } else {
                value = arguments[0];
                unit = arguments[1];
            }
            if (durationUnit.year.indexOf(unit) > -1) {
                unit = 'year';
            } else if (durationUnit.month.indexOf(unit) > -1) {
                unit = 'month';
            } else if (durationUnit.day.indexOf(unit) > -1) {
                unit = 'day';
            } else if (durationUnit.hour.indexOf(unit) > -1) {
                unit = 'hour';
            } else if (durationUnit.minute.indexOf(unit) > -1) {
                unit = 'minute';
            } else if (durationUnit.second.indexOf(unit) > -1) {
                unit = 'second';
            } else if (durationUnit.millisecond.indexOf(unit) > -1) {
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

    }, {
        key: 'absRound',
        value: function absRound(number) {
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

    }, {
        key: 'absFloor',
        value: function absFloor(number) {
            if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
            } else {
                return Math.floor(number);
            }
        }
    }]);

    return Helpers;
}();

module.exports = Helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeChecking = __webpack_require__(10);
var Algorithms = __webpack_require__(2);
var Helpers = __webpack_require__(0);
var Duration = __webpack_require__(5);
var toPersianDigit = new Helpers().toPersianDigit;
var leftZeroFill = new Helpers().leftZeroFill;
var normalizeDuration = new Helpers().normalizeDuration;
var fa = __webpack_require__(7);
var en = __webpack_require__(6);

/**
 * @description persian date class
 */

var PersianDateClass = function () {

    /**
     * @param input
     * @return {PersianDateClass}
     */
    function PersianDateClass(input) {
        _classCallCheck(this, PersianDateClass);

        this.calendarType = PersianDateClass.calendarType;
        this.localType = PersianDateClass.localType;
        this.leapYearMode = PersianDateClass.leapYearMode;

        this.algorithms = new Algorithms(this);
        this.version = "1.0.5";
        this._utcMode = false;
        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }
        this.setup(input);
        this.ON = this.algorithms.ON;
        return this;
    }

    /**
     * @param input
     */


    _createClass(PersianDateClass, [{
        key: 'setup',
        value: function setup(input) {
            // Convert Any thing to Gregorian Date
            if (TypeChecking.isDate(input)) {
                this._gDateToCalculators(input);
            } else if (TypeChecking.isArray(input)) {
                this.algorithmsCalc([input[0], input[1] ? input[1] : 1, input[2] ? input[2] : 1, input[3], input[4], input[5], input[6] ? input[6] : 0]);
            } else if (TypeChecking.isNumber(input)) {
                var fromUnix = new Date(input);
                this._gDateToCalculators(fromUnix);
            }
            // instance of pDate
            else if (input instanceof PersianDateClass) {
                    this.algorithmsCalc([input.year(), input.month(), input.date(), input.hour(), input.minute(), input.second(), input.millisecond()]);
                }
                // ASP.NET JSON Date
                else if (input && input.substring(0, 6) === '/Date(') {
                        var fromDotNet = new Date(parseInt(input.substr(6)));
                        this._gDateToCalculators(fromDotNet);
                    } else {
                        var now = new Date();
                        this._gDateToCalculators(now);
                    }
        }

        /**
         * @param input
         * @return {*}
         * @private
         */

    }, {
        key: '_getSyncedClass',
        value: function _getSyncedClass(input) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode);
            return new syncedCelander(input);
        }

        /**
         * @param inputgDate
         * @private
         */

    }, {
        key: '_gDateToCalculators',
        value: function _gDateToCalculators(inputgDate) {
            this.algorithms.calcGregorian([inputgDate.getFullYear(), inputgDate.getMonth(), inputgDate.getDate(), inputgDate.getHours(), inputgDate.getMinutes(), inputgDate.getSeconds(), inputgDate.getMilliseconds()]);
        }

        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @static
         * @return {*}
         */

    }, {
        key: 'rangeName',


        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @return {*}
         */
        value: function rangeName() {
            var t = this.calendarType;
            if (this.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }

        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode(input) {
            this.leapYearMode = input;
            if (input === 'astronomical' && this.calendarType == 'persian') {
                this.leapYearMode = 'astronomical';
            } else if (input === 'algorithmic' && this.calendarType == 'persian') {
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

    }, {
        key: 'toCalendar',


        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        value: function toCalendar(input) {
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

    }, {
        key: 'toLocale',


        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        value: function toLocale(input) {
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

    }, {
        key: '_locale',
        value: function _locale() {
            var t = this.calendarType;
            if (this.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekName',
        value: function _weekName(input) {
            return this._locale().weekdays[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekNameShort',
        value: function _weekNameShort(input) {
            return this._locale().weekdaysShort[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekNameMin',
        value: function _weekNameMin(input) {
            return this._locale().weekdaysMin[input - 1];
        }

        /**
         * @param input
         * @return {*}
         * @private
         */

    }, {
        key: '_dayName',
        value: function _dayName(input) {
            return this._locale().persianDaysName[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_monthName',
        value: function _monthName(input) {
            return this._locale().months[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_monthNameShort',
        value: function _monthNameShort(input) {
            return this._locale().monthsShort[input - 1];
        }

        /**
         * @param obj
         * @returns {boolean}
         */

    }, {
        key: 'isPersianDate',


        /**
         * @param obj
         * @return {boolean}
         */
        value: function isPersianDate(obj) {
            return obj instanceof PersianDateClass;
        }

        /**
         * @returns {PersianDate}
         */

    }, {
        key: 'clone',
        value: function clone() {
            return this._getSyncedClass(this.ON.gDate);
        }

        /**
         * @since 1.0.0
         * @param dateArray
         * @return {*}
         */

    }, {
        key: 'algorithmsCalc',
        value: function algorithmsCalc(dateArray) {
            if (this.isPersianDate(dateArray)) {
                dateArray = [dateArray.year(), dateArray.month(), dateArray.date(), dateArray.hour(), dateArray.minute(), dateArray.second(), dateArray.millisecond()];
            }
            if (this.calendarType === 'persian' && this.leapYearMode == 'algorithmic') {
                return this.algorithms.calcPersian(dateArray);
            } else if (this.calendarType === 'persian' && this.leapYearMode == 'astronomical') {
                return this.algorithms.calcPersiana(dateArray);
            } else if (this.calendarType === 'gregorian') {
                dateArray[1] = dateArray[1] - 1;
                return this.algorithms.calcGregorian(dateArray);
            }
        }

        /**
         * @since 1.0.0
         * @return {*}
         */

    }, {
        key: 'calendar',
        value: function calendar() {
            var key = void 0;
            if (this.calendarType == 'persian') {
                if (this.leapYearMode == 'astronomical') {
                    key = 'persianAstro';
                } else if (this.leapYearMode == 'algorithmic') {
                    key = 'persianAlgo';
                }
            } else {
                key = 'gregorian';
            }
            return this.ON[key];
        }

        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */

    }, {
        key: 'duration',


        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */
        value: function duration(input, key) {
            return new Duration(input, key);
        }

        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */

    }, {
        key: 'isDuration',


        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */
        value: function isDuration(obj) {
            return obj instanceof Duration;
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'years',
        value: function years(input) {
            return this.year(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'year',
        value: function year(input) {
            if (input || input === 0) {
                this.algorithmsCalc([input, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]);
                return this;
            } else {
                return this.calendar().year;
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'month',
        value: function month(input) {
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

    }, {
        key: 'days',
        value: function days() {
            return this.day();
        }

        /**
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */

    }, {
        key: 'day',
        value: function day() {
            return this.calendar().weekday;
        }

        /**
         * Day of Months
         * @param input
         * @returns {*}
         */

    }, {
        key: 'dates',
        value: function dates(input) {
            return this.date(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'date',
        value: function date(input) {
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

    }, {
        key: 'hour',
        value: function hour(input) {
            return this.hours(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'hours',
        value: function hours(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), input]);
                return this;
            } else {
                return this.ON.gDate.getHours();
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'minute',
        value: function minute(input) {
            return this.minutes(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'minutes',
        value: function minutes(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), input]);
                return this;
            } else {
                return this.ON.gDate.getMinutes();
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'second',
        value: function second(input) {
            return this.seconds(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'seconds',
        value: function seconds(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), input]);
                return this;
            } else {
                return this.ON.gDate.getSeconds();
            }
        }

        /**
         * @param input
         * @returns {*}
         * Getter Setter
         */

    }, {
        key: 'millisecond',
        value: function millisecond(input) {
            return this.milliseconds(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'milliseconds',
        value: function milliseconds(input) {
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


    }, {
        key: 'unix',


        /**
         * Return Unix Timestamp (1318874398)
         * @param timestamp
         * @returns {*}
         */
        value: function unix(timestamp) {
            var output = void 0;
            if (timestamp) {
                return this._getSyncedClass(timestamp * 1000);
            } else {
                var str = this.ON.gDate.valueOf().toString();
                output = str.substring(0, str.length - 3);
            }
            return parseInt(output);
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'valueOf',
        value: function valueOf() {
            return this.ON.gDate.valueOf();
        }

        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */

    }, {
        key: 'getFirstWeekDayOfMonth',


        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */
        value: function getFirstWeekDayOfMonth(year, month) {
            return this._getSyncedClass([year, month, 1]).day();
        }

        /**
         * @param input
         * @param val
         * @param asFloat
         * @returns {*}
         */

    }, {
        key: 'diff',
        value: function diff(input, val, asFloat) {
            var self = this,
                inputMoment = input,
                zoneDiff = 0,
                diff = self.ON.gDate - inputMoment.toDate() - zoneDiff,
                year = self.year() - inputMoment.year(),
                month = self.month() - inputMoment.month(),
                date = (self.date() - inputMoment.date()) * -1,
                output = void 0;

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

    }, {
        key: 'startOf',
        value: function startOf(key) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
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
                    return new syncedCelander([this.year(), this.month(), this.date() - (this.calendar().weekday - 1)]);
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

    }, {
        key: 'endOf',
        value: function endOf(key) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
            // Simplify this
            switch (key) {
                case 'years':
                case 'year':
                    var days = this.isLeapYear() ? 30 : 29;
                    return new syncedCelander([this.year(), 12, days, 23, 59, 59]);
                case 'months':
                case 'month':
                    var monthDays = this.daysInMonth(this.year(), this.month());
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
                    var weekDayNumber = this.calendar().weekday;
                    return new syncedCelander([this.year(), this.month(), this.date() + (7 - weekDayNumber)]);
                default:
                    return this.clone();
            }
            /* eslint-enable no-case-declarations */
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'sod',
        value: function sod() {
            return this.startOf('day');
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'eod',
        value: function eod() {
            return this.endOf('day');
        }

        /** Get the timezone offset in minutes.
         * @return {*}
         */

    }, {
        key: 'zone',
        value: function zone(input) {
            if (input || input === 0) {
                this.ON.zone = input;
                return this;
            } else {
                return this.ON.zone;
            }
        }

        /**
         * @returns {PersianDate}
         */

    }, {
        key: 'local',
        value: function local() {
            var utcStamp = void 0;
            if (this._utcMode) {
                var ThatDayOffset = new Date(this.toDate()).getTimezoneOffset();
                var offsetMils = ThatDayOffset * 60 * 1000;
                if (ThatDayOffset < 0) {
                    utcStamp = this.valueOf() - offsetMils;
                } else {
                    /* istanbul ignore next */
                    utcStamp = this.valueOf() + offsetMils;
                }
                this.toCalendar(PersianDateClass.calendarType);
                var utcDate = new Date(utcStamp);
                this._gDateToCalculators(utcDate);
                this._utcMode = false;
                this.zone(ThatDayOffset);
                return this;
            } else {
                return this;
            }
        }

        /**
         * @param input
         * @return {*}
         */

    }, {
        key: 'utc',


        /**
         * @description Current date/time in UTC mode
         * @param input
         * @returns {*}
         */
        value: function utc(input) {
            var utcStamp = void 0;
            if (input) {
                return this._getSyncedClass(input).utc();
            }
            if (this._utcMode) {
                return this;
            } else {
                var offsetMils = this.zone() * 60 * 1000;
                if (this.zone() < 0) {
                    utcStamp = this.valueOf() + offsetMils;
                } else {
                    /* istanbul ignore next */
                    utcStamp = this.valueOf() - offsetMils;
                }
                var utcDate = new Date(utcStamp),
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

    }, {
        key: 'isUtc',
        value: function isUtc() {
            return this._utcMode;
        }

        /**
         * @returns {boolean}
         * @link https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C
         */

    }, {
        key: 'isDST',
        value: function isDST() {
            var month = this.month(),
                day = this.date();
            if (month == 1 && day > 1 || month == 6 && day < 31 || month < 6 && month >= 2) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * @returns {boolean}
         */

    }, {
        key: 'isLeapYear',
        value: function isLeapYear(year) {
            if (year === undefined) {
                year = this.year();
            }
            if (this.calendarType == 'persian' && this.leapYearMode === 'algorithmic') {
                return this.algorithms.leap_persian(year);
            }
            if (this.calendarType == 'persian' && this.leapYearMode === 'astronomical') {
                return this.algorithms.leap_persiana(year);
            } else if (this.calendarType == 'gregorian') {
                return this.algorithms.leap_gregorian(year);
            }
        }

        /**
         * @param yearInput
         * @param monthInput
         * @returns {number}
         */

    }, {
        key: 'daysInMonth',
        value: function daysInMonth(yearInput, monthInput) {
            var year = yearInput ? yearInput : this.year(),
                month = monthInput ? monthInput : this.month();
            if (this.calendarType === 'persian') {
                if (month < 1 || month > 12) return 0;
                if (month < 7) return 31;
                if (month < 12) return 30;
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

    }, {
        key: 'toDate',
        value: function toDate() {
            return this.ON.gDate;
        }

        /**
         * @description Returns Array Of Persian Date
         * @returns {array}
         */

    }, {
        key: 'toArray',
        value: function toArray() {
            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'formatNumber',
        value: function formatNumber() {
            var output = void 0,
                self = this;

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

    }, {
        key: 'format',
        value: function format(inputString) {
            var self = this,
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

            var checkPersian = function checkPersian(i) {
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
                    case 'a':
                        {
                            if (formatToPersian) return info.hour >= 12 ? 'ب ظ' : 'ق ظ';else return info.hour >= 12 ? 'PM' : 'AM';
                        }
                    // Hours (Int)
                    case 'H':
                        {
                            return checkPersian(info.hour);
                        }
                    case 'HH':
                        {
                            return checkPersian(leftZeroFill(info.hour, 2));
                        }
                    case 'h':
                        {
                            return checkPersian(info.hour % 12);
                        }
                    case 'hh':
                        {
                            return checkPersian(leftZeroFill(info.hour % 12, 2));
                        }
                    // Minutes
                    case 'm':
                        {
                            return checkPersian(leftZeroFill(info.minute, 2));
                        }
                    // Two Digit Minutes
                    case 'mm':
                        {
                            return checkPersian(leftZeroFill(info.minute, 2));
                        }
                    // Second
                    case 's':
                        {
                            return checkPersian(info.second);
                        }
                    case 'ss':
                        {
                            return checkPersian(leftZeroFill(info.second, 2));
                        }
                    // Day (Int)
                    case 'D':
                        {
                            return checkPersian(leftZeroFill(info.date));
                        }
                    // Return Two Digit
                    case 'DD':
                        {
                            return checkPersian(leftZeroFill(info.date, 2));
                        }
                    // Return day Of Month
                    case 'DDD':
                        {
                            var t = self.startOf('year');
                            return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                        }
                    // Return Day of Year
                    case 'DDDD':
                        {
                            var _t = self.startOf('year');
                            return checkPersian(leftZeroFill(self.diff(_t, 'days'), 3));
                        }
                    // Return day Of week
                    case 'd':
                        {
                            return checkPersian(self.calendar().weekday);
                        }
                    // Return week day name abbr
                    case 'ddd':
                        {
                            return self._weekNameShort(self.calendar().weekday);
                        }
                    case 'dddd':
                        {
                            return self._weekName(self.calendar().weekday);
                        }
                    // Return Persian Day Name
                    case 'ddddd':
                        {
                            return self._dayName(self.calendar().day);
                        }
                    // Return Persian Day Name
                    case 'dddddd':
                        {
                            return self._weekNameMin(self.calendar().weekday);
                        }
                    // Return Persian Day Name
                    case 'w':
                        {
                            var _t2 = self.startOf('year'),
                                day = parseInt(self.diff(_t2, 'days') / 7) + 1;
                            return checkPersian(day);
                        }
                    // Return Persian Day Name
                    case 'ww':
                        {
                            var _t3 = self.startOf('year'),
                                _day = leftZeroFill(parseInt(self.diff(_t3, 'days') / 7) + 1, 2);
                            return checkPersian(_day);
                        }
                    // Month  (Int)
                    case 'M':
                        {
                            return checkPersian(info.month);
                        }
                    // Two Digit Month (Str)
                    case 'MM':
                        {
                            return checkPersian(leftZeroFill(info.month, 2));
                        }
                    // Abbr String of Month (Str)
                    case 'MMM':
                        {
                            return self._monthNameShort(info.month);
                        }
                    // Full String name of Month (Str)
                    case 'MMMM':
                        {
                            return self._monthName(info.month);
                        }
                    // Year
                    // Two Digit Year (Str)
                    case 'YY':
                        {
                            var yearDigitArray = info.year.toString().split('');
                            return checkPersian(yearDigitArray[2] + yearDigitArray[3]);
                        }
                    // Full Year (Int)
                    case 'YYYY':
                        {
                            return checkPersian(info.year);
                        }
                    /* istanbul ignore next */
                    case 'Z':
                        {
                            var flag = '+',
                                hours = Math.round(info.timezone / 60),
                                minutes = info.timezone % 60;

                            if (minutes < 0) {
                                minutes *= -1;
                            }
                            if (hours < 0) {
                                flag = '-';
                                hours *= -1;
                            }

                            var z = flag + leftZeroFill(hours, 2) + ':' + leftZeroFill(minutes, 2);
                            return checkPersian(z);
                        }
                    /* istanbul ignore next */
                    case 'ZZ':
                        {
                            var _flag = '+',
                                _hours = Math.round(info.timezone / 60),
                                _minutes = info.timezone % 60;

                            if (_minutes < 0) {
                                _minutes *= -1;
                            }
                            if (_hours < 0) {
                                _flag = '-';
                                _hours *= -1;
                            }
                            var _z = _flag + leftZeroFill(_hours, 2) + '' + leftZeroFill(_minutes, 2);
                            return checkPersian(_z);
                        }
                    /* istanbul ignore next */
                    case 'X':
                        {
                            return self.unix();
                        }
                    // 8:30 PM
                    case 'LT':
                        {
                            return self.format('H:m a');
                        }
                    // 09/04/1986
                    case 'L':
                        {
                            return self.format('YYYY/MM/DD');
                        }
                    // 9/4/1986
                    case 'l':
                        {
                            return self.format('YYYY/M/D');
                        }
                    // September 4th 1986
                    case 'LL':
                        {
                            return self.format('MMMM DD YYYY');
                        }
                    // Sep 4 1986
                    case 'll':
                        {
                            return self.format('MMM DD YYYY');
                        }
                    //September 4th 1986 8:30 PM
                    case 'LLL':
                        {
                            return self.format('MMMM YYYY DD   H:m  a');
                        }
                    // Sep 4 1986 8:30 PM
                    case 'lll':
                        {
                            return self.format('MMM YYYY DD   H:m  a');
                        }
                    //Thursday, September 4th 1986 8:30 PM
                    case 'LLLL':
                        {
                            return self.format('dddd D MMMM YYYY  H:m  a');
                        }
                    // Thu, Sep 4 1986 8:30 PM
                    case 'llll':
                        {
                            return self.format('ddd D MMM YYYY  H:m  a');
                        }
                }
            }

            /* jshint ignore:end */

            if (inputString) {
                return inputString.replace(formattingTokens, replaceFunction);
            } else {
                var _inputString = 'YYYY-MM-DD HH:mm:ss a';
                return _inputString.replace(formattingTokens, replaceFunction);
            }
        }

        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */

    }, {
        key: 'add',
        value: function add(key, value) {
            var duration = new Duration(key, value)._data,
                unit = normalizeDuration(key, value).unit;
            value = normalizeDuration(key, value).value;

            if (unit === 'year' || unit === 'month') {
                if (duration.years > 0) {
                    var newYear = this.year() + duration.years;
                    this.year(newYear);
                }
                if (duration.months > 0) {
                    var oldDate = this.date();
                    var newMonth = this.month() + duration.months;
                    var thisMonthDaysCount = this.daysInMonth(this.year(), newMonth);
                    if (oldDate >= thisMonthDaysCount) {
                        oldDate = thisMonthDaysCount;
                    }
                    this.date(oldDate);
                    this.month(newMonth);
                }
            }
            if (unit === 'day') {
                var oldHour = this.hour();
                var newDate = this.valueOf() + value * 24 * 60 * 60 * 1000;
                return this.unix(newDate / 1000).hour(oldHour);
            }
            if (unit === 'hour') {
                var _newDate = this.valueOf() + value * 60 * 60 * 1000;
                return this.unix(_newDate / 1000);
            }
            if (unit === 'minute') {
                var _newDate2 = this.valueOf() + value * 60 * 1000;
                return this.unix(_newDate2 / 1000);
            }
            if (unit === 'second') {
                var _newDate3 = this.valueOf() + value * 1000;
                return this.unix(_newDate3 / 1000);
            }
            if (unit === 'millisecond') {
                // log('add millisecond')
                var newMillisecond = this.valueOf() + value;
                return this.unix(newMillisecond / 1000);
            }
            return this._getSyncedClass(this.valueOf());
        }

        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */

    }, {
        key: 'subtract',
        value: function subtract(key, value) {
            var duration = new Duration(key, value)._data;
            var unit = normalizeDuration(key, value).unit;
            value = normalizeDuration(key, value).value;

            if (unit === 'year' || unit === 'month') {
                if (duration.years > 0) {
                    var newYear = this.year() - duration.years;
                    this.year(newYear);
                }
                if (duration.months > 0) {
                    var oldDate = this.date();
                    var newMonth = this.month() - duration.months;
                    this.month(newMonth);
                    var thisMonthDaysCount = this.daysInMonth(this.year(), this.month());
                    if (oldDate > thisMonthDaysCount) {
                        oldDate = thisMonthDaysCount;
                    }
                    this.date(oldDate);
                }
            }
            if (unit === 'day') {
                var oldHour = this.hour();
                var newDate = this.valueOf() - value * 24 * 60 * 60 * 1000;
                return this.unix(newDate / 1000).hour(oldHour);
            }
            if (unit === 'hour') {
                var _newDate4 = this.valueOf() - value * 60 * 60 * 1000;
                return this.unix(_newDate4 / 1000);
            }
            if (unit === 'minute') {
                var _newDate5 = this.valueOf() - value * 60 * 1000;
                return this.unix(_newDate5 / 1000);
            }
            if (unit === 'second') {
                var _newDate6 = this.valueOf() - value * 1000;
                return this.unix(_newDate6 / 1000);
            }
            if (unit === 'millisecond') {
                // log('add millisecond')
                var newMillisecond = this.valueOf() - value;
                return this.unix(newMillisecond / 1000);
            }
            return this._getSyncedClass(this.valueOf());
        }

        /**
         * check if a date is same as b
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {boolean}
         * @static
         */

    }, {
        key: 'isSameDay',


        /**
         * @param dateB
         * @since 1.0.0
         * @return {PersianDateClass|*|boolean}
         */
        value: function isSameDay(dateB) {
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

    }, {
        key: 'isSameMonth',


        /**
         * @desc check two for month similarity
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {*|boolean}
         */
        value: function isSameMonth(dateB) {
            return this && dateB && this.year() == this.year() && this.month() == dateB.month();
        }
    }], [{
        key: 'rangeName',
        value: function rangeName() {
            var p = PersianDateClass,
                t = p.calendarType;
            if (p.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }
    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode(input) {
            var d = PersianDateClass;
            d.leapYearMode = input;
            return d;
        }
    }, {
        key: 'toCalendar',
        value: function toCalendar(input) {
            var d = PersianDateClass;
            d.calendarType = input;
            return d;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLocale',
        value: function toLocale(input) {
            var d = PersianDateClass;
            d.localType = input;
            if (d.localType !== 'fa') {
                d.formatPersian = false;
            } else {
                d.formatPersian = '_default';
            }
            return d;
        }
    }, {
        key: 'isPersianDate',
        value: function isPersianDate(obj) {
            return obj instanceof PersianDateClass;
        }
    }, {
        key: 'duration',
        value: function duration(input, key) {
            return new Duration(input, key);
        }
    }, {
        key: 'isDuration',
        value: function isDuration(obj) {
            return obj instanceof Duration;
        }
    }, {
        key: 'unix',
        value: function unix(timestamp) {
            if (timestamp) {
                return new PersianDateClass(timestamp * 1000);
            } else {
                return new PersianDateClass().unix();
            }
        }
    }, {
        key: 'getFirstWeekDayOfMonth',
        value: function getFirstWeekDayOfMonth(year, month) {
            return new PersianDateClass([year, month, 1]).day();
        }
    }, {
        key: 'utc',
        value: function utc(input) {
            if (input) {
                return new PersianDateClass(input).utc();
            } else {
                return new PersianDateClass().utc();
            }
        }
    }, {
        key: 'isSameDay',
        value: function isSameDay(dateA, dateB) {
            return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
    }, {
        key: 'isSameMonth',
        value: function isSameMonth(dateA, dateB) {
            return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
    }]);

    return PersianDateClass;
}();

/**
 * @type {PersianDateClass}
 */


module.exports = PersianDateClass;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Start algorithm class
var ASTRO = __webpack_require__(3);
var ON = __webpack_require__(9);

var Algorithms = function () {
    function Algorithms(parent) {
        _classCallCheck(this, Algorithms);

        this.parent = parent;
        this.ASTRO = new ASTRO();
        this.ON = new ON();
        /*  You may notice that a variety of array variables logically local
         to functions are declared globally here.  In JavaScript, construction
         of an array variable from source code occurs as the code is
         interpreted.  Making these variables pseudo-globals permits us
         to avoid overhead constructing and disposing of them in each
         call on the function in which whey are used.  */
        // TODO this block didnt used in main agorithm
        this.J0000 = 1721424.5; // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5; // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5; // Epoch of Modified Julian Date system
        this.NormLeap = [false /*"Normal year"*/, true /*"Leap year"*/];
        // TODO END
        this.GREGORIAN_EPOCH = 1721425.5;
        this.PERSIAN_EPOCH = 1948320.5;
    }

    /**
     * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
     * @param year
     * @return {boolean}
     */


    _createClass(Algorithms, [{
        key: 'leap_gregorian',
        value: function leap_gregorian(year) {
            return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
        }

        /**
         * @desc Determine Julian day number from Gregorian calendar date
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'gregorian_to_jd',
        value: function gregorian_to_jd(year, month, day) {
            return this.GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) + -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : this.leap_gregorian(year) ? -1 : -2) + day);
        }

        /**
         * @desc Calculate Gregorian calendar date from Julian day
         * @param {*} jd
         */

    }, {
        key: 'jd_to_gregorian',
        value: function jd_to_gregorian(jd) {
            var wjd = void 0,
                depoch = void 0,
                quadricent = void 0,
                dqc = void 0,
                cent = void 0,
                dcent = void 0,
                quad = void 0,
                dquad = void 0,
                yindex = void 0,
                year = void 0,
                yearday = void 0,
                leapadj = void 0,
                month = void 0,
                day = void 0;

            wjd = Math.floor(jd - 0.5) + 0.5;
            depoch = wjd - this.GREGORIAN_EPOCH;
            quadricent = Math.floor(depoch / 146097);
            dqc = this.ASTRO.mod(depoch, 146097);
            cent = Math.floor(dqc / 36524);
            dcent = this.ASTRO.mod(dqc, 36524);
            quad = Math.floor(dcent / 1461);
            dquad = this.ASTRO.mod(dcent, 1461);
            yindex = Math.floor(dquad / 365);
            year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
            if (!(cent === 4 || yindex === 4)) {
                year++;
            }
            yearday = wjd - this.gregorian_to_jd(year, 1, 1);
            leapadj = wjd < this.gregorian_to_jd(year, 3, 1) ? 0 : this.leap_gregorian(year) ? 1 : 2;
            month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
            day = wjd - this.gregorian_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        /**
         * @param {*} year
         */
        //    leap_julian (year) {
        //        return this.ASTRO.mod(year, 4) === ((year > 0) ? 0 : 3);
        //    }


        /**
         * @desc Calculate Julian calendar date from Julian day
         * @param {*} td
         */
        //    jd_to_julian (td) {
        //        let z, a, b, c, d, e, year, month, day;
        //
        //        td += 0.5;
        //        z = Math.floor(td);
        //
        //        a = z;
        //        b = a + 1524;
        //        c = Math.floor((b - 122.1) / 365.25);
        //        d = Math.floor(365.25 * c);
        //        e = Math.floor((b - d) / 30.6001);
        //
        //        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        //        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
        //        day = b - d - Math.floor(30.6001 * e);
        //
        //        /*  If year is less than 1, subtract one to convert from
        //         a zero based date system to the common era system in
        //         which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */
        //
        //        if (year < 1) {
        //            year--;
        //        }
        //
        //        return [year, month, day];
        //    }


        /**
         * @desc TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
         March equinox at the Tehran meridian in
         a given Gregorian year.
         * @param {*} year
         */

    }, {
        key: 'tehran_equinox',
        value: function tehran_equinox(year) {
            var equJED = void 0,
                equJD = void 0,
                equAPP = void 0,
                equTehran = void 0,
                dtTehran = void 0;

            //  March equinox in dynamical time
            equJED = this.ASTRO.equinox(year, 0);

            //  Correct for delta T to obtain Universal time
            equJD = equJED - this.ASTRO.deltat(year) / (24 * 60 * 60);

            //  Apply the equation of time to yield the apparent time at Greenwich
            equAPP = equJD + this.ASTRO.equationOfTime(equJED);

            /*  Finally, we must correct for the constant difference between
             the Greenwich meridian andthe time zone standard for
             Iran Standard time, 52°30' to the East.  */

            dtTehran = (52 + 30 / 60.0 + 0 / (60.0 * 60.0)) / 360;
            equTehran = equAPP + dtTehran;

            return equTehran;
        }

        /**
         * @desc TEHRAN_EQUINOX_JD  --  Calculate Julian day during which the
         March equinox, reckoned from the Tehran
         meridian, occurred for a given Gregorian
         year.
         * @param {*} year
         */

    }, {
        key: 'tehran_equinox_jd',
        value: function tehran_equinox_jd(year) {
            var ep = void 0,
                epg = void 0;

            ep = this.tehran_equinox(year);
            epg = Math.floor(ep);

            return epg;
        }

        /**
         * @desc  PERSIANA_YEAR  --  Determine the year in the Persian
         astronomical calendar in which a
         given Julian day falls.  Returns an
         array of two elements:
          [0]  Persian year
         [1]  Julian day number containing
         equinox for this year.
         * @param {*} jd
         */

    }, {
        key: 'persiana_year',
        value: function persiana_year(jd) {
            var guess = this.jd_to_gregorian(jd)[0] - 2,
                lasteq = void 0,
                nexteq = void 0,
                adr = void 0;

            lasteq = this.tehran_equinox_jd(guess);
            while (lasteq > jd) {
                guess--;
                lasteq = this.tehran_equinox_jd(guess);
            }
            nexteq = lasteq - 1;
            while (!(lasteq <= jd && jd < nexteq)) {
                lasteq = nexteq;
                guess++;
                nexteq = this.tehran_equinox_jd(guess);
            }
            adr = Math.round((lasteq - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1;

            return [adr, lasteq];
        }

        /**
         * @desc Calculate date in the Persian astronomical
         calendar from Julian day.
         * @param {*} jd
         */

    }, {
        key: 'jd_to_persiana',
        value: function jd_to_persiana(jd) {
            var year = void 0,
                month = void 0,
                day = void 0,
                adr = void 0,
                equinox = void 0,
                yday = void 0;

            jd = Math.floor(jd) + 0.5;
            adr = this.persiana_year(jd);
            year = adr[0];
            equinox = adr[1];
            day = Math.floor((jd - equinox) / 30) + 1;

            yday = Math.floor(jd) - this.persiana_to_jd(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = Math.floor(jd) - this.persiana_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        /**
         * @desc Obtain Julian day from a given Persian
         astronomical calendar date.
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'persiana_to_jd',
        value: function persiana_to_jd(year, month, day) {
            var adr = void 0,
                equinox = void 0,
                guess = void 0,
                jd = void 0;

            guess = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (year - 1 - 1);
            adr = [year - 1, 0];

            while (adr[0] < year) {
                adr = this.persiana_year(guess);
                guess = adr[1] + (this.ASTRO.TropicalYear + 2);
            }
            equinox = adr[1];

            jd = equinox + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + (day - 1);
            return jd;
        }

        /**
         * @desc Is a given year a leap year in the Persian astronomical calendar ?
         * @param {*} year
         */

    }, {
        key: 'leap_persiana',
        value: function leap_persiana(year) {
            return this.persiana_to_jd(year + 1, 1, 1) - this.persiana_to_jd(year, 1, 1) > 365;
        }

        /**
         * @desc Is a given year a leap year in the Persian calendar ?
         * also nasa use this algorithm https://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js search for 'getLastDayOfPersianMonth' and you can find it
         * @param {*} year
         *
         */

    }, {
        key: 'leap_persian',
        value: function leap_persian(year) {
            return ((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682;
        }

        /**
         * @desc Determine Julian day from Persian date
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'persian_to_jd',
        value: function persian_to_jd(year, month, day) {
            var epbase = void 0,
                epyear = void 0;

            epbase = year - (year >= 0 ? 474 : 473);
            epyear = 474 + this.ASTRO.mod(epbase, 2820);

            return day + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1);
        }

        /**
         * @desc Calculate Persian date from Julian day
         * @param {*} jd
         */

    }, {
        key: 'jd_to_persian',
        value: function jd_to_persian(jd) {
            var year = void 0,
                month = void 0,
                day = void 0,
                depoch = void 0,
                cycle = void 0,
                cyear = void 0,
                ycycle = void 0,
                aux1 = void 0,
                aux2 = void 0,
                yday = void 0;

            jd = Math.floor(jd) + 0.5;

            depoch = jd - this.persian_to_jd(475, 1, 1);
            cycle = Math.floor(depoch / 1029983);
            cyear = this.ASTRO.mod(depoch, 1029983);
            if (cyear === 1029982) {
                ycycle = 2820;
            } else {
                aux1 = Math.floor(cyear / 366);
                aux2 = this.ASTRO.mod(cyear, 366);
                ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
            }
            year = ycycle + 2820 * cycle + 474;
            if (year <= 0) {
                year--;
            }
            yday = jd - this.persian_to_jd(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = jd - this.persian_to_jd(year, month, 1) + 1;
            return [year, month, day];
        }

        /**
         *
         * @param {*} weekday
         */

    }, {
        key: 'gWeekDayToPersian',
        value: function gWeekDayToPersian(weekday) {
            if (weekday + 2 === 8) {
                return 1;
            } else if (weekday + 2 === 7) {
                return 7;
            } else {
                return weekday + 2;
            }
        }

        /**
         * @desc updateFromGregorian  --  Update all calendars from Gregorian.
         "Why not Julian date?" you ask.  Because
         starting from Gregorian guarantees we're
         already snapped to an integral second, so
         we don't get roundoff errors in other
         calendars.
         */

    }, {
        key: 'updateFromGregorian',
        value: function updateFromGregorian() {
            var j = void 0,
                year = void 0,
                mon = void 0,
                mday = void 0,
                hour = void 0,
                min = void 0,
                sec = void 0,
                weekday = void 0,
                utime = void 0,
                perscal = void 0;

            year = this.ON.gregorian.year;
            mon = this.ON.gregorian.month;
            mday = this.ON.gregorian.day;
            hour = 0; //this.ON.gregorian.hour;
            min = 0; //this.ON.gregorian.minute;
            sec = 0; //this.ON.gregorian.second;

            this.ON.gDate = new Date(year, mon, mday, this.ON.gregorian.hour, this.ON.gregorian.minute, this.ON.gregorian.second, this.ON.gregorian.millisecond);

            if (this.parent._utcMode === false) {
                this.ON.zone = this.ON.gDate.getTimezoneOffset();
            }

            // Added for this algorithms cant parse 2016,13,32 successfully
            this.ON.gregorian.year = this.ON.gDate.getFullYear();
            this.ON.gregorian.month = this.ON.gDate.getMonth();
            this.ON.gregorian.day = this.ON.gDate.getDate();

            //  Update Julian day
            // ---------------------------------------------------------------------------
            j = this.gregorian_to_jd(year, mon + 1, mday) + Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0;

            this.ON.julianday = j;
            this.ON.modifiedjulianday = j - this.JMJD;

            //  Update day of week in Gregorian box
            // ---------------------------------------------------------------------------
            weekday = this.ASTRO.jwday(j);
            // Move to 1 indexed number
            this.ON.gregorian.weekday = weekday + 1;

            //  Update leap year status in Gregorian box
            // ---------------------------------------------------------------------------
            this.ON.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];

            //  Update Julian Calendar
            // ---------------------------------------------------------------------------
            //        julcal = this.jd_to_julian(j);
            //
            //        this.ON.juliancalendar.year = julcal[0];
            //        this.ON.juliancalendar.month = julcal[1] - 1;
            //        this.ON.juliancalendar.day = julcal[2];
            //        this.ON.juliancalendar.leap = this.NormLeap[this.leap_julian(julcal[0]) ? 1 : 0];
            weekday = this.ASTRO.jwday(j);
            //        this.ON.juliancalendar.weekday = weekday;

            //  Update Persian Calendar
            // ---------------------------------------------------------------------------
            if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'algorithmic') {
                perscal = this.jd_to_persian(j);
                this.ON.persian.year = perscal[0];
                this.ON.persian.month = perscal[1] - 1;
                this.ON.persian.day = perscal[2];
                this.ON.persian.weekday = this.gWeekDayToPersian(weekday);
                this.ON.persian.leap = this.NormLeap[this.leap_persian(perscal[0]) ? 1 : 0];
            }

            //  Update Persian Astronomical Calendar
            // ---------------------------------------------------------------------------
            if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'astronomical') {
                perscal = this.jd_to_persiana(j);
                this.ON.persianAstro.year = perscal[0];
                this.ON.persianAstro.month = perscal[1] - 1;
                this.ON.persianAstro.day = perscal[2];
                this.ON.persianAstro.weekday = this.gWeekDayToPersian(weekday);
                this.ON.persianAstro.leap = this.NormLeap[this.leap_persiana(perscal[0]) ? 1 : 0];
            }
            //  Update Gregorian serial number
            // ---------------------------------------------------------------------------
            if (this.ON.gregserial.day !== null) {
                this.ON.gregserial.day = j - this.J0000;
            }

            //  Update Unix time()
            // ---------------------------------------------------------------------------
            utime = (j - this.J1970) * (60 * 60 * 24 * 1000);

            this.ON.unixtime = Math.round(utime / 1000);
        }

        /**
         * @desc Perform calculation starting with a Gregorian date
         * @param {*} dateArray
         */

    }, {
        key: 'calcGregorian',
        value: function calcGregorian(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.ON.gregorian.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.ON.gregorian.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.ON.gregorian.day = dateArray[2];
            }
            if (dateArray[3] || dateArray[3] === 0) {
                this.ON.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.ON.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.ON.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.ON.gregorian.millisecond = dateArray[6];
            }
            this.updateFromGregorian();
        }

        /**
         * @desc Perform calculation starting with a Julian date
         */

    }, {
        key: 'calcJulian',
        value: function calcJulian() {
            var j = void 0,
                date = void 0;
            j = this.ON.julianday;
            date = this.jd_to_gregorian(j);
            this.ON.gregorian.year = date[0];
            this.ON.gregorian.month = date[1] - 1;
            this.ON.gregorian.day = date[2];
            //        this.ON.gregorian.hour = this.pad(time[0], 2, " ");
            //        this.ON.gregorian.minute = this.pad(time[1], 2, "0");
            //        this.ON.gregorian.second = this.pad(time[2], 2, "0");
            this.updateFromGregorian();
        }

        /**
         * @desc Set Julian date and update all calendars
         * @param {*} j
         */

    }, {
        key: 'setJulian',
        value: function setJulian(j) {
            this.ON.julianday = j;
            this.calcJulian();
        }

        /**
         * @desc  Update from Persian calendar
         * @param {*} dateArray
         */

    }, {
        key: 'calcPersian',
        value: function calcPersian(dateArray) {
            if (dateArray[0]) {
                this.ON.persian.year = dateArray[0];
            }
            if (dateArray[1]) {
                this.ON.persian.month = dateArray[1];
            }
            if (dateArray[2]) {
                this.ON.persian.day = dateArray[2];
            }
            if (dateArray[3]) {
                this.ON.gregorian.hour = dateArray[3];
            }
            if (dateArray[4]) {
                this.ON.gregorian.minute = dateArray[4];
            }
            if (dateArray[5]) {
                this.ON.gregorian.second = dateArray[5];
            }
            if (dateArray[6]) {
                this.ON.gregorian.millisecond = dateArray[6];
            }

            this.setJulian(this.persian_to_jd(this.ON.persian.year, this.ON.persian.month, this.ON.persian.day));
        }

        /**
         * @desc Update from Persian astronomical calendar
         * @param {*} dateArray
         */

    }, {
        key: 'calcPersiana',
        value: function calcPersiana(dateArray) {
            if (dateArray[0]) {
                this.ON.persianAstro.year = dateArray[0];
            }
            if (dateArray[1]) {
                this.ON.persianAstro.month = dateArray[1];
            }
            if (dateArray[2]) {
                this.ON.persianAstro.day = dateArray[2];
            }

            if (dateArray[3]) {
                this.ON.gregorian.hour = dateArray[3];
            }
            if (dateArray[4]) {
                this.ON.gregorian.minute = dateArray[4];
            }
            if (dateArray[5]) {
                this.ON.gregorian.second = dateArray[5];
            }
            if (dateArray[6]) {
                this.ON.gregorian.millisecond = dateArray[6];
            }
            this.setJulian(this.persiana_to_jd(this.ON.persianAstro.year, this.ON.persianAstro.month, this.ON.persianAstro.day + 0.5));
        }
    }]);

    return Algorithms;
}();

module.exports = Algorithms;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 JavaScript functions for positional astronomy
 by John Walker  --  September, MIM
 http://www.fourmilab.ch/
 This program is in the public domain.
 */

var ASTRO = function () {
    function ASTRO() {
        _classCallCheck(this, ASTRO);

        //  Frequently-used constants
        this.J2000 = 2451545.0; // Julian day of J2000 epoch
        this.JulianCentury = 36525.0; // Days in Julian century
        this.JulianMillennium = this.JulianCentury * 10; // Days in Julian millennium
        //        this.AstronomicalUnit = 149597870.0;           // Astronomical unit in kilometres
        this.TropicalYear = 365.24219878; // Mean solar tropical year

        /*  OBLIQEQ  --  Calculate the obliquity of the ecliptic for a given
         Julian date.  This uses Laskar's tenth-degree
         polynomial fit (J. Laskar, Astronomy and
         Astrophysics, Vol. 157, page 68 [1986]) which is
         accurate to within 0.01 arc second between AD 1000
         and AD 3000, and within a few seconds of arc for
         +/-10000 years around AD 2000.  If we're outside the
         range in which this fit is valid (deep time) we
         simply return the J2000 value of the obliquity, which
         happens to be almost precisely the mean.  */
        this.oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45];
        /* Periodic terms for nutation in longiude (delta \Psi) and
         obliquity (delta \Epsilon) as given in table 21.A of
         Meeus, "Astronomical Algorithms", first edition. */
        this.nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2];

        this.nutArgCoeff = [-171996, -1742, 92095, 89, /*  0,  0,  0,  0,  1 */
        -13187, -16, 5736, -31, /* -2,  0,  0,  2,  2 */
        -2274, -2, 977, -5, /*  0,  0,  0,  2,  2 */
        2062, 2, -895, 5, /*  0,  0,  0,  0,  2 */
        1426, -34, 54, -1, /*  0,  1,  0,  0,  0 */
        712, 1, -7, 0, /*  0,  0,  1,  0,  0 */
        -517, 12, 224, -6, /* -2,  1,  0,  2,  2 */
        -386, -4, 200, 0, /*  0,  0,  0,  2,  1 */
        -301, 0, 129, -1, /*  0,  0,  1,  2,  2 */
        217, -5, -95, 3, /* -2, -1,  0,  2,  2 */
        -158, 0, 0, 0, /* -2,  0,  1,  0,  0 */
        129, 1, -70, 0, /* -2,  0,  0,  2,  1 */
        123, 0, -53, 0, /*  0,  0, -1,  2,  2 */
        63, 0, 0, 0, /*  2,  0,  0,  0,  0 */
        63, 1, -33, 0, /*  0,  0,  1,  0,  1 */
        -59, 0, 26, 0, /*  2,  0, -1,  2,  2 */
        -58, -1, 32, 0, /*  0,  0, -1,  0,  1 */
        -51, 0, 27, 0, /*  0,  0,  1,  2,  1 */
        48, 0, 0, 0, /* -2,  0,  2,  0,  0 */
        46, 0, -24, 0, /*  0,  0, -2,  2,  1 */
        -38, 0, 16, 0, /*  2,  0,  0,  2,  2 */
        -31, 0, 13, 0, /*  0,  0,  2,  2,  2 */
        29, 0, 0, 0, /*  0,  0,  2,  0,  0 */
        29, 0, -12, 0, /* -2,  0,  1,  2,  2 */
        26, 0, 0, 0, /*  0,  0,  0,  2,  0 */
        -22, 0, 0, 0, /* -2,  0,  0,  2,  0 */
        21, 0, -10, 0, /*  0,  0, -1,  2,  1 */
        17, -1, 0, 0, /*  0,  2,  0,  0,  0 */
        16, 0, -8, 0, /*  2,  0, -1,  0,  1 */
        -16, 1, 7, 0, /* -2,  2,  0,  2,  2 */
        -15, 0, 9, 0, /*  0,  1,  0,  0,  1 */
        -13, 0, 7, 0, /* -2,  0,  1,  0,  1 */
        -12, 0, 6, 0, /*  0, -1,  0,  0,  1 */
        11, 0, 0, 0, /*  0,  0,  2, -2,  0 */
        -10, 0, 5, 0, /*  2,  0, -1,  2,  1 */
        -8, 0, 3, 0, /*  2,  0,  1,  2,  2 */
        7, 0, -3, 0, /*  0,  1,  0,  2,  2 */
        -7, 0, 0, 0, /* -2,  1,  1,  0,  0 */
        -7, 0, 3, 0, /*  0, -1,  0,  2,  2 */
        -7, 0, 3, 0, /*  2,  0,  0,  2,  1 */
        6, 0, 0, 0, /*  2,  0,  1,  0,  0 */
        6, 0, -3, 0, /* -2,  0,  2,  2,  2 */
        6, 0, -3, 0, /* -2,  0,  1,  2,  1 */
        -6, 0, 3, 0, /*  2,  0, -2,  0,  1 */
        -6, 0, 3, 0, /*  2,  0,  0,  0,  1 */
        5, 0, 0, 0, /*  0, -1,  1,  0,  0 */
        -5, 0, 3, 0, /* -2, -1,  0,  2,  1 */
        -5, 0, 3, 0, /* -2,  0,  0,  0,  1 */
        -5, 0, 3, 0, /*  0,  0,  2,  2,  1 */
        4, 0, 0, 0, /* -2,  0,  2,  0,  1 */
        4, 0, 0, 0, /* -2,  1,  0,  2,  1 */
        4, 0, 0, 0, /*  0,  0,  1, -2,  0 */
        -4, 0, 0, 0, /* -1,  0,  1,  0,  0 */
        -4, 0, 0, 0, /* -2,  1,  0,  0,  0 */
        -4, 0, 0, 0, /*  1,  0,  0,  0,  0 */
        3, 0, 0, 0, /*  0,  0,  1,  2,  0 */
        -3, 0, 0, 0, /* -1, -1,  1,  0,  0 */
        -3, 0, 0, 0, /*  0,  1,  1,  0,  0 */
        -3, 0, 0, 0, /*  0, -1,  1,  2,  2 */
        -3, 0, 0, 0, /*  2, -1, -1,  2,  2 */
        -3, 0, 0, 0, /*  0,  0, -2,  2,  2 */
        -3, 0, 0, 0, /*  0,  0,  3,  2,  2 */
        -3, 0, 0, 0 /*  2, -1,  0,  2,  2 */
        ];

        /**
         * @desc Table of observed Delta T values at the beginning of even numbered years from 1620 through 2002.
         * @type Array
         */
        this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -0.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6];

        /*  EQUINOX  --  Determine the Julian Ephemeris Day of an
         equinox or solstice.  The "which" argument
         selects the item to be computed:
          0   March equinox
         1   June solstice
         2   September equinox
         3   December solstice
          */
        /**
         * @desc Periodic terms to obtain true time
         * @type Array
         */
        this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074];

        this.JDE0tab1000 = [new Array(1721139.29189, 365242.13740, 0.06134, 0.00111, -0.00071), new Array(1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025), new Array(1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074), new Array(1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006)];

        this.JDE0tab2000 = [new Array(2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057), new Array(2451716.56767, 365241.62603, 0.00325, 0.00888, -0.00030), new Array(2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078), new Array(2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032)];
    }

    /**
     *
     * @param Degrees to radians.
     * @return {number}
     */


    _createClass(ASTRO, [{
        key: "dtr",
        value: function dtr(d) {
            return d * Math.PI / 180.0;
        }

        /**
         * @desc Radians to degrees.
         * @param r
         * @return {number}
         */

    }, {
        key: "rtd",
        value: function rtd(r) {
            return r * 180.0 / Math.PI;
        }

        /**
         * @desc Range reduce angle in degrees.
         * @param a
         * @return {number}
         */

    }, {
        key: "fixangle",
        value: function fixangle(a) {
            return a - 360.0 * Math.floor(a / 360.0);
        }

        /**
         * @desc Range reduce angle in radians.
         * @param a
         * @return {number}
         */

    }, {
        key: "fixangr",
        value: function fixangr(a) {
            return a - 2 * Math.PI * Math.floor(a / (2 * Math.PI));
        }

        /**
         * @desc  Sine of an angle in degrees
         * @param d
         * @return {number}
         */

    }, {
        key: "dsin",
        value: function dsin(d) {
            return Math.sin(this.dtr(d));
        }

        /**
         * @desc Cosine of an angle in degrees
         * @param d
         * @return {number}
         */

    }, {
        key: "dcos",
        value: function dcos(d) {
            return Math.cos(this.dtr(d));
        }

        /**
         * @desc Modulus function which works for non-integers.
         * @param a
         * @param b
         * @return {number}
         */

    }, {
        key: "mod",
        value: function mod(a, b) {
            return a - b * Math.floor(a / b);
        }

        /**
         *
         * @param j
         * @return {number}
         */

    }, {
        key: "jwday",
        value: function jwday(j) {
            return this.mod(Math.floor(j + 1.5), 7);
        }

        /**
         *
         * @param jd
         * @return {number|*}
         */

    }, {
        key: "obliqeq",
        value: function obliqeq(jd) {
            var eps, u, v, i;
            v = u = (jd - this.J2000) / (this.JulianCentury * 100);
            eps = 23 + 26 / 60.0 + 21.448 / 3600.0;

            if (Math.abs(u) < 1.0) {
                for (i = 0; i < 10; i++) {
                    eps += this.oterms[i] / 3600.0 * v;
                    v *= u;
                }
            }
            return eps;
        }

        /**
         * @desc  Calculate the nutation in longitude, deltaPsi, and
         obliquity, deltaEpsilon for a given Julian date
         jd.  Results are returned as a two element Array
         giving (deltaPsi, deltaEpsilon) in degrees.
         * @param jd
         * @return Object
         */

    }, {
        key: "nutation",
        value: function nutation(jd) {
            var deltaPsi,
                deltaEpsilon,
                i,
                j,
                t = (jd - 2451545.0) / 36525.0,
                t2,
                t3,
                to10,
                ta = [],
                dp = 0,
                de = 0,
                ang;

            t3 = t * (t2 = t * t);

            /* Calculate angles.  The correspondence between the elements
             of our array and the terms cited in Meeus are:
              ta[0] = D  ta[0] = M  ta[2] = M'  ta[3] = F  ta[4] = \Omega
              */

            ta[0] = this.dtr(297.850363 + 445267.11148 * t - 0.0019142 * t2 + t3 / 189474.0);
            ta[1] = this.dtr(357.52772 + 35999.05034 * t - 0.0001603 * t2 - t3 / 300000.0);
            ta[2] = this.dtr(134.96298 + 477198.867398 * t + 0.0086972 * t2 + t3 / 56250.0);
            ta[3] = this.dtr(93.27191 + 483202.017538 * t - 0.0036825 * t2 + t3 / 327270);
            ta[4] = this.dtr(125.04452 - 1934.136261 * t + 0.0020708 * t2 + t3 / 450000.0);

            /* Range reduce the angles in case the sine and cosine functions
             don't do it as accurately or quickly. */

            for (i = 0; i < 5; i++) {
                ta[i] = this.fixangr(ta[i]);
            }

            to10 = t / 10.0;
            for (i = 0; i < 63; i++) {
                ang = 0;
                for (j = 0; j < 5; j++) {
                    if (this.nutArgMult[i * 5 + j] !== 0) {
                        ang += this.nutArgMult[i * 5 + j] * ta[j];
                    }
                }
                dp += (this.nutArgCoeff[i * 4 + 0] + this.nutArgCoeff[i * 4 + 1] * to10) * Math.sin(ang);
                de += (this.nutArgCoeff[i * 4 + 2] + this.nutArgCoeff[i * 4 + 3] * to10) * Math.cos(ang);
            }

            /* Return the result, converting from ten thousandths of arc
             seconds to radians in the process. */

            deltaPsi = dp / (3600.0 * 10000.0);
            deltaEpsilon = de / (3600.0 * 10000.0);

            return [deltaPsi, deltaEpsilon];
        }

        /**
         * @desc  Determine the difference, in seconds, between
         Dynamical time and Universal time.
         * @param year
         * @return {*}
         */

    }, {
        key: "deltat",
        value: function deltat(year) {
            var dt, f, i, t;

            if (year >= 1620 && year <= 2000) {
                i = Math.floor((year - 1620) / 2);
                f = (year - 1620) / 2 - i;
                /* Fractional part of year */
                dt = this.deltaTtab[i] + (this.deltaTtab[i + 1] - this.deltaTtab[i]) * f;
            } else {
                t = (year - 2000) / 100;
                if (year < 948) {
                    dt = 2177 + 497 * t + 44.1 * t * t;
                } else {
                    dt = 102 + 102 * t + 25.3 * t * t;
                    if (year > 2000 && year < 2100) {
                        dt += 0.37 * (year - 2100);
                    }
                }
            }
            return dt;
        }

        /**
         *
         * @param year
         * @param which
         * @return {*}
         */

    }, {
        key: "equinox",
        value: function equinox(year, which) {
            var deltaL = void 0,
                i = void 0,
                j = void 0,
                JDE0 = void 0,
                JDE = void 0,
                JDE0tab = void 0,
                S = void 0,
                T = void 0,
                W = void 0,
                Y = void 0;
            /*  Initialise terms for mean equinox and solstices.  We
             have two sets: one for years prior to 1000 and a second
             for subsequent years.  */

            if (year < 1000) {
                JDE0tab = this.JDE0tab1000;
                Y = year / 1000;
            } else {
                JDE0tab = this.JDE0tab2000;
                Y = (year - 2000) / 1000;
            }

            JDE0 = JDE0tab[which][0] + JDE0tab[which][1] * Y + JDE0tab[which][2] * Y * Y + JDE0tab[which][3] * Y * Y * Y + JDE0tab[which][4] * Y * Y * Y * Y;
            T = (JDE0 - 2451545.0) / 36525;
            W = 35999.373 * T - 2.47;
            deltaL = 1 + 0.0334 * this.dcos(W) + 0.0007 * this.dcos(2 * W);
            S = 0;
            for (i = j = 0; i < 24; i++) {
                S += this.EquinoxpTerms[j] * this.dcos(this.EquinoxpTerms[j + 1] + this.EquinoxpTerms[j + 2] * T);
                j += 3;
            }
            JDE = JDE0 + S * 0.00001 / deltaL;
            return JDE;
        }

        /**
         * @desc  Position of the Sun.  Please see the comments
         on the return statement at the end of this function
         which describe the array it returns.  We return
         intermediate values because they are useful in a
         variety of other contexts.
         * @param jd
         * @return Object
         */

    }, {
        key: "sunpos",
        value: function sunpos(jd) {
            var T = void 0,
                T2 = void 0,
                L0 = void 0,
                M = void 0,
                e = void 0,
                C = void 0,
                sunLong = void 0,
                sunAnomaly = void 0,
                sunR = void 0,
                Omega = void 0,
                Lambda = void 0,
                epsilon = void 0,
                epsilon0 = void 0,
                Alpha = void 0,
                Delta = void 0,
                AlphaApp = void 0,
                DeltaApp = void 0;

            T = (jd - this.J2000) / this.JulianCentury;
            T2 = T * T;
            L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T2;
            L0 = this.fixangle(L0);
            M = 357.52911 + 35999.05029 * T + -0.0001537 * T2;
            M = this.fixangle(M);
            e = 0.016708634 + -0.000042037 * T + -0.0000001267 * T2;
            C = (1.914602 + -0.004817 * T + -0.000014 * T2) * this.dsin(M) + (0.019993 - 0.000101 * T) * this.dsin(2 * M) + 0.000289 * this.dsin(3 * M);
            sunLong = L0 + C;
            sunAnomaly = M + C;
            sunR = 1.000001018 * (1 - e * e) / (1 + e * this.dcos(sunAnomaly));
            Omega = 125.04 - 1934.136 * T;
            Lambda = sunLong + -0.00569 + -0.00478 * this.dsin(Omega);
            epsilon0 = this.obliqeq(jd);
            epsilon = epsilon0 + 0.00256 * this.dcos(Omega);
            Alpha = this.rtd(Math.atan2(this.dcos(epsilon0) * this.dsin(sunLong), this.dcos(sunLong)));
            Alpha = this.fixangle(Alpha);
            Delta = this.rtd(Math.asin(this.dsin(epsilon0) * this.dsin(sunLong)));
            AlphaApp = this.rtd(Math.atan2(this.dcos(epsilon) * this.dsin(Lambda), this.dcos(Lambda)));
            AlphaApp = this.fixangle(AlphaApp);
            DeltaApp = this.rtd(Math.asin(this.dsin(epsilon) * this.dsin(Lambda)));

            return [//  Angular quantities are expressed in decimal degrees
            L0, //  [0] Geometric mean longitude of the Sun
            M, //  [1] Mean anomaly of the Sun
            e, //  [2] Eccentricity of the Earth's orbit
            C, //  [3] Sun's equation of the Centre
            sunLong, //  [4] Sun's true longitude
            sunAnomaly, //  [5] Sun's true anomaly
            sunR, //  [6] Sun's radius vector in AU
            Lambda, //  [7] Sun's apparent longitude at true equinox of the date
            Alpha, //  [8] Sun's true right ascension
            Delta, //  [9] Sun's true declination
            AlphaApp, // [10] Sun's apparent right ascension
            DeltaApp // [11] Sun's apparent declination
            ];
        }

        /**
         * @desc Compute equation of time for a given moment. Returns the equation of time as a fraction of a day.
         * @param jd
         * @return {number|*}
         */

    }, {
        key: "equationOfTime",
        value: function equationOfTime(jd) {
            var alpha = void 0,
                deltaPsi = void 0,
                E = void 0,
                epsilon = void 0,
                L0 = void 0,
                tau = void 0;
            tau = (jd - this.J2000) / this.JulianMillennium;
            L0 = 280.4664567 + 360007.6982779 * tau + 0.03032028 * tau * tau + tau * tau * tau / 49931 + -(tau * tau * tau * tau / 15300) + -(tau * tau * tau * tau * tau / 2000000);
            L0 = this.fixangle(L0);
            alpha = this.sunpos(jd)[10];
            deltaPsi = this.nutation(jd)[0];
            epsilon = this.obliqeq(jd) + this.nutation(jd)[1];
            E = L0 + -0.0057183 + -alpha + deltaPsi * this.dcos(epsilon);
            E = E - 20.0 * Math.floor(E / 20.0);
            E = E / (24 * 60);
            return E;
        }
    }]);

    return ASTRO;
}();

module.exports = ASTRO;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    durationUnit: {
        year: ['y', 'years', 'year'],
        month: ['M', 'months', 'month'],
        day: ['d', 'days', 'day'],
        hour: ['h', 'hours', 'hour'],
        minute: ['m', 'minutes', 'minute'],
        second: ['s', 'second', 'seconds'],
        millisecond: ['ms', 'milliseconds', 'millisecond'],
        week: ['w', '', 'weeks', 'week']
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = __webpack_require__(0);
var normalizeDuration = new Helpers().normalizeDuration;
var absRound = new Helpers().absRound;
var absFloor = new Helpers().absFloor;
/**
 * Duration object constructor
 * @param duration
 * @class Duration
 * @constructor
 */

var Duration = function () {
    function Duration(key, value) {
        _classCallCheck(this, Duration);

        var duration = {},
            data = this._data = {},
            milliseconds = 0,
            normalizedUnit = normalizeDuration(key, value),
            unit = normalizedUnit.unit;
        duration[unit] = normalizedUnit.value;
        milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        var years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.w || duration.week || 0,
            days = duration.days || duration.d || duration.day || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0;
        // representation for dateAddRemove
        this._milliseconds = milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days + weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months + years * 12;
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds += absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes += absRound(seconds / 60);
        data.minutes = minutes % 60;
        hours += absRound(minutes / 60);
        data.hours = hours % 24;
        days += absRound(hours / 24);
        days += weeks * 7;
        data.days = days % 30;
        months += absRound(days / 30);
        data.months = months % 12;
        years += absRound(months / 12);
        data.years = years;
        return this;
    }

    _createClass(Duration, [{
        key: 'valueOf',
        value: function valueOf() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
        }
    }]);

    return Duration;
}();

module.exports = Duration;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    gregorian: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    },
    persian: {
        months: ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Bahman', 'Esfand'],
        monthsShort: ['Far', 'Ord', 'Kho', 'Tir', 'Mor', 'Sha', 'Meh', 'Aba', 'Aza', 'Dey', 'Bah', 'Esf'],
        weekdays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        persianDaysName: ['Urmazd', 'Bahman', 'Ordibehesht', 'Shahrivar', 'Sepandarmaz', 'Khurdad', 'Amordad', 'Dey-be-azar', 'Azar', 'Aban', 'Khorshid', 'Mah', 'Tir', 'Gush', 'Dey-be-mehr', 'Mehr', 'Sorush', 'Rashn', 'Farvardin', 'Bahram', 'Ram', 'Bad', 'Dey-be-din', 'Din', 'Ord', 'Ashtad', 'Asman', 'Zamyad', 'Mantre-sepand', 'Anaram', 'Ziadi']
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    gregorian: {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
        weekdaysShort: '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_')
    },
    persian: {
        months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthsShort: ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف'],
        weekdays: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', '\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647', 'جمعه'],
        weekdaysShort: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
        weekdaysMin: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
        persianDaysName: ['اورمزد', 'بهمن', 'اوردیبهشت', 'شهریور', 'سپندارمذ', 'خورداد', 'امرداد', 'دی به آذز', 'آذز', 'آبان', 'خورشید', 'ماه', 'تیر', 'گوش', 'دی به مهر', 'مهر', 'سروش', 'رشن', 'فروردین', 'بهرام', 'رام', 'باد', 'دی به دین', 'دین', 'ارد', 'اشتاد', 'آسمان', 'زامیاد', 'مانتره سپند', 'انارام', 'زیادی']
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PersianDateClass = __webpack_require__(1);
PersianDateClass.calendarType = 'persian';
PersianDateClass.leapYearMode = 'astronomical';
PersianDateClass.localType = 'fa';
module.exports = PersianDateClass;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = function Container() {
    _classCallCheck(this, Container);

    this.gDate = null;
    /**
     *
     * @type {number}
     */
    this.modifiedjulianday = 0;

    /**
     *
     * @type {number}
     */
    this.julianday = 0;

    /**
     *
     * @type {{day: number}}
     */
    this.gregserial = {
        day: 0
    };

    this.zone = 0;

    /**
     *
     * @type {{year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, weekday: number, unix: number, leap: number}}
     */
    this.gregorian = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        weekday: 0,
        unix: 0,
        leap: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.juliancalendar = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.islamic = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.persianAlgo = this.persian = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.persianAstro = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, week: number, day: number}}
     */
    this.isoweek = {
        year: 0,
        week: 0,
        day: 0
    };

    /**
     *
     * @type {{year: number, day: number}}
     */
    this.isoday = {
        year: 0,
        day: 0
    };
};

module.exports = Container;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    /**
     * @param input
     * @returns {boolean}
     */
    isArray: function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isNumber: function isNumber(input) {
        return typeof input === 'number';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isDate: function isDate(input) {
        return input instanceof Date;
    }
};

/***/ })
/******/ ]);
});