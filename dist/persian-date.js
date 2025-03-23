/*!
 * 
 * persian-date -  1.1.0
 * Reza Babakhani <babakhani.reza@gmail.com>
 * http://babakhani.github.io/PersianWebToolkit/docs/persian-date/
 * Under MIT license 
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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var durationUnit = __webpack_require__(3).durationUnit;

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
            } else if (durationUnit.week.indexOf(unit) > -1) {
                unit = 'week';
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
            return Math.floor(number);
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
var Duration = __webpack_require__(4);
var Validator = __webpack_require__(11);
var toPersianDigit = new Helpers().toPersianDigit;
var leftZeroFill = new Helpers().leftZeroFill;
var normalizeDuration = new Helpers().normalizeDuration;

var fa = __webpack_require__(6);
var en = __webpack_require__(5);

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
        this.version = "1.1.0";
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


    _createClass(PersianDateClass, [{
        key: 'setup',
        value: function setup(input) {
            // Convert Any thing to Gregorian Date
            if (TypeChecking.isDate(input)) {
                this._gDateToCalculators(input);
            } else if (TypeChecking.isArray(input)) {

                if (!Validator.validateInputArray(input)) {
                    this.State.isInvalidDate = true;
                    return false;
                }
                this.algorithmsCalc([input[0], input[1] ? input[1] : 1, input[2] ? input[2] : 1, input[3] ? input[3] : 0, input[4] ? input[4] : 0, input[5] ? input[5] : 0, input[6] ? input[6] : 0]);
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
            inputgDate = new Date(inputgDate);
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
         * @derecated 2.0.0
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode() {
            return this;
        }

        /**
         * @derecated 2.0.0
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
            return this._getSyncedClass(this.State.gDate);
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
            if (this.calendarType === 'persian') {
                return this.algorithms.calcPersianMatematical(dateArray);
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
                key = 'persian';
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
                if (input === 0) {
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
                return this.State.gDate.getMinutes();
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
                return this.State.gDate.getSeconds();
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
                var str = this.State.gDate.valueOf().toString();
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
            return this.State.gDate.valueOf();
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
                diff = self.State.gDate - inputMoment.toDate() - zoneDiff,
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
            var newArray = new PersianDateClass(this.valueOf() - (this.calendar().weekday - 1) * 86400000).toArray();
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
                this.State.zone = input;
                return this;
            } else {
                return this.State.zone;
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
            if (this.calendarType == 'persian') {
                return this.algorithms.leap_persian_matematical(year);
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
            return this.State.gDate;
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
            if (this.State.isInvalidDate) {
                return false;
            }
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
            if (value === 0) {
                return this;
            }
            var unit = normalizeDuration(key, value).unit,
                arr = this.toArray();
            value = normalizeDuration(key, value).value;
            if (unit === 'year') {
                var normalizedDate = arr[2],
                    monthDays = this.daysInMonth(arr[0] + value, arr[1]);
                if (arr[2] > monthDays) {
                    normalizedDate = monthDays;
                }
                var tempDate = new PersianDateClass([arr[0] + value, arr[1], normalizedDate, arr[3], arr[4], arr[5], arr[6], arr[7]]);
                return tempDate;
            }
            if (unit === 'month') {
                var tempYear = Math.floor(value / 12);
                var remainingMonth = value - tempYear * 12,
                    calcedMonth = null;
                if (arr[1] + remainingMonth > 12) {
                    tempYear += 1;
                    calcedMonth = arr[1] + remainingMonth - 12;
                } else {
                    calcedMonth = arr[1] + remainingMonth;
                }
                var normalizaedDate = arr[2],
                    tempDateArray = new PersianDateClass([arr[0] + tempYear, calcedMonth, 1, arr[3], arr[4], arr[5], arr[6], arr[7]]).toArray(),
                    _monthDays = this.daysInMonth(arr[0] + tempYear, calcedMonth);
                if (arr[2] > _monthDays) {
                    normalizaedDate = _monthDays;
                }
                return new PersianDateClass([tempDateArray[0], tempDateArray[1], normalizaedDate, tempDateArray[3], tempDateArray[4], tempDateArray[5], tempDateArray[6], tempDateArray[7]]);
            }
            if (unit === 'day') {
                var calcedDay = new PersianDateClass(this.valueOf()).hour(12),
                    newMillisecond = calcedDay.valueOf() + value * 86400000,
                    newDate = new PersianDateClass(newMillisecond);
                return newDate.hour(arr[3]);
            }
            if (unit === 'week') {
                var _calcedDay = new PersianDateClass(this.valueOf()).hour(12),
                    _newMillisecond = _calcedDay.valueOf() + 7 * value * 86400000,
                    _newDate = new PersianDateClass(_newMillisecond);
                return _newDate.hour(arr[3]);
            }
            if (unit === 'hour') {
                var _newMillisecond2 = this.valueOf() + value * 3600000;
                return this.unix(_newMillisecond2 / 1000);
            }
            if (unit === 'minute') {
                var _newMillisecond3 = this.valueOf() + value * 60000;
                return this.unix(_newMillisecond3 / 1000);
            }
            if (unit === 'second') {
                var _newMillisecond4 = this.valueOf() + value * 1000;
                return this.unix(_newMillisecond4 / 1000);
            }
            if (unit === 'millisecond') {
                var _newMillisecond5 = this.valueOf() + value;
                return this.unix(_newMillisecond5 / 1000);
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
        value: function toLeapYearMode() {
            return this;
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

var State = __webpack_require__(9);
var jalaali = __webpack_require__(8);

var Algorithms = function () {
    function Algorithms(parent) {
        _classCallCheck(this, Algorithms);

        this.parent = parent;
        this.State = new State();
        this.J0000 = 1721424.5; // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5; // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5; // Epoch of Modified Julian Date system
        this.NormLeap = [false /*"Normal year"*/, true /*"Leap year"*/];
        this.GREGORIAN_EPOCH = 1721425.5;
    }

    /**
     *
     * @param j
     * @return {number}
     */


    _createClass(Algorithms, [{
        key: 'jwday',
        value: function jwday(j) {
            return this.mod(Math.floor(j + 1.5), 7);
        }
    }, {
        key: 'div',
        value: function div(a, b) {
            return ~~(a / b);
        }
    }, {
        key: 'mod',
        value: function mod(a, b) {
            return a - ~~(a / b) * b;
        }

        /**
         * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
         * @param year
         * @return {boolean}
         */

    }, {
        key: 'leap_gregorian',
        value: function leap_gregorian(year) {
            return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
        }

        /**
         * @desc Is a given year a leap year in the Persian matematical calendar ?
         * @param {*} year
         */

    }, {
        key: 'leap_persian_matematical',
        value: function leap_persian_matematical(year) {
            return jalaali.isLeapJalaaliYear(year);
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
                weekday = void 0,
                utime = void 0,
                perscal = void 0;

            year = this.State.gregorian.year;
            mon = this.State.gregorian.month;
            mday = this.State.gregorian.day;

            this.State.gDate = new Date(year, mon, mday, this.State.gregorian.hour, this.State.gregorian.minute, this.State.gregorian.second, this.State.gregorian.millisecond);

            if (this.parent._utcMode === false) {
                this.State.zone = this.State.gDate.getTimezoneOffset();
            }

            // Added for this algorithms cant parse 2016,13,32 successfully
            this.State.gregorian.year = this.State.gDate.getFullYear();
            this.State.gregorian.month = this.State.gDate.getMonth();
            this.State.gregorian.day = this.State.gDate.getDate();

            //  Update Julian day
            // ---------------------------------------------------------------------------
            j = jalaali.g2d(year, mon + 1, mday);

            this.State.julianday = j;

            //  Update day of week in Gregorian box
            // ---------------------------------------------------------------------------
            weekday = this.jwday(j);

            // Move to 1 indexed number
            this.State.gregorian.weekday = weekday + 1;

            //  Update leap year status in Gregorian box
            // ---------------------------------------------------------------------------
            this.State.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];

            //if (this.parent.calendarType == 'persian') {
            var o = jalaali.d2j(j);
            perscal = [o.jy, o.jm, parseInt(o.jd)];
            this.State.persian.year = perscal[0];
            this.State.persian.month = perscal[1] - 1;
            this.State.persian.day = perscal[2];
            this.State.persian.weekday = this.gWeekDayToPersian(weekday);
            this.State.persian.leap = this.NormLeap[jalaali.isLeapJalaaliYear(perscal[0]) ? 1 : 0];
            //}

            //  Update Unix time()
            // ---------------------------------------------------------------------------
            utime = (j - this.J1970) * (60 * 60 * 24 * 1000);

            this.State.unixtime = Math.round(utime / 1000);
        }

        /**
         * @desc Perform calculation starting with a Gregorian date
         * @param {*} dateArray
         */

    }, {
        key: 'calcGregorian',
        value: function calcGregorian(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.State.gregorian.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.State.gregorian.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.State.gregorian.day = dateArray[2];
            }
            if (dateArray[3] || dateArray[3] === 0) {
                this.State.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.State.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.State.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.State.gregorian.millisecond = dateArray[6];
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
            j = this.State.julianday;
            var o = jalaali.d2g(j);
            date = [o.gy, o.gm, o.gd];
            this.State.gregorian.year = date[0];
            this.State.gregorian.month = date[1] - 1;
            this.State.gregorian.day = date[2];
            this.updateFromGregorian();
        }

        /**
         * @desc Set Julian date and update all calendars
         * @param {*} j
         */

    }, {
        key: 'setJulian',
        value: function setJulian(j) {
            this.State.julianday = j;
            this.calcJulian();
        }
    }, {
        key: 'calcPersianMatematical',
        value: function calcPersianMatematical(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.State.persian.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.State.persian.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.State.persian.day = dateArray[2];
            }

            if (dateArray[3] || dateArray[3] === 0) {
                this.State.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.State.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.State.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.State.gregorian.millisecond = dateArray[6];
            }
            this.setJulian(jalaali.j2d(this.State.persian.year, this.State.persian.month, this.State.persian.day));
        }
    }]);

    return Algorithms;
}();

