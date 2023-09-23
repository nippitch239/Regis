function sT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dv={exports:{}},bu={},Ov={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),oT=Symbol.for("react.portal"),aT=Symbol.for("react.fragment"),lT=Symbol.for("react.strict_mode"),uT=Symbol.for("react.profiler"),cT=Symbol.for("react.provider"),hT=Symbol.for("react.context"),dT=Symbol.for("react.forward_ref"),fT=Symbol.for("react.suspense"),pT=Symbol.for("react.memo"),mT=Symbol.for("react.lazy"),Vm=Symbol.iterator;function gT(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var Lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mv=Object.assign,Vv={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||Lv}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=Ss.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||Lv}var Tf=If.prototype=new Fv;Tf.constructor=If;Mv(Tf,Ss.prototype);Tf.isPureReactComponent=!0;var Fm=Array.isArray,bv=Object.prototype.hasOwnProperty,Sf={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bv.call(e,r)&&!$v.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pa,type:t,key:s,ref:o,props:i,_owner:Sf.current}}function yT(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function vT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bm=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vT(""+t.key):e.toString(36)}function _l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case oT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bc(o,0):r,Fm(i)?(n="",t!=null&&(n=t.replace(bm,"$&/")+"/"),_l(i,e,n,"",function(u){return u})):i!=null&&(Rf(i)&&(i=yT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Bc(s,a);o+=_l(s,e,n,l,i)}else if(l=gT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Bc(s,a++),o+=_l(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return _l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},wl={transition:null},wT={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Sf};J.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Ss;J.Fragment=aT;J.Profiler=uT;J.PureComponent=If;J.StrictMode=lT;J.Suspense=fT;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bv.call(e,l)&&!$v.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pa,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:hT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cT,_context:t},t.Consumer=t};J.createElement=Uv;J.createFactory=function(t){var e=Uv.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:dT,render:t}};J.isValidElement=Rf;J.lazy=function(t){return{$$typeof:mT,_payload:{_status:-1,_result:t},_init:_T}};J.memo=function(t,e){return{$$typeof:pT,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(t,e){return yt.current.useCallback(t,e)};J.useContext=function(t){return yt.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};J.useEffect=function(t,e){return yt.current.useEffect(t,e)};J.useId=function(){return yt.current.useId()};J.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return yt.current.useMemo(t,e)};J.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};J.useRef=function(t){return yt.current.useRef(t)};J.useState=function(t){return yt.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return yt.current.useTransition()};J.version="18.2.0";Ov.exports=J;var E=Ov.exports;const Nn=Fu(E),ET=sT({__proto__:null,default:Nn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT=E,TT=Symbol.for("react.element"),ST=Symbol.for("react.fragment"),RT=Object.prototype.hasOwnProperty,CT=IT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AT={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RT.call(e,r)&&!AT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TT,type:t,key:s,ref:o,props:i,_owner:CT.current}}bu.Fragment=ST;bu.jsx=jv;bu.jsxs=jv;Dv.exports=bu;var C=Dv.exports,zh={},Bv={exports:{}},Lt={},zv={exports:{}},Hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,j){var G=O.length;O.push(j);e:for(;0<G;){var ve=G-1>>>1,Pe=O[ve];if(0<i(Pe,j))O[ve]=j,O[G]=Pe,G=ve;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],G=O.pop();if(G!==j){O[0]=G;e:for(var ve=0,Pe=O.length,ki=Pe>>>1;ve<ki;){var ue=2*(ve+1)-1,Rn=O[ue],cn=ue+1,Ni=O[cn];if(0>i(Rn,G))cn<Pe&&0>i(Ni,Rn)?(O[ve]=Ni,O[cn]=G,ve=cn):(O[ve]=Rn,O[ue]=G,ve=ue);else if(cn<Pe&&0>i(Ni,G))O[ve]=Ni,O[cn]=G,ve=cn;else break e}}return j}function i(O,j){var G=O.sortIndex-j.sortIndex;return G!==0?G:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,v=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=O)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function p(O){if(_=!1,g(O),!v)if(n(l)!==null)v=!0,Ct(S);else{var j=n(u);j!==null&&un(p,j.startTime-O)}}function S(O,j){v=!1,_&&(_=!1,m(L),L=-1),y=!0;var G=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||O&&!Ve());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var Pe=ve(h.expirationTime<=j);j=t.unstable_now(),typeof Pe=="function"?h.callback=Pe:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var ki=!0;else{var ue=n(u);ue!==null&&un(p,ue.startTime-j),ki=!1}return ki}finally{h=null,d=G,y=!1}}var k=!1,N=null,L=-1,Q=5,$=-1;function Ve(){return!(t.unstable_now()-$<Q)}function le(){if(N!==null){var O=t.unstable_now();$=O;var j=!0;try{j=N(!0,O)}finally{j?ln():(k=!1,N=null)}}else k=!1}var ln;if(typeof f=="function")ln=function(){f(le)};else if(typeof MessageChannel<"u"){var Jn=new MessageChannel,Zn=Jn.port2;Jn.port1.onmessage=le,ln=function(){Zn.postMessage(null)}}else ln=function(){T(le,0)};function Ct(O){N=O,k||(k=!0,ln())}function un(O,j){L=T(function(){O(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Ct(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var G=d;d=j;try{return O()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=d;d=O;try{return j()}finally{d=G}},t.unstable_scheduleCallback=function(O,j,G){var ve=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ve+G:ve):G=ve,O){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=G+Pe,O={id:c++,callback:j,priorityLevel:O,startTime:G,expirationTime:Pe,sortIndex:-1},G>ve?(O.sortIndex=G,e(u,O),n(l)===null&&O===n(u)&&(_?(m(L),L=-1):_=!0,un(p,G-ve))):(O.sortIndex=Pe,e(l,O),v||y||(v=!0,Ct(S))),O},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(O){var j=d;return function(){var G=d;d=j;try{return O.apply(this,arguments)}finally{d=G}}}})(Hv);zv.exports=Hv;var PT=zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=E,xt=PT;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,No={};function Ei(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(No[t]=e,t=0;t<e.length;t++)Kv.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hh=Object.prototype.hasOwnProperty,kT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Um={};function NT(t){return Hh.call(Um,t)?!0:Hh.call($m,t)?!1:kT.test(t)?Um[t]=!0:($m[t]=!0,!1)}function xT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DT(t,e,n,r){if(e===null||typeof e>"u"||xT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Af);et[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Af);et[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Af);et[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DT(e,n,i,r)&&(n=null),r||i===null?NT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Wh=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),qh=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Qv=Symbol.for("react.offscreen"),jm=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,zc;function to(t){if(zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zc=e&&e[1]||""}return`
`+zc+t}var Hc=!1;function Wc(t,e){if(!t||Hc)return"";Hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function OT(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function Gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Vi:return"Portal";case Wh:return"Profiler";case kf:return"StrictMode";case Kh:return"Suspense";case qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gv:return(t.displayName||"Context")+".Consumer";case qv:return(t._context.displayName||"Context")+".Provider";case Nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:Gh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Gh(t(e))}catch{}}return null}function LT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gh(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MT(t){var e=Yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=MT(t))}function Xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jv(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function Yh(t,e){Jv(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xh(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(no(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function Zv(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function e_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?e_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,t_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VT=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){VT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function n_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function r_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=n_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FT=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(t,e){if(e){if(FT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,Zi=null,es=null;function Km(t){if(t=ya(t)){if(typeof rd!="function")throw Error(P(280));var e=t.stateNode;e&&(e=zu(e),rd(t.stateNode,t.type,e))}}function i_(t){Zi?es?es.push(t):es=[t]:Zi=t}function s_(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Km(t),e)for(t=0;t<e.length;t++)Km(e[t])}}function o_(t,e){return t(e)}function a_(){}var Kc=!1;function l_(t,e,n){if(Kc)return t(e,n);Kc=!0;try{return o_(t,e,n)}finally{Kc=!1,(Zi!==null||es!==null)&&(a_(),s_())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var id=!1;if(jn)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){id=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{id=!1}function bT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fo=!1,bl=null,$l=!1,sd=null,$T={onError:function(t){fo=!0,bl=t}};function UT(t,e,n,r,i,s,o,a,l){fo=!1,bl=null,bT.apply($T,arguments)}function jT(t,e,n,r,i,s,o,a,l){if(UT.apply(this,arguments),fo){if(fo){var u=bl;fo=!1,bl=null}else throw Error(P(198));$l||($l=!0,sd=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(Ii(t)!==t)throw Error(P(188))}function BT(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function c_(t){return t=BT(t),t!==null?h_(t):null}function h_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h_(t);if(e!==null)return e;t=t.sibling}return null}var d_=xt.unstable_scheduleCallback,Gm=xt.unstable_cancelCallback,zT=xt.unstable_shouldYield,HT=xt.unstable_requestPaint,Ae=xt.unstable_now,WT=xt.unstable_getCurrentPriorityLevel,Of=xt.unstable_ImmediatePriority,f_=xt.unstable_UserBlockingPriority,Ul=xt.unstable_NormalPriority,KT=xt.unstable_LowPriority,p_=xt.unstable_IdlePriority,$u=null,vn=null;function qT(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:YT,GT=Math.log,QT=Math.LN2;function YT(t){return t>>>=0,t===0?32:31-(GT(t)/QT|0)|0}var Ka=64,qa=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ro(a):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function XT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=XT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function m_(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function ZT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function g_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y_,Mf,v_,__,w_,ad=!1,Ga=[],yr=null,vr=null,_r=null,Oo=new Map,Lo=new Map,ur=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qm(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ya(e),e!==null&&Mf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tS(t,e,n,r,i){switch(e){case"focusin":return yr=js(yr,t,e,n,r,i),!0;case"dragenter":return vr=js(vr,t,e,n,r,i),!0;case"mouseover":return _r=js(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oo.set(s,js(Oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,js(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function E_(t){var e=qr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=u_(n),e!==null){t.blockedOn=e,w_(t.priority,function(){v_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ld(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nd=r,n.target.dispatchEvent(r),nd=null}else return e=ya(n),e!==null&&Mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){El(t)&&n.delete(e)}function nS(){ad=!1,yr!==null&&El(yr)&&(yr=null),vr!==null&&El(vr)&&(vr=null),_r!==null&&El(_r)&&(_r=null),Oo.forEach(Ym),Lo.forEach(Ym)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,ad||(ad=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,nS)))}function Mo(t){function e(i){return Bs(i,t)}if(0<Ga.length){Bs(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&Bs(yr,t),vr!==null&&Bs(vr,t),_r!==null&&Bs(_r,t),Oo.forEach(e),Lo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)E_(n),n.blockedOn===null&&ur.shift()}var ts=Qn.ReactCurrentBatchConfig,Bl=!0;function rS(t,e,n,r){var i=re,s=ts.transition;ts.transition=null;try{re=1,Vf(t,e,n,r)}finally{re=i,ts.transition=s}}function iS(t,e,n,r){var i=re,s=ts.transition;ts.transition=null;try{re=4,Vf(t,e,n,r)}finally{re=i,ts.transition=s}}function Vf(t,e,n,r){if(Bl){var i=ld(t,e,n,r);if(i===null)rh(t,e,r,zl,n),Qm(t,r);else if(tS(i,t,e,n,r))r.stopPropagation();else if(Qm(t,r),e&4&&-1<eS.indexOf(t)){for(;i!==null;){var s=ya(i);if(s!==null&&y_(s),s=ld(t,e,n,r),s===null&&rh(t,e,r,zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var zl=null;function ld(t,e,n,r){if(zl=null,t=Df(r),t=qr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WT()){case Of:return 1;case f_:return 4;case Ul:case KT:return 16;case p_:return 536870912;default:return 16}default:return 16}}var mr=null,Ff=null,Il=null;function T_(){if(Il)return Il;var t,e=Ff,n=e.length,r,i="value"in mr?mr.value:mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function Xm(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:Xm,this.isPropagationStopped=Xm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Mt(Rs),ga=Ie({},Rs,{view:0,detail:0}),sS=Mt(ga),Gc,Qc,zs,Uu=Ie({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Gc=t.screenX-zs.screenX,Qc=t.screenY-zs.screenY):Qc=Gc=0,zs=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Jm=Mt(Uu),oS=Ie({},Uu,{dataTransfer:0}),aS=Mt(oS),lS=Ie({},ga,{relatedTarget:0}),Yc=Mt(lS),uS=Ie({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=Mt(uS),hS=Ie({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dS=Mt(hS),fS=Ie({},Rs,{data:0}),Zm=Mt(fS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gS[t])?!!e[t]:!1}function $f(){return yS}var vS=Ie({},ga,{key:function(t){if(t.key){var e=pS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_S=Mt(vS),wS=Ie({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Mt(wS),ES=Ie({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),IS=Mt(ES),TS=Ie({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SS=Mt(TS),RS=Ie({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Mt(RS),AS=[9,13,27,32],Uf=jn&&"CompositionEvent"in window,po=null;jn&&"documentMode"in document&&(po=document.documentMode);var PS=jn&&"TextEvent"in window&&!po,S_=jn&&(!Uf||po&&8<po&&11>=po),tg=String.fromCharCode(32),ng=!1;function R_(t,e){switch(t){case"keyup":return AS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function kS(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(ng=!0,tg);case"textInput":return t=e.data,t===tg&&ng?null:t;default:return null}}function NS(t,e){if(bi)return t==="compositionend"||!Uf&&R_(t,e)?(t=T_(),Il=Ff=mr=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return S_&&e.locale!=="ko"?null:e.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xS[t.type]:e==="textarea"}function A_(t,e,n,r){i_(r),e=Hl(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Vo=null;function DS(t){b_(t,0)}function ju(t){var e=ji(t);if(Xv(e))return t}function OS(t,e){if(t==="change")return e}var P_=!1;if(jn){var Xc;if(jn){var Jc="oninput"in document;if(!Jc){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),Jc=typeof ig.oninput=="function"}Xc=Jc}else Xc=!1;P_=Xc&&(!document.documentMode||9<document.documentMode)}function sg(){mo&&(mo.detachEvent("onpropertychange",k_),Vo=mo=null)}function k_(t){if(t.propertyName==="value"&&ju(Vo)){var e=[];A_(e,Vo,t,Df(t)),l_(DS,e)}}function LS(t,e,n){t==="focusin"?(sg(),mo=e,Vo=n,mo.attachEvent("onpropertychange",k_)):t==="focusout"&&sg()}function MS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Vo)}function VS(t,e){if(t==="click")return ju(e)}function FS(t,e){if(t==="input"||t==="change")return ju(e)}function bS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:bS;function Fo(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hh.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ag(t,e){var n=og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=og(n)}}function N_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x_(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $S(t){var e=x_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N_(n.ownerDocument.documentElement,n)){if(r!==null&&jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ag(n,s);var o=ag(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var US=jn&&"documentMode"in document&&11>=document.documentMode,$i=null,ud=null,go=null,cd=!1;function lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||$i==null||$i!==Fl(r)||(r=$i,"selectionStart"in r&&jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Fo(go,r)||(go=r,r=Hl(ud,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Zc={},D_={};jn&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Bu(t){if(Zc[t])return Zc[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D_)return Zc[t]=e[n];return t}var O_=Bu("animationend"),L_=Bu("animationiteration"),M_=Bu("animationstart"),V_=Bu("transitionend"),F_=new Map,ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){F_.set(t,e),Ei(e,[t])}for(var eh=0;eh<ug.length;eh++){var th=ug[eh],jS=th.toLowerCase(),BS=th[0].toUpperCase()+th.slice(1);Or(jS,"on"+BS)}Or(O_,"onAnimationEnd");Or(L_,"onAnimationIteration");Or(M_,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(V_,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jT(r,e,void 0,t),t.currentTarget=null}function b_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}}}if($l)throw t=sd,$l=!1,sd=null,t}function de(t,e){var n=e[md];n===void 0&&(n=e[md]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Xa]){t[Xa]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(zS.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,nh("selectionchange",!1,e))}}function $_(t,e,n,r){switch(I_(e)){case 1:var i=rS;break;case 4:i=iS;break;default:i=Vf}n=i.bind(null,e,n,t),i=void 0,!id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}l_(function(){var u=s,c=Df(n),h=[];e:{var d=F_.get(t);if(d!==void 0){var y=bf,v=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":y=_S;break;case"focusin":v="focus",y=Yc;break;case"focusout":v="blur",y=Yc;break;case"beforeblur":case"afterblur":y=Yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=aS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=IS;break;case O_:case L_:case M_:y=cS;break;case V_:y=SS;break;case"scroll":y=sS;break;case"wheel":y=CS;break;case"copy":case"cut":case"paste":y=dS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eg}var _=(e&4)!==0,T=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,m!==null&&(p=Do(f,m),p!=null&&_.push($o(f,p,g)))),T)break;f=f.return}0<_.length&&(d=new y(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==nd&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[Bn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?qr(v):null,v!==null&&(T=Ii(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(_=Jm,p="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=eg,p="onPointerLeave",m="onPointerEnter",f="pointer"),T=y==null?d:ji(y),g=v==null?d:ji(v),d=new _(p,f+"leave",y,n,c),d.target=T,d.relatedTarget=g,p=null,qr(c)===u&&(_=new _(m,f+"enter",v,n,c),_.target=g,_.relatedTarget=T,p=_),T=p,y&&v)t:{for(_=y,m=v,f=0,g=_;g;g=xi(g))f++;for(g=0,p=m;p;p=xi(p))g++;for(;0<f-g;)_=xi(_),f--;for(;0<g-f;)m=xi(m),g--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=xi(_),m=xi(m)}_=null}else _=null;y!==null&&hg(h,d,y,_,!1),v!==null&&T!==null&&hg(h,T,v,_,!0)}}e:{if(d=u?ji(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var S=OS;else if(rg(d))if(P_)S=FS;else{S=MS;var k=LS}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=VS);if(S&&(S=S(t,u))){A_(h,S,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Xh(d,"number",d.value)}switch(k=u?ji(u):window,t){case"focusin":(rg(k)||k.contentEditable==="true")&&($i=k,ud=u,go=null);break;case"focusout":go=ud=$i=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,lg(h,n,c);break;case"selectionchange":if(US)break;case"keydown":case"keyup":lg(h,n,c)}var N;if(Uf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else bi?R_(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(S_&&n.locale!=="ko"&&(bi||L!=="onCompositionStart"?L==="onCompositionEnd"&&bi&&(N=T_()):(mr=c,Ff="value"in mr?mr.value:mr.textContent,bi=!0)),k=Hl(u,L),0<k.length&&(L=new Zm(L,t,null,n,c),h.push({event:L,listeners:k}),N?L.data=N:(N=C_(n),N!==null&&(L.data=N)))),(N=PS?kS(t,n):NS(t,n))&&(u=Hl(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}b_(h,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift($o(t,s,i)),s=Do(t,e),s!=null&&r.push($o(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Do(n,s),l!=null&&o.unshift($o(n,l,a))):i||(l=Do(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(HS,`
`).replace(WS,"")}function Ja(t,e,n){if(e=dg(e),dg(t)!==e&&n)throw Error(P(425))}function Wl(){}var hd=null,dd=null;function fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(GS)}:pd;function GS(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),pn="__reactFiber$"+Cs,Uo="__reactProps$"+Cs,Bn="__reactContainer$"+Cs,md="__reactEvents$"+Cs,QS="__reactListeners$"+Cs,YS="__reactHandles$"+Cs;function qr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[pn])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[pn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function zu(t){return t[Uo]||null}var gd=[],Bi=-1;function Lr(t){return{current:t}}function pe(t){0>Bi||(t.current=gd[Bi],gd[Bi]=null,Bi--)}function he(t,e){Bi++,gd[Bi]=t.current,t.current=e}var kr={},ct=Lr(kr),Et=Lr(!1),ai=kr;function cs(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Kl(){pe(Et),pe(ct)}function mg(t,e,n){if(ct.current!==kr)throw Error(P(168));he(ct,e),he(Et,n)}function U_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,LT(t)||"Unknown",i));return Ie({},n,r)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,ai=ct.current,he(ct,t),he(Et,Et.current),!0}function gg(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=U_(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,pe(Et),pe(ct),he(ct,t)):pe(Et),he(Et,n)}var kn=null,Hu=!1,sh=!1;function j_(t){kn===null?kn=[t]:kn.push(t)}function XS(t){Hu=!0,j_(t)}function Mr(){if(!sh&&kn!==null){sh=!0;var t=0,e=re;try{var n=kn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Hu=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),d_(Of,Mr),i}finally{re=e,sh=!1}}return null}var zi=[],Hi=0,Gl=null,Ql=0,Ft=[],bt=0,li=null,xn=1,Dn="";function Br(t,e){zi[Hi++]=Ql,zi[Hi++]=Gl,Gl=t,Ql=e}function B_(t,e,n){Ft[bt++]=xn,Ft[bt++]=Dn,Ft[bt++]=li,li=t;var r=xn;t=Dn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-tn(e)+i|n<<i|r,Dn=s+t}else xn=1<<s|n<<i|r,Dn=t}function Bf(t){t.return!==null&&(Br(t,1),B_(t,1,0))}function zf(t){for(;t===Gl;)Gl=zi[--Hi],zi[Hi]=null,Ql=zi[--Hi],zi[Hi]=null;for(;t===li;)li=Ft[--bt],Ft[bt]=null,Dn=Ft[--bt],Ft[bt]=null,xn=Ft[--bt],Ft[bt]=null}var kt=null,Pt=null,ye=!1,Xt=null;function z_(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Pt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:xn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Pt=null,!0):!1;default:return!1}}function yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(ye){var e=Pt;if(e){var n=e;if(!yg(t,e)){if(yd(t))throw Error(P(418));e=wr(n.nextSibling);var r=kt;e&&yg(t,e)?z_(r,n):(t.flags=t.flags&-4097|2,ye=!1,kt=t)}}else{if(yd(t))throw Error(P(418));t.flags=t.flags&-4097|2,ye=!1,kt=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Za(t){if(t!==kt)return!1;if(!ye)return vg(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fd(t.type,t.memoizedProps)),e&&(e=Pt)){if(yd(t))throw H_(),Error(P(418));for(;e;)z_(t,e),e=wr(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=kt?wr(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=Pt;t;)t=wr(t.nextSibling)}function hs(){Pt=kt=null,ye=!1}function Hf(t){Xt===null?Xt=[t]:Xt.push(t)}var JS=Qn.ReactCurrentBatchConfig;function Gt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Yl=Lr(null),Xl=null,Wi=null,Wf=null;function Kf(){Wf=Wi=Xl=null}function qf(t){var e=Yl.current;pe(Yl),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){Xl=t,Wf=Wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},Wi===null){if(Xl===null)throw Error(P(308));Wi=t,Xl.dependencies={lanes:0,firstContext:t}}else Wi=Wi.next=t;return e}var Gr=null;function Gf(t){Gr===null?Gr=[t]:Gr.push(t)}function W_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gf(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Gf(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}function _g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,y=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(y,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(y,h,d):v,d==null)break e;h=Ie({},h,d);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=h}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var q_=new Wv.Component().refs;function wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Tr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(nn(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Tr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(nn(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Tr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(nn(e,t,r,n),Sl(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function G_(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=It(e)?ai:ct.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ig(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function Ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=q_,Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=It(e)?ai:ct.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wu.enqueueReplaceState(i,i.state,null),Jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===q_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tg(t){var e=t._init;return e(t._payload)}function Q_(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Sr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,p){return f===null||f.tag!==6?(f=dh(g,m.mode,p),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,p){var S=g.type;return S===Fi?c(m,f,g.props.children,p,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===or&&Tg(S)===f.type)?(p=i(f,g.props),p.ref=Hs(m,f,g),p.return=m,p):(p=Nl(g.type,g.key,g.props,null,m.mode,p),p.ref=Hs(m,f,g),p.return=m,p)}function u(m,f,g,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=fh(g,m.mode,p),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,p,S){return f===null||f.tag!==7?(f=ni(g,m.mode,p,S),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=dh(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case za:return g=Nl(f.type,f.key,f.props,null,m.mode,g),g.ref=Hs(m,null,f),g.return=m,g;case Vi:return f=fh(f,m.mode,g),f.return=m,f;case or:var p=f._init;return h(m,p(f._payload),g)}if(no(f)||$s(f))return f=ni(f,m.mode,g,null),f.return=m,f;el(m,f)}return null}function d(m,f,g,p){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,f,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case za:return g.key===S?l(m,f,g,p):null;case Vi:return g.key===S?u(m,f,g,p):null;case or:return S=g._init,d(m,f,S(g._payload),p)}if(no(g)||$s(g))return S!==null?null:c(m,f,g,p,null);el(m,g)}return null}function y(m,f,g,p,S){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(g)||null,a(f,m,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case za:return m=m.get(p.key===null?g:p.key)||null,l(f,m,p,S);case Vi:return m=m.get(p.key===null?g:p.key)||null,u(f,m,p,S);case or:var k=p._init;return y(m,f,g,k(p._payload),S)}if(no(p)||$s(p))return m=m.get(g)||null,c(f,m,p,S,null);el(f,p)}return null}function v(m,f,g,p){for(var S=null,k=null,N=f,L=f=0,Q=null;N!==null&&L<g.length;L++){N.index>L?(Q=N,N=null):Q=N.sibling;var $=d(m,N,g[L],p);if($===null){N===null&&(N=Q);break}t&&N&&$.alternate===null&&e(m,N),f=s($,f,L),k===null?S=$:k.sibling=$,k=$,N=Q}if(L===g.length)return n(m,N),ye&&Br(m,L),S;if(N===null){for(;L<g.length;L++)N=h(m,g[L],p),N!==null&&(f=s(N,f,L),k===null?S=N:k.sibling=N,k=N);return ye&&Br(m,L),S}for(N=r(m,N);L<g.length;L++)Q=y(N,m,L,g[L],p),Q!==null&&(t&&Q.alternate!==null&&N.delete(Q.key===null?L:Q.key),f=s(Q,f,L),k===null?S=Q:k.sibling=Q,k=Q);return t&&N.forEach(function(Ve){return e(m,Ve)}),ye&&Br(m,L),S}function _(m,f,g,p){var S=$s(g);if(typeof S!="function")throw Error(P(150));if(g=S.call(g),g==null)throw Error(P(151));for(var k=S=null,N=f,L=f=0,Q=null,$=g.next();N!==null&&!$.done;L++,$=g.next()){N.index>L?(Q=N,N=null):Q=N.sibling;var Ve=d(m,N,$.value,p);if(Ve===null){N===null&&(N=Q);break}t&&N&&Ve.alternate===null&&e(m,N),f=s(Ve,f,L),k===null?S=Ve:k.sibling=Ve,k=Ve,N=Q}if($.done)return n(m,N),ye&&Br(m,L),S;if(N===null){for(;!$.done;L++,$=g.next())$=h(m,$.value,p),$!==null&&(f=s($,f,L),k===null?S=$:k.sibling=$,k=$);return ye&&Br(m,L),S}for(N=r(m,N);!$.done;L++,$=g.next())$=y(N,m,L,$.value,p),$!==null&&(t&&$.alternate!==null&&N.delete($.key===null?L:$.key),f=s($,f,L),k===null?S=$:k.sibling=$,k=$);return t&&N.forEach(function(le){return e(m,le)}),ye&&Br(m,L),S}function T(m,f,g,p){if(typeof g=="object"&&g!==null&&g.type===Fi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case za:e:{for(var S=g.key,k=f;k!==null;){if(k.key===S){if(S=g.type,S===Fi){if(k.tag===7){n(m,k.sibling),f=i(k,g.props.children),f.return=m,m=f;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===or&&Tg(S)===k.type){n(m,k.sibling),f=i(k,g.props),f.ref=Hs(m,k,g),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Fi?(f=ni(g.props.children,m.mode,p,g.key),f.return=m,m=f):(p=Nl(g.type,g.key,g.props,null,m.mode,p),p.ref=Hs(m,f,g),p.return=m,m=p)}return o(m);case Vi:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=fh(g,m.mode,p),f.return=m,m=f}return o(m);case or:return k=g._init,T(m,f,k(g._payload),p)}if(no(g))return v(m,f,g,p);if($s(g))return _(m,f,g,p);el(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=dh(g,m.mode,p),f.return=m,m=f),o(m)):n(m,f)}return T}var ds=Q_(!0),Y_=Q_(!1),va={},_n=Lr(va),jo=Lr(va),Bo=Lr(va);function Qr(t){if(t===va)throw Error(P(174));return t}function Yf(t,e){switch(he(Bo,e),he(jo,t),he(_n,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zh(e,t)}pe(_n),he(_n,e)}function fs(){pe(_n),pe(jo),pe(Bo)}function X_(t){Qr(Bo.current);var e=Qr(_n.current),n=Zh(e,t.type);e!==n&&(he(jo,t),he(_n,n))}function Xf(t){jo.current===t&&(pe(_n),pe(jo))}var we=Lr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function Jf(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var Rl=Qn.ReactCurrentDispatcher,ah=Qn.ReactCurrentBatchConfig,ui=0,Ee=null,Le=null,$e=null,eu=!1,yo=!1,zo=0,ZS=0;function tt(){throw Error(P(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function ep(t,e,n,r,i,s){if(ui=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?rR:iR,t=n(r,i),yo){s=0;do{if(yo=!1,zo=0,25<=s)throw Error(P(301));s+=1,$e=Le=null,e.updateQueue=null,Rl.current=sR,t=n(r,i)}while(yo)}if(Rl.current=tu,e=Le!==null&&Le.next!==null,ui=0,$e=Le=Ee=null,eu=!1,e)throw Error(P(300));return t}function tp(){var t=zo!==0;return zo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ee.memoizedState=$e=t:$e=$e.next=t,$e}function Ht(){if(Le===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=$e===null?Ee.memoizedState:$e.next;if(e!==null)$e=e,Le=t;else{if(t===null)throw Error(P(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?Ee.memoizedState=$e=t:$e=$e.next=t}return $e}function Ho(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Ht(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ui&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ee.lanes|=c,ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,rn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uh(t){var e=Ht(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function J_(){}function Z_(t,e){var n=Ee,r=Ht(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,np(n0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Wo(9,t0.bind(null,n,r,i,e),void 0,null),je===null)throw Error(P(349));ui&30||e0(n,e,i)}return i}function e0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function t0(t,e,n,r){e.value=n,e.getSnapshot=r,r0(e)&&i0(t)}function n0(t,e,n){return n(function(){r0(e)&&i0(t)})}function r0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function i0(t){var e=zn(t,1);e!==null&&nn(e,t,1,-1)}function Sg(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=nR.bind(null,Ee,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function s0(){return Ht().memoizedState}function Cl(t,e,n,r){var i=fn();Ee.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Zf(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function Rg(t,e){return Cl(8390656,8,t,e)}function np(t,e){return Ku(2048,8,t,e)}function o0(t,e){return Ku(4,2,t,e)}function a0(t,e){return Ku(4,4,t,e)}function l0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function u0(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,l0.bind(null,e,t),n)}function rp(){}function c0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function h0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function d0(t,e,n){return ui&21?(rn(n,e)||(n=m_(),Ee.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function eR(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{re=n,ah.transition=r}}function f0(){return Ht().memoizedState}function tR(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},p0(t))m0(e,n);else if(n=W_(t,e,n,r),n!==null){var i=mt();nn(n,t,r,i),g0(n,e,r)}}function nR(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(p0(t))m0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Gf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=W_(t,e,i,r),n!==null&&(i=mt(),nn(n,t,r,i),g0(n,e,r))}}function p0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function m0(t,e){yo=eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function g0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}var tu={readContext:zt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},rR={readContext:zt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,l0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tR.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Sg,useDebugValue:rp,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Sg(!1),e=t[0];return t=eR.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=fn();if(ye){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),je===null)throw Error(P(349));ui&30||e0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rg(n0.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,t0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=je.identifierPrefix;if(ye){var n=Dn,r=xn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iR={readContext:zt,useCallback:c0,useContext:zt,useEffect:np,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:a0,useMemo:h0,useReducer:lh,useRef:s0,useState:function(){return lh(Ho)},useDebugValue:rp,useDeferredValue:function(t){var e=Ht();return d0(e,Le.memoizedState,t)},useTransition:function(){var t=lh(Ho)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:Z_,useId:f0,unstable_isNewReconciler:!1},sR={readContext:zt,useCallback:c0,useContext:zt,useEffect:np,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:a0,useMemo:h0,useReducer:uh,useRef:s0,useState:function(){return uh(Ho)},useDebugValue:rp,useDeferredValue:function(t){var e=Ht();return Le===null?e.memoizedState=t:d0(e,Le.memoizedState,t)},useTransition:function(){var t=uh(Ho)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:Z_,useId:f0,unstable_isNewReconciler:!1};function ps(t,e){try{var n="",r=e;do n+=OT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ch(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oR=typeof WeakMap=="function"?WeakMap:Map;function y0(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ru||(ru=!0,Dd=r),Id(t,e)},n}function v0(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wR.bind(null,t,e,n),e.then(t,t))}function Ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var aR=Qn.ReactCurrentOwner,wt=!1;function ft(t,e,n,r){e.child=t===null?Y_(e,null,n,r):ds(e,t.child,n,r)}function kg(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=ep(t,e,n,r,s,i),n=tp(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ye&&n&&Bf(e),e.flags|=1,ft(t,e,r,i),e.child)}function Ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Td(t,e,n,r,i)}function w0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(qi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(qi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(qi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(qi,At),At|=r;return ft(t,e,i,n),e.child}function E0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Td(t,e,n,r,i){var s=It(n)?ai:ct.current;return s=cs(e,s),ns(e,i),n=ep(t,e,n,r,s,i),r=tp(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ye&&r&&Bf(e),e.flags|=1,ft(t,e,n,i),e.child)}function xg(t,e,n,r,i){if(It(n)){var s=!0;ql(e)}else s=!1;if(ns(e,i),e.stateNode===null)Al(t,e),G_(e,n,r),Ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=It(n)?ai:ct.current,u=cs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ig(e,o,r,u),ar=!1;var d=e.memoizedState;o.state=d,Jl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Et.current||ar?(typeof c=="function"&&(wd(e,n,c,r),l=e.memoizedState),(a=ar||Eg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Gt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=It(n)?ai:ct.current,l=cs(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ig(e,o,r,l),ar=!1,d=e.memoizedState,o.state=d,Jl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Et.current||ar?(typeof y=="function"&&(wd(e,n,y,r),v=e.memoizedState),(u=ar||Eg(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Sd(t,e,n,r,s,i)}function Sd(t,e,n,r,i,s){E0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gg(e,n,!1),Hn(t,e,s);r=e.stateNode,aR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&gg(e,n,!0),e.child}function I0(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),Yf(t,e.containerInfo)}function Dg(t,e,n,r,i){return hs(),Hf(i),e.flags|=256,ft(t,e,n,r),e.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(we,i&1),t===null)return vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qu(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=Rd,t):ip(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rd,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ip(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Hf(r),ds(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ch(Error(P(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qu({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Cd(o),e.memoizedState=Rd,s);if(!(e.mode&1))return tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=ch(s,r,void 0),tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,wt||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),nn(r,t,i,-1))}return cp(),r=ch(Error(P(421))),tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ER.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=wr(i.nextSibling),kt=e,ye=!0,Xt=null,t!==null&&(Ft[bt++]=xn,Ft[bt++]=Dn,Ft[bt++]=li,xn=t.id,Dn=t.overflow,li=e),e=ip(e,r.children),e.flags|=4096,e)}function Og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_d(t.return,e,n)}function hh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,n,e);else if(t.tag===19)Og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hh(e,!0,n,null,s);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uR(t,e,n){switch(e.tag){case 3:I0(e),hs();break;case 5:X_(e);break;case 1:It(e.type)&&ql(e);break;case 4:Yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?T0(t,e,n):(he(we,we.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return S0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,w0(t,e,n)}return Hn(t,e,n)}var R0,Ad,C0,A0;R0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};C0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(_n.current);var s=null;switch(n){case"input":i=Qh(t,i),r=Qh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Jh(t,i),r=Jh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wl)}ed(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(No.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(No.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ws(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cR(t,e,n){var r=e.pendingProps;switch(zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return It(e.type)&&Kl(),nt(e),null;case 3:return r=e.stateNode,fs(),pe(Et),pe(ct),Jf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Md(Xt),Xt=null))),Ad(t,e),nt(e),null;case 5:Xf(e);var i=Qr(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)C0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return nt(e),null}if(t=Qr(_n.current),Za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)de(io[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Bm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Hm(r,s),de("invalid",r)}ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,a,t),i=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ha(r),zm(r,s,!0);break;case"textarea":Ha(r),Wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=e_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Uo]=r,R0(t,e,!1,!1),e.stateNode=t;e:{switch(o=td(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)de(io[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Bm(t,r),i=Qh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),de("invalid",t);break;case"textarea":Hm(t,r),i=Jh(t,r),de("invalid",t);break;default:i=r}ed(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&t_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Pf(t,s,l,o))}switch(n){case"input":Ha(t),zm(t,r,!1);break;case"textarea":Ha(t),Wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Qr(Bo.current),Qr(_n.current),Za(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return nt(e),null;case 13:if(pe(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Pt!==null&&e.mode&1&&!(e.flags&128))H_(),hs(),e.flags|=98560,s=!1;else if(s=Za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[pn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Xt!==null&&(Md(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Me===0&&(Me=3):cp())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return fs(),Ad(t,e),t===null&&bo(e.stateNode.containerInfo),nt(e),null;case 10:return qf(e.type._context),nt(e),null;case 17:return It(e.type)&&Kl(),nt(e),null;case 19:if(pe(we),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ws(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zl(t),o!==null){for(e.flags|=128,Ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>ms&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return nt(e),null}else 2*Ae()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function hR(t,e){switch(zf(e),e.tag){case 1:return It(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),pe(Et),pe(ct),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(pe(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(we),null;case 4:return fs(),null;case 10:return qf(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var nl=!1,st=!1,dR=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Pd(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Lg=!1;function fR(t,e){if(hd=Bl,t=x_(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:t,selectionRange:n},Bl=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,T=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Gt(e.type,_),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(p){Te(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Lg,Lg=!1,v}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pd(e,n,s)}i=i.next}while(i!==r)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function P0(t){var e=t.alternate;e!==null&&(t.alternate=null,P0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Uo],delete e[md],delete e[QS],delete e[YS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k0(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var Ge=null,Qt=!1;function rr(t,e,n){for(n=n.child;n!==null;)N0(t,e,n),n=n.sibling}function N0(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:st||Ki(n,e);case 6:var r=Ge,i=Qt;Ge=null,rr(t,e,n),Ge=r,Qt=i,Ge!==null&&(Qt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Qt?(t=Ge,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Mo(t)):ih(Ge,n.stateNode));break;case 4:r=Ge,i=Qt,Ge=n.stateNode.containerInfo,Qt=!0,rr(t,e,n),Ge=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pd(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!st&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,rr(t,e,n),st=r):rr(t,e,n);break;default:rr(t,e,n)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dR),e.forEach(function(r){var i=IR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Qt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Qt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(Ge===null)throw Error(P(160));N0(s,o,i),Ge=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),hn(t),r&4){try{vo(3,t,t.return),qu(3,t)}catch(_){Te(t,t.return,_)}try{vo(5,t,t.return)}catch(_){Te(t,t.return,_)}}break;case 1:Kt(e,t),hn(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(Kt(e,t),hn(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{xo(i,"")}catch(_){Te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jv(i,s),td(a,o);var u=td(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?r_(i,h):c==="dangerouslySetInnerHTML"?t_(i,h):c==="children"?xo(i,h):Pf(i,c,h,u)}switch(a){case"input":Yh(i,s);break;case"textarea":Zv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ji(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(_){Te(t,t.return,_)}}break;case 6:if(Kt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Te(t,t.return,_)}}break;case 3:if(Kt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(_){Te(t,t.return,_)}break;case 4:Kt(e,t),hn(t);break;case 13:Kt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ap=Ae())),r&4&&Vg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(st=(u=st)||c,Kt(e,t),st=u):Kt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,y=d.child,d.tag){case 0:case 11:case 14:case 15:vo(4,d,d.return);break;case 1:Ki(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Te(r,n,_)}}break;case 5:Ki(d,d.return);break;case 22:if(d.memoizedState!==null){bg(h);continue}}y!==null?(y.return=d,M=y):bg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=n_("display",o))}catch(_){Te(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Te(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kt(e,t),hn(t),r&4&&Vg(t);break;case 21:break;default:Kt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var s=Mg(t);xd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mg(t);Nd(t,a,o);break;default:throw Error(P(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pR(t,e,n){M=t,D0(t)}function D0(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=nl;var u=st;if(nl=o,(st=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?$g(i):l!==null?(l.return=o,M=l):$g(i);for(;s!==null;)M=s,D0(s),s=s.sibling;M=i,nl=a,st=u}Fg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Fg(t)}}function Fg(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Mo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}st||e.flags&512&&kd(e)}catch(d){Te(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function bg(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function $g(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{kd(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{kd(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var mR=Math.ceil,nu=Qn.ReactCurrentDispatcher,sp=Qn.ReactCurrentOwner,jt=Qn.ReactCurrentBatchConfig,ne=0,je=null,De=null,Je=0,At=0,qi=Lr(0),Me=0,Ko=null,ci=0,Gu=0,op=0,_o=null,_t=null,ap=0,ms=1/0,Pn=null,ru=!1,Dd=null,Ir=null,rl=!1,gr=null,iu=0,wo=0,Od=null,Pl=-1,kl=0;function mt(){return ne&6?Ae():Pl!==-1?Pl:Pl=Ae()}function Tr(t){return t.mode&1?ne&2&&Je!==0?Je&-Je:JS.transition!==null?(kl===0&&(kl=m_()),kl):(t=re,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function nn(t,e,n,r){if(50<wo)throw wo=0,Od=null,Error(P(185));ma(t,n,r),(!(ne&2)||t!==je)&&(t===je&&(!(ne&2)&&(Gu|=n),Me===4&&cr(t,Je)),Tt(t,r),n===1&&ne===0&&!(e.mode&1)&&(ms=Ae()+500,Hu&&Mr()))}function Tt(t,e){var n=t.callbackNode;JT(t,e);var r=jl(t,t===je?Je:0);if(r===0)n!==null&&Gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gm(n),e===1)t.tag===0?XS(Ug.bind(null,t)):j_(Ug.bind(null,t)),qS(function(){!(ne&6)&&Mr()}),n=null;else{switch(g_(r)){case 1:n=Of;break;case 4:n=f_;break;case 16:n=Ul;break;case 536870912:n=p_;break;default:n=Ul}n=U0(n,O0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O0(t,e){if(Pl=-1,kl=0,ne&6)throw Error(P(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=jl(t,t===je?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=su(t,r);else{e=r;var i=ne;ne|=2;var s=M0();(je!==t||Je!==e)&&(Pn=null,ms=Ae()+500,ti(t,e));do try{vR();break}catch(a){L0(t,a)}while(1);Kf(),nu.current=s,ne=i,De!==null?e=0:(je=null,Je=0,e=Me)}if(e!==0){if(e===2&&(i=od(t),i!==0&&(r=i,e=Ld(t,i))),e===1)throw n=Ko,ti(t,0),cr(t,r),Tt(t,Ae()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!gR(i)&&(e=su(t,r),e===2&&(s=od(t),s!==0&&(r=s,e=Ld(t,s))),e===1))throw n=Ko,ti(t,0),cr(t,r),Tt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:zr(t,_t,Pn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=ap+500-Ae(),10<e)){if(jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pd(zr.bind(null,t,_t,Pn),e);break}zr(t,_t,Pn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mR(r/1960))-r,10<r){t.timeoutHandle=pd(zr.bind(null,t,_t,Pn),r);break}zr(t,_t,Pn);break;case 5:zr(t,_t,Pn);break;default:throw Error(P(329))}}}return Tt(t,Ae()),t.callbackNode===n?O0.bind(null,t):null}function Ld(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=su(t,e),t!==2&&(e=_t,_t=n,e!==null&&Md(e)),t}function Md(t){_t===null?_t=t:_t.push.apply(_t,t)}function gR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~op,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Ug(t){if(ne&6)throw Error(P(327));rs();var e=jl(t,0);if(!(e&1))return Tt(t,Ae()),null;var n=su(t,e);if(t.tag!==0&&n===2){var r=od(t);r!==0&&(e=r,n=Ld(t,r))}if(n===1)throw n=Ko,ti(t,0),cr(t,e),Tt(t,Ae()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,_t,Pn),Tt(t,Ae()),null}function lp(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(ms=Ae()+500,Hu&&Mr())}}function hi(t){gr!==null&&gr.tag===0&&!(ne&6)&&rs();var e=ne;ne|=1;var n=jt.transition,r=re;try{if(jt.transition=null,re=1,t)return t()}finally{re=r,jt.transition=n,ne=e,!(ne&6)&&Mr()}}function up(){At=qi.current,pe(qi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KS(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:fs(),pe(Et),pe(ct),Jf();break;case 5:Xf(r);break;case 4:fs();break;case 13:pe(we);break;case 19:pe(we);break;case 10:qf(r.type._context);break;case 22:case 23:up()}n=n.return}if(je=t,De=t=Sr(t.current,null),Je=At=e,Me=0,Ko=null,op=Gu=ci=0,_t=_o=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function L0(t,e){do{var n=De;try{if(Kf(),Rl.current=tu,eu){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eu=!1}if(ui=0,$e=Le=Ee=null,yo=!1,zo=0,sp.current=null,n===null||n.return===null){Me=1,Ko=e,De=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Ag(o);if(y!==null){y.flags&=-257,Pg(y,o,a,s,e),y.mode&1&&Cg(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Cg(s,u,e),cp();break e}l=Error(P(426))}}else if(ye&&a.mode&1){var T=Ag(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Pg(T,o,a,s,e),Hf(ps(l,a));break e}}s=l=ps(l,a),Me!==4&&(Me=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=y0(s,l,e);_g(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ir===null||!Ir.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=v0(s,a,e);_g(s,p);break e}}s=s.return}while(s!==null)}F0(n)}catch(S){e=S,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function M0(){var t=nu.current;return nu.current=tu,t===null?tu:t}function cp(){(Me===0||Me===3||Me===2)&&(Me=4),je===null||!(ci&268435455)&&!(Gu&268435455)||cr(je,Je)}function su(t,e){var n=ne;ne|=2;var r=M0();(je!==t||Je!==e)&&(Pn=null,ti(t,e));do try{yR();break}catch(i){L0(t,i)}while(1);if(Kf(),ne=n,nu.current=r,De!==null)throw Error(P(261));return je=null,Je=0,Me}function yR(){for(;De!==null;)V0(De)}function vR(){for(;De!==null&&!zT();)V0(De)}function V0(t){var e=$0(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?F0(t):De=e,sp.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hR(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,De=null;return}}else if(n=cR(n,e,At),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Me===0&&(Me=5)}function zr(t,e,n){var r=re,i=jt.transition;try{jt.transition=null,re=1,_R(t,e,n,r)}finally{jt.transition=i,re=r}return null}function _R(t,e,n,r){do rs();while(gr!==null);if(ne&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZT(t,s),t===je&&(De=je=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,U0(Ul,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=re;re=1;var a=ne;ne|=4,sp.current=null,fR(t,n),x0(n,t),$S(dd),Bl=!!hd,dd=hd=null,t.current=n,pR(n),HT(),ne=a,re=o,jt.transition=s}else t.current=n;if(rl&&(rl=!1,gr=t,iu=i),s=t.pendingLanes,s===0&&(Ir=null),qT(n.stateNode),Tt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ru)throw ru=!1,t=Dd,Dd=null,t;return iu&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===Od?wo++:(wo=0,Od=t):wo=0,Mr(),null}function rs(){if(gr!==null){var t=g_(iu),e=jt.transition,n=re;try{if(jt.transition=null,re=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,iu=0,ne&6)throw Error(P(331));var i=ne;for(ne|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:vo(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,y=c.return;if(P0(c),c===u){M=null;break}if(d!==null){d.return=y,M=d;break}M=y}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qu(9,a)}}catch(S){Te(a,a.return,S)}if(a===o){M=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,M=p;break e}M=a.return}}if(ne=i,Mr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{re=n,jt.transition=e}}return!1}function jg(t,e,n){e=ps(n,e),e=y0(t,e,1),t=Er(t,e,1),e=mt(),t!==null&&(ma(t,1,e),Tt(t,e))}function Te(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=ps(n,t),t=v0(e,t,1),e=Er(e,t,1),t=mt(),e!==null&&(ma(e,1,t),Tt(e,t));break}}e=e.return}}function wR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(Je&n)===n&&(Me===4||Me===3&&(Je&130023424)===Je&&500>Ae()-ap?ti(t,0):op|=n),Tt(t,e)}function b0(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=mt();t=zn(t,e),t!==null&&(ma(t,e,n),Tt(t,n))}function ER(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b0(t,n)}function IR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),b0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,uR(t,e,n);wt=!!(t.flags&131072)}else wt=!1,ye&&e.flags&1048576&&B_(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var i=cs(e,ct.current);ns(e,n),i=ep(null,e,r,t,i,n);var s=tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qf(e),i.updater=Wu,e.stateNode=i,i._reactInternals=e,Ed(e,r,t,n),e=Sd(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Bf(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SR(r),t=Gt(r,t),i){case 0:e=Td(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,Gt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Td(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),xg(t,e,r,i,n);case 3:e:{if(I0(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K_(t,e),Jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error(P(423)),e),e=Dg(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(P(424)),e),e=Dg(t,e,r,n,i);break e}else for(Pt=wr(e.stateNode.containerInfo.firstChild),kt=e,ye=!0,Xt=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=Hn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return X_(e),t===null&&vd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fd(r,i)?o=null:s!==null&&fd(r,s)&&(e.flags|=32),E0(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&vd(e),null;case 13:return T0(t,e,n);case 4:return Yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),kg(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Yl,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!Et.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=zt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),Ng(t,e,r,i,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Al(t,e),e.tag=1,It(r)?(t=!0,ql(e)):t=!1,ns(e,n),G_(e,r,i),Ed(e,r,i,n),Sd(null,e,r,!0,t,n);case 19:return S0(t,e,n);case 22:return w0(t,e,n)}throw Error(P(156,e.tag))};function U0(t,e){return d_(t,e)}function TR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new TR(t,e,n,r)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SR(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nf)return 11;if(t===xf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ni(n.children,i,s,e);case kf:o=8,i|=8;break;case Wh:return t=Ut(12,n,e,i|2),t.elementType=Wh,t.lanes=s,t;case Kh:return t=Ut(13,n,e,i),t.elementType=Kh,t.lanes=s,t;case qh:return t=Ut(19,n,e,i),t.elementType=qh,t.lanes=s,t;case Qv:return Qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qv:o=10;break e;case Gv:o=9;break e;case Nf:o=11;break e;case xf:o=14;break e;case or:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Qv,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,r,i,s,o,a,l){return t=new RR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function CR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function j0(t){if(!t)return kr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(It(n))return U_(t,n,e)}return e}function B0(t,e,n,r,i,s,o,a,l){return t=dp(n,r,!0,t,i,s,o,a,l),t.context=j0(null),n=t.current,r=mt(),i=Tr(n),s=Vn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,ma(t,i,r),Tt(t,r),t}function Yu(t,e,n,r){var i=e.current,s=mt(),o=Tr(i);return n=j0(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(nn(t,i,o,s),Sl(t,i,o)),o}function ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fp(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function AR(){return null}var z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}Xu.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Yu(t,e,null,null)};Xu.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){Yu(null,t,null,null)}),e[Bn]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=__();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&E_(t)}};function mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function PR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ou(o);s.call(u)}}var o=B0(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Bn]=o.current,bo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ou(l);a.call(u)}}var l=dp(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[Bn]=l.current,bo(t.nodeType===8?t.parentNode:t),hi(function(){Yu(e,l,n,r)}),l}function Zu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ou(o);a.call(l)}}Yu(e,o,t,i)}else o=PR(n,e,t,i,r);return ou(o)}y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(Lf(e,n|1),Tt(e,Ae()),!(ne&6)&&(ms=Ae()+500,Mr()))}break;case 13:hi(function(){var r=zn(t,1);if(r!==null){var i=mt();nn(r,t,1,i)}}),fp(t,1)}};Mf=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=mt();nn(e,t,134217728,n)}fp(t,134217728)}};v_=function(t){if(t.tag===13){var e=Tr(t),n=zn(t,e);if(n!==null){var r=mt();nn(n,t,e,r)}fp(t,e)}};__=function(){return re};w_=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};rd=function(t,e,n){switch(e){case"input":if(Yh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(P(90));Xv(r),Yh(r,i)}}}break;case"textarea":Zv(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};o_=lp;a_=hi;var kR={usingClientEntryPoint:!1,Events:[ya,ji,zu,i_,s_,lp]},Ks={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NR={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||AR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{$u=il.inject(NR),vn=il}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kR;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mp(e))throw Error(P(200));return CR(t,e,null,n)};Lt.createRoot=function(t,e){if(!mp(t))throw Error(P(299));var n=!1,r="",i=z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,bo(t.nodeType===8?t.parentNode:t),new pp(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=c_(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return hi(t)};Lt.hydrate=function(t,e,n){if(!Ju(e))throw Error(P(200));return Zu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!mp(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B0(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xu(e)};Lt.render=function(t,e,n){if(!Ju(e))throw Error(P(200));return Zu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(P(40));return t._reactRootContainer?(hi(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Lt.unstable_batchedUpdates=lp;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Zu(t,e,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),Bv.exports=Lt;var W0=Bv.exports;const so=Fu(W0);var Hg=W0;zh.createRoot=Hg.createRoot,zh.hydrateRoot=Hg.hydrateRoot;const xR="_contain_106c3_19",DR="_containMain_106c3_41",OR="_buttonOne_106c3_81",LR="_param_106c3_165",MR="_inputBox_106c3_177",VR="_and_106c3_225",FR="_firstline_106c3_239",bR="_paramTwo_106c3_257",$R="_signin_106c3_271",UR="_paramSignin_106c3_281",qt={contain:xR,containMain:DR,buttonOne:OR,param:LR,inputBox:MR,and:VR,firstline:FR,paramTwo:bR,signin:$R,paramSignin:UR};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(){return ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ge.apply(this,arguments)}var Ne;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ne||(Ne={}));const Wg="popstate";function jR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return qo("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:di(i)}return zR(e,n,null,t)}function X(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BR(){return Math.random().toString(36).substr(2,8)}function Kg(t,e){return{usr:t.state,key:t.key,idx:e}}function qo(t,e,n,r){return n===void 0&&(n=null),ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yn(e):e,{state:n,key:e&&e.key||r||BR()})}function di(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ne.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ge({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ne.Pop;let T=c(),m=T==null?null:T-u;u=T,l&&l({action:a,location:_.location,delta:m})}function d(T,m){a=Ne.Push;let f=qo(_.location,T,m);n&&n(f,T),u=c()+1;let g=Kg(f,u),p=_.createHref(f);try{o.pushState(g,"",p)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(p)}s&&l&&l({action:a,location:_.location,delta:1})}function y(T,m){a=Ne.Replace;let f=qo(_.location,T,m);n&&n(f,T),u=c();let g=Kg(f,u),p=_.createHref(f);o.replaceState(g,"",p),s&&l&&l({action:a,location:_.location,delta:0})}function v(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:di(T);return X(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wg,h),l=T,()=>{i.removeEventListener(Wg,h),l=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let m=v(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:y,go(T){return o.go(T)}};return _}var Ce;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ce||(Ce={}));const HR=new Set(["lazy","caseSensitive","path","id","index","children"]);function WR(t){return t.index===!0}function Vd(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(X(i.index!==!0||!i.children,"Cannot specify children on an index route"),X(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),WR(i)){let l=ge({},i,e(i),{id:a});return r[a]=l,l}else{let l=ge({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Vd(i.children,e,o,r)),l}})}function Gi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Yn(e):e,i=As(r.pathname||"/",n);if(i==null)return null;let s=K0(t);KR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tC(s[a],iC(i));return o}function K0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Fn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ZR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of q0(s.path))i(s,o,l)}),e}function q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=q0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qR=/^:\w+$/,GR=3,QR=2,YR=1,XR=10,JR=-2,qg=t=>t==="*";function ZR(t,e){let n=t.split("/"),r=n.length;return n.some(qg)&&(r+=JR),e&&(r+=QR),n.filter(i=>!qg(i)).reduce((i,s)=>i+(qR.test(s)?GR:s===""?YR:XR),r)}function eC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Fn([i,c.pathname]),pathnameBase:lC(Fn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Fn([i,c.pathnameBase]))}return s}function nC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=sC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iC(t){try{return decodeURI(t)}catch(e){return gs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sC(t,e){try{return decodeURIComponent(t)}catch(n){return gs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function As(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yn(t):t;return{pathname:n?n.startsWith("/")?n:aC(n,e):e,search:uC(r),hash:cC(i)}}function aC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ph(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _a(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ec(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yn(t):(i=ge({},t),X(!i.pathname||!i.pathname.includes("?"),ph("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),ph("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),ph("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=oC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Fn=t=>t.join("/").replace(/\/\/+/g,"/"),lC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class gp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function G0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Q0=["post","put","patch","delete"],hC=new Set(Q0),dC=["get",...Q0],fC=new Set(dC),pC=new Set([301,302,303,307,308]),mC=new Set([307,308]),mh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yC=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function vC(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;X(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=I=>({hasErrorBoundary:w(I)})}else i=yC;let s={},o=Vd(t.routes,i,void 0,s),a,l=t.basename||"/",u=ge({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,y=null,v=null,_=t.hydrationData!=null,T=Gi(o,t.history.location,l),m=null;if(T==null){let w=Vt(404,{pathname:t.history.location.pathname}),{matches:I,route:R}=ty(o);T=I,m={[R.id]:w}}let f=!T.some(w=>w.route.lazy)&&(!T.some(w=>w.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:T,initialized:f,navigation:mh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=Ne.Pop,k=!1,N,L=!1,Q=!1,$=[],Ve=[],le=new Map,ln=0,Jn=-1,Zn=new Map,Ct=new Set,un=new Map,O=new Map,j=new Map,G=!1;function ve(){return c=t.history.listen(w=>{let{action:I,location:R,delta:V}=w;if(G){G=!1;return}gs(j.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let q=Dm({currentLocation:p.location,nextLocation:R,historyAction:I});if(q&&V!=null){G=!0,t.history.go(V*-1),Ua(q,{state:"blocked",location:R,proceed(){Ua(q,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),t.history.go(V)},reset(){let z=new Map(p.blockers);z.set(q,qs),ue({blockers:z})}});return}return er(I,R)}),p.initialized||er(Ne.Pop,p.location),g}function Pe(){c&&c(),h.clear(),N&&N.abort(),p.fetchers.forEach((w,I)=>Mc(I)),p.blockers.forEach((w,I)=>xm(I))}function ki(w){return h.add(w),()=>h.delete(w)}function ue(w){p=ge({},p,w),h.forEach(I=>I(p))}function Rn(w,I){var R,V;let q=p.actionData!=null&&p.navigation.formMethod!=null&&Yt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((R=w.state)==null?void 0:R._isRedirect)!==!0,z;I.actionData?Object.keys(I.actionData).length>0?z=I.actionData:z=null:q?z=p.actionData:z=null;let K=I.loaderData?ey(p.loaderData,I.loaderData,I.matches||[],I.errors):p.loaderData,U=p.blockers;U.size>0&&(U=new Map(U),U.forEach((ae,qe)=>U.set(qe,qs)));let F=k===!0||p.navigation.formMethod!=null&&Yt(p.navigation.formMethod)&&((V=w.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),L||S===Ne.Pop||(S===Ne.Push?t.history.push(w,w.state):S===Ne.Replace&&t.history.replace(w,w.state)),ue(ge({},I,{actionData:z,loaderData:K,historyAction:S,location:w,initialized:!0,navigation:mh,revalidation:"idle",restoreScrollPosition:Lm(w,I.matches||p.matches),preventScrollReset:F,blockers:U})),S=Ne.Pop,k=!1,L=!1,Q=!1,$=[],Ve=[]}async function cn(w,I){if(typeof w=="number"){t.history.go(w);return}let R=Fd(p.location,p.matches,l,u.v7_prependBasename,w,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:V,submission:q,error:z}=Gg(u.v7_normalizeFormMethod,!1,R,I),K=p.location,U=qo(p.location,V,I&&I.state);U=ge({},U,t.history.encodeLocation(U));let F=I&&I.replace!=null?I.replace:void 0,ae=Ne.Push;F===!0?ae=Ne.Replace:F===!1||q!=null&&Yt(q.formMethod)&&q.formAction===p.location.pathname+p.location.search&&(ae=Ne.Replace);let qe=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,se=Dm({currentLocation:K,nextLocation:U,historyAction:ae});if(se){Ua(se,{state:"blocked",location:U,proceed(){Ua(se,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),cn(w,I)},reset(){let Re=new Map(p.blockers);Re.set(se,qs),ue({blockers:Re})}});return}return await er(ae,U,{submission:q,pendingError:z,preventScrollReset:qe,replace:I&&I.replace})}function Ni(){if(Lc(),ue({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){er(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}er(S||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function er(w,I,R){N&&N.abort(),N=null,S=w,L=(R&&R.startUninterruptedRevalidation)===!0,nT(p.location,p.matches),k=(R&&R.preventScrollReset)===!0;let V=a||o,q=R&&R.overrideNavigation,z=Gi(V,I,l);if(!z){let Re=Vt(404,{pathname:I.pathname}),{matches:Fe,route:Ur}=ty(V);Vc(),Rn(I,{matches:Fe,loaderData:{},errors:{[Ur.id]:Re}});return}if(p.initialized&&!Q&&TC(p.location,I)&&!(R&&R.submission&&Yt(R.submission.formMethod))){Rn(I,{matches:z});return}N=new AbortController;let K=Qs(t.history,I,N.signal,R&&R.submission),U,F;if(R&&R.pendingError)F={[Qi(z).route.id]:R.pendingError};else if(R&&R.submission&&Yt(R.submission.formMethod)){let Re=await QI(K,I,R.submission,z,{replace:R.replace});if(Re.shortCircuited)return;U=Re.pendingActionData,F=Re.pendingActionError,q=sl(I,R.submission),K=new Request(K.url,{signal:K.signal})}let{shortCircuited:ae,loaderData:qe,errors:se}=await YI(K,I,z,q,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,U,F);ae||(N=null,Rn(I,ge({matches:z},U?{actionData:U}:{},{loaderData:qe,errors:se})))}async function QI(w,I,R,V,q){q===void 0&&(q={}),Lc();let z=PC(I,R);ue({navigation:z});let K,U=$d(V,I);if(!U.route.action&&!U.route.lazy)K={type:Ce.error,error:Vt(405,{method:w.method,pathname:I.pathname,routeId:U.route.id})};else if(K=await Gs("action",w,U,V,s,i,l),w.signal.aborted)return{shortCircuited:!0};if(is(K)){let F;return q&&q.replace!=null?F=q.replace:F=K.location===p.location.pathname+p.location.search,await Vs(p,K,{submission:R,replace:F}),{shortCircuited:!0}}if(Eo(K)){let F=Qi(V,U.route.id);return(q&&q.replace)!==!0&&(S=Ne.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:K.error}}}if(Yr(K))throw Vt(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:K.data}}}async function YI(w,I,R,V,q,z,K,U,F){let ae=V||sl(I,q),qe=q||z||iy(ae),se=a||o,[Re,Fe]=Qg(t.history,p,R,qe,I,Q,$,Ve,un,Ct,se,l,U,F);if(Vc(oe=>!(R&&R.some(Wt=>Wt.route.id===oe))||Re&&Re.some(Wt=>Wt.route.id===oe)),Jn=++ln,Re.length===0&&Fe.length===0){let oe=km();return Rn(I,ge({matches:R,loaderData:{},errors:F||null},U?{actionData:U}:{},oe?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!L){Fe.forEach(Wt=>{let nr=p.fetchers.get(Wt.key),jc=Ys(void 0,nr?nr.data:void 0);p.fetchers.set(Wt.key,jc)});let oe=U||p.actionData;ue(ge({navigation:ae},oe?Object.keys(oe).length===0?{actionData:null}:{actionData:oe}:{},Fe.length>0?{fetchers:new Map(p.fetchers)}:{}))}Fe.forEach(oe=>{le.has(oe.key)&&tr(oe.key),oe.controller&&le.set(oe.key,oe.controller)});let Ur=()=>Fe.forEach(oe=>tr(oe.key));N&&N.signal.addEventListener("abort",Ur);let{results:jr,loaderResults:Fs,fetcherResults:Fc}=await Am(p.matches,R,Re,Fe,w);if(w.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Ur),Fe.forEach(oe=>le.delete(oe.key));let Cn=ny(jr);if(Cn){if(Cn.idx>=Re.length){let oe=Fe[Cn.idx-Re.length].key;Ct.add(oe)}return await Vs(p,Cn.result,{replace:K}),{shortCircuited:!0}}let{loaderData:An,errors:ja}=Zg(p,R,Re,Fs,F,Fe,Fc,O);O.forEach((oe,Wt)=>{oe.subscribe(nr=>{(nr||oe.done)&&O.delete(Wt)})});let bc=km(),$c=Nm(Jn),Uc=bc||$c||Fe.length>0;return ge({loaderData:An,errors:ja},Uc?{fetchers:new Map(p.fetchers)}:{})}function Cm(w){return p.fetchers.get(w)||gC}function XI(w,I,R,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");le.has(w)&&tr(w);let q=a||o,z=Fd(p.location,p.matches,l,u.v7_prependBasename,R,I,V==null?void 0:V.relative),K=Gi(q,z,l);if(!K){$a(w,I,Vt(404,{pathname:z}));return}let{path:U,submission:F,error:ae}=Gg(u.v7_normalizeFormMethod,!0,z,V);if(ae){$a(w,I,ae);return}let qe=$d(K,U);if(k=(V&&V.preventScrollReset)===!0,F&&Yt(F.formMethod)){JI(w,I,U,qe,K,F);return}un.set(w,{routeId:I,path:U}),ZI(w,I,U,qe,K,F)}async function JI(w,I,R,V,q,z){if(Lc(),un.delete(w),!V.route.action&&!V.route.lazy){let Oe=Vt(405,{method:z.formMethod,pathname:R,routeId:I});$a(w,I,Oe);return}let K=p.fetchers.get(w),U=kC(z,K);p.fetchers.set(w,U),ue({fetchers:new Map(p.fetchers)});let F=new AbortController,ae=Qs(t.history,R,F.signal,z);le.set(w,F);let qe=ln,se=await Gs("action",ae,V,q,s,i,l);if(ae.signal.aborted){le.get(w)===F&&le.delete(w);return}if(is(se))if(le.delete(w),Jn>qe){let Oe=Li(void 0);p.fetchers.set(w,Oe),ue({fetchers:new Map(p.fetchers)});return}else{Ct.add(w);let Oe=Ys(z);return p.fetchers.set(w,Oe),ue({fetchers:new Map(p.fetchers)}),Vs(p,se,{submission:z,isFetchActionRedirect:!0})}if(Eo(se)){$a(w,I,se.error);return}if(Yr(se))throw Vt(400,{type:"defer-action"});let Re=p.navigation.location||p.location,Fe=Qs(t.history,Re,F.signal),Ur=a||o,jr=p.navigation.state!=="idle"?Gi(Ur,p.navigation.location,l):p.matches;X(jr,"Didn't find any matches after fetcher action");let Fs=++ln;Zn.set(w,Fs);let Fc=Ys(z,se.data);p.fetchers.set(w,Fc);let[Cn,An]=Qg(t.history,p,jr,z,Re,Q,$,Ve,un,Ct,Ur,l,{[V.route.id]:se.data},void 0);An.filter(Oe=>Oe.key!==w).forEach(Oe=>{let bs=Oe.key,Mm=p.fetchers.get(bs),iT=Ys(void 0,Mm?Mm.data:void 0);p.fetchers.set(bs,iT),le.has(bs)&&tr(bs),Oe.controller&&le.set(bs,Oe.controller)}),ue({fetchers:new Map(p.fetchers)});let ja=()=>An.forEach(Oe=>tr(Oe.key));F.signal.addEventListener("abort",ja);let{results:bc,loaderResults:$c,fetcherResults:Uc}=await Am(p.matches,jr,Cn,An,Fe);if(F.signal.aborted)return;F.signal.removeEventListener("abort",ja),Zn.delete(w),le.delete(w),An.forEach(Oe=>le.delete(Oe.key));let oe=ny(bc);if(oe){if(oe.idx>=Cn.length){let Oe=An[oe.idx-Cn.length].key;Ct.add(Oe)}return Vs(p,oe.result)}let{loaderData:Wt,errors:nr}=Zg(p,p.matches,Cn,$c,void 0,An,Uc,O);if(p.fetchers.has(w)){let Oe=Li(se.data);p.fetchers.set(w,Oe)}let jc=Nm(Fs);p.navigation.state==="loading"&&Fs>Jn?(X(S,"Expected pending action"),N&&N.abort(),Rn(p.navigation.location,{matches:jr,loaderData:Wt,errors:nr,fetchers:new Map(p.fetchers)})):(ue(ge({errors:nr,loaderData:ey(p.loaderData,Wt,jr,nr)},jc||An.length>0?{fetchers:new Map(p.fetchers)}:{})),Q=!1)}async function ZI(w,I,R,V,q,z){let K=p.fetchers.get(w),U=Ys(z,K?K.data:void 0);p.fetchers.set(w,U),ue({fetchers:new Map(p.fetchers)});let F=new AbortController,ae=Qs(t.history,R,F.signal);le.set(w,F);let qe=ln,se=await Gs("loader",ae,V,q,s,i,l);if(Yr(se)&&(se=await Z0(se,ae.signal,!0)||se),le.get(w)===F&&le.delete(w),ae.signal.aborted)return;if(is(se))if(Jn>qe){let Fe=Li(void 0);p.fetchers.set(w,Fe),ue({fetchers:new Map(p.fetchers)});return}else{Ct.add(w),await Vs(p,se);return}if(Eo(se)){let Fe=Qi(p.matches,I);p.fetchers.delete(w),ue({fetchers:new Map(p.fetchers),errors:{[Fe.route.id]:se.error}});return}X(!Yr(se),"Unhandled fetcher deferred data");let Re=Li(se.data);p.fetchers.set(w,Re),ue({fetchers:new Map(p.fetchers)})}async function Vs(w,I,R){let{submission:V,replace:q,isFetchActionRedirect:z}=R===void 0?{}:R;I.revalidate&&(Q=!0);let K=qo(w.location,I.location,ge({_isRedirect:!0},z?{_isFetchActionRedirect:!0}:{}));if(X(K,"Expected a location on the redirect navigation"),n){let ae=!1;if(I.reloadDocument)ae=!0;else if(Y0.test(I.location)){const qe=t.history.createURL(I.location);ae=qe.origin!==e.location.origin||As(qe.pathname,l)==null}if(ae){q?e.location.replace(I.location):e.location.assign(I.location);return}}N=null;let U=q===!0?Ne.Replace:Ne.Push,F=V||iy(w.navigation);if(mC.has(I.status)&&F&&Yt(F.formMethod))await er(U,K,{submission:ge({},F,{formAction:I.location}),preventScrollReset:k});else if(z)await er(U,K,{overrideNavigation:sl(K),fetcherSubmission:F,preventScrollReset:k});else{let ae=sl(K,F);await er(U,K,{overrideNavigation:ae,preventScrollReset:k})}}async function Am(w,I,R,V,q){let z=await Promise.all([...R.map(F=>Gs("loader",q,F,I,s,i,l)),...V.map(F=>F.matches&&F.match&&F.controller?Gs("loader",Qs(t.history,F.path,F.controller.signal),F.match,F.matches,s,i,l):{type:Ce.error,error:Vt(404,{pathname:F.path})})]),K=z.slice(0,R.length),U=z.slice(R.length);return await Promise.all([ry(w,R,K,K.map(()=>q.signal),!1,p.loaderData),ry(w,V.map(F=>F.match),U,V.map(F=>F.controller?F.controller.signal:null),!0)]),{results:z,loaderResults:K,fetcherResults:U}}function Lc(){Q=!0,$.push(...Vc()),un.forEach((w,I)=>{le.has(I)&&(Ve.push(I),tr(I))})}function $a(w,I,R){let V=Qi(p.matches,I);Mc(w),ue({errors:{[V.route.id]:R},fetchers:new Map(p.fetchers)})}function Mc(w){let I=p.fetchers.get(w);le.has(w)&&!(I&&I.state==="loading"&&Zn.has(w))&&tr(w),un.delete(w),Zn.delete(w),Ct.delete(w),p.fetchers.delete(w)}function tr(w){let I=le.get(w);X(I,"Expected fetch controller: "+w),I.abort(),le.delete(w)}function Pm(w){for(let I of w){let R=Cm(I),V=Li(R.data);p.fetchers.set(I,V)}}function km(){let w=[],I=!1;for(let R of Ct){let V=p.fetchers.get(R);X(V,"Expected fetcher: "+R),V.state==="loading"&&(Ct.delete(R),w.push(R),I=!0)}return Pm(w),I}function Nm(w){let I=[];for(let[R,V]of Zn)if(V<w){let q=p.fetchers.get(R);X(q,"Expected fetcher: "+R),q.state==="loading"&&(tr(R),Zn.delete(R),I.push(R))}return Pm(I),I.length>0}function eT(w,I){let R=p.blockers.get(w)||qs;return j.get(w)!==I&&j.set(w,I),R}function xm(w){p.blockers.delete(w),j.delete(w)}function Ua(w,I){let R=p.blockers.get(w)||qs;X(R.state==="unblocked"&&I.state==="blocked"||R.state==="blocked"&&I.state==="blocked"||R.state==="blocked"&&I.state==="proceeding"||R.state==="blocked"&&I.state==="unblocked"||R.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+I.state);let V=new Map(p.blockers);V.set(w,I),ue({blockers:V})}function Dm(w){let{currentLocation:I,nextLocation:R,historyAction:V}=w;if(j.size===0)return;j.size>1&&gs(!1,"A router only supports one blocker at a time");let q=Array.from(j.entries()),[z,K]=q[q.length-1],U=p.blockers.get(z);if(!(U&&U.state==="proceeding")&&K({currentLocation:I,nextLocation:R,historyAction:V}))return z}function Vc(w){let I=[];return O.forEach((R,V)=>{(!w||w(V))&&(R.cancel(),I.push(V),O.delete(V))}),I}function tT(w,I,R){if(d=w,v=I,y=R||null,!_&&p.navigation===mh){_=!0;let V=Lm(p.location,p.matches);V!=null&&ue({restoreScrollPosition:V})}return()=>{d=null,v=null,y=null}}function Om(w,I){return y&&y(w,I.map(V=>AC(V,p.loaderData)))||w.key}function nT(w,I){if(d&&v){let R=Om(w,I);d[R]=v()}}function Lm(w,I){if(d){let R=Om(w,I),V=d[R];if(typeof V=="number")return V}return null}function rT(w){s={},a=Vd(w,i,void 0,s)}return g={get basename(){return l},get state(){return p},get routes(){return o},initialize:ve,subscribe:ki,enableScrollRestoration:tT,navigate:cn,fetch:XI,revalidate:Ni,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:Cm,deleteFetcher:Mc,dispose:Pe,getBlocker:eT,deleteBlocker:xm,_internalFetchControllers:le,_internalActiveDeferreds:O,_internalSetRoutes:rT},g}function _C(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Fd(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=ec(i||".",_a(a).map(c=>c.pathnameBase),As(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!yp(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Fn([n,u.pathname])),di(u)}function Gg(t,e,n,r){if(!r||!_C(r))return{path:n};if(r.formMethod&&!CC(r.formMethod))return{path:n,error:Vt(405,{method:r.formMethod})};let i=()=>({path:n,error:Vt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=J0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Yt(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,v)=>{let[_,T]=v;return""+y+_+"="+T+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Yt(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}X(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=bd(r.formData),u=r.formData;else if(r.body instanceof FormData)l=bd(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Jg(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Jg(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Yt(c.formMethod))return{path:n,submission:c};let h=Yn(n);return e&&h.search&&yp(h.search)&&l.append("index",""),h.search="?"+l,{path:di(h),submission:c}}function wC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Qg(t,e,n,r,i,s,o,a,l,u,c,h,d,y){let v=y?Object.values(y)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),T=t.createURL(i),m=y?Object.keys(y)[0]:void 0,g=wC(n,m).filter((S,k)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(EC(e.loaderData,e.matches[k],S)||o.some(Q=>Q===S.route.id))return!0;let N=e.matches[k],L=S;return Yg(S,ge({currentUrl:_,currentParams:N.params,nextUrl:T,nextParams:L.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===T.pathname+T.search||_.search!==T.search||X0(N,L)}))}),p=[];return l.forEach((S,k)=>{if(!n.some(Ve=>Ve.route.id===S.routeId))return;let N=Gi(c,S.path,h);if(!N){p.push({key:k,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let L=e.fetchers.get(k),Q=$d(N,S.path),$=!1;u.has(k)?$=!1:a.includes(k)?$=!0:L&&L.state!=="idle"&&L.data===void 0?$=s:$=Yg(Q,ge({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:T,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),$&&p.push({key:k,routeId:S.routeId,path:S.path,matches:N,match:Q,controller:new AbortController})}),[g,p]}function EC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function X0(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Yg(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Xg(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];X(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";gs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!HR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ge({},e(i),{lazy:void 0}))}async function Gs(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,T=new Promise((m,f)=>_=f);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),T])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),Xg(n.route,s,i)]))[0];else if(await Xg(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),T=_.pathname+_.search;throw Vt(405,{method:e.method,pathname:T,routeId:n.route.id})}else return{type:Ce.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),T=_.pathname+_.search;throw Vt(404,{pathname:T})}X(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ce.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(RC(u)){let v=u.status;if(pC.has(v)){let m=u.headers.get("Location");if(X(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Y0.test(m))m=Fd(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let f=new URL(e.url),g=m.startsWith("//")?new URL(f.protocol+m):new URL(m),p=As(g.pathname,o)!=null;g.origin===f.origin&&p&&(m=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Ce.redirect,status:v,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Ce.error?Ce.error:Ce.data,response:u};let _,T=u.headers.get("Content-Type");return T&&/\bapplication\/json\b/.test(T)?_=await u.json():_=await u.text(),l===Ce.error?{type:l,error:new gp(v,u.statusText,_),headers:u.headers}:{type:Ce.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ce.error)return{type:l,error:u};if(SC(u)){var d,y;return{type:Ce.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:Ce.data,data:u}}function Qs(t,e,n,r){let i=t.createURL(J0(e)).toString(),s={signal:n};if(r&&Yt(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=bd(r.formData):s.body=r.formData}return new Request(i,s)}function bd(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Jg(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function IC(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(X(!is(c),"Cannot handle redirect results in processLoaderData"),Eo(c)){let y=Qi(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=v),s[d]=void 0,l||(l=!0,a=G0(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else Yr(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Zg(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=IC(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:y}=s[c];X(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(y&&y.signal.aborted))if(Eo(v)){let _=Qi(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=ge({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(is(v))X(!1,"Unhandled fetcher revalidation redirect");else if(Yr(v))X(!1,"Unhandled fetcher deferred data");else{let _=Li(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function ey(t,e,n,r){let i=ge({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Qi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ty(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Vt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new gp(t||500,o,new Error(a),!0)}function ny(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(is(n))return{result:n,idx:e}}}function J0(t){let e=typeof t=="string"?Yn(t):t;return di(ge({},e,{hash:""}))}function TC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Yr(t){return t.type===Ce.deferred}function Eo(t){return t.type===Ce.error}function is(t){return(t&&t.type)===Ce.redirect}function SC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function RC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function CC(t){return fC.has(t.toLowerCase())}function Yt(t){return hC.has(t.toLowerCase())}async function ry(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!X0(u,l)&&(s&&s[l.route.id])!==void 0;if(Yr(a)&&(i||c)){let h=r[o];X(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await Z0(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function Z0(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ce.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ce.error,error:i}}return{type:Ce.data,data:t.deferredData.data}}}function yp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function AC(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function $d(t,e){let n=typeof e=="string"?Yn(e).search:e.search;if(t[t.length-1].route.index&&yp(n||""))return t[t.length-1];let r=_a(t);return r[r.length-1]}function iy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function sl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function PC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ys(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function kC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Li(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function au(){return au=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},au.apply(this,arguments)}const tc=E.createContext(null),ew=E.createContext(null),Ps=E.createContext(null),nc=E.createContext(null),Vr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),tw=E.createContext(null);function NC(t,e){let{relative:n}=e===void 0?{}:e;ks()||X(!1);let{basename:r,navigator:i}=E.useContext(Ps),{hash:s,pathname:o,search:a}=rw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Fn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ks(){return E.useContext(nc)!=null}function wa(){return ks()||X(!1),E.useContext(nc).location}function nw(t){E.useContext(Ps).static||E.useLayoutEffect(t)}function Ea(){let{isDataRoute:t}=E.useContext(Vr);return t?BC():xC()}function xC(){ks()||X(!1);let t=E.useContext(tc),{basename:e,navigator:n}=E.useContext(Ps),{matches:r}=E.useContext(Vr),{pathname:i}=wa(),s=JSON.stringify(_a(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return nw(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=ec(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Fn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function rw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Vr),{pathname:i}=wa(),s=JSON.stringify(_a(r).map(o=>o.pathnameBase));return E.useMemo(()=>ec(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function DC(t,e,n){ks()||X(!1);let{navigator:r}=E.useContext(Ps),{matches:i}=E.useContext(Vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=wa(),u;if(e){var c;let _=typeof e=="string"?Yn(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||X(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",y=Gi(t,{pathname:d}),v=FC(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Fn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Fn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?E.createElement(nc.Provider,{value:{location:au({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ne.Pop}},v):v}function OC(){let t=jC(),e=G0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const LC=E.createElement(OC,null);class MC extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Vr.Provider,{value:this.props.routeContext},E.createElement(tw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VC(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(tc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Vr.Provider,{value:e},r)}function FC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||X(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||LC);let d=e.concat(s.slice(0,u+1)),y=()=>{let v;return c?v=h:l.route.Component?v=E.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,E.createElement(VC,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(MC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:y(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):y()},null)}var iw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(iw||{}),lu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lu||{});function bC(t){let e=E.useContext(tc);return e||X(!1),e}function $C(t){let e=E.useContext(ew);return e||X(!1),e}function UC(t){let e=E.useContext(Vr);return e||X(!1),e}function sw(t){let e=UC(),n=e.matches[e.matches.length-1];return n.route.id||X(!1),n.route.id}function jC(){var t;let e=E.useContext(tw),n=$C(lu.UseRouteError),r=sw(lu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function BC(){let{router:t}=bC(iw.UseNavigateStable),e=sw(lu.UseNavigateStable),n=E.useRef(!1);return nw(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,au({fromRouteId:e},s)))},[t,e])}const zC="startTransition",sy=ET[zC];function HC(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=E.useState(n.state),{v7_startTransition:o}=r||{},a=E.useCallback(h=>{o&&sy?sy(()=>s(h)):s(h)},[s,o]);E.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,y)=>n.navigate(h,{state:d,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(h,d,y)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),u=n.basename||"/",c=E.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return E.createElement(E.Fragment,null,E.createElement(tc.Provider,{value:c},E.createElement(ew.Provider,{value:i},E.createElement(qC,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?E.createElement(WC,{routes:n.routes,state:i}):e))),null)}function WC(t){let{routes:e,state:n}=t;return DC(e,void 0,n)}function KC(t){let{to:e,replace:n,state:r,relative:i}=t;ks()||X(!1);let{matches:s}=E.useContext(Vr),{pathname:o}=wa(),a=Ea(),l=ec(e,_a(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return E.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function qC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ne.Pop,navigator:s,static:o=!1}=t;ks()&&X(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Yn(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,v=E.useMemo(()=>{let _=As(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:y},navigationType:i}},[a,u,c,h,d,y,i]);return v==null?null:E.createElement(Ps.Provider,{value:l},E.createElement(nc.Provider,{children:n,value:v}))}new Promise(()=>{});function GC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:E.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:E.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Go.apply(this,arguments)}function QC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XC(t,e){return t.button===0&&(!e||e==="_self")&&!YC(t)}const JC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ZC(t,e){return vC({basename:e==null?void 0:e.basename,future:Go({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:jR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||eA(),routes:t,mapRouteProperties:GC}).initialize()}function eA(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Go({},e,{errors:tA(e.errors)})),e}function tA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new gp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const nA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uu=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=QC(e,JC),{basename:d}=E.useContext(Ps),y,v=!1;if(typeof u=="string"&&rA.test(u)&&(y=u,nA))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),p=As(g.pathname,d);g.origin===f.origin&&p!=null?u=p+g.search+g.hash:v=!0}catch{}let _=NC(u,{relative:i}),T=iA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||T(f)}return E.createElement("a",Go({},h,{href:y||_,onClick:v||s?r:m,ref:n,target:l}))});var oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(oy||(oy={}));var ay;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ay||(ay={}));function iA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ea(),l=wa(),u=rw(t,{relative:o});return E.useCallback(c=>{if(XC(c,n)){c.preventDefault();let h=r!==void 0?r:di(l)===di(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function sA(){return C.jsx(C.Fragment,{children:C.jsx("div",{className:qt.contain,children:C.jsxs("div",{className:qt.containMain,children:[C.jsxs("p",{className:qt.param,children:["Welcome! Please let me know ",C.jsx("br",{}),"how i'can help."]}),C.jsx(uu,{to:"/login",type:"button",className:qt.buttonOne,children:"Login"}),C.jsxs("div",{className:qt.and,children:[C.jsx("div",{className:qt.firstline}),C.jsx("p",{className:qt.paramTwo,children:"and"}),C.jsx("div",{className:qt.firstline})]}),C.jsxs("div",{className:qt.signin,children:[C.jsx("p",{className:qt.paramThree,children:"Doesn't has accout yet :"}),C.jsx(uu,{to:"/register",className:qt.paramSignin,children:"Sign up"})]})]})})})}var ow={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(ow);var oA=ow.exports;const We=Fu(oA);function Ud(){return Ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ud.apply(this,arguments)}function aw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ly(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function aA(t){var e=lA(t,"string");return typeof e=="symbol"?e:String(e)}function lA(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uA(t,e,n){var r=E.useRef(t!==void 0),i=E.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,E.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function cA(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[ly(r)],a=s[r],l=aw(s,[ly(r),r].map(aA)),u=e[r],c=uA(a,o,t[u]),h=c[0],d=c[1];return Ud({},l,(i={},i[r]=h,i[u]=d,i))},t)}function jd(t,e){return jd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},jd(t,e)}function hA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,jd(t,e)}const dA=["xxl","xl","lg","md","sm","xs"],fA="xs",vp=E.createContext({prefixes:{},breakpoints:dA,minBreakpoint:fA});function Dt(t,e){const{prefixes:n}=E.useContext(vp);return t||n[e]||e}function pA(){const{breakpoints:t}=E.useContext(vp);return t}function mA(){const{minBreakpoint:t}=E.useContext(vp);return t}function gA(t){return t&&t.ownerDocument||document}function yA(t){var e=gA(t);return e&&e.defaultView||window}function vA(t,e){return yA(t).getComputedStyle(t,e)}var _A=/([A-Z])/g;function wA(t){return t.replace(_A,"-$1").toLowerCase()}var EA=/^ms-/;function ol(t){return wA(t).replace(EA,"-ms-")}var IA=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function TA(t){return!!(t&&IA.test(t))}function lw(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(ol(e))||vA(t).getPropertyValue(ol(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(ol(i)):TA(i)?r+=i+"("+s+") ":n+=ol(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var uw={exports:{}},SA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",RA=SA,CA=RA;function cw(){}function hw(){}hw.resetWarningCache=cw;var AA=function(){function t(r,i,s,o,a,l){if(l!==CA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:hw,resetWarningCache:cw};return n.PropTypes=n,n};uw.exports=AA();var PA=uw.exports;const bn=Fu(PA),uy={disabled:!1},dw=Nn.createContext(null);var kA=function(e){return e.scrollTop},oo="unmounted",Hr="exited",lr="entering",Kr="entered",Bd="exiting",Xn=function(t){hA(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Hr,s.appearStatus=lr):l=Kr:r.unmountOnExit||r.mountOnEnter?l=oo:l=Hr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===oo?{status:Hr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==lr&&o!==Kr&&(s=lr):(o===lr||o===Kr)&&(s=Bd)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===lr){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:so.findDOMNode(this);o&&kA(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Hr&&this.setState({status:oo})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[so.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||uy.disabled){this.safeSetState({status:Kr},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:lr},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Kr},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:so.findDOMNode(this);if(!s||uy.disabled){this.safeSetState({status:Hr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Bd},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Hr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:so.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===oo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=aw(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Nn.createElement(dw.Provider,{value:null},typeof o=="function"?o(i,a):Nn.cloneElement(Nn.Children.only(o),a))},e}(Nn.Component);Xn.contextType=dw;Xn.propTypes={};function Di(){}Xn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Di,onEntering:Di,onEntered:Di,onExit:Di,onExiting:Di,onExited:Di};Xn.UNMOUNTED=oo;Xn.EXITED=Hr;Xn.ENTERING=lr;Xn.ENTERED=Kr;Xn.EXITING=Bd;const NA=Xn,xA=!!(typeof window<"u"&&window.document&&window.document.createElement);var zd=!1,Hd=!1;try{var gh={get passive(){return zd=!0},get once(){return Hd=zd=!0}};xA&&(window.addEventListener("test",gh,gh),window.removeEventListener("test",gh,!0))}catch{}function DA(t,e,n,r){if(r&&typeof r!="boolean"&&!Hd){var i=r.once,s=r.capture,o=n;!Hd&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,zd?r:s)}t.addEventListener(e,n,r)}function OA(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function fw(t,e,n,r){return DA(t,e,n,r),function(){OA(t,e,n,r)}}function LA(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function MA(t){var e=lw(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function VA(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||LA(t,"transitionend",!0)},e+n),s=fw(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function FA(t,e,n,r){n==null&&(n=MA(t)||0);var i=VA(t,n,r),s=fw(t,"transitionend",e);return function(){i(),s()}}function cy(t,e){const n=lw(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function bA(t,e){const n=cy(t,"transitionDuration"),r=cy(t,"transitionDelay"),i=FA(t,s=>{s.target===t&&(i(),e(s))},n+r)}function $A(t){t.offsetHeight}const hy=t=>!t||typeof t=="function"?t:e=>{t.current=e};function UA(t,e){const n=hy(t),r=hy(e);return i=>{n&&n(i),r&&r(i)}}function jA(t,e){return E.useMemo(()=>UA(t,e),[t,e])}function BA(t){return t&&"setState"in t?so.findDOMNode(t):t??null}const zA=Nn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=E.useRef(null),d=jA(h,l),y=k=>{d(BA(k))},v=k=>N=>{k&&h.current&&k(h.current,N)},_=E.useCallback(v(t),[t]),T=E.useCallback(v(e),[e]),m=E.useCallback(v(n),[n]),f=E.useCallback(v(r),[r]),g=E.useCallback(v(i),[i]),p=E.useCallback(v(s),[s]),S=E.useCallback(v(o),[o]);return C.jsx(NA,{ref:c,...u,onEnter:_,onEntered:m,onEntering:T,onExit:f,onExited:p,onExiting:g,addEndListener:S,nodeRef:h,children:typeof a=="function"?(k,N)=>a(k,{...N,ref:y}):Nn.cloneElement(a,{ref:y})})}),HA=zA;function WA(t){const e=E.useRef(t);return E.useEffect(()=>{e.current=t},[t]),e}function pw(t){const e=WA(t);return E.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const KA=["as","disabled"];function qA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GA(t){return!t||t.trim()==="#"}function mw({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&GA(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const QA=E.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=qA(t,KA);const[s,{tagName:o}]=mw(Object.assign({tagName:n,disabled:r},i));return C.jsx(o,Object.assign({},i,s,{ref:e}))});QA.displayName="Button";const YA=["onKeyDown"];function XA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JA(t){return!t||t.trim()==="#"}const gw=E.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=XA(t,YA);const[i]=mw(Object.assign({tagName:"a"},r)),s=pw(o=>{i.onKeyDown(o),n==null||n(o)});return JA(r.href)||r.role==="button"?C.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):C.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});gw.displayName="Anchor";const ZA=gw,eP={[lr]:"show",[Kr]:"show"},yw=E.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=E.useCallback((l,u)=>{$A(l),r==null||r(l,u)},[r]);return C.jsx(HA,{ref:s,addEndListener:bA,...o,onEnter:a,childRef:e.ref,children:(l,u)=>E.cloneElement(e,{...u,className:We("fade",t,e.props.className,eP[l],n[l])})})});yw.displayName="Fade";const dy=yw,tP={"aria-label":bn.string,onClick:bn.func,variant:bn.oneOf(["white"])},_p=E.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>C.jsx("button",{ref:i,type:"button",className:We("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));_p.displayName="CloseButton";_p.propTypes=tP;const nP=_p,rP=t=>E.forwardRef((e,n)=>C.jsx("div",{...e,ref:n,className:We(e.className,t)}));var iP=/-(.)/g;function sP(t){return t.replace(iP,function(e,n){return n.toUpperCase()})}const oP=t=>t[0].toUpperCase()+sP(t).slice(1);function wp(t,{displayName:e=oP(t),Component:n,defaultProps:r}={}){const i=E.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c={...r,...l},h=Dt(o,t);return C.jsx(a,{ref:u,className:We(s,h),...c})});return i.displayName=e,i}const vw=rP("h4");vw.displayName="DivStyledAsH4";const aP=wp("alert-heading",{Component:vw}),lP=wp("alert-link",{Component:ZA}),_w=E.forwardRef((t,e)=>{const{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:s,className:o,children:a,variant:l="primary",onClose:u,dismissible:c,transition:h=dy,...d}=cA(t,{show:"onClose"}),y=Dt(n,"alert"),v=pw(m=>{u&&u(!1,m)}),_=h===!0?dy:h,T=C.jsxs("div",{role:"alert",..._?void 0:d,ref:e,className:We(o,y,l&&`${y}-${l}`,c&&`${y}-dismissible`),children:[c&&C.jsx(nP,{onClick:v,"aria-label":i,variant:s}),a]});return _?C.jsx(_,{unmountOnExit:!0,...d,ref:void 0,in:r,children:T}):r?T:null});_w.displayName="Alert";const ww=Object.assign(_w,{Link:lP,Heading:aP});function uP(t,e){return E.Children.toArray(t).some(n=>E.isValidElement(n)&&n.type===e)}function cP({as:t,bsPrefix:e,className:n,...r}){e=Dt(e,"col");const i=pA(),s=mA(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,h,d;typeof u=="object"&&u!=null?{span:c,offset:h,order:d}=u:c=u;const y=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${y}`:`${e}${y}-${c}`),d!=null&&a.push(`order${y}-${d}`),h!=null&&a.push(`offset${y}-${h}`)}),[{...r,className:We(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const Ew=E.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=cP(t);return C.jsx(i,{...r,ref:e,className:We(n,!o.length&&s)})});Ew.displayName="Col";const hP=Ew,dP={type:bn.string,tooltip:bn.bool,as:bn.elementType},Ep=E.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>C.jsx(t,{...i,ref:s,className:We(e,`${n}-${r?"tooltip":"feedback"}`)}));Ep.displayName="Feedback";Ep.propTypes=dP;const Iw=Ep,fP=E.createContext({}),Wn=fP,Tw=E.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=E.useContext(Wn);return e=Dt(e,"form-check-input"),C.jsx(o,{...a,ref:l,type:r,id:t||u,className:We(n,e,i&&"is-valid",s&&"is-invalid")})});Tw.displayName="FormCheckInput";const Sw=Tw,Rw=E.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=E.useContext(Wn);return t=Dt(t,"form-check-label"),C.jsx("label",{...r,ref:i,htmlFor:n||s,className:We(e,t)})});Rw.displayName="FormCheckLabel";const Wd=Rw,Cw=E.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:h,style:d,title:y="",type:v="checkbox",label:_,children:T,as:m="input",...f},g)=>{e=Dt(e,"form-check"),n=Dt(n,"form-switch");const{controlId:p}=E.useContext(Wn),S=E.useMemo(()=>({controlId:t||p}),[p,t]),k=!T&&_!=null&&_!==!1||uP(T,Wd),N=C.jsx(Sw,{...f,type:v==="switch"?"checkbox":v,ref:g,isValid:o,isInvalid:a,disabled:s,as:m});return C.jsx(Wn.Provider,{value:S,children:C.jsx("div",{style:d,className:We(h,k&&e,r&&`${e}-inline`,i&&`${e}-reverse`,v==="switch"&&n),children:T||C.jsxs(C.Fragment,{children:[N,k&&C.jsx(Wd,{title:y,children:_}),u&&C.jsx(Iw,{type:c,tooltip:l,children:u})]})})})});Cw.displayName="FormCheck";const cu=Object.assign(Cw,{Input:Sw,Label:Wd}),Aw=E.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...h},d)=>{const{controlId:y}=E.useContext(Wn);t=Dt(t,"form-control");let v;return l?v={[`${t}-plaintext`]:!0}:v={[t]:!0,[`${t}-${n}`]:n},C.jsx(c,{...h,type:e,size:r,ref:d,readOnly:u,id:i||y,className:We(s,v,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});Aw.displayName="FormControl";const pP=Object.assign(Aw,{Feedback:Iw}),mP=wp("form-floating"),Pw=E.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=E.useMemo(()=>({controlId:t}),[t]);return C.jsx(Wn.Provider,{value:i,children:C.jsx(e,{...n,ref:r})})});Pw.displayName="FormGroup";const kw=Pw,Nw=E.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=E.useContext(Wn);e=Dt(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=We(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?C.jsx(hP,{ref:a,as:"label",className:c,htmlFor:s,...o}):C.jsx(t,{ref:a,className:c,htmlFor:s,...o})});Nw.displayName="FormLabel";const gP=Nw,xw=E.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=E.useContext(Wn);return t=Dt(t,"form-range"),C.jsx("input",{...r,type:"range",ref:i,className:We(e,t),id:n||s})});xw.displayName="FormRange";const yP=xw,Dw=E.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=E.useContext(Wn);return t=Dt(t,"form-select"),C.jsx("select",{...a,size:n,ref:l,className:We(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});Dw.displayName="FormSelect";const vP=Dw,Ow=E.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=Dt(t,"form-text"),C.jsx(n,{...i,ref:s,className:We(e,t,r&&"text-muted")})));Ow.displayName="FormText";const _P=Ow,Lw=E.forwardRef((t,e)=>C.jsx(cu,{...t,ref:e,type:"switch"}));Lw.displayName="Switch";const wP=Object.assign(Lw,{Input:cu.Input,Label:cu.Label}),Mw=E.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=Dt(t,"form-floating"),C.jsxs(kw,{ref:o,className:We(e,t),controlId:r,...s,children:[n,C.jsx("label",{htmlFor:r,children:i})]})));Mw.displayName="FloatingLabel";const EP=Mw,IP={_ref:bn.any,validated:bn.bool,as:bn.elementType},Ip=E.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>C.jsx(n,{...r,ref:i,className:We(t,e&&"was-validated")}));Ip.displayName="Form";Ip.propTypes=IP;const TP=Object.assign(Ip,{Group:kw,Control:pP,Floating:mP,Check:cu,Switch:wP,Label:gP,Text:_P,Range:yP,Select:vP,FloatingLabel:EP});/**
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
 *//**
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
 */const Vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new RP;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CP=function(t){const e=Vw(t);return Fw.encodeByteArray(e,!0)},hu=function(t){return CP(t).replace(/\./g,"")},bw=function(t){try{return Fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PP=()=>AP().__FIREBASE_DEFAULTS__,kP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bw(t[1]);return e&&JSON.parse(e)},Tp=()=>{try{return PP()||kP()||NP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$w=t=>{var e,n;return(n=(e=Tp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xP=t=>{const e=$w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uw=()=>{var t;return(t=Tp())===null||t===void 0?void 0:t.config},jw=t=>{var e;return(e=Tp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class DP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function OP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hu(JSON.stringify(n)),hu(JSON.stringify(o)),a].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Bw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VP(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zw(){try{return typeof indexedDB=="object"}catch{return!1}}function Hw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function FP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const bP="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bP,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$P(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new an(i,a,r)}}function $P(t,e){return t.replace(UP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UP=/\{\$([^}]+)}/g;function jP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fy(s)&&fy(o)){if(!Qo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BP(t,e){const n=new zP(t,e);return n.subscribe.bind(n)}class zP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yh),i.error===void 0&&(i.error=yh),i.complete===void 0&&(i.complete=yh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yh(){}/**
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
 */const WP=1e3,KP=2,qP=4*60*60*1e3,GP=.5;function py(t,e=WP,n=KP){const r=e*Math.pow(n,t),i=Math.round(GP*r*(Math.random()-.5)*2);return Math.min(qP,r+i)}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class QP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XP(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YP(t){return t===Wr?void 0:t}function XP(t){return t.instantiationMode==="EAGER"}/**
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
 */class JP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const ZP={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},ek=Z.INFO,tk={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},nk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=ek,this._logHandler=nk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const rk=(t,e)=>e.some(n=>t instanceof n);let my,gy;function ik(){return my||(my=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return gy||(gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ww=new WeakMap,Kd=new WeakMap,Kw=new WeakMap,vh=new WeakMap,Sp=new WeakMap;function ok(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ww.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function ak(t){if(Kd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kd.set(t,e)}let qd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lk(t){qd=t(qd)}function uk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_h(this),e,...n);return Kw.set(r,e.sort?e.sort():[e]),Rr(r)}:sk().includes(t)?function(...e){return t.apply(_h(this),e),Rr(Ww.get(this))}:function(...e){return Rr(t.apply(_h(this),e))}}function ck(t){return typeof t=="function"?uk(t):(t instanceof IDBTransaction&&ak(t),rk(t,ik())?new Proxy(t,qd):t)}function Rr(t){if(t instanceof IDBRequest)return ok(t);if(vh.has(t))return vh.get(t);const e=ck(t);return e!==t&&(vh.set(t,e),Sp.set(e,t)),e}const _h=t=>Sp.get(t);function hk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dk=["get","getKey","getAll","getAllKeys","count"],fk=["put","add","delete","clear"],wh=new Map;function yy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wh.get(e))return wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wh.set(e,s),s}lk(t=>({...t,get:(e,n,r)=>yy(e,n)||t.get(e,n,r),has:(e,n)=>!!yy(e,n)||t.has(e,n)}));/**
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
 */class pk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gd="@firebase/app",vy="0.9.18";/**
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
 */const fi=new rc("@firebase/app"),gk="@firebase/app-compat",yk="@firebase/analytics-compat",vk="@firebase/analytics",_k="@firebase/app-check-compat",wk="@firebase/app-check",Ek="@firebase/auth",Ik="@firebase/auth-compat",Tk="@firebase/database",Sk="@firebase/database-compat",Rk="@firebase/functions",Ck="@firebase/functions-compat",Ak="@firebase/installations",Pk="@firebase/installations-compat",kk="@firebase/messaging",Nk="@firebase/messaging-compat",xk="@firebase/performance",Dk="@firebase/performance-compat",Ok="@firebase/remote-config",Lk="@firebase/remote-config-compat",Mk="@firebase/storage",Vk="@firebase/storage-compat",Fk="@firebase/firestore",bk="@firebase/firestore-compat",$k="firebase",Uk="10.3.1";/**
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
 */const Qd="[DEFAULT]",jk={[Gd]:"fire-core",[gk]:"fire-core-compat",[vk]:"fire-analytics",[yk]:"fire-analytics-compat",[wk]:"fire-app-check",[_k]:"fire-app-check-compat",[Ek]:"fire-auth",[Ik]:"fire-auth-compat",[Tk]:"fire-rtdb",[Sk]:"fire-rtdb-compat",[Rk]:"fire-fn",[Ck]:"fire-fn-compat",[Ak]:"fire-iid",[Pk]:"fire-iid-compat",[kk]:"fire-fcm",[Nk]:"fire-fcm-compat",[xk]:"fire-perf",[Dk]:"fire-perf-compat",[Ok]:"fire-rc",[Lk]:"fire-rc-compat",[Mk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Fk]:"fire-fst",[bk]:"fire-fst-compat","fire-js":"fire-js",[$k]:"fire-js-all"};/**
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
 */const du=new Map,Yd=new Map;function Bk(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(Yd.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,t);for(const n of du.values())Bk(n,t);return!0}function Si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new Ti("app","Firebase",zk);/**
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
 */class Hk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=Uk;function qw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=Uw()),!n)throw Cr.create("no-options");const s=du.get(i);if(s){if(Qo(n,s.options)&&Qo(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new JP(i);for(const l of Yd.values())o.addComponent(l);const a=new Hk(n,r,o);return du.set(i,a),a}function Rp(t=Qd){const e=du.get(t);if(!e&&t===Qd&&Uw())return qw();if(!e)throw Cr.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=jk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}In(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wk="firebase-heartbeat-database",Kk=1,Yo="firebase-heartbeat-store";let Eh=null;function Gw(){return Eh||(Eh=hk(Wk,Kk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yo)}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Eh}async function qk(t){try{return await(await Gw()).transaction(Yo).objectStore(Yo).get(Qw(t))}catch(e){if(e instanceof an)fi.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function _y(t,e){try{const r=(await Gw()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,Qw(t)),await r.done}catch(n){if(n instanceof an)fi.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function Qw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Gk=1024,Qk=30*24*60*60*1e3;class Yk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Qk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wy(),{heartbeatsToSend:n,unsentEntries:r}=Xk(this._heartbeatsCache.heartbeats),i=hu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wy(){return new Date().toISOString().substring(0,10)}function Xk(t,e=Gk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ey(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zw()?Hw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ey(t){return hu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Zk(t){In(new sn("platform-logger",e=>new pk(e),"PRIVATE")),In(new sn("heartbeat",e=>new Yk(e),"PRIVATE")),Bt(Gd,vy,t),Bt(Gd,vy,"esm2017"),Bt("fire-js","")}Zk("");function Cp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Iy(t){return t!==void 0&&t.enterprise!==void 0}class eN{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tN=Yw,Xw=new Ti("auth","Firebase",Yw());/**
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
 */const fu=new rc("@firebase/auth");function nN(t,...e){fu.logLevel<=Z.WARN&&fu.warn(`Auth (${Ns}): ${t}`,...e)}function xl(t,...e){fu.logLevel<=Z.ERROR&&fu.error(`Auth (${Ns}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Ap(t,...e)}function wn(t,...e){return Ap(t,...e)}function rN(t,e,n){const r=Object.assign(Object.assign({},tN()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function Ap(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xw.create(t,...e)}function B(t,e,...n){if(!t)throw Ap(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function Kn(t,e){t||On(e)}/**
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
 */function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iN(){return Ty()==="http:"||Ty()==="https:"}function Ty(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iN()||Bw()||"connection"in navigator)?navigator.onLine:!0}function oN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=LP()||MP()}get(){return sN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pp(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lN=new Ta(3e4,6e4);function Ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,i={}){return Zw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ia(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jw.fetch()(eE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aN),e);try{const i=new uN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw al(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rN(t,c,u);on(t,c)}}catch(i){if(i instanceof an)throw i;on(t,"network-request-failed",{message:String(i)})}}async function Sa(t,e,n,r,i={}){const s=await Fr(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function eE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pp(t.config,i):`${t.config.apiScheme}://${i}`}class uN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),lN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}async function cN(t,e){return Fr(t,"GET","/v2/recaptchaConfig",Ri(t,e))}/**
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
 */async function hN(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function dN(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=kp(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(Ih(i.auth_time)),issuedAtTime:Io(Ih(i.iat)),expirationTime:Io(Ih(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ih(t){return Number(t)*1e3}function kp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=bw(n);return i?JSON.parse(i):(xl("Failed to decode base64 JWT payload"),null)}catch(i){return xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pN(t){const e=kp(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&mN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ys(t,dN(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_N(s.providerUserInfo):[],a=vN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yN(t){const e=dt(t);await pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _N(t){return t.map(e=>{var{providerId:n}=e,r=Cp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wN(t,e){const n=await Zw(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=eE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xo;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xo,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function ir(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fN(this,e)}reload(){return yN(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ys(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:S,providerData:k,stsTokenManager:N}=n;B(g&&N,e,"internal-error");const L=Xo.fromJSON(this.name,N);B(typeof g=="string",e,"internal-error"),ir(h,e.name),ir(d,e.name),B(typeof p=="boolean",e,"internal-error"),B(typeof S=="boolean",e,"internal-error"),ir(y,e.name),ir(v,e.name),ir(_,e.name),ir(T,e.name),ir(m,e.name),ir(f,e.name);const Q=new ri({uid:g,auth:e,email:d,emailVerified:p,displayName:h,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:_,stsTokenManager:L,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(Q.providerData=k.map($=>Object.assign({},$))),T&&(Q._redirectEventId=T),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xo;i.updateFromServerResponse(n);const s=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pu(s),s}}/**
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
 */const Sy=new Map;function Ln(t){Kn(t instanceof Function,"Expected a class definition");let e=Sy.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sy.set(t,e),e)}/**
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
 */class nE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nE.type="NONE";const Ry=nE;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(Ln(Ry),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ln(Ry);const o=Dl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ss(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function Cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aE(e))return"Blackberry";if(lE(e))return"Webos";if(Np(e))return"Safari";if((e.includes("chrome/")||iE(e))&&!e.includes("edge/"))return"Chrome";if(oE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rE(t=ht()){return/firefox\//i.test(t)}function Np(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iE(t=ht()){return/crios\//i.test(t)}function sE(t=ht()){return/iemobile/i.test(t)}function oE(t=ht()){return/android/i.test(t)}function aE(t=ht()){return/blackberry/i.test(t)}function lE(t=ht()){return/webos/i.test(t)}function ic(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EN(t=ht()){var e;return ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IN(){return VP()&&document.documentMode===10}function uE(t=ht()){return ic(t)||oE(t)||lE(t)||aE(t)||/windows phone/i.test(t)||sE(t)}function TN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cE(t,e=[]){let n;switch(t){case"Browser":n=Cy(ht());break;case"Worker":n=`${Cy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */class SN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RN(t,e={}){return Fr(t,"GET","/v2/passwordPolicy",Ri(t,e))}/**
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
 */const CN=6;class AN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class PN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new SN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RN(this),n=new AN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(t){return dt(t)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=BP(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function kN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kN().appendChild(r)})}function NN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xN="https://www.google.com/recaptcha/enterprise.js?render=",DN="recaptcha-enterprise",ON="NO_RECAPTCHA";class LN{constructor(e){this.type=DN,this.auth=Ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Iy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ON)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Iy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hE(xN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function mu(t,e,n,r=!1){const i=new LN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function MN(t,e){const n=Si(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qo(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function VN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FN(t,e,n){const r=Ci(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=dE(e),{host:o,port:a}=bN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$N()}function dE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bN(t){const e=dE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Py(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Py(o)}}}function Py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $N(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function UN(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Th(t,e){return Sa(t,"POST","/v1/accounts:signInWithPassword",Ri(t,e))}/**
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
 */async function jN(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}async function BN(t,e){return Sa(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}/**
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
 */class Jo extends xp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await mu(e,r,"signInWithPassword");return Th(e,i)}else return Th(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await mu(e,r,"signInWithPassword");return Th(e,s)}else return Promise.reject(i)});case"emailLink":return jN(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BN(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return Sa(t,"POST","/v1/accounts:signInWithIdp",Ri(t,e))}/**
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
 */const zN="http://localhost";class pi extends xp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:zN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
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
 */function HN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WN(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class Dp{constructor(e){var n,r,i,s,o,a;const l=ao(lo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=HN((i=l.mode)!==null&&i!==void 0?i:null);B(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WN(e);try{return new Dp(n)}catch{return null}}}/**
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
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dp.parseLink(n);return B(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ra extends fE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Ra{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class dr extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
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
 */class fr extends Ra{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class pr extends Ra{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */async function Sh(t,e){return Sa(t,"POST","/v1/accounts:signUp",Ri(t,e))}/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ri._fromIdTokenResponse(e,r,i),o=ky(r);return new mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ky(r);return new mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gu extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gu(e,n,r,i)}}function pE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(t,s,e,r):s})}async function KN(t,e,n=!1){const r=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
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
 */async function qN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ys(t,pE(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=kp(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
 */async function mE(t,e,n=!1){const r="signIn",i=await pE(t,r,e),s=await mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function GN(t,e){return mE(Ci(t),e)}/**
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
 */async function gE(t){const e=Ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QN(t,e,n){var r;const i=Ci(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await mu(i,s,"signUpPassword");o=Sh(i,u)}else o=Sh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await mu(i,s,"signUpPassword");return Sh(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gE(t),u}),l=await mi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function YN(t,e,n){return GN(dt(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gE(t),r})}/**
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
 */async function XN(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function JN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ys(r,XN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ZN(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function ex(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function tx(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function nx(t){return dt(t).signOut()}const yu="__sak";/**
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
 */class yE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rx(){const t=ht();return Np(t)||ic(t)}const ix=1e3,sx=10;class vE extends yE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rx()&&TN(),this.fallbackToPolling=uE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vE.type="LOCAL";const ox=vE;/**
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
 */class _E extends yE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_E.type="SESSION";const wE=_E;/**
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
 */function ax(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ax(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function Op(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Op("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function ux(t){En().location.href=t}/**
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
 */function EE(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dx(){return EE()?self:null}/**
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
 */const IE="firebaseLocalStorageDb",fx=1,vu="firebaseLocalStorage",TE="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function px(){const t=indexedDB.deleteDatabase(IE);return new Ca(t).toPromise()}function Jd(){const t=indexedDB.open(IE,fx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vu,{keyPath:TE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vu)?e(r):(r.close(),await px(),e(await Jd()))})})}async function Ny(t,e,n){const r=oc(t,!0).put({[TE]:e,value:n});return new Ca(r).toPromise()}async function mx(t,e){const n=oc(t,!1).get(e),r=await new Ca(n).toPromise();return r===void 0?null:r.value}function xy(t,e){const n=oc(t,!0).delete(e);return new Ca(n).toPromise()}const gx=800,yx=3;class SE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return EE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(dx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cx(),!this.activeServiceWorker)return;this.sender=new lx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await Ny(e,yu,"1"),await xy(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oc(i,!1).getAll();return new Ca(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SE.type="LOCAL";const vx=SE;new Ta(3e4,6e4);/**
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
 */function _x(t,e){return e?Ln(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lp extends xp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wx(t){return mE(t.auth,new Lp(t),t.bypassAuthState)}function Ex(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),qN(n,new Lp(t),t.bypassAuthState)}async function Ix(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),KN(n,new Lp(t),t.bypassAuthState)}/**
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
 */class RE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wx;case"linkViaPopup":case"linkViaRedirect":return Ix;case"reauthViaPopup":case"reauthViaRedirect":return Ex;default:on(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tx=new Ta(2e3,1e4);class Yi extends RE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tx.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const Sx="pendingRedirect",Ol=new Map;class Rx extends RE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await Cx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cx(t,e){const n=kx(e),r=Px(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ax(t,e){Ol.set(t._key(),e)}function Px(t){return Ln(t._redirectPersistence)}function kx(t){return Dl(Sx,t.config.apiKey,t.name)}async function Nx(t,e,n=!1){const r=Ci(t),i=_x(r,e),o=await new Rx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xx=10*60*1e3;class Dx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ox(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ox(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CE(t);default:return!1}}/**
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
 */async function Lx(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
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
 */const Mx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vx=/^https?/;async function Fx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lx(t);for(const n of e)try{if(bx(n))return}catch{}on(t,"unauthorized-domain")}function bx(t){const e=Xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vx.test(n))return!1;if(Mx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $x=new Ta(3e4,6e4);function Oy(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ux(t){return new Promise((e,n)=>{var r,i,s;function o(){Oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oy(),n(wn(t,"network-request-failed"))},timeout:$x.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=NN("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},hE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function jx(t){return Ll=Ll||Ux(t),Ll}/**
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
 */const Bx=new Ta(5e3,15e3),zx="__/auth/iframe",Hx="emulator/auth/iframe",Wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qx(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pp(e,Hx):`https://${t.config.authDomain}/${zx}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},i=Kx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ia(r).slice(1)}`}async function Gx(t){const e=await jx(t),n=En().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:qx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},Bx.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Qx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yx=500,Xx=600,Jx="_blank",Zx="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eD(t,e,n,r=Yx,i=Xx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ht().toLowerCase();n&&(a=iE(u)?Jx:n),rE(u)&&(e=e||Zx,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,v])=>`${d}${y}=${v},`,"");if(EN(u)&&a!=="_self")return tD(e||"",a),new Ly(null);const h=window.open(e||"",a,c);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Ly(h)}function tD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nD="__/auth/handler",rD="emulator/auth/handler",iD=encodeURIComponent("fac");async function My(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:i};if(e instanceof fE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ra){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${iD}=${encodeURIComponent(l)}`:"";return`${sD(t)}?${Ia(a).slice(1)}${u}`}function sD({config:t}){return t.emulator?Pp(t,rD):`https://${t.authDomain}/${nD}`}/**
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
 */const Rh="webStorageSupport";class oD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wE,this._completeRedirectFn=Nx,this._overrideRedirectResult=Ax}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await My(e,n,r,Xd(),i);return eD(e,o,Op())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await My(e,n,r,Xd(),i);return ux(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gx(e),r=new Dx(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rh,{type:Rh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rh];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uE()||Np()||ic()}}const aD=oD;var Vy="@firebase/auth",Fy="1.3.0";/**
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
 */class lD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cD(t){In(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cE(t)},u=new PN(r,i,s,l);return VN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new sn("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new lD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Vy,Fy,uD(t)),Bt(Vy,Fy,"esm2017")}/**
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
 */const hD=5*60,dD=jw("authIdTokenMaxAge")||hD;let by=null;const fD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dD)return;const i=n==null?void 0:n.token;by!==i&&(by=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pD(t=Rp()){const e=Si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MN(t,{popupRedirectResolver:aD,persistence:[vx,ox,wE]}),r=jw("authTokenSyncURL");if(r){const s=fD(r);ex(n,s,()=>s(n.currentUser)),ZN(n,o=>s(o))}const i=$w("auth");return i&&FN(n,`http://${i}`),n}cD("Browser");var mD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Mp=Mp||{},H=mD||self;function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Aa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gD(t){return Object.prototype.hasOwnProperty.call(t,Ch)&&t[Ch]||(t[Ch]=++yD)}var Ch="closure_uid_"+(1e9*Math.random()>>>0),yD=0;function vD(t,e,n){return t.call.apply(t.bind,arguments)}function _D(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=vD:lt=_D,lt.apply(null,arguments)}function ll(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function br(){this.s=this.s,this.o=this.o}var wD=0;br.prototype.s=!1;br.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wD!=0)&&gD(this)};br.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const AE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $y(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ac(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var ED=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function Zo(t){return/^[\s\xa0]*$/.test(t)}function lc(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return lc().indexOf(t)!=-1}function Fp(t){return Fp[" "](t),t}Fp[" "]=function(){};function ID(t,e){var n=pO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var TD=mn("Opera"),vs=mn("Trident")||mn("MSIE"),PE=mn("Edge"),Zd=PE||vs,kE=mn("Gecko")&&!(lc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),SD=lc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function NE(){var t=H.document;return t?t.documentMode:void 0}var ef;e:{var Ah="",Ph=function(){var t=lc();if(kE)return/rv:([^\);]+)(\)|;)/.exec(t);if(PE)return/Edge\/([\d\.]+)/.exec(t);if(vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SD)return/WebKit\/(\S+)/.exec(t);if(TD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ph&&(Ah=Ph?Ph[1]:""),vs){var kh=NE();if(kh!=null&&kh>parseFloat(Ah)){ef=String(kh);break e}}ef=Ah}var tf;if(H.document&&vs){var Uy=NE();tf=Uy||parseInt(ef,10)||void 0}else tf=void 0;var RD=tf;function ea(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kE){e:{try{Fp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ea.$.h.call(this)}}Ke(ea,ut);var CD={2:"touch",3:"pen",4:"mouse"};ea.prototype.h=function(){ea.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pa="closure_listenable_"+(1e6*Math.random()|0),AD=0;function PD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++AD,this.fa=this.ia=!1}function uc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xE(t){const e={};for(const n in t)e[n]=t[n];return e}const jy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function DE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<jy.length;s++)n=jy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cc(t){this.src=t,this.g={},this.h=0}cc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new PD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function nf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=AE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(uc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var $p="closure_lm_"+(1e6*Math.random()|0),Nh={};function OE(t,e,n,r,i){if(r&&r.once)return ME(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)OE(t,e[s],n,r,i);return null}return n=Bp(n),t&&t[Pa]?t.O(e,n,Aa(r)?!!r.capture:!!r,i):LE(t,e,n,!1,r,i)}function LE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Aa(i)?!!i.capture:!!i,a=jp(t);if(a||(t[$p]=a=new cc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ND(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ED||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(FE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ND(){function t(n){return e.call(t.src,t.listener,n)}const e=xD;return t}function ME(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ME(t,e[s],n,r,i);return null}return n=Bp(n),t&&t[Pa]?t.P(e,n,Aa(r)?!!r.capture:!!r,i):LE(t,e,n,!0,r,i)}function VE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)VE(t,e[s],n,r,i);else r=Aa(r)?!!r.capture:!!r,n=Bp(n),t&&t[Pa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rf(s,n,r,i),-1<n&&(uc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rf(e,n,r,i)),(n=-1<t?e[t]:null)&&Up(n))}function Up(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pa])nf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(FE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jp(e))?(nf(n,t),n.h==0&&(n.src=null,e[$p]=null)):uc(t)}}}function FE(t){return t in Nh?Nh[t]:Nh[t]="on"+t}function xD(t,e){if(t.fa)t=!0;else{e=new ea(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Up(t),t=n.call(r,e)}return t}function jp(t){return t=t[$p],t instanceof cc?t:null}var xh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bp(t){return typeof t=="function"?t:(t[xh]||(t[xh]=function(e){return t.handleEvent(e)}),t[xh])}function ze(){br.call(this),this.i=new cc(this),this.S=this,this.J=null}Ke(ze,br);ze.prototype[Pa]=!0;ze.prototype.removeEventListener=function(t,e,n,r){VE(this,t,e,n,r)};function Ze(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),DE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ul(o,r,!0,e)&&i}if(o=e.g=t,i=ul(o,r,!0,e)&&i,i=ul(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ul(o,r,!1,e)&&i}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)uc(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ul(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&nf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zp=H.JSON.stringify;class DD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function OD(){var t=Hp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LD{constructor(){this.h=this.g=null}add(e,n){const r=bE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bE=new DD(()=>new MD,t=>t.reset());class MD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function FD(t){H.setTimeout(()=>{throw t},0)}let ta,na=!1,Hp=new LD,$E=()=>{const t=H.Promise.resolve(void 0);ta=()=>{t.then(bD)}};var bD=()=>{for(var t;t=OD();){try{t.h.call(t.g)}catch(n){FD(n)}var e=bE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}na=!1};function hc(t,e){ze.call(this),this.h=t||1,this.g=e||H,this.j=lt(this.qb,this),this.l=Date.now()}Ke(hc,ze);D=hc.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(Wp(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){hc.$.N.call(this),Wp(this),delete this.g};function Kp(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function UE(t){t.g=Kp(()=>{t.g=null,t.i&&(t.i=!1,UE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $D extends br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:UE(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ra(t){br.call(this),this.h=t,this.g={}}Ke(ra,br);var By=[];function jE(t,e,n,r){Array.isArray(n)||(n&&(By[0]=n.toString()),n=By);for(var i=0;i<n.length;i++){var s=OE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function BE(t){bp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Up(e)},t),t.g={}}ra.prototype.N=function(){ra.$.N.call(this),BE(this)};ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dc(){this.g=!0}dc.prototype.Ea=function(){this.g=!1};function UD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zD(t,n)+(r?" "+r:"")})}function BD(t,e){t.info(function(){return"TIMEOUT: "+e})}dc.prototype.info=function(){};function zD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zp(n)}catch{return e}}var Ai={},zy=null;function fc(){return zy=zy||new ze}Ai.Ta="serverreachability";function zE(t){ut.call(this,Ai.Ta,t)}Ke(zE,ut);function ia(t){const e=fc();Ze(e,new zE(e))}Ai.STAT_EVENT="statevent";function HE(t,e){ut.call(this,Ai.STAT_EVENT,t),this.stat=e}Ke(HE,ut);function pt(t){const e=fc();Ze(e,new HE(e,t))}Ai.Ua="timingevent";function WE(t,e){ut.call(this,Ai.Ua,t),this.size=e}Ke(WE,ut);function ka(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var pc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},KE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qp(){}qp.prototype.h=null;function Hy(t){return t.h||(t.h=t.i())}function qE(){}var Na={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gp(){ut.call(this,"d")}Ke(Gp,ut);function Qp(){ut.call(this,"c")}Ke(Qp,ut);var sf;function mc(){}Ke(mc,qp);mc.prototype.g=function(){return new XMLHttpRequest};mc.prototype.i=function(){return{}};sf=new mc;function xa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ra(this),this.P=HD,t=Zd?125:void 0,this.V=new hc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new GE}function GE(){this.i=null,this.g="",this.h=!1}var HD=45e3,of={},_u={};D=xa.prototype;D.setTimeout=function(t){this.P=t};function af(t,e,n){t.L=1,t.v=yc(qn(e)),t.s=n,t.S=!0,QE(t,null)}function QE(t,e){t.G=Date.now(),Da(t),t.A=qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),r1(n.i,"t",r),t.C=0,n=t.l.J,t.h=new GE,t.g=S1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $D(lt(t.Pa,t,t.g),t.O)),jE(t.U,t.g,"readystatechange",t.nb),e=t.I?xE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ia(),UD(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=gn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Zd||this.g&&(this.h.h||this.g.ja()||Gy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ia(3):ia(2)),gc(this);var n=this.g.da();this.ca=n;t:if(YE(this)){var r=Gy(this.g);t="";var i=r.length,s=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),To(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zo(a)){var u=a;break t}}u=null}if(n=u)Xi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lf(this,n);else{this.i=!1,this.o=3,pt(12),Xr(this),To(this);break e}}this.S?(XE(this,c,o),Zd&&this.i&&c==3&&(jE(this.U,this.V,"tick",this.mb),this.V.start())):(Xi(this.j,this.m,o,null),lf(this,o)),c==4&&Xr(this),this.i&&!this.J&&(c==4?w1(this.l,this):(this.i=!1,Da(this)))}else hO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Xr(this),To(this)}}}catch{}finally{}};function YE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function XE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=WD(t,n),i==_u){e==4&&(t.o=4,pt(14),r=!1),Xi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==of){t.o=4,pt(15),Xi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xi(t.j,t.m,i,null),lf(t,i);YE(t)&&i!=_u&&i!=of&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tm(e),e.M=!0,pt(11))):(Xi(t.j,t.m,n,"[Invalid Chunked Response]"),Xr(t),To(t))}D.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.C<e.length&&(gc(this),XE(this,t,e),this.i&&t!=4&&Da(this))}};function WD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?_u:(n=Number(e.substring(n,r)),isNaN(n)?of:(r+=1,r+n>e.length?_u:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,Xr(this)};function Da(t){t.Y=Date.now()+t.P,JE(t,t.P)}function JE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ka(lt(t.lb,t),e)}function gc(t){t.B&&(H.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(BD(this.j,this.A),this.L!=2&&(ia(),pt(17)),Xr(this),this.o=2,To(this)):JE(this,this.Y-t)};function To(t){t.l.H==0||t.J||w1(t.l,t)}function Xr(t){gc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wp(t.V),BE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function lf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||uf(n.i,t))){if(!t.K&&uf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Iu(n),Ec(n);else break e;em(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ka(lt(n.ib,n),6e3));if(1>=o1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jr(n,11)}else if((t.K||n.g==t)&&Iu(n),!Zo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Yp(s,s.h),s.h=null))}if(r.F){const _=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,fe(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=T1(r,r.J?r.pa:null,r.Y),o.K){a1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(gc(a),Da(a)),r.g=o}else v1(r);0<n.j.length&&Ic(n)}else u[0]!="stop"&&u[0]!="close"||Jr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jr(n,7):Zp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ia(4)}catch{}}function KD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ac(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ZE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qD(t),r=KD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var e1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ii(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ii){this.h=t.h,wu(this,t.j),this.s=t.s,this.g=t.g,Eu(this,t.m),this.l=t.l;var e=t.i,n=new sa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wy(this,n),this.o=t.o}else t&&(e=String(t).match(e1))?(this.h=!1,wu(this,e[1]||"",!0),this.s=uo(e[2]||""),this.g=uo(e[3]||"",!0),Eu(this,e[4]),this.l=uo(e[5]||"",!0),Wy(this,e[6]||"",!0),this.o=uo(e[7]||"")):(this.h=!1,this.i=new sa(null,this.h))}ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(co(e,Ky,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(co(e,Ky,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(co(n,n.charAt(0)=="/"?XD:YD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",co(n,ZD)),t.join("")};function qn(t){return new ii(t)}function wu(t,e,n){t.j=n?uo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wy(t,e,n){e instanceof sa?(t.i=e,eO(t.i,t.h)):(n||(e=co(e,JD)),t.i=new sa(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function yc(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function uo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function co(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ky=/[#\/\?@]/g,YD=/[#\?:]/g,XD=/[#\?]/g,JD=/[#\?@]/g,ZD=/#/g;function sa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&GD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=sa.prototype;D.add=function(t,e){$r(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function t1(t,e){$r(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function n1(t,e){return $r(t),e=Ds(t,e),t.g.has(e)}D.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){$r(this);let e=[];if(typeof t=="string")n1(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return $r(this),this.i=null,t=Ds(this,t),n1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function r1(t,e,n){t1(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),Vp(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eO(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(t1(this,r),r1(this,i,n))},t)),t.j=e}var tO=class{constructor(t,e){this.g=t,this.map=e}};function i1(t){this.l=t||nO,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nO=10;function s1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function o1(t){return t.h?1:t.g?t.g.size:0}function uf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yp(t,e){t.g?t.g.add(e):t.h=e}function a1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}i1.prototype.cancel=function(){if(this.i=l1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function l1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vp(t.i)}var rO=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function iO(){this.g=new rO}function sO(t,e,n){const r=n||"";try{ZE(t,function(i,s){let o=i;Aa(i)&&(o=zp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oO(t,e){const n=new dc;if(H.Image){const r=new Image;r.onload=ll(cl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ll(cl,n,r,"TestLoadImage: error",!1,e),r.onabort=ll(cl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ll(cl,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function cl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function vc(t){this.l=t.fc||null,this.j=t.ob||!1}Ke(vc,qp);vc.prototype.g=function(){return new _c(this.l,this.j)};vc.prototype.i=function(t){return function(){return t}}({});function _c(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(_c,ze);var Xp=0;D=_c.prototype;D.open=function(t,e){if(this.readyState!=Xp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oa(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oa(this)),this.readyState=Xp};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oa(this)),this.g&&(this.readyState=3,oa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;u1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function u1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oa(this):oa(this),this.readyState==3&&u1(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,Oa(this))};D.Ya=function(t){this.g&&(this.response=t,Oa(this))};D.ka=function(){this.g&&Oa(this)};function Oa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oa(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_c.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aO=H.JSON.parse;function Se(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=c1,this.L=this.M=!1}Ke(Se,ze);var c1="",lO=/^https?$/i,uO=["POST","PUT"];D=Se.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sf.g(),this.C=this.u?Hy(this.u):Hy(sf),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){qy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=AE(uO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{f1(this),0<this.B&&((this.L=cO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=Kp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){qy(this,s)}};function cO(t){return vs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Mp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,h1(t),wc(t)}function h1(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),wc(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wc(this,!0)),Se.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?d1(this):this.kb())};D.kb=function(){d1(this)};function d1(t){if(t.h&&typeof Mp<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)Kp(t.La,0,t);else if(Ze(t,"readystatechange"),gn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(e1)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!lO.test(i?i.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var s=2<gn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",h1(t)}}finally{wc(t)}}}}function wc(t,e){if(t.g){f1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function f1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function gn(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aO(e)}};function Gy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case c1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hO(t){const e={};t=(t.g&&2<=gn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Zo(t[r]))continue;var n=VD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}kD(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function p1(t){let e="";return bp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Jp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=p1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function m1(t){this.Ga=0,this.j=[],this.l=new dc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xs("baseRetryDelayMs",5e3,t),this.hb=Xs("retryDelaySeedMs",1e4,t),this.eb=Xs("forwardChannelMaxRetries",2,t),this.xa=Xs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new i1(t&&t.concurrentRequestLimit),this.Ja=new iO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=m1.prototype;D.ra=8;D.H=1;function Zp(t){if(g1(t),t.H==3){var e=t.W++,n=qn(t.I);if(fe(n,"SID",t.K),fe(n,"RID",e),fe(n,"TYPE","terminate"),La(t,n),e=new xa(t,t.l,e),e.L=2,e.v=yc(qn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=S1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Da(e)}I1(t)}function Ec(t){t.g&&(tm(t),t.g.cancel(),t.g=null)}function g1(t){Ec(t),t.u&&(H.clearTimeout(t.u),t.u=null),Iu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Ic(t){if(!s1(t.i)&&!t.m){t.m=!0;var e=t.Na;ta||$E(),na||(ta(),na=!0),Hp.add(e,t),t.C=0}}function dO(t,e){return o1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ka(lt(t.Na,t,e),E1(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xE(s),DE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=y1(this,i,e),n=qn(this.I),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),La(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(p1(s)))+"&"+e:this.o&&Jp(n,this.o,s)),Yp(this.i,i),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),i.aa=!0,af(i,n,null)):af(i,n,e),this.H=2}}else this.H==3&&(t?Qy(this,t):this.j.length==0||s1(this.i)||Qy(this))};function Qy(t,e){var n;e?n=e.m:n=t.W++;const r=qn(t.I);fe(r,"SID",t.K),fe(r,"RID",n),fe(r,"AID",t.V),La(t,r),t.o&&t.s&&Jp(r,t.o,t.s),n=new xa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=y1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yp(t.i,n),af(n,r,e)}function La(t,e){t.na&&bp(t.na,function(n,r){fe(e,r,n)}),t.h&&ZE({},function(n,r){fe(e,r,n)})}function y1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?lt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{sO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function v1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ta||$E(),na||(ta(),na=!0),Hp.add(e,t),t.A=0}}function em(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ka(lt(t.Ma,t),E1(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,_1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ka(lt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),Ec(this),_1(this))};function tm(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function _1(t){t.g=new xa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=qn(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.K),fe(e,"AID",t.V),fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&fe(e,"TO",t.qa),fe(e,"TYPE","xmlhttp"),La(t,e),t.o&&t.s&&Jp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=yc(qn(e)),n.s=null,n.S=!0,QE(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Ec(this),em(this),pt(19))};function Iu(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function w1(t,e){var n=null;if(t.g==e){Iu(t),tm(t),t.g=null;var r=2}else if(uf(t.i,e))n=e.F,a1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=fc(),Ze(r,new WE(r,n)),Ic(t)}else v1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&dO(t,e)||r==2&&em(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function E1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=lt(t.pb,t);n||(n=new ii("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||wu(n,"https"),yc(n)),oO(n.toString(),r)}else pt(2);t.H=0,t.h&&t.h.za(e),I1(t),g1(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function I1(t){if(t.H=0,t.ma=[],t.h){const e=l1(t.i);(e.length!=0||t.j.length!=0)&&($y(t.ma,e),$y(t.ma,t.j),t.i.i.length=0,Vp(t.j),t.j.length=0),t.h.ya()}}function T1(t,e,n){var r=n instanceof ii?qn(n):new ii(n);if(r.g!="")e&&(r.g=e+"."+r.g),Eu(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ii(null);r&&wu(s,r),e&&(s.g=e),i&&Eu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.ra),La(t,r),r}function S1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new vc({ob:!0})):new Se(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function R1(){}D=R1.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Tu(){if(vs&&!(10<=Number(RD)))throw Error("Environmental error: no available transport.")}Tu.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){ze.call(this),this.g=new m1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Os(this)}Ke(Ot,ze);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=T1(t,null,t.Y),Ic(t)};Ot.prototype.close=function(){Zp(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zp(t),t=n);e.j.push(new tO(e.fb++,t)),e.H==3&&Ic(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,Zp(this.g),delete this.g,Ot.$.N.call(this)};function C1(t){Gp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(C1,Gp);function A1(){Qp.call(this),this.status=1}Ke(A1,Qp);function Os(t){this.g=t}Ke(Os,R1);Os.prototype.Ba=function(){Ze(this.g,"a")};Os.prototype.Aa=function(t){Ze(this.g,new C1(t))};Os.prototype.za=function(t){Ze(this.g,new A1)};Os.prototype.ya=function(){Ze(this.g,"b")};function fO(){this.blockSize=-1}function Tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(Tn,fO);Tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Dh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Dh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Dh(this,r),i=0;break}}this.h=i,this.i+=e};Tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var pO={};function nm(t){return-128<=t&&128>t?ID(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function yn(t){if(isNaN(t)||!isFinite(t))return as;if(0>t)return Xe(yn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=cf;return new ie(e,0)}function P1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(P1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yn(Math.pow(e,8)),r=as,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=yn(Math.pow(e,s)),r=r.R(s).add(yn(o))):(r=r.R(n),r=r.add(yn(o)))}return r}var cf=4294967296,as=nm(0),hf=nm(1),Yy=nm(16777216);D=ie.prototype;D.ea=function(){if($t(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:cf+r)*e,e*=cf}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Mn(this))return"0";if($t(this))return"-"+Xe(this).toString(t);for(var e=yn(Math.pow(t,6)),n=this,r="";;){var i=Ru(n,e).g;n=Su(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Mn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $t(t){return t.h==-1}D.X=function(t){return t=Su(this,t),$t(t)?-1:Mn(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(hf)}D.abs=function(){return $t(this)?Xe(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function Su(t,e){return t.add(Xe(e))}D.R=function(t){if(Mn(this)||Mn(t))return as;if($t(this))return $t(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if($t(t))return Xe(this.R(Xe(t)));if(0>this.X(Yy)&&0>t.X(Yy))return yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,hl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,hl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,hl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,hl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function hl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Js(t,e){this.g=t,this.h=e}function Ru(t,e){if(Mn(e))throw Error("division by zero");if(Mn(t))return new Js(as,as);if($t(t))return e=Ru(Xe(t),e),new Js(Xe(e.g),Xe(e.h));if($t(e))return e=Ru(t,Xe(e)),new Js(Xe(e.g),e.h);if(30<t.g.length){if($t(t)||$t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=hf,r=e;0>=r.X(t);)n=Xy(n),r=Xy(r);var i=Oi(n,1),s=Oi(r,1);for(r=Oi(r,2),n=Oi(n,2);!Mn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Oi(r,1),n=Oi(n,1)}return e=Su(t,i.R(e)),new Js(i,e)}for(i=as;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yn(n),o=s.R(e);$t(o)||0<o.X(t);)n-=r,s=yn(n),o=s.R(e);Mn(s)&&(s=hf),i=i.add(s),t=Su(t,o)}return new Js(i,t)}D.gb=function(t){return Ru(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function Xy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function Oi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Tu.prototype.createWebChannel=Tu.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;pc.NO_ERROR=0;pc.TIMEOUT=8;pc.HTTP_ERROR=6;KE.COMPLETE="complete";qE.EventType=Na;Na.OPEN="a";Na.CLOSE="b";Na.ERROR="c";Na.MESSAGE="d";ze.prototype.listen=ze.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;Tn.prototype.digest=Tn.prototype.l;Tn.prototype.reset=Tn.prototype.reset;Tn.prototype.update=Tn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=yn;ie.fromString=P1;var mO=function(){return new Tu},gO=function(){return fc()},Oh=pc,yO=KE,vO=Ai,Jy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dl=qE,_O=Se,wO=ie;const Zy="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Ls="10.3.1";/**
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
 */const gi=new rc("@firebase/firestore");function Zs(){return gi.logLevel}function b(t,...e){if(gi.logLevel<=Z.DEBUG){const n=e.map(rm);gi.debug(`Firestore (${Ls}): ${t}`,...n)}}function yi(t,...e){if(gi.logLevel<=Z.ERROR){const n=e.map(rm);gi.error(`Firestore (${Ls}): ${t}`,...n)}}function Cu(t,...e){if(gi.logLevel<=Z.WARN){const n=e.map(rm);gi.warn(`Firestore (${Ls}): ${t}`,...n)}}function rm(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw yi(e),new Error(e)}function He(t,e){t||ee()}function me(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class si{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class k1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class IO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TO{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new si;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new si,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new si)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string"),new k1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string"),new it(e)}}class SO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string"),this.R=n.token,new CO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function PO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class N1{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Be(0,0))}static max(){return new _e(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class aa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof aa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends aa{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const kO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends aa{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return kO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(xe.fromString(e))}static fromName(e){return new Y(xe.fromString(e).popFirst(5))}static empty(){return new Y(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new xe(e.slice()))}}function NO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=_e.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Nr(i,Y.empty(),e)}function xO(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(_e.min(),Y.empty(),-1)}static max(){return new Nr(_e.max(),Y.empty(),-1)}}function DO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const OO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function x1(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==OO)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Tc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class D1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}D1.ae=-1;function im(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function MO(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ev(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ma(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function O1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Rt{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tv(this.data.getIterator())}getIteratorFrom(e){return new tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class en{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new en([])}unionWith(e){let n=new gt(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VO("Invalid base64 string: "+s):s}}(e);return new Gn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Gn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gn.EMPTY_BYTE_STRING=new Gn("");const FO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(t){if(He(!!t),typeof t=="string"){let e=0;const n=FO.exec(t);if(He(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function la(t){return typeof t=="string"?Gn.fromBase64String(t):Gn.fromUint8Array(t)}/**
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
 */function sm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function L1(t){const e=t.mapValue.fields.__previous_value__;return sm(e)?L1(e):e}function Pu(t){const e=vi(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class bO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ku{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ku("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ku&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sm(t)?4:$O(t)?9007199254740991:10:ee()}function Sn(t,e){if(t===e)return!0;const n=ws(t);if(n!==ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pu(t).isEqual(Pu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vi(i.timestampValue),a=vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return la(i.bytesValue).isEqual(la(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ye(i.doubleValue),a=Ye(s.doubleValue);return o===a?Au(o)===Au(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ev(o)!==ev(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Sn(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function ua(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=ws(t),r=ws(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ye(s.integerValue||s.doubleValue),l=Ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return nv(t.timestampValue,e.timestampValue);case 4:return nv(Pu(t),Pu(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=la(s),l=la(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Ye(s.latitude),Ye(o.latitude));return a!==0?a:ce(Ye(s.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Es(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===pl.mapValue&&o===pl.mapValue)return 0;if(s===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ce(l[h],c[h]);if(d!==0)return d;const y=Es(a[l[h]],u[c[h]]);if(y!==0)return y}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ee()}}function nv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=vi(t),r=vi(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Is(t){return df(t)}function df(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return la(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=df(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${df(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function ff(t){return!!t&&"integerValue"in t}function om(t){return!!t&&"arrayValue"in t}function Ml(t){return!!t&&"mapValue"in t}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ma(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $O(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=So(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ma(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(So(this.value))}}function M1(t){const e=[];return Ma(t.fields,(n,r)=>{const i=new at([n]);if(Ml(r)){const s=M1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
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
 */class Jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Jt(e,0,_e.min(),_e.min(),_e.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Jt(e,1,n,_e.min(),r,i,0)}static newNoDocument(e,n){return new Jt(e,2,n,_e.min(),_e.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,_e.min(),_e.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nu{constructor(e,n){this.position=e,this.inclusive=n}}function rv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function iv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function UO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class V1{}class Ue extends V1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BO(e,n,r):n==="array-contains"?new WO(e,r):n==="in"?new KO(e,r):n==="not-in"?new qO(e,r):n==="array-contains-any"?new GO(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zO(e,r):new HO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&ws(this.value)===ws(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xr extends V1{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new xr(e,n)}matches(e){return F1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function F1(t){return t.op==="and"}function b1(t){return jO(t)&&F1(t)}function jO(t){for(const e of t.filters)if(e instanceof xr)return!1;return!0}function pf(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(b1(t))return t.filters.map(e=>pf(e)).join(",");{const e=t.filters.map(n=>pf(n)).join(",");return`${t.op}(${e})`}}function $1(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof xr?function(r,i){return i instanceof xr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$1(o,i.filters[a]),!0):!1}(t,e):void ee()}function U1(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof xr?function(n){return n.op.toString()+" {"+n.getFilters().map(U1).join(" ,")+"}"}(t):"Filter"}class BO extends Ue{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class zO extends Ue{constructor(e,n){super(e,"in",n),this.keys=j1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HO extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=j1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class WO extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return om(n)&&ua(n.arrayValue,this.value)}}class KO extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ua(this.value.arrayValue,n)}}class qO extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ua(this.value.arrayValue,n)}}class GO extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ua(this.value.arrayValue,r))}}/**
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
 */class QO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function sv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QO(t,e,n,r,i,s,o)}function am(t){const e=me(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),im(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.he=n}return e.he}function lm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!iv(t.startAt,e.startAt)&&iv(t.endAt,e.endAt)}/**
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
 */class Sc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function YO(t,e,n,r,i,s,o,a){return new Sc(t,e,n,r,i,s,o,a)}function XO(t){return new Sc(t)}function ov(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ZO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function eL(t){return t.collectionGroup!==null}function Co(t){const e=me(t);if(e.Pe===null){e.Pe=[];const n=ZO(e),r=JO(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ro(n)),e.Pe.push(new Ro(at.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ro(at.keyField(),s))}}}return e.Pe}function oi(t){const e=me(t);return e.Ie||(e.Ie=tL(e,Co(t))),e.Ie}function tL(t,e){if(t.limitType==="F")return sv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ro(i.field,s)});const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;return sv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mf(t,e,n){return new Sc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function B1(t,e){return lm(oi(t),oi(e))&&t.limitType===e.limitType}function z1(t){return`${am(oi(t))}|lt:${t.limitType}`}function eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>U1(i)).join(", ")}]`),im(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Is(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Is(i)).join(",")),`Target(${r})`}(oi(t))}; limitType=${t.limitType})`}function um(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=rv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Co(r),i)||r.endAt&&!function(o,a,l){const u=rv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Co(r),i))}(t,e)}function nL(t){return(e,n)=>{let r=!1;for(const i of Co(t)){const s=rL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rL(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Es(l,u):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ma(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return O1(this.inner)}size(){return this.innerSize}}/**
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
 */const iL=new Rt(Y.comparator);function xu(){return iL}const H1=new Rt(Y.comparator);function ml(...t){let e=H1;for(const n of t)e=e.insert(n.key,n);return e}function W1(t){let e=H1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return Ao()}function K1(){return Ao()}function Ao(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const sL=new Rt(Y.comparator),oL=new gt(Y.comparator);function ot(...t){let e=oL;for(const n of t)e=e.add(n);return e}const aL=new gt(ce);function lL(){return aL}/**
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
 */function q1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function G1(t){return{integerValue:""+t}}function uL(t,e){return MO(e)?G1(e):q1(t,e)}/**
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
 */class Rc{constructor(){this._=void 0}}function cL(t,e,n){return t instanceof Du?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sm(s)&&(s=L1(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ca?Y1(t,e):t instanceof ha?X1(t,e):function(i,s){const o=Q1(i,s),a=av(o)+av(i.Te);return ff(o)&&ff(i.Te)?G1(a):q1(i.serializer,a)}(t,e)}function hL(t,e,n){return t instanceof ca?Y1(t,e):t instanceof ha?X1(t,e):n}function Q1(t,e){return t instanceof Ou?function(r){return ff(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Du extends Rc{}class ca extends Rc{constructor(e){super(),this.elements=e}}function Y1(t,e){const n=J1(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ha extends Rc{constructor(e){super(),this.elements=e}}function X1(t,e){let n=J1(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class Ou extends Rc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function av(t){return Ye(t.integerValue||t.doubleValue)}function J1(t){return om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ca&&i instanceof ca||r instanceof ha&&i instanceof ha?_s(r.elements,i.elements,Sn):r instanceof Ou&&i instanceof Ou?Sn(r.Te,i.Te):r instanceof Du&&i instanceof Du}(t.transform,e.transform)}class fL{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cc{}function Z1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tI(t.key,$n.none()):new Va(t.key,t.data,$n.none());{const n=t.data,r=Zt.empty();let i=new gt(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pi(t.key,r,new en(i.toArray()),$n.none())}}function pL(t,e,n){t instanceof Va?function(i,s,o){const a=i.value.clone(),l=uv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(i,s,o){if(!Vl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=uv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(eI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof Va?function(s,o,a,l){if(!Vl(s.precondition,o))return a;const u=s.value.clone(),c=cv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pi?function(s,o,a,l){if(!Vl(s.precondition,o))return a;const u=cv(s.fieldTransforms,l,o),c=o.data;return c.setAll(eI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Vl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q1(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function lv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>dL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends Cc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends Cc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function uv(t,e,n){const r=new Map;He(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hL(o,a,n[i]))}return r}function cv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cL(s,o,e))}return r}class tI extends Cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gL extends Cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=K1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Z1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ot())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>lv(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>lv(n,r))}}class cm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){He(e.mutations.length===r.length);let i=function(){return sL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cm(e,n,r,i)}}/**
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
 */class vL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var ke,te;function _L(t){switch(t){default:return ee();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function wL(t){if(t===void 0)return yi("GRPC error has no .code"),x.UNKNOWN;switch(t){case ke.OK:return x.OK;case ke.CANCELLED:return x.CANCELLED;case ke.UNKNOWN:return x.UNKNOWN;case ke.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ke.INTERNAL:return x.INTERNAL;case ke.UNAVAILABLE:return x.UNAVAILABLE;case ke.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ke.NOT_FOUND:return x.NOT_FOUND;case ke.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ke.ABORTED:return x.ABORTED;case ke.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ke.DATA_LOSS:return x.DATA_LOSS;default:return ee()}}(te=ke||(ke={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new wO([4294967295,4294967295],0);class EL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IL(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TL(t,e){return gf(t,e.toTimestamp())}function ls(t){return He(!!t),_e.fromTimestamp(function(n){const r=vi(n);return new Be(r.seconds,r.nanos)}(t))}function nI(t,e){return function(r){return new xe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function SL(t){const e=xe.fromString(t);return He(DL(e)),e}function yf(t,e){return nI(t.databaseId,e.path)}function RL(t){const e=SL(t);return e.length===4?xe.emptyPath():AL(e)}function CL(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AL(t){return He(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hv(t,e,n){return{name:yf(t,e),fields:n.value.mapValue.fields}}function PL(t,e){let n;if(e instanceof Va)n={update:hv(t,e.key,e.value)};else if(e instanceof tI)n={delete:yf(t,e.key)};else if(e instanceof Pi)n={update:hv(t,e.key,e.data),updateMask:xL(e.fieldMask)};else{if(!(e instanceof gL))return ee();n={verify:yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Du)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ca)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function kL(t,e){return t&&t.length>0?(He(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ls(i.updateTime):ls(s);return o.isEqual(_e.min())&&(o=ls(s)),new fL(o,i.transformResults||[])}(n,e))):[]}function NL(t){let e=RL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){He(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=rI(h);return d instanceof xr&&b1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ro(Mi(v.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,im(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,y=h.values||[];return new Nu(y,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,y=h.values||[];return new Nu(y,d)}(n.endAt)),YO(e,i,o,s,a,"F",l,u)}function rI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xr.create(n.compositeFilter.filters.map(r=>rI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function Mi(t){return at.fromServerFormat(t.fieldPath)}function xL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function DL(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class OL{constructor(e){this.ht=e}}function LL(t){const e=NL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mf(e,e.limit,"L"):e}/**
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
 */class ML{constructor(){this.an=new VL}addToCollectionParentIndex(e,n){return this.an.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Nr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class VL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(xe.comparator)).toArray()}}/**
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
 */class Ts{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ts(0)}static Ln(){return new Ts(-1)}}/**
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
 */class FL{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class bL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $L{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Po(r.mutation,i,en.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ot()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ot()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ml();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ot()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xu();const o=Ao(),a=function(){return Ao()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Po(c.mutation,u,c.mutation.getFieldMask(),Be.now())):o.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new bL(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ao();let i=new Rt((o,a)=>o-a),s=ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||en.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ot()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=K1();c.forEach(d=>{if(!s.has(d)){const y=Z1(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Zr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ot())).next(c=>({batchId:a,changes:W1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=ml();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ml();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,l=>{const u=function(h,d){return new Sc(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Jt.newInvalidDocument(c)))});let a=ml();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Po(c.mutation,u,en.empty(),Be.now()),um(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class UL{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return A.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ls(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:LL(i.bundledQuery),readTime:ls(i.readTime)}}(n)),A.resolve()}}/**
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
 */class jL{constructor(){this.overlays=new Rt(Y.comparator),this.Pr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Rt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Zr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vL(n,r));let s=this.Pr.get(n);s===void 0&&(s=ot(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class hm{constructor(){this.Ir=new gt(be.dr),this.Tr=new gt(be.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new be(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new be(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Y(new xe([])),r=new be(n,e),i=new be(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Y(new xe([])),r=new be(n,e),i=new be(n,e+1);let s=ot();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new be(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Y.comparator(e.key,n.key)||ce(e.yr,n.yr)}static Er(e,n){return ce(e.yr,n.yr)||Y.comparator(e.key,n.key)}}/**
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
 */class BL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new gt(be.dr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new be(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(ce);return n.forEach(i=>{const s=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),A.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new be(new Y(s),0);let a=new gt(ce);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),A.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){He(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return A.forEach(n.mutations,i=>{const s=new be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new be(n,0),i=this.Sr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zL{constructor(e){this.Fr=e,this.docs=function(){return new Rt(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=xu();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Jt.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xu();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||DO(xO(c),r)<=0||(i.has(c.key)||um(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Mr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HL(this)}getSize(e){return A.resolve(this.size)}}class HL extends FL{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class WL{constructor(e){this.persistence=e,this.Or=new Ms(n=>am(n),lm),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Nr=0,this.Br=new hm,this.targetCount=0,this.Lr=Ts.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),A.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Qn(n),A.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Br.containsKey(n))}}/**
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
 */class KL{constructor(e,n){this.kr={},this.overlays={},this.qr=new D1(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new WL(this),this.indexManager=new ML,this.remoteDocumentCache=function(i){return new zL(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new OL(n),this.Ur=new UL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new BL(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new qL(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return A.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class qL extends LO{constructor(e){super(),this.currentSequenceNumber=e}}class dm{constructor(e){this.persistence=e,this.jr=new hm,this.Hr=null}static Jr(e){return new dm(e)}get Yr(){if(this.Hr)return this.Hr;throw ee()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),A.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Yr,r=>{const i=Y.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,_e.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return A.or([()=>A.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class fm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=ot(),i=ot();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fm(e,n.fromCache,r,i)}}/**
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
 */class GL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QL{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GL;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(Zs()<=Z.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),A.resolve()):(Zs()<=Z.DEBUG&&b("QueryEngine","Query:",eo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(Zs()<=Z.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,oi(n))):A.resolve())}Hi(e,n){if(ov(n))return A.resolve(null);let r=oi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mf(n,null,"F"),r=oi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ot(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,mf(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return ov(n)||i.isEqual(_e.min())?A.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?A.resolve(null):(Zs()<=Z.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eo(n)),this.ts(e,o,n,NO(i,-1)).next(a=>a))})}Xi(e,n){let r=new gt(nL(e));return n.forEach((i,s)=>{um(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return Zs()<=Z.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",eo(n)),this.ji.getDocumentsMatchingQuery(e,n,Nr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class YL{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Rt(ce),this.ss=new Ms(s=>am(s),lm),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $L(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function XL(t,e,n,r){return new YL(t,e,n,r)}async function iI(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ot();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function JL(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let y=A.resolve();return d.forEach(v=>{y=y.next(()=>c.getEntry(l,v)).next(_=>{const T=u.docVersions.get(v);He(T!==null),_.version.compareTo(T)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ot();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ZL(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function e2(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class dv{constructor(){this.activeTargetIds=lL()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t2{constructor(){this.ro=new dv,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new dv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class n2{so(e){}shutdown(){}}/**
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
 */class fv{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function Lh(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const r2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class i2{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const rt="WebChannelConnection";class s2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Lh(),l=this.Do(n,r);b("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(b("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Cu("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=r2[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Lh();return new Promise((o,a)=>{const l=new _O;l.setWithCredentials(!0),l.listenOnce(yO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Oh.NO_ERROR:const c=l.getResponseJson();b(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Oh.TIMEOUT:b(rt,`RPC '${e}' ${s} timed out`),a(new W(x.DEADLINE_EXCEEDED,"Request time out"));break;case Oh.HTTP_ERROR:const h=l.getStatus();if(b(rt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const y=d==null?void 0:d.error;if(y&&y.status&&y.message){const v=function(T){const m=T.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(m)>=0?m:x.UNKNOWN}(y.status);a(new W(v,y.message))}else a(new W(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(x.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{b(rt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(rt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Lh(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mO(),a=gO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(rt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,y=!1;const v=new i2({ho:T=>{y?b(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||(b(rt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),b(rt,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},Po:()=>h.close()}),_=(T,m,f)=>{T.listen(m,g=>{try{f(g)}catch(p){setTimeout(()=>{throw p},0)}})};return _(h,dl.EventType.OPEN,()=>{y||b(rt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,dl.EventType.CLOSE,()=>{y||(y=!0,b(rt,`RPC '${e}' stream ${i} transport closed`),v.mo())}),_(h,dl.EventType.ERROR,T=>{y||(y=!0,Cu(rt,`RPC '${e}' stream ${i} transport errored:`,T),v.mo(new W(x.UNAVAILABLE,"The operation could not be completed")))}),_(h,dl.EventType.MESSAGE,T=>{var m;if(!y){const f=T.data[0];He(!!f);const g=f,p=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(p){b(rt,`RPC '${e}' stream ${i} received error:`,p);const S=p.status;let k=function(Q){const $=ke[Q];if($!==void 0)return wL($)}(S),N=p.message;k===void 0&&(k=x.INTERNAL,N="Unknown error status: "+S+" with message "+p.message),y=!0,v.mo(new W(k,N)),h.close()}else b(rt,`RPC '${e}' stream ${i} received:`,f),v.fo(f)}}),_(a,vO.STAT_EVENT,T=>{T.stat===Jy.PROXY?b(rt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Jy.NOPROXY&&b(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function Mh(){return typeof document<"u"?document:null}/**
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
 */function Ac(t){return new EL(t,!0)}/**
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
 */class sI{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class o2{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new sI(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(yi(n.toString()),yi("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new W(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a2 extends o2{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(He(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=kL(e.writeResults,e.commitTime),r=ls(e.commitTime);return this.listener.T_(r,n)}return He(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=CL(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PL(this.serializer,r))};this.n_(n)}}/**
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
 */class l2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(x.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(x.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class u2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(yi(n),this.p_=!1):b("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class c2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{ba(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=me(l);u.F_.add(4),await Fa(u),u.O_.set("Unknown"),u.F_.delete(4),await Pc(u)}(this))})}),this.O_=new u2(r,i)}}async function Pc(t){if(ba(t))for(const e of t.M_)await e(!0)}async function Fa(t){for(const e of t.M_)await e(!1)}function ba(t){return me(t).F_.size===0}async function oI(t,e,n){if(!Tc(e))throw e;t.F_.add(1),await Fa(t),t.O_.set("Offline"),n||(n=()=>ZL(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Pc(t)})}function aI(t,e){return e().catch(n=>oI(t,n,e))}async function kc(t){const e=me(t),n=Dr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;h2(e);)try{const i=await e2(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,d2(e,i)}catch(i){await oI(e,i)}lI(e)&&uI(e)}function h2(t){return ba(t)&&t.C_.length<10}function d2(t,e){t.C_.push(e);const n=Dr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function lI(t){return ba(t)&&!Dr(t).Jo()&&t.C_.length>0}function uI(t){Dr(t).start()}async function f2(t){Dr(t).A_()}async function p2(t){const e=Dr(t);for(const n of t.C_)e.d_(n.mutations)}async function m2(t,e,n){const r=t.C_.shift(),i=cm.from(r,e,n);await aI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kc(t)}async function g2(t,e){e&&Dr(t).I_&&await async function(r,i){if(function(o){return _L(o)&&o!==x.ABORTED}(i.code)){const s=r.C_.shift();Dr(r).Xo(),await aI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kc(r)}}(t,e),lI(t)&&uI(t)}async function pv(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=ba(n);n.F_.add(3),await Fa(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Pc(n)}async function y2(t,e){const n=me(t);e?(n.F_.delete(2),await Pc(n)):e||(n.F_.add(2),await Fa(n),n.O_.set("Unknown"))}function Dr(t){return t.L_||(t.L_=function(n,r,i){const s=me(n);return s.V_(),new a2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:f2.bind(null,t),Eo:g2.bind(null,t),E_:p2.bind(null,t),T_:m2.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await kc(t)):(await t.L_.stop(),t.C_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class pm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cI(t,e){if(yi("AsyncQueue",`${e}: ${t}`),Tc(t))return new W(x.UNAVAILABLE,`${e}: ${t}`);throw t}class v2{constructor(){this.queries=new Ms(e=>z1(e),B1),this.onlineState="Unknown",this.K_=new Set}}function _2(t){t.K_.forEach(e=>{e.next()})}class w2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ms(a=>z1(a),B1),this.pa=new Map,this.ya=new Set,this.wa=new Rt(Y.comparator),this.Sa=new Map,this.ba=new hm,this.Da={},this.Ca=new Map,this.va=Ts.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function E2(t,e,n){const r=R2(t);try{const i=await function(o,a){const l=me(o),u=Be.now(),c=a.reduce((y,v)=>y.add(v.key),ot());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let v=xu(),_=ot();return l._s.getEntries(y,c).next(T=>{v=T,v.forEach((m,f)=>{f.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,v)).next(T=>{h=T;const m=[];for(const f of a){const g=mL(f,h.get(f.key).overlayedDocument);g!=null&&m.push(new Pi(f.key,g,M1(g.value.mapValue),$n.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,m,a)}).next(T=>{d=T;const m=T.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(y,T.batchId,m)})}).then(()=>({batchId:d.batchId,changes:W1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Rt(ce)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Nc(r,i.changes),await kc(r.remoteStore)}catch(i){const s=cI(i,"Failed to persist write");n.reject(s)}}function mv(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&_2(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I2(t,e){const n=me(t),r=e.batch.batchId;try{const i=await JL(n.localStore,e);dI(n,r,null),hI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nc(n,i)}catch(i){await x1(i)}}async function T2(t,e,n){const r=me(t);try{const i=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(He(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);dI(r,e,n),hI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nc(r,i)}catch(i){await x1(i)}}function hI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function dI(t,e,n){const r=me(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}async function Nc(t,e,n){const r=me(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=fm.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=me(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,d=>A.forEach(d.Qi,y=>c.persistence.referenceDelegate.addReference(h,d.targetId,y)).next(()=>A.forEach(d.Ki,y=>c.persistence.referenceDelegate.removeReference(h,d.targetId,y)))))}catch(h){if(!Tc(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const y=c.rs.get(d),v=y.snapshotVersion,_=y.withLastLimboFreeSnapshotVersion(v);c.rs=c.rs.insert(d,_)}}}(r.localStore,s))}async function S2(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await iI(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new W(x.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nc(n,r.cs)}}function R2(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T2.bind(null,e),e}class gv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ac(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return XL(this.persistence,new QL,e.initialUser,this.serializer)}createPersistence(e){return new KL(dm.Jr,this.serializer)}createSharedClientState(e){return new t2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class C2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S2.bind(null,this.syncEngine),await y2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v2}()}createDatastore(e){const n=Ac(e.databaseInfo.databaseId),r=function(s){return new s2(s)}(e.databaseInfo);return function(s,o,a,l){return new l2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new c2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mv(this.syncEngine,n,0),function(){return fv.C()?new fv:new n2}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new w2(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=me(n);b("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Fa(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class A2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=N1.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new si;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await k2(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>pv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>pv(e.remoteStore,s)),t._onlineComponents=e}function P2(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function k2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!P2(n))throw n;Cu("Error using user provided cache. Falling back to memory cache: "+n),await Vh(t,new gv)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Vh(t,new gv);return t._offlineComponents}async function N2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await yv(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await yv(t,new C2))),t._onlineComponents}function x2(t){return N2(t).then(e=>e.syncEngine)}/**
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
 */function fI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vv=new Map;/**
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
 */function D2(t,e,n){if(!n)throw new W(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function O2(t,e,n,r){if(e===!0&&r===!0)throw new W(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _v(t){if(!Y.isDocumentKey(t))throw new W(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function vf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mm(t);throw new W(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EO;switch(r.type){case"firstParty":return new RO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vv.get(n);r&&(b("ComponentProvider","Removing Datastore"),vv.delete(n),r.terminate())}(this),Promise.resolve()}}function L2(t,e,n,r={}){var i;const s=(t=vf(t,gm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Cu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=it.MOCK_USER;else{a=OP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(u)}t._authCredentials=new IO(new k1(a,l))}}/**
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
 */class ym{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ym(this.firestore,e,this._query)}}class Un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new da(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Un(this.firestore,e,this._key)}}class da extends ym{constructor(e,n,r){super(e,n,XO(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Un(this.firestore,null,new Y(e))}withConverter(e){return new da(this.firestore,e,this._path)}}function M2(t,e,...n){if(t=dt(t),arguments.length===1&&(e=N1.V()),D2("doc","path",e),t instanceof gm){const r=xe.fromString(e,...n);return _v(r),new Un(t,null,new Y(r))}{if(!(t instanceof Un||t instanceof da))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return _v(r),new Un(t.firestore,t instanceof da?t.converter:null,new Y(r))}}/**
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
 */class V2{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new sI(this,"async_queue_retry"),this.ou=()=>{const n=Mh();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new si;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Tc(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=pm.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&ee()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class pI extends gm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new V2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mI(this),this._firestoreClient.terminate()}}function F2(t,e){const n=typeof t=="object"?t:Rp(),r=typeof t=="string"?t:e||"(default)",i=Si(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xP("firestore");s&&L2(i,...s)}return i}function b2(t){return t._firestoreClient||mI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new bO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new A2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class fa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fa(Gn.fromBase64String(e))}catch(n){throw new W(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fa(Gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yI{constructor(e){this._methodName=e}}/**
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
 */class vI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const $2=/^__.*__$/;class U2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}function _I(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class vm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new vm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Lu(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(_I(this.Tu)&&$2.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class j2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ac(e)}wu(e,n,r,i=!1){return new vm({Tu:e,methodName:n,yu:r,path:at.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B2(t){const e=t._freezeSettings(),n=Ac(t._databaseId);return new j2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function z2(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);TI("Data must be an object, but it was:",o,r);const a=EI(r,o);let l,u;if(s.merge)l=new en(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=H2(e,h,n);if(!o.contains(d))throw new W(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);q2(c,d)||c.push(d)}l=new en(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new U2(new Zt(a),l,u)}function wI(t,e){if(II(t=dt(t)))return TI("Unsupported field value:",e,t),EI(t,e);if(t instanceof yI)return function(r,i){if(!_I(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=wI(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:gf(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gf(i.serializer,s)}}if(r instanceof vI)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fa)return{bytesValue:IL(i.serializer,r._byteString)};if(r instanceof Un){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nI(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${mm(r)}`)}(t,e)}function EI(t,e){const n={};return O1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ma(t,(r,i)=>{const s=wI(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function II(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof vI||t instanceof fa||t instanceof Un||t instanceof yI)}function TI(t,e,n){if(!II(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mm(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function H2(t,e,n){if((e=dt(e))instanceof gI)return e._internalPath;if(typeof e=="string")return K2(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const W2=new RegExp("[~\\*/\\[\\]]");function K2(t,e,n){if(e.search(W2)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gI(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(x.INVALID_ARGUMENT,a+t+l)}function q2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function G2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Q2(t,e,n){t=vf(t,Un);const r=vf(t.firestore,pI),i=G2(t.converter,e,n);return Y2(r,[z2(B2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$n.none())])}function Y2(t,e){return function(r,i){const s=new si;return r.asyncQueue.enqueueAndForget(async()=>E2(await x2(r),i,s)),s.promise}(b2(t),e)}(function(e,n=!0){(function(i){Ls=i})(Ns),In(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new pI(new TO(r.getProvider("auth-internal")),new AO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ku(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Bt(Zy,"4.1.3",e),Bt(Zy,"4.1.3","esm2017")})();var X2="firebase",J2="10.3.1";/**
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
 */Bt(X2,J2,"app");const Z2=(t,e)=>e.some(n=>t instanceof n);let Ev,Iv;function eM(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tM(){return Iv||(Iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SI=new WeakMap,_f=new WeakMap,RI=new WeakMap,Fh=new WeakMap,_m=new WeakMap;function nM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SI.set(n,t)}).catch(()=>{}),_m.set(e,t),e}function rM(t){if(_f.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_f.set(t,e)}let wf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _f.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iM(t){wf=t(wf)}function sM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bh(this),e,...n);return RI.set(r,e.sort?e.sort():[e]),Ar(r)}:tM().includes(t)?function(...e){return t.apply(bh(this),e),Ar(SI.get(this))}:function(...e){return Ar(t.apply(bh(this),e))}}function oM(t){return typeof t=="function"?sM(t):(t instanceof IDBTransaction&&rM(t),Z2(t,eM())?new Proxy(t,wf):t)}function Ar(t){if(t instanceof IDBRequest)return nM(t);if(Fh.has(t))return Fh.get(t);const e=oM(t);return e!==t&&(Fh.set(t,e),_m.set(e,t)),e}const bh=t=>_m.get(t);function aM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ar(o.result),l.oldVersion,l.newVersion,Ar(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const lM=["get","getKey","getAll","getAllKeys","count"],uM=["put","add","delete","clear"],$h=new Map;function Tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $h.set(e,s),s}iM(t=>({...t,get:(e,n,r)=>Tv(e,n)||t.get(e,n,r),has:(e,n)=>!!Tv(e,n)||t.has(e,n)}));const CI="@firebase/installations",wm="0.6.4";/**
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
 */const AI=1e4,PI=`w:${wm}`,kI="FIS_v2",cM="https://firebaseinstallations.googleapis.com/v1",hM=60*60*1e3,dM="installations",fM="Installations";/**
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
 */const pM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_i=new Ti(dM,fM,pM);function NI(t){return t instanceof an&&t.code.includes("request-failed")}/**
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
 */function xI({projectId:t}){return`${cM}/projects/${t}/installations`}function DI(t){return{token:t.token,requestStatus:2,expiresIn:gM(t.expiresIn),creationTime:Date.now()}}async function OI(t,e){const r=(await e.json()).error;return _i.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function LI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mM(t,{refreshToken:e}){const n=LI(t);return n.append("Authorization",yM(e)),n}async function MI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gM(t){return Number(t.replace("s","000"))}function yM(t){return`${kI} ${t}`}/**
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
 */async function vM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xI(t),i=LI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:kI,appId:t.appId,sdkVersion:PI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await MI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:DI(u.authToken)}}else throw await OI("Create Installation",l)}/**
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
 */function VI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function _M(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wM=/^[cdef][\w-]{21}$/,Ef="";function EM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IM(t);return wM.test(n)?n:Ef}catch{return Ef}}function IM(t){return _M(t).substr(0,22)}/**
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
 */function xc(t){return`${t.appName}!${t.appId}`}/**
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
 */const FI=new Map;function bI(t,e){const n=xc(t);$I(n,e),TM(n,e)}function $I(t,e){const n=FI.get(t);if(n)for(const r of n)r(e)}function TM(t,e){const n=SM();n&&n.postMessage({key:t,fid:e}),RM()}let ei=null;function SM(){return!ei&&"BroadcastChannel"in self&&(ei=new BroadcastChannel("[Firebase] FID Change"),ei.onmessage=t=>{$I(t.data.key,t.data.fid)}),ei}function RM(){FI.size===0&&ei&&(ei.close(),ei=null)}/**
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
 */const CM="firebase-installations-database",AM=1,wi="firebase-installations-store";let Uh=null;function Em(){return Uh||(Uh=aM(CM,AM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}})),Uh}async function Mu(t,e){const n=xc(t),i=(await Em()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bI(t,e.fid),e}async function UI(t){const e=xc(t),r=(await Em()).transaction(wi,"readwrite");await r.objectStore(wi).delete(e),await r.done}async function Dc(t,e){const n=xc(t),i=(await Em()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bI(t,a.fid),a}/**
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
 */async function Im(t){let e;const n=await Dc(t.appConfig,r=>{const i=PM(r),s=kM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ef?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function PM(t){const e=t||{fid:EM(),registrationStatus:0};return jI(e)}function kM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_i.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xM(t)}:{installationEntry:e}}async function NM(t,e){try{const n=await vM(t,e);return Mu(t.appConfig,n)}catch(n){throw NI(n)&&n.customData.serverCode===409?await UI(t.appConfig):await Mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function xM(t){let e=await Sv(t.appConfig);for(;e.registrationStatus===1;)await VI(100),e=await Sv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Im(t);return r||n}return e}function Sv(t){return Dc(t,e=>{if(!e)throw _i.create("installation-not-found");return jI(e)})}function jI(t){return DM(t)?{fid:t.fid,registrationStatus:0}:t}function DM(t){return t.registrationStatus===1&&t.registrationTime+AI<Date.now()}/**
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
 */async function OM({appConfig:t,heartbeatServiceProvider:e},n){const r=LM(t,n),i=mM(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:PI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await MI(()=>fetch(r,a));if(l.ok){const u=await l.json();return DI(u)}else throw await OI("Generate Auth Token",l)}function LM(t,{fid:e}){return`${xI(t)}/${e}/authTokens:generate`}/**
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
 */async function Tm(t,e=!1){let n;const r=await Dc(t.appConfig,s=>{if(!BI(s))throw _i.create("not-registered");const o=s.authToken;if(!e&&FM(o))return s;if(o.requestStatus===1)return n=MM(t,e),s;{if(!navigator.onLine)throw _i.create("app-offline");const a=$M(s);return n=VM(t,a),a}});return n?await n:r.authToken}async function MM(t,e){let n=await Rv(t.appConfig);for(;n.authToken.requestStatus===1;)await VI(100),n=await Rv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Tm(t,e):r}function Rv(t){return Dc(t,e=>{if(!BI(e))throw _i.create("not-registered");const n=e.authToken;return UM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VM(t,e){try{const n=await OM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Mu(t.appConfig,r),n}catch(n){if(NI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mu(t.appConfig,r)}throw n}}function BI(t){return t!==void 0&&t.registrationStatus===2}function FM(t){return t.requestStatus===2&&!bM(t)}function bM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hM}function $M(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UM(t){return t.requestStatus===1&&t.requestTime+AI<Date.now()}/**
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
 */async function jM(t){const e=t,{installationEntry:n,registrationPromise:r}=await Im(e);return r?r.catch(console.error):Tm(e).catch(console.error),n.fid}/**
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
 */async function BM(t,e=!1){const n=t;return await zM(n),(await Tm(n,e)).token}async function zM(t){const{registrationPromise:e}=await Im(t);e&&await e}/**
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
 */function HM(t){if(!t||!t.options)throw jh("App Configuration");if(!t.name)throw jh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jh(t){return _i.create("missing-app-config-values",{valueName:t})}/**
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
 */const zI="installations",WM="installations-internal",KM=t=>{const e=t.getProvider("app").getImmediate(),n=HM(e),r=Si(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},qM=t=>{const e=t.getProvider("app").getImmediate(),n=Si(e,zI).getImmediate();return{getId:()=>jM(n),getToken:i=>BM(n,i)}};function GM(){In(new sn(zI,KM,"PUBLIC")),In(new sn(WM,qM,"PRIVATE"))}GM();Bt(CI,wm);Bt(CI,wm,"esm2017");/**
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
 */const Vu="analytics",QM="firebase_id",YM="origin",XM=60*1e3,JM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sm="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new rc("@firebase/analytics");/**
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
 */const ZM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new Ti("analytics","Analytics",ZM);/**
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
 */function eV(t){if(!t.startsWith(Sm)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function HI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nV(t,e){const n=tV("firebase-js-sdk-policy",{createScriptURL:eV}),r=document.createElement("script"),i=`${Sm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await HI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){St.error(a)}t("config",i,s)}async function sV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await HI(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function oV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await sV(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await iV(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){St.error(a)}}return i}function aV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function lV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sm)&&n.src.includes(t))return n;return null}/**
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
 */const uV=30,cV=1e3;class hV{constructor(e={},n=cV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const WI=new hV;function dV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:dV(r)},s=JM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function pV(t,e=WI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yV;return setTimeout(async()=>{a.abort()},n!==void 0?n:XM),KI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function KI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=WI){var s;const{appId:o,measurementId:a}=t;try{await mV(r,e)}catch(l){if(a)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await fV(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!gV(u)){if(i.deleteThrottleMetadata(o),a)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?py(n,i.intervalMillis,uV):py(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),St.debug(`Calling attemptFetch again in ${c} millis`),KI(t,h,r,i)}}function mV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gV(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function _V(){if(zw())try{await Hw()}catch(t){return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wV(t,e,n,r,i,s,o){var a;const l=pV(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>St.error(y)),e.push(l);const u=_V().then(y=>{if(y)return r.getId()}),[c,h]=await Promise.all([l,u]);lV(s)||nV(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[YM]="firebase",d.update=!0,h!=null&&(d[QM]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class EV{constructor(e){this.app=e}_delete(){return delete ko[this.app.options.appId],Promise.resolve()}}let ko={},Cv=[];const Av={};let Bh="dataLayer",IV="gtag",Pv,qI,kv=!1;function TV(){const t=[];if(Bw()&&t.push("This is a browser extension environment."),FP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function SV(t,e,n){TV();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(ko[r]!=null)throw Nt.create("already-exists",{id:r});if(!kv){rV(Bh);const{wrappedGtag:s,gtagCore:o}=aV(ko,Cv,Av,Bh,IV);qI=s,Pv=o,kv=!0}return ko[r]=wV(t,Cv,Av,e,Pv,Bh,n),new EV(t)}function RV(t=Rp()){t=dt(t);const e=Si(t,Vu);return e.isInitialized()?e.getImmediate():CV(t)}function CV(t,e={}){const n=Si(t,Vu);if(n.isInitialized()){const i=n.getImmediate();if(Qo(e,n.getOptions()))return i;throw Nt.create("already-initialized")}return n.initialize({options:e})}function AV(t,e,n,r){t=dt(t),vV(qI,ko[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const Nv="@firebase/analytics",xv="0.10.0";function PV(){In(new sn(Vu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return SV(r,i,n)},"PUBLIC")),In(new sn("analytics-internal",t,"PRIVATE")),Bt(Nv,xv),Bt(Nv,xv,"esm2017");function t(e){try{const n=e.getProvider(Vu).getImmediate();return{logEvent:(r,i,s)=>AV(n,r,i,s)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}PV();const kV={apiKey:"AIzaSyCeb7CyvcPVzGt1zKhL5QAPmGVlCX8ZT_Q",authDomain:"collectionone-864b1.firebaseapp.com",projectId:"collectionone-864b1",storageBucket:"collectionone-864b1.appspot.com",messagingSenderId:"1016772249565",appId:"1:1016772249565:web:8377a43470c045da5b1834",measurementId:"G-D42K6RMC0E"},Rm=qw(kV);RV(Rm);const NV=F2(Rm),yl=pD(Rm),GI=E.createContext(null);function xV({children:t}){const[e,n]=E.useState({});function r(o,a){return YN(yl,o,a)}async function i(o,a,l){try{const u=await QN(yl,o,a);await JN(u.user,{displayName:l});const c=u.user,h=M2(NV,"users",c.uid);return await Q2(h,{email:o,displayName:l}),u}catch(u){throw u}}function s(){return nx(yl)}return E.useEffect(()=>{const o=tx(yl,a=>{console.log("Auth",a),n(a)});return()=>{o()}},[]),C.jsx(GI.Provider,{value:{user:e,logIn:r,signUp:i,logOut:s},children:t})}function Oc(){return E.useContext(GI)}const DV="_root_fdx95_1",OV="_contain_fdx95_43",LV="_InsideContain_fdx95_67",MV="_textHead_fdx95_83",VV="_setBoxMargin_fdx95_93",FV="_Mainbutton_fdx95_159",bV="_button_fdx95_161",$V="_test_fdx95_203",sr={root:DV,contain:OV,InsideContain:LV,textHead:MV,setBoxMargin:VV,Mainbutton:FV,button:bV,test:$V};function UV(){const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),{logIn:o}=Oc(),a=Ea(),l=async u=>{if(!t||!n){s("Please enter both email and password");return}u.preventDefault(),s("");try{await o(t,n),a("/home")}catch(c){s(c.message),console.log(c)}};return C.jsx("div",{className:sr.contain,children:C.jsxs("div",{className:sr.InsideContain,children:[C.jsxs(TP,{onSubmit:l,children:[C.jsx("p",{className:sr.textHead,children:"Let's continue!"}),i&&C.jsx(ww,{variant:"danger",children:i}),C.jsx("div",{className:sr.setBoxMargin,children:C.jsx("input",{type:"email",placeholder:"Email address @tupp.ac.th",value:t,onChange:u=>e(u.target.value)})}),C.jsx("div",{className:sr.setBoxMargin,children:C.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value)})}),C.jsx("div",{className:sr.Mainbutton,children:C.jsx("button",{className:sr.button,type:"submit",children:"Login"})})]}),C.jsxs("div",{className:sr.test,children:["Don't have an account yet? ",C.jsx(uu,{to:"/register",children:"Join Us!"})]})]})})}const jV="_root_pi5nq_1",BV="_contain_pi5nq_43",zV="_InsideContain_pi5nq_67",HV="_textHead_pi5nq_83",WV="_setBoxMargin_pi5nq_93",KV="_Mainbutton_pi5nq_159",qV="_button_pi5nq_161",GV="_test_pi5nq_233",QV="_form_pi5nq_255",YV="_labelName_pi5nq_255",dn={root:jV,contain:BV,InsideContain:zV,textHead:HV,setBoxMargin:WV,Mainbutton:KV,button:qV,test:GV,form:QV,labelName:YV};function XV(){const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,s]=E.useState(""),[o,a]=E.useState(""),{signUp:l}=Oc(),[u,c]=E.useState(""),h=Ea(),d=f=>/^[a-zA-Z0-9_]*$/.test(f),y=f=>{const g=f.target.value;d(g)&&g.length<=16&&s(g)},v=f=>{const g=f.target.value;(/^[a-zA-Z0-9@.]*$/.test(g)||g==="")&&e(g)},_=f=>{const g=f.target.value;!/[^a-zA-Z0-9@]/.test(g)&&g.length<=13&&r(g)},T=f=>{const g=f.target.value;!/[^a-zA-Z0-9@]/.test(g)&&g.length<=13&&c(g)},m=async f=>{if(f.preventDefault(),!i||!t||!n||!u){a("Please enter all the required information.");return}if(u!==n){a("Confirm Password was Invalid");return}a("");try{await l(t,n,i),h("/")}catch(g){a(g.message),console.error(g)}};return C.jsx("div",{className:dn.contain,children:C.jsxs("div",{className:dn.InsideContain,children:[C.jsxs("form",{onSubmit:m,children:[C.jsx("p",{className:dn.textHead,children:"Join us!"}),o&&C.jsx(ww,{variant:"danger",children:o}),C.jsx("div",{className:dn.setBoxMargin,children:C.jsx("input",{type:"text",placeholder:"Username",value:i,onChange:y})}),C.jsx("div",{className:dn.setBoxMargin,children:C.jsx("input",{type:"text",placeholder:"Email address",value:t,onChange:v})}),C.jsx("div",{className:dn.setBoxMargin,children:C.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:_})}),C.jsx("div",{className:dn.setBoxMargin,children:C.jsx("input",{type:"password",placeholder:"Confirm Password",value:u,onChange:T})}),C.jsx("div",{className:dn.Mainbutton,children:C.jsx("button",{className:dn.button,type:"submit",children:C.jsx("p",{children:"Signup"})})})]}),C.jsxs("div",{className:dn.test,children:["Already have an account? ",C.jsx(uu,{to:"/login",children:"Log in"})]})]})})}const JV="_Contain_kllyn_1",ZV="_Text_kllyn_17",eF="_prgText_kllyn_29",vl={Contain:JV,Text:ZV,prgText:eF};function tF(){const{logOut:t,user:e}=Oc();console.log("User:",e);const n=Ea(),r=async()=>{try{await t(),n("/")}catch(i){console.log(i.message)}};return C.jsx("div",{className:vl.Contain,children:C.jsxs("div",{className:vl.Text,children:[C.jsx("h2",{children:"Welcome to the Home page"}),C.jsxs("p",{className:vl.Gmail,children:["Your Gmail is : ",e==null?void 0:e.email]}),C.jsxs("p",{className:vl.prgText,children:["Hi, ",C.jsx("span",{children:e==null?void 0:e.displayName})]}),C.jsx("button",{onClick:r,children:"Logout"})]})})}function nF({children:t}){const{user:e}=Oc();return e?t:C.jsx(KC,{to:"/"})}const rF=ZC([{path:"/",element:C.jsx(sA,{})},{path:"/login",element:C.jsx(UV,{})},{path:"/register",element:C.jsx(XV,{})},{path:"/home",element:C.jsx(nF,{children:C.jsx(tF,{})})}]);zh.createRoot(document.getElementById("root")).render(C.jsx(Nn.StrictMode,{children:C.jsx(xV,{children:C.jsx(HC,{router:rF})})}));
