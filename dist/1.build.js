webpackJsonp([1],{353:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(367),o=i(383),s=i(127),r=s(n.a,o.a,!1,null,null,null);e.default=r.exports},355:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,t),this.x=e,this.y=i}return o(t,[{key:"add",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return new t(this.x,this.y).add(e);if(e instanceof t)this.x+=e.x,this.y+=e.y;else{if(isNaN(e))throw Error(e+" is not Vector2 or number");this.x+=e,this.y+=e}return this}},{key:"subtract",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return new t(this.x,this.y).subtract(e);if(e instanceof t)this.x-=e.x,this.y-=e.y;else{if(isNaN(e))throw Error(e+" is not Vector2 or number");this.x-=e,this.y-=e}return this}},{key:"multiply",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return new t(this.x,this.y).multiply(e);if(e instanceof t)this.x*=e.x,this.y*=e.y;else{if(isNaN(e))throw Error(e+" is not Vector2 or number");this.x*=e,this.y*=e}return this}},{key:"divide",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return new t(this.x,this.y).divide(e);if(e instanceof t)this.x/=e.x,this.y/=e.y;else{if(isNaN(e))throw Error(e+" is not Vector2 or number");this.x/=e,this.y/=e}return this}},{key:"set",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return new t(this.x,this.y);if(e instanceof t)this.x=e.x,this.y=e.y;else{if(isNaN(e))throw Error(e+" is not Vector2 or number");this.x=e,this.y=e}return this}}]),t}();e.a=s},358:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;n(this,t),this.h=e,this.s=i,this.l=o,this.a=s}return o(t,[{key:"toString",value:function(){return"hsla("+this.h+","+this.s+"%,"+this.l+"%,"+this.a+")"}}]),t}();e.a=s},359:function(t,e,i){"use strict";function n(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t=t*Math.PI/180),new a.a(-Math.sin(t),-Math.cos(t))}function o(t,e){return s(t,e)<t.radius+e.radius}function s(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function r(t,e){return 180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI}e.a=n,e.b=o,e.c=s,e.d=r;var a=i(355)},360:function(t,e,i){"use strict";e.a={data:function(){return{relativeSize:null}},methods:{updateRelativeSize:function(t){if(t){var e=this.relativeSize;if(this.updateRelativeSize(),this.relativeSize!=e){var i=this.relativeSize/e;for(var n in t)t[n].multiply(i)}}else{var o=this.$refs.canvas;this.relativeSize=Math.sqrt(o.width*o.height,2)/100}return this.relativeSize},getRelativeSize:function(t){return t*this.relativeSize},fitCanvasSize:function(){var t=this.$refs.canvas,e=this.$store.state.elements;t.height=e.footer.$el.getBoundingClientRect().top-e.toolbar.$el.clientHeight,t.width=e.app.$el.clientWidth}}}},361:function(t,e,i){"use strict";function n(){return Math.random()<.5?-1:1}function o(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return parseFloat((Math.random()*(e-t)+t).toFixed(i))}e.a=n,e.b=o},367:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=i(355),a=i(358),h=i(361),u=i(359),c=i(360),l=function(t){function e(t,i,s,r,a,h){n(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return u.size=s,u.velocityX=r,u.velocityY=a,u.color=h,u}return s(e,t),e}(r.a);e.a={mixins:[c.a],head:{title:{inner:"Canvas",complement:"Bouncing Ball"}},data:function(){return{dots:[]}},methods:{registerEvents:function(t){t.$store.state.onAnimationFrame=t.onUpdate;var e=t.$refs.canvas,i=this.dots[this.dots.length-1];document.documentElement.addEventListener("mousedown",function(t){var n=e.getBoundingClientRect();i.x=t.clientX-n.left,i.y=t.clientY-n.top},!1),document.documentElement.addEventListener("mousemove",function(t){if(i.x!=Number.MAX_SAFE_INTEGER){var n=e.getBoundingClientRect();i.x=t.clientX-n.left,i.y=t.clientY-n.top}},!1),document.documentElement.addEventListener("mouseup",function(t){i.x=Number.MAX_SAFE_INTEGER},!1),document.documentElement.addEventListener("touchmove",function(t){var n=e.getBoundingClientRect();i.x=t.touches[0].clientX-n.left,i.y=t.touches[0].clientY-n.top},!1),document.documentElement.addEventListener("touchend",function(t){i.x=Number.MAX_SAFE_INTEGER},!1)},generate:function(){this.updateRelativeSize();var t=this.$refs.canvas;for(this.dots=[];this.dots.length<50;){var e=new l;e.size=h.b(1,2,7),e.x=h.b(0,t.width),e.y=h.b(0,t.height),e.velocityX=h.b(.1,.5,7)*h.a(),e.velocityY=h.b(.1,.5,7)*h.a(),e.color=new a.a(h.b(0,360)),this.dots.push(e)}this.dots.push(new l(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,3,0,0,new a.a(0)))},move:function(){var t=this.$refs.canvas,e=this.dots[this.dots.length-1];for(var i in this.dots)this.dots[i]!=e&&(this.dots[i].x+=this.dots[i].velocityX*this.relativeSize,this.dots[i].y+=this.dots[i].velocityY*this.relativeSize,(this.dots[i].x<0||this.dots[i].x>t.width||this.dots[i].y<0||this.dots[i].y>t.height)&&(this.dots[i].x=h.b(0,t.width),this.dots[i].y=h.b(0,t.height),this.dots[i].velocityX=h.b(.1,.5,7)*(h.b(0,1)?1:-1),this.dots[i].velocityY=h.b(.1,.5,7)*(h.b(0,1)?1:-1)));e.color.h=++e.color.h%361},render:function(){this.updateRelativeSize(this.dots);var t=this.$refs.canvas,e=t.getContext("2d");for(var i in this.dots){var n=[];for(var o in this.dots)if(i!=o)for(var s={index:o,dist:Object(u.c)(this.dots[i],this.dots[o])},r=0;r<2;++r)if(!n[r]||n[r].dist>s.dist){n[r]=s;break}e.beginPath();for(var r=0;r<2;++r){var h=this.dots[n[r].index];e.moveTo(this.dots[i].x,this.dots[i].y),e.shadowBlur=1*this.relativeSize,e.shadowColor=new a.a((this.dots[i].color.h+h.color.h)/2).toString(),e.lineWidth=.2*this.relativeSize,e.strokeStyle=e.shadowColor,e.lineTo(h.x,h.y),e.stroke()}e.closePath()}for(var i in this.dots)e.beginPath(),e.fillStyle=this.dots[i].color.toString(),e.shadowBlur=2*this.relativeSize,e.shadowColor=e.fillStyle,e.arc(this.dots[i].x,this.dots[i].y,this.getRelativeSize(this.dots[i].size),0,2*Math.PI,!0),e.fill(),e.closePath()},onUpdate:function(){this.fitCanvasSize(),this.move(),this.render()}},mounted:function(){this.fitCanvasSize(),this.generate(),this.registerEvents(this)}}},383:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",[i("canvas",{ref:"canvas"})])},o=[],s={render:n,staticRenderFns:o};e.a=s}});
//# sourceMappingURL=1.build.js.map