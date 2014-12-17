/**
 * Constants
 * @module constants
 */

var
    /**
     *
     * @type {number}
     */
    GREGORIAN_EPOCH = 1721425.5,

    /**
     *
     * @type {number}
     */
    PERSIAN_EPOCH = 1948320.5,

    /**
     *
     * @type {{1: {name: {fa: string}, abbr: {fa: string}}, 2: {name: {fa: string}, abbr: {fa: string}}, 3: {name: {fa: string}, abbr: {fa: string}}, 4: {name: {fa: string}, abbr: {fa: string}}, 5: {name: {fa: string}, abbr: {fa: string}}, 6: {name: {fa: string}, abbr: {fa: string}}, 7: {name: {fa: string}, abbr: {fa: string}}, 8: {name: {fa: string}, abbr: {fa: string}}, 9: {name: {fa: string}, abbr: {fa: string}}, 10: {name: {fa: string}, abbr: {fa: string}}, 11: {name: {fa: string}, abbr: {fa: string}}, 12: {name: {fa: string}, abbr: {fa: string}}}}
     */
    monthRange = {
      1: {
        name: {
          fa: "فروردین"
        },
        abbr: {
          fa: "فرو"
        }
      },
      2: {
        name: {
          fa: "اردیبهشت"
        },
        abbr: {
          fa: "ارد"
        }
      },
      3: {
        name: {
          fa: "خرداد"
        },
        abbr: {
          fa: "خرد"
        }
      },
      4: {
        name: {
          fa: "تیر"
        },
        abbr: {
          fa: "تیر"
        }
      },
      5: {
        name: {
          fa: "مرداد"
        },
        abbr: {
          fa: "مرد"
        }
      },
      6: {
        name: {
          fa: "شهریور"
        },
        abbr: {
          fa: "شهر"
        }
      },
      7: {
        name: {
          fa: "مهر"
        },
        abbr: {
          fa: "مهر"
        }
      },
      8: {
        name: {
          fa: "آبان"
        },
        abbr: {
          fa: "آبا"
        }

      },
      9: {
        name: {
          fa: "آذر"
        },
        abbr: {
          fa: "آذر"
        }
      },
      10: {
        name: {
          fa: "دی"
        },
        abbr: {
          fa: "دی"
        }
      },
      11: {
        name: {
          fa: "بهمن"
        },
        abbr: {
          fa: "بهم"
        }
      },
      12: {
        name: {
          fa: "اسفند"
        },
        abbr: {
          fa: "اسف"
        }
      }
    },


    /**
     *
     * @type {{1: {name: {fa: string}, abbr: {fa: string}}, 2: {name: {fa: string}, abbr: {fa: string}}, 3: {name: {fa: string}, abbr: {fa: string}}, 4: {name: {fa: string}, abbr: {fa: string}}, 5: {name: {fa: string}, abbr: {fa: string}}, 6: {name: {fa: string}, abbr: {fa: string}}, 0: {name: {fa: string}, abbr: {fa: string}}}}
     */
    weekRange = {
      1: {
        name: {
          fa: "شنبه"
        },
        abbr: {
          fa: "ش"
        }
      },
      2: {
        name: {
          fa: "یکشنبه"
        },
        abbr: {
          fa: "ی"
        }
      },
      3: {
        name: {
          fa: "دوشنبه"
        },
        abbr: {
          fa: "د"
        }
      },
      4: {
        name: {
          fa: "سه شنبه"
        },
        abbr: {
          fa: "س"
        }
      },
      5: {
        name: {
          fa: "چهار شنبه"
        },
        abbr: {
          fa: "چ"
        }
      },
      6: {
        name: {
          fa: "پنج شنبه"
        },
        abbr: {
          fa: "پ"
        }
      },
      0: {
        name: {
          fa: "جمعه"
        },
        abbr: {
          fa: "ج"
        }
      }
    },


    /**
     *
     * @type {string[]}
     */
    persianDaysName = [
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
      "زیادی"];