module.exports = Algorithms;

/***/ }),
/* 3 */
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
        week: ['W', 'w', 'weeks', 'week']
    }
};

/***/ }),
/* 4 */
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
/* 5 */
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
        weekdaysShort: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        weekdaysMin: ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'],
        persianDaysName: ['Urmazd', 'Bahman', 'Ordibehesht', 'Shahrivar', 'Sepandarmaz', 'Khurdad', 'Amordad', 'Dey-be-azar', 'Azar', 'Aban', 'Khorshid', 'Mah', 'Tir', 'Gush', 'Dey-be-mehr', 'Mehr', 'Sorush', 'Rashn', 'Farvardin', 'Bahram', 'Ram', 'Bad', 'Dey-be-din', 'Din', 'Ord', 'Ashtad', 'Asman', 'Zamyad', 'Mantre-sepand', 'Anaram', 'Ziadi']
    }
};

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PersianDateClass = __webpack_require__(1);
PersianDateClass.calendarType = 'persian';
PersianDateClass.localType = 'fa';
module.exports = PersianDateClass;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  Expose functions.
  */
module.exports = {
  toJalaali: toJalaali,
  toGregorian: toGregorian,
  isValidJalaaliDate: isValidJalaaliDate,
  isLeapJalaaliYear: isLeapJalaaliYear,
  jalaaliMonthLength: jalaaliMonthLength,
  jalCal: jalCal,
  j2d: j2d,
  d2j: d2j,
  g2d: g2d,
  d2g: d2g,
  jalaaliToDateObject: jalaaliToDateObject,
  jalaaliWeek: jalaaliWeek
};

