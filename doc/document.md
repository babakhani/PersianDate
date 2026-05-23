<a name="module_pDate"></a>

# pDate

persian date class

- [pDate](#module_pDate)
    - [module.exports](#exp_module_pDate--module.exports) : <code>PersianDateClass</code> ⏏
        - [~PersianDateClass](#module_pDate--module.exports..PersianDateClass)
            - [new PersianDateClass(input)](#new_module_pDate--module.exports..PersianDateClass_new)
            - _instance_
                - [.duration](#module_pDate--module.exports..PersianDateClass+duration) ⇒ <code>Duration</code>
                - [.utc](#module_pDate--module.exports..PersianDateClass+utc) ⇒ <code>\*</code>
                - [.setup(input)](#module_pDate--module.exports..PersianDateClass+setup)
                - [.rangeName()](#module_pDate--module.exports..PersianDateClass+rangeName) ⇒ <code>\*</code>
                - [.toLeapYearMode(input)](#module_pDate--module.exports..PersianDateClass+toLeapYearMode) ⇒ <code>PersianDateClass</code>
                - [.toCalendar(input)](#module_pDate--module.exports..PersianDateClass+toCalendar) ⇒ <code>PersianDateClass</code>
                - [.toLocale(input)](#module_pDate--module.exports..PersianDateClass+toLocale) ⇒ <code>PersianDateClass</code>
                - [.isPersianDate(obj)](#module_pDate--module.exports..PersianDateClass+isPersianDate) ⇒ <code>boolean</code>
                - [.clone()](#module_pDate--module.exports..PersianDateClass+clone) ⇒ <code>PersianDate</code>
                - [.algorithmsCalc(dateArray)](#module_pDate--module.exports..PersianDateClass+algorithmsCalc) ⇒ <code>\*</code>
                - [.calendar()](#module_pDate--module.exports..PersianDateClass+calendar) ⇒ <code>\*</code>
                - [.duration(input, key)](#module_pDate--module.exports..PersianDateClass+duration) ⇒ <code>Duration</code>
                - [.isDuration(obj)](#module_pDate--module.exports..PersianDateClass+isDuration) ⇒ <code>boolean</code>
                - [.years(input)](#module_pDate--module.exports..PersianDateClass+years) ⇒ <code>\*</code>
                - [.year(input)](#module_pDate--module.exports..PersianDateClass+year) ⇒ <code>\*</code>
                - [.month(input)](#module_pDate--module.exports..PersianDateClass+month) ⇒ <code>\*</code>
                - [.days()](#module_pDate--module.exports..PersianDateClass+days) ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
                - [.day()](#module_pDate--module.exports..PersianDateClass+day) ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
                - [.dates(input)](#module_pDate--module.exports..PersianDateClass+dates) ⇒ <code>\*</code>
                - [.date(input)](#module_pDate--module.exports..PersianDateClass+date) ⇒ <code>\*</code>
                - [.hour(input)](#module_pDate--module.exports..PersianDateClass+hour) ⇒ <code>\*</code>
                - [.hours(input)](#module_pDate--module.exports..PersianDateClass+hours) ⇒ <code>\*</code>
                - [.minute(input)](#module_pDate--module.exports..PersianDateClass+minute) ⇒ <code>\*</code>
                - [.minutes(input)](#module_pDate--module.exports..PersianDateClass+minutes) ⇒ <code>\*</code>
                - [.second(input)](#module_pDate--module.exports..PersianDateClass+second) ⇒ <code>\*</code>
                - [.seconds(input)](#module_pDate--module.exports..PersianDateClass+seconds) ⇒ <code>\*</code>
                - [.millisecond(input)](#module_pDate--module.exports..PersianDateClass+millisecond) ⇒ <code>\*</code>
                - [.milliseconds(input)](#module_pDate--module.exports..PersianDateClass+milliseconds) ⇒ <code>\*</code>
                - [.unix(timestamp)](#module_pDate--module.exports..PersianDateClass+unix) ⇒ <code>\*</code>
                - [.valueOf()](#module_pDate--module.exports..PersianDateClass+valueOf) ⇒ <code>\*</code>
                - [.getFirstWeekDayOfMonth(year, month)](#module_pDate--module.exports..PersianDateClass+getFirstWeekDayOfMonth) ⇒ <code>\*</code>
                - [.diff(input, val, asFloat)](#module_pDate--module.exports..PersianDateClass+diff) ⇒ <code>\*</code>
                - [.startOf(key)](#module_pDate--module.exports..PersianDateClass+startOf) ⇒ <code>\*</code>
                - [.sod()](#module_pDate--module.exports..PersianDateClass+sod) ⇒ <code>\*</code>
                - [.eod()](#module_pDate--module.exports..PersianDateClass+eod) ⇒ <code>\*</code>
                - [.zone()](#module_pDate--module.exports..PersianDateClass+zone) ⇒ <code>\*</code>
                - [.local()](#module_pDate--module.exports..PersianDateClass+local) ⇒ <code>PersianDate</code>
                - [.utc(input)](#module_pDate--module.exports..PersianDateClass+utc) ⇒ <code>\*</code>
                - [.isUtc()](#module_pDate--module.exports..PersianDateClass+isUtc) ⇒ <code>boolean</code>
                - [.isDST()](#module_pDate--module.exports..PersianDateClass+isDST) ⇒ <code>boolean</code>
                - [.isLeapYear()](#module_pDate--module.exports..PersianDateClass+isLeapYear) ⇒ <code>boolean</code>
                - [.daysInMonth(yearInput, monthInput)](#module_pDate--module.exports..PersianDateClass+daysInMonth) ⇒ <code>number</code>
                - [.toDate()](#module_pDate--module.exports..PersianDateClass+toDate) ⇒ <code>\*</code> \| <code>PersianDate.gDate</code>
                - [.toArray()](#module_pDate--module.exports..PersianDateClass+toArray) ⇒ <code>array</code>
                - [.formatNumber()](#module_pDate--module.exports..PersianDateClass+formatNumber) ⇒ <code>\*</code>
                - [.format(inputString)](#module_pDate--module.exports..PersianDateClass+format) ⇒ <code>\*</code>
                - [.add(key, value)](#module_pDate--module.exports..PersianDateClass+add) ⇒ <code>PersianDate</code>
                - [.subtract(key, value)](#module_pDate--module.exports..PersianDateClass+subtract) ⇒ <code>PersianDate</code>
                - [.isSameDay(dateB)](#module_pDate--module.exports..PersianDateClass+isSameDay) ⇒ <code>PersianDateClass</code> \| <code>\*</code> \| <code>boolean</code>
                - [.isSameMonth(dateA, dateB)](#module_pDate--module.exports..PersianDateClass+isSameMonth) ⇒ <code>\*</code> \| <code>boolean</code>
            - _static_
                - [.rangeName()](#module_pDate--module.exports..PersianDateClass.rangeName) ⇒ <code>\*</code>
                - [.toLeapYearMode(input)](#module_pDate--module.exports..PersianDateClass.toLeapYearMode) ⇒ <code>PersianDateClass</code>
                - [.toCalendar(input)](#module_pDate--module.exports..PersianDateClass.toCalendar) ⇒ <code>PersianDateClass</code>
                - [.toLocale(input)](#module_pDate--module.exports..PersianDateClass.toLocale) ⇒ <code>PersianDateClass</code>
                - [.isPersianDate(obj)](#module_pDate--module.exports..PersianDateClass.isPersianDate) ⇒ <code>boolean</code>
                - [.isDuration(obj)](#module_pDate--module.exports..PersianDateClass.isDuration) ⇒ <code>boolean</code>
                - [.getFirstWeekDayOfMonth(year, month)](#module_pDate--module.exports..PersianDateClass.getFirstWeekDayOfMonth) ⇒ <code>\*</code>
                - [.isSameDay(dateA, dateB)](#module_pDate--module.exports..PersianDateClass.isSameDay) ⇒ <code>boolean</code>
                - [.isSameMonth(dateA, dateB)](#module_pDate--module.exports..PersianDateClass.isSameMonth) ⇒ <code>boolean</code>

<a name="exp_module_pDate--module.exports"></a>

## module.exports : <code>PersianDateClass</code> ⏏

**Kind**: Exported member  
<a name="module_pDate--module.exports..PersianDateClass"></a>

### module.exports~PersianDateClass

**Kind**: inner class of [<code>module.exports</code>](#exp_module_pDate--module.exports)

- [~PersianDateClass](#module_pDate--module.exports..PersianDateClass)
    - [new PersianDateClass(input)](#new_module_pDate--module.exports..PersianDateClass_new)
    - _instance_
        - [.duration](#module_pDate--module.exports..PersianDateClass+duration) ⇒ <code>Duration</code>
        - [.utc](#module_pDate--module.exports..PersianDateClass+utc) ⇒ <code>\*</code>
        - [.setup(input)](#module_pDate--module.exports..PersianDateClass+setup)
        - [.rangeName()](#module_pDate--module.exports..PersianDateClass+rangeName) ⇒ <code>\*</code>
        - [.toLeapYearMode(input)](#module_pDate--module.exports..PersianDateClass+toLeapYearMode) ⇒ <code>PersianDateClass</code>
        - [.toCalendar(input)](#module_pDate--module.exports..PersianDateClass+toCalendar) ⇒ <code>PersianDateClass</code>
        - [.toLocale(input)](#module_pDate--module.exports..PersianDateClass+toLocale) ⇒ <code>PersianDateClass</code>
        - [.isPersianDate(obj)](#module_pDate--module.exports..PersianDateClass+isPersianDate) ⇒ <code>boolean</code>
        - [.clone()](#module_pDate--module.exports..PersianDateClass+clone) ⇒ <code>PersianDate</code>
        - [.algorithmsCalc(dateArray)](#module_pDate--module.exports..PersianDateClass+algorithmsCalc) ⇒ <code>\*</code>
        - [.calendar()](#module_pDate--module.exports..PersianDateClass+calendar) ⇒ <code>\*</code>
        - [.duration(input, key)](#module_pDate--module.exports..PersianDateClass+duration) ⇒ <code>Duration</code>
        - [.isDuration(obj)](#module_pDate--module.exports..PersianDateClass+isDuration) ⇒ <code>boolean</code>
        - [.years(input)](#module_pDate--module.exports..PersianDateClass+years) ⇒ <code>\*</code>
        - [.year(input)](#module_pDate--module.exports..PersianDateClass+year) ⇒ <code>\*</code>
        - [.month(input)](#module_pDate--module.exports..PersianDateClass+month) ⇒ <code>\*</code>
        - [.days()](#module_pDate--module.exports..PersianDateClass+days) ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
        - [.day()](#module_pDate--module.exports..PersianDateClass+day) ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>
        - [.dates(input)](#module_pDate--module.exports..PersianDateClass+dates) ⇒ <code>\*</code>
        - [.date(input)](#module_pDate--module.exports..PersianDateClass+date) ⇒ <code>\*</code>
        - [.hour(input)](#module_pDate--module.exports..PersianDateClass+hour) ⇒ <code>\*</code>
        - [.hours(input)](#module_pDate--module.exports..PersianDateClass+hours) ⇒ <code>\*</code>
        - [.minute(input)](#module_pDate--module.exports..PersianDateClass+minute) ⇒ <code>\*</code>
        - [.minutes(input)](#module_pDate--module.exports..PersianDateClass+minutes) ⇒ <code>\*</code>
        - [.second(input)](#module_pDate--module.exports..PersianDateClass+second) ⇒ <code>\*</code>
        - [.seconds(input)](#module_pDate--module.exports..PersianDateClass+seconds) ⇒ <code>\*</code>
        - [.millisecond(input)](#module_pDate--module.exports..PersianDateClass+millisecond) ⇒ <code>\*</code>
        - [.milliseconds(input)](#module_pDate--module.exports..PersianDateClass+milliseconds) ⇒ <code>\*</code>
        - [.unix(timestamp)](#module_pDate--module.exports..PersianDateClass+unix) ⇒ <code>\*</code>
        - [.valueOf()](#module_pDate--module.exports..PersianDateClass+valueOf) ⇒ <code>\*</code>
        - [.getFirstWeekDayOfMonth(year, month)](#module_pDate--module.exports..PersianDateClass+getFirstWeekDayOfMonth) ⇒ <code>\*</code>
        - [.diff(input, val, asFloat)](#module_pDate--module.exports..PersianDateClass+diff) ⇒ <code>\*</code>
        - [.startOf(key)](#module_pDate--module.exports..PersianDateClass+startOf) ⇒ <code>\*</code>
        - [.sod()](#module_pDate--module.exports..PersianDateClass+sod) ⇒ <code>\*</code>
        - [.eod()](#module_pDate--module.exports..PersianDateClass+eod) ⇒ <code>\*</code>
        - [.zone()](#module_pDate--module.exports..PersianDateClass+zone) ⇒ <code>\*</code>
        - [.local()](#module_pDate--module.exports..PersianDateClass+local) ⇒ <code>PersianDate</code>
        - [.utc(input)](#module_pDate--module.exports..PersianDateClass+utc) ⇒ <code>\*</code>
        - [.isUtc()](#module_pDate--module.exports..PersianDateClass+isUtc) ⇒ <code>boolean</code>
        - [.isDST()](#module_pDate--module.exports..PersianDateClass+isDST) ⇒ <code>boolean</code>
        - [.isLeapYear()](#module_pDate--module.exports..PersianDateClass+isLeapYear) ⇒ <code>boolean</code>
        - [.daysInMonth(yearInput, monthInput)](#module_pDate--module.exports..PersianDateClass+daysInMonth) ⇒ <code>number</code>
        - [.toDate()](#module_pDate--module.exports..PersianDateClass+toDate) ⇒ <code>\*</code> \| <code>PersianDate.gDate</code>
        - [.toArray()](#module_pDate--module.exports..PersianDateClass+toArray) ⇒ <code>array</code>
        - [.formatNumber()](#module_pDate--module.exports..PersianDateClass+formatNumber) ⇒ <code>\*</code>
        - [.format(inputString)](#module_pDate--module.exports..PersianDateClass+format) ⇒ <code>\*</code>
        - [.add(key, value)](#module_pDate--module.exports..PersianDateClass+add) ⇒ <code>PersianDate</code>
        - [.subtract(key, value)](#module_pDate--module.exports..PersianDateClass+subtract) ⇒ <code>PersianDate</code>
        - [.isSameDay(dateB)](#module_pDate--module.exports..PersianDateClass+isSameDay) ⇒ <code>PersianDateClass</code> \| <code>\*</code> \| <code>boolean</code>
        - [.isSameMonth(dateA, dateB)](#module_pDate--module.exports..PersianDateClass+isSameMonth) ⇒ <code>\*</code> \| <code>boolean</code>
    - _static_
        - [.rangeName()](#module_pDate--module.exports..PersianDateClass.rangeName) ⇒ <code>\*</code>
        - [.toLeapYearMode(input)](#module_pDate--module.exports..PersianDateClass.toLeapYearMode) ⇒ <code>PersianDateClass</code>
        - [.toCalendar(input)](#module_pDate--module.exports..PersianDateClass.toCalendar) ⇒ <code>PersianDateClass</code>
        - [.toLocale(input)](#module_pDate--module.exports..PersianDateClass.toLocale) ⇒ <code>PersianDateClass</code>
        - [.isPersianDate(obj)](#module_pDate--module.exports..PersianDateClass.isPersianDate) ⇒ <code>boolean</code>
        - [.isDuration(obj)](#module_pDate--module.exports..PersianDateClass.isDuration) ⇒ <code>boolean</code>
        - [.getFirstWeekDayOfMonth(year, month)](#module_pDate--module.exports..PersianDateClass.getFirstWeekDayOfMonth) ⇒ <code>\*</code>
        - [.isSameDay(dateA, dateB)](#module_pDate--module.exports..PersianDateClass.isSameDay) ⇒ <code>boolean</code>
        - [.isSameMonth(dateA, dateB)](#module_pDate--module.exports..PersianDateClass.isSameMonth) ⇒ <code>boolean</code>

<a name="new_module_pDate--module.exports..PersianDateClass_new"></a>

#### new PersianDateClass(input)

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

<a name="module_pDate--module.exports..PersianDateClass+duration"></a>

#### persianDateClass.duration ⇒ <code>Duration</code>

return Duration object

**Kind**: instance property of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+utc"></a>

#### persianDateClass.utc ⇒ <code>\*</code>

**Kind**: instance property of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+setup"></a>

#### persianDateClass.setup(input)

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+rangeName"></a>

#### persianDateClass.rangeName() ⇒ <code>\*</code>

Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
**Since**: 1.0.0  
<a name="module_pDate--module.exports..PersianDateClass+toLeapYearMode"></a>

#### persianDateClass.toLeapYearMode(input) ⇒ <code>PersianDateClass</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+toCalendar"></a>

#### persianDateClass.toCalendar(input) ⇒ <code>PersianDateClass</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+toLocale"></a>

#### persianDateClass.toLocale(input) ⇒ <code>PersianDateClass</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+isPersianDate"></a>

#### persianDateClass.isPersianDate(obj) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+clone"></a>

#### persianDateClass.clone() ⇒ <code>PersianDate</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+algorithmsCalc"></a>

#### persianDateClass.algorithmsCalc(dateArray) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+calendar"></a>

#### persianDateClass.calendar() ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
**Since**: 1.0.0  
<a name="module_pDate--module.exports..PersianDateClass+duration"></a>

#### persianDateClass.duration(input, key) ⇒ <code>Duration</code>

return Duration object

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+isDuration"></a>

#### persianDateClass.isDuration(obj) ⇒ <code>boolean</code>

check if passed object is duration

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+years"></a>

#### persianDateClass.years(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+year"></a>

#### persianDateClass.year(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+month"></a>

#### persianDateClass.month(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+days"></a>

#### persianDateClass.days() ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>

Day of week

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+day"></a>

#### persianDateClass.day() ⇒ <code>function</code> \| <code>Date.toJSON.day</code> \| <code>date_json.day</code> \| <code>PersianDate.day</code> \| <code>day</code> \| <code>output.day</code> \| <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+dates"></a>

#### persianDateClass.dates(input) ⇒ <code>\*</code>

Day of Months

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+date"></a>

#### persianDateClass.date(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+hour"></a>

#### persianDateClass.hour(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+hours"></a>

#### persianDateClass.hours(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+minute"></a>

#### persianDateClass.minute(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+minutes"></a>

#### persianDateClass.minutes(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+second"></a>

#### persianDateClass.second(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+seconds"></a>

#### persianDateClass.seconds(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+millisecond"></a>

#### persianDateClass.millisecond(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+milliseconds"></a>

#### persianDateClass.milliseconds(input) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+unix"></a>

#### persianDateClass.unix(timestamp) ⇒ <code>\*</code>

Return Unix Timestamp (1318874398)

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+valueOf"></a>

#### persianDateClass.valueOf() ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+getFirstWeekDayOfMonth"></a>

#### persianDateClass.getFirstWeekDayOfMonth(year, month) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+diff"></a>

#### persianDateClass.diff(input, val, asFloat) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+startOf"></a>

#### persianDateClass.startOf(key) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+sod"></a>

#### persianDateClass.sod() ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+eod"></a>

#### persianDateClass.eod() ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+zone"></a>

#### persianDateClass.zone() ⇒ <code>\*</code>

Get the timezone offset in minutes.

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+local"></a>

#### persianDateClass.local() ⇒ <code>PersianDate</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+utc"></a>

#### persianDateClass.utc(input) ⇒ <code>\*</code>

Current date/time in UTC mode

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+isUtc"></a>

#### persianDateClass.isUtc() ⇒ <code>boolean</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+isDST"></a>

#### persianDateClass.isDST() ⇒ <code>boolean</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
**Link**: https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C  
<a name="module_pDate--module.exports..PersianDateClass+isLeapYear"></a>

#### persianDateClass.isLeapYear() ⇒ <code>boolean</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+daysInMonth"></a>

#### persianDateClass.daysInMonth(yearInput, monthInput) ⇒ <code>number</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+toDate"></a>

#### persianDateClass.toDate() ⇒ <code>\*</code> \| <code>PersianDate.gDate</code>

Return Native Javascript Date

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+toArray"></a>

#### persianDateClass.toArray() ⇒ <code>array</code>

Returns Array Of Persian Date

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+formatNumber"></a>

#### persianDateClass.formatNumber() ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
<a name="module_pDate--module.exports..PersianDateClass+format"></a>

#### persianDateClass.format(inputString) ⇒ <code>\*</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+add"></a>

#### persianDateClass.add(key, value) ⇒ <code>PersianDate</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+subtract"></a>

#### persianDateClass.subtract(key, value) ⇒ <code>PersianDate</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass+isSameDay"></a>

#### persianDateClass.isSameDay(dateB) ⇒ <code>PersianDateClass</code> \| <code>\*</code> \| <code>boolean</code>

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass+isSameMonth"></a>

#### persianDateClass.isSameMonth(dateA, dateB) ⇒ <code>\*</code> \| <code>boolean</code>

check two for month similarity

**Kind**: instance method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass.rangeName"></a>

#### PersianDateClass.rangeName() ⇒ <code>\*</code>

Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
**Since**: 1.0.0  
<a name="module_pDate--module.exports..PersianDateClass.toLeapYearMode"></a>

#### PersianDateClass.toLeapYearMode(input) ⇒ <code>PersianDateClass</code>

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass.toCalendar"></a>

#### PersianDateClass.toCalendar(input) ⇒ <code>PersianDateClass</code>

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass.toLocale"></a>

#### PersianDateClass.toLocale(input) ⇒ <code>PersianDateClass</code>

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass.isPersianDate"></a>

#### PersianDateClass.isPersianDate(obj) ⇒ <code>boolean</code>

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass.isDuration"></a>

#### PersianDateClass.isDuration(obj) ⇒ <code>boolean</code>

check if passed object is duration

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)

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

<a name="module_pDate--module.exports..PersianDateClass.getFirstWeekDayOfMonth"></a>

#### PersianDateClass.getFirstWeekDayOfMonth(year, month) ⇒ <code>\*</code>

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass.isSameDay"></a>

#### PersianDateClass.isSameDay(dateA, dateB) ⇒ <code>boolean</code>

check if a date is same as b

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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

<a name="module_pDate--module.exports..PersianDateClass.isSameMonth"></a>

#### PersianDateClass.isSameMonth(dateA, dateB) ⇒ <code>boolean</code>

check if a month is same as b

**Kind**: static method of [<code>PersianDateClass</code>](#module_pDate--module.exports..PersianDateClass)  
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
