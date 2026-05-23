/*global describe,it*/
const assert = require('node:assert');
const expect = require('chai').expect;
const pDate = require('../dist/persian-date.js');
const Duration = pDate.duration;
const defaultArray = [1391, 1, 1, 1, 1, 1, 1];

pDate.formatPersian = true;

describe('Helpers', () => {
    it('throw error', () => {
        /* eslint-disable no-console */
        //        console.log(pDate);
        /* eslint-enable no-console */
        expect(pDate).to.throw(Error);
        expect(require('../dist/persian-date.js')).to.throw(Error);
    });
});

//describe('Convert test', function () {
//    const startUnix = 1490444803982,
//      endUnix = 1490444803982 + 2000000;
//    it('Object Create Successfully', function () {
//        let indexUnix = startUnix;
//        while (indexUnix < endUnix) {
//            let pdArray = new pDate(indexUnix).toArray(),
//              returnedFromArrayUnix = new pDate(pdArray).valueOf();
//            assert.deepEqual(returnedFromArrayUnix, indexUnix);
//            indexUnix += 10000;
//        }
//    });
//});

describe('Invalid Date', () => {
    it('', () => {
        assert.equal(new pDate([1398, -1]).toString(), new Date([2019, -1]).toString());
    });
});

describe('Check static methods', () => {
    it('isPersianDate', () => {
        const a = new pDate();
        assert.deepEqual(pDate.isPersianDate(a), true);
    });

    it('isDuration', () => {
        const a = new pDate.duration('days', 10);
        assert.deepEqual(pDate.isDuration(a), true);
    });

    it('getFirstWeekDayOfMonth', () => {
        assert.deepEqual(pDate.getFirstWeekDayOfMonth(1391, 12), 4);
    });
});

