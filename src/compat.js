/**
 * Compatibility cares
 * @module compat
 */


persianDate = PersianDate;
pDate = PersianDate;
persianDate.unix = persianDate.prototype.unix;
persianDate.utc = persianDate.prototype.utc;