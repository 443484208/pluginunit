var regular = {
	// 身份证转生日 格式19950-05-08
	cardToBirthday(data) {
		var birthday = "";
		if (data != null && data != "") {
			if (data.length == 15) {
				birthday = "19" + data.substr(6, 6);
			} else if (data.length == 18) {
				birthday = data.substr(6, 8);
			}
			birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
		}
		return birthday;
	},
	// 手机号码验证 true false
	phoneNumberVerification(data) {
		const verification = /^1[3456789]\d{9}$/;
		return verification.test(data);
	},
	// 手机号码中间星星
	phoneStars(data) {
		return data.replace(/^(\d{3})\d{5}(\d+)/, "$1****$2");
	},
	//密码强度正则，最少6位 type=false 默认值 包括至少1个大写字母，1个小写字母，1个数字
	// type=true包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符,
	passwordStrength(data, type = false) {
		if (type) {
			const verification = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
		} else {
			const verification = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
		}
		return verification.test(data);
	},
	// email
	emailVerification(data) {
		const verification = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		return verification.test(data);
	},
	// 地址验证
	urlVerification(data) {
		const verification = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		return verification.test(data);
	},
	// 中文字符
	chineseCharacters(data) {
		const verification = /[\u4e00-\u9fa5]/gm;
		return verification.test(data);
	},
	// 中文正则
	chineseVerification(data) {
		const verification = /[\u4E00-\u9FA5]/;
		return verification.test(data);
	},
	judgmentRules(rule) {
		if (!rule.type) {
			rule.type = 'default';
		}
		if (rule.type == 'default') {
			if (rule.data == "") {
				return {
					message: rule.message || (rule.name + '不能为空'),
					type: false
				}
			} else {
				return {
					type: true
				}
			}
		} else if (rule.type == 'phone') {
			// 手机
			const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);
			if (!isMPRelaxed(rule.data)) {
				return {
					message: rule.message || '手机号码格式不正确',
					type: false
				}
			} else {
				return true
			}
		} else if (rule.type == 'email') {
			// 邮箱
			const isEmail = value =>
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
				.test(value);
			if (!isMPRelaxed(rule.email)) {
				return {
					message: rule.message || '邮箱格式不正确',
					type: false
				}
			} else {
				return true
			}
		} else if (rule.type == 'custom') {
			const isRegular = value => rule.regular.test(value);
			if (rule.data == "") {
				return {
					message: rule.message || (rule.name + '不能为空'),
					type: false
				}
			} else if (!isRegular(rule.email)) {
				return {
					message: rule.message || (rule.name + '不能为空'),
					type: false
				}
			} else {
				return true
			}
		}
	},
}
export default regular