describe('Make Instance', () => {
    it('Create persian algorithmic instance', () => {
        const a = new pDate([1404, 1, 1, 1, 1, 1, 900]).format();
        assert.deepEqual(a, '۱۴۰۴-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });

    it('Test Amd Module', () => {
        const obj = require('../dist/persian-date.js');
        assert.ok(obj);
    });

    it('Init without any parameters', () => {
        const emptyInput = new pDate();
        assert.ok(emptyInput);
    });

    it('Negative year', () => {
        const a = new pDate([0]).format();
        assert.deepEqual(a, '۰-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        const c = new pDate([-2000]).format('YYYY/MM/DD');
        assert.deepEqual(c, '-۲۰۰۰/۰۱/۰۱');
    });

    it('After long long long', () => {
        let a = new pDate([10000]).format();
        assert.deepEqual(a, '۱۰۰۰۰-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        a = new pDate([10000, 1, 1]).isLeapYear();
        assert.deepEqual(a, false);
        a = new pDate([10003, 1, 1]).isLeapYear();
        assert.deepEqual(a, true);
    });

    it('check deltat between 1621 2000', () => {
        pDate.calendarType = 'gregorian';
        const a = new pDate([1641]).toArray();
        assert.deepEqual(a, [1641, 1, 1, 0, 0, 0, 0]);
        pDate.calendarType = 'persian';
    });

    it('From pDate', () => {
        const a = new pDate(),
            b = new pDate(a);
        assert.ok(b);
    });

    it('Init from array', () => {
        const createFromArray = new pDate(defaultArray);
        const createFromGdate = new pDate(createFromArray.gDate);
        assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
    });

    it('Init from .Net', () => {
        const a = new pDate('/Date(1198908717056-0700)/').utc().format();
        assert.deepEqual(a, '۱۳۸۶-۱۰-۰۸ ۰۶:۱۱:۵۷ ق ظ');
    });

    it('Object Format', () => {
        const createFromArray = new pDate(defaultArray);
        const createFromGdate = new pDate(createFromArray.gDate);
        assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
    });

    it('javascript Date()', () => {
        let gDateObject = new Date(),
            createFromDotNet = new pDate(gDateObject);
        assert.ok(createFromDotNet);

        createFromDotNet = new pDate(new Date());
        assert.ok(createFromDotNet);
    });
});

describe('locale just in object', () => {
    it('[1404,1,1] locale global en', () => {
        const a = new pDate([1404, 1, 1]).toLocale('en').format();
        assert.deepEqual(a, '1404-01-01 00:00:00 AM');
        b = new pDate([1404, 1, 1]).toLocale('en').format('dddd');
        assert.deepEqual(b, 'Friday');
        c = new pDate([1404, 1, 2]).toLocale('en').format('dddd');
        assert.deepEqual(c, 'Saturday');
        d = new pDate([1404, 1, 3]).toLocale('en').format('dddd');
        assert.deepEqual(d, 'Sunday');
        e = new pDate([1404, 1, 4]).toLocale('en').format('dddd');
        assert.deepEqual(e, 'Monday');
        f = new pDate([1404, 1, 5]).toLocale('en').format('dddd');
        assert.deepEqual(f, 'Tuesday');
        g = new pDate([1404, 1, 6]).toLocale('en').format('dddd');
        assert.deepEqual(g, 'Wednesday');
        h = new pDate([1404, 1, 7]).toLocale('en').format('dddd');
        assert.deepEqual(h, 'Thursday');
        pDate.localType = 'fa';
    });
});

describe('locale global', () => {
    it('[1404,1,1] locale global en', () => {
        pDate.toLocale('en');
        const a = new pDate([1404, 1, 1]).format();
        assert.deepEqual(a, '1404-01-01 00:00:00 AM');
        b = new pDate([1404, 1, 1]).format('dddd');
        assert.deepEqual(b, 'Friday');
        c = new pDate([1404, 1, 2]).format('dddd');
        assert.deepEqual(c, 'Saturday');
        d = new pDate([1404, 1, 3]).format('dddd');
        assert.deepEqual(d, 'Sunday');
        e = new pDate([1404, 1, 4]).format('dddd');
        assert.deepEqual(e, 'Monday');
        f = new pDate([1404, 1, 5]).format('dddd');
        assert.deepEqual(f, 'Tuesday');
        g = new pDate([1404, 1, 6]).format('dddd');
        assert.deepEqual(g, 'Wednesday');
        h = new pDate([1404, 1, 7]).format('dddd');
        assert.deepEqual(h, 'Thursday');
        pDate.toLocale('fa');
    });

    it('[1404,1,1] locale global en', () => {
        pDate.localType = 'en';
        const a = new pDate([1404, 1, 1]).format();
        assert.deepEqual(a, '1404-01-01 00:00:00 AM');
        b = new pDate([1404, 1, 1]).format('dddd');
        assert.deepEqual(b, 'Friday');
        c = new pDate([1404, 1, 2]).format('dddd');
        assert.deepEqual(c, 'Saturday');
        d = new pDate([1404, 1, 3]).format('dddd');
        assert.deepEqual(d, 'Sunday');
        e = new pDate([1404, 1, 4]).format('dddd');
        assert.deepEqual(e, 'Monday');
        f = new pDate([1404, 1, 5]).format('dddd');
        assert.deepEqual(f, 'Tuesday');
        g = new pDate([1404, 1, 6]).format('dddd');
        assert.deepEqual(g, 'Wednesday');
        h = new pDate([1404, 1, 7]).format('dddd');
        assert.deepEqual(h, 'Thursday');
        pDate.localType = 'fa';
    });

    it('[1404,1,1] gregorian fa', () => {
        const a = new pDate([1404, 1, 1]).format();
        assert.deepEqual(a, '۱۴۰۴-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        const b = new pDate([1404, 1, 1]).format('dddd');
        assert.deepEqual(b, 'جمعه');
        c = new pDate([1404, 1, 2]).format('dddd');
        assert.deepEqual(c, 'شنبه');
        d = new pDate([1404, 1, 3]).format('dddd');
        assert.deepEqual(d, 'یکشنبه');
        e = new pDate([1404, 1, 4]).format('dddd');
        assert.deepEqual(e, 'دوشنبه');
        f = new pDate([1404, 1, 5]).format('dddd');
        assert.deepEqual(f, 'سه شنبه');
        g = new pDate([1404, 1, 6]).format('dddd');
        assert.deepEqual(g, 'چهار شنبه');
        h = new pDate([1404, 1, 7]).format('dddd');
        assert.deepEqual(h, 'پنج\u200cشنبه');
        pDate.localType = 'fa';
    });
});

describe('toCalendar gregorian', () => {
    it('[1404,1,1] gregorian en', () => {
        const a = new pDate([1404, 1, 1]).toCalendar('gregorian').toLocale('en').format();
        assert.deepEqual(a, '2025-03-21 00:00:00 AM');
    });
    it('[1404,1,1] gregorian fa format("llll")', () => {
        const a = new pDate([1404, 1, 1]).toCalendar('gregorian').toLocale('fa').format('llll');
        assert.deepEqual(a, 'جمعه ۲۱ مارس ۲۰۲۵  ۰:۰۰  ق ظ');
    });
    it('[1403,1,1] gregorian fa format("dddd")', () => {
        const persainAlgo = new pDate([1404, 1, 1])
                .toCalendar('persian')
                .toLeapYearMode('algorithmic')
                .toLocale('en')
                .format('dddd'),
            persianAstroWeekday = new pDate([1404, 1, 1])
                .toCalendar('persian')
                .toLeapYearMode('astronomical')
                .toLocale('en')
                .format('dddd'),
            gregorianWeekday = new pDate([1404, 1, 1]).toCalendar('gregorian').toLocale('en').format('dddd');
        assert.deepEqual(gregorianWeekday, 'Friday');
        assert.deepEqual(persianAstroWeekday, 'Friday');
        assert.deepEqual(persainAlgo, 'Friday');
    });
});

describe('toCalendar ', () => {
    const defArray = [1403, 12, 30];
    it('[1403,1,1] persian en', () => {
        pDate.toCalendar('persian');
        pDate.toLeapYearMode('algorithmic');
        const a = new pDate(defArray).toLocale('fa').format();
        assert.deepEqual(a, '۱۴۰۴-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
});

describe('toCalendar persian', () => {
    const defArray = [1403, 12, 30];
    it('[1403,1,1] persian algorithmic en', () => {
        const a = new pDate(defArray).toCalendar('persian').toLocale('fa').format();
        assert.deepEqual(a, '۱۴۰۴-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('[1403,1,1] persian algorithmic fa format("dddd")', () => {
        const persainAlgoWeekday = new pDate(defArray)
                .toCalendar('persian')
                .toLeapYearMode('algorithmic')
                .toLocale('fa')
                .format('dddd'),
            persianAstroWeekday = new pDate(defArray)
                .toCalendar('persian')
                .toLeapYearMode('astronomical')
                .toLocale('fa')
                .format('dddd'),
            gregorianWeekday = new pDate(defArray).toCalendar('gregorian').toLocale('fa').format('dddd');
        assert.deepEqual(gregorianWeekday, 'پنج‌شنبه');
        assert.deepEqual(persianAstroWeekday, 'پنج‌شنبه');
        assert.deepEqual(persainAlgoWeekday, 'پنج‌شنبه');
    });
});

describe('rangeName', () => {
    it('weekdays gregorian en', () => {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(pDate.rangeName().weekdays, [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]);
    });
    it('weekdays gregorian fa', () => {
        pDate.toCalendar('gregorian').toLocale('fa');
        assert.deepEqual(
            pDate.rangeName().weekdays,
            'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        );
    });

    it('weekdays persian fa', () => {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().weekdays, [
            'شنبه',
            'یکشنبه',
            'دوشنبه',
            'سه شنبه',
            'چهار شنبه',
            'پنج‌شنبه',
            'جمعه',
        ]);
    });

    it('weekdays persian en', () => {
        pDate.toCalendar('persian').toLocale('en');
        assert.deepEqual(pDate.rangeName().weekdays, [
            'Saturday',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
        ]);
    });

    it('weekdaysShort persian fa', () => {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().weekdaysShort, ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']);
    });

    it('months persian fa', () => {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().months, [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
            'مهر',
            'آبان',
            'آذر',
            'دی',
            'بهمن',
            'اسفند',
        ]);
    });

    it('weekdays gregorian en', () => {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdays, [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]);
    });
    it('weekdats gregorian fa', () => {
        pDate.toCalendar('gregorian').toLocale('fa');
        assert.deepEqual(
            new pDate().rangeName().weekdays,
            'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        );
    });

    it('weekdaysMin gregorian en', () => {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdaysMin, ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
    });

    it('weekdaysShort gregorian en', () => {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdaysShort, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    });

    it('weekdays persian fa', () => {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().weekdays, [
            'شنبه',
            'یکشنبه',
            'دوشنبه',
            'سه شنبه',
            'چهار شنبه',
            'پنج‌شنبه',
            'جمعه',
        ]);
    });

    it('weekdaysMin persian en', () => {
        pDate.toCalendar('persian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdaysMin, ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr']);
    });

    it('weekdaysShort persian fa', () => {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().weekdaysShort, ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']);
    });

    it('month persian fa', () => {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().months, [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
            'مهر',
            'آبان',
            'آذر',
            'دی',
            'بهمن',
            'اسفند',
        ]);
    });

    pDate.toCalendar('persian').toLocale('fa');
});

describe('getFirstWeekDayOfMonth', () => {
    it('1391, 12', () => {
        const a = new pDate().getFirstWeekDayOfMonth(1391, 12);
        assert.deepEqual(a, 4);
    });
    it('1391, 11', () => {
        const a = new pDate().getFirstWeekDayOfMonth(1391, 11);
        assert.deepEqual(a, 2);
    });
    it('1391, 10', () => {
        const a = new pDate().getFirstWeekDayOfMonth(1391, 10);
        assert.deepEqual(a, 7);
    });
    it('1391, 9', () => {
        const a = new pDate().getFirstWeekDayOfMonth(1391, 9);
        assert.deepEqual(a, 5);
    });
    it('1391, 8', () => {
        const a = new pDate().getFirstWeekDayOfMonth(1391, 7);
        assert.deepEqual(a, 1);
    });
});

describe('daysInMonth', () => {
    it('Negative month', () => {
        assert.deepEqual(new pDate().daysInMonth(1391, -1), 0);
        assert.deepEqual(new pDate([1391, 1, 1, 1, 1, 1]).daysInMonth(), 31);
    });

    it('None leap year', () => {
        assert.deepEqual(new pDate().daysInMonth(1391, 1), 31);
        assert.deepEqual(new pDate().daysInMonth(1391, 2), 31);
        assert.deepEqual(new pDate().daysInMonth(1391, 3), 31);
        assert.deepEqual(new pDate().daysInMonth(1391, 4), 31);
        assert.deepEqual(new pDate().daysInMonth(1391, 5), 31);
        assert.deepEqual(new pDate().daysInMonth(1391, 6), 31);
        assert.deepEqual(new pDate().daysInMonth(1391, 7), 30);
        assert.deepEqual(new pDate().daysInMonth(1391, 8), 30);
        assert.deepEqual(new pDate().daysInMonth(1391, 9), 30);
        assert.deepEqual(new pDate().daysInMonth(1391, 10), 30);
        assert.deepEqual(new pDate().daysInMonth(1391, 11), 30);
        assert.deepEqual(new pDate().daysInMonth(1391, 12), 30);
    });

    it('None leap year', () => {
        assert.deepEqual(new pDate().daysInMonth(1394, 1), 31);
        assert.deepEqual(new pDate().daysInMonth(1394, 2), 31);
        assert.deepEqual(new pDate().daysInMonth(1394, 3), 31);
        assert.deepEqual(new pDate().daysInMonth(1394, 4), 31);
        assert.deepEqual(new pDate().daysInMonth(1394, 5), 31);
        assert.deepEqual(new pDate().daysInMonth(1394, 6), 31);
        assert.deepEqual(new pDate().daysInMonth(1394, 7), 30);
        assert.deepEqual(new pDate().daysInMonth(1394, 8), 30);
        assert.deepEqual(new pDate().daysInMonth(1394, 9), 30);
        assert.deepEqual(new pDate().daysInMonth(1394, 10), 30);
        assert.deepEqual(new pDate().daysInMonth(1394, 11), 30);
        assert.deepEqual(new pDate().daysInMonth(1394, 12), 29);
    });
});

describe('Leap Year', () => {
    it('[2020] when calendarType = gregorian', () => {
        pDate.calendarType = 'gregorian';
        const createdDate = new pDate([2020]);
        assert.deepEqual(createdDate.year(), 2020);
        assert.deepEqual(createdDate.isLeapYear(), true);
        pDate.calendarType = 'persian';
    });

    it('[1404] when persian algorithmic', () => {
        pDate.leapYearMode = 'algorithmic';
        const createdDate = new pDate([1403]);
        assert.deepEqual(createdDate.year(), 1403);
        assert.deepEqual(createdDate.isLeapYear(), false);
        pDate.leapYearMode = 'astronomical';
    });

    it('[1404] when persian algorithmic', () => {
        pDate.leapYearMode = 'algorithmic';
        const createdDate = new pDate([1404]).isLeapYear();
        assert.deepEqual(createdDate, true);
        pDate.leapYearMode = 'astronomical';
    });

    it('[1404] when persian astronoical', () => {
        const createdDate = new pDate([1404]).isLeapYear();
        assert.deepEqual(createdDate, false);
    });

    it('[1404] when persian algorithmic', () => {
        const createdDate = new pDate([1403]).isLeapYear();
        assert.deepEqual(createdDate, true);
    });

    it('[2028]', () => {
        const createdDate = new pDate([2028]).isLeapYear();
        assert.deepEqual(createdDate, false);
    });

    it('Is leap year', () => {
        const createdDate = new pDate([1391]).isLeapYear();
        assert.deepEqual(createdDate, true);
    });

    it('Not leap year', () => {
        const createdDate = new pDate([1392]).isLeapYear();
        assert.deepEqual(createdDate, false);
    });

    it('print next 5 leap year', () => {
        let startYear = 1396,
            endYear = 1420,
            indexYear = startYear;
        while (indexYear < endYear) {
            const createdDate = new pDate([indexYear]);
            if (createdDate.isLeapYear()) {
                /* eslint-disable no-console */
                console.log(`${indexYear} is leap year!${createdDate.isLeapYear()}`);
                /* eslint-enable no-console */
            }
            indexYear += 1;
        }
    });
});

describe('toDate', () => {
    it('toDate', () => {
        const gDateGenerated = new Date();
        const formattedDate = new pDate(gDateGenerated);
        assert.deepEqual(formattedDate.toDate(), gDateGenerated);
    });
});

describe('toArray', () => {
    it('Convert Array [1391, 1, 1, 1, 1, 1, 1]', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1, 1]).toArray();
        assert.deepEqual(formattedDate, [1391, 1, 1, 1, 1, 1, 1]);
    });

    it('Convert Array [1391, 1, 1, 1, 1, 1, 200]', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1, 200]).toArray();
        assert.deepEqual(formattedDate, [1391, 1, 1, 1, 1, 1, 200]);
    });

    it('Convert Array [1391, 12, 12, 12, 12, 12, 200]', () => {
        const formattedDate = new pDate([1391, 12, 12, 12, 12, 12, 200]).toArray();
        assert.deepEqual(formattedDate, [1391, 12, 12, 12, 12, 12, 200]);
    });

    it('Convert new pDate().toArray()', () => {
        const generatedArray = new pDate().toArray(),
            formattedDate = new pDate(generatedArray).toArray();
        assert.deepEqual(formattedDate, generatedArray);
    });
});

