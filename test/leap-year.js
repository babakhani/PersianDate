/*global describe,it*/
const assert = require('assert');
const obj = require('../dist/persian-date.js');
const jalaali = require('jalaali-js');
const pDate = obj;
pDate.formatPersian = true;
/**
 * @see  https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C
 * @see  http://www.fourmilab.ch/documents/calendar/calendar.js
 * @see  http://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js
 */

describe('Check total leap years in next 3003 year, Difference algorithm', function () {
    // https://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js
    const isLeapYearWithNasaAlgorithm = function (y) {
        return ((((((y - ((y > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    };

    // https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C
    const isLeapYearBirashk = function (year) {
        return parseFloat('0.' + ((year + 2346) * (0.24219858156)).toString().split('.')[1]) < 0.24219858156;
    };

    // https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D9%84_%DA%A9%D8%A8%DB%8C%D8%B3%D9%87
    const isLeapYearwikiPython = function (year) {
        const a = 0.025,
          b = 266;
        if (year > 0) {
            leapDays0 = ((year + 38) % 2820) * 0.24219 + a
            leapDays1 = ((year + 39) % 2820) * 0.24219 + a

        }
        else if (year < 0) {
            leapDays0 = ((year + 39) % 2820) * 0.24219 + a
            leapDays1 = ((year + 40) % 2820) * 0.24219 + a
        } else {
            return false
        }
        frac0 = parseInt((leapDays0 - parseInt(leapDays0)) * 1000)
        frac1 = parseInt((leapDays1 - parseInt(leapDays1)) * 1000)
        if (frac0 <= b && frac1 > b) {
            return true;
        } else {
            return false
        }
    };

    it('Object Create Successfully', function () {
        let startYear = new pDate([1396]),
          totalLeapCountInAstro = 0,
          totalLeapCountInAlg = 0,
          totalLeapCountInGre = 0,
          totalLeapCountInWikiPythonCode = 0,
          totalLeapCountInBirashk = 0,
          totalLeapCountInJalaali = 0,
          totalJalaaliErrorCount = 0,
          totalNasaAlgorithmCount = 0,
          totalCommonNasaAstroAlgo = 0,
          totalCommonNasaAstro = 0,
          totalCommonNasaAlgo = 0,
          totalCommonBirashkAstro = 0,
          totalCommonBirashkAlgo = 0,
          totalCommonWikiAstro = 0,
          totalCommonWikiAlgo = 0;
        let i = 1396;
        while (i < (1396 + 3003)) {
            const algo = startYear.toCalendar('persian').toLeapYearMode('algorithmic').isLeapYear(i),
              astro = startYear.toCalendar('persian').toLeapYearMode('astronomical').isLeapYear(i),
              gregorian = startYear.toCalendar('gregorian').isLeapYear(i),
              nasa = isLeapYearWithNasaAlgorithm(i),
              birash = isLeapYearBirashk(i),
              wikiPython = isLeapYearwikiPython(i);


            if (algo) {
                totalLeapCountInAlg++;
            }
            if (astro) {
                totalLeapCountInAstro++;
            }

            if (gregorian) {
                totalLeapCountInGre++;
            }

            if (wikiPython) {
                totalLeapCountInWikiPythonCode++;
            }

            if (birash) {
                totalLeapCountInBirashk++;
            }

            if (nasa) {
                totalNasaAlgorithmCount++;
            }

            if (nasa && algo && astro && wikiPython && birash) {
                totalCommonNasaAstroAlgo++;
            }

            if (nasa && astro) {
                totalCommonNasaAstro++;
            }

            if (nasa && algo) {
                totalCommonNasaAlgo++;
            }

            if (birash && astro) {
                totalCommonBirashkAstro++;
            }

            if (birash && algo) {
                totalCommonBirashkAlgo++;
            }

            if (wikiPython && astro) {
                totalCommonWikiAstro++;
            }

            if (wikiPython && algo) {
                totalCommonWikiAlgo++;
            }

            try {
                if (jalaali.isLeapJalaaliYear(i)) {
                    totalLeapCountInJalaali++;
                }
            }
            catch (err) {
                totalJalaaliErrorCount++;
            }
            i++;
        }

        console.log("- Total gregorian leap year: " + totalLeapCountInGre);
        console.log("- Total Nasa algorithm leap year: " + totalNasaAlgorithmCount);
        console.log("- Total Algorithmic leap year: " + totalLeapCountInAlg);
        console.log("- Total Astronomical leap year: " + totalLeapCountInAstro);
        console.log("- Total Behrooz_Birashk leap year: " + totalLeapCountInBirashk);
        console.log("- Total Wikipedia python code leap year: " + totalLeapCountInWikiPythonCode);
        console.log('');
        console.log("- Total Common leap year (nasa, astronomical, algorithmic, Behrooz_Birashk, wiki python, gregorian): " + totalCommonNasaAstroAlgo);
        console.log('');
        console.log("- Common leap year (astronomical, NASA): " + totalCommonNasaAstro);
        console.log("- Common leap year (algorithmic, NASA): " + totalCommonNasaAlgo);
        console.log('');
        console.log("- Common leap year (astronomical, Behrooz_Birashk): " + totalCommonBirashkAstro);
        console.log("- Common leap year (algorithmic, Behrooz_Birashk): " + totalCommonBirashkAlgo);
        console.log('');
        console.log("- Common leap year (astronomical, wiki): " + totalCommonWikiAstro);
        console.log("- Common leap year (algorithmic, wiki): " + totalCommonWikiAlgo);
        console.log('');
        console.log("- Total jalaali leap year: " + totalLeapCountInJalaali);
        console.log("- Jalaali Error Count: " + totalJalaaliErrorCount);
        console.log('');
        assert.deepEqual(totalLeapCountInAlg, totalLeapCountInAstro);
    });
});