/*
  Jalaali years starting the 33-year rule.
  */
var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];

/*
  Converts a Gregorian date to Jalaali.
  */
function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === '[object Date]') {
    gd = gy.getDate();
    gm = gy.getMonth() + 1;
    gy = gy.getFullYear();
  }
  return d2j(g2d(gy, gm, gd));
}

/*
  Converts a Jalaali date to Gregorian.
  */
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}

/*
  Checks whether a Jalaali date is valid or not.
  */
function isValidJalaaliDate(jy, jm, jd) {
  return jy >= -61 && jy <= 3177 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= jalaaliMonthLength(jy, jm);
}

/*
  Is this a leap year or not?
  */
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}

/*
  Number of days in a given month in a Jalaali year.
  */
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  if (isLeapJalaaliYear(jy)) return 30;
  return 29;
}

/*
    This function determines if the Jalaali (Persian) year is
    leap (366-day long) or is the common year (365 days)

    @param jy Jalaali calendar year (-61 to 3177)
    @returns number of years since the last leap year (0 to 4)
    */
function jalCalLeap(jy) {
  var bl = breaks.length,
      jp = breaks[0],
      jm,
      jump,
      leap,
      n,
      i;

  if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy);

  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) break;
    jp = jm;
  }
  n = jy - jp;

  if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }

  return leap;
}

/*
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param jy Jalaali calendar year (-61 to 3177)
  @param withoutLeap when don't need leap (true or false) default is false
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
  */
