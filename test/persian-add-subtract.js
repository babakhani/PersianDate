/*global describe,it*/
let assert = require('assert');
require('amd-loader');
let pDate = require('../dist/persian-date.js');

// leap (95 is leap)
const sampleDate1_1 = [1394, 12, 30, 23, 59, 59, 0]; // non-exist date
const sampleDate1_2 = [1395, 1, 1, 0, 0, 0, 0];
const sampleDate1_3 = [1395, 12, 30, 23, 59, 59, 0];
// DST 1:
const sampleDate2_1 = [1395, 1, 1, 23, 59, 59, 0];
const sampleDate2_2 = [1395, 1, 2, 1, 0, 0, 0];
// DST 2:
const sampleDate3_1 = [1395, 6, 30, 23, 59, 59, 0];
const sampleDate3_2 = [1395, 6, 31, 0, 0, 0, 0]; // => fall to 23
// end of year
const sampleDate4_1 = [1396, 12, 29, 23, 59, 59, 0];
const sampleDate4_2 = [1397, 1, 1, 0, 0, 0, 0];
// end of century
const sampleDate5_1 = [1399, 12, 29, 23, 59, 59, 0];
const sampleDate5_2 = [1400, 1, 1, 0, 0, 0, 0];
// ordinary
const sampleDate6_1 = [1398, 2, 10, 10, 30, 45, 999];
const sampleDate6_2 = [1398, 2, 28, 10, 30, 45, 0];
const sampleDate6_3 = [1395, 12, 28, 10, 30, 45, 0];

pDate.formatPersian = true;

