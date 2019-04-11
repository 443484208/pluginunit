说明 ，直接引用js文件的话script/index.js   
 框架引用 npm install pluginunit --save  
1   hyCurrent(data)data时间,几个月前或者几年前,当前  
2   getTime(data) 年月日时分秒  
3   getTimes(num1, num2) 年月日  
4   numAdd(num1, num2) 加法运算 千位符都可以计算  
5   numMulti(num1, num2) 乘法运算 千位符都可以计算  
6   numDivision(num1, num2) 除法运算 千位符都可以计算  num1除数，num2被除数  
7   getJson(url, header = 'application/json; charset=UTF-8') get请求 Promise写法     
8   postJson(url, data, header = "application/json; charset=UTF-8")  post请求 Promise写法  url地址 data值 header改变form也行   
9   DX(event) 大写金额   
10  numDivision(cname, cvalue, exdays) 设置cookie cname名字 cvalue值  
11  getCookie(cname) 获取cookie   
12  clearCookie(cname) 清除cookie   
13  clearCookieAll() 清除全部cookie   
14  setLocalStorage(name, val) 设置LocalStorage   name名字 val值   
15  getLocalStorage(cname) 获取LocalStorage   
16  clearLocalStorage(cname) 清除LocalStorage   
17  clearLocalStorageAll() 清除全部LocalStorage   
18  setSessionStorage(name, val) 设置sessionStorage  name名字 val值  
19  getSessionStorage(cname) 获取sessionStorage   
20  clearSessionStorage(cname) 清除sessionStorage   
21  clearSessionStorageAll() 清除全部sessionStorage   
22  postObj(a) 数组对象转化json字符串   
23  strturn(a) 字符串逆转   
24  GetFileExt(filepath) 取文件后缀名   
25  GetFileName(filepath) 取文件全名名称    
26  GetFileNameNoExt(filepath) 取文件名不带后缀    
27  housandDigits(a) 千位符   
28  hyreplace(data, original, originals, manyTimes = false) 替换或全部   data需要替换的数据 original替换内容 originals被替换内容   
29  disrupt(a) 打乱数组    
30  unique(a) 记录数组重复值和位置    
31  dt(a) 拖动 输入id   
32  numSub(num1, num2) 減法运算 千位符都可以计算  num1-num2   
33  duplicateRemovalSet(data,a=0) 数组去重排序 第二个值1的时候是降序   
34  arrayValueSort(data, value) 数组的属性排序大小  data数组 value属性  
35  deepCopy(Obj) 深拷贝   
36  hasClass(primary, cls)  primary原本的class ,cls是否有这个   
37  addClass(primary, cls)  primary:原本的class, class添加的class   
38  addClass(primary, cls)  primary:原本的class, class删除的class   
39  filterTree(arryData)  数组变成树形  arryData数组 父亲pid 自己id  
40   findId(arry, 1)  递归找某节点  arry树形，1查找id  
41  getStrBirthday(date) 根据生日获取年龄 可以时间戳 时间2018-01-02 ()  
42 validatemobile(mobile)  判断是否为手机号码 可以时间戳 时间2018-01-02   
43 timeFormats(1554973494,0,1) 	//type=0 2019年02月23 周六 18: 55 type=1  2019年02月23 周六 同年不显示年强制需要年yearType=1  
		
	
