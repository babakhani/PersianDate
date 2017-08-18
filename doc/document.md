## Modules

<dl>
<dt><a href="#module_constants">constants</a></dt>
<dd><p>Constants</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Algorithms">Algorithms</a></dt>
<dd></dd>
<dt><a href="#Duration">Duration</a></dt>
<dd><p>Duration</p>
</dd>
</dl>

<a name="module_constants"></a>

## constants
Constants


* [constants](#module_constants)
    * [.GREGORIAN_EPOCH](#module_constants.GREGORIAN_EPOCH) : <code>number</code>
    * [.PERSIAN_EPOCH](#module_constants.PERSIAN_EPOCH) : <code>number</code>
    * [.monthRange](#module_constants.monthRange) : <code>Object</code>
    * [.weekRange](#module_constants.weekRange) : <code>Object</code>
    * [.persianDaysName](#module_constants.persianDaysName) : <code>Array.&lt;string&gt;</code>

<a name="module_constants.GREGORIAN_EPOCH"></a>

### constants.GREGORIAN_EPOCH : <code>number</code>
**Kind**: static property of <code>[constants](#module_constants)</code>  
<a name="module_constants.PERSIAN_EPOCH"></a>

### constants.PERSIAN_EPOCH : <code>number</code>
**Kind**: static property of <code>[constants](#module_constants)</code>  
<a name="module_constants.monthRange"></a>

### constants.monthRange : <code>Object</code>
**Kind**: static property of <code>[constants](#module_constants)</code>  
<a name="module_constants.weekRange"></a>

### constants.weekRange : <code>Object</code>
**Kind**: static property of <code>[constants](#module_constants)</code>  
<a name="module_constants.persianDaysName"></a>

### constants.persianDaysName : <code>Array.&lt;string&gt;</code>
**Kind**: static property of <code>[constants](#module_constants)</code>  
<a name="Algorithms"></a>

## Algorithms
**Kind**: global class  
**Author**: Reza Babakhani  

* [Algorithms](#Algorithms)
    * [new Algorithms()](#new_Algorithms_new)
    * [.jwday(j)](#Algorithms+jwday) ⇒ <code>\*</code>
    * [.isLeapGregorian(year)](#Algorithms+isLeapGregorian) ⇒ <code>boolean</code>
    * [.isLeapPersian(year)](#Algorithms+isLeapPersian) ⇒ <code>boolean</code>
    * [.gregorianToJd(year, month, day)](#Algorithms+gregorianToJd) ⇒ <code>number</code>
    * [.jdToGregorian(jd)](#Algorithms+jdToGregorian) ⇒ <code>Array</code>
    * [.persianToJd(year, month, day)](#Algorithms+persianToJd) ⇒ <code>\*</code>
    * [.jdToPersian(jd)](#Algorithms+jdToPersian) ⇒ <code>Array</code>
    * [.calcPersian(year, month, day)](#Algorithms+calcPersian) ⇒ <code>Array</code>
    * [.calcGregorian(year, month, day)](#Algorithms+calcGregorian) ⇒ <code>Array</code>
    * [.toPersianDate(gd)](#Algorithms+toPersianDate) ⇒ <code>Object</code>
    * [.persianArrayToGregorianDate(parray)](#Algorithms+persianArrayToGregorianDate) ⇒ <code>Date</code>
    * [.getPersianArrayFromPDate(pDate)](#Algorithms+getPersianArrayFromPDate) ⇒ <code>array</code>

<a name="new_Algorithms_new"></a>

### new Algorithms()
Calendar algorithms implementations

<a name="Algorithms+jwday"></a>

### algorithms.jwday(j) ⇒ <code>\*</code>
**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>j</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+isLeapGregorian"></a>

### algorithms.isLeapGregorian(year) ⇒ <code>boolean</code>
Is a given year in the Gregorian calendar a leap year ?

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+isLeapPersian"></a>

### algorithms.isLeapPersian(year) ⇒ <code>boolean</code>
**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+gregorianToJd"></a>

### algorithms.gregorianToJd(year, month, day) ⇒ <code>number</code>
Determine Julian day number from Gregorian calendar date

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
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
    </tr><tr>
    <td>day</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+jdToGregorian"></a>

### algorithms.jdToGregorian(jd) ⇒ <code>Array</code>
Calculate Gregorian calendar date from Julian day

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>jd</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+persianToJd"></a>

### algorithms.persianToJd(year, month, day) ⇒ <code>\*</code>
Determine Julian day from Persian date

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
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
    </tr><tr>
    <td>day</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+jdToPersian"></a>

### algorithms.jdToPersian(jd) ⇒ <code>Array</code>
Calculate Persian date from Julian day

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>jd</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+calcPersian"></a>

### algorithms.calcPersian(year, month, day) ⇒ <code>Array</code>
**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
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
    </tr><tr>
    <td>day</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+calcGregorian"></a>

### algorithms.calcGregorian(year, month, day) ⇒ <code>Array</code>
Perform calculation starting with a Gregorian date

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
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
    </tr><tr>
    <td>day</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+toPersianDate"></a>

### algorithms.toPersianDate(gd) ⇒ <code>Object</code>
Converts a gregorian date to Jalali date for different formats

**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gd</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+persianArrayToGregorianDate"></a>

### algorithms.persianArrayToGregorianDate(parray) ⇒ <code>Date</code>
**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>parray</td><td><p>persian-date array</p>
</td>
    </tr>  </tbody>
</table>

<a name="Algorithms+getPersianArrayFromPDate"></a>

### algorithms.getPersianArrayFromPDate(pDate) ⇒ <code>array</code>
**Kind**: instance method of <code>[Algorithms](#Algorithms)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pDate</td>
    </tr>  </tbody>
</table>

<a name="Duration"></a>

## Duration
Duration

**Kind**: global class  
<a name="new_Duration_new"></a>

### new Duration(duration)
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>duration</td>
    </tr>  </tbody>
</table>

