/*global describe,it*/
const assert = require('node:assert');
const pDate = require('../dist/persian-date.js');
const defaultArray = [2017, 1, 1, 12, 32, 40];

describe('Create Instance', () => {
    it('From Array [2017, 1, 12, 1, 1, 1]', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2017, 2, 29, 1, 1, 1]).toArray(), [2017, 3, 1, 1, 1, 1, 0]);
        assert.deepEqual(new pDate([2020, 2, 29, 1, 1, 1]).toArray(), [2020, 2, 29, 1, 1, 1, 0]);
        assert.deepEqual(new pDate([5000, 2, 29, 1, 1, 1]).toArray(), [5000, 3, 1, 1, 1, 1, 0]);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
});

describe('format', () => {
    it('llll', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate(defaultArray).format(), '2017-01-01 12:32:40 PM');
        assert.deepEqual(new pDate(defaultArray).format('lllll'), 'Sun 1 Jan 2017  12:32  PM2017/1/1');
        assert.deepEqual(new pDate(defaultArray).format('llll'), 'Sun 1 Jan 2017  12:32  PM');
        assert.deepEqual(new pDate(defaultArray).format('lll'), 'Jan 2017 01   12:32  PM');
        assert.deepEqual(new pDate(defaultArray).format('ll'), 'Jan 01 2017');
        assert.deepEqual(new pDate(defaultArray).format('l'), '2017/1/1');
        assert.deepEqual(new pDate(defaultArray).format('dddd'), 'Sunday');
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
});

describe('isLeapYear', () => {
    it('2017 : Normal Year ', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2017, 2, 29, 1, 1, 1]).isLeapYear(), false);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
    it('2020: Leap Year', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2020, 2, 29, 1, 1, 1]).isLeapYear(), true);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
});

describe('isLeapYear', () => {
    it('2017 : Normal Year ', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2017, 2, 29, 1, 1, 1]).isLeapYear(), false);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
    it('2020: Leap Year', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2020, 2, 29, 1, 1, 1]).isLeapYear(), true);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
});

describe('daysInMonth', () => {
    it('Check in 12 month normal year', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2017, 1, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2017, 2, 12]).daysInMonth(), 28);
        assert.deepEqual(new pDate([2017, 3, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2017, 4, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2017, 5, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2017, 6, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2017, 7, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2017, 8, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2017, 9, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2017, 10, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2017, 11, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2017, 12, 12]).daysInMonth(), 31);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });

    it('Check in 12 month leap year', () => {
        pDate.toCalendar('gregorian');
        pDate.toLocale('en');
        assert.deepEqual(new pDate([2020, 1, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2020, 2, 12]).daysInMonth(), 29);
        assert.deepEqual(new pDate([2020, 3, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2020, 4, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2020, 5, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2020, 6, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2020, 7, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2020, 8, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2020, 9, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2020, 10, 12]).daysInMonth(), 31);
        assert.deepEqual(new pDate([2020, 11, 12]).daysInMonth(), 30);
        assert.deepEqual(new pDate([2020, 12, 12]).daysInMonth(), 31);
        pDate.toCalendar('persian');
        pDate.toLocale('fa');
    });
});
