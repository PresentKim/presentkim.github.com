var ElementControl=function(a,b,c,d){this.element=document.getElementById(a);this.fomatter=isFunction(c)?c:DefaultFomatter;this.filter=isFunction(d)?d:DefaultFilter;this.setData(b?b:0)};ElementControl.prototype.setData=function(a,b,c){this.data=a;b||(this.element.innerText=isFunction(c)?c(a):this.fomatter(a))};ElementControl.prototype.getData=function(){return this.data};ElementControl.prototype.getElement=function(){return this.element};
var DefaultFomatter=function(a){return a},CellFomatter=function(a){return 0==a?"":a},TimeFomatter=function(a){var b=function(a){for(a+="";2>a.length;a="0"+a);return a};return b(Math.floor(a%36E5/6E4))+":"+b(Math.floor(a%6E4/1E3))+":"+b(Math.floor(a%1E3/10))},DefaultFilter=function(a){return a};function isFunction(a){var b={};return a&&"[object Function]"===b.toString.call(a)}
var createElement=function(a,b){var c=document.createElement(a);b&&(void 0!=b.id&&c.setAttribute("id",b.id),void 0!=b["class"]&&c.setAttribute("class",b["class"]));return c};
