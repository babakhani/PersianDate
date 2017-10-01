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