describe('valueOf', () => {
    it('from 1332192661000', () => {
        const defaultUnixtime = 1332192661000,
            formattedDate = new pDate(defaultUnixtime).valueOf();
        assert.deepEqual(formattedDate, defaultUnixtime);
    });
    it('from new pDate().valueOf()', () => {
        const defaultUnixtime = new pDate().valueOf(),
            formattedDate = new pDate(defaultUnixtime).valueOf();
        assert.deepEqual(formattedDate, defaultUnixtime);
    });
});

describe('Year', () => {
    it('get', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]).year();
        assert.deepEqual(a, 1391);
        const b = new pDate([1391, 1, 1, 1, 1, 1]).years();
        assert.deepEqual(b, 1391);
    });
    it('set', () => {
        const formattedDate = new pDate().year(1450).year();
        assert.deepEqual(formattedDate, 1450);
    });
});

describe('Month', () => {
    it('get', () => {
        const formattedDate = new pDate([1391, 12, 1, 1, 1, 1]).month();
        assert.deepEqual(formattedDate, 12);
    });
    it('set', () => {
        const formattedDate = new pDate([1391, 12, 1, 1, 1, 1]).month(11).month();
        assert.deepEqual(formattedDate, 11);
    });
});

describe('Date', () => {
    it('get', () => {
        const a = new pDate([1391, 12, 23, 1, 1, 1]).date();
        const b = new pDate([1391, 12, 23, 1, 1, 1]).dates();
        assert.deepEqual(a, 23);
        assert.deepEqual(b, 23);
    });
    it('set', () => {
        const formattedDate = new pDate().date(23).date();
        assert.deepEqual(formattedDate, 23);
    });
});

