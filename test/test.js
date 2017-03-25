/*global describe,it*/
let assert = require('assert');
let pDate = require('../.tmp/persian-date');
pDate.formatPersian = true;

//
describe('Make Instance', function () {
    const startUnix = 7927619499100,
        endUnix = 7927619499101;

    let indexUnix = startUnix;
    while (indexUnix <= endUnix) {



        let pdArray = new pDate(indexUnix).toArray();
        let returnedFromArrayUnix = new pDate(pdArray).valueOf();

        console.log(new pDate(indexUnix).format());
        console.log(pdArray);
        console.log(returnedFromArrayUnix);

        it('Object Create Successfully', function () {
            assert.deepEqual(returnedFromArrayUnix, indexUnix);
        });

        indexUnix++;
    }
});

//
// describe('Make Instance', function () {
//     it('Object Create Successfully', function () {
//         let emptyInput = new pDate();
//         assert.ok(emptyInput);
//     });
//     it('Object Format', function () {
//         let createFromArray = new pDate([1391, 1, 1, 1, 1, 1]);
//         let createFromGdate = new pDate(createFromArray.gDate);
//         assert.deepEqual(createFromArray.gDate, createFromGdate.gDate);
//     });
// });
//
// describe('zone', function () {
//     it('zone', function () {
//         let formattedDate = new pDate().zone();
//         assert.deepEqual(formattedDate, "-270");
//     });
// });
//
// describe('toDate', function () {
//     it('toDate', function () {
//         let gDateGenerated = new Date();
//         let formattedDate = new pDate(gDateGenerated);
//         assert.deepEqual(formattedDate.toDate(), gDateGenerated);
//     });
// });
//
// describe('toArray', function () {
//     it('toArray', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).toArray();
//         assert.deepEqual(formattedDate, [1391, 1, 4, 1, 1, 1, 0]);
//     });
// });
//
// describe('valueOf', function () {
//     it('valueOf', function () {
//         let formattedDate = new pDate(1332192661000).valueOf();
//         assert.deepEqual(formattedDate, 1332192661000);
//     });
// });
//
//
// describe('Date Method', function () {
//     it('year', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).year();
//         assert.deepEqual(formattedDate, 1391);
//     });
//     it('month', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).month();
//         assert.deepEqual(formattedDate, 1);
//     });
//     it('date', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).date();
//         assert.deepEqual(formattedDate, 1);
//     });
// });
//
// describe('unix', function () {
//     it('unix', function () {
//         let formattedDate = new pDate(1332192661000).unix();
//         assert.deepEqual(formattedDate, 1332192661);
//     });
// });
//
//
// describe('daysInMonth', function () {
//     it('daysInMonth', function () {
//         assert.deepEqual(new pDate().daysInMonth(1391, 1), 31);
//         assert.deepEqual(new pDate().daysInMonth(1391, 2), 31);
//         assert.deepEqual(new pDate().daysInMonth(1391, 3), 31);
//         assert.deepEqual(new pDate().daysInMonth(1391, 4), 31);
//         assert.deepEqual(new pDate().daysInMonth(1391, 5), 31);
//         assert.deepEqual(new pDate().daysInMonth(1391, 6), 31);
//         assert.deepEqual(new pDate().daysInMonth(1391, 7), 30);
//         assert.deepEqual(new pDate().daysInMonth(1391, 8), 30);
//         assert.deepEqual(new pDate().daysInMonth(1391, 9), 30);
//         assert.deepEqual(new pDate().daysInMonth(1391, 10), 30);
//         assert.deepEqual(new pDate().daysInMonth(1391, 11), 30);
//         assert.deepEqual(new pDate().daysInMonth(1391, 12), 30);
//         assert.deepEqual(new pDate().daysInMonth(1394, 12), 29);
//     });
// });
//
//
// describe('local', function () {
//     it('local', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).local();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۱ ق ظ");
//     });
// });
//
// describe('utc', function () {
//     it('utc', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).utc();
//         assert.deepEqual(formattedDate, "۱۳۹۰-۱۲-۲۹ ۲۱:۳۱:۰۱ ب ظ");
//     });
//
//     it('isUtc', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).isUtc();
//         assert.deepEqual(formattedDate, false);
//     });
//
//     it('isDST', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).isDST();
//         assert.deepEqual(formattedDate, false);
//     });
//     it('isLeapYear', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).isLeapYear();
//         assert.deepEqual(formattedDate, true);
//     });
// });
//
//
// describe('format', function () {
//     it('format("a")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('a');
//         assert.deepEqual(formattedDate, "ق ظ");
//     });
//
//     it('format("H")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('H');
//         assert.deepEqual(formattedDate, "۱");
//     });
//
//     it('format("HH")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('HH');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//
//     it('format("h")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('h');
//         assert.deepEqual(formattedDate, "۱");
//     });
//
//     it('format("hh")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('hh');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//
//     it('format("m")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('m');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//
//     it('format("mm")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('mm');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//
//     it('format("s")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('s');
//         assert.deepEqual(formattedDate, "۱");
//     });
//
//     it('format("ss")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('ss');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//
//     it('format("X")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('X');
//         assert.deepEqual(formattedDate, 1332192661);
//     });
//     it('format("L")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('L');
//         assert.deepEqual(formattedDate, "۱۳۹۱/۰۱/۰۱");
//     });
//
//     it('format("l")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('l');
//         assert.deepEqual(formattedDate, "۱۳۹۱/۱/۱");
//     });
//
//     it('format("LL")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('LL');
//         assert.deepEqual(formattedDate, "فروردین ۰۱ ۱۳۹۱");
//     });
//
//     it('format("ll")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('ll');
//         assert.deepEqual(formattedDate, "فرو ۰۱ ۱۳۹۱");
//     });
//
//     it('format("LLL")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('LLL');
//         assert.deepEqual(formattedDate, "فروردین ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ");
//     });
//
//     it('format("lll")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('lll');
//         assert.deepEqual(formattedDate, "فرو ۱۳۹۱ ۰۱   ۱:۰۱  ق ظ");
//     });
//
//     it('format("LLLL")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('LLLL');
//         assert.deepEqual(formattedDate, "سه شنبه ۱ فروردین ۱۳۹۱  ۱:۰۱  ق ظ");
//     });
//
//     it('format("llll")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('llll');
//         assert.deepEqual(formattedDate, "س ۱ فرو ۱۳۹۱  ۱:۰۱  ق ظ");
//     });
//
//     it('format("ZZ")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('ZZ');
//         assert.deepEqual(formattedDate, "-۰۳۳۰");
//     });
//
//     it('format("Z")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('Z');
//         assert.deepEqual(formattedDate, "-۰۳:۳۰");
//     });
//
//     it('format("YYYY")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('YYYY');
//         assert.deepEqual(formattedDate, "۱۳۹۱");
//     });
//
//     it('format("MMMM")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('MMMM');
//         assert.deepEqual(formattedDate, "فروردین");
//     });
//     it('format("MMM")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('MMM');
//         assert.deepEqual(formattedDate, "فرو");
//     });
//     it('format("MM")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('MM');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//     it('format("M")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('M');
//         assert.deepEqual(formattedDate, "۱");
//     });
//     it('format("DD")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('DD');
//         assert.deepEqual(formattedDate, "۰۱");
//     });
//     it('format("DDD")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).format('DDD');
//         assert.deepEqual(formattedDate, "۰");
//     });
// });


//
// describe('startOf', function () {
//     it('startOf("year")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('year').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("month")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('month').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("days")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('days').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("hour")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('hour').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("minute")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('minute').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("second")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('second').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("week")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('week').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
// });
//
//
// describe('endOf', function () {
//     it('endOf("year")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('year').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('endOf("month")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('month').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('endOf("days")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('days').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('endOf("hour")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('hour').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('endOf("minute")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('minute').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('endOf("second")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('second').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('endOf("week")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).endOf('week').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//
//     it('eod()', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).eod().format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
// });
//
//
// describe('startOf', function () {
//     it('startOf("year")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('year').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("month")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('month').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("days")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('days').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("hour")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('hour').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("minute")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('minute').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۱:۰۱:۰۰ ق ظ");
//     });
//     it('startOf("second")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('second').format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
//     it('startOf("week")', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).startOf('week').format();
//         assert.deepEqual(formattedDate, "۱۳۹۰-۱۲-۲۶ ۰۰:۰۰:۰۰ ق ظ");
//     });
//
//     it('sod()', function () {
//         let formattedDate = new pDate([1391, 1, 1, 1, 1, 1]).sod().format();
//         assert.deepEqual(formattedDate, "۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ");
//     });
// });