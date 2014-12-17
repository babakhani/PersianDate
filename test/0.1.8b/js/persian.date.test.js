

var globalTextstringFromat = "YYYY-MM-DD HH:mm:ss a";


module("Parse");


/**
 *
 */
test("Parse", function () {
    // Empty input
    var emptyInput = new persianDate();
    ok(emptyInput, "Object Created Succeed :)");
    // Cloning From persianDate
    var persianDateInput = new persianDate();
    var makedDate = new persianDate(persianDateInput);
    deepEqual(persianDateInput.format(), makedDate.format(), "Object Cloning from self Succeed  :)");
    // Array  Init
    arraySample = [
        {
            key: [1391, 12, 1, 2, 3, 4],
            trueResult: "۱۳۹۱-۱۲-۰۱ ۰۲:۰۳:۰۴ ق ظ"
        },
        {
            key: [1391, 12, 1, 2, 3],
            trueResult: "۱۳۹۱-۱۲-۰۱ ۰۲:۰۳:۰۰ ق ظ"
        },
        {
            key: [1391, 12, 1, 2],
            trueResult: "۱۳۹۱-۱۲-۰۱ ۰۲:۰۰:۰۰ ق ظ"
        },
        {
            key: [1391, 12, 1],
            trueResult: "۱۳۹۱-۱۲-۰۱ ۰۰:۰۰:۰۰ ق ظ"
        },
        {
            key: [1391, 12],
            trueResult: "۱۳۹۱-۱۲-۰۱ ۰۰:۰۰:۰۰ ق ظ"
        },
        {
            key: [1391, 12, -1],
            trueResult: "۱۳۹۱-۱۱-۲۹ ۰۰:۰۰:۰۰ ق ظ"
        }
    ];

    for (i in arraySample) {
        // Array input
        var input = arraySample[i].key;
        var arrayInput = new persianDate(input).format(globalTextstringFromat);
        deepEqual(arrayInput, arraySample[i].trueResult, "Array : [" + arraySample[i].key + "]  === " + arrayInput);
    }

    ok(1, "-----------------------------------------");
    ok(1, "---------------------------  From To Date");
    // Date input
    var todayDate = new Date();
    var dateInput = new persianDate(todayDate).format(globalTextstringFromat);
    ok(dateInput, "Today (From Date()) === " + dateInput);

    // unix time span input
    var todayUnix = new Date().valueOf();
    var unixInput = new persianDate(todayUnix).format(globalTextstringFromat);
    ok(unixInput, "Today (From Unix) === " + unixInput);
});


/**
 *
 */