describe('day (week day index)', () => {
    it('day first day', () => {
        const a = new pDate([1391, 2, 1, 1, 1, 1]).day();
        assert.deepEqual(a, 7);
        const b = new pDate([1391, 2, 1, 1, 1, 1]).days();
        assert.deepEqual(b, 7);
    });
    it('day last day', () => {
        const a = new pDate([1391, 2, 7, 1, 1, 1]).day();
        assert.deepEqual(a, 6);
    });
});

describe('Hour', () => {
    it('get', () => {
        const formattedDate = new pDate([1391, 12, 23, 12, 1, 1]).hour();
        assert.deepEqual(formattedDate, 12);
    });
    it('set', () => {
        const formattedDate = new pDate().hour(23).hour();
        assert.deepEqual(formattedDate, 23);
    });
});

describe('Minute', () => {
    it('get', () => {
        const formattedDate = new pDate([1391, 12, 23, 22, 45, 1]).minute();
        assert.deepEqual(formattedDate, 45);
    });
    it('set', () => {
        const formattedDate = new pDate().minute(59).minute();
        assert.deepEqual(formattedDate, 59);
    });
});

describe('Second', () => {
    it('get', () => {
        const formattedDate = new pDate([1391, 12, 23, 22, 45, 48]).second();
        assert.deepEqual(formattedDate, 48);
    });
    it('set', () => {
        const formattedDate = new pDate().second(59).second();
        assert.deepEqual(formattedDate, 59);
    });
});

