/**
 * Relative object constructor
 * @param duration
 * @class Duration
 * @constructor
 */
String.prototype.format = function () {
    let a = this, k;
    for (k in arguments) {
        a = a.replace('{' + k + '}', arguments[k]);
    }
    return a;
};

class Relative {
    constructor () {
        this.timeModerationStrings = {
            after: 'بعد',
            before: 'قبل',
        };

        this.relative = {
            'year': {
                '-n': '{0} سال قبل',
                '-2': 'پیارسال',
                '-1': 'پارسال',
                '0': 'امسال',
                '+n': '{0} سال بعد',
                'n': '{0} سال و',
                'n]': '{0} سال',
            },
            'month': {
                '-n': '{0} ماه قبل',
                '0': 'این ماه',
                '+n': '{0} ماه بعد',
                'n': '{0} ماه و',
                'n]': '{0} ماه',
            },
            'day': {
                '-n': '{0} روز قبل',
                '-3': 'پس پریروز',
                '-2': 'پریروز',
                '-1': 'دیروز',
                '0': 'امروز',
                '+1': 'فردا',
                '+2': 'پس فردا',
                '+n': '{0} روز بعد',
                'n': '{0} روز و',
                'n]': '{0} روز',
            },
            'hour': {
                '-n': '{0} ساعت قبل',
                '0': '',
                '+n': '{0} ساعت بعد',
                'n': '{0} ساعت و',
                'n]': '{0} ساعت',
                // https://en.wikipedia.org/wiki/Afternoon
                // https://fa.wikipedia.org/wiki/%D8%BA%D8%B1%D9%88%D8%A8
                'morning': {
                    text: 'صبح',
                    start: 6,
                    end: 12,
                },
                'noon': {
                    text: 'ظهر',
                    start: 12,
                    end: 18,
                },
                'afternoon': {
                    text: 'بعد از ظهر',
                    start: 18,
                    end: 20,
                },
                'night': {
                    text: 'شب',
                    start: 20,
                    end: 12,
                },
                'midnight': {
                    text: 'نیمه شب',
                    start: 12,
                    end: 6,
                }
            },
            'minute': {
                '-n': '{0} دقیقه قبل',
                '0': '',
                '+n': '{0} دقیقه بعد',
                'n': '{0} دقیقه و',
                'n]': '{0} دقیقه',
            },
            'second': {
                '-n': '{0} ثانیه قبل',
                '0': 'الان',
                '+n': '{0} ثانیه بعد',
                'n]': '{0} ثانیه',
            },
        };
    }

    convertToRelative (date, pDate, PersianDateClass) {
        let that = this, relationValue, output;
        for (let key of Object.keys(that.relative)) {

            if (!date) {
                date = new PersianDateClass();
            }

            relationValue = date.diff(pDate, key);
            if (relationValue < 0) {
                relationValue = (relationValue * -1);
            }

            if (relationValue >= 1 || relationValue <= -1) {
                if (date.valueOf() < pDate.valueOf()) {
                    if (key == 'day' && relationValue == 1) {
                        output = that.relative[key]['+1'].format(relationValue);
                    }
                    else if (key == 'day' && relationValue == 2) {
                        output = that.relative[key]['+2'].format(relationValue);
                    }
                    else {
                        output = that.relative[key]['+n'].format(relationValue);
                    }
                } else {

                    if (key == 'day' && relationValue == 1) {
                        output = that.relative[key]['-1'].format(relationValue);
                    }
                    else if (key == 'day' && relationValue == 2) {
                        output = that.relative[key]['-2'].format(relationValue);
                    }
                    else if (key == 'day' && relationValue == 3) {
                        output = that.relative[key]['-3'].format(relationValue);
                    }
                    else {
                        output = that.relative[key]['-n'].format(relationValue);
                    }
                }
                break;
            }
        }
        return output;
    }

    convertRelative () {
    }
}

module.exports = Relative;


//
//
//person = [
//    ['reza', 26, '', '', 'man'],
//    ['reza', 12, [], {}]
//]
////
////true
////'xasxas'
////1
////[]
////{}
////''
//
//
//pd = [
//  'version': '0.2.0',
//  'now': '2613587621',
//  'weekDay':'csacsa',
//   'year': function(a){
//    }
//]
//
//person = [
//    {
//        'name': 'reza',
//        'old': 30,
//        'job': '',
//        'family': 'babakhani',
//        'gender': 'man',
//        'newYearInTehran': [1392,1391,1380],
//        'works':[{},{},{}]
//        'isMan': true,
//        'callHim': function(){
//
//        },
//        'sendMessage': function(){
//        }
//    }
//
//]
//
////
////
////name=reza,family=babakhani,old=45
////name=bita,








