/*global describe,it*/
let assert = require('assert');
let pDate = require('../.tmp/persian-date');
const defaultArray = [1391, 1, 1, 1, 1, 1, 1];
pDate.formatPersian = true;

describe('Convert test', function () {
    const startUnix = 1490444803982,
        endUnix = 1490444803982 + 2000000;

    it('Object Create Successfully', function () {
        let indexUnix = startUnix;
        while (indexUnix < endUnix) {
            let pdArray = new pDate(indexUnix).toArray();
            let returnedFromArrayUnix = new pDate(pdArray).valueOf();
            console.log(new pDate(indexUnix).format());
            console.log("-----------");
            assert.deepEqual(returnedFromArrayUnix, indexUnix);
            indexUnix += 10000;
        }
    });
});

describe('Make Instance', function () {

    it('Init without any parameters', function () {
        let emptyInput = new pDate();
        assert.ok(emptyInput);
    });
    it('Init from array', function () {
        let createFromArray = new pDate(defaultArray);
        let createFromGdate = new pDate(createFromArray.gDate);
        assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
    });

    it('Object Format', function () {
        let createFromArray = new pDate(defaultArray);
        let createFromGdate = new pDate(createFromArray.gDate);
        assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
    });

    // TODO: Must fix
    // it('.Net', function () {
    //     let createFromDotNet = new pDate("/Date(1198908717056-0700)/");
    //     assert.ok(createFromDotNet);
    // });

    it('javascript Date()', function () {
        let gDateObject = new Date(),
            createFromDotNet = new pDate(gDateObject);
        assert.ok(createFromDotNet);
    });

    // TODO: Must fix
    // it('pDate()', function () {
    //     let pDateObject = new pDate(),
    //         createFromDotNet = new pDate(pDateObject);
    //     assert.ok(createFromDotNet);
    // });
});

// Done
describe('zone', function () {

    it('get', function () {
        let formattedDate = new pDate().zone();
        assert.deepEqual(formattedDate, new Date().getTimezoneOffset());
    });

    // TODO: Must fix
    // it('set', function () {
    //     let formattedDate = new pDate().zone(-180);
    //     assert.deepEqual(formattedDate, new Date().setTimezoneOffset(-180).getTimezoneOffset());
    // });
});

describe('daysInMonth', function () {

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
                console.log(indexYear + ' is leap year!' + createdDate.isLeapYear())
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
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).year();
        assert.deepEqual(formattedDate, 1391);
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
        let formattedDate = new pDate().month(11).month();
        assert.deepEqual(formattedDate, 11);
    });
});

describe('Date', function () {
    it('get', function () {
        let formattedDate = new pDate([1391, 12, 23, 1, 1, 1]).date();
        assert.deepEqual(formattedDate, 23);
    });
    it('set', function () {
        let formattedDate = new pDate().date(23).date();
        assert.deepEqual(formattedDate, 23);
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
    // TODO: Must fix
    it('set', function () {
        let formattedDate = new pDate(1552192661000).unix(1552192661).unix();
        assert.deepEqual(formattedDate, 1552192661);
    });
});

describe('isPersianDate', function () {
    // TODO: Must fix
    it('IS', function () {
        let createdDate = new pDate();
        assert.ok(createdDate.isPersianDate(createdDate));
    });
});

describe('timezone', function () {
    it('local', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).local().format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ");
    });
    it('utc', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).utc().format();
        assert.deepEqual(formattedDate, "۱۳۹۰-۱۲-۲۹ ۲۱:۳۱:۰۱ ب ظ");
    });
});


describe('Diff', function () {
    it('set', function () {
        let a = new pDate(),
            b = a.add('month', 1);
        assert.ok(a.diff(b));
    });
});

describe('isDST', function () {
    it('Year', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]).isDST();
        console.log(a);
        assert.ok(a);
    });
});


describe('Add', function () {
    it('Year', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]),
            b = a.add('year', 1).toArray();
        assert.deepEqual(b, [1392, 1, 1, 1, 1, 1]);
    });
    it('Month', function () {
        let a = new pDate([1391, 1, 1, 1, 1, 1]),
            b = a.add('month', 1).toArray();
        assert.deepEqual(b, [1391, 2, 1, 1, 1, 1]);
    });
});


