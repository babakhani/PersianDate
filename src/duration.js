let Helpers = require('./helpers');
let normalizeDuration = new Helpers().normalizeDuration;
let absRound = new Helpers().absRound;
let absFloor = new Helpers().absFloor;
/**
 * Duration object constructor
 * @param duration
 * @class Duration
 * @constructor
 */
class Duration {
    constructor(key, value) {
        let duration = {},
            data = this._data = {},
            milliseconds = 0,
            normalizedUnit = normalizeDuration(key, value),
            unit = normalizedUnit.unit;
        duration[unit] = normalizedUnit.value;
        milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        let years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.w || duration.week || 0,
            days = duration.days || duration.d || duration.day || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0;
        // representation for dateAddRemove
        this._milliseconds = milliseconds + seconds * (1e3) + minutes * (6e4) + hours * (36e5);
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
        seconds += absFloor((milliseconds / 1000));
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

    valueOf () {
        return this._milliseconds + this._days * (864e5) + this._months * (2592e6);
    }
}

module.exports = Duration;


// let Helpers = require('./helpers');
// let normalizeDuration = new Helpers().normalizeDuration;
// let absRound = new Helpers().absRound;
// /**
//  * Duration object constructor
//  * @param duration
//  * @class Duration
//  * @constructor
//  */
// class Duration {
//     constructor(key, value) {
//         let duration = {},
//             normalizedUnit = normalizeDuration(key, value),
//             unit = normalizedUnit.unit;
//             duration[unit] = normalizedUnit.value;
//         let years = duration.years || duration.year || duration.y || 0,
//             quarters = duration.quarter || duration.quarter || 0,
//             months = duration.months || duration.month || duration.M || 0,
//             weeks = duration.weeks || duration.w || duration.week || 0,
//             days = duration.days || duration.d || duration.day || 0,
//             hours = duration.hours || duration.hour || duration.h || 0,
//             minutes = duration.minutes || duration.minute || duration.m || 0,
//             seconds = duration.seconds || duration.second || duration.s || 0,
//             milliseconds = duration.milliseconds || duration.milli || duration.millisecond || duration.ms || 0;


//         // TODO: must implement
//         // this._isValid = isDurationValid(normalizedInput);

//         // representation for dateAddRemove
//         this._milliseconds = +milliseconds +
//             seconds * 1e3 + // 1000
//             minutes * 6e4 + // 1000 * 60
//             hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
//         // Because of dateAddRemove treats 24 hours as different from a
//         // day when working around DST, we need to store them separately
//         this._days = +days +
//             weeks * 7;
//         // It is impossible to translate months into days without knowing
//         // which months you are are talking about, so we have to store
//         // it separately.
//         this._months = +months +
//             quarters * 3 +
//             years * 12;

//         this._data = {};
//         this.bubble();

//     }

//     absFloor(number) {
//         if (number < 0) {
//             // -0 -> 0
//             return Math.ceil(number) || 0;
//         } else {
//             return Math.floor(number);
//         }
//     }

//     absCeil(number) {
//         if (number < 0) {
//             return Math.floor(number);
//         } else {
//             return Math.ceil(number);
//         }
//     }

//     bubble() {
//         var milliseconds = this._milliseconds;
//         var days = this._days;
//         var months = this._months;
//         var data = this._data;
//         var seconds, minutes, hours, years, monthsFromDays;

//         // if we have a mix of positive and negative values, bubble down first
//         // check: https://github.com/moment/moment/issues/2166
//         if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
//             (milliseconds <= 0 && days <= 0 && months <= 0))) {
//             milliseconds += this.absCeil(monthsToDays(months) + days) * 864e5;
//             days = 0;
//             months = 0;
//         }

//         // The following code bubbles up values, see the tests for
//         // examples of what that means.
//         data.milliseconds = milliseconds % 1000;

//         seconds = this.absFloor(milliseconds / 1000);
//         data.seconds = seconds % 60;

//         minutes = this.absFloor(seconds / 60);
//         data.minutes = minutes % 60;

//         hours = this.absFloor(minutes / 60);
//         data.hours = hours % 24;

//         days += this.absFloor(hours / 24);

//         // convert days to months
//         // Remember: I change this from absFloor to absCeil
//         monthsFromDays = this.absFloor(this.daysToMonths(days));
//         months += monthsFromDays;

//         // Remember: I commnet this Line
//         days -= this.absCeil(this.monthsToDays(monthsFromDays));

//         // 12 months -> 1 year
//         years = this.absFloor(months / 12);
//         months %= 12;

//         data.days = days;
//         data.months = months;
//         data.years = years;
//         return this;
//     }

//     daysToMonths(days) {
//         // 400 years have 146097 days (taking into account leap year rules)
//         // 400 years have 12 months === 4800
//         return days * 4800 / 146097;
//     }

//     monthsToDays(months) {
//         // the reverse of daysToMonths
//         return months * 146097 / 4800;
//     }

//     valueOf() {
//         return this._milliseconds + this._days * (864e5) + this._months * (2592e6);
//     }

//     static valueOf() {
//         return this._milliseconds + this._days * (864e5) + this._months * (2592e6);
//     }
// }

// module.exports = Duration;