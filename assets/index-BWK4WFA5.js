(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Wf=()=>{};var Yo={};/**
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
 */const Jc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new qf;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kf=function(t){const e=Jc(t);return Yc.encodeByteArray(e,!0)},Xc=function(t){return Kf(t).replace(/\./g,"")},Qc=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jf=()=>Gf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process>"u"||typeof Yo>"u")return;const t=Yo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qc(t[1]);return e&&JSON.parse(e)},lo=()=>{try{return Wf()||Jf()||Yf()||Xf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qf=t=>{var e,n;return(n=(e=lo())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Zc=()=>{var t;return(t=lo())==null?void 0:t.config},el=t=>{var e;return(e=lo())==null?void 0:e[`_${t}`]};/**
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
 */class Zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ed(t){return(await fetch(t,{credentials:"include"})).ok}const ar={};function td(){const t={prod:[],emulator:[]};for(const e of Object.keys(ar))ar[e]?t.emulator.push(e):t.prod.push(e);return t}function nd(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Xo=!1;function rd(t,e){if(typeof window>"u"||typeof document>"u"||!Ls(window.location.host)||ar[t]===e||ar[t]||Xo)return;ar[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=td().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Xo=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=nd(r),m=n("text"),g=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),v=document.getElementById(b)||document.createElement("a"),I=n("preprendIcon"),R=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const A=d.element;a(A),u(v,b);const P=l();c(R,I),A.append(R,g,v,P),document.body.appendChild(A)}i?(g.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function id(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function od(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cd(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ld(){try{return typeof indexedDB=="object"}catch{return!1}}function ud(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const fd="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fd,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new en(s,a,r)}}function dd(t,e){return t.replace(hd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hd=/\{\$([^}]+)}/g;function pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Un(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qo(i)&&Qo(o)){if(!Un(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qo(t){return t!==null&&typeof t=="object"}/**
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
 */function Fr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function md(t,e){const n=new gd(t,e);return n.subscribe.bind(n)}class gd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ni),s.error===void 0&&(s.error=ni),s.complete===void 0&&(s.complete=ni);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ni(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class _d{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vd(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(t){return t===ln?void 0:t}function vd(t){return t.instantiationMode==="EAGER"}/**
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
 */class wd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _d(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Ed={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Sd=se.INFO,Td={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Id=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Td[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=Id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Cd=(t,e)=>e.some(n=>t instanceof n);let Zo,ea;function Rd(){return Zo||(Zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ad(){return ea||(ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,ki=new WeakMap,rl=new WeakMap,ri=new WeakMap,uo=new WeakMap;function Pd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nl.set(n,t)}).catch(()=>{}),uo.set(e,t),e}function Od(t){if(ki.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ki.set(t,e)}let Ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ki.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kd(t){Ni=t(Ni)}function Nd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(si(this),e,...n);return rl.set(r,e.sort?e.sort():[e]),Yt(r)}:Ad().includes(t)?function(...e){return t.apply(si(this),e),Yt(nl.get(this))}:function(...e){return Yt(t.apply(si(this),e))}}function xd(t){return typeof t=="function"?Nd(t):(t instanceof IDBTransaction&&Od(t),Cd(t,Rd())?new Proxy(t,Ni):t)}function Yt(t){if(t instanceof IDBRequest)return Pd(t);if(ri.has(t))return ri.get(t);const e=xd(t);return e!==t&&(ri.set(t,e),uo.set(e,t)),e}const si=t=>uo.get(t);function Ld(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Yt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yt(o.result),c.oldVersion,c.newVersion,Yt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Dd=["get","getKey","getAll","getAllKeys","count"],Md=["put","add","delete","clear"],ii=new Map;function ta(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Md.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ii.set(e,i),i}kd(t=>({...t,get:(e,n,r)=>ta(e,n)||t.get(e,n,r),has:(e,n)=>!!ta(e,n)||t.has(e,n)}));/**
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
 */class Ud{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xi="@firebase/app",na="0.14.2";/**
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
 */const xt=new tl("@firebase/app"),$d="@firebase/app-compat",Bd="@firebase/analytics-compat",jd="@firebase/analytics",Hd="@firebase/app-check-compat",Vd="@firebase/app-check",Wd="@firebase/auth",zd="@firebase/auth-compat",qd="@firebase/database",Kd="@firebase/data-connect",Gd="@firebase/database-compat",Jd="@firebase/functions",Yd="@firebase/functions-compat",Xd="@firebase/installations",Qd="@firebase/installations-compat",Zd="@firebase/messaging",eh="@firebase/messaging-compat",th="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",sh="@firebase/remote-config-compat",ih="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",ch="@firebase/ai",lh="@firebase/firestore-compat",uh="firebase",fh="12.2.0";/**
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
 */const Li="[DEFAULT]",dh={[xi]:"fire-core",[$d]:"fire-core-compat",[jd]:"fire-analytics",[Bd]:"fire-analytics-compat",[Vd]:"fire-app-check",[Hd]:"fire-app-check-compat",[Wd]:"fire-auth",[zd]:"fire-auth-compat",[qd]:"fire-rtdb",[Kd]:"fire-data-connect",[Gd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Yd]:"fire-fn-compat",[Xd]:"fire-iid",[Qd]:"fire-iid-compat",[Zd]:"fire-fcm",[eh]:"fire-fcm-compat",[th]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[sh]:"fire-rc-compat",[ih]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const gs=new Map,hh=new Map,Di=new Map;function ra(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(Di.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,t);for(const n of gs.values())ra(n,t);for(const n of hh.values())ra(n,t);return!0}function sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function it(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Ur("app","Firebase",ph);/**
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
 */class mh{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=fh;function il(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Li,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(n||(n=Zc()),!n)throw Xt.create("no-options");const i=gs.get(s);if(i){if(Un(n,i.options)&&Un(r,i.config))return i;throw Xt.create("duplicate-app",{appName:s})}const o=new wd(s);for(const c of Di.values())o.addComponent(c);const a=new mh(n,r,o);return gs.set(s,a),a}function gh(t=Li){const e=gs.get(t);if(!e&&t===Li&&Zc())return il();if(!e)throw Xt.create("no-app",{appName:t});return e}function Rn(t,e,n){let r=dh[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(o.join(" "));return}wr(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const yh="firebase-heartbeat-database",_h=1,Er="firebase-heartbeat-store";let oi=null;function ol(){return oi||(oi=Ld(yh,_h,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Er)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xt.create("idb-open",{originalErrorMessage:t.message})})),oi}async function bh(t){try{const n=(await ol()).transaction(Er),r=await n.objectStore(Er).get(al(t));return await n.done,r}catch(e){if(e instanceof en)xt.warn(e.message);else{const n=Xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function sa(t,e){try{const r=(await ol()).transaction(Er,"readwrite");await r.objectStore(Er).put(e,al(t)),await r.done}catch(n){if(n instanceof en)xt.warn(n.message);else{const r=Xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(r.message)}}}function al(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vh=1024,wh=30;class Eh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Th(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ia();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>wh){const o=Ih(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ia(),{heartbeatsToSend:r,unsentEntries:s}=Sh(this._heartbeatsCache.heartbeats),i=Xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xt.warn(n),""}}}function ia(){return new Date().toISOString().substring(0,10)}function Sh(t,e=vh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function oa(t){return Xc(JSON.stringify({version:2,heartbeats:t})).length}function Ih(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Ch(t){wr(new Fn("platform-logger",e=>new Ud(e),"PRIVATE")),wr(new Fn("heartbeat",e=>new Eh(e),"PRIVATE")),Rn(xi,na,t),Rn(xi,na,"esm2020"),Rn("fire-js","")}Ch("");var Rh="firebase",Ah="12.2.1";/**
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
 */Rn(Rh,Ah,"app");/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},An=[],yt=()=>{},cl=()=>!1,Ds=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ho=t=>t.startsWith("onUpdate:"),Ce=Object.assign,po=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ph=Object.prototype.hasOwnProperty,ee=(t,e)=>Ph.call(t,e),W=Array.isArray,Pn=t=>Ms(t)==="[object Map]",ll=t=>Ms(t)==="[object Set]",q=t=>typeof t=="function",Te=t=>typeof t=="string",tn=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",ul=t=>(fe(t)||q(t))&&q(t.then)&&q(t.catch),fl=Object.prototype.toString,Ms=t=>fl.call(t),Oh=t=>Ms(t).slice(8,-1),dl=t=>Ms(t)==="[object Object]",mo=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cr=fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kh=/-\w/g,nt=Us(t=>t.replace(kh,e=>e.slice(1).toUpperCase())),Nh=/\B([A-Z])/g,bn=Us(t=>t.replace(Nh,"-$1").toLowerCase()),Fs=Us(t=>t.charAt(0).toUpperCase()+t.slice(1)),ai=Us(t=>t?`on${Fs(t)}`:""),Qt=(t,e)=>!Object.is(t,e),is=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Mi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let aa;const $s=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Te(r)?Mh(r):go(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Te(t)||fe(t))return t}const xh=/;(?![^(]*\))/g,Lh=/:([^]+)/,Dh=/\/\*[^]*?\*\//g;function Mh(t){const e={};return t.replace(Dh,"").split(xh).forEach(n=>{if(n){const r=n.split(Lh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yo(t){let e="";if(Te(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=yo(t[n]);r&&(e+=r+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fh=fo(Uh);function pl(t){return!!t||t===""}const ml=t=>!!(t&&t.__v_isRef===!0),_e=t=>Te(t)?t:t==null?"":W(t)||fe(t)&&(t.toString===fl||!q(t.toString))?ml(t)?_e(t.value):JSON.stringify(t,gl,2):String(t),gl=(t,e)=>ml(e)?gl(t,e.value):Pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ci(r,i)+" =>"]=s,n),{})}:ll(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ci(n))}:tn(e)?ci(e):fe(e)&&!W(e)&&!dl(e)?String(e):e,ci=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class yl{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $h(t){return new yl(t)}function Bh(){return Ve}let ce;const li=new WeakSet;class _l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,li.has(this)&&(li.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ca(this),wl(this);const e=ce,n=at;ce=this,at=!0;try{return this.fn()}finally{El(this),ce=e,at=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vo(e);this.deps=this.depsTail=void 0,ca(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?li.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ui(this)&&this.run()}get dirty(){return Ui(this)}}let bl=0,lr,ur;function vl(t,e=!1){if(t.flags|=8,e){t.next=ur,ur=t;return}t.next=lr,lr=t}function _o(){bl++}function bo(){if(--bl>0)return;if(ur){let e=ur;for(ur=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;lr;){let e=lr;for(lr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function wl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function El(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),vo(r),jh(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ui(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Sr)||(t.globalVersion=Sr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ui(t))))return;t.flags|=2;const e=t.dep,n=ce,r=at;ce=t,at=!0;try{wl(t);const s=t.fn(t._value);(e.version===0||Qt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ce=n,at=r,El(t),t.flags&=-3}}function vo(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)vo(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function jh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let at=!0;const Tl=[];function Lt(){Tl.push(at),at=!1}function Dt(){const t=Tl.pop();at=t===void 0?!0:t}function ca(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let Sr=0;class Hh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ce||!at||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Hh(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Il(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(e){this.version++,Sr++,this.notify(e)}notify(e){_o();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bo()}}}function Il(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Il(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fi=new WeakMap,dn=Symbol(""),$i=Symbol(""),Tr=Symbol("");function Ne(t,e,n){if(at&&ce){let r=Fi.get(t);r||Fi.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new wo),s.map=r,s.key=n),s.track()}}function Ct(t,e,n,r,s,i){const o=Fi.get(t);if(!o){Sr++;return}const a=c=>{c&&c.trigger()};if(_o(),e==="clear")o.forEach(a);else{const c=W(t),l=c&&mo(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===Tr||!tn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Tr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(dn)),Pn(t)&&a(o.get($i)));break;case"delete":c||(a(o.get(dn)),Pn(t)&&a(o.get($i)));break;case"set":Pn(t)&&a(o.get(dn));break}}bo()}function wn(t){const e=Z(t);return e===t?e:(Ne(e,"iterate",Tr),ct(t)?e:e.map(Fe))}function Eo(t){return Ne(t=Z(t),"iterate",Tr),t}const Vh={__proto__:null,[Symbol.iterator](){return ui(this,Symbol.iterator,Fe)},concat(...t){return wn(this).concat(...t.map(e=>W(e)?wn(e):e))},entries(){return ui(this,"entries",t=>(t[1]=Fe(t[1]),t))},every(t,e){return Et(this,"every",t,e,void 0,arguments)},filter(t,e){return Et(this,"filter",t,e,n=>n.map(Fe),arguments)},find(t,e){return Et(this,"find",t,e,Fe,arguments)},findIndex(t,e){return Et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Et(this,"findLast",t,e,Fe,arguments)},findLastIndex(t,e){return Et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Et(this,"forEach",t,e,void 0,arguments)},includes(...t){return fi(this,"includes",t)},indexOf(...t){return fi(this,"indexOf",t)},join(t){return wn(this).join(t)},lastIndexOf(...t){return fi(this,"lastIndexOf",t)},map(t,e){return Et(this,"map",t,e,void 0,arguments)},pop(){return Yn(this,"pop")},push(...t){return Yn(this,"push",t)},reduce(t,...e){return la(this,"reduce",t,e)},reduceRight(t,...e){return la(this,"reduceRight",t,e)},shift(){return Yn(this,"shift")},some(t,e){return Et(this,"some",t,e,void 0,arguments)},splice(...t){return Yn(this,"splice",t)},toReversed(){return wn(this).toReversed()},toSorted(t){return wn(this).toSorted(t)},toSpliced(...t){return wn(this).toSpliced(...t)},unshift(...t){return Yn(this,"unshift",t)},values(){return ui(this,"values",Fe)}};function ui(t,e,n){const r=Eo(t),s=r[e]();return r!==t&&!ct(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Wh=Array.prototype;function Et(t,e,n,r,s,i){const o=Eo(t),a=o!==t&&!ct(t),c=o[e];if(c!==Wh[e]){const f=c.apply(t,i);return a?Fe(f):f}let l=n;o!==t&&(a?l=function(f,d){return n.call(this,Fe(f),d,t)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function la(t,e,n,r){const s=Eo(t);let i=n;return s!==t&&(ct(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Fe(a),c,t)}),s[e](i,...r)}function fi(t,e,n){const r=Z(t);Ne(r,"iterate",Tr);const s=r[e](...n);return(s===-1||s===!1)&&Io(n[0])?(n[0]=Z(n[0]),r[e](...n)):s}function Yn(t,e,n=[]){Lt(),_o();const r=Z(t)[e].apply(t,n);return bo(),Dt(),r}const zh=fo("__proto__,__v_isRef,__isVue"),Cl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn));function qh(t){tn(t)||(t=String(t));const e=Z(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class Rl{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?np:kl:i?Ol:Pl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){let c;if(o&&(c=Vh[n]))return c;if(n==="hasOwnProperty")return qh}const a=Reflect.get(e,n,De(e)?e:r);if((tn(n)?Cl.has(n):zh(n))||(s||Ne(e,"get",n),i))return a;if(De(a)){const c=o&&mo(n)?a:a.value;return s&&fe(c)?ys(c):c}return fe(a)?s?ys(a):Br(a):a}}class Al extends Rl{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=pn(i);if(!ct(r)&&!pn(r)&&(i=Z(i),r=Z(r)),!W(e)&&De(i)&&!De(r))return c||(i.value=r),!0}const o=W(e)&&mo(n)?Number(n)<e.length:ee(e,n),a=Reflect.set(e,n,r,De(e)?e:s);return e===Z(s)&&(o?Qt(r,i)&&Ct(e,"set",n,r):Ct(e,"add",n,r)),a}deleteProperty(e,n){const r=ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ct(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tn(n)||!Cl.has(n))&&Ne(e,"has",n),r}ownKeys(e){return Ne(e,"iterate",W(e)?"length":dn),Reflect.ownKeys(e)}}class Kh extends Rl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gh=new Al,Jh=new Kh,Yh=new Al(!0);const Bi=t=>t,Zr=t=>Reflect.getPrototypeOf(t);function Xh(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=Pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Bi:e?ji:Fe;return!e&&Ne(i,"iterate",c?$i:dn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qh(t,e){const n={get(s){const i=this.__v_raw,o=Z(i),a=Z(s);t||(Qt(s,a)&&Ne(o,"get",s),Ne(o,"get",a));const{has:c}=Zr(o),l=e?Bi:t?ji:Fe;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ne(Z(s),"iterate",dn),s.size},has(s){const i=this.__v_raw,o=Z(i),a=Z(s);return t||(Qt(s,a)&&Ne(o,"has",s),Ne(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Z(a),l=e?Bi:t?ji:Fe;return!t&&Ne(c,"iterate",dn),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return Ce(n,t?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(s){!e&&!ct(s)&&!pn(s)&&(s=Z(s));const i=Z(this);return Zr(i).has.call(i,s)||(i.add(s),Ct(i,"add",s,s)),this},set(s,i){!e&&!ct(i)&&!pn(i)&&(i=Z(i));const o=Z(this),{has:a,get:c}=Zr(o);let l=a.call(o,s);l||(s=Z(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Qt(i,u)&&Ct(o,"set",s,i):Ct(o,"add",s,i),this},delete(s){const i=Z(this),{has:o,get:a}=Zr(i);let c=o.call(i,s);c||(s=Z(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&Ct(i,"delete",s,void 0),l},clear(){const s=Z(this),i=s.size!==0,o=s.clear();return i&&Ct(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Xh(s,t,e)}),n}function So(t,e){const n=Qh(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const Zh={get:So(!1,!1)},ep={get:So(!1,!0)},tp={get:So(!0,!1)};const Pl=new WeakMap,Ol=new WeakMap,kl=new WeakMap,np=new WeakMap;function rp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sp(t){return t.__v_skip||!Object.isExtensible(t)?0:rp(Oh(t))}function Br(t){return pn(t)?t:To(t,!1,Gh,Zh,Pl)}function Nl(t){return To(t,!1,Yh,ep,Ol)}function ys(t){return To(t,!0,Jh,tp,kl)}function To(t,e,n,r,s){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=sp(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function fr(t){return pn(t)?fr(t.__v_raw):!!(t&&t.__v_isReactive)}function pn(t){return!!(t&&t.__v_isReadonly)}function ct(t){return!!(t&&t.__v_isShallow)}function Io(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function xl(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&hl(t,"__v_skip",!0),t}const Fe=t=>fe(t)?Br(t):t,ji=t=>fe(t)?ys(t):t;function De(t){return t?t.__v_isRef===!0:!1}function ge(t){return Ll(t,!1)}function ip(t){return Ll(t,!0)}function Ll(t,e){return De(t)?t:new op(t,e)}class op{constructor(e,n){this.dep=new wo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:Fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ct(e)||pn(e);e=r?e:Z(e),Qt(e,n)&&(this._rawValue=e,this._value=r?e:Fe(e),this.dep.trigger())}}function On(t){return De(t)?t.value:t}const ap={get:(t,e,n)=>e==="__v_raw"?t:On(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dl(t){return fr(t)?t:new Proxy(t,ap)}class cp{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return vl(this,!0),!0}get value(){const e=this.dep.track();return Sl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lp(t,e,n=!1){let r,s;return q(t)?r=t:(r=t.get,s=t.set),new cp(r,s,n)}const ts={},_s=new WeakMap;let un;function up(t,e=!1,n=un){if(n){let r=_s.get(n);r||_s.set(n,r=[]),r.push(t)}}function fp(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=P=>s?P:ct(P)||s===!1||s===0?Rt(P,1):Rt(P);let u,f,d,m,g=!1,b=!1;if(De(t)?(f=()=>t.value,g=ct(t)):fr(t)?(f=()=>l(t),g=!0):W(t)?(b=!0,g=t.some(P=>fr(P)||ct(P)),f=()=>t.map(P=>{if(De(P))return P.value;if(fr(P))return l(P);if(q(P))return c?c(P,2):P()})):q(t)?e?f=c?()=>c(t,2):t:f=()=>{if(d){Lt();try{d()}finally{Dt()}}const P=un;un=u;try{return c?c(t,3,[m]):t(m)}finally{un=P}}:f=yt,e&&s){const P=f,j=s===!0?1/0:s;f=()=>Rt(P(),j)}const v=Bh(),I=()=>{u.stop(),v&&v.active&&po(v.effects,u)};if(i&&e){const P=e;e=(...j)=>{P(...j),I()}}let R=b?new Array(t.length).fill(ts):ts;const A=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const j=u.run();if(s||g||(b?j.some((Y,H)=>Qt(Y,R[H])):Qt(j,R))){d&&d();const Y=un;un=u;try{const H=[j,R===ts?void 0:b&&R[0]===ts?[]:R,m];R=j,c?c(e,3,H):e(...H)}finally{un=Y}}}else u.run()};return a&&a(A),u=new _l(f),u.scheduler=o?()=>o(A,!1):A,m=P=>up(P,!1,u),d=u.onStop=()=>{const P=_s.get(u);if(P){if(c)c(P,4);else for(const j of P)j();_s.delete(u)}},e?r?A(!0):R=u.run():o?o(A.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function Rt(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,De(t))Rt(t.value,e,n);else if(W(t))for(let r=0;r<t.length;r++)Rt(t[r],e,n);else if(ll(t)||Pn(t))t.forEach(r=>{Rt(r,e,n)});else if(dl(t)){for(const r in t)Rt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Rt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(t,e,n,r){try{return r?t(...r):t()}catch(s){Bs(s,e,n)}}function wt(t,e,n,r){if(q(t)){const s=jr(t,e,n,r);return s&&ul(s)&&s.catch(i=>{Bs(i,e,n)}),s}if(W(t)){const s=[];for(let i=0;i<t.length;i++)s.push(wt(t[i],e,n,r));return s}}function Bs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Lt(),jr(i,null,10,[t,c,l]),Dt();return}}dp(t,n,s,r,o)}function dp(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const $e=[];let mt=-1;const kn=[];let Vt=null,En=0;const Ml=Promise.resolve();let bs=null;function Co(t){const e=bs||Ml;return t?e.then(this?t.bind(this):t):e}function hp(t){let e=mt+1,n=$e.length;for(;e<n;){const r=e+n>>>1,s=$e[r],i=Ir(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ro(t){if(!(t.flags&1)){const e=Ir(t),n=$e[$e.length-1];!n||!(t.flags&2)&&e>=Ir(n)?$e.push(t):$e.splice(hp(e),0,t),t.flags|=1,Ul()}}function Ul(){bs||(bs=Ml.then($l))}function pp(t){W(t)?kn.push(...t):Vt&&t.id===-1?Vt.splice(En+1,0,t):t.flags&1||(kn.push(t),t.flags|=1),Ul()}function ua(t,e,n=mt+1){for(;n<$e.length;n++){const r=$e[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;$e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fl(t){if(kn.length){const e=[...new Set(kn)].sort((n,r)=>Ir(n)-Ir(r));if(kn.length=0,Vt){Vt.push(...e);return}for(Vt=e,En=0;En<Vt.length;En++){const n=Vt[En];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vt=null,En=0}}const Ir=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $l(t){try{for(mt=0;mt<$e.length;mt++){const e=$e[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mt<$e.length;mt++){const e=$e[mt];e&&(e.flags&=-2)}mt=-1,$e.length=0,Fl(),bs=null,($e.length||kn.length)&&$l()}}let Ye=null,Bl=null;function vs(t){const e=Ye;return Ye=t,Bl=t&&t.type.__scopeId||null,e}function Ht(t,e=Ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ss(-1);const i=vs(e);let o;try{o=t(...s)}finally{vs(i),r._d&&Ss(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cr(t,e){if(Ye===null)return t;const n=Ws(Ye),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ie]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Rt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function an(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lt(),wt(c,n,8,[t.el,a,t,e]),Dt())}}const mp=Symbol("_vte"),gp=t=>t.__isTeleport,yp=Symbol("_leaveCb");function Ao(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ao(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jl(t,e){return q(t)?Ce({name:t.name},e,{setup:t}):t}function Hl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ws=new WeakMap;function dr(t,e,n,r,s=!1){if(W(t)){t.forEach((g,b)=>dr(g,e&&(W(e)?e[b]:e),n,r,s));return}if(hr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&dr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ws(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,d=Z(f),m=f===ie?cl:g=>ee(d,g);if(l!=null&&l!==c){if(fa(e),Te(l))u[l]=null,m(l)&&(f[l]=null);else if(De(l)){l.value=null;const g=e;g.k&&(u[g.k]=null)}}if(q(c))jr(c,a,12,[o,u]);else{const g=Te(c),b=De(c);if(g||b){const v=()=>{if(t.f){const I=g?m(c)?f[c]:u[c]:c.value;if(s)W(I)&&po(I,i);else if(W(I))I.includes(i)||I.push(i);else if(g)u[c]=[i],m(c)&&(f[c]=u[c]);else{const R=[i];c.value=R,t.k&&(u[t.k]=R)}}else g?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const I=()=>{v(),ws.delete(t)};I.id=-1,ws.set(t,I),Ge(I,n)}else fa(t),v()}}}function fa(t){const e=ws.get(t);e&&(e.flags|=8,ws.delete(t))}$s().requestIdleCallback;$s().cancelIdleCallback;const hr=t=>!!t.type.__asyncLoader,Vl=t=>t.type.__isKeepAlive;function _p(t,e){Wl(t,"a",e)}function bp(t,e){Wl(t,"da",e)}function Wl(t,e,n=xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(js(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vl(s.parent.vnode)&&vp(r,e,n,s),s=s.parent}}function vp(t,e,n,r){const s=js(e,t,r,!0);zl(()=>{po(r[e],s)},n)}function js(t,e,n=xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lt();const a=Hr(n),c=wt(e,n,t,o);return a(),Dt(),c});return r?s.unshift(i):s.push(i),i}}const $t=t=>(e,n=xe)=>{(!Ar||t==="sp")&&js(t,(...r)=>e(...r),n)},wp=$t("bm"),nn=$t("m"),Ep=$t("bu"),Sp=$t("u"),Tp=$t("bum"),zl=$t("um"),Ip=$t("sp"),Cp=$t("rtg"),Rp=$t("rtc");function Ap(t,e=xe){js("ec",t,e)}const Pp="components";function ql(t,e){return kp(Pp,t,!0,e)||t}const Op=Symbol.for("v-ndc");function kp(t,e,n=!0,r=!1){const s=Ye||xe;if(s){const i=s.type;{const a=bm(i,!1);if(a&&(a===e||a===nt(e)||a===Fs(nt(e))))return i}const o=da(s[t]||i[t],e)||da(s.appContext[t],e);return!o&&r?i:o}}function da(t,e){return t&&(t[e]||t[nt(e)]||t[Fs(nt(e))])}const Hi=t=>t?du(t)?Ws(t):Hi(t.parent):null,pr=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hi(t.parent),$root:t=>Hi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Po(t),$forceUpdate:t=>t.f||(t.f=()=>{Ro(t.update)}),$nextTick:t=>t.n||(t.n=Co.bind(t.proxy)),$watch:t=>Qp.bind(t)}),di=(t,e)=>t!==ie&&!t.__isScriptSetup&&ee(t,e),Np={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(di(r,e))return o[e]=1,r[e];if(s!==ie&&ee(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==ie&&ee(n,e))return o[e]=4,n[e];Vi&&(o[e]=0)}}const u=pr[e];let f,d;if(u)return e==="$attrs"&&Ne(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&ee(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ee(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return di(s,e)?(s[e]=n,!0):r!==ie&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==ie&&a[0]!=="$"&&ee(t,a)||di(e,a)||(c=i[0])&&ee(c,a)||ee(r,a)||ee(pr,a)||ee(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ha(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vi=!0;function xp(t){const e=Po(t),n=t.proxy,r=t.ctx;Vi=!1,e.beforeCreate&&pa(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:b,deactivated:v,beforeDestroy:I,beforeUnmount:R,destroyed:A,unmounted:P,render:j,renderTracked:Y,renderTriggered:H,errorCaptured:he,serverPrefetch:pe,expose:ye,inheritAttrs:Ee,components:Se,directives:ve,filters:Ie}=e;if(l&&Lp(l,r,null),o)for(const G in o){const z=o[G];q(z)&&(r[G]=z.bind(n))}if(s){const G=s.call(n,n);fe(G)&&(t.data=Br(G))}if(Vi=!0,i)for(const G in i){const z=i[G],Ae=q(z)?z.bind(n,n):q(z.get)?z.get.bind(n,n):yt,Re=!q(z)&&q(z.set)?z.set.bind(n):yt,le=tt({get:Ae,set:Re});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>le.value,set:ue=>le.value=ue})}if(a)for(const G in a)Kl(a[G],r,n,G);if(c){const G=q(c)?c.call(n):c;Reflect.ownKeys(G).forEach(z=>{os(z,G[z])})}u&&pa(u,t,"c");function X(G,z){W(z)?z.forEach(Ae=>G(Ae.bind(n))):z&&G(z.bind(n))}if(X(wp,f),X(nn,d),X(Ep,m),X(Sp,g),X(_p,b),X(bp,v),X(Ap,he),X(Rp,Y),X(Cp,H),X(Tp,R),X(zl,P),X(Ip,pe),W(ye))if(ye.length){const G=t.exposed||(t.exposed={});ye.forEach(z=>{Object.defineProperty(G,z,{get:()=>n[z],set:Ae=>n[z]=Ae,enumerable:!0})})}else t.exposed||(t.exposed={});j&&t.render===yt&&(t.render=j),Ee!=null&&(t.inheritAttrs=Ee),Se&&(t.components=Se),ve&&(t.directives=ve),pe&&Hl(t)}function Lp(t,e,n=yt){W(t)&&(t=Wi(t));for(const r in t){const s=t[r];let i;fe(s)?"default"in s?i=_t(s.from||r,s.default,!0):i=_t(s.from||r):i=_t(s),De(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pa(t,e,n){wt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kl(t,e,n,r){let s=r.includes(".")?ou(n,r):()=>n[r];if(Te(t)){const i=e[t];q(i)&&At(s,i)}else if(q(t))At(s,t.bind(n));else if(fe(t))if(W(t))t.forEach(i=>Kl(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&At(s,i,t)}}function Po(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Es(c,l,o,!0)),Es(c,e,o)),fe(e)&&i.set(e,c),c}function Es(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Es(t,i,n,!0),s&&s.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Dp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dp={data:ma,props:ga,emits:ga,methods:ir,computed:ir,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:ir,directives:ir,watch:Up,provide:ma,inject:Mp};function ma(t,e){return e?t?function(){return Ce(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Mp(t,e){return ir(Wi(t),Wi(e))}function Wi(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function ir(t,e){return t?Ce(Object.create(null),t,e):e}function ga(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ce(Object.create(null),ha(t),ha(e??{})):e}function Up(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const r in e)n[r]=Ue(t[r],e[r]);return n}function Gl(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fp=0;function $p(t,e){return function(r,s=null){q(r)||(r=Ce({},r)),s!=null&&!fe(s)&&(s=null);const i=Gl(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Fp++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wm,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(l,...f)):q(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||me(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(m,u):t(m,u,d),c=!0,l._container=u,u.__vue_app__=l,Ws(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(wt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Nn;Nn=l;try{return u()}finally{Nn=f}}};return l}}let Nn=null;function os(t,e){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[t]=e}}function _t(t,e,n=!1){const r=fu();if(r||Nn){let s=Nn?Nn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}const Jl={},Yl=()=>Object.create(Jl),Xl=t=>Object.getPrototypeOf(t)===Jl;function Bp(t,e,n,r=!1){const s={},i=Yl();t.propsDefaults=Object.create(null),Ql(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jp(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Hs(t.emitsOptions,d))continue;const m=e[d];if(c)if(ee(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const g=nt(d);s[g]=zi(c,a,g,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Ql(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=bn(f))===f||!ee(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=zi(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],l=!0)}l&&Ct(t.attrs,"set","")}function Ql(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(cr(c))continue;const l=e[c];let u;s&&ee(s,u=nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=zi(s,c,f,l[f],t,!ee(l,f))}}return o}function zi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Hr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bn(n))&&(r=!0))}return r}const Hp=new WeakMap;function Zl(t,e,n=!1){const r=n?Hp:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=f=>{c=!0;const[d,m]=Zl(f,e,!0);Ce(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return fe(t)&&r.set(t,An),An;if(W(i))for(let u=0;u<i.length;u++){const f=nt(i[u]);ya(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=nt(u);if(ya(f)){const d=i[u],m=o[f]=W(d)||q(d)?{type:d}:Ce({},d),g=m.type;let b=!1,v=!0;if(W(g))for(let I=0;I<g.length;++I){const R=g[I],A=q(R)&&R.name;if(A==="Boolean"){b=!0;break}else A==="String"&&(v=!1)}else b=q(g)&&g.name==="Boolean";m[0]=b,m[1]=v,(b||ee(m,"default"))&&a.push(f)}}const l=[o,a];return fe(t)&&r.set(t,l),l}function ya(t){return t[0]!=="$"&&!cr(t)}const Oo=t=>t==="_"||t==="_ctx"||t==="$stable",ko=t=>W(t)?t.map(gt):[gt(t)],Vp=(t,e,n)=>{if(e._n)return e;const r=Ht((...s)=>ko(e(...s)),n);return r._c=!1,r},eu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Oo(s))continue;const i=t[s];if(q(i))e[s]=Vp(s,i,r);else if(i!=null){const o=ko(i);e[s]=()=>o}}},tu=(t,e)=>{const n=ko(e);t.slots.default=()=>n},nu=(t,e,n)=>{for(const r in e)(n||!Oo(r))&&(t[r]=e[r])},Wp=(t,e,n)=>{const r=t.slots=Yl();if(t.vnode.shapeFlag&32){const s=e._;s?(nu(r,e,n),n&&hl(r,"_",s,!0)):eu(e,r)}else e&&tu(t,e)},zp=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:nu(s,e,n):(i=!e.$stable,eu(e,s)),o=e}else e&&(tu(t,e),o={default:1});if(i)for(const a in s)!Oo(a)&&o[a]==null&&delete s[a]},Ge=om;function qp(t){return Kp(t)}function Kp(t,e){const n=$s();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=yt,insertStaticContent:g}=t,b=(h,p,y,S=null,w=null,T=null,x=void 0,k=null,O=!!p.dynamicChildren)=>{if(h===p)return;h&&!Xn(h,p)&&(S=E(h),ue(h,w,T,!0),h=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:C,ref:$,shapeFlag:D}=p;switch(C){case Vs:v(h,p,y,S);break;case Zt:I(h,p,y,S);break;case mi:h==null&&R(p,y,S,x);break;case et:Se(h,p,y,S,w,T,x,k,O);break;default:D&1?j(h,p,y,S,w,T,x,k,O):D&6?ve(h,p,y,S,w,T,x,k,O):(D&64||D&128)&&C.process(h,p,y,S,w,T,x,k,O,U)}$!=null&&w?dr($,h&&h.ref,T,p||h,!p):$==null&&h&&h.ref!=null&&dr(h.ref,null,T,h,!0)},v=(h,p,y,S)=>{if(h==null)r(p.el=a(p.children),y,S);else{const w=p.el=h.el;p.children!==h.children&&l(w,p.children)}},I=(h,p,y,S)=>{h==null?r(p.el=c(p.children||""),y,S):p.el=h.el},R=(h,p,y,S)=>{[h.el,h.anchor]=g(h.children,p,y,S,h.el,h.anchor)},A=({el:h,anchor:p},y,S)=>{let w;for(;h&&h!==p;)w=d(h),r(h,y,S),h=w;r(p,y,S)},P=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),s(h),h=y;s(p)},j=(h,p,y,S,w,T,x,k,O)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),h==null?Y(p,y,S,w,T,x,k,O):pe(h,p,w,T,x,k,O)},Y=(h,p,y,S,w,T,x,k)=>{let O,C;const{props:$,shapeFlag:D,transition:F,dirs:V}=h;if(O=h.el=o(h.type,T,$&&$.is,$),D&8?u(O,h.children):D&16&&he(h.children,O,null,S,w,hi(h,T),x,k),V&&an(h,null,S,"created"),H(O,h,h.scopeId,x,S),$){for(const ae in $)ae!=="value"&&!cr(ae)&&i(O,ae,null,$[ae],T,S);"value"in $&&i(O,"value",null,$.value,T),(C=$.onVnodeBeforeMount)&&ht(C,S,h)}V&&an(h,null,S,"beforeMount");const J=Gp(w,F);J&&F.beforeEnter(O),r(O,p,y),((C=$&&$.onVnodeMounted)||J||V)&&Ge(()=>{C&&ht(C,S,h),J&&F.enter(O),V&&an(h,null,S,"mounted")},w)},H=(h,p,y,S,w)=>{if(y&&m(h,y),S)for(let T=0;T<S.length;T++)m(h,S[T]);if(w){let T=w.subTree;if(p===T||cu(T.type)&&(T.ssContent===p||T.ssFallback===p)){const x=w.vnode;H(h,x,x.scopeId,x.slotScopeIds,w.parent)}}},he=(h,p,y,S,w,T,x,k,O=0)=>{for(let C=O;C<h.length;C++){const $=h[C]=k?Wt(h[C]):gt(h[C]);b(null,$,p,y,S,w,T,x,k)}},pe=(h,p,y,S,w,T,x)=>{const k=p.el=h.el;let{patchFlag:O,dynamicChildren:C,dirs:$}=p;O|=h.patchFlag&16;const D=h.props||ie,F=p.props||ie;let V;if(y&&cn(y,!1),(V=F.onVnodeBeforeUpdate)&&ht(V,y,p,h),$&&an(p,h,y,"beforeUpdate"),y&&cn(y,!0),(D.innerHTML&&F.innerHTML==null||D.textContent&&F.textContent==null)&&u(k,""),C?ye(h.dynamicChildren,C,k,y,S,hi(p,w),T):x||z(h,p,k,null,y,S,hi(p,w),T,!1),O>0){if(O&16)Ee(k,D,F,y,w);else if(O&2&&D.class!==F.class&&i(k,"class",null,F.class,w),O&4&&i(k,"style",D.style,F.style,w),O&8){const J=p.dynamicProps;for(let ae=0;ae<J.length;ae++){const ne=J[ae],He=D[ne],Pe=F[ne];(Pe!==He||ne==="value")&&i(k,ne,He,Pe,w,y)}}O&1&&h.children!==p.children&&u(k,p.children)}else!x&&C==null&&Ee(k,D,F,y,w);((V=F.onVnodeUpdated)||$)&&Ge(()=>{V&&ht(V,y,p,h),$&&an(p,h,y,"updated")},S)},ye=(h,p,y,S,w,T,x)=>{for(let k=0;k<p.length;k++){const O=h[k],C=p[k],$=O.el&&(O.type===et||!Xn(O,C)||O.shapeFlag&198)?f(O.el):y;b(O,C,$,null,S,w,T,x,!0)}},Ee=(h,p,y,S,w)=>{if(p!==y){if(p!==ie)for(const T in p)!cr(T)&&!(T in y)&&i(h,T,p[T],null,w,S);for(const T in y){if(cr(T))continue;const x=y[T],k=p[T];x!==k&&T!=="value"&&i(h,T,k,x,w,S)}"value"in y&&i(h,"value",p.value,y.value,w)}},Se=(h,p,y,S,w,T,x,k,O)=>{const C=p.el=h?h.el:a(""),$=p.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:V}=p;V&&(k=k?k.concat(V):V),h==null?(r(C,y,S),r($,y,S),he(p.children||[],y,$,w,T,x,k,O)):D>0&&D&64&&F&&h.dynamicChildren?(ye(h.dynamicChildren,F,y,w,T,x,k),(p.key!=null||w&&p===w.subTree)&&ru(h,p,!0)):z(h,p,y,$,w,T,x,k,O)},ve=(h,p,y,S,w,T,x,k,O)=>{p.slotScopeIds=k,h==null?p.shapeFlag&512?w.ctx.activate(p,y,S,x,O):Ie(p,y,S,w,T,x,O):je(h,p,O)},Ie=(h,p,y,S,w,T,x)=>{const k=h.component=pm(h,S,w);if(Vl(h)&&(k.ctx.renderer=U),mm(k,!1,x),k.asyncDep){if(w&&w.registerDep(k,X,x),!h.el){const O=k.subTree=me(Zt);I(null,O,p,y),h.placeholder=O.el}}else X(k,h,p,y,w,T,x)},je=(h,p,y)=>{const S=p.component=h.component;if(sm(h,p,y))if(S.asyncDep&&!S.asyncResolved){G(S,p,y);return}else S.next=p,S.update();else p.el=h.el,S.vnode=p},X=(h,p,y,S,w,T,x)=>{const k=()=>{if(h.isMounted){let{next:D,bu:F,u:V,parent:J,vnode:ae}=h;{const qe=su(h);if(qe){D&&(D.el=ae.el,G(h,D,x)),qe.asyncDep.then(()=>{h.isUnmounted||k()});return}}let ne=D,He;cn(h,!1),D?(D.el=ae.el,G(h,D,x)):D=ae,F&&is(F),(He=D.props&&D.props.onVnodeBeforeUpdate)&&ht(He,J,D,ae),cn(h,!0);const Pe=pi(h),rt=h.subTree;h.subTree=Pe,b(rt,Pe,f(rt.el),E(rt),h,w,T),D.el=Pe.el,ne===null&&im(h,Pe.el),V&&Ge(V,w),(He=D.props&&D.props.onVnodeUpdated)&&Ge(()=>ht(He,J,D,ae),w)}else{let D;const{el:F,props:V}=p,{bm:J,m:ae,parent:ne,root:He,type:Pe}=h,rt=hr(p);if(cn(h,!1),J&&is(J),!rt&&(D=V&&V.onVnodeBeforeMount)&&ht(D,ne,p),cn(h,!0),F&&de){const qe=()=>{h.subTree=pi(h),de(F,h.subTree,h,w,null)};rt&&Pe.__asyncHydrate?Pe.__asyncHydrate(F,h,qe):qe()}else{He.ce&&He.ce._def.shadowRoot!==!1&&He.ce._injectChildStyle(Pe);const qe=h.subTree=pi(h);b(null,qe,y,S,h,w,T),p.el=qe.el}if(ae&&Ge(ae,w),!rt&&(D=V&&V.onVnodeMounted)){const qe=p;Ge(()=>ht(D,ne,qe),w)}(p.shapeFlag&256||ne&&hr(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&Ge(h.a,w),h.isMounted=!0,p=y=S=null}};h.scope.on();const O=h.effect=new _l(k);h.scope.off();const C=h.update=O.run.bind(O),$=h.job=O.runIfDirty.bind(O);$.i=h,$.id=h.uid,O.scheduler=()=>Ro($),cn(h,!0),C()},G=(h,p,y)=>{p.component=h;const S=h.vnode.props;h.vnode=p,h.next=null,jp(h,p.props,S,y),zp(h,p.children,y),Lt(),ua(h),Dt()},z=(h,p,y,S,w,T,x,k,O=!1)=>{const C=h&&h.children,$=h?h.shapeFlag:0,D=p.children,{patchFlag:F,shapeFlag:V}=p;if(F>0){if(F&128){Re(C,D,y,S,w,T,x,k,O);return}else if(F&256){Ae(C,D,y,S,w,T,x,k,O);return}}V&8?($&16&&Ze(C,w,T),D!==C&&u(y,D)):$&16?V&16?Re(C,D,y,S,w,T,x,k,O):Ze(C,w,T,!0):($&8&&u(y,""),V&16&&he(D,y,S,w,T,x,k,O))},Ae=(h,p,y,S,w,T,x,k,O)=>{h=h||An,p=p||An;const C=h.length,$=p.length,D=Math.min(C,$);let F;for(F=0;F<D;F++){const V=p[F]=O?Wt(p[F]):gt(p[F]);b(h[F],V,y,null,w,T,x,k,O)}C>$?Ze(h,w,T,!0,!1,D):he(p,y,S,w,T,x,k,O,D)},Re=(h,p,y,S,w,T,x,k,O)=>{let C=0;const $=p.length;let D=h.length-1,F=$-1;for(;C<=D&&C<=F;){const V=h[C],J=p[C]=O?Wt(p[C]):gt(p[C]);if(Xn(V,J))b(V,J,y,null,w,T,x,k,O);else break;C++}for(;C<=D&&C<=F;){const V=h[D],J=p[F]=O?Wt(p[F]):gt(p[F]);if(Xn(V,J))b(V,J,y,null,w,T,x,k,O);else break;D--,F--}if(C>D){if(C<=F){const V=F+1,J=V<$?p[V].el:S;for(;C<=F;)b(null,p[C]=O?Wt(p[C]):gt(p[C]),y,J,w,T,x,k,O),C++}}else if(C>F)for(;C<=D;)ue(h[C],w,T,!0),C++;else{const V=C,J=C,ae=new Map;for(C=J;C<=F;C++){const Ke=p[C]=O?Wt(p[C]):gt(p[C]);Ke.key!=null&&ae.set(Ke.key,C)}let ne,He=0;const Pe=F-J+1;let rt=!1,qe=0;const Jn=new Array(Pe);for(C=0;C<Pe;C++)Jn[C]=0;for(C=V;C<=D;C++){const Ke=h[C];if(He>=Pe){ue(Ke,w,T,!0);continue}let dt;if(Ke.key!=null)dt=ae.get(Ke.key);else for(ne=J;ne<=F;ne++)if(Jn[ne-J]===0&&Xn(Ke,p[ne])){dt=ne;break}dt===void 0?ue(Ke,w,T,!0):(Jn[dt-J]=C+1,dt>=qe?qe=dt:rt=!0,b(Ke,p[dt],y,null,w,T,x,k,O),He++)}const Ko=rt?Jp(Jn):An;for(ne=Ko.length-1,C=Pe-1;C>=0;C--){const Ke=J+C,dt=p[Ke],Go=p[Ke+1],Jo=Ke+1<$?Go.el||Go.placeholder:S;Jn[C]===0?b(null,dt,y,Jo,w,T,x,k,O):rt&&(ne<0||C!==Ko[ne]?le(dt,y,Jo,2):ne--)}}},le=(h,p,y,S,w=null)=>{const{el:T,type:x,transition:k,children:O,shapeFlag:C}=h;if(C&6){le(h.component.subTree,p,y,S);return}if(C&128){h.suspense.move(p,y,S);return}if(C&64){x.move(h,p,y,U);return}if(x===et){r(T,p,y);for(let D=0;D<O.length;D++)le(O[D],p,y,S);r(h.anchor,p,y);return}if(x===mi){A(h,p,y);return}if(S!==2&&C&1&&k)if(S===0)k.beforeEnter(T),r(T,p,y),Ge(()=>k.enter(T),w);else{const{leave:D,delayLeave:F,afterLeave:V}=k,J=()=>{h.ctx.isUnmounted?s(T):r(T,p,y)},ae=()=>{T._isLeaving&&T[yp](!0),D(T,()=>{J(),V&&V()})};F?F(T,J,ae):ae()}else r(T,p,y)},ue=(h,p,y,S=!1,w=!1)=>{const{type:T,props:x,ref:k,children:O,dynamicChildren:C,shapeFlag:$,patchFlag:D,dirs:F,cacheIndex:V}=h;if(D===-2&&(w=!1),k!=null&&(Lt(),dr(k,null,y,h,!0),Dt()),V!=null&&(p.renderCache[V]=void 0),$&256){p.ctx.deactivate(h);return}const J=$&1&&F,ae=!hr(h);let ne;if(ae&&(ne=x&&x.onVnodeBeforeUnmount)&&ht(ne,p,h),$&6)on(h.component,y,S);else{if($&128){h.suspense.unmount(y,S);return}J&&an(h,null,p,"beforeUnmount"),$&64?h.type.remove(h,p,y,U,S):C&&!C.hasOnce&&(T!==et||D>0&&D&64)?Ze(C,p,y,!1,!0):(T===et&&D&384||!w&&$&16)&&Ze(O,p,y),S&&Qe(h)}(ae&&(ne=x&&x.onVnodeUnmounted)||J)&&Ge(()=>{ne&&ht(ne,p,h),J&&an(h,null,p,"unmounted")},y)},Qe=h=>{const{type:p,el:y,anchor:S,transition:w}=h;if(p===et){Me(y,S);return}if(p===mi){P(h);return}const T=()=>{s(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:k}=w,O=()=>x(y,T);k?k(h.el,T,O):O()}else T()},Me=(h,p)=>{let y;for(;h!==p;)y=d(h),s(h),h=y;s(p)},on=(h,p,y)=>{const{bum:S,scope:w,job:T,subTree:x,um:k,m:O,a:C}=h;_a(O),_a(C),S&&is(S),w.stop(),T&&(T.flags|=8,ue(x,h,p,y)),k&&Ge(k,p),Ge(()=>{h.isUnmounted=!0},p)},Ze=(h,p,y,S=!1,w=!1,T=0)=>{for(let x=T;x<h.length;x++)ue(h[x],p,y,S,w)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),y=p&&p[mp];return y?d(y):p};let M=!1;const L=(h,p,y)=>{h==null?p._vnode&&ue(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,y),p._vnode=h,M||(M=!0,ua(),Fl(),M=!1)},U={p:b,um:ue,m:le,r:Qe,mt:Ie,mc:he,pc:z,pbc:ye,n:E,o:t};let te,de;return{render:L,hydrate:te,createApp:$p(L,te)}}function hi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Gp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ru(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Wt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ru(o,a)),a.type===Vs&&a.patchFlag!==-1&&(a.el=o.el),a.type===Zt&&!a.el&&(a.el=o.el)}}function Jp(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function su(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:su(e)}function _a(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yp=Symbol.for("v-scx"),Xp=()=>_t(Yp);function At(t,e,n){return iu(t,e,n)}function iu(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ce({},n),c=e&&r||!e&&i!=="post";let l;if(Ar){if(i==="sync"){const m=Xp();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=yt,m.resume=yt,m.pause=yt,m}}const u=xe;a.call=(m,g,b)=>wt(m,u,g,b);let f=!1;i==="post"?a.scheduler=m=>{Ge(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Ro(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=fp(t,e,a);return Ar&&(l?l.push(d):c&&d()),d}function Qp(t,e,n){const r=this.proxy,s=Te(t)?t.includes(".")?ou(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=Hr(this),a=iu(s,i.bind(r),n);return o(),a}function ou(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Zp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nt(e)}Modifiers`]||t[`${bn(e)}Modifiers`];function em(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&Zp(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>Te(u)?u.trim():u)),o.number&&(s=n.map(Mi)));let a,c=r[a=ai(e)]||r[a=ai(nt(e))];!c&&i&&(c=r[a=ai(bn(e))]),c&&wt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,s)}}const tm=new WeakMap;function au(t,e,n=!1){const r=n?tm:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=au(l,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(fe(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Ce(o,i),fe(t)&&r.set(t,o),o)}function Hs(t,e){return!t||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,bn(e))||ee(t,e))}function pi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:g,inheritAttrs:b}=t,v=vs(t);let I,R;try{if(n.shapeFlag&4){const P=s||r,j=P;I=gt(l.call(j,P,u,f,m,d,g)),R=a}else{const P=e;I=gt(P.length>1?P(f,{attrs:a,slots:o,emit:c}):P(f,null)),R=e.props?a:nm(a)}}catch(P){mr.length=0,Bs(P,t,1),I=me(Zt)}let A=I;if(R&&b!==!1){const P=Object.keys(R),{shapeFlag:j}=A;P.length&&j&7&&(i&&P.some(ho)&&(R=rm(R,i)),A=$n(A,R,!1,!0))}return n.dirs&&(A=$n(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Ao(A,n.transition),I=A,vs(v),I}const nm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ds(n))&&((e||(e={}))[n]=t[n]);return e},rm=(t,e)=>{const n={};for(const r in t)(!ho(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sm(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ba(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Hs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ba(r,o,l):!0:!!o;return!1}function ba(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hs(n,i))return!0}return!1}function im({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cu=t=>t.__isSuspense;function om(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):pp(t)}const et=Symbol.for("v-fgt"),Vs=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),mi=Symbol.for("v-stc"),mr=[];let Xe=null;function re(t=!1){mr.push(Xe=t?null:[])}function am(){mr.pop(),Xe=mr[mr.length-1]||null}let Rr=1;function Ss(t,e=!1){Rr+=t,t<0&&Xe&&e&&(Xe.hasOnce=!0)}function lu(t){return t.dynamicChildren=Rr>0?Xe||An:null,am(),Rr>0&&Xe&&Xe.push(t),t}function oe(t,e,n,r,s,i){return lu(N(t,e,n,r,s,i,!0))}function cm(t,e,n,r,s){return lu(me(t,e,n,r,s,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const uu=({key:t})=>t??null,as=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||De(t)||q(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uu(e),ref:e&&as(e),scopeId:Bl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return a?(No(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Te(n)?8:16),Rr>0&&!o&&Xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xe.push(c),c}const me=lm;function lm(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Op)&&(t=Zt),Ts(t)){const a=$n(t,e,!0);return n&&No(a,n),Rr>0&&!i&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(t)]=a:Xe.push(a)),a.patchFlag=-2,a}if(vm(t)&&(t=t.__vccOpts),e){e=um(e);let{class:a,style:c}=e;a&&!Te(a)&&(e.class=yo(a)),fe(c)&&(Io(c)&&!W(c)&&(c=Ce({},c)),e.style=go(c))}const o=Te(t)?1:cu(t)?128:gp(t)?64:fe(t)?4:q(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function um(t){return t?Io(t)||Xl(t)?Ce({},t):t:null}function $n(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?fm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&uu(l),ref:e&&e.ref?n&&i?W(i)?i.concat(as(e)):[i,as(e)]:as(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ao(u,c.clone(u)),u}function we(t=" ",e=0){return me(Vs,null,t,e)}function xn(t="",e=!1){return e?(re(),cm(Zt,null,t)):me(Zt,null,t)}function gt(t){return t==null||typeof t=="boolean"?me(Zt):W(t)?me(et,null,t.slice()):Ts(t)?Wt(t):me(Vs,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$n(t)}function No(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),No(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xl(e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),r&64?(n=16,e=[we(e)]):n=8);t.children=e,t.shapeFlag|=n}function fm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yo([e.class,r.class]));else if(s==="style")e.style=go([e.style,r.style]);else if(Ds(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ht(t,e,n,r=null){wt(t,e,7,[n,r])}const dm=Gl();let hm=0;function pm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dm,i={uid:hm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zl(r,s),emitsOptions:au(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=em.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const fu=()=>xe||Ye;let Is,qi;{const t=$s(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Is=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),qi=e("__VUE_SSR_SETTERS__",n=>Ar=n)}const Hr=t=>{const e=xe;return Is(t),t.scope.on(),()=>{t.scope.off(),Is(e)}},va=()=>{xe&&xe.scope.off(),Is(null)};function du(t){return t.vnode.shapeFlag&4}let Ar=!1;function mm(t,e=!1,n=!1){e&&qi(e);const{props:r,children:s}=t.vnode,i=du(t);Bp(t,r,i,e),Wp(t,s,n||e);const o=i?gm(t,e):void 0;return e&&qi(!1),o}function gm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Np);const{setup:r}=n;if(r){Lt();const s=t.setupContext=r.length>1?_m(t):null,i=Hr(t),o=jr(r,t,0,[t.props,s]),a=ul(o);if(Dt(),i(),(a||t.sp)&&!hr(t)&&Hl(t),a){if(o.then(va,va),e)return o.then(c=>{wa(t,c,e)}).catch(c=>{Bs(c,t,0)});t.asyncDep=o}else wa(t,o,e)}else hu(t,e)}function wa(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Dl(e)),hu(t,n)}let Ea;function hu(t,e,n){const r=t.type;if(!t.render){if(!e&&Ea&&!r.render){const s=r.template||Po(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ce(Ce({isCustomElement:i,delimiters:a},o),c);r.render=Ea(s,l)}}t.render=r.render||yt}{const s=Hr(t);Lt();try{xp(t)}finally{Dt(),s()}}}const ym={get(t,e){return Ne(t,"get",""),t[e]}};function _m(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ym),slots:t.slots,emit:t.emit,expose:e}}function Ws(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dl(xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pr)return pr[n](t)},has(e,n){return n in e||n in pr}})):t.proxy}function bm(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function vm(t){return q(t)&&"__vccOpts"in t}const tt=(t,e)=>lp(t,e,Ar);function pu(t,e,n){try{Ss(-1);const r=arguments.length;return r===2?fe(e)&&!W(e)?Ts(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ts(n)&&(n=[n]),me(t,e,n))}finally{Ss(1)}}const wm="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ki;const Sa=typeof window<"u"&&window.trustedTypes;if(Sa)try{Ki=Sa.createPolicy("vue",{createHTML:t=>t})}catch{}const mu=Ki?t=>Ki.createHTML(t):t=>t,Em="http://www.w3.org/2000/svg",Sm="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,Ta=Tt&&Tt.createElement("template"),Tm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tt.createElementNS(Em,t):e==="mathml"?Tt.createElementNS(Sm,t):n?Tt.createElement(t,{is:n}):Tt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ta.innerHTML=mu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ta.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Im=Symbol("_vtc");function Cm(t,e,n){const r=t[Im];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ia=Symbol("_vod"),Rm=Symbol("_vsh"),Am=Symbol(""),Pm=/(?:^|;)\s*display\s*:/;function Om(t,e,n){const r=t.style,s=Te(n);let i=!1;if(n&&!s){if(e)if(Te(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cs(r,a,"")}else for(const o in e)n[o]==null&&cs(r,o,"");for(const o in n)o==="display"&&(i=!0),cs(r,o,n[o])}else if(s){if(e!==n){const o=r[Am];o&&(n+=";"+o),r.cssText=n,i=Pm.test(n)}}else e&&t.removeAttribute("style");Ia in t&&(t[Ia]=i?r.display:"",t[Rm]&&(r.display="none"))}const Ca=/\s*!important$/;function cs(t,e,n){if(W(n))n.forEach(r=>cs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=km(t,e);Ca.test(n)?t.setProperty(bn(r),n.replace(Ca,""),"important"):t[r]=n}}const Ra=["Webkit","Moz","ms"],gi={};function km(t,e){const n=gi[e];if(n)return n;let r=nt(e);if(r!=="filter"&&r in t)return gi[e]=r;r=Fs(r);for(let s=0;s<Ra.length;s++){const i=Ra[s]+r;if(i in t)return gi[e]=i}return e}const Aa="http://www.w3.org/1999/xlink";function Pa(t,e,n,r,s,i=Fh(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Aa,e.slice(6,e.length)):t.setAttributeNS(Aa,e,n):n==null||i&&!pl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tn(n)?String(n):n)}function Oa(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mu(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=pl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Sn(t,e,n,r){t.addEventListener(e,n,r)}function Nm(t,e,n,r){t.removeEventListener(e,n,r)}const ka=Symbol("_vei");function xm(t,e,n,r,s=null){const i=t[ka]||(t[ka]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Lm(e);if(r){const l=i[e]=Um(r,s);Sn(t,a,l,c)}else o&&(Nm(t,a,o,c),i[e]=void 0)}}const Na=/(?:Once|Passive|Capture)$/;function Lm(t){let e;if(Na.test(t)){e={};let r;for(;r=t.match(Na);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bn(t.slice(2)),e]}let yi=0;const Dm=Promise.resolve(),Mm=()=>yi||(Dm.then(()=>yi=0),yi=Date.now());function Um(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;wt(Fm(r,n.value),e,5,[r])};return n.value=t,n.attached=Mm(),n}function Fm(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$m=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Cm(t,r,o):e==="style"?Om(t,n,r):Ds(e)?ho(e)||xm(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bm(t,e,r,o))?(Oa(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pa(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Te(r))?Oa(t,nt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pa(t,e,r,o))};function Bm(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xa(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xa(e)&&Te(n)?!1:e in t}const La=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>is(e,n):e};function jm(t){t.target.composing=!0}function Da(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _i=Symbol("_assign"),Pr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_i]=La(s);const i=r||s.props&&s.props.type==="number";Sn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Mi(a)),t[_i](a)}),n&&Sn(t,"change",()=>{t.value=t.value.trim()}),e||(Sn(t,"compositionstart",jm),Sn(t,"compositionend",Da),Sn(t,"change",Da))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_i]=La(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Mi(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Hm=Ce({patchProp:$m},Tm);let Ma;function Vm(){return Ma||(Ma=qp(Hm))}const Wm=(...t)=>{const e=Vm().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qm(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,zm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qm(t){return Te(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Km=Symbol();var Ua;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ua||(Ua={}));function Gm(){const t=$h(!0),e=t.run(()=>ge({}));let n=[],r=[];const s=xl({install(i){s._a=i,i.provide(Km,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}function gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jm=gu,yu=new Ur("auth","Firebase",gu());/**
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
 */const Cs=new tl("@firebase/auth");function Ym(t,...e){Cs.logLevel<=se.WARN&&Cs.warn(`Auth (${$r}): ${t}`,...e)}function ls(t,...e){Cs.logLevel<=se.ERROR&&Cs.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw xo(t,...e)}function bt(t,...e){return xo(t,...e)}function _u(t,e,n){const r={...Jm(),[e]:n};return new Ur("auth","Firebase",r).create(e,{appName:t.name})}function Nt(t){return _u(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yu.create(t,...e)}function B(t,e,...n){if(!t)throw xo(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ls(e),new Error(e)}function Mt(t,e){t||Pt(e)}/**
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
 */function Gi(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Xm(){return Fa()==="http:"||Fa()==="https:"}function Fa(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Qm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xm()||od()||"connection"in navigator)?navigator.onLine:!0}function Zm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||ad()}get(){return Qm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lo(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ng=new Vr(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function sn(t,e,n,r,s={}){return vu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fr({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return id()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&Ls(t.emulatorConfig.host)&&(l.credentials="include"),bu.fetch()(await wu(t,t.config.apiHost,n,a),l)})}async function vu(t,e,n){t._canInitEmulator=!1;const r={...eg,...e};try{const s=new sg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ns(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _u(t,u,l);lt(t,u)}}catch(s){if(s instanceof en)throw s;lt(t,"network-request-failed",{message:String(s)})}}async function Wr(t,e,n,r,s={}){const i=await sn(t,e,n,r,s);return"mfaPendingCredential"in i&&lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function wu(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Lo(t.config,s):`${t.config.apiScheme}://${s}`;return tg.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function rg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),ng.get())})}}function ns(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bt(t,e,r);return s.customData._tokenResponse=n,s}function $a(t){return t!==void 0&&t.enterprise!==void 0}class ig{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function og(t,e){return sn(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
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
 */async function ag(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function Rs(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zr(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=Do(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gr(bi(s.auth_time)),issuedAtTime:gr(bi(s.iat)),expirationTime:gr(bi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bi(t){return Number(t)*1e3}function Do(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qc(n);return s?JSON.parse(s):(ls("Failed to decode base64 JWT payload"),null)}catch(s){return ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ba(t){const e=Do(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&cg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ji{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Or(t,Rs(e,{idToken:n}));B(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?Eu(s.providerUserInfo):[],o=fg(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ji(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function ug(t){const e=Ft(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Eu(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function dg(t,e){const n=await vu(t,{},async()=>{const r=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await wu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ls(t.emulatorConfig.host)&&(c.credentials="include"),bu.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hg(t,e){return sn(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
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
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ba(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Ba(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ln;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Bt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new lg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ji(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Or(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zr(this,e)}reload(){return ug(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(Nt(this.auth));const e=await this.getIdToken();return await Or(this,ag(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:g,stsTokenManager:b}=n;B(f&&b,e,"internal-error");const v=Ln.fromJSON(this.name,b);B(typeof f=="string",e,"internal-error"),Bt(r,e.name),Bt(s,e.name),B(typeof d=="boolean",e,"internal-error"),B(typeof m=="boolean",e,"internal-error"),Bt(i,e.name),Bt(o,e.name),Bt(a,e.name),Bt(c,e.name),Bt(l,e.name),Bt(u,e.name);const I=new ot({uid:f,auth:e,email:s,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:v,createdAt:l,lastLoginAt:u});return g&&Array.isArray(g)&&(I.providerData=g.map(R=>({...R}))),c&&(I._redirectEventId=c),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ln;s.updateFromServerResponse(n);const i=new ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await As(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Eu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ln;a.updateFromIdToken(r);const c=new ot({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ji(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const ja=new Map;function Ot(t){Mt(t instanceof Function,"Expected a class definition");let e=ja.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ja.set(t,e),e)}/**
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
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Su.type="NONE";const Ha=Su;/**
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
 */function us(t,e,n){return`firebase:${t}:${e}:${n}`}class Dn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=us(this.userKey,s.apiKey,i),this.fullPersistenceKey=us("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Rs(this.auth,{idToken:e}).catch(()=>{});return n?ot._fromGetAccountInfoResponse(this.auth,n,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dn(Ot(Ha),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ot(Ha);const o=us(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Rs(e,{idToken:u}).catch(()=>{});if(!d)break;f=await ot._fromGetAccountInfoResponse(e,d,u)}else f=ot._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Dn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Dn(i,e,r))}}/**
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
 */function Va(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pu(e))return"Blackberry";if(Ou(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Cu(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tu(t=Be()){return/firefox\//i.test(t)}function Iu(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cu(t=Be()){return/crios\//i.test(t)}function Ru(t=Be()){return/iemobile/i.test(t)}function Au(t=Be()){return/android/i.test(t)}function Pu(t=Be()){return/blackberry/i.test(t)}function Ou(t=Be()){return/webos/i.test(t)}function Mo(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pg(t=Be()){var e;return Mo(t)&&!!((e=window.navigator)!=null&&e.standalone)}function mg(){return cd()&&document.documentMode===10}function ku(t=Be()){return Mo(t)||Au(t)||Ou(t)||Pu(t)||/windows phone/i.test(t)||Ru(t)}/**
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
 */function Nu(t,e=[]){let n;switch(t){case"Browser":n=Va(Be());break;case"Worker":n=`${Va(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yg(t,e={}){return sn(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
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
 */const _g=6;class bg{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_g,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class vg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wa(this),this.idTokenSubscription=new Wa(this),this.beforeStateQueue=new gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rs(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(it(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(Nt(this));const n=e?Ft(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(Nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(Nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yg(this),n=new bg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ym(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vn(t){return Ft(t)}class Wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=md(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wg(t){zs=t}function xu(t){return zs.loadJS(t)}function Eg(){return zs.recaptchaEnterpriseScript}function Sg(){return zs.gapiScript}function Tg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ig{constructor(){this.enterprise=new Cg}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Cg{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Rg="recaptcha-enterprise",Lu="NO_RECAPTCHA";class Ag{constructor(e){this.type=Rg,this.auth=vn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{og(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ig(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;$a(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Lu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ig().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&$a(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Eg();c.length!==0&&(c+=a),xu(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function za(t,e,n,r=!1,s=!1){const i=new Ag(t);let o;if(s)o=Lu;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yi(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await za(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await za(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function Pg(t,e){const n=sl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Un(i,e??{}))return s;lt(s,"already-initialized")}return n.initialize({options:e})}function Og(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kg(t,e,n){const r=vn(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Du(e),{host:o,port:a}=Ng(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(Un(l,r.config.emulator)&&Un(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ls(o)?(ed(`${i}//${o}${c}`),rd("Auth",!0)):xg()}function Du(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ng(t){const e=Du(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qa(o)}}}function qa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function Lg(t,e){return sn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Dg(t,e){return Wr(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}/**
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
 */async function Mg(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function Ug(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
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
 */class kr extends Uo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new kr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new kr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,n,"signInWithPassword",Dg);case"emailLink":return Mg(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,r,"signUpPassword",Lg);case"emailLink":return Ug(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mn(t,e){return Wr(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
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
 */const Fg="http://localhost";class mn extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new mn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mn(e,n)}buildRequest(){const e={requestUri:Fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
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
 */function $g(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bg(t){const e=rr(sr(t)).link,n=e?rr(sr(e)).deep_link_id:null,r=rr(sr(t)).deep_link_id;return(r?rr(sr(r)).link:null)||r||n||e||t}class Fo{constructor(e){const n=rr(sr(e)),r=n.apiKey??null,s=n.oobCode??null,i=$g(n.mode??null);B(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Bg(e);try{return new Fo(n)}catch{return null}}}/**
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
 */class Wn{constructor(){this.providerId=Wn.PROVIDER_ID}static credential(e,n){return kr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fo.parseLink(n);return B(r,"argument-error"),kr._fromEmailAndCode(e,r.code,r.tenantId)}}Wn.PROVIDER_ID="password";Wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qr extends Mu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends qr{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class Gt extends qr{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Jt extends qr{constructor(){super("twitter.com")}static credential(e,n){return mn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function jg(t,e){return Wr(t,"POST","/v1/accounts:signUp",rn(t,e))}/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ot._fromIdTokenResponse(e,r,s),o=Ka(r);return new gn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ka(r);return new gn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ka(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ps extends en{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ps(e,n,r,s)}}function Uu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(t,i,e,r):i})}async function Hg(t,e,n=!1){const r=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",r)}/**
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
 */async function Vg(t,e,n=!1){const{auth:r}=t;if(it(r.app))return Promise.reject(Nt(r));const s="reauthenticate";try{const i=await Or(t,Uu(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=Do(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),gn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),i}}/**
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
 */async function Fu(t,e,n=!1){if(it(t.app))return Promise.reject(Nt(t));const r="signIn",s=await Uu(t,r,e),i=await gn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Wg(t,e){return Fu(vn(t),e)}/**
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
 */async function $u(t){const e=vn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zg(t,e,n){if(it(t.app))return Promise.reject(Nt(t));const r=vn(t),o=await Yi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jg).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&$u(t),c}),a=await gn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qg(t,e,n){return it(t.app)?Promise.reject(Nt(t)):Wg(Ft(t),Wn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$u(t),r})}function Kg(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function Gg(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function zn(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}function Kr(t){return Ft(t).signOut()}const Os="__sak";/**
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
 */class Bu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Jg=1e3,Yg=10;class ju extends Bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ku(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Yg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ju.type="LOCAL";const Xg=ju;/**
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
 */class Hu extends Bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hu.type="SESSION";const Vu=Hu;/**
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
 */function Qg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Qg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
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
 */function $o(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$o("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vt(){return window}function ey(t){vt().location.href=t}/**
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
 */function Wu(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function ty(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ny(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ry(){return Wu()?self:null}/**
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
 */const zu="firebaseLocalStorageDb",sy=1,ks="firebaseLocalStorage",qu="fbase_key";class Gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function iy(){const t=indexedDB.deleteDatabase(zu);return new Gr(t).toPromise()}function Xi(){const t=indexedDB.open(zu,sy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ks,{keyPath:qu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ks)?e(r):(r.close(),await iy(),e(await Xi()))})})}async function Ga(t,e,n){const r=Ks(t,!0).put({[qu]:e,value:n});return new Gr(r).toPromise()}async function oy(t,e){const n=Ks(t,!1).get(e),r=await new Gr(n).toPromise();return r===void 0?null:r.value}function Ja(t,e){const n=Ks(t,!0).delete(e);return new Gr(n).toPromise()}const ay=800,cy=3;class Ku{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(ry()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ty(),!this.activeServiceWorker)return;this.sender=new Zg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ny()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xi();return await Ga(e,Os,"1"),await Ja(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ga(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oy(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ja(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ku.type="LOCAL";const ly=Ku;new Vr(3e4,6e4);/**
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
 */function uy(t,e){return e?Ot(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bo extends Uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fy(t){return Fu(t.auth,new Bo(t),t.bypassAuthState)}function dy(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Vg(n,new Bo(t),t.bypassAuthState)}async function hy(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Hg(n,new Bo(t),t.bypassAuthState)}/**
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
 */class Gu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fy;case"linkViaPopup":case"linkViaRedirect":return hy;case"reauthViaPopup":case"reauthViaRedirect":return dy;default:lt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const py=new Vr(2e3,1e4);class In extends Gu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,py.get())};e()}}In.currentPopupAction=null;/**
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
 */const my="pendingRedirect",fs=new Map;class gy extends Gu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await yy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yy(t,e){const n=vy(e),r=by(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _y(t,e){fs.set(t._key(),e)}function by(t){return Ot(t._redirectPersistence)}function vy(t){return us(my,t.config.apiKey,t.name)}async function wy(t,e,n=!1){if(it(t.app))return Promise.reject(Nt(t));const r=vn(t),s=uy(r,e),o=await new gy(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ey=10*60*1e3;class Sy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ty(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ju(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ey&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ya(e))}saveEventToCache(e){this.cachedEventUids.add(Ya(e)),this.lastProcessedEventTime=Date.now()}}function Ya(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ju({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ty(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ju(t);default:return!1}}/**
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
 */async function Iy(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
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
 */const Cy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ry=/^https?/;async function Ay(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Iy(t);for(const n of e)try{if(Py(n))return}catch{}lt(t,"unauthorized-domain")}function Py(t){const e=Gi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ry.test(n))return!1;if(Cy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Oy=new Vr(3e4,6e4);function Xa(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ky(t){return new Promise((e,n)=>{var s,i,o;function r(){Xa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xa(),n(bt(t,"network-request-failed"))},timeout:Oy.get()})}if((i=(s=vt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=vt().gapi)!=null&&o.load)r();else{const a=Tg("iframefcb");return vt()[a]=()=>{gapi.load?r():n(bt(t,"network-request-failed"))},xu(`${Sg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ds=null,e})}let ds=null;function Ny(t){return ds=ds||ky(t),ds}/**
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
 */const xy=new Vr(5e3,15e3),Ly="__/auth/iframe",Dy="emulator/auth/iframe",My={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fy(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lo(e,Dy):`https://${t.config.authDomain}/${Ly}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=Uy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fr(r).slice(1)}`}async function $y(t){const e=await Ny(t),n=vt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Fy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=vt().setTimeout(()=>{i(o)},xy.get());function c(){vt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const By={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jy=500,Hy=600,Vy="_blank",Wy="http://localhost";class Qa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zy(t,e,n,r=jy,s=Hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...By,width:r.toString(),height:s.toString(),top:i,left:o},l=Be().toLowerCase();n&&(a=Cu(l)?Vy:n),Tu(l)&&(e=e||Wy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(pg(l)&&a!=="_self")return qy(e||"",a),new Qa(null);const f=window.open(e||"",a,u);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Qa(f)}function qy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ky="__/auth/handler",Gy="emulator/auth/handler",Jy=encodeURIComponent("fac");async function Za(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Mu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof qr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Jy}=${encodeURIComponent(c)}`:"";return`${Yy(t)}?${Fr(a).slice(1)}${l}`}function Yy({config:t}){return t.emulator?Lo(t,Gy):`https://${t.authDomain}/${Ky}`}/**
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
 */const vi="webStorageSupport";class Xy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vu,this._completeRedirectFn=wy,this._overrideRedirectResult=_y}async _openPopup(e,n,r,s){var o;Mt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Za(e,n,r,Gi(),s);return zy(e,i,$o())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Za(e,n,r,Gi(),s);return ey(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $y(e),r=new Sy(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vi,{type:vi},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[vi];i!==void 0&&n(!!i),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ay(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ku()||Iu()||Mo()}}const Qy=Xy;var ec="@firebase/auth",tc="1.11.0";/**
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
 */class Zy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function e_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t_(t){wr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nu(t)},l=new vg(r,s,i,c);return Og(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wr(new Fn("auth-internal",e=>{const n=vn(e.getProvider("auth").getImmediate());return(r=>new Zy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(ec,tc,e_(t)),Rn(ec,tc,"esm2020")}/**
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
 */const n_=5*60,r_=el("authIdTokenMaxAge")||n_;let nc=null;const s_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r_)return;const s=n==null?void 0:n.token;nc!==s&&(nc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ut(t=gh()){const e=sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pg(t,{popupRedirectResolver:Qy,persistence:[ly,Xg,Vu]}),r=el("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=s_(i.toString());Gg(n,o,()=>o(n.currentUser)),Kg(n,a=>o(a))}}const s=Qf("auth");return s&&kg(n,`http://${s}`),n}function i_(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}wg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",i_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t_("Browser");const o_={class:"container"},a_={class:"d-flex justify-content-center py-3"},c_={class:"nav nav-pills align-items-center"},l_={class:"nav-item"},u_={class:"nav-item"},f_={class:"nav-item"},d_={class:"nav-item"},h_={class:"nav-item"},p_={key:0,class:"nav-item"},m_={key:1,class:"nav-item"},g_={key:2,class:"nav-item"},Yu={__name:"BHeader",setup(t){const e=ge(null),n=Ut();nn(()=>{zn(n,s=>{e.value=s})});const r=async()=>{try{await Kr(n),console.log("Current User after logout:",n.currentUser),e.value=null}catch(s){console.error("Logout error:",s)}};return(s,i)=>{const o=ql("router-link");return re(),oe("div",o_,[N("header",a_,[N("ul",c_,[N("li",l_,[me(o,{to:"/",class:"nav-link","exact-active-class":"active","aria-current":"page"},{default:Ht(()=>[...i[0]||(i[0]=[we(" Home (Week 5) ",-1)])]),_:1})]),N("li",u_,[me(o,{to:"/WeartherCheck",class:"nav-link","exact-active-class":"active","aria-current":"page"},{default:Ht(()=>[...i[1]||(i[1]=[we(" weathercheck ",-1)])]),_:1})]),N("li",f_,[me(o,{to:"/getbook",class:"nav-link","exact-active-class":"active","aria-current":"page"},{default:Ht(()=>[...i[2]||(i[2]=[we(" getbook ",-1)])]),_:1})]),N("li",d_,[me(o,{to:"/addbook",class:"nav-link","exact-active-class":"active"},{default:Ht(()=>[...i[3]||(i[3]=[we(" addbook ",-1)])]),_:1})]),N("li",h_,[me(o,{to:"/getAllBookAPI",class:"nav-link","exact-active-class":"active"},{default:Ht(()=>[...i[4]||(i[4]=[we(" getAllBookAPI ",-1)])]),_:1})]),e.value?xn("",!0):(re(),oe("li",p_,[me(o,{to:"/FireLogin",class:"nav-link","active-class":"active"},{default:Ht(()=>[...i[5]||(i[5]=[we(" Firebase Login ",-1)])]),_:1})])),e.value?(re(),oe("li",g_,[N("button",{class:"nav-link btn btn-link p-0",onClick:r}," Logout ("+_e(e.value.displayName||e.value.email)+") ",1)])):(re(),oe("li",m_,[me(o,{to:"/FireRegister",class:"nav-link","active-class":"active"},{default:Ht(()=>[...i[6]||(i[6]=[we(" Firebase Register ",-1)])]),_:1})]))])])])}}};function Xu(t,e){return function(){return t.apply(e,arguments)}}const{toString:y_}=Object.prototype,{getPrototypeOf:jo}=Object,{iterator:Gs,toStringTag:Qu}=Symbol,Js=(t=>e=>{const n=y_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ft=t=>(t=t.toLowerCase(),e=>Js(e)===t),Ys=t=>e=>typeof e===t,{isArray:qn}=Array,Bn=Ys("undefined");function Jr(t){return t!==null&&!Bn(t)&&t.constructor!==null&&!Bn(t.constructor)&&We(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Zu=ft("ArrayBuffer");function __(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Zu(t.buffer),e}const b_=Ys("string"),We=Ys("function"),ef=Ys("number"),Yr=t=>t!==null&&typeof t=="object",v_=t=>t===!0||t===!1,hs=t=>{if(Js(t)!=="object")return!1;const e=jo(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Qu in t)&&!(Gs in t)},w_=t=>{if(!Yr(t)||Jr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},E_=ft("Date"),S_=ft("File"),T_=ft("Blob"),I_=ft("FileList"),C_=t=>Yr(t)&&We(t.pipe),R_=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||We(t.append)&&((e=Js(t))==="formdata"||e==="object"&&We(t.toString)&&t.toString()==="[object FormData]"))},A_=ft("URLSearchParams"),[P_,O_,k_,N_]=["ReadableStream","Request","Response","Headers"].map(ft),x_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),qn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(Jr(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function tf(t,e){if(Jr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const fn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,nf=t=>!Bn(t)&&t!==fn;function Qi(){const{caseless:t,skipUndefined:e}=nf(this)&&this||{},n={},r=(s,i)=>{const o=t&&tf(n,i)||i;hs(n[o])&&hs(s)?n[o]=Qi(n[o],s):hs(s)?n[o]=Qi({},s):qn(s)?n[o]=s.slice():(!e||!Bn(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Xr(arguments[s],r);return n}const L_=(t,e,n,{allOwnKeys:r}={})=>(Xr(e,(s,i)=>{n&&We(s)?t[i]=Xu(s,n):t[i]=s},{allOwnKeys:r}),t),D_=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),M_=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},U_=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&jo(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},F_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},$_=t=>{if(!t)return null;if(qn(t))return t;let e=t.length;if(!ef(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},B_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&jo(Uint8Array)),j_=(t,e)=>{const r=(t&&t[Gs]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},H_=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},V_=ft("HTMLFormElement"),W_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),rc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),z_=ft("RegExp"),rf=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Xr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},q_=t=>{rf(t,(e,n)=>{if(We(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(We(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},K_=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return qn(t)?r(t):r(String(t).split(e)),n},G_=()=>{},J_=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Y_(t){return!!(t&&We(t.append)&&t[Qu]==="FormData"&&t[Gs])}const X_=t=>{const e=new Array(10),n=(r,s)=>{if(Yr(r)){if(e.indexOf(r)>=0)return;if(Jr(r))return r;if(!("toJSON"in r)){e[s]=r;const i=qn(r)?[]:{};return Xr(r,(o,a)=>{const c=n(o,s+1);!Bn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Q_=ft("AsyncFunction"),Z_=t=>t&&(Yr(t)||We(t))&&We(t.then)&&We(t.catch),sf=((t,e)=>t?setImmediate:e?((n,r)=>(fn.addEventListener("message",({source:s,data:i})=>{s===fn&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),fn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",We(fn.postMessage)),eb=typeof queueMicrotask<"u"?queueMicrotask.bind(fn):typeof process<"u"&&process.nextTick||sf,tb=t=>t!=null&&We(t[Gs]),_={isArray:qn,isArrayBuffer:Zu,isBuffer:Jr,isFormData:R_,isArrayBufferView:__,isString:b_,isNumber:ef,isBoolean:v_,isObject:Yr,isPlainObject:hs,isEmptyObject:w_,isReadableStream:P_,isRequest:O_,isResponse:k_,isHeaders:N_,isUndefined:Bn,isDate:E_,isFile:S_,isBlob:T_,isRegExp:z_,isFunction:We,isStream:C_,isURLSearchParams:A_,isTypedArray:B_,isFileList:I_,forEach:Xr,merge:Qi,extend:L_,trim:x_,stripBOM:D_,inherits:M_,toFlatObject:U_,kindOf:Js,kindOfTest:ft,endsWith:F_,toArray:$_,forEachEntry:j_,matchAll:H_,isHTMLForm:V_,hasOwnProperty:rc,hasOwnProp:rc,reduceDescriptors:rf,freezeMethods:q_,toObjectSet:K_,toCamelCase:W_,noop:G_,toFiniteNumber:J_,findKey:tf,global:fn,isContextDefined:nf,isSpecCompliantForm:Y_,toJSONObject:X_,isAsyncFn:Q_,isThenable:Z_,setImmediate:sf,asap:eb,isIterable:tb};function K(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const of=K.prototype,af={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{af[t]={value:t}});Object.defineProperties(K,af);Object.defineProperty(of,"isAxiosError",{value:!0});K.from=(t,e,n,r,s,i)=>{const o=Object.create(of);_.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError");const a=t&&t.message?t.message:"Error",c=e==null&&t?t.code:e;return K.call(o,a,c,n,r,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const nb=null;function Zi(t){return _.isPlainObject(t)||_.isArray(t)}function cf(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function sc(t,e,n){return t?t.concat(e).map(function(s,i){return s=cf(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function rb(t){return _.isArray(t)&&!t.some(Zi)}const sb=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function Xs(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,v){return!_.isUndefined(v[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(_.isDate(g))return g.toISOString();if(_.isBoolean(g))return g.toString();if(!c&&_.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(g)||_.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,b,v){let I=g;if(g&&!v&&typeof g=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),g=JSON.stringify(g);else if(_.isArray(g)&&rb(g)||(_.isFileList(g)||_.endsWith(b,"[]"))&&(I=_.toArray(g)))return b=cf(b),I.forEach(function(A,P){!(_.isUndefined(A)||A===null)&&e.append(o===!0?sc([b],P,i):o===null?b:b+"[]",l(A))}),!1}return Zi(g)?!0:(e.append(sc(v,b,i),l(g)),!1)}const f=[],d=Object.assign(sb,{defaultVisitor:u,convertValue:l,isVisitable:Zi});function m(g,b){if(!_.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(g),_.forEach(g,function(I,R){(!(_.isUndefined(I)||I===null)&&s.call(e,I,_.isString(R)?R.trim():R,b,d))===!0&&m(I,b?b.concat(R):[R])}),f.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return m(t),e}function ic(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ho(t,e){this._pairs=[],t&&Xs(t,this,e)}const lf=Ho.prototype;lf.append=function(e,n){this._pairs.push([e,n])};lf.toString=function(e){const n=e?function(r){return e.call(this,r,ic)}:ic;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ib(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function uf(t,e,n){if(!e)return t;const r=n&&n.encode||ib;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=_.isURLSearchParams(e)?e.toString():new Ho(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class oc{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ff={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ob=typeof URLSearchParams<"u"?URLSearchParams:Ho,ab=typeof FormData<"u"?FormData:null,cb=typeof Blob<"u"?Blob:null,lb={isBrowser:!0,classes:{URLSearchParams:ob,FormData:ab,Blob:cb},protocols:["http","https","file","blob","url","data"]},Vo=typeof window<"u"&&typeof document<"u",eo=typeof navigator=="object"&&navigator||void 0,ub=Vo&&(!eo||["ReactNative","NativeScript","NS"].indexOf(eo.product)<0),fb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",db=Vo&&window.location.href||"http://localhost",hb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vo,hasStandardBrowserEnv:ub,hasStandardBrowserWebWorkerEnv:fb,navigator:eo,origin:db},Symbol.toStringTag,{value:"Module"})),Le={...hb,...lb};function pb(t,e){return Xs(t,new Le.classes.URLSearchParams,{visitor:function(n,r,s,i){return Le.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function mb(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function gb(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function df(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=gb(s[o])),!a)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,(r,s)=>{e(mb(r),s,n,0)}),n}return null}function yb(t,e,n){if(_.isString(t))try{return(e||JSON.parse)(t),_.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Qr={transitional:ff,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return s?JSON.stringify(df(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e)||_.isReadableStream(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return pb(e,this.formSerializer).toString();if((a=_.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Xs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),yb(e)):e}],transformResponse:[function(e){const n=this.transitional||Qr.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(e)||_.isReadableStream(e))return e;if(e&&_.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?K.from(a,K.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Le.classes.FormData,Blob:Le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{Qr.headers[t]={}});const _b=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&_b[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},ac=Symbol("internals");function Qn(t){return t&&String(t).trim().toLowerCase()}function ps(t){return t===!1||t==null?t:_.isArray(t)?t.map(ps):String(t)}function vb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const wb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function wi(t,e,n,r,s){if(_.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!_.isString(e)){if(_.isString(r))return e.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(e)}}function Eb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Sb(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ze{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Qn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=ps(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(_.isString(e)&&(e=e.trim())&&!wb(e))o(bb(e),n);else if(_.isObject(e)&&_.isIterable(e)){let a={},c,l;for(const u of e){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=Qn(e),e){const r=_.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return vb(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Qn(e),e){const r=_.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||wi(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Qn(o),o){const a=_.findKey(r,o);a&&(!n||wi(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||wi(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=ps(s),delete n[i];return}const a=e?Eb(i):String(i).trim();a!==i&&delete n[i],n[a]=ps(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[ac]=this[ac]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Qn(o);r[a]||(Sb(s,o),r[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}}ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(ze.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});_.freezeMethods(ze);function Ei(t,e){const n=this||Qr,r=e||n,s=ze.from(r.headers);let i=r.data;return _.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function hf(t){return!!(t&&t.__CANCEL__)}function Kn(t,e,n){K.call(this,t??"canceled",K.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(Kn,K,{__CANCEL__:!0});function pf(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Tb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ib(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function Cb(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Ns=(t,e,n=3)=>{let r=0;const s=Ib(50,250);return Cb(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},cc=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},lc=t=>(...e)=>_.asap(()=>t(...e)),Rb=Le.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Le.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Le.origin),Le.navigator&&/(msie|trident)/i.test(Le.navigator.userAgent)):()=>!0,Ab=Le.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ob(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function mf(t,e,n){let r=!Pb(e);return t&&(r||n==!1)?Ob(t,e):e}const uc=t=>t instanceof ze?{...t}:t;function yn(t,e){e=e||{};const n={};function r(l,u,f,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,d)}else return r(l,u,f,d)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(uc(l),uc(u),f,!0)};return _.forEach(Object.keys({...t,...e}),function(u){const f=c[u]||s,d=f(t[u],e[u],u);_.isUndefined(d)&&f!==a||(n[u]=d)}),n}const gf=t=>{const e=yn({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;if(e.headers=o=ze.from(o),e.url=uf(mf(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),_.isFormData(n)){if(Le.hasStandardBrowserEnv||Le.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(_.isFunction(n.getHeaders)){const c=n.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,f])=>{l.includes(u.toLowerCase())&&o.set(u,f)})}}if(Le.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(e)),r||r!==!1&&Rb(e.url))){const c=s&&i&&Ab.read(i);c&&o.set(s,c)}return e},kb=typeof XMLHttpRequest<"u",Nb=kb&&function(t){return new Promise(function(n,r){const s=gf(t);let i=s.data;const o=ze.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,d,m,g;function b(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let v=new XMLHttpRequest;v.open(s.method.toUpperCase(),s.url,!0),v.timeout=s.timeout;function I(){if(!v)return;const A=ze.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),j={data:!a||a==="text"||a==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:A,config:t,request:v};pf(function(H){n(H),b()},function(H){r(H),b()},j),v=null}"onloadend"in v?v.onloadend=I:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(I)},v.onabort=function(){v&&(r(new K("Request aborted",K.ECONNABORTED,t,v)),v=null)},v.onerror=function(P){const j=P&&P.message?P.message:"Network Error",Y=new K(j,K.ERR_NETWORK,t,v);Y.event=P||null,r(Y),v=null},v.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const j=s.transitional||ff;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new K(P,j.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,t,v)),v=null},i===void 0&&o.setContentType(null),"setRequestHeader"in v&&_.forEach(o.toJSON(),function(P,j){v.setRequestHeader(j,P)}),_.isUndefined(s.withCredentials)||(v.withCredentials=!!s.withCredentials),a&&a!=="json"&&(v.responseType=s.responseType),l&&([d,g]=Ns(l,!0),v.addEventListener("progress",d)),c&&v.upload&&([f,m]=Ns(c),v.upload.addEventListener("progress",f),v.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=A=>{v&&(r(!A||A.type?new Kn(null,t,v):A),v.abort(),v=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=Tb(s.url);if(R&&Le.protocols.indexOf(R)===-1){r(new K("Unsupported protocol "+R+":",K.ERR_BAD_REQUEST,t));return}v.send(i||null)})},xb=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof K?u:new Kn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new K(`timeout ${e} of ms exceeded`,K.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},Lb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},Db=async function*(t,e){for await(const n of Mb(t))yield*Lb(n,e)},Mb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},fc=(t,e,n,r)=>{const s=Db(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},dc=64*1024,{isFunction:rs}=_,Ub=(({Request:t,Response:e})=>({Request:t,Response:e}))(_.global),{ReadableStream:hc,TextEncoder:pc}=_.global,mc=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Fb=t=>{t=_.merge.call({skipUndefined:!0},Ub,t);const{fetch:e,Request:n,Response:r}=t,s=e?rs(e):typeof fetch=="function",i=rs(n),o=rs(r);if(!s)return!1;const a=s&&rs(hc),c=s&&(typeof pc=="function"?(g=>b=>g.encode(b))(new pc):async g=>new Uint8Array(await new n(g).arrayBuffer())),l=i&&a&&mc(()=>{let g=!1;const b=new n(Le.origin,{body:new hc,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!b}),u=o&&a&&mc(()=>_.isReadableStream(new r("").body)),f={stream:u&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(b,v)=>{let I=b&&b[g];if(I)return I.call(b);throw new K(`Response type '${g}' is not supported`,K.ERR_NOT_SUPPORT,v)})});const d=async g=>{if(g==null)return 0;if(_.isBlob(g))return g.size;if(_.isSpecCompliantForm(g))return(await new n(Le.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(_.isArrayBufferView(g)||_.isArrayBuffer(g))return g.byteLength;if(_.isURLSearchParams(g)&&(g=g+""),_.isString(g))return(await c(g)).byteLength},m=async(g,b)=>{const v=_.toFiniteNumber(g.getContentLength());return v??d(b)};return async g=>{let{url:b,method:v,data:I,signal:R,cancelToken:A,timeout:P,onDownloadProgress:j,onUploadProgress:Y,responseType:H,headers:he,withCredentials:pe="same-origin",fetchOptions:ye}=gf(g),Ee=e||fetch;H=H?(H+"").toLowerCase():"text";let Se=xb([R,A&&A.toAbortSignal()],P),ve=null;const Ie=Se&&Se.unsubscribe&&(()=>{Se.unsubscribe()});let je;try{if(Y&&l&&v!=="get"&&v!=="head"&&(je=await m(he,I))!==0){let le=new n(b,{method:"POST",body:I,duplex:"half"}),ue;if(_.isFormData(I)&&(ue=le.headers.get("content-type"))&&he.setContentType(ue),le.body){const[Qe,Me]=cc(je,Ns(lc(Y)));I=fc(le.body,dc,Qe,Me)}}_.isString(pe)||(pe=pe?"include":"omit");const X=i&&"credentials"in n.prototype,G={...ye,signal:Se,method:v.toUpperCase(),headers:he.normalize().toJSON(),body:I,duplex:"half",credentials:X?pe:void 0};ve=i&&new n(b,G);let z=await(i?Ee(ve,ye):Ee(b,G));const Ae=u&&(H==="stream"||H==="response");if(u&&(j||Ae&&Ie)){const le={};["status","statusText","headers"].forEach(on=>{le[on]=z[on]});const ue=_.toFiniteNumber(z.headers.get("content-length")),[Qe,Me]=j&&cc(ue,Ns(lc(j),!0))||[];z=new r(fc(z.body,dc,Qe,()=>{Me&&Me(),Ie&&Ie()}),le)}H=H||"text";let Re=await f[_.findKey(f,H)||"text"](z,g);return!Ae&&Ie&&Ie(),await new Promise((le,ue)=>{pf(le,ue,{data:Re,headers:ze.from(z.headers),status:z.status,statusText:z.statusText,config:g,request:ve})})}catch(X){throw Ie&&Ie(),X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new K("Network Error",K.ERR_NETWORK,g,ve),{cause:X.cause||X}):K.from(X,X&&X.code,g,ve)}}},$b=new Map,yf=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:s}=e,i=[r,s,n];let o=i.length,a=o,c,l,u=$b;for(;a--;)c=i[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:Fb(e)),u=l;return l};yf();const to={http:nb,xhr:Nb,fetch:{get:yf}};_.forEach(to,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const gc=t=>`- ${t}`,Bb=t=>_.isFunction(t)||t===null||t===!1,_f={getAdapter:(t,e)=>{t=_.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let a;if(s=r,!Bb(r)&&(s=to[(a=String(r)).toLowerCase()],s===void 0))throw new K(`Unknown adapter '${a}'`);if(s&&(_.isFunction(s)||(s=s.get(e))))break;i[a||"#"+o]=s}if(!s){const o=Object.entries(i).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(gc).join(`
`):" "+gc(o[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s},adapters:to};function Si(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Kn(null,t)}function yc(t){return Si(t),t.headers=ze.from(t.headers),t.data=Ei.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),_f.getAdapter(t.adapter||Qr.adapter,t)(t).then(function(r){return Si(t),r.data=Ei.call(t,t.transformResponse,r),r.headers=ze.from(r.headers),r},function(r){return hf(r)||(Si(t),r&&r.response&&(r.response.data=Ei.call(t,t.transformResponse,r.response),r.response.headers=ze.from(r.response.headers))),Promise.reject(r)})}const bf="1.12.2",Qs={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Qs[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const _c={};Qs.transitional=function(e,n,r){function s(i,o){return"[Axios v"+bf+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new K(s(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!_c[o]&&(_c[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};Qs.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function jb(t,e,n){if(typeof t!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new K("option "+i+" must be "+c,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const ms={assertOptions:jb,validators:Qs},pt=ms.validators;class hn{constructor(e){this.defaults=e||{},this.interceptors={request:new oc,response:new oc}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=yn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ms.assertOptions(r,{silentJSONParsing:pt.transitional(pt.boolean),forcedJSONParsing:pt.transitional(pt.boolean),clarifyTimeoutError:pt.transitional(pt.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:ms.assertOptions(s,{encode:pt.function,serialize:pt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ms.assertOptions(n,{baseUrl:pt.spelling("baseURL"),withXsrfToken:pt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ze.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const g=[yc.bind(this),void 0];for(g.unshift(...a),g.push(...l),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let m=n;for(;f<d;){const g=a[f++],b=a[f++];try{m=g(m)}catch(v){b.call(this,v);break}}try{u=yc.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=yn(this.defaults,e);const n=mf(e.baseURL,e.url,e.allowAbsoluteUrls);return uf(n,e.params,e.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(e){hn.prototype[e]=function(n,r){return this.request(yn(r||{},{method:e,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(yn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}hn.prototype[e]=n(),hn.prototype[e+"Form"]=n(!0)});class Wo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Kn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Wo(function(s){e=s}),cancel:e}}}function Hb(t){return function(n){return t.apply(null,n)}}function Vb(t){return _.isObject(t)&&t.isAxiosError===!0}const no={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(no).forEach(([t,e])=>{no[e]=t});function vf(t){const e=new hn(t),n=Xu(hn.prototype.request,e);return _.extend(n,hn.prototype,e,{allOwnKeys:!0}),_.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return vf(yn(t,s))},n}const be=vf(Qr);be.Axios=hn;be.CanceledError=Kn;be.CancelToken=Wo;be.isCancel=hf;be.VERSION=bf;be.toFormData=Xs;be.AxiosError=K;be.Cancel=be.CanceledError;be.all=function(e){return Promise.all(e)};be.spread=Hb;be.isAxiosError=Vb;be.mergeConfig=yn;be.AxiosHeaders=ze;be.formToJSON=t=>df(_.isHTMLForm(t)?new FormData(t):t);be.getAdapter=_f.getAdapter;be.HttpStatusCode=no;be.default=be;const zo=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wb={data(){return{jsondata:null,error:null}},mounted(){this.getBookCount()},methods:{async getBookCount(){try{const t=await be.get("https://countbooks-45pwciyuyq-uc.a.run.app");this.jsondata=t.data,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error=t,this.count=null}}}};function zb(t,e,n,r,s,i){return re(),oe("pre",null,_e(s.jsondata),1)}const ro=zo(Wb,[["render",zb]]),qb={class:"main-container"},Kb={key:0},Gb={class:"main-box"},Jb={name:"App",components:{BHeader:Yu,GetBookCountView:ro},computed:{showHeader(){return this.$route.name!=ro}}},Yb=Object.assign(Jb,{setup(t){return(e,n)=>{const r=ql("router-view");return re(),oe("div",qb,[e.showHeader?(re(),oe("header",Kb,[me(Yu)])):xn("",!0),N("main",Gb,[me(r)])])}}}),Xb=zo(Yb,[["__scopeId","data-v-6cca706d"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof document<"u";function wf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wf(t.default)}const Q=Object.assign;function Ti(t,e){const n={};for(const r in e){const s=e[r];n[r]=ut(s)?s.map(t):t(s)}return n}const yr=()=>{},ut=Array.isArray,Ef=/#/g,Zb=/&/g,ev=/\//g,tv=/=/g,nv=/\?/g,Sf=/\+/g,rv=/%5B/g,sv=/%5D/g,Tf=/%5E/g,iv=/%60/g,If=/%7B/g,ov=/%7C/g,Cf=/%7D/g,av=/%20/g;function qo(t){return encodeURI(""+t).replace(ov,"|").replace(rv,"[").replace(sv,"]")}function cv(t){return qo(t).replace(If,"{").replace(Cf,"}").replace(Tf,"^")}function so(t){return qo(t).replace(Sf,"%2B").replace(av,"+").replace(Ef,"%23").replace(Zb,"%26").replace(iv,"`").replace(If,"{").replace(Cf,"}").replace(Tf,"^")}function lv(t){return so(t).replace(tv,"%3D")}function uv(t){return qo(t).replace(Ef,"%23").replace(nv,"%3F")}function fv(t){return t==null?"":uv(t).replace(ev,"%2F")}function Nr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dv=/\/$/,hv=t=>t.replace(dv,"");function Ii(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=yv(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Nr(o)}}function pv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&jn(e.matched[r],n.matched[s])&&Rf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gv(t[n],e[n]))return!1;return!0}function gv(t,e){return ut(t)?vc(t,e):ut(e)?vc(e,t):t===e}function vc(t,e){return ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xr;(function(t){t.pop="pop",t.push="push"})(xr||(xr={}));var _r;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_r||(_r={}));function _v(t){if(!t)if(Tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hv(t)}const bv=/^[^#]+#/;function vv(t,e){return t.replace(bv,"#")+e}function wv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zs=()=>({left:window.scrollX,top:window.scrollY});function Ev(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wc(t,e){return(history.state?history.state.position-e:-1)+t}const io=new Map;function Sv(t,e){io.set(t,e)}function Tv(t){const e=io.get(t);return io.delete(t),e}let Iv=()=>location.protocol+"//"+location.host;function Af(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),bc(c,"")}return bc(n,t)+r+s}function Cv(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=Af(t,location),g=n.value,b=e.value;let v=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}v=b?d.position-b.position:0}else r(m);s.forEach(I=>{I(n.value,g,{delta:v,type:xr.pop,direction:v?v>0?_r.forward:_r.back:_r.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:Zs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ec(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zs():null}}function Rv(t){const{history:e,location:n}=window,r={value:Af(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Iv()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Q({},e.state,Ec(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,e.state,{forward:c,scroll:Zs()});i(u.current,u,!0);const f=Q({},Ec(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Av(t){t=_v(t);const e=Rv(t),n=Cv(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:vv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pv(t){return typeof t=="string"||t&&typeof t=="object"}function Pf(t){return typeof t=="string"||typeof t=="symbol"}const Of=Symbol("");var Sc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sc||(Sc={}));function Hn(t,e){return Q(new Error,{type:t,[Of]:!0},e)}function St(t,e){return t instanceof Error&&Of in t&&(e==null||!!(t.type&e))}const Tc="[^/]+?",Ov={sensitive:!1,strict:!1,start:!0,end:!0},kv=/[.+*?^${}()[\]/\\]/g;function Nv(t,e){const n=Q({},Ov,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(kv,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:b,optional:v,regexp:I}=d;i.push({name:g,repeatable:b,optional:v});const R=I||Tc;if(R!==Tc){m+=10;try{new RegExp(`(${R})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+P.message)}}let A=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(A=v&&l.length<2?`(?:/${A})`:"/"+A),v&&(A+="?"),s+=A,m+=20,v&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=i[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:b,optional:v}=m,I=g in l?l[g]:"";if(ut(I)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=ut(I)?I.join("/"):I;if(!R)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function xv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ic(r))return 1;if(Ic(s))return-1}return s.length-r.length}function Ic(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lv={type:0,value:""},Dv=/[a-zA-Z0-9_]/;function Mv(t){if(!t)return[[]];if(t==="/")return[[Lv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Dv.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Uv(t,e,n){const r=Nv(Mv(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Fv(t,e){const n=[],r=new Map;e=Pc({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,d,m){const g=!m,b=Rc(f);b.aliasOf=m&&m.record;const v=Pc(e,f),I=[b];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of P)I.push(Rc(Q({},b,{components:m?m.record.components:b.components,path:j,aliasOf:m?m.record:b})))}let R,A;for(const P of I){const{path:j}=P;if(d&&j[0]!=="/"){const Y=d.record.path,H=Y[Y.length-1]==="/"?"":"/";P.path=d.record.path+(j&&H+j)}if(R=Uv(P,d,v),m?m.alias.push(R):(A=A||R,A!==R&&A.alias.push(R),g&&f.name&&!Ac(R)&&o(f.name)),Nf(R)&&c(R),b.children){const Y=b.children;for(let H=0;H<Y.length;H++)i(Y[H],R,m&&m.children[H])}m=m||R}return A?()=>{o(A)}:yr}function o(f){if(Pf(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=jv(f,n);n.splice(d,0,f),f.record.name&&!Ac(f)&&r.set(f.record.name,f)}function l(f,d){let m,g={},b,v;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Hn(1,{location:f});v=m.record.name,g=Q(Cc(d.params,m.keys.filter(A=>!A.optional).concat(m.parent?m.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&Cc(f.params,m.keys.map(A=>A.name))),b=m.stringify(g)}else if(f.path!=null)b=f.path,m=n.find(A=>A.re.test(b)),m&&(g=m.parse(b),v=m.record.name);else{if(m=d.name?r.get(d.name):n.find(A=>A.re.test(d.path)),!m)throw Hn(1,{location:f,currentLocation:d});v=m.record.name,g=Q({},d.params,f.params),b=m.stringify(g)}const I=[];let R=m;for(;R;)I.unshift(R.record),R=R.parent;return{name:v,path:b,params:g,matched:I,meta:Bv(I)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Cc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$v(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $v(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ac(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bv(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Pc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function jv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;kf(t,e[i])<0?r=i:n=i+1}const s=Hv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Hv(t){let e=t;for(;e=e.parent;)if(Nf(e)&&kf(t,e)===0)return e}function Nf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Vv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Sf," "),o=i.indexOf("="),a=Nr(o<0?i:i.slice(0,o)),c=o<0?null:Nr(i.slice(o+1));if(a in e){let l=e[a];ut(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Oc(t){let e="";for(let n in t){const r=t[n];if(n=lv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ut(r)?r.map(i=>i&&so(i)):[r&&so(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Wv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zv=Symbol(""),kc=Symbol(""),ei=Symbol(""),xf=Symbol(""),oo=Symbol("");function Zn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Hn(4,{from:n,to:e})):d instanceof Error?c(d):Pv(d)?c(Hn(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Ci(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(wf(c)){const u=(c.__vccOpts||c)[e];u&&i.push(zt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Qb(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&zt(m,n,r,o,a,s)()}))}}return i}function Nc(t){const e=_t(ei),n=_t(xf),r=tt(()=>{const c=On(t.to);return e.resolve(c)}),s=tt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(jn.bind(null,u));if(d>-1)return d;const m=xc(c[l-2]);return l>1&&xc(u)===m&&f[f.length-1].path!==m?f.findIndex(jn.bind(null,c[l-2])):d}),i=tt(()=>s.value>-1&&Yv(n.params,r.value.params)),o=tt(()=>s.value>-1&&s.value===n.matched.length-1&&Rf(n.params,r.value.params));function a(c={}){if(Jv(c)){const l=e[On(t.replace)?"replace":"push"](On(t.to)).catch(yr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:tt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function qv(t){return t.length===1?t[0]:t}const Kv=jl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Nc,setup(t,{slots:e}){const n=Br(Nc(t)),{options:r}=_t(ei),s=tt(()=>({[Lc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Lc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&qv(e.default(n));return t.custom?i:pu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Gv=Kv;function Jv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ut(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lc=(t,e,n)=>t??e??n,Xv=jl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_t(oo),s=tt(()=>t.route||r.value),i=_t(kc,0),o=tt(()=>{let l=On(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=tt(()=>s.value.matched[o.value]);os(kc,tt(()=>o.value+1)),os(zv,a),os(oo,s);const c=ge();return At(()=>[c.value,a.value,t.name],([l,u,f],[d,m,g])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!jn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Dc(n.default,{Component:d,route:l});const m=f.props[u],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,v=pu(d,Q({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Dc(n.default,{Component:v,route:l})||v}}});function Dc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qv=Xv;function Zv(t){const e=Fv(t.routes,t),n=t.parseQuery||Vv,r=t.stringifyQuery||Oc,s=t.history,i=Zn(),o=Zn(),a=Zn(),c=ip(jt);let l=jt;Tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ti.bind(null,E=>""+E),f=Ti.bind(null,fv),d=Ti.bind(null,Nr);function m(E,M){let L,U;return Pf(E)?(L=e.getRecordMatcher(E),U=M):U=E,e.addRoute(U,L)}function g(E){const M=e.getRecordMatcher(E);M&&e.removeRoute(M)}function b(){return e.getRoutes().map(E=>E.record)}function v(E){return!!e.getRecordMatcher(E)}function I(E,M){if(M=Q({},M||c.value),typeof E=="string"){const p=Ii(n,E,M.path),y=e.resolve({path:p.path},M),S=s.createHref(p.fullPath);return Q(p,y,{params:d(y.params),hash:Nr(p.hash),redirectedFrom:void 0,href:S})}let L;if(E.path!=null)L=Q({},E,{path:Ii(n,E.path,M.path).path});else{const p=Q({},E.params);for(const y in p)p[y]==null&&delete p[y];L=Q({},E,{params:f(p)}),M.params=f(M.params)}const U=e.resolve(L,M),te=E.hash||"";U.params=u(d(U.params));const de=pv(r,Q({},E,{hash:cv(te),path:U.path})),h=s.createHref(de);return Q({fullPath:de,hash:te,query:r===Oc?Wv(E.query):E.query||{}},U,{redirectedFrom:void 0,href:h})}function R(E){return typeof E=="string"?Ii(n,E,c.value.path):Q({},E)}function A(E,M){if(l!==E)return Hn(8,{from:M,to:E})}function P(E){return H(E)}function j(E){return P(Q(R(E),{replace:!0}))}function Y(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:L}=M;let U=typeof L=="function"?L(E):L;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=R(U):{path:U},U.params={}),Q({query:E.query,hash:E.hash,params:U.path!=null?{}:E.params},U)}}function H(E,M){const L=l=I(E),U=c.value,te=E.state,de=E.force,h=E.replace===!0,p=Y(L);if(p)return H(Q(R(p),{state:typeof p=="object"?Q({},te,p.state):te,force:de,replace:h}),M||L);const y=L;y.redirectedFrom=M;let S;return!de&&mv(r,U,L)&&(S=Hn(16,{to:y,from:U}),le(U,U,!0,!1)),(S?Promise.resolve(S):ye(y,U)).catch(w=>St(w)?St(w,2)?w:Re(w):z(w,y,U)).then(w=>{if(w){if(St(w,2))return H(Q({replace:h},R(w.to),{state:typeof w.to=="object"?Q({},te,w.to.state):te,force:de}),M||y)}else w=Se(y,U,!0,h,te);return Ee(y,U,w),w})}function he(E,M){const L=A(E,M);return L?Promise.reject(L):Promise.resolve()}function pe(E){const M=Me.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(E):E()}function ye(E,M){let L;const[U,te,de]=ew(E,M);L=Ci(U.reverse(),"beforeRouteLeave",E,M);for(const p of U)p.leaveGuards.forEach(y=>{L.push(zt(y,E,M))});const h=he.bind(null,E,M);return L.push(h),Ze(L).then(()=>{L=[];for(const p of i.list())L.push(zt(p,E,M));return L.push(h),Ze(L)}).then(()=>{L=Ci(te,"beforeRouteUpdate",E,M);for(const p of te)p.updateGuards.forEach(y=>{L.push(zt(y,E,M))});return L.push(h),Ze(L)}).then(()=>{L=[];for(const p of de)if(p.beforeEnter)if(ut(p.beforeEnter))for(const y of p.beforeEnter)L.push(zt(y,E,M));else L.push(zt(p.beforeEnter,E,M));return L.push(h),Ze(L)}).then(()=>(E.matched.forEach(p=>p.enterCallbacks={}),L=Ci(de,"beforeRouteEnter",E,M,pe),L.push(h),Ze(L))).then(()=>{L=[];for(const p of o.list())L.push(zt(p,E,M));return L.push(h),Ze(L)}).catch(p=>St(p,8)?p:Promise.reject(p))}function Ee(E,M,L){a.list().forEach(U=>pe(()=>U(E,M,L)))}function Se(E,M,L,U,te){const de=A(E,M);if(de)return de;const h=M===jt,p=Tn?history.state:{};L&&(U||h?s.replace(E.fullPath,Q({scroll:h&&p&&p.scroll},te)):s.push(E.fullPath,te)),c.value=E,le(E,M,L,h),Re()}let ve;function Ie(){ve||(ve=s.listen((E,M,L)=>{if(!on.listening)return;const U=I(E),te=Y(U);if(te){H(Q(te,{replace:!0,force:!0}),U).catch(yr);return}l=U;const de=c.value;Tn&&Sv(wc(de.fullPath,L.delta),Zs()),ye(U,de).catch(h=>St(h,12)?h:St(h,2)?(H(Q(R(h.to),{force:!0}),U).then(p=>{St(p,20)&&!L.delta&&L.type===xr.pop&&s.go(-1,!1)}).catch(yr),Promise.reject()):(L.delta&&s.go(-L.delta,!1),z(h,U,de))).then(h=>{h=h||Se(U,de,!1),h&&(L.delta&&!St(h,8)?s.go(-L.delta,!1):L.type===xr.pop&&St(h,20)&&s.go(-1,!1)),Ee(U,de,h)}).catch(yr)}))}let je=Zn(),X=Zn(),G;function z(E,M,L){Re(E);const U=X.list();return U.length?U.forEach(te=>te(E,M,L)):console.error(E),Promise.reject(E)}function Ae(){return G&&c.value!==jt?Promise.resolve():new Promise((E,M)=>{je.add([E,M])})}function Re(E){return G||(G=!E,Ie(),je.list().forEach(([M,L])=>E?L(E):M()),je.reset()),E}function le(E,M,L,U){const{scrollBehavior:te}=t;if(!Tn||!te)return Promise.resolve();const de=!L&&Tv(wc(E.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return Co().then(()=>te(E,M,de)).then(h=>h&&Ev(h)).catch(h=>z(h,E,M))}const ue=E=>s.go(E);let Qe;const Me=new Set,on={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:v,getRoutes:b,resolve:I,options:t,push:P,replace:j,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:Ae,install(E){const M=this;E.component("RouterLink",Gv),E.component("RouterView",Qv),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>On(c)}),Tn&&!Qe&&c.value===jt&&(Qe=!0,P(s.location).catch(te=>{}));const L={};for(const te in jt)Object.defineProperty(L,te,{get:()=>c.value[te],enumerable:!0});E.provide(ei,M),E.provide(xf,Nl(L)),E.provide(oo,c);const U=E.unmount;Me.add(E),E.unmount=function(){Me.delete(E),Me.size<1&&(l=jt,ve&&ve(),ve=null,c.value=jt,Qe=!1,G=!1),U()}}};function Ze(E){return E.reduce((M,L)=>M.then(()=>pe(L)),Promise.resolve())}return on}function ew(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>jn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>jn(l,c))||s.push(c))}return[n,r,s]}function Gn(){return _t(ei)}const tw={class:"container mt-4"},nw={key:0},rw={key:1},sw={__name:"HomeView",setup(t){const e=ge(null),n=ge("Guest"),r=Gn(),s=Ut();nn(()=>{zn(s,async o=>{if(o){e.value=o;const a=await zr(o);n.value=a.claims.role||"User",console.log("Current User:",o),console.log("Role from custom claims:",n.value)}else e.value=null,n.value="Guest"})});const i=async()=>{try{await Kr(s),e.value=null,n.value="Guest",r.push("/FireLogin")}catch(o){console.error("Logout error:",o)}};return(o,a)=>(re(),oe("div",tw,[a[4]||(a[4]=N("h1",null,"User Profile",-1)),e.value?(re(),oe("div",nw,[N("p",null,[a[0]||(a[0]=N("strong",null,"Email:",-1)),we(" "+_e(e.value.email),1)]),N("p",null,[a[1]||(a[1]=N("strong",null,"Name:",-1)),we(" "+_e(e.value.displayName||"N/A"),1)]),N("p",null,[a[2]||(a[2]=N("strong",null,"Role:",-1)),we(" "+_e(n.value),1)]),N("button",{class:"btn btn-danger",onClick:i},"Logout")])):(re(),oe("div",rw,[...a[3]||(a[3]=[N("p",null,"You are not logged in.",-1)])]))]))}},iw={class:"container mt-4"},ow={key:0},aw={key:1},cw={__name:"AboutView",setup(t){const e=ge(null),n=ge("Guest"),r=Gn(),s=Ut();nn(()=>{zn(s,async o=>{if(o){e.value=o;const a=await zr(o);n.value=a.claims.role||"User",console.log("Current User:",o),console.log("Role from custom claims:",n.value)}else e.value=null,n.value="Guest"})});const i=async()=>{try{await Kr(s),e.value=null,n.value="Guest",r.push("/FireLogin")}catch(o){console.error("Logout error:",o)}};return(o,a)=>(re(),oe("div",iw,[a[4]||(a[4]=N("h1",null,"User Profile",-1)),e.value?(re(),oe("div",ow,[N("p",null,[a[0]||(a[0]=N("strong",null,"Email:",-1)),we(" "+_e(e.value.email),1)]),N("p",null,[a[1]||(a[1]=N("strong",null,"Name:",-1)),we(" "+_e(e.value.displayName||"N/A"),1)]),N("p",null,[a[2]||(a[2]=N("strong",null,"Role:",-1)),we(" "+_e(n.value),1)]),N("button",{class:"btn btn-danger",onClick:i},"Logout")])):(re(),oe("div",aw,[...a[3]||(a[3]=[N("p",null,"You are not logged in.",-1)])]))]))}},lw={class:"container mt-4"},uw={key:0},fw={key:1},dw={__name:"AccessDeniedView",setup(t){const e=ge(null),n=ge("Guest"),r=Gn(),s=Ut();nn(()=>{zn(s,async o=>{if(o){e.value=o;const a=await zr(o);n.value=a.claims.role||"User",console.log("Current User:",o),console.log("Role from custom claims:",n.value)}else e.value=null,n.value="Guest"})});const i=async()=>{try{await Kr(s),e.value=null,n.value="Guest",r.push("/FireLogin")}catch(o){console.error("Logout error:",o)}};return(o,a)=>(re(),oe("div",lw,[a[4]||(a[4]=N("h1",null,"User Profile",-1)),e.value?(re(),oe("div",uw,[N("p",null,[a[0]||(a[0]=N("strong",null,"Email:",-1)),we(" "+_e(e.value.email),1)]),N("p",null,[a[1]||(a[1]=N("strong",null,"Name:",-1)),we(" "+_e(e.value.displayName||"N/A"),1)]),N("p",null,[a[2]||(a[2]=N("strong",null,"Role:",-1)),we(" "+_e(n.value),1)]),N("button",{class:"btn btn-danger",onClick:i},"Logout")])):(re(),oe("div",fw,[...a[3]||(a[3]=[N("p",null,"You are not logged in.",-1)])]))]))}},hw={__name:"FirebaseSigninView",setup(t){const e=ge(""),n=ge(""),r=Gn(),s=Ut(),i=()=>{qg(Ut(),e.value,n.value).then(o=>{console.log("Login Successful!"),r.push("/about"),console.log(s.currentUser)}).catch(o=>{console.log(o.code)})};return(o,a)=>(re(),oe(et,null,[a[2]||(a[2]=N("h1",null,"signin an Account",-1)),N("p",null,[Cr(N("input",{type:"text",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c)},null,512),[[Pr,e.value]])]),N("p",null,[Cr(N("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[Pr,n.value]])]),N("p",null,[N("button",{onClick:i},"signin Firebase")])],64))}},pw={__name:"FirebaseRegisterView",setup(t){const e=ge(""),n=ge(""),r=Gn(),s=Ut(),i=()=>{zg(s,e.value,n.value).then(o=>{console.log("Firebase Register Successful!"),r.push("/FireLogin")}).catch(o=>{console.log(o.code)})};return(o,a)=>(re(),oe(et,null,[a[2]||(a[2]=N("h1",null,"Create an Account",-1)),N("p",null,[Cr(N("input",{type:"text",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c)},null,512),[[Pr,e.value]])]),N("p",null,[Cr(N("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[Pr,n.value]])]),N("p",null,[N("button",{onClick:i},"Save to Firebase")])],64))}},mw={class:"container",style:{padding:"16px","max-width":"900px",margin:"auto"}},gw={key:0},yw={key:1,style:{color:"#b00020"}},_w={key:2,style:{background:"#111",color:"#eee",padding:"16px","border-radius":"12px",overflow:"auto"}},bw="https://getallbooks-45pwciyuyq-uc.a.run.app",vw={__name:"GetAllBookAPI",setup(t){const e=ge(null),n=ge(""),r=ge(!1);nn(async()=>{r.value=!0;try{const o=await fetch(bw,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);e.value=await o.json()}catch(o){n.value=o.message}finally{r.value=!1}});const i=tt(()=>JSON.stringify(e.value,null,2));return(o,a)=>(re(),oe("main",mw,[a[0]||(a[0]=N("h1",null,"GetAllBookAPI",-1)),r.value?(re(),oe("p",gw,"Loading books...")):xn("",!0),n.value?(re(),oe("p",yw,_e(n.value),1)):xn("",!0),e.value?(re(),oe("pre",_w,""+_e(i.value)+`
    `,1)):xn("",!0)]))}},ww={class:"container mt-4"},Ew={key:0},Sw={key:1},Tw={__name:"Addbook",setup(t){const e=ge(null),n=ge("Guest"),r=Gn(),s=Ut();nn(()=>{zn(s,async o=>{if(o){e.value=o;const a=await zr(o);n.value=a.claims.role||"User",console.log("Current User:",o),console.log("Role from custom claims:",n.value)}else e.value=null,n.value="Guest"})});const i=async()=>{try{await Kr(s),e.value=null,n.value="Guest",r.push("/FireLogin")}catch(o){console.error("Logout error:",o)}};return(o,a)=>(re(),oe("div",ww,[a[4]||(a[4]=N("h1",null,"User Profile",-1)),e.value?(re(),oe("div",Ew,[N("p",null,[a[0]||(a[0]=N("strong",null,"Email:",-1)),we(" "+_e(e.value.email),1)]),N("p",null,[a[1]||(a[1]=N("strong",null,"Name:",-1)),we(" "+_e(e.value.displayName||"N/A"),1)]),N("p",null,[a[2]||(a[2]=N("strong",null,"Role:",-1)),we(" "+_e(n.value),1)]),N("button",{class:"btn btn-danger",onClick:i},"Logout")])):(re(),oe("div",Sw,[...a[3]||(a[3]=[N("p",null,"You are not logged in.",-1)])]))]))}},Mc="cebd1a7f51eea232e225ec6faed39375",Iw={name:"App",data(){return{city:"",weatherData:null,hourlyForecast:[],dailyForecast:[]}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp-273):null},iconUrl(){return this.weatherData?`https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null}},mounted(){this.fetchCurrentLocationWeather()},methods:{async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async t=>{const{latitude:e,longitude:n}=t.coords,r=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${Mc}`;await this.fetchWeatherData(r)})},async fetchWeatherData(t){try{const e=await be.get(t);this.weatherData=e.data}catch(e){console.error("Error fetching weather data:",e)}},async searchByCity(){if(!this.city.trim())return;const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${Mc}`;await this.fetchWeatherData(t)}}},Cw={class:"container"},Rw={class:"search-bar"},Aw={key:0},Pw=["src"];function Ow(t,e,n,r,s,i){return re(),oe(et,null,[N("div",Cw,[e[2]||(e[2]=N("div",{class:"header"},[N("h1",null,"WEATHER APP")],-1)),N("div",Rw,[Cr(N("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.city=o),placeholder:"Enter city name",class:"search-input"},null,512),[[Pr,s.city]]),N("button",{onClick:e[1]||(e[1]=(...o)=>i.searchByCity&&i.searchByCity(...o)),class:"search-button"},"Search")])]),N("main",null,[s.weatherData?(re(),oe("div",Aw,[N("h2",null,_e(s.weatherData.name)+", "+_e(s.weatherData.sys.country),1),N("div",null,[N("img",{src:i.iconUrl,alt:"Weather Icon"},null,8,Pw),N("p",null,_e(i.temperature)+" °C",1)]),N("span",null,_e(s.weatherData.weather[0].description),1)])):xn("",!0)])],64)}const kw=zo(Iw,[["render",Ow],["__scopeId","data-v-ed7bdac1"]]),Lf=Zv({history:Av("/"),routes:[{path:"/",name:"Home",component:sw,meta:{public:!0}},{path:"/about",name:"About",component:cw,meta:{requiresAuth:!0}},{path:"/denied",name:"AccessDenied",component:dw,meta:{public:!0}},{path:"/FireLogin",name:"FireLogin",component:hw,meta:{public:!0}},{path:"/FireRegister",name:"FireRegister",component:pw,meta:{public:!0}},{path:"/getbook",name:"GetBook",component:ro,meta:{public:!0}},{path:"/GetAllBookAPI",name:"GetAllBookAPI",component:vw,meta:{public:!0}},{path:"/Addbook",name:"Addbook",component:Tw,meta:{public:!0}},{path:"/WeatherCheck",name:"WeatherCheck",component:kw,meta:{public:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]});Lf.beforeEach((t,e,n)=>{const r=Ut(),s=zn(r,i=>{if(s(),t.meta.public)return n();if(t.meta.requiresAuth&&!i)return n({name:"FireLogin",query:{redirect:t.fullPath}});if(t.meta.roles){let o="user";if((i==null?void 0:i.email)==="admin@example.com"?o="admin":(i==null?void 0:i.email)==="manager@example.com"&&(o="manager"),!t.meta.roles.includes(o))return n({name:"AccessDenied"})}n()})});var Nw=Object.defineProperty,Uc=Object.getOwnPropertySymbols,xw=Object.prototype.hasOwnProperty,Lw=Object.prototype.propertyIsEnumerable,Fc=(t,e,n)=>e in t?Nw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Dw=(t,e)=>{for(var n in e||(e={}))xw.call(e,n)&&Fc(t,n,e[n]);if(Uc)for(var n of Uc(e))Lw.call(e,n)&&Fc(t,n,e[n]);return t};function Df(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Mw(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Je(t){return!Df(t)}function _n(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function br(t,...e){return Mw(t)?t(...e):t}function Vn(t,e=!0){return typeof t=="string"&&(e||t!=="")}function Uw(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function Mf(t){return Je(t)&&!isNaN(t)}function kt(t,e){if(e){const n=e.test(t);return e.lastIndex=0,n}return!1}function Fw(...t){const e=(n={},r={})=>{const s=Dw({},n);return Object.keys(r).forEach(i=>{_n(r[i])&&i in n&&_n(n[i])?s[i]=e(n[i],r[i]):s[i]=r[i]}),s};return t.reduce((n,r,s)=>s===0?r:e(n,r),{})}function vr(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Uf(t){return Vn(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,n)=>n===0?e:"-"+e.toLowerCase()).toLowerCase():t}function $c(t){return Vn(t)?t.replace(/[A-Z]/g,(e,n)=>n===0?e:"."+e.toLowerCase()).toLowerCase():t}function Ff(){const t=new Map;return{on(e,n){let r=t.get(e);return r?r.push(n):r=[n],t.set(e,r),this},off(e,n){let r=t.get(e);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(e,n){let r=t.get(e);r&&r.slice().map(s=>{s(n)})},clear(){t.clear()}}}var $w=Object.defineProperty,Bw=Object.defineProperties,jw=Object.getOwnPropertyDescriptors,xs=Object.getOwnPropertySymbols,$f=Object.prototype.hasOwnProperty,Bf=Object.prototype.propertyIsEnumerable,Bc=(t,e,n)=>e in t?$w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,er=(t,e)=>{for(var n in e||(e={}))$f.call(e,n)&&Bc(t,n,e[n]);if(xs)for(var n of xs(e))Bf.call(e,n)&&Bc(t,n,e[n]);return t},Ri=(t,e)=>Bw(t,jw(e)),tr=(t,e)=>{var n={};for(var r in t)$f.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&xs)for(var r of xs(t))e.indexOf(r)<0&&Bf.call(t,r)&&(n[r]=t[r]);return n},Hw=Ff(),It=Hw;function jc(t,e){Uw(t)?t.push(...e||[]):_n(t)&&Object.assign(t,e)}function Vw(t){return _n(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Hc(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(r=>e.endsWith(r))?t:`${t}`.trim().split(" ").map(i=>Mf(i)?`${i}px`:i).join(" ")}function Ww(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ao(t="",e=""){return Ww(`${Vn(t,!1)&&Vn(e,!1)?`${t}-`:t}${e}`)}function jf(t="",e=""){return`--${ao(t,e)}`}function Hf(t,e="",n="",r=[],s){if(Vn(t)){const i=/{([^}]*)}/g,o=t.trim();if(kt(o,i)){const a=o.replaceAll(i,u=>{const d=u.replace(/{|}/g,"").split(".").filter(m=>!r.some(g=>kt(m,g)));return`var(${jf(n,Uf(d.join("-")))}${Je(s)?`, ${s}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return kt(a.replace(l,"0"),c)?`calc(${a})`:a}return Hc(o,e)}else if(Mf(t))return Hc(t,e)}function zw(t,e,n){Vn(e,!1)&&t.push(`${e}:${n};`)}function or(t,e){return t?`${t}{${e}}`:""}var Ai=(...t)=>qw(ke.getTheme(),...t),qw=(t={},e,n,r="variable")=>{if(e){const{variable:s,options:i}=ke.defaults||{},{prefix:o,transform:a}=(t==null?void 0:t.options)||i||{},l=kt(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||a==="strict"?ke.getTokenValue(e):Hf(l,void 0,o,[s.excludedKeyRegex],n)}return""};function Kw(t,e={}){const n=ke.defaults.variable,{prefix:r=n.prefix,selector:s=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=e,o=(l,u="")=>Object.entries(l).reduce((f,[d,m])=>{const g=kt(d,i)?ao(u):ao(u,Uf(d)),b=Vw(m);if(_n(b)){const{variables:v,tokens:I}=o(b,g);jc(f.tokens,I),jc(f.variables,v)}else f.tokens.push((r?g.replace(`${r}-`,""):g).replaceAll("-",".")),zw(f.variables,jf(g),Hf(b,g,r,[i]));return f},{variables:[],tokens:[]}),{variables:a,tokens:c}=o(t,r);return{value:a,tokens:c,declarations:a.join(""),css:or(s,a.join(""))}}var st={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var r;return(r=e.map(s=>s.resolve(n)).find(s=>s.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(t,e){return Kw(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:n,set:r,defaults:s}){var i,o,a,c;const{preset:l,options:u}=e;let f,d,m,g;if(Je(l)){const{primitive:b,semantic:v}=l,I=v||{},{colorScheme:R}=I,A=tr(I,["colorScheme"]),P=R||{},{dark:j}=P,Y=tr(P,["dark"]),H=Je(b)?this._toVariables({primitive:b},u):{},he=Je(A)?this._toVariables({semantic:A},u):{},pe=Je(Y)?this._toVariables({light:Y},u):{},ye=Je(j)?this._toVariables({dark:j},u):{},[Ee,Se]=[(i=H.declarations)!=null?i:"",H.tokens],[ve,Ie]=[(o=he.declarations)!=null?o:"",he.tokens||[]],[je,X]=[(a=pe.declarations)!=null?a:"",pe.tokens||[]],[G,z]=[(c=ye.declarations)!=null?c:"",ye.tokens||[]];f=this.transformCSS(t,Ee,"light","variable",u,r,s),d=Se;const Ae=this.transformCSS(t,`${ve}${je}color-scheme:light`,"light","variable",u,r,s),Re=this.transformCSS(t,`${G}color-scheme:dark`,"dark","variable",u,r,s);m=`${Ae}${Re}`,g=[...new Set([...Ie,...X,...z])]}return{primitive:{css:f,tokens:d},semantic:{css:m,tokens:g}}},getPreset({name:t="",preset:e={},options:n,params:r,set:s,defaults:i,selector:o}){var a,c,l;const u=t.replace("-directive",""),f=e,{colorScheme:d}=f,m=tr(f,["colorScheme"]),g=d||{},{dark:b}=g,v=tr(g,["dark"]),I=Je(m)?this._toVariables({[u]:m},n):{},R=Je(v)?this._toVariables({[u]:v},n):{},A=Je(b)?this._toVariables({[u]:b},n):{},[P,j]=[(a=I.declarations)!=null?a:"",I.tokens||[]],[Y,H]=[(c=R.declarations)!=null?c:"",R.tokens||[]],[he,pe]=[(l=A.declarations)!=null?l:"",A.tokens||[]],ye=[...new Set([...j,...H,...pe])],Ee=this.transformCSS(u,`${P}${Y}`,"light","variable",n,s,i,o),Se=this.transformCSS(u,he,"dark","variable",n,s,i,o);return{css:`${Ee}${Se}`,tokens:ye}},getPresetC({name:t="",theme:e={},params:n,set:r,defaults:s}){var i;const{preset:o,options:a}=e,c=(i=o==null?void 0:o.components)==null?void 0:i[t];return this.getPreset({name:t,preset:c,options:a,params:n,set:r,defaults:s})},getPresetD({name:t="",theme:e={},params:n,set:r,defaults:s}){var i;const o=t.replace("-directive",""),{preset:a,options:c}=e,l=(i=a==null?void 0:a.directives)==null?void 0:i[o];return this.getPreset({name:o,preset:l,options:c,params:n,set:r,defaults:s})},getColorSchemeOption(t,e){var n;return this.regex.resolve((n=t.darkModeSelector)!=null?n:e.options.darkModeSelector)},getLayerOrder(t,e={},n,r){const{cssLayer:s}=e;return s?`@layer ${br(s.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:n,props:r={},set:s,defaults:i}){const o=this.getCommon({name:t,theme:e,params:n,set:s,defaults:i}),a=Object.entries(r).reduce((c,[l,u])=>c.push(`${l}="${u}"`)&&c,[]).join(" ");return Object.entries(o||{}).reduce((c,[l,u])=>{if(u!=null&&u.css){const f=vr(u==null?void 0:u.css),d=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${d}" ${a}>${f}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:e={},params:n,props:r={},set:s,defaults:i}){var o;const a={name:t,theme:e,params:n,set:s,defaults:i},c=(o=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:o.css,l=Object.entries(r).reduce((u,[f,d])=>u.push(`${f}="${d}"`)&&u,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${vr(c)}</style>`:""},createTokens(t={},e,n="",r="",s={}){return Object.entries(t).forEach(([i,o])=>{const a=kt(i,e.variable.excludedKeyRegex)?n:n?`${n}.${$c(i)}`:$c(i),c=r?`${r}.${i}`:i;_n(o)?this.createTokens(o,e,a,c,s):(s[a]||(s[a]={paths:[],computed(l,u={}){if(l){const f=this.paths.find(d=>d.scheme===l)||this.paths.find(d=>d.scheme==="none");return f==null?void 0:f.computed(l,u.binding)}return this.paths.map(f=>f.computed(f.scheme,u[f.scheme]))}}),s[a].paths.push({path:c,value:o,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(l,u={}){const f=/{([^}]*)}/g;let d=o;if(u.name=this.path,u.binding||(u.binding={}),kt(o,f)){const g=o.trim().replaceAll(f,I=>{var R,A;const P=I.replace(/{|}/g,"");return(A=(R=s[P])==null?void 0:R.computed(l,u))==null?void 0:A.value}),b=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,v=/var\([^)]+\)/g;d=kt(g.replace(v,"0"),b)?`calc(${g})`:g}return Df(u.binding)&&delete u.binding,{colorScheme:l,path:this.path,paths:u,value:d.includes("undefined")?void 0:d}}}))}),s},getTokenValue(t,e,n){var r;const i=(c=>c.split(".").filter(u=>!kt(u.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(e),o=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=t[i])==null?void 0:r.computed(o)].flat().filter(c=>c);return a.length===1?a[0].value:a.reduce((c={},l)=>{const u=l,{colorScheme:f}=u,d=tr(u,["colorScheme"]);return c[f]=d,c},void 0)},transformCSS(t,e,n,r,s={},i,o,a){if(Je(e)){const{cssLayer:c}=s;if(r!=="style"){const l=this.getColorSchemeOption(s,o),u=a?or(a,e):e;e=n==="dark"?l.reduce((f,{selector:d})=>(Je(d)&&(f+=d.includes("[CSS]")?d.replace("[CSS]",u):or(d,u)),f),""):or(a??":root",e)}if(c){const l={name:"primeui",order:"primeui"};_n(c)&&(l.name=br(c.name,{name:t,type:r})),Je(l.name)&&(e=or(`@layer ${l.name}`,e),i==null||i.layerNames(l.name))}return e}return""}},ke={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=Ri(er({},e),{options:er(er({},this.defaults.options),e.options)}),this._tokens=st.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),It.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ri(er({},this.theme),{preset:t}),this._tokens=st.createTokens(t,this.defaults),this.clearLoadedStyleNames(),It.emit("preset:change",t),It.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ri(er({},this.theme),{options:t}),this.clearLoadedStyleNames(),It.emit("options:change",t),It.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return st.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return st.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return st.getPresetC(n)},getDirective(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return st.getPresetD(n)},getCustomPreset(t="",e,n,r){const s={name:t,preset:e,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return st.getPreset(s)},getLayerOrderCSS(t=""){return st.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,n="style",r){return st.transformCSS(t,e,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,n={}){return st.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,n={}){return st.getStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),It.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&It.emit("theme:load"))}},Oe={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Vf(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function co(t,e={}){if(Vf(t)){const n=(r,s)=>{var i,o;const a=(i=t==null?void 0:t.$attrs)!=null&&i[r]?[(o=t==null?void 0:t.$attrs)==null?void 0:o[r]]:[];return[s].flat().reduce((c,l)=>{if(l!=null){const u=typeof l;if(u==="string"||u==="number")c.push(l);else if(u==="object"){const f=Array.isArray(l)?n(r,l):Object.entries(l).map(([d,m])=>r==="style"&&(m||m===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?d:void 0);c=f.length?c.concat(f.filter(d=>!!d)):c}}return c},a)};Object.entries(e).forEach(([r,s])=>{if(s!=null){const i=r.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),s):r==="p-bind"?co(t,s):(s=r==="class"?[...new Set(n("class",s))].join(" ").trim():r==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}function Gw(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function Jw(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Gw(t))}function Yw(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Xw(t,e="",n){Vf(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}function Lr(t){"@babel/helpers - typeof";return Lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lr(t)}function Vc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Wc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vc(Object(n),!0).forEach(function(r){Qw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qw(t,e,n){return(e=Zw(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zw(t){var e=eE(t,"string");return Lr(e)=="symbol"?e:e+""}function eE(t,e){if(Lr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Lr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;fu()?nn(t):e?t():Co(t)}var nE=0;function rE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=ge(!1),r=ge(t),s=ge(null),i=Yw()?window.document:void 0,o=e.document,a=o===void 0?i:o,c=e.immediate,l=c===void 0?!0:c,u=e.manual,f=u===void 0?!1:u,d=e.name,m=d===void 0?"style_".concat(++nE):d,g=e.id,b=g===void 0?void 0:g,v=e.media,I=v===void 0?void 0:v,R=e.nonce,A=R===void 0?void 0:R,P=e.first,j=P===void 0?!1:P,Y=e.onMounted,H=Y===void 0?void 0:Y,he=e.onUpdated,pe=he===void 0?void 0:he,ye=e.onLoad,Ee=ye===void 0?void 0:ye,Se=e.props,ve=Se===void 0?{}:Se,Ie=function(){},je=function(z){var Ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var Re=Wc(Wc({},ve),Ae),le=Re.name||m,ue=Re.id||b,Qe=Re.nonce||A;s.value=a.querySelector('style[data-primevue-style-id="'.concat(le,'"]'))||a.getElementById(ue)||a.createElement("style"),s.value.isConnected||(r.value=z||t,co(s.value,{type:"text/css",id:ue,media:I,nonce:Qe}),j?a.head.prepend(s.value):a.head.appendChild(s.value),Xw(s.value,"data-primevue-style-id",le),co(s.value,Re),s.value.onload=function(Me){return Ee==null?void 0:Ee(Me,{name:le})},H==null||H(le)),!n.value&&(Ie=At(r,function(Me){s.value.textContent=Me,pe==null||pe(le)},{immediate:!0}),n.value=!0)}},X=function(){!a||!n.value||(Ie(),Jw(s.value)&&a.head.removeChild(s.value),n.value=!1)};return l&&!f&&tE(je),{id:b,name:m,el:s,css:r,unload:X,load:je,isLoaded:ys(n)}}function Dr(t){"@babel/helpers - typeof";return Dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dr(t)}function zc(t,e){return aE(t)||oE(t,e)||iE(t,e)||sE()}function sE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iE(t,e){if(t){if(typeof t=="string")return qc(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qc(t,e):void 0}}function qc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function oE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(u){l=!0,s=u}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw s}}return a}}function aE(t){if(Array.isArray(t))return t}function Kc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Pi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kc(Object(n),!0).forEach(function(r){cE(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cE(t,e,n){return(e=lE(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lE(t){var e=uE(t,"string");return Dr(e)=="symbol"?e:e+""}function uE(t,e){if(Dr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Dr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var fE=function(e){var n=e.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(n("icon.size"),`;
}

.p-icon {
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"),`;
    color: `).concat(n("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},dE=function(e){var n=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},hE={},pE={},nr={name:"base",css:dE,theme:fE,classes:hE,inlineStyles:pE,load:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},s=r(br(e,{dt:Ai}));return s?rE(vr(s),Pi({name:this.name},n)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.theme,n,function(r){return ke.transformCSS(n.name||e.name,r)})},getCommonTheme:function(e){return ke.getCommon(this.name,e)},getComponentTheme:function(e){return ke.getComponent(this.name,e)},getDirectiveTheme:function(e){return ke.getDirective(this.name,e)},getPresetTheme:function(e,n,r){return ke.getCustomPreset(this.name,e,n,r)},getLayerOrderThemeCSS:function(){return ke.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=br(this.css,{dt:Ai}),s=vr("".concat(r).concat(e)),i=Object.entries(n).reduce(function(o,a){var c=zc(a,2),l=c[0],u=c[1];return o.push("".concat(l,'="').concat(u,'"'))&&o},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(s,"</style>")}return""},getCommonThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ke.getCommonStyleSheet(this.name,e,n)},getThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[ke.getStyleSheet(this.name,e,n)];if(this.theme){var s=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=br(this.theme,{dt:Ai}),o=vr(ke.transformCSS(s,i)),a=Object.entries(n).reduce(function(c,l){var u=zc(l,2),f=u[0],d=u[1];return c.push("".concat(f,'="').concat(d,'"'))&&c},[]).join(" ");r.push('<style type="text/css" data-primevue-style-id="'.concat(s,'" ').concat(a,">").concat(o,"</style>"))}return r.join("")},extend:function(e){return Pi(Pi({},this),{},{css:void 0,theme:void 0},e)}},ss=Ff();function Mr(t){"@babel/helpers - typeof";return Mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mr(t)}function Gc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Oi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gc(Object(n),!0).forEach(function(r){mE(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gc(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function mE(t,e,n){return(e=gE(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gE(t){var e=yE(t,"string");return Mr(e)=="symbol"?e:e+""}function yE(t,e){if(Mr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Mr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var _E={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Oe.STARTS_WITH,Oe.CONTAINS,Oe.NOT_CONTAINS,Oe.ENDS_WITH,Oe.EQUALS,Oe.NOT_EQUALS],numeric:[Oe.EQUALS,Oe.NOT_EQUALS,Oe.LESS_THAN,Oe.LESS_THAN_OR_EQUAL_TO,Oe.GREATER_THAN,Oe.GREATER_THAN_OR_EQUAL_TO],date:[Oe.DATE_IS,Oe.DATE_IS_NOT,Oe.DATE_BEFORE,Oe.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},bE=Symbol();function vE(t,e){var n={config:Br(e)};return t.config.globalProperties.$primevue=n,t.provide(bE,n),wE(),EE(t,n),n}var Cn=[];function wE(){It.clear(),Cn.forEach(function(t){return t==null?void 0:t()}),Cn=[]}function EE(t,e){var n=ge(!1),r=function(){if(!ke.isStyleNameLoaded("common")){var l,u,f=((l=nr.getCommonTheme)===null||l===void 0?void 0:l.call(nr))||{},d=f.primitive,m=f.semantic,g={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};nr.load(d==null?void 0:d.css,Oi({name:"primitive-variables"},g)),nr.load(m==null?void 0:m.css,Oi({name:"semantic-variables"},g)),nr.loadTheme(Oi({name:"global-style"},g)),ke.setLoadedStyleName("common")}};It.on("theme:change",function(c){n.value||(t.config.globalProperties.$primevue.config.theme=c,n.value=!0)});var s=At(e.config,function(c,l){ss.emit("config:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),i=At(function(){return e.config.ripple},function(c,l){ss.emit("config:ripple:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),o=At(function(){return e.config.theme},function(c,l){n.value||ke.setTheme(c),e.config.unstyled||r(),n.value=!1,ss.emit("config:theme:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0}),a=At(function(){return e.config.unstyled},function(c,l){!c&&e.config.theme&&r(),ss.emit("config:unstyled:change",{newValue:c,oldValue:l})},{immediate:!0,deep:!0});Cn.push(s),Cn.push(i),Cn.push(o),Cn.push(a)}var SE={install:function(e,n){var r=Fw(_E,n);vE(e,r)}};const TE={apiKey:"AIzaSyD3dKDQA4o3hx4qMcBd8eZX4c1o7hnD-To",authDomain:"week7-lokhin.firebaseapp.com",projectId:"week7-lokhin",storageBucket:"week7-lokhin.firebasestorage.app",messagingSenderId:"434042942040",appId:"1:434042942040:web:16b851bc917d3cba70902d"};il(TE);const ti=Wm(Xb);ti.use(Gm());ti.use(Lf);ti.use(SE,{ripple:!0});ti.mount("#app");
