### [GITHUB地址](https://github.com/443484208/pluginunit)| [插件地址](https://www.npmjs.com/package/pluginunit) 
[![pluginunit](https://img.shields.io/npm/v/pluginunit.svg)](https://npmjs.org/package/pluginunit)
[![NPM all downloads](https://img.shields.io/npm/dt/pluginunit.svg?style=flat-square)](https://npmjs.org/package/pluginunit)
[![NPM downloads](https://img.shields.io/npm/dm/pluginunit.svg?style=flat-square)](https://npmjs.org/package/pluginunit)
[![NPM downloads](https://img.shields.io/npm/dw/pluginunit.svg?style=flat-square)](https://npmjs.org/package/pluginunit)
>  说明 ，直接引用js文件的话script/index.js     
>  框架引用 npm install pluginunit --save    
>  分类api  [汇总](README.md) |[算法相关](README_algorithm.md) | [缓存操作](README_cache.md)  | [数据操作](README_data.md)  | [节点操作](README_dom.md)   | [时间操作](README_time.md)   | [正则操作](README_regular.md) 
*   fewCurrent(data) 时间:data=格式遵守new Date格式即可 可以时间戳。识别当前月或者几个月前 超过十二个月自动识别几年前
  
*   getTime(data) 时间:data=格式遵守new Date格式即可 可以时间戳。年月日时分秒  
   
*   getTimes(data) 时间:data=格式遵守new Date格式即可 可以时间戳。 年月日  
   
*   getStrBirthday(date) 根据生日获取年龄 可以时间戳 时间2018-01-02 ()  

*   timeFormats(data, type，force)  返回控制代表时间戳 //type=0 2019年02月23 周六 18: 55 type=1  2019年02月23 周六 同年不显示年强制需要年force=1timeFormats(1554973494,0,1) 
      
