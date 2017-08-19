declare interface persianDate {
    /**
    * Date of the month
    */
    date: Number
    /**
    * Date of the week
    */
    day: Number
    hours: Number
    milliseconds: Number
    minutes: Number
    month: Number
    monthDayNumber: Number
    seconds: Number
    timeZoneOffset: Number
    weekDayNumber: Number
    year: Number
}

declare interface PersianDate {

    gDate: Date
    persianDate: persianDate
    formatPersian: Boolean

    /**
 	* Returns a clone of a PersianDate
 	*/
    clone(): PersianDate;

    /**
    * Sets the milliseconds.
    * Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the seconds.
    */
    millisecond(input: Number): PersianDate;

    /**
    * Gets the milliseconds.
    */
    millisecond(): Number;

    /**
    * Sets the milliseconds.
    * Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the seconds.
    */
    milliseconds(input: Number): PersianDate;

    /**
    * Gets the milliseconds.
    */
    milliseconds(): Number;

    /**
    * Sets the seconds.
    * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minutes.
    */
    second(input: Number): PersianDate;

    /**
    * Gets the seconds.
    */
    second(): Number;

    /**
    * Sets the seconds.
    * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the minutes.
    */
    seconds(input: Number): PersianDate;

    /**
    * Gets the seconds.
    */
    seconds(): Number;

    /**
    * Sets the minutes.
    * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hours.
    */
    minute(input: Number): PersianDate;

    /**
    * Gets the minutes.
    */
    minute(): Number;

    /**
    * Sets the minutes.
    * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hours.
    */
    minutes(input: Number): PersianDate;

    /**
    * Gets the minutes.
    */
    minutes(): Number;

    /**
    * Sets the hours.
    * Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
    */
    hour(input: Number): PersianDate;

    /**
    * Gets the hours.
    */
    hour(): Number;

    /**
    * Sets the hours.
    * Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the day.
    */
    hours(input: Number): PersianDate;

    /**
    * Gets the hours.
    */
    hours(): Number;

    /**
    * Sets the day of the month.
    * Accepts numbers from 0 to 31. If the range is exceeded, it will bubble up to the months.
    */
    date(input: Number): PersianDate;

    /**
    * Gets the day of the month.
    */
    date(): Number;

    /**
    * Sets the day of the month.
    * Accepts numbers from 0 to 31. If the range is exceeded, it will bubble up to the months.
    */
    dates(input: Number): PersianDate;

    /**
    * Gets the day of the month.
    */
    dates(): Number;

    /**
    * Sets the year.
    * Accepts numbers from -270,000 to 270,000.
    */
    year(input: Number): PersianDate;

    /**
    * Gets the year.
    */
    year(): Number;

    /**
    * Sets the year.
    * Accepts numbers from -270,000 to 270,000.
    */
    years(input: Number): PersianDate;

    /**
    * Gets the year.
    */
    years(): Number;

    /**
    * Gets the day of the week
    */
    day(): Number;

    /**
    * Gets the day of the week
    */
    days(): Number;

    /** 
    * Mutates the original persianDate by adding time.
    */
    add(key: String, input: Number): PersianDate;

    /** 
    * Mutates the original persianDate by subtracting time.
    */
    subtract(key: String, input: Number): PersianDate;

    /**
    * Mutates the original persianDate by setting it to the start of a unit of time.
    */
    startOf(key: String): PersianDate;

    /**
    * Mutates the original persianDate by setting it to the end of a unit of time.
    */
    endOf(key: String): PersianDate;

    /**
    * Returns current format.
    */
    format(): String;

    /**
    * It takes a string of tokens like 'dddd, MMMM DD YYYY, h:mm:ss a' and replaces them with their corresponding values
    * http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
    */
    format(inputString: String): String;

    /**
    * Returns the difference in milliseconds
    */
    diff(input: PersianDate): Number;

    /**
    * Returns the difference in passed unit of measurement like 'days', 'years' etc.
    */
    diff(input: PersianDate, val: String): Number;

    /**
    * Returns the difference in passed unit of measurement like 'days', 'years' etc.
    */
    diff(input: PersianDate, val: String, asFloat: Boolean): Number;

    /**
    * Returns the number of milliseconds since the Unix Epoch,
    */
    valueOf(): Number;

    /**
    * Returns a Unix timestamp (the of seconds since the Unix Epoch)
    */
    unix(): Number;

    /**
    * Returns the timezone offset in minutes.
    */
    zone(): Number;

    /**
    * Returns the number of days in the current month.
    */
    daysInMonth(): Number;

    /**
    * To get the native Date object that persianDate.js wrap
    */
    toDate(): Date;

    /**
    * Returns an array [year,month,day,hour,minutes,second,milisecond]
    */
    toArray(): Array<Number>;

    /**
    * Returns true if that year is a leap year, and false if it is not.
    */
    isLeapYear(): Boolean;

    /**
    * Returns true if if the current persianDate is in daylight savings time, and false if it is not.
    */
    isDST(): Boolean;

    /**
    * Returns true  if a variable is a persianDate object, and false if it is not.
    */
    isPersianDate(obj: any): Boolean;
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
declare function persianDate(input: Number): PersianDate;

/**
 * Creates a persianDate with an array of numbers that mirror the parameters passed to new Date()But As Persian Date Number Like [1393,2,22,11,22,30]
 */
declare function persianDate(input: Array<Number>): PersianDate;

/**
 * Returns a clone of a persianDate
 */
declare function persianDate(input: PersianDate): PersianDate;

/**
 * Returns a persianDate created from strings like /Date(1198908717056)/ 
 */
declare function persianDate(input: String): PersianDate;

interface Window {
    formatPersian: Boolean;
}