/*!
 * 
 * persian-date -  0.2.5
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PersianDateClass = __webpack_require__(6);
String.prototype.toPersianDigit = function (latinDigit) {
    return this.replace(/\d+/g, function (digit) {
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
};
PersianDateClass.unix = PersianDateClass._unix;
PersianDateClass.utc = PersianDateClass._utc;

module.exports = PersianDateClass;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Algorithms = __webpack_require__(7);

var PersianDateClass = function PersianDateClass(input) {
    _classCallCheck(this, PersianDateClass);

    this.algorithms = new Algorithms();
};

module.exports = PersianDateClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Start algorithm class
var ASTRO = __webpack_require__(8);
var ON = __webpack_require__(10);

var Algorithms = function () {
    function Algorithms() {
        _classCallCheck(this, Algorithms);

        this.ASTRO = new ASTRO();
        this.ON = new ON();

        /*
         JavaScript functions for the Fourmilab Calendar Converter
          by John Walker  --  September, MIM
         http://www.fourmilab.ch/documents/calendar/
          This program is in the public domain.
         */

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
        this.J1900 = 2415020.5; // Epoch (day 1) of Excel 1900 date system (PC)
        this.J1904 = 2416480.5; // Epoch (day 0) of Excel 1904 date system (Mac)
        this.NormLeap = ["Normal year", "Leap year"];
        // TODO END
        this.GREGORIAN_EPOCH = 1721425.5;

        this.JULIAN_EPOCH = 1721423.5;

        this.HEBREW_EPOCH = 347995.5;
        this.FRENCH_REVOLUTIONARY_EPOCH = 2375839.5;
        this.ISLAMIC_EPOCH = 1948439.5;
        this.ISLAMIC_WEEKDAYS = ["al-'ahad", "al-'ithnayn", "ath-thalatha'", "al-'arb`a'", "al-khamis", "al-jum`a", "as-sabt"];

        this.PERSIAN_EPOCH = 1948320.5;
        this.PERSIAN_WEEKDAYS = ["Yekshanbeh", "Doshanbeh", "Seshhanbeh", "Chaharshanbeh", "Panjshanbeh", "Jomeh", "Shanbeh"];

        this.MAYAN_COUNT_EPOCH = 584282.5;
        this.MAYAN_HAAB_MONTHS = ["Pop", "Uo", "Zip", "Zotz", "Tzec", "Xul", "Yaxkin", "Mol", "Chen", "Yax", "Zac", "Ceh", "Mac", "Kankin", "Muan", "Pax", "Kayab", "Cumku", "Uayeb"];

        this.MAYAN_TZOLKIN_MONTHS = ["Imix", "Ik", "Akbal", "Kan", "Chicchan", "Cimi", "Manik", "Lamat", "Muluc", "Oc", "Chuen", "Eb", "Ben", "Ix", "Men", "Cib", "Caban", "Etznab", "Cauac", "Ahau"];

        this.INDIAN_CIVIL_WEEKDAYS = ["ravivara", "somavara", "mangalavara", "budhavara", "brahaspativara", "sukravara", "sanivara"];

        this.setDateToToday();
        this.calcGregorian();
    }

    /*  WEEKDAY_BEFORE  --  Return Julian date of given weekday (0 = Sunday)
     in the seven days ending on jd.  */


    _createClass(Algorithms, [{
        key: 'weekday_before',
        value: function weekday_before(weekday, jd) {
            return jd - this.ASTRO.jwday(jd - weekday);
        }

        /*  SEARCH_WEEKDAY  --  Determine the Julian date for:
          weekday      Day of week desired, 0 = Sunday
         jd           Julian date to begin search
         direction    1 = next weekday, -1 = last weekday
         offset       Offset from jd to begin search
         */

    }, {
        key: 'search_weekday',
        value: function search_weekday(weekday, jd, direction, offset) {
            return this.weekday_before(weekday, jd + direction * offset);
        }

        /**
         * @desc Utility weekday functions, just wrappers for search_weekday
         * @param weekday
         * @param jd
         * @return {*}
         */

    }, {
        key: 'nearest_weekday',
        value: function nearest_weekday(weekday, jd) {
            return this.search_weekday(weekday, jd, 1, 3);
        }
    }, {
        key: 'next_weekday',
        value: function next_weekday(weekday, jd) {
            return this.search_weekday(weekday, jd, 1, 7);
        }
    }, {
        key: 'next_or_current_weekday',
        value: function next_or_current_weekday(weekday, jd) {
            return this.search_weekday(weekday, jd, 1, 6);
        }
    }, {
        key: 'previous_weekday',
        value: function previous_weekday(weekday, jd) {
            return this.search_weekday(weekday, jd, -1, 1);
        }
    }, {
        key: 'previous_or_current_weekday',
        value: function previous_or_current_weekday(weekday, jd) {
            return this.search_weekday(weekday, jd, 1, 0);
        }

        // TODO: must delete

    }, {
        key: 'TestSomething',
        value: function TestSomething() {}

        /**
         * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
         * @param year
         * @return {boolean}
         */

    }, {
        key: 'leap_gregorian',
        value: function leap_gregorian(year) {
            return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
        }

        //  GREGORIAN_TO_JD  --  Determine Julian day number from Gregorian calendar date

    }, {
        key: 'gregorian_to_jd',
        value: function gregorian_to_jd(year, month, day) {
            return this.GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) + -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : this.leap_gregorian(year) ? -1 : -2) + day);
        }

        //  JD_TO_GREGORIAN  --  Calculate Gregorian calendar date from Julian day

    }, {
        key: 'jd_to_gregorian',
        value: function jd_to_gregorian(jd) {
            var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, dyindex, year, yearday, leapadj, month, day;

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
            if (!(cent == 4 || yindex == 4)) {
                year++;
            }
            yearday = wjd - this.gregorian_to_jd(year, 1, 1);
            leapadj = wjd < this.gregorian_to_jd(year, 3, 1) ? 0 : this.leap_gregorian(year) ? 1 : 2;
            month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
            day = wjd - this.gregorian_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        //  ISO_TO_JULIAN  --  Return Julian day of given ISO year, week, and day

    }, {
        key: 'n_weeks',
        value: function n_weeks(weekday, jd, nthweek) {
            var j = 7 * nthweek;
            if (nthweek > 0) {
                j += this.previous_weekday(weekday, jd);
            } else {
                j += this.next_weekday(weekday, jd);
            }
            return j;
        }
    }, {
        key: 'iso_to_julian',
        value: function iso_to_julian(year, week, day) {
            return day + this.n_weeks(0, this.gregorian_to_jd(year - 1, 12, 28), week);
        }

        //  JD_TO_ISO  --  Return array of ISO (year, week, day) for Julian day

    }, {
        key: 'jd_to_iso',
        value: function jd_to_iso(jd) {
            var year, week, day;
            year = this.jd_to_gregorian(jd - 3)[0];
            if (jd >= this.iso_to_julian(year + 1, 1, 1)) {
                year++;
            }
            week = Math.floor((jd - this.iso_to_julian(year, 1, 1)) / 7) + 1;
            day = this.ASTRO.jwday(jd);
            if (day == 0) {
                day = 7;
            }
            return [year, week, day];
        }

        //  ISO_DAY_TO_JULIAN  --  Return Julian day of given ISO year, and day of year

    }, {
        key: 'iso_day_to_julian',
        value: function iso_day_to_julian(year, day) {
            return day - 1 + this.gregorian_to_jd(year, 1, 1);
        }

        //  JD_TO_ISO_DAY  --  Return array of ISO (year, day_of_year) for Julian day

    }, {
        key: 'jd_to_iso_day',
        value: function jd_to_iso_day(jd) {
            var year, day;

            year = this.jd_to_gregorian(jd)[0];
            day = Math.floor(jd - this.gregorian_to_jd(year, 1, 1)) + 1;
            return [year, day];
        }

        /*  PAD  --  Pad a string to a given length with a given fill character.  */

    }, {
        key: 'pad',
        value: function pad(str, howlong, padwith) {
            var s = str.toString();
            while (s.length < howlong) {
                s = padwith + s;
            }
            return s;
        }
    }, {
        key: 'leap_julian',
        value: function leap_julian(year) {
            return this.ASTRO.mod(year, 4) == (year > 0 ? 0 : 3);
        }

        //  JULIAN_TO_JD  --  Determine Julian day number from Julian calendar date

    }, {
        key: 'julian_to_jd',
        value: function julian_to_jd(year, month, day) {
            /* Adjust negative common era years to the zero-based notation we use.  */
            if (year < 1) {
                year++;
            }
            /* Algorithm as given in Meeus, Astronomical Algorithms, Chapter 7, page 61 */
            if (month <= 2) {
                year--;
                month += 12;
            }
            return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day - 1524.5;
        }

        //  JD_TO_JULIAN  --  Calculate Julian calendar date from Julian day

    }, {
        key: 'jd_to_julian',
        value: function jd_to_julian(td) {
            var z, a, alpha, b, c, d, e, year, month, day;

            td += 0.5;
            z = Math.floor(td);

            a = z;
            b = a + 1524;
            c = Math.floor((b - 122.1) / 365.25);
            d = Math.floor(365.25 * c);
            e = Math.floor((b - d) / 30.6001);

            month = Math.floor(e < 14 ? e - 1 : e - 13);
            year = Math.floor(month > 2 ? c - 4716 : c - 4715);
            day = b - d - Math.floor(30.6001 * e);

            /*  If year is less than 1, subtract one to convert from
             a zero based date system to the common era system in
             which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */

            if (year < 1) {
                year--;
            }

            return [year, month, day];
        }

        //  Is a given Hebrew year a leap year ?

    }, {
        key: 'hebrew_leap',
        value: function hebrew_leap(year) {
            return this.ASTRO.mod(year * 7 + 1, 19) < 7;
        }

        //  How many months are there in a Hebrew year (12 = normal, 13 = leap)

    }, {
        key: 'hebrew_year_months',
        value: function hebrew_year_months(year) {
            return this.hebrew_leap(year) ? 13 : 12;
        }

        //  Test for delay of start of new year and to avoid
        //  Sunday, Wednesday, and Friday as start of the new year.

    }, {
        key: 'hebrew_delay_1',
        value: function hebrew_delay_1(year) {
            var months, days, parts;

            months = Math.floor((235 * year - 234) / 19);
            parts = 12084 + 13753 * months;
            day = months * 29 + Math.floor(parts / 25920);

            if (mod(3 * (day + 1), 7) < 3) {
                day++;
            }
            return day;
        }

        //  Check for delay in start of new year due to length of adjacent years

    }, {
        key: 'hebrew_delay_2',
        value: function hebrew_delay_2(year) {
            var last, present, next;

            last = this.hebrew_delay_1(year - 1);
            present = this.hebrew_delay_1(year);
            next = this.hebrew_delay_1(year + 1);

            return next - present == 356 ? 2 : present - last == 382 ? 1 : 0;
        }

        //  How many days are in a Hebrew year ?

    }, {
        key: 'hebrew_year_days',
        value: function hebrew_year_days(year) {
            return this.hebrew_to_jd(year + 1, 7, 1) - this.hebrew_to_jd(year, 7, 1);
        }

        //  How many days are in a given month of a given year

    }, {
        key: 'hebrew_month_days',
        value: function hebrew_month_days(year, month) {
            //  First of all, dispose of fixed-length 29 day months

            if (month == 2 || month == 4 || month == 6 || month == 10 || month == 13) {
                return 29;
            }

            //  If it's not a leap year, Adar has 29 days

            if (month == 12 && !this.hebrew_leap(year)) {
                return 29;
            }

            //  If it's Heshvan, days depend on length of year

            if (month == 8 && !(mod(this.hebrew_year_days(year), 10) == 5)) {
                return 29;
            }

            //  Similarly, Kislev varies with the length of year

            if (month == 9 && mod(this.hebrew_year_days(year), 10) == 3) {
                return 29;
            }

            //  Nope, it's a 30 day month

            return 30;
        }

        //  HEBREW_TO_JD  --  Determine Julian day from Hebrew date
        //  Finally, wrap it all up into...

    }, {
        key: 'hebrew_to_jd',
        value: function hebrew_to_jd(year, month, day) {
            var jd, mon, months;

            months = this.hebrew_year_months(year);
            jd = this.HEBREW_EPOCH + this.hebrew_delay_1(year) + this.hebrew_delay_2(year) + day + 1;

            if (month < 7) {
                for (mon = 7; mon <= months; mon++) {
                    jd += this.hebrew_month_days(year, mon);
                }
                for (mon = 1; mon < month; mon++) {
                    jd += this.hebrew_month_days(year, mon);
                }
            } else {
                for (mon = 7; mon < month; mon++) {
                    jd += this.hebrew_month_days(year, mon);
                }
            }

            return jd;
        }

        /*  JD_TO_HEBREW  --  Convert Julian date to Hebrew date
         This works by making multiple calls to
         the inverse function, and is this very
         slow.  */

    }, {
        key: 'jd_to_hebrew',
        value: function jd_to_hebrew(jd) {
            var year, month, day, i, count, first;

            jd = Math.floor(jd) + 0.5;
            count = Math.floor((jd - this.HEBREW_EPOCH) * 98496.0 / 35975351.0);
            year = count - 1;
            for (i = count; jd >= this.hebrew_to_jd(i, 7, 1); i++) {
                year++;
            }
            first = jd < this.hebrew_to_jd(year, 1, 1) ? 7 : 1;
            month = first;
            for (i = first; jd > this.hebrew_to_jd(year, i, this.hebrew_month_days(year, i)); i++) {
                month++;
            }
            day = jd - this.hebrew_to_jd(year, month, 1) + 1;
            return [year, month, day];
        }

        /*  EQUINOXE_A_PARIS  --  Determine Julian day and fraction of the
         September equinox at the Paris meridian in
         a given Gregorian year.  */

    }, {
        key: 'equinoxe_a_paris',
        value: function equinoxe_a_paris(year) {
            var equJED, equJD, equAPP, equParis, dtParis;

            //  September equinox in dynamical time
            equJED = this.ASTRO.equinox(year, 2);

            //  Correct for delta T to obtain Universal time
            equJD = equJED - this.ASTRO.deltat(year) / (24 * 60 * 60);

            //  Apply the equation of time to yield the apparent time at Greenwich
            equAPP = equJD + this.ASTRO.equationOfTime(equJED);

            /*  Finally, we must correct for the constant difference between
             the Greenwich meridian and that of Paris, 2°20'15" to the
             East.  */

            dtParis = (2 + 20 / 60.0 + 15 / (60 * 60.0)) / 360;
            equParis = equAPP + dtParis;

            return equParis;
        }

        /*  PARIS_EQUINOXE_JD  --  Calculate Julian day during which the
         September equinox, reckoned from the Paris
         meridian, occurred for a given Gregorian
         year.  */

    }, {
        key: 'paris_equinoxe_jd',
        value: function paris_equinoxe_jd(year) {
            var ep, epg;

            ep = this.equinoxe_a_paris(year);
            epg = Math.floor(ep - 0.5) + 0.5;

            return epg;
        }

        /*  ANNEE_DE_LA_REVOLUTION  --  Determine the year in the French
         revolutionary calendar in which a
         given Julian day falls.  Returns an
         array of two elements:
          [0]  Année de la Révolution
         [1]  Julian day number containing
         equinox for this year.
         */

    }, {
        key: 'annee_da_la_revolution',
        value: function annee_da_la_revolution(jd) {
            var guess = this.jd_to_gregorian(jd)[0] - 2,
                lasteq,
                nexteq,
                adr;

            lasteq = this.paris_equinoxe_jd(guess);
            while (lasteq > jd) {
                guess--;
                lasteq = this.paris_equinoxe_jd(guess);
            }
            nexteq = lasteq - 1;
            while (!(lasteq <= jd && jd < nexteq)) {
                lasteq = nexteq;
                guess++;
                nexteq = this.paris_equinoxe_jd(guess);
            }
            adr = Math.round((lasteq - this.FRENCH_REVOLUTIONARY_EPOCH) / this.ASTRO.TropicalYear) + 1;

            return [adr, lasteq];
        }

        /*  JD_TO_FRENCH_REVOLUTIONARY  --  Calculate date in the French Revolutionary
         calendar from Julian day.  The five or six
         "sansculottides" are considered a thirteenth
         month in the results of this function.  */

    }, {
        key: 'jd_to_french_revolutionary',
        value: function jd_to_french_revolutionary(jd) {
            var an, mois, decade, jour, adr, equinoxe;

            jd = Math.floor(jd) + 0.5;
            adr = this.annee_da_la_revolution(jd);
            an = adr[0];
            equinoxe = adr[1];
            mois = Math.floor((jd - equinoxe) / 30) + 1;
            jour = (jd - equinoxe) % 30;
            decade = Math.floor(jour / 10) + 1;
            jour = jour % 10 + 1;

            return [an, mois, decade, jour];
        }

        /*  FRENCH_REVOLUTIONARY_TO_JD  --  Obtain Julian day from a given French
         Revolutionary calendar date.  */

    }, {
        key: 'french_revolutionary_to_jd',
        value: function french_revolutionary_to_jd(an, mois, decade, jour) {
            var adr, equinoxe, guess, jd;

            guess = this.FRENCH_REVOLUTIONARY_EPOCH + this.ASTRO.TropicalYear * (an - 1 - 1);
            adr = [an - 1, 0];

            while (adr[0] < an) {
                adr = this.annee_da_la_revolution(guess);
                guess = adr[1] + (this.ASTRO.TropicalYear + 2);
            }
            equinoxe = adr[1];

            jd = equinoxe + 30 * (mois - 1) + 10 * (decade - 1) + (jour - 1);
            return jd;
        }

        //  LEAP_ISLAMIC  --  Is a given year a leap year in the Islamic calendar ?

    }, {
        key: 'leap_islamic',
        value: function leap_islamic(year) {
            return (year * 11 + 14) % 30 < 11;
        }

        //  ISLAMIC_TO_JD  --  Determine Julian day from Islamic date

    }, {
        key: 'islamic_to_jd',
        value: function islamic_to_jd(year, month, day) {
            return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + this.ISLAMIC_EPOCH - 1;
        }

        //  JD_TO_ISLAMIC  --  Calculate Islamic date from Julian day

    }, {
        key: 'jd_to_islamic',
        value: function jd_to_islamic(jd) {
            var year, month, day;

            jd = Math.floor(jd) + 0.5;
            year = Math.floor((30 * (jd - this.ISLAMIC_EPOCH) + 10646) / 10631);
            month = Math.min(12, Math.ceil((jd - (29 + this.islamic_to_jd(year, 1, 1))) / 29.5) + 1);
            day = jd - this.islamic_to_jd(year, month, 1) + 1;
            return [year, month, day];
        }

        /*  TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
         March equinox at the Tehran meridian in
         a given Gregorian year.  */

    }, {
        key: 'tehran_equinox',
        value: function tehran_equinox(year) {
            var equJED, equJD, equAPP, equTehran, dtTehran;

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

        /*  TEHRAN_EQUINOX_JD  --  Calculate Julian day during which the
         March equinox, reckoned from the Tehran
         meridian, occurred for a given Gregorian
         year.  */

    }, {
        key: 'tehran_equinox_jd',
        value: function tehran_equinox_jd(year) {
            var ep, epg;

            ep = this.tehran_equinox(year);
            epg = Math.floor(ep);

            return epg;
        }

        /*  PERSIANA_YEAR  --  Determine the year in the Persian
         astronomical calendar in which a
         given Julian day falls.  Returns an
         array of two elements:
          [0]  Persian year
         [1]  Julian day number containing
         equinox for this year.
         */

    }, {
        key: 'persiana_year',
        value: function persiana_year(jd) {
            var guess = this.jd_to_gregorian(jd)[0] - 2,
                lasteq,
                nexteq,
                adr;

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

        /*  JD_TO_PERSIANA  --  Calculate date in the Persian astronomical
         calendar from Julian day.  */

    }, {
        key: 'jd_to_persiana',
        value: function jd_to_persiana(jd) {
            var year, month, day, adr, equinox, yday;

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

        /*  PERSIANA_TO_JD  --  Obtain Julian day from a given Persian
         astronomical calendar date.  */

    }, {
        key: 'persiana_to_jd',
        value: function persiana_to_jd(year, month, day) {
            var adr, equinox, guess, jd;

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

        /*  LEAP_PERSIANA  --  Is a given year a leap year in the Persian
         astronomical calendar ?  */

    }, {
        key: 'leap_persiana',
        value: function leap_persiana(year) {
            return this.persiana_to_jd(year + 1, 1, 1) - this.persiana_to_jd(year, 1, 1) > 365;
        }

        //  LEAP_PERSIAN  --  Is a given year a leap year in the Persian calendar ?

    }, {
        key: 'leap_persian',
        value: function leap_persian(year) {
            return ((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682;
        }

        //  PERSIAN_TO_JD  --  Determine Julian day from Persian date

    }, {
        key: 'persian_to_jd',
        value: function persian_to_jd(year, month, day) {
            var epbase, epyear;

            epbase = year - (year >= 0 ? 474 : 473);
            epyear = 474 + this.ASTRO.mod(epbase, 2820);

            return day + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1);
        }

        //  JD_TO_PERSIAN  --  Calculate Persian date from Julian day

    }, {
        key: 'jd_to_persian',
        value: function jd_to_persian(jd) {
            var year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;

            jd = Math.floor(jd) + 0.5;

            depoch = jd - this.persian_to_jd(475, 1, 1);
            cycle = Math.floor(depoch / 1029983);
            cyear = this.ASTRO.mod(depoch, 1029983);
            if (cyear == 1029982) {
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

        //  MAYAN_COUNT_TO_JD  --  Determine Julian day from Mayan long count

    }, {
        key: 'mayan_count_to_jd',
        value: function mayan_count_to_jd(baktun, katun, tun, uinal, kin) {
            return this.MAYAN_COUNT_EPOCH + baktun * 144000 + katun * 7200 + tun * 360 + uinal * 20 + kin;
        }

        //  JD_TO_MAYAN_COUNT  --  Calculate Mayan long count from Julian day

    }, {
        key: 'jd_to_mayan_count',
        value: function jd_to_mayan_count(jd) {
            var d, baktun, katun, tun, uinal, kin;

            jd = Math.floor(jd) + 0.5;
            d = jd - this.MAYAN_COUNT_EPOCH;
            baktun = Math.floor(d / 144000);
            d = this.ASTRO.mod(d, 144000);
            katun = Math.floor(d / 7200);
            d = this.ASTRO.mod(d, 7200);
            tun = Math.floor(d / 360);
            d = this.ASTRO.mod(d, 360);
            uinal = Math.floor(d / 20);
            kin = this.ASTRO.mod(d, 20);

            return [baktun, katun, tun, uinal, kin];
        }

        //  JD_TO_MAYAN_HAAB  --  Determine Mayan Haab "month" and day from Julian day

    }, {
        key: 'jd_to_mayan_haab',
        value: function jd_to_mayan_haab(jd) {
            var lcount, day;

            jd = Math.floor(jd) + 0.5;
            lcount = jd - this.MAYAN_COUNT_EPOCH;
            day = this.ASTRO.mod(lcount + 8 + (18 - 1) * 20, 365);

            return [Math.floor(day / 20) + 1, this.ASTRO.mod(day, 20)];
        }

        //  JD_TO_MAYAN_TZOLKIN  --  Determine Mayan Tzolkin "month" and day from Julian day

    }, {
        key: 'jd_to_mayan_tzolkin',
        value: function jd_to_mayan_tzolkin(jd) {
            var lcount;

            jd = Math.floor(jd) + 0.5;
            lcount = jd - this.MAYAN_COUNT_EPOCH;
            return [this.ASTRO.amod(lcount + 20, 20), this.ASTRO.amod(lcount + 4, 13)];
        }

        //  INDIAN_CIVIL_TO_JD  --  Obtain Julian day for Indian Civil date

    }, {
        key: 'indian_civil_to_jd',
        value: function indian_civil_to_jd(year, month, day) {
            var Caitra, gyear, leap, start, jd, m;

            gyear = year + 78;
            leap = this.leap_gregorian(gyear); // Is this a leap year ?
            start = this.gregorian_to_jd(gyear, 3, leap ? 21 : 22);
            Caitra = leap ? 31 : 30;

            if (month == 1) {
                jd = start + (day - 1);
            } else {
                jd = start + Caitra;
                m = month - 2;
                m = Math.min(m, 5);
                jd += m * 31;
                if (month >= 8) {
                    m = month - 7;
                    jd += m * 30;
                }
                jd += day - 1;
            }

            return jd;
        }

        //  JD_TO_INDIAN_CIVIL  --  Calculate Indian Civil date from Julian day

    }, {
        key: 'jd_to_indian_civil',
        value: function jd_to_indian_civil(jd) {
            var Caitra, Saka, greg, greg0, leap, start, year, yday, mday;

            Saka = 79 - 1; // Offset in years from Saka era to Gregorian epoch
            start = 80; // Day offset between Saka and Gregorian

            jd = Math.floor(jd) + 0.5;
            greg = this.jd_to_gregorian(jd); // Gregorian date for Julian day
            leap = this.leap_gregorian(greg[0]); // Is this a leap year?
            year = greg[0] - Saka; // Tentative year in Saka era
            greg0 = this.gregorian_to_jd(greg[0], 1, 1); // JD at start of Gregorian year
            yday = jd - greg0; // Day number (0 based) in Gregorian year
            Caitra = leap ? 31 : 30; // Days in Caitra this year

            if (yday < start) {
                //  Day is at the end of the preceding Saka year
                year--;
                yday += Caitra + 31 * 5 + 30 * 3 + 10 + start;
            }

            yday -= start;
            if (yday < Caitra) {
                month = 1;
                day = yday + 1;
            } else {
                mday = yday - Caitra;
                if (mday < 31 * 5) {
                    month = Math.floor(mday / 31) + 2;
                    day = mday % 31 + 1;
                } else {
                    mday -= 31 * 5;
                    month = Math.floor(mday / 30) + 7;
                    day = mday % 30 + 1;
                }
            }

            return [year, month, day];
        }

        /*  updateFromGregorian  --  Update all calendars from Gregorian.
         "Why not Julian date?" you ask.  Because
         starting from Gregorian guarantees we're
         already snapped to an integral second, so
         we don't get roundoff errors in other
         calendars.  */
        // TODO: Modified by me code structure totally changed

    }, {
        key: 'updateFromGregorian',
        value: function updateFromGregorian() {
            var j, year, mon, mday, hour, min, sec, weekday, julcal, hebcal, islcal, hmindex, utime, isoweek, may_countcal, mayhaabcal, maytzolkincal, frrcal, indcal, isoday, xgregcal, perscal;

            year = this.ON.gregorian.year;
            mon = this.ON.gregorian.month;
            mday = this.ON.gregorian.day;
            hour = this.ON.gregorian.hour;
            min = this.ON.gregorian.minute;
            sec = this.ON.gregorian.second;

            //  Update Julian day
            // ---------------------------------------------------------------------------
            j = this.gregorian_to_jd(year, mon + 1, mday) + Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0;

            this.ON.julianday = j;
            this.ON.modifiedjulianday = j - this.JMJD;

            //  Update day of week in Gregorian box
            // ---------------------------------------------------------------------------
            weekday = this.ASTRO.jwday(j);
            this.ON.gregorian.weekday = weekday;

            //  Update leap year status in Gregorian box
            // ---------------------------------------------------------------------------
            this.ON.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];

            //  Update Julian Calendar
            // ---------------------------------------------------------------------------
            julcal = this.jd_to_julian(j);

            this.ON.juliancalendar.year = julcal[0];
            this.ON.juliancalendar.month = julcal[1] - 1;
            this.ON.juliancalendar.day = julcal[2];
            this.ON.juliancalendar.leap = this.NormLeap[this.leap_julian(julcal[0]) ? 1 : 0];
            weekday = this.ASTRO.jwday(j);
            this.ON.juliancalendar.weekday = this.ASTRO.Weekdays[weekday];

            //  Update Hebrew Calendar
            // ---------------------------------------------------------------------------
            //        hebcal = this.jd_to_hebrew(j);
            //        if (this.hebrew_leap(hebcal[0])) {
            //            document.hebrew.month.options.length = 13;
            //            document.hebrew.month.options[11] = new Option("Adar I");
            //            document.hebrew.month.options[12] = new Option("Veadar");
            //        } else {
            //            document.hebrew.month.options.length = 12;
            //            document.hebrew.month.options[11] = new Option("Adar");
            //        }
            //        document.hebrew.year.value = hebcal[0];
            //        document.hebrew.month.selectedIndex = hebcal[1] - 1;
            //        document.hebrew.day.value = hebcal[2];
            //        hmindex = hebcal[1];
            //        if (hmindex == 12 && !this.hebrew_leap(hebcal[0])) {
            //            hmindex = 14;
            //        }
            //        document.hebrew.hebmonth.src = "figures/hebrew_month_" +
            //          hmindex + ".gif";
            //        switch (this.hebrew_year_days(hebcal[0])) {
            //            case 353:
            //                document.hebrew.leap.value = "Common deficient (353 days)";
            //                break;
            //
            //            case 354:
            //                document.hebrew.leap.value = "Common regular (354 days)";
            //                break;
            //
            //            case 355:
            //                document.hebrew.leap.value = "Common complete (355 days)";
            //                break;
            //
            //            case 383:
            //                document.hebrew.leap.value = "Embolismic deficient (383 days)";
            //                break;
            //
            //            case 384:
            //                document.hebrew.leap.value = "Embolismic regular (384 days)";
            //                break;
            //
            //            case 385:
            //                document.hebrew.leap.value = "Embolismic complete (385 days)";
            //                break;
            //
            //            default:
            //                document.hebrew.leap.value = "Invalid year length: " +
            //                  this.hebrew_year_days(hebcal[0]) + " days.";
            //                break;
            //        }

            //  Update Islamic Calendar
            // ---------------------------------------------------------------------------
            islcal = this.jd_to_islamic(j);

            this.ON.islamic.year = islcal[0];
            this.ON.islamic.month = islcal[1] - 1;
            this.ON.islamic.day = islcal[2];
            this.ON.islamic.weekday = "yawm " + this.ISLAMIC_WEEKDAYS[weekday];
            this.ON.islamic.leap = this.NormLeap[this.leap_islamic(islcal[0]) ? 1 : 0];

            //  Update Persian Calendar
            // ---------------------------------------------------------------------------
            perscal = this.jd_to_persian(j);

            this.ON.persian.year = perscal[0];
            this.ON.persian.month = perscal[1] - 1;
            this.ON.persian.day = perscal[2];
            this.ON.persian.weekday = this.PERSIAN_WEEKDAYS[weekday];
            this.ON.persian.leap = this.NormLeap[this.leap_persian(perscal[0]) ? 1 : 0];

            //  Update Persian Astronomical Calendar
            // ---------------------------------------------------------------------------
            perscal = this.jd_to_persiana(j);

            this.ON.persianAstro.year = perscal[0];
            this.ON.persianAstro.month = perscal[1] - 1;
            this.ON.persianAstro.day = perscal[2];
            this.ON.persianAstro.weekday = this.PERSIAN_WEEKDAYS[weekday];
            this.ON.persianAstro.leap = this.NormLeap[this.leap_persiana(perscal[0]) ? 1 : 0];

            //  Update Mayan Calendars
            // ---------------------------------------------------------------------------
            //        may_countcal = this.jd_to_mayan_count(j);
            //        document.mayancount.baktun.value = may_countcal[0];
            //        document.mayancount.katun.value = may_countcal[1];
            //        document.mayancount.tun.value = may_countcal[2];
            //        document.mayancount.uinal.value = may_countcal[3];
            //        document.mayancount.kin.value = may_countcal[4];
            //        mayhaabcal = this.jd_to_mayan_haab(j);
            //        document.mayancount.haab.value = "" + mayhaabcal[1] + " " + this.MAYAN_HAAB_MONTHS[mayhaabcal[0] - 1];
            //        maytzolkincal = this.jd_to_mayan_tzolkin(j);
            //        document.mayancount.tzolkin.value = "" + maytzolkincal[1] + " " + this.MAYAN_TZOLKIN_MONTHS[maytzolkincal[0] - 1];

            //  Update Indian Civil Calendar
            // ---------------------------------------------------------------------------
            //        indcal = this.jd_to_indian_civil(j);
            //        document.indiancivilcalendar.year.value = indcal[0];
            //        document.indiancivilcalendar.month.selectedIndex = indcal[1] - 1;
            //        document.indiancivilcalendar.day.value = indcal[2];
            //        document.indiancivilcalendar.weekday.value = this.INDIAN_CIVIL_WEEKDAYS[weekday];
            //        document.indiancivilcalendar.leap.value = this.NormLeap[this.leap_gregorian(indcal[0] + 78) ? 1 : 0];

            //  Update French Republican Calendar
            // ---------------------------------------------------------------------------
            //        frrcal = this.jd_to_french_revolutionary(j);
            //        document.french.an.value = frrcal[0];
            //        document.french.mois.selectedIndex = frrcal[1] - 1;
            //        document.french.decade.selectedIndex = frrcal[2] - 1;
            //        document.french.jour.selectedIndex = ((frrcal[1] <= 12) ? frrcal[3] : (frrcal[3] + 11)) - 1;

            //  Update Gregorian serial number
            // ---------------------------------------------------------------------------
            if (document.gregserial != null) {
                this.ON.gregserial.day = j - this.J0000;
            }

            //  Update Excel 1900 and 1904 day serial numbers
            // ---------------------------------------------------------------------------

            this.ON.excelserial1900.day = j - this.J1900 + 1 + (
            /*  Microsoft marching morons thought 1900 was a leap year.
             Adjust dates after 1900-02-28 to compensate for their
             idiocy.  */
            j > 2415078.5 ? 1 : 0);

            this.ON.excelserial1904.day = j - this.J1904;

            //  Update Unix time()
            // ---------------------------------------------------------------------------
            utime = (j - this.J1970) * (60 * 60 * 24 * 1000);

            this.ON.unixtime = Math.round(utime / 1000);

            //  Update ISO Week
            // ---------------------------------------------------------------------------
            isoweek = this.jd_to_iso(j);

            this.ON.isoweek.year = isoweek[0];
            this.ON.isoweek.week = isoweek[1];
            this.ON.isoweek.day = isoweek[2];

            //  Update ISO Day
            // ---------------------------------------------------------------------------
            isoday = this.jd_to_iso_day(j);

            this.ON.isoday.year = isoday[0];
            this.ON.isoday.day = isoday[1];
        }

        //  calcGregorian  --  Perform calculation starting with a Gregorian date

    }, {
        key: 'calcGregorian',
        value: function calcGregorian() {
            this.updateFromGregorian();
        }

        //  calcJulian  --  Perform calculation starting with a Julian date

    }, {
        key: 'calcJulian',
        value: function calcJulian() {
            var j, date, time;

            j = new Number(document.julianday.day.value);
            date = this.jd_to_gregorian(j);
            time = this.ASTRO.jhms(j);

            this.ON.gregorian.year = date[0];
            this.ON.gregorian.month = date[1] - 1;
            this.ON.gregorian.day = date[2];
            this.ON.gregorian.hour = pad(time[0], 2, " ");
            this.ON.gregorian.minute = pad(time[1], 2, "0");
            this.ON.gregorian.second = pad(time[2], 2, "0");

            //        document.gregorian.year.value = date[0];
            //        document.gregorian.month.selectedIndex = date[1] - 1;
            //        document.gregorian.day.value = date[2];
            //        document.gregorian.hour.value = pad(time[0], 2, " ");
            //        document.gregorian.min.value = pad(time[1], 2, "0");
            //        document.gregorian.sec.value = pad(time[2], 2, "0");
            this.updateFromGregorian();
        }

        //  setJulian  --  Set Julian date and update all calendars

    }, {
        key: 'setJulian',
        value: function setJulian(j) {

            this.ON.julianday.day = new Number(j);
            //        document.julianday.day.value = new Number(j);
            this.calcJulian();
        }

        //  calcModifiedJulian  --  Update from Modified Julian day

    }, {
        key: 'calcModifiedJulian',
        value: function calcModifiedJulian() {
            this.setJulian(new Number(document.modifiedjulianday.day.value) + this.JMJD);
        }

        //  calcJulianCalendar  --  Update from Julian calendar

    }, {
        key: 'calcJulianCalendar',
        value: function calcJulianCalendar() {
            this.setJulian(this.julian_to_jd(new Number(document.juliancalendar.year.value), document.juliancalendar.month.selectedIndex + 1, new Number(document.juliancalendar.day.value)));
        }

        //  calcHebrew  --  Update from Hebrew calendar

    }, {
        key: 'calcHebrew',
        value: function calcHebrew() {
            this.setJulian(this.hebrew_to_jd(new Number(document.hebrew.year.value), document.hebrew.month.selectedIndex + 1, new Number(document.hebrew.day.value)));
        }

        //  calcIslamic  --  Update from Islamic calendar

    }, {
        key: 'calcIslamic',
        value: function calcIslamic() {
            this.setJulian(this.islamic_to_jd(new Number(document.islamic.year.value), document.islamic.month.selectedIndex + 1, new Number(document.islamic.day.value)));
        }

        //  calcPersian  --  Update from Persian calendar

    }, {
        key: 'calcPersian',
        value: function calcPersian() {
            this.setJulian(this.persian_to_jd(new Number(document.persian.year.value), document.persian.month.selectedIndex + 1, new Number(document.persian.day.value)));
        }

        //  calcPersiana  --  Update from Persian astronomical calendar

    }, {
        key: 'calcPersiana',
        value: function calcPersiana() {
            this.setJulian(this.persiana_to_jd(new Number(document.persiana.year.value), document.persiana.month.selectedIndex + 1, new Number(document.persiana.day.value)) + 0.5);
        }

        //  calcMayanCount  --  Update from the Mayan Long Count

    }, {
        key: 'calcMayanCount',
        value: function calcMayanCount() {
            this.setJulian(this.mayan_count_to_jd(new Number(document.mayancount.baktun.value), new Number(document.mayancount.katun.value), new Number(document.mayancount.tun.value), new Number(document.mayancount.uinal.value), new Number(document.mayancount.kin.value)));
        }

        //  calcIndianCivilCalendar  --  Update from Indian Civil Calendar

    }, {
        key: 'calcIndianCivilCalendar',
        value: function calcIndianCivilCalendar() {
            this.setJulian(this.indian_civil_to_jd(new Number(document.indiancivilcalendar.year.value), document.indiancivilcalendar.month.selectedIndex + 1, new Number(document.indiancivilcalendar.day.value)));
        }

        //  calcFrench  -- Update from French Republican calendar

    }, {
        key: 'calcFrench',
        value: function calcFrench() {
            var decade, j, mois;

            j = document.french.jour.selectedIndex;
            decade = document.french.decade.selectedIndex;
            mois = document.french.mois.selectedIndex;

            /*  If the currently selected day is one of the sansculottides,
             adjust the index to be within that period and force the
             decade to zero and the month to 12, designating the
             intercalary interval.  */

            if (j > 9) {
                j -= 11;
                decade = 0;
                mois = 12;
            }

            /*  If the selected month is the pseudo-month of the five or
             six sansculottides, ensure that the decade is 0 and the day
             number doesn't exceed six.  To avoid additional overhead, we
             don't test whether a day number of 6 is valid for this year,
             but rather simply permit it to wrap into the first day of
             the following year if this is a 365 day year.  */

            if (mois == 12) {
                decade = 0;
                if (j > 5) {
                    j = 0;
                }
            }

            this.setJulian(this.french_revolutionary_to_jd(new Number(document.french.an.value), mois + 1, decade + 1, j + 1));
        }

        //  calcGregSerial  --  Update from Gregorian serial day number

    }, {
        key: 'calcGregSerial',
        value: function calcGregSerial() {
            this.setJulian(new Number(document.gregserial.day.value) + J0000);
        }

        //  calcExcelSerial1900  --  Perform calculation starting with an Excel 1900 serial date

    }, {
        key: 'calcExcelSerial1900',
        value: function calcExcelSerial1900() {
            var d = new Number(document.excelserial1900.day.value);

            /* Idiot Kode Kiddies didn't twig to the fact
             (proclaimed in 1582) that 1900 wasn't a leap year,
             so every Excel day number in every database on Earth
             which represents a date subsequent to February 28,
             1900 is off by one.  Note that there is no
             acknowledgement of this betrayal or warning of its
             potential consequences in the Excel help file.  Thank
             you so much Mister Talking Paper Clip.  Some day
             we're going to celebrate your extinction like it was
             February 29 ... 1900.  */

            if (d > 60) {
                d--;
            }

            this.setJulian(d - 1 + this.J1900);
        }

        //  calcExcelSerial1904  --  Perform calculation starting with an Excel 1904 serial date

    }, {
        key: 'calcExcelSerial1904',
        value: function calcExcelSerial1904() {
            this.setJulian(new Number(document.excelserial1904.day.value) + this.J1904);
        }

        //  calcUnixTime  --  Update from specified Unix time() value

    }, {
        key: 'calcUnixTime',
        value: function calcUnixTime() {
            var t = new Number(document.unixtime.time.value);

            this.setJulian(this.J1970 + t / (60 * 60 * 24));
        }

        //  calcIsoWeek  --  Update from specified ISO year, week, and day

    }, {
        key: 'calcIsoWeek',
        value: function calcIsoWeek() {
            var year = new Number(document.isoweek.year.value),
                week = new Number(document.isoweek.week.value),
                day = new Number(document.isoweek.day.value);

            this.setJulian(this.iso_to_julian(year, week, day));
        }

        //  calcIsoDay  --  Update from specified ISO year and day of year

    }, {
        key: 'calcIsoDay',
        value: function calcIsoDay() {
            var year = new Number(document.isoday.year.value),
                day = new Number(document.isoday.day.value);

            this.setJulian(this.iso_day_to_julian(year, day));
        }

        /*  setDateToToday  --  Preset the fields in
         the request form to today's date.  */

    }, {
        key: 'setDateToToday',
        value: function setDateToToday() {
            var today = new Date();

            /*  The following idiocy is due to bizarre incompatibilities
             in the behaviour of getYear() between Netscrape and
             Exploder.  The ideal solution is to use getFullYear(),
             which returns the actual year number, but that would
             break this code on versions of JavaScript prior to
             1.2.  So, for the moment we use the following code
             which works for all versions of JavaScript and browsers
             for all year numbers greater than 1000.  When we're willing
             to require JavaScript 1.2, this may be replaced by
             the single line:
              document.gregorian.year.value = today.getFullYear();
              Thanks to Larry Gilbert for pointing out this problem.
             */

            var y = today.getYear();
            if (y < 1000) {
                y += 1900;
            }

            this.ON.gregorian = {
                year: y,
                month: today.getMonth(),
                day: today.getDate(),
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            };
        }
    }]);

    return Algorithms;
}();

module.exports = Algorithms;

/***/ }),
/* 8 */
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
        this.AstronomicalUnit = 149597870.0; // Astronomical unit in kilometres
        this.TropicalYear = 365.24219878; // Mean solar tropical year

        //  JWDAY  --  Calculate day of week from Julian day
        this.Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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

        /*  Table of observed Delta T values at the beginning of
         even numbered years from 1620 through 2002.  */

        this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -0.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6];

        /*  EQUINOX  --  Determine the Julian Ephemeris Day of an
         equinox or solstice.  The "which" argument
         selects the item to be computed:
          0   March equinox
         1   June solstice
         2   September equinox
         3   December solstice
          */

        //  Periodic terms to obtain true time

        this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074];

        this.JDE0tab1000 = [new Array(1721139.29189, 365242.13740, 0.06134, 0.00111, -0.00071), new Array(1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025), new Array(1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074), new Array(1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006)];

        this.JDE0tab2000 = [new Array(2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057), new Array(2451716.56767, 365241.62603, 0.00325, 0.00888, -0.00030), new Array(2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078), new Array(2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032)];
    }

    /*  ASTOR  --  Arc-seconds to radians.  */


    _createClass(ASTRO, [{
        key: "astor",
        value: function astor(a) {
            return a * (Math.PI / (180.0 * 3600.0));
        }

        /*  DTR  --  Degrees to radians.  */

    }, {
        key: "dtr",
        value: function dtr(d) {
            return d * Math.PI / 180.0;
        }

        /*  RTD  --  Radians to degrees.  */

    }, {
        key: "rtd",
        value: function rtd(r) {
            return r * 180.0 / Math.PI;
        }

        /*  FIXANGLE  --  Range reduce angle in degrees.  */

    }, {
        key: "fixangle",
        value: function fixangle(a) {
            return a - 360.0 * Math.floor(a / 360.0);
        }

        /*  FIXANGR  --  Range reduce angle in radians.  */

    }, {
        key: "fixangr",
        value: function fixangr(a) {
            return a - 2 * Math.PI * Math.floor(a / (2 * Math.PI));
        }

        //  DSIN  --  Sine of an angle in degrees

    }, {
        key: "dsin",
        value: function dsin(d) {
            return Math.sin(this.dtr(d));
        }

        //  DCOS  --  Cosine of an angle in degrees

    }, {
        key: "dcos",
        value: function dcos(d) {
            return Math.cos(this.dtr(d));
        }

        /*  MOD  --  Modulus function which works for non-integers.  */

    }, {
        key: "mod",
        value: function mod(a, b) {
            return a - b * Math.floor(a / b);
        }

        //  AMOD  --  Modulus function which returns numerator if modulus is zero

    }, {
        key: "amod",
        value: function amod(a, b) {
            return this.mod(a - 1, b) + 1;
        }

        /*  JHMS  --  Convert Julian time to hour, minutes, and seconds,
         returned as a three-element array.  */

    }, {
        key: "jhms",
        value: function jhms(j) {
            var ij;

            j += 0.5;
            /* Astronomical to civil */
            ij = (j - Math.floor(j)) * 86400.0 + 0.5;
            return [Math.floor(ij / 3600), Math.floor(ij / 60 % 60), Math.floor(ij % 60)];
        }
    }, {
        key: "jwday",
        value: function jwday(j) {
            return this.mod(Math.floor(j + 1.5), 7);
        }
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

        /*  NUTATION  --  Calculate the nutation in longitude, deltaPsi, and
         obliquity, deltaEpsilon for a given Julian date
         jd.  Results are returned as a two element Array
         giving (deltaPsi, deltaEpsilon) in degrees.  */

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
                ta = new Array(),
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
                    if (this.nutArgMult[i * 5 + j] != 0) {
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

        /*  ECLIPTOEQ  --  Convert celestial (ecliptical) longitude and
         latitude into right ascension (in degrees) and
         declination.  We must supply the time of the
         conversion in order to compensate correctly for the
         varying obliquity of the ecliptic over time.
         The right ascension and declination are returned
         as a two-element Array in that order.  */

    }, {
        key: "ecliptoeq",
        value: function ecliptoeq(jd, Lambda, Beta) {
            var eps, Ra, Dec;
            /* Obliquity of the ecliptic. */
            eps = this.dtr(this.obliqeq(jd));
            log += "Obliquity: " + this.rtd(eps) + "\n";

            Ra = this.rtd(Math.atan2(Math.cos(eps) * Math.sin(this.dtr(Lambda)) - Math.tan(this.dtr(Beta)) * Math.sin(eps), Math.cos(this.dtr(Lambda))));
            log += "RA = " + Ra + "\n";
            Ra = this.fixangle(this.rtd(Math.atan2(Math.cos(eps) * Math.sin(this.dtr(Lambda)) - Math.tan(this.dtr(Beta)) * Math.sin(eps), Math.cos(this.dtr(Lambda)))));
            Dec = this.rtd(Math.asin(Math.sin(eps) * Math.sin(this.dtr(Lambda)) * Math.cos(this.dtr(Beta)) + Math.sin(this.dtr(Beta)) * Math.cos(eps)));

            return new Array(Ra, Dec);
        }

        /*  DELTAT  --  Determine the difference, in seconds, between
         Dynamical time and Universal time.  */

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
    }, {
        key: "equinox",
        value: function equinox(year, which) {
            var deltaL, i, j, JDE0, JDE, JDE0tab, S, T, W, Y;

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

            //document.debug.log.value += "JDE0 = " + JDE0 + "\n";

            T = (JDE0 - 2451545.0) / 36525;
            //document.debug.log.value += "T = " + T + "\n";
            W = 35999.373 * T - 2.47;
            //document.debug.log.value += "W = " + W + "\n";
            deltaL = 1 + 0.0334 * this.dcos(W) + 0.0007 * this.dcos(2 * W);
            //document.debug.log.value += "deltaL = " + deltaL + "\n";

            //  Sum the periodic terms for time T

            S = 0;
            for (i = j = 0; i < 24; i++) {
                S += this.EquinoxpTerms[j] * this.dcos(this.EquinoxpTerms[j + 1] + this.EquinoxpTerms[j + 2] * T);
                j += 3;
            }

            //document.debug.log.value += "S = " + S + "\n";
            //document.debug.log.value += "Corr = " + ((S * 0.00001) / deltaL) + "\n";

            JDE = JDE0 + S * 0.00001 / deltaL;

            return JDE;
        }

        /*  SUNPOS  --  Position of the Sun.  Please see the comments
         on the return statement at the end of this function
         which describe the array it returns.  We return
         intermediate values because they are useful in a
         variety of other contexts.  */

    }, {
        key: "sunpos",
        value: function sunpos(jd) {
            var T, T2, L0, M, e, C, sunLong, sunAnomaly, sunR, Omega, Lambda, epsilon, epsilon0, Alpha, Delta, AlphaApp, DeltaApp;

            T = (jd - this.J2000) / this.JulianCentury;
            //document.debug.log.value += "Sunpos.  T = " + T + "\n";
            T2 = T * T;
            L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T2;
            //document.debug.log.value += "L0 = " + L0 + "\n";
            L0 = this.fixangle(L0);
            //document.debug.log.value += "L0 = " + L0 + "\n";
            M = 357.52911 + 35999.05029 * T + -0.0001537 * T2;
            //document.debug.log.value += "M = " + M + "\n";
            M = this.fixangle(M);
            //document.debug.log.value += "M = " + M + "\n";
            e = 0.016708634 + -0.000042037 * T + -0.0000001267 * T2;
            //document.debug.log.value += "e = " + e + "\n";
            C = (1.914602 + -0.004817 * T + -0.000014 * T2) * this.dsin(M) + (0.019993 - 0.000101 * T) * this.dsin(2 * M) + 0.000289 * this.dsin(3 * M);
            //document.debug.log.value += "C = " + C + "\n";
            sunLong = L0 + C;
            //document.debug.log.value += "sunLong = " + sunLong + "\n";
            sunAnomaly = M + C;
            //document.debug.log.value += "sunAnomaly = " + sunAnomaly + "\n";
            sunR = 1.000001018 * (1 - e * e) / (1 + e * this.dcos(sunAnomaly));
            //document.debug.log.value += "sunR = " + sunR + "\n";
            Omega = 125.04 - 1934.136 * T;
            //document.debug.log.value += "Omega = " + Omega + "\n";
            Lambda = sunLong + -0.00569 + -0.00478 * this.dsin(Omega);
            //document.debug.log.value += "Lambda = " + Lambda + "\n";
            epsilon0 = this.obliqeq(jd);
            //document.debug.log.value += "epsilon0 = " + epsilon0 + "\n";
            epsilon = epsilon0 + 0.00256 * this.dcos(Omega);
            //document.debug.log.value += "epsilon = " + epsilon + "\n";
            Alpha = this.rtd(Math.atan2(this.dcos(epsilon0) * this.dsin(sunLong), this.dcos(sunLong)));
            //document.debug.log.value += "Alpha = " + Alpha + "\n";
            Alpha = this.fixangle(Alpha);
            ////document.debug.log.value += "Alpha = " + Alpha + "\n";
            Delta = this.rtd(Math.asin(this.dsin(epsilon0) * this.dsin(sunLong)));
            ////document.debug.log.value += "Delta = " + Delta + "\n";
            AlphaApp = this.rtd(Math.atan2(this.dcos(epsilon) * this.dsin(Lambda), this.dcos(Lambda)));
            //document.debug.log.value += "AlphaApp = " + AlphaApp + "\n";
            AlphaApp = this.fixangle(AlphaApp);
            //document.debug.log.value += "AlphaApp = " + AlphaApp + "\n";
            DeltaApp = this.rtd(Math.asin(this.dsin(epsilon) * this.dsin(Lambda)));
            //document.debug.log.value += "DeltaApp = " + DeltaApp + "\n";

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

        /*  EQUATIONOFTIME  --  Compute equation of time for a given moment.
         Returns the equation of time as a fraction of
         a day.  */

    }, {
        key: "equationOfTime",
        value: function equationOfTime(jd) {
            var alpha, deltaPsi, E, epsilon, L0, tau;

            tau = (jd - this.J2000) / this.JulianMillennium;
            //document.debug.log.value += "equationOfTime.  tau = " + tau + "\n";
            L0 = 280.4664567 + 360007.6982779 * tau + 0.03032028 * tau * tau + tau * tau * tau / 49931 + -(tau * tau * tau * tau / 15300) + -(tau * tau * tau * tau * tau / 2000000);
            //document.debug.log.value += "L0 = " + L0 + "\n";
            L0 = this.fixangle(L0);
            //document.debug.log.value += "L0 = " + L0 + "\n";
            alpha = this.sunpos(jd)[10];
            //document.debug.log.value += "alpha = " + alpha + "\n";
            deltaPsi = this.nutation(jd)[0];
            //document.debug.log.value += "deltaPsi = " + deltaPsi + "\n";
            epsilon = this.obliqeq(jd) + this.nutation(jd)[1];
            //document.debug.log.value += "epsilon = " + epsilon + "\n";
            E = L0 + -0.0057183 + -alpha + deltaPsi * this.dcos(epsilon);
            //document.debug.log.value += "E = " + E + "\n";
            E = E - 20.0 * Math.floor(E / 20.0);
            //document.debug.log.value += "Efixed = " + E + "\n";
            E = E / (24 * 60);
            //document.debug.log.value += "Eday = " + E + "\n";

            return E;
        }
    }]);

    return ASTRO;
}();

module.exports = ASTRO;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = function Container() {
    _classCallCheck(this, Container);

    this.modifiedjulianday = 0;
    this.julianday = 0;

    this.gregserial = {
        day: 0
    };

    this.excelserial1900 = {
        day: 0
    };

    this.excelserial1904 = {
        day: 0
    };

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

    this.juliancalendar = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    this.islamic = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    this.persian = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    this.persianAstro = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    this.isoweek = {
        year: 0,
        week: 0,
        day: 0
    };
    this.isoday = {
        year: 0,
        day: 0
    };
};

module.exports = Container;

/***/ })
/******/ ]);
});