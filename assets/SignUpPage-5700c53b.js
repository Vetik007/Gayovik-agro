import{g as Pt,r as g,j as y,s as I,a as ie,L as ti,n as ri,c as ni}from"./index-7919da4a.js";import{n as ii}from"./emotion-styled.browser.esm-6a9a5ebc.js";var ai=function(t){return si(t)&&!oi(t)};function si(e){return!!e&&typeof e=="object"}function oi(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ci(e)}var ui=typeof Symbol=="function"&&Symbol.for,li=ui?Symbol.for("react.element"):60103;function ci(e){return e.$$typeof===li}function fi(e){return Array.isArray(e)?[]:{}}function Ve(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ae(fi(e),e,t):e}function di(e,t,r){return e.concat(t).map(function(n){return Ve(n,r)})}function pi(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=Ve(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=Ve(t[i],r):n[i]=Ae(e[i],t[i],r)}),n}function Ae(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||di,r.isMergeableObject=r.isMergeableObject||ai;var n=Array.isArray(t),i=Array.isArray(e),a=n===i;return a?n?r.arrayMerge(e,t,r):pi(e,t,r):Ve(t,r)}Ae.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return Ae(n,i,r)},{})};var Et=Ae,hi=typeof global=="object"&&global&&global.Object===Object&&global;const Zr=hi;var mi=typeof self=="object"&&self&&self.Object===Object&&self,gi=Zr||mi||Function("return this")();const Z=gi;var yi=Z.Symbol;const te=yi;var Wr=Object.prototype,bi=Wr.hasOwnProperty,vi=Wr.toString,je=te?te.toStringTag:void 0;function xi(e){var t=bi.call(e,je),r=e[je];try{e[je]=void 0;var n=!0}catch{}var i=vi.call(e);return n&&(t?e[je]=r:delete e[je]),i}var Ti=Object.prototype,Si=Ti.toString;function wi(e){return Si.call(e)}var Ei="[object Null]",_i="[object Undefined]",fr=te?te.toStringTag:void 0;function de(e){return e==null?e===void 0?_i:Ei:fr&&fr in Object(e)?xi(e):wi(e)}function Kr(e,t){return function(r){return e(t(r))}}var $i=Kr(Object.getPrototypeOf,Object);const Mt=$i;function pe(e){return e!=null&&typeof e=="object"}var Fi="[object Object]",ji=Function.prototype,Oi=Object.prototype,Yr=ji.toString,Ai=Oi.hasOwnProperty,Ci=Yr.call(Object);function dr(e){if(!pe(e)||de(e)!=Fi)return!1;var t=Mt(e);if(t===null)return!0;var r=Ai.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Yr.call(r)==Ci}var pr=Array.isArray,hr=Object.keys,Ii=Object.prototype.hasOwnProperty,ki=typeof Element<"u";function _t(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=pr(e),n=pr(t),i,a,s;if(r&&n){if(a=e.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!_t(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var u=e instanceof Date,l=t instanceof Date;if(u!=l)return!1;if(u&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,p=t instanceof RegExp;if(c!=p)return!1;if(c&&p)return e.toString()==t.toString();var m=hr(e);if(a=m.length,a!==hr(t).length)return!1;for(i=a;i--!==0;)if(!Ii.call(t,m[i]))return!1;if(ki&&e instanceof Element&&t instanceof Element)return e===t;for(i=a;i--!==0;)if(s=m[i],!(s==="_owner"&&e.$$typeof)&&!_t(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Ri=function(t,r){try{return _t(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const se=Pt(Ri);var Di=!0;function Pi(e,t){if(!Di){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function Mi(){this.__data__=[],this.size=0}function Xr(e,t){return e===t||e!==e&&t!==t}function Ge(e,t){for(var r=e.length;r--;)if(Xr(e[r][0],t))return r;return-1}var Ni=Array.prototype,Li=Ni.splice;function zi(e){var t=this.__data__,r=Ge(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Li.call(t,r,1),--this.size,!0}function Ui(e){var t=this.__data__,r=Ge(t,e);return r<0?void 0:t[r][1]}function Vi(e){return Ge(this.__data__,e)>-1}function Bi(e,t){var r=this.__data__,n=Ge(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Y(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Y.prototype.clear=Mi;Y.prototype.delete=zi;Y.prototype.get=Ui;Y.prototype.has=Vi;Y.prototype.set=Bi;function qi(){this.__data__=new Y,this.size=0}function Gi(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Hi(e){return this.__data__.get(e)}function Zi(e){return this.__data__.has(e)}function ke(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Wi="[object AsyncFunction]",Ki="[object Function]",Yi="[object GeneratorFunction]",Xi="[object Proxy]";function Jr(e){if(!ke(e))return!1;var t=de(e);return t==Ki||t==Yi||t==Wi||t==Xi}var Ji=Z["__core-js_shared__"];const gt=Ji;var mr=function(){var e=/[^.]+$/.exec(gt&&gt.keys&&gt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Qi(e){return!!mr&&mr in e}var ea=Function.prototype,ta=ea.toString;function he(e){if(e!=null){try{return ta.call(e)}catch{}try{return e+""}catch{}}return""}var ra=/[\\^$.*+?()[\]{}|]/g,na=/^\[object .+?Constructor\]$/,ia=Function.prototype,aa=Object.prototype,sa=ia.toString,oa=aa.hasOwnProperty,ua=RegExp("^"+sa.call(oa).replace(ra,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function la(e){if(!ke(e)||Qi(e))return!1;var t=Jr(e)?ua:na;return t.test(he(e))}function ca(e,t){return e==null?void 0:e[t]}function me(e,t){var r=ca(e,t);return la(r)?r:void 0}var fa=me(Z,"Map");const Ce=fa;var da=me(Object,"create");const Ie=da;function pa(){this.__data__=Ie?Ie(null):{},this.size=0}function ha(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ma="__lodash_hash_undefined__",ga=Object.prototype,ya=ga.hasOwnProperty;function ba(e){var t=this.__data__;if(Ie){var r=t[e];return r===ma?void 0:r}return ya.call(t,e)?t[e]:void 0}var va=Object.prototype,xa=va.hasOwnProperty;function Ta(e){var t=this.__data__;return Ie?t[e]!==void 0:xa.call(t,e)}var Sa="__lodash_hash_undefined__";function wa(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ie&&t===void 0?Sa:t,this}function fe(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}fe.prototype.clear=pa;fe.prototype.delete=ha;fe.prototype.get=ba;fe.prototype.has=Ta;fe.prototype.set=wa;function Ea(){this.size=0,this.__data__={hash:new fe,map:new(Ce||Y),string:new fe}}function _a(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function He(e,t){var r=e.__data__;return _a(t)?r[typeof t=="string"?"string":"hash"]:r.map}function $a(e){var t=He(this,e).delete(e);return this.size-=t?1:0,t}function Fa(e){return He(this,e).get(e)}function ja(e){return He(this,e).has(e)}function Oa(e,t){var r=He(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function re(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}re.prototype.clear=Ea;re.prototype.delete=$a;re.prototype.get=Fa;re.prototype.has=ja;re.prototype.set=Oa;var Aa=200;function Ca(e,t){var r=this.__data__;if(r instanceof Y){var n=r.__data__;if(!Ce||n.length<Aa-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new re(n)}return r.set(e,t),this.size=r.size,this}function _e(e){var t=this.__data__=new Y(e);this.size=t.size}_e.prototype.clear=qi;_e.prototype.delete=Gi;_e.prototype.get=Hi;_e.prototype.has=Zi;_e.prototype.set=Ca;function Ia(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var ka=function(){try{var e=me(Object,"defineProperty");return e({},"",{}),e}catch{}}();const gr=ka;function Qr(e,t,r){t=="__proto__"&&gr?gr(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ra=Object.prototype,Da=Ra.hasOwnProperty;function en(e,t,r){var n=e[t];(!(Da.call(e,t)&&Xr(n,r))||r===void 0&&!(t in e))&&Qr(e,t,r)}function Ze(e,t,r,n){var i=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var u=t[a],l=n?n(r[u],e[u],u,r,e):void 0;l===void 0&&(l=e[u]),i?Qr(r,u,l):en(r,u,l)}return r}function Pa(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Ma="[object Arguments]";function yr(e){return pe(e)&&de(e)==Ma}var tn=Object.prototype,Na=tn.hasOwnProperty,La=tn.propertyIsEnumerable,za=yr(function(){return arguments}())?yr:function(e){return pe(e)&&Na.call(e,"callee")&&!La.call(e,"callee")};const Ua=za;var Va=Array.isArray;const Re=Va;function Ba(){return!1}var rn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,br=rn&&typeof module=="object"&&module&&!module.nodeType&&module,qa=br&&br.exports===rn,vr=qa?Z.Buffer:void 0,Ga=vr?vr.isBuffer:void 0,Ha=Ga||Ba;const nn=Ha;var Za=9007199254740991,Wa=/^(?:0|[1-9]\d*)$/;function Ka(e,t){var r=typeof e;return t=t??Za,!!t&&(r=="number"||r!="symbol"&&Wa.test(e))&&e>-1&&e%1==0&&e<t}var Ya=9007199254740991;function an(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ya}var Xa="[object Arguments]",Ja="[object Array]",Qa="[object Boolean]",es="[object Date]",ts="[object Error]",rs="[object Function]",ns="[object Map]",is="[object Number]",as="[object Object]",ss="[object RegExp]",os="[object Set]",us="[object String]",ls="[object WeakMap]",cs="[object ArrayBuffer]",fs="[object DataView]",ds="[object Float32Array]",ps="[object Float64Array]",hs="[object Int8Array]",ms="[object Int16Array]",gs="[object Int32Array]",ys="[object Uint8Array]",bs="[object Uint8ClampedArray]",vs="[object Uint16Array]",xs="[object Uint32Array]",O={};O[ds]=O[ps]=O[hs]=O[ms]=O[gs]=O[ys]=O[bs]=O[vs]=O[xs]=!0;O[Xa]=O[Ja]=O[cs]=O[Qa]=O[fs]=O[es]=O[ts]=O[rs]=O[ns]=O[is]=O[as]=O[ss]=O[os]=O[us]=O[ls]=!1;function Ts(e){return pe(e)&&an(e.length)&&!!O[de(e)]}function Nt(e){return function(t){return e(t)}}var sn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oe=sn&&typeof module=="object"&&module&&!module.nodeType&&module,Ss=Oe&&Oe.exports===sn,yt=Ss&&Zr.process,ws=function(){try{var e=Oe&&Oe.require&&Oe.require("util").types;return e||yt&&yt.binding&&yt.binding("util")}catch{}}();const Ee=ws;var xr=Ee&&Ee.isTypedArray,Es=xr?Nt(xr):Ts;const _s=Es;var $s=Object.prototype,Fs=$s.hasOwnProperty;function on(e,t){var r=Re(e),n=!r&&Ua(e),i=!r&&!n&&nn(e),a=!r&&!n&&!i&&_s(e),s=r||n||i||a,u=s?Pa(e.length,String):[],l=u.length;for(var c in e)(t||Fs.call(e,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Ka(c,l)))&&u.push(c);return u}var js=Object.prototype;function Lt(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||js;return e===r}var Os=Kr(Object.keys,Object);const As=Os;var Cs=Object.prototype,Is=Cs.hasOwnProperty;function ks(e){if(!Lt(e))return As(e);var t=[];for(var r in Object(e))Is.call(e,r)&&r!="constructor"&&t.push(r);return t}function un(e){return e!=null&&an(e.length)&&!Jr(e)}function zt(e){return un(e)?on(e):ks(e)}function Rs(e,t){return e&&Ze(t,zt(t),e)}function Ds(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ps=Object.prototype,Ms=Ps.hasOwnProperty;function Ns(e){if(!ke(e))return Ds(e);var t=Lt(e),r=[];for(var n in e)n=="constructor"&&(t||!Ms.call(e,n))||r.push(n);return r}function Ut(e){return un(e)?on(e,!0):Ns(e)}function Ls(e,t){return e&&Ze(t,Ut(t),e)}var ln=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=ln&&typeof module=="object"&&module&&!module.nodeType&&module,zs=Tr&&Tr.exports===ln,Sr=zs?Z.Buffer:void 0,wr=Sr?Sr.allocUnsafe:void 0;function Us(e,t){if(t)return e.slice();var r=e.length,n=wr?wr(r):new e.constructor(r);return e.copy(n),n}function cn(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Vs(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var s=e[r];t(s,r,e)&&(a[i++]=s)}return a}function fn(){return[]}var Bs=Object.prototype,qs=Bs.propertyIsEnumerable,Er=Object.getOwnPropertySymbols,Gs=Er?function(e){return e==null?[]:(e=Object(e),Vs(Er(e),function(t){return qs.call(e,t)}))}:fn;const Vt=Gs;function Hs(e,t){return Ze(e,Vt(e),t)}function dn(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Zs=Object.getOwnPropertySymbols,Ws=Zs?function(e){for(var t=[];e;)dn(t,Vt(e)),e=Mt(e);return t}:fn;const pn=Ws;function Ks(e,t){return Ze(e,pn(e),t)}function hn(e,t,r){var n=t(e);return Re(e)?n:dn(n,r(e))}function Ys(e){return hn(e,zt,Vt)}function Xs(e){return hn(e,Ut,pn)}var Js=me(Z,"DataView");const $t=Js;var Qs=me(Z,"Promise");const Ft=Qs;var eo=me(Z,"Set");const jt=eo;var to=me(Z,"WeakMap");const Ot=to;var _r="[object Map]",ro="[object Object]",$r="[object Promise]",Fr="[object Set]",jr="[object WeakMap]",Or="[object DataView]",no=he($t),io=he(Ce),ao=he(Ft),so=he(jt),oo=he(Ot),oe=de;($t&&oe(new $t(new ArrayBuffer(1)))!=Or||Ce&&oe(new Ce)!=_r||Ft&&oe(Ft.resolve())!=$r||jt&&oe(new jt)!=Fr||Ot&&oe(new Ot)!=jr)&&(oe=function(e){var t=de(e),r=t==ro?e.constructor:void 0,n=r?he(r):"";if(n)switch(n){case no:return Or;case io:return _r;case ao:return $r;case so:return Fr;case oo:return jr}return t});const Bt=oe;var uo=Object.prototype,lo=uo.hasOwnProperty;function co(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&lo.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var fo=Z.Uint8Array;const Ar=fo;function qt(e){var t=new e.constructor(e.byteLength);return new Ar(t).set(new Ar(e)),t}function po(e,t){var r=t?qt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ho=/\w*$/;function mo(e){var t=new e.constructor(e.source,ho.exec(e));return t.lastIndex=e.lastIndex,t}var Cr=te?te.prototype:void 0,Ir=Cr?Cr.valueOf:void 0;function go(e){return Ir?Object(Ir.call(e)):{}}function yo(e,t){var r=t?qt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var bo="[object Boolean]",vo="[object Date]",xo="[object Map]",To="[object Number]",So="[object RegExp]",wo="[object Set]",Eo="[object String]",_o="[object Symbol]",$o="[object ArrayBuffer]",Fo="[object DataView]",jo="[object Float32Array]",Oo="[object Float64Array]",Ao="[object Int8Array]",Co="[object Int16Array]",Io="[object Int32Array]",ko="[object Uint8Array]",Ro="[object Uint8ClampedArray]",Do="[object Uint16Array]",Po="[object Uint32Array]";function Mo(e,t,r){var n=e.constructor;switch(t){case $o:return qt(e);case bo:case vo:return new n(+e);case Fo:return po(e,r);case jo:case Oo:case Ao:case Co:case Io:case ko:case Ro:case Do:case Po:return yo(e,r);case xo:return new n;case To:case Eo:return new n(e);case So:return mo(e);case wo:return new n;case _o:return go(e)}}var kr=Object.create,No=function(){function e(){}return function(t){if(!ke(t))return{};if(kr)return kr(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Lo=No;function zo(e){return typeof e.constructor=="function"&&!Lt(e)?Lo(Mt(e)):{}}var Uo="[object Map]";function Vo(e){return pe(e)&&Bt(e)==Uo}var Rr=Ee&&Ee.isMap,Bo=Rr?Nt(Rr):Vo;const qo=Bo;var Go="[object Set]";function Ho(e){return pe(e)&&Bt(e)==Go}var Dr=Ee&&Ee.isSet,Zo=Dr?Nt(Dr):Ho;const Wo=Zo;var Ko=1,Yo=2,Xo=4,mn="[object Arguments]",Jo="[object Array]",Qo="[object Boolean]",eu="[object Date]",tu="[object Error]",gn="[object Function]",ru="[object GeneratorFunction]",nu="[object Map]",iu="[object Number]",yn="[object Object]",au="[object RegExp]",su="[object Set]",ou="[object String]",uu="[object Symbol]",lu="[object WeakMap]",cu="[object ArrayBuffer]",fu="[object DataView]",du="[object Float32Array]",pu="[object Float64Array]",hu="[object Int8Array]",mu="[object Int16Array]",gu="[object Int32Array]",yu="[object Uint8Array]",bu="[object Uint8ClampedArray]",vu="[object Uint16Array]",xu="[object Uint32Array]",j={};j[mn]=j[Jo]=j[cu]=j[fu]=j[Qo]=j[eu]=j[du]=j[pu]=j[hu]=j[mu]=j[gu]=j[nu]=j[iu]=j[yn]=j[au]=j[su]=j[ou]=j[uu]=j[yu]=j[bu]=j[vu]=j[xu]=!0;j[tu]=j[gn]=j[lu]=!1;function Le(e,t,r,n,i,a){var s,u=t&Ko,l=t&Yo,c=t&Xo;if(r&&(s=i?r(e,n,i,a):r(e)),s!==void 0)return s;if(!ke(e))return e;var p=Re(e);if(p){if(s=co(e),!u)return cn(e,s)}else{var m=Bt(e),f=m==gn||m==ru;if(nn(e))return Us(e,u);if(m==yn||m==mn||f&&!i){if(s=l||f?{}:zo(e),!u)return l?Ks(e,Ls(s,e)):Hs(e,Rs(s,e))}else{if(!j[m])return i?e:{};s=Mo(e,m,u)}}a||(a=new _e);var x=a.get(e);if(x)return x;a.set(e,s),Wo(e)?e.forEach(function($){s.add(Le($,t,r,$,e,a))}):qo(e)&&e.forEach(function($,F){s.set(F,Le($,t,r,F,e,a))});var C=c?l?Xs:Ys:l?Ut:zt,_=p?void 0:C(e);return Ia(_||e,function($,F){_&&(F=$,$=e[F]),en(s,F,Le($,t,r,F,e,a))}),s}var Tu=4;function Pr(e){return Le(e,Tu)}function bn(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Su="[object Symbol]";function Gt(e){return typeof e=="symbol"||pe(e)&&de(e)==Su}var wu="Expected a function";function Ht(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(wu);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var s=e.apply(this,n);return r.cache=a.set(i,s)||a,s};return r.cache=new(Ht.Cache||re),r}Ht.Cache=re;var Eu=500;function _u(e){var t=Ht(e,function(n){return r.size===Eu&&r.clear(),n}),r=t.cache;return t}var $u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fu=/\\(\\)?/g,ju=_u(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($u,function(r,n,i,a){t.push(i?a.replace(Fu,"$1"):n||r)}),t});const Ou=ju;var Au=1/0;function Cu(e){if(typeof e=="string"||Gt(e))return e;var t=e+"";return t=="0"&&1/e==-Au?"-0":t}var Iu=1/0,Mr=te?te.prototype:void 0,Nr=Mr?Mr.toString:void 0;function vn(e){if(typeof e=="string")return e;if(Re(e))return bn(e,vn)+"";if(Gt(e))return Nr?Nr.call(e):"";var t=e+"";return t=="0"&&1/e==-Iu?"-0":t}function ku(e){return e==null?"":vn(e)}function xn(e){return Re(e)?bn(e,Cu):Gt(e)?[e]:cn(Ou(ku(e)))}var Tn={exports:{}},E={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=typeof Symbol=="function"&&Symbol.for,Zt=M?Symbol.for("react.element"):60103,Wt=M?Symbol.for("react.portal"):60106,We=M?Symbol.for("react.fragment"):60107,Ke=M?Symbol.for("react.strict_mode"):60108,Ye=M?Symbol.for("react.profiler"):60114,Xe=M?Symbol.for("react.provider"):60109,Je=M?Symbol.for("react.context"):60110,Kt=M?Symbol.for("react.async_mode"):60111,Qe=M?Symbol.for("react.concurrent_mode"):60111,et=M?Symbol.for("react.forward_ref"):60112,tt=M?Symbol.for("react.suspense"):60113,Ru=M?Symbol.for("react.suspense_list"):60120,rt=M?Symbol.for("react.memo"):60115,nt=M?Symbol.for("react.lazy"):60116,Du=M?Symbol.for("react.block"):60121,Pu=M?Symbol.for("react.fundamental"):60117,Mu=M?Symbol.for("react.responder"):60118,Nu=M?Symbol.for("react.scope"):60119;function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zt:switch(e=e.type,e){case Kt:case Qe:case We:case Ye:case Ke:case tt:return e;default:switch(e=e&&e.$$typeof,e){case Je:case et:case nt:case rt:case Xe:return e;default:return t}}case Wt:return t}}}function Sn(e){return V(e)===Qe}E.AsyncMode=Kt;E.ConcurrentMode=Qe;E.ContextConsumer=Je;E.ContextProvider=Xe;E.Element=Zt;E.ForwardRef=et;E.Fragment=We;E.Lazy=nt;E.Memo=rt;E.Portal=Wt;E.Profiler=Ye;E.StrictMode=Ke;E.Suspense=tt;E.isAsyncMode=function(e){return Sn(e)||V(e)===Kt};E.isConcurrentMode=Sn;E.isContextConsumer=function(e){return V(e)===Je};E.isContextProvider=function(e){return V(e)===Xe};E.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt};E.isForwardRef=function(e){return V(e)===et};E.isFragment=function(e){return V(e)===We};E.isLazy=function(e){return V(e)===nt};E.isMemo=function(e){return V(e)===rt};E.isPortal=function(e){return V(e)===Wt};E.isProfiler=function(e){return V(e)===Ye};E.isStrictMode=function(e){return V(e)===Ke};E.isSuspense=function(e){return V(e)===tt};E.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===We||e===Qe||e===Ye||e===Ke||e===tt||e===Ru||typeof e=="object"&&e!==null&&(e.$$typeof===nt||e.$$typeof===rt||e.$$typeof===Xe||e.$$typeof===Je||e.$$typeof===et||e.$$typeof===Pu||e.$$typeof===Mu||e.$$typeof===Nu||e.$$typeof===Du)};E.typeOf=V;Tn.exports=E;var Lu=Tn.exports,wn=Lu,zu={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},En={};En[wn.ForwardRef]=zu;En[wn.Memo]=Uu;function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}function Se(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var it=g.createContext(void 0);it.displayName="FormikContext";var Vu=it.Provider;it.Consumer;function _n(){var e=g.useContext(it);return e||Pi(!1),e}var U=function(t){return typeof t=="function"},at=function(t){return t!==null&&typeof t=="object"},Bu=function(t){return String(Math.floor(Number(t)))===t},bt=function(t){return Object.prototype.toString.call(t)==="[object String]"},qu=function(t){return g.Children.count(t)===0},vt=function(t){return at(t)&&U(t.then)};function z(e,t,r,n){n===void 0&&(n=0);for(var i=xn(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function le(e,t,r){for(var n=Pr(e),i=n,a=0,s=xn(t);a<s.length-1;a++){var u=s[a],l=z(e,s.slice(0,a+1));if(l&&(at(l)||Array.isArray(l)))i=i[u]=Pr(l);else{var c=s[a+1];i=i[u]=Bu(c)&&Number(c)>=0?[]:{}}}return(a===0?e:i)[s[a]]===r?e:(r===void 0?delete i[s[a]]:i[s[a]]=r,a===0&&r===void 0&&delete n[s[a]],n)}function $n(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,a=Object.keys(e);i<a.length;i++){var s=a[i],u=e[s];at(u)?r.get(u)||(r.set(u,!0),n[s]=Array.isArray(u)?[]:{},$n(u,t,r,n[s])):n[s]=t}return n}function Gu(e,t){switch(t.type){case"SET_VALUES":return A({},e,{values:t.payload});case"SET_TOUCHED":return A({},e,{touched:t.payload});case"SET_ERRORS":return se(e.errors,t.payload)?e:A({},e,{errors:t.payload});case"SET_STATUS":return A({},e,{status:t.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return A({},e,{values:le(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:le(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:le(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return A({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:$n(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var ae={},Me={};function Hu(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,a=e.validateOnMount,s=a===void 0?!1:a,u=e.isInitialValid,l=e.enableReinitialize,c=l===void 0?!1:l,p=e.onSubmit,m=Se(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:r,validateOnBlur:i,validateOnMount:s,onSubmit:p},m),x=g.useRef(f.initialValues),C=g.useRef(f.initialErrors||ae),_=g.useRef(f.initialTouched||Me),$=g.useRef(f.initialStatus),F=g.useRef(!1),R=g.useRef({});g.useEffect(function(){return F.current=!0,function(){F.current=!1}},[]);var be=g.useState(0),ne=be[1],X=g.useRef({values:f.initialValues,errors:f.initialErrors||ae,touched:f.initialTouched||Me,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=X.current,S=g.useCallback(function(o){var d=X.current;X.current=Gu(d,o),d!==X.current&&ne(function(h){return h+1})},[]),lt=g.useCallback(function(o,d){return new Promise(function(h,b){var v=f.validate(o,d);v==null?h(ae):vt(v)?v.then(function(w){h(w||ae)},function(w){b(w)}):h(v)})},[f.validate]),J=g.useCallback(function(o,d){var h=f.validationSchema,b=U(h)?h(d):h,v=d&&b.validateAt?b.validateAt(d,o):Ku(o,b);return new Promise(function(w,P){v.then(function(){w(ae)},function(W){W.name==="ValidationError"?w(Wu(W)):P(W)})})},[f.validationSchema]),$e=g.useCallback(function(o,d){return new Promise(function(h){return h(R.current[o].validate(d))})},[]),k=g.useCallback(function(o){var d=Object.keys(R.current).filter(function(b){return U(R.current[b].validate)}),h=d.length>0?d.map(function(b){return $e(b,z(o,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(h).then(function(b){return b.reduce(function(v,w,P){return w==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||w&&(v=le(v,d[P],w)),v},{})})},[$e]),De=g.useCallback(function(o){return Promise.all([k(o),f.validationSchema?J(o):{},f.validate?lt(o):{}]).then(function(d){var h=d[0],b=d[1],v=d[2],w=Et.all([h,b,v],{arrayMerge:Yu});return w})},[f.validate,f.validationSchema,k,lt,J]),D=B(function(o){return o===void 0&&(o=T.values),S({type:"SET_ISVALIDATING",payload:!0}),De(o).then(function(d){return F.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:d})),d})});g.useEffect(function(){s&&F.current===!0&&se(x.current,f.initialValues)&&D(x.current)},[s,D]);var Q=g.useCallback(function(o){var d=o&&o.values?o.values:x.current,h=o&&o.errors?o.errors:C.current?C.current:f.initialErrors||{},b=o&&o.touched?o.touched:_.current?_.current:f.initialTouched||{},v=o&&o.status?o.status:$.current?$.current:f.initialStatus;x.current=d,C.current=h,_.current=b,$.current=v;var w=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!o&&!!o.isSubmitting,errors:h,touched:b,status:v,values:d,isValidating:!!o&&!!o.isValidating,submitCount:o&&o.submitCount&&typeof o.submitCount=="number"?o.submitCount:0}})};if(f.onReset){var P=f.onReset(T.values,lr);vt(P)?P.then(w):w()}else w()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);g.useEffect(function(){F.current===!0&&!se(x.current,f.initialValues)&&c&&(x.current=f.initialValues,Q(),s&&D(x.current))},[c,f.initialValues,Q,s,D]),g.useEffect(function(){c&&F.current===!0&&!se(C.current,f.initialErrors)&&(C.current=f.initialErrors||ae,S({type:"SET_ERRORS",payload:f.initialErrors||ae}))},[c,f.initialErrors]),g.useEffect(function(){c&&F.current===!0&&!se(_.current,f.initialTouched)&&(_.current=f.initialTouched||Me,S({type:"SET_TOUCHED",payload:f.initialTouched||Me}))},[c,f.initialTouched]),g.useEffect(function(){c&&F.current===!0&&!se($.current,f.initialStatus)&&($.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[c,f.initialStatus,f.initialTouched]);var Fe=B(function(o){if(R.current[o]&&U(R.current[o].validate)){var d=z(T.values,o),h=R.current[o].validate(d);return vt(h)?(S({type:"SET_ISVALIDATING",payload:!0}),h.then(function(b){return b}).then(function(b){S({type:"SET_FIELD_ERROR",payload:{field:o,value:b}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:o,value:h}}),Promise.resolve(h))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),J(T.values,o).then(function(b){return b}).then(function(b){S({type:"SET_FIELD_ERROR",payload:{field:o,value:z(b,o)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Bn=g.useCallback(function(o,d){var h=d.validate;R.current[o]={validate:h}},[]),qn=g.useCallback(function(o){delete R.current[o]},[]),tr=B(function(o,d){S({type:"SET_TOUCHED",payload:o});var h=d===void 0?i:d;return h?D(T.values):Promise.resolve()}),rr=g.useCallback(function(o){S({type:"SET_ERRORS",payload:o})},[]),nr=B(function(o,d){var h=U(o)?o(T.values):o;S({type:"SET_VALUES",payload:h});var b=d===void 0?r:d;return b?D(h):Promise.resolve()}),Pe=g.useCallback(function(o,d){S({type:"SET_FIELD_ERROR",payload:{field:o,value:d}})},[]),ve=B(function(o,d,h){S({type:"SET_FIELD_VALUE",payload:{field:o,value:d}});var b=h===void 0?r:h;return b?D(le(T.values,o,d)):Promise.resolve()}),ir=g.useCallback(function(o,d){var h=d,b=o,v;if(!bt(o)){o.persist&&o.persist();var w=o.target?o.target:o.currentTarget,P=w.type,W=w.name,ht=w.id,mt=w.value,Qn=w.checked,mc=w.outerHTML,cr=w.options,ei=w.multiple;h=d||W||ht,b=/number|range/.test(P)?(v=parseFloat(mt),isNaN(v)?"":v):/checkbox/.test(P)?Ju(z(T.values,h),Qn,mt):cr&&ei?Xu(cr):mt}h&&ve(h,b)},[ve,T.values]),ct=B(function(o){if(bt(o))return function(d){return ir(d,o)};ir(o)}),xe=B(function(o,d,h){d===void 0&&(d=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:o,value:d}});var b=h===void 0?i:h;return b?D(T.values):Promise.resolve()}),ar=g.useCallback(function(o,d){o.persist&&o.persist();var h=o.target,b=h.name,v=h.id,w=h.outerHTML,P=d||b||v;xe(P,!0)},[xe]),ft=B(function(o){if(bt(o))return function(d){return ar(d,o)};ar(o)}),sr=g.useCallback(function(o){U(o)?S({type:"SET_FORMIK_STATE",payload:o}):S({type:"SET_FORMIK_STATE",payload:function(){return o}})},[]),or=g.useCallback(function(o){S({type:"SET_STATUS",payload:o})},[]),ur=g.useCallback(function(o){S({type:"SET_ISSUBMITTING",payload:o})},[]),dt=B(function(){return S({type:"SUBMIT_ATTEMPT"}),D().then(function(o){var d=o instanceof Error,h=!d&&Object.keys(o).length===0;if(h){var b;try{if(b=Hn(),b===void 0)return}catch(v){throw v}return Promise.resolve(b).then(function(v){return F.current&&S({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(F.current)throw S({type:"SUBMIT_FAILURE"}),v})}else if(F.current&&(S({type:"SUBMIT_FAILURE"}),d))throw o})}),Gn=B(function(o){o&&o.preventDefault&&U(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&U(o.stopPropagation)&&o.stopPropagation(),dt().catch(function(d){console.warn("Warning: An unhandled error was caught from submitForm()",d)})}),lr={resetForm:Q,validateForm:D,validateField:Fe,setErrors:rr,setFieldError:Pe,setFieldTouched:xe,setFieldValue:ve,setStatus:or,setSubmitting:ur,setTouched:tr,setValues:nr,setFormikState:sr,submitForm:dt},Hn=B(function(){return p(T.values,lr)}),Zn=B(function(o){o&&o.preventDefault&&U(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&U(o.stopPropagation)&&o.stopPropagation(),Q()}),Wn=g.useCallback(function(o){return{value:z(T.values,o),error:z(T.errors,o),touched:!!z(T.touched,o),initialValue:z(x.current,o),initialTouched:!!z(_.current,o),initialError:z(C.current,o)}},[T.errors,T.touched,T.values]),Kn=g.useCallback(function(o){return{setValue:function(h,b){return ve(o,h,b)},setTouched:function(h,b){return xe(o,h,b)},setError:function(h){return Pe(o,h)}}},[ve,xe,Pe]),Yn=g.useCallback(function(o){var d=at(o),h=d?o.name:o,b=z(T.values,h),v={name:h,value:b,onChange:ct,onBlur:ft};if(d){var w=o.type,P=o.value,W=o.as,ht=o.multiple;w==="checkbox"?P===void 0?v.checked=!!b:(v.checked=!!(Array.isArray(b)&&~b.indexOf(P)),v.value=P):w==="radio"?(v.checked=b===P,v.value=P):W==="select"&&ht&&(v.value=v.value||[],v.multiple=!0)}return v},[ft,ct,T.values]),pt=g.useMemo(function(){return!se(x.current,T.values)},[x.current,T.values]),Xn=g.useMemo(function(){return typeof u<"u"?pt?T.errors&&Object.keys(T.errors).length===0:u!==!1&&U(u)?u(f):u:T.errors&&Object.keys(T.errors).length===0},[u,pt,T.errors,f]),Jn=A({},T,{initialValues:x.current,initialErrors:C.current,initialTouched:_.current,initialStatus:$.current,handleBlur:ft,handleChange:ct,handleReset:Zn,handleSubmit:Gn,resetForm:Q,setErrors:rr,setFormikState:sr,setFieldTouched:xe,setFieldValue:ve,setFieldError:Pe,setStatus:or,setSubmitting:ur,setTouched:tr,setValues:nr,submitForm:dt,validateForm:D,validateField:Fe,isValid:Xn,dirty:pt,unregisterField:qn,registerField:Bn,getFieldProps:Yn,getFieldMeta:Wn,getFieldHelpers:Kn,validateOnBlur:i,validateOnChange:r,validateOnMount:s});return Jn}function Zu(e){var t=Hu(e),r=e.component,n=e.children,i=e.render,a=e.innerRef;return g.useImperativeHandle(a,function(){return t}),g.createElement(Vu,{value:t},r?g.createElement(r,t):i?i(t):n?U(n)?n(t):qu(n)?null:g.Children.only(n):null)}function Wu(e){var t={};if(e.inner){if(e.inner.length===0)return le(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var a;if(r){if(n>=i.length)break;a=i[n++]}else{if(n=i.next(),n.done)break;a=n.value}var s=a;z(t,s.path)||(t=le(t,s.path,s.message))}}return t}function Ku(e,t,r,n){r===void 0&&(r=!1);var i=At(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function At(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||dr(i)?At(i):i!==""?i:void 0}):dr(e[n])?t[n]=At(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Yu(e,t,r){var n=e.slice();return t.forEach(function(a,s){if(typeof n[s]>"u"){var u=r.clone!==!1,l=u&&r.isMergeableObject(a);n[s]=l?Et(Array.isArray(a)?[]:{},a,r):a}else r.isMergeableObject(a)?n[s]=Et(e[s],a,r):e.indexOf(a)===-1&&n.push(a)}),n}function Xu(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Ju(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,a=-1;if(Array.isArray(e))n=e,a=e.indexOf(r),i=a>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,a).concat(n.slice(a+1)):n}var Qu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?g.useLayoutEffect:g.useEffect;function B(e){var t=g.useRef(e);return Qu(function(){t.current=e}),g.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function Fn(e){var t=e.validate,r=e.name,n=e.render,i=e.children,a=e.as,s=e.component,u=e.className,l=Se(e,["validate","name","render","children","as","component","className"]),c=_n(),p=Se(c,["validate","validationSchema"]),m=p.registerField,f=p.unregisterField;g.useEffect(function(){return m(r,{validate:t}),function(){f(r)}},[m,f,r,t]);var x=p.getFieldProps(A({name:r},l)),C=p.getFieldMeta(r),_={field:x,form:p};if(n)return n(A({},_,{meta:C}));if(U(i))return i(A({},_,{meta:C}));if(s){if(typeof s=="string"){var $=l.innerRef,F=Se(l,["innerRef"]);return g.createElement(s,A({ref:$},x,F,{className:u}),i)}return g.createElement(s,A({field:x,form:p},l,{className:u}),i)}var R=a||"input";if(typeof R=="string"){var be=l.innerRef,ne=Se(l,["innerRef"]);return g.createElement(R,A({ref:be},x,ne,{className:u}),i)}return g.createElement(R,A({},x,l,{className:u}),i)}var jn=g.forwardRef(function(e,t){var r=e.action,n=Se(e,["action"]),i=r??"#",a=_n(),s=a.handleReset,u=a.handleSubmit;return g.createElement("form",A({onSubmit:u,ref:t,onReset:s,action:i},n))});jn.displayName="Form";function ge(e){this._maxSize=e,this.clear()}ge.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ge.prototype.get=function(e){return this._values[e]};ge.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var el=/[^.^\]^[]+|(?=\[\]|\.\.)/g,On=/^\d+$/,tl=/^\d/,rl=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,nl=/^\s*(['"]?)(.*?)(\1)\s*$/,Yt=512,Lr=new ge(Yt),zr=new ge(Yt),Ur=new ge(Yt),ce={Cache:ge,split:Ct,normalizePath:xt,setter:function(e){var t=xt(e);return zr.get(e)||zr.set(e,function(n,i){for(var a=0,s=t.length,u=n;a<s-1;){var l=t[a];if(l==="__proto__"||l==="constructor"||l==="prototype")return n;u=u[t[a++]]}u[t[a]]=i})},getter:function(e,t){var r=xt(e);return Ur.get(e)||Ur.set(e,function(i){for(var a=0,s=r.length;a<s;)if(i!=null||!t)i=i[r[a++]];else return;return i})},join:function(e){return e.reduce(function(t,r){return t+(Xt(r)||On.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){il(Array.isArray(e)?e:Ct(e),t,r)}};function xt(e){return Lr.get(e)||Lr.set(e,Ct(e).map(function(t){return t.replace(nl,"$2")}))}function Ct(e){return e.match(el)||[""]}function il(e,t,r){var n=e.length,i,a,s,u;for(a=0;a<n;a++)i=e[a],i&&(ol(i)&&(i='"'+i+'"'),u=Xt(i),s=!u&&/^\d+$/.test(i),t.call(r,i,u,s,a,e))}function Xt(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function al(e){return e.match(tl)&&!e.match(On)}function sl(e){return rl.test(e)}function ol(e){return!Xt(e)&&(al(e)||sl(e))}const ul=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,st=e=>e.match(ul)||[],ot=e=>e[0].toUpperCase()+e.slice(1),Jt=(e,t)=>st(e).join(t).toLowerCase(),An=e=>st(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),ll=e=>ot(An(e)),cl=e=>Jt(e,"_"),fl=e=>Jt(e,"-"),dl=e=>ot(Jt(e," ")),pl=e=>st(e).map(ot).join(" ");var Tt={words:st,upperFirst:ot,camelCase:An,pascalCase:ll,snakeCase:cl,kebabCase:fl,sentenceCase:dl,titleCase:pl},Qt={exports:{}};Qt.exports=function(e){return Cn(hl(e),e)};Qt.exports.array=Cn;function Cn(e,t){var r=e.length,n=new Array(r),i={},a=r,s=ml(t),u=gl(e);for(t.forEach(function(c){if(!u.has(c[0])||!u.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});a--;)i[a]||l(e[a],a,new Set);return n;function l(c,p,m){if(m.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!u.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[p]){i[p]=!0;var x=s.get(c)||new Set;if(x=Array.from(x),p=x.length){m.add(c);do{var C=x[--p];l(C,u.get(C),m)}while(p);m.delete(c)}n[--r]=c}}}function hl(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var i=e[r];t.add(i[0]),t.add(i[1])}return Array.from(t)}function ml(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var i=e[r];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function gl(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var yl=Qt.exports;const bl=Pt(yl),vl=Object.prototype.toString,xl=Error.prototype.toString,Tl=RegExp.prototype.toString,Sl=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",wl=/^Symbol\((.*)\)(.*)$/;function El(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Vr(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return El(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return Sl.call(e).replace(wl,"Symbol($1)");const n=vl.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+xl.call(e)+"]":n==="RegExp"?Tl.call(e):null}function ee(e,t){let r=Vr(e,t);return r!==null?r:JSON.stringify(e,function(n,i){let a=Vr(this[n],t);return a!==null?a:i},2)}function In(e){return e==null?[]:[].concat(e)}let kn,_l=/\$\{\s*(\w+)\s*\}/g;kn=Symbol.toStringTag;class L extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(_l,(i,a)=>ee(r[a])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,i,a){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[kn]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],In(t).forEach(s=>{if(L.isError(s)){this.errors.push(...s.errors);const u=s.inner.length?s.inner:[s];this.inner.push(...u)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!a&&Error.captureStackTrace&&Error.captureStackTrace(this,L)}}let G={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const i=n!=null&&n!==r?` (cast from the value \`${ee(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ee(r,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ee(r,!0)}\``+i}},q={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},$l={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},It={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Fl={isValue:"${path} field must be ${value}"},kt={noUnknown:"${path} field has unspecified keys: ${unknown}"},jl={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Ol={notType:e=>{const{path:t,value:r,spec:n}=e,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${ee(r,!0)}\``;if(r.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${ee(r,!0)}\``}return L.formatError(G.notType,e)}};Object.assign(Object.create(null),{mixed:G,string:q,number:$l,date:It,object:kt,array:jl,boolean:Fl,tuple:Ol});const er=e=>e&&e.__isYupSchema__;class Be{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:a}=r,s=typeof n=="function"?n:(...u)=>u.every(l=>l===n);return new Be(t,(u,l)=>{var c;let p=s(...u)?i:a;return(c=p==null?void 0:p(l))!=null?c:l})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(a=>a.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),i=this.fn(n,t,r);if(i===void 0||i===t)return t;if(!er(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}const Ne={context:"$",value:"."};class ye{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ne.context,this.isValue=this.key[0]===Ne.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?Ne.context:this.isValue?Ne.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&ce.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let i=this.isContext?n:this.isValue?t:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ye.prototype.__isYupRef=!0;const ue=e=>e==null;function Te(e){function t({value:r,path:n="",options:i,originalValue:a,schema:s},u,l){const{name:c,test:p,params:m,message:f,skipAbsent:x}=e;let{parent:C,context:_,abortEarly:$=s.spec.abortEarly,disableStackTrace:F=s.spec.disableStackTrace}=i;function R(k){return ye.isRef(k)?k.getValue(r,C,_):k}function be(k={}){var De;const D=Object.assign({value:r,originalValue:a,label:s.spec.label,path:k.path||n,spec:s.spec},m,k.params);for(const Fe of Object.keys(D))D[Fe]=R(D[Fe]);const Q=new L(L.formatError(k.message||f,D),r,D.path,k.type||c,(De=k.disableStackTrace)!=null?De:F);return Q.params=D,Q}const ne=$?u:l;let X={path:n,parent:C,type:c,from:i.from,createError:be,resolve:R,options:i,originalValue:a,schema:s};const T=k=>{L.isError(k)?ne(k):k?l(null):ne(be())},S=k=>{L.isError(k)?ne(k):u(k)};if(x&&ue(r))return T(!0);let J;try{var $e;if(J=p.call(X,r,X),typeof(($e=J)==null?void 0:$e.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${X.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(J).then(T,S)}}catch(k){S(k);return}T(J)}return t.OPTIONS=e,t}function Al(e,t,r,n=r){let i,a,s;return t?(ce.forEach(t,(u,l,c)=>{let p=l?u.slice(1,u.length-1):u;e=e.resolve({context:n,parent:i,value:r});let m=e.type==="tuple",f=c?parseInt(p,10):0;if(e.innerType||m){if(m&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(r&&f>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${t}. because there is no value at that index. `);i=r,r=r&&r[f],e=m?e.spec.types[f]:e.innerType}if(!c){if(!e.fields||!e.fields[p])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);i=r,r=r&&r[p],e=e.fields[p]}a=p,s=l?"["+u+"]":"."+u}),{schema:e,parent:i,parentPath:a}):{parent:i,parentPath:t,schema:e}}class qe extends Set{describe(){const t=[];for(const r of this.values())t.push(ye.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new qe(this.values())}merge(t,r){const n=this.clone();return t.forEach(i=>n.add(i)),r.forEach(i=>n.delete(i)),n}}function we(e,t=new Map){if(er(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=we(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,i]of e.entries())r.set(n,we(i,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add(we(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,i]of Object.entries(e))r[n]=we(i,t)}else throw Error(`Unable to clone ${e}`);return r}class H{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new qe,this._blacklist=new qe,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(G.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=we(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const i=Object.assign({},r.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(a=>{t.tests.forEach(s=>{a.test(s.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,a)=>a.resolve(i,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,i,a;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(a=t.disableStackTrace)!=null?a:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),i=r.assert==="ignore-optionality",a=n._cast(t,r);if(r.assert!==!1&&!n.isType(a)){if(i&&ue(a))return a;let s=ee(t),u=ee(a);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${s} 
`+(u!==s?`result of cast: ${u}`:""))}return a}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((i,a)=>a.call(this,i,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,i){let{path:a,originalValue:s=t,strict:u=this.spec.strict}=r,l=t;u||(l=this._cast(l,Object.assign({assert:!1},r)));let c=[];for(let p of Object.values(this.internalTests))p&&c.push(p);this.runTests({path:a,value:l,originalValue:s,options:r,tests:c},n,p=>{if(p.length)return i(p,l);this.runTests({path:a,value:l,originalValue:s,options:r,tests:this.tests},n,i)})}runTests(t,r,n){let i=!1,{tests:a,value:s,originalValue:u,path:l,options:c}=t,p=_=>{i||(i=!0,r(_,s))},m=_=>{i||(i=!0,n(_,s))},f=a.length,x=[];if(!f)return m([]);let C={value:s,originalValue:u,path:l,options:c,schema:this};for(let _=0;_<a.length;_++){const $=a[_];$(C,p,function(R){R&&(Array.isArray(R)?x.push(...R):x.push(R)),--f<=0&&m(x)})}}asNestedTest({key:t,index:r,parent:n,parentPath:i,originalParent:a,options:s}){const u=t??r;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof u=="number";let c=n[u];const p=Object.assign({},s,{strict:!0,parent:n,value:c,originalValue:a[u],key:void 0,[l?"index":"key"]:u,path:l||u.includes(".")?`${i||""}[${c?u:`"${u}"`}]`:(i?`${i}.`:"")+t});return(m,f,x)=>this.resolve(p)._validate(c,p,f,x)}validate(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),a=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((s,u)=>i._validate(t,r,(l,c)=>{L.isError(l)&&(l.value=c),u(l)},(l,c)=>{l.length?u(new L(l,c,void 0,void 0,a)):s(c)}))}validateSync(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),a,s=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(t,Object.assign({},r,{sync:!0}),(u,l)=>{throw L.isError(u)&&(u.value=l),u},(u,l)=>{if(u.length)throw new L(u,t,void 0,void 0,s);a=l}),a}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(L.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(L.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):we(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=Te({message:r,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=Te({message:r,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=G.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=G.notNull){return this.nullability(!1,t)}required(t=G.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=G.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=Te(r),a=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(s=>!(s.OPTIONS.name===r.name&&(a||s.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),i=In(t).map(a=>new ye(a));return i.forEach(a=>{a.isSibling&&n.deps.push(a.key)}),n.conditions.push(typeof r=="function"?new Be(i,r):Be.fromOptions(i,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=Te({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=G.oneOf){let n=this.clone();return t.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=Te({message:r,name:"oneOf",skipAbsent:!0,test(i){let a=this.schema._whitelist,s=a.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(a).join(", "),resolved:s}})}}),n}notOneOf(t,r=G.notOneOf){let n=this.clone();return t.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=Te({message:r,name:"notOneOf",test(i){let a=this.schema._blacklist,s=a.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(a).join(", "),resolved:s}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:i,optional:a,nullable:s}=r.spec;return{meta:i,label:n,optional:a,nullable:s,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,p)=>p.findIndex(m=>m.name===l.name)===c)}}}H.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])H.prototype[`${e}At`]=function(t,r,n={}){const{parent:i,parentPath:a,schema:s}=Al(this,t,r,n.context);return s[e](i&&i[a],Object.assign({},n,{parent:i,path:t}))};for(const e of["equals","is"])H.prototype[e]=H.prototype.oneOf;for(const e of["not","nope"])H.prototype[e]=H.prototype.notOneOf;let Cl=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Il=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,kl=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Rl=e=>ue(e)||e===e.trim(),Dl={}.toString();function ze(){return new Rn}class Rn extends H{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===Dl?t:i})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||G.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=q.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=q.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=q.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,i,a;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:a}=r:i=r),this.test({name:a||"matches",message:i||q.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&n||s.search(t)!==-1})}email(t=q.email){return this.matches(Cl,{name:"email",message:t,excludeEmptyString:!0})}url(t=q.url){return this.matches(Il,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=q.uuid){return this.matches(kl,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=q.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:Rl})}lowercase(t=q.lowercase){return this.transform(r=>ue(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>ue(r)||r===r.toLowerCase()})}uppercase(t=q.uppercase){return this.transform(r=>ue(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>ue(r)||r===r.toUpperCase()})}}ze.prototype=Rn.prototype;const Pl=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function K(e,t=0){return Number(e)||t}function Ml(e){const t=Pl.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:K(t[1]),month:K(t[2],1)-1,day:K(t[3],1),hour:K(t[4]),minute:K(t[5]),second:K(t[6]),millisecond:t[7]?K(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:K(t[10]),minuteOffset:K(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let Nl=new Date(""),Ll=e=>Object.prototype.toString.call(e)==="[object Date]";class ut extends H{constructor(){super({type:"date",check(t){return Ll(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=Ml(t),isNaN(t)?ut.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(ye.isRef(t))n=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(t,r=It.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(t,r=It.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}ut.INVALID_DATE=Nl;ut.prototype;function zl(e,t=[]){let r=[],n=new Set,i=new Set(t.map(([s,u])=>`${s}-${u}`));function a(s,u){let l=ce.split(s)[0];n.add(l),i.has(`${u}-${l}`)||r.push([u,l])}for(const s of Object.keys(e)){let u=e[s];n.add(s),ye.isRef(u)&&u.isSibling?a(u.path,s):er(u)&&"deps"in u&&u.deps.forEach(l=>a(l,s))}return bl.array(Array.from(n),r).reverse()}function Br(e,t){let r=1/0;return e.some((n,i)=>{var a;if((a=t.path)!=null&&a.includes(n))return r=i,!0}),r}function Dn(e){return(t,r)=>Br(e,t)-Br(e,r)}const Ul=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function Ue(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=Ue(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ue(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ue)}):"optional"in e?e.optional():e}const Vl=(e,t)=>{const r=[...ce.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),i=ce.getter(ce.join(r),!0)(e);return!!(i&&n in i)};let qr=e=>Object.prototype.toString.call(e)==="[object Object]";function Bl(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const ql=Dn([]);function Pn(e){return new Mn(e)}class Mn extends H{constructor(t){super({type:"object",check(r){return qr(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=ql,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let i=super._cast(t,r);if(i===void 0)return this.getDefault(r);if(!this._typeCheck(i))return i;let a=this.fields,s=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(i).filter(m=>!this._nodes.includes(m))),l={},c=Object.assign({},r,{parent:l,__validating:r.__validating||!1}),p=!1;for(const m of u){let f=a[m],x=m in i;if(f){let C,_=i[m];c.path=(r.path?`${r.path}.`:"")+m,f=f.resolve({value:_,context:r.context,parent:l});let $=f instanceof H?f.spec:void 0,F=$==null?void 0:$.strict;if($!=null&&$.strip){p=p||m in i;continue}C=!r.__validating||!F?f.cast(i[m],c):i[m],C!==void 0&&(l[m]=C)}else x&&!s&&(l[m]=i[m]);(x!==m in l||l[m]!==i[m])&&(p=!0)}return p?l:i}_validate(t,r={},n,i){let{from:a=[],originalValue:s=t,recursive:u=this.spec.recursive}=r;r.from=[{schema:this,value:s},...a],r.__validating=!0,r.originalValue=s,super._validate(t,r,n,(l,c)=>{if(!u||!qr(c)){i(l,c);return}s=s||c;let p=[];for(let m of this._nodes){let f=this.fields[m];!f||ye.isRef(f)||p.push(f.asNestedTest({options:r,key:m,parent:c,parentPath:r.path,originalParent:s}))}this.runTests({tests:p,value:c,originalValue:s,options:r},n,m=>{i(m.sort(this._sortErrors).concat(l),c)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[i,a]of Object.entries(this.fields)){const s=n[i];n[i]=s===void 0?a:s}return r.withMutation(i=>i.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var i;const a=this.fields[n];let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[n]})),r[n]=a&&"getDefault"in a?a.getDefault(s):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=zl(t,r),n._sortErrors=Dn(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),i=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),i)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return Ue(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,i])=>t.includes(n)&&t.includes(i)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let i=ce.getter(t,!0);return this.transform(a=>{if(!a)return a;let s=a;return Vl(a,t)&&(s=Object.assign({},a),n||delete s[t],s[r]=i(a)),s})}json(){return this.transform(Ul)}noUnknown(t=!0,r=kt.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const a=Bl(this.schema,i);return!t||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=kt.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const i of Object.keys(r))n[t(i)]=r[i];return n})}camelCase(){return this.transformKeys(Tt.camelCase)}snakeCase(){return this.transformKeys(Tt.snakeCase)}constantCase(){return this.transformKeys(t=>Tt.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[a,s]of Object.entries(r.fields)){var i;let u=t;(i=u)!=null&&i.value&&(u=Object.assign({},u,{parent:u.value,value:u.value[a]})),n.fields[a]=s.describe(u)}return n}}Pn.prototype=Mn.prototype;var Nn={exports:{}},Gl="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Hl=Gl,Zl=Hl;function Ln(){}function zn(){}zn.resetWarningCache=Ln;var Wl=function(){function e(n,i,a,s,u,l){if(l!==Zl){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:zn,resetWarningCache:Ln};return r.PropTypes=r,r};Nn.exports=Wl();var Kl=Nn.exports;const N=Pt(Kl),Yl=ii.button`
  position: absolute;
  top: 50%;
  /* right: ${({right:e})=>e||"0"}; */
  right: 38px;
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #efede8;
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #e6533c;
    scale: 1.15;
  }

  @media screen and (min-width: 768px) {
    right: 9px;
  }
`;function Un({children:e,onClick:t,right:r,type:n}){return y.jsx(Yl,{onClick:t,right:r,type:n,children:e})}Un.propTypes={onClick:N.func.isRequired,right:N.string,type:N.string,children:N.object.isRequired};const Xl=I.div`
  position: relative;
  width: 100%;
`,Jl=I(jn)`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* width: 364px; */
  /* height: 196px; */

  @media screen and (min-width: 768px) {
    /* width: 364px;
    height: 196px; */
  }
`,Ql=I.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    /* gap: 20px;
    margin-bottom: 40px; */
  }
`,Gr=I(Fn)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  background-color: #ebecf0;
  border: none;
  /* background-color: transparent; */
  /* border: 1px solid rgba(239, 237, 232, 0.3); */

  box-shadow:
    inset 2px 2px 5px #babecc,
    inset -5px -5px 10px #fff;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;
  text-shadow: 1px 1px 1px #fff;

  /* color: rgba(239, 237, 232, 0.6); */

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 52px;
    font-size: 16px;
    line-height: 150%;
  }
`,St=I.div`
  display: flex;
  gap: 4px;

  margin-top: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
  text-shadow: 1px 1px 1px #fff;

  color: #d80027;
`,wt=I.div`
  display: flex;
  gap: 4px;

  margin-top: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
  text-shadow: 1px 1px 1px #fff;

  color: #3cbf61;
`,ec=I(Fn)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  background-color: #ebecf0;

  box-shadow:
    inset 2px 2px 5px #babecc,
    inset -5px -5px 10px #fff;
  border: none;
  /* background-color: transparent; */
  /* border: 1px solid rgba(239, 237, 232, 0.3); */
  padding-right: 30px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;
  text-shadow: 1px 1px 1px #fff;

  /* color: rgba(239, 237, 232, 0.6); */

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 52px;
    font-size: 16px;
    line-height: 150%;
  }
`,Rt=({nameIsShown:e,handleSubmit:t,toglePassword:r,passwordInput:n,isPassword:i,children:a})=>{const s=e?{name:"",email:"",password:""}:{email:"",password:""},u=Pn().shape({name:e?ze().required("Будь ласка введіть своє ім`я"):null,email:ze().matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Невірний формат електронної пошти").required("Будь ласка, введіть свій E-mail!"),password:ze().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,"Пароль повинен містити не менше 6 літер та 1 цифри").required("Будь ласка, введіть свій пароль")});return y.jsx(Zu,{initialValues:s,validationSchema:u,onSubmit:t,children:({handleBlur:l,touched:c,errors:p})=>y.jsxs(Jl,{autoComplete:"off",className:"StyledForm",children:[y.jsxs(Ql,{className:"WrapperInput",children:[e&&y.jsxs("div",{className:"www",children:[y.jsx("div",{children:y.jsx(Gr,{type:"text",name:"name",placeholder:"Name",onBlur:l,className:"StyledField"})}),c.name&&p.name?y.jsxs(St,{children:[y.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:y.jsx("use",{href:ie+"#icon-checkbox-error"})}),p.name]}):c.name?y.jsxs(wt,{children:[y.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:y.jsx("use",{href:ie+"#icon-checkbox-success"})}),"Формат вірний"]}):null]}),y.jsxs("div",{children:[y.jsx("div",{children:y.jsx(Gr,{type:"email",name:"email",placeholder:"Email",onBlur:l,className:"StyledField"})}),c.email&&p.email?y.jsxs(St,{children:[y.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:y.jsx("use",{href:ie+"#icon-checkbox-error"})}),p.email]}):c.email?y.jsxs(wt,{children:[y.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:y.jsx("use",{href:ie+"#icon-checkbox-success"})}),"Формат email вірний"]}):null]}),y.jsxs("div",{children:[y.jsxs(Xl,{children:[y.jsx(ec,{id:"password",type:n,placeholder:"Password",name:"password",onBlur:l}),y.jsx(Un,{type:"button",onClick:r,children:y.jsx("svg",{width:"20",height:"20",children:y.jsx("use",{href:ie+`${i?"#icon-eye-off":"#icon-eye"}`})})})]}),c.password&&p.password?y.jsxs(St,{children:[y.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:y.jsx("use",{href:ie+"#icon-checkbox-error"})}),p.password]}):c.password?y.jsxs(wt,{children:[y.jsx("svg",{width:"16",height:"16",fill:"currentColor",children:y.jsx("use",{href:ie+"#icon-checkbox-success"})}),"Формат password вірний"]}):null]})]}),a]})})};Rt.propTypes={handleSubmit:N.func.isRequired,toglePassword:N.func.isRequired,passwordInput:N.string.isRequired,isPassword:N.bool.isRequired,nameIsShown:N.bool.isRequired,children:N.node};const tc=I.button`
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  background: #ebecf0;
  display: flex;
  /* padding: 12px 40px; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: #ae1100;
  /* color: #61677c; */

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;

  font-weight: bold;
  line-height: 18px;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #fff;
  /* margin-bottom: 12px; */
  box-shadow:
    -5px -5px 20px #fff,
    5px 5px 20px #babecc;

  /* &:hover {
    background-color: var(--light-accent-color);
  } */

  &:active {
    /* transform: scale(0.95); */

    box-shadow:
      inset 1px 1px 2px #babecc,
      inset -1px -1px 2px #fff;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
`,Dt=({text:e,type:t})=>y.jsx(tc,{type:t,children:e});Dt.propTypes={text:N.string.isRequired,type:N.string.isRequired};const rc=I(ti)`
  margin-left: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration-line: underline;

  color: var(--primary-text-color);
`,nc=I.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`,Vn=({text:e,textLink:t,to:r})=>y.jsxs(nc,{children:[e,y.jsx(rc,{to:r,children:t})]});Vn.propTypes={text:N.string.isRequired,textLink:N.string.isRequired,to:N.string.isRequired};const ic="/Gayovik-agro/assets/harvester@3x-50b537ea.jpg",ac="/Gayovik-agro/assets/harvester-88111bf0.jpg",sc=I.h1`
  color: black;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,oc=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #e9e9e9;
  background-image: url(${ic});
  /* background: url('https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg'); */
  background-attachment: fixed;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  /* display: grid; */
  height: 100vh;
`,uc=I.div`
  /* background-color: #e9e9e9; */
  background-color: #ebecf0;
  border-radius: 0.7rem;
  box-shadow:
    0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;

  /* transform: translateX(100%); */
`,lc=I.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;

  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;

  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
`,cc=I.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  position: absolute;
  top: 0;

  /* overflow: scroll; */
  transition: all 0.6s ease-in-out;
  transform: translateX(100%);

  left: 0;
  width: 50%;
  z-index: 2;
`;I.h2`
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
`;I.a`
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
`;I.form`
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
`;I.input`
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
`;const Hr=I.button`
  /* background-color: #0367a6; */
  background-color: #ebecf0;
  /* background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%); */
  border-radius: 20px;
  /* border: 1px solid #0367a6; */
  border: none;
  color: #61677c;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-shadow: 1px 1px 0 #fff;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  box-shadow:
    -5px -5px 20px gray,
    5px 5px 20px #babecc;

  &:active {
    /* transform: scale(0.95); */
    box-shadow:
      inset 5px 5px 6px gray,
      inset -5px -5px 6px #fff;
  }

  &:focus {
    outline: none;
  }

  ${e=>e.formButton&&`
    margin-top: 1.5rem;
  `}
`,fc=I.div`
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;

  transform: translateX(-100%);
`,dc=I.div`
  background-color: #008997;
  background-image: url(${ac});
  /* background: url('https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg'); */
  background-attachment: fixed;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(50%);
  transition: transform 0.6s ease-in-out;
  width: 200%;
`,pc=I.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  /* transform: translateX(-20%); */
`,hc=I.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  right: 0;
  transform: translateX(0);
`;ri`
  ${ni`
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  `}
`;const bc=()=>y.jsxs(oc,{className:"Cont",children:[y.jsx(sc,{children:"Hi SignUpPage"}),y.jsxs(uc,{className:"Container",children:[y.jsx(lc,{className:"SignUpContainer",children:y.jsxs(Rt,{nameIsShown:!1,children:[y.jsx(Dt,{text:"Sign Up",type:"submit"}),y.jsx(Vn,{text:"Already have an account?",textLink:"Sign In",to:"/signin"})]})}),y.jsx(cc,{className:"SignInContainer",children:y.jsx(Rt,{nameIsShown:!0,children:y.jsx(Dt,{text:"Реєстрація",type:"submit",className:"AuthFormButton"})})}),y.jsx(fc,{className:"container__overlay",children:y.jsxs(dc,{className:"Overlay",children:[y.jsx(pc,{className:"overlay--left",children:y.jsx(Hr,{className:"button-signIn",id:"signIn",children:"Вхід"})}),y.jsx(hc,{className:"overlay--right",children:y.jsx(Hr,{className:"button-signUp",id:"signUp",children:"Sign Up"})})]})})]})]});export{bc as default};