function jalCal(jy, withoutLeap) {
  var bl = breaks.length,
      gy = jy + 621,
      leapJ = -14,
      jp = breaks[0],
      jm,
      jump,
      leap,
      leapG,
      march,
      n,
      i;

  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error('Invalid Jalaali year ' + jy);
  }

  // Find the limiting years for the Jalaali year jy.
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;

  // Find the number of leap years from AD 621 to the beginning
  // of the current Jalaali year in the Persian calendar.
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;

  // And the same in the Gregorian calendar (until the year gy).
  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;

  // Determine the Gregorian date of Farvardin the 1st.
  march = 20 + leapJ - leapG;

  // return with gy and march when we don't need leap
  if (withoutLeap) return { gy: gy, march: march };

  // Find how many years have passed since the last leap year.
  if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }

  return {
    leap: leap,
    gy: gy,
    march: march
  };
}

/*
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param jy Jalaali year (1 to 3100)
  @param jm Jalaali month (1 to 12)
  @param jd Jalaali day (1 to 29/31)
  @return Julian Day number
  */
function j2d(jy, jm, jd) {
  var r = jalCal(jy, true);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}

/*
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jdn Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
    */
function d2j(jdn) {
  var gy = d2g(jdn).gy,
      jy = gy - 621,
      r = jalCal(jy, false),
      jdn1f = g2d(gy, 3, r.march),
      jd,
      jm,
      k;

  // Find number of days that passed since 1 Farvardin.
  k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      // The first 6 months.
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return {
        jy: jy,
        jm: jm,
        jd: jd
      };
    } else {
      // The remaining months.
      k -= 186;
    }
  } else {
    // Previous Jalaali year.
    jy -= 1;
    k += 179;
    if (r.leap === 1) k += 1;
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return {
    jy: jy,
    jm: jm,
    jd: jd
  };
}

/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
  */
function g2d(gy, gm, gd) {
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}

/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
    */
function d2g(jdn) {
  var j, i, gd, gm, gy;

  j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  i = div(mod(j, 1461), 4) * 5 + 308;
  gd = div(mod(i, 153), 5) + 1;
  gm = mod(div(i, 153), 12) + 1;
  gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return { gy: gy, gm: gm, gd: gd };
}

/**
 * Return Saturday and Friday day of current week(week start in Saturday)
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @returns Saturday and Friday of current week
 */
function jalaaliWeek(jy, jm, jd) {
  var dayOfWeek = jalaaliToDateObject(jy, jm, jd).getDay();

  var startDayDifference = dayOfWeek == 6 ? 0 : -(dayOfWeek + 1);
  var endDayDifference = 6 + startDayDifference;

  return {
    saturday: d2j(j2d(jy, jm, jd + startDayDifference)),
    friday: d2j(j2d(jy, jm, jd + endDayDifference))
  };
}

/**
 * Convert Jalaali calendar dates to javascript Date object
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @param {number} [h] hours
 * @param {number} [m] minutes
 * @param {number} [s] seconds
 * @param {number} [ms] milliseconds
 * @returns Date object of the jalaali calendar dates
 */
function jalaaliToDateObject(jy, jm, jd, h, m, s, ms) {
  var gregorianCalenderDate = toGregorian(jy, jm, jd);

  return new Date(gregorianCalenderDate.gy, gregorianCalenderDate.gm - 1, gregorianCalenderDate.gd, h || 0, m || 0, s || 0, ms || 0);
}

/*
  Utility helper functions.
  */

function div(a, b) {
  return ~~(a / b);
}

function mod(a, b) {
  return a - ~~(a / b) * b;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = function Container() {
  _classCallCheck(this, Container);

  this.isInvalidDate = null;
  this.gDate = null;
  this.julianday = 0;
  this.zone = 0;
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
  this.persian = {
    year: 0,
    month: 0,
    day: 0,
    leap: 0,
    weekday: 0
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /**
   * @param input
   * @returns {boolean}
   */
  validateInputArray: function validateInputArray(input) {
    var out = true;
    // Check month
    if (input[1] < 1 || input[1] > 12) {
      out = false;
    }
    // Check date
    if (input[2] < 1 || input[1] > 31) {
      out = false;
    }
    // Check hour 
    if (input[3] < 0 || input[3] > 24) {
      out = false;
    }
    // Check minute 
    if (input[4] < 0 || input[4] > 60) {
      out = false;
    }
    // Check second 
    if (input[5] < 0 || input[5] > 60) {
      out = false;
    }
    return out;
  }
};

/***/ })
/******/ ]);
});