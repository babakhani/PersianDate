declare interface persianDate {
    /**
     * Date of the month
     */
    date: number;
    /**
     * Date of the week
     */
    day: number;
    hours: number;
    milliseconds: number;
    minutes: number;
    month: number;
    monthDayNumber: number;
    seconds: number;
    timeZoneOffset: number;
    weekDayNumber: number;
    year: number;
}

declare interface PersianDate {
    gDate: Date;
    persianDate: persianDate;
    formatPersian: boolean;

    /**
     * Returns a clone of a PersianDate
     */
    clone(): PersianDate;

    /**
     * Sets the milliseconds.
     * Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the seconds.
     */
    millisecond(input: number): PersianDate;

    /**
     * Gets the milliseconds.
     */
    millisecond(): number;

    /**
     * Sets the milliseconds.
     * Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the seconds.
     */
    milliseconds(input: number): PersianDate;

    /**
     * Gets the milliseconds.
     */
    milliseconds(): number;

    /**
     * Sets the seconds.
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minutes.
     */
    second(input: number): PersianDate;

    /**
     * Gets the seconds.
     */
    second(): number;

    /**
     * Sets the seconds.
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minutes.
     */
    seconds(input: number): PersianDate;

    /**
     * Gets the seconds.
     */
    seconds(): number;

    /**
     * Sets the minutes.
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hours.
     */
    minute(input: number): PersianDate;

    /**
     * Gets the minutes.
     */
    minute(): number;

    /**
     * Sets the minutes.
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hours.
     */
    minutes(input: number): PersianDate;

    /**
     * Gets the minutes.
     */
    minutes(): number;

    /**
     * Sets the hours.
     * Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
     */
    hour(input: number): PersianDate;

    /**
     * Gets the hours.
     */
    hour(): number;

    /**
     * Sets the hours.
     * Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
     */
    hours(input: number): PersianDate;

    /**
     * Gets the hours.
     */
    hours(): number;

    /**
     * Sets the day of the month.
     * Accepts numbers from 0 to 31. If the range is exceeded, it will bubble up to the months.
     */
    date(input: number): PersianDate;

    /**
     * Gets the day of the month.
     */
    date(): number;

    /**
     * Sets the day of the month.
     * Accepts numbers from 0 to 31. If the range is exceeded, it will bubble up to the months.
     */
    dates(input: number): PersianDate;

    /**
     * Gets the day of the month.
     */
    dates(): number;

    /**
     * Sets the year.
     * Accepts numbers from -270,000 to 270,000.
     */
    year(input: number): PersianDate;

    /**
     * Gets the year.
     */
    year(): number;

    /**
     * Sets the year.
     * Accepts numbers from -270,000 to 270,000.
     */
    years(input: number): PersianDate;

    /**
     * Gets the year.
     */
    years(): number;

    /**
     * Gets the day of the week
     */
    day(): number;

    /**
     * Gets the day of the week
     */
    days(): number;

    /**
     * Mutates the original persianDate by adding time.
     */
    add(key: string, input: number): PersianDate;

    /**
     * Mutates the original persianDate by subtracting time.
     */
    subtract(key: string, input: number): PersianDate;

    /**
     * Mutates the original persianDate by setting it to the start of a unit of time.
     */
    startOf(key: string): PersianDate;

    /**
     * Mutates the original persianDate by setting it to the end of a unit of time.
     */
    endOf(key: string): PersianDate;

    /**
     * Returns current format.
     */
    format(): string;

    /**
     * It takes a string of tokens like 'dddd, MMMM DD YYYY, h:mm:ss a' and replaces them with their corresponding values
     * http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
     */
    format(inputString: string): string;

    /**
     * Returns the difference in milliseconds
     */
    diff(input: PersianDate): number;

    /**
     * Returns the difference in passed unit of measurement like 'days', 'years' etc.
     */
    diff(input: PersianDate, val: string): number;

    /**
     * Returns the difference in passed unit of measurement like 'days', 'years' etc.
     */
    diff(input: PersianDate, val: string, asFloat: boolean): number;

    /**
     * Returns the number of milliseconds since the Unix Epoch,
     */
    valueOf(): number;

    /**
     * Returns a Unix timestamp (the of seconds since the Unix Epoch)
     */
    unix(): number;

    /**
     * Returns the timezone offset in minutes.
     */
    zone(): number;

    /**
     * Returns the number of days in the current month.
     */
    daysInMonth(): number;

    /**
     * To get the native Date object that persianDate.js wrap
     */
    toDate(): Date;

    /**
     * Returns an array [year,month,day,hour,minutes,second,milisecond]
     */
    toArray(): Array<number>;

    /**
     * Returns true if that year is a leap year, and false if it is not.
     */
    isLeapYear(): boolean;

    /**
     * Returns true if if the current persianDate is in daylight savings time, and false if it is not.
     */
    isDST(): boolean;

    /**
     * Returns true  if a variable is a persianDate object, and false if it is not.
     */
    isPersianDate(obj: any): boolean;
}

/**
 * Get the current date and time
 */
declare function persianDate(): PersianDate;

/**
 * Create a persianDate with a pre-existing native Javascript Date object.
 */
declare function persianDate(input: Date): PersianDate;

/**
 * Creates a persianDate by passing an integer value representing the Number of milliseconds since the Unix Epoch (Jan 1 1970 12AM UTC)
 */
declare function persianDate(input: number): PersianDate;

/**
 * Creates a persianDate with an array of numbers that mirror the parameters passed to new Date()But As Persian Date Number Like [1393,2,22,11,22,30]
 */
declare function persianDate(input: Array<number>): PersianDate;

/**
 * Returns a clone of a persianDate
 */
declare function persianDate(input: PersianDate): PersianDate;

/**
 * Returns a persianDate created from strings like /Date(1198908717056)/
 */
declare function persianDate(input: string): PersianDate;

interface Window {
    formatPersian: boolean;
}
