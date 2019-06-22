### [git地址](https://github.com/443484208/pluginunit) 
### [插件地址](https://www.npmjs.com/package/pluginunit)  
>  说明 ，直接引用js文件的话script/index.js     
>  框架引用 npm install pluginunit --save    
*   fewCurrent(data) 时间:data=格式遵守new Date格式即可 可以时间戳。识别当前月或者几个月前 超过十二个月自动识别几年前
  
*   getTime(data) 时间:data=格式遵守new Date格式即可 可以时间戳。年月日时分秒  
   
*   getTimes(data) 时间:data=格式遵守new Date格式即可 可以时间戳。 年月日  
   
*   getStrBirthday(date) 根据生日获取年龄 可以时间戳 时间2018-01-02 ()  

*   timeFormats(data, type，force)  返回控制代表时间戳 //type=0 2019年02月23 周六 18: 55 type=1  2019年02月23 周六 同年不显示年强制需要年force=1timeFormats(1554973494,0,1) 
      
