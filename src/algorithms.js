// Start algorithm class
let ASTRO = require('./astro');
let State = require('./on');

let jalaali = require('./jalaali');

class Algorithms {
    constructor (parent) {
        this.parent = parent;
        this.ASTRO = new ASTRO();
        this.State = new State();
        this.J0000 = 1721424.5;                // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5;                // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5;                // Epoch of Modified Julian Date system
        this.NormLeap = [false/*"Normal year"*/, true/*"Leap year"*/];
        this.GREGORIAN_EPOCH = 1721425.5;
        this.PERSIAN_EPOCH = 1948320.5;
    }


    /**
     * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
     * @param year
     * @return {boolean}
     */
    leap_gregorian (year) {
        return ((year % 4) === 0) &&
          (!(((year % 100) === 0) && ((year % 400) !== 0)));
    }


    /**
     * @desc Determine Julian day number from Gregorian calendar date
     * @param {*} year
     * @param {*} month
     * @param {*} day
     */
    gregorian_to_jd (year, month, day) {
        return (this.GREGORIAN_EPOCH - 1) +
          (365 * (year - 1)) +
          Math.floor((year - 1) / 4) +
          (-Math.floor((year - 1) / 100)) +
          Math.floor((year - 1) / 400) +
          Math.floor((((367 * month) - 362) / 12) +
            ((month <= 2) ? 0 :
                (this.leap_gregorian(year) ? -1 : -2)
            ) +
            day);
    }


