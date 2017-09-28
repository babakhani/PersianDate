Persian Date
==============

Javascript date library for parsing, validating, manipulating, and formatting persian dates System.

Inspired by [momentjs](http://momentjs.com/)

More info at [wikipedia](http://en.wikipedia.org/wiki/Iranian_calendar)



[![npm version](https://badge.fury.io/js/persian-date.svg)](https://github.com/babakhani/persiandate)
[![Bower version](https://badge.fury.io/bo/persian-date.svg)](https://github.com/babakhani/persiandate)
[![Coverage Status](https://coveralls.io/repos/github/babakhani/PersianDate/badge.svg?branch=develop)](https://coveralls.io/github/babakhani/PersianDate?branch=develop)
[![Travis-ci](https://travis-ci.org/babakhani/PersianDate.svg?branch=master)](https://github.com/babakhani/persiandate)

<a class="github-button" href="https://github.com/babakhani/persiandate" data-icon="octicon-star" data-style="mega" data-count-href="/babakhani/persiandate/stargazers" data-count-api="/repos/babakhani/persiandate#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star babakhani/persiandate on GitHub">Star</a>
<a class="github-button" href="https://github.com/babakhani/persiandate/issues" data-icon="octicon-issue-opened" data-style="mega" data-count-api="/repos/babakhani/persiandate#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue babakhani/persiandate on GitHub">Issue</a>
<a class="github-button" href="https://github.com/babakhani/persiandate/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/babakhani/persiandate/network" data-count-api="/repos/babakhani/persiandate#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork babakhani/persiandate on GitHub">Fork</a>


## Install

```bash
npm install persian-date@beta --save-dev
bower install persian-date@beta --save-dev
```

## Browser

```html
<script src="node_modules/persian-date/dist/persian-date.js" type="text/javascript"></script>
<script type="text/javascript">
    new persianDate().format(); // "۱۳۹۶-۰۱-۱۱ ۲۳:۳۳:۲۷ ب ظ" (when i run in my console)  
</script>
```

## Parse

Instead of modifying the native ``` Date.prototype ``` , persianDate creates a wrapper for the Date object.
To get this wrapper object, simply call ``` persianDate() ``` with one of the supported input types.

### Now

```
persianDate();
```

To get the current date and time, just call ```persianDate()``` with no parameters.

```javascript
var now = new persianDate();
```

This is essentially the same as calling ```persianDate(new Date())``` .


### Unix Offset (milliseconds)

```
persianDate(/* Number */);
```

Similar to ``` new Date(Number)```, you can create a persianDate by passing an integer value representing the number of milliseconds since the Unix Epoch (Jan 1 1970 12AM UTC).


```javascript
var day = new persianDate(1318781876406); // "۱۳۹۰-۰۷-۲۴ ۱۹:۴۷:۵۶ ب ظ"
```

### Unix Timestamp (seconds)

```
persianDate.unix(/* Number */);
```

To create a persianDate from a Unix timestamp (seconds since the Unix Epoch), use ```persianDate.unix(Number)```

```javascript
var day = new persianDate.unix(1318781876); // "۱۳۹۰-۰۷-۲۴ ۱۹:۴۷:۵۶ ب ظ"
```

This is implemented as ```persianDate(timestamp * 1000)``` , so partial seconds in the input timestamp are included.

```javascript
var day = persianDate.unix(1318781876);
```

### Date

```javascript
new persianDate(new Date());
```

You can create a ```persianDate``` with a pre-existing native Javascript ```Date``` object.

```javascript
var day = new Date(2011, 9, 16);
var dayWrapper = new persianDate(day); // "۱۳۹۰-۰۷-۲۴ ۰۰:۰۰:۰۰ ق ظ"
```
This is the fastest way to get a persianDate.js wrapper.


### Array

```javascript
new persianDate([1391, 12, 29, 12, 25, 25, 900]);
```

You can create a persianDate with an array of numbers that mirror the parameters passed to new ```Date()``` But As Persian Date Number Like [1393,2,22,11,22,30]

> Note:In this version array of Gregorian Date dose not Support
> ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']

```javascript
new persianDate([1393, 1, 14, 15,25, 50,125]); // "۱۳۹۳-۰۱-۱۴ ۱۵:۲۵:۵۰ ب ظ"
```

Any value past the year is optional, and will default to the lowest possible number.

```javascript
new persianDate([1392]); // Farvardin 1st
new persianDate([1392, 6]); // Shahrivar 1st
new persianDate([1392, 6, 10]); // Shahrivar 10th
```


### ASP.NET JSON Date

```
new persianDate(String);
```

ASP.NET returns dates in JSON as ```/Date(1198908717056)/``` or ```/Date(1198908717056-0700)/```

If a string that matches this format is passed in, it will be parsed correctly.

```javascript
new persianDate("/Date(1198908717056-0700)/"); //"۱۳۸۶-۱۰-۰۸ ۰۹:۴۱:۵۷ ق ظ"
```


#### PesianDate Clone

```
new persianDate(persianDate);
```

All persianDate are mutable. If you want a clone of a persianDate, you can do so explicitly or implicitly.
Calling ```persianDate()``` on a persianDate will clone it.

```javascript
var a = new persianDate([1392]);
var b = new persianDate(a);
a.year(1300);
b.year(); // 1392
```

```javascript
var a = new persianDate([1392]);
var b = a.clone();
a.year(1300);
b.year(); // 1392
```

## Get + Set

persainDate.js uses overloaded getters and setters. You may be familiar with this pattern from it's use in jQuery.

Calling these methods without parameters acts as a getter, and calling them with a parameter acts as a setter.

These map to the corresponding function on the native ```Date``` object.

```javascript
new persianDate().seconds(30).valueOf() === new Date().setSeconds(30); // true
new persianDate().seconds() === new Date().getSeconds(); // true
`

## Millisecond

```javascript
new persianDate().millisecond(Number);
new persianDate().millisecond(); // Number
new persianDate().milliseconds(Number);
new persianDate().milliseconds(); // Number
```

Gets or sets the milliseconds.

Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the seconds.

### Second

```javascript
new persianDate().second(Number);
new persianDate().second(); // Number
new persianDate().seconds(Number);
new persianDate().seconds(); // Number
```

Gets or sets the seconds.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minutes.

### Minute

```javascript
new persianDate().minute(Number);
new persianDate().minute(); // Number
new persianDate().minutes(Number);
new persianDate().minutes(); // Number
```

Gets or sets the minutes.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hours.

### Hour

```javascript
new persianDate().hour(Number);
new persianDate().hour(); // Number
new persianDate().hours(Number);
new persianDate().hours(); // Number
```

Gets or sets the hour.

Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.

### Date of Month

```javascript
new persianDate().date(Number);
new persianDate().date(); // Number
new persianDate().dates(Number);
new persianDate().dates(); // Number
```

Gets or sets the day of the month.

Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the months.

Note: persianDate#date is for the date of the month, and persianDate#day is for the day of the week.

### Year

```javascript
new persianDate().year(Number);
new persianDate().year(); // Number
new persianDate().years(Number);
new persianDate().years(); // Number
```

Gets or sets the year.

Accepts numbers from -270,000 to 270,000.

### Day of Week

```javascript
new persianDate().day(); // Number
new persianDate().days(); // Number
```

Gets the day of the week.

Note: ```persianDate#date``` is for the date of the month, and ```persianDate#day``` is for the day of the week.


## Manipulate

Once you have a PersianDate , you may want to manipulate it in some way. There are a number of methods to help with this.

persianDate.js uses the [fluent interface pattern](http://en.wikipedia.org/wiki/Fluent_interface),
 also known as [method chaining](https://en.wikipedia.org/wiki/Method_chaining). This allows you to do crazy things like the following.

```javascript
new persianDate().add('days', 7).subtract('months', 1).year(2009).hours(0).minutes(0).seconds(0);
```

> Note: It should be noted that persianDates are mutable. Calling any of the manipulation methods will change the original persianDate.

If you want to create a copy and manipulate it, you should use ```persianDate#clone``` before manipulating the persianDate.


### Add

```javascript
new persianDate().add(String, Number);
```

Mutates the original persianDate by adding time.

This is a pretty robust function for adding time to an existing persianDate. To add time, pass the key of what time you want to add, and the amount you want to add.

```javascript
new persianDate().add('days', 7);
```

There are some shorthand keys as well if you're into that whole brevity thing.

```javascript
new persianDate().add('d', 7);
```

| Key	        | Alternate	    | Shorthand |
| ------------- |:-------------:|:-:|
| years	        | year	        | y |
| months	    | month	        | M |
| weeks	        | week	        | w |
| days	        | day	        | d |
| hours	        | hour	        | h |
| minutes	    | minute	    | m |
| seconds   	| second	    | s |
| milliseconds	| millisecond	| ms|

If you want to add multiple different keys at the same time, you can pass them in as an object literal.

```javascript
new persianDate().add('days', 7).add('months', 1); // with chaining
```

There are no upper limits for the amounts, so you can overload any of the parameters.

```javascript
new persianDate().add('milliseconds', 1000000); // a million milliseconds
new persianDate().add('days', 360); // 360 days
```

### Subtract

```javascript
new persianDate().subtract(String, Number);
```

Mutates the original persianDate by subtracting time.

This is exactly the same as ```persianDate#add``` , only instead of adding time, it subtracts time.

```javascript
new persianDate().subtract('days', 7);
```

### Start of Time

```javascript
new persianDate().startOf(String);
```

Mutates the original persianDate by setting it to the start of a unit of time.

```javascript
new persianDate().startOf('year');   // set to Farvardin 1st, 12:00 am this year
new persianDate().startOf('month');  // set to the first of this month, 12:00 am
new persianDate().startOf('week');   // set to the first day of this week, 12:00 am
new persianDate().startOf('day');    // set to 12:00 am today
new persianDate().startOf('hour');   // set to now, but with 0 mins, 0 secs, and 0 ms
new persianDate().startOf('minute'); // set to now, but with 0 seconds and 0 milliseconds
new persianDate().startOf('second'); // same as persianDate().milliseconds(0);
```

These shortcuts are essentially the same as the following.

```javascript
new persianDate().startOf('year');
new persianDate().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
```

```javascript
new persianDate().startOf('hour');
new persianDate().minutes(0).seconds(0).milliseconds(0)
```

### End of Time

```javascript
new persianDate().endOf(String);
```

Mutates the original persianDate by setting it to the end of a unit of time.

This is the same as ```persianDate#startOf``` , only instead of setting to the start of a unit of time, it sets to the end of a unit of time.

```javascript
new persianDate().endOf("year"); // set the persianDate to 12-31 11:59:59.999 pm this year
```

## Display

Once parsing and manipulation are done, you need some way to display the persianDate.


### Format

```javascript
new persianDate().format();
new persianDate().format(String);
```

This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.

```javascript
persianDate().format("dddd, MMMM DD YYYY, h:mm:ss a"); // "شنبه, فروردین ۱۲ ۱۳۹۶, ۵:۵۴:۱۱ ب ظ"
persianDate().format("dddd, ha"); // "شنبه, ۵ب ظ"
```

There are a couple conventions used with the naming of the


| Type	            | Tocken	    | Output |
| -------------     |:-------------:|:------:|
| Month             | M	            | ۱ ۲ ... ۱۱ ۱۲|
|        	        | MM	        | ۰۱ ۰۲ ... ۱۱ ۱۲|
|        	        | MMM	        | فرو ارد ... اسف|
|                   | MMMM	        | فروردین اردیبهشت ... اسفند |
| Day of month      | D            | ۱ ۲ ... ۳۰ ۳۱|
|                   | DD           | ۰۱ ۰۲ ... ۳۰ ۳۱|
| Day of year       | DDD          | ۱ ۲ ... ۳۶۴ ۳۶۵|
|                   | d            | ۰ ۱ ... ۵ ۶|
|                   | dd            | ش ی ... ج|
|                   | ddd       |شنبه یکشنبه ... جمعه|
|                   | dddd    |انارام مانتره سپند ... اشتاد |
| Week of Year      | w            | ۱ ۲ ... ۵۲ ۵۳ |
|                   | ww           | ۰۱ ۰۲ ... ۵۲ ۵۳ |
|Year               | YY           | ۶۶ ۹۱ ... ۹۸ ۳۰ |
|                   | YYY          | ۱۳۶۶ ۱۳۹۱ ... ۱۳۹۸ ۱۴۰۱ |
| AM/PM              | a            | "ق ظ", "ب ظ" |
| Hour              | H            | ۰ ۱ ... ۲۲ ۲۳ |
|                   | HH           | ۰۰ ۰۱ ... ۲۲ ۲۳ |
|                   | h            | ۱ ۲ ... ۱۱ ۱۲ |
|                   | hh           | ۰۱ ۰۲ ... ۱۱ ۱۲ |
| Minute            | m            | ۰ ۱ ... ۵۸ ۵۹ |
|                   | mm           | ۰۰ ۰۱ ... ۵۸ ۵۹ |
| Second            | s            | ۰ ۱ ... ۵۸ ۵۹ |
|                   | ss           | ۰۰ ۰۱ ... ۵۸ ۵۹ |
| Unix Timestamp     | X            | 1360013296 |
| Timezone          | Z            | -۰۴:۳۰ -۰۵:۰۰ ... +۰۴:۳۰ +۰۵:۰۰ |
|                   | ZZ           | -۰۴۳۰ -۰۵:۰۰ ... +۰۴:۳۰ +۰۵:۰۰ |


### Long Date formats

| Type	                                            | Tocken	    | Output |
| -------------                                     |:-------------:|:------:|
| Time                                              | LT            | "۴:۱۵ ب ظ"|
| Month numeral, day of month, year                 | L             | ۱۳۹۲/۰۲/۲۰ |
|                                                   | l             | ۳۹۲/۲/۲۰ |
| Month name, day of month, year                    | LL            | اردیبهشت ۲۰ ۱۳۹۲|
|                                                   | ll            | ارد ۲۰ ۱۳۹۲|
| Month name, day of month, year, time              | LLL           | اردیبهشت ۱۳۹۲ ۲۰ ۴:۲۳ ب ظ|
|                                                   | lll           | ارد ۱۳۹۲ ۲۰ ۴:۲۳ ب ظ|
| Month name, day of month, day of week, year, time | LLLL          | جمعه ۲۰ اردیبهشت ۱۳۹۲ ۴:۲۵ ب ظ |
|                                                   | llll          | ج ۲۰ ارد ۱۳۹۲ ۴:۲۷ ب ظ |


### Default format

ISO8601 format ```YYYY-MM-DDTHH:mm:ssZ```
"۱۳۹۱-۱۰-۰۴ ۱۱:۲۷:۵۳ ق ظ"


### Format To Persian date

By Default persianDate format, use Persian Number System, for engilsh number Set formatPersian Option as false

```javascript
var d = new persianDate([1391]);
d.format(); //"۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ"
window.formatPersian = false;
d.format(); //"1391-01-01 00:00:00 AM"
```

Also you can set golbal config like this
```javascript
window.formatPersian  = false;
```

> Note: After Set Golbal config you can set config for every instance

```javascript
var d = new persianDate([1391]);
d.format(); //"۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ"
window.formatPersian = false;
d.format(); //"1391-01-01 00:00:00 AM"
d.formatPersian = true;
d.format(); //"۱۳۹۱-۰۱-۰۱ ۰۰:۰۰:۰۰ ق ظ"
```
			
### Difference

```
new persianDate().diff(PersianDate|String|Boolean);
```

To get the difference in milliseconds, use ```persianDate#diff``` like you would use ```persianDate#from``` .

```javascript
var a = new persianDate([1392, 0, 29]);
var b = new persianDate([1392, 0,28]);
a.diff(b) // 86400000
```

To get the difference in another unit of measurement, pass that measurement as the second argument.

```javascript
var a = new persianDate([1392, 0,29]);
var b = new persianDate([1392,0,28]);
a.diff(b, 'days'); // 1
```

The supported measurements are years, months, weeks, days, hours, minutes, and seconds. For ease of development, the singular forms are supported .

```javascript
var a = new persianDate([1391, 0]);
var b = new persianDate([1392, 5]);
a.diff(b, 'years');
a.diff(b, 'years', true);
```


If the persianDate is later than the persianDate you are passing to ```persianDate.fn.diff``` , the return value will be negative.

```javascript
var a = new persianDate();
var b = new persianDate().add('seconds', 1);
a.diff(b); // -1000
b.diff(a); // 1000
```

A easy way to think of this is by replacing ```.diff(``` with a minus operator.

```javascript
a.diff(b);
b.diff(a);
```

### Unix Offset (milliseconds)

```javascript
new persianDate().valueOf();
```

```persianDate#valueOf``` simply outputs the number of milliseconds since the Unix Epoch, just like ```Date#valueOf``` .

```javascript
new persianDate(1318874398806).valueOf(); // 1318874398806
new persianDate(1318874398806).format(); // "۱۳۹۰-۰۷-۲۵ ۲۱:۲۹:۵۸ ب ظ"
```

To get a Unix timestamp (the number of seconds since the epoch) from a ```persianDate``` , use ```persianDate#unix``` .

### Unix Timestamp (seconds)

```javascript
new persianDate().unix();
```

```persianDate#unix``` outputs a Unix timestamp (the of seconds since the Unix Epoch).

```javascript
new persianDate(1318874398806).unix(); // 1318874398
```

This value is floored to the nearest second, and does not include a milliseconds component.

### Timezone Offset

```javascript
new persianDate().zone();
```

Get the timezone offset in minutes.

```javascript
new persianDate().zone(); // (60, 120, 240, -270, etc.)
```

### Days in Month

```javascript
new persianDate().daysInMonth();
```

Get the number of days in the current month.

```javascript
new persianDate([1392,1]).daysInMonth(); // 31
new persianDate([1392,8]).daysInMonth(); // 30
new persianDate([1392,12]).daysInMonth(); // 29
new persianDate([1391,12]).daysInMonth(); // 30
```

### As Javascript Date

```javascript
new persianDate().toDate();
```

To get the native ```Date``` object that ```persianDate.js``` wraps, use ```persianDate#toDate``` .

This will return the ```Date``` that the ```persianDate``` uses, so any changes to that ```Date``` will cause the persianDate to change. If you want a Date that is a copy, use ```persianDate#clone``` before you use ```persianDate#toDate``` .

### As Array

```javascript
new persianDate().toArray();
```

This returns an array that mirrors the parameters from new ```persianDate()``` .

```javascript
new persianDate().toArray(); // [1391, 1, 4, 14, 40, 16, 154];
```

## Quert

### Is Leap Year

```javascript
new persianDate().isLeapYear();
```

```persianDate#isLeapYear``` returns true if that year is a leap year, and ```false``` if it is not.

```javascript
new persianDate([1391]).isLeapYear(); // true
new persianDate([1392]).isLeapYear(); // false
new persianDate([1393]).isLeapYear(); // false
new persianDate([1394]).isLeapYear(); // false
new persianDate([1395]).isLeapYear(); // true
new persianDate([1396]).isLeapYear(); // false
```

### Is Daylight Saving Time

```javascript
new persianDate().isDST();
```

```persianDate#isDST``` checks if the current persianDate is in daylight savings time.

> Note: [Daylight saving time in Iran](https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C)

```javascript
new persianDate([1396, 2, 12]).isDST(); // false
new persianDate([1396, 7, 14]).isDST(); // true
```

### Is a PersainDate

```javascript
var obj = new persianDate();
new persianDate().isPersianDate(obj); // true
```

To check if a variable is a persianDate object, use ```persianDate().isPersianDate()``` .

```javascript
new persianDate().isPersianDate(); // false
new persianDate().isPersianDate(new Date()); // false
new persianDate().isPersianDate(persianDate()); // true
```