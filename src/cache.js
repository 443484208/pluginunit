var cache = {
	// 请求
	// ajax({
	//     type: "get",
	//     url: "http://localhost:8055/listcount.php",
	//     data: {search: "l"},
	//     dataType: "json",
	//     success: function (result) {
	//         alert(result["count"]);
	//     }
	// });
	ajax(json) {
		var req = new XMLHttpRequest();
		var type = json["type"];
		var url = json["url"];
		if (json["data"]) {
			var html = "?";
			for (var i in json["data"]) {
				html += i + "=" + json["data"][i] + "&";
			}
			html = html.substring(0, html.length - 1);
			url += html;
		}
		var success = json["success"];
		req.open(type, url, true);
		req.send();
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				var result = req.responseText;
				if (json["dataType"] == "json") {
					result = JSON.parse(result);
				}
				success(result);
			}
		}
	},
	//设置cookie
	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		//	console.info(cname + "=" + cvalue + "; " + expires);
		document.cookie = cname + "=" + cvalue + "; " + expires;
		return true;
	},
	//获取cookie
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
		}
		return "";
	},
	//清除cookie
	clearCookie(data) {
		this.setCookie(data, "", -1);
		return true
	},
	//清除全部cookie
	clearCookieAll() {
		var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		if (keys) {
			for (var i = keys.length; i--;)
				document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
		}
		return true;
	},
	//设置LocalStorage
	setLocalStorage(name, val) {
		localStorage.setItem(name, JSON.stringify(val));
		return true
	},
	//获取LocalStorage
	getLocalStorage(name) {
		return JSON.parse(localStorage.getItem(name))
	},
	//清除全部LocalStorage
	clearLocalStorage(data) {
		localStorage.removeItem(data);
		return true
	},
	//清除LocalStorage
	clearLocalStorageAll() {
		localStorage.clear();
		return true
	},
	//设置sessionStorage
	setSessionStorage(name, val) {
		sessionStorage.setItem(name, JSON.stringify(val));
		return true
	},
	//获取sessionStorage
	getSessionStorage(name) {
		return JSON.parse(sessionStorage.getItem(name))
	},
	//清除sessionStorage
	clearSessionStorage(data) {
		sessionStorage.removeItem(data);
		return true
	},
	//清除全部sessionStorage
	clearSessionStorageAll() {
		sessionStorage.clear();
		return true
	}
}
export default cache
