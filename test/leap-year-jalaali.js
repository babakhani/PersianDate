/*global describe,it*/

return true

let assert = require('assert');
let expect = require('chai').expect;
let obj = require('../dist/persian-date.js');
var jalaali = require('jalaali-js');
const pDate = obj;
pDate.formatPersian = true;
/**
 * @see  https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C
 * @see  http://www.fourmilab.ch/documents/calendar/calendar.js
 * @see  http://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js
 */

describe('Check total leap years in next 3003 year, Difference test between persianDateAstro, persianDateAlgo, jalaali', function () {
    it('Object Create Successfully', function () {
        let startYear = new pDate([1396]),
          totalLeapCountInAstro = 0,
          totalLeapCountInAlg = 0,
          totalLeapCountInJalaali = 0,
          totalJalaaliErrorCount = 0;
        let i = 1396;
        while (i < (1396 + 3003)) {
            const algo = startYear.toCalendar('persianAlgo').isLeapYear(i),
              astro = startYear.toCalendar('persianAstro').isLeapYear(i);
            if (algo) {
                totalLeapCountInAlg++;
            }
            if (astro) {
                totalLeapCountInAstro++;
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
        console.log("- Total jalaali leap year in next 3000 years: " + totalLeapCountInJalaali);
        console.log("- Total Algorithmic leap year in next 3000 years: " + totalLeapCountInAlg);
        console.log("- Total Astronomical leap year in next 3000 years: " + totalLeapCountInAstro);
        console.log("- Jalaali Error Count: " + totalJalaaliErrorCount);
        assert.deepEqual(totalLeapCountInAlg, totalLeapCountInAstro);
    });
});