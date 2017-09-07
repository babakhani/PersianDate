/*global describe,it*/
let assert = require('assert');
let obj = require('../dist/persian-date.js');
const pDate = obj;
pDate.formatPersian = true;
/**
 * @see  https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C
 * @see  http://www.fourmilab.ch/documents/calendar/calendar.js
 * @see  http://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js
 */
describe('Check total leap years in next 3003 year, Difference test between two leap year algorithm', function () {
    it('Object Create Successfully', function () {
        let startYearObjAlgo = new pDate(),
          commonLeapCount = 0,
          totalLeapCountInAstro = 0,
          totalLeapCountInAlg = 0;
        let i = 1396;
        while (i < (1396 + 3003)) {
            const algo = startYearObjAlgo.toCalendar('persianAlgo').isLeapYear(i),
              astro = startYearObjAlgo.toCalendar('persianAstro').isLeapYear(i);
            if (astro && algo) {
                commonLeapCount++;
            }
            if (astro) {
                totalLeapCountInAstro++;
            }
            if (algo) {
                totalLeapCountInAlg++;
            }
            i = i + 1;
        }
        console.log("- Total Common leap year in next 3000 years: " + commonLeapCount);
        console.log("- Total just in Astronomical: " + totalLeapCountInAstro);
        console.log("- Total just in Algorithmic: " + totalLeapCountInAlg);
        assert.deepEqual(totalLeapCountInAstro, totalLeapCountInAlg);
    });
});