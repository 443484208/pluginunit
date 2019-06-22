### [git地址](https://github.com/443484208/pluginunit) 
### [插件地址](https://www.npmjs.com/package/pluginunit)  
>  说明 ，直接引用js文件的话script/index.js     
>  框架引用 npm install pluginunit --save    
*   postObj(a) 数组对象转化json字符串   
  
*   strturn(a) 字符串逆转   
  
*   GetFileExt(filepath) 取文件后缀名   
  
*   GetFileName(filepath) 取文件全名名称    
   
*   GetFileNameNoExt(filepath) 取文件名不带后缀    
   
*   housandDigits(a) 千位符   
   
*   hyreplace(data, original, originals, manyTimes = false) 替换或全部   data需要替换的数据 original替换内容 originals被替换内容      
   
*   unique(a) 记录数组重复值和位置    
   
*   duplicateRemovalSet(data,a=0) 数组去重排序 第二个值1的时候是降序   
   
*   arrayValueSort(data, value) 数组的属性排序大小  data数组 value属性  
   
*   deepCopy(Obj) 深拷贝   
   
*   hasClass(primary, cls)  primary原本的class ,cls是否有这个 有class==true 没有返回false   
   
*   addClass(primary, cls)  primary:原本的class, class添加的class  true 成功添加
   
*   addClass(primary, cls)  primary:原本的class, class删除的class   
   
*   filterTree(arryData)  数组变成树形  arryData数组 父亲pid 自己id  
   
*   findId(arry, 1)  递归找某节点  arry树形，1查找id  
  
*   getUrlByName(name, url)获取url?参数值  name:需要获取的对应值名字 url:选填，不填就获取当前地址		
	
*   parseUrl(url)url？参数转化为对象  url:选填，不填就获取当前地址