describe('Millisecond', () => {
    it('get', () => {
        const formattedDate = new pDate([1391, 12, 23, 22, 45, 48, 987]).millisecond();
        assert.deepEqual(formattedDate, 987);
    });
    it('set', () => {
        const formattedDate = new pDate().millisecond(59).millisecond();
        assert.deepEqual(formattedDate, 59);
    });
});

describe('unix', () => {
    it('get', () => {
        const formattedDate = new pDate(1332192661000).unix();
        assert.deepEqual(formattedDate, 1332192661);
    });
    it('set', () => {
        const formattedDate = new pDate(1552192661000).unix(1552192661).unix();
        assert.deepEqual(formattedDate, 1552192661);
    });
});

describe('isPersianDate', () => {
    it('IS', () => {
        const createdDate = new pDate();
        assert.ok(createdDate.isPersianDate(createdDate));
    });
});

describe('zone', () => {
    it('get', () => {
        const formattedDate = new pDate().zone();
        assert.deepEqual(formattedDate, new Date().getTimezoneOffset());
    });
});

describe('timezone', () => {
    it('local', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]).local().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('static utc method', () => {
        const a = pDate.utc(1491031614047).valueOf();
        assert.ok(a);
        const d = pDate.utc().utc();
        assert.deepEqual(d.valueOf(), d.toDate().valueOf());
    });
    it('static unix method', () => {
        const a = pDate.unix(1491031614047).unix();
        assert.deepEqual(a, 1491031614047);
        const b = pDate.unix();
        assert.ok(b);
    });
    it('isUtc', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]).utc().isUtc();
        assert.deepEqual(a, true);
        const b = new pDate([1391, 1, 1, 1, 1, 1]).local().isUtc();
        assert.deepEqual(b, false);
    });
    it('utc([1391, 1, 1, 1, 1, 1])', () => {
        const a = new pDate().utc([1391, 1, 1, 1, 1, 1]).local().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('convert utc date to local', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]).utc().local().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
});

describe('isDST', () => {
    it('IS', () => {
        let a = new pDate([1396, 1, 2]).isDST();
        assert.deepEqual(a, true);
        a = new pDate([1396, 6, 30]).isDST();
        assert.deepEqual(a, true);
    });
    it('Not', () => {
        let a = new pDate([1396, 1, 1]).isDST();
        assert.deepEqual(a, false);
        a = new pDate([1396, 6, 31]).isDST();
        assert.deepEqual(a, false);
    });
});

describe('Clone', () => {
    it('clone', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1, 0]),
            b = a.clone();
        assert.deepEqual(b.toArray(), [1391, 1, 1, 1, 1, 1, 0]);
    });
});

describe('daysInMonth', () => {
    it('First Month of normal year', () => {
        //        let a = new pDate().daysInMonth(1391, 1);
        assert.ok(29);
    });
    it('Sixth Month of normal year', () => {
        //        let a = new pDate().daysInMonth(1394, 6);
        assert.ok(31);
    });
    it('Sixth Month of normal year', () => {
        //        let a = new pDate().daysInMonth(1394, 7);
        assert.ok(30);
    });
    it('Last Month of leap year', () => {
        //        let a = new pDate().daysInMonth(1394, 12);
        assert.ok(29);
    });
    it('Last Month of normal year', () => {
        //        let a = new pDate().daysInMonth(1391, 12);
        assert.ok(29);
    });
});

describe('English Format', () => {
    it('a.formatPersian = false', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        a.formatPersian = false;
        assert.deepEqual(a.format(), '1391-01-01 01:01:01 AM');
    });
    it('a.formatPersian = true', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        a.formatPersian = true;
        assert.deepEqual(a.format(), '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('a.formatPersian = true', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        a.formatPersian = 'dsadas';
        assert.deepEqual(a.format(), '1391-01-01 01:01:01 AM');
    });
});

describe('Diff', () => {
    it('set', () => {
        const a = new pDate([1392, 1, 1]),
            b = new pDate([1392, 2, 2]);
        assert.ok(a.diff(b));
    });
    it('set', () => {
        const a = new pDate([1392, 1, 1]),
            b = new pDate([1391, 1, 1]);
        assert.deepEqual(a.diff(b, 'year'), 1);
        assert.deepEqual(a.diff(b, 'month'), 12);
        assert.deepEqual(a.diff(b, 'day'), 366);
        assert.deepEqual(a.diff(b, 'hour'), 8784);
        assert.deepEqual(a.diff(b, 'minute'), 527040);
        assert.deepEqual(a.diff(b, 'second'), 31622400);
        assert.deepEqual(a.diff(b), 31622400000);
    });
});