    /**
     * @desc Calculate Gregorian calendar date from Julian day
     * @param {*} jd
     */
    jd_to_gregorian (jd) {
        let wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,
          yindex, year, yearday, leapadj, month, day;

        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = this.ASTRO.mod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = this.ASTRO.mod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = this.ASTRO.mod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent === 4) || (yindex === 4))) {
            year++;
        }
        yearday = wjd - this.gregorian_to_jd(year, 1, 1);
        leapadj = ((wjd < this.gregorian_to_jd(year, 3, 1)) ? 0
            :
            (this.leap_gregorian(year) ? 1 : 2)
        );
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - this.gregorian_to_jd(year, month, 1)) + 1;

        return [year, month, day];
    }

    /**
     * @desc TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
     March equinox at the Tehran meridian in
     a given Gregorian year.
     * @param {*} year
     */
    tehran_equinox (year) {
        let equJED, equJD, equAPP, equTehran, dtTehran;

        //  March equinox in dynamical time
        equJED = this.ASTRO.equinox(year, 0);

        //  Correct for delta T to obtain Universal time
        equJD = equJED - (this.ASTRO.deltat(year) / (24 * 60 * 60));

        //  Apply the equation of time to yield the apparent time at Greenwich
        equAPP = equJD + this.ASTRO.equationOfTime(equJED);

        /*  Finally, we must correct for the constant difference between
         the Greenwich meridian andthe time zone standard for
         Iran Standard time, 52°30' to the East.  */

        dtTehran = (52 + (30 / 60.0) + (0 / (60.0 * 60.0))) / 360;
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
    tehran_equinox_jd (year) {
        let ep, epg;

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
    persiana_year (jd) {
        let guess = this.jd_to_gregorian(jd)[0] - 2,
          lasteq, nexteq, adr;

        lasteq = this.tehran_equinox_jd(guess);
        while (lasteq > jd) {
            guess--;
            lasteq = this.tehran_equinox_jd(guess);
        }
        nexteq = lasteq - 1;
        while (!((lasteq <= jd) && (jd < nexteq))) {
            lasteq = nexteq;
            guess++;
            nexteq = this.tehran_equinox_jd(guess);
        }
        adr = Math.round((lasteq - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1;

        return [adr, lasteq];
    }


    /**
     * @desc Obtain Julian day from a given Persian mathematical calendar date.
     * @param {*} year
     * @param {*} month
     * @param {*} day
     */
    persian_matematical_to_jd(year, month, day) {
        return jalaali.j2d(year, month, day)
    }


    /**
     * @desc Is a given year a leap year in the Persian matematical calendar ?
     * @param {*} year
     */
    leap_persian_matematical (year) {
      return jalaali.isLeapJalaaliYear(year)
    }


    jd_to_persian_matematical(jd) {
        const o = jalaali.d2j(jd)
        return [o.jy, o.jm, o.jd]
    }
    


    /**
     *
     * @param {*} weekday
     */
    gWeekDayToPersian (weekday) {
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
    updateFromGregorian () {
        let j, year, mon, mday, hour, min, sec,
          weekday, utime, perscal;

        year = this.State.gregorian.year;
        mon = this.State.gregorian.month;
        mday = this.State.gregorian.day;
        hour = 0;//this.State.gregorian.hour;
        min = 0;//this.State.gregorian.minute;
        sec = 0;//this.State.gregorian.second;

        this.State.gDate = new Date(
          year,
          mon,
          mday,
          this.State.gregorian.hour,
          this.State.gregorian.minute,
          this.State.gregorian.second,
          this.State.gregorian.millisecond
        );

        if (this.parent._utcMode === false) {
            this.State.zone = this.State.gDate.getTimezoneOffset();
        }


        // Added for this algorithms cant parse 2016,13,32 successfully
        this.State.gregorian.year = this.State.gDate.getFullYear();
        this.State.gregorian.month = this.State.gDate.getMonth();
        this.State.gregorian.day = this.State.gDate.getDate();

        //  Update Julian day
        // ---------------------------------------------------------------------------
        //j = this.gregorian_to_jd(year, mon + 1, mday) + (Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0);
        j = this.State.julianday


        this.State.julianday = j;
        this.State.modifiedjulianday = j - this.JMJD;

        //  Update day of week in Gregorian box
        // ---------------------------------------------------------------------------
        weekday = this.ASTRO.jwday(j);
        // Move to 1 indexed number
        this.State.gregorian.weekday = weekday + 1;

        //  Update leap year status in Gregorian box
        // ---------------------------------------------------------------------------
        this.State.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];

        weekday = this.ASTRO.jwday(j);

        if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'matematical') {
            perscal = this.jd_to_persian_matematical(j);
            this.State.persianMatematical.year = perscal[0];
            this.State.persianMatematical.month = perscal[1] - 1;
            this.State.persianMatematical.day = perscal[2];
            this.State.persianMatematical.weekday = this.gWeekDayToPersian(weekday);
            this.State.persianMatematical.leap = this.NormLeap[this.leap_persian_matematical(perscal[0]) ? 1 : 0];
        }

        //  Update Gregorian serial number
        // ---------------------------------------------------------------------------
        if (this.State.gregserial.day !== null) {
            this.State.gregserial.day = j - this.J0000;
        }


        //  Update Unix time()
        // ---------------------------------------------------------------------------
        utime = (j - this.J1970) * (60 * 60 * 24 * 1000);

        this.State.unixtime = Math.round(utime / 1000);
    }


    /**
     * @desc Perform calculation starting with a Gregorian date
     * @param {*} dateArray
     */
    calcGregorian (dateArray) {
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
    calcJulian () {
        let j, date;
        j = this.State.julianday;
        date = this.jd_to_gregorian(j);
        this.State.gregorian.year = date[0];
        this.State.gregorian.month = date[1] - 1;
        this.State.gregorian.day = date[2];
        //        this.State.gregorian.hour = this.pad(time[0], 2, " ");
        //        this.State.gregorian.minute = this.pad(time[1], 2, "0");
        //        this.State.gregorian.second = this.pad(time[2], 2, "0");
        this.updateFromGregorian();
    }


    /**
     * @desc Set Julian date and update all calendars
     * @param {*} j
     */
    setJulian (j) {
        this.State.julianday = j;
        this.calcJulian();
    }



    /**
     * @desc Update from Persian astronomical calendar
     * @param {*} dateArray
     */
    calcPersiana (dateArray) {
        if (dateArray[0] || dateArray[0] === 0) {
            this.State.persianAstro.year = dateArray[0];
        }
        if (dateArray[1] || dateArray[1] === 0) {
            this.State.persianAstro.month = dateArray[1];
        }
        if (dateArray[2] || dateArray[2] === 0) {
            this.State.persianAstro.day = dateArray[2];
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
        this.setJulian(
          this.persiana_to_jd(
            this.State.persianAstro.year,
            this.State.persianAstro.month,
            this.State.persianAstro.day + 0.5)
        );
    }

    calcPersianMatematical (dateArray) {
        if (dateArray[0] || dateArray[0] === 0) {
            this.State.persianMatematical.year = dateArray[0];
        }
        if (dateArray[1] || dateArray[1] === 0) {
            this.State.persianMatematical.month = dateArray[1];
        }
        if (dateArray[2] || dateArray[2] === 0) {
            this.State.persianMatematical.day = dateArray[2];
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
        this.setJulian(
          this.persian_matematical_to_jd(
            this.State.persianMatematical.year,
            this.State.persianMatematical.month,
            this.State.persianMatematical.day)
        );
    }
}


module.exports = Algorithms;
