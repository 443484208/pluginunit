var time = {
	// 时间差
	getDifferTime(getDate) {
		const nowDate = new Date();
		const targetDate = getDate < 10000000000 ? new Date(getDate * 1000) : new Date(getDate);
		const differTime = new Date(nowDate.getTime() - targetDate.getTime());
		const differDays = parseInt(differTime / (1000 * 60 * 60 * 24));
		const differYear = parseInt(differDays / 365);
		const differMonth = parseInt(differDays / 30);
		const differHours = nowDate.getHours() - targetDate.getHours();
		const differMinutes = Math.abs(nowDate.getMinutes() - targetDate.getMinutes());
		const differAry = [{
			dateDes: `${differYear}年前`,
			dateVal: differYear
		}, {
			dateDes: `${differMonth}月前`,
			dateVal: differMonth
		}, {
			dateDes: `${differDays}日前`,
			dateVal: differDays
		}, {
			dateDes: `${differHours==1&&differMinutes==0?`${differHours}小时前`:`${differHours}小时前`}`,
			dateVal: (differHours == 1 && differMinutes == 0) ? differHours : 0
		}, {
			dateDes: `${differHours>=1?`${differHours}小时${differMinutes}分前`:`${differMinutes}分钟前`}`,
			dateVal: differHours >= 1 ? differHours : differMinutes
		}];
		return differAry.find((item) => {
			return item.dateVal > 0;
		}) || '刚刚';
	},
	//	月前 day=时间格式遵守new Date格式即可 可以时间戳。识别当前月或者几个月前 超过十二个月自动识别几年前
	fewCurrent(day) {
		var time = day < 10000000000 ? new Date(day * 1000) : new Date(day);
		var newMonth = new Date().getMonth() + 1;
		var newYear = new Date().getFullYear();
		var Year = time.getFullYear();
		var Month = time.getMonth() + 1;
		var data;
		if (newYear > Year) {
			data = (((newYear - Year) * 12) - Month + newMonth);
		} else {
			data = (Month - newMonth);
		}
		if (data < 12) {
			if (data == 0) {
				data = '当前'
			} else {
				data = data + '月前'
			}
			return data
		} else {
			return (this.numDivision(data, '12').toFixed(1) + '年前')
		}
	},
	//	年月日时分秒
	getTime(day) {
		var d = day < 10000000000 ? new Date(day * 1000) : new Date(day);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		var day = d.getDay();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		var ms = d.getMilliseconds();
		var curDateTime = year;
		if (month > 9)
			curDateTime = curDateTime + "-" + month;
		else
			curDateTime = curDateTime + "-0" + month;
		if (date > 9)
			curDateTime = curDateTime + "-" + date;
		else
			curDateTime = curDateTime + "-0" + date;
		if (hours > 9)
			curDateTime = curDateTime + " " + hours;
		else
			curDateTime = curDateTime + " 0" + hours;
		if (minutes > 9)
			curDateTime = curDateTime + ":" + minutes;
		else
			curDateTime = curDateTime + ":0" + minutes;
		if (seconds > 9)
			curDateTime = curDateTime + ":" + seconds;
		else
			curDateTime = curDateTime + ":0" + seconds;
		return curDateTime;
	},
	//	年月日
	getTimes(day) {
		var d = day < 10000000000 ? new Date(day * 1000) : new Date(day);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		var day = d.getDay();
		var curDateTime = year;
		if (month > 9)
			curDateTime = curDateTime + "-" + month;
		else
			curDateTime = curDateTime + "-0" + month;
		if (date > 9)
			curDateTime = curDateTime + "-" + date;
		else
			curDateTime = curDateTime + "-0" + date;
		return curDateTime
	},
	//根据生日获取年龄 可以时间戳 时间2018-01-02
	getStrBirthday(strBirthday) {
		var strBirthday;
		if (strBirthday) {
			if (strBirthday < 10000000000) {
				strBirthday = new Date(strBirthday * 1000);
			} else {
				strBirthday = new Date(strBirthday);
			}
		} else {
			// 不能为空
			return
		}
		var returnAge;
		var birthYear = strBirthday.getFullYear();
		var birthMonth = strBirthday.getMonth() + 1;
		var birthDay = strBirthday.getDate();
		var d = new Date(); //返回当前时间对象;
		var nowYear = d.getFullYear();
		var nowMonth = d.getMonth() + 1;
		var nowDay = d.getDate();
		if (nowYear == birthYear) {
			returnAge = 0; //同年 则为0岁
		} else {
			var ageDiff = nowYear - birthYear; //年之差
			if (ageDiff > 0) {
				if (nowMonth == birthMonth) {
					var dayDiff = nowDay - birthDay; //日之差
					if (dayDiff < 0) {
						returnAge = ageDiff - 1;
					} else {
						returnAge = ageDiff;
					}
				} else {
					var monthDiff = nowMonth - birthMonth; //月之差
					if (monthDiff < 0) {
						returnAge = ageDiff - 1;
					} else {
						returnAge = ageDiff;
					}
				}
			} else {
				returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
			}
		}
		if (returnAge < 1) {
			returnAge = 1
		}
		return returnAge; //返回周岁年龄
	},
	//type=0 2019年02月23 周六 18: 55 type=1  2019年02月23 周六 同年不显示年强制需要年force=1timeFormats(1554973494,0,1)
	timeFormats(a, type = 0, force = 0) {
		if (a == null || a == 0) {
			return ''
		} else {
			var time = a < 10000000000 ? new Date(a * 1000) : new Date(a);
			var year = time.getFullYear();
			var newYear = new Date().getFullYear();
			var month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : time.getMonth();
			var day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
			var hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
			var minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
			var week = time.getDay();
			var weekNum = ["日", "一", "二", "三", "四", "五", "六"];
			var yearForce;
			if (force == 1) {
				yearForce = year + '年'
			} else {
				yearForce = year == newYear ? '' : year + '年'
			}
			if (type == 0) {
				return (yearForce + month + '月' + day + ' 周' + weekNum[week] + hours + ":" + minute);
			} else {
				return (yearForce + month + '月' + day + ' 周' + weekNum[week]);
			}
		}
	},
	timeWeek(data){
		var day=new Date(data).getDay()||new Date().getDay();
		var weekArry=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		return weekArry[day]||''
	},
}

export default time
