var data={
	//数组对象转化json字符串
	postObj(a) {
		var postObj = {};
		for (var key in a) {
			postObj[key] = a[key];
		}
		return JSON.stringify(postObj);
	},
	//字符串逆转
	strturn(str) {
		if (str != "") {
			var str1 = "";
			for (var i = str.length - 1; i >= 0; i--) {
				str1 += str.charAt(i);
			}
			return (str1);
		}
	},
	//取文件后缀名
	GetFileExt(filepath) {
		if (filepath != "") {
			var pos = "." + filepath.replace(/.+\./, "");
			return pos;
		}
	},
	//取文件全名名称
	GetFileName(filepath) {
		if (filepath != "") {
			var names = filepath.split("\\");
			return names[names.length - 1];
		}
	},
	//取文件名不带后缀
	GetFileNameNoExt(filepath) {
		var pos = this.strturn.call(this,this.GetFileExt.call(this,filepath));
		var file = this.strturn.call(this,filepath);
		var pos1 = this.strturn.call(this,file.replace(pos, ""));
		var pos2 = this.GetFileName.call(this,pos1);
		// var pos = this.strturn(this.GetFileExt(filepath));
		// var file = this.strturn(filepath);
		// var pos1 = this.strturn(file.replace(pos, ""));
		// var pos2 = this.GetFileName(pos1);
		return pos2;
	},
	//	替换或全部
	hyreplace(data, original, originals, manyTimes = false) {
		if (manyTimes) {
			var reg = new RegExp(originals, "g")
			return data.replace(reg, original);
		} else {
			var reg = new RegExp(originals)
			return data.replace(reg, original);
		}
	},
	//	记录数组重复值和位置
	unique(arr) {
		let obj = {};
		for (var i = 0; i < arr.length; i++) {
			let key = arr[i];
			if (!obj[key]) {
				obj[key] = 1;
			} else {
				obj[key] += 1;
			}
		};
		return obj;
	},
	//	数组去重排序
	duplicateRemovalSet(data, a = 0) {
		if (a == 0) {
			return [...new Set(data)].sort(function(a, b) {
				return a < b ? -1 : 1; // 默认升序
			})
		} else {
			return [...new Set(data)].sort(function(a, b) {
				return a < b ? 1 : -1; // 降序
			})
		}
	},
	//  数组的属性排序大小
	arrayValueSort(data, value) {
		return data.sort(function(a, b) {
			return a[value] - b[value]
		})
	},
	//	深拷贝
	deepCopy(Obj) {
		if (!Obj || typeof Obj !== 'object') {
			return ('您传入的不是对象!!');
		}
		// 转->解析->返回一步到位
		return window.JSON ?
			JSON.parse(JSON.stringify(Obj)) :
			('您的浏览器不支持 JSON API');
	},
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
	},
	// 递归找某节点 findId(aaxx, 1) id ,和父亲pid
	findId(data, current) {
		if (!data) {
			// return; 中断执行
			return;
		}
		for (var i in data) {
			var item = data[i];
			if (item.id == current) {
				window.searId = item;
				break
			} else if (item.children && item.children.length > 0) {
				findId(item.children, current);
			}
		}
		return window.searId
	},
	// 指定获取url?参数
	getUrlByName(name, url) {
		if (!url) {
			url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	},		
	//url？参数转对象
	parseUrl(url) {
		if (!url) {
			url = window.location.search;
			url=url.replace("?",'')
		}
		var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
		var obj = {};
		while (reg.exec(url)) {
			obj[RegExp.$1] = RegExp.$2;
		}
		return obj;
	}
}

export default data