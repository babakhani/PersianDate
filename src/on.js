class Container {
  constructor () {
    this.isInvalidDate = null;
    this.gDate = null;
    this.julianday = 0;
    this.zone = 0;
    this.gregorian = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      weekday: 0,
      unix: 0,
      leap: 0
    };
    this.persian = {
      year: 0,
      month: 0,
      day: 0,
      leap: 0,
      weekday: 0,
    };
  }
}

module.exports = Container;
