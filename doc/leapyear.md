Note about Persian Date leap year calculation
==============

there is two popular way to determining leap years for the Persian calendar. 

astronomical: occur whenever that number of days elapse between equinoxes at the reference meridian.

algorithmic: based on Ahmad Birashk proposed algorithm.

After version 0.3.0 persianDate support both algorithm and you can choose which algorithm use in your project. 
currently we have support 3 type of calendar ``` gregorian ```, ``` persianAstro ```, ``` persianAlgo ```.

you can change it globaly like this example

```
persianDate.toCalendar('gregorian')
new persianDate().year(); // 2017
```

or chnage it in you instance

```
new persianDate().toCalendar('gregorian').year(); // 2017
new persianDate().year(); // 1396
```

also as you can see there is some deference leap years in algorithms.


```
new persianDate([1404]).toCalendar('persianAstro').isLeapYear(); // false
new persianDate([1404]).toCalendar('persianAlgo').isLeapYear(); // true
 
new persianDate([1403]).toCalendar('persianAstro').isLeapYear(); // true
new persianDate([1403]).toCalendar('persianAlgo').isLeapYear(); // false
 
```

## Deiffrent

I designed a test to understand the differences between these algorithms.

Check total leap years in next 3003 year after 1396, Difference test between persianDateAstro, persianDateAlgo, jalaali

you can see this result by run mocha test.

### Check total leap years in next 3003 year, Difference algorithm
  
- Total gregorian leap year: 728
- Total Nasa algorithm leap year: 727
- Total Algorithmic leap year: 727
- Total Astronomical leap year: 727
- Total Behrooz_Birashk leap year: 727
- Total Wikipedia python code leap year: 727

- Total Common leap year (persianAstro, persianAlgo, NASA, Behrooz_Birashk, wiki python, gregorian): 118

- Common leap year (persianAstro, NASA): 118
- Common leap year (persianAlgo, NASA): 727

- Common leap year (persianAstro, Behrooz_Birashk): 133
- Common leap year (persianAlgo, Behrooz_Birashk): 691

- Common leap year (persianAstro, wiki): 118
- Common leap year (persianAlgo, wiki): 711

- Total jalaali leap year: 431
- Jalaali Error Count: 1221




# More info:

[http://www.fourmilab.ch/documents/calendar/]

[https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C]

[https://en.wikipedia.org/wiki/Jalali_calendar]

[https://eclipse.gsfc.nasa.gov/SKYCAL/SKYCAL.html]

[http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm]