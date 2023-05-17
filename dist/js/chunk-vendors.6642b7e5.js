(self["webpackChunkexpense_tracker2"]=self["webpackChunkexpense_tracker2"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(7045),y=n(7976),v=n(9518),w=n(7674),_=n(5112),b=n(9711),I=n(9909),E=I.enforce,T=I.get,S=c.Int8Array,k=S&&S.prototype,A=c.Uint8ClampedArray,C=A&&A.prototype,x=S&&v(S),N=k&&v(k),R=Object.prototype,D=c.TypeError,O=_("toStringTag"),P=b("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=o&&!!w&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},B=function(e){var t=v(e);if(l(t)){var n=T(t);return n&&h(n,M)?n[M]:B(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},$=function(e){if(q(e))return e;throw D("Target is not a typed array")},z=function(e){if(u(e)&&(!w||y(x,e)))return e;throw D(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}N[e]&&!n||m(N,e,n?t:L&&k[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(x[e]&&!n)return;try{return m(x,e,n?t:L&&x[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?E(s)[M]=i:L=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(E(s)[M]=i);if((!L||!u(x)||x===Function.prototype)&&(x=function(){throw D("Incorrect invocation")},L))for(r in V)c[r]&&w(c[r],x);if((!L||!N||N===R)&&(N=x.prototype,L))for(r in V)c[r]&&w(c[r].prototype,N);if(L&&v(C)!==N&&w(C,N),a&&!h(N,O))for(r in F=!0,g(N,O,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&P,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:j,isTypedArray:q,TypedArray:x,TypedArrayPrototype:N}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw m(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293),s=n(7854),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1439:function(e,t,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3767:function(e,t,n){n(1439)},8585:function(e,t,n){n(7585)},8696:function(e,t,n){n(5315)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,_);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in y(g),I="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),S=b&&!T&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var k=s(g),A=k.prototype;if(A.constructor!==k)for(var C in m||a(A,"constructor",o(1,k)),d)if(c(d,C)){var x=d[C],N=x.s;c(k,N)||a(k,N,o(6,x.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return w},G6:function(){return C},L:function(){return c},LL:function(){return O},Pz:function(){return v},Sg:function(){return _},UG:function(){return E},ZB:function(){return l},ZR:function(){return D},aH:function(){return y},b$:function(){return k},eu:function(){return N},hl:function(){return x},jU:function(){return T},m9:function(){return H},ne:function(){return $},pd:function(){return q},r3:function(){return L},ru:function(){return S},tV:function(){return u},uI:function(){return I},vZ:function(){return V},w1:function(){return A},xO:function(){return j},xb:function(){return F},z$:function(){return b},zd:function(){return B}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function E(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){return"object"===typeof self&&self.self===self}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function P(e,t){return e.replace(M,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(U(n)&&U(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return Ge},IU:function(){return Ne},Jd:function(){return T},PG:function(){return ke},SU:function(){return Be},Um:function(){return Ee},WL:function(){return $e},X$:function(){return C},X3:function(){return xe},XI:function(){return Ve},Xl:function(){return Re},dq:function(){return Le},iH:function(){return Fe},j:function(){return k},lk:function(){return S},nZ:function(){return a},qj:function(){return Ie},qq:function(){return _},yT:function(){return Ce}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=y,t=I;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,I=!0,m=1<<++p,p<=g?h(this):b(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,y=this.parent,I=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function T(){E.push(I),I=!1}function S(){const e=E.pop();I=void 0===e||e}function k(e,t,n){if(I&&y){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;A(r,i)}}function A(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function C(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(v));break}if(1===u.length)u[0]&&x(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);x(c(e))}}function x(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&N(r,t);for(const r of n)r.computed||N(r,t)}function N(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=U(),P=U(!1,!0),M=U(!0),L=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ne(this)[t].apply(this,e);return S(),n}})),e}function V(e){const t=Ne(this);return k(t,"has",e),t.hasOwnProperty(e)}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?we:ve:t?ye:ge).get(n))return n;const o=(0,r.kJ)(n);if(!e){if(o&&(0,r.RI)(L,i))return Reflect.get(L,i,s);if("hasOwnProperty"===i)return V}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?D.has(i):R(i))?a:(e||k(n,"get",i),t?a:Le(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Te(a):Ie(a):a)}}const j=q(),B=q(!0);function q(e=!1){return function(t,n,i,s){let o=t[n];if(Ae(o)&&Le(o)&&!Le(i))return!1;if(!e&&(Ce(i)||Ae(i)||(o=Ne(o),i=Ne(i)),!(0,r.kJ)(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ne(s)&&(a?(0,r.aU)(i,o)&&C(t,"set",n,i,o):C(t,"add",n,i)),c}}function $(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&C(e,"delete",t,void 0,i),s}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||k(e,"has",t),n}function G(e){return k(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const K={get:O,set:j,deleteProperty:$,has:z,ownKeys:G},H={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,r.l7)({},K,{get:P,set:B}),Q=e=>e,J=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),s=Ne(t);n||(t!==s&&k(i,"get",t),k(i,"get",s));const{has:o}=J(i),a=r?Q:n?Oe:De;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&k(Ne(e),"iterate",v),Reflect.get(e,"size",e)}function ee(e){e=Ne(e);const t=Ne(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function te(e,t){t=Ne(t);const n=Ne(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=Ne(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function ne(e){const t=Ne(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&C(t,"delete",e,void 0,s),o}function re(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ne(s),a=t?Q:e?Oe:De;return!e&&k(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=Ne(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?Q:t?Oe:De;return!t&&k(o,"iterate",u?w:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Y(this,e)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ce,ue,le,he]=ae();function de(e,t){const n=t?e?he:le:e?ue:ce;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},me={get:de(!0,!1)};const ge=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,r.W7)(e))}function Ie(e){return Ae(e)?e:Se(e,!1,K,fe,ge)}function Ee(e){return Se(e,!1,W,pe,ye)}function Te(e){return Se(e,!0,H,me,ve)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ke(e){return Ae(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return!(!e||!e["__v_isShallow"])}function xe(e){return ke(e)||Ae(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const De=e=>(0,r.Kn)(e)?Ie(e):e,Oe=e=>(0,r.Kn)(e)?Te(e):e;function Pe(e){I&&y&&(e=Ne(e),A(e.dep||(e.dep=c())))}function Me(e,t){e=Ne(e);const n=e.dep;n&&x(n)}function Le(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Ue(e,!1)}function Ve(e){return Ue(e,!0)}function Ue(e,t){return Le(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ne(e),this._value=t?e:De(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||Ce(e)||Ae(e);e=t?e:Ne(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:De(e),Me(this,e))}}function Be(e){return Le(e)?e.value:e}const qe={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return ke(e)?e:new Proxy(e,qe)}class ze{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Me(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new ze(i,s,o||!s,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Cn:function(){return L},FN:function(){return yn},Fl:function(){return Ln},HY:function(){return Lt},JJ:function(){return ut},Ko:function(){return Ve},P$:function(){return ie},Q6:function(){return le},U2:function(){return oe},Uk:function(){return on},Us:function(){return Nt},Wm:function(){return tn},Y3:function(){return v},Y8:function(){return ee},YP:function(){return H},_:function(){return en},aZ:function(){return he},dD:function(){return M},f3:function(){return lt},h:function(){return Fn},iD:function(){return Ht},ic:function(){return ke},j4:function(){return Wt},kq:function(){return an},nJ:function(){return ne},nK:function(){return ue},up:function(){return Pe},w5:function(){return F},wg:function(){return qt},wy:function(){return X}});n(7658);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=k(h[r]);i<e?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),b())}function b(){u||l||(l=!0,y=g.then(C))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),b()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){l=!1,u=!0,h.sort(A);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&C(e)}}function x(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function N(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,O=null;function P(e){const t=D;return D=e,O=e&&e.type.__scopeId||null,t}function M(e){O=e}function L(){O=null}function F(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Gt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function V(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const _=P(e);try{if(4&n.shapeFlag){const e=s||r;v=cn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=cn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:U(l)}}catch(I){jt.length=0,a(I,e,1),v=tn(Vt)}let b=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(w=j(w,c)),b=sn(b,w))}return n.dirs&&(b=sn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,P(_),v}const U=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function B(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||q(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?q(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!R(u,n))return!0}}return!1}function q(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!R(n,s))return!0}return!1}function $({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function G(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const K={};function H(e,t,n){return W(e,t,n)}function W(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=gn)?void 0:h.scope)?gn:null;let f,p,m=!1,g=!1;if((0,r.dq)(e)?(f=()=>e.value,m=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,m=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Y(e):(0,i.mf)(e)?s(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[v])}:i.dG,t&&a){const e=f;f=()=>Y(e())}let y,v=e=>{p=E.onStop=()=>{s(e,d,4)}};if(kn){if(v=i.dG,t?n&&o(t,d,3,[f(),g?[]:void 0,v]):f(),"sync"!==c)return i.dG;{const e=Un();y=e.__watcherHandles||(e.__watcherHandles=[])}}let w=g?new Array(e.length).fill(K):K;const b=()=>{if(E.active)if(t){const e=E.run();(a||m||(g?e.some(((e,t)=>(0,i.aU)(e,w[t]))):(0,i.aU)(e,w)))&&(p&&p(),o(t,d,3,[e,w===K?void 0:g&&w[0]===K?[]:w,v]),w=e)}else E.run()};let I;b.allowRecurse=!!t,"sync"===c?I=b:"post"===c?I=()=>xt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),I=()=>_(b));const E=new r.qq(f,I);t?n?b():w=E.run():"post"===c?xt(E.run.bind(E),d&&d.suspense):E.run();const T=()=>{E.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,E)};return y&&y.push(T),T}function Q(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?J(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=gn;bn(this);const c=W(s,o.bind(r),n);return a?bn(a):In(),c}function J(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Y(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Y(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Y(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Y(e,t)}));else if((0,i.PO)(e))for(const n in e)Y(e[n],t);return e}function X(e,t){const n=D;if(null===n)return e;const r=On(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Y(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Z(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Ae((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},re={name:"BaseTransition",props:ne,setup(e,{slots:t}){const n=yn(),i=ee();let s;return()=>{const o=t.default&&le(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Vt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ae(a);const l=ce(a);if(!l)return ae(a);const h=oe(l,c,i,n);ue(l,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Vt&&(!Jt(l,f)||p)){const e=oe(f,c,i,n);if(ue(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ae(a);"in-out"===u&&l.type!==Vt&&(e.delayLeave=(e,t,n)=>{const r=se(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ie=re;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:_}=t,b=String(e.key),I=se(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=I[b];i&&Jt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=_||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),E(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,o]):o()},clone(e){return oe(e,t,n,r)}};return S}function ae(e){if(fe(e))return e=sn(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function ue(e,t){6&e.shapeFlag&&e.component?ue(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function le(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Lt?(128&o.patchFlag&&i++,r=r.concat(le(o.children,t,a))):(t||o.type!==Vt)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function he(e,t){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},t,{setup:e}))():e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,i.kJ)(e)?e.some((e=>pe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function me(e,t){ye(e,"a",t)}function ge(e,t){ye(e,"da",t)}function ye(e,t,n=gn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ve(r,t,n,e),e=e.parent}}function ve(e,t,n,r){const s=be(t,e,r,!0);Ce((()=>{(0,i.Od)(r[t],s)}),n)}function we(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _e(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=gn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),bn(n);const s=o(t,n,e,i);return In(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ie=e=>(t,n=gn)=>(!kn||"sp"===e)&&be(e,((...e)=>t(...e)),n),Ee=Ie("bm"),Te=Ie("m"),Se=Ie("bu"),ke=Ie("u"),Ae=Ie("bum"),Ce=Ie("um"),xe=Ie("sp"),Ne=Ie("rtg"),Re=Ie("rtc");function De(e,t=gn){be("ec",e,t)}const Oe="components";function Pe(e,t){return Le(Oe,e,!0,t)||e}const Me=Symbol.for("v-ndc");function Le(e,t,n=!0,r=!1){const s=D||gn;if(s){const n=s.type;if(e===Oe){const e=Pn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Fe(s[e]||n[e],t)||Fe(s.appContext[e],t);return!o&&r?n:o}}function Fe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Ve(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ue=e=>e?En(e)?On(e)||e.proxy:Ue(e.parent):null,je=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ue(e.parent),$root:e=>Ue(e.root),$emit:e=>e.emit,$options:e=>Qe(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>Q.bind(e)}),Be=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),qe={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Be(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];ze&&(c[t]=0)}}const d=je[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Be(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Be(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(je,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $e(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let ze=!0;function Ge(e){const t=Qe(e),n=e.proxy,s=e.ctx;ze=!1,t.beforeCreate&&He(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:x,components:N,directives:R,filters:D}=t,O=null;if(h&&Ke(h,s,O),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Ln({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)We(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ut(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&He(d,e,"c"),P(Ee,f),P(Te,p),P(Se,m),P(ke,g),P(me,y),P(ge,v),P(De,k),P(Re,T),P(Ne,S),P(Ae,_),P(Ce,I),P(xe,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=x&&(e.inheritAttrs=x),N&&(e.components=N),R&&(e.directives=R)}function Ke(e,t,n=i.dG){(0,i.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let o;o=(0,i.Kn)(n)?"default"in n?lt(n.from||s,n.default,!0):lt(n.from||s):lt(n),(0,r.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function He(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function We(e,t,n,r){const s=r.includes(".")?J(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&H(s,n)}else if((0,i.mf)(e))H(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>We(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&H(s,r,e)}else 0}function Qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Je(u,e,a,!0))),Je(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function Je(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Je(e,s,n,!0),i&&i.forEach((t=>Je(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ye[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ye={data:Xe,props:rt,emits:rt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:it,provide:Xe,inject:Ze};function Xe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function rt(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),$e(e),$e(null!=t?t:{})):t}function it(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function st(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ot=0;function at(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=st();const o=new Set;let a=!1;const c=s.app={_uid:ot++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:jn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=tn(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,On(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){ct=c;try{return e()}finally{ct=null}}};return c}}let ct=null;function ut(e,t){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const r=gn||D;if(r||ct){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ct._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function ht(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Yt,1),e.propsDefaults=Object.create(null),ft(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function dt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ft(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=pt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(R(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=pt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ft(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:R(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=pt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function pt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(bn(s),r=i[n]=e.call(null,t),In())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function mt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=mt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);gt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(gt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=wt(Boolean,r.type),n=wt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function gt(e){return"$"!==e[0]}function yt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function vt(e,t){return yt(e)===yt(t)}function wt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>vt(t,e))):(0,i.mf)(t)&&vt(t,e)?0:-1}const _t=e=>"_"===e[0]||"$stable"===e,bt=e=>(0,i.kJ)(e)?e.map(cn):[cn(e)],It=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>bt(t(...e))),n);return r._c=!1,r},Et=(e,t,n)=>{const r=e._ctx;for(const s in e){if(_t(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=It(s,n,r);else if(null!=n){0;const e=bt(n);t[s]=()=>e}}},Tt=(e,t)=>{const n=bt(t);e.slots.default=()=>n},St=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Et(t,e.slots={})}else e.slots={},t&&Tt(e,t);(0,i.Nj)(e.slots,Yt,1)},kt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Et(t,s)),a=t}else t&&(Tt(e,t),a={default:1});if(o)for(const i in s)_t(i)||i in a||delete s[i]};function At(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>At(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(de(o)&&!a)return;const c=4&o.shapeFlag?On(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,xt(r,n)):r()}else 0}}function Ct(){}const xt=G;function Nt(e){return Rt(e)}function Rt(e,t){Ct();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Jt(e,t)&&(r=X(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ft:v(e,t,n,r);break;case Vt:w(e,t,n,r);break;case Ut:null==e&&b(t,n,r,o);break;case Lt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&At(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},C=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&Z(e,null,r,"created"),x(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,Y);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&dn(p,r,e)}w&&Z(e,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;_&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||_||w)&&xt((()=>{p&&dn(p,r,e),_&&v.enter(f),w&&Z(e,null,r,"mounted")}),o)},x=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?un(e[u]):cn(e[u]);y(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Dt(n,!1),(g=m.onVnodeBeforeUpdate)&&dn(g,n,t,e),f&&Z(t,e,n,"beforeUpdate"),n&&Dt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,u,n,r,y,o):c||q(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,Y)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||O(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&xt((()=>{g&&dn(g,n,t,e),f&&Z(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Lt||!Jt(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},O=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,Y);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,Y)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Ot(e,t,!0)):q(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):L(t,n,r,i,s,o,c):F(e,t,c)},L=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(fe(e)&&(a.ctx.renderer=te),An(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=tn(Vt);w(null,e,t,n)}}else U(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(B(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,Dt(e,!1),n?(n.el=l.el,j(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&dn(t,u,n,l),Dt(e,!0);const d=V(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&$(e,d.el),s&&xt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&xt((()=>dn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=de(t);if(Dt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&dn(r,d,t),Dt(e,!0),c&&re){const n=()=>{e.subTree=V(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=V(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&xt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;xt((()=>dn(r,d,e)),o)}(256&t.shapeFlag||d&&de(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&xt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>_(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,Dt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,dt(e,t.props,i,n),kt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Y(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):Y(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},z=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?un(t[f]):cn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?Y(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?un(t[l]):cn(t[l]);if(!Jt(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?un(t[f]):cn(t[f]);if(!Jt(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?un(t[l]):cn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?un(t[l]):cn(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const _=f-m+1;let b=!1,I=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Jt(r,t[v])){i=v;break}void 0===i?H(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const T=b?Pt(E):i.Z6;for(v=T.length-1,l=_-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==T[v]?K(i,n,d,2):v--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Lt){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ut)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),xt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&At(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!de(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&dn(m,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Z(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Lt||h>0&&64&h)?Y(u,t,n,!1,!0):(s===Lt&&384&h||!i&&16&l)&&Y(c,t,n),r&&W(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&xt((()=>{m&&dn(m,t,e),f&&Z(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Lt)return void Q(n,r);if(t===Ut)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&xt(c,t),xt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),T(),S(),t._vnode=e},te={p:y,um:H,m:K,r:W,mt:L,mc:N,pc:q,pbc:D,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:at(ee,ne)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ot(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=un(s[i]),t.el=e.el),n||Ot(e,t)),t.type===Ft&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Mt=e=>e.__isTeleport;const Lt=Symbol.for("v-fgt"),Ft=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),Ut=Symbol.for("v-stc"),jt=[];let Bt=null;function qt(e=!1){jt.push(Bt=e?null:[])}function $t(){jt.pop(),Bt=jt[jt.length-1]||null}let zt=1;function Gt(e){zt+=e}function Kt(e){return e.dynamicChildren=zt>0?Bt||i.Z6:null,$t(),zt>0&&Bt&&Bt.push(e),e}function Ht(e,t,n,r,i,s){return Kt(en(e,t,n,r,i,s,!0))}function Wt(e,t,n,r,i){return Kt(tn(e,t,n,r,i,!0))}function Qt(e){return!!e&&!0===e.__v_isVNode}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Xt=({key:e})=>null!=e?e:null,Zt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,r=0,s=null,o=(e===Lt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Zt(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(ln(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),zt>0&&!a&&Bt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Bt.push(u),u}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Me||(e=Vt),Qt(e)){const r=sn(e,t,!0);return n&&ln(r,n),zt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if(Mn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:z(e)?128:Mt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,r.X3)(e)||Yt in e?(0,i.l7)({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?hn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Zt(t)):[s,Zt(t)]:Zt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function on(e=" ",t=0){return tn(Ft,null,e,t)}function an(e="",t=!1){return t?(qt(),Wt(Vt,null,e)):tn(Vt,null,e)}function cn(e){return null==e||"boolean"===typeof e?tn(Vt):(0,i.kJ)(e)?tn(Lt,null,e.slice()):"object"===typeof e?un(e):tn(Ft,null,String(e))}function un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Yt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function hn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function dn(e,t,n,r=null){o(e,t,7,[n,r])}const fn=st();let pn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||fn,a={uid:pn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mt(s,o),emitsOptions:N(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=x.bind(null,a),e.ce&&e.ce(a),a}let gn=null;const yn=()=>gn||D;let vn,wn,_n="__VUE_INSTANCE_SETTERS__";(wn=(0,i.E9)()[_n])||(wn=(0,i.E9)()[_n]=[]),wn.push((e=>gn=e)),vn=e=>{wn.length>1?wn.forEach((t=>t(e))):wn[0](e)};const bn=e=>{vn(e),e.scope.on()},In=()=>{gn&&gn.scope.off(),vn(null)};function En(e){return 4&e.vnode.shapeFlag}let Tn,Sn,kn=!1;function An(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,i=En(e);ht(e,n,i,t),St(e,r);const s=i?Cn(e,t):void 0;return kn=!1,s}function Cn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,qe));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Dn(e):null;bn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),In(),(0,i.tI)(c)){if(c.then(In,In),t)return c.then((n=>{xn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else xn(e,c,t)}else Nn(e,t)}function xn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Nn(e,n)}function Nn(e,t,n){const s=e.type;if(!e.render){if(!t&&Tn&&!s.render){const t=s.template||Qe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Tn(t,c)}}e.render=s.render||i.dG,Sn&&Sn(e)}bn(e),(0,r.Jd)(),Ge(e),(0,r.lk)(),In()}function Rn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function Dn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Rn(e)},slots:e.slots,emit:e.emit,expose:t}}function On(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in je?je[n](e):void 0},has(e,t){return t in e||t in je}}))}function Pn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Mn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Ln=(e,t)=>(0,r.Fl)(e,t,kn);function Fn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Qt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Qt(n)&&(n=[n]),tn(e,t,n))}const Vn=Symbol.for("v-scx"),Un=()=>{{const e=lt(Vn);return e}};const jn="3.3.2"},9242:function(e,t,n){"use strict";n.d(t,{bM:function(){return ue},iM:function(){return pe},nr:function(){return ce},ri:function(){return ve}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const y="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(y,t.slice(6,t.length)):e.setAttributeNS(y,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function _(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=T(t);if(r){const o=s[t]=C(r,i);_(e,n,o,a)}else o&&(b(e,n,o,a),s[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const k=Promise.resolve(),A=()=>S||(k.then((()=>S=0)),S=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=A(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,R=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",P="animation",M=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);M.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=M.props=(0,r.l7)({},i.nJ,L),V=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in L||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:I,onBeforeAppear:E=v,onAppear:T=w,onAppearCancelled:S=_}=t,k=(e,t,n)=>{z(e,t?h:c),z(e,t?l:a),n&&n()},A=(e,t)=>{e._isLeaving=!1,z(e,d),z(e,p),z(e,f),t&&t()},C=e=>(t,n)=>{const r=e?T:w,s=()=>k(t,e,n);V(r,[t,s]),G((()=>{z(t,e?u:o),$(t,e?h:c),U(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){V(v,[e]),$(e,o),$(e,a)},onBeforeAppear(e){V(E,[e]),$(e,u),$(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>A(e,t);$(e,d),Y(),$(e,f),G((()=>{e._isLeaving&&(z(e,d),$(e,p),U(b)||H(e,i,y,n))})),V(b,[e,n])},onEnterCancelled(e){k(e,!1),V(_,[e])},onAppearCancelled(e){k(e,!0),V(S,[e])},onLeaveCancelled(e){A(e),V(I,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let K=0;function H(e,t,n,r){const i=e._endId=++K,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function W(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${O}Delay`),s=r(`${O}Duration`),o=Q(i,s),a=r(`${P}Delay`),c=r(`${P}Duration`),u=Q(a,c);let l=null,h=0,d=0;t===O?o>0&&(l=O,h=o,d=s.length):t===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?O:P:null,d=l?l===O?s.length:c.length:0);const f=l===O&&/\b(transform|all)(,|$)/.test(r(`${O}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const r=o.filter(re);Y(),r.forEach((e=>{const n=e.el,r=n.style;$(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=j(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),X.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function re(e){const t=X.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=W(r);return i.removeChild(r),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=se(s);const o=i||s.props&&"number"===s.props.type;_(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),e._assign(i)})),n&&_(e,"change",(()=>{e.value=e.value.trim()})),t||(_(e,"compositionstart",oe),_(e,"compositionend",ae),_(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ue={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);_(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.h5)(he(e)):he(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=se(i)},mounted(e,{value:t}){le(e,t)},beforeUpdate(e,t,n){e._assign=se(n)},updated(e,{value:t}){le(e,t)}};function le(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=he(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(he(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function he(e){return"_value"in e?e._value:e.value}const de=["ctrl","shift","alt","meta"],fe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>de.some((n=>e[`${n}Key`]&&!t.includes(n)))},pe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=fe[t[e]];if(r&&r(n,t))return}return e(n,...r)};const me=(0,r.l7)({patchProp:R},u);let ge;function ye(){return ge||(ge=(0,i.Us)(me))}const ve=(...e)=>{const t=ye().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=we(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function we(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return X},DM:function(){return y},E9:function(){return z},F7:function(){return u},Gg:function(){return N},HD:function(){return b},He:function(){return q},Kj:function(){return w},Kn:function(){return E},NO:function(){return a},Nj:function(){return j},Od:function(){return d},PO:function(){return C},Pq:function(){return ee},RI:function(){return p},S0:function(){return x},W7:function(){return A},WV:function(){return re},Z6:function(){return s},_A:function(){return O},_N:function(){return g},aU:function(){return V},dG:function(){return o},e1:function(){return K},fY:function(){return r},h5:function(){return B},hR:function(){return F},hq:function(){return ie},ir:function(){return U},j5:function(){return H},kC:function(){return L},kJ:function(){return m},kT:function(){return i},l7:function(){return h},mf:function(){return _},rs:function(){return M},tI:function(){return T},tR:function(){return l},yA:function(){return te},yk:function(){return I},zw:function(){return se}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=e=>c.test(e),l=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),m=Array.isArray,g=e=>"[object Map]"===k(e),y=e=>"[object Set]"===k(e),v=e=>"[object Date]"===k(e),w=e=>"[object RegExp]"===k(e),_=e=>"function"===typeof e,b=e=>"string"===typeof e,I=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>E(e)&&_(e.then)&&_(e.catch),S=Object.prototype.toString,k=e=>S.call(e),A=e=>k(e).slice(8,-1),C=e=>"[object Object]"===k(e),x=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},D=/-(\w)/g,O=R((e=>e.replace(D,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,M=R((e=>e.replace(P,"-$1").toLowerCase())),L=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=R((e=>e?`on${L(e)}`:"")),V=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const z=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const G="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(G);function H(e){if(m(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?Y(r):H(r);if(i)for(const e in i)t[e]=i[e]}return t}return b(e)||E(e)?e:void 0}const W=/;(?![^(]*\))/g,Q=/:([^]+)/,J=new RegExp("\\/\\*.*?\\*\\/","gs");function Y(e){const t={};return e.replace(J,"").split(W).forEach((e=>{if(e){const n=e.split(Q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(b(e))t=e;else if(m(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Z);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=I(e),r=I(t),n||r)return e===t;if(n=m(e),r=m(t),n||r)return!(!n||!r)&&ne(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}const se=e=>b(e)?e:null==e?"":m(e)||E(e)&&(e.toString===S||!_(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:y(t)?{[`Set(${t.size})`]:[...t.values()]}:!E(t)||m(t)||C(t)?t:String(t)},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(223),i=n(7142),s=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},7077:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return _e},getApps:function(){return be},initializeApp:function(){return we},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return Se}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}w((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",D="0.9.10",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",G="@firebase/installations",K="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.22.0",se="[DEFAULT]",oe={[R]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[G]:"fire-iid",[K]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ye(n,i,c);return ae.set(o,u),u}function _e(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function be(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ae=1,Ce="firebase-heartbeat-store";let xe=null;function Ne(){return xe||(xe=T(ke,Ae,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),xe}async function Re(e){try{const t=await Ne(),n=await t.transaction(Ce).objectStore(Ce).get(Oe(e));return n}catch(t){if(t instanceof s.ZR)O.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function De(e,t){try{const n=await Ne(),r=n.transaction(Ce,"readwrite"),i=r.objectStore(Ce);await i.put(t,Oe(e)),await r.done}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Me=2592e6;class Le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Me})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r.wA("platform-logger",(e=>new x(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Le(e)),"PRIVATE")),Ee(R,D,e),Ee(R,D,"esm2017"),Ee("fire-js","")}Be("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},240:function(e,t,n){"use strict";function r(){}function i(e){return null==e?r:function(){return this.querySelector(e)}}function s(e){"function"!==typeof e&&(e=i(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var o,a,c=t[s],u=c.length,l=r[s]=new Array(u),h=0;h<u;++h)(o=c[h])&&(a=e.call(o,o.__data__,h,c))&&("__data__"in o&&(a.__data__=o.__data__),l[h]=a);return new Ze(r,this._parents)}n.d(t,{Nb1:function(){return os},ve8:function(){return ls},PKp:function(){return Ci},Ys:function(){return xi}});n(7658);function o(e){return null==e?[]:Array.isArray(e)?e:Array.from(e)}function a(){return[]}function c(e){return null==e?a:function(){return this.querySelectorAll(e)}}function u(e){return function(){return o(e.apply(this,arguments))}}function l(e){e="function"===typeof e?u(e):c(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var o,a=t[s],l=a.length,h=0;h<l;++h)(o=a[h])&&(r.push(e.call(o,o.__data__,h,a)),i.push(o));return new Ze(r,i)}function h(e){return function(){return this.matches(e)}}function d(e){return function(t){return t.matches(e)}}var f=Array.prototype.find;function p(e){return function(){return f.call(this.children,e)}}function m(){return this.firstElementChild}function g(e){return this.select(null==e?m:p("function"===typeof e?e:d(e)))}var y=Array.prototype.filter;function v(){return Array.from(this.children)}function w(e){return function(){return y.call(this.children,e)}}function _(e){return this.selectAll(null==e?v:w("function"===typeof e?e:d(e)))}function b(e){"function"!==typeof e&&(e=h(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s,o=t[i],a=o.length,c=r[i]=[],u=0;u<a;++u)(s=o[u])&&e.call(s,s.__data__,u,o)&&c.push(s);return new Ze(r,this._parents)}function I(e){return new Array(e.length)}function E(){return new Ze(this._enter||this._groups.map(I),this._parents)}function T(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}function S(e){return function(){return e}}function k(e,t,n,r,i,s){for(var o,a=0,c=t.length,u=s.length;a<u;++a)(o=t[a])?(o.__data__=s[a],r[a]=o):n[a]=new T(e,s[a]);for(;a<c;++a)(o=t[a])&&(i[a]=o)}function A(e,t,n,r,i,s,o){var a,c,u,l=new Map,h=t.length,d=s.length,f=new Array(h);for(a=0;a<h;++a)(c=t[a])&&(f[a]=u=o.call(c,c.__data__,a,t)+"",l.has(u)?i[a]=c:l.set(u,c));for(a=0;a<d;++a)u=o.call(e,s[a],a,s)+"",(c=l.get(u))?(r[a]=c,c.__data__=s[a],l.delete(u)):n[a]=new T(e,s[a]);for(a=0;a<h;++a)(c=t[a])&&l.get(f[a])===c&&(i[a]=c)}function C(e){return e.__data__}function x(e,t){if(!arguments.length)return Array.from(this,C);var n=t?A:k,r=this._parents,i=this._groups;"function"!==typeof e&&(e=S(e));for(var s=i.length,o=new Array(s),a=new Array(s),c=new Array(s),u=0;u<s;++u){var l=r[u],h=i[u],d=h.length,f=N(e.call(l,l&&l.__data__,u,r)),p=f.length,m=a[u]=new Array(p),g=o[u]=new Array(p),y=c[u]=new Array(d);n(l,h,m,g,y,f,t);for(var v,w,_=0,b=0;_<p;++_)if(v=m[_]){_>=b&&(b=_+1);while(!(w=g[b])&&++b<p);v._next=w||null}}return o=new Ze(o,r),o._enter=a,o._exit=c,o}function N(e){return"object"===typeof e&&"length"in e?e:Array.from(e)}function R(){return new Ze(this._exit||this._groups.map(I),this._parents)}function D(e,t,n){var r=this.enter(),i=this,s=this.exit();return"function"===typeof e?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),null!=t&&(i=t(i),i&&(i=i.selection())),null==n?s.remove():n(s),r&&i?r.merge(i).order():i}function O(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,o=Math.min(i,s),a=new Array(i),c=0;c<o;++c)for(var u,l=n[c],h=r[c],d=l.length,f=a[c]=new Array(d),p=0;p<d;++p)(u=l[p]||h[p])&&(f[p]=u);for(;c<i;++c)a[c]=n[c];return new Ze(a,this._parents)}function P(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r,i=e[t],s=i.length-1,o=i[s];--s>=0;)(r=i[s])&&(o&&4^r.compareDocumentPosition(o)&&o.parentNode.insertBefore(r,o),o=r);return this}function M(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=L);for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var o,a=n[s],c=a.length,u=i[s]=new Array(c),l=0;l<c;++l)(o=a[l])&&(u[l]=o);u.sort(t)}return new Ze(i,this._parents).order()}function L(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function F(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function V(){return Array.from(this)}function U(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var o=r[i];if(o)return o}return null}function j(){let e=0;for(const t of this)++e;return e}function B(){return!this.node()}function q(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i,s=t[n],o=0,a=s.length;o<a;++o)(i=s[o])&&e.call(i,i.__data__,o,s);return this}T.prototype={constructor:T,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var $="http://www.w3.org/1999/xhtml",z={svg:"http://www.w3.org/2000/svg",xhtml:$,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function G(e){var t=e+="",n=t.indexOf(":");return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),z.hasOwnProperty(t)?{space:z[t],local:e}:e}function K(e){return function(){this.removeAttribute(e)}}function H(e){return function(){this.removeAttributeNS(e.space,e.local)}}function W(e,t){return function(){this.setAttribute(e,t)}}function Q(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function J(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function Y(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function X(e,t){var n=G(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==t?n.local?H:K:"function"===typeof t?n.local?Y:J:n.local?Q:W)(n,t))}function Z(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ee(e){return function(){this.style.removeProperty(e)}}function te(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ne(e,t,n){return function(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function re(e,t,n){return arguments.length>1?this.each((null==t?ee:"function"===typeof t?ne:te)(e,t,null==n?"":n)):ie(this.node(),e)}function ie(e,t){return e.style.getPropertyValue(t)||Z(e).getComputedStyle(e,null).getPropertyValue(t)}function se(e){return function(){delete this[e]}}function oe(e,t){return function(){this[e]=t}}function ae(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}function ce(e,t){return arguments.length>1?this.each((null==t?se:"function"===typeof t?ae:oe)(e,t)):this.node()[e]}function ue(e){return e.trim().split(/^|\s+/)}function le(e){return e.classList||new he(e)}function he(e){this._node=e,this._names=ue(e.getAttribute("class")||"")}function de(e,t){var n=le(e),r=-1,i=t.length;while(++r<i)n.add(t[r])}function fe(e,t){var n=le(e),r=-1,i=t.length;while(++r<i)n.remove(t[r])}function pe(e){return function(){de(this,e)}}function me(e){return function(){fe(this,e)}}function ge(e,t){return function(){(t.apply(this,arguments)?de:fe)(this,e)}}function ye(e,t){var n=ue(e+"");if(arguments.length<2){var r=le(this.node()),i=-1,s=n.length;while(++i<s)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"===typeof t?ge:t?pe:me)(n,t))}function ve(){this.textContent=""}function we(e){return function(){this.textContent=e}}function _e(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}function be(e){return arguments.length?this.each(null==e?ve:("function"===typeof e?_e:we)(e)):this.node().textContent}function Ie(){this.innerHTML=""}function Ee(e){return function(){this.innerHTML=e}}function Te(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}function Se(e){return arguments.length?this.each(null==e?Ie:("function"===typeof e?Te:Ee)(e)):this.node().innerHTML}function ke(){this.nextSibling&&this.parentNode.appendChild(this)}function Ae(){return this.each(ke)}function Ce(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xe(){return this.each(Ce)}function Ne(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===$&&t.documentElement.namespaceURI===$?t.createElement(e):t.createElementNS(n,e)}}function Re(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function De(e){var t=G(e);return(t.local?Re:Ne)(t)}function Oe(e){var t="function"===typeof e?e:De(e);return this.select((function(){return this.appendChild(t.apply(this,arguments))}))}function Pe(){return null}function Me(e,t){var n="function"===typeof e?e:De(e),r=null==t?Pe:"function"===typeof t?t:i(t);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))}function Le(){var e=this.parentNode;e&&e.removeChild(this)}function Fe(){return this.each(Le)}function Ve(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ue(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function je(e){return this.select(e?Ue:Ve)}function Be(e){return arguments.length?this.property("__data__",e):this.node().__data__}function qe(e){return function(t){e.call(this,t,this.__data__)}}function $e(e){return e.trim().split(/^|\s+/).map((function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}}))}function ze(e){return function(){var t=this.__on;if(t){for(var n,r=0,i=-1,s=t.length;r<s;++r)n=t[r],e.type&&n.type!==e.type||n.name!==e.name?t[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?t.length=i:delete this.__on}}}function Ge(e,t,n){return function(){var r,i=this.__on,s=qe(t);if(i)for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===e.type&&r.name===e.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),void(r.value=t);this.addEventListener(e.type,s,n),r={type:e.type,name:e.name,value:t,listener:s,options:n},i?i.push(r):this.__on=[r]}}function Ke(e,t,n){var r,i,s=$e(e+""),o=s.length;if(!(arguments.length<2)){for(a=t?Ge:ze,r=0;r<o;++r)this.each(a(s[r],t,n));return this}var a=this.node().__on;if(a)for(var c,u=0,l=a.length;u<l;++u)for(r=0,c=a[u];r<o;++r)if((i=s[r]).type===c.type&&i.name===c.name)return c.value}function He(e,t,n){var r=Z(e),i=r.CustomEvent;"function"===typeof i?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function We(e,t){return function(){return He(this,e,t)}}function Qe(e,t){return function(){return He(this,e,t.apply(this,arguments))}}function Je(e,t){return this.each(("function"===typeof t?Qe:We)(e,t))}function*Ye(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r,i=e[t],s=0,o=i.length;s<o;++s)(r=i[s])&&(yield r)}he.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};var Xe=[null];function Ze(e,t){this._groups=e,this._parents=t}function et(){return new Ze([[document.documentElement]],Xe)}function tt(){return this}Ze.prototype=et.prototype={constructor:Ze,select:s,selectAll:l,selectChild:g,selectChildren:_,filter:b,data:x,enter:E,exit:R,join:D,merge:O,selection:tt,order:P,sort:M,call:F,nodes:V,node:U,size:j,empty:B,each:q,attr:X,style:re,property:ce,classed:ye,text:be,html:Se,raise:Ae,lower:xe,append:Oe,insert:Me,remove:Fe,clone:je,datum:Be,on:Ke,dispatch:Je,[Symbol.iterator]:Ye};var nt=et,rt={value:()=>{}};function it(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r||/[\s.]/.test(e))throw new Error("illegal type: "+e);r[e]=[]}return new st(r)}function st(e){this._=e}function ot(e,t){return e.trim().split(/^|\s+/).map((function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}}))}function at(e,t){for(var n,r=0,i=e.length;r<i;++r)if((n=e[r]).name===t)return n.value}function ct(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=rt,e=e.slice(0,r).concat(e.slice(r+1));break}return null!=n&&e.push({name:t,value:n}),e}st.prototype=it.prototype={constructor:st,on:function(e,t){var n,r=this._,i=ot(e+"",r),s=-1,o=i.length;if(!(arguments.length<2)){if(null!=t&&"function"!==typeof t)throw new Error("invalid callback: "+t);while(++s<o)if(n=(e=i[s]).type)r[n]=ct(r[n],e.name,t);else if(null==t)for(n in r)r[n]=ct(r[n],e.name,null);return this}while(++s<o)if((n=(e=i[s]).type)&&(n=at(r[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new st(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),s=0;s<n;++s)i[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(r=this._[e],s=0,n=r.length;s<n;++s)r[s].value.apply(t,i)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};var ut,lt,ht=it,dt=0,ft=0,pt=0,mt=1e3,gt=0,yt=0,vt=0,wt="object"===typeof performance&&performance.now?performance:Date,_t="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function bt(){return yt||(_t(It),yt=wt.now()+vt)}function It(){yt=0}function Et(){this._call=this._time=this._next=null}function Tt(e,t,n){var r=new Et;return r.restart(e,t,n),r}function St(){bt(),++dt;var e,t=ut;while(t)(e=yt-t._time)>=0&&t._call.call(void 0,e),t=t._next;--dt}function kt(){yt=(gt=wt.now())+vt,dt=ft=0;try{St()}finally{dt=0,Ct(),yt=0}}function At(){var e=wt.now(),t=e-gt;t>mt&&(vt-=t,gt=e)}function Ct(){var e,t,n=ut,r=1/0;while(n)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ut=t);lt=e,xt(r)}function xt(e){if(!dt){ft&&(ft=clearTimeout(ft));var t=e-yt;t>24?(e<1/0&&(ft=setTimeout(kt,e-wt.now()-vt)),pt&&(pt=clearInterval(pt))):(pt||(gt=wt.now(),pt=setInterval(At,mt)),dt=1,_t(kt))}}function Nt(e,t,n){var r=new Et;return t=null==t?0:+t,r.restart((n=>{r.stop(),e(n+t)}),t,n),r}Et.prototype=Tt.prototype={constructor:Et,restart:function(e,t,n){if("function"!==typeof e)throw new TypeError("callback is not a function");n=(null==n?bt():+n)+(null==t?0:+t),this._next||lt===this||(lt?lt._next=this:ut=this,lt=this),this._call=e,this._time=n,xt()},stop:function(){this._call&&(this._call=null,this._time=1/0,xt())}};var Rt=ht("start","end","cancel","interrupt"),Dt=[],Ot=0,Pt=1,Mt=2,Lt=3,Ft=4,Vt=5,Ut=6;function jt(e,t,n,r,i,s){var o=e.__transition;if(o){if(n in o)return}else e.__transition={};zt(e,n,{name:t,index:r,group:i,on:Rt,tween:Dt,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Ot})}function Bt(e,t){var n=$t(e,t);if(n.state>Ot)throw new Error("too late; already scheduled");return n}function qt(e,t){var n=$t(e,t);if(n.state>Lt)throw new Error("too late; already running");return n}function $t(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function zt(e,t,n){var r,i=e.__transition;function s(e){n.state=Pt,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(s){var u,l,h,d;if(n.state!==Pt)return c();for(u in i)if(d=i[u],d.name===n.name){if(d.state===Lt)return Nt(o);d.state===Ft?(d.state=Ut,d.timer.stop(),d.on.call("interrupt",e,e.__data__,d.index,d.group),delete i[u]):+u<t&&(d.state=Ut,d.timer.stop(),d.on.call("cancel",e,e.__data__,d.index,d.group),delete i[u])}if(Nt((function(){n.state===Lt&&(n.state=Ft,n.timer.restart(a,n.delay,n.time),a(s))})),n.state=Mt,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Mt){for(n.state=Lt,r=new Array(h=n.tween.length),u=0,l=-1;u<h;++u)(d=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++l]=d);r.length=l+1}}function a(t){var i=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=Vt,1),s=-1,o=r.length;while(++s<o)r[s].call(e,i);n.state===Vt&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){for(var r in n.state=Ut,n.timer.stop(),delete i[t],i)return;delete e.__transition}i[t]=n,n.timer=Tt(s,0,n.time)}function Gt(e,t){var n,r,i,s=e.__transition,o=!0;if(s){for(i in t=null==t?null:t+"",s)(n=s[i]).name===t?(r=n.state>Mt&&n.state<Vt,n.state=Ut,n.timer.stop(),n.on.call(r?"interrupt":"cancel",e,e.__data__,n.index,n.group),delete s[i]):o=!1;o&&delete e.__transition}}function Kt(e){return this.each((function(){Gt(this,e)}))}function Ht(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Wt,Qt=180/Math.PI,Jt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Yt(e,t,n,r,i,s){var o,a,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,c/=a),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Qt,skewX:Math.atan(c)*Qt,scaleX:o,scaleY:a}}function Xt(e){const t=new("function"===typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Jt:Yt(t.a,t.b,t.c,t.d,t.e,t.f)}function Zt(e){return null==e?Jt:(Wt||(Wt=document.createElementNS("http://www.w3.org/2000/svg","g")),Wt.setAttribute("transform",e),(e=Wt.transform.baseVal.consolidate())?(e=e.matrix,Yt(e.a,e.b,e.c,e.d,e.e,e.f)):Jt)}function en(e,t,n,r){function i(e){return e.length?e.pop()+" ":""}function s(e,r,i,s,o,a){if(e!==i||r!==s){var c=o.push("translate(",null,t,null,n);a.push({i:c-4,x:Ht(e,i)},{i:c-2,x:Ht(r,s)})}else(i||s)&&o.push("translate("+i+t+s+n)}function o(e,t,n,s){e!==t?(e-t>180?t+=360:t-e>180&&(e+=360),s.push({i:n.push(i(n)+"rotate(",null,r)-2,x:Ht(e,t)})):t&&n.push(i(n)+"rotate("+t+r)}function a(e,t,n,s){e!==t?s.push({i:n.push(i(n)+"skewX(",null,r)-2,x:Ht(e,t)}):t&&n.push(i(n)+"skewX("+t+r)}function c(e,t,n,r,s,o){if(e!==n||t!==r){var a=s.push(i(s)+"scale(",null,",",null,")");o.push({i:a-4,x:Ht(e,n)},{i:a-2,x:Ht(t,r)})}else 1===n&&1===r||s.push(i(s)+"scale("+n+","+r+")")}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),s(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),a(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){var t,n=-1,s=i.length;while(++n<s)r[(t=i[n]).i]=t.x(e);return r.join("")}}}var tn=en(Xt,"px, ","px)","deg)"),nn=en(Zt,", ",")",")");function rn(e,t){var n,r;return function(){var i=qt(this,e),s=i.tween;if(s!==n){r=n=s;for(var o=0,a=r.length;o<a;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function sn(e,t,n){var r,i;if("function"!==typeof n)throw new Error;return function(){var s=qt(this,e),o=s.tween;if(o!==r){i=(r=o).slice();for(var a={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=a;break}c===u&&i.push(a)}s.tween=i}}function on(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r,i=$t(this.node(),n).tween,s=0,o=i.length;s<o;++s)if((r=i[s]).name===e)return r.value;return null}return this.each((null==t?rn:sn)(n,e,t))}function an(e,t,n){var r=e._id;return e.each((function(){var e=qt(this,r);(e.value||(e.value={}))[t]=n.apply(this,arguments)})),function(e){return $t(e,r).value[t]}}function cn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function un(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ln(){}var hn=.7,dn=1/hn,fn="\\s*([+-]?\\d+)\\s*",pn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",gn=/^#([0-9a-f]{3,8})$/,yn=new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`),vn=new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`),wn=new RegExp(`^rgba\\(${fn},${fn},${fn},${pn}\\)$`),_n=new RegExp(`^rgba\\(${mn},${mn},${mn},${pn}\\)$`),bn=new RegExp(`^hsl\\(${pn},${mn},${mn}\\)$`),In=new RegExp(`^hsla\\(${pn},${mn},${mn},${pn}\\)$`),En={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Tn(){return this.rgb().formatHex()}function Sn(){return this.rgb().formatHex8()}function kn(){return Bn(this).formatHsl()}function An(){return this.rgb().formatRgb()}function Cn(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=gn.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?xn(t):3===n?new On(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?Nn(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?Nn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=yn.exec(e))?new On(t[1],t[2],t[3],1):(t=vn.exec(e))?new On(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=wn.exec(e))?Nn(t[1],t[2],t[3],t[4]):(t=_n.exec(e))?Nn(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=bn.exec(e))?jn(t[1],t[2]/100,t[3]/100,1):(t=In.exec(e))?jn(t[1],t[2]/100,t[3]/100,t[4]):En.hasOwnProperty(e)?xn(En[e]):"transparent"===e?new On(NaN,NaN,NaN,0):null}function xn(e){return new On(e>>16&255,e>>8&255,255&e,1)}function Nn(e,t,n,r){return r<=0&&(e=t=n=NaN),new On(e,t,n,r)}function Rn(e){return e instanceof ln||(e=Cn(e)),e?(e=e.rgb(),new On(e.r,e.g,e.b,e.opacity)):new On}function Dn(e,t,n,r){return 1===arguments.length?Rn(e):new On(e,t,n,null==r?1:r)}function On(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function Pn(){return`#${Un(this.r)}${Un(this.g)}${Un(this.b)}`}function Mn(){return`#${Un(this.r)}${Un(this.g)}${Un(this.b)}${Un(255*(isNaN(this.opacity)?1:this.opacity))}`}function Ln(){const e=Fn(this.opacity);return`${1===e?"rgb(":"rgba("}${Vn(this.r)}, ${Vn(this.g)}, ${Vn(this.b)}${1===e?")":`, ${e})`}`}function Fn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Vn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Un(e){return e=Vn(e),(e<16?"0":"")+e.toString(16)}function jn(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new $n(e,t,n,r)}function Bn(e){if(e instanceof $n)return new $n(e.h,e.s,e.l,e.opacity);if(e instanceof ln||(e=Cn(e)),!e)return new $n;if(e instanceof $n)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),o=NaN,a=s-i,c=(s+i)/2;return a?(o=t===s?(n-r)/a+6*(n<r):n===s?(r-t)/a+2:(t-n)/a+4,a/=c<.5?s+i:2-s-i,o*=60):a=c>0&&c<1?0:o,new $n(o,a,c,e.opacity)}function qn(e,t,n,r){return 1===arguments.length?Bn(e):new $n(e,t,n,null==r?1:r)}function $n(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function zn(e){return e=(e||0)%360,e<0?e+360:e}function Gn(e){return Math.max(0,Math.min(1,e||0))}function Kn(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}function Hn(e,t,n,r,i){var s=e*e,o=s*e;return((1-3*e+3*s-o)*t+(4-6*s+3*o)*n+(1+3*e+3*s-3*o)*r+o*i)/6}function Wn(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],s=e[r+1],o=r>0?e[r-1]:2*i-s,a=r<t-1?e[r+2]:2*s-i;return Hn((n-r/t)*t,o,i,s,a)}}function Qn(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),i=e[(r+t-1)%t],s=e[r%t],o=e[(r+1)%t],a=e[(r+2)%t];return Hn((n-r/t)*t,i,s,o,a)}}cn(ln,Cn,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Tn,formatHex:Tn,formatHex8:Sn,formatHsl:kn,formatRgb:An,toString:An}),cn(On,Dn,un(ln,{brighter(e){return e=null==e?dn:Math.pow(dn,e),new On(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?hn:Math.pow(hn,e),new On(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new On(Vn(this.r),Vn(this.g),Vn(this.b),Fn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pn,formatHex:Pn,formatHex8:Mn,formatRgb:Ln,toString:Ln})),cn($n,qn,un(ln,{brighter(e){return e=null==e?dn:Math.pow(dn,e),new $n(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?hn:Math.pow(hn,e),new $n(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new On(Kn(e>=240?e-240:e+120,i,r),Kn(e,i,r),Kn(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new $n(zn(this.h),Gn(this.s),Gn(this.l),Fn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Fn(this.opacity);return`${1===e?"hsl(":"hsla("}${zn(this.h)}, ${100*Gn(this.s)}%, ${100*Gn(this.l)}%${1===e?")":`, ${e})`}`}}));var Jn=e=>()=>e;function Yn(e,t){return function(n){return e+n*t}}function Xn(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Zn(e){return 1===(e=+e)?er:function(t,n){return n-t?Xn(t,n,e):Jn(isNaN(t)?n:t)}}function er(e,t){var n=t-e;return n?Yn(e,n):Jn(isNaN(e)?t:e)}var tr=function e(t){var n=Zn(t);function r(e,t){var r=n((e=Dn(e)).r,(t=Dn(t)).r),i=n(e.g,t.g),s=n(e.b,t.b),o=er(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=s(t),e.opacity=o(t),e+""}}return r.gamma=e,r}(1);function nr(e){return function(t){var n,r,i=t.length,s=new Array(i),o=new Array(i),a=new Array(i);for(n=0;n<i;++n)r=Dn(t[n]),s[n]=r.r||0,o[n]=r.g||0,a[n]=r.b||0;return s=e(s),o=e(o),a=e(a),r.opacity=1,function(e){return r.r=s(e),r.g=o(e),r.b=a(e),r+""}}}nr(Wn),nr(Qn);var rr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ir=new RegExp(rr.source,"g");function sr(e){return function(){return e}}function or(e){return function(t){return e(t)+""}}function ar(e,t){var n,r,i,s=rr.lastIndex=ir.lastIndex=0,o=-1,a=[],c=[];e+="",t+="";while((n=rr.exec(e))&&(r=ir.exec(t)))(i=r.index)>s&&(i=t.slice(s,i),a[o]?a[o]+=i:a[++o]=i),(n=n[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:Ht(n,r)})),s=ir.lastIndex;return s<t.length&&(i=t.slice(s),a[o]?a[o]+=i:a[++o]=i),a.length<2?c[0]?or(c[0].x):sr(t):(t=c.length,function(e){for(var n,r=0;r<t;++r)a[(n=c[r]).i]=n.x(e);return a.join("")})}function cr(e,t){var n;return("number"===typeof t?Ht:t instanceof Cn?tr:(n=Cn(t))?(t=n,tr):ar)(e,t)}function ur(e){return function(){this.removeAttribute(e)}}function lr(e){return function(){this.removeAttributeNS(e.space,e.local)}}function hr(e,t,n){var r,i,s=n+"";return function(){var o=this.getAttribute(e);return o===s?null:o===r?i:i=t(r=o,n)}}function dr(e,t,n){var r,i,s=n+"";return function(){var o=this.getAttributeNS(e.space,e.local);return o===s?null:o===r?i:i=t(r=o,n)}}function fr(e,t,n){var r,i,s;return function(){var o,a,c=n(this);if(null!=c)return o=this.getAttribute(e),a=c+"",o===a?null:o===r&&a===i?s:(i=a,s=t(r=o,c));this.removeAttribute(e)}}function pr(e,t,n){var r,i,s;return function(){var o,a,c=n(this);if(null!=c)return o=this.getAttributeNS(e.space,e.local),a=c+"",o===a?null:o===r&&a===i?s:(i=a,s=t(r=o,c));this.removeAttributeNS(e.space,e.local)}}function mr(e,t){var n=G(e),r="transform"===n?nn:cr;return this.attrTween(e,"function"===typeof t?(n.local?pr:fr)(n,r,an(this,"attr."+e,t)):null==t?(n.local?lr:ur)(n):(n.local?dr:hr)(n,r,t))}function gr(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function yr(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function vr(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&yr(e,i)),n}return i._value=t,i}function wr(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&gr(e,i)),n}return i._value=t,i}function _r(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!==typeof t)throw new Error;var r=G(e);return this.tween(n,(r.local?vr:wr)(r,t))}function br(e,t){return function(){Bt(this,e).delay=+t.apply(this,arguments)}}function Ir(e,t){return t=+t,function(){Bt(this,e).delay=t}}function Er(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?br:Ir)(t,e)):$t(this.node(),t).delay}function Tr(e,t){return function(){qt(this,e).duration=+t.apply(this,arguments)}}function Sr(e,t){return t=+t,function(){qt(this,e).duration=t}}function kr(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?Tr:Sr)(t,e)):$t(this.node(),t).duration}function Ar(e,t){if("function"!==typeof t)throw new Error;return function(){qt(this,e).ease=t}}function Cr(e){var t=this._id;return arguments.length?this.each(Ar(t,e)):$t(this.node(),t).ease}function xr(e,t){return function(){var n=t.apply(this,arguments);if("function"!==typeof n)throw new Error;qt(this,e).ease=n}}function Nr(e){if("function"!==typeof e)throw new Error;return this.each(xr(this._id,e))}function Rr(e){"function"!==typeof e&&(e=h(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s,o=t[i],a=o.length,c=r[i]=[],u=0;u<a;++u)(s=o[u])&&e.call(s,s.__data__,u,o)&&c.push(s);return new oi(r,this._parents,this._name,this._id)}function Dr(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var c,u=t[a],l=n[a],h=u.length,d=o[a]=new Array(h),f=0;f<h;++f)(c=u[f]||l[f])&&(d[f]=c);for(;a<r;++a)o[a]=t[a];return new oi(o,this._parents,this._name,this._id)}function Or(e){return(e+"").trim().split(/^|\s+/).every((function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||"start"===e}))}function Pr(e,t,n){var r,i,s=Or(t)?Bt:qt;return function(){var o=s(this,e),a=o.on;a!==r&&(i=(r=a).copy()).on(t,n),o.on=i}}function Mr(e,t){var n=this._id;return arguments.length<2?$t(this.node(),n).on.on(e):this.each(Pr(n,e,t))}function Lr(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Fr(){return this.on("end.remove",Lr(this._id))}function Vr(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=i(e));for(var r=this._groups,s=r.length,o=new Array(s),a=0;a<s;++a)for(var c,u,l=r[a],h=l.length,d=o[a]=new Array(h),f=0;f<h;++f)(c=l[f])&&(u=e.call(c,c.__data__,f,l))&&("__data__"in c&&(u.__data__=c.__data__),d[f]=u,jt(d[f],t,n,f,d,$t(c,n)));return new oi(o,this._parents,t,n)}function Ur(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=c(e));for(var r=this._groups,i=r.length,s=[],o=[],a=0;a<i;++a)for(var u,l=r[a],h=l.length,d=0;d<h;++d)if(u=l[d]){for(var f,p=e.call(u,u.__data__,d,l),m=$t(u,n),g=0,y=p.length;g<y;++g)(f=p[g])&&jt(f,t,n,g,p,m);s.push(p),o.push(u)}return new oi(s,o,t,n)}var jr=nt.prototype.constructor;function Br(){return new jr(this._groups,this._parents)}function qr(e,t){var n,r,i;return function(){var s=ie(this,e),o=(this.style.removeProperty(e),ie(this,e));return s===o?null:s===n&&o===r?i:i=t(n=s,r=o)}}function $r(e){return function(){this.style.removeProperty(e)}}function zr(e,t,n){var r,i,s=n+"";return function(){var o=ie(this,e);return o===s?null:o===r?i:i=t(r=o,n)}}function Gr(e,t,n){var r,i,s;return function(){var o=ie(this,e),a=n(this),c=a+"";return null==a&&(this.style.removeProperty(e),c=a=ie(this,e)),o===c?null:o===r&&c===i?s:(i=c,s=t(r=o,a))}}function Kr(e,t){var n,r,i,s,o="style."+t,a="end."+o;return function(){var c=qt(this,e),u=c.on,l=null==c.value[o]?s||(s=$r(t)):void 0;u===n&&i===l||(r=(n=u).copy()).on(a,i=l),c.on=r}}function Hr(e,t,n){var r="transform"===(e+="")?tn:cr;return null==t?this.styleTween(e,qr(e,r)).on("end.style."+e,$r(e)):"function"===typeof t?this.styleTween(e,Gr(e,r,an(this,"style."+e,t))).each(Kr(this._id,e)):this.styleTween(e,zr(e,r,t),n).on("end.style."+e,null)}function Wr(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Qr(e,t,n){var r,i;function s(){var s=t.apply(this,arguments);return s!==i&&(r=(i=s)&&Wr(e,s,n)),r}return s._value=t,s}function Jr(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==t)return this.tween(r,null);if("function"!==typeof t)throw new Error;return this.tween(r,Qr(e,t,null==n?"":n))}function Yr(e){return function(){this.textContent=e}}function Xr(e){return function(){var t=e(this);this.textContent=null==t?"":t}}function Zr(e){return this.tween("text","function"===typeof e?Xr(an(this,"text",e)):Yr(null==e?"":e+""))}function ei(e){return function(t){this.textContent=e.call(this,t)}}function ti(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&ei(r)),t}return r._value=e,r}function ni(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(null==e)return this.tween(t,null);if("function"!==typeof e)throw new Error;return this.tween(t,ti(e))}function ri(){for(var e=this._name,t=this._id,n=ci(),r=this._groups,i=r.length,s=0;s<i;++s)for(var o,a=r[s],c=a.length,u=0;u<c;++u)if(o=a[u]){var l=$t(o,t);jt(o,e,n,u,a,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new oi(r,this._parents,e,n)}function ii(){var e,t,n=this,r=n._id,i=n.size();return new Promise((function(s,o){var a={value:o},c={value:function(){0===--i&&s()}};n.each((function(){var n=qt(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),n.on=t})),0===i&&s()}))}var si=0;function oi(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function ai(e){return nt().transition(e)}function ci(){return++si}var ui=nt.prototype;function li(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}oi.prototype=ai.prototype={constructor:oi,select:Vr,selectAll:Ur,selectChild:ui.selectChild,selectChildren:ui.selectChildren,filter:Rr,merge:Dr,selection:Br,transition:ri,call:ui.call,nodes:ui.nodes,node:ui.node,size:ui.size,empty:ui.empty,each:ui.each,on:Mr,attr:mr,attrTween:_r,style:Hr,styleTween:Jr,text:Zr,textTween:ni,remove:Fr,tween:on,delay:Er,duration:kr,ease:Cr,easeVarying:Nr,end:ii,[Symbol.iterator]:ui[Symbol.iterator]};var hi={time:null,delay:0,duration:250,ease:li};function di(e,t){var n;while(!(n=e.__transition)||!(n=n[t]))if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function fi(e){var t,n;e instanceof oi?(t=e._id,e=e._name):(t=ci(),(n=hi).time=bt(),e=null==e?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var o,a=r[s],c=a.length,u=0;u<c;++u)(o=a[u])&&jt(o,e,t,u,a,n||di(o,t));return new oi(r,this._parents,e,t)}nt.prototype.interrupt=Kt,nt.prototype.transition=fi;const{abs:pi,max:mi,min:gi}=Math;function yi(e){return[+e[0],+e[1]]}function vi(e){return[yi(e[0]),yi(e[1])]}["w","e"].map(wi),["n","s"].map(wi),["n","w","e","s","nw","ne","sw","se"].map(wi);function wi(e){return{type:e}}class _i extends Map{constructor(e,t=Si){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const[n,r]of e)this.set(n,r)}get(e){return super.get(Ii(this,e))}has(e){return super.has(Ii(this,e))}set(e,t){return super.set(Ei(this,e),t)}delete(e){return super.delete(Ti(this,e))}}class bi extends Set{constructor(e,t=Si){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const n of e)this.add(n)}has(e){return super.has(Ii(this,e))}add(e){return super.add(Ei(this,e))}delete(e){return super.delete(Ti(this,e))}}function Ii({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function Ei({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function Ti({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function Si(e){return null!==e&&"object"===typeof e?e.valueOf():e}function ki(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}const Ai=Symbol("implicit");function Ci(){var e=new _i,t=[],n=[],r=Ai;function i(i){let s=e.get(i);if(void 0===s){if(r!==Ai)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new _i;for(const r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return Ci(t,n).unknown(r)},ki.apply(i,arguments),i}function xi(e){return"string"===typeof e?new Ze([[document.querySelector(e)]],[document.documentElement]):new Ze([[e]],Xe)}function Ni(e){return function(){return e}}const Ri=Math.abs,Di=Math.atan2,Oi=Math.cos,Pi=Math.max,Mi=Math.min,Li=Math.sin,Fi=Math.sqrt,Vi=1e-12,Ui=Math.PI,ji=Ui/2,Bi=2*Ui;function qi(e){return e>1?0:e<-1?Ui:Math.acos(e)}function $i(e){return e>=1?ji:e<=-1?-ji:Math.asin(e)}const zi=Math.PI,Gi=2*zi,Ki=1e-6,Hi=Gi-Ki;function Wi(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Qi(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Wi;const n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}class Ji{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?Wi:Qi(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,s){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+s}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,o=this._y1,a=n-e,c=r-t,u=s-e,l=o-t,h=u*u+l*l;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(h>Ki)if(Math.abs(l*a-c*u)>Ki&&i){let d=n-s,f=r-o,p=a*a+c*c,m=d*d+f*f,g=Math.sqrt(p),y=Math.sqrt(h),v=i*Math.tan((zi-Math.acos((p+h-m)/(2*g*y)))/2),w=v/y,_=v/g;Math.abs(w-1)>Ki&&this._append`L${e+w*u},${t+w*l}`,this._append`A${i},${i},0,0,${+(l*d>u*f)},${this._x1=e+_*a},${this._y1=t+_*c}`}else this._append`L${this._x1=e},${this._y1=t}`;else;}arc(e,t,n,r,i,s){if(e=+e,t=+t,n=+n,s=!!s,n<0)throw new Error(`negative radius: ${n}`);let o=n*Math.cos(r),a=n*Math.sin(r),c=e+o,u=t+a,l=1^s,h=s?r-i:i-r;null===this._x1?this._append`M${c},${u}`:(Math.abs(this._x1-c)>Ki||Math.abs(this._y1-u)>Ki)&&this._append`L${c},${u}`,n&&(h<0&&(h=h%Gi+Gi),h>Hi?this._append`A${n},${n},0,1,${l},${e-o},${t-a}A${n},${n},0,1,${l},${this._x1=c},${this._y1=u}`:h>Ki&&this._append`A${n},${n},0,${+(h>=zi)},${l},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}function Yi(){return new Ji}function Xi(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(null==n)t=null;else{const e=Math.floor(n);if(!(e>=0))throw new RangeError(`invalid digits: ${n}`);t=e}return e},()=>new Ji(t)}function Zi(e){return e.innerRadius}function es(e){return e.outerRadius}function ts(e){return e.startAngle}function ns(e){return e.endAngle}function rs(e){return e&&e.padAngle}function is(e,t,n,r,i,s,o,a){var c=n-e,u=r-t,l=o-i,h=a-s,d=h*c-l*u;if(!(d*d<Vi))return d=(l*(t-s)-h*(e-i))/d,[e+d*c,t+d*u]}function ss(e,t,n,r,i,s,o){var a=e-n,c=t-r,u=(o?s:-s)/Fi(a*a+c*c),l=u*c,h=-u*a,d=e+l,f=t+h,p=n+l,m=r+h,g=(d+p)/2,y=(f+m)/2,v=p-d,w=m-f,_=v*v+w*w,b=i-s,I=d*m-p*f,E=(w<0?-1:1)*Fi(Pi(0,b*b*_-I*I)),T=(I*w-v*E)/_,S=(-I*v-w*E)/_,k=(I*w+v*E)/_,A=(-I*v+w*E)/_,C=T-g,x=S-y,N=k-g,R=A-y;return C*C+x*x>N*N+R*R&&(T=k,S=A),{cx:T,cy:S,x01:-l,y01:-h,x11:T*(i/b-1),y11:S*(i/b-1)}}function os(){var e=Zi,t=es,n=Ni(0),r=null,i=ts,s=ns,o=rs,a=null,c=Xi(u);function u(){var u,l,h=+e.apply(this,arguments),d=+t.apply(this,arguments),f=i.apply(this,arguments)-ji,p=s.apply(this,arguments)-ji,m=Ri(p-f),g=p>f;if(a||(a=u=c()),d<h&&(l=d,d=h,h=l),d>Vi)if(m>Bi-Vi)a.moveTo(d*Oi(f),d*Li(f)),a.arc(0,0,d,f,p,!g),h>Vi&&(a.moveTo(h*Oi(p),h*Li(p)),a.arc(0,0,h,p,f,g));else{var y,v,w=f,_=p,b=f,I=p,E=m,T=m,S=o.apply(this,arguments)/2,k=S>Vi&&(r?+r.apply(this,arguments):Fi(h*h+d*d)),A=Mi(Ri(d-h)/2,+n.apply(this,arguments)),C=A,x=A;if(k>Vi){var N=$i(k/h*Li(S)),R=$i(k/d*Li(S));(E-=2*N)>Vi?(N*=g?1:-1,b+=N,I-=N):(E=0,b=I=(f+p)/2),(T-=2*R)>Vi?(R*=g?1:-1,w+=R,_-=R):(T=0,w=_=(f+p)/2)}var D=d*Oi(w),O=d*Li(w),P=h*Oi(I),M=h*Li(I);if(A>Vi){var L,F=d*Oi(_),V=d*Li(_),U=h*Oi(b),j=h*Li(b);if(m<Ui)if(L=is(D,O,U,j,F,V,P,M)){var B=D-L[0],q=O-L[1],$=F-L[0],z=V-L[1],G=1/Li(qi((B*$+q*z)/(Fi(B*B+q*q)*Fi($*$+z*z)))/2),K=Fi(L[0]*L[0]+L[1]*L[1]);C=Mi(A,(h-K)/(G-1)),x=Mi(A,(d-K)/(G+1))}else C=x=0}T>Vi?x>Vi?(y=ss(U,j,D,O,d,x,g),v=ss(F,V,P,M,d,x,g),a.moveTo(y.cx+y.x01,y.cy+y.y01),x<A?a.arc(y.cx,y.cy,x,Di(y.y01,y.x01),Di(v.y01,v.x01),!g):(a.arc(y.cx,y.cy,x,Di(y.y01,y.x01),Di(y.y11,y.x11),!g),a.arc(0,0,d,Di(y.cy+y.y11,y.cx+y.x11),Di(v.cy+v.y11,v.cx+v.x11),!g),a.arc(v.cx,v.cy,x,Di(v.y11,v.x11),Di(v.y01,v.x01),!g))):(a.moveTo(D,O),a.arc(0,0,d,w,_,!g)):a.moveTo(D,O),h>Vi&&E>Vi?C>Vi?(y=ss(P,M,F,V,h,-C,g),v=ss(D,O,U,j,h,-C,g),a.lineTo(y.cx+y.x01,y.cy+y.y01),C<A?a.arc(y.cx,y.cy,C,Di(y.y01,y.x01),Di(v.y01,v.x01),!g):(a.arc(y.cx,y.cy,C,Di(y.y01,y.x01),Di(y.y11,y.x11),!g),a.arc(0,0,h,Di(y.cy+y.y11,y.cx+y.x11),Di(v.cy+v.y11,v.cx+v.x11),g),a.arc(v.cx,v.cy,C,Di(v.y11,v.x11),Di(v.y01,v.x01),!g))):a.arc(0,0,h,I,b,g):a.lineTo(P,M)}else a.moveTo(0,0);if(a.closePath(),u)return a=null,u+""||null}return u.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +s.apply(this,arguments))/2-Ui/2;return[Oi(r)*n,Li(r)*n]},u.innerRadius=function(t){return arguments.length?(e="function"===typeof t?t:Ni(+t),u):e},u.outerRadius=function(e){return arguments.length?(t="function"===typeof e?e:Ni(+e),u):t},u.cornerRadius=function(e){return arguments.length?(n="function"===typeof e?e:Ni(+e),u):n},u.padRadius=function(e){return arguments.length?(r=null==e?null:"function"===typeof e?e:Ni(+e),u):r},u.startAngle=function(e){return arguments.length?(i="function"===typeof e?e:Ni(+e),u):i},u.endAngle=function(e){return arguments.length?(s="function"===typeof e?e:Ni(+e),u):s},u.padAngle=function(e){return arguments.length?(o="function"===typeof e?e:Ni(+e),u):o},u.context=function(e){return arguments.length?(a=null==e?null:e,u):a},u}Yi.prototype=Ji.prototype;Array.prototype.slice;function as(e){return"object"===typeof e&&"length"in e?e:Array.from(e)}function cs(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function us(e){return e}function ls(){var e=us,t=cs,n=null,r=Ni(0),i=Ni(Bi),s=Ni(0);function o(o){var a,c,u,l,h,d=(o=as(o)).length,f=0,p=new Array(d),m=new Array(d),g=+r.apply(this,arguments),y=Math.min(Bi,Math.max(-Bi,i.apply(this,arguments)-g)),v=Math.min(Math.abs(y)/d,s.apply(this,arguments)),w=v*(y<0?-1:1);for(a=0;a<d;++a)(h=m[p[a]=a]=+e(o[a],a,o))>0&&(f+=h);for(null!=t?p.sort((function(e,n){return t(m[e],m[n])})):null!=n&&p.sort((function(e,t){return n(o[e],o[t])})),a=0,u=f?(y-d*w)/f:0;a<d;++a,g=l)c=p[a],h=m[c],l=g+(h>0?h*u:0)+w,m[c]={data:o[c],index:a,value:h,startAngle:g,endAngle:l,padAngle:v};return m}return o.value=function(t){return arguments.length?(e="function"===typeof t?t:Ni(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r="function"===typeof e?e:Ni(+e),o):r},o.endAngle=function(e){return arguments.length?(i="function"===typeof e?e:Ni(+e),o):i},o.padAngle=function(e){return arguments.length?(s="function"===typeof e?e:Ni(+e),o):s},o}function hs(e,t,n){this.k=e,this.x=t,this.y=n}hs.prototype={constructor:hs,scale:function(e){return 1===e?this:new hs(this.k*e,this.x,this.y)},translate:function(e,t){return 0===e&0===t?this:new hs(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ds=new hs(1,0,0);function fs(e){while(!e.__zoom)if(!(e=e.parentNode))return ds;return e.__zoom}fs.prototype=hs.prototype},1509:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="9.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},7973:function(e,t,n){"use strict";n(7658);var r=n(2661),i=(n(3767),n(8585),n(8696),n(223)),s=n(7077);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(5168),c=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function y(e,...t){g.logLevel<=a["in"].WARN&&g.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}function v(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,...t){throw E(e,...t)}function _(e,...t){return E(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function I(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&w(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw E(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},L=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,r,s={}){return U(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new q(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw $(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);w(e,a)}}catch(s){if(s instanceof i.ZR)throw s;w(e,"network-request-failed",{message:String(s)})}}async function j(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&w(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return V(e,"POST","/v1/accounts:update",t)}async function K(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=J(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:H(Q(s.auth_time)),issuedAtTime:H(Q(s.iat)),expirationTime:H(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function J(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Y(e){const t=J(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,K(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?se(s.providerUserInfo):[],a=ie(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new te(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function re(e){const t=(0,i.m9)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function se(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await U(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=B(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ae;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return re(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;T(v&&I,e,"internal-error");const E=ae.fromJSON(this.name,I);T("string"===typeof v,e,"internal-error"),ce(l,e.name),ce(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof _,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(m,e.name),ce(g,e.name),ce(y,e.name);const S=new ue({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ne(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){k(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ue._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,i.z$)()){return/firefox\//i.test(e)}function ve(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function _e(e=(0,i.z$)()){return/iemobile/i.test(e)}function be(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ee(e=(0,i.z$)()){return/webos/i.test(e)}function Te(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ae(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Te(e)||be(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||_e(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function De(e,t){return V(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){return void 0!==e&&void 0!==e.getResponse}function Pe(e){return void 0!==e&&void 0!==e.enterprise}class Me{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Fe(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Le().appendChild(r)}))}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ue="https://www.google.com/recaptcha/enterprise.js?render=",je="recaptcha-enterprise",Be="NO_RECAPTCHA";class qe{constructor(e){this.type=je,this.auth=Ke(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{De(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Me(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Pe(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Be)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Pe(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Fe(Ue+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function $e(e,t,n,r=!1){const i=new qe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new He(this),this.idTokenSubscription=new He(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}async initializeRecaptchaConfig(){const e=await De(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Me(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new qe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ne(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&y(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ke(e){return(0,i.m9)(e)}class He{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Ke(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Je(t),{host:o,port:a}=Ye(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Xe(t)}}}function Xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function nt(e,t){return V(e,"POST","/v1/accounts:update",t)}async function rt(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function st(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ot(e,t){return st(e,t)}async function at(e,t){return st(e,t)}async function ct(e,t){return st(e,t)}async function ut(e,t){return st(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function ht(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await $e(e,n,"signInWithPassword");return it(e,t)}return it(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await $e(e,n,"signInWithPassword");return it(e,t)}return Promise.reject(t)}));case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:w(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ht(e,{idToken:t,email:this._email,oobCode:this._password});default:w(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="http://localhost";class mt extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):w("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:pt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function yt(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function vt(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const wt={["USER_NOT_FOUND"]:"user-not-found"};async function _t(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),wt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _t(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new bt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Et(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class Tt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=It(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Et(e);try{return new Tt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Tt.parseLink(t);return T(n,"argument-error"),dt._fromEmailAndCode(e,n.code,n.tenantId)}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends kt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ct extends At{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),mt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),mt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ct.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ct.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new Ct(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends At{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(t){return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends At{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Nt.credential(t,n)}catch(r){return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com",Nt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends At{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch(t){return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com",Rt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt="http://localhost";class Ot extends et{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Ot(n,i):null}static _create(e,t){return new Ot(e,t)}buildRequest(){return{requestUri:Dt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="saml.";class Mt extends kt{constructor(e){T(e.startsWith(Pt),"argument-error"),super(e)}static credentialFromResult(e){return Mt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Mt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ot.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ot._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends At{constructor(){super("twitter.com")}static credential(e,t){return mt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Lt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t){return j(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.TWITTER_SIGN_IN_METHOD="twitter.com",Lt.PROVIDER_ID="twitter.com";class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=Ut(n),o=new Vt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ut(n);return new Vt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ut(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e){var t;const n=Ke(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ft(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Bt(e,t,n,r)}}function qt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(e,t){const n=(0,i.m9)(e);await Kt(!0,n,t);const{providerUserInfo:r}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=$t(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Gt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vt._forOperation(e,"link",r)}async function Kt(e,t,n){await ne(t);const r=$t(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await X(e,qt(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=J(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Vt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&w(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,n=!1){const r="signIn",i=await qt(e,r,t),s=await Vt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Qt(e,t){return Wt(Ke(e),t)}async function Jt(e,t){const n=(0,i.m9)(e);return await Kt(!1,n,t.providerId),Gt(n,t)}async function Yt(e,t){return Ht((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=Ke(e),r=await Xt(n,{token:t,returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tn._fromServerResponse(e,t):"totpInfo"in t?nn._fromServerResponse(e,t):w(e,"internal-error")}}class tn extends en{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tn(t)}}class nn extends en{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new nn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n){var r;const i=Ke(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await $e(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}else n&&rn(i,s,n),await at(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await $e(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}}))}async function on(e,t,n){await tt((0,i.m9)(e),{oobCode:t,newPassword:n})}async function an(e,t){await rt((0,i.m9)(e),{oobCode:t})}async function cn(e,t){const n=(0,i.m9)(e),r=await tt(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=en._fromServerResponse(Ke(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function un(e,t){const{data:n}=await cn((0,i.m9)(e),t);return n.email}async function ln(e,t,n){var r;const i=Ke(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await $e(i,s,"signUpPassword");o=Ft(i,e)}else o=Ft(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await $e(i,s,"signUpPassword");return Ft(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await Vt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function hn(e,t,n){return Qt((0,i.m9)(e),St.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n){var r;const i=Ke(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){T(t.handleCodeInApp,i,"argument-error"),t&&rn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await $e(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}else o(s,n),await ct(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await $e(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}}))}function fn(e,t){const n=Tt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function pn(e,t,n){const r=(0,i.m9)(e),s=St.credentialWithLink(t,n||A());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){const n=C()?A():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await mn((0,i.m9)(e),r);return s||[]}async function yn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&rn(n.auth,s,t);const{email:o}=await ot(n.auth,s);o!==e.email&&await e.reload()}async function vn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&rn(r.auth,o,n);const{email:a}=await ut(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(r,wn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function bn(e,t){return En((0,i.m9)(e),t,null)}function In(e,t){return En((0,i.m9)(e),null,t)}async function En(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await X(e,nt(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Sn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new An(s,i);case"github.com":return new Cn(s,i);case"google.com":return new xn(s,i);case"twitter.com":return new Nn(s,i,e.screenName||null);case"custom":case"anonymous":return new Sn(s,null);default:return new Sn(s,r,i)}}class Sn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class kn extends Sn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class An extends Sn{constructor(e,t){super(e,"facebook.com",t)}}class Cn extends kn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class xn extends Sn{constructor(e,t){super(e,"google.com",t)}}class Nn extends kn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Rn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Tn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Dn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Dn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Dn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Dn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ke(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>en._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=Dn._fromMfaPendingCredential(r.mfaPendingCredential);return new On(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Vt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Vt._forOperation(t.user,t.operationType,o);default:w(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Pn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),On._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Ln(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Fn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Vn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Un(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class jn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>en._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new jn(e)}async getSession(){return Dn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await X(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await X(this.user,Un(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Bn=new WeakMap;function qn(e){const t=(0,i.m9)(e);return Bn.has(t)||Bn.set(t,jn._fromUser(t)),Bn.get(t)}const $n="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($n,"1"),this.storage.removeItem($n),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){const e=(0,i.z$)();return ve(e)||Te(e)}const Kn=1e3,Hn=10;class Wn extends zn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gn()&&xe(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ae()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Qn=Wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends zn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jn.type="SESSION";const Yn=Jn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Zn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Xn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=er("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function rr(e){nr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return"undefined"!==typeof nr()["WorkerGlobalScope"]&&"function"===typeof nr()["importScripts"]}async function sr(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function or(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ar(){return ir()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="firebaseLocalStorageDb",ur=1,lr="firebaseLocalStorage",hr="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function fr(e,t){return e.transaction([lr],t?"readwrite":"readonly").objectStore(lr)}function pr(){const e=indexedDB.deleteDatabase(cr);return new dr(e).toPromise()}function mr(){const e=indexedDB.open(cr,ur);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(lr,{keyPath:hr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(lr)?t(n):(n.close(),await pr(),t(await mr()))}))}))}async function gr(e,t,n){const r=fr(e,!0).put({[hr]:t,value:n});return new dr(r).toPromise()}async function yr(e,t){const n=fr(e,!1).get(t),r=await new dr(n).toPromise();return void 0===r?null:r.value}function vr(e,t){const n=fr(e,!0).delete(t);return new dr(n).toPromise()}const wr=800,_r=3;class br{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await mr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>_r)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zn._getInstance(ar()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await sr(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&or()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mr();return await gr(e,$n,"1"),await vr(e,$n),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>yr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=fr(e,!1).getAll();return new dr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),wr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}br.type="LOCAL";const Ir=br;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function Tr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function Sr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=500,Ar=6e4,Cr=1e12;class xr{constructor(e){this.auth=e,this.counter=Cr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Nr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Cr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Cr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Cr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Nr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Rr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Ar)}),kr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Rr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=Ve("rcb"),Or=new D(3e4,6e4),Pr="https://www.google.com/recaptcha/api.js?";class Mr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=nr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(Lr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Oe(nr().grecaptcha)?Promise.resolve(nr().grecaptcha):new Promise(((n,r)=>{const s=nr().setTimeout((()=>{r(_(e,"network-request-failed"))}),Or.get());nr()[Dr]=()=>{nr().clearTimeout(s),delete nr()[Dr];const i=nr().grecaptcha;if(!i||!Oe(i))return void r(_(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${Pr}?${(0,i.xO)({onload:Dr,render:"explicit",hl:t})}`;Fe(o).catch((()=>{clearTimeout(s),r(_(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=nr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Lr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Fr{async load(e){return new xr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="recaptcha",Ur={theme:"light",type:"image"};class jr{constructor(e,t=Object.assign({},Ur),n){this.parameters=t,this.type=Vr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ke(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fr:new Mr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=nr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(C()&&!ir(),this.auth,"internal-error"),await Br(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Re(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Br(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=bt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function $r(e,t,n){const r=Ke(e),s=await Kr(r,t,(0,i.m9)(n));return new qr(s,(e=>Qt(r,e)))}async function zr(e,t,n){const r=(0,i.m9)(e);await Kt(!1,r,"phone");const s=await Kr(r.auth,t,(0,i.m9)(n));return new qr(s,(e=>Jt(r,e)))}async function Gr(e,t,n){const r=(0,i.m9)(e),s=await Kr(r.auth,t,(0,i.m9)(n));return new qr(s,(e=>Yt(r,e)))}async function Kr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Vr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await Mn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await Er(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await gt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Hr(e,t){await Gt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.providerId=Wr.PROVIDER_ID,this.auth=Ke(e)}verifyPhoneNumber(e,t){return Kr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return bt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Wr.credentialFromTaggedObject(t)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?bt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){return t?he(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wr.PROVIDER_ID="phone",Wr.PHONE_SIGN_IN_METHOD="phone";class Jr extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yr(e){return Wt(e.auth,new Jr(e),e.bypassAuthState)}function Xr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Ht(n,new Jr(e),e.bypassAuthState)}async function Zr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Gt(n,new Jr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yr;case"linkViaPopup":case"linkViaRedirect":return Zr;case"reauthViaPopup":case"reauthViaRedirect":return Xr;default:w(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new D(2e3,1e4);async function ni(e,t,n){const r=Ke(e);I(e,t,kt);const i=Qr(r,n),s=new si(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ri(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt);const s=Qr(r.auth,n),o=new si(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function ii(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt);const s=Qr(r.auth,n),o=new si(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class si extends ei{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ti.get())};e()}}si.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi="pendingRedirect",ai=new Map;class ci extends ei{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const t=await ui(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ui(e,t){const n=pi(t),r=fi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function li(e,t){return fi(e)._set(pi(t),"true")}function hi(){ai.clear()}function di(e,t){ai.set(e._key(),t)}function fi(e){return he(e._redirectPersistence)}function pi(e){return pe(oi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t,n){return gi(e,t,n)}async function gi(e,t,n){const r=Ke(e);I(e,t,kt),await r._initializationPromise;const i=Qr(r,n);return await li(i,r),i._openRedirect(r,t,"signInViaRedirect")}function yi(e,t,n){return vi(e,t,n)}async function vi(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt),await r.auth._initializationPromise;const s=Qr(r.auth,n);await li(s,r.auth);const o=await Ei(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function wi(e,t,n){return _i(e,t,n)}async function _i(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,kt),await r.auth._initializationPromise;const s=Qr(r.auth,n);await Kt(!1,r,t.providerId),await li(s,r.auth);const o=await Ei(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function bi(e,t){return await Ke(e)._initializationPromise,Ii(e,t,!1)}async function Ii(e,t,n=!1){const r=Ke(e),i=Qr(r,t),s=new ci(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Ei(e){const t=er(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=6e5;class Si{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ci(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ai(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ti&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ai({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ci(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ai(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ri=/^https?/;async function Di(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xi(e);for(const r of t)try{if(Oi(r))return}catch(n){}w(e,"unauthorized-domain")}function Oi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ri.test(n))return!1;if(Ni.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new D(3e4,6e4);function Mi(){const e=nr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Li(e){return new Promise(((t,n)=>{var r,i,s;function o(){Mi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mi(),n(_(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(i=null===(r=nr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=nr().gapi)||void 0===s?void 0:s.load)){const t=Ve("iframefcb");return nr()[t]=()=>{gapi.load?o():n(_(e,"network-request-failed"))},Fe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Fi=null,e}))}let Fi=null;function Vi(e){return Fi=Fi||Li(e),Fi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new D(5e3,15e3),ji="__/auth/iframe",Bi="emulator/auth/iframe",qi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$i=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zi(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Bi):`https://${e.config.authDomain}/${ji}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=$i.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Gi(e){const t=await Vi(e),n=nr().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:zi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_(e,"network-request-failed"),s=nr().setTimeout((()=>{r(i)}),Ui.get());function o(){nr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hi=500,Wi=600,Qi="_blank",Ji="http://localhost";class Yi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xi(e,t,n,r=Hi,s=Wi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ki),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=we(l)?Qi:n),ye(l)&&(t=t||Ji,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return Zi(t||"",c),new Yi(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Yi(d)}function Zi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="__/auth/handler",ts="emulator/auth/handler",ns=encodeURIComponent("fac");async function rs(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof kt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof At){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),h=l?`#${ns}=${encodeURIComponent(l)}`:"";return`${is(e)}?${(0,i.xO)(u).slice(1)}${h}`}function is({config:e}){return e.emulator?O(e,ts):`https://${e.authDomain}/${es}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="webStorageSupport";class os{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await rs(e,t,n,A(),r);return Xi(e,s,er())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await rs(e,t,n,A(),r);return rr(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Gi(e),n=new Si(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ss,{type:ss},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ss];void 0!==i&&t(!!i),w(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Di(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ve()||Te()}}const as=os;class cs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class us extends cs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new us(e)}_finalizeEnroll(e,t,n){return Ln(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Tr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ls{constructor(){}static assertion(e){return us._fromCredential(e)}}ls.FACTOR_ID="phone";class hs{static assertionForEnrollment(e,t){return ds._fromSecret(e,t)}static assertionForSignIn(e,t){return ds._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;T("undefined"!==typeof t.auth,"internal-error");const n=await Fn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return fs._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}hs.FACTOR_ID="totp";class ds extends cs{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ds(t,void 0,e)}static _fromEnrollmentId(e,t){return new ds(t,e)}async _finalizeEnroll(e,t,n){return T("undefined"!==typeof this.secret,e,"argument-error"),Vn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){T(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Sr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class fs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new fs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(ps(e)||ps(t))&&(r=!0),r&&(ps(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ps(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ps(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ms="@firebase/auth",gs="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ws(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ne(e)},u=new Ge(r,i,s,c);return We(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Ke(e.getProvider("auth").getImmediate());return(e=>new ys(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(ms,gs,vs(e)),(0,s.registerVersion)(ms,gs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ws("Browser");const Is=2e3;async function Es(e,t,n){var r;const{BuildInfo:i}=bs();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await Cs(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:be()?o["apn"]=i.packageName:w(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,rs(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Ts(e){const{BuildInfo:t}=bs(),n={};Te()?n.iosBundleId=t.packageName:be()?n.androidPackageName=t.packageName:w(e,"operation-not-supported-in-this-environment"),await xi(e,n)}function Ss(e){const{cordova:t}=bs();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function ks(e,t,n){const{cordova:r}=bs();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(_(e,"redirect-cancelled-by-user"))}),Is))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),be()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function As(e){var t,n,r,i,s,o,a,c,u,l;const h=bs();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Cs(e){const t=xs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function xs(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=20;class Rs extends Si{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ds(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Ls(),postBody:null,tenantId:e.tenantId,error:_(e,"no-auth-event")}}function Os(e,t){return Fs()._set(Vs(e),t)}async function Ps(e){const t=await Fs()._get(Vs(e));return t&&await Fs()._remove(Vs(e)),t}function Ms(e,t){var n,r;const i=js(t);if(i.includes("/__/auth/callback")){const t=Bs(i),s=t["firebaseError"]?Us(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?_(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Ls(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Ns;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Fs(){return he(Qn)}function Vs(e){return pe("authEvent",e.config.apiKey,e.name)}function Us(e){try{return JSON.parse(e)}catch(t){return null}}function js(e){const t=Bs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Bs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Bs(i)["link"];return s||i||r||n||e}function Bs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=500;class $s{constructor(){this._redirectPersistence=Yn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Rs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){w(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){As(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),hi(),await this._originValidation(e);const s=Ds(e,n,r);await Os(e,s);const o=await Es(e,s,t),a=await Ss(o);return ks(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=bs(),s=setTimeout((async()=>{await Ps(e),t.onEvent(Gs())}),qs),o=async n=>{clearTimeout(s);const r=await Ps(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Ms(r,n["url"])),t.onEvent(i||Gs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;bs().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const zs=$s;function Gs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e,t){Ke(e)._logFramework(t)}var Hs="@firebase/auth-compat",Ws="0.4.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs=1e3;function Js(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Ys(){return"http:"===Js()||"https:"===Js()}function Xs(e=(0,i.z$)()){return!("file:"!==Js()&&"ionic:"!==Js()&&"capacitor:"!==Js()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Zs(){return(0,i.b$)()||(0,i.UG)()}function eo(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function to(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function no(e=(0,i.z$)()){return eo()||to(e)}function ro(){try{const e=self.localStorage,t=er();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!no()||(0,i.hl)()}catch(e){return io()&&(0,i.hl)()}return!1}function io(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function so(){return(Ys()||(0,i.ru)()||Xs())&&!Zs()&&ro()&&!io()}function oo(){return Xs()&&"undefined"!==typeof document}async function ao(){return!!oo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Qs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function co(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={LOCAL:"local",NONE:"none",SESSION:"session"},lo=T,ho="persistence";function fo(e,t){lo(Object.values(uo).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?lo(t!==uo.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?lo(t===uo.NONE,e,"unsupported-persistence-type"):io()?lo(t===uo.NONE||t===uo.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):lo(t===uo.NONE||ro(),e,"unsupported-persistence-type")}async function po(e){await e._initializationPromise;const t=go(),n=pe(ho,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function mo(e,t){const n=go();if(!n)return[];const r=pe(ho,e,t),i=n.getItem(r);switch(i){case uo.NONE:return[fe];case uo.LOCAL:return[Ir,Yn];case uo.SESSION:return[Yn];default:return[]}}function go(){var e;try{return(null===(e=co())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=T;class vo{constructor(){this.browserResolver=he(as),this.cordovaResolver=he(zs),this.underlyingResolver=null,this._redirectPersistence=Yn,this._completeRedirectFn=Ii,this._overrideRedirectResult=di}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return oo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yo(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ao();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return e.unwrap()}function _o(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(e){return Eo(e)}function Io(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new ko(e,Pn(e,t))}else if(r){const e=Eo(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function Eo(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Wr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=Nt;break;case u.FACEBOOK:r=xt;break;case u.GITHUB:r=Rt;break;case u.TWITTER:r=Lt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Ot._create(n,o):mt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new Ct(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function To(e,t){return t.catch((t=>{throw t instanceof i.ZR&&Io(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:bo(e),additionalUserInfo:Rn(e),user:Ao.getOrCreate(n)}}))}async function So(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>To(e,n.confirm(t))}}class ko{constructor(e,t){this.resolver=t,this.auth=_o(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return To(wo(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._delegate=e,this.multiFactor=qn(e)}static getOrCreate(e){return Ao.USER_MAP.has(e)||Ao.USER_MAP.set(e,new Ao(e)),Ao.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return To(this.auth,Jt(this._delegate,e))}async linkWithPhoneNumber(e,t){return So(this.auth,zr(this._delegate,e,t))}async linkWithPopup(e){return To(this.auth,ii(this._delegate,e,vo))}async linkWithRedirect(e){return await po(Ke(this.auth)),wi(this._delegate,e,vo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return To(this.auth,Yt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return So(this.auth,Gr(this._delegate,e,t))}reauthenticateWithPopup(e){return To(this.auth,ri(this._delegate,e,vo))}async reauthenticateWithRedirect(e){return await po(Ke(this.auth)),yi(this._delegate,e,vo)}sendEmailVerification(e){return yn(this._delegate,e)}async unlink(e){return await zt(this._delegate,e),this}updateEmail(e){return bn(this._delegate,e)}updatePassword(e){return In(this._delegate,e)}updatePhoneNumber(e){return Hr(this._delegate,e)}updateProfile(e){return _n(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return vn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ao.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Co=T;class xo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Co(n,"invalid-api-key",{appName:e.name}),Co(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?vo:void 0;this._delegate=t.initialize({options:{persistence:Ro(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ao.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Qe(this._delegate,e,t)}applyActionCode(e){return an(this._delegate,e)}checkActionCode(e){return cn(this._delegate,e)}confirmPasswordReset(e,t){return on(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return To(this._delegate,ln(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return gn(this._delegate,e)}isSignInWithEmailLink(e){return fn(this._delegate,e)}async getRedirectResult(){Co(so(),this._delegate,"operation-not-supported-in-this-environment");const e=await bi(this._delegate,vo);return e?To(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ks(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=No(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=No(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return dn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return sn(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(fo(this._delegate,e),e){case uo.SESSION:t=Yn;break;case uo.LOCAL:const e=await he(Ir)._isAvailable();t=e?Ir:Qn;break;case uo.NONE:t=fe;break;default:return w("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return To(this._delegate,jt(this._delegate))}signInWithCredential(e){return To(this._delegate,Qt(this._delegate,e))}signInWithCustomToken(e){return To(this._delegate,Zt(this._delegate,e))}signInWithEmailAndPassword(e,t){return To(this._delegate,hn(this._delegate,e,t))}signInWithEmailLink(e,t){return To(this._delegate,pn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return So(this._delegate,$r(this._delegate,e,t))}async signInWithPopup(e){return Co(so(),this._delegate,"operation-not-supported-in-this-environment"),To(this._delegate,ni(this._delegate,e,vo))}async signInWithRedirect(e){return Co(so(),this._delegate,"operation-not-supported-in-this-environment"),await po(this._delegate),mi(this._delegate,e,vo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return un(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function No(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&Ao.getOrCreate(e));return{next:s,error:t,complete:n}}function Ro(e,t){const n=mo(e,t);if("undefined"===typeof self||n.includes(Ir)||n.push(Ir),"undefined"!==typeof window)for(const r of[Qn,Yn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.Persistence=uo;class Do{constructor(){this.providerId="phone",this._delegate=new Wr(wo(r.Z.auth()))}static credential(e,t){return Wr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Do.PHONE_SIGN_IN_METHOD=Wr.PHONE_SIGN_IN_METHOD,Do.PROVIDER_ID=Wr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=T;class Po{constructor(e,t,n=r.Z.app()){var i;Oo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new jr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="auth-compat";function Lo(e){e.INTERNAL.registerComponent(new c.wA(Mo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new xo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:St,FacebookAuthProvider:xt,GithubAuthProvider:Rt,GoogleAuthProvider:Nt,OAuthProvider:Ct,SAMLAuthProvider:Mt,PhoneAuthProvider:Do,PhoneMultiFactorGenerator:ls,RecaptchaVerifier:Po,TwitterAuthProvider:Lt,Auth:xo,AuthCredential:et,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Hs,Ws)}Lo(r.Z)},476:function(e,t,n){"use strict";n(3767),n(8585),n(8696);var r,i=n(2661),s=(n(7658),n(2801),n(7077)),o=n(7142),a=n(5168),c=n(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,y)&&e[y]||(e[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:_,b.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var S=0;T.prototype.s=!1,T.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==S)||g(this)},T.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function A(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(p(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}var D=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return e<t?-1:e>t?1:0}function P(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function M(e){return-1!=P().indexOf(e)}function L(e){return L[" "](e),e}function F(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}L[" "]=f;var V,U=M("Opera"),j=M("Trident")||M("MSIE"),B=M("Edge"),q=B||j,$=M("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),z=-1!=P().toLowerCase().indexOf("webkit")&&!M("Edge");function G(){var e=d.document;return e?e.documentMode:void 0}e:{var K="",H=function(){var e=P();return $?/rv:([^\);]+)(\)|;)/.exec(e):B?/Edge\/([\d\.]+)/.exec(e):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(K=H?H[1]:""),j){var W=G();if(null!=W&&W>parseFloat(K)){V=String(W);break e}}V=K}var Q,J={};function Y(){return F(J,9,(function(){let e=0;const t=D(String(V)).split("."),n=D("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=O(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==i[2].length,0==s[2].length)||O(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&j){var X=G();Q=X||(parseInt(V,10)||void 0)}else Q=void 0;var Z=Q;function ee(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{L(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.$.h.call(this)}}E(ee,x);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),re=0;function ie(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++re,this.fa=this.ia=!1}function se(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function oe(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ae(e){const t={};for(const n in e)t[n]=e[n];return t}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ce.length;t++)n=ce[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=k(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ie(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Se(n),e&&e[ne]?e.O(t,n,m(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ye(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)N||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(){function e(n){return t.call(e.src,e.listener,n)}const t=Ie;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Se(n),e&&e[ne]?e.P(t,n,m(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function we(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Se(n),e&&e[ne]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(se(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&_e(n))}function _e(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[ne])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):se(e)}}}function be(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.fa)e=!0;else{t=new ee(t,this);var n=e.listener,r=e.la||e.src;e.ia&&_e(e),e=n.call(r,t)}return e}function Ee(e){return e=e[fe],e instanceof le?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function ke(){T.call(this),this.i=new le(this),this.S=this,this.J=null}function Ae(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var i=t;t=new x(r,e),ue(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ce(o,r,!0,t)&&i}if(o=t.g=e,i=Ce(o,r,!0,t)&&i,i=Ce(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ce(o,r,!1,t)&&i}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(ke,T),ke.prototype[ne]=!0,ke.prototype.removeEventListener=function(e,t,n,r){we(this,e,t,n,r)},ke.prototype.N=function(){if(ke.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.J=null},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=d.JSON.stringify;function Ne(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var De,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Me(e){d.setTimeout((()=>{throw e}),0)}function Le(e,t){De||Fe(),Ve||(De(),Ve=!0),Ue.add(e,t)}function Fe(){var e=d.Promise.resolve(void 0);De=function(){e.then(je)}}var Ve=!1,Ue=new Re;function je(){for(var e;e=Ne();){try{e.h.call(e.g)}catch(n){Me(n)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ve=!1}function Be(e,t){ke.call(this),this.h=e||1,this.g=t||d,this.j=b(this.qb,this),this.l=Date.now()}function qe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function $e(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function ze(e){e.g=$e((()=>{e.g=null,e.i&&(e.i=!1,ze(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(Be,ke),r=Be.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(qe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Be.$.N.call(this),qe(this),delete this.g};class Ge extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){T.call(this),this.h=e,this.g={}}E(Ke,T);var He=[];function We(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_e(e)}),e),e.g={}}function Je(){this.g=!0}function Ye(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xe(n)}catch(a){return t}}Ke.prototype.N=function(){Ke.$.N.call(this),Qe(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Ea=function(){this.g=!1},Je.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){x.call(this,nt.Ta,e)}function ot(e){const t=it();Ae(t,new st(t))}function at(e,t){x.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Ae(t,new at(t,e))}function ut(e,t){x.call(this,nt.Ua,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}nt.Ta="serverreachability",E(st,x),nt.STAT_EVENT="statevent",E(at,x),nt.Ua="timingevent",E(ut,x);var ht={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},dt={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,yt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vt(){x.call(this,"d")}function wt(){x.call(this,"c")}function _t(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ke(this),this.P=Et,e=q?125:void 0,this.V=new Be(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}E(vt,x),E(wt,x),E(_t,ft),_t.prototype.g=function(){return new XMLHttpRequest},_t.prototype.i=function(){return{}},gt=new _t;var Et=45e3,Tt={},St={};function kt(e,t,n){e.L=1,e.v=Wt($t(t)),e.s=n,e.S=!0,At(e,null)}function At(e,t){e.G=Date.now(),Rt(e),e.A=$t(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),e.C=0,n=e.l.I,e.h=new It,e.g=dr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ge(b(e.Pa,e,e.g),e.O)),We(e.U,e.g,"readystatechange",e.nb),t=e.I?ae(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ot(),Ye(e.j,e.u,e.A,e.m,e.W,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function xt(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Nt(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}Ct(e)&&r!=St&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ir(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Pt(e))}function Nt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.Y=Date.now()+e.P,Dt(e,e.P)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(b(e.lb,e),t)}function Ot(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.H||e.J||ar(e.l,e)}function Mt(e){Ot(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,qe(e.V),Qe(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Lt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||gn(n.h,e)))if(!e.K&&gn(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;or(n),Qn(n)}rr(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=lt(b(n.ib,n),6e3));if(1>=mn(n.h)&&n.na){try{n.na()}catch(u){}n.na=void 0}}else ur(n,11)}else if((e.K||n.g==e)&&or(n),!R(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const t=u[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(yn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Ht(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=hr(r,r.I?r.oa:null,r.Y),o.K){vn(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ot(a),Rt(a)),r.g=o}else nr(r);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}ot(4)}catch(u){}}function Ft(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Vt(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(p(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Vt(e),r=Ft(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=bt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==qn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=qn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=l||7==t||ot(8==t||0>=h?3:2),Ot(this);var n=this.g.da();this.aa=n;t:if(Ct(this)){var r=$n(this.g);e="";var i=r.length,s=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Mt(this),Pt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ct(12),Mt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lt(this,n)}this.S?(xt(this,l,o),q&&this.i&&3==l&&(We(this.U,this.V,"tick",this.mb),this.V.start())):(Ze(this.j,this.m,o,null),Lt(this,o)),4==l&&Mt(this),this.i&&!this.J&&(4==l?ar(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Mt(this),Pt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=qn(this.g),t=this.g.ja();this.C<t.length&&(Ot(this),xt(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.J=!0,Mt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.L&&(ot(),ct(17)),Mt(this),this.o=2,Pt(this)):Dt(this,this.Y-e)};var jt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=void 0!==t?t:e.h,zt(this,e.j),this.s=e.s,this.g=e.g,Gt(this,e.m),this.l=e.l,t=e.i;var n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Kt(this,n),this.o=e.o}else e&&(n=String(e).match(jt))?(this.h=!!t,zt(this,n[1]||"",!0),this.s=Qt(n[2]||""),this.g=Qt(n[3]||"",!0),Gt(this,n[4]),this.l=Qt(n[5]||"",!0),Kt(this,n[6]||"",!0),this.o=Qt(n[7]||"")):(this.h=!!t,this.i=new rn(null,this.h))}function $t(e){return new qt(e)}function zt(e,t,n){e.j=n?Qt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Gt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Kt(e,t,n){t instanceof rn?(e.i=t,ln(e.i,e.h)):(n||(t=Jt(t,tn)),e.i=new rn(t,e.h))}function Ht(e,t,n){e.i.set(t,n)}function Wt(e){return Ht(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Yt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?en:Zt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,nn)),e.join("")};var Xt=/[#\/\?@]/g,Zt=/[#\?:]/g,en=/[#\?]/g,tn=/[#\?@]/g,nn=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function sn(e){e.g||(e.g=new Map,e.h=0,e.i&&Bt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){sn(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function an(e,t){return sn(e),t=un(e,t),e.g.has(t)}function cn(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),A(n)),e.h+=n.length)}function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ln(e,t){t&&!e.j&&(sn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),cn(this,n,e))}),e)),e.j=t}r=rn.prototype,r.add=function(e,t){sn(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.sa=function(){sn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){sn(this);let t=[];if("string"===typeof e)an(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return sn(this),this.i=null,e=un(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var hn=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||fn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function yn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function wn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return A(e.i)}function _n(){}function bn(){this.g=new _n}function In(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let i=e;m(e)&&(i=xe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Je;if(d.Image){const r=new Image;r.onload=I(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=I(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=I(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=I(Tn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Sn(e){this.l=e.fc||null,this.j=e.ob||!1}function kn(e,t){ke.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},_n.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},_n.prototype.parse=function(e){return d.JSON.parse(e,void 0)},E(Sn,ft),Sn.prototype.g=function(){return new kn(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),E(kn,ke);var An=0;function Cn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Nn(e)}function Nn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Nn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=An},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):Nn(this),3==this.readyState&&Cn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,xn(this))},r.Ya=function(e){this.g&&(this.response=e,xn(this))},r.ka=function(){this.g&&xn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Rn=d.JSON.parse;function Dn(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=On,this.L=this.M=!1}E(Dn,ke);var On="",Pn=/^https?$/i,Mn=["POST","PUT"];function Ln(e){return j&&Y()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vn(e),jn(e)}function Vn(e){e.F||(e.F=!0,Ae(e,"complete"),Ae(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=qn(e)||2!=e.da()))if(e.v&&4==qn(e))$e(e.La,0,e);else if(Ae(e,"readystatechange"),4==qn(e)){e.h=!1;try{const c=e.da();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.I).match(jt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!Pn.test(i?i.toLowerCase():"")}n=r}if(n)Ae(e,"complete"),Ae(e,"success");else{e.m=6;try{var o=2<qn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.da()+"]",Vn(e)}}finally{jn(e)}}}function jn(e,t){if(e.g){Bn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||Ae(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Bn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function qn(e){return e.g?e.g.readyState:0}function $n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Yr){return null}}function zn(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Gn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Ht(e,t,n))}function Kn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ga=0,this.i=[],this.j=new Je,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,e),this.hb=Kn("retryDelaySeedMs",1e4,e),this.eb=Kn("forwardChannelMaxRetries",2,e),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new dn(e&&e.concurrentRequestLimit),this.Ja=new bn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Wn(e){if(Jn(e),3==e.H){var t=e.W++,n=$t(e.G);Ht(n,"SID",e.J),Ht(n,"RID",t),Ht(n,"TYPE","terminate"),er(e,n),t=new bt(e,e.j,t,void 0),t.L=2,t.v=Wt($t(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=dr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Rt(t)}lr(e)}function Qn(e){e.g&&(ir(e),e.g.cancel(),e.g=null)}function Jn(e){Qn(e),e.u&&(d.clearTimeout(e.u),e.u=null),or(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Yn(e){pn(e.h)||e.m||(e.m=!0,Le(e.Na,e),e.C=0)}function Xn(e,t){return!(mn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.F.concat(e.i),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=lt(b(e.Na,e,t),cr(e,e.C)),e.C++,!0))}function Zn(e,t){var n;n=t?t.m:e.W++;const r=$t(e.G);Ht(r,"SID",e.J),Ht(r,"RID",n),Ht(r,"AID",e.V),er(e,r),e.o&&e.s&&Gn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=tr(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),yn(e.h,n),kt(n,r,t)}function er(e,t){e.ma&&oe(e.ma,(function(e,n){Ht(t,n,e)})),e.l&&Ut({},(function(e,n){Ht(t,n,e)}))}function tr(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{In(a,e,"req"+n+"_")}catch(li){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function nr(e){e.g||e.u||(e.ba=1,Le(e.Ma,e),e.A=0)}function rr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=lt(b(e.Ma,e),cr(e,e.A)),e.A++,!0)}function ir(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new bt(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);Ht(t,"RID","rpc"),Ht(t,"SID",e.J),Ht(t,"CI",e.M?"0":"1"),Ht(t,"AID",e.V),Ht(t,"TYPE","xmlhttp"),er(e,t),e.o&&e.s&&Gn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Wt($t(t)),n.s=null,n.S=!0,At(n,e)}function or(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function ar(e,t){var n=null;if(e.g==t){or(e),ir(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.F,vn(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=it(),Ae(r,new ut(r,n)),Yn(e)}else nr(e);else if(i=t.o,3==i||0==i&&0<e.ta||!(1==r&&Xn(e,t)||2==r&&rr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ur(e,5);break;case 4:ur(e,10);break;case 3:ur(e,6);break;default:ur(e,2)}}function cr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function ur(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||zt(n,"https"),Wt(n)),En(n.toString(),r)}else ct(2);e.H=0,e.l&&e.l.za(t),lr(e),Jn(e)}function lr(e){if(e.H=0,e.pa=[],e.l){const t=wn(e.h);0==t.length&&0==e.i.length||(C(e.pa,t),C(e.pa,e.i),e.h.i.length=0,A(e.i),e.i.length=0),e.l.ya()}}function hr(e,t,n){var r=n instanceof qt?$t(n):new qt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Gt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new qt(null,void 0);r&&zt(s,r),t&&(s.g=t),i&&Gt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ht(r,n,t),Ht(r,"VER",e.qa),er(e,r),r}function dr(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Dn(new Sn({ob:!0})):new Dn(e.va),t.Oa(e.I),t}function fr(){}function pr(){if(j&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(e,t){ke.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function gr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function yr(){wt.call(this),this.status=1}function vr(e){this.g=e}function wr(){this.blockSize=-1}function _r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function br(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Ir(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=Dn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Fn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=k(Mn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bn(this),0<this.B&&((this.L=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=$e(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Fn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ae(this,"complete"),Ae(this,"abort"),jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),Dn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Un(this):this.kb())},r.kb=function(){Un(this)},r.da=function(){try{return 2<qn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Rn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.qa=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new bt(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=ae(s),ue(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tr(this,i,t),n=$t(this.G),Ht(n,"RID",e),Ht(n,"CVER",22),this.F&&Ht(n,"X-HTTP-Session-Id",this.F),er(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(zn(s)))+"&"+t:this.o&&Gn(n,this.o,s)),yn(this.h,i),this.bb&&Ht(n,"TYPE","init"),this.P?(Ht(n,"$req",t),Ht(n,"SID","null"),i.ba=!0,kt(i,n,null)):kt(i,n,t),this.H=2}}else 3==this.H&&(e?Zn(this,e):0==this.i.length||pn(this.h)||Zn(this))},r.Ma=function(){if(this.u=null,sr(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=lt(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ct(10),Qn(this),sr(this))},r.ib=function(){null!=this.v&&(this.v=null,Qn(this),rr(this),ct(19))},r.pb=function(e){e?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))},r=fr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},pr.prototype.g=function(e,t){return new mr(e,t)},E(mr,ke),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=hr(e,null,e.Y),Yn(e)},mr.prototype.close=function(){Wn(this.g)},mr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xe(e),e=n);t.i.push(new hn(t.fb++,e)),3==t.H&&Yn(t)},mr.prototype.N=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,mr.$.N.call(this)},E(gr,vt),E(yr,wt),E(vr,fr),vr.prototype.Ba=function(){Ae(this.g,"a")},vr.prototype.Aa=function(e){Ae(this.g,new gr(e))},vr.prototype.za=function(e){Ae(this.g,new yr)},vr.prototype.ya=function(){Ae(this.g,"b")},E(_r,wr),_r.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},_r.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)br(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){br(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){br(this,r),i=0;break}}this.h=i,this.i+=t},_r.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Er={};function Tr(e){return-128<=e&&128>e?F(Er,e,(function(e){return new Ir([0|e],0>e?-1:0)})):new Ir([0|e],0>e?-1:0)}function Sr(e){if(isNaN(e)||!isFinite(e))return Cr;if(0>e)return Or(Sr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ar;return new Ir(t,0)}function kr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Or(kr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Sr(Math.pow(t,8)),r=Cr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Sr(Math.pow(t,s)),r=r.R(s).add(Sr(o))):(r=r.R(n),r=r.add(Sr(o)))}return r}var Ar=4294967296,Cr=Tr(0),xr=Tr(1),Nr=Tr(16777216);function Rr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Dr(e){return-1==e.h}function Or(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Ir(n,~e.h).add(xr)}function Pr(e,t){return e.add(Or(t))}function Mr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Lr(e,t){this.g=e,this.h=t}function Fr(e,t){if(Rr(t))throw Error("division by zero");if(Rr(e))return new Lr(Cr,Cr);if(Dr(e))return t=Fr(Or(e),t),new Lr(Or(t.g),Or(t.h));if(Dr(t))return t=Fr(e,Or(t)),new Lr(Or(t.g),t.h);if(30<e.g.length){if(Dr(e)||Dr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=xr,r=t;0>=r.X(e);)n=Vr(n),r=Vr(r);var i=Ur(n,1),s=Ur(r,1);for(r=Ur(r,2),n=Ur(n,2);!Rr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ur(r,1),n=Ur(n,1)}return t=Pr(e,i.R(t)),new Lr(i,t)}for(i=Cr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Sr(n),o=s.R(t);Dr(o)||0<o.X(e);)n-=r,s=Sr(n),o=s.R(t);Rr(s)&&(s=xr),i=i.add(s),e=Pr(e,o)}return new Lr(i,e)}function Vr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Ir(n,e.h)}function Ur(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Ir(i,e.h)}r=Ir.prototype,r.ea=function(){if(Dr(this))return-Or(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ar+r)*t,t*=Ar}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rr(this))return"0";if(Dr(this))return"-"+Or(this).toString(e);for(var t=Sr(Math.pow(e,6)),n=this,r="";;){var i=Fr(n,t).g;n=Pr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Rr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Pr(this,e),Dr(e)?-1:Rr(e)?0:1},r.abs=function(){return Dr(this)?Or(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ir(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Rr(this)||Rr(e))return Cr;if(Dr(this))return Dr(e)?Or(this).R(Or(e)):Or(Or(this).R(e));if(Dr(e))return Or(this.R(Or(e)));if(0>this.X(Nr)&&0>e.X(Nr))return Sr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Mr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Mr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Mr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Mr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Ir(n,0)},r.gb=function(e){return Fr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Ir(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Ir(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Ir(n,this.h^e.h)},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=yt,yt.OPEN="a",yt.CLOSE="b",yt.ERROR="c",yt.MESSAGE="d",ke.prototype.listen=ke.prototype.O,Dn.prototype.listenOnce=Dn.prototype.P,Dn.prototype.getLastError=Dn.prototype.Sa,Dn.prototype.getLastErrorCode=Dn.prototype.Ia,Dn.prototype.getStatus=Dn.prototype.da,Dn.prototype.getResponseJson=Dn.prototype.Wa,Dn.prototype.getResponseText=Dn.prototype.ja,Dn.prototype.send=Dn.prototype.ha,Dn.prototype.setWithCredentials=Dn.prototype.Oa,_r.prototype.digest=_r.prototype.l,_r.prototype.reset=_r.prototype.reset,_r.prototype.update=_r.prototype.j,Ir.prototype.add=Ir.prototype.add,Ir.prototype.multiply=Ir.prototype.R,Ir.prototype.modulo=Ir.prototype.gb,Ir.prototype.compare=Ir.prototype.X,Ir.prototype.toNumber=Ir.prototype.ea,Ir.prototype.toString=Ir.prototype.toString,Ir.prototype.getBits=Ir.prototype.D,Ir.fromNumber=Sr,Ir.fromString=kr;var jr=l.createWebChannelTransport=function(){return new pr},Br=l.getStatEventTarget=function(){return it()},qr=l.ErrorCode=ht,$r=l.EventType=dt,zr=l.Event=nt,Gr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Kr=l.FetchXmlHttpFactory=Sn,Hr=l.WebChannel=mt,Wr=l.XhrIo=Dn,Qr=l.Md5=_r,Jr=l.Integer=Ir;const Yr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xr.UNAUTHENTICATED=new Xr(null),Xr.GOOGLE_CREDENTIALS=new Xr("google-credentials-uid"),Xr.FIRST_PARTY=new Xr("first-party-uid"),Xr.MOCK_USER=new Xr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zr="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new a.Yd("@firebase/firestore");function ti(){return ei.logLevel}function ni(e){ei.setLogLevel(e)}function ri(e,...t){if(ei.logLevel<=a["in"].DEBUG){const n=t.map(oi);ei.debug(`Firestore (${Zr}): ${e}`,...n)}}function ii(e,...t){if(ei.logLevel<=a["in"].ERROR){const n=t.map(oi);ei.error(`Firestore (${Zr}): ${e}`,...n)}}function si(e,...t){if(ei.logLevel<=a["in"].WARN){const n=t.map(oi);ei.warn(`Firestore (${Zr}): ${e}`,...n)}}function oi(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e="Unexpected state"){const t=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+e;throw ii(t),new Error(t)}function ci(e,t){e||ai()}function ui(e,t){e||ai()}function li(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class di extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xr.UNAUTHENTICATED)))}shutdown(){}}class gi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class yi{constructor(e){this.t=e,this.currentUser=Xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fi,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ri("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ri("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ri("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ci("string"==typeof t.accessToken),new pi(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ci(null===e||"string"==typeof e),new Xr(e)}}class vi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Xr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new vi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _i{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ri("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ri("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ri("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ri("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ci("string"==typeof e.token),this.T=e.token,new _i(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ii(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ti(e,t){return e<t?-1:e>t?1:0}function Si(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function ki(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new di(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new di(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new di(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new di(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ai.fromMillis(Date.now())}static fromDate(e){return Ai.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ai(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ti(this.nanoseconds,e.nanoseconds):Ti(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ci(e)}static min(){return new Ci(new Ai(0,0))}static max(){return new Ci(new Ai(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,n){void 0===t?t=0:t>e.length&&ai(),void 0===n?n=e.length-t:n>e.length-t&&ai(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===xi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ni extends xi{construct(e,t,n){return new Ni(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new di(hi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ni(t)}static emptyPath(){return new Ni([])}}const Ri=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Di extends xi{construct(e,t,n){return new Di(e,t,n)}static isValidIdentifier(e){return Ri.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Di.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Di(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new di(hi.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new di(hi.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new di(hi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new di(hi.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Di(t)}static emptyPath(){return new Di([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.path=e}static fromPath(e){return new Oi(Ni.fromString(e))}static fromName(e){return new Oi(Ni.fromString(e).popFirst(5))}static empty(){return new Oi(Ni.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ni.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ni.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oi(new Ni(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Mi(e){return e.fields.find((e=>2===e.kind))}function Li(e){return e.fields.filter((e=>2!==e.kind))}Pi.UNKNOWN_ID=-1;class Fi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Vi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Vi(0,Bi.min())}}function Ui(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ci.fromTimestamp(1e9===r?new Ai(n+1,0):new Ai(n,r));return new Bi(i,Oi.empty(),t)}function ji(e){return new Bi(e.readTime,e.key,-1)}class Bi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Bi(Ci.min(),Oi.empty(),-1)}static max(){return new Bi(Ci.max(),Oi.empty(),-1)}}function qi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Oi.comparator(e.documentKey,t.documentKey),0!==n?n:Ti(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(e){if(e.code!==hi.FAILED_PRECONDITION||e.message!==$i)throw e;ri("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ai(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ki(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ki?t:Ki.resolve(t)}catch(e){return Ki.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ki.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ki.reject(t)}static resolve(e){return new Ki(((t,n)=>{t(e)}))}static reject(e){return new Ki(((t,n)=>{n(e)}))}static waitFor(e){return new Ki(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ki.resolve(!1);for(const n of e)t=t.next((e=>e?Ki.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ki(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ki(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new fi,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Ji(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=ts(t.target.error);this.v.reject(new Ji(e,n))}}static open(e,t,n,r){try{return new Hi(t,e.transaction(r,n))}catch(e){throw new Ji(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(ri("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Xi(t)}}class Wi{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Wi.S((0,c.z$)())&&ii("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ri("SimpleDb","Removing database:",e),Zi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(Wi.C())return!0;const e=(0,c.z$)(),t=Wi.S(e),n=0<t&&t<10,r=Wi.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(ri("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ji(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new di(hi.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new di(hi.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ji(e,r))},r.onupgradeneeded=e=>{ri("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next((()=>{ri("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=Hi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Ki.reject(e)))).toPromise();return s.catch((()=>{})),await t.R,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ri("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Qi{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Zi(this.L.delete())}}class Ji extends di{constructor(e,t){super(hi.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Yi(e){return"IndexedDbTransactionError"===e.name}class Xi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ri("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ri("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Zi(n)}add(e){return ri("SimpleDb","ADD",this.store.name,e,e),Zi(this.store.add(e))}get(e){return Zi(this.store.get(e)).next((t=>(void 0===t&&(t=null),ri("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ri("SimpleDb","DELETE",this.store.name,e),Zi(this.store.delete(e))}count(){return ri("SimpleDb","COUNT",this.store.name),Zi(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ki(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ki(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ri("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new Ki(((n,r)=>{t.onerror=e=>{const t=ts(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Ki(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Qi(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ki){const e=o.catch((e=>(s.done(),Ki.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Ki.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zi(e){return new Ki(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ts(e.target.error);n(t)}}))}let es=!1;function ts(e){const t=Wi.S((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new di("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return es||(es=!0,setTimeout((()=>{throw e}),0)),e}}return e}class ns{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){ri("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ri("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Yi(e)?ri("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Gi(e)}await this.et(6e4)}))}}class rs{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return Ki.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ri("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(ri("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=ji(t);qi(r,n)>0&&(n=r)})),new Bi(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ss(e){return null==e}function os(e){return 0===e&&1/e==-1/0}function as(e){return"number"==typeof e&&Number.isInteger(e)&&!os(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ls(t)),t=us(e.get(n),t);return ls(t)}function us(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ls(e){return e+""}function hs(e){const t=e.length;if(ci(t>=2),2===t)return ci(""===e.charAt(0)&&""===e.charAt(1)),Ni.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&ai(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:ai()}s=t+2}return new Ni(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */is.ct=-1;const ds=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,t){return[e,cs(t)]}function ps(e,t,n){return[e,cs(t),n]}const ms={},gs=["prefixPath","collectionGroup","readTime","documentId"],ys=["prefixPath","collectionGroup","documentId"],vs=["collectionGroup","readTime","prefixPath","documentId"],ws=["canonicalId","targetId"],_s=["targetId","path"],bs=["path","targetId"],Is=["collectionId","parent"],Es=["indexId","uid"],Ts=["uid","sequenceNumber"],Ss=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ks=["indexId","uid","orderedDocumentKey"],As=["userId","collectionPath","documentId"],Cs=["userId","collectionPath","largestBatchId"],xs=["userId","collectionGroup","largestBatchId"],Ns=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Rs=[...Ns,"documentOverlays"],Ds=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Os=Ds,Ps=[...Os,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends zi{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function Ls(e,t){const n=li(e);return Wi.M(n.ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Vs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Us(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.comparator=e,this.root=t||qs.EMPTY}insert(e,t){return new js(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qs.BLACK,null,null))}remove(e){return new js(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bs(this.root,e,this.comparator,!0)}}class Bs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qs.RED,this.left=null!=r?r:qs.EMPTY,this.right=null!=i?i:qs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new qs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return qs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ai();if(this.right.isRed())throw ai();const e=this.left.check();if(e!==this.right.check())throw ai();return e+(this.isRed()?0:1)}}qs.EMPTY=null,qs.RED=!0,qs.BLACK=!1,qs.EMPTY=new class{constructor(){this.size=0}get key(){throw ai()}get value(){throw ai()}get color(){throw ai()}get left(){throw ai()}get right(){throw ai()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e){this.comparator=e,this.data=new js(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zs(this.data.getIterator())}getIteratorFrom(e){return new zs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $s))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $s(this.comparator);return t.data=e,t}}class zs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gs(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.fields=e,e.sort(Di.comparator)}static empty(){return new Ks([])}unionWith(e){let t=new $s(Di.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ks(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Hs("Invalid base64 string: "+e):e}}(e);return new Qs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Qs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ti(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qs.EMPTY_BYTE_STRING=new Qs("");const Js=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(e){if(ci(!!e),"string"==typeof e){let t=0;const n=Js.exec(e);if(ci(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Xs(e.seconds),nanos:Xs(e.nanos)}}function Xs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Zs(e){return"string"==typeof e?Qs.fromBase64String(e):Qs.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function to(e){const t=e.mapValue.fields.__previous_value__;return eo(t)?to(t):t}function no(e){const t=Ys(e.mapValue.fields.__local_write_time__.timestampValue);return new Ai(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class io{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},oo={nullValue:"NULL_VALUE"};function ao(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eo(e)?4:Io(e)?9007199254740991:10:ai()}function co(e,t){if(e===t)return!0;const n=ao(e);if(n!==ao(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return no(e).isEqual(no(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ys(e.timestampValue),r=Ys(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Zs(e.bytesValue).isEqual(Zs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Xs(e.geoPointValue.latitude)===Xs(t.geoPointValue.latitude)&&Xs(e.geoPointValue.longitude)===Xs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Xs(e.integerValue)===Xs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Xs(e.doubleValue),r=Xs(t.doubleValue);return n===r?os(n)===os(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Si(e.arrayValue.values||[],t.arrayValue.values||[],co);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Fs(n)!==Fs(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!co(n[i],r[i])))return!1;return!0}(e,t);default:return ai()}}function uo(e,t){return void 0!==(e.values||[]).find((e=>co(e,t)))}function lo(e,t){if(e===t)return 0;const n=ao(e),r=ao(t);if(n!==r)return Ti(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ti(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Xs(e.integerValue||e.doubleValue),r=Xs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ho(e.timestampValue,t.timestampValue);case 4:return ho(no(e),no(t));case 5:return Ti(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Zs(e),r=Zs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ti(n[i],r[i]);if(0!==e)return e}return Ti(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ti(Xs(e.latitude),Xs(t.latitude));return 0!==n?n:Ti(Xs(e.longitude),Xs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=lo(n[i],r[i]);if(e)return e}return Ti(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===so.mapValue&&t===so.mapValue)return 0;if(e===so.mapValue)return 1;if(t===so.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ti(r[o],s[o]);if(0!==e)return e;const t=lo(n[r[o]],i[s[o]]);if(0!==t)return t}return Ti(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ai()}}function ho(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ti(e,t);const n=Ys(e),r=Ys(t),i=Ti(n.seconds,r.seconds);return 0!==i?i:Ti(n.nanos,r.nanos)}function fo(e){return po(e)}function po(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ys(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Zs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=po(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${po(e.fields[i])}`;return n+"}"}(e.mapValue):ai();var t,n}function mo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function go(e){return!!e&&"integerValue"in e}function yo(e){return!!e&&"arrayValue"in e}function vo(e){return!!e&&"nullValue"in e}function wo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _o(e){return!!e&&"mapValue"in e}function bo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Vs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=bo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=bo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Io(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Eo(e){return"nullValue"in e?oo:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?mo(io.empty(),Oi.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:ai()}function To(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?mo(io.empty(),Oi.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?so:ai()}function So(e,t){const n=lo(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ko(e,t){const n=lo(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.value=e}static empty(){return new Ao({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!_o(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(t)}setAll(e){let t=Di.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=bo(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());_o(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return co(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];_o(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Vs(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ao(bo(this.value))}}function Co(e){const t=[];return Vs(e.fields,((e,n)=>{const r=new Di([e]);if(_o(n)){const e=Co(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ks(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xo{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new xo(e,0,Ci.min(),Ci.min(),Ci.min(),Ao.empty(),0)}static newFoundDocument(e,t,n,r){return new xo(e,1,t,Ci.min(),n,r,0)}static newNoDocument(e,t){return new xo(e,2,t,Ci.min(),Ci.min(),Ao.empty(),0)}static newUnknownDocument(e,t){return new xo(e,3,t,Ci.min(),Ci.min(),Ao.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ci.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ao.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ao.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ci.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof xo&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.position=e,this.inclusive=t}}function Ro(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Oi.comparator(Oi.fromName(o.referenceValue),n.key):lo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Do(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!co(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Po(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{}class Lo extends Mo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ko(e,t,n):"array-contains"===t?new Jo(e,n):"in"===t?new Yo(e,n):"not-in"===t?new Xo(e,n):"array-contains-any"===t?new Zo(e,n):new Lo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ho(e,n):new Wo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(lo(t,this.value)):null!==t&&ao(this.value)===ao(t)&&this.matchesComparison(lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ai()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fo extends Mo{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Fo(e,t)}matches(e){return Vo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Vo(e){return"and"===e.op}function Uo(e){return"or"===e.op}function jo(e){return Bo(e)&&Vo(e)}function Bo(e){for(const t of e.filters)if(t instanceof Fo)return!1;return!0}function qo(e){if(e instanceof Lo)return e.field.canonicalString()+e.op.toString()+fo(e.value);if(jo(e))return e.filters.map((e=>qo(e))).join(",");{const t=e.filters.map((e=>qo(e))).join(",");return`${e.op}(${t})`}}function $o(e,t){return e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.field.isEqual(t.field)&&co(e.value,t.value)}(e,t):e instanceof Fo?function(e,t){return t instanceof Fo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&$o(n,t.filters[r])),!0)}(e,t):void ai()}function zo(e,t){const n=e.filters.concat(t);return Fo.create(n,e.op)}function Go(e){return e instanceof Lo?function(e){return`${e.field.canonicalString()} ${e.op} ${fo(e.value)}`}(e):e instanceof Fo?function(e){return e.op.toString()+" {"+e.getFilters().map(Go).join(" ,")+"}"}(e):"Filter"}class Ko extends Lo{constructor(e,t,n){super(e,t,n),this.key=Oi.fromName(n.referenceValue)}matches(e){const t=Oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ho extends Lo{constructor(e,t){super(e,"in",t),this.keys=Qo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Wo extends Lo{constructor(e,t){super(e,"not-in",t),this.keys=Qo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Oi.fromName(e.referenceValue)))}class Jo extends Lo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yo(t)&&uo(t.arrayValue,this.value)}}class Yo extends Lo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&uo(this.value.arrayValue,t)}}class Xo extends Lo{constructor(e,t){super(e,"not-in",t)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!uo(this.value.arrayValue,t)}}class Zo extends Lo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>uo(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function ta(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ea(e,t,n,r,i,s,o)}function na(e){const t=li(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>qo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ss(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>fo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>fo(e))).join(",")),t.dt=e}return t.dt}function ra(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Po(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$o(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Do(e.startAt,t.startAt)&&Do(e.endAt,t.endAt)}function ia(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function sa(e,t){return e.filters.filter((e=>e instanceof Lo&&e.field.isEqual(t)))}function oa(e,t,n){let r=oo,i=!0;for(const s of sa(e,t)){let e=oo,t=!0;switch(s.op){case"<":case"<=":e=Eo(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=oo}So({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];So({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function aa(e,t,n){let r=so,i=!0;for(const s of sa(e,t)){let e=so,t=!0;switch(s.op){case">=":case">":e=To(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=so}ko({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ko({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ua(e,t,n,r,i,s,o,a){return new ca(e,t,n,r,i,s,o,a)}function la(e){return new ca(e)}function ha(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function da(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fa(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function pa(e){return null!==e.collectionGroup}function ma(e){const t=li(e);if(null===t.wt){t.wt=[];const e=fa(t),n=da(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Oo(e)),t.wt.push(new Oo(Di.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Oo(Di.keyField(),e))}}}return t.wt}function ga(e){const t=li(e);if(!t._t)if("F"===t.limitType)t._t=ta(t.path,t.collectionGroup,ma(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of ma(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Oo(i.field,t))}const n=t.endAt?new No(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new No(t.startAt.position,t.startAt.inclusive):null;t._t=ta(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ya(e,t){t.getFirstInequalityField(),fa(e);const n=e.filters.concat([t]);return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function va(e,t,n){return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wa(e,t){return ra(ga(e),ga(t))&&e.limitType===t.limitType}function _a(e){return`${na(ga(e))}|lt:${e.limitType}`}function ba(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Go(e))).join(", ")}]`),ss(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>fo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>fo(e))).join(",")),`Target(${t})`}(ga(e))}; limitType=${e.limitType})`}function Ia(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ma(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ro(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ma(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ro(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ma(e),t))}(e,t)}function Ea(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ta(e){return(t,n)=>{let r=!1;for(const i of ma(e)){const e=Sa(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Sa(e,t,n){const r=e.field.isKeyField()?Oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?lo(r,i):ai()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ai()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Us(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new js(Oi.comparator);function Ca(){return Aa}const xa=new js(Oi.comparator);function Na(...e){let t=xa;for(const n of e)t=t.insert(n.key,n);return t}function Ra(e){let t=xa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Da(){return Pa()}function Oa(){return Pa()}function Pa(){return new ka((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ma=new js(Oi.comparator),La=new $s(Oi.comparator);function Fa(...e){let t=La;for(const n of e)t=t.add(n);return t}const Va=new $s(Ti);function Ua(){return Va}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(t)?"-0":t}}function Ba(e){return{integerValue:""+e}}function qa(e,t){return as(t)?Ba(t):ja(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._=void 0}}function za(e,t,n){return e instanceof Ha?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eo(t)&&(t=to(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Wa?Qa(e,t):e instanceof Ja?Ya(e,t):function(e,t){const n=Ka(e,t),r=Za(n)+Za(e.gt);return go(n)&&go(e.gt)?Ba(r):ja(e.serializer,r)}(e,t)}function Ga(e,t,n){return e instanceof Wa?Qa(e,t):e instanceof Ja?Ya(e,t):n}function Ka(e,t){return e instanceof Xa?go(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ha extends $a{}class Wa extends $a{constructor(e){super(),this.elements=e}}function Qa(e,t){const n=ec(t);for(const r of e.elements)n.some((e=>co(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ja extends $a{constructor(e){super(),this.elements=e}}function Ya(e,t){let n=ec(t);for(const r of e.elements)n=n.filter((e=>!co(e,r)));return{arrayValue:{values:n}}}class Xa extends $a{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Za(e){return Xs(e.integerValue||e.doubleValue)}function ec(e){return yo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.field=e,this.transform=t}}function nc(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Wa&&t instanceof Wa||e instanceof Ja&&t instanceof Ja?Si(e.elements,t.elements,co):e instanceof Xa&&t instanceof Xa?co(e.gt,t.gt):e instanceof Ha&&t instanceof Ha}(e.transform,t.transform)}class rc{constructor(e,t){this.version=e,this.transformResults=t}}class ic{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ic}static exists(e){return new ic(void 0,e)}static updateTime(e){return new ic(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class oc{}function ac(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new yc(e.key,ic.none()):new dc(e.key,e.data,ic.none());{const n=e.data,r=Ao.empty();let i=new $s(Di.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new fc(e.key,r,new Ks(i.toArray()),ic.none())}}function cc(e,t,n){e instanceof dc?function(e,t,n){const r=e.value.clone(),i=mc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof fc?function(e,t,n){if(!sc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=mc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(pc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function uc(e,t,n,r){return e instanceof dc?function(e,t,n,r){if(!sc(e.precondition,t))return n;const i=e.value.clone(),s=gc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof fc?function(e,t,n,r){if(!sc(e.precondition,t))return n;const i=gc(e.fieldTransforms,r,t),s=t.data;return s.setAll(pc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return sc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function lc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ka(r.transform,e||null);null!=i&&(null===n&&(n=Ao.empty()),n.set(r.field,i))}return n||null}function hc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Si(e,t,((e,t)=>nc(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class dc extends oc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class fc extends oc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function mc(e,t,n){const r=new Map;ci(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ga(o,a,n[i]))}return r}function gc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,za(e,s,t))}return r}class yc extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vc extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&cc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=uc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=uc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Oa();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ac(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ci.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Fa())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,((e,t)=>hc(e,t)))&&Si(this.baseMutations,e.baseMutations,((e,t)=>hc(e,t)))}}class _c{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ci(e.mutations.length===n.length);let r=Ma;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new _c(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ec,Tc;function Sc(e){switch(e){default:return ai();case hi.CANCELLED:case hi.UNKNOWN:case hi.DEADLINE_EXCEEDED:case hi.RESOURCE_EXHAUSTED:case hi.INTERNAL:case hi.UNAVAILABLE:case hi.UNAUTHENTICATED:return!1;case hi.INVALID_ARGUMENT:case hi.NOT_FOUND:case hi.ALREADY_EXISTS:case hi.PERMISSION_DENIED:case hi.FAILED_PRECONDITION:case hi.ABORTED:case hi.OUT_OF_RANGE:case hi.UNIMPLEMENTED:case hi.DATA_LOSS:return!0}}function kc(e){if(void 0===e)return ii("GRPC error has no .code"),hi.UNKNOWN;switch(e){case Ec.OK:return hi.OK;case Ec.CANCELLED:return hi.CANCELLED;case Ec.UNKNOWN:return hi.UNKNOWN;case Ec.DEADLINE_EXCEEDED:return hi.DEADLINE_EXCEEDED;case Ec.RESOURCE_EXHAUSTED:return hi.RESOURCE_EXHAUSTED;case Ec.INTERNAL:return hi.INTERNAL;case Ec.UNAVAILABLE:return hi.UNAVAILABLE;case Ec.UNAUTHENTICATED:return hi.UNAUTHENTICATED;case Ec.INVALID_ARGUMENT:return hi.INVALID_ARGUMENT;case Ec.NOT_FOUND:return hi.NOT_FOUND;case Ec.ALREADY_EXISTS:return hi.ALREADY_EXISTS;case Ec.PERMISSION_DENIED:return hi.PERMISSION_DENIED;case Ec.FAILED_PRECONDITION:return hi.FAILED_PRECONDITION;case Ec.ABORTED:return hi.ABORTED;case Ec.OUT_OF_RANGE:return hi.OUT_OF_RANGE;case Ec.UNIMPLEMENTED:return hi.UNIMPLEMENTED;case Ec.DATA_LOSS:return hi.DATA_LOSS;default:return ai()}}(Tc=Ec||(Ec={}))[Tc.OK=0]="OK",Tc[Tc.CANCELLED=1]="CANCELLED",Tc[Tc.UNKNOWN=2]="UNKNOWN",Tc[Tc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tc[Tc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tc[Tc.NOT_FOUND=5]="NOT_FOUND",Tc[Tc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tc[Tc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tc[Tc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tc[Tc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tc[Tc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tc[Tc.ABORTED=10]="ABORTED",Tc[Tc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tc[Tc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tc[Tc.INTERNAL=13]="INTERNAL",Tc[Tc.UNAVAILABLE=14]="UNAVAILABLE",Tc[Tc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cc}static getOrCreateInstance(){return null===Cc&&(Cc=new Ac),Cc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Cc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Jr([4294967295,4294967295],0);function Rc(e){const t=xc().encode(e),n=new Qr;return n.update(t),new Uint8Array(n.digest())}function Dc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class Oc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Pc(`Invalid padding: ${t}`);if(n<0)throw new Pc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Pc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Pc(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Jr.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Jr.fromNumber(n)));return 1===r.compare(Nc)&&(r=new Jr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Rc(e),[n,r]=Dc(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Oc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=Rc(e),[n,r]=Dc(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Pc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Lc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Mc(Ci.min(),r,new js(Ti),Ca(),Fa())}}class Lc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Lc(n,t,Fa(),Fa(),Fa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Vc{constructor(e,t){this.targetId=e,this.Vt=t}}class Uc{constructor(e,t,n=Qs.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class jc{constructor(){this.St=0,this.Dt=$c(),this.Ct=Qs.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Fa(),t=Fa(),n=Fa();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ai()}})),new Lc(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=$c()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Bc{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ca(),this.zt=qc(),this.Wt=new js(Ti)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ai()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(ia(s))if(0===r){const e=new Oi(s.path);this.Yt(n,e,xo.newNoDocument(e,Ci.min()))}else ci(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Ac.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Zs(i).toUint8Array()}catch(e){if(e instanceof Hs)return si("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Oc(a,s,o)}catch(e){return si(e instanceof Pc?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&ia(i.target)){const t=new Oi(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,xo.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=Fa();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Mc(e,t,this.Wt,this.jt,n);return this.jt=Ca(),this.zt=qc(),this.Wt=new js(Ti),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new jc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new $s(Ti),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||ri("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new jc),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function qc(){return new js(Oi.comparator)}function $c(){return new js(Oi.comparator)}const zc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Gc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Kc=(()=>{const e={and:"AND",or:"OR"};return e})();class Hc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wc(e,t){return e.useProto3Json||ss(t)?t:{value:t}}function Qc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Yc(e,t){return Qc(e,t.toTimestamp())}function Xc(e){return ci(!!e),Ci.fromTimestamp(function(e){const t=Ys(e);return new Ai(t.seconds,t.nanos)}(e))}function Zc(e,t){return function(e){return new Ni(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function eu(e){const t=Ni.fromString(e);return ci(ku(t)),t}function tu(e,t){return Zc(e.databaseId,t.path)}function nu(e,t){const n=eu(t);if(n.get(1)!==e.databaseId.projectId)throw new di(hi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new di(hi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Oi(ou(n))}function ru(e,t){return Zc(e.databaseId,t)}function iu(e){const t=eu(e);return 4===t.length?Ni.emptyPath():ou(t)}function su(e){return new Ni(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ou(e){return ci(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function au(e,t,n){return{name:tu(e,t),fields:n.value.mapValue.fields}}function cu(e,t,n){const r=nu(e,t.name),i=Xc(t.updateTime),s=t.createTime?Xc(t.createTime):Ci.min(),o=new Ao({mapValue:{fields:t.fields}}),a=xo.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function uu(e,t){return"found"in t?function(e,t){ci(!!t.found),t.found.name,t.found.updateTime;const n=nu(e,t.found.name),r=Xc(t.found.updateTime),i=t.found.createTime?Xc(t.found.createTime):Ci.min(),s=new Ao({mapValue:{fields:t.found.fields}});return xo.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){ci(!!t.missing),ci(!!t.readTime);const n=nu(e,t.missing),r=Xc(t.readTime);return xo.newNoDocument(n,r)}(e,t):ai()}function lu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ai()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ci(void 0===t||"string"==typeof t),Qs.fromBase64String(t||"")):(ci(void 0===t||t instanceof Uint8Array),Qs.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?hi.UNKNOWN:kc(e.code);return new di(t,e.message||"")}(o);n=new Uc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=nu(e,r.document.name),s=Xc(r.document.updateTime),o=r.document.createTime?Xc(r.document.createTime):Ci.min(),a=new Ao({mapValue:{fields:r.document.fields}}),c=xo.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Fc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=nu(e,r.document),s=r.readTime?Xc(r.readTime):Ci.min(),o=xo.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=nu(e,r.document),s=r.removedTargetIds||[];n=new Fc([],s,i,null)}else{if(!("filter"in t))return ai();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Ic(r,i),o=e.targetId;n=new Vc(o,s)}}return n}function hu(e,t){let n;if(t instanceof dc)n={update:au(e,t.key,t.value)};else if(t instanceof yc)n={delete:tu(e,t.key)};else if(t instanceof fc)n={update:au(e,t.key,t.data),updateMask:Su(t.fieldMask)};else{if(!(t instanceof vc))return ai();n={verify:tu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Wa)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ja)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Xa)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ai()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Yc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ai()}(e,t.precondition)),n}function du(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?ic.updateTime(Xc(e.updateTime)):void 0!==e.exists?ic.exists(e.exists):ic.none()}(t.currentDocument):ic.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)ci("REQUEST_TIME"===t.setToServerValue),n=new Ha;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Wa(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ja(e)}else"increment"in t?n=new Xa(e,t.increment):ai();const r=Di.fromServerFormat(t.fieldPath);return new tc(r,n)}(e,t))):[];if(t.update){t.update.name;const i=nu(e,t.update.name),s=new Ao({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Ks(t.map((e=>Di.fromServerFormat(e))))}(t.updateMask);return new fc(i,s,e,n,r)}return new dc(i,s,n,r)}if(t.delete){const r=nu(e,t.delete);return new yc(r,n)}if(t.verify){const r=nu(e,t.verify);return new vc(r,n)}return ai()}function fu(e,t){return e&&e.length>0?(ci(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Xc(e.updateTime):Xc(t);return n.isEqual(Ci.min())&&(n=Xc(t)),new rc(n,e.transformResults||[])}(e,t)))):[]}function pu(e,t){return{documents:[ru(e,t.path)]}}function mu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ru(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ru(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Tu(Fo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Iu(e.field),direction:wu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Wc(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function gu(e){let t=iu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ci(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=vu(e);return t instanceof Fo&&jo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Oo(Eu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ss(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new No(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new No(n,t)}(n.endAt)),ua(t,i,o,s,a,"F",c,u)}function yu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ai()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function vu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Eu(e.unaryFilter.field);return Lo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Eu(e.unaryFilter.field);return Lo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Eu(e.unaryFilter.field);return Lo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Eu(e.unaryFilter.field);return Lo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ai()}}(e):void 0!==e.fieldFilter?function(e){return Lo.create(Eu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ai()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Fo.create(e.compositeFilter.filters.map((e=>vu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ai()}}(e.compositeFilter.op))}(e):ai()}function wu(e){return zc[e]}function _u(e){return Gc[e]}function bu(e){return Kc[e]}function Iu(e){return{fieldPath:e.canonicalString()}}function Eu(e){return Di.fromServerFormat(e.fieldPath)}function Tu(e){return e instanceof Lo?function(e){if("=="===e.op){if(wo(e.value))return{unaryFilter:{field:Iu(e.field),op:"IS_NAN"}};if(vo(e.value))return{unaryFilter:{field:Iu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(wo(e.value))return{unaryFilter:{field:Iu(e.field),op:"IS_NOT_NAN"}};if(vo(e.value))return{unaryFilter:{field:Iu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Iu(e.field),op:_u(e.op),value:e.value}}}(e):e instanceof Fo?function(e){const t=e.getFilters().map((e=>Tu(e)));return 1===t.length?t[0]:{compositeFilter:{op:bu(e.op),filters:t}}}(e):ai()}function Su(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ku(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t,n,r,i=Ci.min(),s=Ci.min(),o=Qs.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Au(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Au(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Au(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Au(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.fe=e}}function xu(e,t){let n;if(t.document)n=cu(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Oi.fromSegments(t.noDocument.path),r=Ou(t.noDocument.readTime);n=xo.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ai();{const e=Oi.fromSegments(t.unknownDocument.path),r=Ou(t.unknownDocument.version);n=xo.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Ai(e[0],e[1]);return Ci.fromTimestamp(t)}(t.readTime)),n}function Nu(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ru(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:tu(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Qc(e,t.version.toTimestamp()),createTime:Qc(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Du(t.version)};else{if(!t.isUnknownDocument())return ai();r.unknownDocument={path:n.path.toArray(),version:Du(t.version)}}return r}function Ru(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Du(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ou(e){const t=new Ai(e.seconds,e.nanoseconds);return Ci.fromTimestamp(t)}function Pu(e,t){const n=(t.baseMutations||[]).map((t=>du(e.fe,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>du(e.fe,t))),i=Ai.fromMillis(t.localWriteTimeMs);return new wc(t.batchId,i,n,r)}function Mu(e){const t=Ou(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ou(e.lastLimboFreeSnapshotVersion):Ci.min();let r;var i;return void 0!==e.query.documents?(ci(1===(i=e.query).documents.length),r=ga(la(iu(i.documents[0])))):r=function(e){return ga(gu(e))}(e.query),new Au(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Qs.fromBase64String(e.resumeToken))}function Lu(e,t){const n=Du(t.snapshotVersion),r=Du(t.lastLimboFreeSnapshotVersion);let i;i=ia(t.target)?pu(e.fe,t.target):mu(e.fe,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:na(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Fu(e){const t=gu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?va(t,t.limit,"L"):t}function Vu(e,t){return new bc(t.largestBatchId,du(e.fe,t.overlayMutation))}function Uu(e,t){const n=t.path.lastSegment();return[e,cs(t.path.popLast()),n]}function ju(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Du(r.readTime),documentKey:cs(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{getBundleMetadata(e,t){return qu(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Ou(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return qu(e).put({bundleId:(n=t).id,createTime:Du(Xc(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return $u(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Fu(t.bundledQuery),readTime:Ou(t.readTime)};var t}))}saveNamedQuery(e,t){return $u(e).put(function(e){return{name:e.name,readTime:Du(Xc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function qu(e){return Ls(e,"bundles")}function $u(e){return Ls(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new zu(e,n)}getOverlay(e,t){return Gu(e).get(Uu(this.userId,t)).next((e=>e?Vu(this.serializer,e):null))}getOverlays(e,t){const n=Da();return Ki.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new bc(t,i);r.push(this.we(e,s))})),Ki.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(cs(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Gu(e).J("collectionPathOverlayIndex",r))})),Ki.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Da(),i=cs(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Gu(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Vu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Da();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Gu(e).X({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Vu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}we(e,t){return Gu(e).put(function(e,t,n){const[r,i,s]=Uu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:hu(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function Gu(e){return Ls(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Xs(e.integerValue));else if("doubleValue"in e){const n=Xs(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),os(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Zs(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Io(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ai()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),Oi.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function Hu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Wu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Hu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Ku.Ve=new Ku;class Qu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=Wu(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Le(e){const t=this.Fe(e),n=Wu(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Ju{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Yu{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Xu{constructor(){this.je=new Qu,this.ze=new Ju(this.je),this.We=new Yu(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Zu(this.indexId,this.documentKey,this.arrayValue,n)}}function el(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=tl(e.arrayValue,t.arrayValue),0!==n?n:(n=tl(e.directionalValue,t.directionalValue),0!==n?n:Oi.comparator(e.documentKey,t.documentKey)))}function tl(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){ci(e.collectionGroup===this.collectionId);const t=Mi(e);if(void 0!==t&&!this.en(t))return!1;const n=Li(e);let r=0,i=0;for(;r<n.length&&this.en(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ze){const e=n[r];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ye.length||!this.sn(this.Ye[i++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){var t,n;if(ci(e instanceof Lo||e instanceof Fo),e instanceof Lo){if(e instanceof Yo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Lo.create(e.field,"==",t))))||[];return Fo.create(r,"or")}return e}const r=e.filters.map((e=>rl(e)));return Fo.create(r,e.op)}function il(e){if(0===e.getFilters().length)return[];const t=cl(rl(e));return ci(al(t)),sl(t)||ol(t)?[t]:t.getFilters()}function sl(e){return e instanceof Lo}function ol(e){return e instanceof Fo&&jo(e)}function al(e){return sl(e)||ol(e)||function(e){if(e instanceof Fo&&Uo(e)){for(const t of e.getFilters())if(!sl(t)&&!ol(t))return!1;return!0}return!1}(e)}function cl(e){if(ci(e instanceof Lo||e instanceof Fo),e instanceof Lo)return e;if(1===e.filters.length)return cl(e.filters[0]);const t=e.filters.map((e=>cl(e)));let n=Fo.create(t,e.op);return n=hl(n),al(n)?n:(ci(n instanceof Fo),ci(Vo(n)),ci(n.filters.length>1),n.filters.reduce(((e,t)=>ul(e,t))))}function ul(e,t){let n;return ci(e instanceof Lo||e instanceof Fo),ci(t instanceof Lo||t instanceof Fo),n=e instanceof Lo?t instanceof Lo?function(e,t){return Fo.create([e,t],"and")}(e,t):ll(e,t):t instanceof Lo?ll(t,e):function(e,t){if(ci(e.filters.length>0&&t.filters.length>0),Vo(e)&&Vo(t))return zo(e,t.getFilters());const n=Uo(e)?e:t,r=Uo(e)?t:e,i=n.filters.map((e=>ul(e,r)));return Fo.create(i,"or")}(e,t),hl(n)}function ll(e,t){if(Vo(t))return zo(t,e.getFilters());{const n=t.filters.map((t=>ul(e,t)));return Fo.create(n,"or")}}function hl(e){if(ci(e instanceof Lo||e instanceof Fo),e instanceof Lo)return e;const t=e.getFilters();if(1===t.length)return hl(t[0]);if(Bo(e))return e;const n=t.map((e=>hl(e))),r=[];return n.forEach((t=>{t instanceof Lo?r.push(t):t instanceof Fo&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Fo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dl{constructor(){this.rn=new fl}addToCollectionParentIndex(e,t){return this.rn.add(t),Ki.resolve()}getCollectionParents(e,t){return Ki.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Ki.resolve()}deleteFieldIndex(e,t){return Ki.resolve()}getDocumentsMatchingTarget(e,t){return Ki.resolve(null)}getIndexType(e,t){return Ki.resolve(0)}getFieldIndexes(e,t){return Ki.resolve([])}getNextCollectionGroupToUpdate(e){return Ki.resolve(null)}getMinOffset(e,t){return Ki.resolve(Bi.min())}getMinOffsetFromCollectionGroup(e,t){return Ki.resolve(Bi.min())}updateCollectionGroup(e,t,n){return Ki.resolve()}updateIndexEntries(e,t){return Ki.resolve()}}class fl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $s(Ni.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $s(Ni.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Uint8Array(0);class ml{constructor(e,t){this.user=e,this.databaseId=t,this.on=new fl,this.un=new ka((e=>na(e)),((e,t)=>ra(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.on.add(t)}));const i={collectionId:n,parent:cs(r)};return gl(e).put(i)}return Ki.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[ki(t),""],!1,!0);return gl(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(hs(r.parent))}return n}))}addFieldIndex(e,t){const n=vl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=wl(e);return i.next((e=>{n.put(ju(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=vl(e),r=wl(e),i=yl(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=yl(e);let r=!0;const i=new Map;return Ki.forEach(this.cn(t),(t=>this.an(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Fa();const r=[];return Ki.forEach(i,((i,s)=>{var o;ri("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${na(t)}`);const a=function(e,t){const n=Mi(t);if(void 0===n)return null;for(const r of sa(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Li(t))for(const t of sa(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Li(t)){const t=0===i.kind?oa(e,i.fieldPath,e.startAt):aa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new No(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Li(t)){const t=0===i.kind?aa(e,i.fieldPath,e.endAt):oa(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new No(n,r)}(s,i),h=this.hn(i,s,u),d=this.hn(i,s,l),f=this.ln(i,s,c),p=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ki.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Oi.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ki.resolve(null)}))}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:il(Fo.create(e.filters,"and")).map((t=>ta(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.un.set(e,t),t)}fn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):pl,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map((t=>this.wn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new Zu(e,Oi.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new Zu(e,Oi.empty(),t,n);return r?i.Je():i}an(e,t){const n=new nl(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.cn(t);return Ki.forEach(r,(t=>this.an(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new $s(Di.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}mn(e,t){const n=new Xu;for(const r of Li(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);Ku.Ve._e(e,i)}return n.Qe()}dn(e){const t=new Xu;return Ku.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new Xu;return Ku.Ve._e(mo(this.databaseId,t),n.He(function(e){const t=Li(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new Xu);let i=0;for(const s of Li(e)){const e=n[i++];for(const n of r)if(this.yn(t,s.fieldPath)&&yo(e))r=this.pn(r,s,e);else{const t=n.He(s.kind);Ku.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Xu;n.seed(e.Qe()),Ku.Ve._e(s,n.He(t.kind)),i.push(n)}return i}yn(e,t){return!!e.filters.find((e=>e instanceof Lo&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=vl(e),r=wl(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Ki.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Vi(t.sequenceNumber,new Bi(Ou(t.readTime),new Oi(hs(t.documentKey)),t.largestBatchId)):Vi.empty(),r=e.fields.map((([e,t])=>new Fi(Di.fromServerFormat(e),t)));return new Pi(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ti(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=vl(e),i=wl(e);return this.Tn(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ki.forEach(t,(t=>i.put(ju(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ki.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ki.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ki.forEach(i,(n=>this.En(e,t,n).next((t=>{const i=this.An(r,n);return t.isEqual(i)?Ki.resolve():this.vn(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return yl(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return yl(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=yl(e);let i=new $s(el);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},((e,r)=>{i=i.add(new Zu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}An(e,t){let n=new $s(el);const r=this.mn(t,e);if(null==r)return n;const i=Mi(t);if(null!=i){const s=e.data.field(i.fieldPath);if(yo(s))for(const i of s.arrayValue.values||[])n=n.add(new Zu(t.indexId,e.key,this.dn(i),r))}else n=n.add(new Zu(t.indexId,e.key,pl,r));return n}vn(e,t,n,r,i){ri("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Gs(s),c=Gs(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Gs(o)):t?(i(a),a=Gs(s)):(a=Gs(s),c=Gs(o))}}(r,i,el,(r=>{s.push(this.Rn(e,t,n,r))}),(r=>{s.push(this.Pn(e,t,n,r))})),Ki.waitFor(s)}Tn(e){let t=1;return wl(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>el(e,t))).filter(((e,t,n)=>!t||0!==el(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=el(s,e),i=el(s,t);if(0===n)r[0]=e.Je();else if(n>0&&i<0)r.push(s),r.push(s.Je());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.bn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,pl,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,pl,[]];i.push(IDBKeyRange.bound(e,t))}return i}bn(e,t){return el(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(_l)}getMinOffset(e,t){return Ki.mapArray(this.cn(t),(t=>this.an(e,t).next((e=>e||ai())))).next(_l)}}function gl(e){return Ls(e,"collectionParents")}function yl(e){return Ls(e,"indexEntries")}function vl(e){return Ls(e,"indexConfiguration")}function wl(e){return Ls(e,"indexState")}function _l(e){ci(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;qi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Bi(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Il{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Il(e,Il.DEFAULT_COLLECTION_PERCENTILE,Il.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{ci(1===a)})));const u=[];for(const l of n.mutations){const e=ps(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ki.waitFor(s).next((()=>u))}function Tl(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ai();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Il.DEFAULT_COLLECTION_PERCENTILE=10,Il.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Il.DEFAULT=new Il(41943040,Il.DEFAULT_COLLECTION_PERCENTILE,Il.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Il.DISABLED=new Il(-1,0,0);class Sl{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){ci(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Sl(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Al(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Cl(e),s=Al(e);return s.add({}).next((o=>{ci("number"==typeof o);const a=new wc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>hu(e.fe,t))),i=n.mutations.map((t=>hu(e.fe,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new $s(((e,t)=>Ti(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ps(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,ms))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Vn[o]=a.keys()})),Ki.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Al(e).get(t).next((e=>e?(ci(e.userId===this.userId),Pu(this.serializer,e)):null))}Sn(e,t){return this.Vn[t]?Ki.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Al(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(ci(t.batchId>=n),i=Pu(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Al(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Al(e).j("userMutationsIndex",t).next((e=>e.map((e=>Pu(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=fs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Cl(e).X({range:r},((n,r,s)=>{const[o,a,c]=n,u=hs(a);if(o===this.userId&&t.path.isEqual(u))return Al(e).get(c).next((e=>{if(!e)throw ai();ci(e.userId===this.userId),i.push(Pu(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $s(Ti);const r=[];return t.forEach((t=>{const i=fs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Cl(e).X({range:s},((e,r,i)=>{const[s,o,a]=e,c=hs(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ki.waitFor(r).next((()=>this.Dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=fs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $s(Ti);return Cl(e).X({range:s},((e,t,i)=>{const[s,a,c]=e,u=hs(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Dn(e,o)))}Dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Al(e).get(t).next((e=>{if(null===e)throw ai();ci(e.userId===this.userId),n.push(Pu(this.serializer,e))})))})),Ki.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return El(e.ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Cn(t.batchId)})),Ki.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ki.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Cl(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=hs(e[1]);r.push(t)}else n.done()})).next((()=>{ci(0===r.length)}))}))}containsKey(e,t){return kl(e,this.userId,t)}xn(e){return xl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function kl(e,t,n){const r=fs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Cl(e).X({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Al(e){return Ls(e,"mutations")}function Cl(e){return Ls(e,"documentMutations")}function xl(e){return Ls(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Nl(0)}static Mn(){return new Nl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next((t=>{const n=new Nl(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.$n(e).next((e=>Ci.fromTimestamp(new Ai(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.$n(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.$n(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.Fn(e,t).next((()=>this.$n(e).next((n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Dl(e).delete(t.targetId))).next((()=>this.$n(e))).next((t=>(ci(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Dl(e).X(((s,o)=>{const a=Mu(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ki.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Dl(e).X(((e,n)=>{const r=Mu(n);t(r)}))}$n(e){return Ol(e).get("targetGlobalKey").next((e=>(ci(null!==e),e)))}On(e,t){return Ol(e).put("targetGlobalKey",t)}Fn(e,t){return Dl(e).put(Lu(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next((e=>e.targetCount))}getTargetData(e,t){const n=na(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Dl(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Mu(n);ra(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Pl(e);return t.forEach((t=>{const s=cs(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ki.waitFor(r)}removeMatchingKeys(e,t,n){const r=Pl(e);return Ki.forEach(t,(t=>{const i=cs(t.path);return Ki.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Pl(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Pl(e);let i=Fa();return r.X({range:n,Y:!0},((e,t,n)=>{const r=hs(e[1]),s=new Oi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=cs(t.path),r=IDBKeyRange.bound([n],[ki(n)],!1,!0);let i=0;return Pl(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}le(e,t){return Dl(e).get(t).next((e=>e?Mu(e):null))}}function Dl(e){return Ls(e,"targets")}function Ol(e){return Ls(e,"targetGlobal")}function Pl(e){return Ls(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml([e,t],[n,r]){const i=Ti(e,n);return 0===i?Ti(t,r):i}class Ll{constructor(e){this.Ln=e,this.buffer=new $s(Ml),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ml(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fl{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){ri("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Yi(e)?ri("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Gi(e)}await this.Qn(3e5)}))}}class Vl{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ki.resolve(is.ct);const n=new Ll(t);return this.jn.forEachTarget(e,(e=>n.Kn(e.sequenceNumber))).next((()=>this.jn.Wn(e,(e=>n.Kn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ri("LruGarbageCollector","Garbage collection skipped; disabled"),Ki.resolve(bl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ri("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bl):this.Hn(e,t)))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ri("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),ti()<=a["in"].DEBUG&&ri("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ki.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Ul(e,t){return new Vl(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.db=e,this.garbageCollector=Ul(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Jn(e){let t=0;return this.Wn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,((e,n)=>t(n)))}addReference(e,t,n){return Bl(e,n)}removeReference(e,t,n){return Bl(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Bl(e,t)}Xn(e,t){return function(e,t){let n=!1;return xl(e).Z((r=>kl(e,r,t).next((e=>(e&&(n=!0),Ki.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,((s,o)=>{if(o<=t){const t=this.Xn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Ci.min()),Pl(e).delete([0,cs(s.path)]))))}));r.push(t)}})).next((()=>Ki.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Bl(e,t)}Yn(e,t){const n=Pl(e);let r,i=is.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==is.ct&&t(new Oi(hs(r)),i),i=o,r=s):i=is.ct})).next((()=>{i!==is.ct&&t(new Oi(hs(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bl(e,t){return Pl(e).put(function(e,t){return{targetId:0,path:cs(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.changes=new ka((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xo.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ki.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Hl(e).put(n)}removeEntry(e,t,n){return Hl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Ru(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Zn(e,n))))}getEntry(e,t){let n=xo.newInvalidDocument(t);return Hl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Wl(t))},((e,r)=>{n=this.ts(t,r)})).next((()=>n))}es(e,t){let n={size:0,document:xo.newInvalidDocument(t)};return Hl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Wl(t))},((e,r)=>{n={document:this.ts(t,r),size:Tl(r)}})).next((()=>n))}getEntries(e,t){let n=Ca();return this.ns(e,t,((e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)})).next((()=>n))}ss(e,t){let n=Ca(),r=new js(Oi.comparator);return this.ns(e,t,((e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,Tl(t))})).next((()=>({documents:n,rs:r})))}ns(e,t,n){if(t.isEmpty())return Ki.resolve();let r=new $s(Jl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Wl(r.first()),Wl(r.last())),s=r.getIterator();let o=s.getNext();return Hl(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Oi.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Jl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Wl(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),Ru(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hl(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=Ca();for(const i of e){const e=this.ts(Oi.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Ia(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Ca();const s=Ql(t,n),o=Ql(t,Bi.max());return Hl(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.ts(Oi.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Gl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Kl(e).get("remoteDocumentGlobalKey").next((e=>(ci(!!e),e)))}Zn(e,t){return Kl(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=xu(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ci.min()))return e}return xo.newInvalidDocument(e)}}function zl(e){return new $l(e)}class Gl extends ql{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new ka((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new $s(((e,t)=>Ti(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.us.get(i);if(t.push(this.os.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Nu(this.os.serializer,s);r=r.add(i.path.popLast());const c=Tl(a);n+=c-o.size,t.push(this.os.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Nu(this.os.serializer,s.convertToNoDocument(Ci.min()));t.push(this.os.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.os.updateMetadata(e,n)),Ki.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next((e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.os.ss(e,t).next((({documents:e,rs:t})=>(t.forEach(((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Kl(e){return Ls(e,"remoteDocumentGlobal")}function Hl(e){return Ls(e,"remoteDocumentsV14")}function Wl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Ql(e,t){const n=t.documentKey.path.toArray();return[e,Ru(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Jl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ti(n[s],r[s]),i)return i;return i=Ti(n.length,r.length),i||(i=Ti(n[n.length-2],r[r.length-2]),i||Ti(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&uc(n.mutation,e,Ks.empty(),Ai.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Fa()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Fa()){const r=Da();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Na();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Da();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Fa())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ca();const s=Pa(),o=Pa();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof fc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),uc(o.mutation,t,o.mutation.getFieldMask(),Ai.now())):s.set(t.key,Ks.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Yl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Pa();let r=new js(((e,t)=>e-t)),i=Fa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ks.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Fa()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Oa();c.forEach((e=>{if(!i.has(e)){const r=ac(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ki.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ki.resolve(Da());let o=-1,a=i;return s.next((t=>Ki.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ki.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Fa()))).next((e=>({batchId:o,changes:Ra(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Oi(t)).next((e=>{let t=Na();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Na();return this.indexManager.getCollectionParents(e,r).next((s=>Ki.forEach(s,(s=>{const o=function(e,t){return new ca(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,xo.newInvalidDocument(r)))}));let n=Na();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&uc(s.mutation,i,Ks.empty(),Ai.now()),Ia(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Ki.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Xc(n.createTime)}),Ki.resolve()}getNamedQuery(e,t){return Ki.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Fu(e.bundledQuery),readTime:Xc(e.readTime)}}(t)),Ki.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.overlays=new js(Oi.comparator),this.ls=new Map}getOverlay(e,t){return Ki.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Da();return Ki.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Ki.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Ki.resolve()}getOverlaysForCollection(e,t,n){const r=Da(),i=t.length+1,s=new Oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ki.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new js(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Da(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Da(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ki.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new bc(t,n));let i=this.ls.get(t);void 0===i&&(i=Fa(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.fs=new $s(nh.ds),this.ws=new $s(nh._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new nh(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new nh(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Oi(new Ni([])),n=new nh(t,e),r=new nh(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Oi(new Ni([])),n=new nh(t,e),r=new nh(t,e+1);let i=Fa();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new nh(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nh{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Oi.comparator(e.key,t.key)||Ti(e.As,t.As)}static _s(e,t){return Ti(e.As,t.As)||Oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new $s(nh.ds)}checkEmpty(e){return Ki.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new wc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new nh(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ki.resolve(s)}lookupMutationBatch(e,t){return Ki.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return Ki.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ki.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Ki.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nh(t,0),r=new nh(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),Ki.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $s(Ti);return t.forEach((e=>{const t=new nh(e,0),r=new nh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Ki.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Oi.isDocumentKey(i)||(i=i.child(""));const s=new nh(new Oi(i),0);let o=new $s(Ti);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),Ki.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ci(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ki.forEach(t.mutations,(r=>{const i=new nh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new nh(t,0),r=this.Rs.firstAfterOrEqual(n);return Ki.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ki.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.Ds=e,this.docs=new js(Oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ki.resolve(n?n.document.mutableCopy():xo.newInvalidDocument(t))}getEntries(e,t){let n=Ca();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():xo.newInvalidDocument(e))})),Ki.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ca();const s=t.path,o=new Oi(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||qi(ji(o),n)<=0||(r.has(o.key)||Ia(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ki.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ai()}Cs(e,t){return Ki.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new sh(this)}getSize(e){return Ki.resolve(this.size)}}class sh extends ql{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Ki.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.persistence=e,this.xs=new ka((e=>na(e)),ra),this.lastRemoteSnapshotVersion=Ci.min(),this.highestTargetId=0,this.Ns=0,this.ks=new th,this.targetCount=0,this.Ms=Nl.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Ki.resolve()}getLastRemoteSnapshotVersion(e){return Ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ki.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Ki.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Ki.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Nl(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Ki.resolve()}updateTargetData(e,t){return this.Fn(t),Ki.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Ki.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ki.waitFor(i).next((()=>r))}getTargetCount(e){return Ki.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Ki.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Ki.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ki.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Ki.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Ki.resolve(n)}containsKey(e,t){return Ki.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this.$s={},this.overlays={},this.Os=new is(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new oh(this),this.indexManager=new dl,this.remoteDocumentCache=function(e){return new ih(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Cu(t),this.qs=new Zl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new rh(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){ri("MemoryPersistence","Starting transaction:",e);const r=new ch(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Ki.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class ch extends zi{constructor(e){super(),this.currentSequenceNumber=e}}class uh{constructor(e){this.persistence=e,this.Qs=new th,this.js=null}static zs(e){return new uh(e)}get Ws(){if(this.js)return this.js;throw ai()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Ki.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Ki.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Ki.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ki.forEach(this.Ws,(n=>{const r=Oi.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,Ci.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Ki.or([()=>Ki.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.serializer=e}O(e,t,n,r){const i=new Hi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ds,{unique:!0}),e.createObjectStore("documentMutations")}(e),hh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ki.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),hh(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ci.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ds,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ki.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ys(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i))))),n<7&&r>=7&&(s=s.next((()=>this.Zs(i)))),n<8&&r>=8&&(s=s.next((()=>this.ti(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ei(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:As});t.createIndex("collectionPathOverlayIndex",Cs,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",xs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:gs});t.createIndex("documentKeyIndex",ys),t.createIndex("collectionGroupIndex",vs)}(e))).next((()=>this.ni(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.si(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Es}).createIndex("sequenceNumberIndex",Ts,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ss}).createIndex("documentKeyIndex",ks,{unique:!1})}(e)))),s}Xs(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=Tl(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Ki.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>Ki.forEach(n,(n=>{ci(n.userId===t.userId);const r=Pu(this.serializer,n);return El(e,t.userId,r).next((()=>{}))}))))}))))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const s=new Ni(n),o=function(e){return[0,cs(e)]}(s);r.push(t.get(o).next((n=>n?Ki.resolve():(n=>t.put({targetId:0,path:cs(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ki.waitFor(r)))}))}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Is});const n=t.store("collectionParents"),r=new fl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:cs(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new Ni(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const s=hs(t);return i(s.popLast())}))))}ei(e){const t=e.store("targets");return t.X(((e,n)=>{const r=Mu(n),i=Lu(this.serializer,r);return t.put(i)}))}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Oi(Ni.fromString(o.document.name).popFirst(5)):o.noDocument?Oi.fromSegments(o.noDocument.path):o.unknownDocument?Oi.fromSegments(o.unknownDocument.path):ai()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ki.waitFor(r)))}si(e,t){const n=t.store("mutations"),r=zl(this.serializer),i=new ah(uh.zs,this.serializer.fe);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Fa();Pu(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ki.forEach(n,((e,n)=>{const s=new Xr(n),o=zu.de(this.serializer,s),a=i.getIndexManager(s),c=Sl.de(s,this.serializer,a,i.referenceDelegate);return new Xl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ms(t,is.ct),e).next()}))}))}}function hh(e){e.createObjectStore("targetDocuments",{keyPath:_s}).createIndex("documentTargetsIndex",bs,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ws,{unique:!0}),e.createObjectStore("targetGlobal")}const dh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!fh.D())throw new di(hi.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new jl(this,r),this.di=t+"main",this.serializer=new Cu(a),this.wi=new Wi(this.di,this.ui,new lh(this.serializer)),this.Bs=new Rl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zl(this.serializer),this.qs=new Bu,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&ii("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new di(hi.FAILED_PRECONDITION,dh);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Bs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new is(e,this.ri)})).then((()=>{this.Fs=!0})).catch((e=>(this.wi&&this.wi.close(),Promise.reject(e))))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>mh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ti(e).next((e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Ei(e))).next((t=>this.isPrimary&&!t?this.Ai(e).next((()=>!1)):!!t&&this.vi(e).next((()=>!0)))))).catch((e=>{if(Yi(e))return ri("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ri("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ii.enqueueRetryable((()=>this.fi(e))),this.isPrimary=e}))}Ti(e){return ph(e).get("owner").next((e=>Ki.resolve(this.Ri(e))))}Pi(e){return mh(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ls(e,"clientMetadata");return t.j().next((e=>{const n=this.Si(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ki.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.bi())).then((()=>this.pi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?Ki.resolve(!0):ph(e).get("owner").next((t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new di(hi.FAILED_PRECONDITION,dh);return!1}}return!(!this.networkEnabled||!this.inForeground)||mh(e).j().next((e=>void 0===this.Si(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ri("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Ms(e,is.ct);return this.Ai(t).next((()=>this.Pi(t)))})),this.wi.close(),this.Mi()}Si(e,t){return e.filter((e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId)))}$i(){return this.runTransaction("getActiveClients","readonly",(e=>mh(e).j().next((e=>this.Si(e,18e5).map((e=>e.clientId))))))}get started(){return this.Fs}getMutationQueue(e,t){return Sl.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ml(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return zu.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){ri("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.ui)?Ps:14===s?Os:13===s?Ds:12===s?Rs:11===s?Ns:void ai();var s;let o;return this.wi.runTransaction(e,r,i,(r=>(o=new Ms(r,this.Os?this.Os.next():is.ct),"readwrite-primary"===t?this.Ti(o).next((e=>!!e||this.Ei(o))).next((t=>{if(!t)throw ii(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))),new di(hi.FAILED_PRECONDITION,$i);return n(o)})).next((e=>this.vi(o).next((()=>e)))):this.Oi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Oi(e){return ph(e).get("owner").next((e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new di(hi.FAILED_PRECONDITION,dh)}))}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ph(e).put("owner",t)}static D(){return Wi.D()}Ai(e){const t=ph(e);return t.get("owner").next((e=>this.Ri(e)?(ri("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ki.resolve()))}Vi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ii(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.mi())))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return ri("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ii("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){ii("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ph(e){return Ls(e,"owner")}function mh(e){return Ls(e,"clientMetadata")}function gh(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Fa(),r=Fa();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(ha(t))return Ki.resolve(null);let n=ga(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=va(t,null,"F"),n=ga(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Fa(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,va(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return ha(t)||r.isEqual(Ci.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(ti()<=a["in"].DEBUG&&ri("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ba(t)),this.Wi(e,s,t,Ui(r,-1)))}))}ji(e,t){let n=new $s(Ta(e));return t.forEach(((t,r)=>{Ia(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return ti()<=a["in"].DEBUG&&ri("QueryEngine","Using full collection scan to execute query:",ba(t)),this.Ui.getDocumentsMatchingQuery(e,t,Bi.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new js(Ti),this.Yi=new ka((e=>na(e)),ra),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xl(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function _h(e,t,n,r){return new wh(e,t,n,r)}async function bh(e,t){const n=li(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Fa();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ih(e,t){const n=li(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ki.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ci(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Fa();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Eh(e){const t=li(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Th(e,t){const n=li(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Qs.EMPTY_BYTE_STRING,Ci.min()).withLastLimboFreeSnapshotVersion(Ci.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))}));let a=Ca(),c=Fa();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Sh(e,s,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(Ci.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ki.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Sh(e,t,n){let r=Fa(),i=Fa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ca();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ci.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ri("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function kh(e,t){const n=li(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ah(e,t){const n=li(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,Ki.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new Au(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Ch(e,t,n){const r=li(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Yi(e))throw e;ri("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function xh(e,t,n){const r=li(e);let i=Ci.min(),s=Fa();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=li(e),i=r.Yi.get(n);return void 0!==i?Ki.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,ga(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Ci.min(),n?s:Fa()))).next((e=>(Dh(r,Ea(t),e),{documents:e,ir:s})))))}function Nh(e,t){const n=li(e),r=li(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.le(e,t).next((e=>e?e.target:null))))}function Rh(e,t){const n=li(e),r=n.Xi.get(t)||Ci.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Zi.getAllFromCollectionGroup(e,t,Ui(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Dh(n,t,e),e)))}function Dh(e,t,n){let r=e.Xi.get(t)||Ci.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}async function Oh(e,t,n,r){const i=li(e);let s=Fa(),o=Ca();for(const u of n){const e=t.rr(u.metadata.name);u.document&&(s=s.add(e));const n=t.ur(u);n.setReadTime(t.cr(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Ah(i,function(e){return ga(la(Ni.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Sh(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Bs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr))).next((()=>t.nr))))))}async function Ph(e,t,n=Fa()){const r=await Ah(e,ga(Fu(t.bundledQuery))),i=li(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Xc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.qs.saveNamedQuery(e,t);const o=r.withResumeToken(Qs.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.Bs.updateTargetData(e,o).next((()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Bs.addMatchingKeys(e,n,r.targetId))).next((()=>i.qs.saveNamedQuery(e,t)))}))}function Mh(e,t){return`firestore_clients_${e}_${t}`}function Lh(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Fh(e,t){return`firestore_targets_${e}_${t}`}class Vh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new di(r.error.code,r.error.message))),s?new Vh(e,t,r.state,i):(ii("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Uh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new di(n.error.code,n.error.message))),i?new Uh(e,n.state,r):(ii("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ua();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=as(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new jh(e,i):(ii("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Bh{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Bh(t.clientId,t.onlineState):(ii("SharedClientState",`Failed to parse online state: ${e}`),null)}}class qh{constructor(){this.activeTargetIds=Ua()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $h{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new js(Ti),this.started=!1,this.yr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Mh(this.persistenceKey,this.wr),this.Ir=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gr=this.gr.insert(this.wr,new qh),this.Tr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const n of e){if(n===this.wr)continue;const e=this.getItem(Mh(this.persistenceKey,n));if(e){const t=jh.ar(n,e);t&&(this.gr=this.gr.insert(t.clientId,t))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const n of this.yr)this.mr(n);this.yr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Fh(this.persistenceKey,e));if(n){const r=Uh.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fh(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Cr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ri("SharedClientState","READ",e,t),t}setItem(e,t){ri("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ri("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(ri("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void ii("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=is.ct;if(null!=e)try{const n=JSON.parse(e);ci("number"==typeof n),t=n}catch(e){ii("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==is.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Qr(e))))}}else this.yr.push(t)}))}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new Vh(this.currentUser,e,t,n),i=Lh(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Lh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=Fh(this.persistenceKey,e),i=new Uh(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return jh.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Vh.ar(new Xr(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return Uh.ar(r,t)}br(e){return Bh.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);ri("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Wr(s,o).then((()=>{this.gr=n}))}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Ua();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class zh{constructor(){this.Hr=new qh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new qh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ri("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){ri("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh=null;function Wh(){return null===Hh?Hh=268435456+Math.round(2147483648*Math.random()):Hh++,"0x"+Hh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Qh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="WebChannelConnection";class Xh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=Wh(),o=this.To(e,t);ri("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(ri("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw si("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=Qh[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Wh();return new Promise(((s,o)=>{const a=new Wr;a.setWithCredentials(!0),a.listenOnce($r.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case qr.NO_ERROR:const t=a.getResponseJson();ri(Yh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case qr.TIMEOUT:ri(Yh,`RPC '${e}' ${i} timed out`),o(new di(hi.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const n=a.getStatus();if(ri(Yh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(hi).indexOf(t)>=0?t:hi.UNKNOWN}(t.status);o(new di(e,t.message))}else o(new di(hi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new di(hi.UNAVAILABLE,"Connection failed."));break;default:ai()}}finally{ri(Yh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ri(Yh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Wh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jr(),o=Br(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Kr({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ri(Yh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Jh({ro:t=>{d?ri(Yh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ri(Yh,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ri(Yh,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Hr.EventType.OPEN,(()=>{d||ri(Yh,`RPC '${e}' stream ${r} transport opened.`)})),p(l,Hr.EventType.CLOSE,(()=>{d||(d=!0,ri(Yh,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(l,Hr.EventType.ERROR,(t=>{d||(d=!0,si(Yh,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new di(hi.UNAVAILABLE,"The operation could not be completed")))})),p(l,Hr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ci(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ri(Yh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ec[e];if(void 0!==t)return kc(t)}(t),i=o.message;void 0===n&&(n=hi.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new di(n,i)),l.close()}else ri(Yh,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,zr.STAT_EVENT,(t=>{t.stat===Gr.PROXY?ri(Yh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Gr.NOPROXY&&ri(Yh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(){return"undefined"!=typeof window?window:null}function ed(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e){return new Hc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&ri("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new nd(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===hi.RESOURCE_EXHAUSTED?(ii(t.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===hi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new di(hi.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return ri("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(ri("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class id extends rd{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=lu(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ci.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ci.min():t.readTime?Xc(t.readTime):Ci.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=su(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ia(r)?{documents:pu(e,r)}:{query:mu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Jc(e,t.resumeToken);const r=Wc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ci.min())>0){n.readTime=Qc(e,t.snapshotVersion.toTimestamp());const r=Wc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=yu(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=su(this.serializer),t.removeTarget=e,this.Wo(t)}}class sd extends rd{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ci(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=fu(e.writeResults,e.commitTime),n=Xc(e.commitTime);return this.listener.cu(n,t)}return ci(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=su(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>hu(this.serializer,e)))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new di(hi.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new di(hi.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new di(hi.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class ad{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ii(t),this.mu=!1):ri("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{yd(this)&&(ri("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=li(e);t.vu.add(4),await ld(t),t.bu.set("Unknown"),t.vu.delete(4),await ud(t)}(this))}))})),this.bu=new ad(n,r)}}async function ud(e){if(yd(e))for(const t of e.Ru)await t(!0)}async function ld(e){for(const t of e.Ru)await t(!1)}function hd(e,t){const n=li(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),gd(n)?md(n):Md(n).Ko()&&fd(n,t))}function dd(e,t){const n=li(e),r=Md(n);n.Au.delete(t),r.Ko()&&pd(n,t),0===n.Au.size&&(r.Ko()?r.jo():yd(n)&&n.bu.set("Unknown"))}function fd(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ci.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Md(e).su(t)}function pd(e,t){e.Vu.qt(t),Md(e).iu(t)}function md(e){e.Vu=new Bc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Md(e).start(),e.bu.gu()}function gd(e){return yd(e)&&!Md(e).Uo()&&e.Au.size>0}function yd(e){return 0===li(e).vu.size}function vd(e){e.Vu=void 0}async function wd(e){e.Au.forEach(((t,n)=>{fd(e,t)}))}async function _d(e,t){vd(e),gd(e)?(e.bu.Iu(t),md(e)):e.bu.set("Unknown")}async function bd(e,t,n){if(e.bu.set("Online"),t instanceof Uc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){ri("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Id(e,n)}else if(t instanceof Fc?e.Vu.Ht(t):t instanceof Vc?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ci.min()))try{const t=await Eh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(Qs.EMPTY_BYTE_STRING,r.snapshotVersion)),pd(e,t);const i=new Au(r.target,t,n,r.sequenceNumber);fd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ri("RemoteStore","Failed to raise snapshot:",t),await Id(e,t)}}async function Id(e,t,n){if(!Yi(t))throw t;e.vu.add(1),await ld(e),e.bu.set("Offline"),n||(n=()=>Eh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ri("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ud(e)}))}function Ed(e,t){return t().catch((n=>Id(e,n,t)))}async function Td(e){const t=li(e),n=Ld(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Sd(t);)try{const e=await kh(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,kd(t,e)}catch(e){await Id(t,e)}Ad(t)&&Cd(t)}function Sd(e){return yd(e)&&e.Eu.length<10}function kd(e,t){e.Eu.push(t);const n=Ld(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Ad(e){return yd(e)&&!Ld(e).Uo()&&e.Eu.length>0}function Cd(e){Ld(e).start()}async function xd(e){Ld(e).hu()}async function Nd(e){const t=Ld(e);for(const n of e.Eu)t.uu(n.mutations)}async function Rd(e,t,n){const r=e.Eu.shift(),i=_c.from(r,t,n);await Ed(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Td(e)}async function Dd(e,t){t&&Ld(e).ou&&await async function(e,t){if(n=t.code,Sc(n)&&n!==hi.ABORTED){const n=e.Eu.shift();Ld(e).Qo(),await Ed(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Td(e)}var n}(e,t),Ad(e)&&Cd(e)}async function Od(e,t){const n=li(e);n.asyncQueue.verifyOperationInProgress(),ri("RemoteStore","RemoteStore received new credentials");const r=yd(n);n.vu.add(3),await ld(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ud(n)}async function Pd(e,t){const n=li(e);t?(n.vu.delete(2),await ud(n)):t||(n.vu.add(2),await ld(n),n.bu.set("Unknown"))}function Md(e){return e.Su||(e.Su=function(e,t,n){const r=li(e);return r.fu(),new id(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{uo:wd.bind(null,e),ao:_d.bind(null,e),nu:bd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),gd(e)?md(e):e.bu.set("Unknown")):(await e.Su.stop(),vd(e))}))),e.Su}function Ld(e){return e.Du||(e.Du=function(e,t,n){const r=li(e);return r.fu(),new sd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:xd.bind(null,e),ao:Dd.bind(null,e),au:Nd.bind(null,e),cu:Rd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Td(e)):(await e.Du.stop(),e.Eu.length>0&&(ri("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Fd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new di(hi.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vd(e,t){if(ii("AsyncQueue",`${t}: ${e}`),Yi(e))return new di(hi.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Oi.comparator(t.key,n.key):(e,t)=>Oi.comparator(e.key,t.key),this.keyedMap=Na(),this.sortedSet=new js(this.comparator)}static emptySet(e){return new Ud(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ud))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ud;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Cu=new js(Oi.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ai():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Bd{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Bd(e,t,Ud.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.Nu=void 0,this.listeners=[]}}class $d{constructor(){this.queries=new ka((e=>_a(e)),wa),this.onlineState="Unknown",this.ku=new Set}}async function zd(e,t){const n=li(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qd),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Vd(e,`Initialization of query '${ba(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&Wd(n)}async function Gd(e,t){const n=li(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Kd(e,t){const n=li(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&Wd(n)}function Hd(e,t,n){const r=li(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Wd(e){e.ku.forEach((e=>{e.next()}))}class Qd{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Bd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Bd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.serializer=e}rr(e){return nu(this.serializer,e)}ur(e){return e.metadata.exists?cu(this.serializer,e.document,!1):xo.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Xc(e)}}class Xd{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zd(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=Ni.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new Yd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Fa()).add(e);t.set(n,r)}}return t}async complete(){const e=await Oh(this.localStore,new Yd(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const n of this.queries)await Ph(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Zd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.key=e}}class tf{constructor(e){this.key=e}}class nf{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Fa(),this.mutatedKeys=Fa(),this.tc=Ta(e),this.ec=new Ud(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new jd,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ia(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ai()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Bd(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new jd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Fa(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new tf(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new ef(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Fa();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Bd.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class rf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sf{constructor(e){this.key=e,this.fc=!1}}class of{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new ka((e=>_a(e)),wa),this._c=new Map,this.mc=new Set,this.gc=new js(Oi.comparator),this.yc=new Map,this.Ic=new th,this.Tc={},this.Ec=new Map,this.Ac=Nl.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function af(e,t){const n=Lf(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Ah(n.localStore,ga(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await cf(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&hd(n.remoteStore,e)}return i}async function cf(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await xh(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return bf(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await xh(e.localStore,t,!0),o=new nf(t,s.ir),a=o.sc(s.documents),c=Lc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);bf(e,n,u.cc);const l=new rf(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function uf(e,t){const n=li(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!wa(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ch(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),dd(n.remoteStore,r.targetId),wf(n,r.targetId)})).catch(Gi)):(wf(n,r.targetId),await Ch(n.localStore,r.targetId,!0))}async function lf(e,t,n){const r=Ff(e);try{const e=await function(e,t){const n=li(e),r=Ai.now(),i=t.reduce(((e,t)=>e.add(t.key)),Fa());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ca(),c=Fa();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=lc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new fc(e.key,t,Co(t.value.mapValue),ic.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ra(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new js(Ti)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Tf(r,e.changes),await Td(r.remoteStore)}catch(e){const t=Vd(e,"Failed to persist write");n.reject(t)}}async function hf(e,t){const n=li(e);try{const e=await Th(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(ci(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?ci(r.fc):e.removedDocuments.size>0&&(ci(r.fc),r.fc=!1))})),await Tf(n,e,t)}catch(e){await Gi(e)}}function df(e,t,n){const r=li(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=li(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)})),r&&Wd(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ff(e,t,n){const r=li(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new js(Oi.comparator);e=e.insert(s,xo.newNoDocument(s,Ci.min()));const n=Fa().add(s),i=new Mc(Ci.min(),new Map,new js(Ti),e,n);await hf(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),Ef(r)}else await Ch(r.localStore,t,!1).then((()=>wf(r,t,n))).catch(Gi)}async function pf(e,t){const n=li(e),r=t.batch.batchId;try{const e=await Ih(n.localStore,t);vf(n,r,null),yf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tf(n,e)}catch(e){await Gi(e)}}async function mf(e,t,n){const r=li(e);try{const e=await function(e,t){const n=li(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ci(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);vf(r,t,n),yf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Tf(r,e)}catch(n){await Gi(n)}}async function gf(e,t){const n=li(e);yd(n.remoteStore)||ri("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=li(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=Vd(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function yf(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function vf(e,t,n){const r=li(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function wf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||_f(e,t)}))}function _f(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(dd(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Ef(e))}function bf(e,t,n){for(const r of n)r instanceof ef?(e.Ic.addReference(r.key,t),If(e,r)):r instanceof tf?(ri("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||_f(e,r.key)):ai()}function If(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(ri("SyncEngine","New document in limbo: "+n),e.mc.add(r),Ef(e))}function Ef(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Oi(Ni.fromString(t)),r=e.Ac.next();e.yc.set(r,new sf(n)),e.gc=e.gc.insert(n,r),hd(e.remoteStore,new Au(ga(la(n.path)),r,"TargetPurposeLimboResolution",is.ct))}}async function Tf(e,t,n){const r=li(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=yh.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=li(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ki.forEach(t,(t=>Ki.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ki.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Yi(e))throw e;ri("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Sf(e,t){const n=li(e);if(!n.currentUser.isEqual(t)){ri("SyncEngine","User change. New user:",t.toKey());const e=await bh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new di(hi.CANCELLED,t))}))})),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Tf(n,e.er)}}function kf(e,t){const n=li(e),r=n.yc.get(t);if(r&&r.fc)return Fa().add(r.key);{let e=Fa();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function Af(e,t){const n=li(e),r=await xh(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&bf(n,t.targetId,i.cc),i}async function Cf(e,t){const n=li(e);return Rh(n.localStore,t).then((e=>Tf(n,e)))}async function xf(e,t,n,r){const i=li(e),s=await function(e,t){const n=li(e),r=li(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Sn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Ki.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Td(i.remoteStore):"acknowledged"===n||"rejected"===n?(vf(i,t,r||null),yf(i,t),function(e,t){li(li(e).mutationQueue).Cn(t)}(i.localStore,t)):ai(),await Tf(i,s)):ri("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Nf(e,t){const n=li(e);if(Lf(n),Ff(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Rf(n,e.toArray());n.vc=!0,await Pd(n.remoteStore,!0);for(const r of t)hd(n.remoteStore,r)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(wf(n,i),Ch(n.localStore,i,!0)))),dd(n.remoteStore,i)})),await t,await Rf(n,e),function(e){const t=li(e);t.yc.forEach(((e,n)=>{dd(t.remoteStore,n)})),t.Ic.Ts(),t.yc=new Map,t.gc=new js(Oi.comparator)}(n),n.vc=!1,await Pd(n.remoteStore,!1)}}async function Rf(e,t,n){const r=li(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await Ah(r.localStore,ga(t[0]));for(const e of t){const t=r.wc.get(e),n=await Af(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Nh(r.localStore,o);e=await Ah(r.localStore,t),await cf(r,Df(t),o,!1,e.resumeToken)}i.push(e)}return r.dc.nu(s),i}function Df(e){return ua(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Of(e){const t=li(e);return li(li(t.localStore).persistence).$i()}async function Pf(e,t,n,r){const i=li(e);if(i.vc)return void ri("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Rh(i.localStore,Ea(s[0])),r=Mc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Qs.EMPTY_BYTE_STRING);await Tf(i,e,r);break}case"rejected":await Ch(i.localStore,t,!0),wf(i,t,r);break;default:ai()}}async function Mf(e,t,n){const r=Lf(e);if(r.vc){for(const e of t){if(r._c.has(e)){ri("SyncEngine","Adding an already active target "+e);continue}const t=await Nh(r.localStore,e),n=await Ah(r.localStore,t);await cf(r,Df(t),n.targetId,!1,n.resumeToken),hd(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Ch(r.localStore,e,!1).then((()=>{dd(r.remoteStore,e),wf(r,e)})).catch(Gi)}}function Lf(e){const t=li(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=kf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.dc.nu=Kd.bind(null,t.eventManager),t.dc.Pc=Hd.bind(null,t.eventManager),t}function Ff(e){const t=li(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mf.bind(null,t),t}function Vf(e,t,n){const r=li(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=li(e),r=Xc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.qs.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Zd(r));const i=new Xd(r,e.localStore,t.serializer);let s=await t.bc();for(;s;){const e=await i.zu(s);e&&n._updateProgress(e),s=await t.bc()}const o=await i.complete();return await Tf(e,o.Ju,void 0),await function(e,t){const n=li(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.qs.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return si("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Uf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=td(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return _h(this.persistence,new vh,e.initialUser,this.serializer)}createPersistence(e){return new ah(uh.zs,this.serializer)}createSharedClientState(e){return new zh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jf extends Uf{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Ff(this.Vc.syncEngine),await Td(this.Vc.remoteStore),await this.persistence.Ii((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return _h(this.persistence,new vh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Fl(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new rs(t,this.persistence);return new ns(e.asyncQueue,n)}createPersistence(e){const t=gh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Il.withCacheSize(this.cacheSizeBytes):Il.DEFAULT;return new fh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Zh(),ed(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new zh}}class Bf extends jf{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof $h&&(this.sharedClientState.syncEngine={jr:xf.bind(null,t),zr:Pf.bind(null,t),Wr:Mf.bind(null,t),$i:Of.bind(null,t),Qr:Cf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii((async e=>{await Nf(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Zh();if(!$h.D(t))throw new di(hi.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=gh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $h(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class qf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>df(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sf.bind(null,this.syncEngine),await Pd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $d}createDatastore(e){const t=td(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xh(r));var r;return function(e,t,n,r){return new od(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>df(this.syncEngine,e,0),s=Kh.D()?new Kh:new Gh,new cd(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new of(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=li(e);ri("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ld(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new fi,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then((e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Gu)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new Jd(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async kc(){for(;this.Oc()<0;)if(await this.Fc())break;if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new di(hi.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=li(e),r=su(n.serializer)+"/documents",i={documents:t.map((e=>tu(n.serializer,e)))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=uu(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());ci(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new yc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Oi.fromPath(t);this.mutations.push(new vc(n,this.precondition(n)))})),await async function(e,t){const n=li(e),r=su(n.serializer)+"/documents",i={writes:t.map((e=>hu(n.serializer,e)))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ai();t=Ci.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new di(hi.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ci.min())?ic.exists(!1):ic.updateTime(t):ic.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ci.min()))throw new di(hi.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ic.updateTime(t)}return ic.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new nd(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No((async()=>{const e=new Kf(this.datastore),t=this.qc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Uc(e)}))))})).catch((e=>{this.Uc(e)}))}))}qc(e){try{const t=this.updateFunction(e);return!ss(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Lc(),Promise.resolve())))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Sc(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Xr.UNAUTHENTICATED,this.clientId=Ei.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ri("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ri("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new di(hi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Vd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Qf(e,t){e.asyncQueue.verifyOperationInProgress(),ri("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await bh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Jf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Xf(e);ri("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Od(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Od(t.remoteStore,n))),e._onlineComponents=t}function Yf(e){return"FirebaseError"===e.name?e.code===hi.FAILED_PRECONDITION||e.code===hi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Xf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ri("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Yf(n))throw n;si("Error using user provided cache. Falling back to memory cache: "+n),await Qf(e,new Uf)}}else ri("FirestoreClient","Using default OfflineComponentProvider"),await Qf(e,new Uf);return e._offlineComponents}async function Zf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ri("FirestoreClient","Using user provided OnlineComponentProvider"),await Jf(e,e._uninitializedComponentsProvider._online)):(ri("FirestoreClient","Using default OnlineComponentProvider"),await Jf(e,new qf))),e._onlineComponents}function ep(e){return Xf(e).then((e=>e.persistence))}function tp(e){return Xf(e).then((e=>e.localStore))}function np(e){return Zf(e).then((e=>e.remoteStore))}function rp(e){return Zf(e).then((e=>e.syncEngine))}function ip(e){return Zf(e).then((e=>e.datastore))}async function sp(e){const t=await Zf(e),n=t.eventManager;return n.onListen=af.bind(null,t.syncEngine),n.onUnlisten=uf.bind(null,t.syncEngine),n}function op(e){return e.asyncQueue.enqueue((async()=>{const t=await ep(e),n=await np(e);return t.setNetworkEnabled(!0),function(e){const t=li(e);return t.vu.delete(0),ud(t)}(n)}))}function ap(e){return e.asyncQueue.enqueue((async()=>{const t=await ep(e),n=await np(e);return t.setNetworkEnabled(!1),async function(e){const t=li(e);t.vu.add(0),await ld(t),t.bu.set("Offline")}(n)}))}function cp(e,t){const n=new fi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=li(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new di(hi.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Vd(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await tp(e),t,n))),n.promise}function up(e,t,n={}){const r=new fi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:s=>{t.enqueueAndForget((()=>Gd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new di(hi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new di(hi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Qd(la(n.path),s,{includeMetadataChanges:!0,Ku:!0});return zd(e,o)}(await sp(e),e.asyncQueue,t,n,r))),r.promise}function lp(e,t){const n=new fi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await xh(e,t,!0),i=new nf(t,r.ir),s=i.sc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Vd(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await tp(e),t,n))),n.promise}function hp(e,t,n={}){const r=new fi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:n=>{t.enqueueAndForget((()=>Gd(e,o))),n.fromCache&&"server"===r.source?i.reject(new di(hi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Qd(n,s,{includeMetadataChanges:!0,Ku:!0});return zd(e,o)}(await sp(e),e.asyncQueue,t,n,r))),r.promise}function dp(e,t){const n=new zf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){li(e).ku.add(t),t.next()}(await sp(e),n))),()=>{n.Dc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){li(e).ku.delete(t)}(await sp(e),n)))}}function fp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?xc().encode(e):e,function(e,t){return new Gf(e,t)}(function(e,t){if(e instanceof Uint8Array)return $f(e,t);if(e instanceof ArrayBuffer)return $f(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,td(t));e.asyncQueue.enqueueAndForget((async()=>{Vf(await rp(e),i,r)}))}function pp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=li(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.qs.getNamedQuery(e,t)))}(await tp(e),t)))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const gp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e,t,n){if(!n)throw new di(hi.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function vp(e,t,n,r){if(!0===t&&!0===r)throw new di(hi.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function wp(e){if(!Oi.isDocumentKey(e))throw new di(hi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function _p(e){if(Oi.isDocumentKey(e))throw new di(hi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function bp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ai()}function Ip(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new di(hi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bp(e);throw new di(hi.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Ep(e,t){if(t<=0)throw new di(hi.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new di(hi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new di(hi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new di(hi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new di(hi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new di(hi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Sp{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new di(hi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new di(hi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new mi;switch(e.type){case"firstParty":return new wi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new di(hi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gp.get(e);t&&(ri("ComponentProvider","Removing Datastore"),gp.delete(e),t.terminate())}(this),Promise.resolve()}}function kp(e,t,n,r={}){var i;const s=(e=Ip(e,Sp))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&si("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Xr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new di(hi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xr(s)}e._authCredentials=new gi(new pi(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ap(this.firestore,e,this._key)}}class Cp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Cp(this.firestore,e,this._query)}}class xp extends Cp{constructor(e,t,n){super(e,t,la(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ap(this.firestore,null,new Oi(e))}withConverter(e){return new xp(this.firestore,e,this._path)}}function Np(e,t,...n){if(e=(0,c.m9)(e),yp("collection","path",t),e instanceof Sp){const r=Ni.fromString(t,...n);return _p(r),new xp(e,null,r)}{if(!(e instanceof Ap||e instanceof xp))throw new di(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ni.fromString(t,...n));return _p(r),new xp(e.firestore,null,r)}}function Rp(e,t){if(e=Ip(e,Sp),yp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new di(hi.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cp(e,null,function(e){return new ca(Ni.emptyPath(),e)}(t))}function Dp(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=Ei.A()),yp("doc","path",t),e instanceof Sp){const r=Ni.fromString(t,...n);return wp(r),new Ap(e,null,new Oi(r))}{if(!(e instanceof Ap||e instanceof xp))throw new di(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ni.fromString(t,...n));return wp(r),new Ap(e.firestore,e instanceof xp?e.converter:null,new Oi(r))}}function Op(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Ap||e instanceof xp)&&(t instanceof Ap||t instanceof xp)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Pp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Cp&&t instanceof Cp&&e.firestore===t.firestore&&wa(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mp{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new nd(this,"async_queue_retry"),this.Xc=()=>{const e=ed();e&&ri("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=ed();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=ed();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new fi;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Yi(e))throw e;ri("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ii("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Fd.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&ai()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Lp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Fp{constructor(){this._progressObserver={},this._taskCompletionResolver=new fi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=-1;class Up extends Sp{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Mp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bp(this),this._firestoreClient.terminate()}}function jp(e){return e._firestoreClient||Bp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Bp(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new ro(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,mp(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Wf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function qp(e,t){Yp(e=Ip(e,Up));const n=jp(e);if(n._uninitializedComponentsProvider)throw new di(hi.FAILED_PRECONDITION,"SDK cache is already specified.");si("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new qf;return zp(n,i,new jf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function $p(e){Yp(e=Ip(e,Up));const t=jp(e);if(t._uninitializedComponentsProvider)throw new di(hi.FAILED_PRECONDITION,"SDK cache is already specified.");si("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new qf;return zp(t,r,new Bf(r,n.cacheSizeBytes))}function zp(e,t,n){const r=new fi;return e.asyncQueue.enqueue((async()=>{try{await Qf(e,n),await Jf(e,t),r.resolve()}catch(e){const n=e;if(!Yf(n))throw n;si("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function Gp(e){if(e._initialized&&!e._terminated)throw new di(hi.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new fi;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Wi.D())return Promise.resolve();const t=e+"main";await Wi.delete(t)}(gh(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Kp(e){return function(e){const t=new fi;return e.asyncQueue.enqueueAndForget((async()=>gf(await rp(e),t))),t.promise}(jp(e=Ip(e,Up)))}function Hp(e){return op(jp(e=Ip(e,Up)))}function Wp(e){return ap(jp(e=Ip(e,Up)))}function Qp(e,t){const n=jp(e=Ip(e,Up)),r=new Fp;return fp(n,e._databaseId,t,r),r}function Jp(e,t){return pp(jp(e=Ip(e,Up)),t).then((t=>t?new Cp(e,null,t.query):null))}function Yp(e){if(e._initialized||e._terminated)throw new di(hi.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xp(Qs.fromBase64String(e))}catch(e){throw new di(hi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Xp(Qs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new di(hi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Di(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class em{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new di(hi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new di(hi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ti(this._lat,e._lat)||Ti(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=/^__.*__$/;class rm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new fc(e,this.data,this.fieldMask,t,this.fieldTransforms):new dc(e,this.data,t,this.fieldTransforms)}}class im{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new fc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ai()}}class om{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return km(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(sm(this.ca)&&nm.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class am{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||td(e)}ya(e,t,n,r=!1){return new om({ca:e,methodName:t,ga:n,path:Di.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cm(e){const t=e._freezeSettings(),n=td(e._databaseId);return new am(e._databaseId,!!t.ignoreUndefinedProperties,n)}function um(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);Im("Data must be an object, but it was:",o,r);const a=_m(r,o);let c,u;if(s.merge)c=new Ks(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Em(t,r,n);if(!o.contains(i))throw new di(hi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Am(e,i)||e.push(i)}c=new Ks(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new rm(new Ao(a),c,u)}class lm extends em{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lm}}function hm(e,t,n){return new om({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class dm extends em{_toFieldTransform(e){return new tc(e.path,new Ha)}isEqual(e){return e instanceof dm}}class fm extends em{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=hm(this,e,!0),n=this.pa.map((e=>wm(e,t))),r=new Wa(n);return new tc(e.path,r)}isEqual(e){return this===e}}class pm extends em{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=hm(this,e,!0),n=this.pa.map((e=>wm(e,t))),r=new Ja(n);return new tc(e.path,r)}isEqual(e){return this===e}}class mm extends em{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Xa(e.serializer,qa(e.serializer,this.Ia));return new tc(e.path,t)}isEqual(e){return this===e}}function gm(e,t,n,r){const i=e.ya(1,t,n);Im("Data must be an object, but it was:",i,r);const s=[],o=Ao.empty();Vs(r,((e,r)=>{const a=Sm(t,e,n);r=(0,c.m9)(r);const u=i.da(a);if(r instanceof lm)s.push(a);else{const e=wm(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Ks(s);return new im(o,a,i.fieldTransforms)}function ym(e,t,n,r,i,s){const o=e.ya(1,t,n),a=[Em(t,r,n)],u=[i];if(s.length%2!=0)throw new di(hi.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Em(t,s[c])),u.push(s[c+1]);const l=[],h=Ao.empty();for(let f=a.length-1;f>=0;--f)if(!Am(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.da(e);if(t instanceof lm)l.push(e);else{const r=wm(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Ks(l);return new im(h,d,o.fieldTransforms)}function vm(e,t,n,r=!1){return wm(n,e.ya(r?4:3,t))}function wm(e,t){if(bm(e=(0,c.m9)(e)))return Im("Unsupported field value:",t,e),_m(e,t);if(e instanceof em)return function(e,t){if(!sm(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=wm(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return qa(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ai.fromDate(e);return{timestampValue:Qc(t.serializer,n)}}if(e instanceof Ai){const n=new Ai(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Qc(t.serializer,n)}}if(e instanceof tm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Xp)return{bytesValue:Jc(t.serializer,e._byteString)};if(e instanceof Ap){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Zc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${bp(e)}`)}(e,t)}function _m(e,t){const n={};return Us(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Vs(e,((e,r)=>{const i=wm(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function bm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ai||e instanceof tm||e instanceof Xp||e instanceof Ap||e instanceof em)}function Im(e,t,n){if(!bm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=bp(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Em(e,t,n){if((t=(0,c.m9)(t))instanceof Zp)return t._internalPath;if("string"==typeof t)return Sm(e,t);throw km("Field path arguments must be of type string or ",e,!1,void 0,n)}const Tm=new RegExp("[~\\*/\\[\\]]");function Sm(e,t,n){if(t.search(Tm)>=0)throw km(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zp(...t.split("."))._internalPath}catch(r){throw km(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function km(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new di(hi.INVALID_ARGUMENT,a+e+c)}function Am(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ap(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new xm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Nm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class xm extends Cm{data(){return super.data()}}function Nm(e,t){return"string"==typeof t?Sm(e,t):t instanceof Zp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new di(hi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dm{}class Om extends Dm{}function Pm(e,t,...n){let r=[];t instanceof Dm&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Fm)).length,n=e.filter((e=>e instanceof Mm)).length;if(t>1||t>0&&n>0)throw new di(hi.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Mm extends Om{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Mm(e,t,n)}_apply(e){const t=this._parse(e);return Xm(e._query,t),new Cp(e.firestore,e.converter,ya(e._query,t))}_parse(e){const t=cm(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new di(hi.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Ym(o,s);const t=[];for(const n of o)t.push(Jm(r,e,n));a={arrayValue:{values:t}}}else a=Jm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ym(o,s),a=vm(n,t,o,"in"===s||"not-in"===s);return Lo.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Lm(e,t,n){const r=t,i=Nm("where",e);return Mm._create(i,r,n)}class Fm extends Dm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Fo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Xm(n,i),n=ya(n,i)}(e._query,t),new Cp(e.firestore,e.converter,ya(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Vm extends Om{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Vm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new di(hi.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new di(hi.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Oo(t,n);return function(e,t){if(null===da(e)){const n=fa(e);null!==n&&Zm(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Cp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ca(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Um(e,t="asc"){const n=t,r=Nm("orderBy",e);return Vm._create(r,n)}class jm extends Om{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new jm(e,t,n)}_apply(e){return new Cp(e.firestore,e.converter,va(e._query,this._limit,this._limitType))}}function Bm(e){return Ep("limit",e),jm._create("limit",e,"F")}function qm(e){return Ep("limitToLast",e),jm._create("limitToLast",e,"L")}class $m extends Om{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new $m(e,t,n)}_apply(e){const t=Qm(e,this.type,this._docOrFields,this._inclusive);return new Cp(e.firestore,e.converter,function(e,t){return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function zm(...e){return $m._create("startAt",e,!0)}function Gm(...e){return $m._create("startAfter",e,!1)}class Km extends Om{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Km(e,t,n)}_apply(e){const t=Qm(e,this.type,this._docOrFields,this._inclusive);return new Cp(e.firestore,e.converter,function(e,t){return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Hm(...e){return Km._create("endBefore",e,!1)}function Wm(...e){return Km._create("endAt",e,!0)}function Qm(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Cm)return function(e,t,n,r,i){if(!r)throw new di(hi.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ma(e))if(o.field.isKeyField())s.push(mo(t,r.key));else{const e=r.data.field(o.field);if(eo(e))throw new di(hi.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new di(hi.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new No(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=cm(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new di(hi.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new di(hi.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!pa(e)&&-1!==s.indexOf("/"))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ni.fromString(s));if(!Oi.isDocumentKey(n))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Oi(n);a.push(mo(t,i))}else{const e=vm(n,r,s);a.push(e)}}return new No(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Jm(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new di(hi.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pa(t)&&-1!==n.indexOf("/"))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ni.fromString(n));if(!Oi.isDocumentKey(r))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mo(e,new Oi(r))}if(n instanceof Ap)return mo(e,n._key);throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bp(n)}.`)}function Ym(e,t){if(!Array.isArray(e)||0===e.length)throw new di(hi.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xm(e,t){if(t.isInequality()){const n=fa(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new di(hi.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=da(e);null!==i&&Zm(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new di(hi.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new di(hi.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Zm(e,t,n){if(!n.isEqual(t))throw new di(hi.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class eg{convertValue(e,t="none"){switch(ao(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ai()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Vs(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new tm(Xs(e.latitude),Xs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=to(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const t=Ys(e);return new Ai(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ni.fromString(e);ci(ku(n));const r=new io(n.get(1),n.get(3)),i=new Oi(n.popFirst(5));return r.isEqual(t)||ii(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class ng extends eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ap(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ig extends Cm{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Nm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sg extends ig{data(e={}){return super.data(e)}}class og{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new rg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new sg(this._firestore,this._userDataWriter,n.key,n,new rg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new di(hi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new sg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new rg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new sg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new rg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ag(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ag(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ai()}}function cg(e,t){return e instanceof ig&&t instanceof ig?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof og&&t instanceof og&&e._firestore===t._firestore&&Pp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(e){e=Ip(e,Ap);const t=Ip(e.firestore,Up);return up(jp(t),e._key).then((n=>Eg(t,e,n)))}class lg extends eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ap(this.firestore,null,t)}}function hg(e){e=Ip(e,Ap);const t=Ip(e.firestore,Up),n=jp(t),r=new lg(t);return cp(n,e._key).then((n=>new ig(t,r,e._key,n,new rg(null!==n&&n.hasLocalMutations,!0),e.converter)))}function dg(e){e=Ip(e,Ap);const t=Ip(e.firestore,Up);return up(jp(t),e._key,{source:"server"}).then((n=>Eg(t,e,n)))}function fg(e){e=Ip(e,Cp);const t=Ip(e.firestore,Up),n=jp(t),r=new lg(t);return Rm(e._query),hp(n,e._query).then((n=>new og(t,r,e,n)))}function pg(e){e=Ip(e,Cp);const t=Ip(e.firestore,Up),n=jp(t),r=new lg(t);return lp(n,e._query).then((n=>new og(t,r,e,n)))}function mg(e){e=Ip(e,Cp);const t=Ip(e.firestore,Up),n=jp(t),r=new lg(t);return hp(n,e._query,{source:"server"}).then((n=>new og(t,r,e,n)))}function gg(e,t,n){e=Ip(e,Ap);const r=Ip(e.firestore,Up),i=tg(e.converter,t,n);return Ig(r,[um(cm(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ic.none())])}function yg(e,t,n,...r){e=Ip(e,Ap);const i=Ip(e.firestore,Up),s=cm(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Zp?ym(s,"updateDoc",e._key,t,n,r):gm(s,"updateDoc",e._key,t),Ig(i,[o.toMutation(e._key,ic.exists(!0))])}function vg(e){return Ig(Ip(e.firestore,Up),[new yc(e._key,ic.none())])}function wg(e,t){const n=Ip(e.firestore,Up),r=Dp(e),i=tg(e.converter,t);return Ig(n,[um(cm(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ic.exists(!1))]).then((()=>r))}function _g(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Lp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Lp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Ap)l=Ip(e.firestore,Up),h=la(e._key.path),u={next:n=>{t[o]&&t[o](Eg(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Ip(e,Cp);l=Ip(n.firestore,Up),h=n._query;const r=new lg(l);u={next:e=>{t[o]&&t[o](new og(l,r,n,e))},error:t[o+1],complete:t[o+2]},Rm(e._query)}return function(e,t,n,r){const i=new zf(r),s=new Qd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>zd(await sp(e),s))),()=>{i.Dc(),e.asyncQueue.enqueueAndForget((async()=>Gd(await sp(e),s)))}}(jp(l),h,a,u)}function bg(e,t){return dp(jp(e=Ip(e,Up)),Lp(t)?t:{next:t})}function Ig(e,t){return function(e,t){const n=new fi;return e.asyncQueue.enqueueAndForget((async()=>lf(await rp(e),t,n))),n.promise}(jp(e),t)}function Eg(e,t,n){const r=n.docs.get(t._key),i=new lg(e);return new ig(e,i,t._key,r,new rg(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tg={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=cm(e)}set(e,t,n){this._verifyNotCommitted();const r=kg(e,this._firestore),i=tg(r.converter,t,n),s=um(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ic.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=kg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Zp?ym(this._dataReader,"WriteBatch.update",i._key,t,n,r):gm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,ic.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kg(e,this._firestore);return this._mutations=this._mutations.concat(new yc(t._key,ic.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new di(hi.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kg(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new di(hi.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=cm(e)}get(e){const t=kg(e,this._firestore),n=new ng(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return ai();const r=e[0];if(r.isFoundDocument())return new Cm(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Cm(this._firestore,n,t._key,null,t.converter);throw ai()}))}set(e,t,n){const r=kg(e,this._firestore),i=tg(r.converter,t,n),s=um(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=kg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Zp?ym(this._dataReader,"Transaction.update",i._key,t,n,r):gm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=kg(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kg(e,this._firestore),n=new lg(this._firestore);return super.get(e).then((e=>new ig(this._firestore,n,t._key,e._document,new rg(!1,!1),t.converter)))}}function Cg(e,t,n){e=Ip(e,Up);const r=Object.assign(Object.assign({},Tg),n);return function(e){if(e.maxAttempts<1)throw new di(hi.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new fi;return e.asyncQueue.enqueueAndForget((async()=>{const i=await ip(e);new Hf(e.asyncQueue,i,n,t,r).run()})),r.promise}(jp(e),(n=>t(new Ag(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return new lm("deleteField")}function Ng(){return new dm("serverTimestamp")}function Rg(...e){return new fm("arrayUnion",e)}function Dg(...e){return new pm("arrayRemove",e)}function Og(e){return new mm("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Zr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Up(new yi(e.getProvider("auth-internal")),new bi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new di(hi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Yr,"3.12.0",e),(0,s.registerVersion)(Yr,"3.12.0","esm2017")}();const Pg="@firebase/firestore-compat",Mg="0.3.9";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lg(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new di("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){if("undefined"===typeof Uint8Array)throw new di("unimplemented","Uint8Arrays are not available in this environment.")}function Vg(){if(!Ws())throw new di("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ug{constructor(e){this._delegate=e}static fromBase64String(e){return Vg(),new Ug(Xp.fromBase64String(e))}static fromUint8Array(e){return Fg(),new Ug(Xp.fromUint8Array(e))}toBase64(){return Vg(),this._delegate.toBase64()}toUint8Array(){return Fg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(e){return Bg(e,["next","error","complete"])}function Bg(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{enableIndexedDbPersistence(e,t){return qp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return $p(e._delegate)}clearIndexedDbPersistence(e){return Gp(e._delegate)}}class $g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof io||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||si("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){kp(this._delegate,e,t,n)}enableNetwork(){return Hp(this._delegate)}disableNetwork(){return Wp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,vp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Kp(this._delegate)}onSnapshotsInSync(e){return bg(this._delegate,e)}get app(){if(!this._appCompat)throw new di("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new iy(this,Np(this._delegate,e))}catch(t){throw Jg(t,"collection()","Firestore.collection()")}}doc(e){try{return new Qg(this,Dp(this._delegate,e))}catch(t){throw Jg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ty(this,Rp(this._delegate,e))}catch(t){throw Jg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Cg(this._delegate,(t=>e(new Kg(this,t))))}batch(){return jp(this._delegate),new Hg(new Sg(this._delegate,(e=>Ig(this._delegate,e))))}loadBundle(e){return Qp(this._delegate,e)}namedQuery(e){return Jp(this._delegate,e).then((e=>e?new ty(this,e):null))}}class zg extends eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ug(new Xp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Qg.forKey(t,this.firestore,null)}}function Gg(e){ni(e)}class Kg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new zg(e)}get(e){const t=sy(e);return this._delegate.get(t).then((e=>new Zg(this._firestore,new ig(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=sy(e);return n?(Lg("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=sy(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=sy(e);return this._delegate.delete(t),this}}class Hg{constructor(e){this._delegate=e}set(e,t,n){const r=sy(e);return n?(Lg("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=sy(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=sy(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Wg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new sg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ey(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Wg.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Wg(e,new zg(e),t),r.set(t,i)),i}}Wg.INSTANCES=new WeakMap;class Qg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new zg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new di("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qg(t,new Ap(t._delegate,n,new Oi(e)))}static forKey(e,t,n){return new Qg(t,new Ap(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new iy(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new iy(this.firestore,Np(this._delegate,e))}catch(t){throw Jg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Ap&&Op(this._delegate,e)}set(e,t){t=Lg("DocumentReference.set",t);try{return t?gg(this._delegate,e,t):gg(this._delegate,e)}catch(n){throw Jg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?yg(this._delegate,e):yg(this._delegate,e,t,...n)}catch(r){throw Jg(r,"updateDoc()","DocumentReference.update()")}}delete(){return vg(this._delegate)}onSnapshot(...e){const t=Yg(e),n=Xg(e,(e=>new Zg(this.firestore,new ig(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return _g(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?hg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?dg(this._delegate):ug(this._delegate),t.then((e=>new Zg(this.firestore,new ig(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Qg(this.firestore,e?this._delegate.withConverter(Wg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Jg(e,t,n){return e.message=e.message.replace(t,n),e}function Yg(e){for(const t of e)if("object"===typeof t&&!jg(t))return t;return{}}function Xg(e,t){var n,r;let i;return i=jg(e[0])?e[0]:jg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Zg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Qg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return cg(this._delegate,e._delegate)}}class ey extends Zg{data(e){const t=this._delegate.data(e);return ui(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class ty{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new zg(e)}where(e,t,n){try{return new ty(this.firestore,Pm(this._delegate,Lm(e,t,n)))}catch(r){throw Jg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ty(this.firestore,Pm(this._delegate,Um(e,t)))}catch(n){throw Jg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ty(this.firestore,Pm(this._delegate,Bm(e)))}catch(t){throw Jg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ty(this.firestore,Pm(this._delegate,qm(e)))}catch(t){throw Jg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ty(this.firestore,Pm(this._delegate,zm(...e)))}catch(t){throw Jg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ty(this.firestore,Pm(this._delegate,Gm(...e)))}catch(t){throw Jg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ty(this.firestore,Pm(this._delegate,Hm(...e)))}catch(t){throw Jg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ty(this.firestore,Pm(this._delegate,Wm(...e)))}catch(t){throw Jg(t,"endAt()","Query.endAt()")}}isEqual(e){return Pp(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?pg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?mg(this._delegate):fg(this._delegate),t.then((e=>new ry(this.firestore,new og(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Yg(e),n=Xg(e,(e=>new ry(this.firestore,new og(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return _g(this._delegate,t,n)}withConverter(e){return new ty(this.firestore,e?this._delegate.withConverter(Wg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ny{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ey(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ry{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ty(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new ey(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new ny(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new ey(this._firestore,n))}))}isEqual(e){return cg(this._delegate,e._delegate)}}class iy extends ty{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qg(this.firestore,e):null}doc(e){try{return new Qg(this.firestore,void 0===e?Dp(this._delegate):Dp(this._delegate,e))}catch(t){throw Jg(t,"doc()","CollectionReference.doc()")}}add(e){return wg(this._delegate,e).then((e=>new Qg(this.firestore,e)))}isEqual(e){return Op(this._delegate,e._delegate)}withConverter(e){return new iy(this.firestore,e?this._delegate.withConverter(Wg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function sy(e){return Ip(e,Ap)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(...e){this._delegate=new Zp(...e)}static documentId(){return new oy(Di.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Zp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ng();return e._methodName="FieldValue.serverTimestamp",new ay(e)}static delete(){const e=xg();return e._methodName="FieldValue.delete",new ay(e)}static arrayUnion(...e){const t=Rg(...e);return t._methodName="FieldValue.arrayUnion",new ay(t)}static arrayRemove(...e){const t=Dg(...e);return t._methodName="FieldValue.arrayRemove",new ay(t)}static increment(e){const t=Og(e);return t._methodName="FieldValue.increment",new ay(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={Firestore:$g,GeoPoint:tm,Timestamp:Ai,Blob:Ug,Transaction:Kg,WriteBatch:Hg,DocumentReference:Qg,DocumentSnapshot:Zg,Query:ty,QueryDocumentSnapshot:ey,QuerySnapshot:ry,CollectionReference:iy,FieldPath:oy,FieldValue:ay,setLogLevel:Gg,CACHE_SIZE_UNLIMITED:Vp};function uy(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},cy)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(e){uy(e,((e,t)=>new $g(e,t,new qg))),e.registerVersion(Pg,Mg)}ly(i.Z)},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return U},p7:function(){return tt}});n(7658);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=b(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?_(e,t):l(t)?_(t,e):e===t}function _(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function k(e,t){return e.replace(S,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=A(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function D(e,t){R.set(e,t)}function O(e){const t=R.get(e);return R.delete(e),t}let P=()=>location.protocol+"//"+location.host;function M(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function L(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=M(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function V(e){const{history:t,location:n}=window,r={value:M(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:C()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function U(e){e=T(e);const t=V(e),n=L(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function G(e,t){return a(new Error,{type:e,[$]:!0},t)}function K(e,t){return e instanceof Error&&$ in e&&(null==t||!!(e.type&t))}const H="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=a({},W,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||H;if(l!==H){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function re(e,t,n){const r=J(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=oe(e);c.aliasOf=r&&r.record;const h=le(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw G(1,{location:e});0,o=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw G(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,ve=/%5B/g,we=/%5D/g,_e=/%5E/g,be=/%60/g,Ie=/%7B/g,Ee=/%7C/g,Te=/%7D/g,Se=/%20/g;function ke(e){return encodeURI(""+e).replace(Ee,"|").replace(ve,"[").replace(we,"]")}function Ae(e){return ke(e).replace(Ie,"{").replace(Te,"}").replace(_e,"^")}function Ce(e){return ke(e).replace(ye,"%2B").replace(Se,"+").replace(de,"%23").replace(fe,"%26").replace(be,"`").replace(Ie,"{").replace(Te,"}").replace(_e,"^")}function xe(e){return Ce(e).replace(me,"%3D")}function Ne(e){return ke(e).replace(de,"%23").replace(ge,"%3F")}function Re(e){return null==e?"":Ne(e).replace(pe,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Oe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=xe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Ce(e))):[r&&Ce(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Le=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),Ue=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(G(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(G(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function $e(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(Ue),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ke=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=Ke;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Fe,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Fe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Le,l),(0,r.JJ)(je,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||Oe,o=e.stringifyQuery||Pe,h=e.history;const d=Be(),m=Be(),y=Be(),v=(0,i.XI)(q);let w=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(e=>""+e)),b=c.bind(null,Re),E=c.bind(null,De);function T(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:E(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:b(t)}),r.params=b(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=_(E(s.params));const u=p(o,a({},e,{hash:Ae(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function M(e,t){if(w!==e)return G(8,{from:t,to:e})}function L(e){return U(e)}function F(e){return L(a(P(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=w=R(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=V(n);if(u)return U(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=G(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):z(l,r)).catch((e=>K(e)?K(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(K(e,2))return U(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=W(l,r,!0,c,i);return H(l,r,e),e}))}function j(e,t){const n=M(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function z(e,t){let n;const[r,i,s]=nt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),ue(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).then((()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ue(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(s,"beforeRouteEnter",e,t),n.push(o),ue(n)))).then((()=>{n=[];for(const r of m.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).catch((e=>K(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of y.list())$((()=>r(e,t,n)))}function W(e,t,n,r,i){const o=M(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,re(e,t,n,c),ne()}let Q;function J(){Q||(Q=h.listen(((e,t,n)=>{if(!ce.listening)return;const r=R(e),i=V(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(N(o.fullPath,n.delta),C()),z(r,o).catch((e=>K(e,12)?e:K(e,2)?(U(e.to,r).then((e=>{K(e,20)&&!n.delta&&n.type===I.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,r,o)))).then((e=>{e=e||W(r,o,!1),e&&(n.delta&&!K(e,8)?h.go(-n.delta,!1):n.type===I.pop&&K(e,20)&&h.go(-1,!1)),H(r,o,e)})).catch(u)})))}let Y,X=Be(),Z=Be();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return Y&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return Y||(Y=!e,J(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&O(N(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&x(e))).catch((e=>ee(e,t,n)))}const se=e=>h.go(e);let oe;const ae=new Set,ce={currentRoute:v,listening:!0,addRoute:T,removeRoute:S,hasRoute:A,getRoutes:k,resolve:R,options:e,push:L,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!oe&&v.value===q&&(oe=!0,L(h.location).catch((e=>{0})));const n={};for(const i in q)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(Ve,t),e.provide(Ue,(0,i.qj)(n)),e.provide(je,v);const o=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(w=q,Q&&Q(),Q=null,v.value=q,oe=!1,Y=!1),o()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>$(t)))),Promise.resolve())}return ce}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.6642b7e5.js.map