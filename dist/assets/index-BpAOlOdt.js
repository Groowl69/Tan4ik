(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Sx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ff={exports:{}},bo={},Of={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function Mx(){if(f0)return xt;f0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function S(O,Q,Fe){this.props=O,this.context=Q,this.refs=R,this.updater=Fe||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(O,Q,Fe){this.props=O,this.context=Q,this.refs=R,this.updater=Fe||y}var D=L.prototype=new x;D.constructor=L,M(D,S.prototype),D.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,C={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function w(O,Q,Fe){var je,Ge={},se=null,ye=null;if(Q!=null)for(je in Q.ref!==void 0&&(ye=Q.ref),Q.key!==void 0&&(se=""+Q.key),Q)N.call(Q,je)&&!U.hasOwnProperty(je)&&(Ge[je]=Q[je]);var ve=arguments.length-2;if(ve===1)Ge.children=Fe;else if(1<ve){for(var Oe=Array(ve),nt=0;nt<ve;nt++)Oe[nt]=arguments[nt+2];Ge.children=Oe}if(O&&O.defaultProps)for(je in ve=O.defaultProps,ve)Ge[je]===void 0&&(Ge[je]=ve[je]);return{$$typeof:r,type:O,key:se,ref:ye,props:Ge,_owner:C.current}}function P(O,Q){return{$$typeof:r,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function z(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Fe){return Q[Fe]})}var W=/\/+/g;function ce(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):Q.toString(36)}function pe(O,Q,Fe,je,Ge){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(se){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case r:case e:ye=!0}}if(ye)return ye=O,Ge=Ge(ye),O=je===""?"."+ce(ye,0):je,A(Ge)?(Fe="",O!=null&&(Fe=O.replace(W,"$&/")+"/"),pe(Ge,Q,Fe,"",function(nt){return nt})):Ge!=null&&(k(Ge)&&(Ge=P(Ge,Fe+(!Ge.key||ye&&ye.key===Ge.key?"":(""+Ge.key).replace(W,"$&/")+"/")+O)),Q.push(Ge)),1;if(ye=0,je=je===""?".":je+":",A(O))for(var ve=0;ve<O.length;ve++){se=O[ve];var Oe=je+ce(se,ve);ye+=pe(se,Q,Fe,Oe,Ge)}else if(Oe=g(O),typeof Oe=="function")for(O=Oe.call(O),ve=0;!(se=O.next()).done;)se=se.value,Oe=je+ce(se,ve++),ye+=pe(se,Q,Fe,Oe,Ge);else if(se==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ye}function Z(O,Q,Fe){if(O==null)return O;var je=[],Ge=0;return pe(O,je,"","",function(se){return Q.call(Fe,se,Ge++)}),je}function fe(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(Fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Fe)},function(Fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Fe)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var j={current:null},Y={transition:null},le={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:Y,ReactCurrentOwner:C};function ue(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:Z,forEach:function(O,Q,Fe){Z(O,function(){Q.apply(this,arguments)},Fe)},count:function(O){var Q=0;return Z(O,function(){Q++}),Q},toArray:function(O){return Z(O,function(Q){return Q})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xt.Component=S,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=L,xt.StrictMode=s,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,xt.act=ue,xt.cloneElement=function(O,Q,Fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var je=M({},O.props),Ge=O.key,se=O.ref,ye=O._owner;if(Q!=null){if(Q.ref!==void 0&&(se=Q.ref,ye=C.current),Q.key!==void 0&&(Ge=""+Q.key),O.type&&O.type.defaultProps)var ve=O.type.defaultProps;for(Oe in Q)N.call(Q,Oe)&&!U.hasOwnProperty(Oe)&&(je[Oe]=Q[Oe]===void 0&&ve!==void 0?ve[Oe]:Q[Oe])}var Oe=arguments.length-2;if(Oe===1)je.children=Fe;else if(1<Oe){ve=Array(Oe);for(var nt=0;nt<Oe;nt++)ve[nt]=arguments[nt+2];je.children=ve}return{$$typeof:r,type:O.type,key:Ge,ref:se,props:je,_owner:ye}},xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xt.createElement=w,xt.createFactory=function(O){var Q=w.bind(null,O);return Q.type=O,Q},xt.createRef=function(){return{current:null}},xt.forwardRef=function(O){return{$$typeof:f,render:O}},xt.isValidElement=k,xt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:fe}},xt.memo=function(O,Q){return{$$typeof:p,type:O,compare:Q===void 0?null:Q}},xt.startTransition=function(O){var Q=Y.transition;Y.transition={};try{O()}finally{Y.transition=Q}},xt.unstable_act=ue,xt.useCallback=function(O,Q){return j.current.useCallback(O,Q)},xt.useContext=function(O){return j.current.useContext(O)},xt.useDebugValue=function(){},xt.useDeferredValue=function(O){return j.current.useDeferredValue(O)},xt.useEffect=function(O,Q){return j.current.useEffect(O,Q)},xt.useId=function(){return j.current.useId()},xt.useImperativeHandle=function(O,Q,Fe){return j.current.useImperativeHandle(O,Q,Fe)},xt.useInsertionEffect=function(O,Q){return j.current.useInsertionEffect(O,Q)},xt.useLayoutEffect=function(O,Q){return j.current.useLayoutEffect(O,Q)},xt.useMemo=function(O,Q){return j.current.useMemo(O,Q)},xt.useReducer=function(O,Q,Fe){return j.current.useReducer(O,Q,Fe)},xt.useRef=function(O){return j.current.useRef(O)},xt.useState=function(O){return j.current.useState(O)},xt.useSyncExternalStore=function(O,Q,Fe){return j.current.useSyncExternalStore(O,Q,Fe)},xt.useTransition=function(){return j.current.useTransition()},xt.version="18.3.1",xt}var d0;function xh(){return d0||(d0=1,Of.exports=Mx()),Of.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function Ex(){if(h0)return bo;h0=1;var r=xh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,_={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:y,props:_,_owner:o.current}}return bo.Fragment=t,bo.jsx=u,bo.jsxs=u,bo}var p0;function wx(){return p0||(p0=1,Ff.exports=Ex()),Ff.exports}var ee=wx(),tc={},kf={exports:{}},ni={},zf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function Tx(){return m0||(m0=1,(function(r){function e(Y,le){var ue=Y.length;Y.push(le);e:for(;0<ue;){var O=ue-1>>>1,Q=Y[O];if(0<o(Q,le))Y[O]=le,Y[ue]=Q,ue=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var le=Y[0],ue=Y.pop();if(ue!==le){Y[0]=ue;e:for(var O=0,Q=Y.length,Fe=Q>>>1;O<Fe;){var je=2*(O+1)-1,Ge=Y[je],se=je+1,ye=Y[se];if(0>o(Ge,ue))se<Q&&0>o(ye,Ge)?(Y[O]=ye,Y[se]=ue,O=se):(Y[O]=Ge,Y[je]=ue,O=je);else if(se<Q&&0>o(ye,ue))Y[O]=ye,Y[se]=ue,O=se;else break e}}return le}function o(Y,le){var ue=Y.sortIndex-le.sortIndex;return ue!==0?ue:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,_=null,g=3,y=!1,M=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(Y){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=Y)s(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function A(Y){if(R=!1,D(Y),!M)if(t(h)!==null)M=!0,fe(N);else{var le=t(p);le!==null&&j(A,le.startTime-Y)}}function N(Y,le){M=!1,R&&(R=!1,x(w),w=-1),y=!0;var ue=g;try{for(D(le),_=t(h);_!==null&&(!(_.expirationTime>le)||Y&&!z());){var O=_.callback;if(typeof O=="function"){_.callback=null,g=_.priorityLevel;var Q=O(_.expirationTime<=le);le=r.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(h)&&s(h),D(le)}else s(h);_=t(h)}if(_!==null)var Fe=!0;else{var je=t(p);je!==null&&j(A,je.startTime-le),Fe=!1}return Fe}finally{_=null,g=ue,y=!1}}var C=!1,U=null,w=-1,P=5,k=-1;function z(){return!(r.unstable_now()-k<P)}function W(){if(U!==null){var Y=r.unstable_now();k=Y;var le=!0;try{le=U(!0,Y)}finally{le?ce():(C=!1,U=null)}}else C=!1}var ce;if(typeof L=="function")ce=function(){L(W)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Z=pe.port2;pe.port1.onmessage=W,ce=function(){Z.postMessage(null)}}else ce=function(){S(W,0)};function fe(Y){U=Y,C||(C=!0,ce())}function j(Y,le){w=S(function(){Y(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,fe(N))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var ue=g;g=le;try{return Y()}finally{g=ue}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ue=g;g=Y;try{return le()}finally{g=ue}},r.unstable_scheduleCallback=function(Y,le,ue){var O=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,Y){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ue+Q,Y={id:v++,callback:le,priorityLevel:Y,startTime:ue,expirationTime:Q,sortIndex:-1},ue>O?(Y.sortIndex=ue,e(p,Y),t(h)===null&&Y===t(p)&&(R?(x(w),w=-1):R=!0,j(A,ue-O))):(Y.sortIndex=Q,e(h,Y),M||y||(M=!0,fe(N))),Y},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(Y){var le=g;return function(){var ue=g;g=le;try{return Y.apply(this,arguments)}finally{g=ue}}}})(Bf)),Bf}var g0;function Ax(){return g0||(g0=1,zf.exports=Tx()),zf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function bx(){if(v0)return ni;v0=1;var r=xh(),e=Ax();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,L);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,L);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,L);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),C=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),z=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,O;function Q(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Fe=!1;function je(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,F=m.length-1;1<=T&&0<=F&&d[T]!==m[F];)F--;for(;1<=T&&0<=F;T--,F--)if(d[T]!==m[F]){if(T!==1||F!==1)do if(T--,F--,0>F||d[T]!==m[F]){var B=`
`+d[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=F);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ge(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=je(n.type,!1),n;case 11:return n=je(n.type.render,!1),n;case 1:return n=je(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case C:return"Portal";case P:return"Profiler";case w:return"StrictMode";case ce:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(n){var i=Oe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=nt(n))}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Oe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Dt(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function St(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Zt(n,i){St(n,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ln(n,i.type,a):i.hasOwnProperty("defaultValue")&&ln(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function on(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ln(n,i,a){(i!=="number"||mt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tn=Array.isArray;function Ot(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function jt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(tn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function Rn(n,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Pt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,re=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function he(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function _e(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=he(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var De=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(De[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,ot=null,V=null;function Re(n){if(n=fo(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=gl(i),rt(n.stateNode,n.type,i))}}function ge(n){ot?V?V.push(n):V=[n]:ot=n}function Le(){if(ot){var n=ot,i=V;if(V=ot=null,Re(n),i)for(n=0;n<i.length;n++)Re(i[n])}}function Ne(n,i){return n(i)}function xe(){}var qe=!1;function We(n,i,a){if(qe)return n(i,a);qe=!0;try{return Ne(n,i,a)}finally{qe=!1,(ot!==null||V!==null)&&(xe(),Le())}}function Ht(n,i){var a=n.stateNode;if(a===null)return null;var c=gl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ut=!1;if(f)try{var In={};Object.defineProperty(In,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Ut=!1}function di(n,i,a,c,d,m,T,F,B){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(Me){this.onError(Me)}}var ss=!1,Ws=null,as=!1,os=null,ru={onError:function(n){ss=!0,Ws=n}};function Qo(n,i,a,c,d,m,T,F,B){ss=!1,Ws=null,di.apply(ru,arguments)}function Jo(n,i,a,c,d,m,T,F,B){if(Qo.apply(this,arguments),ss){if(ss){var oe=Ws;ss=!1,Ws=null}else throw Error(t(198));as||(as=!0,os=oe)}}function Wn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Xs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Xa(n){if(Wn(n)!==n)throw Error(t(188))}function el(n){var i=n.alternate;if(!i){if(i=Wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Xa(d),n;if(m===c)return Xa(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,F=d.child;F;){if(F===a){T=!0,a=d,c=m;break}if(F===c){T=!0,c=d,a=m;break}F=F.sibling}if(!T){for(F=m.child;F;){if(F===a){T=!0,a=m,c=d;break}if(F===c){T=!0,c=m,a=d;break}F=F.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ls(n){return n=el(n),n!==null?qa(n):null}function qa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qa(n);if(i!==null)return i;n=n.sibling}return null}var cs=e.unstable_scheduleCallback,Ya=e.unstable_cancelCallback,tl=e.unstable_shouldYield,su=e.unstable_requestPaint,nn=e.unstable_now,au=e.unstable_getCurrentPriorityLevel,$a=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,be=null;function Ve(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:dt,Ye=Math.log,Je=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(Ye(n)/Je|0)|0}var ht=64,Ze=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var F=T&~d;F!==0?c=At(F):(m&=T,m!==0&&(c=At(m)))}else T=a&~d,T!==0?c=At(T):m!==0&&(c=At(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ae(i),d=1<<a,c|=n[a],i&=~d;return c}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Ae(m),F=1<<T,B=d[T];B===-1?((F&a)===0||(F&c)!==0)&&(d[T]=Qt(F,i)):B<=i&&(n.expiredLanes|=F),m&=~F}}function hn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ke(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function Cn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function vt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=a}function Kn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ae(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Zn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ae(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var _t=0;function ir(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,qt,bi,zt,Ri,Gi=!1,us=[],Ar=null,br=null,Rr=null,Ka=new Map,Za=new Map,Cr=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(n,i){switch(n){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ka.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(i.pointerId)}}function ja(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=fo(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Wv(n,i,a,c,d){switch(i){case"focusin":return Ar=ja(Ar,n,i,a,c,d),!0;case"dragenter":return br=ja(br,n,i,a,c,d),!0;case"mouseover":return Rr=ja(Rr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ka.set(m,ja(Ka.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Za.set(m,ja(Za.get(m)||null,n,i,a,c,d)),!0}return!1}function Kh(n){var i=fs(n.target);if(i!==null){var a=Wn(i);if(a!==null){if(i=a.tag,i===13){if(i=Xs(a),i!==null){n.blockedOn=i,Ri(n.priority,function(){bi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=lu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ce=c,a.target.dispatchEvent(c),Ce=null}else return i=fo(a),i!==null&&qt(i),n.blockedOn=a,!1;i.shift()}return!0}function Zh(n,i,a){nl(n)&&a.delete(i)}function Xv(){Gi=!1,Ar!==null&&nl(Ar)&&(Ar=null),br!==null&&nl(br)&&(br=null),Rr!==null&&nl(Rr)&&(Rr=null),Ka.forEach(Zh),Za.forEach(Zh)}function Qa(n,i){n.blockedOn===i&&(n.blockedOn=null,Gi||(Gi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xv)))}function Ja(n){function i(d){return Qa(d,n)}if(0<us.length){Qa(us[0],n);for(var a=1;a<us.length;a++){var c=us[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ar!==null&&Qa(Ar,n),br!==null&&Qa(br,n),Rr!==null&&Qa(Rr,n),Ka.forEach(i),Za.forEach(i),a=0;a<Cr.length;a++)c=Cr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Cr.length&&(a=Cr[0],a.blockedOn===null);)Kh(a),a.blockedOn===null&&Cr.shift()}var qs=A.ReactCurrentBatchConfig,il=!0;function qv(n,i,a,c){var d=_t,m=qs.transition;qs.transition=null;try{_t=1,ou(n,i,a,c)}finally{_t=d,qs.transition=m}}function Yv(n,i,a,c){var d=_t,m=qs.transition;qs.transition=null;try{_t=4,ou(n,i,a,c)}finally{_t=d,qs.transition=m}}function ou(n,i,a,c){if(il){var d=lu(n,i,a,c);if(d===null)Tu(n,i,c,rl,a),$h(n,c);else if(Wv(d,n,i,a,c))c.stopPropagation();else if($h(n,c),i&4&&-1<Gv.indexOf(n)){for(;d!==null;){var m=fo(d);if(m!==null&&Ft(m),m=lu(n,i,a,c),m===null&&Tu(n,i,c,rl,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Tu(n,i,c,null,a)}}var rl=null;function lu(n,i,a,c){if(rl=null,n=et(c),n=fs(n),n!==null)if(i=Wn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Xs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return rl=n,null}function jh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(au()){case $a:return 1;case b:return 4;case q:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Pr=null,cu=null,sl=null;function Qh(){if(sl)return sl;var n,i=cu,a=i.length,c,d="value"in Pr?Pr.value:Pr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return sl=d.slice(n,1<c?1-c:void 0)}function al(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ol(){return!0}function Jh(){return!1}function ri(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ol:Jh,this.isPropagationStopped=Jh,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),i}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=ri(Ys),eo=ue({},Ys,{view:0,detail:0}),$v=ri(eo),fu,du,to,ll=ue({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==to&&(to&&n.type==="mousemove"?(fu=n.screenX-to.screenX,du=n.screenY-to.screenY):du=fu=0,to=n),fu)},movementY:function(n){return"movementY"in n?n.movementY:du}}),ep=ri(ll),Kv=ue({},ll,{dataTransfer:0}),Zv=ri(Kv),jv=ue({},eo,{relatedTarget:0}),hu=ri(jv),Qv=ue({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=ri(Qv),e_=ue({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),t_=ri(e_),n_=ue({},Ys,{data:0}),tp=ri(n_),i_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=s_[n])?!!i[n]:!1}function pu(){return a_}var o_=ue({},eo,{key:function(n){if(n.key){var i=i_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?r_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(n){return n.type==="keypress"?al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),l_=ri(o_),c_=ue({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=ri(c_),u_=ue({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),f_=ri(u_),d_=ue({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),h_=ri(d_),p_=ue({},ll,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),m_=ri(p_),g_=[9,13,27,32],mu=f&&"CompositionEvent"in window,no=null;f&&"documentMode"in document&&(no=document.documentMode);var v_=f&&"TextEvent"in window&&!no,ip=f&&(!mu||no&&8<no&&11>=no),rp=" ",sp=!1;function ap(n,i){switch(n){case"keyup":return g_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function __(n,i){switch(n){case"compositionend":return op(i);case"keypress":return i.which!==32?null:(sp=!0,rp);case"textInput":return n=i.data,n===rp&&sp?null:n;default:return null}}function x_(n,i){if($s)return n==="compositionend"||!mu&&ap(n,i)?(n=Qh(),sl=cu=Pr=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ip&&i.locale!=="ko"?null:i.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!y_[n.type]:i==="textarea"}function cp(n,i,a,c){ge(c),i=hl(i,"onChange"),0<i.length&&(a=new uu("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var io=null,ro=null;function S_(n){bp(n,0)}function cl(n){var i=Js(n);if(Kt(i))return n}function M_(n,i){if(n==="change")return i}var up=!1;if(f){var gu;if(f){var vu="oninput"in document;if(!vu){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),vu=typeof fp.oninput=="function"}gu=vu}else gu=!1;up=gu&&(!document.documentMode||9<document.documentMode)}function dp(){io&&(io.detachEvent("onpropertychange",hp),ro=io=null)}function hp(n){if(n.propertyName==="value"&&cl(ro)){var i=[];cp(i,ro,n,et(n)),We(S_,i)}}function E_(n,i,a){n==="focusin"?(dp(),io=i,ro=a,io.attachEvent("onpropertychange",hp)):n==="focusout"&&dp()}function w_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cl(ro)}function T_(n,i){if(n==="click")return cl(i)}function A_(n,i){if(n==="input"||n==="change")return cl(i)}function b_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ci=typeof Object.is=="function"?Object.is:b_;function so(n,i){if(Ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Ci(n[d],i[d]))return!1}return!0}function pp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function mp(n,i){var a=pp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pp(a)}}function gp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?gp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vp(){for(var n=window,i=mt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=mt(n.document)}return i}function _u(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function R_(n){var i=vp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&gp(a.ownerDocument.documentElement,a)){if(c!==null&&_u(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=mp(a,m);var T=mp(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var C_=f&&"documentMode"in document&&11>=document.documentMode,Ks=null,xu=null,ao=null,yu=!1;function _p(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Ks==null||Ks!==mt(c)||(c=Ks,"selectionStart"in c&&_u(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ao&&so(ao,c)||(ao=c,c=hl(xu,"onSelect"),0<c.length&&(i=new uu("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ks)))}function ul(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Zs={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Su={},xp={};f&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function fl(n){if(Su[n])return Su[n];if(!Zs[n])return n;var i=Zs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xp)return Su[n]=i[a];return n}var yp=fl("animationend"),Sp=fl("animationiteration"),Mp=fl("animationstart"),Ep=fl("transitionend"),wp=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,i){wp.set(n,i),l(i,[n])}for(var Mu=0;Mu<Tp.length;Mu++){var Eu=Tp[Mu],P_=Eu.toLowerCase(),L_=Eu[0].toUpperCase()+Eu.slice(1);Lr(P_,"on"+L_)}Lr(yp,"onAnimationEnd"),Lr(Sp,"onAnimationIteration"),Lr(Mp,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Ep,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Ap(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Jo(c,i,void 0,n),n.currentTarget=null}function bp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var F=c[T],B=F.instance,oe=F.currentTarget;if(F=F.listener,B!==m&&d.isPropagationStopped())break e;Ap(d,F,oe),m=B}else for(T=0;T<c.length;T++){if(F=c[T],B=F.instance,oe=F.currentTarget,F=F.listener,B!==m&&d.isPropagationStopped())break e;Ap(d,F,oe),m=B}}}if(as)throw n=os,as=!1,os=null,n}function Yt(n,i){var a=i[Lu];a===void 0&&(a=i[Lu]=new Set);var c=n+"__bubble";a.has(c)||(Rp(i,n,2,!1),a.add(c))}function wu(n,i,a){var c=0;i&&(c|=4),Rp(a,n,c,i)}var dl="_reactListening"+Math.random().toString(36).slice(2);function lo(n){if(!n[dl]){n[dl]=!0,s.forEach(function(a){a!=="selectionchange"&&(D_.has(a)||wu(a,!1,n),wu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[dl]||(i[dl]=!0,wu("selectionchange",!1,i))}}function Rp(n,i,a,c){switch(jh(i)){case 1:var d=qv;break;case 4:d=Yv;break;default:d=ou}a=d.bind(null,i,a,n),d=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Tu(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;T=T.return}for(;F!==null;){if(T=fs(F),T===null)return;if(B=T.tag,B===5||B===6){c=m=T;continue e}F=F.parentNode}}c=c.return}We(function(){var oe=m,Me=et(a),Ee=[];e:{var Se=wp.get(n);if(Se!==void 0){var ze=uu,Xe=n;switch(n){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":ze=l_;break;case"focusin":Xe="focus",ze=hu;break;case"focusout":Xe="blur",ze=hu;break;case"beforeblur":case"afterblur":ze=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=f_;break;case yp:case Sp:case Mp:ze=Jv;break;case Ep:ze=h_;break;case"scroll":ze=$v;break;case"wheel":ze=m_;break;case"copy":case"cut":case"paste":ze=t_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=np}var $e=(i&4)!==0,fn=!$e&&n==="scroll",J=$e?Se!==null?Se+"Capture":null:Se;$e=[];for(var G=oe,ie;G!==null;){ie=G;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,J!==null&&(Te=Ht(G,J),Te!=null&&$e.push(co(G,Te,ie)))),fn)break;G=G.return}0<$e.length&&(Se=new ze(Se,Xe,null,a,Me),Ee.push({event:Se,listeners:$e}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",Se&&a!==Ce&&(Xe=a.relatedTarget||a.fromElement)&&(fs(Xe)||Xe[rr]))break e;if((ze||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,ze?(Xe=a.relatedTarget||a.toElement,ze=oe,Xe=Xe?fs(Xe):null,Xe!==null&&(fn=Wn(Xe),Xe!==fn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=oe),ze!==Xe)){if($e=ep,Te="onMouseLeave",J="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&($e=np,Te="onPointerLeave",J="onPointerEnter",G="pointer"),fn=ze==null?Se:Js(ze),ie=Xe==null?Se:Js(Xe),Se=new $e(Te,G+"leave",ze,a,Me),Se.target=fn,Se.relatedTarget=ie,Te=null,fs(Me)===oe&&($e=new $e(J,G+"enter",Xe,a,Me),$e.target=ie,$e.relatedTarget=fn,Te=$e),fn=Te,ze&&Xe)t:{for($e=ze,J=Xe,G=0,ie=$e;ie;ie=js(ie))G++;for(ie=0,Te=J;Te;Te=js(Te))ie++;for(;0<G-ie;)$e=js($e),G--;for(;0<ie-G;)J=js(J),ie--;for(;G--;){if($e===J||J!==null&&$e===J.alternate)break t;$e=js($e),J=js(J)}$e=null}else $e=null;ze!==null&&Cp(Ee,Se,ze,$e,!1),Xe!==null&&fn!==null&&Cp(Ee,fn,Xe,$e,!0)}}e:{if(Se=oe?Js(oe):window,ze=Se.nodeName&&Se.nodeName.toLowerCase(),ze==="select"||ze==="input"&&Se.type==="file")var Qe=M_;else if(lp(Se))if(up)Qe=A_;else{Qe=w_;var st=E_}else(ze=Se.nodeName)&&ze.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Qe=T_);if(Qe&&(Qe=Qe(n,oe))){cp(Ee,Qe,a,Me);break e}st&&st(n,Se,oe),n==="focusout"&&(st=Se._wrapperState)&&st.controlled&&Se.type==="number"&&ln(Se,"number",Se.value)}switch(st=oe?Js(oe):window,n){case"focusin":(lp(st)||st.contentEditable==="true")&&(Ks=st,xu=oe,ao=null);break;case"focusout":ao=xu=Ks=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,_p(Ee,a,Me);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":_p(Ee,a,Me)}var at;if(mu)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else $s?ap(n,a)&&(ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(ip&&a.locale!=="ko"&&($s||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&$s&&(at=Qh()):(Pr=Me,cu="value"in Pr?Pr.value:Pr.textContent,$s=!0)),st=hl(oe,ct),0<st.length&&(ct=new tp(ct,n,null,a,Me),Ee.push({event:ct,listeners:st}),at?ct.data=at:(at=op(a),at!==null&&(ct.data=at)))),(at=v_?__(n,a):x_(n,a))&&(oe=hl(oe,"onBeforeInput"),0<oe.length&&(Me=new tp("onBeforeInput","beforeinput",null,a,Me),Ee.push({event:Me,listeners:oe}),Me.data=at))}bp(Ee,i)})}function co(n,i,a){return{instance:n,listener:i,currentTarget:a}}function hl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ht(n,a),m!=null&&c.unshift(co(n,m,d)),m=Ht(n,i),m!=null&&c.push(co(n,m,d))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cp(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var F=a,B=F.alternate,oe=F.stateNode;if(B!==null&&B===c)break;F.tag===5&&oe!==null&&(F=oe,d?(B=Ht(a,m),B!=null&&T.unshift(co(a,B,F))):d||(B=Ht(a,m),B!=null&&T.push(co(a,B,F)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var I_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function Pp(n){return(typeof n=="string"?n:""+n).replace(I_,`
`).replace(N_,"")}function pl(n,i,a){if(i=Pp(i),Pp(n)!==i&&a)throw Error(t(425))}function ml(){}var Au=null,bu=null;function Ru(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,U_=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,F_=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(n){return Lp.resolve(null).then(n).catch(O_)}:Cu;function O_(n){setTimeout(function(){throw n})}function Pu(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ja(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ja(i)}function Dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Dp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Qs,uo="__reactProps$"+Qs,rr="__reactContainer$"+Qs,Lu="__reactEvents$"+Qs,k_="__reactListeners$"+Qs,z_="__reactHandles$"+Qs;function fs(n){var i=n[Wi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[rr]||a[Wi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Dp(n);n!==null;){if(a=n[Wi])return a;n=Dp(n)}return i}n=a,a=n.parentNode}return null}function fo(n){return n=n[Wi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function gl(n){return n[uo]||null}var Du=[],ea=-1;function Ir(n){return{current:n}}function $t(n){0>ea||(n.current=Du[ea],Du[ea]=null,ea--)}function Xt(n,i){ea++,Du[ea]=n.current,n.current=i}var Nr={},Nn=Ir(Nr),jn=Ir(!1),ds=Nr;function ta(n,i){var a=n.type.contextTypes;if(!a)return Nr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qn(n){return n=n.childContextTypes,n!=null}function vl(){$t(jn),$t(Nn)}function Ip(n,i,a){if(Nn.current!==Nr)throw Error(t(168));Xt(Nn,i),Xt(jn,a)}function Np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return ue({},a,c)}function _l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,ds=Nn.current,Xt(Nn,n),Xt(jn,jn.current),!0}function Up(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Np(n,i,ds),c.__reactInternalMemoizedMergedChildContext=n,$t(jn),$t(Nn),Xt(Nn,n)):$t(jn),Xt(jn,a)}var sr=null,xl=!1,Iu=!1;function Fp(n){sr===null?sr=[n]:sr.push(n)}function B_(n){xl=!0,Fp(n)}function Ur(){if(!Iu&&sr!==null){Iu=!0;var n=0,i=_t;try{var a=sr;for(_t=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}sr=null,xl=!1}catch(d){throw sr!==null&&(sr=sr.slice(n+1)),cs($a,Ur),d}finally{_t=i,Iu=!1}}return null}var na=[],ia=0,yl=null,Sl=0,hi=[],pi=0,hs=null,ar=1,or="";function ps(n,i){na[ia++]=Sl,na[ia++]=yl,yl=n,Sl=i}function Op(n,i,a){hi[pi++]=ar,hi[pi++]=or,hi[pi++]=hs,hs=n;var c=ar;n=or;var d=32-Ae(c)-1;c&=~(1<<d),a+=1;var m=32-Ae(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,ar=1<<32-Ae(i)+d|a<<d|c,or=m+n}else ar=1<<m|a<<d|c,or=n}function Nu(n){n.return!==null&&(ps(n,1),Op(n,1,0))}function Uu(n){for(;n===yl;)yl=na[--ia],na[ia]=null,Sl=na[--ia],na[ia]=null;for(;n===hs;)hs=hi[--pi],hi[pi]=null,or=hi[--pi],hi[pi]=null,ar=hi[--pi],hi[pi]=null}var si=null,ai=null,Jt=!1,Pi=null;function kp(n,i){var a=_i(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function zp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,si=n,ai=Dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,si=n,ai=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=hs!==null?{id:ar,overflow:or}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=_i(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,si=n,ai=null,!0):!1;default:return!1}}function Fu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ou(n){if(Jt){var i=ai;if(i){var a=i;if(!zp(n,i)){if(Fu(n))throw Error(t(418));i=Dr(a.nextSibling);var c=si;i&&zp(n,i)?kp(c,a):(n.flags=n.flags&-4097|2,Jt=!1,si=n)}}else{if(Fu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,si=n}}}function Bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function Ml(n){if(n!==si)return!1;if(!Jt)return Bp(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ru(n.type,n.memoizedProps)),i&&(i=ai)){if(Fu(n))throw Vp(),Error(t(418));for(;i;)kp(n,i),i=Dr(i.nextSibling)}if(Bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ai=Dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ai=null}}else ai=si?Dr(n.stateNode.nextSibling):null;return!0}function Vp(){for(var n=ai;n;)n=Dr(n.nextSibling)}function ra(){ai=si=null,Jt=!1}function ku(n){Pi===null?Pi=[n]:Pi.push(n)}var V_=A.ReactCurrentBatchConfig;function ho(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var F=d.refs;T===null?delete F[m]:F[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function El(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hp(n){var i=n._init;return i(n._payload)}function Gp(n){function i(J,G){if(n){var ie=J.deletions;ie===null?(J.deletions=[G],J.flags|=16):ie.push(G)}}function a(J,G){if(!n)return null;for(;G!==null;)i(J,G),G=G.sibling;return null}function c(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function d(J,G){return J=Gr(J,G),J.index=0,J.sibling=null,J}function m(J,G,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<G?(J.flags|=2,G):ie):(J.flags|=2,G)):(J.flags|=1048576,G)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,G,ie,Te){return G===null||G.tag!==6?(G=Pf(ie,J.mode,Te),G.return=J,G):(G=d(G,ie),G.return=J,G)}function B(J,G,ie,Te){var Qe=ie.type;return Qe===U?Me(J,G,ie.props.children,Te,ie.key):G!==null&&(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===fe&&Hp(Qe)===G.type)?(Te=d(G,ie.props),Te.ref=ho(J,G,ie),Te.return=J,Te):(Te=Yl(ie.type,ie.key,ie.props,null,J.mode,Te),Te.ref=ho(J,G,ie),Te.return=J,Te)}function oe(J,G,ie,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=Lf(ie,J.mode,Te),G.return=J,G):(G=d(G,ie.children||[]),G.return=J,G)}function Me(J,G,ie,Te,Qe){return G===null||G.tag!==7?(G=Ms(ie,J.mode,Te,Qe),G.return=J,G):(G=d(G,ie),G.return=J,G)}function Ee(J,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Pf(""+G,J.mode,ie),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return ie=Yl(G.type,G.key,G.props,null,J.mode,ie),ie.ref=ho(J,null,G),ie.return=J,ie;case C:return G=Lf(G,J.mode,ie),G.return=J,G;case fe:var Te=G._init;return Ee(J,Te(G._payload),ie)}if(tn(G)||le(G))return G=Ms(G,J.mode,ie,null),G.return=J,G;El(J,G)}return null}function Se(J,G,ie,Te){var Qe=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Qe!==null?null:F(J,G,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:return ie.key===Qe?B(J,G,ie,Te):null;case C:return ie.key===Qe?oe(J,G,ie,Te):null;case fe:return Qe=ie._init,Se(J,G,Qe(ie._payload),Te)}if(tn(ie)||le(ie))return Qe!==null?null:Me(J,G,ie,Te,null);El(J,ie)}return null}function ze(J,G,ie,Te,Qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return J=J.get(ie)||null,F(G,J,""+Te,Qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return J=J.get(Te.key===null?ie:Te.key)||null,B(G,J,Te,Qe);case C:return J=J.get(Te.key===null?ie:Te.key)||null,oe(G,J,Te,Qe);case fe:var st=Te._init;return ze(J,G,ie,st(Te._payload),Qe)}if(tn(Te)||le(Te))return J=J.get(ie)||null,Me(G,J,Te,Qe,null);El(G,Te)}return null}function Xe(J,G,ie,Te){for(var Qe=null,st=null,at=G,ct=G=0,Tn=null;at!==null&&ct<ie.length;ct++){at.index>ct?(Tn=at,at=null):Tn=at.sibling;var Lt=Se(J,at,ie[ct],Te);if(Lt===null){at===null&&(at=Tn);break}n&&at&&Lt.alternate===null&&i(J,at),G=m(Lt,G,ct),st===null?Qe=Lt:st.sibling=Lt,st=Lt,at=Tn}if(ct===ie.length)return a(J,at),Jt&&ps(J,ct),Qe;if(at===null){for(;ct<ie.length;ct++)at=Ee(J,ie[ct],Te),at!==null&&(G=m(at,G,ct),st===null?Qe=at:st.sibling=at,st=at);return Jt&&ps(J,ct),Qe}for(at=c(J,at);ct<ie.length;ct++)Tn=ze(at,J,ct,ie[ct],Te),Tn!==null&&(n&&Tn.alternate!==null&&at.delete(Tn.key===null?ct:Tn.key),G=m(Tn,G,ct),st===null?Qe=Tn:st.sibling=Tn,st=Tn);return n&&at.forEach(function(Wr){return i(J,Wr)}),Jt&&ps(J,ct),Qe}function $e(J,G,ie,Te){var Qe=le(ie);if(typeof Qe!="function")throw Error(t(150));if(ie=Qe.call(ie),ie==null)throw Error(t(151));for(var st=Qe=null,at=G,ct=G=0,Tn=null,Lt=ie.next();at!==null&&!Lt.done;ct++,Lt=ie.next()){at.index>ct?(Tn=at,at=null):Tn=at.sibling;var Wr=Se(J,at,Lt.value,Te);if(Wr===null){at===null&&(at=Tn);break}n&&at&&Wr.alternate===null&&i(J,at),G=m(Wr,G,ct),st===null?Qe=Wr:st.sibling=Wr,st=Wr,at=Tn}if(Lt.done)return a(J,at),Jt&&ps(J,ct),Qe;if(at===null){for(;!Lt.done;ct++,Lt=ie.next())Lt=Ee(J,Lt.value,Te),Lt!==null&&(G=m(Lt,G,ct),st===null?Qe=Lt:st.sibling=Lt,st=Lt);return Jt&&ps(J,ct),Qe}for(at=c(J,at);!Lt.done;ct++,Lt=ie.next())Lt=ze(at,J,ct,Lt.value,Te),Lt!==null&&(n&&Lt.alternate!==null&&at.delete(Lt.key===null?ct:Lt.key),G=m(Lt,G,ct),st===null?Qe=Lt:st.sibling=Lt,st=Lt);return n&&at.forEach(function(yx){return i(J,yx)}),Jt&&ps(J,ct),Qe}function fn(J,G,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===U&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:e:{for(var Qe=ie.key,st=G;st!==null;){if(st.key===Qe){if(Qe=ie.type,Qe===U){if(st.tag===7){a(J,st.sibling),G=d(st,ie.props.children),G.return=J,J=G;break e}}else if(st.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===fe&&Hp(Qe)===st.type){a(J,st.sibling),G=d(st,ie.props),G.ref=ho(J,st,ie),G.return=J,J=G;break e}a(J,st);break}else i(J,st);st=st.sibling}ie.type===U?(G=Ms(ie.props.children,J.mode,Te,ie.key),G.return=J,J=G):(Te=Yl(ie.type,ie.key,ie.props,null,J.mode,Te),Te.ref=ho(J,G,ie),Te.return=J,J=Te)}return T(J);case C:e:{for(st=ie.key;G!==null;){if(G.key===st)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){a(J,G.sibling),G=d(G,ie.children||[]),G.return=J,J=G;break e}else{a(J,G);break}else i(J,G);G=G.sibling}G=Lf(ie,J.mode,Te),G.return=J,J=G}return T(J);case fe:return st=ie._init,fn(J,G,st(ie._payload),Te)}if(tn(ie))return Xe(J,G,ie,Te);if(le(ie))return $e(J,G,ie,Te);El(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,G!==null&&G.tag===6?(a(J,G.sibling),G=d(G,ie),G.return=J,J=G):(a(J,G),G=Pf(ie,J.mode,Te),G.return=J,J=G),T(J)):a(J,G)}return fn}var sa=Gp(!0),Wp=Gp(!1),wl=Ir(null),Tl=null,aa=null,zu=null;function Bu(){zu=aa=Tl=null}function Vu(n){var i=wl.current;$t(wl),n._currentValue=i}function Hu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function oa(n,i){Tl=n,zu=aa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jn=!0),n.firstContext=null)}function mi(n){var i=n._currentValue;if(zu!==n)if(n={context:n,memoizedValue:i,next:null},aa===null){if(Tl===null)throw Error(t(308));aa=n,Tl.dependencies={lanes:0,firstContext:n}}else aa=aa.next=n;return i}var ms=null;function Gu(n){ms===null?ms=[n]:ms.push(n)}function Xp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Gu(i)):(a.next=d.next,d.next=a),i.interleaved=a,lr(n,c)}function lr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function Wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,lr(n,a)}return d=c.interleaved,d===null?(i.next=i,Gu(c)):(i.next=d.next,d.next=i),c.interleaved=i,lr(n,a)}function Al(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Zn(n,a)}}function Yp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function bl(n,i,a,c){var d=n.updateQueue;Fr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var B=F,oe=B.next;B.next=null,T===null?m=oe:T.next=oe,T=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==T&&(F===null?Me.firstBaseUpdate=oe:F.next=oe,Me.lastBaseUpdate=B))}if(m!==null){var Ee=d.baseState;T=0,Me=oe=B=null,F=m;do{var Se=F.lane,ze=F.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:ze,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=n,$e=F;switch(Se=i,ze=a,$e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){Ee=Xe.call(ze,Ee,Se);break e}Ee=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,Se=typeof Xe=="function"?Xe.call(ze,Ee,Se):Xe,Se==null)break e;Ee=ue({},Ee,Se);break e;case 2:Fr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Se=d.effects,Se===null?d.effects=[F]:Se.push(F))}else ze={eventTime:ze,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(oe=Me=ze,B=Ee):Me=Me.next=ze,T|=Se;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,d.lastBaseUpdate=Se,d.shared.pending=null}}while(!0);if(Me===null&&(B=Ee),d.baseState=B,d.firstBaseUpdate=oe,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);_s|=T,n.lanes=T,n.memoizedState=Ee}}function $p(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var po={},Xi=Ir(po),mo=Ir(po),go=Ir(po);function gs(n){if(n===po)throw Error(t(174));return n}function Xu(n,i){switch(Xt(go,i),Xt(mo,n),Xt(Xi,po),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}$t(Xi),Xt(Xi,i)}function la(){$t(Xi),$t(mo),$t(go)}function Kp(n){gs(go.current);var i=gs(Xi.current),a=E(i,n.type);i!==a&&(Xt(mo,n),Xt(Xi,a))}function qu(n){mo.current===n&&($t(Xi),$t(mo))}var rn=Ir(0);function Rl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function $u(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var Cl=A.ReactCurrentDispatcher,Ku=A.ReactCurrentBatchConfig,vs=0,sn=null,gn=null,En=null,Pl=!1,vo=!1,_o=0,H_=0;function Un(){throw Error(t(321))}function Zu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ci(n[a],i[a]))return!1;return!0}function ju(n,i,a,c,d,m){if(vs=m,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Cl.current=n===null||n.memoizedState===null?q_:Y_,n=a(c,d),vo){m=0;do{if(vo=!1,_o=0,25<=m)throw Error(t(301));m+=1,En=gn=null,i.updateQueue=null,Cl.current=$_,n=a(c,d)}while(vo)}if(Cl.current=Il,i=gn!==null&&gn.next!==null,vs=0,En=gn=sn=null,Pl=!1,i)throw Error(t(300));return n}function Qu(){var n=_o!==0;return _o=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?sn.memoizedState=En=n:En=En.next=n,En}function gi(){if(gn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var i=En===null?sn.memoizedState:En.next;if(i!==null)En=i,gn=n;else{if(n===null)throw Error(t(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},En===null?sn.memoizedState=En=n:En=En.next=n}return En}function xo(n,i){return typeof i=="function"?i(n):i}function Ju(n){var i=gi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=T=null,B=null,oe=m;do{var Me=oe.lane;if((vs&Me)===Me)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Ee={lane:Me,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(F=B=Ee,T=c):B=B.next=Ee,sn.lanes|=Me,_s|=Me}oe=oe.next}while(oe!==null&&oe!==m);B===null?T=c:B.next=F,Ci(c,i.memoizedState)||(Jn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,sn.lanes|=m,_s|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ef(n){var i=gi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);Ci(m,i.memoizedState)||(Jn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Zp(){}function jp(n,i){var a=sn,c=gi(),d=i(),m=!Ci(c.memoizedState,d);if(m&&(c.memoizedState=d,Jn=!0),c=c.queue,tf(em.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,yo(9,Jp.bind(null,a,c,d,i),void 0,null),wn===null)throw Error(t(349));(vs&30)!==0||Qp(a,i,d)}return d}function Qp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Jp(n,i,a,c){i.value=a,i.getSnapshot=c,tm(i)&&nm(n)}function em(n,i,a){return a(function(){tm(i)&&nm(n)})}function tm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ci(n,a)}catch{return!0}}function nm(n){var i=lr(n,1);i!==null&&Ni(i,n,1,-1)}function im(n){var i=qi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:n},i.queue=n,n=n.dispatch=X_.bind(null,sn,n),[i.memoizedState,n]}function yo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function rm(){return gi().memoizedState}function Ll(n,i,a,c){var d=qi();sn.flags|=n,d.memoizedState=yo(1|i,a,void 0,c===void 0?null:c)}function Dl(n,i,a,c){var d=gi();c=c===void 0?null:c;var m=void 0;if(gn!==null){var T=gn.memoizedState;if(m=T.destroy,c!==null&&Zu(c,T.deps)){d.memoizedState=yo(i,a,m,c);return}}sn.flags|=n,d.memoizedState=yo(1|i,a,m,c)}function sm(n,i){return Ll(8390656,8,n,i)}function tf(n,i){return Dl(2048,8,n,i)}function am(n,i){return Dl(4,2,n,i)}function om(n,i){return Dl(4,4,n,i)}function lm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cm(n,i,a){return a=a!=null?a.concat([n]):null,Dl(4,4,lm.bind(null,i,n),a)}function nf(){}function um(n,i){var a=gi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function fm(n,i){var a=gi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function dm(n,i,a){return(vs&21)===0?(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=a):(Ci(a,i)||(a=ke(),sn.lanes|=a,_s|=a,n.baseState=!0),i)}function G_(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var c=Ku.transition;Ku.transition={};try{n(!1),i()}finally{_t=a,Ku.transition=c}}function hm(){return gi().memoizedState}function W_(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},pm(n))mm(i,a);else if(a=Xp(n,i,a,c),a!==null){var d=qn();Ni(a,n,c,d),gm(a,i,c)}}function X_(n,i,a){var c=Vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(pm(n))mm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,F=m(T,a);if(d.hasEagerState=!0,d.eagerState=F,Ci(F,T)){var B=i.interleaved;B===null?(d.next=d,Gu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Xp(n,i,d,c),a!==null&&(d=qn(),Ni(a,n,c,d),gm(a,i,c))}}function pm(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function mm(n,i){vo=Pl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function gm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Zn(n,a)}}var Il={readContext:mi,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},q_={readContext:mi,useCallback:function(n,i){return qi().memoizedState=[n,i===void 0?null:i],n},useContext:mi,useEffect:sm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ll(4194308,4,lm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ll(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ll(4,2,n,i)},useMemo:function(n,i){var a=qi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=qi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=W_.bind(null,sn,n),[c.memoizedState,n]},useRef:function(n){var i=qi();return n={current:n},i.memoizedState=n},useState:im,useDebugValue:nf,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=im(!1),i=n[0];return n=G_.bind(null,n[1]),qi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=sn,d=qi();if(Jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wn===null)throw Error(t(349));(vs&30)!==0||Qp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,sm(em.bind(null,c,m,n),[n]),c.flags|=2048,yo(9,Jp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=qi(),i=wn.identifierPrefix;if(Jt){var a=or,c=ar;a=(c&~(1<<32-Ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=_o++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=H_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Y_={readContext:mi,useCallback:um,useContext:mi,useEffect:tf,useImperativeHandle:cm,useInsertionEffect:am,useLayoutEffect:om,useMemo:fm,useReducer:Ju,useRef:rm,useState:function(){return Ju(xo)},useDebugValue:nf,useDeferredValue:function(n){var i=gi();return dm(i,gn.memoizedState,n)},useTransition:function(){var n=Ju(xo)[0],i=gi().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:jp,useId:hm,unstable_isNewReconciler:!1},$_={readContext:mi,useCallback:um,useContext:mi,useEffect:tf,useImperativeHandle:cm,useInsertionEffect:am,useLayoutEffect:om,useMemo:fm,useReducer:ef,useRef:rm,useState:function(){return ef(xo)},useDebugValue:nf,useDeferredValue:function(n){var i=gi();return gn===null?i.memoizedState=n:dm(i,gn.memoizedState,n)},useTransition:function(){var n=ef(xo)[0],i=gi().memoizedState;return[n,i]},useMutableSource:Zp,useSyncExternalStore:jp,useId:hm,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function rf(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Nl={isMounted:function(n){return(n=n._reactInternals)?Wn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qn(),d=Vr(n),m=cr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Ni(i,n,d,c),Al(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qn(),d=Vr(n),m=cr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Or(n,m,d),i!==null&&(Ni(i,n,d,c),Al(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qn(),c=Vr(n),d=cr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Or(n,d,c),i!==null&&(Ni(i,n,c,a),Al(i,n,c))}};function vm(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!so(a,c)||!so(d,m):!0}function _m(n,i,a){var c=!1,d=Nr,m=i.contextType;return typeof m=="object"&&m!==null?m=mi(m):(d=Qn(i)?ds:Nn.current,c=i.contextTypes,m=(c=c!=null)?ta(n,d):Nr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Nl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function xm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Nl.enqueueReplaceState(i,i.state,null)}function sf(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Wu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=mi(m):(m=Qn(i)?ds:Nn.current,d.context=ta(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(rf(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Nl.enqueueReplaceState(d,d.state,null),bl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ca(n,i){try{var a="",c=i;do a+=Ge(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function af(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function of(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var K_=typeof WeakMap=="function"?WeakMap:Map;function ym(n,i,a){a=cr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Vl||(Vl=!0,Mf=c),of(n,i)},a}function Sm(n,i,a){a=cr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){of(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){of(n,i),typeof c!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Mm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new K_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=cx.bind(null,n,i,a),i.then(n,n))}function Em(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=cr(-1,1),i.tag=2,Or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Z_=A.ReactCurrentOwner,Jn=!1;function Xn(n,i,a,c){i.child=n===null?Wp(i,null,a,c):sa(i,n.child,a,c)}function Tm(n,i,a,c,d){a=a.render;var m=i.ref;return oa(i,d),c=ju(n,i,a,c,m,d),a=Qu(),n!==null&&!Jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ur(n,i,d)):(Jt&&a&&Nu(i),i.flags|=1,Xn(n,i,c,d),i.child)}function Am(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Cf(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,bm(n,i,m,c,d)):(n=Yl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(T,c)&&n.ref===i.ref)return ur(n,i,d)}return i.flags|=1,n=Gr(m,c),n.ref=i.ref,n.return=i,i.child=n}function bm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(so(m,c)&&n.ref===i.ref)if(Jn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Jn=!0);else return i.lanes=n.lanes,ur(n,i,d)}return lf(n,i,a,c,d)}function Rm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(fa,oi),oi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(fa,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Xt(fa,oi),oi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Xt(fa,oi),oi|=c;return Xn(n,i,d,a),i.child}function Cm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function lf(n,i,a,c,d){var m=Qn(a)?ds:Nn.current;return m=ta(i,m),oa(i,d),a=ju(n,i,a,c,m,d),c=Qu(),n!==null&&!Jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ur(n,i,d)):(Jt&&c&&Nu(i),i.flags|=1,Xn(n,i,a,d),i.child)}function Pm(n,i,a,c,d){if(Qn(a)){var m=!0;_l(i)}else m=!1;if(oa(i,d),i.stateNode===null)Fl(n,i),_m(i,a,c),sf(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var B=T.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=mi(oe):(oe=Qn(a)?ds:Nn.current,oe=ta(i,oe));var Me=a.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==c||B!==oe)&&xm(i,T,c,oe),Fr=!1;var Se=i.memoizedState;T.state=Se,bl(i,c,T,d),B=i.memoizedState,F!==c||Se!==B||jn.current||Fr?(typeof Me=="function"&&(rf(i,a,Me,c),B=i.memoizedState),(F=Fr||vm(i,a,F,c,Se,B,oe))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),T.props=c,T.state=B,T.context=oe,c=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,qp(n,i),F=i.memoizedProps,oe=i.type===i.elementType?F:Li(i.type,F),T.props=oe,Ee=i.pendingProps,Se=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=mi(B):(B=Qn(a)?ds:Nn.current,B=ta(i,B));var ze=a.getDerivedStateFromProps;(Me=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Ee||Se!==B)&&xm(i,T,c,B),Fr=!1,Se=i.memoizedState,T.state=Se,bl(i,c,T,d);var Xe=i.memoizedState;F!==Ee||Se!==Xe||jn.current||Fr?(typeof ze=="function"&&(rf(i,a,ze,c),Xe=i.memoizedState),(oe=Fr||vm(i,a,oe,c,Se,Xe,B)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,B)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=B,c=oe):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return cf(n,i,a,c,m,d)}function cf(n,i,a,c,d,m){Cm(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Up(i,a,!1),ur(n,i,m);c=i.stateNode,Z_.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=sa(i,n.child,null,m),i.child=sa(i,null,F,m)):Xn(n,i,F,m),i.memoizedState=c.state,d&&Up(i,a,!0),i.child}function Lm(n){var i=n.stateNode;i.pendingContext?Ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ip(n,i.context,!1),Xu(n,i.containerInfo)}function Dm(n,i,a,c,d){return ra(),ku(d),i.flags|=256,Xn(n,i,a,c),i.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function ff(n){return{baseLanes:n,cachePool:null,transitions:null}}function Im(n,i,a){var c=i.pendingProps,d=rn.current,m=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xt(rn,d&1),n===null)return Ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=$l(T,c,0,null),n=Ms(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ff(a),i.memoizedState=uf,n):df(i,T));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return j_(n,i,T,c,F,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,F=d.sibling;var B={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Gr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Gr(F,m):(m=Ms(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?ff(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=uf,c}return m=n.child,n=m.sibling,c=Gr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function df(n,i){return i=$l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ul(n,i,a,c){return c!==null&&ku(c),sa(i,n.child,null,a),n=df(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function j_(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=af(Error(t(422))),Ul(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=$l({mode:"visible",children:c.children},d,0,null),m=Ms(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&sa(i,n.child,null,T),i.child.memoizedState=ff(T),i.memoizedState=uf,m);if((i.mode&1)===0)return Ul(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=af(m,c,void 0),Ul(n,i,T,c)}if(F=(T&n.childLanes)!==0,Jn||F){if(c=wn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,lr(n,d),Ni(c,n,d,-1))}return Rf(),c=af(Error(t(421))),Ul(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=ux.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ai=Dr(d.nextSibling),si=i,Jt=!0,Pi=null,n!==null&&(hi[pi++]=ar,hi[pi++]=or,hi[pi++]=hs,ar=n.id,or=n.overflow,hs=i),i=df(i,c.children),i.flags|=4096,i)}function Nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hu(n.return,i,a)}function hf(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Um(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Xn(n,i,c.children,a),c=rn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,a,i);else if(n.tag===19)Nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(rn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Rl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),hf(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Rl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}hf(i,!0,a,null,m);break;case"together":hf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ur(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),_s|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Q_(n,i,a){switch(i.tag){case 3:Lm(i),ra();break;case 5:Kp(i);break;case 1:Qn(i.type)&&_l(i);break;case 4:Xu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Xt(wl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(rn,rn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Im(n,i,a):(Xt(rn,rn.current&1),n=ur(n,i,a),n!==null?n.sibling:null);Xt(rn,rn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Um(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xt(rn,rn.current),c)break;return null;case 22:case 23:return i.lanes=0,Rm(n,i,a)}return ur(n,i,a)}var Fm,pf,Om,km;Fm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pf=function(){},Om=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,gs(Xi.current);var m=null;switch(a){case"input":d=Dt(n,d),c=Dt(n,c),m=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),m=[];break;case"textarea":d=jt(n,d),c=jt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ml)}Ke(a,c);var T;a=null;for(oe in d)if(!c.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var F=d[oe];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var B=c[oe];if(F=d!=null?d[oe]:void 0,c.hasOwnProperty(oe)&&B!==F&&(B!=null||F!=null))if(oe==="style")if(F){for(T in F)!F.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&F[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(m||(m=[]),m.push(oe,a)),a=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,F=F?F.__html:void 0,B!=null&&F!==B&&(m=m||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Yt("scroll",n),m||F===B||(m=[])):(m=m||[]).push(oe,B))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},km=function(n,i,a,c){a!==c&&(i.flags|=4)};function So(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function J_(n,i,a){var c=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(i),null;case 1:return Qn(i.type)&&vl(),Fn(i),null;case 3:return c=i.stateNode,la(),$t(jn),$t(Nn),$u(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ml(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pi!==null&&(Tf(Pi),Pi=null))),pf(n,i),Fn(i),null;case 5:qu(i);var d=gs(go.current);if(a=i.type,n!==null&&i.stateNode!=null)Om(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Fn(i),null}if(n=gs(Xi.current),Ml(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Wi]=i,c[uo]=m,n=(i.mode&1)!==0,a){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(d=0;d<oo.length;d++)Yt(oo[d],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":Tt(c,m),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Yt("invalid",c);break;case"textarea":X(c,m),Yt("invalid",c)}Ke(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var F=m[T];T==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&pl(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&pl(c.textContent,F,n),d=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Yt("scroll",c)}switch(a){case"input":it(c),on(c,m,!0);break;case"textarea":it(c),Pt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ml)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Wi]=i,n[uo]=c,Fm(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ie(a,c),a){case"dialog":Yt("cancel",n),Yt("close",n),d=c;break;case"iframe":case"object":case"embed":Yt("load",n),d=c;break;case"video":case"audio":for(d=0;d<oo.length;d++)Yt(oo[d],n);d=c;break;case"source":Yt("error",n),d=c;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),d=c;break;case"details":Yt("toggle",n),d=c;break;case"input":Tt(n,c),d=Dt(n,c),Yt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),Yt("invalid",n);break;case"textarea":X(n,c),d=jt(n,c),Yt("invalid",n);break;default:d=c}Ke(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var B=F[m];m==="style"?_e(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&re(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&de(n,B):typeof B=="number"&&de(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Yt("scroll",n):B!=null&&D(n,m,B,T))}switch(a){case"input":it(n),on(n,c,!1);break;case"textarea":it(n),Pt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ot(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ot(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ml)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Fn(i),null;case 6:if(n&&i.stateNode!=null)km(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=gs(go.current),gs(Xi.current),Ml(i)){if(c=i.stateNode,a=i.memoizedProps,c[Wi]=i,(m=c.nodeValue!==a)&&(n=si,n!==null))switch(n.tag){case 3:pl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&pl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wi]=i,i.stateNode=c}return Fn(i),null;case 13:if($t(rn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ai!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vp(),ra(),i.flags|=98560,m=!1;else if(m=Ml(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Wi]=i}else ra(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Fn(i),m=!1}else Pi!==null&&(Tf(Pi),Pi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?vn===0&&(vn=3):Rf())),i.updateQueue!==null&&(i.flags|=4),Fn(i),null);case 4:return la(),pf(n,i),n===null&&lo(i.stateNode.containerInfo),Fn(i),null;case 10:return Vu(i.type._context),Fn(i),null;case 17:return Qn(i.type)&&vl(),Fn(i),null;case 19:if($t(rn),m=i.memoizedState,m===null)return Fn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)So(m,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Rl(n),T!==null){for(i.flags|=128,So(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(rn,rn.current&1|2),i.child}n=n.sibling}m.tail!==null&&nn()>da&&(i.flags|=128,c=!0,So(m,!1),i.lanes=4194304)}else{if(!c)if(n=Rl(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),So(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Jt)return Fn(i),null}else 2*nn()-m.renderingStartTime>da&&a!==1073741824&&(i.flags|=128,c=!0,So(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=nn(),i.sibling=null,a=rn.current,Xt(rn,c?a&1|2:a&1),i):(Fn(i),null);case 22:case 23:return bf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(oi&1073741824)!==0&&(Fn(i),i.subtreeFlags&6&&(i.flags|=8192)):Fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ex(n,i){switch(Uu(i),i.tag){case 1:return Qn(i.type)&&vl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return la(),$t(jn),$t(Nn),$u(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return qu(i),null;case 13:if($t(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ra()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(rn),null;case 4:return la(),null;case 10:return Vu(i.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Ol=!1,On=!1,tx=typeof WeakSet=="function"?WeakSet:Set,He=null;function ua(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){cn(n,i,c)}else a.current=null}function mf(n,i,a){try{a()}catch(c){cn(n,i,c)}}var zm=!1;function nx(n,i){if(Au=il,n=vp(),_u(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,F=-1,B=-1,oe=0,Me=0,Ee=n,Se=null;t:for(;;){for(var ze;Ee!==a||d!==0&&Ee.nodeType!==3||(F=T+d),Ee!==m||c!==0&&Ee.nodeType!==3||(B=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(ze=Ee.firstChild)!==null;)Se=Ee,Ee=ze;for(;;){if(Ee===n)break t;if(Se===a&&++oe===d&&(F=T),Se===m&&++Me===c&&(B=T),(ze=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=ze}a=F===-1||B===-1?null:{start:F,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(bu={focusedElem:n,selectionRange:a},il=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var $e=Xe.memoizedProps,fn=Xe.memoizedState,J=i.stateNode,G=J.getSnapshotBeforeUpdate(i.elementType===i.type?$e:Li(i.type,$e),fn);J.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){cn(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return Xe=zm,zm=!1,Xe}function Mo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&mf(i,a,m)}d=d.next}while(d!==c)}}function kl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function gf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Bm(n){var i=n.alternate;i!==null&&(n.alternate=null,Bm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Wi],delete i[uo],delete i[Lu],delete i[k_],delete i[z_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vm(n){return n.tag===5||n.tag===3||n.tag===4}function Hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ml));else if(c!==4&&(n=n.child,n!==null))for(vf(n,i,a),n=n.sibling;n!==null;)vf(n,i,a),n=n.sibling}function _f(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_f(n,i,a),n=n.sibling;n!==null;)_f(n,i,a),n=n.sibling}var Pn=null,Di=!1;function kr(n,i,a){for(a=a.child;a!==null;)Gm(n,i,a),a=a.sibling}function Gm(n,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:On||ua(a,i);case 6:var c=Pn,d=Di;Pn=null,kr(n,i,a),Pn=c,Di=d,Pn!==null&&(Di?(n=Pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pn.removeChild(a.stateNode));break;case 18:Pn!==null&&(Di?(n=Pn,a=a.stateNode,n.nodeType===8?Pu(n.parentNode,a):n.nodeType===1&&Pu(n,a),Ja(n)):Pu(Pn,a.stateNode));break;case 4:c=Pn,d=Di,Pn=a.stateNode.containerInfo,Di=!0,kr(n,i,a),Pn=c,Di=d;break;case 0:case 11:case 14:case 15:if(!On&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&mf(a,i,T),d=d.next}while(d!==c)}kr(n,i,a);break;case 1:if(!On&&(ua(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){cn(a,i,F)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(On=(c=On)||a.memoizedState!==null,kr(n,i,a),On=c):kr(n,i,a);break;default:kr(n,i,a)}}function Wm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new tx),i.forEach(function(c){var d=fx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ii(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:Pn=F.stateNode,Di=!1;break e;case 3:Pn=F.stateNode.containerInfo,Di=!0;break e;case 4:Pn=F.stateNode.containerInfo,Di=!0;break e}F=F.return}if(Pn===null)throw Error(t(160));Gm(m,T,d),Pn=null,Di=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(oe){cn(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xm(i,n),i=i.sibling}function Xm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ii(i,n),Yi(n),c&4){try{Mo(3,n,n.return),kl(3,n)}catch($e){cn(n,n.return,$e)}try{Mo(5,n,n.return)}catch($e){cn(n,n.return,$e)}}break;case 1:Ii(i,n),Yi(n),c&512&&a!==null&&ua(a,a.return);break;case 5:if(Ii(i,n),Yi(n),c&512&&a!==null&&ua(a,a.return),n.flags&32){var d=n.stateNode;try{de(d,"")}catch($e){cn(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,F=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&St(d,m),Ie(F,T);var oe=Ie(F,m);for(T=0;T<B.length;T+=2){var Me=B[T],Ee=B[T+1];Me==="style"?_e(d,Ee):Me==="dangerouslySetInnerHTML"?re(d,Ee):Me==="children"?de(d,Ee):D(d,Me,Ee,oe)}switch(F){case"input":Zt(d,m);break;case"textarea":Rn(d,m);break;case"select":var Se=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?Ot(d,!!m.multiple,ze,!1):Se!==!!m.multiple&&(m.defaultValue!=null?Ot(d,!!m.multiple,m.defaultValue,!0):Ot(d,!!m.multiple,m.multiple?[]:"",!1))}d[uo]=m}catch($e){cn(n,n.return,$e)}}break;case 6:if(Ii(i,n),Yi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch($e){cn(n,n.return,$e)}}break;case 3:if(Ii(i,n),Yi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ja(i.containerInfo)}catch($e){cn(n,n.return,$e)}break;case 4:Ii(i,n),Yi(n);break;case 13:Ii(i,n),Yi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Sf=nn())),c&4&&Wm(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(On=(oe=On)||Me,Ii(i,n),On=oe):Ii(i,n),Yi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!Me&&(n.mode&1)!==0)for(He=n,Me=n.child;Me!==null;){for(Ee=He=Me;He!==null;){switch(Se=He,ze=Se.child,Se.tag){case 0:case 11:case 14:case 15:Mo(4,Se,Se.return);break;case 1:ua(Se,Se.return);var Xe=Se.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=Se,a=Se.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch($e){cn(c,a,$e)}}break;case 5:ua(Se,Se.return);break;case 22:if(Se.memoizedState!==null){$m(Ee);continue}}ze!==null?(ze.return=Se,He=ze):$m(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{d=Ee.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Ee.stateNode,B=Ee.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,F.style.display=he("display",T))}catch($e){cn(n,n.return,$e)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=oe?"":Ee.memoizedProps}catch($e){cn(n,n.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ii(i,n),Yi(n),c&4&&Wm(n);break;case 21:break;default:Ii(i,n),Yi(n)}}function Yi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(de(d,""),c.flags&=-33);var m=Hm(n);_f(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,F=Hm(n);vf(n,F,T);break;default:throw Error(t(161))}}catch(B){cn(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ix(n,i,a){He=n,qm(n)}function qm(n,i,a){for(var c=(n.mode&1)!==0;He!==null;){var d=He,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Ol;if(!T){var F=d.alternate,B=F!==null&&F.memoizedState!==null||On;F=Ol;var oe=On;if(Ol=T,(On=B)&&!oe)for(He=d;He!==null;)T=He,B=T.child,T.tag===22&&T.memoizedState!==null?Km(d):B!==null?(B.return=T,He=B):Km(d);for(;m!==null;)He=m,qm(m),m=m.sibling;He=d,Ol=F,On=oe}Ym(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,He=m):Ym(n)}}function Ym(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:On||kl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!On)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Li(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&$p(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$p(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Me=oe.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&Ja(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||i.flags&512&&gf(i)}catch(Se){cn(i,i.return,Se)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function $m(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Km(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{kl(4,i)}catch(B){cn(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){cn(i,d,B)}}var m=i.return;try{gf(i)}catch(B){cn(i,m,B)}break;case 5:var T=i.return;try{gf(i)}catch(B){cn(i,T,B)}}}catch(B){cn(i,i.return,B)}if(i===n){He=null;break}var F=i.sibling;if(F!==null){F.return=i.return,He=F;break}He=i.return}}var rx=Math.ceil,zl=A.ReactCurrentDispatcher,xf=A.ReactCurrentOwner,vi=A.ReactCurrentBatchConfig,Ct=0,wn=null,pn=null,Ln=0,oi=0,fa=Ir(0),vn=0,Eo=null,_s=0,Bl=0,yf=0,wo=null,ei=null,Sf=0,da=1/0,fr=null,Vl=!1,Mf=null,zr=null,Hl=!1,Br=null,Gl=0,To=0,Ef=null,Wl=-1,Xl=0;function qn(){return(Ct&6)!==0?nn():Wl!==-1?Wl:Wl=nn()}function Vr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&Ln!==0?Ln&-Ln:V_.transition!==null?(Xl===0&&(Xl=ke()),Xl):(n=_t,n!==0||(n=window.event,n=n===void 0?16:jh(n.type)),n)}function Ni(n,i,a,c){if(50<To)throw To=0,Ef=null,Error(t(185));vt(n,a,c),((Ct&2)===0||n!==wn)&&(n===wn&&((Ct&2)===0&&(Bl|=a),vn===4&&Hr(n,Ln)),ti(n,c),a===1&&Ct===0&&(i.mode&1)===0&&(da=nn()+500,xl&&Ur()))}function ti(n,i){var a=n.callbackNode;kt(n,i);var c=Wt(n,n===wn?Ln:0);if(c===0)a!==null&&Ya(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ya(a),i===1)n.tag===0?B_(jm.bind(null,n)):Fp(jm.bind(null,n)),F_(function(){(Ct&6)===0&&Ur()}),a=null;else{switch(ir(c)){case 1:a=$a;break;case 4:a=b;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=s0(a,Zm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zm(n,i){if(Wl=-1,Xl=0,(Ct&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ha()&&n.callbackNode!==a)return null;var c=Wt(n,n===wn?Ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ql(n,c);else{i=c;var d=Ct;Ct|=2;var m=Jm();(wn!==n||Ln!==i)&&(fr=null,da=nn()+500,ys(n,i));do try{ox();break}catch(F){Qm(n,F)}while(!0);Bu(),zl.current=m,Ct=d,pn!==null?i=0:(wn=null,Ln=0,i=vn)}if(i!==0){if(i===2&&(d=hn(n),d!==0&&(c=d,i=wf(n,d))),i===1)throw a=Eo,ys(n,0),Hr(n,c),ti(n,nn()),a;if(i===6)Hr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!sx(d)&&(i=ql(n,c),i===2&&(m=hn(n),m!==0&&(c=m,i=wf(n,m))),i===1))throw a=Eo,ys(n,0),Hr(n,c),ti(n,nn()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Ss(n,ei,fr);break;case 3:if(Hr(n,c),(c&130023424)===c&&(i=Sf+500-nn(),10<i)){if(Wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Cu(Ss.bind(null,n,ei,fr),i);break}Ss(n,ei,fr);break;case 4:if(Hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ae(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=nn()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rx(c/1960))-c,10<c){n.timeoutHandle=Cu(Ss.bind(null,n,ei,fr),c);break}Ss(n,ei,fr);break;case 5:Ss(n,ei,fr);break;default:throw Error(t(329))}}}return ti(n,nn()),n.callbackNode===a?Zm.bind(null,n):null}function wf(n,i){var a=wo;return n.current.memoizedState.isDehydrated&&(ys(n,i).flags|=256),n=ql(n,i),n!==2&&(i=ei,ei=a,i!==null&&Tf(i)),n}function Tf(n){ei===null?ei=n:ei.push.apply(ei,n)}function sx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Ci(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~yf,i&=~Bl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ae(i),c=1<<a;n[a]=-1,i&=~c}}function jm(n){if((Ct&6)!==0)throw Error(t(327));ha();var i=Wt(n,0);if((i&1)===0)return ti(n,nn()),null;var a=ql(n,i);if(n.tag!==0&&a===2){var c=hn(n);c!==0&&(i=c,a=wf(n,c))}if(a===1)throw a=Eo,ys(n,0),Hr(n,i),ti(n,nn()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ss(n,ei,fr),ti(n,nn()),null}function Af(n,i){var a=Ct;Ct|=1;try{return n(i)}finally{Ct=a,Ct===0&&(da=nn()+500,xl&&Ur())}}function xs(n){Br!==null&&Br.tag===0&&(Ct&6)===0&&ha();var i=Ct;Ct|=1;var a=vi.transition,c=_t;try{if(vi.transition=null,_t=1,n)return n()}finally{_t=c,vi.transition=a,Ct=i,(Ct&6)===0&&Ur()}}function bf(){oi=fa.current,$t(fa)}function ys(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,U_(a)),pn!==null)for(a=pn.return;a!==null;){var c=a;switch(Uu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vl();break;case 3:la(),$t(jn),$t(Nn),$u();break;case 5:qu(c);break;case 4:la();break;case 13:$t(rn);break;case 19:$t(rn);break;case 10:Vu(c.type._context);break;case 22:case 23:bf()}a=a.return}if(wn=n,pn=n=Gr(n.current,null),Ln=oi=i,vn=0,Eo=null,yf=Bl=_s=0,ei=wo=null,ms!==null){for(i=0;i<ms.length;i++)if(a=ms[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}ms=null}return n}function Qm(n,i){do{var a=pn;try{if(Bu(),Cl.current=Il,Pl){for(var c=sn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Pl=!1}if(vs=0,En=gn=sn=null,vo=!1,_o=0,xf.current=null,a===null||a.return===null){vn=1,Eo=i,pn=null;break}e:{var m=n,T=a.return,F=a,B=i;if(i=Ln,F.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,Me=F,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ze=Em(T);if(ze!==null){ze.flags&=-257,wm(ze,T,F,m,i),ze.mode&1&&Mm(m,oe,i),i=ze,B=oe;var Xe=i.updateQueue;if(Xe===null){var $e=new Set;$e.add(B),i.updateQueue=$e}else Xe.add(B);break e}else{if((i&1)===0){Mm(m,oe,i),Rf();break e}B=Error(t(426))}}else if(Jt&&F.mode&1){var fn=Em(T);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),wm(fn,T,F,m,i),ku(ca(B,F));break e}}m=B=ca(B,F),vn!==4&&(vn=2),wo===null?wo=[m]:wo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=ym(m,B,i);Yp(m,J);break e;case 1:F=B;var G=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(zr===null||!zr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Sm(m,F,i);Yp(m,Te);break e}}m=m.return}while(m!==null)}t0(a)}catch(Qe){i=Qe,pn===a&&a!==null&&(pn=a=a.return);continue}break}while(!0)}function Jm(){var n=zl.current;return zl.current=Il,n===null?Il:n}function Rf(){(vn===0||vn===3||vn===2)&&(vn=4),wn===null||(_s&268435455)===0&&(Bl&268435455)===0||Hr(wn,Ln)}function ql(n,i){var a=Ct;Ct|=2;var c=Jm();(wn!==n||Ln!==i)&&(fr=null,ys(n,i));do try{ax();break}catch(d){Qm(n,d)}while(!0);if(Bu(),Ct=a,zl.current=c,pn!==null)throw Error(t(261));return wn=null,Ln=0,vn}function ax(){for(;pn!==null;)e0(pn)}function ox(){for(;pn!==null&&!tl();)e0(pn)}function e0(n){var i=r0(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?t0(n):pn=i,xf.current=null}function t0(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=J_(a,i,oi),a!==null){pn=a;return}}else{if(a=ex(a,i),a!==null){a.flags&=32767,pn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,pn=null;return}}if(i=i.sibling,i!==null){pn=i;return}pn=i=n}while(i!==null);vn===0&&(vn=5)}function Ss(n,i,a){var c=_t,d=vi.transition;try{vi.transition=null,_t=1,lx(n,i,a,c)}finally{vi.transition=d,_t=c}return null}function lx(n,i,a,c){do ha();while(Br!==null);if((Ct&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Kn(n,m),n===wn&&(pn=wn=null,Ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Hl||(Hl=!0,s0(q,function(){return ha(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=vi.transition,vi.transition=null;var T=_t;_t=1;var F=Ct;Ct|=4,xf.current=null,nx(n,a),Xm(a,n),R_(bu),il=!!Au,bu=Au=null,n.current=a,ix(a),su(),Ct=F,_t=T,vi.transition=m}else n.current=a;if(Hl&&(Hl=!1,Br=n,Gl=d),m=n.pendingLanes,m===0&&(zr=null),Ve(a.stateNode),ti(n,nn()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Vl)throw Vl=!1,n=Mf,Mf=null,n;return(Gl&1)!==0&&n.tag!==0&&ha(),m=n.pendingLanes,(m&1)!==0?n===Ef?To++:(To=0,Ef=n):To=0,Ur(),null}function ha(){if(Br!==null){var n=ir(Gl),i=vi.transition,a=_t;try{if(vi.transition=null,_t=16>n?16:n,Br===null)var c=!1;else{if(n=Br,Br=null,Gl=0,(Ct&6)!==0)throw Error(t(331));var d=Ct;for(Ct|=4,He=n.current;He!==null;){var m=He,T=m.child;if((He.flags&16)!==0){var F=m.deletions;if(F!==null){for(var B=0;B<F.length;B++){var oe=F[B];for(He=oe;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:Mo(8,Me,m)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,He=Ee;else for(;He!==null;){Me=He;var Se=Me.sibling,ze=Me.return;if(Bm(Me),Me===oe){He=null;break}if(Se!==null){Se.return=ze,He=Se;break}He=ze}}}var Xe=m.alternate;if(Xe!==null){var $e=Xe.child;if($e!==null){Xe.child=null;do{var fn=$e.sibling;$e.sibling=null,$e=fn}while($e!==null)}}He=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,He=T;else e:for(;He!==null;){if(m=He,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Mo(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,He=J;break e}He=m.return}}var G=n.current;for(He=G;He!==null;){T=He;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,He=ie;else e:for(T=G;He!==null;){if(F=He,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:kl(9,F)}}catch(Qe){cn(F,F.return,Qe)}if(F===T){He=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,He=Te;break e}He=F.return}}if(Ct=d,Ur(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{_t=a,vi.transition=i}}return!1}function n0(n,i,a){i=ca(a,i),i=ym(n,i,1),n=Or(n,i,1),i=qn(),n!==null&&(vt(n,1,i),ti(n,i))}function cn(n,i,a){if(n.tag===3)n0(n,n,a);else for(;i!==null;){if(i.tag===3){n0(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zr===null||!zr.has(c))){n=ca(a,n),n=Sm(i,n,1),i=Or(i,n,1),n=qn(),i!==null&&(vt(i,1,n),ti(i,n));break}}i=i.return}}function cx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qn(),n.pingedLanes|=n.suspendedLanes&a,wn===n&&(Ln&a)===a&&(vn===4||vn===3&&(Ln&130023424)===Ln&&500>nn()-Sf?ys(n,0):yf|=a),ti(n,i)}function i0(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=qn();n=lr(n,i),n!==null&&(vt(n,i,a),ti(n,a))}function ux(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),i0(n,a)}function fx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),i0(n,a)}var r0;r0=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||jn.current)Jn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jn=!1,Q_(n,i,a);Jn=(n.flags&131072)!==0}else Jn=!1,Jt&&(i.flags&1048576)!==0&&Op(i,Sl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Fl(n,i),n=i.pendingProps;var d=ta(i,Nn.current);oa(i,a),d=ju(null,i,c,n,d,a);var m=Qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qn(c)?(m=!0,_l(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wu(i),d.updater=Nl,i.stateNode=d,d._reactInternals=i,sf(i,c,n,a),i=cf(null,i,c,!0,m,a)):(i.tag=0,Jt&&m&&Nu(i),Xn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Fl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=hx(c),n=Li(c,n),d){case 0:i=lf(null,i,c,n,a);break e;case 1:i=Pm(null,i,c,n,a);break e;case 11:i=Tm(null,i,c,n,a);break e;case 14:i=Am(null,i,c,Li(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),lf(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Pm(n,i,c,d,a);case 3:e:{if(Lm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,qp(n,i),bl(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ca(Error(t(423)),i),i=Dm(n,i,c,a,d);break e}else if(c!==d){d=ca(Error(t(424)),i),i=Dm(n,i,c,a,d);break e}else for(ai=Dr(i.stateNode.containerInfo.firstChild),si=i,Jt=!0,Pi=null,a=Wp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ra(),c===d){i=ur(n,i,a);break e}Xn(n,i,c,a)}i=i.child}return i;case 5:return Kp(i),n===null&&Ou(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Ru(c,d)?T=null:m!==null&&Ru(c,m)&&(i.flags|=32),Cm(n,i),Xn(n,i,T,a),i.child;case 6:return n===null&&Ou(i),null;case 13:return Im(n,i,a);case 4:return Xu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=sa(i,null,c,a):Xn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Tm(n,i,c,d,a);case 7:return Xn(n,i,i.pendingProps,a),i.child;case 8:return Xn(n,i,i.pendingProps.children,a),i.child;case 12:return Xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Xt(wl,c._currentValue),c._currentValue=T,m!==null)if(Ci(m.value,T)){if(m.children===d.children&&!jn.current){i=ur(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){T=m.child;for(var B=F.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=cr(-1,a&-a),B.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var Me=oe.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),oe.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),Hu(m.return,a,i),F.lanes|=a;break}B=B.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),Hu(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Xn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,oa(i,a),d=mi(d),c=c(d),i.flags|=1,Xn(n,i,c,a),i.child;case 14:return c=i.type,d=Li(c,i.pendingProps),d=Li(c.type,d),Am(n,i,c,d,a);case 15:return bm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Li(c,d),Fl(n,i),i.tag=1,Qn(c)?(n=!0,_l(i)):n=!1,oa(i,a),_m(i,c,d),sf(i,c,d,a),cf(null,i,c,!0,n,a);case 19:return Um(n,i,a);case 22:return Rm(n,i,a)}throw Error(t(156,i.tag))};function s0(n,i){return cs(n,i)}function dx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(n,i,a,c){return new dx(n,i,a,c)}function Cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hx(n){if(typeof n=="function")return Cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===Z)return 14}return 2}function Gr(n,i){var a=n.alternate;return a===null?(a=_i(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Yl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Cf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return Ms(a.children,d,m,i);case w:T=8,d|=8;break;case P:return n=_i(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case ce:return n=_i(13,a,i,d),n.elementType=ce,n.lanes=m,n;case pe:return n=_i(19,a,i,d),n.elementType=pe,n.lanes=m,n;case j:return $l(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:T=10;break e;case z:T=9;break e;case W:T=11;break e;case Z:T=14;break e;case fe:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_i(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Ms(n,i,a,c){return n=_i(7,n,c,i),n.lanes=a,n}function $l(n,i,a,c){return n=_i(22,n,c,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function Pf(n,i,a){return n=_i(6,n,null,i),n.lanes=a,n}function Lf(n,i,a){return i=_i(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function px(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cn(0),this.expirationTimes=Cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Df(n,i,a,c,d,m,T,F,B){return n=new px(n,i,a,F,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=_i(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(m),n}function mx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function a0(n){if(!n)return Nr;n=n._reactInternals;e:{if(Wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qn(a))return Np(n,a,i)}return i}function o0(n,i,a,c,d,m,T,F,B){return n=Df(a,c,!0,n,d,m,T,F,B),n.context=a0(null),a=n.current,c=qn(),d=Vr(a),m=cr(c,d),m.callback=i??null,Or(a,m,d),n.current.lanes=d,vt(n,d,c),ti(n,c),n}function Kl(n,i,a,c){var d=i.current,m=qn(),T=Vr(d);return a=a0(a),i.context===null?i.context=a:i.pendingContext=a,i=cr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Or(d,i,T),n!==null&&(Ni(n,d,T,m),Al(n,d,T)),T}function Zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function l0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function If(n,i){l0(n,i),(n=n.alternate)&&l0(n,i)}function gx(){return null}var c0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nf(n){this._internalRoot=n}jl.prototype.render=Nf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Kl(n,i,null,null)},jl.prototype.unmount=Nf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;xs(function(){Kl(null,n,null,null)}),i[rr]=null}};function jl(n){this._internalRoot=n}jl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Cr.length&&i!==0&&i<Cr[a].priority;a++);Cr.splice(a,0,n),a===0&&Kh(n)}};function Uf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ql(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function u0(){}function vx(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var oe=Zl(T);m.call(oe)}}var T=o0(i,c,n,0,null,!1,!1,"",u0);return n._reactRootContainer=T,n[rr]=T.current,lo(n.nodeType===8?n.parentNode:n),xs(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var oe=Zl(B);F.call(oe)}}var B=Df(n,0,!1,null,null,!1,!1,"",u0);return n._reactRootContainer=B,n[rr]=B.current,lo(n.nodeType===8?n.parentNode:n),xs(function(){Kl(i,B,a,c)}),B}function Jl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var F=d;d=function(){var B=Zl(T);F.call(B)}}Kl(i,T,n,d)}else T=vx(a,i,n,d,c);return Zl(T)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=At(i.pendingLanes);a!==0&&(Zn(i,a|1),ti(i,nn()),(Ct&6)===0&&(da=nn()+500,Ur()))}break;case 13:xs(function(){var c=lr(n,1);if(c!==null){var d=qn();Ni(c,n,1,d)}}),If(n,1)}},qt=function(n){if(n.tag===13){var i=lr(n,134217728);if(i!==null){var a=qn();Ni(i,n,134217728,a)}If(n,134217728)}},bi=function(n){if(n.tag===13){var i=Vr(n),a=lr(n,i);if(a!==null){var c=qn();Ni(a,n,i,c)}If(n,i)}},zt=function(){return _t},Ri=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},rt=function(n,i,a){switch(i){case"input":if(Zt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=gl(c);if(!d)throw Error(t(90));Kt(c),Zt(c,d)}}}break;case"textarea":Rn(n,a);break;case"select":i=a.value,i!=null&&Ot(n,!!a.multiple,i,!1)}},Ne=Af,xe=xs;var _x={usingClientEntryPoint:!1,Events:[fo,Js,gl,ge,Le,Af]},Ao={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xx={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ls(n),n===null?null:n.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{te=ec.inject(xx),be=ec}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_x,ni.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(i))throw Error(t(200));return mx(n,i,null,a)},ni.createRoot=function(n,i){if(!Uf(n))throw Error(t(299));var a=!1,c="",d=c0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Df(n,1,!1,null,null,a,!1,c,d),n[rr]=i.current,lo(n.nodeType===8?n.parentNode:n),new Nf(i)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ls(i),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return xs(n)},ni.hydrate=function(n,i,a){if(!Ql(i))throw Error(t(200));return Jl(null,n,i,!0,a)},ni.hydrateRoot=function(n,i,a){if(!Uf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=c0;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=o0(i,null,n,1,a??null,d,!1,m,T),n[rr]=i.current,lo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new jl(i)},ni.render=function(n,i,a){if(!Ql(i))throw Error(t(200));return Jl(null,n,i,!1,a)},ni.unmountComponentAtNode=function(n){if(!Ql(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){Jl(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},ni.unstable_batchedUpdates=Af,ni.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ql(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Jl(n,i,a,!1,c)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var _0;function Rx(){if(_0)return kf.exports;_0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kf.exports=bx(),kf.exports}var x0;function Cx(){if(x0)return tc;x0=1;var r=Rx();return tc.createRoot=r.createRoot,tc.hydrateRoot=r.hydrateRoot,tc}var Px=Cx();const Lx=Sx(Px);var y0=xh();const bt=118,Dx=45,yh=8,bn=(r,e,t)=>r<e?e:r>t?t:r,ut=(r,e)=>r+Math.random()*(e-r),Td=r=>r[Math.floor(Math.random()*r.length)];function Dg(r){return Math.floor(12*Math.pow(r,1.25)+10)}const Ig=[{key:"regen",name:"Регенерация"},{key:"maxhp",name:"Прочность"},{key:"body",name:"Урон корпусом"},{key:"bspeed",name:"Скор. снарядов"},{key:"bdmg",name:"Урон снарядов"},{key:"reload",name:"Перезарядка"},{key:"move",name:"Ходовая"}],Sh=[{id:"basic",name:"Базовый танк",tier:1,parent:null,reload:.9,desc:"Серийная машина «Пионер». С неё начинается путь каждого кадетa.",barrels:[{a:0,l:1.15,w:1,d:1,s:1}]},{id:"twin",name:"Твин",tier:2,parent:"basic",reload:.82,desc:"Спаренные стволы — вдвое больше свинца, вдвое меньше шансов у цели.",mods:{bdmg:.72},barrels:[{a:0,off:.5,l:1.1,w:.92,d:1,s:1},{a:0,off:-.5,l:1.1,w:.92,d:1,s:1,phase:.5}]},{id:"triplet",name:"Триплет",tier:3,parent:"twin",reload:.95,desc:"Три ствола с каскадным темпом. Плотность огня за гранью приличия.",mods:{bdmg:.6},barrels:[{a:0,off:.55,l:1.05,w:.85,d:1,s:1},{a:0,off:-.55,l:1.05,w:.85,d:1,s:1,phase:.5},{a:0,l:1.3,w:.9,d:1.1,s:1.08,phase:.25}]},{id:"twinflank",name:"Твин-Фланг",tier:3,parent:"twin",reload:.95,desc:"Две спарки — вперёд и назад. Слепых зон больше не существует.",mods:{bdmg:.58},barrels:[{a:0,off:.5,l:1.05,w:.85,d:1,s:1},{a:0,off:-.5,l:1.05,w:.85,d:1,s:1,phase:.5},{a:180,off:.5,l:1.05,w:.85,d:1,s:1,phase:.25},{a:180,off:-.5,l:1.05,w:.85,d:1,s:1,phase:.75}]},{id:"sniper",name:"Снайпер",tier:2,parent:"basic",reload:1.3,desc:"Длинный ствол, настильный полёт. Фигуры умирают, не поняв откуда.",mods:{bdmg:1.3,bspeed:1.4},barrels:[{a:0,l:1.75,w:.95,d:1,s:1}]},{id:"hunter",name:"Хантер",tier:3,parent:"sniper",reload:1.3,desc:"Два снаряда след в след: первый вскрывает броню, второй добирает.",mods:{bdmg:1.05,bspeed:1.35},barrels:[{a:0,l:1.5,w:1.05,d:.95,s:1},{a:0,l:1.2,w:.72,d:.75,s:1.18,phase:.35}]},{id:"assassin",name:"Ассасин",tier:3,parent:"sniper",reload:1.7,desc:"Рельсотворный ствол. Пуля уходит за горизонт раньше, чем звук.",mods:{bdmg:1.55,bspeed:1.8},barrels:[{a:0,l:2,w:.85,d:1,s:1}]},{id:"gunner",name:"Пулемёт",tier:2,parent:"basic",reload:.52,desc:"Широкий раструб и бешеный темп. Точность — не про это.",mods:{bdmg:.55,bspeed:.95},barrels:[{a:0,l:1.05,w:1.2,d:1,s:1,spread:.13}]},{id:"sprayer",name:"Спрейер",tier:3,parent:"gunner",reload:.4,desc:"Два раструба в противофазе. Стена огня, не прекращающаяся никогда.",mods:{bdmg:.48,bspeed:1},barrels:[{a:0,off:.42,l:1,w:1.05,d:.8,s:.95,spread:.17},{a:0,off:-.42,l:1.3,w:.9,d:.9,s:1.15,spread:.1,phase:.5}]},{id:"spread",name:"Веер",tier:3,parent:"gunner",reload:1.15,desc:"Пять стволов дугой. Коридор смерти шириной с улицу.",mods:{bdmg:.42},barrels:[-40,-20,0,20,40].map((r,e)=>({a:r,l:e===2?1.2:1,w:.7,d:1,s:1,spread:.05}))},{id:"flank",name:"Фланг-Гвард",tier:2,parent:"basic",reload:.95,desc:"Задний ствол для тех, кто любит заходить в спину. И для тех, кому заходят.",mods:{bdmg:.8},barrels:[{a:0,l:1.1,w:.95,d:1,s:1},{a:180,l:1.1,w:.95,d:1,s:1,phase:.5}]},{id:"quad",name:"Квад-танк",tier:3,parent:"flank",reload:1,desc:"Четыре ствола по сторонам света. Куда бы ни посмотрел — там ствол.",mods:{bdmg:.62},barrels:[{a:0,l:1.1,w:.95,d:1,s:1},{a:90,l:1.1,w:.95,d:1,s:1,phase:.25},{a:180,l:1.1,w:.95,d:1,s:1,phase:.5},{a:270,l:1.1,w:.95,d:1,s:1,phase:.75}]},{id:"triangle",name:"Трай-Энгл",tier:3,parent:"flank",reload:1,desc:"Задние стволы работают как ускорители. Догонит даже ветер.",special:"recoil",mods:{bdmg:.7,move:1.3},barrels:[{a:0,l:1.2,w:1,d:1.1,s:1},{a:150,l:1,w:.9,d:.6,s:1,recoil:1},{a:210,l:1,w:.9,d:.6,s:1,recoil:1,phase:.5}]},{id:"triple",name:"Тройной залп",tier:2,parent:"basic",reload:1,desc:"Веер из трёх стволов. Центр — в цель, края — по совести.",mods:{bdmg:.66},barrels:[{a:0,l:1.25,w:.95,d:1.1,s:1},{a:26,l:1.05,w:.9,d:.9,s:.98},{a:-26,l:1.05,w:.9,d:.9,s:.98}]},{id:"penta",name:"Пента",tier:3,parent:"triple",reload:1.2,desc:"Пять стволов веером. Передняя полусфера простреливается насквозь.",mods:{bdmg:.5},barrels:[-50,-25,0,25,50].map((r,e)=>({a:r,l:e===2?1.25:1.02,w:.85,d:1,s:1,spread:.04}))},{id:"crossfire",name:"Перекрёсток",tier:3,parent:"triple",reload:1.15,desc:"Шесть стволов: три вперёд, три назад. Смертельная симметрия.",mods:{bdmg:.48},barrels:[{a:0,l:1.2,w:.85,d:1.05,s:1},{a:30,l:1,w:.8,d:.85,s:1},{a:-30,l:1,w:.8,d:.85,s:1},{a:180,l:1.2,w:.85,d:1.05,s:1,phase:.5},{a:150,l:1,w:.8,d:.85,s:1,phase:.5},{a:210,l:1,w:.8,d:.85,s:1,phase:.5}]},{id:"destroyer",name:"Разрушитель",tier:2,parent:"basic",reload:2.4,desc:"Один снаряд размером с гараж. Медленно. Громко. Окончательно.",mods:{bdmg:3.4,bspeed:.78},barrels:[{a:0,l:1.3,w:2.1,d:1,s:1}]},{id:"annihilator",name:"Аннигилятор",tier:3,parent:"destroyer",reload:3,desc:"Снаряд-«куб смерти». Отдача сдвигает танк, а цели — из списка живых.",mods:{bdmg:4.6,bspeed:.74},barrels:[{a:0,l:1.35,w:2.6,d:1,s:1}]},{id:"hybrid",name:"Гибрид",tier:3,parent:"destroyer",reload:2.5,desc:"Тяжёлое орудие плюс три дрона-пастуха. Овцы целы, волки — нет.",mods:{bdmg:2.9,bspeed:.8},droneCount:3,barrels:[{a:0,l:1.3,w:1.9,d:1,s:1}]},{id:"smasher",name:"Крушила",tier:2,parent:"basic",reload:1.4,desc:"Броня вместо оружия. Соприкосновение с корпусом — ошибка противника.",special:"melee",mods:{bdmg:.35,body:3,hp:1.35,move:1.1},barrels:[{a:0,l:.7,w:.7,d:1,s:.9}]},{id:"spike",name:"Шип",tier:3,parent:"smasher",reload:1.5,desc:"Восемь таранных шипов. Теперь обниматься с ним опасно вдвойне.",special:"melee",mods:{bdmg:.3,body:4.2,hp:1.45,move:1.08},barrels:[{a:0,l:.6,w:.65,d:1,s:.9}]},{id:"landmine",name:"Мина",tier:3,parent:"smasher",reload:1.6,desc:"Максимальная броня, максимальная скорость сближения. Сам себе снаряд.",special:"melee",mods:{bdmg:.25,body:5,hp:1.6,move:1.22},barrels:[{a:0,l:.55,w:.6,d:1,s:.85}]},{id:"overlord",name:"Владыка",tier:2,parent:"basic",reload:1.6,desc:"Шесть дронов-клинков. Сам не стреляет — приказы отдаёт свита.",special:"drones",droneCount:6,mods:{bdmg:.35},barrels:[{a:0,l:.65,w:.75,d:1,s:.9}]},{id:"overseer",name:"Надзиратель",tier:3,parent:"overlord",reload:1.6,desc:"Восемь дронов. Стая, которая не прощает одиночек.",special:"drones",droneCount:8,mods:{bdmg:.3},barrels:[{a:0,l:.6,w:.7,d:1,s:.9}]},{id:"battleship",name:"Линкор",tier:3,parent:"overlord",reload:.75,desc:"Четыре ствола, в каждом залпе — рой мелких пуль. Шквал во все стороны.",mods:{bdmg:.32,bspeed:1.1},barrels:[{a:0,l:1.1,w:.95,d:1,s:1,n:3,spread:.16},{a:90,l:1.1,w:.95,d:1,s:1,n:3,spread:.16,phase:.25},{a:180,l:1.1,w:.95,d:1,s:1,n:3,spread:.16,phase:.5},{a:270,l:1.1,w:.95,d:1,s:1,n:3,spread:.16,phase:.75}]},{id:"heavy",name:"Тяжач",tier:2,parent:"basic",reload:1.6,desc:"Утолщённая броня и фугасный ствол. Ходит медленно, бьёт наотмашь.",mods:{bdmg:1.6,bspeed:.9,hp:1.3,move:.92,body:1.25},barrels:[{a:0,l:1.2,w:1.45,d:1,s:1}]},{id:"juggernaut",name:"Джаггернаут",tier:3,parent:"heavy",reload:1.6,desc:"Два фугасных ствола и броня крепостной стены. Сносит всё, что не ушло.",mods:{bdmg:1.45,bspeed:.9,hp:1.55,move:.85,body:1.4},barrels:[{a:0,off:.55,l:1.25,w:1.3,d:1,s:1},{a:0,off:-.55,l:1.25,w:1.3,d:1,s:1,phase:.5}]},{id:"ram",name:"Таран",tier:3,parent:"heavy",reload:1.3,desc:"Гибрид артиллерии и тарана: разгон, удар, фугас в упор, ещё разгон.",special:"melee",mods:{bdmg:.9,bspeed:.95,body:3.2,hp:1.35,move:1.25},barrels:[{a:0,l:.85,w:1.05,d:1,s:1}]},{id:"engineer",name:"Инженер",tier:2,parent:"basic",reload:1.1,desc:"Лёгкое орудие и минные заграждения. Территорию он сдаёт только вместе с врагами.",special:"traps",trapCount:8,mods:{bdmg:.65},barrels:[{a:0,l:1,w:.9,d:1,s:1}]},{id:"trapper",name:"Ловушник",tier:3,parent:"engineer",reload:1.2,desc:"Усиленные мины с увеличенным зарядом. Поле боя становится его крепостью.",special:"traps",trapCount:12,trapPower:1.8,mods:{bdmg:.55},barrels:[{a:0,l:.9,w:.85,d:1,s:1}]},{id:"autoturret",name:"Автотурель",tier:3,parent:"engineer",reload:1,desc:"Основное орудие плюс автономная турель. Целей много — рук теперь тоже.",special:"auto",mods:{bdmg:.75},barrels:[{a:0,l:1.15,w:.95,d:1,s:1}]}],Go=r=>Sh.find(e=>e.id===r),S0=r=>Sh.filter(e=>e.parent===r),M0=()=>Sh.filter(r=>r.tier===2),Ix={square:{name:"Квадрат",hp:30,dmg:12,xp:15,speed:3.4,size:1.05,color:16765286,sides:4,aggro:7},triangle:{name:"Треугольник",hp:55,dmg:18,xp:35,speed:4.8,size:1.1,color:16735581,sides:3,aggro:30},diamond:{name:"Ромб-стрелок",hp:95,dmg:22,xp:55,speed:3.6,size:1.15,color:16752451,sides:4,aggro:45,shooter:!0},pentagon:{name:"Пентагон",hp:150,dmg:28,xp:90,speed:2.5,size:1.65,color:7310335,sides:5,aggro:16},hexagon:{name:"Гексагон",hp:330,dmg:38,xp:200,speed:2.1,size:2.1,color:11561983,sides:6,aggro:22},droneE:{name:"Дрон",hp:60,dmg:15,xp:28,speed:7.5,size:.75,color:16743096,sides:0,aggro:999},tankE:{name:"Боевая машина",hp:420,dmg:30,xp:120,speed:3.8,size:1.35,color:11056324,sides:4,aggro:70,tank:!0}},es=[{title:"Полигон",tag:"Глава 1",bossKey:"guard",story:["Кадет, на связи штаб «Полигона». Учебные мишени сорвались с креплений и начали размножаться.","Квадраты, треугольники — пока мелочь. Зачисти сектор и не забывай вкладывать очки в системы танка.","Данные телеметрии засекли крупную цель. Разведка называет её «Квадрат-Страж». Уничтожь её."],waves:[{square:5},{square:5,triangle:2},{square:4,triangle:4}]},{title:"Ржавые поля",tag:"Глава 2",bossKey:"gear",story:["Страж был лишь маяком. Сигнал ушёл вглубь полигона — и там проснулись «Ржавые поля».","Здесь фигур больше, и они злее. Пентагоны держат строй, треугольники атакуют с флангов.","В центре сектора крутится нечто огромное. Механики прозвали его «Шестернёй». Разбери её."],waves:[{square:6,triangle:3},{triangle:5,square:4},{pentagon:2,triangle:4,square:4}]},{title:"Гекс-зона",tag:"Глава 3",bossKey:"hive",story:["«Шестерня» перед отключением передала координаты Гекс-зоны — склада тяжёлых фигур.","Внимание: замечены ромбы-стрелки. Держи дистанцию и используй укрытия.","Зону охраняет «Страж Улья». Он призывает подкрепление — сначала разбей свиту."],waves:[{pentagon:3,triangle:5},{pentagon:4,diamond:3},{hexagon:1,pentagon:4,triangle:4}]},{title:"Ангар дронов",tag:"Глава 4",bossKey:"mother",story:["За Гекс-зоной — ангар. «ГЕНЕЗИС» собирает здесь рои дронов, и конвейер не останавливается.","Дроны быстрые и кусаются. Не дай себя окружить — двигайся, кадет, двигайся.","Источником роя признана «Дрон-Матка». Отруби голову — и конвейер встанет."],waves:[{droneE:8},{droneE:10,diamond:3},{droneE:8,pentagon:4}]},{title:"Кладбище машин",tag:"Глава 5",bossKey:"hunter",story:["Здесь лежат танки прошлых кадетов. «ГЕНЕЗИС» перепрошил их и поставил в строй против тебя.","Машины стреляют прицельно. Следи за стволами и не стой на линии огня.","Во главе колонны — «Прототип „Охотник“». Он создан, чтобы охотиться на таких, как ты."],waves:[{tankE:3,triangle:4},{tankE:4,diamond:4},{tankE:5,pentagon:3}]},{title:"Ядро",tag:"Финал",bossKey:"core",story:["Это сердце «ГЕНЕЗИСА». Дальше дорог нет — только вперёд, кадет.","Ядро охраняет всё, что система успела собрать: фигуры, дроны, машины. Прорвись.","Когда Ядро падёт — полигон снова станет учебным. Если останешься в живых, разумеется."],waves:[{pentagon:4,hexagon:2,droneE:6},{tankE:4,diamond:5,droneE:6}]}],Mh={guard:{name:"Квадрат-Страж",hp:1300,dmg:42,xp:700,size:3.4,color:16762173,sides:4},gear:{name:"Шестерня",hp:2200,dmg:46,xp:1200,size:3.8,color:16748349,sides:5},hive:{name:"Страж Улья",hp:3400,dmg:50,xp:1900,size:4.2,color:10316799,sides:6},mother:{name:"Дрон-Матка",hp:4600,dmg:54,xp:2700,size:4,color:16736168,sides:0},hunter:{name:"Прототип «Охотник»",hp:6e3,dmg:58,xp:3800,size:2.6,color:15265269,sides:4},core:{name:"Ядро «ГЕНЕЗИС»",hp:9500,dmg:64,xp:6e3,size:5,color:16729943,sides:6}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="185",Nx=0,E0=1,Ux=2,Pc=1,Ng=2,Oo=3,ts=0,ii=1,vr=2,yr=0,Ia=1,ns=2,w0=3,T0=4,Fx=5,Cs=100,Ox=101,kx=102,zx=103,Bx=104,Vx=200,Hx=201,Gx=202,Wx=203,Ad=204,bd=205,Xx=206,qx=207,Yx=208,$x=209,Kx=210,Zx=211,jx=212,Qx=213,Jx=214,Rd=0,Cd=1,Pd=2,Oa=3,Ld=4,Dd=5,Id=6,Nd=7,Ug=0,ey=1,ty=2,Ji=0,Fg=1,Og=2,kg=3,zg=4,Bg=5,Vg=6,Hg=7,Gg=300,Os=301,ka=302,Vf=303,Hf=304,Zc=306,kc=1e3,xr=1001,Ud=1002,Dn=1003,ny=1004,nc=1005,Vn=1006,Gf=1007,Ls=1008,fi=1009,Wg=1010,Xg=1011,Wo=1012,wh=1013,tr=1014,ji=1015,Er=1016,Th=1017,Ah=1018,Xo=1020,qg=35902,Yg=35899,$g=1021,Kg=1022,Vi=1023,wr=1026,Ds=1027,Zg=1028,bh=1029,ks=1030,Rh=1031,Ch=1033,Lc=33776,Dc=33777,Ic=33778,Nc=33779,Fd=35840,Od=35841,kd=35842,zd=35843,Bd=36196,Vd=37492,Hd=37496,Gd=37488,Wd=37489,zc=37490,Xd=37491,qd=37808,Yd=37809,$d=37810,Kd=37811,Zd=37812,jd=37813,Qd=37814,Jd=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,ah=36492,oh=36494,lh=36495,ch=36283,uh=36284,Bc=36285,fh=36286,iy=3200,dh=0,ry=1,jr="",ui="srgb",Vc="srgb-linear",Hc="linear",Bt="srgb",pa=7680,A0=519,sy=512,ay=513,oy=514,Ph=515,ly=516,cy=517,Lh=518,uy=519,hh=35044,b0="300 es",Qi=2e3,qo=2001;function fy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dy(){const r=Gc("canvas");return r.style.display="block",r}const R0={};function Wc(...r){const e="THREE."+r.shift();console.log(e,...r)}function jg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=jg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Rt(...r){r=jg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Na(...r){const e=r.join(" ");e in R0||(R0[e]=!0,lt(...r))}function hy(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const py={[Rd]:Cd,[Pd]:Id,[Ld]:Nd,[Oa]:Dd,[Cd]:Rd,[Id]:Pd,[Nd]:Ld,[Dd]:Oa};class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let C0=1234567;const zo=Math.PI/180,Yo=180/Math.PI;function Sr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function Dh(r,e){return(r%e+e)%e}function my(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function gy(r,e,t){return r!==e?(t-r)/(e-r):0}function Bo(r,e,t){return(1-t)*r+t*e}function vy(r,e,t,s){return Bo(r,e,1-Math.exp(-t*s))}function _y(r,e=1){return e-Math.abs(Dh(r,e*2)-e)}function xy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Sy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function My(r,e){return r+Math.random()*(e-r)}function Ey(r){return r*(.5-Math.random())}function wy(r){r!==void 0&&(C0=r);let e=C0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ty(r){return r*zo}function Ay(r){return r*Yo}function by(r){return(r&r-1)===0&&r!==0}function Ry(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Py(r,e,t,s,o){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+s)/2),v=u((e+s)/2),_=l((e-s)/2),g=u((e-s)/2),y=l((s-e)/2),M=u((s-e)/2);switch(o){case"XYX":r.set(f*v,h*_,h*g,f*p);break;case"YZY":r.set(h*g,f*v,h*_,f*p);break;case"ZXZ":r.set(h*_,h*g,f*v,f*p);break;case"XZX":r.set(f*v,h*M,h*y,f*p);break;case"YXY":r.set(h*y,f*v,h*M,f*p);break;case"ZYZ":r.set(h*M,h*y,f*v,f*p);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ih={DEG2RAD:zo,RAD2DEG:Yo,generateUUID:Sr,clamp:Mt,euclideanModulo:Dh,mapLinear:my,inverseLerp:gy,lerp:Bo,damp:vy,pingpong:_y,smoothstep:xy,smootherstep:yy,randInt:Sy,randFloat:My,randFloatSpread:Ey,seededRandom:wy,degToRad:Ty,radToDeg:Ay,isPowerOfTwo:by,ceilPowerOfTwo:Ry,floorPowerOfTwo:Cy,setQuaternionFromProperEuler:Py,normalize:Vt,denormalize:zi},Gh=class Gh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gh.prototype.isVector2=!0;let ft=Gh;class Ha{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3],g=l[u+0],y=l[u+1],M=l[u+2],R=l[u+3];if(_!==R||h!==g||p!==y||v!==M){let S=h*g+p*y+v*M+_*R;S<0&&(g=-g,y=-y,M=-M,R=-R,S=-S);let x=1-f;if(S<.9995){const L=Math.acos(S),D=Math.sin(L);x=Math.sin(x*L)/D,f=Math.sin(f*L)/D,h=h*x+g*f,p=p*x+y*f,v=v*x+M*f,_=_*x+R*f}else{h=h*x+g*f,p=p*x+y*f,v=v*x+M*f,_=_*x+R*f;const L=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=L,p*=L,v*=L,_*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],v=s[o+3],_=l[u],g=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+v*_+h*y-p*g,e[t+1]=h*M+v*g+p*_-f*y,e[t+2]=p*M+v*y+f*g-h*_,e[t+3]=v*M-f*_-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(o/2),_=f(l/2),g=h(s/2),y=h(o/2),M=h(l/2);switch(u){case"XYZ":this._x=g*v*_+p*y*M,this._y=p*y*_-g*v*M,this._z=p*v*M+g*y*_,this._w=p*v*_-g*y*M;break;case"YXZ":this._x=g*v*_+p*y*M,this._y=p*y*_-g*v*M,this._z=p*v*M-g*y*_,this._w=p*v*_+g*y*M;break;case"ZXY":this._x=g*v*_-p*y*M,this._y=p*y*_+g*v*M,this._z=p*v*M+g*y*_,this._w=p*v*_-g*y*M;break;case"ZYX":this._x=g*v*_-p*y*M,this._y=p*y*_+g*v*M,this._z=p*v*M-g*y*_,this._w=p*v*_+g*y*M;break;case"YZX":this._x=g*v*_+p*y*M,this._y=p*y*_+g*v*M,this._z=p*v*M-g*y*_,this._w=p*v*_-g*y*M;break;case"XZY":this._x=g*v*_-p*y*M,this._y=p*y*_-g*v*M,this._z=p*v*M+g*y*_,this._w=p*v*_+g*y*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],_=t[10],g=s+f+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(s>f&&s>_){const y=2*Math.sqrt(1+s-f-_);this._w=(v-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-s-_);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+_-s-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-s*p,this._z=l*v+u*p+s*h-o*f,this._w=u*v-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wh=class Wh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(P0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),v=2*(f*t-l*o),_=2*(l*s-u*t);return this.x=t+h*p+u*_-f*v,this.y=s+h*v+f*p-l*_,this.z=o+h*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;let $=Wh;const Wf=new $,P0=new Ha,Xh=class Xh{constructor(e,t,s,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],v=s[4],_=s[7],g=s[2],y=s[5],M=s[8],R=o[0],S=o[3],x=o[6],L=o[1],D=o[4],A=o[7],N=o[2],C=o[5],U=o[8];return l[0]=u*R+f*L+h*N,l[3]=u*S+f*D+h*C,l[6]=u*x+f*A+h*U,l[1]=p*R+v*L+_*N,l[4]=p*S+v*D+_*C,l[7]=p*x+v*A+_*U,l[2]=g*R+y*L+M*N,l[5]=g*S+y*D+M*C,l[8]=g*x+y*A+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-s*l*v+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=v*u-f*p,g=f*h-v*l,y=p*l-u*h,M=t*_+s*g+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=_*R,e[1]=(o*p-v*s)*R,e[2]=(f*s-o*u)*R,e[3]=g*R,e[4]=(v*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=y*R,e[7]=(s*h-p*t)*R,e[8]=(u*t-s*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return Na("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xf.makeScale(e,t)),this}rotate(e){return Na("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xf.makeRotation(-e)),this}translate(e,t){return Na("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;let pt=Xh;const Xf=new pt,L0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D0=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ly(){const r={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Bt&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?Hc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vc]:{primaries:e,whitePoint:s,transfer:Hc,toXYZ:L0,fromXYZ:D0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:L0,fromXYZ:D0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const Et=Ly();function Mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ma;class Dy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ma===void 0&&(ma=Gc("canvas")),ma.width=e.width,ma.height=e.height;const o=ma.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ma}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Mr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Mr(t[s]/255)*255):t[s]=Mr(t[s]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iy=0;class Nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(qf(o[u].image)):l.push(qf(o[u]))}else l=qf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function qf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let Ny=0;const Yf=new $;class Hn extends Vs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,s=xr,o=xr,l=Vn,u=Ls,f=Vi,h=fi,p=Hn.DEFAULT_ANISOTROPY,v=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Sr(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yf).x}get height(){return this.source.getSize(Yf).y}get depth(){return this.source.getSize(Yf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Gg;Hn.DEFAULT_ANISOTROPY=1;const qh=class qh{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],v=h[4],_=h[8],g=h[1],y=h[5],M=h[9],R=h[2],S=h[6],x=h[10];if(Math.abs(v-g)<.01&&Math.abs(_-R)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+R)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,A=(y+1)/2,N=(x+1)/2,C=(v+g)/4,U=(_+R)/4,w=(M+S)/4;return D>A&&D>N?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=C/s,l=U/s):A>N?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=C/o,l=w/o):N<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),s=U/l,o=w/l),this.set(s,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(_-R)*(_-R)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(_-R)/L,this.z=(g-v)/L,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;let an=qh;class Uy extends Vs{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Hn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Nh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Uy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Qg extends Hn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends Hn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=class Kc{constructor(e,t,s,o,l,u,f,h,p,v,_,g,y,M,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,v,_,g,y,M,R,S)}set(e,t,s,o,l,u,f,h,p,v,_,g,y,M,R,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=_,x[14]=g,x[3]=y,x[7]=M,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/ga.setFromMatrixColumn(e,0).length(),l=1/ga.setFromMatrixColumn(e,1).length(),u=1/ga.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,y=u*_,M=f*v,R=f*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=y+M*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=M+y*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,y=h*_,M=p*v,R=p*_;t[0]=g+R*f,t[4]=M*f-y,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=y*f-M,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,y=h*_,M=p*v,R=p*_;t[0]=g-R*f,t[4]=-u*_,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*v,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,y=u*_,M=f*v,R=f*_;t[0]=h*v,t[4]=M*p-y,t[8]=g*p+R,t[1]=h*_,t[5]=R*p+g,t[9]=y*p-M,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*p,M=f*h,R=f*p;t[0]=h*v,t[4]=R-g*_,t[8]=M*_+y,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=y*_+M,t[10]=g-R*_}else if(e.order==="XZY"){const g=u*h,y=u*p,M=f*h,R=f*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=g*_+R,t[5]=u*v,t[9]=y*_-M,t[2]=M*_-y,t[6]=f*v,t[10]=R*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oy,e,ky)}lookAt(e,t,s){const o=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Xr.crossVectors(s,li),Xr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Xr.crossVectors(s,li)),Xr.normalize(),ic.crossVectors(li,Xr),o[0]=Xr.x,o[4]=ic.x,o[8]=li.x,o[1]=Xr.y,o[5]=ic.y,o[9]=li.y,o[2]=Xr.z,o[6]=ic.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],v=s[1],_=s[5],g=s[9],y=s[13],M=s[2],R=s[6],S=s[10],x=s[14],L=s[3],D=s[7],A=s[11],N=s[15],C=o[0],U=o[4],w=o[8],P=o[12],k=o[1],z=o[5],W=o[9],ce=o[13],pe=o[2],Z=o[6],fe=o[10],j=o[14],Y=o[3],le=o[7],ue=o[11],O=o[15];return l[0]=u*C+f*k+h*pe+p*Y,l[4]=u*U+f*z+h*Z+p*le,l[8]=u*w+f*W+h*fe+p*ue,l[12]=u*P+f*ce+h*j+p*O,l[1]=v*C+_*k+g*pe+y*Y,l[5]=v*U+_*z+g*Z+y*le,l[9]=v*w+_*W+g*fe+y*ue,l[13]=v*P+_*ce+g*j+y*O,l[2]=M*C+R*k+S*pe+x*Y,l[6]=M*U+R*z+S*Z+x*le,l[10]=M*w+R*W+S*fe+x*ue,l[14]=M*P+R*ce+S*j+x*O,l[3]=L*C+D*k+A*pe+N*Y,l[7]=L*U+D*z+A*Z+N*le,l[11]=L*w+D*W+A*fe+N*ue,l[15]=L*P+D*ce+A*j+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],_=e[6],g=e[10],y=e[14],M=e[3],R=e[7],S=e[11],x=e[15],L=h*y-p*g,D=f*y-p*_,A=f*g-h*_,N=u*y-p*v,C=u*g-h*v,U=u*_-f*v;return t*(R*L-S*D+x*A)-s*(M*L-S*N+x*C)+o*(M*D-R*N+x*U)-l*(M*A-R*C+S*U)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-f*p)-s*(l*v-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=e[9],g=e[10],y=e[11],M=e[12],R=e[13],S=e[14],x=e[15],L=t*f-s*u,D=t*h-o*u,A=t*p-l*u,N=s*h-o*f,C=s*p-l*f,U=o*p-l*h,w=v*R-_*M,P=v*S-g*M,k=v*x-y*M,z=_*S-g*R,W=_*x-y*R,ce=g*x-y*S,pe=L*ce-D*W+A*z+N*k-C*P+U*w;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/pe;return e[0]=(f*ce-h*W+p*z)*Z,e[1]=(o*W-s*ce-l*z)*Z,e[2]=(R*U-S*C+x*N)*Z,e[3]=(g*C-_*U-y*N)*Z,e[4]=(h*k-u*ce-p*P)*Z,e[5]=(t*ce-o*k+l*P)*Z,e[6]=(S*A-M*U-x*D)*Z,e[7]=(v*U-g*A+y*D)*Z,e[8]=(u*W-f*k+p*w)*Z,e[9]=(s*k-t*W-l*w)*Z,e[10]=(M*C-R*A+x*L)*Z,e[11]=(_*A-v*C-y*L)*Z,e[12]=(f*P-u*z-h*w)*Z,e[13]=(t*z-s*P+o*w)*Z,e[14]=(R*D-M*N-S*L)*Z,e[15]=(v*N-_*D+g*L)*Z,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+s,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,_=f+f,g=l*p,y=l*v,M=l*_,R=u*v,S=u*_,x=f*_,L=h*p,D=h*v,A=h*_,N=s.x,C=s.y,U=s.z;return o[0]=(1-(R+x))*N,o[1]=(y+A)*N,o[2]=(M-D)*N,o[3]=0,o[4]=(y-A)*C,o[5]=(1-(g+x))*C,o[6]=(S+L)*C,o[7]=0,o[8]=(M+D)*U,o[9]=(S-L)*U,o[10]=(1-(g+R))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=ga.set(o[0],o[1],o[2]).length();const f=ga.set(o[4],o[5],o[6]).length(),h=ga.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ui.copy(this);const p=1/u,v=1/f,_=1/h;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,t.setFromRotationMatrix(Ui),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Qi,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(s-o),g=(t+e)/(t-e),y=(s+o)/(s-o);let M,R;if(h)M=l/(u-l),R=u*l/(u-l);else if(f===Qi)M=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===qo)M=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Qi,h=!1){const p=this.elements,v=2/(t-e),_=2/(s-o),g=-(t+e)/(t-e),y=-(s+o)/(s-o);let M,R;if(h)M=1/(u-l),R=u/(u-l);else if(f===Qi)M=-2/(u-l),R=-(u+l)/(u-l);else if(f===qo)M=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Kc.prototype.isMatrix4=!0;let en=Kc;const ga=new $,Ui=new en,Oy=new $(0,0,0),ky=new $(1,1,1),Xr=new $,ic=new $,li=new $,I0=new en,N0=new Ha;class is{constructor(e=0,t=0,s=0,o=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],_=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return I0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I0,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return N0.setFromEuler(this),this.setFromQuaternion(N0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class Jg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zy=0;const U0=new $,va=new Ha,dr=new en,rc=new $,Ro=new $,By=new $,Vy=new Ha,F0=new $(1,0,0),O0=new $(0,1,0),k0=new $(0,0,1),z0={type:"added"},Hy={type:"removed"},_a={type:"childadded",child:null},$f={type:"childremoved",child:null};class yn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new $,t=new is,s=new Ha,o=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new pt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis(F0,e)}rotateY(e){return this.rotateOnAxis(O0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,t){return U0.copy(e).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(F0,e)}translateY(e){return this.translateOnAxis(O0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?rc.copy(e):rc.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Ro,rc,this.up):dr.lookAt(rc,Ro,this.up),this.quaternion.setFromRotationMatrix(dr),o&&(dr.extractRotation(o.matrixWorld),va.setFromRotationMatrix(dr),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z0),_a.child=e,this.dispatchEvent(_a),_a.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hy),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z0),_a.child=e,this.dispatchEvent(_a),_a.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=o,s;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}yn.DEFAULT_UP=new $(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gy={type:"move"};class Kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,s),x=this._getHandJoint(p,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&g>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Hi;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Zf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=s,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Et.workingColorSpace){if(e=Dh(e,1),t=Mt(t,0,1),s=Mt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Zf(u,l,e+1/3),this.g=Zf(u,l,e),this.b=Zf(u,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function s(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const s=ev[e.toLowerCase()];return s!==void 0?this.setHex(s,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Et.workingToColorSpace(zn.copy(this),e),Math.round(Mt(zn.r*255,0,255))*65536+Math.round(Mt(zn.g*255,0,255))*256+Math.round(Mt(zn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(zn.copy(this),t);const s=zn.r,o=zn.g,l=zn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const _=u-f;switch(p=v<=.5?_/(u+f):_/(2-u-f),u){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=ui){Et.workingToColorSpace(zn.copy(this),e);const t=zn.r,s=zn.g,o=zn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(sc);const s=Bo(qr.h,sc.h,t),o=Bo(qr.s,sc.s,t),l=Bo(qr.l,sc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new yt;yt.NAMES=ev;class Uh{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=s}clone(){return new Uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wy extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new $,hr=new $,jf=new $,pr=new $,xa=new $,ya=new $,B0=new $,Qf=new $,Jf=new $,ed=new $,td=new an,nd=new an,id=new an;class Si{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Fi.subVectors(e,t),o.cross(Fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Fi.subVectors(o,t),hr.subVectors(s,t),jf.subVectors(e,t);const u=Fi.dot(Fi),f=Fi.dot(hr),h=Fi.dot(jf),p=hr.dot(hr),v=hr.dot(jf),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,y=(p*h-f*v)*g,M=(u*v-f*h)*g;return l.set(1-y-M,M,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,pr.x),h.addScaledVector(u,pr.y),h.addScaledVector(f,pr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,t),nd.fromBufferAttribute(e,s),id.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(td,l.x),u.addScaledVector(nd,l.y),u.addScaledVector(id,l.z),u}static isFrontFacing(e,t,s,o){return Fi.subVectors(s,t),hr.subVectors(e,t),Fi.cross(hr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Fi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;xa.subVectors(o,s),ya.subVectors(l,s),Qf.subVectors(e,s);const h=xa.dot(Qf),p=ya.dot(Qf);if(h<=0&&p<=0)return t.copy(s);Jf.subVectors(e,o);const v=xa.dot(Jf),_=ya.dot(Jf);if(v>=0&&_<=v)return t.copy(o);const g=h*_-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(s).addScaledVector(xa,u);ed.subVectors(e,l);const y=xa.dot(ed),M=ya.dot(ed);if(M>=0&&y<=M)return t.copy(l);const R=y*p-h*M;if(R<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(s).addScaledVector(ya,f);const S=v*M-y*_;if(S<=0&&_-v>=0&&y-M>=0)return B0.subVectors(l,o),f=(_-v)/(_-v+(y-M)),t.copy(o).addScaledVector(B0,f);const x=1/(S+R+g);return u=R*x,f=g*x,t.copy(s).addScaledVector(xa,u).addScaledVector(ya,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(l,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),oc.subVectors(this.max,Co),Sa.subVectors(e.a,Co),Ma.subVectors(e.b,Co),Ea.subVectors(e.c,Co),Yr.subVectors(Ma,Sa),$r.subVectors(Ea,Ma),Es.subVectors(Sa,Ea);let t=[0,-Yr.z,Yr.y,0,-$r.z,$r.y,0,-Es.z,Es.y,Yr.z,0,-Yr.x,$r.z,0,-$r.x,Es.z,0,-Es.x,-Yr.y,Yr.x,0,-$r.y,$r.x,0,-Es.y,Es.x,0];return!rd(t,Sa,Ma,Ea,oc)||(t=[1,0,0,0,1,0,0,0,1],!rd(t,Sa,Ma,Ea,oc))?!1:(lc.crossVectors(Yr,$r),t=[lc.x,lc.y,lc.z],rd(t,Sa,Ma,Ea,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new $,new $,new $,new $,new $,new $,new $,new $],Oi=new $,ac=new Ko,Sa=new $,Ma=new $,Ea=new $,Yr=new $,$r=new $,Es=new $,Co=new $,oc=new $,lc=new $,ws=new $;function rd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){ws.fromArray(r,l);const f=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),h=e.dot(ws),p=t.dot(ws),v=s.dot(ws);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const mn=new $,cc=new ft;let Xy=0;class wi extends Vs{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=hh,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=zi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Vt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),s=Vt(s,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),s=Vt(s,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tv extends wi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class nv extends wi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class dn extends wi{constructor(e,t,s){super(new Float32Array(e),t,s)}}const qy=new Ko,Po=new $,sd=new $;class jc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):qy.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Po,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(sd)),this.expandByPoint(Po.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yy=0;const xi=new en,ad=new yn,wa=new $,ci=new Ko,Lo=new Ko,An=new $;class Gn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fy(e)?nv:tv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,s){return xi.makeTranslation(e,t,s),this.applyMatrix4(xi),this}scale(e,t,s){return xi.makeScale(e,t,s),this.applyMatrix4(xi),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Lo.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(ci.min,Lo.min),ci.expandByPoint(An),An.addVectors(ci.max,Lo.max),ci.expandByPoint(An)):(ci.expandByPoint(Lo.min),ci.expandByPoint(Lo.max))}ci.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)An.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(An));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)An.fromBufferAttribute(f,p),h&&(wa.fromBufferAttribute(e,p),An.add(wa)),o=Math.max(o,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new wi(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let w=0;w<s.count;w++)f[w]=new $,h[w]=new $;const p=new $,v=new $,_=new $,g=new ft,y=new ft,M=new ft,R=new $,S=new $;function x(w,P,k){p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,P),_.fromBufferAttribute(s,k),g.fromBufferAttribute(l,w),y.fromBufferAttribute(l,P),M.fromBufferAttribute(l,k),v.sub(p),_.sub(p),y.sub(g),M.sub(g);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(R.copy(v).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(z),f[w].add(R),f[P].add(R),f[k].add(R),h[w].add(S),h[P].add(S),h[k].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let w=0,P=L.length;w<P;++w){const k=L[w],z=k.start,W=k.count;for(let ce=z,pe=z+W;ce<pe;ce+=3)x(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const D=new $,A=new $,N=new $,C=new $;function U(w){N.fromBufferAttribute(o,w),C.copy(N);const P=f[w];D.copy(P),D.sub(N.multiplyScalar(N.dot(P))).normalize(),A.crossVectors(C,P);const z=A.dot(h[w])<0?-1:1;u.setXYZW(w,D.x,D.y,D.z,z)}for(let w=0,P=L.length;w<P;++w){const k=L[w],z=k.start,W=k.count;for(let ce=z,pe=z+W;ce<pe;ce+=3)U(e.getX(ce+0)),U(e.getX(ce+1)),U(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const o=new $,l=new $,u=new $,f=new $,h=new $,p=new $,v=new $,_=new $;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,S),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),f.add(v),h.add(v),p.add(v),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,_=f.normalized,g=new p.constructor(h.length*v);let y=0,M=0;for(let R=0,S=h.length;R<S;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*v;for(let x=0;x<v;x++)g[M++]=p[y++]}return new wi(g,v,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const g=p[v],y=e(g,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,g=p.length;_<g;_++){const y=p[_];v.push(y.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,y=_.length;g<y;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $y{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[s+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yn=new $;class Xc{constructor(e,t,s,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=zi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Vt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),s=Vt(s,this.array),o=Vt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),s=Vt(s,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Wc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new wi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ky=0;class Hs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Ia,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=bd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(s.blending=this.blending),this.side!==ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==bd&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ft().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ga extends Hs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ta;const Do=new $,Aa=new $,ba=new $,Ra=new ft,Io=new ft,iv=new en,uc=new $,No=new $,fc=new $,V0=new ft,od=new ft,H0=new ft;class Zo extends yn{constructor(e=new Ga){if(super(),this.isSprite=!0,this.type="Sprite",Ta===void 0){Ta=new Gn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new $y(t,5);Ta.setIndex([0,1,2,0,2,3]),Ta.setAttribute("position",new Xc(s,3,0,!1)),Ta.setAttribute("uv",new Xc(s,2,3,!1))}this.geometry=Ta,this.material=e,this.center=new ft(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Aa.setFromMatrixScale(this.matrixWorld),iv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ba.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Aa.multiplyScalar(-ba.z);const s=this.material.rotation;let o,l;s!==0&&(l=Math.cos(s),o=Math.sin(s));const u=this.center;dc(uc.set(-.5,-.5,0),ba,u,Aa,o,l),dc(No.set(.5,-.5,0),ba,u,Aa,o,l),dc(fc.set(.5,.5,0),ba,u,Aa,o,l),V0.set(0,0),od.set(1,0),H0.set(1,1);let f=e.ray.intersectTriangle(uc,No,fc,!1,Do);if(f===null&&(dc(No.set(-.5,.5,0),ba,u,Aa,o,l),od.set(0,1),f=e.ray.intersectTriangle(uc,fc,No,!1,Do),f===null))return;const h=e.ray.origin.distanceTo(Do);h<e.near||h>e.far||t.push({distance:h,point:Do.clone(),uv:Si.getInterpolation(Do,uc,No,fc,V0,od,H0,new ft),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dc(r,e,t,s,o,l){Ra.subVectors(r,t).addScalar(.5).multiply(s),o!==void 0?(Io.x=l*Ra.x-o*Ra.y,Io.y=o*Ra.x+l*Ra.y):Io.copy(Ra),r.copy(e),r.x+=Io.x,r.y+=Io.y,r.applyMatrix4(iv)}const gr=new $,ld=new $,hc=new $,Kr=new $,cd=new $,pc=new $,ud=new $;class rv{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){ld.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(ld);const l=e.distanceTo(t)*.5,u=-this.direction.dot(hc),f=Kr.dot(this.direction),h=-Kr.dot(hc),p=Kr.lengthSq(),v=Math.abs(1-u*u);let _,g,y,M;if(v>0)if(_=u*h-f,g=u*f-h,M=l*v,_>=0)if(g>=-M)if(g<=M){const R=1/v;_*=R,g*=R,y=_*(_+u*g+2*f)+g*(u*_+g+2*h)+p}else g=l,_=Math.max(0,-(u*g+f)),y=-_*_+g*(g+2*h)+p;else g=-l,_=Math.max(0,-(u*g+f)),y=-_*_+g*(g+2*h)+p;else g<=-M?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+p):g<=M?(_=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),y=-_*_+g*(g+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ld).addScaledVector(hc,g),y}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const s=gr.dot(this.direction),o=gr.dot(gr)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,s,o,l){cd.subVectors(t,e),pc.subVectors(s,e),ud.crossVectors(cd,pc);let u=this.direction.dot(ud),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Kr.subVectors(this.origin,e);const h=f*this.direction.dot(pc.crossVectors(Kr,pc));if(h<0)return null;const p=f*this.direction.dot(cd.cross(Kr));if(p<0||h+p>u)return null;const v=-f*Kr.dot(ud);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ti extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const G0=new en,Ts=new rv,mc=new jc,W0=new $,gc=new $,vc=new $,_c=new $,fd=new $,xc=new $,X0=new $,yc=new $;class wt extends yn{constructor(e=new Gn,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){xc.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],_=l[h];v!==0&&(fd.fromBufferAttribute(_,e),u?xc.addScaledVector(fd,v):xc.addScaledVector(fd.sub(t),v))}t.add(xc)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(l),Ts.copy(e.ray).recast(e.near),!(mc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(mc,W0)===null||Ts.origin.distanceToSquared(W0)>(e.far-e.near)**2))&&(G0.copy(l).invert(),Ts.copy(e.ray).applyMatrix4(G0),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,R=g.length;M<R;M++){const S=g[M],x=u[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,N=D;A<N;A+=3){const C=f.getX(A),U=f.getX(A+1),w=f.getX(A+2);o=Sc(this,x,e,s,p,v,_,C,U,w),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let S=M,x=R;S<x;S+=3){const L=f.getX(S),D=f.getX(S+1),A=f.getX(S+2);o=Sc(this,u,e,s,p,v,_,L,D,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,R=g.length;M<R;M++){const S=g[M],x=u[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,N=D;A<N;A+=3){const C=A,U=A+1,w=A+2;o=Sc(this,x,e,s,p,v,_,C,U,w),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let S=M,x=R;S<x;S+=3){const L=S,D=S+1,A=S+2;o=Sc(this,u,e,s,p,v,_,L,D,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Zy(r,e,t,s,o,l,u,f){let h;if(e.side===ii?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===ts,f),h===null)return null;yc.copy(f),yc.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(yc);return p<t.near||p>t.far?null:{distance:p,point:yc.clone(),object:r}}function Sc(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,gc),r.getVertexPosition(h,vc),r.getVertexPosition(p,_c);const v=Zy(r,e,t,s,gc,vc,_c,X0);if(v){const _=new $;Si.getBarycoord(X0,gc,vc,_c,_),o&&(v.uv=Si.getInterpolatedAttribute(o,f,h,p,_,new ft)),l&&(v.uv1=Si.getInterpolatedAttribute(l,f,h,p,_,new ft)),u&&(v.normal=Si.getInterpolatedAttribute(u,f,h,p,_,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new $,materialIndex:0};Si.getNormal(gc,vc,_c,g.normal),v.face=g,v.barycoord=_}return v}class jy extends Hn{constructor(e=null,t=1,s=1,o,l,u,f,h,p=Dn,v=Dn,_,g){super(null,u,f,h,p,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new $,Qy=new $,Jy=new pt;class bs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=dd.subVectors(s,t).cross(Qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(dd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Jy.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new jc,eS=new ft(.5,.5),Mc=new $;class Fh{constructor(e=new bs,t=new bs,s=new bs,o=new bs,l=new bs,u=new bs){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Qi,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],_=l[5],g=l[6],y=l[7],M=l[8],R=l[9],S=l[10],x=l[11],L=l[12],D=l[13],A=l[14],N=l[15];if(o[0].setComponents(p-u,y-v,x-M,N-L).normalize(),o[1].setComponents(p+u,y+v,x+M,N+L).normalize(),o[2].setComponents(p+f,y+_,x+R,N+D).normalize(),o[3].setComponents(p-f,y-_,x-R,N-D).normalize(),s)o[4].setComponents(h,g,S,A).normalize(),o[5].setComponents(p-h,y-g,x-S,N-A).normalize();else if(o[4].setComponents(p-h,y-g,x-S,N-A).normalize(),t===Qi)o[5].setComponents(p+h,y+g,x+S,N+A).normalize();else if(t===qo)o[5].setComponents(h,g,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const t=eS.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Mc.x=o.normal.x>0?e.max.x:e.min.x,Mc.y=o.normal.y>0?e.max.y:e.min.y,Mc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sv extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q0=new en,ph=new rv,Ec=new jc,wc=new $;class tS extends yn{constructor(e=new Gn,t=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(o),Ec.radius+=l,e.ray.intersectsSphere(Ec)===!1)return;q0.copy(o).invert(),ph.copy(e.ray).applyMatrix4(q0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,_=s.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let M=g,R=y;M<R;M++){const S=p.getX(M);wc.fromBufferAttribute(_,S),Y0(wc,S,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let M=g,R=y;M<R;M++)wc.fromBufferAttribute(_,M),Y0(wc,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Y0(r,e,t,s,o,l,u){const f=ph.distanceSqToPoint(r);if(f<t){const h=new $;ph.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class av extends Hn{constructor(e=[],t=Os,s,o,l,u,f,h,p,v){super(e,t,s,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ov extends Hn{constructor(e,t,s,o,l,u,f,h,p){super(e,t,s,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class za extends Hn{constructor(e,t,s=tr,o,l,u,f=Dn,h=Dn,p,v=wr,_=1){if(v!==wr&&v!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,u,f,h,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nS extends za{constructor(e,t=tr,s=Os,o,l,u=Dn,f=Dn,h,p=wr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,o,l,u,f,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lv extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ei extends Gn{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],_=[];let g=0,y=0;M("z","y","x",-1,-1,s,t,e,u,l,0),M("z","y","x",1,-1,s,t,-e,u,l,1),M("x","z","y",1,1,e,s,t,o,u,2),M("x","z","y",1,-1,e,s,-t,o,u,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2));function M(R,S,x,L,D,A,N,C,U,w,P){const k=A/U,z=N/w,W=A/2,ce=N/2,pe=C/2,Z=U+1,fe=w+1;let j=0,Y=0;const le=new $;for(let ue=0;ue<fe;ue++){const O=ue*z-ce;for(let Q=0;Q<Z;Q++){const Fe=Q*k-W;le[R]=Fe*L,le[S]=O*D,le[x]=pe,p.push(le.x,le.y,le.z),le[R]=0,le[S]=0,le[x]=C>0?1:-1,v.push(le.x,le.y,le.z),_.push(Q/U),_.push(1-ue/w),j+=1}}for(let ue=0;ue<w;ue++)for(let O=0;O<U;O++){const Q=g+O+Z*ue,Fe=g+O+Z*(ue+1),je=g+(O+1)+Z*(ue+1),Ge=g+(O+1)+Z*ue;h.push(Q,Fe,Ge),h.push(Fe,je,Ge),Y+=6}f.addGroup(y,Y,P),y+=Y,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tr extends Gn{constructor(e=1,t=1,s=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],_=[],g=[],y=[];let M=0;const R=[],S=s/2;let x=0;L(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(y,2));function L(){const A=new $,N=new $;let C=0;const U=(t-e)/s;for(let w=0;w<=l;w++){const P=[],k=w/l,z=k*(t-e)+e;for(let W=0;W<=o;W++){const ce=W/o,pe=ce*h+f,Z=Math.sin(pe),fe=Math.cos(pe);N.x=z*Z,N.y=-k*s+S,N.z=z*fe,_.push(N.x,N.y,N.z),A.set(Z,U,fe).normalize(),g.push(A.x,A.y,A.z),y.push(ce,1-k),P.push(M++)}R.push(P)}for(let w=0;w<o;w++)for(let P=0;P<l;P++){const k=R[P][w],z=R[P+1][w],W=R[P+1][w+1],ce=R[P][w+1];(e>0||P!==0)&&(v.push(k,z,ce),C+=3),(t>0||P!==l-1)&&(v.push(z,W,ce),C+=3)}p.addGroup(x,C,0),x+=C}function D(A){const N=M,C=new ft,U=new $;let w=0;const P=A===!0?e:t,k=A===!0?1:-1;for(let W=1;W<=o;W++)_.push(0,S*k,0),g.push(0,k,0),y.push(.5,.5),M++;const z=M;for(let W=0;W<=o;W++){const pe=W/o*h+f,Z=Math.cos(pe),fe=Math.sin(pe);U.x=P*fe,U.y=S*k,U.z=P*Z,_.push(U.x,U.y,U.z),g.push(0,k,0),C.x=Z*.5+.5,C.y=fe*.5*k+.5,y.push(C.x,C.y),M++}for(let W=0;W<o;W++){const ce=N+W,pe=z+W;A===!0?v.push(pe,pe+1,ce):v.push(pe+1,pe,ce),w+=3}p.addGroup(x,w,A===!0?1:2),x+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends Tr{constructor(e=1,t=1,s=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,s,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Qc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oh extends Gn{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),v(),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(l.slice(),3)),this.setAttribute("uv",new dn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const D=new $,A=new $,N=new $;for(let C=0;C<t.length;C+=3)y(t[C+0],D),y(t[C+1],A),y(t[C+2],N),h(D,A,N,L)}function h(L,D,A,N){const C=N+1,U=[];for(let w=0;w<=C;w++){U[w]=[];const P=L.clone().lerp(A,w/C),k=D.clone().lerp(A,w/C),z=C-w;for(let W=0;W<=z;W++)W===0&&w===C?U[w][W]=P:U[w][W]=P.clone().lerp(k,W/z)}for(let w=0;w<C;w++)for(let P=0;P<2*(C-w)-1;P++){const k=Math.floor(P/2);P%2===0?(g(U[w][k+1]),g(U[w+1][k]),g(U[w][k])):(g(U[w][k+1]),g(U[w+1][k+1]),g(U[w+1][k]))}}function p(L){const D=new $;for(let A=0;A<l.length;A+=3)D.x=l[A+0],D.y=l[A+1],D.z=l[A+2],D.normalize().multiplyScalar(L),l[A+0]=D.x,l[A+1]=D.y,l[A+2]=D.z}function v(){const L=new $;for(let D=0;D<l.length;D+=3){L.x=l[D+0],L.y=l[D+1],L.z=l[D+2];const A=S(L)/2/Math.PI+.5,N=x(L)/Math.PI+.5;u.push(A,1-N)}M(),_()}function _(){for(let L=0;L<u.length;L+=6){const D=u[L+0],A=u[L+2],N=u[L+4],C=Math.max(D,A,N),U=Math.min(D,A,N);C>.9&&U<.1&&(D<.2&&(u[L+0]+=1),A<.2&&(u[L+2]+=1),N<.2&&(u[L+4]+=1))}}function g(L){l.push(L.x,L.y,L.z)}function y(L,D){const A=L*3;D.x=e[A+0],D.y=e[A+1],D.z=e[A+2]}function M(){const L=new $,D=new $,A=new $,N=new $,C=new ft,U=new ft,w=new ft;for(let P=0,k=0;P<l.length;P+=9,k+=6){L.set(l[P+0],l[P+1],l[P+2]),D.set(l[P+3],l[P+4],l[P+5]),A.set(l[P+6],l[P+7],l[P+8]),C.set(u[k+0],u[k+1]),U.set(u[k+2],u[k+3]),w.set(u[k+4],u[k+5]),N.copy(L).add(D).add(A).divideScalar(3);const z=S(N);R(C,k+0,L,z),R(U,k+2,D,z),R(w,k+4,A,z)}}function R(L,D,A,N){N<0&&L.x===1&&(u[D]=L.x-1),A.x===0&&A.z===0&&(u[D]=N/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.vertices,e.indices,e.radius,e.detail)}}class jo extends Oh{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}class rs extends Gn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,v=h+1,_=e/f,g=t/h,y=[],M=[],R=[],S=[];for(let x=0;x<v;x++){const L=x*g-u;for(let D=0;D<p;D++){const A=D*_-l;M.push(A,-L,0),R.push(0,0,1),S.push(D/f),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let L=0;L<f;L++){const D=L+p*x,A=L+p*(x+1),N=L+1+p*(x+1),C=L+1+p*x;y.push(D,A,C),y.push(A,N,C)}this.setIndex(y),this.setAttribute("position",new dn(M,3)),this.setAttribute("normal",new dn(R,3)),this.setAttribute("uv",new dn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jc extends Gn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+f,Math.PI);let p=0;const v=[],_=new $,g=new $,y=[],M=[],R=[],S=[];for(let x=0;x<=s;x++){const L=[],D=x/s,A=u+D*f,N=e*Math.cos(A),C=Math.sqrt(e*e-N*N);let U=0;x===0&&u===0?U=.5/t:x===s&&h===Math.PI&&(U=-.5/t);for(let w=0;w<=t;w++){const P=w/t,k=o+P*l;_.x=-C*Math.cos(k),_.y=N,_.z=C*Math.sin(k),M.push(_.x,_.y,_.z),g.copy(_).normalize(),R.push(g.x,g.y,g.z),S.push(P+U,1-D),L.push(p++)}v.push(L)}for(let x=0;x<s;x++)for(let L=0;L<t;L++){const D=v[x][L+1],A=v[x][L],N=v[x+1][L],C=v[x+1][L+1];(x!==0||u>0)&&y.push(D,A,C),(x!==s-1||h<Math.PI)&&y.push(A,N,C)}this.setIndex(y),this.setAttribute("position",new dn(M,3)),this.setAttribute("normal",new dn(R,3)),this.setAttribute("uv",new dn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kh extends Gn{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),o=Math.floor(o);const h=[],p=[],v=[],_=[],g=new $,y=new $,M=new $;for(let R=0;R<=s;R++){const S=u+R/s*f;for(let x=0;x<=o;x++){const L=x/o*l;y.x=(e+t*Math.cos(S))*Math.cos(L),y.y=(e+t*Math.cos(S))*Math.sin(L),y.z=t*Math.sin(S),p.push(y.x,y.y,y.z),g.x=e*Math.cos(L),g.y=e*Math.sin(L),M.subVectors(y,g).normalize(),v.push(M.x,M.y,M.z),_.push(x/o),_.push(R/s)}}for(let R=1;R<=s;R++)for(let S=1;S<=o;S++){const x=(o+1)*R+S-1,L=(o+1)*(R-1)+S-1,D=(o+1)*(R-1)+S,A=(o+1)*R+S;h.push(x,L,A),h.push(L,D,A)}this.setIndex(h),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ba(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if($0(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if($0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function $n(r){const e={};for(let t=0;t<r.length;t++){const s=Ba(r[t]);for(const o in s)e[o]=s[o]}return e}function $0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function iS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const rS={clone:Ba,merge:$n};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=aS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ba(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new yt().setHex(o.value);break;case"v2":this.uniforms[s].value=new ft().fromArray(o.value);break;case"v3":this.uniforms[s].value=new $().fromArray(o.value);break;case"v4":this.uniforms[s].value=new an().fromArray(o.value);break;case"m3":this.uniforms[s].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new en().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class oS extends nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mi extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lS extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cS extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uv extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class uS extends uv{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const hd=new en,K0=new $,Z0=new $;class fS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),t.position.copy(K0),Z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Z0),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qo||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new $,Ac=new Ha,$i=new $;class fv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,Ac,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Tc,Ac,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new $,j0=new ft,Q0=new ft;class yi extends fv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,j0,Q0),t.subVectors(Q0,j0)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zh extends fv{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dS extends fS{constructor(){super(new zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J0 extends uv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new dS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ca=-90,Pa=1;class hS extends yn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Ca,Pa,e,t);o.layers=this.layers,this.add(o);const l=new yi(Ca,Pa,e,t);l.layers=this.layers,this.add(l);const u=new yi(Ca,Pa,e,t);u.layers=this.layers,this.add(u);const f=new yi(Ca,Pa,e,t);f.layers=this.layers,this.add(f);const h=new yi(Ca,Pa,e,t);h.layers=this.layers,this.add(h);const p=new yi(Ca,Pa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===qo)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class pS extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yh=class Yh{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Yh.prototype.isMatrix2=!0;let eg=Yh;function tg(r,e,t,s){const o=mS(s);switch(t){case $g:return r*e;case Zg:return r*e/o.components*o.byteLength;case bh:return r*e/o.components*o.byteLength;case ks:return r*e*2/o.components*o.byteLength;case Rh:return r*e*2/o.components*o.byteLength;case Kg:return r*e*3/o.components*o.byteLength;case Vi:return r*e*4/o.components*o.byteLength;case Ch:return r*e*4/o.components*o.byteLength;case Lc:case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:case zd:return Math.max(r,16)*Math.max(e,8)/4;case Fd:case kd:return Math.max(r,8)*Math.max(e,8)/2;case Bd:case Vd:case Gd:case Wd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hd:case zc:case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ah:case oh:case lh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ch:case uh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bc:case fh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(r){switch(r){case fi:case Wg:return{byteLength:1,components:1};case Wo:case Xg:case Er:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case tr:case wh:case ji:return{byteLength:4,components:1};case qg:case Yg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function gS(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,p,v),f.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,p){const v=h.array,_=h.updateRanges;if(r.bindBuffer(p,f),_.length===0)r.bufferSubData(p,0,v);else{_.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<_.length;y++){const M=_[g],R=_[y];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++g,_[g]=R)}_.length=g+1;for(let y=0,M=_.length;y<M;y++){const R=_[y];r.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_S=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,BS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:vS,alphahash_pars_fragment:_S,alphamap_fragment:xS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:bS,beginnormal_vertex:RS,bsdfs:CS,iridescence_fragment:PS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:NS,clipping_planes_vertex:US,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:kS,color_vertex:zS,common:BS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:HS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:qS,colorspace_fragment:YS,colorspace_pars_fragment:$S,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:jS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:cM,envmap_vertex:JS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:oM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:vM,lights_fragment_end:_M,lightprobes_pars_fragment:xM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:EM,map_fragment:wM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:bM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:CM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:IM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:OM,normal_pars_vertex:kM,normal_vertex:zM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:qM,premultiplied_alpha_fragment:YM,project_vertex:$M,dithering_fragment:KM,dithering_pars_fragment:ZM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:e1,shadowmap_vertex:t1,shadowmask_pars_fragment:n1,skinbase_vertex:i1,skinning_pars_vertex:r1,skinning_vertex:s1,skinnormal_vertex:a1,specularmap_fragment:o1,specularmap_pars_fragment:l1,tonemapping_fragment:c1,tonemapping_pars_fragment:u1,transmission_fragment:f1,transmission_pars_fragment:d1,uv_pars_fragment:h1,uv_pars_vertex:p1,uv_vertex:m1,worldpos_vertex:g1,background_vert:v1,background_frag:_1,backgroundCube_vert:x1,backgroundCube_frag:y1,cube_vert:S1,cube_frag:M1,depth_vert:E1,depth_frag:w1,distance_vert:T1,distance_frag:A1,equirect_vert:b1,equirect_frag:R1,linedashed_vert:C1,linedashed_frag:P1,meshbasic_vert:L1,meshbasic_frag:D1,meshlambert_vert:I1,meshlambert_frag:N1,meshmatcap_vert:U1,meshmatcap_frag:F1,meshnormal_vert:O1,meshnormal_frag:k1,meshphong_vert:z1,meshphong_frag:B1,meshphysical_vert:V1,meshphysical_frag:H1,meshtoon_vert:G1,meshtoon_frag:W1,points_vert:X1,points_frag:q1,shadow_vert:Y1,shadow_frag:$1,sprite_vert:K1,sprite_frag:Z1},Ue={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Zi={basic:{uniforms:$n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:$n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:$n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:$n([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:$n([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:$n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:$n([Ue.points,Ue.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:$n([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:$n([Ue.common,Ue.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:$n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:$n([Ue.sprite,Ue.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:$n([Ue.common,Ue.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:$n([Ue.lights,Ue.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Zi.physical={uniforms:$n([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const bc={r:0,b:0,g:0},j1=new en,hv=new pt;hv.set(-1,0,0,0,1,0,0,0,1);function Q1(r,e,t,s,o,l){const u=new yt(0);let f=o===!0?0:1,h,p,v=null,_=0,g=null;function y(L){let D=L.isScene===!0?L.background:null;if(D&&D.isTexture){const A=L.backgroundBlurriness>0;D=e.get(D,A)}return D}function M(L){let D=!1;const A=y(L);A===null?S(u,f):A&&A.isColor&&(S(A,1),D=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(L,D){const A=y(D);A&&(A.isCubeTexture||A.mapping===Zc)?(p===void 0&&(p=new wt(new Ei(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Ba(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(D.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(hv),p.material.toneMapped=Et.getTransfer(A.colorSpace)!==Bt,(v!==A||_!==A.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=A,_=A.version,g=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new wt(new rs(2,2),new nr({name:"BackgroundMaterial",uniforms:Ba(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Et.getTransfer(A.colorSpace)!==Bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||_!==A.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=A,_=A.version,g=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function S(L,D){L.getRGB(bc,cv(r)),t.buffers.color.setClear(bc.r,bc.g,bc.b,D,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,D=1){u.set(L),f=D,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,S(u,f)},render:M,addToRenderList:R,dispose:x}}function J1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,u=!1;function f(z,W,ce,pe,Z){let fe=!1;const j=_(z,pe,ce,W);l!==j&&(l=j,p(l.object)),fe=y(z,pe,ce,Z),fe&&M(z,pe,ce,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,A(z,W,ce,pe),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return r.createVertexArray()}function p(z){return r.bindVertexArray(z)}function v(z){return r.deleteVertexArray(z)}function _(z,W,ce,pe){const Z=pe.wireframe===!0;let fe=s[W.id];fe===void 0&&(fe={},s[W.id]=fe);const j=z.isInstancedMesh===!0?z.id:0;let Y=fe[j];Y===void 0&&(Y={},fe[j]=Y);let le=Y[ce.id];le===void 0&&(le={},Y[ce.id]=le);let ue=le[Z];return ue===void 0&&(ue=g(h()),le[Z]=ue),ue}function g(z){const W=[],ce=[],pe=[];for(let Z=0;Z<t;Z++)W[Z]=0,ce[Z]=0,pe[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:pe,object:z,attributes:{},index:null}}function y(z,W,ce,pe){const Z=l.attributes,fe=W.attributes;let j=0;const Y=ce.getAttributes();for(const le in Y)if(Y[le].location>=0){const O=Z[le];let Q=fe[le];if(Q===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;j++}return l.attributesNum!==j||l.index!==pe}function M(z,W,ce,pe){const Z={},fe=W.attributes;let j=0;const Y=ce.getAttributes();for(const le in Y)if(Y[le].location>=0){let O=fe[le];O===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(O=z.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),Z[le]=Q,j++}l.attributes=Z,l.attributesNum=j,l.index=pe}function R(){const z=l.newAttributes;for(let W=0,ce=z.length;W<ce;W++)z[W]=0}function S(z){x(z,0)}function x(z,W){const ce=l.newAttributes,pe=l.enabledAttributes,Z=l.attributeDivisors;ce[z]=1,pe[z]===0&&(r.enableVertexAttribArray(z),pe[z]=1),Z[z]!==W&&(r.vertexAttribDivisor(z,W),Z[z]=W)}function L(){const z=l.newAttributes,W=l.enabledAttributes;for(let ce=0,pe=W.length;ce<pe;ce++)W[ce]!==z[ce]&&(r.disableVertexAttribArray(ce),W[ce]=0)}function D(z,W,ce,pe,Z,fe,j){j===!0?r.vertexAttribIPointer(z,W,ce,Z,fe):r.vertexAttribPointer(z,W,ce,pe,Z,fe)}function A(z,W,ce,pe){R();const Z=pe.attributes,fe=ce.getAttributes(),j=W.defaultAttributeValues;for(const Y in fe){const le=fe[Y];if(le.location>=0){let ue=Z[Y];if(ue===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor)),ue!==void 0){const O=ue.normalized,Q=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;const je=Fe.buffer,Ge=Fe.type,se=Fe.bytesPerElement,ye=Ge===r.INT||Ge===r.UNSIGNED_INT||ue.gpuType===wh;if(ue.isInterleavedBufferAttribute){const ve=ue.data,Oe=ve.stride,nt=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let it=0;it<le.locationSize;it++)x(le.location+it,ve.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let it=0;it<le.locationSize;it++)S(le.location+it);r.bindBuffer(r.ARRAY_BUFFER,je);for(let it=0;it<le.locationSize;it++)D(le.location+it,Q/le.locationSize,Ge,O,Oe*se,(nt+Q/le.locationSize*it)*se,ye)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<le.locationSize;ve++)x(le.location+ve,ue.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<le.locationSize;ve++)S(le.location+ve);r.bindBuffer(r.ARRAY_BUFFER,je);for(let ve=0;ve<le.locationSize;ve++)D(le.location+ve,Q/le.locationSize,Ge,O,Q*se,Q/le.locationSize*ve*se,ye)}}else if(j!==void 0){const O=j[Y];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(le.location,O);break;case 3:r.vertexAttrib3fv(le.location,O);break;case 4:r.vertexAttrib4fv(le.location,O);break;default:r.vertexAttrib1fv(le.location,O)}}}}L()}function N(){P();for(const z in s){const W=s[z];for(const ce in W){const pe=W[ce];for(const Z in pe){const fe=pe[Z];for(const j in fe)v(fe[j].object),delete fe[j];delete pe[Z]}}delete s[z]}}function C(z){if(s[z.id]===void 0)return;const W=s[z.id];for(const ce in W){const pe=W[ce];for(const Z in pe){const fe=pe[Z];for(const j in fe)v(fe[j].object),delete fe[j];delete pe[Z]}}delete s[z.id]}function U(z){for(const W in s){const ce=s[W];for(const pe in ce){const Z=ce[pe];if(Z[z.id]===void 0)continue;const fe=Z[z.id];for(const j in fe)v(fe[j].object),delete fe[j];delete Z[z.id]}}}function w(z){for(const W in s){const ce=s[W],pe=z.isInstancedMesh===!0?z.id:0,Z=ce[pe];if(Z!==void 0){for(const fe in Z){const j=Z[fe];for(const Y in j)v(j[Y].object),delete j[Y];delete Z[fe]}delete ce[pe],Object.keys(ce).length===0&&delete s[W]}}}function P(){k(),u=!0,l!==o&&(l=o,p(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:P,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfObject:w,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:S,disableUnusedAttributes:L}}function eE(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,v){v!==0&&(r.drawArraysInstanced(s,h,p,v),t.update(p,s,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,v);let g=0;for(let y=0;y<v;y++)g+=p[y];t.update(g,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function tE(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Vi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const w=U===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==fi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ji&&!w)}function h(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(lt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:A,maxSamples:N,samples:C}}function nE(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new bs,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||s!==0||o;return o=g,s=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,y){const M=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!o||M===null||M.length===0||l&&!S)l?v(null):p();else{const L=l?0:s,D=L*4;let A=x.clippingState||null;h.value=A,A=v(M,g,D,y);for(let N=0;N!==D;++N)A[N]=t[N];x.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,y,M){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=h.value,M!==!0||S===null){const x=y+R*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,A=y;D!==R;++D,A+=4)u.copy(_[D]).applyMatrix4(L,f),u.normal.toArray(S,A),S[A+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Qr=4,ng=[.125,.215,.35,.446,.526,.582],Ps=20,iE=256,Uo=new zh,ig=new yt;let pd=null,md=0,gd=0,vd=!1;const rE=new $;class rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=rE}=l;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=vd,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Er,format:Vi,colorSpace:Vc,depthBuffer:!1},o=sg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sE(l)),this._blurMaterial=oE(l,e,t),this._ggxMaterial=aE(l,e,t)}return o}_compileMaterial(e){const t=new wt(new Gn,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,s,o,l){const h=new yi(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(ig),_.toneMapping=Ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new Ei,new Ti({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,x=!0):(S.color.copy(ig),x=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[D],l.y,l.z)):A===1?(h.up.set(0,0,p[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[D],l.z)):(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[D]));const N=this._cubeSize;La(o,A*N,D>2?N:0,N,N),_.setRenderTarget(o),x&&_.render(R,h),_.render(e,h)}_.toneMapping=y,_.autoClear=g,e.background=L}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Os||e.mapping===ka;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ag());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;La(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Uo)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,y=_*g,{_lodMax:M}=this,R=this._sizeLods[s],S=3*R*(s>M-Qr?s-M+Qr:0),x=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=M-t,La(l,S,x,3*R,2*R),o.setRenderTarget(l),o.render(f,Uo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-s,La(e,S,x,3*R,2*R),o.setRenderTarget(e),o.render(f,Uo)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Ps-1),R=l/M,S=isFinite(l)?1+Math.floor(v*R):Ps;S>Ps&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ps}`);const x=[];let L=0;for(let U=0;U<Ps;++U){const w=U/R,P=Math.exp(-w*w/2);x.push(P),U===0?L+=P:U<S&&(L+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:D}=this;g.dTheta.value=M,g.mipInt.value=D-s;const A=this._sizeLods[o],N=3*A*(o>D-Qr?o-D+Qr:0),C=4*(this._cubeSize-A);La(t,N,C,3*A,2*A),h.setRenderTarget(t),h.render(_,Uo)}}function sE(r){const e=[],t=[],s=[];let o=r;const l=r-Qr+1+ng.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>r-Qr?h=ng[u-r+Qr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,M=6,R=3,S=2,x=1,L=new Float32Array(R*M*y),D=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let C=0;C<y;C++){const U=C%3*2/3-1,w=C>2?0:-1,P=[U,w,0,U+2/3,w,0,U+2/3,w+1,0,U,w,0,U+2/3,w+1,0,U,w+1,0];L.set(P,R*M*C),D.set(g,S*M*C);const k=[C,C,C,C,C,C];A.set(k,x*M*C)}const N=new Gn;N.setAttribute("position",new wi(L,R)),N.setAttribute("uv",new wi(D,S)),N.setAttribute("faceIndex",new wi(A,x)),s.push(new wt(N,null)),o>Qr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function sg(r,e,t){const s=new er(r,e,t);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function La(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function aE(r,e,t){return new nr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function oE(r,e,t){const s=new Float32Array(Ps),o=new $(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ag(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function og(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class pv extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new av(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ei(5,5,5),l=new nr({name:"CubemapFromEquirect",uniforms:Ba(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:yr});l.uniforms.tEquirect.value=t;const u=new wt(o,l),f=t.minFilter;return t.minFilter===Ls&&(t.minFilter=Vn),new hS(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function lE(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Vf||y===Hf)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const R=new pv(M.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,M=y===Vf||y===Hf,R=y===Os||y===ka;if(M||R){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new rg(r)),S=M?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const L=g.image;return M&&L&&L.height>0||R&&L&&h(L)?(s===null&&(s=new rg(r)),S=M?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function f(g,y){return y===Vf?g.mapping=Os:y===Hf&&(g.mapping=ka),g}function h(g){let y=0;const M=6;for(let R=0;R<M;R++)g[R]!==void 0&&y++;return y===M}function p(g){const y=g.target;y.removeEventListener("dispose",p);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function cE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Na("WebGLRenderer: "+s+" extension not supported."),o}}}function uE(r,e,t,s){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const y in g)e.update(g[y],r.ARRAY_BUFFER)}function p(_){const g=[],y=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(y!==null){const L=y.array;R=y.version;for(let D=0,A=L.length;D<A;D+=3){const N=L[D+0],C=L[D+1],U=L[D+2];g.push(N,C,C,U,U,N)}}else{const L=M.array;R=M.version;for(let D=0,A=L.length/3-1;D<A;D+=3){const N=D+0,C=D+1,U=D+2;g.push(N,C,C,U,U,N)}}const S=new(M.count>=65535?nv:tv)(g,1);S.version=R;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function v(_){const g=l.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function fE(r,e,t){let s;function o(_){s=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,g){r.drawElements(s,g,l,_*u),t.update(g,s,1)}function p(_,g,y){y!==0&&(r.drawElementsInstanced(s,g,l,_*u,y),t.update(g,s,y))}function v(_,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,_,0,y);let R=0;for(let S=0;S<y;S++)R+=g[S];t.update(R,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function dE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function hE(r,e,t){const s=new WeakMap,o=new an;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(f);if(g===void 0||g.count!==_){let k=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",k)};var y=k;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let N=f.attributes.position.count*A,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const U=new Float32Array(N*C*4*_),w=new Qg(U,N,C,_);w.type=ji,w.needsUpdate=!0;const P=A*4;for(let z=0;z<_;z++){const W=x[z],ce=L[z],pe=D[z],Z=N*C*4*z;for(let fe=0;fe<W.count;fe++){const j=fe*P;M===!0&&(o.fromBufferAttribute(W,fe),U[Z+j+0]=o.x,U[Z+j+1]=o.y,U[Z+j+2]=o.z,U[Z+j+3]=0),R===!0&&(o.fromBufferAttribute(ce,fe),U[Z+j+4]=o.x,U[Z+j+5]=o.y,U[Z+j+6]=o.z,U[Z+j+7]=0),S===!0&&(o.fromBufferAttribute(pe,fe),U[Z+j+8]=o.x,U[Z+j+9]=o.y,U[Z+j+10]=o.z,U[Z+j+11]=pe.itemSize===4?o.w:1)}}g={count:_,texture:w,size:new ft(N,C)},s.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const R=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",R),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function pE(r,e,t,s,o){let l=new WeakMap;function u(p){const v=o.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const mE={[Fg]:"LINEAR_TONE_MAPPING",[Og]:"REINHARD_TONE_MAPPING",[kg]:"CINEON_TONE_MAPPING",[zg]:"ACES_FILMIC_TONE_MAPPING",[Vg]:"AGX_TONE_MAPPING",[Hg]:"NEUTRAL_TONE_MAPPING",[Bg]:"CUSTOM_TONE_MAPPING"};function gE(r,e,t,s,o,l){const u=new er(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,depthTexture:o?new za(e,t):void 0}),f=new er(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),h=new Gn;h.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dn([0,2,0,0,2,0],2));const p=new oS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new wt(h,p),_=new zh(-1,1,1,-1,0,1);let g=null,y=null,M=!1,R,S=null,x=[],L=!1;this.setSize=function(D,A){u.setSize(D,A),f.setSize(D,A);for(let N=0;N<x.length;N++){const C=x[N];C.setSize&&C.setSize(D,A)}},this.setEffects=function(D){x=D,L=x.length>0&&x[0].isRenderPass===!0;const A=u.width,N=u.height;for(let C=0;C<x.length;C++){const U=x[C];U.setSize&&U.setSize(A,N)}},this.begin=function(D,A){if(M||D.toneMapping===Ji&&x.length===0)return!1;if(S=A,A!==null){const N=A.width,C=A.height;(u.width!==N||u.height!==C)&&this.setSize(N,C)}return L===!1&&D.setRenderTarget(u),R=D.toneMapping,D.toneMapping=Ji,!0},this.hasRenderPass=function(){return L},this.end=function(D,A){D.toneMapping=R,M=!0;let N=u,C=f;for(let U=0;U<x.length;U++){const w=x[U];if(w.enabled!==!1&&(w.render(D,C,N,A),w.needsSwap!==!1)){const P=N;N=C,C=P}}if(g!==D.outputColorSpace||y!==D.toneMapping){g=D.outputColorSpace,y=D.toneMapping,p.defines={},Et.getTransfer(g)===Bt&&(p.defines.SRGB_TRANSFER="");const U=mE[y];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(S),D.render(v,_),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),h.dispose(),p.dispose()}}const mv=new Hn,mh=new za(1,1),gv=new Qg,vv=new Fy,_v=new av,lg=[],cg=[],ug=new Float32Array(16),fg=new Float32Array(9),dg=new Float32Array(4);function Wa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=lg[o];if(l===void 0&&(l=new Float32Array(o),lg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function Sn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Mn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function tu(r,e){let t=cg[e];t===void 0&&(t=new Int32Array(e),cg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function vE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2fv(this.addr,e),Mn(t,e)}}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;r.uniform3fv(this.addr,e),Mn(t,e)}}function yE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4fv(this.addr,e),Mn(t,e)}}function SE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,s))return;dg.set(s),r.uniformMatrix2fv(this.addr,!1,dg),Mn(t,s)}}function ME(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,s))return;fg.set(s),r.uniformMatrix3fv(this.addr,!1,fg),Mn(t,s)}}function EE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,s))return;ug.set(s),r.uniformMatrix4fv(this.addr,!1,ug),Mn(t,s)}}function wE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function TE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2iv(this.addr,e),Mn(t,e)}}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3iv(this.addr,e),Mn(t,e)}}function bE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4iv(this.addr,e),Mn(t,e)}}function RE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;r.uniform2uiv(this.addr,e),Mn(t,e)}}function PE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;r.uniform3uiv(this.addr,e),Mn(t,e)}}function LE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;r.uniform4uiv(this.addr,e),Mn(t,e)}}function DE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?Lh:Ph,l=mh):l=mv,t.setTexture2D(e||l,o)}function IE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||vv,o)}function NE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||_v,o)}function UE(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||gv,o)}function FE(r){switch(r){case 5126:return vE;case 35664:return _E;case 35665:return xE;case 35666:return yE;case 35674:return SE;case 35675:return ME;case 35676:return EE;case 5124:case 35670:return wE;case 35667:case 35671:return TE;case 35668:case 35672:return AE;case 35669:case 35673:return bE;case 5125:return RE;case 36294:return CE;case 36295:return PE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return NE;case 36289:case 36303:case 36311:case 36292:return UE}}function OE(r,e){r.uniform1fv(this.addr,e)}function kE(r,e){const t=Wa(e,this.size,2);r.uniform2fv(this.addr,t)}function zE(r,e){const t=Wa(e,this.size,3);r.uniform3fv(this.addr,t)}function BE(r,e){const t=Wa(e,this.size,4);r.uniform4fv(this.addr,t)}function VE(r,e){const t=Wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function HE(r,e){const t=Wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function GE(r,e){const t=Wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function WE(r,e){r.uniform1iv(this.addr,e)}function XE(r,e){r.uniform2iv(this.addr,e)}function qE(r,e){r.uniform3iv(this.addr,e)}function YE(r,e){r.uniform4iv(this.addr,e)}function $E(r,e){r.uniform1uiv(this.addr,e)}function KE(r,e){r.uniform2uiv(this.addr,e)}function ZE(r,e){r.uniform3uiv(this.addr,e)}function jE(r,e){r.uniform4uiv(this.addr,e)}function QE(r,e,t){const s=this.cache,o=e.length,l=tu(t,o);Sn(s,l)||(r.uniform1iv(this.addr,l),Mn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=mh:u=mv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function JE(r,e,t){const s=this.cache,o=e.length,l=tu(t,o);Sn(s,l)||(r.uniform1iv(this.addr,l),Mn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||vv,l[u])}function ew(r,e,t){const s=this.cache,o=e.length,l=tu(t,o);Sn(s,l)||(r.uniform1iv(this.addr,l),Mn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||_v,l[u])}function tw(r,e,t){const s=this.cache,o=e.length,l=tu(t,o);Sn(s,l)||(r.uniform1iv(this.addr,l),Mn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||gv,l[u])}function nw(r){switch(r){case 5126:return OE;case 35664:return kE;case 35665:return zE;case 35666:return BE;case 35674:return VE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return WE;case 35667:case 35671:return XE;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return $E;case 36294:return KE;case 36295:return ZE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}class iw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=FE(t.type)}}class rw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nw(t.type)}}class sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function hg(r,e){r.seq.push(e),r.map[e.id]=e}function aw(r,e,t){const s=r.name,o=s.length;for(_d.lastIndex=0;;){const l=_d.exec(s),u=_d.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){hg(t,p===void 0?new iw(f,r,e):new rw(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new sw(f),hg(t,_)),t=_}}}class Uc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);aw(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function pg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const ow=37297;let lw=0;function cw(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const mg=new pt;function uw(r){Et._getMatrix(mg,Et.workingColorSpace,r);const e=`mat3( ${mg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(r)){case Hc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+cw(r.getShaderSource(e),f)}else return l}function fw(r,e){const t=uw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dw={[Fg]:"Linear",[Og]:"Reinhard",[kg]:"Cineon",[zg]:"ACESFilmic",[Vg]:"AgX",[Hg]:"Neutral",[Bg]:"Custom"};function hw(r,e){const t=dw[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new $;function pw(){Et.getLuminanceCoefficients(Rc);const r=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function gw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function vw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function ko(r){return r!==""}function vg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(r){return r.replace(_w,yw)}const xw=new Map;function yw(r,e){let t=gt[e];if(t===void 0){const s=xw.get(e);if(s!==void 0)t=gt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gh(t)}const Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(r){return r.replace(Sw,Mw)}function Mw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function yg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ew={[Pc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function ww(r){return Ew[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tw={[Os]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function Aw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Tw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const bw={[ka]:"ENVMAP_MODE_REFRACTION"};function Rw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":bw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[Ug]:"ENVMAP_BLENDING_MULTIPLY",[ey]:"ENVMAP_BLENDING_MIX",[ty]:"ENVMAP_BLENDING_ADD"};function Pw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[r.combine]||"ENVMAP_BLENDING_NONE"}function Lw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Dw(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=ww(t),p=Aw(t),v=Rw(t),_=Pw(t),g=Lw(t),y=mw(t),M=gw(l),R=o.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ko).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ko).join(`
`),x.length>0&&(x+=`
`)):(S=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),x=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?hw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,fw("linearToOutputTexel",t.outputColorSpace),pw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),u=gh(u),u=vg(u,t),u=_g(u,t),f=gh(f),f=vg(f,t),f=_g(f,t),u=xg(u),f=xg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=L+S+u,A=L+x+f,N=pg(o,o.VERTEX_SHADER,D),C=pg(o,o.FRAGMENT_SHADER,A);o.attachShader(R,N),o.attachShader(R,C),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function U(z){if(r.debug.checkShaderErrors){const W=o.getProgramInfoLog(R)||"",ce=o.getShaderInfoLog(N)||"",pe=o.getShaderInfoLog(C)||"",Z=W.trim(),fe=ce.trim(),j=pe.trim();let Y=!0,le=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,N,C);else{const ue=gg(o,N,"vertex"),O=gg(o,C,"fragment");Rt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+ue+`
`+O)}else Z!==""?lt("WebGLProgram: Program Info Log:",Z):(fe===""||j==="")&&(le=!1);le&&(z.diagnostics={runnable:Y,programLog:Z,vertexShader:{log:fe,prefix:S},fragmentShader:{log:j,prefix:x}})}o.deleteShader(N),o.deleteShader(C),w=new Uc(o,R),P=vw(o,R)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(R,ow)),k},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lw++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=N,this.fragmentShader=C,this}let Iw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Uw(e),t.set(e,s)),s}}class Uw{constructor(e){this.id=Iw++,this.code=e,this.usedTimes=0}}function Fw(r){return r===ks||r===zc||r===Bc}function Ow(r,e,t,s,o,l){const u=new Jg,f=new Nw,h=new Set,p=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function R(w,P,k,z,W,ce){const pe=z.fog,Z=W.geometry,fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,j=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||fe,j),le=Y&&Y.mapping===Zc?Y.image.height:null,ue=y[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=O!==void 0?O.length:0;let Fe=0;Z.morphAttributes.position!==void 0&&(Fe=1),Z.morphAttributes.normal!==void 0&&(Fe=2),Z.morphAttributes.color!==void 0&&(Fe=3);let je,Ge,se,ye;if(ue){const We=Zi[ue];je=We.vertexShader,Ge=We.fragmentShader}else{je=w.vertexShader,Ge=w.fragmentShader;const We=f.getVertexShaderStage(w),Ht=f.getFragmentShaderStage(w);f.update(w,We,Ht),se=We.id,ye=Ht.id}const ve=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),nt=W.isInstancedMesh===!0,it=W.isBatchedMesh===!0,Kt=!!w.map,mt=!!w.matcap,Dt=!!Y,Tt=!!w.aoMap,St=!!w.lightMap,Zt=!!w.bumpMap&&w.wireframe===!1,on=!!w.normalMap,ln=!!w.displacementMap,tn=!!w.emissiveMap,Ot=!!w.metalnessMap,jt=!!w.roughnessMap,X=w.anisotropy>0,Rn=w.clearcoat>0,Pt=w.dispersion>0,I=w.iridescence>0,E=w.sheen>0,K=w.transmission>0,re=X&&!!w.anisotropyMap,de=Rn&&!!w.clearcoatMap,we=Rn&&!!w.clearcoatNormalMap,Pe=Rn&&!!w.clearcoatRoughnessMap,he=I&&!!w.iridescenceMap,_e=I&&!!w.iridescenceThicknessMap,De=E&&!!w.sheenColorMap,Ke=E&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ce=!!w.specularColorMap,et=!!w.specularIntensityMap,rt=K&&!!w.transmissionMap,ot=K&&!!w.thicknessMap,V=!!w.gradientMap,Re=!!w.alphaMap,ge=w.alphaTest>0,Le=!!w.alphaHash,Ne=!!w.extensions;let xe=Ji;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xe=r.toneMapping);const qe={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:Ge,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:it,batchingColor:it&&W._colorsTexture!==null,instancing:nt,instancingColor:nt&&W.instanceColor!==null,instancingMorph:nt&&W.morphTexture!==null,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Kt,matcap:mt,envMap:Dt,envMapMode:Dt&&Y.mapping,envMapCubeUVHeight:le,aoMap:Tt,lightMap:St,bumpMap:Zt,normalMap:on,displacementMap:ln,emissiveMap:tn,normalMapObjectSpace:on&&w.normalMapType===ry,normalMapTangentSpace:on&&w.normalMapType===dh,packedNormalMap:on&&w.normalMapType===dh&&Fw(w.normalMap.format),metalnessMap:Ot,roughnessMap:jt,anisotropy:X,anisotropyMap:re,clearcoat:Rn,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:Pe,dispersion:Pt,iridescence:I,iridescenceMap:he,iridescenceThicknessMap:_e,sheen:E,sheenColorMap:De,sheenRoughnessMap:Ke,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:et,transmission:K,transmissionMap:rt,thicknessMap:ot,gradientMap:V,opaque:w.transparent===!1&&w.blending===Ia&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:ge,alphaHash:Le,combine:w.combine,mapUv:Kt&&M(w.map.channel),aoMapUv:Tt&&M(w.aoMap.channel),lightMapUv:St&&M(w.lightMap.channel),bumpMapUv:Zt&&M(w.bumpMap.channel),normalMapUv:on&&M(w.normalMap.channel),displacementMapUv:ln&&M(w.displacementMap.channel),emissiveMapUv:tn&&M(w.emissiveMap.channel),metalnessMapUv:Ot&&M(w.metalnessMap.channel),roughnessMapUv:jt&&M(w.roughnessMap.channel),anisotropyMapUv:re&&M(w.anisotropyMap.channel),clearcoatMapUv:de&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(w.sheenRoughnessMap.channel),specularMapUv:Ie&&M(w.specularMap.channel),specularColorMapUv:Ce&&M(w.specularColorMap.channel),specularIntensityMapUv:et&&M(w.specularIntensityMap.channel),transmissionMapUv:rt&&M(w.transmissionMap.channel),thicknessMapUv:ot&&M(w.thicknessMap.channel),alphaMapUv:Re&&M(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(on||X),vertexNormals:!!Z.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(Kt||Re),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Z.attributes.normal===void 0&&on===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Oe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Fe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:Kt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Bt,decodeVideoTextureEmissive:tn&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vr,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function S(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)P.push(k),P.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(x(P,w),L(P,w),P.push(r.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function x(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function L(w,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function D(w){const P=y[w.type];let k;if(P){const z=Zi[P];k=rS.clone(z.uniforms)}else k=w.uniforms;return k}function A(w,P){let k=v.get(P);return k!==void 0?++k.usedTimes:(k=new Dw(r,P,w,o),p.push(k),v.set(P,k)),k}function N(w){if(--w.usedTimes===0){const P=p.indexOf(w);p[P]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function C(w){f.remove(w)}function U(){f.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:D,acquireProgram:A,releaseProgram:N,releaseShaderCache:C,programs:p,dispose:U}}function kw(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function zw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Sg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,M,R,S,x){let L=r[e];return L===void 0?(L={id:g.id,object:g,geometry:y,material:M,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:x},r[e]=L):(L.id=g.id,L.object=g,L.geometry=y,L.material=M,L.materialVariant=u(g),L.groupOrder=R,L.renderOrder=g.renderOrder,L.z=S,L.group=x),e++,L}function h(g,y,M,R,S,x){const L=f(g,y,M,R,S,x);M.transmission>0?s.push(L):M.transparent===!0?o.push(L):t.push(L)}function p(g,y,M,R,S,x){const L=f(g,y,M,R,S,x);M.transmission>0?s.unshift(L):M.transparent===!0?o.unshift(L):t.unshift(L)}function v(g,y,M){t.length>1&&t.sort(g||zw),s.length>1&&s.sort(y||Sg),o.length>1&&o.sort(y||Sg),M&&(t.reverse(),s.reverse(),o.reverse())}function _(){for(let g=e,y=r.length;g<y;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:_,sort:v}}function Bw(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Mg,r.set(s,[u])):o>=l.length?(u=new Mg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Vw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new yt};break;case"SpotLight":t={position:new $,direction:new $,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function Hw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gw=0;function Ww(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Xw(r){const e=new Vw,t=Hw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const o=new $,l=new en,u=new en;function f(p){let v=0,_=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let y=0,M=0,R=0,S=0,x=0,L=0,D=0,A=0,N=0,C=0,U=0;p.sort(Ww);for(let P=0,k=p.length;P<k;P++){const z=p[P],W=z.color,ce=z.intensity,pe=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ks?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=W.r*ce,_+=W.g*ce,g+=W.b*ce;else if(z.isLightProbe){for(let fe=0;fe<9;fe++)s.probe[fe].addScaledVector(z.sh.coefficients[fe],ce);U++}else if(z.isDirectionalLight){const fe=e.get(z);if(fe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,Y=t.get(z);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=z.shadow.matrix,L++}s.directional[y]=fe,y++}else if(z.isSpotLight){const fe=e.get(z);fe.position.setFromMatrixPosition(z.matrixWorld),fe.color.copy(W).multiplyScalar(ce),fe.distance=pe,fe.coneCos=Math.cos(z.angle),fe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),fe.decay=z.decay,s.spot[R]=fe;const j=z.shadow;if(z.map&&(s.spotLightMap[N]=z.map,N++,j.updateMatrices(z),z.castShadow&&C++),s.spotLightMatrix[R]=j.matrix,z.castShadow){const Y=t.get(z);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=Z,A++}R++}else if(z.isRectAreaLight){const fe=e.get(z);fe.color.copy(W).multiplyScalar(ce),fe.halfWidth.set(z.width*.5,0,0),fe.halfHeight.set(0,z.height*.5,0),s.rectArea[S]=fe,S++}else if(z.isPointLight){const fe=e.get(z);if(fe.color.copy(z.color).multiplyScalar(z.intensity),fe.distance=z.distance,fe.decay=z.decay,z.castShadow){const j=z.shadow,Y=t.get(z);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[M]=Y,s.pointShadowMap[M]=Z,s.pointShadowMatrix[M]=z.shadow.matrix,D++}s.point[M]=fe,M++}else if(z.isHemisphereLight){const fe=e.get(z);fe.skyColor.copy(z.color).multiplyScalar(ce),fe.groundColor.copy(z.groundColor).multiplyScalar(ce),s.hemi[x]=fe,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==y||w.pointLength!==M||w.spotLength!==R||w.rectAreaLength!==S||w.hemiLength!==x||w.numDirectionalShadows!==L||w.numPointShadows!==D||w.numSpotShadows!==A||w.numSpotMaps!==N||w.numLightProbes!==U)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=S,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=A+N-C,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=U,w.directionalLength=y,w.pointLength=M,w.spotLength=R,w.rectAreaLength=S,w.hemiLength=x,w.numDirectionalShadows=L,w.numPointShadows=D,w.numSpotShadows=A,w.numSpotMaps=N,w.numLightProbes=U,s.version=Gw++)}function h(p,v){let _=0,g=0,y=0,M=0,R=0;const S=v.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const D=p[x];if(D.isDirectionalLight){const A=s.directional[_];A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(D.isSpotLight){const A=s.spot[y];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const A=s.rectArea[M];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const A=s.point[g];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const A=s.hemi[R];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(S),R++}}}return{setup:f,setupView:h,state:s}}function Eg(r){const e=new Xw(r),t=[],s=[],o=[];function l(g){_.camera=g,t.length=0,s.length=0,o.length=0}function u(g){t.push(g)}function f(g){s.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function qw(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Eg(r),e.set(o,[f])):l>=u.length?(f=new Eg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kw=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Zw=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],wg=new en,Fo=new $,xd=new $;function jw(r,e,t){let s=new Fh;const o=new ft,l=new ft,u=new an,f=new lS,h=new cS,p={},v=t.maxTextureSize,_={[ts]:ii,[ii]:ts,[vr]:vr},g=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Yw,fragmentShader:$w}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new Gn;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new wt(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let x=this.type;this.render=function(C,U,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===Ng&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const P=r.getRenderTarget(),k=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),W=r.state;W.setBlending(yr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ce=x!==this.type;ce&&U.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(Z=>Z.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,Z=C.length;pe<Z;pe++){const fe=C[pe],j=fe.shadow;if(j===void 0){lt("WebGLShadowMap:",fe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const Y=j.getFrameExtents();o.multiply(Y),l.copy(j.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Y.x),o.x=l.x*Y.x,j.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Y.y),o.y=l.y*Y.y,j.mapSize.y=l.y));const le=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=le,j.map===null||ce===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Oo){if(fe.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new er(o.x,o.y,{format:ks,type:Er,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),j.map.texture.name=fe.name+".shadowMap",j.map.depthTexture=new za(o.x,o.y,ji),j.map.depthTexture.name=fe.name+".shadowMapDepth",j.map.depthTexture.format=wr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Dn,j.map.depthTexture.magFilter=Dn}else fe.isPointLight?(j.map=new pv(o.x),j.map.depthTexture=new nS(o.x,tr)):(j.map=new er(o.x,o.y),j.map.depthTexture=new za(o.x,o.y,tr)),j.map.depthTexture.name=fe.name+".shadowMap",j.map.depthTexture.format=wr,this.type===Pc?(j.map.depthTexture.compareFunction=le?Lh:Ph,j.map.depthTexture.minFilter=Vn,j.map.depthTexture.magFilter=Vn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Dn,j.map.depthTexture.magFilter=Dn);j.camera.updateProjectionMatrix()}const ue=j.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ue;O++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,O),r.clear();else{O===0&&(r.setRenderTarget(j.map),r.clear());const Q=j.getViewport(O);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),W.viewport(u)}if(fe.isPointLight){const Q=j.camera,Fe=j.matrix,je=fe.distance||Q.far;je!==Q.far&&(Q.far=je,Q.updateProjectionMatrix()),Fo.setFromMatrixPosition(fe.matrixWorld),Q.position.copy(Fo),xd.copy(Q.position),xd.add(Kw[O]),Q.up.copy(Zw[O]),Q.lookAt(xd),Q.updateMatrixWorld(),Fe.makeTranslation(-Fo.x,-Fo.y,-Fo.z),wg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(wg,Q.coordinateSystem,Q.reversedDepth)}else j.updateMatrices(fe);s=j.getFrustum(),A(U,w,j.camera,fe,this.type)}j.isPointLightShadow!==!0&&this.type===Oo&&L(j,w),j.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(P,k,z)};function L(C,U){const w=e.update(R);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,y.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new er(o.x,o.y,{format:ks,type:Er})),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(U,null,w,g,R,null),y.uniforms.shadow_pass.value=C.mapPass.texture,y.uniforms.resolution.value=C.mapSize,y.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(U,null,w,y,R,null)}function D(C,U,w,P){let k=null;const z=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)k=z;else if(k=w.isPointLight===!0?h:f,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=k.uuid,ce=U.uuid;let pe=p[W];pe===void 0&&(pe={},p[W]=pe);let Z=pe[ce];Z===void 0&&(Z=k.clone(),pe[ce]=Z,U.addEventListener("dispose",N)),k=Z}if(k.visible=U.visible,k.wireframe=U.wireframe,P===Oo?k.side=U.shadowSide!==null?U.shadowSide:U.side:k.side=U.shadowSide!==null?U.shadowSide:_[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=r.properties.get(k);W.light=w}return k}function A(C,U,w,P,k){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===Oo)&&(!C.frustumCulled||s.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const ce=e.update(C),pe=C.material;if(Array.isArray(pe)){const Z=ce.groups;for(let fe=0,j=Z.length;fe<j;fe++){const Y=Z[fe],le=pe[Y.materialIndex];if(le&&le.visible){const ue=D(C,le,P,k);C.onBeforeShadow(r,C,U,w,ce,ue,Y),r.renderBufferDirect(w,null,ce,ue,C,Y),C.onAfterShadow(r,C,U,w,ce,ue,Y)}}}else if(pe.visible){const Z=D(C,pe,P,k);C.onBeforeShadow(r,C,U,w,ce,Z,null),r.renderBufferDirect(w,null,ce,Z,C,null),C.onAfterShadow(r,C,U,w,ce,Z,null)}}const W=C.children;for(let ce=0,pe=W.length;ce<pe;ce++)A(W[ce],U,w,P,k)}function N(C){C.target.removeEventListener("dispose",N);for(const w in p){const P=p[w],k=C.target.uuid;k in P&&(P[k].dispose(),delete P[k])}}}function Qw(r,e){function t(){let V=!1;const Re=new an;let ge=null;const Le=new an(0,0,0,0);return{setMask:function(Ne){ge!==Ne&&!V&&(r.colorMask(Ne,Ne,Ne,Ne),ge=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,xe,qe,We,Ht){Ht===!0&&(Ne*=We,xe*=We,qe*=We),Re.set(Ne,xe,qe,We),Le.equals(Re)===!1&&(r.clearColor(Ne,xe,qe,We),Le.copy(Re))},reset:function(){V=!1,ge=null,Le.set(-1,0,0,0)}}}function s(){let V=!1,Re=!1,ge=null,Le=null,Ne=null;return{setReversed:function(xe){if(Re!==xe){const qe=e.get("EXT_clip_control");xe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return Re},setTest:function(xe){xe?ve(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!V&&(r.depthMask(xe),ge=xe)},setFunc:function(xe){if(Re&&(xe=py[xe]),Le!==xe){switch(xe){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case Pd:r.depthFunc(r.LESS);break;case Oa:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Dd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case Nd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Ne!==xe&&(Ne=xe,Re&&(xe=1-xe),r.clearDepth(xe))},reset:function(){V=!1,ge=null,Le=null,Ne=null,Re=!1}}}function o(){let V=!1,Re=null,ge=null,Le=null,Ne=null,xe=null,qe=null,We=null,Ht=null;return{setTest:function(Ut){V||(Ut?ve(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(Ut){Re!==Ut&&!V&&(r.stencilMask(Ut),Re=Ut)},setFunc:function(Ut,In,di){(ge!==Ut||Le!==In||Ne!==di)&&(r.stencilFunc(Ut,In,di),ge=Ut,Le=In,Ne=di)},setOp:function(Ut,In,di){(xe!==Ut||qe!==In||We!==di)&&(r.stencilOp(Ut,In,di),xe=Ut,qe=In,We=di)},setLocked:function(Ut){V=Ut},setClear:function(Ut){Ht!==Ut&&(r.clearStencil(Ut),Ht=Ut)},reset:function(){V=!1,Re=null,ge=null,Le=null,Ne=null,xe=null,qe=null,We=null,Ht=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let v={},_={},g={},y=new WeakMap,M=[],R=null,S=!1,x=null,L=null,D=null,A=null,N=null,C=null,U=null,w=new yt(0,0,0),P=0,k=!1,z=null,W=null,ce=null,pe=null,Z=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const le=r.getParameter(r.VERSION);le.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=Y>=1):le.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=Y>=2);let ue=null,O={};const Q=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),je=new an().fromArray(Q),Ge=new an().fromArray(Fe);function se(V,Re,ge,Le){const Ne=new Uint8Array(4),xe=r.createTexture();r.bindTexture(V,xe),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<ge;qe++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Re+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return xe}const ye={};ye[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),u.setFunc(Oa),Zt(!1),on(E0),ve(r.CULL_FACE),Tt(yr);function ve(V){v[V]!==!0&&(r.enable(V),v[V]=!0)}function Oe(V){v[V]!==!1&&(r.disable(V),v[V]=!1)}function nt(V,Re){return g[V]!==Re?(r.bindFramebuffer(V,Re),g[V]=Re,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function it(V,Re){let ge=M,Le=!1;if(V){ge=y.get(Re),ge===void 0&&(ge=[],y.set(Re,ge));const Ne=V.textures;if(ge.length!==Ne.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,qe=Ne.length;xe<qe;xe++)ge[xe]=r.COLOR_ATTACHMENT0+xe;ge.length=Ne.length,Le=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,Le=!0);Le&&r.drawBuffers(ge)}function Kt(V){return R!==V?(r.useProgram(V),R=V,!0):!1}const mt={[Cs]:r.FUNC_ADD,[Ox]:r.FUNC_SUBTRACT,[kx]:r.FUNC_REVERSE_SUBTRACT};mt[zx]=r.MIN,mt[Bx]=r.MAX;const Dt={[Vx]:r.ZERO,[Hx]:r.ONE,[Gx]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[Kx]:r.SRC_ALPHA_SATURATE,[Yx]:r.DST_COLOR,[Xx]:r.DST_ALPHA,[Wx]:r.ONE_MINUS_SRC_COLOR,[bd]:r.ONE_MINUS_SRC_ALPHA,[$x]:r.ONE_MINUS_DST_COLOR,[qx]:r.ONE_MINUS_DST_ALPHA,[Zx]:r.CONSTANT_COLOR,[jx]:r.ONE_MINUS_CONSTANT_COLOR,[Qx]:r.CONSTANT_ALPHA,[Jx]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(V,Re,ge,Le,Ne,xe,qe,We,Ht,Ut){if(V===yr){S===!0&&(Oe(r.BLEND),S=!1);return}if(S===!1&&(ve(r.BLEND),S=!0),V!==Fx){if(V!==x||Ut!==k){if((L!==Cs||N!==Cs)&&(r.blendEquation(r.FUNC_ADD),L=Cs,N=Cs),Ut)switch(V){case Ia:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ns:r.blendFunc(r.ONE,r.ONE);break;case w0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case T0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case w0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",V);break}D=null,A=null,C=null,U=null,w.set(0,0,0),P=0,x=V,k=Ut}return}Ne=Ne||Re,xe=xe||ge,qe=qe||Le,(Re!==L||Ne!==N)&&(r.blendEquationSeparate(mt[Re],mt[Ne]),L=Re,N=Ne),(ge!==D||Le!==A||xe!==C||qe!==U)&&(r.blendFuncSeparate(Dt[ge],Dt[Le],Dt[xe],Dt[qe]),D=ge,A=Le,C=xe,U=qe),(We.equals(w)===!1||Ht!==P)&&(r.blendColor(We.r,We.g,We.b,Ht),w.copy(We),P=Ht),x=V,k=!1}function St(V,Re){V.side===vr?Oe(r.CULL_FACE):ve(r.CULL_FACE);let ge=V.side===ii;Re&&(ge=!ge),Zt(ge),V.blending===Ia&&V.transparent===!1?Tt(yr):Tt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Le=V.stencilWrite;f.setTest(Le),Le&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(V){z!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),z=V)}function on(V){V!==Nx?(ve(r.CULL_FACE),V!==W&&(V===E0?r.cullFace(r.BACK):V===Ux?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),W=V}function ln(V){V!==ce&&(j&&r.lineWidth(V),ce=V)}function tn(V,Re,ge){V?(ve(r.POLYGON_OFFSET_FILL),(pe!==Re||Z!==ge)&&(pe=Re,Z=ge,u.getReversed()&&(Re=-Re),r.polygonOffset(Re,ge))):Oe(r.POLYGON_OFFSET_FILL)}function Ot(V){V?ve(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function jt(V){V===void 0&&(V=r.TEXTURE0+fe-1),ue!==V&&(r.activeTexture(V),ue=V)}function X(V,Re,ge){ge===void 0&&(ue===null?ge=r.TEXTURE0+fe-1:ge=ue);let Le=O[ge];Le===void 0&&(Le={type:void 0,texture:void 0},O[ge]=Le),(Le.type!==V||Le.texture!==Re)&&(ue!==ge&&(r.activeTexture(ge),ue=ge),r.bindTexture(V,Re||ye[V]),Le.type=V,Le.texture=Re)}function Rn(){const V=O[ue];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Pt(){try{r.compressedTexImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function E(){try{r.texSubImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function K(){try{r.texSubImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function we(){try{r.texStorage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function Pe(){try{r.texStorage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function he(){try{r.texImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function _e(){try{r.texImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function De(V){return _[V]!==void 0?_[V]:r.getParameter(V)}function Ke(V,Re){_[V]!==Re&&(r.pixelStorei(V,Re),_[V]=Re)}function Ie(V){je.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),je.copy(V))}function Ce(V){Ge.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ge.copy(V))}function et(V,Re){let ge=p.get(Re);ge===void 0&&(ge=new WeakMap,p.set(Re,ge));let Le=ge.get(V);Le===void 0&&(Le=r.getUniformBlockIndex(Re,V.name),ge.set(V,Le))}function rt(V,Re){const Le=p.get(Re).get(V);h.get(Re)!==Le&&(r.uniformBlockBinding(Re,Le,V.__bindingPointIndex),h.set(Re,Le))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},ue=null,O={},g={},y=new WeakMap,M=[],R=null,S=!1,x=null,L=null,D=null,A=null,N=null,C=null,U=null,w=new yt(0,0,0),P=0,k=!1,z=null,W=null,ce=null,pe=null,Z=null,je.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Oe,bindFramebuffer:nt,drawBuffers:it,useProgram:Kt,setBlending:Tt,setMaterial:St,setFlipSided:Zt,setCullFace:on,setLineWidth:ln,setPolygonOffset:tn,setScissorTest:Ot,activeTexture:jt,bindTexture:X,unbindTexture:Rn,compressedTexImage2D:Pt,compressedTexImage3D:I,texImage2D:he,texImage3D:_e,pixelStorei:Ke,getParameter:De,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:we,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Ie,viewport:Ce,reset:ot}}function Jw(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ft,v=new WeakMap,_=new Set;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,E){return M?new OffscreenCanvas(I,E):Gc("canvas")}function S(I,E,K){let re=1;const de=Pt(I);if((de.width>K||de.height>K)&&(re=K/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const we=Math.floor(re*de.width),Pe=Math.floor(re*de.height);g===void 0&&(g=R(we,Pe));const he=E?R(we,Pe):g;return he.width=we,he.height=Pe,he.getContext("2d").drawImage(I,0,0,we,Pe),lt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+Pe+")."),he}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function x(I){return I.generateMipmaps}function L(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(I,E,K,re,de,we=!1){if(I!==null){if(r[I]!==void 0)return r[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;re&&(Pe=e.get("EXT_texture_norm16"),Pe||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===r.RED&&(K===r.FLOAT&&(he=r.R32F),K===r.HALF_FLOAT&&(he=r.R16F),K===r.UNSIGNED_BYTE&&(he=r.R8),K===r.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),K===r.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(he=r.R8UI),K===r.UNSIGNED_SHORT&&(he=r.R16UI),K===r.UNSIGNED_INT&&(he=r.R32UI),K===r.BYTE&&(he=r.R8I),K===r.SHORT&&(he=r.R16I),K===r.INT&&(he=r.R32I)),E===r.RG&&(K===r.FLOAT&&(he=r.RG32F),K===r.HALF_FLOAT&&(he=r.RG16F),K===r.UNSIGNED_BYTE&&(he=r.RG8),K===r.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),K===r.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(he=r.RG8UI),K===r.UNSIGNED_SHORT&&(he=r.RG16UI),K===r.UNSIGNED_INT&&(he=r.RG32UI),K===r.BYTE&&(he=r.RG8I),K===r.SHORT&&(he=r.RG16I),K===r.INT&&(he=r.RG32I)),E===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(he=r.RGB8UI),K===r.UNSIGNED_SHORT&&(he=r.RGB16UI),K===r.UNSIGNED_INT&&(he=r.RGB32UI),K===r.BYTE&&(he=r.RGB8I),K===r.SHORT&&(he=r.RGB16I),K===r.INT&&(he=r.RGB32I)),E===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),K===r.UNSIGNED_INT&&(he=r.RGBA32UI),K===r.BYTE&&(he=r.RGBA8I),K===r.SHORT&&(he=r.RGBA16I),K===r.INT&&(he=r.RGBA32I)),E===r.RGB&&(K===r.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),K===r.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),E===r.RGBA){const _e=we?Hc:Et.getTransfer(de);K===r.FLOAT&&(he=r.RGBA32F),K===r.HALF_FLOAT&&(he=r.RGBA16F),K===r.UNSIGNED_BYTE&&(he=_e===Bt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),K===r.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function N(I,E){let K;return I?E===null||E===tr||E===Xo?K=r.DEPTH24_STENCIL8:E===ji?K=r.DEPTH32F_STENCIL8:E===Wo&&(K=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===tr||E===Xo?K=r.DEPTH_COMPONENT24:E===ji?K=r.DEPTH_COMPONENT32F:E===Wo&&(K=r.DEPTH_COMPONENT16),K}function C(I,E){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function U(I){const E=I.target;E.removeEventListener("dispose",U),P(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function w(I){const E=I.target;E.removeEventListener("dispose",w),z(E)}function P(I){const E=s.get(I);if(E.__webglInit===void 0)return;const K=I.source,re=y.get(K);if(re){const de=re[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&k(I),Object.keys(re).length===0&&y.delete(K)}s.remove(I)}function k(I){const E=s.get(I);r.deleteTexture(E.__webglTexture);const K=I.source,re=y.get(K);delete re[E.__cacheKey],u.memory.textures--}function z(I){const E=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let de=0;de<E.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(E.__webglFramebuffer[re][de]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=I.textures;for(let re=0,de=K.length;re<de;re++){const we=s.get(K[re]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),u.memory.textures--),s.remove(K[re])}s.remove(I)}let W=0;function ce(){W=0}function pe(){return W}function Z(I){W=I}function fe(){const I=W;return I>=o.maxTextures&&lt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),W+=1,I}function j(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Y(I,E){const K=s.get(I);if(I.isVideoTexture&&X(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){const re=I.image;if(re===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(K,I,E);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function le(I,E){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Oe(K,I,E);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function ue(I,E){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Oe(K,I,E);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function O(I,E){const K=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){nt(K,I,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const Q={[kc]:r.REPEAT,[xr]:r.CLAMP_TO_EDGE,[Ud]:r.MIRRORED_REPEAT},Fe={[Dn]:r.NEAREST,[ny]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Gf]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},je={[sy]:r.NEVER,[uy]:r.ALWAYS,[ay]:r.LESS,[Ph]:r.LEQUAL,[oy]:r.EQUAL,[Lh]:r.GEQUAL,[ly]:r.GREATER,[cy]:r.NOTEQUAL};function Ge(I,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Gf||E.magFilter===nc||E.magFilter===Ls||E.minFilter===Vn||E.minFilter===Gf||E.minFilter===nc||E.minFilter===Ls)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Q[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Fe[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Fe[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==nc&&E.minFilter!==Ls||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function se(I,E){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",U));const re=E.source;let de=y.get(re);de===void 0&&(de={},y.set(re,de));const we=j(E);if(we!==I.__cacheKey){de[we]===void 0&&(de[we]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),de[we].usedTimes++;const Pe=de[I.__cacheKey];Pe!==void 0&&(de[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&k(E)),I.__cacheKey=we,I.__webglTexture=de[we].texture}return K}function ye(I,E,K){return Math.floor(Math.floor(I/K)/E)}function ve(I,E,K,re){const we=I.updateRanges;if(we.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,K,re,E.data);else{we.sort((Ke,Ie)=>Ke.start-Ie.start);let Pe=0;for(let Ke=1;Ke<we.length;Ke++){const Ie=we[Pe],Ce=we[Ke],et=Ie.start+Ie.count,rt=ye(Ce.start,E.width,4),ot=ye(Ie.start,E.width,4);Ce.start<=et+1&&rt===ot&&ye(Ce.start+Ce.count-1,E.width,4)===rt?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++Pe,we[Pe]=Ce)}we.length=Pe+1;const he=t.getParameter(r.UNPACK_ROW_LENGTH),_e=t.getParameter(r.UNPACK_SKIP_PIXELS),De=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ke=0,Ie=we.length;Ke<Ie;Ke++){const Ce=we[Ke],et=Math.floor(Ce.start/4),rt=Math.ceil(Ce.count/4),ot=et%E.width,V=Math.floor(et/E.width),Re=rt,ge=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,ot,V,Re,ge,K,re,E.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,he),t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Oe(I,E,K){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const de=se(I,E),we=E.source;t.bindTexture(re,I.__webglTexture,r.TEXTURE0+K);const Pe=s.get(we);if(we.version!==Pe.__version||de===!0){if(t.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Et.getPrimaries(Et.workingColorSpace),Le=E.colorSpace===jr?null:Et.getPrimaries(E.colorSpace),Ne=E.colorSpace===jr||ge===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=S(E.image,!1,o.maxTextureSize);_e=Rn(E,_e);const De=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let Ie=A(E.internalFormat,De,Ke,E.normalized,E.colorSpace,E.isVideoTexture);Ge(re,E);let Ce;const et=E.mipmaps,rt=E.isVideoTexture!==!0,ot=Pe.__version===void 0||de===!0,V=we.dataReady,Re=C(E,_e);if(E.isDepthTexture)Ie=N(E.format===Ds,E.type),ot&&(rt?t.texStorage2D(r.TEXTURE_2D,1,Ie,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Ie,_e.width,_e.height,0,De,Ke,null));else if(E.isDataTexture)if(et.length>0){rt&&ot&&t.texStorage2D(r.TEXTURE_2D,Re,Ie,et[0].width,et[0].height);for(let ge=0,Le=et.length;ge<Le;ge++)Ce=et[ge],rt?V&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ke,Ce.data):t.texImage2D(r.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,De,Ke,Ce.data);E.generateMipmaps=!1}else rt?(ot&&t.texStorage2D(r.TEXTURE_2D,Re,Ie,_e.width,_e.height),V&&ve(E,_e,De,Ke)):t.texImage2D(r.TEXTURE_2D,0,Ie,_e.width,_e.height,0,De,Ke,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ie,et[0].width,et[0].height,_e.depth);for(let ge=0,Le=et.length;ge<Le;ge++)if(Ce=et[ge],E.format!==Vi)if(De!==null)if(rt){if(V)if(E.layerUpdates.size>0){const Ne=tg(Ce.width,Ce.height,E.format,E.type);for(const xe of E.layerUpdates){const qe=Ce.data.subarray(xe*Ne/Ce.data.BYTES_PER_ELEMENT,(xe+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,xe,Ce.width,Ce.height,1,De,qe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,_e.depth,De,Ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Ie,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,_e.depth,De,Ke,Ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,Ie,Ce.width,Ce.height,_e.depth,0,De,Ke,Ce.data)}else{rt&&ot&&t.texStorage2D(r.TEXTURE_2D,Re,Ie,et[0].width,et[0].height);for(let ge=0,Le=et.length;ge<Le;ge++)Ce=et[ge],E.format!==Vi?De!==null?rt?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Ce.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,De,Ke,Ce.data):t.texImage2D(r.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,De,Ke,Ce.data)}else if(E.isDataArrayTexture)if(rt){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ie,_e.width,_e.height,_e.depth),V)if(E.layerUpdates.size>0){const ge=tg(_e.width,_e.height,E.format,E.type);for(const Le of E.layerUpdates){const Ne=_e.data.subarray(Le*ge/_e.data.BYTES_PER_ELEMENT,(Le+1)*ge/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,_e.width,_e.height,1,De,Ke,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,Ke,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,_e.width,_e.height,_e.depth,0,De,Ke,_e.data);else if(E.isData3DTexture)rt?(ot&&t.texStorage3D(r.TEXTURE_3D,Re,Ie,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,Ke,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,_e.width,_e.height,_e.depth,0,De,Ke,_e.data);else if(E.isFramebufferTexture){if(ot)if(rt)t.texStorage2D(r.TEXTURE_2D,Re,Ie,_e.width,_e.height);else{let ge=_e.width,Le=_e.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,Ie,ge,Le,0,De,Ke,null),ge>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),_e.parentNode!==ge){ge.appendChild(_e),_.add(E),ge.onpaint=Le=>{const Ne=Le.changedElements;for(const xe of _)Ne.includes(xe.image)&&(xe.needsUpdate=!0)},ge.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,_e);else{const Ne=r.RGBA,xe=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ne,xe,qe,_e)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(et.length>0){if(rt&&ot){const ge=Pt(et[0]);t.texStorage2D(r.TEXTURE_2D,Re,Ie,ge.width,ge.height)}for(let ge=0,Le=et.length;ge<Le;ge++)Ce=et[ge],rt?V&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,De,Ke,Ce):t.texImage2D(r.TEXTURE_2D,ge,Ie,De,Ke,Ce);E.generateMipmaps=!1}else if(rt){if(ot){const ge=Pt(_e);t.texStorage2D(r.TEXTURE_2D,Re,Ie,ge.width,ge.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Ke,_e)}else t.texImage2D(r.TEXTURE_2D,0,Ie,De,Ke,_e);x(E)&&L(re),Pe.__version=we.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function nt(I,E,K){if(E.image.length!==6)return;const re=se(I,E),de=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+K);const we=s.get(de);if(de.version!==we.__version||re===!0){t.activeTexture(r.TEXTURE0+K);const Pe=Et.getPrimaries(Et.workingColorSpace),he=E.colorSpace===jr?null:Et.getPrimaries(E.colorSpace),_e=E.colorSpace===jr||Pe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Ke=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!De&&!Ke?Ie[xe]=S(E.image[xe],!0,o.maxCubemapSize):Ie[xe]=Ke?E.image[xe].image:E.image[xe],Ie[xe]=Rn(E,Ie[xe]);const Ce=Ie[0],et=l.convert(E.format,E.colorSpace),rt=l.convert(E.type),ot=A(E.internalFormat,et,rt,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Re=we.__version===void 0||re===!0,ge=de.dataReady;let Le=C(E,Ce);Ge(r.TEXTURE_CUBE_MAP,E);let Ne;if(De){V&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ot,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Ne=Ie[xe].mipmaps;for(let qe=0;qe<Ne.length;qe++){const We=Ne[qe];E.format!==Vi?et!==null?V?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,We.width,We.height,et,We.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,ot,We.width,We.height,0,We.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,0,0,We.width,We.height,et,rt,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe,ot,We.width,We.height,0,et,rt,We.data)}}}else{if(Ne=E.mipmaps,V&&Re){Ne.length>0&&Le++;const xe=Pt(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ot,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ke){V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,et,rt,Ie[xe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,Ie[xe].width,Ie[xe].height,0,et,rt,Ie[xe].data);for(let qe=0;qe<Ne.length;qe++){const Ht=Ne[qe].image[xe].image;V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,Ht.width,Ht.height,et,rt,Ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,ot,Ht.width,Ht.height,0,et,rt,Ht.data)}}else{V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,et,rt,Ie[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,et,rt,Ie[xe]);for(let qe=0;qe<Ne.length;qe++){const We=Ne[qe];V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,0,0,et,rt,We.image[xe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,qe+1,ot,et,rt,We.image[xe])}}}x(E)&&L(r.TEXTURE_CUBE_MAP),we.__version=de.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function it(I,E,K,re,de,we){const Pe=l.convert(K.format,K.colorSpace),he=l.convert(K.type),_e=A(K.internalFormat,Pe,he,K.normalized,K.colorSpace),De=s.get(E),Ke=s.get(K);if(Ke.__renderTarget=E,!De.__hasExternalTextures){const Ie=Math.max(1,E.width>>we),Ce=Math.max(1,E.height>>we);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,we,_e,Ie,Ce,E.depth,0,Pe,he,null):t.texImage2D(de,we,_e,Ie,Ce,0,Pe,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),jt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,Ke.__webglTexture,0,Ot(E)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,Ke.__webglTexture,we),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(I,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const re=E.depthTexture,de=re&&re.isDepthTexture?re.type:null,we=N(E.stencilBuffer,de),Pe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;jt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(E),we,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(E),we,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,we,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,I)}else{const re=E.textures;for(let de=0;de<re.length;de++){const we=re[de],Pe=l.convert(we.format,we.colorSpace),he=l.convert(we.type),_e=A(we.internalFormat,Pe,he,we.normalized,we.colorSpace);jt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(E),_e,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(E),_e,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_e,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(I,E,K){const re=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,E.depthTexture);const De=l.convert(E.depthTexture.format),Ke=l.convert(E.depthTexture.type);let Ie;E.depthTexture.format===wr?Ie=r.DEPTH_COMPONENT24:E.depthTexture.format===Ds&&(Ie=r.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,E.width,E.height,0,De,Ke,null)}}else Y(E.depthTexture,0);const we=de.__webglTexture,Pe=Ot(E),he=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,_e=E.depthTexture.format===Ds?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===wr)jt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,he,we,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,_e,he,we,0);else if(E.depthTexture.format===Ds)jt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,he,we,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,_e,he,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(I){const E=s.get(I),K=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=re}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)mt(E.__webglFramebuffer[re],I,re);else{const re=I.texture.mipmaps;re&&re.length>0?mt(E.__webglFramebuffer[0],I,0):mt(E.__webglFramebuffer,I,0)}else if(K){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),Kt(E.__webglDepthbuffer[re],I,!1);else{const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,we)}}else{const re=I.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Kt(E.__webglDepthbuffer,I,!1);else{const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,we)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(I,E,K){const re=s.get(I);E!==void 0&&it(re.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Dt(I)}function St(I){const E=I.texture,K=s.get(I),re=s.get(E);I.addEventListener("dispose",w);const de=I.textures,we=I.isWebGLCubeRenderTarget===!0,Pe=de.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,u.memory.textures++),we){K.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[he]=[];for(let _e=0;_e<E.mipmaps.length;_e++)K.__webglFramebuffer[he][_e]=r.createFramebuffer()}else K.__webglFramebuffer[he]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)K.__webglFramebuffer[he]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let he=0,_e=de.length;he<_e;he++){const De=s.get(de[he]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),u.memory.textures++)}if(I.samples>0&&jt(I)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const _e=de[he];K.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[he]);const De=l.convert(_e.format,_e.colorSpace),Ke=l.convert(_e.type),Ie=A(_e.internalFormat,De,Ke,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),Ce=Ot(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,Ie,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,K.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Kt(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)it(K.__webglFramebuffer[he][_e],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else it(K.__webglFramebuffer[he],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(E)&&L(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,_e=de.length;he<_e;he++){const De=de[he],Ke=s.get(De);let Ie=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ke.__webglTexture),Ge(Ie,De),it(K.__webglFramebuffer,I,De,r.COLOR_ATTACHMENT0+he,Ie,0),x(De)&&L(Ie)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),Ge(he,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)it(K.__webglFramebuffer[_e],I,E,r.COLOR_ATTACHMENT0,he,_e);else it(K.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,he,0);x(E)&&L(he),t.unbindTexture()}I.depthBuffer&&Dt(I)}function Zt(I){const E=I.textures;for(let K=0,re=E.length;K<re;K++){const de=E[K];if(x(de)){const we=D(I),Pe=s.get(de).__webglTexture;t.bindTexture(we,Pe),L(we),t.unbindTexture()}}}const on=[],ln=[];function tn(I){if(I.samples>0){if(jt(I)===!1){const E=I.textures,K=I.width,re=I.height;let de=r.COLOR_BUFFER_BIT;const we=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(I),he=E.length>1;if(he)for(let De=0;De<E.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const _e=I.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<E.length;De++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const Ke=s.get(E[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,K,re,0,0,K,re,de,r.NEAREST),h===!0&&(on.length=0,ln.length=0,on.push(r.COLOR_ATTACHMENT0+De),I.depthBuffer&&I.resolveDepthBuffer===!1&&(on.push(we),ln.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ln)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,on))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<E.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const Ke=s.get(E[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ot(I){return Math.min(o.maxSamples,I.samples)}function jt(I){const E=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(I){const E=u.render.frame;v.get(I)!==E&&(v.set(I,E),I.update())}function Rn(I,E){const K=I.colorSpace,re=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Vc&&K!==jr&&(Et.getTransfer(K)===Bt?(re!==Vi||de!==fi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",K)),E}function Pt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=ce,this.getTextureUnits=pe,this.setTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=O,this.rebindTextures=Tt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eT(r,e){function t(s,o=jr){let l;const u=Et.getTransfer(o);if(s===fi)return r.UNSIGNED_BYTE;if(s===Th)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ah)return r.UNSIGNED_SHORT_5_5_5_1;if(s===qg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Yg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Wg)return r.BYTE;if(s===Xg)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===wh)return r.INT;if(s===tr)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Er)return r.HALF_FLOAT;if(s===$g)return r.ALPHA;if(s===Kg)return r.RGB;if(s===Vi)return r.RGBA;if(s===wr)return r.DEPTH_COMPONENT;if(s===Ds)return r.DEPTH_STENCIL;if(s===Zg)return r.RED;if(s===bh)return r.RED_INTEGER;if(s===ks)return r.RG;if(s===Rh)return r.RG_INTEGER;if(s===Ch)return r.RGBA_INTEGER;if(s===Lc||s===Dc||s===Ic||s===Nc)if(u===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Lc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Lc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fd||s===Od||s===kd||s===zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Fd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bd||s===Vd||s===Hd||s===Gd||s===Wd||s===zc||s===Xd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Bd||s===Vd)return u===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Hd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Gd)return l.COMPRESSED_R11_EAC;if(s===Wd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===zc)return l.COMPRESSED_RG11_EAC;if(s===Xd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qd||s===Yd||s===$d||s===Kd||s===Zd||s===jd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===qd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$d)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eh)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===th)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nh)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ih)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sh)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ah||s===oh||s===lh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ah)return u===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===oh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ch||s===uh||s===Bc||s===fh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ch)return l.COMPRESSED_RED_RGTC1_EXT;if(s===uh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const tT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new lv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new nr({vertexShader:tT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new rs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rT extends Vs{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,_=null,g=null,y=null,M=null;const R=typeof XRWebGLBinding<"u",S=new iT,x={},L=t.getContextAttributes();let D=null,A=null;const N=[],C=[],U=new ft;let w=null;const P=new yi;P.viewport=new an;const k=new yi;k.viewport=new an;const z=[P,k],W=new pS;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=N[se];return ye===void 0&&(ye=new Kf,N[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=N[se];return ye===void 0&&(ye=new Kf,N[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=N[se];return ye===void 0&&(ye=new Kf,N[se]=ye),ye.getHandSpace()};function Z(se){const ye=C.indexOf(se.inputSource);if(ye===-1)return;const ve=N[ye];ve!==void 0&&(ve.update(se.inputSource,se.frame,p||u),ve.dispatchEvent({type:se.type,data:se.inputSource}))}function fe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",j);for(let se=0;se<N.length;se++){const ye=C[se];ye!==null&&(C[se]=null,N[se].disconnect(ye))}ce=null,pe=null,S.reset();for(const se in x)delete x[se];e.setRenderTarget(D),y=null,g=null,_=null,o=null,A=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",j),L.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Oe=null,nt=null;L.depth&&(nt=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=L.stencil?Ds:wr,Oe=L.stencil?Xo:tr);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new er(g.textureWidth,g.textureHeight,{format:Vi,type:fi,depthTexture:new za(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ve={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new er(y.framebufferWidth,y.framebufferHeight,{format:Vi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ge.setContext(o),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j(se){for(let ye=0;ye<se.removed.length;ye++){const ve=se.removed[ye],Oe=C.indexOf(ve);Oe>=0&&(C[Oe]=null,N[Oe].disconnect(ve))}for(let ye=0;ye<se.added.length;ye++){const ve=se.added[ye];let Oe=C.indexOf(ve);if(Oe===-1){for(let it=0;it<N.length;it++)if(it>=C.length){C.push(ve),Oe=it;break}else if(C[it]===null){C[it]=ve,Oe=it;break}if(Oe===-1)break}const nt=N[Oe];nt&&nt.connect(ve)}}const Y=new $,le=new $;function ue(se,ye,ve){Y.setFromMatrixPosition(ye.matrixWorld),le.setFromMatrixPosition(ve.matrixWorld);const Oe=Y.distanceTo(le),nt=ye.projectionMatrix.elements,it=ve.projectionMatrix.elements,Kt=nt[14]/(nt[10]-1),mt=nt[14]/(nt[10]+1),Dt=(nt[9]+1)/nt[5],Tt=(nt[9]-1)/nt[5],St=(nt[8]-1)/nt[0],Zt=(it[8]+1)/it[0],on=Kt*St,ln=Kt*Zt,tn=Oe/(-St+Zt),Ot=tn*-St;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ot),se.translateZ(tn),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),nt[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const jt=Kt+tn,X=mt+tn,Rn=on-Ot,Pt=ln+(Oe-Ot),I=Dt*mt/X*jt,E=Tt*mt/X*jt;se.projectionMatrix.makePerspective(Rn,Pt,I,E,jt,X),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function O(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ye=se.near,ve=se.far;S.texture!==null&&(S.depthNear>0&&(ye=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),W.near=k.near=P.near=ye,W.far=k.far=P.far=ve,(ce!==W.near||pe!==W.far)&&(o.updateRenderState({depthNear:W.near,depthFar:W.far}),ce=W.near,pe=W.far),W.layers.mask=se.layers.mask|6,P.layers.mask=W.layers.mask&-5,k.layers.mask=W.layers.mask&-3;const Oe=se.parent,nt=W.cameras;O(W,Oe);for(let it=0;it<nt.length;it++)O(nt[it],Oe);nt.length===2?ue(W,P,k):W.projectionMatrix.copy(P.projectionMatrix),Q(se,W,Oe)};function Q(se,ye,ve){ve===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(ve.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Yo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(se){h=se,g!==null&&(g.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(se){return x[se]};let Fe=null;function je(se,ye){if(v=ye.getViewerPose(p||u),M=ye,v!==null){const ve=v.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Oe=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,Oe=!0);for(let mt=0;mt<ve.length;mt++){const Dt=ve[mt];let Tt=null;if(y!==null)Tt=y.getViewport(Dt);else{const Zt=_.getViewSubImage(g,Dt);Tt=Zt.viewport,mt===0&&(e.setRenderTargetTextures(A,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(A))}let St=z[mt];St===void 0&&(St=new yi,St.layers.enable(mt),St.viewport=new an,z[mt]=St),St.matrix.fromArray(Dt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Dt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),mt===0&&(W.matrix.copy(St.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Oe===!0&&W.cameras.push(St)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const mt=_.getDepthInformation(ve[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,o.renderState)}if(nt&&nt.includes("camera-access")&&R){e.state.unbindTexture(),_=s.getBinding();for(let mt=0;mt<ve.length;mt++){const Dt=ve[mt].camera;if(Dt){let Tt=x[Dt];Tt||(Tt=new lv,x[Dt]=Tt);const St=_.getCameraImage(Dt);Tt.sourceTexture=St}}}}for(let ve=0;ve<N.length;ve++){const Oe=C[ve],nt=N[ve];Oe!==null&&nt!==void 0&&nt.update(Oe,ye,p||u)}Fe&&Fe(se,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),M=null}const Ge=new dv;Ge.setAnimationLoop(je),this.setAnimationLoop=function(se){Fe=se},this.dispose=function(){}}}const sT=new en,xv=new pt;xv.set(-1,0,0,0,1,0,0,0,1);function aT(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,cv(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,L,D,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(S,x):x.isMeshLambertMaterial?(l(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),R(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?h(S,x,L,D):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ii&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ii&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),D=L.envMap,A=L.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(A)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(xv),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,L,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function oT(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,N){const C=N.program;s.uniformBlockBinding(A,C)}function p(A,N){let C=o[A.id];C===void 0&&(S(A),C=v(A),o[A.id]=C,A.addEventListener("dispose",L));const U=N.program;s.updateUBOMapping(A,U);const w=e.render.frame;l[A.id]!==w&&(g(A),l[A.id]=w)}function v(A){const N=_();A.__bindingPointIndex=N;const C=r.createBuffer(),U=A.__size,w=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,U,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,C),C}function _(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const N=o[A.id],C=A.uniforms,U=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let w=0,P=C.length;w<P;w++){const k=C[w];if(Array.isArray(k))for(let z=0,W=k.length;z<W;z++)y(k[z],w,z,U);else y(k,w,0,U)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(A,N,C,U){if(R(A,N,C,U)===!0){const w=A.__offset,P=A.value;if(Array.isArray(P)){let k=0;for(let z=0;z<P.length;z++){const W=P[z],ce=x(W);M(W,A.__data,k),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(P,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,A.__data)}}function M(A,N,C){typeof A=="number"||typeof A=="boolean"?N[0]=A:A.isMatrix3?(N[0]=A.elements[0],N[1]=A.elements[1],N[2]=A.elements[2],N[3]=0,N[4]=A.elements[3],N[5]=A.elements[4],N[6]=A.elements[5],N[7]=0,N[8]=A.elements[6],N[9]=A.elements[7],N[10]=A.elements[8],N[11]=0):ArrayBuffer.isView(A)?N.set(new A.constructor(A.buffer,A.byteOffset,N.length)):A.toArray(N,C)}function R(A,N,C,U){const w=A.value,P=N+"_"+C;if(U[P]===void 0)return typeof w=="number"||typeof w=="boolean"?U[P]=w:ArrayBuffer.isView(w)?U[P]=w.slice():U[P]=w.clone(),!0;{const k=U[P];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return U[P]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(k.equals(w)===!1)return k.copy(w),!0}}return!1}function S(A){const N=A.uniforms;let C=0;const U=16;for(let P=0,k=N.length;P<k;P++){const z=Array.isArray(N[P])?N[P]:[N[P]];for(let W=0,ce=z.length;W<ce;W++){const pe=z[W],Z=Array.isArray(pe.value)?pe.value:[pe.value];for(let fe=0,j=Z.length;fe<j;fe++){const Y=Z[fe],le=x(Y),ue=C%U,O=ue%le.boundary,Q=ue+O;C+=O,Q!==0&&U-Q<le.storage&&(C+=U-Q),pe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=C,C+=le.storage}}}const w=C%U;return w>0&&(C+=U-w),A.__size=C,A.__cache={},this}function x(A){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=48,N.storage=48):A.isMatrix4?(N.boundary=64,N.storage=64):A.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(N.boundary=16,N.storage=A.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",A),N}function L(A){const N=A.target;N.removeEventListener("dispose",L);const C=u.indexOf(N.__bindingPointIndex);u.splice(C,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function D(){for(const A in o)r.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:h,update:p,dispose:D}}const lT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function cT(){return Ki===null&&(Ki=new jy(lT,16,16,ks,Er),Ki.name="DFG_LUT",Ki.minFilter=Vn,Ki.magFilter=Vn,Ki.wrapS=xr,Ki.wrapT=xr,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class uT{constructor(e={}){const{canvas:t=dy(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=fi}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const R=y,S=new Set([Ch,Rh,bh]),x=new Set([fi,tr,Wo,Xo,Th,Ah]),L=new Uint32Array(4),D=new Int32Array(4),A=new $;let N=null,C=null;const U=[],w=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let z=!1,W=null,ce=null,pe=null,Z=null;this._outputColorSpace=ui;let fe=0,j=0,Y=null,le=-1,ue=null;const O=new an,Q=new an;let Fe=null;const je=new yt(0);let Ge=0,se=t.width,ye=t.height,ve=1,Oe=null,nt=null;const it=new an(0,0,se,ye),Kt=new an(0,0,se,ye);let mt=!1;const Dt=new Fh;let Tt=!1,St=!1;const Zt=new en,on=new $,ln=new an,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function jt(){return Y===null?ve:1}let X=s;function Rn(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",In,!1),X===null){const q="webgl2";if(X=Rn(q,b),X===null)throw Rn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Rt("WebGLRenderer: "+b.message),b}let Pt,I,E,K,re,de,we,Pe,he,_e,De,Ke,Ie,Ce,et,rt,ot,V,Re,ge,Le,Ne,xe;function qe(){Pt=new cE(X),Pt.init(),Le=new eT(X,Pt),I=new tE(X,Pt,e,Le),E=new Qw(X,Pt),I.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ce=X.createFramebuffer(),pe=X.createFramebuffer(),Z=X.createFramebuffer(),K=new dE(X),re=new kw,de=new Jw(X,Pt,E,re,I,Le,K),we=new lE(k),Pe=new gS(X),Ne=new J1(X,Pe),he=new uE(X,Pe,K,Ne),_e=new pE(X,he,Pe,Ne,K),V=new hE(X,I,de),et=new nE(re),De=new Ow(k,we,Pt,I,Ne,et),Ke=new aT(k,re),Ie=new Bw,Ce=new qw(Pt),ot=new Q1(k,we,E,_e,M,h),rt=new jw(k,_e,I),xe=new oT(X,K,I,E),Re=new eE(X,Pt,K),ge=new fE(X,Pt,K),K.programs=De.programs,k.capabilities=I,k.extensions=Pt,k.properties=re,k.renderLists=Ie,k.shadowMap=rt,k.state=E,k.info=K}qe(),R!==fi&&(P=new gE(R,t.width,t.height,f,o,l));const We=new rT(k,X);this.xr=We,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(b){b!==void 0&&(ve=b,this.setSize(se,ye,!1))},this.getSize=function(b){return b.set(se,ye)},this.setSize=function(b,q,ae=!0){if(We.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=b,ye=q,t.width=Math.floor(b*ve),t.height=Math.floor(q*ve),ae===!0&&(t.style.width=b+"px",t.style.height=q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(se*ve,ye*ve).floor()},this.setDrawingBufferSize=function(b,q,ae){se=b,ye=q,ve=ae,t.width=Math.floor(b*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(R===fi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,q,ae,ne){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,q,ae,ne),E.viewport(O.copy(it).multiplyScalar(ve).round())},this.getScissor=function(b){return b.copy(Kt)},this.setScissor=function(b,q,ae,ne){b.isVector4?Kt.set(b.x,b.y,b.z,b.w):Kt.set(b,q,ae,ne),E.scissor(Q.copy(Kt).multiplyScalar(ve).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){E.setScissorTest(mt=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){nt=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ae=!0){let ne=0;if(b){let te=!1;if(Y!==null){const be=Y.texture.format;te=S.has(be)}if(te){const be=Y.texture.type,Ve=x.has(be),Ae=ot.getClearColor(),Ye=ot.getClearAlpha(),Je=Ae.r,dt=Ae.g,ht=Ae.b;Ve?(L[0]=Je,L[1]=dt,L[2]=ht,L[3]=Ye,X.clearBufferuiv(X.COLOR,0,L)):(D[0]=Je,D[1]=dt,D[2]=ht,D[3]=Ye,X.clearBufferiv(X.COLOR,0,D))}else ne|=X.COLOR_BUFFER_BIT}q&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),W=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",In,!1),ot.dispose(),Ie.dispose(),Ce.dispose(),re.dispose(),we.dispose(),_e.dispose(),Ne.dispose(),xe.dispose(),De.dispose(),We.dispose(),We.removeEventListener("sessionstart",Qo),We.removeEventListener("sessionend",Jo),Wn.stop()};function Ht(b){b.preventDefault(),Wc("WebGLRenderer: Context Lost."),z=!0}function Ut(){Wc("WebGLRenderer: Context Restored."),z=!1;const b=K.autoReset,q=rt.enabled,ae=rt.autoUpdate,ne=rt.needsUpdate,te=rt.type;qe(),K.autoReset=b,rt.enabled=q,rt.autoUpdate=ae,rt.needsUpdate=ne,rt.type=te}function In(b){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){const q=b.target;q.removeEventListener("dispose",di),ss(q)}function ss(b){Ws(b),re.remove(b)}function Ws(b){const q=re.get(b).programs;q!==void 0&&(q.forEach(function(ae){De.releaseProgram(ae)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ae,ne,te,be){q===null&&(q=tn);const Ve=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ae=nn(b,q,ae,ne,te);E.setMaterial(ne,Ve);let Ye=ae.index,Je=1;if(ne.wireframe===!0){if(Ye=he.getWireframeAttribute(ae),Ye===void 0)return;Je=2}const dt=ae.drawRange,ht=ae.attributes.position;let Ze=dt.start*Je,At=(dt.start+dt.count)*Je;be!==null&&(Ze=Math.max(Ze,be.start*Je),At=Math.min(At,(be.start+be.count)*Je)),Ye!==null?(Ze=Math.max(Ze,0),At=Math.min(At,Ye.count)):ht!=null&&(Ze=Math.max(Ze,0),At=Math.min(At,ht.count));const Wt=At-Ze;if(Wt<0||Wt===1/0)return;Ne.setup(te,ne,Ae,ae,Ye);let Qt,kt=Re;if(Ye!==null&&(Qt=Pe.get(Ye),kt=ge,kt.setIndex(Qt)),te.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*jt()),kt.setMode(X.LINES)):kt.setMode(X.TRIANGLES);else if(te.isLine){let hn=ne.linewidth;hn===void 0&&(hn=1),E.setLineWidth(hn*jt()),te.isLineSegments?kt.setMode(X.LINES):te.isLineLoop?kt.setMode(X.LINE_LOOP):kt.setMode(X.LINE_STRIP)}else te.isPoints?kt.setMode(X.POINTS):te.isSprite&&kt.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const hn=te._multiDrawStarts,ke=te._multiDrawCounts,Cn=te._multiDrawCount,vt=Ye?Pe.get(Ye).bytesPerElement:1,Kn=re.get(ne).currentProgram.getUniforms();for(let Zn=0;Zn<Cn;Zn++)Kn.setValue(X,"_gl_DrawID",Zn),kt.render(hn[Zn]/vt,ke[Zn])}else if(te.isInstancedMesh)kt.renderInstances(Ze,Wt,te.count);else if(ae.isInstancedBufferGeometry){const hn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ke=Math.min(ae.instanceCount,hn);kt.renderInstances(Ze,Wt,ke)}else kt.render(Ze,Wt)};function as(b,q,ae){b.transparent===!0&&b.side===vr&&b.forceSinglePass===!1?(b.side=ii,b.needsUpdate=!0,cs(b,q,ae),b.side=ts,b.needsUpdate=!0,cs(b,q,ae),b.side=vr):cs(b,q,ae)}this.compile=function(b,q,ae=null){ae===null&&(ae=b),C=Ce.get(ae),C.init(q),w.push(C),ae.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),b!==ae&&b.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights();const ne=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const be=te.material;if(be)if(Array.isArray(be))for(let Ve=0;Ve<be.length;Ve++){const Ae=be[Ve];as(Ae,ae,te),ne.add(Ae)}else as(be,ae,te),ne.add(be)}),C=w.pop(),ne},this.compileAsync=function(b,q,ae=null){const ne=this.compile(b,q,ae);return new Promise(te=>{function be(){if(ne.forEach(function(Ve){re.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){te(b);return}setTimeout(be,10)}Pt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let os=null;function ru(b){os&&os(b)}function Qo(){Wn.stop()}function Jo(){Wn.start()}const Wn=new dv;Wn.setAnimationLoop(ru),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(b){os=b,We.setAnimationLoop(b),b===null?Wn.stop():Wn.start()},We.addEventListener("sessionstart",Qo),We.addEventListener("sessionend",Jo),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(b,q);const ae=We.enabled===!0&&We.isPresenting===!0,ne=P!==null&&(Y===null||ae)&&P.begin(k,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(q),q=We.getCamera()),b.isScene===!0&&b.onBeforeRender(k,b,q,Y),C=Ce.get(b,w.length),C.init(q),C.state.textureUnits=de.getTextureUnits(),w.push(C),Zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Dt.setFromProjectionMatrix(Zt,Qi,q.reversedDepth),St=this.localClippingEnabled,Tt=et.init(this.clippingPlanes,St),N=Ie.get(b,U.length),N.init(),U.push(N),We.enabled===!0&&We.isPresenting===!0){const Ve=k.xr.getDepthSensingMesh();Ve!==null&&Xs(Ve,q,-1/0,k.sortObjects)}Xs(b,q,0,k.sortObjects),N.finish(),k.sortObjects===!0&&N.sort(Oe,nt,q.reversedDepth),Ot=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ot&&ot.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Tt===!0&&et.beginShadows();const te=C.state.shadowsArray;if(rt.render(te,b,q),Tt===!0&&et.endShadows(),(ne&&P.hasRenderPass())===!1){const Ve=N.opaque,Ae=N.transmissive;if(C.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(Ae.length>0)for(let Je=0,dt=Ye.length;Je<dt;Je++){const ht=Ye[Je];el(Ve,Ae,b,ht)}Ot&&ot.render(b);for(let Je=0,dt=Ye.length;Je<dt;Je++){const ht=Ye[Je];Xa(N,b,ht,ht.viewport)}}else Ae.length>0&&el(Ve,Ae,b,q),Ot&&ot.render(b),Xa(N,b,q)}Y!==null&&j===0&&(de.updateMultisampleRenderTarget(Y),de.updateRenderTargetMipmap(Y)),ne&&P.end(k),b.isScene===!0&&b.onAfterRender(k,b,q),Ne.resetDefaultState(),le=-1,ue=null,w.pop(),w.length>0?(C=w[w.length-1],de.setTextureUnits(C.state.textureUnits),Tt===!0&&et.setGlobalState(k.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?N=U[U.length-1]:N=null,W!==null&&W.renderEnd()};function Xs(b,q,ae,ne){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLightProbeGrid)C.pushLightProbeGrid(b);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Dt.intersectsSprite(b)){ne&&ln.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Zt);const Ve=_e.update(b),Ae=b.material;Ae.visible&&N.push(b,Ve,Ae,ae,ln.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Dt.intersectsObject(b))){const Ve=_e.update(b),Ae=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ln.copy(b.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ln.copy(Ve.boundingSphere.center)),ln.applyMatrix4(b.matrixWorld).applyMatrix4(Zt)),Array.isArray(Ae)){const Ye=Ve.groups;for(let Je=0,dt=Ye.length;Je<dt;Je++){const ht=Ye[Je],Ze=Ae[ht.materialIndex];Ze&&Ze.visible&&N.push(b,Ve,Ze,ae,ln.z,ht)}}else Ae.visible&&N.push(b,Ve,Ae,ae,ln.z,null)}}const be=b.children;for(let Ve=0,Ae=be.length;Ve<Ae;Ve++)Xs(be[Ve],q,ae,ne)}function Xa(b,q,ae,ne){const{opaque:te,transmissive:be,transparent:Ve}=b;C.setupLightsView(ae),Tt===!0&&et.setGlobalState(k.clippingPlanes,ae),ne&&E.viewport(O.copy(ne)),te.length>0&&ls(te,q,ae),be.length>0&&ls(be,q,ae),Ve.length>0&&ls(Ve,q,ae),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function el(b,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ne.id]===void 0){const Ze=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ne.id]=new er(1,1,{generateMipmaps:!0,type:Ze?Er:fi,minFilter:Ls,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const be=C.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||O;be.setSize(Ve.z*k.transmissionResolutionScale,Ve.w*k.transmissionResolutionScale);const Ae=k.getRenderTarget(),Ye=k.getActiveCubeFace(),Je=k.getActiveMipmapLevel();k.setRenderTarget(be),k.getClearColor(je),Ge=k.getClearAlpha(),Ge<1&&k.setClearColor(16777215,.5),k.clear(),Ot&&ot.render(ae);const dt=k.toneMapping;k.toneMapping=Ji;const ht=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),C.setupLightsView(ne),Tt===!0&&et.setGlobalState(k.clippingPlanes,ne),ls(b,ae,ne),de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let At=0,Wt=q.length;At<Wt;At++){const Qt=q[At],{object:kt,geometry:hn,material:ke,group:Cn}=Qt;if(ke.side===vr&&kt.layers.test(ne.layers)){const vt=ke.side;ke.side=ii,ke.needsUpdate=!0,qa(kt,ae,ne,hn,ke,Cn),ke.side=vt,ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be))}k.setRenderTarget(Ae,Ye,Je),k.setClearColor(je,Ge),ht!==void 0&&(ne.viewport=ht),k.toneMapping=dt}function ls(b,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,be=b.length;te<be;te++){const Ve=b[te],{object:Ae,geometry:Ye,group:Je}=Ve;let dt=Ve.material;dt.allowOverride===!0&&ne!==null&&(dt=ne),Ae.layers.test(ae.layers)&&qa(Ae,q,ae,Ye,dt,Je)}}function qa(b,q,ae,ne,te,be){b.onBeforeRender(k,q,ae,ne,te,be),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(k,q,ae,ne,b,be),te.transparent===!0&&te.side===vr&&te.forceSinglePass===!1?(te.side=ii,te.needsUpdate=!0,k.renderBufferDirect(ae,q,ne,te,b,be),te.side=ts,te.needsUpdate=!0,k.renderBufferDirect(ae,q,ne,te,b,be),te.side=vr):k.renderBufferDirect(ae,q,ne,te,b,be),b.onAfterRender(k,q,ae,ne,te,be)}function cs(b,q,ae){q.isScene!==!0&&(q=tn);const ne=re.get(b),te=C.state.lights,be=C.state.shadowsArray,Ve=te.state.version,Ae=De.getParameters(b,te.state,be,q,ae,C.state.lightProbeGridArray),Ye=De.getProgramCacheKey(Ae);let Je=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const dt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=we.get(b.envMap||ne.environment,dt),ne.envMapRotation=ne.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",di),Je=new Map,ne.programs=Je);let ht=Je.get(Ye);if(ht!==void 0){if(ne.currentProgram===ht&&ne.lightsStateVersion===Ve)return tl(b,Ae),ht}else Ae.uniforms=De.getUniforms(b),W!==null&&b.isNodeMaterial&&W.build(b,ae,Ae),b.onBeforeCompile(Ae,k),ht=De.acquireProgram(Ae,Ye),Je.set(Ye,ht),ne.uniforms=Ae.uniforms;const Ze=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=et.uniform),tl(b,Ae),ne.needsLights=$a(b),ne.lightsStateVersion=Ve,ne.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=C.state.lightProbeGridArray.length>0,ne.currentProgram=ht,ne.uniformsList=null,ht}function Ya(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Uc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function tl(b,q){const ae=re.get(b);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function su(b,q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;A.setFromMatrixPosition(q.matrixWorld);for(let ae=0,ne=b.length;ae<ne;ae++){const te=b[ae];if(te.texture!==null&&te.boundingBox.containsPoint(A))return te}return null}function nn(b,q,ae,ne,te){q.isScene!==!0&&(q=tn),de.resetTextureUnits();const be=q.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ae=Y===null?k.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Et.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=we.get(ne.envMap||Ve,Ye),dt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ht=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,Wt=!!ae.morphAttributes.color;let Qt=Ji;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const kt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,hn=kt!==void 0?kt.length:0,ke=re.get(ne),Cn=C.state.lights;if(Tt===!0&&(St===!0||b!==ue)){const zt=b===ue&&ne.id===le;et.setState(ne,b,zt)}let vt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Cn.state.version||ke.outputColorSpace!==Ae||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==Je||ne.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==et.numPlanes||ke.numIntersection!==et.numIntersection)||ke.vertexAlphas!==dt||ke.vertexTangents!==ht||ke.morphTargets!==Ze||ke.morphNormals!==At||ke.morphColors!==Wt||ke.toneMapping!==Qt||ke.morphTargetsCount!==hn||!!ke.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,ke.__version=ne.version);let Kn=ke.currentProgram;vt===!0&&(Kn=cs(ne,q,te),W&&ne.isNodeMaterial&&W.onUpdateProgram(ne,Kn,ke));let Zn=!1,_t=!1,ir=!1;const Ft=Kn.getUniforms(),qt=ke.uniforms;if(E.useProgram(Kn.program)&&(Zn=!0,_t=!0,ir=!0),ne.id!==le&&(le=ne.id,_t=!0),ke.needsLights){const zt=su(C.state.lightProbeGridArray,te);ke.lightProbeGrid!==zt&&(ke.lightProbeGrid=zt,_t=!0)}if(Zn||ue!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ft.setValue(X,"projectionMatrix",b.projectionMatrix),Ft.setValue(X,"viewMatrix",b.matrixWorldInverse);const Ri=Ft.map.cameraPosition;Ri!==void 0&&Ri.setValue(X,on.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&Ft.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),ue!==b&&(ue=b,_t=!0,ir=!0)}if(ke.needsLights&&(Cn.state.directionalShadowMap.length>0&&Ft.setValue(X,"directionalShadowMap",Cn.state.directionalShadowMap,de),Cn.state.spotShadowMap.length>0&&Ft.setValue(X,"spotShadowMap",Cn.state.spotShadowMap,de),Cn.state.pointShadowMap.length>0&&Ft.setValue(X,"pointShadowMap",Cn.state.pointShadowMap,de)),te.isSkinnedMesh){Ft.setOptional(X,te,"bindMatrix"),Ft.setOptional(X,te,"bindMatrixInverse");const zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ft.setValue(X,"boneTexture",zt.boneTexture,de))}te.isBatchedMesh&&(Ft.setOptional(X,te,"batchingTexture"),Ft.setValue(X,"batchingTexture",te._matricesTexture,de),Ft.setOptional(X,te,"batchingIdTexture"),Ft.setValue(X,"batchingIdTexture",te._indirectTexture,de),Ft.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Ft.setValue(X,"batchingColorTexture",te._colorsTexture,de));const bi=ae.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&V.update(te,ae,Kn),(_t||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Ft.setValue(X,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(qt.envMapIntensity.value=q.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=cT()),_t){if(Ft.setValue(X,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&au(qt,ir),be&&ne.fog===!0&&Ke.refreshFogUniforms(qt,be),Ke.refreshMaterialUniforms(qt,ne,ve,ye,C.state.transmissionRenderTarget[b.id]),ke.needsLights&&ke.lightProbeGrid){const zt=ke.lightProbeGrid;qt.probesSH.value=zt.texture,qt.probesMin.value.copy(zt.boundingBox.min),qt.probesMax.value.copy(zt.boundingBox.max),qt.probesResolution.value.copy(zt.resolution)}Uc.upload(X,Ya(ke),qt,de)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Uc.upload(X,Ya(ke),qt,de),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(X,"center",te.center),Ft.setValue(X,"modelViewMatrix",te.modelViewMatrix),Ft.setValue(X,"normalMatrix",te.normalMatrix),Ft.setValue(X,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const zt=ne.uniformsGroups;for(let Ri=0,Gi=zt.length;Ri<Gi;Ri++){const us=zt[Ri];xe.update(us,Kn),xe.bind(us,Kn)}}return Kn}function au(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function $a(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,q,ae){const ne=re.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(b.texture).__webglTexture=q,re.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ae=re.get(b);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,ae=0){Y=b,fe=q,j=ae;let ne=null,te=!1,be=!1;if(b){const Ae=re.get(b);if(Ae.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Ae.__webglFramebuffer),O.copy(b.viewport),Q.copy(b.scissor),Fe=b.scissorTest,E.viewport(O),E.scissor(Q),E.setScissorTest(Fe),le=-1;return}else if(Ae.__webglFramebuffer===void 0)de.setupRenderTarget(b);else if(Ae.__hasExternalTextures)de.rebindTextures(b,re.get(b.texture).__webglTexture,re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const dt=b.depthTexture;if(Ae.__boundDepthTexture!==dt){if(dt!==null&&re.has(dt)&&(b.width!==dt.image.width||b.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(b)}}const Ye=b.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);const Je=re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ne=Je[q][ae]:ne=Je[q],te=!0):b.samples>0&&de.useMultisampledRTT(b)===!1?ne=re.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[ae]:ne=Je,O.copy(b.viewport),Q.copy(b.scissor),Fe=b.scissorTest}else O.copy(it).multiplyScalar(ve).floor(),Q.copy(Kt).multiplyScalar(ve).floor(),Fe=mt;if(ae!==0&&(ne=ce),E.bindFramebuffer(X.FRAMEBUFFER,ne)&&E.drawBuffers(b,ne),E.viewport(O),E.scissor(Q),E.setScissorTest(Fe),te){const Ae=re.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ae.__webglTexture,ae)}else if(be){const Ae=q;for(let Ye=0;Ye<b.textures.length;Ye++){const Je=re.get(b.textures[Ye]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,ae,Ae)}}else if(b!==null&&ae!==0){const Ae=re.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ae.__webglTexture,ae)}le=-1},this.readRenderTargetPixels=function(b,q,ae,ne,te,be,Ve,Ae=0){if(!(b&&b.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){E.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const Je=b.textures[Ae],dt=Je.format,ht=Je.type;if(b.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ae),!I.textureFormatReadable(dt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(ht)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ne&&ae>=0&&ae<=b.height-te&&X.readPixels(q,ae,ne,te,Le.convert(dt),Le.convert(ht),be)}finally{const Je=Y!==null?re.get(Y).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(b,q,ae,ne,te,be,Ve,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(q>=0&&q<=b.width-ne&&ae>=0&&ae<=b.height-te){E.bindFramebuffer(X.FRAMEBUFFER,Ye);const Je=b.textures[Ae],dt=Je.format,ht=Je.type;if(b.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ae),!I.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ze),X.bufferData(X.PIXEL_PACK_BUFFER,be.byteLength,X.STREAM_READ),X.readPixels(q,ae,ne,te,Le.convert(dt),Le.convert(ht),0);const At=Y!==null?re.get(Y).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,At);const Wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await hy(X,Wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ze),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,be),X.deleteBuffer(Ze),X.deleteSync(Wt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(b.image.width*ne),be=Math.floor(b.image.height*ne),Ve=q!==null?q.x:0,Ae=q!==null?q.y:0;de.setTexture2D(b,0),X.copyTexSubImage2D(X.TEXTURE_2D,ae,0,0,Ve,Ae,te,be),E.unbindTexture()},this.copyTextureToTexture=function(b,q,ae=null,ne=null,te=0,be=0){let Ve,Ae,Ye,Je,dt,ht,Ze,At,Wt;const Qt=b.isCompressedTexture?b.mipmaps[be]:b.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Ae=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,dt=ae.min.y,ht=ae.isBox3?ae.min.z:0;else{const qt=Math.pow(2,-te);Ve=Math.floor(Qt.width*qt),Ae=Math.floor(Qt.height*qt),b.isDataArrayTexture?Ye=Qt.depth:b.isData3DTexture?Ye=Math.floor(Qt.depth*qt):Ye=1,Je=0,dt=0,ht=0}ne!==null?(Ze=ne.x,At=ne.y,Wt=ne.z):(Ze=0,At=0,Wt=0);const kt=Le.convert(q.format),hn=Le.convert(q.type);let ke;q.isData3DTexture?(de.setTexture3D(q,0),ke=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(de.setTexture2DArray(q,0),ke=X.TEXTURE_2D_ARRAY):(de.setTexture2D(q,0),ke=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const Cn=E.getParameter(X.UNPACK_ROW_LENGTH),vt=E.getParameter(X.UNPACK_IMAGE_HEIGHT),Kn=E.getParameter(X.UNPACK_SKIP_PIXELS),Zn=E.getParameter(X.UNPACK_SKIP_ROWS),_t=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(X.UNPACK_SKIP_ROWS,dt),E.pixelStorei(X.UNPACK_SKIP_IMAGES,ht);const ir=b.isDataArrayTexture||b.isData3DTexture,Ft=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const qt=re.get(b),bi=re.get(q),zt=re.get(qt.__renderTarget),Ri=re.get(bi.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Gi=0;Gi<Ye;Gi++)ir&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(b).__webglTexture,te,ht+Gi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(q).__webglTexture,be,Wt+Gi)),X.blitFramebuffer(Je,dt,Ve,Ae,Ze,At,Ve,Ae,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||re.has(b)){const qt=re.get(b),bi=re.get(q);E.bindFramebuffer(X.READ_FRAMEBUFFER,pe),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Z);for(let zt=0;zt<Ye;zt++)ir?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.__webglTexture,te,ht+zt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,te),Ft?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bi.__webglTexture,be,Wt+zt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,bi.__webglTexture,be),te!==0?X.blitFramebuffer(Je,dt,Ve,Ae,Ze,At,Ve,Ae,X.COLOR_BUFFER_BIT,X.NEAREST):Ft?X.copyTexSubImage3D(ke,be,Ze,At,Wt+zt,Je,dt,Ve,Ae):X.copyTexSubImage2D(ke,be,Ze,At,Je,dt,Ve,Ae);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ft?b.isDataTexture||b.isData3DTexture?X.texSubImage3D(ke,be,Ze,At,Wt,Ve,Ae,Ye,kt,hn,Qt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,be,Ze,At,Wt,Ve,Ae,Ye,kt,Qt.data):X.texSubImage3D(ke,be,Ze,At,Wt,Ve,Ae,Ye,kt,hn,Qt):b.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,be,Ze,At,Ve,Ae,kt,hn,Qt.data):b.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,be,Ze,At,Qt.width,Qt.height,kt,Qt.data):X.texSubImage2D(X.TEXTURE_2D,be,Ze,At,Ve,Ae,kt,hn,Qt);E.pixelStorei(X.UNPACK_ROW_LENGTH,Cn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Kn),E.pixelStorei(X.UNPACK_SKIP_ROWS,Zn),E.pixelStorei(X.UNPACK_SKIP_IMAGES,_t),be===0&&q.generateMipmaps&&X.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(b){re.get(b).__webglFramebuffer===void 0&&de.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?de.setTextureCube(b,0):b.isData3DTexture?de.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?de.setTexture2DArray(b,0):de.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){fe=0,j=0,Y=null,E.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const tt={scene:null,camera:null,renderer:null,obstacles:[],dust:null,time:0};function fT(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d");e.fillStyle="#1b2334",e.fillRect(0,0,256,256),e.strokeStyle="#27324c",e.lineWidth=3,e.strokeRect(0,0,256,256),e.fillStyle="#2c3a58",e.fillRect(0,0,6,6);const t=new ov(r);return t.wrapS=t.wrapT=kc,t.repeat.set(30,30),t.anisotropy=4,t.colorSpace=ui,t}function yv(r="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){const t=document.createElement("canvas");t.width=t.height=64;const s=t.getContext("2d"),o=s.createRadialGradient(32,32,2,32,32,30);return o.addColorStop(0,r),o.addColorStop(1,e),s.fillStyle=o,s.fillRect(0,0,64,64),new ov(t)}function dT(r){const e=new Wy;e.background=new yt(1317673),e.fog=new Uh(1317673,70,210);const t=new yi(74,window.innerWidth/window.innerHeight,.1,400);t.position.set(0,2.6,0),t.rotation.order="YXZ",e.add(t);const s=new uT({canvas:r,antialias:!0,powerPreference:"high-performance"});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),s.shadowMap.enabled=!0,s.shadowMap.type=Ng;const o=new uS(11059432,2765380,1.05);e.add(o);const l=new J0(16773590,1.15);l.position.set(45,70,25),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=-90,l.shadow.camera.right=90,l.shadow.camera.top=90,l.shadow.camera.bottom=-90,l.shadow.camera.far=200,l.shadow.bias=-8e-4,e.add(l);const u=new J0(8366335,.25);u.position.set(-40,30,-30),e.add(u);const f=new wt(new rs(bt*2,bt*2),new Mi({map:fT(),roughness:.95,metalness:.05}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,e.add(f);const h=new wt(new rs(900,900),new Ti({color:856608}));h.rotation.x=-Math.PI/2,h.position.y=-.05,e.add(h);const p=new Mi({color:2305090,roughness:.8,metalness:.2}),v=7,_=(D,A,N,C)=>{const U=new wt(new Ei(D,v,A),p);U.position.set(N,v/2,C),e.add(U);const w=new wt(new Ei(D+.2,.22,A+.2),new Ti({color:4020874}));w.position.set(N,v,C),e.add(w)};_(bt*2+4,2,0,-bt-1),_(bt*2+4,2,0,bt+1),_(2,bt*2+4,-bt-1,0),_(2,bt*2+4,bt+1,0);const g=[new Mi({color:2831696,roughness:.85,metalness:.15}),new Mi({color:3226972,roughness:.85,metalness:.15}),new Mi({color:3819363,roughness:.8,metalness:.2})],y=[];let M=0;for(;y.length<26&&M<400;){M++;const D=ut(-bt+12,bt-12),A=ut(-bt+12,bt-12);if(Math.abs(D)<16&&Math.abs(A)<16)continue;let N=!0;for(const z of y)if((z.x-D)**2+(z.z-A)**2<170){N=!1;break}if(!N)continue;const C=ut(1.4,3.4),U=ut(1.4,3.4),w=ut(1.6,4.2),P=new wt(new Ei(C*2,w,U*2),g[y.length%3]);P.position.set(D,w/2,A),P.castShadow=!0,P.receiveShadow=!0,e.add(P);const k=new wt(new Ei(C*2+.08,.12,U*2+.08),new Ti({color:5728399}));k.position.set(D,w+.05,A),e.add(k),y.push({x:D,z:A,hw:C,hd:U,mesh:P})}tt.obstacles=y;const R=new Gn,S=380,x=new Float32Array(S*3);for(let D=0;D<S;D++)x[D*3]=ut(-bt,bt),x[D*3+1]=ut(.5,22),x[D*3+2]=ut(-bt,bt);R.setAttribute("position",new wi(x,3));const L=new tS(R,new sv({color:10336488,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:ns}));return e.add(L),tt.dust=L,tt.scene=e,tt.camera=t,tt.renderer=s,window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}),tt}function hT(r){tt.time+=r,tt.dust&&(tt.dust.rotation.y+=r*.008,tt.dust.position.y=Math.sin(tt.time*.2)*.4),tt.renderer.render(tt.scene,tt.camera)}const Bh={1:{body:4171775,turret:3117024,accent:"#5db9ff"},2:{body:3524536,turret:2599067,accent:"#4fe0d0"},3:{body:16757575,turret:15111726,accent:"#ffc76b"}},yd={};function Sv(r,e){const t=`${r.toFixed(2)}_${e.toFixed(2)}`;if(!yd[t]){const s=new Tr(r*.86,r,e,12);s.rotateX(Math.PI/2),yd[t]=s}return yd[t]}function Rs(r,e={}){return new Mi({color:r,roughness:.55,metalness:.35,...e})}function pT(r,e=null){const t=e||r.tier,s=Bh[Math.min(3,t)],o=new Hi,l=r.special==="melee"?2.5:r.id==="heavy"||r.id==="juggernaut"?2.45:2.2,u=new wt(new Ei(l,.85,l),Rs(s.body));u.position.y=.55,u.castShadow=!0,o.add(u);const f=new wt(new Ei(l*.8,.14,l*.8),Rs(s.turret));if(f.position.y=1.02,o.add(f),r.special==="melee"){const _=new Qc(.28,.85,4),g=r.id==="spike"?8:6;for(let y=0;y<g;y++){const M=y/g*Math.PI*2,R=new wt(_,Rs(s.turret));R.position.set(Math.cos(M)*(l/2+.18),.55,Math.sin(M)*(l/2+.18)),R.rotation.z=-Math.cos(M)*Math.PI/2,R.rotation.x=Math.sin(M)*Math.PI/2,R.castShadow=!0,o.add(R)}}const h=new Hi;h.position.y=.95,o.add(h);const p=new wt(new Tr(.55,.62,.35,14),Rs(s.turret));p.position.y=.12,h.add(p);const v=[];for(const _ of r.barrels){const g=Math.min(.62,.3*_.w),y=2.1*_.l,M=new wt(Sv(g,y),Rs(s.turret));M.castShadow=!0;const R=y/2-.25;M.position.set(_.off||0,.42,R);const S=new Hi;S.rotation.y=-Ih.degToRad(_.a),S.add(M),h.add(S),v.push({holder:S,mesh:M,baseZ:R,spec:_,recoil:0})}for(const _ of v)if(_.spec.w>=1.15){const g=new wt(new Tr(_.spec.w*.34,_.spec.w*.22,.5,10),Rs(s.body));g.rotation.x=Math.PI/2,g.position.z=_.baseZ+2.1*_.spec.l/2-.1,g.position.y=.42,_.holder.add(g)}return{group:o,turret:h,barrels:v,colors:s}}function mT(r){const e=Bh[Math.min(3,r.tier)],t=new Hi,s=[];for(const o of r.barrels){const l=Math.min(.5,.24*o.w),u=2.6*o.l,f=new wt(Sv(l,u),Rs(e.turret,{roughness:.45})),h=-u/2-.1;f.position.set((o.off||0)*.9,0,h);const p=new Hi;p.rotation.y=-Ih.degToRad(o.a)*.55,p.add(f),t.add(p),s.push({holder:p,mesh:f,baseZ:h,spec:o,recoil:0})}return t.position.set(0,-1.15,-.55),{vm:t,barrels:s}}function gT(r,e=116){const t=Bh[Math.min(3,r.tier)].accent,s=e/2,o=e/2,l=e*.24;let u=`<svg viewBox="0 0 ${e} ${e}" width="${e}" height="${e}" xmlns="http://www.w3.org/2000/svg">`;u+=`<defs><filter id="g${r.id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.4"/></filter></defs>`;for(const f of r.barrels){const h=Math.min(20,10*f.w),p=e*.34*f.l;u+=`<rect x="${s-h/2}" y="${o-p-e*.06}" width="${h}" height="${p}" rx="${h*.28}" fill="${t}" stroke="#0b1220" stroke-width="2.5" transform="rotate(${f.a} ${s} ${o})" />`}if(r.special==="melee"){const f=r.id==="spike"?8:6;for(let h=0;h<f;h++){const p=h/f*Math.PI*2,v=l*1.28,_=l*1.75,g=s+Math.cos(p)*v,y=o+Math.sin(p)*v,M=s+Math.cos(p)*_,R=o+Math.sin(p)*_;u+=`<line x1="${g}" y1="${y}" x2="${M}" y2="${R}" stroke="${t}" stroke-width="5" stroke-linecap="round" />`}}if(r.droneCount){const f=Math.min(8,r.droneCount);for(let h=0;h<f;h++){const p=h/f*Math.PI*2+.5,v=l*1.85;u+=`<rect x="${s+Math.cos(p)*v-4.5}" y="${o+Math.sin(p)*v-4.5}" width="9" height="9" fill="${t}" stroke="#0b1220" stroke-width="2" transform="rotate(45 ${s+Math.cos(p)*v} ${o+Math.sin(p)*v})" />`}}return u+=`<rect x="${s-l}" y="${o-l}" width="${l*2}" height="${l*2}" rx="${l*.22}" fill="${t}" stroke="#0b1220" stroke-width="3.5" filter="url(#g${r.id})" />`,u+=`<rect x="${s-l}" y="${o-l}" width="${l*2}" height="${l*2}" rx="${l*.22}" fill="${t}" stroke="#0b1220" stroke-width="3.5" />`,u+=`<circle cx="${s}" cy="${o}" r="${l*.42}" fill="#0b122033" stroke="#0b1220" stroke-width="2.5" />`,u+="</svg>",u}let un=null,Us=null,Is=!1,Tg=-1;function Fc(){if(!un)try{un=new(window.AudioContext||window.webkitAudioContext),Us=un.createGain(),Us.gain.value=.32,Us.connect(un.destination)}catch{un=null}un&&un.state==="suspended"&&un.resume()}function Ag(){return Is=!Is,Us&&(Us.gain.value=Is?0:.32),Is}const vT=()=>Is;function Bn(r,e,t="square",s=.5,o=null,l=0){if(!un||Is)return;const u=un.currentTime+l,f=un.createOscillator(),h=un.createGain();f.type=t,f.frequency.setValueAtTime(r,u),o&&f.frequency.exponentialRampToValueAtTime(Math.max(20,o),u+e),h.gain.setValueAtTime(s,u),h.gain.exponentialRampToValueAtTime(1e-4,u+e),f.connect(h).connect(Us),f.start(u),f.stop(u+e+.02)}function Da(r,e=.4,t=1200,s=0){if(!un||Is)return;const o=un.currentTime+s,l=Math.max(1,Math.floor(un.sampleRate*r)),u=un.createBuffer(1,l,un.sampleRate),f=u.getChannelData(0);for(let _=0;_<l;_++)f[_]=(Math.random()*2-1)*(1-_/l);const h=un.createBufferSource();h.buffer=u;const p=un.createBiquadFilter();p.type="lowpass",p.frequency.value=t;const v=un.createGain();v.gain.setValueAtTime(e,o),v.gain.exponentialRampToValueAtTime(1e-4,o+r),h.connect(p).connect(v).connect(Us),h.start(o)}const Nt={shoot(r=.5){const e=140+r*480;Bn(e,.07+(1-r)*.08,"square",.16,e*.5),r<.25&&Da(.18,.3,500)},eshoot(){const r=un?un.currentTime:0;r-Tg<.045||(Tg=r,Bn(300,.08,"sawtooth",.08,150))},hit(){Da(.05,.18,2400),Bn(520,.04,"triangle",.1,300)},boom(r=!1){Da(r?.5:.22,r?.5:.3,r?420:900),Bn(r?70:110,r?.5:.25,"sine",.4,30)},xp(){Bn(880,.07,"sine",.12,1320)},level(){[440,554,659,880].forEach((r,e)=>Bn(r,.12,"square",.14,null,e*.07))},alarm(){Bn(392,.22,"sawtooth",.2,370),Bn(311,.3,"sawtooth",.2,290,.24),Bn(392,.22,"sawtooth",.2,370,.5)},hurt(){Bn(180,.14,"sawtooth",.22,90),Da(.1,.15,700)},click(){Bn(640,.05,"square",.1,480)},place(){Bn(220,.09,"triangle",.14,160)},dash(){Da(.16,.2,1600),Bn(300,.14,"sine",.12,700)},evolve(){[262,330,392,523,659].forEach((r,e)=>Bn(r,.16,"triangle",.16,null,e*.09)),Da(.4,.2,1500,.3)},win(){[523,659,784,1047,784,1047].forEach((r,e)=>Bn(r,.22,"square",.15,null,e*.14))},over(){[330,262,208,156].forEach((r,e)=>Bn(r,.3,"sawtooth",.16,null,e*.18))}},xn=[],Jr=[],Fa=[],Fs=[];let zs=null;const Vh=yv(),Sd={},_T=new jo(.34,0),xT=new Ei(.22,.22,.22);function Mv(r,e){const t=`${r}_${e.toFixed(2)}`;if(!Sd[t]){let s;r===0?s=new jo(e*.72,0):s=new Tr(e,e,e*.92,r),Sd[t]=s}return Sd[t]}function yT(){const r=new Hi,e=new wt(new rs(1,.14),new Ti({color:1053983,transparent:!0,opacity:.85,depthWrite:!1})),t=new wt(new rs(1,.09),new Ti({color:6225802,depthWrite:!1}));return t.position.z=.01,r.add(e,t),r.visible=!1,{group:r,fg:t}}function Vo(r,e,t,s=1,o=!1){const l=Ix[r],u=l.size,f=new Mi({color:l.color,roughness:.5,metalness:.25,emissive:l.color,emissiveIntensity:.12}),h=new wt(Mv(l.sides,u),f);h.castShadow=!0,h.position.set(e,u*.55,t),tt.scene.add(h);const p=yT();p.group.position.y=u+.9,p.group.scale.x=u*1.6,h.add(p.group);const v={type:r,def:l,mesh:h,mat:f,x:e,z:t,size:u,hp:l.hp*s,maxhp:l.hp*s,dmg:l.dmg*s,xp:l.xp*s,speed:l.speed,radius:u*.95,wanderA:ut(0,Math.PI*2),wanderT:ut(.5,2),spin:ut(-.7,.7),hitFlash:0,hpbar:p,shootT:ut(1,2.2),home:o,homeA:ut(0,Math.PI*2),homeR:ut(13,19),isBoss:!1,summoned:!1,dead:!1};return xn.push(v),v}function ST(){const r=Math.floor(ut(0,4)),e=bt-10;return r===0?[ut(-e,e),-e]:r===1?[ut(-e,e),e]:r===2?[-e,ut(-e,e)]:[e,ut(-e,e)]}function Md(r,e){const[t,s]=ST();return Vo(r,t,s,e,r==="droneE")}function MT(r,e){const t=Mh[r],s=1+e*.12,o=Vo(r==="hunter"?"tankE":t.sides===0?"droneE":"hexagon",0,-bt+24,1);tt.scene.remove(o.mesh);const l=new Mi({color:t.color,roughness:.4,metalness:.4,emissive:t.color,emissiveIntensity:.3}),u=new wt(Mv(t.sides,t.size),l);u.castShadow=!0,u.position.set(0,t.size*.6,-bt+24),tt.scene.add(u);const f=new wt(new kh(t.size*1.25,.16,8,40),new Ti({color:t.color,transparent:!0,opacity:.7}));f.rotation.x=Math.PI/2,f.position.y=.3,u.add(f);const h=new Zo(new Ga({map:Vh,color:t.color,transparent:!0,opacity:.5,depthWrite:!1,blending:ns}));return h.scale.setScalar(t.size*4.2),u.add(h),Object.assign(o,{mesh:u,mat:l,x:0,z:-bt+24,size:t.size,radius:t.size*.92,hp:t.hp*s,maxhp:t.hp*s,dmg:t.dmg,xp:t.xp,speed:2.6,isBoss:!0,bossKey:r,name:t.name,t:0,atkT:2,atk2T:4,phase:1,spinSpeed:r==="gear"?3.2:.8,telegraph:0,chargeVX:0,chargeVZ:0,charging:0,spiralA:0,hitFlash:0}),o.hpbar.group.visible=!1,zs=o,o}const ET=new Jc(.28,10,10),wT=new Ti({color:16739179});function ki(r,e,t,s,o,l=1,u=4.5){if(Jr.length>140)return;const f=new wt(ET,wT);f.scale.setScalar(l),f.position.set(r,1,e);const h=new Zo(new Ga({map:Vh,color:16732240,transparent:!0,opacity:.7,depthWrite:!1,blending:ns}));h.scale.setScalar(1.6*l),f.add(h),tt.scene.add(f),Jr.push({mesh:f,x:r,z:e,vx:Math.sin(t)*s,vz:Math.cos(t)*s,dmg:o,r:.3*l,life:u}),Nt.eshoot()}function TT(r,e){for(let t=Jr.length-1;t>=0;t--){const s=Jr[t];if(s.x+=s.vx*r,s.z+=s.vz*r,s.life-=r,s.mesh.position.set(s.x,1,s.z),s.life<=0||Math.abs(s.x)>bt||Math.abs(s.z)>bt){tt.scene.remove(s.mesh),Jr.splice(t,1);continue}e(s)&&(tt.scene.remove(s.mesh),Jr.splice(t,1))}}function AT(r,e,t){const s=bn(Math.round(t/12),1,8),o=t/s;for(let l=0;l<s;l++){const u=new Ti({color:16769899}),f=new wt(_T,u),h=r+ut(-1.2,1.2),p=e+ut(-1.2,1.2);f.position.set(h,.6,p);const v=new Zo(new Ga({map:Vh,color:16767309,transparent:!0,opacity:.65,depthWrite:!1,blending:ns}));v.scale.setScalar(1.5),f.add(v),tt.scene.add(f),Fa.push({mesh:f,x:h,z:p,val:o,vx:ut(-3,3),vz:ut(-3,3),t:ut(0,6)})}}function bg(r,e,t,s){for(let o=Fa.length-1;o>=0;o--){const l=Fa[o];l.t+=r;const u=e-l.x,f=t-l.z,h=u*u+f*f;if(h<210){const p=Math.sqrt(h)||1,v=bn((210-h)/210,0,1)*46;l.x+=u/p*v*r,l.z+=f/p*v*r}else l.x+=l.vx*r,l.z+=l.vz*r,l.vx*=.92,l.vz*=.92;l.mesh.position.set(l.x,.6+Math.sin(l.t*3)*.14,l.z),l.mesh.rotation.y+=r*2.4,h<2.6&&(s(l.val),tt.scene.remove(l.mesh),Fa.splice(o,1),Nt.xp())}}function Va(r,e,t,s=12,o=9,l=1){if(!(Fs.length>260))for(let u=0;u<s;u++){const f=new Ti({color:t,transparent:!0}),h=new wt(xT,f);h.position.set(r+ut(-.4,.4),l+ut(0,.8),e+ut(-.4,.4)),tt.scene.add(h);const p=ut(0,Math.PI*2),v=ut(o*.35,o);Fs.push({mesh:h,mat:f,vx:Math.sin(p)*v,vz:Math.cos(p)*v,vy:ut(2,9),life:ut(.4,.9),maxLife:.9})}}function Ed(r){for(let e=Fs.length-1;e>=0;e--){const t=Fs[e];if(t.life-=r,t.life<=0){tt.scene.remove(t.mesh),Fs.splice(e,1);continue}t.vy-=16*r,t.mesh.position.x+=t.vx*r,t.mesh.position.y=Math.max(.1,t.mesh.position.y+t.vy*r),t.mesh.position.z+=t.vz*r,t.mesh.rotation.x+=r*7,t.mesh.rotation.z+=r*6;const s=t.life/t.maxLife;t.mesh.scale.setScalar(bn(s*1.4,.05,1.4)),t.mat.opacity=bn(s*1.3,0,1)}}function qc(r,e,t,s){return Math.atan2(t-r,s-e)}function Rg(r,e){const{px:t,pz:s,player:o,chapterIdx:l}=e;for(let u=xn.length-1;u>=0;u--){const f=xn[u];if(f.dead)continue;const h=t-f.x,p=s-f.z,v=Math.sqrt(h*h+p*p)||1;f.hitFlash=Math.max(0,f.hitFlash-r*5),f.mat.emissiveIntensity=.12+f.hitFlash*1.6;let _=0,g=0;if(f.isBoss)bT(f,r,e);else if(f.type==="tankE"||f.type==="diamond"){const y=f.type==="tankE"?26:20,M=qc(f.x,f.z,t,s);v>y+4?(_=Math.sin(M)*f.speed,g=Math.cos(M)*f.speed):v<y-4?(_=-Math.sin(M)*f.speed,g=-Math.cos(M)*f.speed):(_=Math.cos(M)*f.speed*.6,g=-Math.sin(M)*f.speed*.6),f.mesh.rotation.y=M,f.shootT-=r,f.shootT<=0&&v<70&&(f.type==="tankE"?(ki(f.x+Math.sin(M)*2.2,f.z+Math.cos(M)*2.2,M+ut(-.03,.03),24,f.dmg*.55,.9),ki(f.x+Math.sin(M)*2.2,f.z+Math.cos(M)*2.2,M+ut(-.03,.03),24,f.dmg*.55,.9,4.5),f.shootT=1.6):(ki(f.x+Math.sin(M)*1.8,f.z+Math.cos(M)*1.8,M,20,f.dmg*.8,.8),f.shootT=1.7))}else if(f.type==="droneE"||f.home){if(f.homeA+=r*1.6,v<60){const y=t+Math.sin(f.homeA)*f.homeR,M=s+Math.cos(f.homeA)*f.homeR,R=qc(f.x,f.z,y,M);_=Math.sin(R)*f.speed,g=Math.cos(R)*f.speed}else _=Math.sin(f.wanderA)*f.speed*.4,g=Math.cos(f.wanderA)*f.speed*.4;f.mesh.rotation.y+=r*4,f.mesh.position.y=f.size*.72+Math.sin(f.homeA*2)*.4}else{if(f.wanderT-=r,f.wanderT<=0&&(f.wanderA=ut(0,Math.PI*2),f.wanderT=ut(1,3)),v<f.def.aggro){const y=f.type==="triangle"?f.speed*1.35:f.speed;_=h/v*y,g=p/v*y}else _=Math.sin(f.wanderA)*f.speed*.45,g=Math.cos(f.wanderA)*f.speed*.45;f.mesh.rotation.y+=r*f.spin}f.x=bn(f.x+_*r,-bt+f.radius,bt-f.radius),f.z=bn(f.z+g*r,-bt+f.radius,bt-f.radius),!f.isBoss||f.charging<=0?f.mesh.position.set(f.x,f.mesh.position.y*0+(f.type==="droneE"?f.mesh.position.y:f.size*.55),f.z):f.mesh.position.set(f.x,f.size*.55,f.z);for(let y=u-1;y>=0;y--){const M=xn[y];if(M.dead)continue;const R=f.x-M.x,S=f.z-M.z,x=f.radius+M.radius,L=R*R+S*S;if(L>.01&&L<x*x){const D=Math.sqrt(L),A=(x-D)*.5;f.x+=R/D*A,f.z+=S/D*A,M.x-=R/D*A,M.z-=S/D*A}}if(v<f.radius+o.radius+.15&&e.contactDamage(f,r),!f.isBoss&&f.hp<f.maxhp){f.hpbar.group.visible=!0,f.hpbar.group.lookAt(t,f.hpbar.group.parent.position.y+f.size+.9,s);const y=bn(f.hp/f.maxhp,0,1);f.hpbar.fg.scale.x=Math.max(.001,y),f.hpbar.fg.position.x=-(1-y)/2}f.hp<=0&&RT(u,e)}}function bT(r,e,t){const{px:s,pz:o}=t;r.t+=e;const l=s-r.x,u=o-r.z,f=Math.sqrt(l*l+u*u)||1,h=qc(r.x,r.z,s,o);r.mesh.rotation.y+=e*r.spinSpeed*(r.phase>=3?2.2:1);const p=r.hp/r.maxhp;if(r.charging>0){r.charging-=e,r.x+=r.chargeVX*e,r.z+=r.chargeVZ*e,r.mat.emissiveIntensity=1.4;return}if(r.telegraph>0){if(r.telegraph-=e,r.mat.emissiveIntensity=1+Math.sin(r.t*30)*.7,r.telegraph<=0){r.charging=.85;const y=qc(r.x,r.z,s,o);r.chargeVX=Math.sin(y)*46,r.chargeVZ=Math.cos(y)*46,Nt.dash()}return}const v=r.bossKey,_=v==="hunter"||v==="mother"?f>30?1:f<22?-1:0:f>14?1:0,g=r.speed*(r.phase>=3?1.7:1);if(r.x+=l/f*g*_*e,r.z+=u/f*g*_*e,r.atkT-=e,r.atk2T-=e,v==="guard")r.atkT<=0&&(r.telegraph=.65,r.atkT=4.2);else if(v==="gear"){if(r.atkT<=0){const M=r.mesh.rotation.y;for(let R=0;R<14;R++)ki(r.x,r.z,M+R/14*Math.PI*2,15,r.dmg*.5,1,5);r.atkT=2.9}}else if(v==="hive"){if(r.atkT<=0){for(const y of[-.22,0,.22])ki(r.x+Math.sin(h)*2.5,r.z+Math.cos(h)*2.5,h+y,22,r.dmg*.6,1);r.atkT=2.4}if(r.atk2T<=0){if(xn.filter(M=>M.summoned&&!M.dead).length<9)for(let M=0;M<3;M++){const R=Vo("square",r.x+ut(-6,6),r.z+ut(-6,6),1+t.chapterIdx*.3);R.summoned=!0}r.atk2T=6.5}}else if(v==="mother"){if(r.atkT<=0){for(let M=0;M<12;M++)ki(r.x,r.z,M/12*Math.PI*2,13,r.dmg*.45,.8,5);r.atkT=5.5}if(r.atk2T<=0){if(xn.filter(M=>M.summoned&&!M.dead).length<10)for(let M=0;M<4;M++){const R=Vo("droneE",r.x+ut(-5,5),r.z+ut(-5,5),1+t.chapterIdx*.3,!0);R.summoned=!0}r.atk2T=6}}else if(v==="hunter"){const y=p<.4;if(r.atkT<=0&&(ki(r.x+Math.sin(h)*2.6,r.z+Math.cos(h)*2.6,h,y?52:44,r.dmg*.9,1.1,3.4),r.atkT=y?1:1.7),r.atk2T<=0){for(const M of[-.16,0,.16])ki(r.x,r.z,h+M,30,r.dmg*.55,.9);r.atk2T=5}r.atkT<=-.01&&y&&(r.spinSpeed=1.6)}else if(v==="core")if(p<.66&&r.phase===1&&(r.phase=2,t.bossPhase(2)),p<.33&&r.phase===2&&(r.phase=3,t.bossPhase(3)),r.phase===1){if(r.atkT<=0){for(let M=0;M<16;M++)ki(r.x,r.z,r.spiralA+M/16*Math.PI*2,14,r.dmg*.5,1,5.5);r.spiralA+=.35,r.atkT=2.6}}else if(r.phase===2){if(r.spiralA+=e*2.6,r.atkT<=0){for(const y of[0,2.1,4.2])ki(r.x,r.z,r.spiralA+y,17,r.dmg*.5,.95,5.5);r.atkT=.14}if(r.atk2T<=0){for(let y=0;y<3;y++){const M=Vo(Td(["droneE","triangle"]),r.x+ut(-8,8),r.z+ut(-8,8),1.6,!0);M.summoned=!0}r.atk2T=7}}else{if(r.atkT<=0){for(let M=0;M<22;M++)ki(r.x,r.z,M/22*Math.PI*2+r.spiralA,18,r.dmg*.55,1.05,5.5);r.spiralA+=.22,r.atkT=1.9}r.atk2T<=0&&(r.telegraph=.5,r.atk2T=4.5)}}function RT(r,e){const t=xn[r];t.dead=!0,xn.splice(r,1),tt.scene.remove(t.mesh),Va(t.x,t.z,t.def.color,t.isBoss?46:12,t.isBoss?16:9,t.size),Nt.boom(t.isBoss),AT(t.x,t.z,t.xp),e.onKill(t),t.isBoss&&(zs=null,e.onBossDown(t))}function nu(r,e){r.dead||(r.hp-=e,r.hitFlash=1)}function Ev(){for(const r of xn)tt.scene.remove(r.mesh);for(const r of Jr)tt.scene.remove(r.mesh);for(const r of Fa)tt.scene.remove(r.mesh);for(const r of Fs)tt.scene.remove(r.mesh);xn.length=0,Jr.length=0,Fa.length=0,Fs.length=0,zs=null}const wv=yv(),H={x:0,z:0,yaw:0,pitch:-.06,vx:0,vz:0,radius:1.5,level:1,xp:0,xpIntoLevel:0,hp:100,stamina:100,statPoints:0,stats:{regen:0,maxhp:0,body:0,bspeed:0,bdmg:0,reload:0,move:0},classId:"basic",cls:null,mesh:null,turret:null,barrels:[],vm:null,vmBarrels:[],drones:[],traps:[],autoTurret:null,barrelCds:[],trapT:0,autoCd:0,autoAngle:0,bobT:0,alive:!0,hurtT:0,recoilKick:0},Ho=[],CT=new Jc(.3,10,10),PT=()=>Ho;function Bs(){const r=H.cls.mods||{};return Math.round((100+20*H.stats.maxhp)*(r.hp||1))}function LT(){const r=H.cls.mods||{};return(18+7*H.stats.body)*(r.body||1)}function DT(){const r=H.cls.mods||{};return(11+1.15*H.stats.move)*(r.move||1)}function Tv(){return 1/(1+.16*H.stats.reload)}function IT(){const r=H.cls.mods||{};return(1+.3*H.stats.bdmg)*(r.bdmg||1)}function NT(){const r=H.cls.mods||{};return(1+.11*H.stats.bspeed)*(r.bspeed||1)}function UT(){return Hh("basic",!0),H.x=0,H.z=30,H.hp=Bs(),H}function Hh(r,e=!1){const t=Go(r);H.classId=r,H.cls=t,H.mesh&&tt.scene.remove(H.mesh);const s=pT(t);H.mesh=s.group,H.turret=s.turret,H.barrels=s.barrels,H.mesh.position.set(H.x,0,H.z),tt.scene.add(H.mesh),H.vm&&tt.camera.remove(H.vm);const o=mT(t);H.vm=o.vm,H.vmBarrels=o.barrels,tt.camera.add(H.vm),H.barrelCds=t.barrels.map(l=>(l.phase||0)*t.reload);for(const l of H.drones)tt.scene.remove(l.mesh);if(H.drones=[],t.droneCount)for(let l=0;l<t.droneCount;l++){const u=new wt(new jo(.5,0),new Mi({color:5234896,emissive:2002818,emissiveIntensity:.5,roughness:.4})),f=new Zo(new Ga({map:wv,color:5234896,transparent:!0,opacity:.55,depthWrite:!1,blending:ns}));f.scale.setScalar(1.6),u.add(f),u.castShadow=!0,tt.scene.add(u),H.drones.push({mesh:u,x:H.x,z:H.z,hp:50,respawn:0,target:null,orbitA:l/t.droneCount*Math.PI*2})}if(H.autoTurret&&(tt.scene.remove(H.autoTurret.mesh),H.autoTurret=null),t.special==="auto"){const l=new Hi,u=new wt(new Tr(.3,.38,.3,10),new Mi({color:15111726,roughness:.5})),f=new wt(new Tr(.13,.16,1.4,8),new Mi({color:15111726,roughness:.5}));f.rotation.x=Math.PI/2,f.position.set(0,.28,.5),l.add(u,f),l.position.y=1.15,tt.scene.add(l),H.autoTurret={mesh:l,cd:0,angle:0}}for(const l of H.traps)tt.scene.remove(l.mesh);H.traps=[],H.hp>0&&(H.hp=Math.min(H.hp,Bs())),e||Nt.evolve()}function Av(r,e,t,s){const o=30*s.s*NT(),l=12*s.d*IT(),u=bn(.3*s.w,.22,.85),f=s.w>=1.8?16765286:5688575,h=new wt(CT,new Ti({color:f}));h.scale.setScalar(u/.3),h.position.set(r,1,e);const p=new Zo(new Ga({map:wv,color:f,transparent:!0,opacity:.8,depthWrite:!1,blending:ns}));p.scale.setScalar(2.4*(u/.3)),h.add(p),tt.scene.add(h);const v=bn(52/o,1.4,3.4);Ho.push({mesh:h,x:r,z:e,vx:Math.sin(t)*o,vz:Math.cos(t)*o,dmg:l,r:u,life:v,spin:ut(0,6)}),Nt.shoot(bn(1-s.w/3,0,1)),H.recoilKick=Math.min(1,H.recoilKick+(s.w>=1.8?.9:.22))}function FT(r,e){const t=H.cls,s=Tv();for(let o=0;o<t.barrels.length;o++){const l=t.barrels[o];if(H.barrelCds[o]-=r,!e||H.barrelCds[o]>0)continue;H.barrelCds[o]=t.reload*s;const u=H.yaw+Ih.degToRad(l.a),f=l.n||1;for(let h=0;h<f;h++){const p=(l.spread||0)+(f>1?.1:0),v=u+ut(-p,p),_=l.off||0,g=Math.cos(u)*_,y=-Math.sin(u)*_;Av(H.x+Math.sin(u)*1.6+g,H.z+Math.cos(u)*1.6+y,v,l)}if(H.barrels[o]&&(H.barrels[o].recoil=1),H.vmBarrels[o]&&(H.vmBarrels[o].recoil=1),l.recoil){const h=u+Math.PI;H.vx+=Math.sin(h+Math.PI)*6,H.vz+=Math.cos(h+Math.PI)*6}}}function OT(r,e){const t=H.cls,s=t.trapCount||0;if(H.trapT-=r,e&&s&&H.trapT<=0){if(H.trapT=.55,H.traps.length>=s){const h=H.traps.shift();tt.scene.remove(h.mesh)}const o=t.trapPower||1,l=new wt(new Qc(.62,.9,4),new Mi({color:16762731,emissive:9067024,emissiveIntensity:.4,roughness:.5})),u=H.x+Math.sin(H.yaw)*2.4,f=H.z+Math.cos(H.yaw)*2.4;l.position.set(u,.45,f),l.castShadow=!0,tt.scene.add(l),H.traps.push({mesh:l,x:u,z:f,hp:90*o,dmg:42*o,life:13,r:.9,flash:0}),Nt.place()}for(let o=H.traps.length-1;o>=0;o--){const l=H.traps[o];l.life-=r,l.flash=Math.max(0,l.flash-r*4),l.mesh.rotation.y+=r*(.5+l.flash*8),l.mesh.position.y=.45+l.flash*.1,(l.life<=0||l.hp<=0)&&(Va(l.x,l.z,16762731,6,5,.5),tt.scene.remove(l.mesh),H.traps.splice(o,1))}}function kT(r){for(const e of H.drones){if(e.hp<=0){e.mesh.visible=!1,e.respawn-=r,e.respawn<=0&&(e.hp=50,e.mesh.visible=!0);continue}e.orbitA+=r*1.9;let t=null,s=1156;for(const v of xn){if(v.dead)continue;const _=v.x-e.x,g=v.z-e.z,y=_*_+g*g;y<s&&(s=y,t=v)}let o,l,u;t?(o=t.x,l=t.z,u=25):(o=H.x+Math.sin(e.orbitA)*5.5,l=H.z+Math.cos(e.orbitA)*5.5,u=20);const f=o-e.x,h=l-e.z,p=Math.sqrt(f*f+h*h)||1;e.x+=f/p*u*r,e.z+=h/p*u*r,e.mesh.position.set(e.x,1.2+Math.sin(e.orbitA*2)*.25,e.z),e.mesh.rotation.y+=r*5,t&&s<(t.radius+.7)**2&&(nu(t,60*r),e.hp-=14*r)}}function zT(r){const e=H.autoTurret;if(!e)return;e.mesh.position.set(H.x,1.15,H.z),e.cd-=r;let t=null,s=3364;for(const o of xn){if(o.dead)continue;const l=o.x-H.x,u=o.z-H.z,f=l*l+u*u;f<s&&(s=f,t=o)}if(t){const o=Math.atan2(t.x-H.x,t.z-H.z);e.angle+=Math.atan2(Math.sin(o-e.angle),Math.cos(o-e.angle))*Math.min(1,r*8),e.cd<=0&&(e.cd=.75*Tv(),Av(H.x+Math.sin(e.angle)*1.4,H.z+Math.cos(e.angle)*1.4,e.angle+ut(-.03,.03),{s:1.1,d:.75,w:.8}))}e.mesh.rotation.y=e.angle}function BT(r,e,t){if(!H.alive)return;H.yaw=e.yaw,H.pitch=bn(e.pitch,-.5,.42);const s=DT()*(e.boost&&H.stamina>0?1.45:1);e.boost&&(e.mx||e.mz)?H.stamina=Math.max(0,H.stamina-26*r):H.stamina=Math.min(100,H.stamina+17*r);let o=0,l=0;(e.keys.KeyW||e.keys.ArrowUp)&&(o+=Math.sin(H.yaw),l+=Math.cos(H.yaw)),(e.keys.KeyS||e.keys.ArrowDown)&&(o-=Math.sin(H.yaw),l-=Math.cos(H.yaw)),(e.keys.KeyA||e.keys.ArrowLeft)&&(o+=Math.cos(H.yaw),l-=Math.sin(H.yaw)),(e.keys.KeyD||e.keys.ArrowRight)&&(o-=Math.cos(H.yaw),l+=Math.sin(H.yaw));const u=Math.sqrt(o*o+l*l);u>0&&(o/=u,l/=u),e.mx=o,e.mz=l,H.vx+=(o*s-H.vx)*Math.min(1,r*9),H.vz+=(l*s-H.vz)*Math.min(1,r*9),H.x+=H.vx*r,H.z+=H.vz*r,H.x=bn(H.x,-bt+H.radius,bt-H.radius),H.z=bn(H.z,-bt+H.radius,bt-H.radius);for(const _ of tt.obstacles){const g=bn(H.x,_.x-_.hw,_.x+_.hw),y=bn(H.z,_.z-_.hd,_.z+_.hd),M=H.x-g,R=H.z-y,S=M*M+R*R;if(S<H.radius*H.radius&&S>1e-4){const x=Math.sqrt(S);H.x=g+M/x*H.radius,H.z=y+R/x*H.radius}}const f=1.2+1.5*H.stats.regen;H.hp=Math.min(Bs(),H.hp+f*r),H.hurtT=Math.max(0,H.hurtT-r),FT(r,e.firing),OT(r,e.placing),kT(r),zT(r);for(let _=Ho.length-1;_>=0;_--){const g=Ho[_];g.x+=g.vx*r,g.z+=g.vz*r,g.life-=r,g.spin+=r*10,g.mesh.position.set(g.x,1+Math.sin(g.spin)*.02,g.z);let y=g.life<=0||Math.abs(g.x)>bt-.5||Math.abs(g.z)>bt-.5;if(!y){for(const M of tt.obstacles)if(Math.abs(g.x-M.x)<M.hw+g.r&&Math.abs(g.z-M.z)<M.hd+g.r){y=!0;break}}y&&(Va(g.x,g.z,5688575,4,4,1),tt.scene.remove(g.mesh),Ho.splice(_,1))}H.mesh.position.set(H.x,0,H.z),H.mesh.rotation.y=H.yaw;for(const _ of H.barrels)_.recoil=Math.max(0,_.recoil-r*6),_.mesh.position.z=_.baseZ-_.recoil*.34;for(const _ of H.vmBarrels)_.recoil=Math.max(0,_.recoil-r*6),_.mesh.position.z=_.baseZ+_.recoil*.3;const h=u>0;h&&(H.bobT+=r*(e.boost?13:9));const p=h?Math.sin(H.bobT)*.055:0,v=tt.camera;v.position.set(H.x,2.5+p,H.z),v.rotation.y=H.yaw+Math.PI,v.rotation.x=H.pitch+H.recoilKick*.045,H.recoilKick=Math.max(0,H.recoilKick-r*5),H.vm&&(H.vm.position.x=Math.sin(H.bobT*.5)*(h?.035:0),H.vm.position.y=-1.15+Math.abs(Math.cos(H.bobT))*(h?.03:0)-H.recoilKick*.05),H.hp<=0&&H.alive&&(H.alive=!1,Va(H.x,H.z,4171775,40,14,1.2),t.onDeath())}function bv(r,e){H.alive&&(H.hp-=r,H.hurtT=.4,r>4&&Nt.hurt(),e.shake(Math.min(1,r/40)))}function VT(r,e){for(H.xp+=r,H.xpIntoLevel+=r;H.level<Dx;){const t=Dg(H.level);if(H.xpIntoLevel<t)break;H.xpIntoLevel-=t,H.level++,H.statPoints++,H.hp=Math.min(Bs(),H.hp+Bs()*.3),Nt.level(),Va(H.x,H.z,16769899,22,11,1.4),e.onLevelUp(H.level)}}function Rv(r){return H.statPoints<=0||H.stats[r]>=yh?!1:(H.stats[r]++,H.statPoints--,r==="maxhp"&&(H.hp+=20),Nt.click(),!0)}function Cv(){H.level=1,H.xp=0,H.xpIntoLevel=0,H.statPoints=0,H.stats={regen:0,maxhp:0,body:0,bspeed:0,bdmg:0,reload:0,move:0},H.x=0,H.z=30,H.vx=0,H.vz=0,H.yaw=0,H.pitch=-.06,H.stamina=100,H.alive=!0,H.hurtT=0,Hh("basic",!0),H.hp=Bs()}const HT=r=>document.getElementById(r),Be={};let _n={},Ns=null;function GT(r){_n=r;const e=["hud","chapter-label","wave-label","score-val","kills-val","boss-wrap","boss-name","boss-bar-fill","boss-hp-text","hp-fill","hp-text","stamina-fill","level-badge","class-name","xp-fill","level-text","stats-panel","stat-points","stats-rows","minimap","crosshair","notify-stack","vignette","hit-flash","boss-warning","boss-warning-name","screen-start","btn-start","screen-story","story-tag","story-title","story-text","btn-story-next","screen-class","class-title","class-hint","class-grid","screen-pause","btn-resume","btn-restart-pause","btn-reclass","pause-mute","btn-exit-menu","screen-settings","settings-music","settings-sfx","settings-sens","settings-save","settings-close","screen-over","over-stats","btn-restart","screen-win","win-stats","btn-freeplay","btn-restart-win","btn-mute","btn-pause-hud"];for(const t of e)Be[t]=HT(t);XT(),Be["btn-start"].onclick=()=>{Fc(),Nt.click(),_n.start()},Be["btn-story-next"].onclick=()=>{Nt.click(),_n.storyNext()},Be["btn-resume"].onclick=()=>{Nt.click(),_n.resume()},Be["btn-settings-pause"].onclick=()=>{Nt.click(),_n.showSettings(!0)},Be["btn-restart-pause"].onclick=()=>{Nt.click(),_n.restart()},Be["btn-reclass"].onclick=()=>{Nt.click(),_n.reclass()},Be["btn-restart"].onclick=()=>{Nt.click(),_n.restart()},Be["btn-restart-win"].onclick=()=>{Nt.click(),_n.restart()},Be["btn-freeplay"].onclick=()=>{Nt.click(),_n.freeplay()},Be["btn-mute"].onclick=()=>{Fc(),Ag(),wd(),Nt.click()},Be["btn-pause-hud"].onclick=()=>{Nt.click(),_n.pauseToggle()},Be["pause-mute"].onclick=()=>{Fc(),Ag(),wd()},Be["btn-exit-menu"].onclick=()=>{Nt.click(),_n.exitToMenu()},Be["settings-save"].onclick=()=>{WT(),Nt.click(),Cg("screen-settings"),_n.resumeFromSettings&&_n.resumeFromSettings()},Be["settings-close"].onclick=()=>{Nt.click(),Cg("screen-settings"),_n.resumeFromSettings&&_n.resumeFromSettings()},wd(),Pv()}function wd(){const r=vT();Be["btn-mute"].textContent=r?"Звук: выкл":"Звук: вкл",Be["pause-mute"].textContent=r?"Включить звук":"Выключить звук"}let _r={musicVol:.5,sfxVol:.7,sensitivity:.0022};function Pv(){try{const r=localStorage.getItem("steel-settings");r&&(_r=JSON.parse(r))}catch{}Be["settings-music"]&&(Be["settings-music"].value=_r.musicVol),Be["settings-sfx"]&&(Be["settings-sfx"].value=_r.sfxVol),Be["settings-sens"]&&(Be["settings-sens"].value=_r.sensitivity)}function WT(){var r,e,t;_r.musicVol=((r=Be["settings-music"])==null?void 0:r.value)||.5,_r.sfxVol=((e=Be["settings-sfx"])==null?void 0:e.value)||.7,_r.sensitivity=((t=Be["settings-sens"])==null?void 0:t.value)||.0022;try{localStorage.setItem("steel-settings",JSON.stringify(_r))}catch{}_n.updateSensitivity&&_n.updateSensitivity(_r.sensitivity)}function XT(){const r=Be["stats-rows"];r.innerHTML="",Ig.forEach((e,t)=>{var o,l;const s=document.createElement("div");s.className="stat-row",s.innerHTML=`
      <span class="stat-key">${t+1}</span>
      <span class="stat-name">${e.name}</span>
      <span class="stat-pips">${Array.from({length:yh},()=>"<i></i>").join("")}</span>
      <button class="stat-btn" title="Улучшить">+</button>
    `,s.querySelector(".stat-btn").onclick=()=>_n.upgrade(e.key),(l=(o=s.querySelector(".stat-row-hit, .stat-name"))==null?void 0:o.addEventListener)==null||l.call(o,"click",()=>{}),r.appendChild(s)})}function qT(r){const e=Be["stats-rows"].children;Ig.forEach((t,s)=>{const o=e[s];if(!o)return;o.querySelectorAll(".stat-pips i").forEach((h,p)=>h.classList.toggle("on",p<r.stats[t.key]));const u=o.querySelector(".stat-btn"),f=r.statPoints>0&&r.stats[t.key]<yh;u.classList.toggle("ready",f),u.disabled=!f}),Be["stat-points"].textContent=r.statPoints,Be["stats-panel"].classList.toggle("has-points",r.statPoints>0)}function YT(r,e){const t=e.maxhp;Be["hp-fill"].style.width=`${Math.max(0,r.hp/t*100)}%`,Be["hp-text"].textContent=`${Math.max(0,Math.ceil(r.hp))} / ${t}`,Be["stamina-fill"].style.width=`${r.stamina}%`;const s=Dg(r.level);Be["xp-fill"].style.width=`${Math.min(100,r.xpIntoLevel/s*100)}%`,Be["level-text"].textContent=`Уровень ${r.level}`,Be["level-badge"].textContent=r.level,Be["class-name"].textContent=e.className,Be["score-val"].textContent=e.score.toLocaleString("ru-RU"),Be["kills-val"].textContent=e.kills,Be["chapter-label"].textContent=e.chapterLabel,Be["wave-label"].textContent=e.waveLabel,Be["hit-flash"].style.opacity=r.hurtT>0?Math.min(1,r.hurtT*2.4):0;const o=r.hp/t<.3;Be.vignette.style.opacity=o?.55+Math.sin(performance.now()/180)*.2:Math.min(.5,r.hurtT),qT(r)}function $T(r){Be["boss-wrap"].classList.add("show"),Be["boss-name"].textContent=r.name,Be["boss-bar-fill"].style.width=`${Math.max(0,r.hp/r.maxhp*100)}%`,Be["boss-hp-text"].textContent=`${Math.max(0,Math.ceil(r.hp)).toLocaleString("ru-RU")} / ${Math.ceil(r.maxhp).toLocaleString("ru-RU")}`}function KT(){Be["boss-wrap"].classList.remove("show")}function ZT(r){Be["boss-warning-name"].textContent=r,Be["boss-warning"].classList.add("show"),setTimeout(()=>Be["boss-warning"].classList.remove("show"),2600)}function Bi(r,e="info"){const t=Be["notify-stack"],s=document.createElement("div");for(s.className=`notify ${e}`,s.textContent=r,t.appendChild(s);t.children.length>4;)t.removeChild(t.firstChild);setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},2600)}function Ai(){["screen-start","screen-story","screen-class","screen-pause","screen-over","screen-win","screen-settings"].forEach(r=>Be[r].classList.remove("show"))}function Cg(r){Be[r].classList.remove("show")}function Gs(r){Be[r].classList.add("show")}function Yc(r){Be.hud.classList.toggle("hidden",!r)}function jT(r=!1){Pv(),Ai(),Gs("screen-settings")}let $o=[],vh=null,Lv="";function Dv(r,e){$o=[...r.story],vh=e,Be["story-tag"].textContent=`${r.tag} · ${r.title}`,Be["story-title"].textContent="Передача из штаба",Ai(),Gs("screen-story"),Iv()}function Iv(){const r=$o.shift();Lv=r;const e=Be["story-text"];clearInterval(Ns),e.textContent="";let t=0;Ns=setInterval(()=>{t++,e.textContent=r.slice(0,t),t>=r.length&&(clearInterval(Ns),Ns=null,Be["btn-story-next"].textContent=$o.length?"Дальше →":"В бой")},16)}function QT(){if(Ns){clearInterval(Ns),Ns=null,Be["story-text"].textContent=Lv,Be["btn-story-next"].textContent=$o.length?"Дальше →":"В бой";return}if($o.length>0){Iv();return}Ai(),vh&&vh()}function JT(r,e,t,s){Be["class-title"].textContent=e,Be["class-hint"].textContent=t;const o=Be["class-grid"];o.innerHTML="",r.forEach(l=>{const u=document.createElement("button");u.className="class-card",u.innerHTML=`
      <span class="class-tier">Тир ${l.tier}</span>
      <span class="class-preview">${gT(l)}</span>
      <span class="class-cname">${l.name}</span>
      <span class="class-cdesc">${l.desc}</span>
    `,u.onclick=()=>{Nt.evolve(),s(l.id)},o.appendChild(u)}),Ai(),Gs("screen-class")}function eA(r){Be["over-stats"].innerHTML=Nv(r),Ai(),Gs("screen-over")}function tA(r){Be["win-stats"].innerHTML=Nv(r),Ai(),Gs("screen-win")}function Nv(r){return`
    <div class="end-row"><span>Очки</span><b>${r.score.toLocaleString("ru-RU")}</b></div>
    <div class="end-row"><span>Уровень</span><b>${r.level}</b></div>
    <div class="end-row"><span>Уничтожено целей</span><b>${r.kills}</b></div>
    <div class="end-row"><span>Время в бою</span><b>${r.time}</b></div>
    <div class="end-row"><span>Рекорд</span><b>${r.best.toLocaleString("ru-RU")}</b></div>
  `}function nA(r){const e=Be.minimap;if(!e)return;const t=e.getContext("2d"),s=e.width,l=s/(118*2);t.clearRect(0,0,s,s),t.fillStyle="rgba(13,20,33,0.82)",t.fillRect(0,0,s,s),t.strokeStyle="rgba(87,104,143,0.6)",t.strokeRect(1,1,s-2,s-2);const u=(p,v)=>[s/2+p*l,s/2+v*l];t.fillStyle="rgba(87,104,143,0.45)";for(const p of r.obstacles){const[v,_]=u(p.x,p.z);t.fillRect(v-p.hw*l,_-p.hd*l,p.hw*2*l,p.hd*2*l)}for(const p of r.enemies){const[v,_]=u(p.x,p.z);t.fillStyle=p.isBoss?"#ff4757":"#ffb054";const g=p.isBoss?4:2;t.fillRect(v-g/2,_-g/2,g,g)}const[f,h]=u(r.px,r.pz);t.save(),t.translate(f,h),t.rotate(-r.yaw+Math.PI),t.fillStyle="#4dd0ff",t.beginPath(),t.moveTo(0,-5),t.lineTo(3.6,4),t.lineTo(-3.6,4),t.closePath(),t.fill(),t.restore()}let Pg=!1;function iu(){try{const r=tt.renderer.domElement.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch{}}const me={state:"menu",chapterIdx:0,waveIdx:0,spawnQueue:[],spawnT:0,score:0,kills:0,playTime:0,shake:0,menuT:0,pendingBoss:null,transT:0,freeT:0,endlessLvl:0},It={keys:{},yaw:0,pitch:-.06,firing:!1,placing:!1,boost:!1,mouseHeld:!1,mx:0,mz:0,sensitivity:.0022};function iA(r){window.addEventListener("keydown",e=>{if(It.keys[e.code]=!0,e.code.startsWith("Digit")){const t=parseInt(e.code.slice(5),10);t>=1&&t<=7&&rA(t-1)}(e.code==="KeyP"||e.code==="Escape")&&(me.state==="playing"||me.state==="free"?Uv():me.state==="paused"&&Oc()),e.code==="Space"&&e.preventDefault()}),window.addEventListener("keyup",e=>{It.keys[e.code]=!1}),r.addEventListener("mousedown",e=>{Fc(),!(me.state!=="playing"&&me.state!=="free")&&(e.button===0&&(It.firing=!0,It.mouseHeld=!0,document.pointerLockElement||iu()),e.button===2&&(It.placing=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(It.firing=!1,It.mouseHeld=!1),e.button===2&&(It.placing=!1)}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{if(document.pointerLockElement===r||It.mouseHeld)It.yaw-=(e.movementX||0)*It.sensitivity,It.pitch=bn(It.pitch-(e.movementY||0)*It.sensitivity,-.5,.42);else{const s=r.getBoundingClientRect(),o=s.left+s.width/2,l=s.top+s.height/2,u=e.clientX-o,f=e.clientY-l,h=Math.atan2(u,f),p=bn(-f/(s.height/2),-.5,.42)*.5;It.yaw+=(h-It.yaw)*.15,It.pitch+=(p-It.pitch)*.15}}),document.addEventListener("pointerlockchange",()=>{}),It.boostRef=()=>It.keys.ShiftLeft||It.keys.ShiftRight}function rA(r){Rv(["regen","maxhp","body","bspeed","bdmg","reload","move"][r])}function Uv(){me.state!=="playing"&&me.state!=="free"||(me.prevState=me.state,me.state="paused",document.pointerLockElement&&document.exitPointerLock(),Gs("screen-pause"))}function Oc(){me.state==="paused"&&(Ai(),me.state=me.prevState||"playing",iu())}function sA(){me.state="menu",Ev(),Cv(),Gt.x=0,Gt.z=30,Gt.mesh.position.set(0,0,30),It.yaw=0,It.pitch=-.06,document.pointerLockElement&&document.exitPointerLock(),Ai(),Yc(!1),Gs("screen-start")}function Lg(){Ev(),Cv(),me.chapterIdx=0,me.waveIdx=0,me.score=0,me.kills=0,me.playTime=0,me.pendingBoss=null,me.bossDown=!1,me.transT=0,me.freeT=3,me.endlessLvl=0,It.yaw=0,It.pitch=-.06,Ai(),Yc(!0),me.state="story",Dv(es[0],()=>Fv())}function Fv(){me.waveIdx=0,me.state="playing",Bi(`${es[me.chapterIdx].tag}: ${es[me.chapterIdx].title}`,"chapter"),Ov()}function Ov(){const e=es[me.chapterIdx].waves[me.waveIdx];me.spawnQueue=[];for(const t in e)for(let s=0;s<e[t];s++)me.spawnQueue.push(t);for(let t=me.spawnQueue.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[me.spawnQueue[t],me.spawnQueue[s]]=[me.spawnQueue[s],me.spawnQueue[t]]}me.spawnT=.4}function aA(){const r=es[me.chapterIdx];if(!me.pendingBoss&&!(me.spawnQueue.length>0||xn.length>0||zs))if(me.waveIdx<r.waves.length-1)me.waveIdx++,Bi(`Волна ${me.waveIdx+1} из ${r.waves.length}`,"wave"),Ov();else{const e=r.bossKey;me.pendingBoss=e,ZT(Mh[e].name),Nt.alarm(),me.transT=1.6}}const Cc={get px(){return Gt.x},get pz(){return Gt.z},get player(){return{radius:Gt.radius}},get chapterIdx(){return me.chapterIdx},contactDamage(r,e){me.state!=="playing"&&me.state!=="free"||(bv(r.dmg*e*1.4,{shake:$c}),nu(r,LT()*e*1.6))},onKill(r){me.kills++,r.isBoss},onBossDown(){KT(),Bi("Босс уничтожен. Сектор зачищен!","good"),me.transT=1.6,me.bossDown=!0},onDeath(){me.state="over",Nt.over(),document.pointerLockElement&&document.exitPointerLock(),zv(),eA(Bv())},onLevelUp(r){Bi(`Уровень ${r}! +1 очко системы`,"level"),r===15&&(Bi("Доступна эволюция танка — откройте меню (Esc)","good"),me.tier2Ready=!0),r===30&&Go(Gt.classId).tier===2&&(Bi("Доступна эволюция 3-го тира!","good"),me.tier3Ready=!0)},bossPhase(r){Bi(`Ядро переходит в фазу ${r}!`,"bad"),Nt.alarm(),$c(.8)}};let Gt=null;function $c(r){me.shake=Math.min(1.2,me.shake+r)}function kv(){try{return+(localStorage.getItem("steel-best")||0)}catch{return 0}}function zv(){try{me.score>kv()&&localStorage.setItem("steel-best",String(me.score))}catch{}}function Bv(){const r=Math.max(me.score,kv()),e=Math.floor(me.playTime/60),t=Math.floor(me.playTime%60);return{score:me.score,level:Gt.level,kills:me.kills,time:`${e}:${t.toString().padStart(2,"0")}`,best:r}}function oA(){const r=PT();for(let e=r.length-1;e>=0;e--){const t=r[e];let s=!1;for(const o of xn){if(o.dead)continue;const l=t.x-o.x,u=t.z-o.z,f=t.r+o.radius;if(l*l+u*u<f*f){nu(o,t.dmg),Nt.hit(),Va(t.x,t.z,12577023,3,4,1),$c(.05),t.pierce>0?(t.pierce--,t.dmg*=.75):(s=!0,tt.scene.remove(t.mesh),r.splice(e,1));break}}}}function lA(){for(const r of Gt.traps)for(const e of xn){if(e.dead)continue;const t=r.x-e.x,s=r.z-e.z,o=r.r+e.radius;t*t+s*s<o*o&&(nu(e,r.dmg*.016*2.4),r.hp-=(e.isBoss?26:8)*.016*10,r.flash=1)}}function cA(r){const e=Gt,t=r.x-e.x,s=r.z-e.z;if(t*t+s*s<(r.r+e.radius)**2)return bv(r.dmg,{shake:$c}),!0;for(const o of e.traps){const l=r.x-o.x,u=r.z-o.z;if(l*l+u*u<(r.r+o.r)**2)return o.hp-=r.dmg,o.flash=1,!0}return!1}function Vv(r=null){const e=Gt.level,t=Go(Gt.classId);let s,o,l;if(r===3||t.tier===2&&e>=30)s=S0(t.id),s.length||(s=M0()),o="Эволюция · Тир 3",l="Выберите финальную форму машины";else if(e>=15)s=M0(),o="Эволюция · Тир 2",l=e>=30?"Выберите ветку развития (затем — тир 3)":"Выберите ветку развития";else{Bi("Эволюция доступна с 15 уровня","bad");return}const u=me.state;me.state="paused",document.pointerLockElement&&document.exitPointerLock(),JT(s,o,l,f=>{Gt.applyClassFn(f),Ai();const h=Go(f);Bi(`Класс: ${h.name}`,"good"),e>=30&&h.tier===2&&S0(f).length?Vv(3):(me.state=u==="paused"?"playing":u,(me.state==="playing"||me.state==="free")&&iu())})}let _h=0;function Hv(r){const e=bn((r-_h)/1e3,.001,.05);if(_h=r,me.state==="menu"){me.menuT+=e,Rg(e,{...Cc,px:99999,pz:99999,contactDamage:()=>{},onKill:()=>{},onBossDown:()=>{},bossPhase:()=>{}}),Ed(e),bg(e,99999,99999,()=>{});const t=17;tt.camera.position.set(Math.sin(me.menuT*.22)*t,8.5,Math.cos(me.menuT*.22)*t),tt.camera.lookAt(0,1.2,0),xn.length<12&&Math.random()<e*.8&&Md(Td(["square","square","triangle","pentagon"]),1)}else if(me.state==="playing"||me.state==="free"){if(me.playTime+=e,It.boost=It.boostRef(),BT(e,It,Cc),Rg(e,Cc),TT(e,cA),oA(),lA(),bg(e,Gt.x,Gt.z,t=>{me.score+=Math.round(t),VT(Math.round(t),Cc)}),Ed(e),me.state==="playing")me.spawnT-=e,me.spawnQueue.length&&me.spawnT<=0&&xn.filter(t=>!t.isBoss).length<16&&(Md(me.spawnQueue.pop(),1+me.chapterIdx*.3),me.spawnT=.7),aA(),me.pendingBoss?(me.transT-=e,me.transT<=0&&(MT(me.pendingBoss,me.chapterIdx),Bi(`${Mh[me.pendingBoss].name} вышел на арену`,"bad"),me.pendingBoss=null)):me.bossDown&&(me.transT-=e,me.transT<=0&&(me.bossDown=!1,me.chapterIdx>=es.length-1?(me.state="win",Nt.win(),zv(),document.pointerLockElement&&document.exitPointerLock(),tA(Bv())):(me.chapterIdx++,me.state="story",Dv(es[me.chapterIdx],()=>Fv()))));else if(me.freeT-=e,me.freeT<=0&&xn.length<18){me.endlessLvl+=.12;const t=["square","triangle","diamond","pentagon","hexagon","droneE","tankE"],s=Math.min(5,1+Math.floor(me.endlessLvl/2));for(let o=0;o<s;o++)Md(Td(t),1+me.endlessLvl*.25);me.freeT=5}zs&&$T(zs),YT(Gt,uA()),nA({px:Gt.x,pz:Gt.z,yaw:Gt.yaw,enemies:xn,obstacles:tt.obstacles}),me.shake>.001?(me.shake*=Math.pow(.0018,e),tt.camera.position.x+=ut(-1,1)*me.shake*.22,tt.camera.position.y+=ut(-1,1)*me.shake*.16,tt.camera.rotation.z=ut(-1,1)*me.shake*.02):tt.camera.rotation.z=0}else me.state==="story"&&(Ed(e),tt.camera.position.set(Gt.x,2.5+Math.sin(performance.now()/900)*.05,Gt.z),tt.camera.rotation.set(It.pitch,It.yaw+Math.PI,0));hT(e),requestAnimationFrame(Hv)}function uA(){const r=es[me.chapterIdx];let e="Свободная игра",t="Полигон открыт";return me.state!=="free"&&(t=`${r.tag}: ${r.title}`,e=zs?"БОСС":me.pendingBoss?"Приближение босса…":`Волна ${me.waveIdx+1} / ${r.waves.length}`),{maxhp:Bs(),className:Go(Gt.classId).name,score:me.score,kills:me.kills,chapterLabel:t,waveLabel:e}}function fA(r){Pg||(Pg=!0,dT(r),Gt=UT(),Gt.applyClassFn=e=>Hh(e),iA(r),GT({start:Lg,storyNext:()=>QT(),resume:Oc,restart:()=>{Ai(),Lg()},reclass:()=>Vv(),freeplay:()=>{Ai(),Yc(!0),me.state="free",me.endlessLvl=0,Bi("Свободная игра: волны без конца","chapter"),iu()},upgrade:e=>{Rv(e)},pauseToggle:()=>{me.state==="paused"?Oc():Uv()},exitToMenu:()=>{Nt.click(),sA()},showSettings:e=>{jT(e)},resumeFromSettings:()=>{me.state==="paused"||Oc()},updateSensitivity:e=>{It.sensitivity=e}}),Gt.x=0,Gt.z=0,Gt.mesh.position.set(0,0,0),Yc(!1),_h=performance.now(),requestAnimationFrame(Hv))}function dA(){const r=y0.useRef(null);return y0.useEffect(()=>{r.current&&fA(r.current)},[]),ee.jsxs("div",{id:"app",children:[ee.jsx("canvas",{ref:r,id:"game-canvas"}),ee.jsxs("div",{id:"hud",className:"hidden",children:[ee.jsxs("div",{id:"crosshair",children:[ee.jsx("span",{className:"ch-dot"}),ee.jsx("span",{className:"ch-t"}),ee.jsx("span",{className:"ch-b"}),ee.jsx("span",{className:"ch-l"}),ee.jsx("span",{className:"ch-r"})]}),ee.jsxs("div",{id:"hud-tl",className:"hud-block",children:[ee.jsx("div",{id:"chapter-label",children:"—"}),ee.jsx("div",{id:"wave-label",children:"—"}),ee.jsxs("div",{className:"hud-metrics",children:[ee.jsxs("span",{className:"metric",children:[ee.jsx("b",{id:"score-val",children:"0"})," очков"]}),ee.jsxs("span",{className:"metric",children:[ee.jsx("b",{id:"kills-val",children:"0"})," целей"]})]})]}),ee.jsxs("div",{id:"hud-tr",className:"hud-block",children:[ee.jsx("button",{id:"btn-mute",className:"hud-btn",children:"Звук: вкл"}),ee.jsx("button",{id:"btn-pause-hud",className:"hud-btn",children:"Пауза [Esc]"})]}),ee.jsxs("div",{id:"boss-wrap",children:[ee.jsx("div",{id:"boss-name",children:"—"}),ee.jsx("div",{id:"boss-bar",children:ee.jsx("div",{id:"boss-bar-fill"})}),ee.jsx("div",{id:"boss-hp-text",children:"—"})]}),ee.jsxs("div",{id:"boss-warning",children:[ee.jsx("span",{className:"bw-sub",children:"внимание"}),ee.jsx("span",{id:"boss-warning-name",children:"БОСС"}),ee.jsx("span",{className:"bw-sub",children:"обнаружен на арене"})]}),ee.jsxs("div",{id:"stats-panel",className:"hud-block",children:[ee.jsxs("div",{className:"sp-head",children:[ee.jsx("span",{className:"sp-title",children:"Системы машины"}),ee.jsxs("span",{className:"sp-points",children:["Очки: ",ee.jsx("b",{id:"stat-points",children:"0"})]})]}),ee.jsx("div",{id:"stats-rows"})]}),ee.jsx("div",{id:"minimap-wrap",className:"hud-block",children:ee.jsx("canvas",{id:"minimap",width:"150",height:"150"})}),ee.jsxs("div",{id:"hud-bottom",children:[ee.jsxs("div",{id:"bl-cluster",style:{marginLeft:"40px"},children:[ee.jsx("div",{id:"level-badge",children:"1"}),ee.jsxs("div",{id:"bl-bars",children:[ee.jsxs("div",{id:"hp-bar",children:[ee.jsx("div",{id:"hp-fill"}),ee.jsx("span",{id:"hp-text",children:"100 / 100"})]}),ee.jsx("div",{id:"stamina-bar",children:ee.jsx("div",{id:"stamina-fill"})}),ee.jsx("div",{id:"class-name",children:"Базовый танк"})]})]}),ee.jsxs("div",{id:"xp-bar",children:[ee.jsx("div",{id:"xp-fill"}),ee.jsx("span",{id:"level-text",children:"Уровень 1"})]})]}),ee.jsx("div",{id:"notify-stack"})]}),ee.jsx("div",{id:"hit-flash"}),ee.jsx("div",{id:"vignette"}),ee.jsx("div",{id:"screen-start",className:"screen show",children:ee.jsxs("div",{className:"start-grid",children:[ee.jsxs("div",{className:"start-main",children:[ee.jsx("div",{className:"start-tag",children:"// PvE-кампания · одиночный режим"}),ee.jsxs("h1",{className:"start-title",children:["СТАЛЬНОЙ",ee.jsx("br",{}),ee.jsx("span",{children:"ПОЛИГОН"})]}),ee.jsx("p",{className:"start-lore",children:"Учебный полигон «ГЕНЕЗИС» вышел из-под контроля: мишени эволюционируют, машины прошлых кадетов перепрошиты, а в центре арены бьётся Ядро. Сядь в танк, прокачай его до финальной эволюции и зачисти все шесть секторов."}),ee.jsxs("div",{className:"start-facts",children:[ee.jsxs("span",{children:[ee.jsx("b",{children:"6"})," секторов кампании"]}),ee.jsxs("span",{children:[ee.jsx("b",{children:"6"})," боссов"]}),ee.jsxs("span",{children:[ee.jsx("b",{children:"10"})," веток развития"]}),ee.jsxs("span",{children:[ee.jsx("b",{children:"30"})," эволюций танка"]})]}),ee.jsx("button",{id:"btn-start",className:"btn-primary",children:"Начать зачистку"}),ee.jsx("div",{className:"start-hint",children:"Клик по арене захватывает мышь · Esc — пауза"})]}),ee.jsxs("div",{className:"start-side",children:[ee.jsxs("div",{className:"side-panel",children:[ee.jsx("div",{className:"side-head",children:"Боевой устав"}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("kbd",{children:"W A S D"}),ee.jsx("span",{children:"движение"})]}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("kbd",{children:"Мышь"}),ee.jsx("span",{children:"наведение · ЛКМ — огонь"})]}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("kbd",{children:"Shift"}),ee.jsx("span",{children:"форсаж (тратит энергию)"})]}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("kbd",{children:"ПКМ"}),ee.jsx("span",{children:"мины (для Инженера)"})]}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("kbd",{children:"1–7"}),ee.jsx("span",{children:"прокачка систем"})]}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("kbd",{children:"Esc / P"}),ee.jsx("span",{children:"пауза и эволюция"})]})]}),ee.jsxs("div",{className:"side-panel",children:[ee.jsx("div",{className:"side-head",children:"Досье на цели"}),ee.jsxs("div",{className:"foe",children:[ee.jsx("i",{style:{background:"#ffd166"}}),ee.jsx("span",{children:"Квадрат — пушечное мясо"})]}),ee.jsxs("div",{className:"foe",children:[ee.jsx("i",{style:{background:"#ff5d5d"}}),ee.jsx("span",{children:"Треугольник — таранит"})]}),ee.jsxs("div",{className:"foe",children:[ee.jsx("i",{style:{background:"#ff9f43"}}),ee.jsx("span",{children:"Ромб — стреляет"})]}),ee.jsxs("div",{className:"foe",children:[ee.jsx("i",{style:{background:"#6f8bff"}}),ee.jsx("span",{children:"Пентагон — тяжёлая броня"})]}),ee.jsxs("div",{className:"foe",children:[ee.jsx("i",{style:{background:"#b06bff"}}),ee.jsx("span",{children:"Гексагон — ходячий склад XP"})]})]})]})]})}),ee.jsx("div",{id:"screen-story",className:"screen",children:ee.jsxs("div",{className:"story-card",children:[ee.jsx("div",{id:"story-tag",children:"Глава"}),ee.jsx("div",{id:"story-title",children:"Передача из штаба"}),ee.jsx("p",{id:"story-text"}),ee.jsx("button",{id:"btn-story-next",className:"btn-primary",children:"Дальше →"})]})}),ee.jsxs("div",{id:"screen-class",className:"screen",children:[ee.jsxs("div",{className:"class-head",children:[ee.jsx("h2",{id:"class-title",children:"Эволюция"}),ee.jsx("p",{id:"class-hint",children:"Выберите ветку развития"})]}),ee.jsx("div",{id:"class-grid"})]}),ee.jsx("div",{id:"screen-pause",className:"screen",children:ee.jsxs("div",{className:"pause-card",children:[ee.jsx("h2",{className:"pause-title",children:"Пауза"}),ee.jsx("p",{className:"pause-sub",children:"Машина стоит, реактор гудит"}),ee.jsx("button",{id:"btn-resume",className:"btn-primary",children:"Вернуться в бой"}),ee.jsx("button",{id:"btn-settings-pause",className:"btn-ghost",children:"Настройки"}),ee.jsx("button",{id:"btn-reclass",className:"btn-ghost",children:"Эволюция танка"}),ee.jsx("button",{id:"btn-exit-menu",className:"btn-ghost danger",children:"Выйти в меню"}),ee.jsx("button",{id:"pause-mute",className:"btn-ghost",children:"Выключить звук"}),ee.jsx("button",{id:"btn-restart-pause",className:"btn-ghost danger",children:"Начать заново"})]})}),ee.jsx("div",{id:"screen-settings",className:"screen",children:ee.jsxs("div",{className:"settings-card",children:[ee.jsx("h2",{className:"settings-title",children:"Настройки"}),ee.jsxs("div",{className:"settings-row",children:[ee.jsx("label",{htmlFor:"settings-music",children:"Громкость музыки"}),ee.jsx("input",{type:"range",id:"settings-music",min:"0",max:"1",step:"0.05",defaultValue:"0.5"})]}),ee.jsxs("div",{className:"settings-row",children:[ee.jsx("label",{htmlFor:"settings-sfx",children:"Громкость эффектов"}),ee.jsx("input",{type:"range",id:"settings-sfx",min:"0",max:"1",step:"0.05",defaultValue:"0.7"})]}),ee.jsxs("div",{className:"settings-row",children:[ee.jsx("label",{htmlFor:"settings-sens",children:"Чувствительность камеры"}),ee.jsx("input",{type:"range",id:"settings-sens",min:"0.001",max:"0.01",step:"0.0005",defaultValue:"0.0022"})]}),ee.jsxs("div",{className:"settings-actions",children:[ee.jsx("button",{id:"settings-save",className:"btn-primary",children:"Сохранить"}),ee.jsx("button",{id:"settings-close",className:"btn-ghost",children:"Закрыть"})]})]})}),ee.jsx("div",{id:"screen-over",className:"screen",children:ee.jsxs("div",{className:"end-card over",children:[ee.jsx("div",{className:"end-kicker",children:"// сигнал потерян"}),ee.jsx("h2",{className:"end-title",children:"МАШИНА УНИЧТОЖЕНА"}),ee.jsx("p",{className:"end-sub",children:"«ГЕНЕЗИС» пока сильнее. Штаб готовит новую машину."}),ee.jsx("div",{id:"over-stats",className:"end-stats"}),ee.jsx("button",{id:"btn-restart",className:"btn-primary",children:"В бой снова"})]})}),ee.jsx("div",{id:"screen-win",className:"screen",children:ee.jsxs("div",{className:"end-card win",children:[ee.jsx("div",{className:"end-kicker",children:"// передача из штаба"}),ee.jsx("h2",{className:"end-title",children:"ЯДРО ПАЛО"}),ee.jsx("p",{className:"end-sub",children:"Полигон снова учебный. Каких-то шесть секторов, один кадет — и груда переплавленного железа. Отличная работа."}),ee.jsx("div",{id:"win-stats",className:"end-stats"}),ee.jsxs("div",{className:"end-btns",children:[ee.jsx("button",{id:"btn-freeplay",className:"btn-primary",children:"Свободная игра"}),ee.jsx("button",{id:"btn-restart-win",className:"btn-ghost",children:"Новая кампания"})]})]})})]})}Lx.createRoot(document.getElementById("root")).render(ee.jsx(dA,{}));