describe('format', function () {
    it('format("a")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('a');
        assert.deepEqual(formattedDate, "ق ظ");
    });

    it('format("H")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('H');
        assert.deepEqual(formattedDate, "۱");
    });

    it('format("HH")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('HH');
        assert.deepEqual(formattedDate, "۰۱");
    });

    it('format("h")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('h');
        assert.deepEqual(formattedDate, "۱");
    });

    it('format("hh")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('hh');
        assert.deepEqual(formattedDate, "۰۱");
    });

    it('format("m")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('m');
        assert.deepEqual(formattedDate, "۰۱");
    });

    it('format("mm")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('mm');
        assert.deepEqual(formattedDate, "۰۱");
    });

    it('format("s")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('s');
        assert.deepEqual(formattedDate, "۱");
    });

    it('format("ss")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('ss');
        assert.deepEqual(formattedDate, "۰۱");
    });

    it('format("X")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('X');
        assert.deepEqual(formattedDate, 1332192661);
    });
    it('format("L")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('L');
        assert.deepEqual(formattedDate, "۱۳۹۱/۰۱/۰۱");
    });

    it('format("l")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('l');
        assert.deepEqual(formattedDate, "۱۳۹۱/۱/۱");
    });

    it('format("LL")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('LL');
        assert.deepEqual(formattedDate, "فروردین ۰۱ ۱۳۹۱");
    });

    it('format("ll")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('ll');
        assert.deepEqual(formattedDate, "فرو ۰۱ ۱۳۹۱");
    });

    it('format("LLL")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('LLL');
        assert.deepEqual(formattedDate, "فروردین ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ");
    });

    it('format("lll")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('lll');
        assert.deepEqual(formattedDate, "فرو ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ");
    });

    it('format("LLLL")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('LLLL');
        assert.deepEqual(formattedDate, "سه شنبه ۱ فروردین ۱۳۹۱  ۱:۰۱  ق ظ");
    });

    it('format("llll")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('llll');
        assert.deepEqual(formattedDate, "س ۱ فرو ۱۳۹۱  ۱:۰۱  ق ظ");
    });

    it('format("ZZ")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('ZZ');
        assert.deepEqual(formattedDate, "-۰۳۳۰");
    });

    it('format("Z")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('Z');
        assert.deepEqual(formattedDate, "-۰۳:۳۰");
    });

    it('format("YYYY")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('YYYY');
        assert.deepEqual(formattedDate, "۱۳۹۱");
    });

    it('format("MMMM")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('MMMM');
        assert.deepEqual(formattedDate, "فروردین");
    });
    it('format("MMM")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('MMM');
        assert.deepEqual(formattedDate, "فرو");
    });
    it('format("MM")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('MM');
        assert.deepEqual(formattedDate, "۰۱");
    });
    it('format("M")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('M');
        assert.deepEqual(formattedDate, "۱");
    });
    it('format("DD")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('DD');
        assert.deepEqual(formattedDate, "۰۱");
    });
    it('format("DDD")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('DDD');
        assert.deepEqual(formattedDate, "۰");
    });
});


describe('startOf', function () {
    let defaultArray = [1391, 1, 1, 1, 1, 1, 100];

    it('startOf("year")', function () {
        let formattedDate = new pDate(defaultArray).startOf('year').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('startOf("month")', function () {
        let formattedDate = new pDate(defaultArray).startOf('month').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('startOf("days")', function () {
        let formattedDate = new pDate(defaultArray).startOf('days').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
    });
    it('startOf("hour")', function () {
        let formattedDate = new pDate(defaultArray).startOf('hour').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۰:۰۰ ق ظ");
    });
    it('startOf("minute")', function () {
        let formattedDate = new pDate(defaultArray).startOf('minute').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۰ ق ظ");
    });
    it('startOf("second")', function () {
        let formattedDate = new pDate(defaultArray).startOf('second').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ");
    });
    it('startOf("week")', function () {
        let formattedDate = new pDate(defaultArray).startOf('week').format();
        assert.deepEqual(formattedDate, "۱۳۹۰-۱۲-۲۶ ۰۰:۰۰:۰۰ ق ظ");
    });
});

describe('endOf', function () {
    let defaultArray = [1391, 1, 1, 1, 1, 1, 100];
    it('endOf("year")', function () {
        let formattedDate = new pDate([1391, 1, 1, 1, 1, 1, 100]).endOf('year').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۱۲-۳۰ ۲۳:۵۹:۵۹ ب ظ");
    });
    it('endOf("month")', function () {
        let formattedDate = new pDate(defaultArray).endOf('month').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۳۱ ۲۳:۵۹:۵۹ ب ظ");
    });
    it('endOf("days")', function () {
        let formattedDate = new pDate(defaultArray).endOf('days').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ");
    });
    it('endOf("hour")', function () {
        let formattedDate = new pDate(defaultArray).endOf('hour').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۵۹:۵۹ ق ظ");
    });
    it('endOf("minute")', function () {
        let formattedDate = new pDate(defaultArray).endOf('minute').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۵۹ ق ظ");
    });
    it('endOf("second")', function () {
        let formattedDate = new pDate(defaultArray).endOf('second').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ");
    });
    it('endOf("week")', function () {
        let formattedDate = new pDate(defaultArray).endOf('week').format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۳ ۰۱:۰۰:۰۰ ق ظ");
    });

    it('eod()', function () {
        let formattedDate = new pDate(defaultArray).eod().format();
        assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۲۳:۵۹:۵۹ ب ظ");
    });
});

