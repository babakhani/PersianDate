var LT9 = false;

var browserMajorVersion = $.browser.version.split('.')[0];
if($.browser.msie && browserMajorVersion < 9) {
	var LT9 = true;
};

$.fn.addClasses = function(classes){
	for ( c in arguments){
		this.addClass(arguments[c]);
	}
	return this;
};

String.prototype.format = function() {
    var i=0;
    var string = (typeof(this) == "function" && !(i++)) ? arguments[0] : this;
    for (; i < arguments.length; i++)
        string = string.replace(/\{\d+?\}/, arguments[i]); 
    return string;
};
var print = function(e){
	if(!LT9){
		console.log(e);

	}
}; 


function assert(exp,message){
	if (!exp){
		$.error(message);	
	}
};

var range = function(e){
	r = [];
	var i=0;
	while (i<=e-1)
	{
  		r.push(i);
		i++;
  	}
	return r;
};

function XOR(a,b) {
  return ( a || b ) && !( a && b );
}

function between(s,a1,a2){
	if (a1 > a2){
		a1 = XOR(a1,a2);
		a2 = XOR(a2,a1);
		a1 = XOR(a1,a2);
	}
	return s >= a1 && s <= a2;
}

function inside(s1,s2,a1,a2){
	if (a1 > a2){
		a1 = XOR(a1,a2);
		a2 = XOR(a2,a1);
		a1 = XOR(a1,a2);
	}
	if (s1 > s2){
		s1 = XOR(s1,s2);
		s2 = XOR(s2,s1);
		s1 = XOR(s1,s2);
	}
	return s1 >= a1 && s2 <= a2;
}



function copyObject(o){
	return $.extend(true,{},o);
}

//String.prototype.toPersianDigit = function(a) {
//	return this.replace(/\d+/g, function(digit) {
//		var enDigitArr = [], peDigitArr = [];
//		for (var i = 0; i < digit.length; i++) {
//			enDigitArr.push(digit.charCodeAt(i));
//		}
//		for (var j = 0; j < enDigitArr.length; j++) {
//			peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!a && a == true) ? 1584 : 1728)));
//		}
//		return peDigitArr.join('');
//	});
//};