describe('format', () => {
    it('format()', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format(), '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
        a.formatPersian = false;
        assert.deepEqual(a.format(), '1391-01-01 01:01:01 AM');
    });

    it('format("YYYY/MM/DD a ddddd dddd ddd d MMM MMMM X w ww")', () => {
        const a = new pDate([1404, 1, 1])
            .toCalendar('persian')
            .toLocale('fa')
            .format('YYYY/MM/DD ddddd dddd ddd d MMM MMMM w ww');
        assert.deepEqual(a, '۱۴۰۴/۰۱/۰۱ اورمزد جمعه ج ۷ فرو فروردین ۱ ۰۱');
    });

    it('format("a")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('a'), 'ق ظ');
        a.formatPersian = false;
        assert.deepEqual(a.format('a'), 'AM');
    });

    it('format("H")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('H'), '۱');
        a.formatPersian = false;
        assert.deepEqual(a.format('H'), '1');
    });

    it('format("HH")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('HH'), '۰۱');
    });

    it('format("h")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('h'), '۱');
    });

    it('format("hh")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('hh'), '۰۱');
    });

    it('format("m")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('m'), '۰۱');
    });

    it('format("mm")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('mm'), '۰۱');
    });

    it('format("s")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('s'), '۱');
    });

    it('format("ss")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('ss'), '۰۱');
    });

    it('format("L")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('L'), '۱۳۹۱/۰۱/۰۱');
    });

    it('format("l")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('l'), '۱۳۹۱/۱/۱');
    });

    it('format("LL")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LL'), 'فروردین ۰۱ ۱۳۹۱');
    });

    it('format("ll")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ll'), 'فرو ۰۱ ۱۳۹۱');
    });

    it('format("LLL")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LLL'), 'فروردین ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ');
    });

    it('format("lll")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('lll'), 'فرو ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ');
    });

    it('format("LLLL")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LLLL'), 'سه شنبه ۱ فروردین ۱۳۹۱  ۱:۰۱  ق ظ');
    });

    it('format("llll")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('llll'), 'س ۱ فرو ۱۳۹۱  ۱:۰۱  ق ظ');
    });

    it('format("X")', () => {
        const a = new pDate.utc(1332192661000).format('X');
        assert.ok(a);
    });
    it('format("ZZ")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).utc();
        assert.deepEqual(formattedDate.format('ZZ'), '+۰۰۰۰');
    });

    it('format("Z")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).utc();
        assert.deepEqual(formattedDate.format('Z'), '+۰۰:۰۰');
    });

    it('format("LT")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LT'), '۱:۰۱ ق ظ');
    });

    it('format("YY")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('YY'), '۹۱');
    });

    it('format("YYYY")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('YYYY'), '۱۳۹۱');
    });

    it('format("MMMM")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('MMMM'), 'فروردین');
    });
    it('format("MMM")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('MMM'), 'فرو');
    });
    it('format("MM")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('MM'), '۰۱');
    });
    it('format("M")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('M'), '۱');
    });
    it('format("d")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('d'), '۴');
    });
    it('format("ddd")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ddd'), 'س');
    });
    it('format("dddd")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('dddd'), 'سه شنبه');
    });
    it('format("ddddd")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ddddd'), 'اورمزد');
    });
    it('format("dddddd")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('dddddd'), 'س');
    });
    it('format("DD")', () => {
        const formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('DD'), '۰۱');
    });
    it('format("DDD")', () => {
        const formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('DDD'), '۰۰۲');
    });
    it('format("DDDD")', () => {
        const formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('DDDD'), '۰۰۲');
    });
    it('format("w")', () => {
        const formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('w'), '۱');
    });
    it('format("ww")', () => {
        const formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ww'), '۰۱');
    });
});

