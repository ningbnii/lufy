!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function r(){LGlobal.stageScale=LStageScaleMode.SHOW_ALL,u=new f.ParentBox,addChild(u),u.x=60,u.y=60,i=new f.ParentBox,addChild(i),i.x=170,i.y=60,c=new LSprite,u.addChild(c),c.graphics.drawArc(1,"#000000",[0,0,20,0,2*Math.PI],!0,"#000000"),c.addEventListener(LMouseEvent.MOUSE_DOWN,o)}function o(t){c.getParentByConstructor(f.ParentBox).objectIndex==u.objectIndex?i.addChild(c):u.addChild(c)}var u,i,c,f=n(18),s=document.body.clientWidth,a=document.body.clientHeight;LInit(10,"mylegend",s,a,r)},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(3),o=n(2),u=n(9),i="prototype",c=function(t,e,n){var f,s,a,l=t&c.F,p=t&c.G,d=t&c.S,y=t&c.P,h=t&c.B,b=t&c.W,v=p?o:o[e]||(o[e]={}),g=p?r:d?r[e]:(r[e]||{})[i];p&&(n=e);for(f in n)s=!l&&g&&f in g,s&&f in v||(a=s?g[f]:n[f],v[f]=p&&"function"!=typeof g[f]?n[f]:h&&s?u(a,r):b&&g[f]==a?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[i]=t[i],e}(a):y&&"function"==typeof a?u(Function.call,a):a,y&&((v[i]||(v[i]={}))[f]=a))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(35),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(31);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){t.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(15)("wks"),o=n(16),u=n(3).Symbol;t.exports=function(t){return r[t]||(r[t]=u&&u[t]||(u||o)("Symbol."+t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ParentBox=void 0;var o=n(20),u=r(o),i=n(23),c=r(i),f=n(25),s=r(f),a=n(24),l=r(a),p=function(t){function e(){(0,c.default)(this,e);var t=(0,s.default)(this,(e.__proto__||(0,u.default)(e)).call(this)),n=t;return n.graphics.drawRect(1,"#000000",[-50,-50,100,100]),t}return(0,l.default)(e,t),e}(LSprite);e.ParentBox=p},function(t,e,n){t.exports={default:n(27),__esModule:!0}},function(t,e,n){t.exports={default:n(28),__esModule:!0}},function(t,e,n){t.exports={default:n(29),__esModule:!0}},function(t,e,n){t.exports={default:n(30),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";var r=n(19).default,o=n(21).default;e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=r(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o?o(t,e):t.__proto__=e)},e.__esModule=!0},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(26),u=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,u.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";var r=n(22).default;e.default=function(t){return t&&t.constructor===r?"symbol":typeof t},e.__esModule=!0},function(t,e,n){var r=n(1);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(44),t.exports=n(2).Object.getPrototypeOf},function(t,e,n){n(45),t.exports=n(2).Object.setPrototypeOf},function(t,e,n){n(47),n(46),t.exports=n(2).Symbol},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(1);t.exports=function(t){var e=r.getKeys(t),n=r.getSymbols;if(n)for(var o,u=n(t),i=r.isEnum,c=0;u.length>c;)i.call(t,o=u[c++])&&e.push(o);return e}},function(t,e,n){var r=n(6),o=n(1).getNames,u={}.toString,i="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.get=function(t){return i&&"[object Window]"==u.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(1),o=n(14);t.exports=n(11)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(8);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1),o=n(6);t.exports=function(t,e){for(var n,u=o(t),i=r.getKeys(u),c=i.length,f=0;c>f;)if(u[n=i[f++]]===e)return n}},function(t,e){t.exports=!0},function(t,e,n){var r=n(4),o=n(2),u=n(5);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",i)}},function(t,e,n){t.exports=n(34)},function(t,e,n){var r=n(1).getDesc,o=n(13),u=n(7),i=function(t,e){if(u(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(9)(Function.call,r(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(1).setDesc,o=n(12),u=n(17)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(43);n(39)("getPrototypeOf",function(t){return function(e){return t(r(e))}})},function(t,e,n){var r=n(4);r(r.S,"Object",{setPrototypeOf:n(41).set})},function(t,e){},function(t,e,n){"use strict";var r=n(1),o=n(3),u=n(12),i=n(11),c=n(4),f=n(40),s=n(5),a=n(15),l=n(42),p=n(16),d=n(17),y=n(37),h=n(33),b=n(32),v=n(36),g=n(7),_=n(6),x=n(14),m=r.getDesc,S=r.setDesc,O=r.create,w=h.get,P=o.Symbol,j=o.JSON,M=j&&j.stringify,E=!1,D=d("_hidden"),N=r.isEnum,C=a("symbol-registry"),F=a("symbols"),L="function"==typeof P,T=Object.prototype,B=i&&s(function(){return 7!=O(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=m(T,e);r&&delete T[e],S(t,e,n),r&&t!==T&&S(T,e,r)}:S,I=function(t){var e=F[t]=O(P.prototype);return e._k=t,i&&E&&B(T,t,{configurable:!0,set:function(e){u(this,D)&&u(this[D],t)&&(this[D][t]=!1),B(this,t,x(1,e))}}),e},W=function(t){return"symbol"==typeof t},k=function(t,e,n){return n&&u(F,e)?(n.enumerable?(u(t,D)&&t[D][e]&&(t[D][e]=!1),n=O(n,{enumerable:x(0,!1)})):(u(t,D)||S(t,D,x(1,{})),t[D][e]=!0),B(t,e,n)):S(t,e,n)},A=function(t,e){g(t);for(var n,r=b(e=_(e)),o=0,u=r.length;u>o;)k(t,n=r[o++],e[n]);return t},G=function(t,e){return void 0===e?O(t):A(O(t),e)},J=function(t){var e=N.call(this,t);return!(e||!u(this,t)||!u(F,t)||u(this,D)&&this[D][t])||e},K=function(t,e){var n=m(t=_(t),e);return!n||!u(F,e)||u(t,D)&&t[D][e]||(n.enumerable=!0),n},H=function(t){for(var e,n=w(_(t)),r=[],o=0;n.length>o;)u(F,e=n[o++])||e==D||r.push(e);return r},R=function(t){for(var e,n=w(_(t)),r=[],o=0;n.length>o;)u(F,e=n[o++])&&r.push(F[e]);return r},z=function(t){if(void 0!==t&&!W(t)){for(var e,n,r=[t],o=1,u=arguments;u.length>o;)r.push(u[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&v(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,M.apply(j,r)}},U=s(function(){var t=P();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))});L||(P=function(){if(W(this))throw TypeError("Symbol is not a constructor");return I(p(arguments.length>0?arguments[0]:void 0))},f(P.prototype,"toString",function(){return this._k}),W=function(t){return t instanceof P},r.create=G,r.isEnum=J,r.getDesc=K,r.setDesc=k,r.setDescs=A,r.getNames=h.get=H,r.getSymbols=R,i&&!n(38)&&f(T,"propertyIsEnumerable",J,!0));var q={for:function(t){return u(C,t+="")?C[t]:C[t]=P(t)},keyFor:function(t){return y(C,t)},useSetter:function(){E=!0},useSimple:function(){E=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=d(t);q[t]=L?e:I(e)}),E=!0,c(c.G+c.W,{Symbol:P}),c(c.S,"Symbol",q),c(c.S+c.F*!L,"Object",{create:G,defineProperty:k,defineProperties:A,getOwnPropertyDescriptor:K,getOwnPropertyNames:H,getOwnPropertySymbols:R}),j&&c(c.S+c.F*(!L||U),"JSON",{stringify:z}),l(P,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)}]);
//# sourceMappingURL=app.86fce7a35b2f7a4e6de2.js.map