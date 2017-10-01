Persian Date leap year calculation
==============

There is two popular way to determining leap years for the Persian calendar. 
astronomical: occur whenever that number of days elapse between equinoxes at the reference meridian.

algorithmic: based on Ahmad Birashk proposed algorithm.

After version 0.3.0 persianDate support both algorithm and you can choose which algorithm use in your project. 
currently we have support 3 type of calendar ``` astronomical ```, ``` algorithmic ```.

you can change it globally like this example.

# Test leap years calculation algorithm

I designed a test to understand the differences between these algorithms.

Check total leap years in next 3003 year after 1396, Difference test between Astronomical, Algorithmic and some other algorithms I found.

you can see this result by run mocha test.

### Check total leap years in next 3003 year, Difference algorithm

```bash
- Total gregorian leap year: 728
- Total Nasa algorithm leap year: 727
- Total Algorithmic leap year: 727
- Total Astronomical leap year: 727
- Total Behrooz_Birashk leap year: 727
- Total Wikipedia python code leap year: 727

- Total Common leap year (persianAstro, persianAlgo, NASA, Behrooz_Birashk, wiki python, gregorian): 118

- Common leap year (Astronomical, NASA): 118
- Common leap year (Algorithmic, NASA): 727

- Common leap year (Astronomical, Behrooz_Birashk): 133
- Common leap year (Algorithmic, Behrooz_Birashk): 691

- Common leap year (Astronomical, wiki): 118
- Common leap year (Algorithmic, wiki): 711

```

# More info:

[fourmilab](http://www.fourmilab.ch/documents/calendar/) 
| 
[wikipedia](https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C)
|
[wikipedia Jalali_calendar](https://en.wikipedia.org/wiki/Jalali_calendar)
|
[NASA sky calendar](https://eclipse.gsfc.nasa.gov/SKYCAL/SKYCAL.html)
