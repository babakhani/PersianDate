# Persian Date Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] - 2019-07-07
- Fix [52](https:g//github.com/babakhani/PersianDate/issues/52)
- Fix [53](https://github.com/babakhani/PersianDate/issues/53)
- Fix [56](https://github.com/babakhani/PersianDate/issues/56)
- Fix [71](https://github.com/babakhani/PersianDate/issues/71)
- Fix [49](https://github.com/babakhani/PersianDate/issues/49)
- Support zero and negative values in input array
- Validate array input, Prevent ngative value for month/date/hour/minute/seconds   
- Fix state manager naming "ON" to "State"
- Fix startOf week bug
- Fix add/subtract week issue

## [1.0.5] - 2018-2-11
- Fix [35](https://github.com/babakhani/PersianDate/issues/35)

## [1.0.4] - 2018-1-27
- Fix [43](https://github.com/babakhani/PersianDate/issues/43)
- Fix [44](https://github.com/babakhani/PersianDate/issues/44)

## [1.0.3] - 2017-12-24
- Fix [183](https://github.com/babakhani/pwt.datepicker/issues/183)
- Fix [41](https://github.com/babakhani/PersianDate/issues/41)

## [1.0.1] - 2017-10-1
- Fix npm published package

## [1.0.0] - 2017-10-1
- Refactor algorithms
- Support gregorian calendar type
- Support two persian leap year calculation mode
- Add toCalendar, toLocale, toLeapYearMode options
- Fix isDST method
- Fix add subtract issue with bubbled days
- Add rangeName, isSameDay, isSameMonth
- Write more test

## [0.2.5]
- Fix [#37](https://github.com/babakhani/PersianDate/issues/37)

## [0.2.4]
- Merge bit-foundation-typings .d.ts

## [0.2.2]
- Fix bower 

## [0.2.1]
- Some dev env fix before release 

## [0.2.0] 
- Refactor all code to es6
- Hello webpack ,babel, mocha, istanbul, coveralls, travis, sync-pg
- Add millisecond as last item of date array [1396, 12, 23, 40, 40, 40, 200]
- Write mocha test
- Change licence to WTFPL

## [0.1.8]
- Fix some issue
- Add document

## [0.1.7] - 2015-01-05
- Fix Format Like Moment.js
- Fix formatPersian Config
- Fix Constructor Without New Keyword
- Fix #daysInMonth
- Add #toArray
- Fix persianDate.unix(input)  
