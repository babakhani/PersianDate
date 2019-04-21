class Container {
    constructor () {

        this.isInvalidDate = null;

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
            weekday: 0,
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
            weekday: 0,
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
            weekday: 0,
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
            weekday: 0,
        };

        /**
         *
         * @type {{year: number, week: number, day: number}}
         */
        this.isoweek = {
            year: 0,
            week: 0,
            day: 0,
        };

        /**
         *
         * @type {{year: number, day: number}}
         */
        this.isoday = {
            year: 0,
            day: 0
        };
    }


}

module.exports = Container;
