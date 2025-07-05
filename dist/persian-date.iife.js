var persianDate = function() {
  "use strict";
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var pDate = { exports: {} };
  var typeChecking;
  var hasRequiredTypeChecking;
  function requireTypeChecking() {
    if (hasRequiredTypeChecking) return typeChecking;
    hasRequiredTypeChecking = 1;
    typeChecking = {
      /**
       * @param input
       * @returns {boolean}
       */
      isArray(input) {
        return Object.prototype.toString.call(input) === "[object Array]";
      },
      /**
       *
       * @param input
       * @returns {boolean}
       */
      isNumber(input) {
        return typeof input === "number";
      },
      /**
       *
       * @param input
       * @returns {boolean}
       */
      isDate(input) {
        return input instanceof Date;
      }
    };
    return typeChecking;
  }
  var astro;
  var hasRequiredAstro;
  function requireAstro() {
    if (hasRequiredAstro) return astro;
    hasRequiredAstro = 1;
    class ASTRO {
      constructor() {
        this.J2000 = 2451545;
        this.JulianCentury = 36525;
        this.JulianMillennium = this.JulianCentury * 10;
        this.TropicalYear = 365.24219878;
        this.oterms = [
          -4680.93,
          -1.55,
          1999.25,
          -51.38,
          -249.67,
          -39.05,
          7.12,
          27.87,
          5.79,
          2.45
        ];
        this.nutArgMult = [
          0,
          0,
          0,
          0,
          1,
          -2,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          0,
          2,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          -2,
          1,
          0,
          2,
          2,
          0,
          0,
          0,
          2,
          1,
          0,
          0,
          1,
          2,
          2,
          -2,
          -1,
          0,
          2,
          2,
          -2,
          0,
          1,
          0,
          0,
          -2,
          0,
          0,
          2,
          1,
          0,
          0,
          -1,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          2,
          0,
          -1,
          2,
          2,
          0,
          0,
          -1,
          0,
          1,
          0,
          0,
          1,
          2,
          1,
          -2,
          0,
          2,
          0,
          0,
          0,
          0,
          -2,
          2,
          1,
          2,
          0,
          0,
          2,
          2,
          0,
          0,
          2,
          2,
          2,
          0,
          0,
          2,
          0,
          0,
          -2,
          0,
          1,
          2,
          2,
          0,
          0,
          0,
          2,
          0,
          -2,
          0,
          0,
          2,
          0,
          0,
          0,
          -1,
          2,
          1,
          0,
          2,
          0,
          0,
          0,
          2,
          0,
          -1,
          0,
          1,
          -2,
          2,
          0,
          2,
          2,
          0,
          1,
          0,
          0,
          1,
          -2,
          0,
          1,
          0,
          1,
          0,
          -1,
          0,
          0,
          1,
          0,
          0,
          2,
          -2,
          0,
          2,
          0,
          -1,
          2,
          1,
          2,
          0,
          1,
          2,
          2,
          0,
          1,
          0,
          2,
          2,
          -2,
          1,
          1,
          0,
          0,
          0,
          -1,
          0,
          2,
          2,
          2,
          0,
          0,
          2,
          1,
          2,
          0,
          1,
          0,
          0,
          -2,
          0,
          2,
          2,
          2,
          -2,
          0,
          1,
          2,
          1,
          2,
          0,
          -2,
          0,
          1,
          2,
          0,
          0,
          0,
          1,
          0,
          -1,
          1,
          0,
          0,
          -2,
          -1,
          0,
          2,
          1,
          -2,
          0,
          0,
          0,
          1,
          0,
          0,
          2,
          2,
          1,
          -2,
          0,
          2,
          0,
          1,
          -2,
          1,
          0,
          2,
          1,
          0,
          0,
          1,
          -2,
          0,
          -1,
          0,
          1,
          0,
          0,
          -2,
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          2,
          0,
          -1,
          -1,
          1,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          -1,
          1,
          2,
          2,
          2,
          -1,
          -1,
          2,
          2,
          0,
          0,
          -2,
          2,
          2,
          0,
          0,
          3,
          2,
          2,
          2,
          -1,
          0,
          2,
          2
        ];
        this.nutArgCoeff = [
          -171996,
          -1742,
          92095,
          89,
          /*  0,  0,  0,  0,  1 */
          -13187,
          -16,
          5736,
          -31,
          /* -2,  0,  0,  2,  2 */
          -2274,
          -2,
          977,
          -5,
          /*  0,  0,  0,  2,  2 */
          2062,
          2,
          -895,
          5,
          /*  0,  0,  0,  0,  2 */
          1426,
          -34,
          54,
          -1,
          /*  0,  1,  0,  0,  0 */
          712,
          1,
          -7,
          0,
          /*  0,  0,  1,  0,  0 */
          -517,
          12,
          224,
          -6,
          /* -2,  1,  0,  2,  2 */
          -386,
          -4,
          200,
          0,
          /*  0,  0,  0,  2,  1 */
          -301,
          0,
          129,
          -1,
          /*  0,  0,  1,  2,  2 */
          217,
          -5,
          -95,
          3,
          /* -2, -1,  0,  2,  2 */
          -158,
          0,
          0,
          0,
          /* -2,  0,  1,  0,  0 */
          129,
          1,
          -70,
          0,
          /* -2,  0,  0,  2,  1 */
          123,
          0,
          -53,
          0,
          /*  0,  0, -1,  2,  2 */
          63,
          0,
          0,
          0,
          /*  2,  0,  0,  0,  0 */
          63,
          1,
          -33,
          0,
          /*  0,  0,  1,  0,  1 */
          -59,
          0,
          26,
          0,
          /*  2,  0, -1,  2,  2 */
          -58,
          -1,
          32,
          0,
          /*  0,  0, -1,  0,  1 */
          -51,
          0,
          27,
          0,
          /*  0,  0,  1,  2,  1 */
          48,
          0,
          0,
          0,
          /* -2,  0,  2,  0,  0 */
          46,
          0,
          -24,
          0,
          /*  0,  0, -2,  2,  1 */
          -38,
          0,
          16,
          0,
          /*  2,  0,  0,  2,  2 */
          -31,
          0,
          13,
          0,
          /*  0,  0,  2,  2,  2 */
          29,
          0,
          0,
          0,
          /*  0,  0,  2,  0,  0 */
          29,
          0,
          -12,
          0,
          /* -2,  0,  1,  2,  2 */
          26,
          0,
          0,
          0,
          /*  0,  0,  0,  2,  0 */
          -22,
          0,
          0,
          0,
          /* -2,  0,  0,  2,  0 */
          21,
          0,
          -10,
          0,
          /*  0,  0, -1,  2,  1 */
          17,
          -1,
          0,
          0,
          /*  0,  2,  0,  0,  0 */
          16,
          0,
          -8,
          0,
          /*  2,  0, -1,  0,  1 */
          -16,
          1,
          7,
          0,
          /* -2,  2,  0,  2,  2 */
          -15,
          0,
          9,
          0,
          /*  0,  1,  0,  0,  1 */
          -13,
          0,
          7,
          0,
          /* -2,  0,  1,  0,  1 */
          -12,
          0,
          6,
          0,
          /*  0, -1,  0,  0,  1 */
          11,
          0,
          0,
          0,
          /*  0,  0,  2, -2,  0 */
          -10,
          0,
          5,
          0,
          /*  2,  0, -1,  2,  1 */
          -8,
          0,
          3,
          0,
          /*  2,  0,  1,  2,  2 */
          7,
          0,
          -3,
          0,
          /*  0,  1,  0,  2,  2 */
          -7,
          0,
          0,
          0,
          /* -2,  1,  1,  0,  0 */
          -7,
          0,
          3,
          0,
          /*  0, -1,  0,  2,  2 */
          -7,
          0,
          3,
          0,
          /*  2,  0,  0,  2,  1 */
          6,
          0,
          0,
          0,
          /*  2,  0,  1,  0,  0 */
          6,
          0,
          -3,
          0,
          /* -2,  0,  2,  2,  2 */
          6,
          0,
          -3,
          0,
          /* -2,  0,  1,  2,  1 */
          -6,
          0,
          3,
          0,
          /*  2,  0, -2,  0,  1 */
          -6,
          0,
          3,
          0,
          /*  2,  0,  0,  0,  1 */
          5,
          0,
          0,
          0,
          /*  0, -1,  1,  0,  0 */
          -5,
          0,
          3,
          0,
          /* -2, -1,  0,  2,  1 */
          -5,
          0,
          3,
          0,
          /* -2,  0,  0,  0,  1 */
          -5,
          0,
          3,
          0,
          /*  0,  0,  2,  2,  1 */
          4,
          0,
          0,
          0,
          /* -2,  0,  2,  0,  1 */
          4,
          0,
          0,
          0,
          /* -2,  1,  0,  2,  1 */
          4,
          0,
          0,
          0,
          /*  0,  0,  1, -2,  0 */
          -4,
          0,
          0,
          0,
          /* -1,  0,  1,  0,  0 */
          -4,
          0,
          0,
          0,
          /* -2,  1,  0,  0,  0 */
          -4,
          0,
          0,
          0,
          /*  1,  0,  0,  0,  0 */
          3,
          0,
          0,
          0,
          /*  0,  0,  1,  2,  0 */
          -3,
          0,
          0,
          0,
          /* -1, -1,  1,  0,  0 */
          -3,
          0,
          0,
          0,
          /*  0,  1,  1,  0,  0 */
          -3,
          0,
          0,
          0,
          /*  0, -1,  1,  2,  2 */
          -3,
          0,
          0,
          0,
          /*  2, -1, -1,  2,  2 */
          -3,
          0,
          0,
          0,
          /*  0,  0, -2,  2,  2 */
          -3,
          0,
          0,
          0,
          /*  0,  0,  3,  2,  2 */
          -3,
          0,
          0,
          0
          /*  2, -1,  0,  2,  2 */
        ];
        this.deltaTtab = [
          121,
          112,
          103,
          95,
          88,
          82,
          77,
          72,
          68,
          63,
          60,
          56,
          53,
          51,
          48,
          46,
          44,
          42,
          40,
          38,
          35,
          33,
          31,
          29,
          26,
          24,
          22,
          20,
          18,
          16,
          14,
          12,
          11,
          10,
          9,
          8,
          7,
          7,
          7,
          7,
          7,
          7,
          8,
          8,
          9,
          9,
          9,
          9,
          9,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          10,
          11,
          11,
          11,
          11,
          11,
          12,
          12,
          12,
          12,
          13,
          13,
          13,
          14,
          14,
          14,
          14,
          15,
          15,
          15,
          15,
          15,
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          15,
          15,
          14,
          13,
          13.1,
          12.5,
          12.2,
          12,
          12,
          12,
          12,
          12,
          12,
          11.9,
          11.6,
          11,
          10.2,
          9.2,
          8.2,
          7.1,
          6.2,
          5.6,
          5.4,
          5.3,
          5.4,
          5.6,
          5.9,
          6.2,
          6.5,
          6.8,
          7.1,
          7.3,
          7.5,
          7.6,
          7.7,
          7.3,
          6.2,
          5.2,
          2.7,
          1.4,
          -1.2,
          -2.8,
          -3.8,
          -4.8,
          -5.5,
          -5.3,
          -5.6,
          -5.7,
          -5.9,
          -6,
          -6.3,
          -6.5,
          -6.2,
          -4.7,
          -2.8,
          -0.1,
          2.6,
          5.3,
          7.7,
          10.4,
          13.3,
          16,
          18.2,
          20.2,
          21.1,
          22.4,
          23.5,
          23.8,
          24.3,
          24,
          23.9,
          23.9,
          23.7,
          24,
          24.3,
          25.3,
          26.2,
          27.3,
          28.2,
          29.1,
          30,
          30.7,
          31.4,
          32.2,
          33.1,
          34,
          35,
          36.5,
          38.3,
          40.2,
          42.2,
          44.5,
          46.5,
          48.5,
          50.5,
          52.2,
          53.8,
          54.9,
          55.8,
          56.9,
          58.3,
          60,
          61.6,
          63,
          65,
          66.6
        ];
        this.EquinoxpTerms = [
          485,
          324.96,
          1934.136,
          203,
          337.23,
          32964.467,
          199,
          342.08,
          20.186,
          182,
          27.85,
          445267.112,
          156,
          73.14,
          45036.886,
          136,
          171.52,
          22518.443,
          77,
          222.54,
          65928.934,
          74,
          296.72,
          3034.906,
          70,
          243.58,
          9037.513,
          58,
          119.81,
          33718.147,
          52,
          297.17,
          150.678,
          50,
          21.02,
          2281.226,
          45,
          247.54,
          29929.562,
          44,
          325.15,
          31555.956,
          29,
          60.93,
          4443.417,
          18,
          155.12,
          67555.328,
          17,
          288.79,
          4562.452,
          16,
          198.04,
          62894.029,
          14,
          199.76,
          31436.921,
          12,
          95.39,
          14577.848,
          12,
          287.11,
          31931.756,
          12,
          320.81,
          34777.259,
          9,
          227.73,
          1222.114,
          8,
          15.45,
          16859.074
        ];
        this.JDE0tab1000 = [
          new Array(172113929189e-5, 365242.1374, 0.06134, 111e-5, -71e-5),
          new Array(172123325401e-5, 365241.72562, -0.05323, 907e-5, 25e-5),
          new Array(172132570455e-5, 365242.49558, -0.11677, -297e-5, 74e-5),
          new Array(172141439987e-5, 365242.88257, -769e-5, -933e-5, -6e-5)
        ];
        this.JDE0tab2000 = [
          new Array(245162380984e-5, 365242.37404, 0.05169, -411e-5, -57e-5),
          new Array(245171656767e-5, 365241.62603, 325e-5, 888e-5, -3e-4),
          new Array(245181021715e-5, 365242.01767, -0.11575, 337e-5, 78e-5),
          new Array(245190005952e-5, 365242.74049, -0.06223, -823e-5, 32e-5)
        ];
      }
      /**
       *
       * @param Degrees to radians.
       * @return {number}
       */
      dtr(d) {
        return d * Math.PI / 180;
      }
      /**
       * @desc Radians to degrees.
       * @param r
       * @return {number}
       */
      rtd(r) {
        return r * 180 / Math.PI;
      }
      /**
       * @desc Range reduce angle in degrees.
       * @param a
       * @return {number}
       */
      fixangle(a) {
        return a - 360 * Math.floor(a / 360);
      }
      /**
       * @desc Range reduce angle in radians.
       * @param a
       * @return {number}
       */
      fixangr(a) {
        return a - 2 * Math.PI * Math.floor(a / (2 * Math.PI));
      }
      /**
       * @desc  Sine of an angle in degrees
       * @param d
       * @return {number}
       */
      dsin(d) {
        return Math.sin(this.dtr(d));
      }
      /**
       * @desc Cosine of an angle in degrees
       * @param d
       * @return {number}
       */
      dcos(d) {
        return Math.cos(this.dtr(d));
      }
      /**
       * @desc Modulus function which works for non-integers.
       * @param a
       * @param b
       * @return {number}
       */
      mod(a, b) {
        return a - b * Math.floor(a / b);
      }
      /**
       *
       * @param j
       * @return {number}
       */
      jwday(j) {
        return this.mod(Math.floor(j + 1.5), 7);
      }
      /**
       *
       * @param jd
       * @return {number|*}
       */
      obliqeq(jd) {
        var eps, u, v, i;
        v = u = (jd - this.J2000) / (this.JulianCentury * 100);
        eps = 23 + 26 / 60 + 21.448 / 3600;
        if (Math.abs(u) < 1) {
          for (i = 0; i < 10; i++) {
            eps += this.oterms[i] / 3600 * v;
            v *= u;
          }
        }
        return eps;
      }
      /**
       * @desc  Calculate the nutation in longitude, deltaPsi, and
       obliquity, deltaEpsilon for a given Julian date
       jd.  Results are returned as a two element Array
       giving (deltaPsi, deltaEpsilon) in degrees.
       * @param jd
       * @return Object
       */
      nutation(jd) {
        var deltaPsi, deltaEpsilon, i, j, t = (jd - 2451545) / 36525, t2, t3, to10, ta = [], dp = 0, de = 0, ang;
        t3 = t * (t2 = t * t);
        ta[0] = this.dtr(297.850363 + 445267.11148 * t - 19142e-7 * t2 + t3 / 189474);
        ta[1] = this.dtr(357.52772 + 35999.05034 * t - 1603e-7 * t2 - t3 / 3e5);
        ta[2] = this.dtr(134.96298 + 477198.867398 * t + 86972e-7 * t2 + t3 / 56250);
        ta[3] = this.dtr(93.27191 + 483202.017538 * t - 36825e-7 * t2 + t3 / 327270);
        ta[4] = this.dtr(125.04452 - 1934.136261 * t + 20708e-7 * t2 + t3 / 45e4);
        for (i = 0; i < 5; i++) {
          ta[i] = this.fixangr(ta[i]);
        }
        to10 = t / 10;
        for (i = 0; i < 63; i++) {
          ang = 0;
          for (j = 0; j < 5; j++) {
            if (this.nutArgMult[i * 5 + j] !== 0) {
              ang += this.nutArgMult[i * 5 + j] * ta[j];
            }
          }
          dp += (this.nutArgCoeff[i * 4 + 0] + this.nutArgCoeff[i * 4 + 1] * to10) * Math.sin(ang);
          de += (this.nutArgCoeff[i * 4 + 2] + this.nutArgCoeff[i * 4 + 3] * to10) * Math.cos(ang);
        }
        deltaPsi = dp / (3600 * 1e4);
        deltaEpsilon = de / (3600 * 1e4);
        return [deltaPsi, deltaEpsilon];
      }
      /**
       * @desc  Determine the difference, in seconds, between
       Dynamical time and Universal time.
       * @param year
       * @return {*}
       */
      deltat(year) {
        var dt, f, i, t;
        if (year >= 1620 && year <= 2e3) {
          i = Math.floor((year - 1620) / 2);
          f = (year - 1620) / 2 - i;
          dt = this.deltaTtab[i] + (this.deltaTtab[i + 1] - this.deltaTtab[i]) * f;
        } else {
          t = (year - 2e3) / 100;
          if (year < 948) {
            dt = 2177 + 497 * t + 44.1 * t * t;
          } else {
            dt = 102 + 102 * t + 25.3 * t * t;
            if (year > 2e3 && year < 2100) {
              dt += 0.37 * (year - 2100);
            }
          }
        }
        return dt;
      }
      /**
       *
       * @param year
       * @param which
       * @return {*}
       */
      equinox(year, which) {
        let deltaL, i, j, JDE0, JDE, JDE0tab, S, T, W, Y;
        if (year < 1e3) {
          JDE0tab = this.JDE0tab1000;
          Y = year / 1e3;
        } else {
          JDE0tab = this.JDE0tab2000;
          Y = (year - 2e3) / 1e3;
        }
        JDE0 = JDE0tab[which][0] + JDE0tab[which][1] * Y + JDE0tab[which][2] * Y * Y + JDE0tab[which][3] * Y * Y * Y + JDE0tab[which][4] * Y * Y * Y * Y;
        T = (JDE0 - 2451545) / 36525;
        W = 35999.373 * T - 2.47;
        deltaL = 1 + 0.0334 * this.dcos(W) + 7e-4 * this.dcos(2 * W);
        S = 0;
        for (i = j = 0; i < 24; i++) {
          S += this.EquinoxpTerms[j] * this.dcos(this.EquinoxpTerms[j + 1] + this.EquinoxpTerms[j + 2] * T);
          j += 3;
        }
        JDE = JDE0 + S * 1e-5 / deltaL;
        return JDE;
      }
      /**
       * @desc  Position of the Sun.  Please see the comments
       on the return statement at the end of this function
       which describe the array it returns.  We return
       intermediate values because they are useful in a
       variety of other contexts.
       * @param jd
       * @return Object
       */
      sunpos(jd) {
        let T, T2, L0, M, e, C, sunLong, sunAnomaly, sunR, Omega, Lambda, epsilon, epsilon0, Alpha, Delta, AlphaApp, DeltaApp;
        T = (jd - this.J2000) / this.JulianCentury;
        T2 = T * T;
        L0 = 280.46646 + 36000.76983 * T + 3032e-7 * T2;
        L0 = this.fixangle(L0);
        M = 357.52911 + 35999.05029 * T + -1537e-7 * T2;
        M = this.fixangle(M);
        e = 0.016708634 + -42037e-9 * T + -1267e-10 * T2;
        C = (1.914602 + -4817e-6 * T + -14e-6 * T2) * this.dsin(M) + (0.019993 - 101e-6 * T) * this.dsin(2 * M) + 289e-6 * this.dsin(3 * M);
        sunLong = L0 + C;
        sunAnomaly = M + C;
        sunR = 1.000001018 * (1 - e * e) / (1 + e * this.dcos(sunAnomaly));
        Omega = 125.04 - 1934.136 * T;
        Lambda = sunLong + -569e-5 + -478e-5 * this.dsin(Omega);
        epsilon0 = this.obliqeq(jd);
        epsilon = epsilon0 + 256e-5 * this.dcos(Omega);
        Alpha = this.rtd(Math.atan2(this.dcos(epsilon0) * this.dsin(sunLong), this.dcos(sunLong)));
        Alpha = this.fixangle(Alpha);
        Delta = this.rtd(Math.asin(this.dsin(epsilon0) * this.dsin(sunLong)));
        AlphaApp = this.rtd(Math.atan2(this.dcos(epsilon) * this.dsin(Lambda), this.dcos(Lambda)));
        AlphaApp = this.fixangle(AlphaApp);
        DeltaApp = this.rtd(Math.asin(this.dsin(epsilon) * this.dsin(Lambda)));
        return [
          //  Angular quantities are expressed in decimal degrees
          L0,
          //  [0] Geometric mean longitude of the Sun
          M,
          //  [1] Mean anomaly of the Sun
          e,
          //  [2] Eccentricity of the Earth's orbit
          C,
          //  [3] Sun's equation of the Centre
          sunLong,
          //  [4] Sun's true longitude
          sunAnomaly,
          //  [5] Sun's true anomaly
          sunR,
          //  [6] Sun's radius vector in AU
          Lambda,
          //  [7] Sun's apparent longitude at true equinox of the date
          Alpha,
          //  [8] Sun's true right ascension
          Delta,
          //  [9] Sun's true declination
          AlphaApp,
          // [10] Sun's apparent right ascension
          DeltaApp
          // [11] Sun's apparent declination
        ];
      }
      /**
       * @desc Compute equation of time for a given moment. Returns the equation of time as a fraction of a day.
       * @param jd
       * @return {number|*}
       */
      equationOfTime(jd) {
        let alpha, deltaPsi, E, epsilon, L0, tau;
        tau = (jd - this.J2000) / this.JulianMillennium;
        L0 = 280.4664567 + 360007.6982779 * tau + 0.03032028 * tau * tau + tau * tau * tau / 49931 + -(tau * tau * tau * tau / 15300) + -(tau * tau * tau * tau * tau / 2e6);
        L0 = this.fixangle(L0);
        alpha = this.sunpos(jd)[10];
        deltaPsi = this.nutation(jd)[0];
        epsilon = this.obliqeq(jd) + this.nutation(jd)[1];
        E = L0 + -57183e-7 + -alpha + deltaPsi * this.dcos(epsilon);
        E = E - 20 * Math.floor(E / 20);
        E = E / (24 * 60);
        return E;
      }
    }
    astro = ASTRO;
    return astro;
  }
  var on;
  var hasRequiredOn;
  function requireOn() {
    if (hasRequiredOn) return on;
    hasRequiredOn = 1;
    class Container {
      constructor() {
        this.isInvalidDate = null;
        this.gDate = null;
        this.modifiedjulianday = 0;
        this.julianday = 0;
        this.gregserial = {
          day: 0
        };
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
        this.juliancalendar = {
          year: 0,
          month: 0,
          day: 0,
          leap: 0,
          weekday: 0
        };
        this.islamic = {
          year: 0,
          month: 0,
          day: 0,
          leap: 0,
          weekday: 0
        };
        this.persianAlgo = this.persian = {
          year: 0,
          month: 0,
          day: 0,
          leap: 0,
          weekday: 0
        };
        this.persianAstro = {
          year: 0,
          month: 0,
          day: 0,
          leap: 0,
          weekday: 0
        };
        this.isoweek = {
          year: 0,
          week: 0,
          day: 0
        };
        this.isoday = {
          year: 0,
          day: 0
        };
      }
    }
    on = Container;
    return on;
  }
  var algorithms;
  var hasRequiredAlgorithms;
  function requireAlgorithms() {
    if (hasRequiredAlgorithms) return algorithms;
    hasRequiredAlgorithms = 1;
    let ASTRO = requireAstro();
    let State = requireOn();
    class Algorithms {
      constructor(parent) {
        this.parent = parent;
        this.ASTRO = new ASTRO();
        this.State = new State();
        this.J0000 = 17214245e-1;
        this.J1970 = 24405875e-1;
        this.JMJD = 24000005e-1;
        this.NormLeap = [
          false,
          true
          /*"Leap year"*/
        ];
        this.GREGORIAN_EPOCH = 17214255e-1;
        this.PERSIAN_EPOCH = 19483205e-1;
      }
      /**
       * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
       * @param year
       * @return {boolean}
       */
      leap_gregorian(year) {
        return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
      }
      /**
       * @desc Determine Julian day number from Gregorian calendar date
       * @param {*} year
       * @param {*} month
       * @param {*} day
       */
      gregorian_to_jd(year, month, day) {
        return this.GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) + -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : this.leap_gregorian(year) ? -1 : -2) + day);
      }
      /**
       * @desc Calculate Gregorian calendar date from Julian day
       * @param {*} jd
       */
      jd_to_gregorian(jd) {
        let wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, year, yearday, leapadj, month, day;
        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = this.ASTRO.mod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = this.ASTRO.mod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = this.ASTRO.mod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
          year++;
        }
        yearday = wjd - this.gregorian_to_jd(year, 1, 1);
        leapadj = wjd < this.gregorian_to_jd(year, 3, 1) ? 0 : this.leap_gregorian(year) ? 1 : 2;
        month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        day = wjd - this.gregorian_to_jd(year, month, 1) + 1;
        return [year, month, day];
      }
      /**
       * @param {*} year
       */
      //    leap_julian (year) {
      //        return this.ASTRO.mod(year, 4) === ((year > 0) ? 0 : 3);
      //    }
      /**
       * @desc Calculate Julian calendar date from Julian day
       * @param {*} td
       */
      //    jd_to_julian (td) {
      //        let z, a, b, c, d, e, year, month, day;
      //
      //        td += 0.5;
      //        z = Math.floor(td);
      //
      //        a = z;
      //        b = a + 1524;
      //        c = Math.floor((b - 122.1) / 365.25);
      //        d = Math.floor(365.25 * c);
      //        e = Math.floor((b - d) / 30.6001);
      //
      //        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
      //        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
      //        day = b - d - Math.floor(30.6001 * e);
      //
      //        /*  If year is less than 1, subtract one to convert from
      //         a zero based date system to the common era system in
      //         which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */
      //
      //        if (year < 1) {
      //            year--;
      //        }
      //
      //        return [year, month, day];
      //    }
      /**
       * @desc TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
       March equinox at the Tehran meridian in
       a given Gregorian year.
       * @param {*} year
       */
      tehran_equinox(year) {
        let equJED, equJD, equAPP, equTehran, dtTehran;
        equJED = this.ASTRO.equinox(year, 0);
        equJD = equJED - this.ASTRO.deltat(year) / (24 * 60 * 60);
        equAPP = equJD + this.ASTRO.equationOfTime(equJED);
        dtTehran = (52 + 30 / 60 + 0 / (60 * 60)) / 360;
        equTehran = equAPP + dtTehran;
        return equTehran;
      }
      /**
       * @desc TEHRAN_EQUINOX_JD  --  Calculate Julian day during which the
       March equinox, reckoned from the Tehran
       meridian, occurred for a given Gregorian
       year.
       * @param {*} year
       */
      tehran_equinox_jd(year) {
        let ep, epg;
        ep = this.tehran_equinox(year);
        epg = Math.floor(ep);
        return epg;
      }
      /**
      		     * @desc  PERSIANA_YEAR  --  Determine the year in the Persian
      		     astronomical calendar in which a
      		     given Julian day falls.  Returns an
      		     array of two elements:
      
      		     [0]  Persian year
      		     [1]  Julian day number containing
      		     equinox for this year.
      		     * @param {*} jd
      		     */
      persiana_year(jd) {
        let guess = this.jd_to_gregorian(jd)[0] - 2, lasteq, nexteq, adr;
        lasteq = this.tehran_equinox_jd(guess);
        while (lasteq > jd) {
          guess--;
          lasteq = this.tehran_equinox_jd(guess);
        }
        nexteq = lasteq - 1;
        while (!(lasteq <= jd && jd < nexteq)) {
          lasteq = nexteq;
          guess++;
          nexteq = this.tehran_equinox_jd(guess);
        }
        adr = Math.round((lasteq - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1;
        return [adr, lasteq];
      }
      /**
       * @desc Calculate date in the Persian astronomical
       calendar from Julian day.
       * @param {*} jd
       */
      jd_to_persiana(jd) {
        let year, month, day, adr, equinox, yday;
        jd = Math.floor(jd) + 0.5;
        adr = this.persiana_year(jd);
        year = adr[0];
        equinox = adr[1];
        day = Math.floor((jd - equinox) / 30) + 1;
        yday = Math.floor(jd) - this.persiana_to_jd(year, 1, 1) + 1;
        month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = Math.floor(jd) - this.persiana_to_jd(year, month, 1) + 1;
        return [year, month, day];
      }
      /**
       * @desc Obtain Julian day from a given Persian
       astronomical calendar date.
       * @param {*} year
       * @param {*} month
       * @param {*} day
       */
      persiana_to_jd(year, month, day) {
        let adr, equinox, guess, jd;
        guess = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (year - 1 - 1);
        adr = [year - 1, 0];
        while (adr[0] < year) {
          adr = this.persiana_year(guess);
          guess = adr[1] + (this.ASTRO.TropicalYear + 2);
        }
        equinox = adr[1];
        jd = equinox + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + (day - 1);
        return jd;
      }
      /**
       * @desc Is a given year a leap year in the Persian astronomical calendar ?
       * @param {*} year
       */
      leap_persiana(year) {
        return this.persiana_to_jd(year + 1, 1, 1) - this.persiana_to_jd(year, 1, 1) > 365;
      }
      /**
       * @desc Is a given year a leap year in the Persian calendar ?
       * also nasa use this algorithm https://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js search for 'getLastDayOfPersianMonth' and you can find it
       * @param {*} year
       *
       */
      leap_persian(year) {
        return ((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682;
      }
      /**
       * @desc Determine Julian day from Persian date
       * @param {*} year
       * @param {*} month
       * @param {*} day
       */
      persian_to_jd(year, month, day) {
        let epbase, epyear;
        epbase = year - (year >= 0 ? 474 : 473);
        epyear = 474 + this.ASTRO.mod(epbase, 2820);
        return day + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1);
      }
      /**
       * @desc Calculate Persian date from Julian day
       * @param {*} jd
       */
      jd_to_persian(jd) {
        let year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
        jd = Math.floor(jd) + 0.5;
        depoch = jd - this.persian_to_jd(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = this.ASTRO.mod(depoch, 1029983);
        if (cyear === 1029982) {
          ycycle = 2820;
        } else {
          aux1 = Math.floor(cyear / 366);
          aux2 = this.ASTRO.mod(cyear, 366);
          ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
        }
        year = ycycle + 2820 * cycle + 474;
        if (year <= 0) {
          year--;
        }
        yday = jd - this.persian_to_jd(year, 1, 1) + 1;
        month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = jd - this.persian_to_jd(year, month, 1) + 1;
        return [year, month, day];
      }
      /**
       *
       * @param {*} weekday
       */
      gWeekDayToPersian(weekday) {
        if (weekday + 2 === 8) {
          return 1;
        } else if (weekday + 2 === 7) {
          return 7;
        } else {
          return weekday + 2;
        }
      }
      /**
       * @desc updateFromGregorian  --  Update all calendars from Gregorian.
       "Why not Julian date?" you ask.  Because
       starting from Gregorian guarantees we're
       already snapped to an integral second, so
       we don't get roundoff errors in other
       calendars.
       */
      updateFromGregorian() {
        let j, year, mon, mday, hour, min, sec, weekday, utime, perscal;
        year = this.State.gregorian.year;
        mon = this.State.gregorian.month;
        mday = this.State.gregorian.day;
        hour = 0;
        min = 0;
        sec = 0;
        this.State.gDate = new Date(
          year,
          mon,
          mday,
          this.State.gregorian.hour,
          this.State.gregorian.minute,
          this.State.gregorian.second,
          this.State.gregorian.millisecond
        );
        if (this.parent._utcMode === false) {
          this.State.zone = this.State.gDate.getTimezoneOffset();
        }
        this.State.gregorian.year = this.State.gDate.getFullYear();
        this.State.gregorian.month = this.State.gDate.getMonth();
        this.State.gregorian.day = this.State.gDate.getDate();
        j = this.gregorian_to_jd(year, mon + 1, mday) + Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400;
        this.State.julianday = j;
        this.State.modifiedjulianday = j - this.JMJD;
        weekday = this.ASTRO.jwday(j);
        this.State.gregorian.weekday = weekday + 1;
        this.State.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];
        weekday = this.ASTRO.jwday(j);
        if (this.parent.calendarType == "persian" && this.parent.leapYearMode == "algorithmic") {
          perscal = this.jd_to_persian(j);
          this.State.persian.year = perscal[0];
          this.State.persian.month = perscal[1] - 1;
          this.State.persian.day = perscal[2];
          this.State.persian.weekday = this.gWeekDayToPersian(weekday);
          this.State.persian.leap = this.NormLeap[this.leap_persian(perscal[0]) ? 1 : 0];
        }
        if (this.parent.calendarType == "persian" && this.parent.leapYearMode == "astronomical") {
          perscal = this.jd_to_persiana(j);
          this.State.persianAstro.year = perscal[0];
          this.State.persianAstro.month = perscal[1] - 1;
          this.State.persianAstro.day = perscal[2];
          this.State.persianAstro.weekday = this.gWeekDayToPersian(weekday);
          this.State.persianAstro.leap = this.NormLeap[this.leap_persiana(perscal[0]) ? 1 : 0];
        }
        if (this.State.gregserial.day !== null) {
          this.State.gregserial.day = j - this.J0000;
        }
        utime = (j - this.J1970) * (60 * 60 * 24 * 1e3);
        this.State.unixtime = Math.round(utime / 1e3);
      }
      /**
       * @desc Perform calculation starting with a Gregorian date
       * @param {*} dateArray
       */
      calcGregorian(dateArray) {
        if (dateArray[0] || dateArray[0] === 0) {
          this.State.gregorian.year = dateArray[0];
        }
        if (dateArray[1] || dateArray[1] === 0) {
          this.State.gregorian.month = dateArray[1];
        }
        if (dateArray[2] || dateArray[2] === 0) {
          this.State.gregorian.day = dateArray[2];
        }
        if (dateArray[3] || dateArray[3] === 0) {
          this.State.gregorian.hour = dateArray[3];
        }
        if (dateArray[4] || dateArray[4] === 0) {
          this.State.gregorian.minute = dateArray[4];
        }
        if (dateArray[5] || dateArray[5] === 0) {
          this.State.gregorian.second = dateArray[5];
        }
        if (dateArray[6] || dateArray[6] === 0) {
          this.State.gregorian.millisecond = dateArray[6];
        }
        this.updateFromGregorian();
      }
      /**
       * @desc Perform calculation starting with a Julian date
       */
      calcJulian() {
        let j, date;
        j = this.State.julianday;
        date = this.jd_to_gregorian(j);
        this.State.gregorian.year = date[0];
        this.State.gregorian.month = date[1] - 1;
        this.State.gregorian.day = date[2];
        this.updateFromGregorian();
      }
      /**
       * @desc Set Julian date and update all calendars
       * @param {*} j
       */
      setJulian(j) {
        this.State.julianday = j;
        this.calcJulian();
      }
      /**
       * @desc  Update from Persian calendar
       * @param {*} dateArray
       */
      calcPersian(dateArray) {
        if (dateArray[0] || dateArray[0] === 0) {
          this.State.persian.year = dateArray[0];
        }
        if (dateArray[1] || dateArray[1] === 0) {
          this.State.persian.month = dateArray[1];
        }
        if (dateArray[2] || dateArray[2] === 0) {
          this.State.persian.day = dateArray[2];
        }
        if (dateArray[3] || dateArray[3] === 0) {
          this.State.gregorian.hour = dateArray[3];
        }
        if (dateArray[4] || dateArray[4] === 0) {
          this.State.gregorian.minute = dateArray[4];
        }
        if (dateArray[5] || dateArray[5] === 0) {
          this.State.gregorian.second = dateArray[5];
        }
        if (dateArray[6] || dateArray[6] === 0) {
          this.State.gregorian.millisecond = dateArray[6];
        }
        this.setJulian(
          this.persian_to_jd(
            this.State.persian.year,
            this.State.persian.month,
            this.State.persian.day
          )
        );
      }
      /**
       * @desc Update from Persian astronomical calendar
       * @param {*} dateArray
       */
      calcPersiana(dateArray) {
        if (dateArray[0] || dateArray[0] === 0) {
          this.State.persianAstro.year = dateArray[0];
        }
        if (dateArray[1] || dateArray[1] === 0) {
          this.State.persianAstro.month = dateArray[1];
        }
        if (dateArray[2] || dateArray[2] === 0) {
          this.State.persianAstro.day = dateArray[2];
        }
        if (dateArray[3] || dateArray[3] === 0) {
          this.State.gregorian.hour = dateArray[3];
        }
        if (dateArray[4] || dateArray[4] === 0) {
          this.State.gregorian.minute = dateArray[4];
        }
        if (dateArray[5] || dateArray[5] === 0) {
          this.State.gregorian.second = dateArray[5];
        }
        if (dateArray[6] || dateArray[6] === 0) {
          this.State.gregorian.millisecond = dateArray[6];
        }
        this.setJulian(
          this.persiana_to_jd(
            this.State.persianAstro.year,
            this.State.persianAstro.month,
            this.State.persianAstro.day + 0.5
          )
        );
      }
    }
    algorithms = Algorithms;
    return algorithms;
  }
  var constants;
  var hasRequiredConstants;
  function requireConstants() {
    if (hasRequiredConstants) return constants;
    hasRequiredConstants = 1;
    constants = {
      durationUnit: {
        year: ["y", "years", "year"],
        month: ["M", "months", "month"],
        day: ["d", "days", "day"],
        hour: ["h", "hours", "hour"],
        minute: ["m", "minutes", "minute"],
        second: ["s", "second", "seconds"],
        millisecond: ["ms", "milliseconds", "millisecond"],
        week: ["W", "w", "weeks", "week"]
      }
    };
    return constants;
  }
  var helpers;
  var hasRequiredHelpers;
  function requireHelpers() {
    if (hasRequiredHelpers) return helpers;
    hasRequiredHelpers = 1;
    let durationUnit = requireConstants().durationUnit;
    class Helpers {
      /**
       * @description return converted string to persian digit
       * @param digit
       * @returns {string|*}
       */
      toPersianDigit(digit, latinDigit = false) {
        return digit.toString().replace(/\d+/g, function(digit2) {
          let enDigitArr = [], peDigitArr = [], i, j;
          for (i = 0; i < digit2.length; i += 1) {
            enDigitArr.push(digit2.charCodeAt(i));
          }
          for (j = 0; j < enDigitArr.length; j += 1) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + (!!latinDigit && latinDigit === true ? 1584 : 1728)));
          }
          return peDigitArr.join("");
        });
      }
      /**
       * @param number
       * @param targetLength
       * @returns {string}
       */
      leftZeroFill(number, targetLength) {
        let output = number + "";
        while (output.length < targetLength) {
          output = "0" + output;
        }
        return output;
      }
      /**
       * @description normalize duration params and return valid param
       * @return {{unit: *, value: *}}
       */
      normalizeDuration() {
        let unit, value;
        if (typeof arguments[0] === "string") {
          unit = arguments[0];
          value = arguments[1];
        } else {
          value = arguments[0];
          unit = arguments[1];
        }
        if (durationUnit.year.indexOf(unit) > -1) {
          unit = "year";
        } else if (durationUnit.month.indexOf(unit) > -1) {
          unit = "month";
        } else if (durationUnit.week.indexOf(unit) > -1) {
          unit = "week";
        } else if (durationUnit.day.indexOf(unit) > -1) {
          unit = "day";
        } else if (durationUnit.hour.indexOf(unit) > -1) {
          unit = "hour";
        } else if (durationUnit.minute.indexOf(unit) > -1) {
          unit = "minute";
        } else if (durationUnit.second.indexOf(unit) > -1) {
          unit = "second";
        } else if (durationUnit.millisecond.indexOf(unit) > -1) {
          unit = "millisecond";
        }
        return {
          unit,
          value
        };
      }
      /**
       *
       * @param number
       * @returns {number}
       */
      absRound(number) {
        if (number < 0) {
          return Math.ceil(number);
        } else {
          return Math.floor(number);
        }
      }
      /**
       *
       * @param number
       * @return {number}
       */
      absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
    }
    helpers = Helpers;
    return helpers;
  }
  var duration;
  var hasRequiredDuration;
  function requireDuration() {
    if (hasRequiredDuration) return duration;
    hasRequiredDuration = 1;
    let Helpers = requireHelpers();
    let normalizeDuration = new Helpers().normalizeDuration;
    let absRound = new Helpers().absRound;
    let absFloor = new Helpers().absFloor;
    class Duration {
      constructor(key, value) {
        let duration2 = {}, data = this._data = {}, milliseconds = 0, normalizedUnit = normalizeDuration(key, value), unit = normalizedUnit.unit;
        duration2[unit] = normalizedUnit.value;
        milliseconds = duration2.milliseconds || duration2.millisecond || duration2.ms || 0;
        let years = duration2.years || duration2.year || duration2.y || 0, months = duration2.months || duration2.month || duration2.M || 0, weeks = duration2.weeks || duration2.w || duration2.week || 0, days = duration2.days || duration2.d || duration2.day || 0, hours = duration2.hours || duration2.hour || duration2.h || 0, minutes = duration2.minutes || duration2.minute || duration2.m || 0, seconds = duration2.seconds || duration2.second || duration2.s || 0;
        this._milliseconds = milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
        this._days = days + weeks * 7;
        this._months = months + years * 12;
        data.milliseconds = milliseconds % 1e3;
        seconds += absFloor(milliseconds / 1e3);
        data.seconds = seconds % 60;
        minutes += absRound(seconds / 60);
        data.minutes = minutes % 60;
        hours += absRound(minutes / 60);
        data.hours = hours % 24;
        days += absRound(hours / 24);
        days += weeks * 7;
        data.days = days % 30;
        months += absRound(days / 30);
        data.months = months % 12;
        years += absRound(months / 12);
        data.years = years;
        return this;
      }
      valueOf() {
        return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
      }
    }
    duration = Duration;
    return duration;
  }
  var validator;
  var hasRequiredValidator;
  function requireValidator() {
    if (hasRequiredValidator) return validator;
    hasRequiredValidator = 1;
    validator = {
      /**
       * @param input
       * @returns {boolean}
       */
      validateInputArray(input) {
        let out = true;
        if (input[1] < 1 || input[1] > 12) {
          out = false;
        }
        if (input[2] < 1 || input[1] > 31) {
          out = false;
        }
        if (input[3] < 0 || input[3] > 24) {
          out = false;
        }
        if (input[4] < 0 || input[4] > 60) {
          out = false;
        }
        if (input[5] < 0 || input[5] > 60) {
          out = false;
        }
        return out;
      }
    };
    return validator;
  }
  var fa;
  var hasRequiredFa;
  function requireFa() {
    if (hasRequiredFa) return fa;
    hasRequiredFa = 1;
    fa = {
      gregorian: {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_")
      },
      persian: {
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthsShort: ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف"],
        weekdays: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج‌شنبه", "جمعه"],
        weekdaysShort: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
        weekdaysMin: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
        persianDaysName: [
          "اورمزد",
          "بهمن",
          "اوردیبهشت",
          "شهریور",
          "سپندارمذ",
          "خورداد",
          "امرداد",
          "دی به آذز",
          "آذز",
          "آبان",
          "خورشید",
          "ماه",
          "تیر",
          "گوش",
          "دی به مهر",
          "مهر",
          "سروش",
          "رشن",
          "فروردین",
          "بهرام",
          "رام",
          "باد",
          "دی به دین",
          "دین",
          "ارد",
          "اشتاد",
          "آسمان",
          "زامیاد",
          "مانتره سپند",
          "انارام",
          "زیادی"
        ]
      }
    };
    return fa;
  }
  var en;
  var hasRequiredEn;
  function requireEn() {
    if (hasRequiredEn) return en;
    hasRequiredEn = 1;
    en = {
      gregorian: {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
      },
      persian: {
        months: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
        monthsShort: ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf"],
        weekdays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        weekdaysShort: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        weekdaysMin: ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"],
        persianDaysName: [
          "Urmazd",
          "Bahman",
          "Ordibehesht",
          "Shahrivar",
          "Sepandarmaz",
          "Khurdad",
          "Amordad",
          "Dey-be-azar",
          "Azar",
          "Aban",
          "Khorshid",
          "Mah",
          "Tir",
          "Gush",
          "Dey-be-mehr",
          "Mehr",
          "Sorush",
          "Rashn",
          "Farvardin",
          "Bahram",
          "Ram",
          "Bad",
          "Dey-be-din",
          "Din",
          "Ord",
          "Ashtad",
          "Asman",
          "Zamyad",
          "Mantre-sepand",
          "Anaram",
          "Ziadi"
        ]
      }
    };
    return en;
  }
  var hasRequiredPDate;
  function requirePDate() {
    if (hasRequiredPDate) return pDate.exports;
    hasRequiredPDate = 1;
    (function(module) {
      let TypeChecking = requireTypeChecking();
      let Algorithms = requireAlgorithms();
      let Helpers = requireHelpers();
      let Duration = requireDuration();
      let Validator = requireValidator();
      let toPersianDigit = new Helpers().toPersianDigit;
      let leftZeroFill = new Helpers().leftZeroFill;
      let normalizeDuration = new Helpers().normalizeDuration;
      let fa2 = requireFa();
      let en2 = requireEn();
      class PersianDateClass {
        /**
         * @param input
         * @return {PersianDateClass}
         */
        constructor(input) {
          this.calendarType = PersianDateClass.calendarType;
          this.localType = PersianDateClass.localType;
          this.leapYearMode = PersianDateClass.leapYearMode;
          this.algorithms = new Algorithms(this);
          this.version = "1.1.0";
          this._utcMode = false;
          if (this.localType !== "fa") {
            this.formatPersian = false;
          } else {
            this.formatPersian = "_default";
          }
          this.State = this.algorithms.State;
          this.setup(input);
          if (this.State.isInvalidDate) {
            return new Date([-1, -1]);
          }
          return this;
        }
        /**
         * @param input
         */
        setup(input) {
          if (TypeChecking.isDate(input)) {
            this._gDateToCalculators(input);
          } else if (TypeChecking.isArray(input)) {
            if (!Validator.validateInputArray(input)) {
              this.State.isInvalidDate = true;
              return false;
            }
            this.algorithmsCalc([
              input[0],
              input[1] ? input[1] : 1,
              input[2] ? input[2] : 1,
              input[3] ? input[3] : 0,
              input[4] ? input[4] : 0,
              input[5] ? input[5] : 0,
              input[6] ? input[6] : 0
            ]);
          } else if (TypeChecking.isNumber(input)) {
            const fromUnix = new Date(input);
            this._gDateToCalculators(fromUnix);
          } else if (input instanceof PersianDateClass) {
            this.algorithmsCalc([
              input.year(),
              input.month(),
              input.date(),
              input.hour(),
              input.minute(),
              input.second(),
              input.millisecond()
            ]);
          } else if (input && input.substring(0, 6) === "/Date(") {
            const fromDotNet = new Date(parseInt(input.substr(6)));
            this._gDateToCalculators(fromDotNet);
          } else {
            const now = /* @__PURE__ */ new Date();
            this._gDateToCalculators(now);
          }
        }
        /**
         * @param input
         * @return {*}
         * @private
         */
        _getSyncedClass(input) {
          let syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode);
          return new syncedCelander(input);
        }
        /**
         * @param inputgDate
         * @private
         */
        _gDateToCalculators(inputgDate) {
          this.algorithms.calcGregorian(
            [
              inputgDate.getFullYear(),
              inputgDate.getMonth(),
              inputgDate.getDate(),
              inputgDate.getHours(),
              inputgDate.getMinutes(),
              inputgDate.getSeconds(),
              inputgDate.getMilliseconds()
            ]
          );
        }
        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @static
         * @return {*}
         */
        static rangeName() {
          const p = PersianDateClass, t = p.calendarType;
          if (p.localType === "fa") {
            if (t === "persian") {
              return fa2.persian;
            } else {
              return fa2.gregorian;
            }
          } else {
            if (t === "persian") {
              return en2.persian;
            } else {
              return en2.gregorian;
            }
          }
        }
        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @return {*}
         */
        rangeName() {
          const t = this.calendarType;
          if (this.localType === "fa") {
            if (t === "persian") {
              return fa2.persian;
            } else {
              return fa2.gregorian;
            }
          } else {
            if (t === "persian") {
              return en2.persian;
            } else {
              return en2.gregorian;
            }
          }
        }
        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        toLeapYearMode(input) {
          this.leapYearMode = input;
          if (input === "astronomical" && this.calendarType == "persian") {
            this.leapYearMode = "astronomical";
          } else if (input === "algorithmic" && this.calendarType == "persian") {
            this.leapYearMode = "algorithmic";
          }
          this.algorithms.updateFromGregorian();
          return this;
        }
        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */
        static toLeapYearMode(input) {
          let d = PersianDateClass;
          d.leapYearMode = input;
          return d;
        }
        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        toCalendar(input) {
          this.calendarType = input;
          this.algorithms.updateFromGregorian();
          return this;
        }
        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */
        static toCalendar(input) {
          let d = PersianDateClass;
          d.calendarType = input;
          return d;
        }
        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */
        static toLocale(input) {
          let d = PersianDateClass;
          d.localType = input;
          if (d.localType !== "fa") {
            d.formatPersian = false;
          } else {
            d.formatPersian = "_default";
          }
          return d;
        }
        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        toLocale(input) {
          this.localType = input;
          if (this.localType !== "fa") {
            this.formatPersian = false;
          } else {
            this.formatPersian = "_default";
          }
          return this;
        }
        /**
         * @return {*}
         * @private
         */
        _locale() {
          const t = this.calendarType;
          if (this.localType === "fa") {
            if (t === "persian") {
              return fa2.persian;
            } else {
              return fa2.gregorian;
            }
          } else {
            if (t === "persian") {
              return en2.persian;
            } else {
              return en2.gregorian;
            }
          }
        }
        /**
         * @param input
         * @private
         */
        _weekName(input) {
          return this._locale().weekdays[input - 1];
        }
        /**
         * @param input
         * @private
         */
        _weekNameShort(input) {
          return this._locale().weekdaysShort[input - 1];
        }
        /**
         * @param input
         * @private
         */
        _weekNameMin(input) {
          return this._locale().weekdaysMin[input - 1];
        }
        /**
         * @param input
         * @return {*}
         * @private
         */
        _dayName(input) {
          return this._locale().persianDaysName[input - 1];
        }
        /**
         * @param input
         * @private
         */
        _monthName(input) {
          return this._locale().months[input - 1];
        }
        /**
         * @param input
         * @private
         */
        _monthNameShort(input) {
          return this._locale().monthsShort[input - 1];
        }
        /**
         * @param obj
         * @returns {boolean}
         */
        static isPersianDate(obj) {
          return obj instanceof PersianDateClass;
        }
        /**
         * @param obj
         * @return {boolean}
         */
        isPersianDate(obj) {
          return obj instanceof PersianDateClass;
        }
        /**
         * @returns {PersianDate}
         */
        clone() {
          return this._getSyncedClass(this.State.gDate);
        }
        /**
         * @since 1.0.0
         * @param dateArray
         * @return {*}
         */
        algorithmsCalc(dateArray) {
          if (this.isPersianDate(dateArray)) {
            dateArray = [
              dateArray.year(),
              dateArray.month(),
              dateArray.date(),
              dateArray.hour(),
              dateArray.minute(),
              dateArray.second(),
              dateArray.millisecond()
            ];
          }
          if (this.calendarType === "persian" && this.leapYearMode == "algorithmic") {
            return this.algorithms.calcPersian(dateArray);
          } else if (this.calendarType === "persian" && this.leapYearMode == "astronomical") {
            return this.algorithms.calcPersiana(dateArray);
          } else if (this.calendarType === "gregorian") {
            dateArray[1] = dateArray[1] - 1;
            return this.algorithms.calcGregorian(dateArray);
          }
        }
        /**
         * @since 1.0.0
         * @return {*}
         */
        calendar() {
          let key;
          if (this.calendarType == "persian") {
            if (this.leapYearMode == "astronomical") {
              key = "persianAstro";
            } else if (this.leapYearMode == "algorithmic") {
              key = "persianAlgo";
            }
          } else {
            key = "gregorian";
          }
          return this.State[key];
        }
        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */
        static duration(input, key) {
          return new Duration(input, key);
        }
        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */
        duration(input, key) {
          return new Duration(input, key);
        }
        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */
        static isDuration(obj) {
          return obj instanceof Duration;
        }
        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */
        isDuration(obj) {
          return obj instanceof Duration;
        }
        /**
         * @param input
         * @returns {*}
         */
        years(input) {
          return this.year(input);
        }
        /**
         * @param input
         * @returns {*}
         */
        year(input) {
          if (input || input === 0) {
            this.algorithmsCalc(
              [input, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
            );
            return this;
          } else {
            return this.calendar().year;
          }
        }
        /**
         * @param input
         * @returns {*}
         */
        month(input) {
          if (input || input === 0) {
            this.algorithmsCalc([this.year(), input, this.date()]);
            return this;
          } else {
            return this.calendar().month + 1;
          }
        }
        /**
         * Day of week
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */
        days() {
          return this.day();
        }
        /**
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */
        day() {
          return this.calendar().weekday;
        }
        /**
         * Day of Months
         * @param input
         * @returns {*}
         */
        dates(input) {
          return this.date(input);
        }
        /**
         * @param input
         * @returns {*}
         */
        date(input) {
          if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), input]);
            return this;
          } else {
            return this.calendar().day;
          }
        }
        /**
         * @param input
         * @returns {*}
         */
        hour(input) {
          return this.hours(input);
        }
        /**
         * @param input
         * @returns {*}
         */
        hours(input) {
          if (input || input === 0) {
            if (input === 0) {
              input = 24;
            }
            this.algorithmsCalc([this.year(), this.month(), this.date(), input]);
            return this;
          } else {
            return this.State.gDate.getHours();
          }
        }
        /**
         * @param input
         * @returns {*}
         */
        minute(input) {
          return this.minutes(input);
        }
        /**
         * @param input
         * @returns {*}
         */
        minutes(input) {
          if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), input]);
            return this;
          } else {
            return this.State.gDate.getMinutes();
          }
        }
        /**
         * @param input
         * @returns {*}
         */
        second(input) {
          return this.seconds(input);
        }
        /**
         * @param input
         * @returns {*}
         */
        seconds(input) {
          if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), input]);
            return this;
          } else {
            return this.State.gDate.getSeconds();
          }
        }
        /**
         * @param input
         * @returns {*}
         * Getter Setter
         */
        millisecond(input) {
          return this.milliseconds(input);
        }
        /**
         * @param input
         * @returns {*}
         */
        milliseconds(input) {
          if (input || input === 0) {
            this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), input]);
            return this;
          } else {
            return this.State.gregorian.millisecond;
          }
        }
        /**
         * Return Milliseconds since the Unix Epoch (1318874398806)
         * @returns {*}
         * @private
         */
        //    _valueOf () {
        //        return this.State.gDate.valueOf();
        //    }
        static unix(timestamp) {
          if (timestamp) {
            return new PersianDateClass(timestamp * 1e3);
          } else {
            return new PersianDateClass().unix();
          }
        }
        /**
         * Return Unix Timestamp (1318874398)
         * @param timestamp
         * @returns {*}
         */
        unix(timestamp) {
          let output;
          if (timestamp) {
            return this._getSyncedClass(timestamp * 1e3);
          } else {
            let str = this.State.gDate.valueOf().toString();
            output = str.substring(0, str.length - 3);
          }
          return parseInt(output);
        }
        /**
         * @returns {*}
         */
        valueOf() {
          return this.State.gDate.valueOf();
        }
        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */
        static getFirstWeekDayOfMonth(year, month) {
          return new PersianDateClass([year, month, 1]).day();
        }
        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */
        getFirstWeekDayOfMonth(year, month) {
          return this._getSyncedClass([year, month, 1]).day();
        }
        /**
         * @param input
         * @param val
         * @param asFloat
         * @returns {*}
         */
        diff(input, val, asFloat) {
          let self = this, inputMoment = input, zoneDiff = 0, diff = self.State.gDate - inputMoment.toDate() - zoneDiff, year = self.year() - inputMoment.year(), month = self.month() - inputMoment.month(), date = (self.date() - inputMoment.date()) * -1, output;
          if (val === "months" || val === "month") {
            output = year * 12 + month + date / 30;
          } else if (val === "years" || val === "year") {
            output = year + (month + date / 30) / 12;
          } else {
            output = val === "seconds" || val === "second" ? diff / 1e3 : (
              // 1000
              val === "minutes" || val === "minute" ? diff / 6e4 : (
                // 1000 * 60
                val === "hours" || val === "hour" ? diff / 36e5 : (
                  // 1000 * 60 * 60
                  val === "days" || val === "day" ? diff / 864e5 : (
                    // 1000 * 60 * 60 * 24
                    val === "weeks" || val === "week" ? diff / 6048e5 : (
                      // 1000 * 60 * 60 * 24 * 7
                      diff
                    )
                  )
                )
              )
            );
          }
          return asFloat ? output : Math.round(output);
        }
        /**
         * @param key
         * @returns {*}
         */
        startOf(key) {
          let syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
          let newArray = new PersianDateClass(this.valueOf() - (this.calendar().weekday - 1) * 864e5).toArray();
          switch (key) {
            case "years":
            case "year":
              return new syncedCelander([this.year(), 1, 1]);
            case "months":
            case "month":
              return new syncedCelander([this.year(), this.month(), 1]);
            case "days":
            case "day":
              return new syncedCelander([this.year(), this.month(), this.date(), 0, 0, 0]);
            case "hours":
            case "hour":
              return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
            case "minutes":
            case "minute":
              return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
            case "seconds":
            case "second":
              return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case "weeks":
            case "week":
              return new syncedCelander(newArray);
            default:
              return this.clone();
          }
        }
        /**
         * @param key
         * @returns {*}
         */
        /* eslint-disable no-case-declarations */
        endOf(key) {
          let syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
          switch (key) {
            case "years":
            case "year":
              let days = this.isLeapYear() ? 30 : 29;
              return new syncedCelander([this.year(), 12, days, 23, 59, 59]);
            case "months":
            case "month":
              let monthDays = this.daysInMonth(this.year(), this.month());
              return new syncedCelander([this.year(), this.month(), monthDays, 23, 59, 59]);
            case "days":
            case "day":
              return new syncedCelander([this.year(), this.month(), this.date(), 23, 59, 59]);
            case "hours":
            case "hour":
              return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
            case "minutes":
            case "minute":
              return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
            case "seconds":
            case "second":
              return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case "weeks":
            case "week":
              let weekDayNumber = this.calendar().weekday;
              return new syncedCelander([this.year(), this.month(), this.date() + (7 - weekDayNumber)]);
            default:
              return this.clone();
          }
        }
        /**
         * @returns {*}
         */
        sod() {
          return this.startOf("day");
        }
        /**
         * @returns {*}
         */
        eod() {
          return this.endOf("day");
        }
        /** Get the timezone offset in minutes.
         * @return {*}
         */
        zone(input) {
          if (input || input === 0) {
            this.State.zone = input;
            return this;
          } else {
            return this.State.zone;
          }
        }
        /**
         * @returns {PersianDate}
         */
        local() {
          let utcStamp;
          if (this._utcMode) {
            let ThatDayOffset = new Date(this.toDate()).getTimezoneOffset();
            let offsetMils = ThatDayOffset * 60 * 1e3;
            if (ThatDayOffset < 0) {
              utcStamp = this.valueOf() - offsetMils;
            } else {
              utcStamp = this.valueOf() + offsetMils;
            }
            this.toCalendar(PersianDateClass.calendarType);
            const utcDate = new Date(utcStamp);
            this._gDateToCalculators(utcDate);
            this._utcMode = false;
            this.zone(ThatDayOffset);
            return this;
          } else {
            return this;
          }
        }
        /**
         * @param input
         * @return {*}
         */
        static utc(input) {
          if (input) {
            return new PersianDateClass(input).utc();
          } else {
            return new PersianDateClass().utc();
          }
        }
        /**
         * @description Current date/time in UTC mode
         * @param input
         * @returns {*}
         */
        utc(input) {
          let utcStamp;
          if (input) {
            return this._getSyncedClass(input).utc();
          }
          if (this._utcMode) {
            return this;
          } else {
            let offsetMils = this.zone() * 60 * 1e3;
            if (this.zone() < 0) {
              utcStamp = this.valueOf() + offsetMils;
            } else {
              utcStamp = this.valueOf() - offsetMils;
            }
            const utcDate = new Date(utcStamp), d = this._getSyncedClass(utcDate);
            this.algorithmsCalc(d);
            this._utcMode = true;
            this.zone(0);
            return this;
          }
        }
        /**
         * @returns {boolean}
         */
        isUtc() {
          return this._utcMode;
        }
        /**
         * @returns {boolean}
         * @link https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C
         */
        isDST() {
          let month = this.month(), day = this.date();
          if (month == 1 && day > 1 || month == 6 && day < 31 || month < 6 && month >= 2) {
            return true;
          } else {
            return false;
          }
        }
        /**
         * @returns {boolean}
         */
        isLeapYear(year) {
          if (year === void 0) {
            year = this.year();
          }
          if (this.calendarType == "persian" && this.leapYearMode === "algorithmic") {
            return this.algorithms.leap_persian(year);
          }
          if (this.calendarType == "persian" && this.leapYearMode === "astronomical") {
            return this.algorithms.leap_persiana(year);
          } else if (this.calendarType == "gregorian") {
            return this.algorithms.leap_gregorian(year);
          }
        }
        /**
         * @param yearInput
         * @param monthInput
         * @returns {number}
         */
        daysInMonth(yearInput, monthInput) {
          let year = yearInput ? yearInput : this.year(), month = monthInput ? monthInput : this.month();
          if (this.calendarType === "persian") {
            if (month < 1 || month > 12)
              return 0;
            if (month < 7)
              return 31;
            if (month < 12)
              return 30;
            if (this.isLeapYear(year)) {
              return 30;
            }
            return 29;
          }
          if (this.calendarType === "gregorian") {
            return new Date(year, month, 0).getDate();
          }
        }
        /**
         * @description Return Native Javascript Date
         * @returns {*|PersianDate.gDate}
         */
        toDate() {
          return this.State.gDate;
        }
        /**
         * @description Returns Array Of Persian Date
         * @returns {array}
         */
        toArray() {
          return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
        }
        /**
         * @returns {*}
         */
        formatNumber() {
          let output, self = this;
          if (this.formatPersian === "_default") {
            {
              if (self.formatPersian === false) {
                output = false;
              } else {
                output = true;
              }
            }
          } else {
            if (this.formatPersian === true) {
              output = true;
            } else if (this.formatPersian === false) {
              output = false;
            } else ;
          }
          return output;
        }
        /**
         * @param inputString
         * @returns {*}
         */
        format(inputString) {
          if (this.State.isInvalidDate) {
            return false;
          }
          let self = this, formattingTokens = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g, info = {
            year: self.year(),
            month: self.month(),
            hour: self.hours(),
            minute: self.minutes(),
            second: self.seconds(),
            date: self.date(),
            timezone: self.zone(),
            unix: self.unix()
          }, formatToPersian = self.formatNumber();
          let checkPersian = function(i) {
            if (formatToPersian) {
              return toPersianDigit(i);
            } else {
              return i;
            }
          };
          function replaceFunction(input) {
            switch (input) {
              // AM/PM
              case "a": {
                if (formatToPersian)
                  return info.hour >= 12 ? "ب ظ" : "ق ظ";
                else
                  return info.hour >= 12 ? "PM" : "AM";
              }
              // Hours (Int)
              case "H": {
                return checkPersian(info.hour);
              }
              case "HH": {
                return checkPersian(leftZeroFill(info.hour, 2));
              }
              case "h": {
                return checkPersian(info.hour % 12);
              }
              case "hh": {
                return checkPersian(leftZeroFill(info.hour % 12, 2));
              }
              // Minutes
              case "m": {
                return checkPersian(leftZeroFill(info.minute, 2));
              }
              // Two Digit Minutes
              case "mm": {
                return checkPersian(leftZeroFill(info.minute, 2));
              }
              // Second
              case "s": {
                return checkPersian(info.second);
              }
              case "ss": {
                return checkPersian(leftZeroFill(info.second, 2));
              }
              // Day (Int)
              case "D": {
                return checkPersian(leftZeroFill(info.date));
              }
              // Return Two Digit
              case "DD": {
                return checkPersian(leftZeroFill(info.date, 2));
              }
              // Return day Of Month
              case "DDD": {
                let t = self.startOf("year");
                return checkPersian(leftZeroFill(self.diff(t, "days"), 3));
              }
              // Return Day of Year
              case "DDDD": {
                let t = self.startOf("year");
                return checkPersian(leftZeroFill(self.diff(t, "days"), 3));
              }
              // Return day Of week
              case "d": {
                return checkPersian(self.calendar().weekday);
              }
              // Return week day name abbr
              case "ddd": {
                return self._weekNameShort(self.calendar().weekday);
              }
              case "dddd": {
                return self._weekName(self.calendar().weekday);
              }
              // Return Persian Day Name
              case "ddddd": {
                return self._dayName(self.calendar().day);
              }
              // Return Persian Day Name
              case "dddddd": {
                return self._weekNameMin(self.calendar().weekday);
              }
              // Return Persian Day Name
              case "w": {
                let t = self.startOf("year"), day = parseInt(self.diff(t, "days") / 7) + 1;
                return checkPersian(day);
              }
              // Return Persian Day Name
              case "ww": {
                let t = self.startOf("year"), day = leftZeroFill(parseInt(self.diff(t, "days") / 7) + 1, 2);
                return checkPersian(day);
              }
              // Month  (Int)
              case "M": {
                return checkPersian(info.month);
              }
              // Two Digit Month (Str)
              case "MM": {
                return checkPersian(leftZeroFill(info.month, 2));
              }
              // Abbr String of Month (Str)
              case "MMM": {
                return self._monthNameShort(info.month);
              }
              // Full String name of Month (Str)
              case "MMMM": {
                return self._monthName(info.month);
              }
              // Year
              // Two Digit Year (Str)
              case "YY": {
                let yearDigitArray = info.year.toString().split("");
                return checkPersian(yearDigitArray[2] + yearDigitArray[3]);
              }
              // Full Year (Int)
              case "YYYY": {
                return checkPersian(info.year);
              }
              /* istanbul ignore next */
              case "Z": {
                let flag = "+", hours = Math.round(info.timezone / 60), minutes = info.timezone % 60;
                if (minutes < 0) {
                  minutes *= -1;
                }
                if (hours < 0) {
                  flag = "-";
                  hours *= -1;
                }
                let z = flag + leftZeroFill(hours, 2) + ":" + leftZeroFill(minutes, 2);
                return checkPersian(z);
              }
              /* istanbul ignore next */
              case "ZZ": {
                let flag = "+", hours = Math.round(info.timezone / 60), minutes = info.timezone % 60;
                if (minutes < 0) {
                  minutes *= -1;
                }
                if (hours < 0) {
                  flag = "-";
                  hours *= -1;
                }
                let z = flag + leftZeroFill(hours, 2) + "" + leftZeroFill(minutes, 2);
                return checkPersian(z);
              }
              /* istanbul ignore next */
              case "X": {
                return self.unix();
              }
              // 8:30 PM
              case "LT": {
                return self.format("H:m a");
              }
              // 09/04/1986
              case "L": {
                return self.format("YYYY/MM/DD");
              }
              // 9/4/1986
              case "l": {
                return self.format("YYYY/M/D");
              }
              // September 4th 1986
              case "LL": {
                return self.format("MMMM DD YYYY");
              }
              // Sep 4 1986
              case "ll": {
                return self.format("MMM DD YYYY");
              }
              //September 4th 1986 8:30 PM
              case "LLL": {
                return self.format("MMMM YYYY DD   H:m  a");
              }
              // Sep 4 1986 8:30 PM
              case "lll": {
                return self.format("MMM YYYY DD   H:m  a");
              }
              //Thursday, September 4th 1986 8:30 PM
              case "LLLL": {
                return self.format("dddd D MMMM YYYY  H:m  a");
              }
              // Thu, Sep 4 1986 8:30 PM
              case "llll": {
                return self.format("ddd D MMM YYYY  H:m  a");
              }
            }
          }
          if (inputString) {
            return inputString.replace(formattingTokens, replaceFunction);
          } else {
            let inputString2 = "YYYY-MM-DD HH:mm:ss a";
            return inputString2.replace(formattingTokens, replaceFunction);
          }
        }
        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */
        add(key, value) {
          if (value === 0) {
            return this;
          }
          let unit = normalizeDuration(key, value).unit, arr = this.toArray();
          value = normalizeDuration(key, value).value;
          if (unit === "year") {
            let normalizedDate = arr[2], monthDays = this.daysInMonth(arr[0] + value, arr[1]);
            if (arr[2] > monthDays) {
              normalizedDate = monthDays;
            }
            let tempDate = new PersianDateClass([arr[0] + value, arr[1], normalizedDate, arr[3], arr[4], arr[5], arr[6], arr[7]]);
            return tempDate;
          }
          if (unit === "month") {
            let tempYear = Math.floor(value / 12);
            let remainingMonth = value - tempYear * 12, calcedMonth = null;
            if (arr[1] + remainingMonth > 12) {
              tempYear += 1;
              calcedMonth = arr[1] + remainingMonth - 12;
            } else {
              calcedMonth = arr[1] + remainingMonth;
            }
            let normalizaedDate = arr[2], tempDateArray = new PersianDateClass([arr[0] + tempYear, calcedMonth, 1, arr[3], arr[4], arr[5], arr[6], arr[7]]).toArray(), monthDays = this.daysInMonth(arr[0] + tempYear, calcedMonth);
            if (arr[2] > monthDays) {
              normalizaedDate = monthDays;
            }
            return new PersianDateClass([tempDateArray[0], tempDateArray[1], normalizaedDate, tempDateArray[3], tempDateArray[4], tempDateArray[5], tempDateArray[6], tempDateArray[7]]);
          }
          if (unit === "day") {
            let calcedDay = new PersianDateClass(this.valueOf()).hour(12), newMillisecond = calcedDay.valueOf() + value * 864e5, newDate = new PersianDateClass(newMillisecond);
            return newDate.hour(arr[3]);
          }
          if (unit === "week") {
            let calcedDay = new PersianDateClass(this.valueOf()).hour(12), newMillisecond = calcedDay.valueOf() + 7 * value * 864e5, newDate = new PersianDateClass(newMillisecond);
            return newDate.hour(arr[3]);
          }
          if (unit === "hour") {
            let newMillisecond = this.valueOf() + value * 36e5;
            return this.unix(newMillisecond / 1e3);
          }
          if (unit === "minute") {
            let newMillisecond = this.valueOf() + value * 6e4;
            return this.unix(newMillisecond / 1e3);
          }
          if (unit === "second") {
            let newMillisecond = this.valueOf() + value * 1e3;
            return this.unix(newMillisecond / 1e3);
          }
          if (unit === "millisecond") {
            let newMillisecond = this.valueOf() + value;
            return this.unix(newMillisecond / 1e3);
          }
          return this._getSyncedClass(this.valueOf());
        }
        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */
        subtract(key, value) {
          return this.add(key, value * -1);
        }
        /**
         * check if a date is same as b
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {boolean}
         * @static
         */
        static isSameDay(dateA, dateB) {
          return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
        /**
         * @param dateB
         * @since 1.0.0
         * @return {PersianDateClass|*|boolean}
         */
        isSameDay(dateB) {
          return this && dateB && this.date() == dateB.date() && this.year() == dateB.year() && this.month() == dateB.month();
        }
        /**
         * @desc check if a month is same as b
         * @param {Date} dateA
         * @param {Date} dateB
         * @return {boolean}
         * @since 1.0.0
         * @static
         */
        static isSameMonth(dateA, dateB) {
          return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
        /**
         * @desc check two for month similarity
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {*|boolean}
         */
        isSameMonth(dateB) {
          return this && dateB && this.year() == this.year() && this.month() == dateB.month();
        }
      }
      module.exports = PersianDateClass;
    })(pDate);
    return pDate.exports;
  }
  var init$1;
  var hasRequiredInit;
  function requireInit() {
    if (hasRequiredInit) return init$1;
    hasRequiredInit = 1;
    let PersianDateClass = requirePDate();
    PersianDateClass.calendarType = "persian";
    PersianDateClass.leapYearMode = "astronomical";
    PersianDateClass.localType = "fa";
    init$1 = PersianDateClass;
    return init$1;
  }
  var initExports = requireInit();
  const init = /* @__PURE__ */ getDefaultExportFromCjs(initExports);
  return init;
}();
