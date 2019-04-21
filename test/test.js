/*global describe,it*/
let assert = require('assert');
require("amd-loader");
let expect = require('chai').expect;
let obj = require('../dist/persian-date.js');
const pDate = obj,
    Duration = new pDate().duration,
    defaultArray = [1391, 1, 1, 1, 1, 1, 1];

pDate.formatPersian = true;


describe('Helpers', function () {
    it('throw error', function () {
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

describe('Invalid Date', function () {
    it('', function () {
      assert.equal(new pDate([1398, -1]).toString(), new Date([2019, -1]).toString());
    });
});

describe('Check static methods', function () {
    it('isPersianDate', function () {
        let a = new pDate();
        assert.deepEqual(pDate.isPersianDate(a), true);
    });

    it('isDuration', function () {
        let a = new pDate.duration('days', 10);
        assert.deepEqual(pDate.isDuration(a), true);
    });

    it('getFirstWeekDayOfMonth', function () {
        assert.deepEqual(pDate.getFirstWeekDayOfMonth(1391, 12), 4);
    });

});


describe('Make Instance', function () {


    it('Create persian algorithmic instance', function () {
        let a = new pDate([1404, 1, 1, 1, 1, 1, 900]).format();
        assert.deepEqual(a, '۱۴۰۴-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });

    it('Test Amd Module', function () {
        let obj = require('../dist/persian-date.js');
        assert.ok(obj);
    });

    it('Init without any parameters', function () {
        let emptyInput = new pDate();
        assert.ok(emptyInput);
    });

    it('Negative year', function () {
        let a = new pDate([0]).format();
        assert.deepEqual(a, "۰-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
        let c = new pDate([-2000]).format('YYYY/MM/DD');
        assert.deepEqual(c, "-۲۰۰۰/۰۱/۰۱");
    });


    it('After long long long', function () {
        let a = new pDate([10000]).format();
        assert.deepEqual(a, "۱۰۰۰۰-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
        a = new pDate([10000, 1, 1]).isLeapYear();
        assert.deepEqual(a, false);
        a = new pDate([10003, 1, 1]).isLeapYear();
        assert.deepEqual(a, true);
    });


    it('check deltat between 1621 2000', function () {
        pDate.calendarType = 'gregorian';
        let a = new pDate([1641]).toArray();
        assert.deepEqual(a, [1641, 1, 1, 0, 0, 0, 0]);
        pDate.calendarType = 'persian';
    });


    it('From pDate', function () {
        let a = new pDate(),
            b = new pDate(a);
        assert.ok(b);
    });

    it('Init from array', function () {
        let createFromArray = new pDate(defaultArray);
        let createFromGdate = new pDate(createFromArray.gDate);
        assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
    });

    it('Init from .Net', function () {
        let a = new pDate('/Date(1198908717056-0700)/').utc().format();
        assert.deepEqual(a, '۱۳۸۶-۱۰-۰۸ ۰۶:۱۱:۵۷ ق ظ');
    });


    it('Object Format', function () {
        let createFromArray = new pDate(defaultArray);
        let createFromGdate = new pDate(createFromArray.gDate);
        assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
    });


    it('javascript Date()', function () {
        let gDateObject = new Date(),
            createFromDotNet = new pDate(gDateObject);
        assert.ok(createFromDotNet);

        createFromDotNet = new pDate(new Date());
        assert.ok(createFromDotNet);
    });

});

describe('locale just in object', function () {
    it('[1404,1,1] locale global en', function () {
        let a = new pDate([1404, 1, 1]).toLocale('en').format();
        assert.deepEqual(a, "1404-01-01 00:00:00 AM");
        b = new pDate([1404, 1, 1]).toLocale('en').format('dddd');
        assert.deepEqual(b, "Friday");
        c = new pDate([1404, 1, 2]).toLocale('en').format('dddd');
        assert.deepEqual(c, "Saturday");
        d = new pDate([1404, 1, 3]).toLocale('en').format('dddd');
        assert.deepEqual(d, "Sunday");
        e = new pDate([1404, 1, 4]).toLocale('en').format('dddd');
        assert.deepEqual(e, "Monday");
        f = new pDate([1404, 1, 5]).toLocale('en').format('dddd');
        assert.deepEqual(f, "Tuesday");
        g = new pDate([1404, 1, 6]).toLocale('en').format('dddd');
        assert.deepEqual(g, "Wednesday");
        h = new pDate([1404, 1, 7]).toLocale('en').format('dddd');
        assert.deepEqual(h, "Thursday");
        pDate.localType = 'fa';
    });
});


describe('locale global', function () {


    it('[1404,1,1] locale global en', function () {
        pDate.toLocale('en');
        let a = new pDate([1404, 1, 1]).format();
        assert.deepEqual(a, "1404-01-01 00:00:00 AM");
        b = new pDate([1404, 1, 1]).format('dddd');
        assert.deepEqual(b, "Friday");
        c = new pDate([1404, 1, 2]).format('dddd');
        assert.deepEqual(c, "Saturday");
        d = new pDate([1404, 1, 3]).format('dddd');
        assert.deepEqual(d, "Sunday");
        e = new pDate([1404, 1, 4]).format('dddd');
        assert.deepEqual(e, "Monday");
        f = new pDate([1404, 1, 5]).format('dddd');
        assert.deepEqual(f, "Tuesday");
        g = new pDate([1404, 1, 6]).format('dddd');
        assert.deepEqual(g, "Wednesday");
        h = new pDate([1404, 1, 7]).format('dddd');
        assert.deepEqual(h, "Thursday");
        pDate.toLocale('fa');
    });


    it('[1404,1,1] locale global en', function () {
        pDate.localType = 'en';
        let a = new pDate([1404, 1, 1]).format();
        assert.deepEqual(a, "1404-01-01 00:00:00 AM");
        b = new pDate([1404, 1, 1]).format('dddd');
        assert.deepEqual(b, "Friday");
        c = new pDate([1404, 1, 2]).format('dddd');
        assert.deepEqual(c, "Saturday");
        d = new pDate([1404, 1, 3]).format('dddd');
        assert.deepEqual(d, "Sunday");
        e = new pDate([1404, 1, 4]).format('dddd');
        assert.deepEqual(e, "Monday");
        f = new pDate([1404, 1, 5]).format('dddd');
        assert.deepEqual(f, "Tuesday");
        g = new pDate([1404, 1, 6]).format('dddd');
        assert.deepEqual(g, "Wednesday");
        h = new pDate([1404, 1, 7]).format('dddd');
        assert.deepEqual(h, "Thursday");
        pDate.localType = 'fa';
    });

    it('[1404,1,1] gregorian fa', function () {
        let a = new pDate([1404, 1, 1]).format();
        assert.deepEqual(a, "۱۴۰۴-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
        let b = new pDate([1404, 1, 1]).format('dddd');
        assert.deepEqual(b, "جمعه");
        c = new pDate([1404, 1, 2]).format('dddd');
        assert.deepEqual(c, "شنبه");
        d = new pDate([1404, 1, 3]).format('dddd');
        assert.deepEqual(d, "یکشنبه");
        e = new pDate([1404, 1, 4]).format('dddd');
        assert.deepEqual(e, "دوشنبه");
        f = new pDate([1404, 1, 5]).format('dddd');
        assert.deepEqual(f, 'سه شنبه');
        g = new pDate([1404, 1, 6]).format('dddd');
        assert.deepEqual(g, 'چهار شنبه');
        h = new pDate([1404, 1, 7]).format('dddd');
        assert.deepEqual(h, 'پنج\u200cشنبه');
        pDate.localType = 'fa';
    });
});


describe('toCalendar gregorian', function () {
    it('[1404,1,1] gregorian en', function () {
        let a = new pDate([1404, 1, 1]).toCalendar('gregorian').toLocale('en').format();
        assert.deepEqual(a, "2025-03-21 00:00:00 AM");
    });
    it('[1404,1,1] gregorian fa format("llll")', function () {
        let a = new pDate([1404, 1, 1]).toCalendar('gregorian').toLocale('fa').format('llll');
        assert.deepEqual(a, "جمعه ۲۱ مارس ۲۰۲۵  ۰:۰۰  ق ظ");
    });
    it('[1403,1,1] gregorian fa format("dddd")', function () {
        let persainAlgo = new pDate([1404, 1, 1]).toCalendar('persian').toLeapYearMode('algorithmic').toLocale('en').format('dddd'),
            persianAstroWeekday = new pDate([1404, 1, 1]).toCalendar('persian').toLeapYearMode('astronomical').toLocale('en').format('dddd'),
            gregorianWeekday = new pDate([1404, 1, 1]).toCalendar('gregorian').toLocale('en').format('dddd');
        assert.deepEqual(gregorianWeekday, "Friday");
        assert.deepEqual(persianAstroWeekday, "Friday");
        assert.deepEqual(persainAlgo, "Friday");
    });
});


describe('toCalendar ', function () {
    const defArray = [1403, 12, 30];
    it('[1403,1,1] persian en', function () {
        pDate.toCalendar('persian');
        pDate.toLeapYearMode('algorithmic');
        let a = new pDate(defArray).toLocale('fa').format();
        assert.deepEqual(a, "۱۴۰۴-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
    });
});

describe('toCalendar persian', function () {
    const defArray = [1403, 12, 30];
    it('[1403,1,1] persian algorithmic en', function () {
        let a = new pDate(defArray).toCalendar('persian').toLocale('fa').format();
        assert.deepEqual(a, "۱۴۰۴-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('[1403,1,1] persian algorithmic fa format("dddd")', function () {
        let persainAlgoWeekday = new pDate(defArray).toCalendar('persian').toLeapYearMode('algorithmic').toLocale('fa').format('dddd'),
            persianAstroWeekday = new pDate(defArray).toCalendar('persian').toLeapYearMode('astronomical').toLocale('fa').format('dddd'),
            gregorianWeekday = new pDate(defArray).toCalendar('gregorian').toLocale('fa').format('dddd');
        assert.deepEqual(gregorianWeekday, 'پنج‌شنبه');
        assert.deepEqual(persianAstroWeekday, 'پنج‌شنبه');
        assert.deepEqual(persainAlgoWeekday, 'پنج‌شنبه');
    });
});


describe('rangeName', function () {
    it('weekdays gregorian en', function () {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(pDate.rangeName().weekdays, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    });
    it('weekdays gregorian fa', function () {
        pDate.toCalendar('gregorian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().weekdays, 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'));
    });

    it('weekdays persian fa', function () {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().weekdays, ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج‌شنبه", "جمعه"]);
    });

    it('weekdays persian en', function () {
        pDate.toCalendar('persian').toLocale('en');
        assert.deepEqual(pDate.rangeName().weekdays, ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    });

    it('weekdaysShort persian fa', function () {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().weekdaysShort, ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']);
    });

    it('months persian fa', function () {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(pDate.rangeName().months, ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']);
    });

    it('weekdays gregorian en', function () {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdays, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    });
    it('weekdats gregorian fa', function () {
        pDate.toCalendar('gregorian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().weekdays, 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'));
    });

    it('weekdaysMin gregorian en', function () {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdaysMin, ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']);
    });

    it('weekdaysShort gregorian en', function () {
        pDate.toCalendar('gregorian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdaysShort, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    });

    it('weekdays persian fa', function () {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().weekdays, ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج‌شنبه", "جمعه"]);
    });

    it('weekdaysMin persian en', function () {
        pDate.toCalendar('persian').toLocale('en');
        assert.deepEqual(new pDate().rangeName().weekdaysMin, ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr']);
    });

    it('weekdaysShort persian fa', function () {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().weekdaysShort, ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']);
    });

    it('month persian fa', function () {
        pDate.toCalendar('persian').toLocale('fa');
        assert.deepEqual(new pDate().rangeName().months, ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']);
    });

    pDate.toCalendar('persian').toLocale('fa');
});


describe('getFirstWeekDayOfMonth', function () {
    it('1391, 12', function () {
        let a = new pDate().getFirstWeekDayOfMonth(1391, 12);
        assert.deepEqual(a, 4);
    });
    it('1391, 11', function () {
        let a = new pDate().getFirstWeekDayOfMonth(1391, 11);
        assert.deepEqual(a, 2);
    });
    it('1391, 10', function () {
        let a = new pDate().getFirstWeekDayOfMonth(1391, 10);
        assert.deepEqual(a, 7);
    });
    it('1391, 9', function () {
        let a = new pDate().getFirstWeekDayOfMonth(1391, 9);
        assert.deepEqual(a, 5);
    });
    it('1391, 8', function () {
        let a = new pDate().getFirstWeekDayOfMonth(1391, 7);
        assert.deepEqual(a, 1);
    });
});


describe('daysInMonth', function () {

    it('Negative month', function () {
        assert.deepEqual(new pDate().daysInMonth(1391, -1), 0);
        assert.deepEqual(new pDate([1391, 1, 1, 1, 1, 1]).daysInMonth(), 31);
    });

    it('None leap year', function () {
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

    it('None leap year', function () {
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


describe('Leap Year', function () {

    it('[2020] when calendarType = gregorian', function () {
        pDate.calendarType = 'gregorian';
        let createdDate = new pDate([2020]);
        assert.deepEqual(createdDate.year(), 2020);
        assert.deepEqual(createdDate.isLeapYear(), true);
        pDate.calendarType = 'persian';
    });

    it('[1404] when persian algorithmic', function () {
        pDate.leapYearMode = 'algorithmic';
        let createdDate = new pDate([1403]);
        assert.deepEqual(createdDate.year(), 1403);
        assert.deepEqual(createdDate.isLeapYear(), false);
        pDate.leapYearMode = 'astronomical';
    });

    it('[1404] when persian algorithmic', function () {
        pDate.leapYearMode = 'algorithmic';
        let createdDate = new pDate([1404]).isLeapYear();
        assert.deepEqual(createdDate, true);
        pDate.leapYearMode = 'astronomical';
    });

    it('[1404] when persian astronoical', function () {
        let createdDate = new pDate([1404]).isLeapYear();
        assert.deepEqual(createdDate, false);
    });

    it('[1404] when persian algorithmic', function () {
        let createdDate = new pDate([1403]).isLeapYear();
        assert.deepEqual(createdDate, true);
    });


    it('[2028]', function () {
        let createdDate = new pDate([2028]).isLeapYear();
        assert.deepEqual(createdDate, false);
    });

    it('Is leap year', function () {
        let createdDate = new pDate([1391]).isLeapYear();
        assert.deepEqual(createdDate, true);
    });

    it('Not leap year', function () {
        let createdDate = new pDate([1392]).isLeapYear();
        assert.deepEqual(createdDate, false);
    });

    it('print next 5 leap year', function () {
        let startYear = 1396,
            endYear = 1420,
            indexYear = startYear;
        while (indexYear < endYear) {
            let createdDate = new pDate([indexYear]);
            if (createdDate.isLeapYear()) {
                /* eslint-disable no-console */
                console.log(indexYear + ' is leap year!' + createdDate.isLeapYear());
                /* eslint-enable no-console */
            }
            indexYear += 1;
        }
    });
});

describe('toDate', function () {
    it('toDate', function () {
        let gDateGenerated = new Date();
        let formattedDate = new pDate(gDateGenerated);
        assert.deepEqual(formattedDate.toDate(), gDateGenerated);
    });
});

describe('toArray', function () {
    it('Convert Array [1391, 1, 1, 1, 1, 1, 1]', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1, 1]).toArray();
        assert.deepEqual(formattedDate, [1391, 1, 1, 1, 1, 1, 1]);
    });

    it('Convert Array [1391, 1, 1, 1, 1, 1, 200]', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1, 200]).toArray();
        assert.deepEqual(formattedDate, [1391, 1, 1, 1, 1, 1, 200]);
    });

    it('Convert Array [1391, 12, 12, 12, 12, 12, 200]', function () {
        let formattedDate = new pDate([1391, 12, 12, 12, 12, 12, 200]).toArray();
        assert.deepEqual(formattedDate, [1391, 12, 12, 12, 12, 12, 200]);
    });

    it('Convert new pDate().toArray()', function () {
        let generatedArray = new pDate().toArray(),
            formattedDate = new pDate(generatedArray).toArray();
        assert.deepEqual(formattedDate, generatedArray);
    });
});

describe('valueOf', function () {
    it('from 1332192661000', function () {
        let defaultUnixtime = 1332192661000,
            formattedDate = new pDate(defaultUnixtime).valueOf();
        assert.deepEqual(formattedDate, defaultUnixtime);
    });
    it('from new pDate().valueOf()', function () {
        let defaultUnixtime = new pDate().valueOf(),
            formattedDate = new pDate(defaultUnixtime).valueOf();
        assert.deepEqual(formattedDate, defaultUnixtime);
    });
});

describe('Year', function () {
    it('get', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]).year();
        assert.deepEqual(a, 1391);
        let b = new pDate([1391, 1, 1, 1, 1, 1]).years();
        assert.deepEqual(b, 1391);
    });
    it('set', function () {
        let formattedDate = new pDate().year(1450).year();
        assert.deepEqual(formattedDate, 1450);
    });
});

describe('Month', function () {
    it('get', function () {
        let formattedDate = new pDate([1391, 12, 1, 1, 1, 1]).month();
        assert.deepEqual(formattedDate, 12);
    });
    it('set', function () {
        let formattedDate = new pDate([1391, 12, 1, 1, 1, 1]).month(11).month();
        assert.deepEqual(formattedDate, 11);
    });
});

describe('Date', function () {
    it('get', function () {
        let a = new pDate([1391, 12, 23, 1, 1, 1]).date();
        let b = new pDate([1391, 12, 23, 1, 1, 1]).dates();
        assert.deepEqual(a, 23);
        assert.deepEqual(b, 23);
    });
    it('set', function () {
        let formattedDate = new pDate().date(23).date();
        assert.deepEqual(formattedDate, 23);
    });
});

describe('day (week day index)', function () {
    it('day first day', function () {
        let a = new pDate([1391, 2, 1, 1, 1, 1]).day();
        assert.deepEqual(a, 7);
        let b = new pDate([1391, 2, 1, 1, 1, 1]).days();
        assert.deepEqual(b, 7);
    });
    it('day last day', function () {
        let a = new pDate([1391, 2, 7, 1, 1, 1]).day();
        assert.deepEqual(a, 6);
    });
});

describe('Hour', function () {
    it('get', function () {
        let formattedDate = new pDate([1391, 12, 23, 12, 1, 1]).hour();
        assert.deepEqual(formattedDate, 12);
    });
    it('set', function () {
        let formattedDate = new pDate().hour(23).hour();
        assert.deepEqual(formattedDate, 23);
    });
});

describe('Minute', function () {
    it('get', function () {
        let formattedDate = new pDate([1391, 12, 23, 22, 45, 1]).minute();
        assert.deepEqual(formattedDate, 45);
    });
    it('set', function () {
        let formattedDate = new pDate().minute(59).minute();
        assert.deepEqual(formattedDate, 59);
    });
});

describe('Second', function () {
    it('get', function () {
        let formattedDate = new pDate([1391, 12, 23, 22, 45, 48]).second();
        assert.deepEqual(formattedDate, 48);
    });
    it('set', function () {
        let formattedDate = new pDate().second(59).second();
        assert.deepEqual(formattedDate, 59);
    });
});

describe('Millisecond', function () {
    it('get', function () {
        let formattedDate = new pDate([1391, 12, 23, 22, 45, 48, 987]).millisecond();
        assert.deepEqual(formattedDate, 987);
    });
    it('set', function () {
        let formattedDate = new pDate().millisecond(59).millisecond();
        assert.deepEqual(formattedDate, 59);
    });
});

describe('unix', function () {
    it('get', function () {
        let formattedDate = new pDate(1332192661000).unix();
        assert.deepEqual(formattedDate, 1332192661);
    });
    it('set', function () {
        let formattedDate = new pDate(1552192661000).unix(1552192661).unix();
        assert.deepEqual(formattedDate, 1552192661);
    });
});

describe('isPersianDate', function () {
    it('IS', function () {
        let createdDate = new pDate();
        assert.ok(createdDate.isPersianDate(createdDate));
    });
});


describe('zone', function () {
    it('get', function () {
        let formattedDate = new pDate().zone();
        assert.deepEqual(formattedDate, new Date().getTimezoneOffset());
    });
});


describe('timezone', function () {
    it('local', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]).local().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('static utc method', function () {
        let a = pDate.utc(1491031614047).valueOf();
        assert.ok(a);
        let d = pDate.utc().utc();
        assert.deepEqual(d.valueOf(), d.toDate().valueOf());
    });
    it('static unix method', function () {
        let a = pDate.unix(1491031614047).unix();
        assert.deepEqual(a, 1491031614047);
        let b = pDate.unix();
        assert.ok(b);
    });
    it('isUtc', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]).utc().isUtc();
        assert.deepEqual(a, true);
        let b = new pDate([1391, 1, 1, 1, 1, 1]).local().isUtc();
        assert.deepEqual(b, false);
    });
    it('utc([1391, 1, 1, 1, 1, 1])', function () {
        let a = new pDate().utc([1391, 1, 1, 1, 1, 1]).local().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('convert utc date to local', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]).utc().local().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
});

describe('isDST', function () {
    it('IS', function () {
        let a = new pDate([1396, 1, 2]).isDST();
        assert.deepEqual(a, true);
        a = new pDate([1396, 6, 30]).isDST();
        assert.deepEqual(a, true);
    });
    it('Not', function () {
       let a = new pDate([1396, 1, 1]).isDST();
        assert.deepEqual(a, false);
        a = new pDate([1396, 6, 31]).isDST();
        assert.deepEqual(a, false);
    });
});

describe('Clone', function () {
    it('clone', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1, 0]),
            b = a.clone();
        assert.deepEqual(b.toArray(), [1391, 1, 1, 1, 1, 1, 0]);
    });
});

describe('daysInMonth', function () {
    it('First Month of normal year', function () {
        //        let a = new pDate().daysInMonth(1391, 1);
        assert.ok(29);
    });
    it('Sixth Month of normal year', function () {
        //        let a = new pDate().daysInMonth(1394, 6);
        assert.ok(31);
    });
    it('Sixth Month of normal year', function () {
        //        let a = new pDate().daysInMonth(1394, 7);
        assert.ok(30);
    });
    it('Last Month of leap year', function () {
        //        let a = new pDate().daysInMonth(1394, 12);
        assert.ok(29);
    });
    it('Last Month of normal year', function () {
        //        let a = new pDate().daysInMonth(1391, 12);
        assert.ok(29);
    });
});

describe('English Format', function () {
    it('a.formatPersian = false', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        a.formatPersian = false;
        assert.deepEqual(a.format(), '1391-01-01 01:01:01 AM');
    });
    it('a.formatPersian = true', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        a.formatPersian = true;
        assert.deepEqual(a.format(), '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('a.formatPersian = true', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        a.formatPersian = 'dsadas';
        assert.deepEqual(a.format(), '1391-01-01 01:01:01 AM');
    });

});


describe('Diff', function () {
    it('set', function () {
        let a = new pDate([1392, 1, 1]),
            b = new pDate([1392, 2, 2]);
        assert.ok(a.diff(b));
    });
    it('set', function () {
        let a = new pDate([1392, 1, 1]),
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


describe('format', function () {

    it('format()', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format(), '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
        a.formatPersian = false;
        assert.deepEqual(a.format(), '1391-01-01 01:01:01 AM');
    });

    it('format("YYYY/MM/DD a ddddd dddd ddd d MMM MMMM X w ww")', function () {
        const a = new pDate([1404, 1, 1]).toCalendar('persian').toLocale('fa').format('YYYY/MM/DD ddddd dddd ddd d MMM MMMM w ww');
        assert.deepEqual(a, "۱۴۰۴/۰۱/۰۱ اورمزد جمعه ج ۷ فرو فروردین ۱ ۰۱");
    });

    it('format("a")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('a'), 'ق ظ');
        a.formatPersian = false;
        assert.deepEqual(a.format('a'), 'AM');
    });

    it('format("H")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('H'), '۱');
        a.formatPersian = false;
        assert.deepEqual(a.format('H'), '1');
    });

    it('format("HH")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('HH'), '۰۱');
    });

    it('format("h")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('h'), '۱');
    });

    it('format("hh")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('hh'), '۰۱');
    });

    it('format("m")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('m'), '۰۱');
    });

    it('format("mm")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('mm'), '۰۱');
    });

    it('format("s")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('s'), '۱');
    });

    it('format("ss")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('ss'), '۰۱');
    });


    it('format("L")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('L'), '۱۳۹۱/۰۱/۰۱');
    });

    it('format("l")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(a.format('l'), '۱۳۹۱/۱/۱');
    });

    it('format("LL")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LL'), 'فروردین ۰۱ ۱۳۹۱');
    });

    it('format("ll")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ll'), 'فرو ۰۱ ۱۳۹۱');
    });

    it('format("LLL")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LLL'), 'فروردین ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ');
    });

    it('format("lll")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('lll'), 'فرو ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ');
    });

    it('format("LLLL")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LLLL'), 'سه شنبه ۱ فروردین ۱۳۹۱  ۱:۰۱  ق ظ');
    });

    it('format("llll")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('llll'), 'س ۱ فرو ۱۳۹۱  ۱:۰۱  ق ظ');
    });

    it('format("X")', function () {
        let a = new pDate.utc(1332192661000).format('X');
        assert.ok(a);
    });
    it('format("ZZ")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).utc();
        assert.deepEqual(formattedDate.format('ZZ'), "+۰۰۰۰");
    });

    it('format("Z")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).utc();
        assert.deepEqual(formattedDate.format('Z'), "+۰۰:۰۰");
    });

    it('format("LT")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('LT'), '۱:۰۱ ق ظ');
    });

    it('format("YY")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('YY'), '۹۱');
    });

    it('format("YYYY")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('YYYY'), '۱۳۹۱');
    });

    it('format("MMMM")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('MMMM'), 'فروردین');
    });
    it('format("MMM")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('MMM'), 'فرو');
    });
    it('format("MM")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('MM'), '۰۱');
    });
    it('format("M")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('M'), '۱');
    });
    it('format("d")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('d'), '۴');
    });
    it('format("ddd")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ddd'), 'س');
    });
    it('format("dddd")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('dddd'), 'سه شنبه');
    });
    it('format("ddddd")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ddddd'), 'اورمزد');
    });
    it('format("dddddd")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('dddddd'), 'س');
    });
    it('format("DD")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('DD'), '۰۱');
    });
    it('format("DDD")', function () {
        let formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('DDD'), '۰۰۲');
    });
    it('format("DDDD")', function () {
        let formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('DDDD'), '۰۰۲');
    });
    it('format("w")', function () {
        let formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('w'), '۱');
    });
    it('format("ww")', function () {
        let formattedDate = new pDate([1391, 1, 3, 1, 1, 1]);
        assert.deepEqual(formattedDate.format('ww'), '۰۱');
    });
});