test("Format", function () {
    var fString = [
        {
            key: "",
            trueResult: "۱۳۹۱-۱۰-۰۴ ۱۱:۲۷:۵۳ ق ظ"
        },
        {
            key: "YY",
            trueResult: "۹۱"
        },
        {
            key: "YYYY",
            trueResult: "۱۳۹۱"
        },
        {
            key: "YYYY/M",
            trueResult: "۱۳۹۱/۱۰"
        },
        {
            key: "YYYY/MM",
            trueResult: "۱۳۹۱/۱۰"
        },
        {
            key: "YYYY/MMM",
            trueResult: "۱۳۹۱/دی"
        },
        {
            key: "YYYY/MM/D",
            trueResult: "۱۳۹۱/۱۰/۴"
        },
        {
            key: "YYYY/MM/DD",
            trueResult: "۱۳۹۱/۱۰/۰۴"
        },
        {
            key: "YYYY/MM/ddd",
            trueResult: "۱۳۹۱/۱۰/د"
        },
        {
            key: "YYYY/MM/dddd",
            trueResult: "۱۳۹۱/۱۰/دوشنبه"
        },
        {
            key: "YYYY/MM/ddddd",
            trueResult: "۱۳۹۱/۱۰/شهریور"
        },
        {
            key: "YYYY/MM/DD ** H",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱"
        },
        {
            key: "YYYY/MM/DD ** HH",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱"
        },
        {
            key: "YYYY/MM/DD ** HH:m",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷"
        },
        {
            key: "YYYY/MM/DD ** HH:mm",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷"
        },
        {
            key: "YYYY/MM/DD ** HH:mm:s",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷:۵۳"
        },
        {
            key: "YYYY/MM/DD ** HH:mm:ss",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷:۵۳"
        },
        {
            key: "YYYY/MM/DD ** HH:mm:ss ---- a",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷:۵۳ ---- ق ظ"
        },
        {
            key: "YYYY/MM/DD ** HH:mm:ss ---- a ---- Z",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷:۵۳ ---- ق ظ ---- -۰۳:۳۰"
        },
        {
            key: "YYYY/MM/DD ** HH:mm:ss ---- a ---- ZZ",
            trueResult: "۱۳۹۱/۱۰/۰۴ ** ۱۱:۲۷:۵۳ ---- ق ظ ---- -۰۳۳۰"
        },
        {
            key: "L",
            trueResult: "۱۳۹۱/۱۰/۰۴"
        },
        {
            key: "l",
            trueResult: "۱۳۹۱/۱۰/۴"
        },
        {
            key: "LL",
            trueResult: "دی ۰۴ ۱۳۹۱"
        },
        {
            key: "ll",
            trueResult: "دی ۰۴ ۱۳۹۱"
        },
        {
            key: "LLL",
            trueResult: "دی ۱۳۹۱ ۰۴   ۱۱:۲۷  ق ظ"
        },
        {
            key: "lll",
            trueResult: "دی ۱۳۹۱ ۰۴   ۱۱:۲۷  ق ظ"
        },
        {
            key: "LLLL",
            trueResult: "دوشنبه ۴ دی ۱۳۹۱  ۱۱:۲۷  ق ظ"
        },
        {
            key: "llll",
            trueResult: "د ۴ دی ۱۳۹۱  ۱۱:۲۷  ق ظ"
        },
        {
            key: "X",
            trueResult: "1356335873"
        },
        {
            key: "Z",
            trueResult: "-۰۳:۳۰"
        },
        {
            key: "ZZ",
            trueResult: "-۰۳۳۰"
        }
    ];
    //  "L", "LL", "LLL", "LLLL"];
    for (i in fString) {
        var output = new persianDate([1391, 10, 4, 11, 27, 53]).format(fString[i].key);
        deepEqual(output, fString[i].trueResult, output);
    }
    ;
});
module("Manipulate");
test("Add Subtract Long", function () {
    var dateInputArray = [1391, 11, 1, 22, 3, 4];
    var result = "۱۳۹۱-۱۱-۰۱ ۲۲:۰۳:۰۴ ب ظ";
    var numParam = 6000;
    var keyArray = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
    for (i in keyArray) {
        var pManipulDate = new persianDate(dateInputArray).add(keyArray[i], numParam).subtract(keyArray[i], numParam).format();
        deepEqual(pManipulDate, result, "Add " + keyArray[i] + " passed.");
    }
});
test("Add Subtract Short", function () {
    var dateInputArray = [1391, 11, 1, 22, 3, 4];
    var result = "۱۳۹۱-۱۱-۰۱ ۲۲:۰۳:۰۴ ب ظ";
    var numParam = 6000;
    var keyArray = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
    for (i in keyArray) {
        var pManipulDate = new persianDate(dateInputArray).subtract(keyArray[i], numParam).add(keyArray[i], numParam).format();
        deepEqual(pManipulDate, result, "Add " + keyArray[i] + " passed.");
    }
});
module("Days in month");
test("days in moth", function () {
    var leapYear = 1391;
    var normalYear = 1390;
    for (i in range(6)) {
        var month = parseInt(i) + 1;
        var t = new persianDate().daysInMonth(normalYear, month);
        deepEqual(t, 31, normalYear + "/" + month + "/ = 31 passed");
    }
    for (i in range(5)) {
        var month = parseInt(i) + 7;
        var t = new persianDate().daysInMonth(normalYear, month);
        deepEqual(t, 30, normalYear + "/" + month + "/ = 30 passed");
    }
    var t = new persianDate().daysInMonth(normalYear, 12);
    deepEqual(t, 29, " 1391/12/ = 29 Normal year passed");
    var t = new persianDate().daysInMonth(leapYear, 12);
    deepEqual(t, 30, " 1391/12/ = 30 Leap year passed");
});
module("Getters Setters");
test("Get", function () {
    var t = new persianDate().seconds();
    ok(t, "Get Now Seconds: " + t);
    var t = new persianDate().minutes();
    ok(t, "Get Now minutes: " + t);
    var t = new persianDate().hours();
    if (t === 0) {
        t = true;
    }
    ;
    ok(t, "Get Now Hours: " + t);
    var t = new persianDate().date();
    ok(t, "Get Now Date of the Month: " + t);
    var t = new persianDate().day();
    if (t === 0) {
        t = true;
    }
    ;
    ok(t, "Get Now Day of the Week: " + t);
    var t = new persianDate().month();
    ok(t, "Get Now Month: " + t);
    var t = new persianDate().year();
    ok(t, "Get Now Year: " + t);
    var t = new persianDate().zone();
    ok(t, "Get Zone: " + t);
    var t = new persianDate(1318874398806).valueOf();
    deepEqual(t, 1318874398806, "Get valueOf Passed: " + t);
    var t = new persianDate(1318874398806).unix();
    deepEqual(t, 1318874398, "Get unix: " + t);
    var t = new persianDate().toDate();
    ok(t, "Get toDate: " + t);
});


module("Leap Year");
test("Leap Year", function () {
    var t = new persianDate([1391]).isLeapYear();
    ok(t, "1391 Is Leap Year Passed: " + t);
    var t = new persianDate([1392]).isLeapYear();
    ok(!t, "1392 Is Not Leap Year Passed: " + t);
});


