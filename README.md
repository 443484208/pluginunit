### [GITHUB地址](https://github.com/443484208/pluginunit)| [插件地址](https://www.npmjs.com/package/pluginunit) 
[![pluginunit](https://img.shields.io/npm/v/pluginunit.svg)](https://npmjs.org/package/pluginunit)
[![NPM all downloads](https://img.shields.io/npm/dt/pluginunit.svg?style=flat-square)](https://npmjs.org/package/pluginunit)
[![NPM downloads](https://img.shields.io/npm/dm/pluginunit.svg?style=flat-square)](https://npmjs.org/package/pluginunit)
[![NPM downloads](https://img.shields.io/npm/dw/pluginunit.svg?style=flat-square)](https://npmjs.org/package/pluginunit)
>  说明 ，直接引用js文件的话script/index.js     
>  框架引用 npm install pluginunit --save    
>  分类api  [汇总](README.md) |[算法相关](README_algorithm.md) | [缓存操作](README_cache.md)  | [数据操作](README_data.md)  | [节点操作](README_dom.md)   | [时间操作](README_time.md) 
*   fewCurrent(data) 时间:data=格式遵守new Date格式即可 可以时间戳。识别当前月或者几个月前 超过十二个月自动识别几年前
  
*   getTime(data) 时间:data=格式遵守new Date格式即可 可以时间戳。年月日时分秒  
   
*   getTimes(data) 时间:data=格式遵守new Date格式即可 可以时间戳。 年月日  
   
*   numAdd(num1, num2) 加法运算 千位符都可以计算  
  
*   numMulti(num1, num2) 乘法运算 千位符都可以计算  
   
*   numDivision(num1, num2) 除法运算 千位符都可以计算  num1除数，num2被除数  
  
*   getJson(url, header = 'application/json; charset=UTF-8') get请求 Promise写法     
   
*   postJson(url, data, header = "application/json; charset=UTF-8")  post请求 Promise写法  url地址 data值 header改变form也行   
  
*   DX(event) 大写金额   
   
*   setCookie(cname, cvalue, exdays) 设置cookie cname名字 cvalue值  
   
*   getCookie(cname) 获取cookie   
   
*   clearCookie(cname) 清除cookie   
   
*   clearCookieAll() 清除全部cookie   
  
*   setLocalStorage(name, val) 设置LocalStorage   name名字 val值   
   
*   getLocalStorage(cname) 获取LocalStorage   
   
*   clearLocalStorage(cname) 清除LocalStorage   
   
*   clearLocalStorageAll() 清除全部LocalStorage   
   
*   setSessionStorage(name, val) 设置sessionStorage  name名字 val值  
   
*   getSessionStorage(cname) 获取sessionStorage   
   
*   clearSessionStorage(cname) 清除sessionStorage   
   
*   clearSessionStorageAll() 清除全部sessionStorage   
  
*   postObj(a) 数组对象转化json字符串   
  
*   strturn(a) 字符串逆转   
  
*   GetFileExt(filepath) 取文件后缀名   
  
*   GetFileName(filepath) 取文件全名名称    
   
*   GetFileNameNoExt(filepath) 取文件名不带后缀    
   
*   housandDigits(a) 千位符   
   
*   hyreplace(data, original, originals, manyTimes = false) 替换或全部   data需要替换的数据 original替换内容 originals被替换内容      
   
*   unique(a) 记录数组重复值和位置    
   
*   dt(drag) 拖动 输入id   
   
*   numSub(num1, num2) 減法运算 千位符都可以计算  num1-num2   
   
*   duplicateRemovalSet(data,a=0) 数组去重排序 第二个值1的时候是降序   
   
*   arrayValueSort(data, value) 数组的属性排序大小  data数组 value属性  
   
*   deepCopy(Obj) 深拷贝   
   
*   hasClass(primary, cls)  primary原本的class ,cls是否有这个 有class==true 没有返回false   
   
*   addClass(primary, cls)  primary:原本的class, class添加的class  true 成功添加
   
*   addClass(primary, cls)  primary:原本的class, class删除的class   
   
*   filterTree(arryData)  数组变成树形  arryData数组 父亲pid 自己id  
   
*   findId(arry, 1)  递归找某节点  arry树形，1查找id  
  
*   getStrBirthday(date) 根据生日获取年龄 可以时间戳 时间2018-01-02 ()  
   
*   validatemobile(mobile)  判断是否为手机号码 
   
*   timeFormats(data, type，force)  返回控制代表时间戳 //type=0 2019年02月23 周六 18: 55 type=1  2019年02月23 周六 同年不显示年强制需要年force=1timeFormats(1554973494,0,1)  
   
*   slideTop(id, time = 0)滑动到指定id元素 id:元素id time滚动时间 默认没有停顿

*   scrollTop(number = 0, time)滑动距离 基于body滚动 number:滚动距离 time滚动时间
   
*   getUrlByName(name, url)获取url?参数值  name:需要获取的对应值名字 url:选填，不填就获取当前地址		
	
*   parseUrl(url)url？参数转化为对象  url:选填，不填就获取当前地址