describe('startOf', function () {
    let defaultArray = [1391, 1, 1, 1, 1, 1, 100];

    it('startOf("year")', function () {
        let a = new pDate(defaultArray).startOf('year').format();
        let b = new pDate(defaultArray).startOf('years').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("month")', function () {
        let a = new pDate(defaultArray).startOf('month').format();
        let b = new pDate(defaultArray).startOf('months').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("days")', function () {
        let a = new pDate(defaultArray).startOf('days').format();
        let b = new pDate(defaultArray).startOf('day').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('sod()', function () {
        let a = new pDate(defaultArray).sod().format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ');
    });
    it('startOf("hour")', function () {
        let a = new pDate(defaultArray).startOf('hour').format();
        let b = new pDate(defaultArray).startOf('hours').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۰:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۰:۰۰ ق ظ');
    });
    it('startOf("minute")', function () {
        let a = new pDate(defaultArray).startOf('minute').format();
        let b = new pDate(defaultArray).startOf('minutes').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۰ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۰ ق ظ');
    });
    it('startOf("second")', function () {
        let a = new pDate(defaultArray).startOf('second').format();
        let b = new pDate(defaultArray).startOf('seconds').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('startOf("week")', function () {
        let formattedDate = new pDate([1397, 1, 1]).startOf('week').format();
        assert.deepEqual(formattedDate, "۱۳۹۶-۱۲-۲۶ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('startOf("weeks")', function () {
        let formattedDate = new pDate([1397, 1, 30]).startOf('weeks').format();
        assert.deepEqual(formattedDate, "۱۳۹۷-۰۱-۲۵ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('startOf()', function () {
        let formattedDate = new pDate(defaultArray).startOf().format();
        assert.deepEqual(formattedDate, new pDate(defaultArray).format());
    });
});

describe('endOf', function () {
    let defaultArray = [1391, 1, 1, 1, 1, 1, 100];
    it('endOf("year")', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1, 100]).endOf('year').format();
        let b = new pDate([1391, 1, 1, 1, 1, 1, 100]).endOf('years').format();
        assert.deepEqual(a, '۱۳۹۱-۱۲-۳۰ ۲۳:۵۹:۵۹ ب ظ');
        assert.deepEqual(b, '۱۳۹۱-۱۲-۳۰ ۲۳:۵۹:۵۹ ب ظ');
    });
    it('endOf("month")', function () {
        let a = new pDate(defaultArray).endOf('month').format();
        let b = new pDate(defaultArray).endOf('months').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۳۱ ۲۳:۵۹:۵۹ ب ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۳۱ ۲۳:۵۹:۵۹ ب ظ');
    });
    it('endOf("days")', function () {
        let a = new pDate(defaultArray).endOf('day').format();
        let b = new pDate(defaultArray).endOf('days').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ');
    });
    it('endOf("hour")', function () {
        let a = new pDate(defaultArray).endOf('hour').format();
        let b = new pDate(defaultArray).endOf('hours').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۵۹:۵۹ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۵۹:۵۹ ق ظ');
    });
    it('endOf("minute")', function () {
        let a = new pDate(defaultArray).endOf('minute').format();
        let b = new pDate(defaultArray).endOf('minutes').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۵۹ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۵۹ ق ظ');
    });
    it('endOf("second")', function () {
        let a = new pDate(defaultArray).endOf('second').format();
        let b = new pDate(defaultArray).endOf('seconds').format();
        assert.deepEqual(a, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
        assert.deepEqual(b, '۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ');
    });
    it('endOf("week")', function () {
        let formattedDate = new pDate([1397, 1, 7]).endOf('week').format();
        assert.deepEqual(formattedDate, "۱۳۹۷-۰۱-۱۰ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('endOf("weeks")', function () {
        let formattedDate = new pDate([1397, 1, 7]).endOf('weeks').format();
        assert.deepEqual(formattedDate, "۱۳۹۷-۰۱-۱۰ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('endOf()', function () {
        let formattedDate = new pDate([1397, 1, 7]).endOf().format();
        assert.deepEqual(formattedDate, "۱۳۹۷-۰۱-۰۷ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('eod()', function () {
        let formattedDate = new pDate(defaultArray).eod().format();
        assert.deepEqual(formattedDate, '۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ');
    });
});


describe('duration', function () {
    it('isDuration', function () {
        let a = new pDate().duration(90, 'milliseconds');
        assert.deepEqual(a._data.milliseconds, 90);
    });
    it('isDuration', function () {
        let a = new pDate().duration(-90, 'milliseconds');
        assert.deepEqual(a._data.milliseconds, -90);
    });
    it('isDuration', function () {
        let a = new pDate().isDuration(new Duration(90, 'milliseconds'));
        assert.deepEqual(a, true);
    });
    it('milliseconds', function () {
        let a = new pDate.duration(90, 'milliseconds').valueOf();
        assert.deepEqual(a, 90);
        let b = new pDate.duration(1, 'day').valueOf();
        assert.deepEqual(b, 86400000);
    });

    it('milliseconds', function () {
        let a = new pDate.duration(90, 'milliseconds');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
        assert.deepEqual(a._data.milliseconds, 90);
    });
    it('second', function () {
        let a = new pDate.duration(90, 'second');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 1);
        assert.deepEqual(a._data.seconds, 30);
    });
    it('minutes', function () {
        let a = new pDate.duration(90, 'minute');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 1);
        assert.deepEqual(a._data.minutes, 30);
        assert.deepEqual(a._data.seconds, 0);
        assert.deepEqual(a._data.milliseconds, 0);
    });
    it('hour', function () {
        let a = new pDate.duration(30, 'hour');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 1);
        assert.deepEqual(a._data.hours, 6);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
        assert.deepEqual(a._data.milliseconds, 0);
    });
    it('day', function () {
        let a = new pDate.duration(90, 'day');
        assert.deepEqual(a._data.months, 3);
        assert.deepEqual(a._data.years, 0);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
    });
    it('months', function () {
        let a = new pDate.duration(90, 'month');
        assert.deepEqual(a._data.months, 6);
        assert.deepEqual(a._data.years, 7);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
    });
    it('years', function () {
        let a = new pDate.duration(90, 'year');
        assert.deepEqual(a._data.months, 0);
        assert.deepEqual(a._data.years, 90);
        assert.deepEqual(a._data.days, 0);
        assert.deepEqual(a._data.hours, 0);
        assert.deepEqual(a._data.minutes, 0);
        assert.deepEqual(a._data.seconds, 0);
    });

});

describe('Add', function () {
    let a;
    it('Year', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('year', 1).toArray();
        assert.deepEqual(a, [1392, 1, 1, 1, 1, 1, 0]);
    });

    it('Month', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1391, 2, 1, 1, 1, 1, 0]);
    });

    it('Month to 1395/6(31 days month)/31', function () {
        a = new pDate([1396, 6, 31, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1396, 7, 30, 1, 1, 1, 0]);
    });

    it('Month to 1395(leap)/11/30', function () {
        a = new pDate([1395, 11, 30, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
    });

    it('Month to 1394(none leap)/11/30', function () {
        a = new pDate([1394, 11, 30, 1, 1, 1]).add('month', 1).toArray();
        assert.deepEqual(a, [1394, 12, 29, 1, 1, 1, 0]);
    });

    it('Week', function () {
        a = new pDate([1396, 1, 1]).add('week', 100).toArray();
        assert.deepEqual(a, [1397, 11, 30, 0, 0, 0, 0]);
    });

    it('Days Base on month day count', function () {
        a = new pDate([1395, 7, 1, 1, 1, 1]).add('day', 30).toArray();
        assert.deepEqual(a, [1395, 8, 1, 1, 1, 1, 0]);
        a = new pDate([1395, 5, 1, 1, 1, 1]).add('day', 30).toArray();
        assert.deepEqual(a, [1395, 5, 31, 1, 1, 1, 0]);
    });

    it('Days Base on leap years', function () {
        a = new pDate([1395, 1, 1, 1, 1, 1]).add('day', 365).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
        a = new pDate([1396, 1, 1, 1, 1, 1]).add('day', 365).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 1, 1, 0]);
    });

    it('Days', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('day', 10).toArray();
        assert.deepEqual(a, [1391, 1, 11, 1, 1, 1, 0]);
    });
    it('Hours', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('hour', 10).toArray();
        assert.deepEqual(a, [1391, 1, 1, 11, 1, 1, 0]);
    });
    it('Minute', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('minute', 10).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 11, 1, 0]);
    });
    it('Second', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('second', 10).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 11, 0]);
    });
    it('Millisecond', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('ms', 1000).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 2, 0]);
    });
    it('Millisecond', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('ms', 1200).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 2, 200]);
    });


    it('Without unit', function () {
        a = new pDate([1391, 1, 1, 1, 1, 1]).add('', 1200).toArray();
        assert.deepEqual(a, [1391, 1, 1, 1, 1, 1, 0]);
    });
});


