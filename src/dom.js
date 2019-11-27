var dom ={
	//是否有class
	hasClass(primary, cls) {
		var primarys = document.querySelector('.' + primary);
		if (primarys.classList.contains(cls)) {
			// console.log(primary + '包含' + cls + '这个class');
			return true
		} else {
			// console.log(primary + '不包含' + cls + '这个class');
			return false
		}
	},
	//添加class 
	addClass(primary, cls) {
		if (document.querySelector('.' + primary)) {
			document.querySelector('.' + primary).classList.add(cls);
			return true;
		} else {
			// console.log(primary + '没有这个class！')
			return false;
		}
	},
	//删除class
	removeClass(primary, cls) {
		if (primary, cls) {
			document.querySelector('.' + primary).classList.remove(cls)
			return true
		} else {
			return false;
		}
	},
	//滑动到指定id元素 id:元素id time滚动时间
	slideTop(id, time = 0) {
		var topHeight = document.getElementById(id).offsetTop;
		this.scrollTop(topHeight, time)
	},
    //滑动距离 基于body滚动 number:滚动距离 time滚动时间
	scrollTop(number = 0, time) {
		if (!time) {
			document.body.scrollTop = document.documentElement.scrollTop = number;
			return number;
		}
		const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
		let spacingInex = time / spacingTime; // 计算循环的次数
		let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
		let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
		let scrollTimer = setInterval(() => {
			if (spacingInex > 0) {
				spacingInex--;
				this.scrollTop(nowTop += everTop);
			} else {
				clearInterval(scrollTimer); // 清除计时器
			}
		}, spacingTime);
	},
	//	拖动
	dt(box) {
		var drag = document.getElementById(box);
		drag.onmousedown = function(ev) {
			if (ev.srcElement.localName == 'input' || ev.srcElement.localName == 'textarea' || ev.srcElement.localName ==
				'button' || ev.srcElement.localName == 'i') {
			} else {
				drag.style.position = 'absolute';
				var oEvent = ev;
				//求出鼠标和box的位置差值
				var x = oEvent.clientX - drag.offsetLeft;
				var y = oEvent.clientY - drag.offsetTop;
				//鼠标移动的函数
				//把事件加在document上，解决因为鼠标移动太快时，
				//鼠标超过box后就没有了拖拽的效果的问题
				document.onmousemove = function(ev) {
					var oEvent = ev;
					//保证拖拽框一直保持在浏览器窗口内部，不能被拖出的浏览器窗口的范围
					var l = oEvent.clientX - x;
					var t = oEvent.clientY - y;
					if (l < 0) {
						l = 0;
					} else if (l > document.documentElement.clientWidth - drag.offsetWidth) {
						l = document.documentElement.clientWidth - drag.offsetWidth;
					}
					if (t < 0) {
						t = 0;
					} else if (t > document.documentElement.clientHeight - drag.offsetHeight) {
						t = document.documentElement.clientHeight - drag.offsetHeight;
					}
					drag.style.left = l + "px";
					drag.style.top = t + "px";
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
	
}

export default dom