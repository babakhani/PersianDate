declare interface pDate {
	date: number
	day: number
	hours: number
	milliseconds: number
	minutes: number
	month: number
	monthDayNumber: number
	seconds: number
	timeZoneOffset: number
	weekDayNumber: number
	year: number
}

declare class persianDate {
	constructor();
	constructor(input: Date);
	constructor(input: Number);
	constructor(input: Array<Number>);
	constructor(input: persianDate);
	constructor(input: String);

	gDate: Date
	pDate: pDate

	clone(): persianDate;

	second(input: Number): persianDate;
	second(): persianDate;

	seconds(input: Number): persianDate;
	seconds(): persianDate;

	millisecond(input: Number): persianDate;
	millisecond(): persianDate;

	milliseconds(input: Number): persianDate;
	milliseconds(): persianDate;

	minute(input: Number): persianDate;
	minute(): persianDate;

	minutes(input: Number): persianDate;
	minutes(): persianDate;

	hour(input: Number): persianDate;
	hour(): persianDate;

	hours(input: Number): persianDate;
	hours(): persianDate;

	date(input: Number): persianDate;
	date(): persianDate;

	dates(input: Number): persianDate;
	dates(): persianDate;

	year(input: Number): persianDate;
	year(): persianDate;

	years(input: Number): persianDate;
	years(): persianDate;

	day(): persianDate;
	days(): persianDate;

	add(key: String, input: Number): persianDate;

	subtract(key: String, input: Number): persianDate;

	startOf(key: String): persianDate;

	endOf(key: String): persianDate;

	format(): String;
	format(inputString: String): String;

	diff(input: persianDate): Number;
	diff(input: persianDate, val: String): Number;
	diff(input: persianDate, val: String, asFloat: Boolean): Number;

	valueOf(): Number;

	unix(): Number;

	zone(): Number;

	daysInMonth(): Number;

	toDate(): Date;

	toArray(): Array<Number>;

	isLeapYear(): Boolean;

	isDST(): Boolean;

	isPersianDate(): Boolean;
	isPersianDate(obj: any): Boolean;
}

interface Window {
	formatPersian: Boolean;
}