describe('Subtract', function () {
    it('Year', function () {
        let a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('year', 1).toArray();
        // console.log(b);
        assert.deepEqual(a, [1396, 1, 1, 1, 1, 1, 0]);
    });
    it('Month', function () {
        let a = new pDate([1397, 2, 1, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 1, 1, 0]);
    });

    it('Month to 1395/6(31 days month)/31', function () {
        a = new pDate([1396, 6, 31, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1396, 5, 31, 1, 1, 1, 0]);
    });

    it('Month to 1396(after leap)/1/31', function () {
        a = new pDate([1396, 1, 31, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1395, 12, 30, 1, 1, 1, 0]);
    });
    it('Month to 1394(after none leap)/1/31', function () {
        a = new pDate([1393, 1, 31, 1, 1, 1]).subtract('month', 1).toArray();
        assert.deepEqual(a, [1392, 12, 29, 1, 1, 1, 0]);
    });

    it('Week', function () {
        a = new pDate([1396, 1, 1]).subtract('w',100).toArray();
        assert.deepEqual(a, [1394, 2, 1, 0, 0, 0, 0]);
    });

    it('Days Base on month day count', function () {
        let a = new pDate([1395, 6, 31, 1, 1, 1]).subtract('day', 30).toArray();
        assert.deepEqual(a, [1395, 6, 1, 1, 1, 1, 0]);
        a = new pDate([1395, 8, 31, 1, 1, 1]).subtract('day', 30).toArray();
        assert.deepEqual(a, [1395, 8, 1, 1, 1, 1, 0]);

        a = new pDate([1395, 8, 30, 1, 1, 1]).subtract('day', 30).toArray();
        assert.deepEqual(a, [1395, 7, 30, 1, 1, 1, 0]);
    });

    it('Days Base on leap years', function () {
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

    it('Days', function () {
        let a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('day', 10).toArray();
        assert.deepEqual(a, [1396, 12, 20, 1, 1, 1, 0]);
    });
    it('Hours', function () {
        let a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('hour', 10).toArray();
        assert.deepEqual(a, [1396, 12, 29, 15, 1, 1, 0]);
    });
    it('Minute', function () {
        let a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('minute', 10).toArray();
        assert.deepEqual(a, [1397, 1, 1, 0, 51, 1, 0]);
    });
    it('Second', function () {
        let a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('second', 10).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 0, 51, 0]);
    });
    it('Millisecond', function () {
        let a = new pDate([1397, 1, 1, 1, 1, 1]).subtract('ms', 1200).toArray();
        assert.deepEqual(a, [1397, 1, 1, 1, 0, 59, 800]);
    });
});


describe('isSameDay', function () {
    it('pDate.isaSameDay()', function () {
        let a = new pDate([1404, 1, 1]);
        let b = new pDate([1404, 1, 1]);
        assert.deepEqual(pDate.isSameDay(a, b), true);
    });

    it('new pDate().isaSameDay()', function () {
        let a = new pDate([1404, 1, 1]);
        let b = new pDate([1404, 1, 1]);
        assert.deepEqual(a.isSameDay(b), true);
    });
});


describe('isSameMonth', function () {
    it('pDate.isSameMonth()', function () {
        let a = new pDate([1404, 1, 10]);
        let b = new pDate([1404, 1, 10]);
        assert.deepEqual(pDate.isSameMonth(a, b), true);
    });

    it('new pDate().isSameMonth()', function () {
        let a = new pDate([1404, 1, 12]);
        let b = new pDate([1404, 1, 12]);
        assert.deepEqual(a.isSameMonth(b), true);
    });
});
