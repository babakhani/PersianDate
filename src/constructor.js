var PersianDate = function (input) {
    if (!(this instanceof PersianDate))
        return new PersianDate(input)
    // Convert Any thing to Gregorian Date
    if (isUndefined(input)) {
        this.gDate = new Date();
    } else if (isDate(input)) {
        this.gDate = input;
    } else if (isArray(input)) {
        //  Encapsulate Input Array
        var arrayInput = input.slice();
        this.gDate = persianArrayToGregorianDate(arrayInput);
    } else if (isNumber(input)) {
        this.gDate = new Date(input);
    } else if (input instanceof PersianDate) {
        this.gDate = input.gDate;
    }
    // ASP.NET JSON Date
    else if (input.substring(0, 6) === "/Date(") {
        this.gDate = new Date(parseInt(input.substr(6)));
    }
    this.pDate = toPersianDate(this.gDate);
    return this;
};
