var algorithm={
	// 加法运算
	numAdd(num1, num2) {
		if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum, baseNum1, baseNum2;
			try {
				baseNum1 = num1.toString().split(".")[1].length;
			} catch (e) {
				baseNum1 = 0;
			}
			try {
				baseNum2 = num2.toString().split(".")[1].length;
			} catch (e) {
				baseNum2 = 0;
			}
			baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
			return (num1 * baseNum + num2 * baseNum) / baseNum;
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum, baseNum1, baseNum2;
				try {
					baseNum1 = num1.toString().split(".")[1].length;
				} catch (e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split(".")[1].length;
				} catch (e) {
					baseNum2 = 0;
				}
				baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
				return this.housandDigits((num1 * baseNum + num2 * baseNum) / baseNum);
			} else {
				return NaN
			}
		}
	},
	//減法运算
	numSub(num1, num2) {
		if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum, baseNum1, baseNum2;
			var precision; // 精度
			try {
				baseNum1 = num1.toString().split(".")[1].length;
			} catch (e) {
				baseNum1 = 0;
			}
			try {
				baseNum2 = num2.toString().split(".")[1].length;
			} catch (e) {
				baseNum2 = 0;
			}
			baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
			precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
			return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum, baseNum1, baseNum2;
				var precision; // 精度
				try {
					baseNum1 = num1.toString().split(".")[1].length;
				} catch (e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split(".")[1].length;
				} catch (e) {
					baseNum2 = 0;
				}
				baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
				precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
				return this.housandDigits((((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)));
			} else {
				return NaN
			}
		}
	},
	//乘法运算
	numMulti(num1, num2) {
		if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum = 0;
			try {
				baseNum += num1.toString().split(".")[1].length;
			} catch (e) {}
			try {
				baseNum += num2.toString().split(".")[1].length;
			} catch (e) {}
			return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum = 0;
				try {
					baseNum += num1.toString().split(".")[1].length;
				} catch (e) {}
				try {
					baseNum += num2.toString().split(".")[1].length;
				} catch (e) {}
				return this.housandDigits((Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) /
					Math.pow(10, baseNum)));
			} else {
				return NaN
			}
		}
	},
	// 除法运算
	numDivision(num1, num2) {
		if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum1 = 0,
				baseNum2 = 0;
			var baseNum3, baseNum4;
			try {
				baseNum1 = num1.toString().split(".")[1].length;
			} catch (e) {
				baseNum1 = 0;
			}
			try {
				baseNum2 = num2.toString().split(".")[1].length;
			} catch (e) {
				baseNum2 = 0;
			}
			baseNum3 = Number(num1.toString().replace(".", ""));
			baseNum4 = Number(num2.toString().replace(".", ""));
			return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum1 = 0,
					baseNum2 = 0;
				var baseNum3, baseNum4;
				try {
					baseNum1 = num1.toString().split(".")[1].length;
				} catch (e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split(".")[1].length;
				} catch (e) {
					baseNum2 = 0;
				}
				baseNum3 = Number(num1.toString().replace(".", ""));
				baseNum4 = Number(num2.toString().replace(".", ""));
				return this.housandDigits(((baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)).toFixed(2));
			} else {
				return NaN
			}
		}
	},
	//	大写金额
	DX(event) {
		if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(event))
			return "数据非法";
		var unit = "仟佰拾亿仟佰拾万仟佰拾元角分",
			str = "";
		event += "00";
		var p = event.indexOf('.');
		if (p >= 0)
			event = event.substring(0, p) + event.substr(p + 1, 2);
		unit = unit.substr(unit.length - event.length);
		for (var i = 0; i < event.length; i++)
			str += '零壹贰叁肆伍陆柒捌玖'.charAt(event.charAt(i)) + unit.charAt(i);
		return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2")
			.replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
	},
	//	千位符
	housandDigits(event) {
		return (event).toLocaleString('en-US');
	}
}

export default algorithm;
   
   