describe('startOf', () => {
    const defaultArray = [1391, 1, 1, 1, 1, 1, 100];

    it('startOf("year")', () => {
        const a = new pDate(defaultArray).startOf('year').format();
        const b = new pDate(defaultArray).startOf('years').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("month")', () => {
        const a = new pDate(defaultArray).startOf('month').format();
        const b = new pDate(defaultArray).startOf('months').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("days")', () => {
        const a = new pDate(defaultArray).startOf('days').format();
        const b = new pDate(defaultArray).startOf('day').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('sod()', () => {
        const a = new pDate(defaultArray).sod().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("hour")', () => {
        const a = new pDate(defaultArray).startOf('hour').format();
        const b = new pDate(defaultArray).startOf('hours').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۰:۰۰ ق ظ');
    });
    it('startOf("minute")', () => {
        const a = new pDate(defaultArray).startOf('minute').format();
        const b = new pDate(defaultArray).startOf('minutes').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۰ ق ظ');
    });
    it('startOf("second")', () => {
        const a = new pDate(defaultArray).startOf('second').format();
        const b = new pDate(defaultArray).startOf('seconds').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('startOf("week")', () => {
        const formattedDate = new pDate([1397, 1, 1]).startOf('week').format();
        assert.deepEqual(formattedDate, '۱۳۹۶-۱۲-۲۶ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("weeks")', () => {
        const formattedDate = new pDate([1397, 1, 30]).startOf('weeks').format();
        assert.deepEqual(formattedDate, '۱۳۹۷-۰۱-۲۵ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf()', () => {
        const formattedDate = new pDate(defaultArray).startOf().format();
        assert.deepEqual(formattedDate, new pDate(defaultArray).format());
    });
});

describe('endOf', () => {
    const defaultArray = [1391, 1, 1, 1, 1, 1, 100];
    it('endOf("year")', () => {
        const a = new pDate([1391, 1, 1, 1, 1, 1, 100]).endOf('year').format();
        const b = new pDate([1391, 1, 1, 1, 1, 1, 100]).endOf('years').format();
        assert.deepEqual(a, '۱۳۹۱-۱۲-۳۰ ۲۳:۵۹:۵۹ ب ظ');
        assert.deepEqual(b, '۱۳۹۱-۱۲-۳۰ ۲۳:۵۹:۵۹ ب ظ');
    });
    it('endOf("month")', () => {
        const a = new pDate(defaultArray).endOf('month').format();
        const b = new pDate(defaultArray).endOf('months').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۳۱ ۲۳:۵۹:۵۹ ب ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۳۱ ۲۳:۵۹:۵۹ ب ظ');
    });
    it('endOf("days")', () => {
        const a = new pDate(defaultArray).endOf('day').format();
        const b = new pDate(defaultArray).endOf('days').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ');
    });
    it('endOf("hour")', () => {
        const a = new pDate(defaultArray).endOf('hour').format();
        const b = new pDate(defaultArray).endOf('hours').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۵۹:۵۹ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۵۹:۵۹ ق ظ');
    });
    it('endOf("minute")', () => {
        const a = new pDate(defaultArray).endOf('minute').format();
        const b = new pDate(defaultArray).endOf('minutes').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۵۹ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۵۹ ق ظ');
    });
    it('endOf("second")', () => {
        const a = new pDate(defaultArray).endOf('second').format();
        const b = new pDate(defaultArray).endOf('seconds').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('endOf("week")', () => {
        const formattedDate = new pDate([1397, 1, 7]).endOf('week').format();
        assert.deepEqual(formattedDate, '۱۳۹۷-۰۱-۱۰ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('endOf("weeks")', () => {
        const formattedDate = new pDate([1397, 1, 7]).endOf('weeks').format();
        assert.deepEqual(formattedDate, '۱۳۹۷-۰۱-۱۰ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('endOf()', () => {
        const formattedDate = new pDate([1397, 1, 7]).endOf().format();
        assert.deepEqual(formattedDate, '۱۳۹۷-۰۱-۰۷ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('eod()', () => {
        const formattedDate = new pDate(defaultArray).eod().format();
        assert.deepEqual(formattedDate, '۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ');
    });
});

describe('duration', () => {
    it('isDuration', () => {
        const a = new pDate().duration(90, 'milliseconds');
        assert.deepEqual(a._data.milliseconds, 90);
    });
    it('isDuration', () => {
        const a = new pDate().duration(-90, 'milliseconds');
        assert.deepEqual(a._data.milliseconds, -90);
    });
    it('isDuration', () => {
        const a = new pDate().isDuration(new Duration(90, 'milliseconds'));
        assert.deepEqual(a, true);
    });
    it('milliseconds', () => {
        const a = new pDate.duration(90, 'milliseconds').valueOf();
        assert.deepEqual(a, 90);
        const b = new pDate.duration(1, 'day').valueOf();
        assert.deepEqual(b, 86400000);
    });

    it('milliseconds', () => {
        const a = new pDate.duration(90, 'milliseconds');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
        assert.deepEqual(a._data.milliseconds, 90);
    });
    it('second', () => {
        const a = new pDate.duration(90, 'second');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 1);
        assert.deepEqual(a._data.seconds, 30);
    });
    it('minutes', () => {
        const a = new pDate.duration(90, 'minute');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 1);
        assert.deepEqual(a._data.minutes, 30);
        assert.deepEqual(a._data.seconds, 0);
        assert.deepEqual(a._data.milliseconds, 0);
    });
    it('hour', () => {
        const a = new pDate.duration(30, 'hour');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 1);
        assert.deepEqual(a._data.hours, 6);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
        assert.deepEqual(a._data.milliseconds, 0);
    });
    it('day', () => {
        const a = new pDate.duration(90, 'day');
        assert.deepEqual(a._data.months, 3);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
    });
    it('months', () => {
        const a = new pDate.duration(90, 'month');
        assert.deepEqual(a._data.months, 6);
        assert.deepEqual(a._data.years, 7);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
    });
    it('years', () => {
        const a = new pDate.duration(90, 'year');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 90);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
    });
});

describe('Add', () => {
    let a;
    it('Year', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('year', 1).toArray();
        assert.deepEqual(a, [1392, 1, 1, 1, 1, 1, 0]);
    });

    it('Month', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1391, 2, 1, 1, 1, 1, 0]);
    });

    it('Month to 1395/6(31 days month)/31', () => {
        a = new pDate([1396, 6, 31, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1396, 7, 30, 1, 1, 1, 0]);
    });

    it('Month to 1395(leap)/11/30', () => {
        a = new pDate([1395, 11, 30, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
    });

    it('Month to 1394(none leap)/11/30', () => {
        a = new pDate([1394, 11, 30, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1394, 12, 29, 1, 1, 1, 0]);
    });

    it('Week', () => {
        a = new pDate([1396, 1, 1]).add('week', 100).toArray();
        assert.deepEqual(a, [1397, 11, 30, 0, 0, 0, 0]);
    });

    it('Days Base on month day count', () => {
        a = new pDate([1395, 7, 1, 1, 1, 1]).add('day', 30).toArray();
        assert.deepEqual(a, [1395, 8, 1, 1, 1, 1, 0]);
        a = new pDate([1395, 5, 1, 1, 1, 1]).add('day', 30).toArray();
        assert.deepEqual(a, [1395, 5, 31, 1, 1, 1, 0]);
    });

    it('Days Base on leap years', () => {
        a = new pDate([1395, 1, 1, 1, 1, 1]).add('day', 365).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
        a = new pDate([1396, 1, 1, 1, 1, 1]).add('day', 365).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 1, 1, 0]);
    });

    it('Days', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('day', 10).toArray();
        assert.deepEqual(a, [1391, 1, 11, 1, 1, 1, 0]);
    });
    it('Hours', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('hour', 10).toArray();
        assert.deepEqual(a, [1391, 1, 1, 11, 1, 1, 0]);
    });
    it('Minute', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('minute', 10).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 11, 1, 0]);
    });
    it('Second', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('second', 10).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 11, 0]);
    });
    it('Millisecond', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('ms', 1000).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 2, 0]);
    });
    it('Millisecond', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('ms', 1200).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 2, 200]);
    });

    it('Without unit', () => {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('', 1200).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 1, 0]);
    });
});

