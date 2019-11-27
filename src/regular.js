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
	}
}
export default regular