describe('Add', function() {
  // add 0 year
  // --------------------

  it('0 year to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('year', 0).toArray();
    assert.deepEqual(a, sampleDate1_2);
  });

  it('0 year to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('year', 0).toArray();
    assert.deepEqual(a, sampleDate1_3);
  });

  it('0 year to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('year', 0).toArray();
    assert.deepEqual(a, sampleDate2_1);
  });

  it('0 year to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('year', 0).toArray();
    assert.deepEqual(a, sampleDate2_2);
  });

  it('0 year to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('year', 0).toArray();
    assert.deepEqual(a, sampleDate3_1);
  });

  it('0 year to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('year', 0).toArray();
    assert.deepEqual(a, sampleDate3_2);
  });

  // add 1 year
  // --------------------
  it('1 year to sample date 1_1', function() {
    const a = new pDate(sampleDate1_1).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 1, 1, 23, 59, 59, 0]);
  });

  it('1 year to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 1, 1, 0, 0, 0, 0]);
  });

  it('1 year to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 12, 29, 23, 59, 59, 0]);
  });

  it('1 year to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 1, 1, 23, 59, 59, 0]);
  });

  it('1 year to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 1, 2, 1, 0, 0, 0]);
  });

  it('1 year to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 6, 30, 23, 59, 59, 0]);
  });

  it('1 year to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('year', 1).toArray();
    assert.deepEqual(a, [1396, 6, 31, 0, 0, 0, 0]);
  });

  it('1 year to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('year', 1).toArray();
    assert.deepEqual(a, [1397, 12, 29, 23, 59, 59, 0]);
  });

  it('1 year to sample date 4_2', function() {
    const a = new pDate(sampleDate4_2).add('year', 1).toArray();
    assert.deepEqual(a, [1398, 1, 1, 0, 0, 0, 0]);
  });

  it('1 year to sample date 5_1', function() {
    const a = new pDate(sampleDate5_1).add('year', 1).toArray();
    assert.deepEqual(a, [1400, 12, 29, 23, 59, 59, 0]);
  });

  it('1 year to sample date 5_2', function() {
    const a = new pDate(sampleDate5_2).add('year', 1).toArray();
    assert.deepEqual(a, [1401, 1, 1, 0, 0, 0, 0]);
  });

  it('1 year to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('year', 1).toArray();
    assert.deepEqual(a, [1399, 2, 10, 10, 30, 45, 999]);
  });

  // add 4 years
  // --------------------
  it('4 year to sample date 1_1', function() {
    const a = new pDate(sampleDate1_1).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 1, 1, 23, 59, 59, 0]);
  });

  it('4 year to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 1, 1, 0, 0, 0, 0]);
  });

  it('4 year to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 12, 30, 23, 59, 59, 0]);
  });

  it('4 year to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 1, 1, 23, 59, 59, 0]);
  });

  it('4 year to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 1, 2, 1, 0, 0, 0]);
  });

  it('4 year to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 6, 30, 23, 59, 59, 0]);
  });

  it('4 year to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('year', 4).toArray();
    assert.deepEqual(a, [1399, 6, 31, 0, 0, 0, 0]);
  });

  // add 100 years
  // --------------------
  it('100 year to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('year', 100).toArray();
    assert.deepEqual(a, [1498, 2, 10, 10, 30, 45, 999]);
  });

  // add 0 month
  // --------------------
  it('0 month to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('month', 0).toArray();
    assert.deepEqual(a, [1398, 2, 10, 10, 30, 45, 999]);
  });

  // add 1 month
  // -----------------------
  it('1 month to sample date 1_1', function() {
    const a = new pDate(sampleDate1_1).add('month', 1).toArray();
    assert.deepEqual(a, [1395, 2, 1, 23, 59, 59, 0]);
  });

  it('1 month to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('month', 1).toArray();
    assert.deepEqual(a, [1395, 2, 1, 0, 0, 0, 0]);
  });

  it('1 month to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('month', 1).toArray();
    assert.deepEqual(a, [1396, 1, 30, 23, 59, 59, 0]);
  });

  it('1 month to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('month', 1).toArray();
    assert.deepEqual(a, [1395, 2, 1, 23, 59, 59, 0]);
  });

  it('1 month to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('month', 1).toArray();
    assert.deepEqual(a, [1395, 7, 30, 23, 59, 59, 0]);
  });

  it('1 month to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('month', 1).toArray();
    assert.deepEqual(a, [1395, 7, 30, 0, 0, 0, 0]);
  });

  it('1 month to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('month', 1).toArray();
    assert.deepEqual(a, [1397, 1, 29, 23, 59, 59, 0]);
  });

  it('1 month to sample date 4_2', function() {
    const a = new pDate(sampleDate4_2).add('month', 1).toArray();
    assert.deepEqual(a, [1397, 2, 1, 0, 0, 0, 0]);
  });

  it('1 month to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('month', 1).toArray();
    assert.deepEqual(a, [1398, 3, 10, 10, 30, 45, 999]);
  });

  // add 12 month
  // -------------------

  it('12 month to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('month', 12).toArray();
    assert.deepEqual(a, [1396, 1, 1, 0, 0, 0, 0]);
  });

  it('12 month to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('month', 12).toArray();
    assert.deepEqual(a, [1396, 12, 29, 23, 59, 59, 0]);
  });

  it('12 month to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('month', 12).toArray();
    assert.deepEqual(a, [1396, 1, 1, 23, 59, 59, 0]);
  });

  it('12 month to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('month', 12).toArray();
    assert.deepEqual(a, [1397, 12, 29, 23, 59, 59, 0]);
  });

  it('12 month to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('month', 12).toArray();
    assert.deepEqual(a, [1399, 2, 10, 10, 30, 45, 999]);
  });

  // add 1000 month
  // --------------------
  it('1000 month to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('month', 1000).toArray();
    assert.deepEqual(a, [1481, 6, 10, 10, 30, 45, 999]);
  });

  // add 0 week
  // --------------------

  it('0 week to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('week', 0).toArray();
    assert.deepEqual(a, [1398, 2, 10, 10, 30, 45, 999]);
  });

  // add 1 week
  // --------------------

  it('1 week to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('week', 1).toArray();
    assert.deepEqual(a, [1395, 1, 8, 0, 0, 0, 0]);
  });

  it('1 week to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('week', 1).toArray();
    assert.deepEqual(a, [1396, 1, 7, 23, 59, 59, 0]);
  });

  it('1 week to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('week', 1).toArray();
    assert.deepEqual(a, [1395, 7, 6, 23, 59, 59, 0]);
  });

  // add 5 week
  // ----------------------

  it('5 week to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('week', 5).toArray();
    assert.deepEqual(a, [1396, 2, 4, 23, 59, 59, 0]);
  });

  it('5 week to sample date 6_2', function() {
    const a = new pDate(sampleDate6_2).add('week', 5).toArray();
    assert.deepEqual(a, [1398, 4, 1, 10, 30, 45, 0]);
  });

  it('5 week to sample date 6_3', function() {
    const a = new pDate(sampleDate6_3).add('week', 5).toArray();
    assert.deepEqual(a, [1396, 2, 2, 10, 30, 45, 0]);
  });

  // add 1000 week
  //---------------------

  it('1000 week to sample date 6_3', function() {
    const a = new pDate(sampleDate6_3).add('week', 1000).toArray();
    assert.deepEqual(a, [1415, 2, 28, 10, 30, 45, 0]);
  });

  // add 0 day
  // --------------------

  it('0 day to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('day', 0).toArray();
    assert.deepEqual(a, [1395, 1, 1, 0, 0, 0, 0]);
  });

  it('0 day to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('day', 0).toArray();
    assert.deepEqual(a, [1395, 12, 30, 23, 59, 59, 0]);
  });

  it('0 day to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('day', 0).toArray();
    assert.deepEqual(a, [1395, 1, 1, 23, 59, 59, 0]);
  });

  it('0 day to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('day', 0).toArray();
    assert.deepEqual(a, [1395, 1, 2, 1, 0, 0, 0]);
  });

  it('0 day to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('day', 0).toArray();
    assert.deepEqual(a, [1395, 6, 30, 23, 59, 59, 0]);
  });

  it('0 day to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('day', 0).toArray();
    assert.deepEqual(a, [1395, 6, 31, 0, 0, 0, 0]);
  });

  it('0 day to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('day', 0).toArray();
    assert.deepEqual(a, [1396, 12, 29, 23, 59, 59, 0]);
  });

  it('0 day to sample date 5_1', function() {
    const a = new pDate(sampleDate5_1).add('day', 0).toArray();
    assert.deepEqual(a, [1399, 12, 29, 23, 59, 59, 0]);
  });

  it('0 day to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('day', 0).toArray();
    assert.deepEqual(a, [1398, 2, 10, 10, 30, 45, 999]);
  });

  // add 1 day
  // --------------------

  it('1 day to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('day', 1).toArray();
    assert.deepEqual(a, [1395, 1, 2, 0, 0, 0, 0]);
  });

  it('1 day to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('day', 1).toArray();
    assert.deepEqual(a, [1396, 1, 1, 23, 59, 59, 0]);
  });

  it('1 day to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('day', 1).toArray();
    assert.deepEqual(a, [1395, 1, 2, 23, 59, 59, 0]);
  });

  it('1 day to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('day', 1).toArray();
    assert.deepEqual(a, [1395, 1, 3, 1, 0, 0, 0]);
  });

  it('1 day to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('day', 1).toArray();
    assert.deepEqual(a, [1395, 6, 31, 23, 59, 59, 0]);
  });

  it('1 day to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('day', 1).toArray();
    assert.deepEqual(a, [1395, 7, 1, 0, 0, 0, 0]);
  });

  it('1 day to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('day', 1).toArray();
    assert.deepEqual(a, [1397, 1, 1, 23, 59, 59, 0]);
  });

  it('1 day to sample date 4_2', function() {
    const a = new pDate(sampleDate4_2).add('day', 1).toArray();
    assert.deepEqual(a, [1397, 1, 2, 0, 0, 0, 0]);
  });

  it('1 day to sample date 5_1', function() {
    const a = new pDate(sampleDate5_1).add('day', 1).toArray();
    assert.deepEqual(a, [1399, 12, 30, 23, 59, 59, 0]);
  });

  it('1 day to sample date 5_2', function() {
    const a = new pDate(sampleDate5_2).add('day', 1).toArray();
    assert.deepEqual(a, [1400, 1, 2, 0, 0, 0, 0]);
  });

  it('1 day to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('day', 1).toArray();
    assert.deepEqual(a, [1398, 2, 11, 10, 30, 45, 999]);
  });

  // add 0 hour
  // --------------------

  it('0 hour to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('hour', 0).toArray();
    assert.deepEqual(a, [1398, 2, 10, 10, 30, 45, 999]);
  });

  // add 1 hour
  // --------------------

  it('1 hour to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('hour', 1).toArray();
    assert.deepEqual(a, [1395, 1, 1, 1, 0, 0, 0]);
  });

  it('1 hour to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('hour', 1).toArray();
    assert.deepEqual(a, [1396, 1, 1, 0, 59, 59, 0]);
  });

  it('1 hour to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('hour', 1).toArray();
    assert.deepEqual(a, [1395, 1, 2, 1, 59, 59, 0]);
  });

  it('1 hour to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('hour', 1).toArray();
    assert.deepEqual(a, [1395, 1, 2, 2, 0, 0, 0]);
  });

  it('1 hour to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('hour', 1).toArray();
    assert.deepEqual(a, [1395, 6, 30, 23, 59, 59, 0]);
  });

  it('1 hour to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('hour', 1).toArray();
    assert.deepEqual(a, [1395, 6, 31, 1, 0, 0, 0]);
  });

  it('1 hour to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('hour', 1).toArray();
    assert.deepEqual(a, [1397, 1, 1, 0, 59, 59, 0]);
  });

  it('1 hour to sample date 4_2', function() {
    const a = new pDate(sampleDate4_2).add('hour', 1).toArray();
    assert.deepEqual(a, [1397, 1, 1, 1, 0, 0, 0]);
  });

  it('1 hour to sample date 5_1', function() {
    const a = new pDate(sampleDate5_1).add('hour', 1).toArray();
    assert.deepEqual(a, [1399, 12, 30, 0, 59, 59, 0]);
  });

  it('1 hour to sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).add('hour', 1).toArray();
    assert.deepEqual(a, [1398, 2, 10, 11, 30, 45, 999]);
  });

  // add 24 hour
  // -----------------

  it('24 hour to sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).add('hour', 24).toArray();
    assert.deepEqual(a, [1395, 1, 2, 1, 0, 0, 0]);
  });

  it('24 hour to sample date 1_3', function() {
    const a = new pDate(sampleDate1_3).add('hour', 24).toArray();
    assert.deepEqual(a, [1396, 1, 1, 23, 59, 59, 0]);
  });

  it('24 hour to sample date 2_1', function() {
    const a = new pDate(sampleDate2_1).add('hour', 24).toArray();
    assert.deepEqual(a, [1395, 1, 3, 0, 59, 59, 0]);
  });

  it('24 hour to sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).add('hour', 24).toArray();
    assert.deepEqual(a, [1395, 1, 3, 1, 0, 0, 0]);
  });

  it('24 hour to sample date 3_1', function() {
    const a = new pDate(sampleDate3_1).add('hour', 24).toArray();
    assert.deepEqual(a, [1395, 6, 31, 22, 59, 59, 0]);
  });

  it('24 hour to sample date 3_2', function() {
    const a = new pDate(sampleDate3_2).add('hour', 24).toArray();
    assert.deepEqual(a, [1395, 7, 1, 0, 0, 0, 0]);
  });

  it('24 hour to sample date 4_1', function() {
    const a = new pDate(sampleDate4_1).add('hour', 24).toArray();
    assert.deepEqual(a, [1397, 1, 1, 23, 59, 59, 0]);
  });

  it('24 hour to sample date 5_1', function() {
    const a = new pDate(sampleDate5_1).add('hour', 24).toArray();
    assert.deepEqual(a, [1399, 12, 30, 23, 59, 59, 0]);
  });
});

describe('Subtract', function() {
  it('0 year from sample date 1_2', function() {
    const a = new pDate(sampleDate1_2).subtract('year', 0).toArray();
    assert.deepEqual(a, sampleDate1_2);
  });

  it('1 day from sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).subtract('day', 1).toArray();
    assert.deepEqual(a, [1395, 1, 1, 1, 0, 0, 0]);
  });

  it('24 hour from sample date 2_2', function() {
    const a = new pDate(sampleDate2_2).subtract('hour', 24).toArray();
    assert.deepEqual(a, [1395, 1, 1, 0, 0, 0, 0]);
  });

  it('900 milliseconds from sample date 6_1', function() {
    const a = new pDate(sampleDate6_1).subtract('ms', 900).toArray();
    assert.deepEqual(a, [1398, 2, 10, 10, 30, 45, 99]);
  });
});