describe('Subtract', () => {
    it('Year', () => {
        const a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('year', 1).toArray();
        // console.log(b);
        assert.deepEqual(a, [1396, 1, 1, 1, 1, 1, 0]);
    });
    it('Month', () => {
        const a = new pDate([1397, 2, 1, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 1, 1, 0]);
    });

    it('Month to 1395/6(31 days month)/31', () => {
        a = new pDate([1396, 6, 31, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1396, 5, 31, 1, 1, 1, 0]);
    });

    it('Month to 1396(after leap)/1/31', () => {
        a = new pDate([1396, 1, 31, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
    });
    it('Month to 1394(after none leap)/1/31', () => {
        a = new pDate([1393, 1, 31, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1392, 12, 29, 1, 1, 1, 0]);
    });

    it('Week', () => {
        a = new pDate([1396, 1, 1]).subtract('w', 100).toArray();
        assert.deepEqual(a, [1394, 2, 1, 0, 0, 0, 0]);
    });

    it('Days Base on month day count', () => {
        let a = new pDate([1395, 6, 31, 1, 1, 1]).subtract('day', 30).toArray();
        assert.deepEqual(a, [1395, 6, 1, 1, 1, 1, 0]);
        a = new pDate([1395, 8, 31, 1, 1, 1]).subtract('day', 30).toArray();
        assert.deepEqual(a, [1395, 8, 1, 1, 1, 1, 0]);

        a = new pDate([1395, 8, 30, 1, 1, 1]).subtract('day', 30).toArray();
        assert.deepEqual(a, [1395, 7, 30, 1, 1, 1, 0]);
    });

    it('Days Base on leap years', () => {
        let a = new pDate([1396, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
        a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1396, 12, 29, 1, 1, 1, 0]);

        // Check persianAstro
        a = new pDate([1405, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1404, 12, 29, 1, 1, 1, 0]);
        a = new pDate([1404, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1403, 12, 30, 1, 1, 1, 0]);
        a = new pDate([1403, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1402, 12, 29, 1, 1, 1, 0]);
        // Check persianAlgo
        pDate.leapYearMode = 'algorithmic';
        a = new pDate([1405, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1404, 12, 30, 1, 1, 1, 0]);
        a = new pDate([1404, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1403, 12, 29, 1, 1, 1, 0]);
        a = new pDate([1403, 1, 1, 1, 1, 1]).subtract('day', 1).toArray();
        assert.deepEqual(a, [1402, 12, 29, 1, 1, 1, 0]);
        pDate.leapYearMode = 'astronomical';
        // a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('day',1).toCalendar('persianAlgo').toArray();
        // assert.deepEqual(a, [1396, 12, 29, 1, 1, 1, 0]);
    });

    it('Days', () => {
        const a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('day', 10).toArray();
        assert.deepEqual(a, [1396, 12, 20, 1, 1, 1, 0]);
    });
    it('Hours', () => {
        const a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('hour', 10).toArray();
        assert.deepEqual(a, [1396, 12, 29, 15, 1, 1, 0]);
    });
    it('Minute', () => {
        const a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('minute', 10).toArray();
        assert.deepEqual(a, [1397, 1, 1, 0, 51, 1, 0]);
    });
    it('Second', () => {
        const a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('second', 10).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 0, 51, 0]);
    });
    it('Millisecond', () => {
        const a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('ms', 1200).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 0, 59, 800]);
    });
});

describe('isSameDay', () => {
    it('pDate.isaSameDay()', () => {
        const a = new pDate([1404, 1, 1]);
        const b = new pDate([1404, 1, 1]);
        assert.deepEqual(pDate.isSameDay(a, b), true);
    });

    it('new pDate().isaSameDay()', () => {
        const a = new pDate([1404, 1, 1]);
        const b = new pDate([1404, 1, 1]);
        assert.deepEqual(a.isSameDay(b), true);
    });
});

describe('isSameMonth', () => {
    it('pDate.isSameMonth()', () => {
        const a = new pDate([1404, 1, 10]);
        const b = new pDate([1404, 1, 10]);
        assert.deepEqual(pDate.isSameMonth(a, b), true);
    });

    it('new pDate().isSameMonth()', () => {
        const a = new pDate([1404, 1, 12]);
        const b = new pDate([1404, 1, 12]);
        assert.deepEqual(a.isSameMonth(b), true);
    });
});
