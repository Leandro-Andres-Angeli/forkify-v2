function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.7865d230.js","hfd23":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,d,p,f={},h="object"==typeof document&&document.all,v=(p={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;f=p.IS_HTMLDDA?function(e){return"function"==typeof e||e===v}:function(e){return"function"==typeof e};var g,m={},y={};g=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var b=Function.prototype,_=b.call,w=g&&b.bind.bind(_,_);y=g?w:function(e){return function(){return _.apply(e,arguments)}};var k,E,S;S=function(e){return null==e};var O=TypeError;E=function(e){if(S(e))throw O("Can't call method on "+e);return e};var j=Object;k=function(e){return j(E(e))};var L=y({}.hasOwnProperty);m=Object.hasOwn||function(e,t){return L(k(e),t)};var M,F=Function.prototype,x=c&&Object.getOwnPropertyDescriptor,$=m(F,"name"),P={EXISTS:$,PROPER:$&&"something"===function(){}.name,CONFIGURABLE:$&&(!c||c&&x(F,"name").configurable)}.CONFIGURABLE,T={},I={},H=Object.defineProperty;M=function(e,t){try{H(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var N=a["__core-js_shared__"]||M("__core-js_shared__",{});I=N;var q=y(Function.toString);f(I.inspectSource)||(I.inspectSource=function(e){return q(e)}),T=I.inspectSource;var A,C,R=a.WeakMap;C=f(R)&&/native code/.test(String(R));var D={},z=p.all;D=p.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:f(e)||e===z}:function(e){return"object"==typeof e?null!==e:f(e)};var W,U,G,V={},B=a.document,J=D(B)&&D(B.createElement);G=function(e){return J?B.createElement(e):{}},U=!c&&!u((function(){return 7!=Object.defineProperty(G("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Y,K=String,X=TypeError;Y=function(e){if(D(e))return e;throw X(K(e)+" is not an object")};var Z,ee,te={},ne=Function.prototype.call;te=g?ne.bind(ne):function(){return ne.apply(ne,arguments)};var re,ie={},oe=function(e){return f(e)?e:void 0};re=function(e,t){return arguments.length<2?oe(a[e]):a[e]&&a[e][t]};var ae={};ae=y({}.isPrototypeOf);var se,ce,ue,le={};le=re("navigator","userAgent")||"";var de,pe,fe=a.process,he=a.Deno,ve=fe&&fe.versions||he&&he.version,ge=ve&&ve.v8;ge&&(pe=(de=ge.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!pe&&le&&(!(de=le.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=le.match(/Chrome\/(\d+)/))&&(pe=+de[1]),ue=pe,ce=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})),se=ce&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;ie=se?function(e){return"symbol"==typeof e}:function(e){var t=re("Symbol");return f(t)&&ae(t.prototype,me(e))};var ye,be,_e,we=String;_e=function(e){try{return we(e)}catch(e){return"Object"}};var ke=TypeError;be=function(e){if(f(e))return e;throw ke(_e(e)+" is not a function")},ye=function(e,t){var n=e[t];return S(n)?void 0:be(n)};var Ee,Se=TypeError;Ee=function(e,t){var n,r;if("string"===t&&f(n=e.toString)&&!D(r=te(n,e)))return r;if(f(n=e.valueOf)&&!D(r=te(n,e)))return r;if("string"!==t&&f(n=e.toString)&&!D(r=te(n,e)))return r;throw Se("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var je,Le=0,Me=Math.random(),Fe=y(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Fe(++Le+Me,36)};var xe=Oe("wks"),$e=a.Symbol,Pe=$e&&$e.for,Te=se?$e:$e&&$e.withoutSetter||je,Ie=TypeError,He=function(e){if(!m(xe,e)||!ce&&"string"!=typeof xe[e]){var t="Symbol."+e;ce&&m($e,e)?xe[e]=$e[e]:xe[e]=se&&Pe?Pe(t):Te(t)}return xe[e]}("toPrimitive");ee=function(e,t){if(!D(e)||ie(e))return e;var n,r=ye(e,He);if(r){if(void 0===t&&(t="default"),n=te(r,e,t),!D(n)||ie(n))return n;throw Ie("Can't convert object to primitive value")}return void 0===t&&(t="number"),Ee(e,t)},Z=function(e){var t=ee(e,"string");return ie(t)?t:t+""};var Ne=TypeError,qe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor;W=c?Q?function(e,t,n){if(Y(e),t=Z(t),Y(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ae(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return qe(e,t,n)}:qe:function(e,t,n){if(Y(e),t=Z(t),Y(n),U)try{return qe(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ne("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Ce;Ce=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},V=c?function(e,t,n){return W(e,t,Ce(1,n))}:function(e,t,n){return e[t]=n,e};var Re,De=Oe("keys");Re=function(e){return De[e]||(De[e]=je(e))};var ze={};ze={};var We,Ue,Ge,Ve=a.TypeError,Be=a.WeakMap;if(C||I.state){var Je=I.state||(I.state=new Be);Je.get=Je.get,Je.has=Je.has,Je.set=Je.set,We=function(e,t){if(Je.has(e))throw Ve("Object already initialized");return t.facade=e,Je.set(e,t),t},Ue=function(e){return Je.get(e)||{}},Ge=function(e){return Je.has(e)}}else{var Qe=Re("state");ze[Qe]=!0,We=function(e,t){if(m(e,Qe))throw Ve("Object already initialized");return t.facade=e,V(e,Qe,t),t},Ue=function(e){return m(e,Qe)?e[Qe]:{}},Ge=function(e){return m(e,Qe)}}var Ye=(A={set:We,get:Ue,has:Ge,enforce:function(e){return Ge(e)?Ue(e):We(e,{})},getterFor:function(e){return function(t){var n;if(!D(t)||(n=Ue(t)).type!==e)throw Ve("Incompatible receiver, "+e+" required");return n}}}).enforce,Ke=A.get,Xe=Object.defineProperty,Ze=c&&!u((function(){return 8!==Xe((function(){}),"length",{value:8}).length})),et=String(String).split("String"),tt=d=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!m(e,"name")||P&&e.name!==t)&&(c?Xe(e,"name",{value:t,configurable:!0}):e.name=t),Ze&&n&&m(n,"arity")&&e.length!==n.arity&&Xe(e,"length",{value:n.arity});try{n&&m(n,"constructor")&&n.constructor?c&&Xe(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Ye(e);return m(r,"source")||(r.source=et.join("string"==typeof t?t:"")),e};Function.prototype.toString=tt((function(){return f(this)&&Ke(this).source||T(this)}),"toString"),l=function(e,t,n){return n.get&&d(n.get,t,{getter:!0}),n.set&&d(n.set,t,{setter:!0}),W(e,t,n)};var nt;nt=function(){var e=Y(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var rt=a.RegExp,it=rt.prototype;c&&u((function(){var e=!0;try{rt(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(it,"flags").get.call(t)!==r||n!==r}))&&l(it,"flags",{configurable:!0,get:nt});var ot,at,st,ct={}.propertyIsEnumerable,ut=Object.getOwnPropertyDescriptor,lt=ut&&!ct.call({1:2},1);st=lt?function(e){var t=ut(this,e);return!!t&&t.enumerable}:ct;var dt,pt,ft={},ht=y({}.toString),vt=y("".slice);pt=function(e){return vt(ht(e),8,-1)};var gt=Object,mt=y("".split);ft=u((function(){return!gt("z").propertyIsEnumerable(0)}))?function(e){return"String"==pt(e)?mt(e,""):gt(e)}:gt,dt=function(e){return ft(E(e))};var yt,bt=Object.getOwnPropertyDescriptor,_t=at=c?bt:function(e,t){if(e=dt(e),t=Z(t),U)try{return bt(e,t)}catch(e){}if(m(e,t))return Ce(!te(st,e,t),e[t])};yt=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(f(n)&&d(n,o,r),r.global)i?e[t]=n:M(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:W(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var wt,kt,Et,St,Ot,jt={},Lt={},Mt=Math.ceil,Ft=Math.floor;Lt=Math.trunc||function(e){var t=+e;return(t>0?Ft:Mt)(t)},Ot=function(e){var t=+e;return t!=t||0===t?0:Lt(t)};var xt=Math.max,$t=Math.min;St=function(e,t){var n=Ot(e);return n<0?xt(n+t,0):$t(n,t)};var Pt,Tt,It=Math.min;Tt=function(e){return e>0?It(Ot(e),9007199254740991):0},Pt=function(e){return Tt(e.length)};var Ht=function(e){return function(t,n,r){var i,o=dt(t),a=Pt(o),s=St(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Nt={includes:Ht(!0),indexOf:Ht(!1)}.indexOf,qt=y([].push);Et=function(e,t){var n,r=dt(e),i=0,o=[];for(n in r)!m(ze,n)&&m(r,n)&&qt(o,n);for(;t.length>i;)m(r,n=t[i++])&&(~Nt(o,n)||qt(o,n));return o};var At,Ct=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");kt=Object.getOwnPropertyNames||function(e){return Et(e,Ct)},At=Object.getOwnPropertySymbols;var Rt=y([].concat);jt=re("Reflect","ownKeys")||function(e){var t=kt(Y(e));return At?Rt(t,At(e)):t},wt=function(e,t,n){for(var r=jt(t),i=W,o=at,a=0;a<r.length;a++){var s=r[a];m(e,s)||n&&m(n,s)||i(e,s,o(t,s))}};var Dt={},zt=/#|\.prototype\./,Wt=function(e,t){var n=Gt[Ut(e)];return n==Bt||n!=Vt&&(f(t)?u(t):!!t)},Ut=Wt.normalize=function(e){return String(e).replace(zt,".").toLowerCase()},Gt=Wt.data={},Vt=Wt.NATIVE="N",Bt=Wt.POLYFILL="P";Dt=Wt,ot=function(e,t){var n,r,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||M(c,{}):(a[c]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(s=_t(n,r))&&s.value:n[r],!Dt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;wt(o,i)}(e.sham||i&&i.sham)&&V(o,"sham",!0),yt(n,r,o,e)}};var Jt,Qt={},Yt=Function.prototype,Kt=Yt.apply,Xt=Yt.call;Qt="object"==typeof Reflect&&Reflect.apply||(g?Xt.bind(Kt):function(){return Xt.apply(Kt,arguments)});var Zt,en,tn=(en=function(e){if("Function"===pt(e))return y(e)})(en.bind);Zt=function(e,t){return be(e),void 0===t?e:g?tn(e,t):function(){return e.apply(t,arguments)}};var nn={};nn=re("document","documentElement");var rn={};rn=y([].slice);var on,an=TypeError;on=function(e,t){if(e<t)throw an("Not enough arguments");return e};var sn;sn=/(?:ipad|iphone|ipod).*applewebkit/i.test(le);var cn;cn="process"==pt(a.process);var un,ln,dn,pn,fn=a.setImmediate,hn=a.clearImmediate,vn=a.process,gn=a.Dispatch,mn=a.Function,yn=a.MessageChannel,bn=a.String,_n=0,wn={};try{un=a.location}catch(e){}var kn=function(e){if(m(wn,e)){var t=wn[e];delete wn[e],t()}},En=function(e){return function(){kn(e)}},Sn=function(e){kn(e.data)},On=function(e){a.postMessage(bn(e),un.protocol+"//"+un.host)};fn&&hn||(fn=function(e){on(arguments.length,1);var t=f(e)?e:mn(e),n=rn(arguments,1);return wn[++_n]=function(){Qt(t,void 0,n)},ln(_n),_n},hn=function(e){delete wn[e]},cn?ln=function(e){vn.nextTick(En(e))}:gn&&gn.now?ln=function(e){gn.now(En(e))}:yn&&!sn?(pn=(dn=new yn).port2,dn.port1.onmessage=Sn,ln=Zt(pn.postMessage,pn)):a.addEventListener&&f(a.postMessage)&&!a.importScripts&&un&&"file:"!==un.protocol&&!u(On)?(ln=On,a.addEventListener("message",Sn,!1)):ln="onreadystatechange"in G("script")?function(e){nn.appendChild(G("script")).onreadystatechange=function(){nn.removeChild(this),kn(e)}}:function(e){setTimeout(En(e),0)});var jn=(Jt={set:fn,clear:hn}).clear;ot({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==jn},{clearImmediate:jn});var Ln=Jt.set;ot({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==Ln},{setImmediate:Ln});var Mn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),s=new F(r||[]);return i(a,"_invoke",{value:O(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,n){var r=p;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return $()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?h:"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:$}}function $(){return{value:t,done:!0}}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=x,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Mn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Mn:Function("r","regeneratorRuntime = r")(Mn)}const Fn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message}  error code : ${i.status}`);return o}catch(e){throw e}var n},xn=(e,t)=>{try{return!!e[e.findIndex((e=>e.id===t?.slice(0,1)[0].id))-1]}catch(e){return!1}},$n=(e,t)=>{try{return!!e[e.findIndex((e=>e.id===t?.slice(-1)[0].id))+1]}catch(e){return!1}},Pn=e=>{const[t,n]=e.split(" ");return+n},Tn={recipe:{},search:{query:"",resultsPerPage:10,page:1,results:[]}},In=e=>{const{recipe:t}=e.data,{id:n,title:r,publisher:i,source_url:o,image_url:a,servings:s,cooking_time:c,ingredients:u}=t;return{id:n,title:r,publisher:i,sourceUrl:o,image:a,servings:s,cookingTime:c,ingredients:u,...t.key&&{key:t.key}}},Hn=function(e=Tn.search.page){const t=(e-1)*Tn.search.resultsPerPage,n=e*Tn.search.resultsPerPage,r=Tn.search.results.slice(t,n);return Tn.search.prev=xn(Tn.search.results,r),Tn.search.next=$n(Tn.search.results,r),r};const Nn=function(){localStorage.setItem("bookmarks",JSON.stringify(Tn.bookmarks))},qn=function(e){Tn.bookmarks=[...Tn.bookmarks,e],Tn.recipe.id===e.id&&(Tn.recipe.bookmarked=!Tn.recipe.bookmarked),Nn()},An=async function(e){try{const t=Object.entries(e).filter((([e,t])=>isFinite(e.split("-")[1]))),n=Object.values(t).map((([e,t])=>function(e){const t=e.split(",");if(t.length<3)throw new Error("wrong input in some of the fields");const[n,r,i]=t.map((e=>e.trim()));return{quantity:Cn(n),unit:r||void 0,description:i||void 0}}(t))),r=Object.entries(e).filter((([e,t])=>!e.includes("ingredient"))).reduce(((e,[t,n])=>({...e,[t]:Cn(n)})),{}),{title:i,publisher:o,sourceUrl:a,image:s,servings:c,cookingTime:u}=r,l={title:i,publisher:o,source_url:a,image_url:s,servings:c,cooking_time:u,ingredients:n},d=await Fn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=23382aff-00f5-4f33-91fa-44722454b147",l);Tn.recipe=In(d),qn(Tn.recipe)}catch(e){throw e}};const Cn=e=>isFinite(+e)&&0!=+e?+e:e;var Rn,Dn,zn,Wn;Rn=new URL(o("27Lyk").resolve("hfd23"),import.meta.url).toString(),Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(zn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Wn=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(zn(this.denominator)){var e=Wn(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}zn(this.numerator)&&(e=Wn(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},Dn=Fraction;class Un{_data;_parentEl;constructor(){this._data}renderSpinner=function(){const e=`<div class="spinner">\n          <svg>\n            <use href="${n(Rn)}#icon-loader"></use>\n          </svg>\n        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};_clear(){this._parentElement.innerHTML=""}renderError(e=this._errorMessage){const t=` <div class="error">\n    <div>\n      <svg>\n        <use href="${n(Rn)}#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n   \n  </div>`;return this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}render(e,t=!1){if(!e||Array.isArray(e)&&0===e.length&&!t)return this.renderError();this._data=e,this._clear(),this._parentElement.dataset.id=this._data.id,this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())}renderMessage(e=this._message){const t=` <div class="message">\n        <div>\n          <svg>\n            <use href="${n(Rn)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n       \n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const t=this._generateMarkup(this._data),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{!e.isEqualNode(i[t])&&""!==e.firstChild?.nodeValue.trim()&&i[t].firstChild&&(i[t].firstChild.textContent=e.firstChild.nodeValue),e.isEqualNode(i[t])||[...e.attributes].forEach((({name:e,value:n})=>i[t].setAttribute(e,n)))}))}}var Gn=new class extends Un{_errorMessage="We could not find selected recipe.Please try another one!";_message;constructor(){super(),this._parentElement=document.querySelector(".recipe")}addHandleRender(e){["load","hashchange"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServing(e){this._parentElement.addEventListener("click",(t=>{t.target.closest("button")&&e(+t.target.closest("button").dataset.updateTo)}))}viewBookmarkRecipe(e){this._parentElement.addEventListener("click",(t=>{if(t.target.closest(".btn--round"))return e(this._data)}))}_generateMarkup(){return`\n\n\n  \n<figure class="recipe__fig">\n  <img src=${this._data.image} alt=${this._data.title} class="recipe__img" />\n  <h1 class="recipe__title">\n    <span>${this._data.title}</span>\n  </h1>\n</figure>\n\n<div class="recipe__details">\n  <div class="recipe__info">\n    <svg class="recipe__info-icon">\n      <use href="${n(Rn)}#icon-clock"></use>\n    </svg>\n    <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n    <span class="recipe__info-text">minutes</span>\n  </div>\n  <div class="recipe__info">\n  \n    <svg class="recipe__info-icon">\n      <use href="${n(Rn)}#icon-users"></use>\n    </svg>\n    <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n    <span class="recipe__info-text">servings</span>\n\n    <div class="recipe__info-buttons">\n      <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n        <svg>\n          <use href="${n(Rn)}#icon-minus-circle"></use>\n        </svg>\n      </button>\n      <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n        <svg>\n          <use href="${n(Rn)}#icon-plus-circle"></use>\n        </svg>\n      </button>\n    </div>\n  </div>\n\n    \n  <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n    <svg>\n      <use href="${n(Rn)}#icon-users"></use>\n    </svg>\n  </div>\n\n  <button class="btn--round btn--bookmark">\n    <svg class="">\n      <use href="${n(Rn)}#icon-bookmark${this._data.bookmarked?"-fill":""} "></use>\n    </svg>\n  </button>\n</div>\n\n<div class="recipe__ingredients">\n  <h2 class="heading--2">Recipe ingredients</h2>\n  <ul class="recipe__ingredient-list">\n${this._data.ingredients.map((({quantity:e,description:t,unit:r})=>`<li class="recipe__ingredient">\n<svg class="recipe__icon">\n  <use \n  href=${n(Rn)}#icon-check\n  ></use>\n</svg>\n${e&&r?` <div class="recipe__quantity">${new Dn(Math.round(2*e)/2).toString()} <span class="recipe__unit">${r}</span> </div>`:""}\n<div class="recipe__description">\n  ${t}\n  \n  \n  \n</div>\n</li>`)).join("")}    \n\n\n\n\n  </ul>\n</div>\n\n<div class="recipe__directions">\n  <h2 class="heading--2">How to cook it</h2>\n  <p class="recipe__directions-text">\n    This recipe was carefully designed and tested by\n    <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n    directions at their website.\n  </p>\n  <a\n    class="btn--small recipe__btn"\n    href=${this._data.sourceUrl}\n    target="_blank"\n  >\n    <span>Directions</span>\n    <svg class="search__icon">\n      <use href="${n(Rn)}#icon-arrow-right"></use>\n    </svg>\n    \n  </a>\n</div>\n`}};var Vn=new class{constructor(){this._parentEl=document.querySelector(".search")}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e(),this.reset()}))}getQuery(){return this._parentEl.querySelector("input").value}};var Bn=new class extends Un{_parentElement;_generateMarkup(e){const t=window.location.hash.slice(1)||"",{id:r,image:i,title:o,publisher:a}=e;return`<li class="preview ">\n      <a class="preview__link ${r===t&&"preview__link--active"}" href="#${r}">\n        <figure class="preview__fig">\n          <img src="${i}" alt="${o}" />\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">\n            ${o}\n          </h4>\n          <p class="preview__publisher">${a}</p>\n          <div class="preview__user-generated ${e.key?"":"hidden"}">\n          <svg>\n            <use href="${n(Rn)}#icon-users"></use>\n          </svg>\n        </div>\n        </div>\n      </a>\n    </li>`}};var Jn=new class extends Un{_errorMessage="No recipes found for your query";constructor(){super(),this._parentElement=document.querySelector(".results")}_generateMarkup(){return this._clear(),this._data.map((e=>Bn._generateMarkup.call(this,e))).join("")}};var Qn=new class extends Un{_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";constructor(){super(),this._parentElement=document.querySelector(".bookmarks__list")}_generateMarkup(){return this._clear(),this._data.map((e=>Bn._generateMarkup.call(this,e))).join("")}};var Yn=new class extends Un{_data;_parentElement=document.querySelector(".pagination");addHandleClick(e){this._parentElement.addEventListener("click",(function(t){return t.target.closest("button")&&e(Pn(t.target.closest("button").innerText))||null}))}_generateMarkup({prev:e,next:t,page:r}){this._clear(),!e&&!t&&this._clear(),t&&!e&&this._parentElement.insertAdjacentHTML("beforeend",` <button class="btn--inline pagination__btn--next">\n        <span>Page ${Number(r)+1}</span>\n        <svg class="search__icon">\n          <use href="${n(Rn)}#icon-arrow-right"></use>\n        </svg>\n      </button>`),e&&t&&this._parentElement.insertAdjacentHTML("beforeend",`\n        <button class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n        <use href="${n(Rn)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${Number(r)-1}</span>\n      </button>\n        <button class="btn--inline pagination__btn--next">\n        <span>Page ${Number(r)+1}</span>\n        <svg class="search__icon">\n          <use href="${n(Rn)}#icon-arrow-right"></use>\n        </svg>\n      </button>`),e&&!t&&this._parentElement.insertAdjacentHTML("beforeend",`\n        <button class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n        <use href="${n(Rn)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${Number(r)-1}</span>\n      `)}render(e,t,n){this.data={prev:e,next:t,page:n},this._generateMarkup(this.data)}};var Kn=new class extends Un{_parentElement=document.querySelector(".upload");_message="Recipe successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_initialMarkup;constructor(){super(),this._initialMarkup=document.querySelector(".upload").cloneNode(!0),this._addHandleShowWindow(),this._addHandleHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this.setInputValues(void 0,this._parentElement)}hideWindow(){this._overlay.classList.add("hidden"),this._window.classList.add("hidden"),this.setInputValues(void 0,this._parentElement)}setInputValues(e="",t){[...t.querySelectorAll("input")].forEach(((t,n)=>{t.setAttribute("value",e[t.name]||"")}))}resetMarkup(e=!1,t){e&&t&&this.setInputValues(t,this._initialMarkup),this._clear(),this._parentElement.insertAdjacentHTML("beforeend",this._initialMarkup.innerHTML)}_addHandleShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandleHideWindow(){this._btnClose.addEventListener("click",this.hideWindow.bind(this)),this._overlay.addEventListener("click",this.hideWindow.bind(this))}addHandleUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)].filter((([e,t])=>t)),r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Xn=async()=>{let e=window.location.hash.slice(1);if(e)try{Gn.renderSpinner(),await(async e=>{try{const t=await Fn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?23382aff-00f5-4f33-91fa-44722454b147`);Tn.recipe=In(t),Tn.recipe.bookmarked=Tn.bookmarks.some((({id:e})=>e===Tn.recipe.id))}catch(e){throw console.log(e),e}})(e);const{recipe:t}=Tn;Jn.render(Hn(),!Vn.getQuery()),Gn.render(t),Qn.render(Tn.bookmarks)}catch(e){console.trace(e.message),Gn.renderError()}},Zn=async()=>{try{((e=1)=>{Tn.search.page=e})();const e=Vn.getQuery();if(!e)return;Jn.renderSpinner(),await async function(e){try{const t=await Fn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=23382aff-00f5-4f33-91fa-44722454b147`);if(t.data.recipes.length<1)throw Error();const n=t.data.recipes.map((({id:e,title:t,publisher:n,image_url:r,key:i})=>({id:e,title:t,publisher:n,image:r,...i&&{key:i}})));Tn.search={...Tn.search,query:e,results:n}}catch(e){throw console.log(e),e}}(e),nr()}catch(e){Jn.renderError()}};function er(e){return+e>0?(updatedRecipe=function(e){const t=+e/+Tn.recipe.servings;var n,r;return Tn.recipe={...Tn.recipe,servings:e,ingredients:(n=t,r=Tn.recipe.ingredients,r.map((e=>e.quantity?{...e,quantity:+e.quantity*+n}:e)))},Tn.recipe}(e),Gn.update(updatedRecipe)):null}const tr=e=>{Tn.search.page=e,nr()};function nr(){Jn.render(Hn()),Yn.render(Tn.search.prev,Tn.search.next,Tn.search.page)}const rr=async function(e){try{Kn.renderSpinner();await An(e);Gn.render(Tn.recipe),Kn.renderMessage(),window.history.pushState(null,"",`#${Tn.recipe.id}`),Qn.render(Tn.bookmarks),setTimeout((()=>{Kn.hideWindow(),Kn.resetMarkup()}),2500)}catch(t){Kn.renderError(t),setTimeout((()=>{Kn.resetMarkup(!0,e)}),2500)}},ir=function(){return Tn.recipe.bookmarked?function({id:e}){Tn.recipe.bookmarked=!1,Tn.bookmarks=Tn.bookmarks.filter((({id:t})=>t!==e)),Nn()}(Tn.recipe):qn(Tn.recipe),Gn.update(Tn.recipe),Qn.render(Tn.bookmarks)};Gn.addHandleRender(Xn),Vn.addHandlerSearch(Zn),Yn.addHandleClick(tr),Gn.addHandlerUpdateServing(er),Gn.viewBookmarkRecipe(ir),Kn.addHandleUpload(rr),Tn.bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[],Qn.render(Tn.bookmarks);
//# sourceMappingURL=index.7865d230.js.map