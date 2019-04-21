<a name="PersianDateClass"></a>

# PersianDateClass
**Kind**: global class  

* [PersianDateClass](#PersianDateClass)
    * [new PersianDateClass(input)](#new_PersianDateClass_new)
    * _instance_
        * [.setup(input)](#PersianDateClass+setup)
        * [.rangeName()](#PersianDateClass+rangeName) ⇒ <code>\*</code>
        * [.toLeapYearMode(input)](#PersianDateClass+toLeapYearMode) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
        * [.toCalendar(input)](#PersianDateClass+toCalendar) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
        * [.toLocale(input)](#PersianDateClass+toLocale) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
        * [.isPersianDate(obj)](#PersianDateClass+isPersianDate) ⇒ <code>boolean</code>
        * [.clone()](#PersianDateClass+clone) ⇒ <code>PersianDate</code>
        * [.algorithmsCalc(dateArray)](#PersianDateClass+algorithmsCalc) ⇒ <code>\*</code>
        * [.calendar()](#PersianDateClass+calendar) ⇒ <code>\*</code>
        * [.duration(input, key)](#PersianDateClass+duration) ⇒ <code>Duration</code>
        * [.isDuration(obj)](#PersianDateClass+isDuration) ⇒ <code>boolean</code>
        * [.years(input)](#PersianDateClass+years) ⇒ <code>\*</code>
        * [.year(input)](#PersianDateClass+year) ⇒ <code>\*</code>
        * [.month(input)](#PersianDateClass+month) ⇒ <code>\*</code>
        * [.days()](#PersianDateClass+days) ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date\_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
        * [.day()](#PersianDateClass+day) ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date\_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
        * [.dates(input)](#PersianDateClass+dates) ⇒ <code>\*</code>
        * [.date(input)](#PersianDateClass+date) ⇒ <code>\*</code>
        * [.hour(input)](#PersianDateClass+hour) ⇒ <code>\*</code>
        * [.hours(input)](#PersianDateClass+hours) ⇒ <code>\*</code>
        * [.minute(input)](#PersianDateClass+minute) ⇒ <code>\*</code>
        * [.minutes(input)](#PersianDateClass+minutes) ⇒ <code>\*</code>
        * [.second(input)](#PersianDateClass+second) ⇒ <code>\*</code>
        * [.seconds(input)](#PersianDateClass+seconds) ⇒ <code>\*</code>
        * [.millisecond(input)](#PersianDateClass+millisecond) ⇒ <code>\*</code>
        * [.milliseconds(input)](#PersianDateClass+milliseconds) ⇒ <code>\*</code>
        * [.unix(timestamp)](#PersianDateClass+unix) ⇒ <code>\*</code>
        * [.valueOf()](#PersianDateClass+valueOf) ⇒ <code>\*</code>
        * [.getFirstWeekDayOfMonth(year, month)](#PersianDateClass+getFirstWeekDayOfMonth) ⇒ <code>\*</code>
        * [.diff(input, val, asFloat)](#PersianDateClass+diff) ⇒ <code>\*</code>
        * [.startOf(key)](#PersianDateClass+startOf) ⇒ <code>\*</code>
        * [.endOf(key)](#PersianDateClass+endOf) ⇒ <code>\*</code>
        * [.sod()](#PersianDateClass+sod) ⇒ <code>\*</code>
        * [.eod()](#PersianDateClass+eod) ⇒ <code>\*</code>
        * [.zone()](#PersianDateClass+zone) ⇒ <code>\*</code>
        * [.local()](#PersianDateClass+local) ⇒ <code>PersianDate</code>
        * [.utc(input)](#PersianDateClass+utc) ⇒ <code>\*</code>
        * [.isUtc()](#PersianDateClass+isUtc) ⇒ <code>boolean</code>
        * [.isDST()](#PersianDateClass+isDST) ⇒ <code>boolean</code>
        * [.isLeapYear()](#PersianDateClass+isLeapYear) ⇒ <code>boolean</code>
        * [.daysInMonth(yearInput, monthInput)](#PersianDateClass+daysInMonth) ⇒ <code>number</code>
        * [.toDate()](#PersianDateClass+toDate) ⇒ <code>\*</code> \| <code>PersianDate.gDate</code>
        * [.toArray()](#PersianDateClass+toArray) ⇒ <code>array</code>
        * [.formatNumber()](#PersianDateClass+formatNumber) ⇒ <code>\*</code>
        * [.format(inputString)](#PersianDateClass+format) ⇒ <code>\*</code>
        * [.add(key, value)](#PersianDateClass+add) ⇒ <code>PersianDate</code>
        * [.subtract(key, value)](#PersianDateClass+subtract) ⇒ <code>PersianDate</code>
        * [.isSameDay(dateB)](#PersianDateClass+isSameDay) ⇒ [<code>PersianDateClass</code>](#PersianDateClass) \| <code>\*</code> \| <code>boolean</code>
        * [.isSameMonth(dateA, dateB)](#PersianDateClass+isSameMonth) ⇒ <code>\*</code> \| <code>boolean</code>
    * _static_
        * [.rangeName()](#PersianDateClass.rangeName) ⇒ <code>\*</code>
        * [.toLeapYearMode(input)](#PersianDateClass.toLeapYearMode) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
        * [.toCalendar(input)](#PersianDateClass.toCalendar) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
        * [.toLocale(input)](#PersianDateClass.toLocale) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
        * [.isPersianDate(obj)](#PersianDateClass.isPersianDate) ⇒ <code>boolean</code>
        * [.duration(input, key)](#PersianDateClass.duration) ⇒ <code>Duration</code>
        * [.isDuration(obj)](#PersianDateClass.isDuration) ⇒ <code>boolean</code>
        * [.getFirstWeekDayOfMonth(year, month)](#PersianDateClass.getFirstWeekDayOfMonth) ⇒ <code>\*</code>
        * [.utc(input)](#PersianDateClass.utc) ⇒ <code>\*</code>
        * [.isSameDay(dateA, dateB)](#PersianDateClass.isSameDay) ⇒ <code>boolean</code>
        * [.isSameMonth(dateA, dateB)](#PersianDateClass.isSameMonth) ⇒ <code>boolean</code>

<a name="new_PersianDateClass_new"></a>

## new PersianDateClass(input)
persian date class

<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+setup"></a>

## persianDateClass.setup(input)
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+rangeName"></a>

## persianDateClass.rangeName() ⇒ <code>\*</code>
Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<a name="PersianDateClass+toLeapYearMode"></a>

## persianDateClass.toLeapYearMode(input) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+toCalendar"></a>

## persianDateClass.toCalendar(input) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+toLocale"></a>

## persianDateClass.toLocale(input) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+isPersianDate"></a>

## persianDateClass.isPersianDate(obj) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>obj</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+clone"></a>

## persianDateClass.clone() ⇒ <code>PersianDate</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+algorithmsCalc"></a>

## persianDateClass.algorithmsCalc(dateArray) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateArray</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+calendar"></a>

## persianDateClass.calendar() ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<a name="PersianDateClass+duration"></a>

## persianDateClass.duration(input, key) ⇒ <code>Duration</code>
return Duration object

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr><tr>
    <td>key</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+isDuration"></a>

## persianDateClass.isDuration(obj) ⇒ <code>boolean</code>
check if passed object is duration

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>obj</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+years"></a>

## persianDateClass.years(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+year"></a>

## persianDateClass.year(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+month"></a>

## persianDateClass.month(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+days"></a>

## persianDateClass.days() ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date\_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
Day of week

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+day"></a>

## persianDateClass.day() ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date\_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+dates"></a>

## persianDateClass.dates(input) ⇒ <code>\*</code>
Day of Months

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+date"></a>

## persianDateClass.date(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+hour"></a>

## persianDateClass.hour(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+hours"></a>

## persianDateClass.hours(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+minute"></a>

## persianDateClass.minute(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+minutes"></a>

## persianDateClass.minutes(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+second"></a>

## persianDateClass.second(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+seconds"></a>

## persianDateClass.seconds(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+millisecond"></a>

## persianDateClass.millisecond(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Returns**: <code>\*</code> - Getter Setter  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+milliseconds"></a>

## persianDateClass.milliseconds(input) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+unix"></a>

## persianDateClass.unix(timestamp) ⇒ <code>\*</code>
Return Unix Timestamp (1318874398)

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>timestamp</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+valueOf"></a>

## persianDateClass.valueOf() ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+getFirstWeekDayOfMonth"></a>

## persianDateClass.getFirstWeekDayOfMonth(year, month) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr><tr>
    <td>month</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+diff"></a>

## persianDateClass.diff(input, val, asFloat) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr><tr>
    <td>val</td>
    </tr><tr>
    <td>asFloat</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+startOf"></a>

## persianDateClass.startOf(key) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+endOf"></a>

## persianDateClass.endOf(key) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+sod"></a>

## persianDateClass.sod() ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+eod"></a>

## persianDateClass.eod() ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+zone"></a>

## persianDateClass.zone() ⇒ <code>\*</code>
Get the timezone offset in minutes.

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+local"></a>

## persianDateClass.local() ⇒ <code>PersianDate</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+utc"></a>

## persianDateClass.utc(input) ⇒ <code>\*</code>
Current date/time in UTC mode

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+isUtc"></a>

## persianDateClass.isUtc() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+isDST"></a>

## persianDateClass.isDST() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Link**: https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C  
<a name="PersianDateClass+isLeapYear"></a>

## persianDateClass.isLeapYear() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+daysInMonth"></a>

## persianDateClass.daysInMonth(yearInput, monthInput) ⇒ <code>number</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>yearInput</td>
    </tr><tr>
    <td>monthInput</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+toDate"></a>

## persianDateClass.toDate() ⇒ <code>\*</code> \| <code>PersianDate.gDate</code>
Return Native Javascript Date

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+toArray"></a>

## persianDateClass.toArray() ⇒ <code>array</code>
Returns Array Of Persian Date

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+formatNumber"></a>

## persianDateClass.formatNumber() ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<a name="PersianDateClass+format"></a>

## persianDateClass.format(inputString) ⇒ <code>\*</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>inputString</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+add"></a>

## persianDateClass.add(key, value) ⇒ <code>PersianDate</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td>
    </tr><tr>
    <td>value</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+subtract"></a>

## persianDateClass.subtract(key, value) ⇒ <code>PersianDate</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td>
    </tr><tr>
    <td>value</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+isSameDay"></a>

## persianDateClass.isSameDay(dateB) ⇒ [<code>PersianDateClass</code>](#PersianDateClass) \| <code>\*</code> \| <code>boolean</code>
**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateB</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass+isSameMonth"></a>

## persianDateClass.isSameMonth(dateA, dateB) ⇒ <code>\*</code> \| <code>boolean</code>
check two for month similarity

**Kind**: instance method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateA</td>
    </tr><tr>
    <td>dateB</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.rangeName"></a>

## PersianDateClass.rangeName() ⇒ <code>\*</code>
Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).

**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<a name="PersianDateClass.toLeapYearMode"></a>

## PersianDateClass.toLeapYearMode(input) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.toCalendar"></a>

## PersianDateClass.toCalendar(input) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.toLocale"></a>

## PersianDateClass.toLocale(input) ⇒ [<code>PersianDateClass</code>](#PersianDateClass)
**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.isPersianDate"></a>

## PersianDateClass.isPersianDate(obj) ⇒ <code>boolean</code>
**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>obj</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.duration"></a>

## PersianDateClass.duration(input, key) ⇒ <code>Duration</code>
return Duration object

**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr><tr>
    <td>key</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.isDuration"></a>

## PersianDateClass.isDuration(obj) ⇒ <code>boolean</code>
check if passed object is duration

**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>obj</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.getFirstWeekDayOfMonth"></a>

## PersianDateClass.getFirstWeekDayOfMonth(year, month) ⇒ <code>\*</code>
**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr><tr>
    <td>month</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.utc"></a>

## PersianDateClass.utc(input) ⇒ <code>\*</code>
**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.isSameDay"></a>

## PersianDateClass.isSameDay(dateA, dateB) ⇒ <code>boolean</code>
check if a date is same as b

**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateA</td>
    </tr><tr>
    <td>dateB</td>
    </tr>  </tbody>
</table>

<a name="PersianDateClass.isSameMonth"></a>

## PersianDateClass.isSameMonth(dateA, dateB) ⇒ <code>boolean</code>
check if a month is same as b

**Kind**: static method of [<code>PersianDateClass</code>](#PersianDateClass)  
**Since**: 1.0.0  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateA</td><td><code>Date</code></td>
    </tr><tr>
    <td>dateB</td><td><code>Date</code></td>
    </tr>  </tbody>
</table>

