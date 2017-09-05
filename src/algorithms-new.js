// Start algorithm class
let ASTRO = require('./astro');
let ON = require('./on');

class Algorithms {
    constructor () {

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
        this.J0000 = 1721424.5;                // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5;                // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5;                // Epoch of Modified Julian Date system
//        this.J1900 = 2415020.5;                // Epoch (day 1) of Excel 1900 date system (PC)
//        this.J1904 = 2416480.5;                // Epoch (day 0) of Excel 1904 date system (Mac)
        this.NormLeap = [false/*"Normal year"*/, true/*"Leap year"*/];
        // TODO END
        this.GREGORIAN_EPOCH = 1721425.5;
//        this.JULIAN_EPOCH = 1721423.5;
//        this.HEBREW_EPOCH = 347995.5;
        this.FRENCH_REVOLUTIONARY_EPOCH = 2375839.5;
        this.ISLAMIC_EPOCH = 1948439.5;
        this.PERSIAN_EPOCH = 1948320.5;
//        this.PERSIAN_WEEKDAYS = [
//            "Yekshanbeh",
//            "Doshanbeh",
//            "Seshhanbeh",
//            "Chaharshanbeh",
//            "Panjshanbeh",
//            "Jomeh",
//            "Shanbeh"];


//        this.setDateToToday();
//        this.calcGregorian();

        this.ISLAMIC_EPOCH = 1948320.5;
        this.ISLAMIC_WEEKDAYS = [
            "al-'ahad",
            "al-'ithnayn",
            "ath-thalatha'",
            "al-'arb`a'",
            "al-khamis",
            "al-jum`a",
            "as-sabt"];

//        this.MAYAN_COUNT_EPOCH = 584282.5;
//        this.MAYAN_HAAB_MONTHS = [
//            "Pop",
//            "Uo",
//            "Zip",
//            "Zotz",
//            "Tzec",
//            "Xul",
//            "Yaxkin",
//            "Mol",
//            "Chen",
//            "Yax",
//            "Zac",
//            "Ceh",
//            "Mac",
//            "Kankin",
//            "Muan",
//            "Pax",
//            "Kayab",
//            "Cumku",
//            "Uayeb"];


//        this.MAYAN_TZOLKIN_MONTHS = ["Imix", "Ik", "Akbal", "Kan", "Chicchan",
//            "Cimi", "Manik", "Lamat", "Muluc", "Oc",
//            "Chuen", "Eb", "Ben", "Ix", "Men",
//            "Cib", "Caban", "Etznab", "Cauac", "Ahau"];
//
//
//        this.INDIAN_CIVIL_WEEKDAYS = [
//            "ravivara", "somavara", "mangalavara", "budhavara",
//            "brahaspativara", "sukravara", "sanivara"];


    }


    /*  WEEKDAY_BEFORE  --  Return Julian date of given weekday (0 = Sunday)
     in the seven days ending on jd.  */
    weekday_before (weekday, jd) {
        return jd - this.ASTRO.jwday(jd - weekday);
    }


    /*  SEARCH_WEEKDAY  --  Determine the Julian date for:

     weekday      Day of week desired, 0 = Sunday
     jd           Julian date to begin search
     direction    1 = next weekday, -1 = last weekday
     offset       Offset from jd to begin search
     */

    search_weekday (weekday, jd, direction, offset) {
        return this.weekday_before(weekday, jd + (direction * offset));
    }

    /**
     * @desc Utility weekday functions, just wrappers for search_weekday
     * @param weekday
     * @param jd
     * @return {*}
     */
//    nearest_weekday (weekday, jd) {
//        return this.search_weekday(weekday, jd, 1, 3);
//    }

    next_weekday (weekday, jd) {
        return this.search_weekday(weekday, jd, 1, 7);
    }

//    next_or_current_weekday (weekday, jd) {
//        return this.search_weekday(weekday, jd, 1, 6);
//    }

    previous_weekday (weekday, jd) {
        return this.search_weekday(weekday, jd, -1, 1);
    }

//    previous_or_current_weekday (weekday, jd) {
//        return this.search_weekday(weekday, jd, 1, 0);
//    }

    /**
     * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
     * @param year
     * @return {boolean}
     */
    leap_gregorian (year) {
        return ((year % 4) == 0) &&
          (!(((year % 100) == 0) && ((year % 400) != 0)));
    }


//  GREGORIAN_TO_JD  --  Determine Julian day number from Gregorian calendar date
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


