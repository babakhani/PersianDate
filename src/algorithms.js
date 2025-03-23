let State = require('./on');
let jalaali = require('./jalaali');


class Algorithms {
    constructor (parent) {
        this.parent = parent;
        this.State = new State();
        this.J0000 = 1721424.5;                // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5;                // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5;                // Epoch of Modified Julian Date system
        this.NormLeap = [false/*"Normal year"*/, true/*"Leap year"*/];
        this.GREGORIAN_EPOCH = 1721425.5;
    }

    /**
     *
     * @param j
     * @return {number}
     */
    jwday (j) {
        return this.mod(Math.floor((j + 1.5)), 7);
    }

    div(a, b) {
      return ~~(a / b);
    }
    
    mod(a, b) {
      return a - ~~(a / b) * b;
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
     * @desc Is a given year a leap year in the Persian matematical calendar ?
     * @param {*} year
     */
    leap_persian_matematical (year) {
      return jalaali.isLeapJalaaliYear(year);
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
        let j, year, mon, mday, weekday, utime, perscal;

        year = this.State.gregorian.year;
        mon =  this.State.gregorian.month;
        mday = this.State.gregorian.day;

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
            const o = jalaali.d2j(j);
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
        let o = jalaali.d2g(j);
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
    setJulian (j) {
        this.State.julianday = j;
        this.calcJulian();
    }

    calcPersianMatematical (dateArray) {
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
        this.setJulian(
          jalaali.j2d(
            this.State.persian.year,
            this.State.persian.month,
            this.State.persian.day)
        );
    }
}


module.exports = Algorithms;
