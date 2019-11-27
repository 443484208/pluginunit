import algorithm from '../src/algorithm.js'
import cache from '../src/cache.js'
import data from '../src/data.js'
import dom from '../src/dom.js'
import time from '../src/time.js'
var  pluginunit=Object.assign(algorithm, cache,data,dom,time);

export default pluginunit;


// class gg {
// 	//判断是否为手机号码
// 	validatemobile(mobile) {
// 		if (mobile.length == 0) {
// 			return {
// 				type: false,
// 				title: '请输入手机号！',
// 			};
// 		}
// 		if (mobile.length != 11) {
// 			return {
// 				type: false,
// 				title: '手机号长度有误！',
// 			};
// 		}
// 		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
// 		if (!myreg.test(mobile)) {
// 			return {
// 				type: false,
// 				title: '手机号长度有误！',
// 			};
// 		}
// 		return {
// 			type: true,
// 			title: '手机号正确！',
// 		};
// 	}
	
	
	
// }
// export default pluginunit;