    //  JD_TO_GREGORIAN  --  Calculate Gregorian calendar date from Julian day
    jd_to_gregorian (jd) {
        var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,
          yindex, dyindex, year, yearday, leapadj, month, day;

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
        if (!((cent == 4) || (yindex == 4))) {
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


    //  ISO_TO_JULIAN  --  Return Julian day of given ISO year, week, and day
    n_weeks (weekday, jd, nthweek) {
        var j = 7 * nthweek;
        if (nthweek > 0) {
            j += this.previous_weekday(weekday, jd);
        } else {
            j += this.next_weekday(weekday, jd);
        }
        return j;
    }

    iso_to_julian (year, week, day) {
        return day + this.n_weeks(0, this.gregorian_to_jd(year - 1, 12, 28), week);
    }

    //  JD_TO_ISO  --  Return array of ISO (year, week, day) for Julian day
    jd_to_iso (jd) {
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
    iso_day_to_julian (year, day) {
        return (day - 1) + this.gregorian_to_jd(year, 1, 1);
    }


//  JD_TO_ISO_DAY  --  Return array of ISO (year, day_of_year) for Julian day
    jd_to_iso_day (jd) {
        var year, day;

        year = this.jd_to_gregorian(jd)[0];
        day = Math.floor(jd - this.gregorian_to_jd(year, 1, 1)) + 1;
        return [year, day];
    }


    /*  PAD  --  Pad a string to a given length with a given fill character.  */
    pad (str, howlong, padwith) {
        var s = str.toString();
        while (s.length < howlong) {
            s = padwith + s;
        }
        return s;
    }


    leap_julian (year) {
        return this.ASTRO.mod(year, 4) == ((year > 0) ? 0 : 3);
    }

    //  JULIAN_TO_JD  --  Determine Julian day number from Julian calendar date
    julian_to_jd (year, month, day) {
        /* Adjust negative common era years to the zero-based notation we use.  */
        if (year < 1) {
            year++;
        }
        /* Algorithm as given in Meeus, Astronomical Algorithms, Chapter 7, page 61 */
        if (month <= 2) {
            year--;
            month += 12;
        }
        return ((Math.floor((365.25 * (year + 4716))) +
        Math.floor((30.6001 * (month + 1))) +
        day) - 1524.5);
    }


    //  JD_TO_JULIAN  --  Calculate Julian calendar date from Julian day
    jd_to_julian (td) {
        var z, a, alpha, b, c, d, e, year, month, day;

        td += 0.5;
        z = Math.floor(td);

        a = z;
        b = a + 1524;
        c = Math.floor((b - 122.1) / 365.25);
        d = Math.floor(365.25 * c);
        e = Math.floor((b - d) / 30.6001);

        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
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
//    hebrew_leap (year) {
//        return this.ASTRO.mod(((year * 7) + 1), 19) < 7;
//    }


    //  How many months are there in a Hebrew year (12 = normal, 13 = leap)
//    hebrew_year_months (year) {
//        return this.hebrew_leap(year) ? 13 : 12;
//    }


    //  Test for delay of start of new year and to avoid
    //  Sunday, Wednesday, and Friday as start of the new year.
//    hebrew_delay_1 (year) {
//        var months, days, parts;
//
//        months = Math.floor(((235 * year) - 234) / 19);
//        parts = 12084 + (13753 * months);
//        day = (months * 29) + Math.floor(parts / 25920);
//
//        if (mod((3 * (day + 1)), 7) < 3) {
//            day++;
//        }
//        return day;
//    }

//  Check for delay in start of new year due to length of adjacent years
//    hebrew_delay_2 (year) {
//        var last, present, next;
//
//        last = this.hebrew_delay_1(year - 1);
//        present = this.hebrew_delay_1(year);
//        next = this.hebrew_delay_1(year + 1);
//
//        return ((next - present) == 356) ? 2 :
//          (((present - last) == 382) ? 1 : 0);
//    }


    //  How many days are in a Hebrew year ?
//    hebrew_year_days (year) {
//        return this.hebrew_to_jd(year + 1, 7, 1) - this.hebrew_to_jd(year, 7, 1);
//    }


    //  How many days are in a given month of a given year
//    hebrew_month_days (year, month) {
//        //  First of all, dispose of fixed-length 29 day months
//
//        if (month == 2 || month == 4 || month == 6 ||
//          month == 10 || month == 13) {
//            return 29;
//        }
//
//        //  If it's not a leap year, Adar has 29 days
//
//        if (month == 12 && !this.hebrew_leap(year)) {
//            return 29;
//        }
//
//        //  If it's Heshvan, days depend on length of year
//
//        if (month == 8 && !(mod(this.hebrew_year_days(year), 10) == 5)) {
//            return 29;
//        }
//
//        //  Similarly, Kislev varies with the length of year
//
//        if (month == 9 && (mod(this.hebrew_year_days(year), 10) == 3)) {
//            return 29;
//        }
//
//        //  Nope, it's a 30 day month
//
//        return 30;
//    }

    //  HEBREW_TO_JD  --  Determine Julian day from Hebrew date
    //  Finally, wrap it all up into...
//    hebrew_to_jd (year, month, day) {
//        var jd, mon, months;
//
//        months = this.hebrew_year_months(year);
//        jd = this.HEBREW_EPOCH + this.hebrew_delay_1(year) +
//          this.hebrew_delay_2(year) + day + 1;
//
//        if (month < 7) {
//            for (mon = 7; mon <= months; mon++) {
//                jd += this.hebrew_month_days(year, mon);
//            }
//            for (mon = 1; mon < month; mon++) {
//                jd += this.hebrew_month_days(year, mon);
//            }
//        } else {
//            for (mon = 7; mon < month; mon++) {
//                jd += this.hebrew_month_days(year, mon);
//            }
//        }
//
//        return jd;
//    }


    /*  JD_TO_HEBREW  --  Convert Julian date to Hebrew date
     This works by making multiple calls to
     the inverse function, and is this very
     slow.  */

//    jd_to_hebrew (jd) {
//        var year, month, day, i, count, first;
//
//        jd = Math.floor(jd) + 0.5;
//        count = Math.floor(((jd - this.HEBREW_EPOCH) * 98496.0) / 35975351.0);
//        year = count - 1;
//        for (i = count; jd >= this.hebrew_to_jd(i, 7, 1); i++) {
//            year++;
//        }
//        first = (jd < this.hebrew_to_jd(year, 1, 1)) ? 7 : 1;
//        month = first;
//        for (i = first; jd > this.hebrew_to_jd(year, i, this.hebrew_month_days(year, i)); i++) {
//            month++;
//        }
//        day = (jd - this.hebrew_to_jd(year, month, 1)) + 1;
//        return [year, month, day];
//    }


    /*  EQUINOXE_A_PARIS  --  Determine Julian day and fraction of the
     September equinox at the Paris meridian in
     a given Gregorian year.  */
//
//    equinoxe_a_paris (year) {
//        var equJED, equJD, equAPP, equParis, dtParis;
//
//        //  September equinox in dynamical time
//        equJED = this.ASTRO.equinox(year, 2);
//
//        //  Correct for delta T to obtain Universal time
//        equJD = equJED - (this.ASTRO.deltat(year) / (24 * 60 * 60));
//
//        //  Apply the equation of time to yield the apparent time at Greenwich
//        equAPP = equJD + this.ASTRO.equationOfTime(equJED);
//
//        /*  Finally, we must correct for the constant difference between
//         the Greenwich meridian and that of Paris, 2°20'15" to the
//         East.  */
//
//        dtParis = (2 + (20 / 60.0) + (15 / (60 * 60.0))) / 360;
//        equParis = equAPP + dtParis;
//
//        return equParis;
//    }


    /*  PARIS_EQUINOXE_JD  --  Calculate Julian day during which the
     September equinox, reckoned from the Paris
     meridian, occurred for a given Gregorian
     year.  */
//
//    paris_equinoxe_jd (year) {
//        var ep, epg;
//
//        ep = this.equinoxe_a_paris(year);
//        epg = Math.floor(ep - 0.5) + 0.5;
//
//        return epg;
//    }


    /*  ANNEE_DE_LA_REVOLUTION  --  Determine the year in the French
     revolutionary calendar in which a
     given Julian day falls.  Returns an
     array of two elements:

     [0]  Année de la Révolution
     [1]  Julian day number containing
     equinox for this year.
     */
//    annee_da_la_revolution (jd) {
//        var guess = this.jd_to_gregorian(jd)[0] - 2,
//          lasteq, nexteq, adr;
//
//        lasteq = this.paris_equinoxe_jd(guess);
//        while (lasteq > jd) {
//            guess--;
//            lasteq = this.paris_equinoxe_jd(guess);
//        }
//        nexteq = lasteq - 1;
//        while (!((lasteq <= jd) && (jd < nexteq))) {
//            lasteq = nexteq;
//            guess++;
//            nexteq = this.paris_equinoxe_jd(guess);
//        }
//        adr = Math.round((lasteq - this.FRENCH_REVOLUTIONARY_EPOCH) / this.ASTRO.TropicalYear) + 1;
//
//        return [adr, lasteq];
//    }


    /*  JD_TO_FRENCH_REVOLUTIONARY  --  Calculate date in the French Revolutionary
     calendar from Julian day.  The five or six
     "sansculottides" are considered a thirteenth
     month in the results of this function.  */

//    jd_to_french_revolutionary (jd) {
//        var an, mois, decade, jour,
//          adr, equinoxe;
//
//        jd = Math.floor(jd) + 0.5;
//        adr = this.annee_da_la_revolution(jd);
//        an = adr[0];
//        equinoxe = adr[1];
//        mois = Math.floor((jd - equinoxe) / 30) + 1;
//        jour = (jd - equinoxe) % 30;
//        decade = Math.floor(jour / 10) + 1;
//        jour = (jour % 10) + 1;
//
//        return [an, mois, decade, jour];
//    }


    /*  FRENCH_REVOLUTIONARY_TO_JD  --  Obtain Julian day from a given French
     Revolutionary calendar date.  */

//    french_revolutionary_to_jd (an, mois, decade, jour) {
//        var adr, equinoxe, guess, jd;
//
//        guess = this.FRENCH_REVOLUTIONARY_EPOCH + (this.ASTRO.TropicalYear * ((an - 1) - 1));
//        adr = [an - 1, 0];
//
//        while (adr[0] < an) {
//            adr = this.annee_da_la_revolution(guess);
//            guess = adr[1] + (this.ASTRO.TropicalYear + 2);
//        }
//        equinoxe = adr[1];
//
//        jd = equinoxe + (30 * (mois - 1)) + (10 * (decade - 1)) + (jour - 1);
//        return jd;
//    }


    //  LEAP_ISLAMIC  --  Is a given year a leap year in the Islamic calendar ?
//    leap_islamic (year) {
//        return (((year * 11) + 14) % 30) < 11;
//    }


    //  ISLAMIC_TO_JD  --  Determine Julian day from Islamic date
//    islamic_to_jd (year, month, day) {
//        return (day +
//          Math.ceil(29.5 * (month - 1)) +
//          (year - 1) * 354 +
//          Math.floor((3 + (11 * year)) / 30) +
//          this.ISLAMIC_EPOCH) - 1;
//    }


    //  JD_TO_ISLAMIC  --  Calculate Islamic date from Julian day
//    jd_to_islamic (jd) {
//        var year, month, day;
//
//        jd = Math.floor(jd) + 0.5;
//        year = Math.floor(((30 * (jd - this.ISLAMIC_EPOCH)) + 10646) / 10631);
//        month = Math.min(12,
//          Math.ceil((jd - (29 + this.islamic_to_jd(year, 1, 1))) / 29.5) + 1);
//        day = (jd - this.islamic_to_jd(year, month, 1)) + 1;
//        return [year, month, day];
//    }


    /*  TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
     March equinox at the Tehran meridian in
     a given Gregorian year.  */

    tehran_equinox (year) {
        var equJED, equJD, equAPP, equTehran, dtTehran;

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


    /*  TEHRAN_EQUINOX_JD  --  Calculate Julian day during which the
     March equinox, reckoned from the Tehran
     meridian, occurred for a given Gregorian
     year.  */

    tehran_equinox_jd (year) {
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
    persiana_year (jd) {
        var guess = this.jd_to_gregorian(jd)[0] - 2,
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


    /*  JD_TO_PERSIANA  --  Calculate date in the Persian astronomical
     calendar from Julian day.  */

    jd_to_persiana (jd) {
        var year, month, day,
          adr, equinox, yday;

        jd = Math.floor(jd) + 0.5;
        adr = this.persiana_year(jd);
        year = adr[0];
        equinox = adr[1];
        day = Math.floor((jd - equinox) / 30) + 1;

        yday = (Math.floor(jd) - this.persiana_to_jd(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (Math.floor(jd) - this.persiana_to_jd(year, month, 1)) + 1;

        return [year, month, day];
    }


    /*  PERSIANA_TO_JD  --  Obtain Julian day from a given Persian
     astronomical calendar date.  */

    persiana_to_jd (year, month, day) {
        var adr, equinox, guess, jd;

        guess = (this.PERSIAN_EPOCH - 1) + (this.ASTRO.TropicalYear * ((year - 1) - 1));
        adr = [year - 1, 0];

        while (adr[0] < year) {
            adr = this.persiana_year(guess);
            guess = adr[1] + (this.ASTRO.TropicalYear + 2);
        }
        equinox = adr[1];

        jd = equinox +
          ((month <= 7) ?
              ((month - 1) * 31) :
              (((month - 1) * 30) + 6)
          ) +
          (day - 1);
        return jd;
    }


    /*  LEAP_PERSIANA  --  Is a given year a leap year in the Persian
     astronomical calendar ?  */
    leap_persiana (year) {
        return (this.persiana_to_jd(year + 1, 1, 1) -
          this.persiana_to_jd(year, 1, 1)) > 365;
    }

//  LEAP_PERSIAN  --  Is a given year a leap year in the Persian calendar ?
    leap_persian (year) {
        return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }


//  PERSIAN_TO_JD  --  Determine Julian day from Persian date
    persian_to_jd (year, month, day) {
        var epbase, epyear;

        epbase = year - ((year >= 0) ? 474 : 473);
        epyear = 474 + this.ASTRO.mod(epbase, 2820);

        return day +
          ((month <= 7) ?
              ((month - 1) * 31) :
              (((month - 1) * 30) + 6)
          ) +
          Math.floor(((epyear * 682) - 110) / 2816) +
          (epyear - 1) * 365 +
          Math.floor(epbase / 2820) * 1029983 +
          (this.PERSIAN_EPOCH - 1);
    }

//  JD_TO_PERSIAN  --  Calculate Persian date from Julian day
    jd_to_persian (jd) {
        var year, month, day, depoch, cycle, cyear, ycycle,
          aux1, aux2, yday;


        jd = Math.floor(jd) + 0.5;

        depoch = jd - this.persian_to_jd(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = this.ASTRO.mod(depoch, 1029983);
        if (cyear == 1029982) {
            ycycle = 2820;
        } else {
            aux1 = Math.floor(cyear / 366);
            aux2 = this.ASTRO.mod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
              aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if (year <= 0) {
            year--;
        }
        yday = (jd - this.persian_to_jd(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.persian_to_jd(year, month, 1)) + 1;
        return [year, month, day];
    }


//  MAYAN_COUNT_TO_JD  --  Determine Julian day from Mayan long count
//    mayan_count_to_jd (baktun, katun, tun, uinal, kin) {
//        return this.MAYAN_COUNT_EPOCH +
//          (baktun * 144000) +
//          (katun * 7200) +
//          (tun * 360) +
//          (uinal * 20) +
//          kin;
//    }

//  JD_TO_MAYAN_COUNT  --  Calculate Mayan long count from Julian day
//    jd_to_mayan_count (jd) {
//        var d, baktun, katun, tun, uinal, kin;
//
//        jd = Math.floor(jd) + 0.5;
//        d = jd - this.MAYAN_COUNT_EPOCH;
//        baktun = Math.floor(d / 144000);
//        d = this.ASTRO.mod(d, 144000);
//        katun = Math.floor(d / 7200);
//        d = this.ASTRO.mod(d, 7200);
//        tun = Math.floor(d / 360);
//        d = this.ASTRO.mod(d, 360);
//        uinal = Math.floor(d / 20);
//        kin = this.ASTRO.mod(d, 20);
//
//        return [baktun, katun, tun, uinal, kin];
//    }


//  JD_TO_MAYAN_HAAB  --  Determine Mayan Haab "month" and day from Julian day
//    jd_to_mayan_haab (jd) {
//        var lcount, day;
//
//        jd = Math.floor(jd) + 0.5;
//        lcount = jd - this.MAYAN_COUNT_EPOCH;
//        day = this.ASTRO.mod(lcount + 8 + ((18 - 1) * 20), 365);
//
//        return [Math.floor(day / 20) + 1, this.ASTRO.mod(day, 20)];
//    }


//  JD_TO_MAYAN_TZOLKIN  --  Determine Mayan Tzolkin "month" and day from Julian day
//    jd_to_mayan_tzolkin (jd) {
//        var lcount;
//
//        jd = Math.floor(jd) + 0.5;
//        lcount = jd - this.MAYAN_COUNT_EPOCH;
//        return [this.ASTRO.amod(lcount + 20, 20), this.ASTRO.amod(lcount + 4, 13)];
//    }


//  INDIAN_CIVIL_TO_JD  --  Obtain Julian day for Indian Civil date
//    indian_civil_to_jd (year, month, day) {
//        var Caitra, gyear, leap, start, jd, m;
//
//        gyear = year + 78;
//        leap = this.leap_gregorian(gyear);     // Is this a leap year ?
//        start = this.gregorian_to_jd(gyear, 3, leap ? 21 : 22);
//        Caitra = leap ? 31 : 30;
//
//        if (month == 1) {
//            jd = start + (day - 1);
//        } else {
//            jd = start + Caitra;
//            m = month - 2;
//            m = Math.min(m, 5);
//            jd += m * 31;
//            if (month >= 8) {
//                m = month - 7;
//                jd += m * 30;
//            }
//            jd += day - 1;
//        }
//
//        return jd;
//    }


//  JD_TO_INDIAN_CIVIL  --  Calculate Indian Civil date from Julian day
//    jd_to_indian_civil (jd) {
//        var Caitra, Saka, greg, greg0, leap, start, year, yday, mday;
//
//        Saka = 79 - 1;                    // Offset in years from Saka era to Gregorian epoch
//        start = 80;                       // Day offset between Saka and Gregorian
//
//        jd = Math.floor(jd) + 0.5;
//        greg = this.jd_to_gregorian(jd);       // Gregorian date for Julian day
//        leap = this.leap_gregorian(greg[0]);   // Is this a leap year?
//        year = greg[0] - Saka;            // Tentative year in Saka era
//        greg0 = this.gregorian_to_jd(greg[0], 1, 1); // JD at start of Gregorian year
//        yday = jd - greg0;                // Day number (0 based) in Gregorian year
//        Caitra = leap ? 31 : 30;          // Days in Caitra this year
//
//        if (yday < start) {
//            //  Day is at the end of the preceding Saka year
//            year--;
//            yday += Caitra + (31 * 5) + (30 * 3) + 10 + start;
//        }
//
//        yday -= start;
//        if (yday < Caitra) {
//            month = 1;
//            day = yday + 1;
//        } else {
//            mday = yday - Caitra;
//            if (mday < (31 * 5)) {
//                month = Math.floor(mday / 31) + 2;
//                day = (mday % 31) + 1;
//            } else {
//                mday -= 31 * 5;
//                month = Math.floor(mday / 30) + 7;
//                day = (mday % 30) + 1;
//            }
//        }
//
//        return [year, month, day];
//    }

    gWeekDayToPersian (weekday) {
        if (weekday + 2 === 8) {
            return 1;
        } else if (weekday + 2 === 7) {
            return 7;
        } else {
            return weekday + 2;
        }

    }


    /*  updateFromGregorian  --  Update all calendars from Gregorian.
     "Why not Julian date?" you ask.  Because
     starting from Gregorian guarantees we're
     already snapped to an integral second, so
     we don't get roundoff errors in other
     calendars.  */
    // TODO: Modified by me code structure totally changed
    updateFromGregorian () {
        var j, year, mon, mday, hour, min, sec,
          weekday, julcal, hebcal, islcal, hmindex, utime, isoweek,
          may_countcal, mayhaabcal, maytzolkincal, frrcal,
          indcal, isoday, xgregcal, perscal;


        year = this.ON.gregorian.year;
        mon = this.ON.gregorian.month;
        mday = this.ON.gregorian.day;
        hour = 0;//this.ON.gregorian.hour;
        min = 0;//this.ON.gregorian.minute;
        sec = 0;//this.ON.gregorian.second;

        this.ON.gDate = new Date(
          year,
          mon,
          mday,
          this.ON.gregorian.hour,
          this.ON.gregorian.minute,
          this.ON.gregorian.second,
          this.ON.gregorian.millisecond
        );


        //  Update Julian day
        // ---------------------------------------------------------------------------
        j = this.gregorian_to_jd(year, mon + 1, mday) +
          (Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0);

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
//
//
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
//        islcal = this.jd_to_islamic(j);
//
//        this.ON.islamic.year = islcal[0];
//        this.ON.islamic.month = islcal[1] - 1;
//        this.ON.islamic.day = islcal[2];
//        this.ON.islamic.weekday = "yawm " + this.ISLAMIC_WEEKDAYS[weekday];
//        this.ON.islamic.leap = this.NormLeap[this.leap_islamic(islcal[0]) ? 1 : 0];

        //  Update Persian Calendar
        // ---------------------------------------------------------------------------
        perscal = this.jd_to_persian(j);
        this.ON.persian.year = perscal[0];
        this.ON.persian.month = perscal[1] - 1;
        this.ON.persian.day = perscal[2];
        this.ON.persian.weekday = this.gWeekDayToPersian(weekday);
        this.ON.persian.leap = this.NormLeap[this.leap_persian(perscal[0]) ? 1 : 0];

        //  Update Persian Astronomical Calendar
        // ---------------------------------------------------------------------------
        perscal = this.jd_to_persiana(j);
        this.ON.persianAstro.year = perscal[0];
        this.ON.persianAstro.month = perscal[1] - 1;
        this.ON.persianAstro.day = perscal[2];
        this.ON.persianAstro.weekday = this.gWeekDayToPersian(weekday);
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
        if (this.ON.gregserial.day != null) {
            this.ON.gregserial.day = j - this.J0000;
        }

        //  Update Excel 1900 and 1904 day serial numbers
        // ---------------------------------------------------------------------------

//        this.ON.excelserial1900.day = (j - this.J1900) + 1 +
//          /*  Microsoft marching morons thought 1900 was a leap year.
//           Adjust dates after 1900-02-28 to compensate for their
//           idiocy.  */
//          ((j > 2415078.5) ? 1 : 0)
//        ;
//
//        this.ON.excelserial1904.day = j - this.J1904;

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
    calcGregorian (dateArray) {
        if (dateArray[0]) {
            this.ON.gregorian.year = dateArray[0];
        }
        if (dateArray[1]) {
            this.ON.gregorian.month = dateArray[1];
        }
        if (dateArray[2]) {
            this.ON.gregorian.day = dateArray[2];
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
        this.updateFromGregorian();
    }

//  calcJulian  --  Perform calculation starting with a Julian date
    calcJulian () {
        var j, date, time;

        j = new Number(this.ON.julianday);
        date = this.jd_to_gregorian(j);
        time = this.ASTRO.jhms(j);

        this.ON.gregorian.year = date[0];
        this.ON.gregorian.month = date[1] - 1;
        this.ON.gregorian.day = date[2];
//        this.ON.gregorian.hour = this.pad(time[0], 2, " ");
//        this.ON.gregorian.minute = this.pad(time[1], 2, "0");
//        this.ON.gregorian.second = this.pad(time[2], 2, "0");
        this.updateFromGregorian();
    }

//  setJulian  --  Set Julian date and update all calendars
    setJulian (j) {
        this.ON.julianday = new Number(j);
        this.calcJulian();
    }


//  calcPersian  --  Update from Persian calendar
    calcPersian (dateArray) {
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

        this.setJulian(
          this.persian_to_jd(
            this.ON.persian.year,
            this.ON.persian.month,
            this.ON.persian.day)
        );
    }

//  calcPersiana  --  Update from Persian astronomical calendar
    calcPersiana (dateArray) {
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

        this.setJulian(
          this.persiana_to_jd(
            this.ON.persianAstro.year,
            this.ON.persianAstro.month,
            this.ON.persianAstro.day + 0.5)
        );
    }


//  calcGregSerial  --  Update from Gregorian serial day number
    calcGregSerial () {
        this.setJulian((new Number(document.gregserial.day.value)) + J0000);
    }


//  calcIsoWeek  --  Update from specified ISO year, week, and day
    calcIsoWeek () {
        var year = new Number(document.isoweek.year.value),
          week = new Number(document.isoweek.week.value),
          day = new Number(document.isoweek.day.value);

        this.setJulian(this.iso_to_julian(year, week, day));
    }

//  calcIsoDay  --  Update from specified ISO year and day of year
    calcIsoDay () {
        var year = new Number(document.isoday.year.value),
          day = new Number(document.isoday.day.value);

        this.setJulian(this.iso_day_to_julian(year, day));
    }


//    /*  setDateToToday  --  Preset the fields in
//     the request form to today's date.  */
//    setDateToToday () {
//        var today = new Date();
//
//        /*  The following idiocy is due to bizarre incompatibilities
//         in the behaviour of getYear() between Netscrape and
//         Exploder.  The ideal solution is to use getFullYear(),
//         which returns the actual year number, but that would
//         break this code on versions of JavaScript prior to
//         1.2.  So, for the moment we use the following code
//         which works for all versions of JavaScript and browsers
//         for all year numbers greater than 1000.  When we're willing
//         to require JavaScript 1.2, this may be replaced by
//         the single line:
//
//         document.gregorian.year.value = today.getFullYear();
//
//         Thanks to Larry Gilbert for pointing out this problem.
//         */
//
//        var y = today.getYear();
//        if (y < 1000) {
//            y += 1900;
//        }
//
//        this.ON.gregorian = {
//            year: y,
//            month: today.getMonth(),
//            day: today.getDate(),
//            hour: 0,
//            minute: 0,
//            second: 0,
//            millisecond: 0,
//        };
//    }
//

//  calcModifiedJulian  --  Update from Modified Julian day
//    calcModifiedJulian () {
//        this.setJulian((new Number(document.modifiedjulianday.day.value)) + this.JMJD);
//    }

//  calcJulianCalendar  --  Update from Julian calendar
//    calcJulianCalendar () {
//        this.setJulian(this.julian_to_jd((new Number(document.juliancalendar.year.value)),
//          document.juliancalendar.month.selectedIndex + 1,
//          (new Number(document.juliancalendar.day.value))));
//    }

//  calcHebrew  --  Update from Hebrew calendar
//    calcHebrew () {
//        this.setJulian(this.hebrew_to_jd((new Number(document.hebrew.year.value)),
//          document.hebrew.month.selectedIndex + 1,
//          (new Number(document.hebrew.day.value))));
//    }

//  calcIslamic  --  Update from Islamic calendar
//    calcIslamic () {
//        this.setJulian(this.islamic_to_jd((new Number(document.islamic.year.value)),
//          document.islamic.month.selectedIndex + 1,
//          (new Number(document.islamic.day.value))));
//    }

//  calcMayanCount  --  Update from the Mayan Long Count
//    calcMayanCount () {
//        this.setJulian(this.mayan_count_to_jd((new Number(document.mayancount.baktun.value)),
//          (new Number(document.mayancount.katun.value)),
//          (new Number(document.mayancount.tun.value)),
//          (new Number(document.mayancount.uinal.value)),
//          (new Number(document.mayancount.kin.value))));
//    }

//  calcIndianCivilCalendar  --  Update from Indian Civil Calendar
//    calcIndianCivilCalendar () {
//        this.setJulian(this.indian_civil_to_jd(
//          (new Number(document.indiancivilcalendar.year.value)),
//          document.indiancivilcalendar.month.selectedIndex + 1,
//          (new Number(document.indiancivilcalendar.day.value))));
//    }

//  calcFrench  -- Update from French Republican calendar
//    calcFrench () {
//        var decade, j, mois;
//
//        j = document.french.jour.selectedIndex;
//        decade = document.french.decade.selectedIndex;
//        mois = document.french.mois.selectedIndex;
//
//        /*  If the currently selected day is one of the sansculottides,
//         adjust the index to be within that period and force the
//         decade to zero and the month to 12, designating the
//         intercalary interval.  */
//
//        if (j > 9) {
//            j -= 11;
//            decade = 0;
//            mois = 12;
//        }
//
//        /*  If the selected month is the pseudo-month of the five or
//         six sansculottides, ensure that the decade is 0 and the day
//         number doesn't exceed six.  To avoid additional overhead, we
//         don't test whether a day number of 6 is valid for this year,
//         but rather simply permit it to wrap into the first day of
//         the following year if this is a 365 day year.  */
//
//        if (mois == 12) {
//            decade = 0;
//            if (j > 5) {
//                j = 0;
//            }
//        }
//
//        this.setJulian(this.french_revolutionary_to_jd((new Number(document.french.an.value)),
//          mois + 1,
//          decade + 1,
//          j + 1));
//    }

//  calcExcelSerial1900  --  Perform calculation starting with an Excel 1900 serial date
//    calcExcelSerial1900 () {
//        var d = new Number(document.excelserial1900.day.value);
//
//        /* Idiot Kode Kiddies didn't twig to the fact
//         (proclaimed in 1582) that 1900 wasn't a leap year,
//         so every Excel day number in every database on Earth
//         which represents a date subsequent to February 28,
//         1900 is off by one.  Note that there is no
//         acknowledgement of this betrayal or warning of its
//         potential consequences in the Excel help file.  Thank
//         you so much Mister Talking Paper Clip.  Some day
//         we're going to celebrate your extinction like it was
//         February 29 ... 1900.  */
//
//        if (d > 60) {
//            d--;
//        }
//
//        this.setJulian((d - 1) + this.J1900);
//    }

//  calcExcelSerial1904  --  Perform calculation starting with an Excel 1904 serial date
//    calcExcelSerial1904 () {
//        this.setJulian((new Number(document.excelserial1904.day.value)) + this.J1904);
//    }

//  calcUnixTime  --  Update from specified Unix time() value
//    calcUnixTime () {
//        var t = new Number(document.unixtime.time.value);
//
//        this.setJulian(this.J1970 + (t / (60 * 60 * 24)));
//    }

}


module.exports = Algorithms;