module("Diff");
test("Leap Year", function () {
    var t1 = new persianDate([1391]);
    var t2 = new persianDate([1392]);
    var tt = t1.diff(t2, "days");
    equal(tt, -366, "years between 1391 days: " + tt);
    var t1 = new persianDate([1392]);
    var t2 = new persianDate([1393]);
    var tt = t1.diff(t2, "days");
    equal(tt, -365, "years between 1391 1392 as days: " + tt);
    var t1 = new persianDate([1392]);
    var t2 = new persianDate([1393]);
    var tt = t1.diff(t2, "years");
    equal(tt, -1, "years between 1391 1392 as Years: " + tt);
});


module("Strat Of / End OF");
test("Strat Of", function () {
    var dateArray = [1392, 10, 3, 10, 10, 10];
    var t1 = new persianDate(dateArray);
    var keyArray = ["year", "month", "day", "hour", "minute", "second", "week"];
    for (i in keyArray) {
        var t2 = t1.startOf(keyArray[i]).format("YY-MM-DD HH:mm:ss DDDD");
        ok(t2, "start  --" + keyArray[i] + "--  of  " + dateArray + "  is: " + t2)
    }
});
test("End Of", function () {
    var dateArray = [1389, 12, 27];
    var t1 = new persianDate(dateArray);
    var keyArray = ["year", "month", "day", "hour", "minute", "second", "week"];
    var keyArray = ["month"];

    for (i in keyArray) {
        var t2 = t1.endOf(keyArray[i]).format("YY-MM-DD HH:mm:ss DDDD");
        ok(t2, "End  --" + keyArray[i] + "--  of  " + dateArray + "  is: " + t2)
    }
});
test("sod & eod", function () {
    var dateArray = [1391, 10, 3];
    var t1 = new persianDate(dateArray);
    var t2 = t1.sod().format("YY-MM-DD HH:mm:ss DDDD");
    ok(t2, "SOD  of  " + dateArray + "  is: " + t2)
    var t2 = t1.eod().format("YY-MM-DD HH:mm:ss DDDD");
    ok(t2, "EOD  of  " + dateArray + "  is: " + t2)
});
module("Diffre");
test("Diffre", function () {
    var dateArray = [1391, 10, 3, 10, 10, 10];
    var t1 = new persianDate(dateArray);
    var dateArray2 = [1392, 10, 3, 10, 10, 10];
    var t2 = new persianDate(dateArray2);

    var keyArray = [
        {
            key: "years",
            trueResult: -1
        },
        {
            key: "months",
            trueResult: -12
        },
        {
            key: "days",
            trueResult: -366
        },
        {
            key: "hours",
            trueResult: -8784
        },
        {
            key: "minutes",
            trueResult: -527040
        },
        {
            key: "seconds",
            trueResult: -31622400
        }
    ];
    for (i in keyArray) {
        var t3 = t1.diff(t2, keyArray[i].key);
        deepEqual(t3, keyArray[i].trueResult, "Diff " + keyArray[i].key + " Passed ! " + t3);
    }
    ;
});

module("Convert");
test("Convert", function () {
    var arrayStart = [10, 1, 1];

    i = 0;
    while (i < 300) {

        var pd = new persianDate(arrayStart);
        var gd = pd.toDate();
        var gpd = new Date(pd.toDate());
        arrayStart[2] = i;
        i++;
        deepEqual(gd, gpd, "Passed : " + pd.format("YYYY - MM - DD *** HH:mm"))
    }
});


module("DST");
test("Dst", function () {
    /// IS Not DST
    var pd = new persianDate([1391, 1, 1]);
    equal(pd.isDST(), false, pd.format("YYYY - MM - DD *** HH:mm") + " Is Not DST")

    pd = new persianDate([1391, 6, 31]);
    equal(pd.isDST(), false, pd.format("YYYY - MM - DD *** HH:mm") + " Is Not DST")

    pd = new persianDate([1391, 1, 2]);
    equal(pd.isDST(), false, pd.format("YYYY - MM - DD *** HH:mm") + " Is Not DST")

    pd = new persianDate([1391, 6, 30]);
    equal(pd.isDST(), false, pd.format("YYYY - MM - DD *** HH:mm") + " Is Not DST")

    pd = new persianDate([1391, 4, 30]);
    equal(pd.isDST(), false, pd.format("YYYY - MM - DD *** HH:mm") + " Is Not DST")

    /// IS DST
    pd = new persianDate([1391, 7, 2]);
    equal(pd.isDST(), true, pd.format("YYYY - MM - DD *** HH:mm") + " Is DST")

    pd = new persianDate([1391, 10, 20]);
    equal(pd.isDST(), true, pd.format("YYYY - MM - DD *** HH:mm") + " Is DST")

    pd = new persianDate([1391, 12, 30]);
    equal(pd.isDST(), true, pd.format("YYYY - MM - DD *** HH:mm") + " Is DST")

});



