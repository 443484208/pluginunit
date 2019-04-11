class gg {
	//	月前
	hyCurrent(day) {
		var newMonth = new Date().getMonth() + 1;
		var newYear = new Date().getFullYear();
		var Year = new Date(day).getFullYear();
		var Month = new Date(day).getMonth() + 1;
		var data;
		if(newYear > Year) {
			data = (((newYear - Year) * 12) - Month + newMonth);
		} else {
			data = (Month - newMonth);
		}
		if(data < 12) {
			if(data == 0) {
				data = '当前'
			} else {

				data = data + '月前'
			}
			return data
		} else {
			return(this.numDivision(data, '12').toFixed(1) + '年前')
		}
	}
	//	年月日时分秒
	getTime(day) {
		var d = new Date(day);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		var day = d.getDay();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		var ms = d.getMilliseconds();
		var curDateTime = year;
		if(month > 9)
			curDateTime = curDateTime + "-" + month;
		else
			curDateTime = curDateTime + "-0" + month;
		if(date > 9)
			curDateTime = curDateTime + "-" + date;
		else
			curDateTime = curDateTime + "-0" + date;
		if(hours > 9)
			curDateTime = curDateTime + " " + hours;
		else
			curDateTime = curDateTime + " 0" + hours;
		if(minutes > 9)
			curDateTime = curDateTime + ":" + minutes;
		else
			curDateTime = curDateTime + ":0" + minutes;
		if(seconds > 9)
			curDateTime = curDateTime + ":" + seconds;
		else
			curDateTime = curDateTime + ":0" + seconds;
		return curDateTime;

	}
	//	年月日
	getTimes(day) {
		var d = new Date(day);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		var day = d.getDay();
		var curDateTime = year;
		if(month > 9)
			curDateTime = curDateTime + "-" + month;
		else
			curDateTime = curDateTime + "-0" + month;
		if(date > 9)
			curDateTime = curDateTime + "-" + date;
		else
			curDateTime = curDateTime + "-0" + date;
		return curDateTime
	}
	// 加法运算

	numAdd(num1, num2) {
		if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum, baseNum1, baseNum2;
			try {
				baseNum1 = num1.toString().split(".")[1].length;
			} catch(e) {
				baseNum1 = 0;
			}
			try {
				baseNum2 = num2.toString().split(".")[1].length;
			} catch(e) {
				baseNum2 = 0;
			}
			baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
			return(num1 * baseNum + num2 * baseNum) / baseNum;
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {

				var baseNum, baseNum1, baseNum2;
				try {
					baseNum1 = num1.toString().split(".")[1].length;
				} catch(e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split(".")[1].length;
				} catch(e) {
					baseNum2 = 0;
				}
				baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
				return this.housandDigits((num1 * baseNum + num2 * baseNum) / baseNum);
			} else {

				return NaN
			}
		}

	}
	//減法运算

	numSub(num1, num2) {
		if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum, baseNum1, baseNum2;
			var precision; // 精度
			try {
				baseNum1 = num1.toString().split(".")[1].length;
			} catch(e) {
				baseNum1 = 0;
			}
			try {
				baseNum2 = num2.toString().split(".")[1].length;
			} catch(e) {
				baseNum2 = 0;
			}
			baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
			precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
			return((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum, baseNum1, baseNum2;
				var precision; // 精度
				try {
					baseNum1 = num1.toString().split(".")[1].length;
				} catch(e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split(".")[1].length;
				} catch(e) {
					baseNum2 = 0;
				}
				baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
				precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;

				return this.housandDigits((((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)));
			} else {

				return NaN
			}
		}
	}
	//乘法运算
	numMulti(num1, num2) {
		if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum = 0;
			try {
				baseNum += num1.toString().split(".")[1].length;
			} catch(e) {}
			try {
				baseNum += num2.toString().split(".")[1].length;
			} catch(e) {}
			return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum = 0;
				try {
					baseNum += num1.toString().split(".")[1].length;
				} catch(e) {}
				try {
					baseNum += num2.toString().split(".")[1].length;
				} catch(e) {}
				return this.housandDigits((Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum)));
			} else {

				return NaN
			}
		}

	}
	// 除法运算
	numDivision(num1, num2) {
		if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
			var baseNum1 = 0,
				baseNum2 = 0;
			var baseNum3, baseNum4;
			try {
				baseNum1 = num1.toString().split(".")[1].length;
			} catch(e) {
				baseNum1 = 0;
			}
			try {
				baseNum2 = num2.toString().split(".")[1].length;
			} catch(e) {
				baseNum2 = 0;
			}

			baseNum3 = Number(num1.toString().replace(".", ""));
			baseNum4 = Number(num2.toString().replace(".", ""));
			return(baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
		} else {
			num1 = num1 + "";
			num1 = num1.replace(/,/g, "");
			num2 = num2 + "";
			num2 = num2.replace(/,/g, "");
			if(!isNaN(Number(num1)) && !isNaN(Number(num2))) {
				var baseNum1 = 0,
					baseNum2 = 0;
				var baseNum3, baseNum4;
				try {
					baseNum1 = num1.toString().split(".")[1].length;
				} catch(e) {
					baseNum1 = 0;
				}
				try {
					baseNum2 = num2.toString().split(".")[1].length;
				} catch(e) {
					baseNum2 = 0;
				}

				baseNum3 = Number(num1.toString().replace(".", ""));
				baseNum4 = Number(num2.toString().replace(".", ""));

				return this.housandDigits(((baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)).toFixed(2));
			} else {

				return NaN
			}
		}

	}
	//get请求
	getJson(url, header = 'application/json; charset=UTF-8') {
		let p = new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onreadystatechange = function() {
				if(this.readyState == 4) {
					if(this.status == 200) {
						resolve(xhr.response);
					} else {
						reject(new Error(xhr.stateText));
					}
				}
			};
			xhr.responseType = 'json';
			xhr.setRequestHeader("Content-Type", header);
			xhr.send();
		})
		return p;
	}
	//post请求
	postJson(url, data, header = "application/json; charset=UTF-8") {
		let p = new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url, true);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4) {
					if(this.status == 200) {
						var data = xhr.response;
						resolve(JSON.parse(data));
					} else {
						reject(new Error(xhr.stateText));
					}
				}
			};
			xhr.setRequestHeader("Content-Type", header);
			if(!((header.indexOf('form')) == -1)) {
				var formData = [];
				for(var key in data) {
					if(data[key]) {
						formData = formData + key + '=' + data[key] + '&';
					}
				}
				xhr.send(formData);
			} else if(typeof(data) == 'object') {
				xhr.send(JSON.stringify(data));
			} else {
				xhr.send(data);
			}
		})
		return p;
	}
	//	大写金额
	DX(event) {
		if(!/^(0|[1-9]\d*)(\.\d+)?$/.test(event))
			return "数据非法";
		var unit = "仟佰拾亿仟佰拾万仟佰拾元角分",
			str = "";
		event += "00";
		var p = event.indexOf('.');
		if(p >= 0)
			event = event.substring(0, p) + event.substr(p + 1, 2);
		unit = unit.substr(unit.length - event.length);
		for(var i = 0; i < event.length; i++)
			str += '零壹贰叁肆伍陆柒捌玖'.charAt(event.charAt(i)) + unit.charAt(i);
		return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
	}
	//设置cookie
	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		//	console.info(cname + "=" + cvalue + "; " + expires);
		document.cookie = cname + "=" + cvalue + "; " + expires;

	}
	//获取cookie
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while(c.charAt(0) == ' ') c = c.substring(1);
			if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return "";
	}
	//清除cookie
	clearCookie(data) {
		this.setCookie(data, "", -1);
	}
	//清除全部cookie
	clearCookieAll() {
		var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		if(keys) {
			for(var i = keys.length; i--;)
				document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
		}
	}
	//设置LocalStorage
	setLocalStorage(name, val) {
		localStorage.setItem(name, JSON.stringify(val))
	}
	//获取LocalStorage
	getLocalStorage(name) {
		return JSON.parse(localStorage.getItem(name))

	}
	//清除全部LocalStorage
	clearLocalStorage(data) {
		localStorage.removeItem(data);
	}
	//清除LocalStorage
	clearLocalStorageAll() {
		localStorage.clear();
	}
	//设置sessionStorage
	setSessionStorage(name, val) {
		sessionStorage.setItem(name, JSON.stringify(val))
	}
	//获取sessionStorage
	getSessionStorage(name) {
		return JSON.parse(sessionStorage.getItem(name))

	}
	//清除sessionStorage
	clearSessionStorage(data) {
		sessionStorage.removeItem(data);
	}
	//清除全部sessionStorage
	clearSessionStorageAll() {
		sessionStorage.clear();
	}
	//数组对象转化json字符串
	postObj(a) {
		var postObj = {};
		for(var key in a) {
			postObj[key] = a[key];
		}
		return JSON.stringify(postObj);
	}
	//字符串逆转
	strturn(str) {
		if(str != "") {
			var str1 = "";
			for(var i = str.length - 1; i >= 0; i--) {
				str1 += str.charAt(i);
			}
			return(str1);
		}
	}
	//取文件后缀名
	GetFileExt(filepath) {
		if(filepath != "") {
			var pos = "." + filepath.replace(/.+\./, "");
			return pos;
		}
	}
	//取文件全名名称
	GetFileName(filepath) {
		if(filepath != "") {
			var names = filepath.split("\\");
			return names[names.length - 1];
		}
	}
	//取文件名不带后缀
	GetFileNameNoExt(filepath) {
		var pos = this.strturn(this.GetFileExt(filepath));
		var file = this.strturn(filepath);
		var pos1 = this.strturn(file.replace(pos, ""));
		var pos2 = this.GetFileName(pos1);
		return pos2;

	}
	//	千位符
	housandDigits(event) {
		return(event).toLocaleString('en-US');
	}
	//	替换或全部
	hyreplace(data, original, originals, manyTimes = false) {
		if(manyTimes) {
			var reg = new RegExp(originals, "g")
			return data.replace(reg, original);
		} else {
			var reg = new RegExp(originals)
			return data.replace(reg, original);
		}

	}
	//  打乱数组
	disrupt(arr) {
		arr.sort(() => Math.random() > 0.5)
	}
	//	记录数组重复值和位置
	unique(arr) {
		let obj = {};
		for(var i = 0; i < arr.length; i++) {
			let key = arr[i];
			if(!obj[key]) {
				obj[key] = 1;
			} else {
				obj[key] += 1;
			}

		};
		return obj;
	}
	//	拖动
	dt(box) {
		var boxx = document.getElementById(box);
		boxx.onmousedown = function(ev) {
			if(ev.srcElement.localName == 'input' || ev.srcElement.localName == 'textarea' || ev.srcElement.localName == 'button' || ev.srcElement.localName == 'i') {

			} else {
				boxx.style.position = 'absolute;';
				var oEvent = ev;
				//求出鼠标和box的位置差值
				var x = oEvent.clientX - boxx.offsetLeft;
				var y = oEvent.clientY - boxx.offsetTop;
				//鼠标移动的函数
				//把事件加在document上，解决因为鼠标移动太快时，
				//鼠标超过box后就没有了拖拽的效果的问题
				document.onmousemove = function(ev) {
					var oEvent = ev;

					//保证拖拽框一直保持在浏览器窗口内部，不能被拖出的浏览器窗口的范围
					var l = oEvent.clientX - x;
					var t = oEvent.clientY - y;
					if(l < 0) {
						l = 0;

					} else if(l > document.documentElement.clientWidth - boxx.offsetWidth) {
						l = document.documentElement.clientWidth - boxx.offsetWidth;
					}
					if(t < 0) {
						t = 0;
					} else if(t > document.documentElement.clientHeight - boxx.offsetHeight) {
						t = document.documentElement.clientHeight - boxx.offsetHeight;
					}
					console.log(l)
					boxx.style.left = l + "px";
					boxx.style.top = t + "px";
				}
				//鼠标抬起的函数
				document.onmouseup = function() {
					document.onmousemove = null;
					document.onmouseup = null;
				}
				//火狐浏览器在拖拽空div时会出现bug
				//return false阻止默认事件，解决火狐的bug
				return false;
			}

		}
	}
	//	数组去重排序 
	duplicateRemovalSet(data, a = 0) {
		if(a == 0) {
			return [...new Set(data)].sort(function(a, b) {
				return a < b ? -1 : 1; // 默认升序
			})
		} else {
			return [...new Set(data)].sort(function(a, b) {
				return a < b ? 1 : -1; // 降序
			})
		}
	}
	//  数组的属性排序大小
	arrayValueSort(data, value) {
		return data.sort(function(a, b) {
			return a[value] - b[value]
		})

	}
	//	深拷贝
	deepCopy(Obj) {
		if(!Obj || typeof Obj !== 'object') {
			return('您传入的不是对象!!');

		}
		// 转->解析->返回一步到位
		return window.JSON ?
			JSON.parse(JSON.stringify(Obj)) :
			('您的浏览器不支持 JSON API');
	}
	//是否有class 
	hasClass(primary, cls) {
		var primarys = document.querySelector('.' + primary);
		if(primarys.classList.contains(cls)) {
			console.log(primary + '包含' + cls + '这个class');
		} else {
			console.log(primary + '不包含' + cls + '这个class');

		}
	}

	//添加class 
	addClass(primary, cls) {
		if(document.querySelector('.' + primary)) {

			document.querySelector('.' + primary).classList.add(cls)
		} else {
			console.log(primary + '没有这个class！')
		}
	}

	//删除class
	removeClass(primary, cls) {
		if(primary, cls) {
			document.querySelector('.' + primary).classList.remove(cls)
		} else {

		}
	}
	// 数组变成树形 id ,和父亲pid	filterTree(arryData);
	 filterTree(data) {
		let result = []
		if (!Array.isArray(data)) {
			return result
		}
		data.forEach(item => {
			delete item.children;
		});
		let map = {};
		data.forEach(item => {
			map[item.id] = item;
		});
		data.forEach(item => {
			let parent = map[item.pid];
			if (parent) {
				(parent.children || (parent.children = [])).push(item);
			} else {
				result.push(item);
			}
		});
		return result;
	}
	// 递归找某节点 findId(aaxx, 1) id ,和父亲pid
		 findId(data, current) {
			if (!data) {
				// return; 中断执行
				return;
			}
			for (var i in data) {
				var item = data[i];
				if (item.id == current) {
					window.searId=item;
					break
				} else if (item.children && item.children.length > 0) {
					findId(item.children, current);
				}
			}
				return window.searId
		}

}
var ajax = new gg();
export default ajax;