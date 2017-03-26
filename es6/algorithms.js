/**
 * Calendar algorithms implementations
 * @author Reza Babakhani
 * @module Algorithms
 */


class Algorithms {


    /**
     *
     * @param j
     * @returns {*}
     */
    jwday(j) {
        let mod = function (a, b) {
            return a - (b * Math.floor(a / b));
        };
        return mod(Math.floor((j + 1.5)), 7);
    }


    /**
     * Is a given year in the Gregorian calendar a leap year ?
     * @param year
     * @returns {boolean}
     */
    isLeapGregorian(year) {
        return ((year % 4) == 0) && (!(((year % 100) === 0) && ((year % 400) != 0)));
    }


    /**
     *
     * @param year
     * @returns {boolean}
     */
    isLeapPersian(year) {
        return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }


    /**
     * Determine Julian day number from Gregorian calendar date
     * @param year
     * @param month
     * @param day
     * @returns {number}
     */
    gregorianToJd(year, month, day) {
        return (GREGORIAN_EPOCH - 1) + (365 * (year - 1)) + Math.floor((year - 1) / 4) + (-Math.floor((year - 1) / 100)) + Math.floor((year - 1) / 400) + Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (this.isLeapGregorian(year) ? -1 : -2)
                ) + day);
    }


    /**
     * Calculate Gregorian calendar date from Julian day
     * @param jd
     * @returns {Array}
     */
    jdToGregorian(jd) {
        //let wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, dyindex, year, yearday, leapadj;
        let wjd = Math.floor(jd - 0.5) + 0.5;
        let depoch = wjd - GREGORIAN_EPOCH;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = mod(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = mod(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = mod(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        let yearday = wjd - this.gregorianToJd(year, 1, 1);
        let leapadj = ((wjd < this.gregorianToJd(year, 3, 1)) ? 0 : (this.isLeapGregorian(year) ? 1 : 2)
        );
        let month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        let day = (wjd - this.gregorianToJd(year, month, 1)) + 1;
        return new Array(year, month, day);
    }


    /**
     * Determine Julian day from Persian date
     * @param year
     * @param month
     * @param day
     * @returns {*}
     */
    persianToJd(year, month, day) {
        let epbase, epyear;
        epbase = year - ((year >= 0) ? 474 : 473);
        epyear = 474 + mod(epbase, 2820);
        return day + ((month <= 7) ? ((month - 1) * 31) : (((month - 1) * 30) + 6)
            ) + Math.floor(((epyear * 682) - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (PERSIAN_EPOCH - 1);
    }


    /**
     * Calculate Persian date from Julian day
     * @param jd
     * @returns {Array}
     */
    jdToPersian(jd) {
        let year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
        jd = Math.floor(jd) + 0.5;
        depoch = jd - this.persianToJd(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = mod(depoch, 1029983);
        if (cyear === 1029982) {
            ycycle = 2820;
        } else {
            aux1 = Math.floor(cyear / 366);
            aux2 = mod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if (year <= 0) {
            year -= 1;
        }
        yday = (jd - this.persianToJd(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.persianToJd(year, month, 1)) + 1;
        return new Array(year, month, day);
    }


    /**
     *
     * @param year
     * @param month
     * @param day
     * @returns {Array}
     */
    calcPersian(year, month, day) {
        let j = this.persianToJd(year, month, day),
            date = this.jdToGregorian(j);
        return new Array(date[0], date[1] - 1, date[2]);
    }


    /**
     * Perform calculation starting with a Gregorian date
     * @param year
     * @param month
     * @param day
     * @returns {Array}
     */
    calcGregorian(year, month, day) {
        //  Update Julian day
        let j = this.gregorianToJd(year, month + 1, day) + (Math.floor(0 + 60 * (0 + 60 * 0) + 0.5) / 86400.0),
            //  Update Persian Calendar
            perscal = this.jdToPersian(j), weekday = this.jwday(j);
        return new Array(perscal[0], perscal[1], perscal[2], weekday);
    }


    /**
     * Converts a gregorian date to Jalali date for different formats
     * @param gd
     * @returns {{}}
     */
    toPersianDate(gd) {

        // TODO: mus fix
        if (typeof gd == 'string') {
            gd = new Date(gd);
        }

        let pa = this.calcGregorian(gd.getFullYear(), gd.getMonth(), gd.getDate()),
            output = {};
        output.monthDayNumber = pa[2] - 1;
        if (pa[3] == 6) {
            output.weekDayNumber = 1;
        } else if (pa[3] == 5) {
            output.weekDayNumber = 0;
        } else if (pa[3] == 4) {
            output.weekDayNumber = 6;
        } else if (pa[3] == 3) {
            output.weekDayNumber = 5;
        } else if (pa[3] == 2) {
            output.weekDayNumber = 4;
        } else if (pa[3] == 1) {
            output.weekDayNumber = 3;
        } else if (pa[3] == 0) {
            output.weekDayNumber = 2;
        }
        output.year = pa[0];
        output.month = pa[1];
        output.day = output.weekDayNumber;
        output.date = pa[2];
        output.hours = gd.getHours();
        output.minutes = ((gd.getMinutes() < 10) ? ('0' + gd.getMinutes()) : (gd.getMinutes()));
        output.seconds = gd.getSeconds();
        output.milliseconds = gd.getMilliseconds();
        output.timeZoneOffset = gd.getTimezoneOffset();
        return output;
    }


    /**
     *
     * @param parray
     * @returns {Date}
     */
    persianArrayToGregorianDate(parray) {
        // Howha : javascript Cant Parse this array truly 2011,2,20
        let pd = this.calcPersian(parray[0] ? parray[0] : 0, parray[1] ? parray[1] : 1, parray[2] ? parray[2] : 1),
            gDate = new Date(pd[0], pd[1], pd[2]);
        gDate.setYear(pd[0]);
        gDate.setMonth(pd[1]);
        gDate.setDate(pd[2]);
        // TODO:
        gDate.setHours(parray[3] ? parray[3] : 0);
        gDate.setMinutes(parray[4] ? parray[4] : 0);
        gDate.setSeconds(parray[5] ? parray[5] : 0);
        gDate.setMilliseconds(parray[6] ? parray[6] : 0);

        return gDate;
    }


    /**
     *
     * @param pDate
     * @returns {array}
     */
    getPersianArrayFromPDate(pDate) {
        return [pDate.year, pDate.month, pDate.date, pDate.hours, pDate.minutes, pDate.seconds, pDate.milliseconds];
    }
}