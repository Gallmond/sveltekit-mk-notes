var xf=Object.defineProperty;var Uf=(n,e,t)=>e in n?xf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var at=(n,e,t)=>(Uf(n,typeof e!="symbol"?e+"":e,t),t);import{S as Oe,i as $e,s as Le,C as Xo,k as b,l as E,m as T,h as g,n as w,b as H,J as Bt,D as Jo,E as Zo,F as ea,g as A,d as P,K as on,G as y,q as W,r as Q,y as ue,z as he,A as de,B as fe,L as Lt,o as On,M as gs,a as ie,c as re,p as Ff,u as _t,v as lt,f as ct,N as ta,H as We,O as mt,e as Ri,w as zt,P as $n,Q as Ln,R as Vf,I as sr,T as Bf,U as zf}from"../chunks/index.787148e1.js";import{w as wu}from"../chunks/index.437c60a6.js";/**
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
 */const bu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},jf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new qf;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hf=function(n){const e=bu(n);return Eu.encodeByteArray(e,!0)},Ni=function(n){return Hf(n).replace(/\./g,"")},Iu=function(n){try{return Eu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gf=()=>Kf().__FIREBASE_DEFAULTS__,Wf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Iu(n[1]);return e&&JSON.parse(e)},na=()=>{try{return Gf()||Wf()||Qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ku=n=>{var e,t;return(t=(e=na())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Yf=n=>{const e=ku(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Xf=()=>{var n;return(n=na())===null||n===void 0?void 0:n.config},Tu=n=>{var e;return(e=na())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ni(JSON.stringify(t)),Ni(JSON.stringify(o)),a].join(".")}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function tp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const n=Qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const op="FirebaseError";class wt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=op,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ap(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wt(i,a,s)}}function ap(n,e){return n.replace(lp,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lp=/\{\$([^}]+)}/g;function cp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Nl(r)&&Nl(o)){if(!Oi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Nl(n){return n!==null&&typeof n=="object"}/**
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
 */function Os(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ns(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function up(n,e){const t=new hp(n,e);return t.subscribe.bind(t)}class hp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");dp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Jr),i.error===void 0&&(i.error=Jr),i.complete===void 0&&(i.complete=Jr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jr(){}/**
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
 */function Ce(n){return n&&n._delegate?n._delegate:n}class un{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class fp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Jf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gp(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(n){return n===en?void 0:n}function gp(n){return n.instantiationMode==="EAGER"}/**
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
 */class mp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const yp={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},vp=ge.INFO,_p={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},wp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=_p[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const bp=(n,e)=>e.some(t=>n instanceof t);let Ol,$l;function Ep(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ip(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,wo=new WeakMap,Cu=new WeakMap,Zr=new WeakMap,ia=new WeakMap;function kp(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Pt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Su.set(t,n)}).catch(()=>{}),ia.set(e,n),e}function Tp(n){if(wo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});wo.set(n,e)}let bo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return wo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sp(n){bo=n(bo)}function Cp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(eo(this),e,...t);return Cu.set(s,e.sort?e.sort():[e]),Pt(s)}:Ip().includes(n)?function(...e){return n.apply(eo(this),e),Pt(Su.get(this))}:function(...e){return Pt(n.apply(eo(this),e))}}function Ap(n){return typeof n=="function"?Cp(n):(n instanceof IDBTransaction&&Tp(n),bp(n,Ep())?new Proxy(n,bo):n)}function Pt(n){if(n instanceof IDBRequest)return kp(n);if(Zr.has(n))return Zr.get(n);const e=Ap(n);return e!==n&&(Zr.set(n,e),ia.set(e,n)),e}const eo=n=>ia.get(n);function Dp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Rp=["get","getKey","getAll","getAllKeys","count"],Np=["put","add","delete","clear"],to=new Map;function Ll(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(to.get(e))return to.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Np.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Rp.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return to.set(e,r),r}Sp(n=>({...n,get:(e,t,s)=>Ll(e,t)||n.get(e,t,s),has:(e,t)=>!!Ll(e,t)||n.has(e,t)}));/**
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
 */class Op{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($p(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function $p(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eo="@firebase/app",Pl="0.9.7";/**
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
 */const hn=new sa("@firebase/app"),Lp="@firebase/app-compat",Pp="@firebase/analytics-compat",Mp="@firebase/analytics",xp="@firebase/app-check-compat",Up="@firebase/app-check",Fp="@firebase/auth",Vp="@firebase/auth-compat",Bp="@firebase/database",zp="@firebase/database-compat",jp="@firebase/functions",qp="@firebase/functions-compat",Hp="@firebase/installations",Kp="@firebase/installations-compat",Gp="@firebase/messaging",Wp="@firebase/messaging-compat",Qp="@firebase/performance",Yp="@firebase/performance-compat",Xp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Zp="@firebase/storage",eg="@firebase/storage-compat",tg="@firebase/firestore",ng="@firebase/firestore-compat",sg="firebase",ig="9.19.1";/**
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
 */const Io="[DEFAULT]",rg={[Eo]:"fire-core",[Lp]:"fire-core-compat",[Mp]:"fire-analytics",[Pp]:"fire-analytics-compat",[Up]:"fire-app-check",[xp]:"fire-app-check-compat",[Fp]:"fire-auth",[Vp]:"fire-auth-compat",[Bp]:"fire-rtdb",[zp]:"fire-rtdb-compat",[jp]:"fire-fn",[qp]:"fire-fn-compat",[Hp]:"fire-iid",[Kp]:"fire-iid-compat",[Gp]:"fire-fcm",[Wp]:"fire-fcm-compat",[Qp]:"fire-perf",[Yp]:"fire-perf-compat",[Xp]:"fire-rc",[Jp]:"fire-rc-compat",[Zp]:"fire-gcs",[eg]:"fire-gcs-compat",[tg]:"fire-fst",[ng]:"fire-fst-compat","fire-js":"fire-js",[sg]:"fire-js-all"};/**
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
 */const $i=new Map,ko=new Map;function og(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(ko.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,n);for(const t of $i.values())og(t,n);return!0}function ra(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ag={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new Ns("app","Firebase",ag);/**
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
 */class lg{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=ig;function Au(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Io,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(t||(t=Xf()),!t)throw Mt.create("no-options");const r=$i.get(i);if(r){if(Oi(t,r.options)&&Oi(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new mp(i);for(const l of ko.values())o.addComponent(l);const a=new lg(t,s,o);return $i.set(i,a),a}function Du(n=Io){const e=$i.get(n);if(!e&&n===Io)return Au();if(!e)throw Mt.create("no-app",{appName:n});return e}function xt(n,e,t){var s;let i=(s=rg[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Pn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cg="firebase-heartbeat-database",ug=1,ms="firebase-heartbeat-store";let no=null;function Ru(){return no||(no=Dp(cg,ug,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ms)}}}).catch(n=>{throw Mt.create("idb-open",{originalErrorMessage:n.message})})),no}async function hg(n){try{return(await Ru()).transaction(ms).objectStore(ms).get(Nu(n))}catch(e){if(e instanceof wt)hn.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function Ml(n,e){try{const s=(await Ru()).transaction(ms,"readwrite");return await s.objectStore(ms).put(e,Nu(n)),s.done}catch(t){if(t instanceof wt)hn.warn(t.message);else{const s=Mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(s.message)}}}function Nu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dg=1024,fg=30*24*60*60*1e3;class pg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xl(),{heartbeatsToSend:t,unsentEntries:s}=gg(this._heartbeatsCache.heartbeats),i=Ni(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xl(){return new Date().toISOString().substring(0,10)}function gg(n,e=dg){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ul(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ul(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class mg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?rp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ul(n){return Ni(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function yg(n){Pn(new un("platform-logger",e=>new Op(e),"PRIVATE")),Pn(new un("heartbeat",e=>new pg(e),"PRIVATE")),xt(Eo,Pl,n),xt(Eo,Pl,"esm2017"),xt("fire-js","")}yg("");var vg="firebase",_g="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(vg,_g,"app");function oa(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Ou(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wg=Ou,$u=new Ns("auth","Firebase",Ou());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new sa("@firebase/auth");function wi(n,...e){Fl.logLevel<=ge.ERROR&&Fl.error(`Auth (${$s}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw aa(n,...e)}function ft(n,...e){return aa(n,...e)}function bg(n,e,t){const s=Object.assign(Object.assign({},wg()),{[e]:t});return new Ns("auth","Firebase",s).create(e,{appName:n.name})}function aa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return $u.create(n,...e)}function Z(n,e,...t){if(!n)throw aa(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wi(e),new Error(e)}function kt(n,e){n||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Map;function Et(n){kt(n instanceof Function,"Expected a class definition");let e=Vl.get(n);return e?(kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vl.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n,e){const t=ra(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Oi(r,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function Ig(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kg(){return Bl()==="http:"||Bl()==="https:"}function Bl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kg()||tp()||"connection"in navigator)?navigator.onLine:!0}function Sg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=ep()||np()}get(){return Tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e){kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Ls(3e4,6e4);function Ps(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ms(n,e,t,s,i={}){return Pu(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Os(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Lu.fetch()(Mu(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Pu(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Cg),e);try{const i=new Dg(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw li(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw li(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw li(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw li(n,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bg(n,u,c);ht(n,u)}}catch(i){if(i instanceof wt)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function xs(n,e,t,s,i={}){const r=await Ms(n,e,t,s,i);return"mfaPendingCredential"in r&&ht(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Mu(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?la(n.config,i):`${n.config.apiScheme}://${i}`}class Dg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ft(this.auth,"network-request-failed")),Ag.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function li(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ft(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(n,e){return Ms(n,"POST","/v1/accounts:delete",e)}async function Ng(n,e){return Ms(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Og(n,e=!1){const t=Ce(n),s=await t.getIdToken(e),i=ca(s);Z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ls(so(i.auth_time)),issuedAtTime:ls(so(i.iat)),expirationTime:ls(so(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function so(n){return Number(n)*1e3}function ca(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iu(t);return i?JSON.parse(i):(wi("Failed to decode base64 JWT payload"),null)}catch(i){return wi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $g(n){const e=ca(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof wt&&Lg(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Lg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(n){var e;const t=n.auth,s=await n.getIdToken(),i=await ys(n,Ng(t,{idToken:s}));Z(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ug(r.providerUserInfo):[],a=xg(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Mg(n){const e=Ce(n);await Li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xg(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ug(n){return n.map(e=>{var{providerId:t}=e,s=oa(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e){const t=await Pu(n,{},async()=>{const s=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Mu(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Fg(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new vs;return s&&(Z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=oa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ys(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Og(this,e)}reload(){return Mg(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Li(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ys(this,Rg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=t.createdAt)!==null&&c!==void 0?c:void 0,U=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Y,emailVerified:J,isAnonymous:C,providerData:R,stsTokenManager:F}=t;Z(Y&&F,e,"internal-error");const I=vs.fromJSON(this.name,F);Z(typeof Y=="string",e,"internal-error"),Dt(h,e.name),Dt(d,e.name),Z(typeof J=="boolean",e,"internal-error"),Z(typeof C=="boolean",e,"internal-error"),Dt(f,e.name),Dt(m,e.name),Dt(p,e.name),Dt(S,e.name),Dt(k,e.name),Dt(U,e.name);const O=new an({uid:Y,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:C,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:k,lastLoginAt:U});return R&&Array.isArray(R)&&(O.providerData=R.map($=>Object.assign({},$))),S&&(O._redirectEventId=S),O}static async _fromIdTokenResponse(e,t,s=!1){const i=new vs;i.updateFromServerResponse(t);const r=new an({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Li(r),r}}/**
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
 */class Uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uu.type="NONE";const zl=Uu;/**
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
 */function bi(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=bi(this.userKey,i.apiKey,r),this.fullPersistenceKey=bi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new An(Et(zl),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Et(zl);const o=bi(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=an._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new An(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new An(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ju(e))return"Blackberry";if(qu(e))return"Webos";if(ua(e))return"Safari";if((e.includes("chrome/")||Vu(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fu(n=Qe()){return/firefox\//i.test(n)}function ua(n=Qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vu(n=Qe()){return/crios\//i.test(n)}function Bu(n=Qe()){return/iemobile/i.test(n)}function zu(n=Qe()){return/android/i.test(n)}function ju(n=Qe()){return/blackberry/i.test(n)}function qu(n=Qe()){return/webos/i.test(n)}function ir(n=Qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vg(n=Qe()){var e;return ir(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bg(){return sp()&&document.documentMode===10}function Hu(n=Qe()){return ir(n)||zu(n)||qu(n)||ju(n)||/windows phone/i.test(n)||Bu(n)}function zg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,e=[]){let t;switch(n){case"Browser":t=jl(Qe());break;case"Worker":t=`${jl(Qe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$s}/${s}`}/**
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
 */class jg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ql(this),this.idTokenSubscription=new ql(this),this.beforeStateQueue=new jg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Li(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ce(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function Us(n){return Ce(n)}class ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=up(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Gu(n,e,t){const s=Us(n);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=Wu(e),{host:o,port:a}=Hg(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Kg()}function Wu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hg(n){const e=Wu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Hl(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Hl(o)}}}function Hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function Gg(n,e){return Ms(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(n,e){return xs(n,"POST","/v1/accounts:signInWithPassword",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",Ps(n,e))}async function Yg(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends ha{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new _s(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new _s(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Wg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qg(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Gg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yg(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n,e){return xs(n,"POST","/v1/accounts:signInWithIdp",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="http://localhost";class dn extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=oa(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new dn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Dn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Dn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:Xg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Os(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zg(n){const e=ns(ss(n)).link,t=e?ns(ss(e)).deep_link_id:null,s=ns(ss(n)).deep_link_id;return(s?ns(ss(s)).link:null)||s||t||e||n}class da{constructor(e){var t,s,i,r,o,a;const l=ns(ss(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Jg((i=l.mode)!==null&&i!==void 0?i:null);Z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Zg(e);try{return new da(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,t){return _s._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=da.parseLink(t);return Z(s,"argument-error"),_s._fromEmailAndCode(e,s.code,s.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends Qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Fs{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Nt.credential(t,s)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Fs{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Fs{constructor(){super("twitter.com")}static credential(e,t){return dn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return $t.credential(t,s)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(n,e){return xs(n,"POST","/v1/accounts:signUp",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await an._fromIdTokenResponse(e,s,i),o=Kl(s);return new fn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Kl(s);return new fn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends wt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Pi(e,t,s,i)}}function Yu(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(n,r,e,s):r})}async function tm(n,e,t=!1){const s=await ys(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fn._forOperation(n,"link",s)}/**
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
 */async function nm(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await ys(n,Yu(s,i,e,n),t);Z(r.idToken,s,"internal-error");const o=ca(r.idToken);Z(o,s,"internal-error");const{sub:a}=o;return Z(n.uid===a,s,"user-mismatch"),fn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(n,e,t=!1){const s="signIn",i=await Yu(n,s,e),r=await fn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function sm(n,e){return Xu(Us(n),e)}async function im(n,e,t){const s=Us(n),i=await em(s,{returnSecureToken:!0,email:e,password:t}),r=await fn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function rm(n,e,t){return sm(Ce(n),qn.credential(e,t))}function om(n,e,t,s){return Ce(n).onIdTokenChanged(e,t,s)}function am(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function lm(n,e,t,s){return Ce(n).onAuthStateChanged(e,t,s)}function cm(n){return Ce(n).signOut()}const Mi="__sak";/**
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
 */class Ju{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){const n=Qe();return ua(n)||ir(n)}const hm=1e3,dm=10;class Zu extends Ju{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=um()&&zg(),this.fallbackToPolling=Hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Bg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dm):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zu.type="LOCAL";const fm=Zu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends Ju{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eh.type="SESSION";const th=eh;/**
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
 */function pm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await pm(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=fa("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function mm(n){pt().location.href=n}/**
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
 */function nh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _m(){return nh()?self:null}/**
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
 */const sh="firebaseLocalStorageDb",wm=1,xi="firebaseLocalStorage",ih="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function or(n,e){return n.transaction([xi],e?"readwrite":"readonly").objectStore(xi)}function bm(){const n=indexedDB.deleteDatabase(sh);return new Vs(n).toPromise()}function So(){const n=indexedDB.open(sh,wm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(xi,{keyPath:ih})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(xi)?e(s):(s.close(),await bm(),e(await So()))})})}async function Gl(n,e,t){const s=or(n,!0).put({[ih]:e,value:t});return new Vs(s).toPromise()}async function Em(n,e){const t=or(n,!1).get(e),s=await new Vs(t).toPromise();return s===void 0?null:s.value}function Wl(n,e){const t=or(n,!0).delete(e);return new Vs(t).toPromise()}const Im=800,km=3;class rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await So(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>km)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(_m()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ym(),!this.activeServiceWorker)return;this.sender=new gm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await So();return await Gl(e,Mi,"1"),await Wl(e,Mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Em(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=or(i,!1).getAll();return new Vs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Im)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rh.type="LOCAL";const Tm=rh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Cm(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ft("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Sm().appendChild(s)})}function Am(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Ls(3e4,6e4);/**
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
 */function Dm(n,e){return e?Et(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pa extends ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rm(n){return Xu(n.auth,new pa(n),n.bypassAuthState)}function Nm(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),nm(t,new pa(n),n.bypassAuthState)}async function Om(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),tm(t,new pa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rm;case"linkViaPopup":case"linkViaRedirect":return Om;case"reauthViaPopup":case"reauthViaRedirect":return Nm;default:ht(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Ls(2e3,1e4);class Tn extends oh{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$m.get())};e()}}Tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="pendingRedirect",Ei=new Map;class Pm extends oh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ei.get(this.auth._key());if(!e){try{const s=await Mm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ei.set(this.auth._key(),e)}return this.bypassAuthState||Ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mm(n,e){const t=Fm(e),s=Um(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function xm(n,e){Ei.set(n._key(),e)}function Um(n){return Et(n._redirectPersistence)}function Fm(n){return bi(Lm,n.config.apiKey,n.name)}async function Vm(n,e,t=!1){const s=Us(n),i=Dm(s,e),o=await new Pm(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=10*60*1e3;class zm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ah(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ft(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ql(e))}saveEventToCache(e){this.cachedEventUids.add(Ql(e)),this.lastProcessedEventTime=Date.now()}}function Ql(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ah({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ah(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n,e={}){return Ms(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Km=/^https?/;async function Gm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qm(n);for(const t of e)try{if(Wm(t))return}catch{}ht(n,"unauthorized-domain")}function Wm(n){const e=To(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Km.test(t))return!1;if(Hm.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Qm=new Ls(3e4,6e4);function Yl(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ym(n){return new Promise((e,t)=>{var s,i,r;function o(){Yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yl(),t(ft(n,"network-request-failed"))},timeout:Qm.get()})}if(!((i=(s=pt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pt().gapi)===null||r===void 0)&&r.load)o();else{const a=Am("iframefcb");return pt()[a]=()=>{gapi.load?o():t(ft(n,"network-request-failed"))},Cm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ii=null,e})}let Ii=null;function Xm(n){return Ii=Ii||Ym(n),Ii}/**
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
 */const Jm=new Ls(5e3,15e3),Zm="__/auth/iframe",ey="emulator/auth/iframe",ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sy(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?la(e,ey):`https://${n.config.authDomain}/${Zm}`,s={apiKey:e.apiKey,appName:n.name,v:$s},i=ny.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Os(s).slice(1)}`}async function iy(n){const e=await Xm(n),t=pt().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:sy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ty,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ft(n,"network-request-failed"),a=pt().setTimeout(()=>{r(o)},Jm.get());function l(){pt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ry={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oy=500,ay=600,ly="_blank",cy="http://localhost";class Xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uy(n,e,t,s=oy,i=ay){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ry),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Qe().toLowerCase();t&&(a=Vu(c)?ly:t),Fu(c)&&(e=e||cy,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Vg(c)&&a!=="_self")return hy(e||"",a),new Xl(null);const h=window.open(e||"",a,u);Z(h,n,"popup-blocked");try{h.focus()}catch{}return new Xl(h)}function hy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const dy="__/auth/handler",fy="emulator/auth/handler";function Jl(n,e,t,s,i,r){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:$s,eventId:i};if(e instanceof Qu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${py(n)}?${Os(a).slice(1)}`}function py({config:n}){return n.emulator?la(n,fy):`https://${n.authDomain}/${dy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="webStorageSupport";class gy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=th,this._completeRedirectFn=Vm,this._overrideRedirectResult=xm}async _openPopup(e,t,s,i){var r;kt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Jl(e,t,s,To(),i);return uy(e,o,fa())}async _openRedirect(e,t,s,i){return await this._originValidation(e),mm(Jl(e,t,s,To(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(kt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await iy(e),s=new zm(e);return t.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(io,{type:io},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[io];o!==void 0&&t(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hu()||ua()||ir()}}const my=gy;var Zl="@firebase/auth",ec="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _y(n){Pn(new un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Z(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ku(n)},u=new qg(a,l,c);return Ig(u,t),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Pn(new un("auth-internal",e=>{const t=Us(e.getProvider("auth").getImmediate());return(s=>new yy(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Zl,ec,vy(n)),xt(Zl,ec,"esm2017")}/**
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
 */const wy=5*60,by=Tu("authIdTokenMaxAge")||wy;let tc=null;const Ey=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>by)return;const i=t==null?void 0:t.token;tc!==i&&(tc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iy(n=Du()){const e=ra(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Eg(n,{popupRedirectResolver:my,persistence:[Tm,fm,th]}),s=Tu("authTokenSyncURL");if(s){const r=Ey(s);am(t,r,()=>r(t.currentUser)),om(t,o=>r(o))}const i=ku("auth");return i&&Gu(t,`http://${i}`),t}_y("Browser");var ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,ga=ga||{},te=ky||self;function Ui(){}function ar(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Bs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Ty(n){return Object.prototype.hasOwnProperty.call(n,ro)&&n[ro]||(n[ro]=++Sy)}var ro="closure_uid_"+(1e9*Math.random()>>>0),Sy=0;function Cy(n,e,t){return n.call.apply(n.bind,arguments)}function Ay(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ke(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=Cy:Ke=Ay,Ke.apply(null,arguments)}function ci(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Ue(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Qt(){this.s=this.s,this.o=this.o}var Dy=0;Qt.prototype.s=!1;Qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Dy!=0)&&Ty(this)};Qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lh=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ma(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function nc(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(ar(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function Ge(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Ry=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{te.addEventListener("test",Ui,e),te.removeEventListener("test",Ui,e)}catch{}return n}();function Fi(n){return/^[\s\xa0]*$/.test(n)}var sc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function oo(n,e){return n<e?-1:n>e?1:0}function lr(){var n=te.navigator;return n&&(n=n.userAgent)?n:""}function dt(n){return lr().indexOf(n)!=-1}function ya(n){return ya[" "](n),n}ya[" "]=Ui;function Ny(n){var e=Ly;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Oy=dt("Opera"),Mn=dt("Trident")||dt("MSIE"),ch=dt("Edge"),Co=ch||Mn,uh=dt("Gecko")&&!(lr().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),$y=lr().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function hh(){var n=te.document;return n?n.documentMode:void 0}var Vi;e:{var ao="",lo=function(){var n=lr();if(uh)return/rv:([^\);]+)(\)|;)/.exec(n);if(ch)return/Edge\/([\d\.]+)/.exec(n);if(Mn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if($y)return/WebKit\/(\S+)/.exec(n);if(Oy)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(lo&&(ao=lo?lo[1]:""),Mn){var co=hh();if(co!=null&&co>parseFloat(ao)){Vi=String(co);break e}}Vi=ao}var Ly={};function Py(){return Ny(function(){let n=0;const e=sc(String(Vi)).split("."),t=sc("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=oo(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||oo(i[2].length==0,r[2].length==0)||oo(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Ao;if(te.document&&Mn){var ic=hh();Ao=ic||parseInt(Vi,10)||void 0}else Ao=void 0;var My=Ao;function ws(n,e){if(Ge.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(uh){e:{try{ya(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:xy[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ws.X.h.call(this)}}Ue(ws,Ge);var xy={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var zs="closure_listenable_"+(1e6*Math.random()|0),Uy=0;function Fy(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++Uy,this.ba=this.ea=!1}function cr(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function va(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function dh(n){const e={};for(const t in n)e[t]=n[t];return e}const rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fh(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<rc.length;r++)t=rc[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function ur(n){this.src=n,this.g={},this.h=0}ur.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Ro(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new Fy(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Do(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=lh(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(cr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ro(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var _a="closure_lm_"+(1e6*Math.random()|0),uo={};function ph(n,e,t,s,i){if(s&&s.once)return mh(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ph(n,e[r],t,s,i);return null}return t=Ea(t),n&&n[zs]?n.N(e,t,Bs(s)?!!s.capture:!!s,i):gh(n,e,t,!1,s,i)}function gh(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Bs(i)?!!i.capture:!!i,a=ba(n);if(a||(n[_a]=a=new ur(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=Vy(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Ry||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(vh(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Vy(){function n(t){return e.call(n.src,n.listener,t)}const e=By;return n}function mh(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)mh(n,e[r],t,s,i);return null}return t=Ea(t),n&&n[zs]?n.O(e,t,Bs(s)?!!s.capture:!!s,i):gh(n,e,t,!0,s,i)}function yh(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)yh(n,e[r],t,s,i);else s=Bs(s)?!!s.capture:!!s,t=Ea(t),n&&n[zs]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Ro(r,t,s,i),-1<t&&(cr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=ba(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ro(e,t,s,i)),(t=-1<n?e[n]:null)&&wa(t))}function wa(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[zs])Do(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(vh(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=ba(e))?(Do(t,n),t.h==0&&(t.src=null,e[_a]=null)):cr(n)}}}function vh(n){return n in uo?uo[n]:uo[n]="on"+n}function By(n,e){if(n.ba)n=!0;else{e=new ws(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&wa(n),n=t.call(s,e)}return n}function ba(n){return n=n[_a],n instanceof ur?n:null}var ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ea(n){return typeof n=="function"?n:(n[ho]||(n[ho]=function(e){return n.handleEvent(e)}),n[ho])}function Ne(){Qt.call(this),this.i=new ur(this),this.P=this,this.I=null}Ue(Ne,Qt);Ne.prototype[zs]=!0;Ne.prototype.removeEventListener=function(n,e,t,s){yh(this,n,e,t,s)};function xe(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Ge(e,n);else if(e instanceof Ge)e.target=e.target||n;else{var i=e;e=new Ge(s,n),fh(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=ui(o,s,!0,e)&&i}if(o=e.g=n,i=ui(o,s,!0,e)&&i,i=ui(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=ui(o,s,!1,e)&&i}Ne.prototype.M=function(){if(Ne.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)cr(t[s]);delete n.g[e],n.h--}}this.I=null};Ne.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Ne.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function ui(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,l=o.ha||o.src;o.ea&&Do(n.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ia=te.JSON.stringify;function zy(){var n=bh;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class jy{constructor(){this.h=this.g=null}add(e,t){const s=_h.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var _h=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new qy,n=>n.reset());class qy{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Hy(n){te.setTimeout(()=>{throw n},0)}function wh(n,e){No||Ky(),Oo||(No(),Oo=!0),bh.add(n,e)}var No;function Ky(){var n=te.Promise.resolve(void 0);No=function(){n.then(Gy)}}var Oo=!1,bh=new jy;function Gy(){for(var n;n=zy();){try{n.h.call(n.g)}catch(t){Hy(t)}var e=_h;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Oo=!1}function hr(n,e){Ne.call(this),this.h=n||1,this.g=e||te,this.j=Ke(this.lb,this),this.l=Date.now()}Ue(hr,Ne);M=hr.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xe(this,"tick"),this.ca&&(ka(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ka(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}M.M=function(){hr.X.M.call(this),ka(this),delete this.g};function Ta(n,e,t){if(typeof n=="function")t&&(n=Ke(n,t));else if(n&&typeof n.handleEvent=="function")n=Ke(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(n,e||0)}function Eh(n){n.g=Ta(()=>{n.g=null,n.i&&(n.i=!1,Eh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Wy extends Qt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Eh(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(n){Qt.call(this),this.h=n,this.g={}}Ue(bs,Qt);var oc=[];function Ih(n,e,t,s){Array.isArray(t)||(t&&(oc[0]=t.toString()),t=oc);for(var i=0;i<t.length;i++){var r=ph(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function kh(n){va(n.g,function(e,t){this.g.hasOwnProperty(t)&&wa(e)},n),n.g={}}bs.prototype.M=function(){bs.X.M.call(this),kh(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dr(){this.g=!0}dr.prototype.Aa=function(){this.g=!1};function Qy(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Yy(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function Sn(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jy(n,t)+(s?" "+s:"")})}function Xy(n,e){n.info(function(){return"TIMEOUT: "+e})}dr.prototype.info=function(){};function Jy(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ia(t)}catch{return e}}var yn={},ac=null;function fr(){return ac=ac||new Ne}yn.Pa="serverreachability";function Th(n){Ge.call(this,yn.Pa,n)}Ue(Th,Ge);function Es(n){const e=fr();xe(e,new Th(e))}yn.STAT_EVENT="statevent";function Sh(n,e){Ge.call(this,yn.STAT_EVENT,n),this.stat=e}Ue(Sh,Ge);function Je(n){const e=fr();xe(e,new Sh(e,n))}yn.Qa="timingevent";function Ch(n,e){Ge.call(this,yn.Qa,n),this.size=e}Ue(Ch,Ge);function js(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){n()},e)}var pr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ah={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sa(){}Sa.prototype.h=null;function lc(n){return n.h||(n.h=n.i())}function Dh(){}var qs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ca(){Ge.call(this,"d")}Ue(Ca,Ge);function Aa(){Ge.call(this,"c")}Ue(Aa,Ge);var $o;function gr(){}Ue(gr,Sa);gr.prototype.g=function(){return new XMLHttpRequest};gr.prototype.i=function(){return{}};$o=new gr;function Hs(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new bs(this),this.O=Zy,n=Co?125:void 0,this.T=new hr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Rh}function Rh(){this.i=null,this.g="",this.h=!1}var Zy=45e3,Lo={},Bi={};M=Hs.prototype;M.setTimeout=function(n){this.O=n};function Po(n,e,t){n.K=1,n.v=yr(Tt(e)),n.s=t,n.P=!0,Nh(n,null)}function Nh(n,e){n.F=Date.now(),Ks(n),n.A=Tt(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Fh(t.i,"t",s),n.C=0,t=n.l.H,n.h=new Rh,n.g=od(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Wy(Ke(n.La,n,n.g),n.N)),Ih(n.S,n.g,"readystatechange",n.ib),e=n.H?dh(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Es(),Qy(n.j,n.u,n.A,n.m,n.U,n.s)}M.ib=function(n){n=n.target;const e=this.L;e&&It(n)==3?e.l():this.La(n)};M.La=function(n){try{if(n==this.g)e:{const u=It(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Co||this.g&&(this.h.h||this.g.fa()||dc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Es(3):Es(2)),mr(this);var t=this.g.aa();this.Y=t;t:if(Oh(this)){var s=dc(this.g);n="";var i=s.length,r=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),cs(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,Yy(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fi(a)){var c=a;break t}}c=null}if(t=c)Sn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Mo(this,t);else{this.i=!1,this.o=3,Je(12),tn(this),cs(this);break e}}this.P?($h(this,u,o),Co&&this.i&&u==3&&(Ih(this.S,this.T,"tick",this.hb),this.T.start())):(Sn(this.j,this.m,o,null),Mo(this,o)),u==4&&tn(this),this.i&&!this.I&&(u==4?nd(this.l,this):(this.i=!1,Ks(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),tn(this),cs(this)}}}catch{}finally{}};function Oh(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function $h(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=ev(n,t),i==Bi){e==4&&(n.o=4,Je(14),s=!1),Sn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Lo){n.o=4,Je(15),Sn(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Sn(n.j,n.m,i,null),Mo(n,i);Oh(n)&&i!=Bi&&i!=Lo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Je(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Pa(e),e.K=!0,Je(11))):(Sn(n.j,n.m,t,"[Invalid Chunked Response]"),tn(n),cs(n))}M.hb=function(){if(this.g){var n=It(this.g),e=this.g.fa();this.C<e.length&&(mr(this),$h(this,n,e),this.i&&n!=4&&Ks(this))}};function ev(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Bi:(t=Number(e.substring(t,s)),isNaN(t)?Lo:(s+=1,s+t>e.length?Bi:(e=e.substr(s,t),n.C=s+t,e)))}M.cancel=function(){this.I=!0,tn(this)};function Ks(n){n.V=Date.now()+n.O,Lh(n,n.O)}function Lh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=js(Ke(n.gb,n),e)}function mr(n){n.B&&(te.clearTimeout(n.B),n.B=null)}M.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(Xy(this.j,this.A),this.K!=2&&(Es(),Je(17)),tn(this),this.o=2,cs(this)):Lh(this,this.V-n)};function cs(n){n.l.G==0||n.I||nd(n.l,n)}function tn(n){mr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,ka(n.T),kh(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Mo(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||xo(t.h,n))){if(!n.J&&xo(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)qi(t),wr(t);else break e;La(t),Je(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=js(Ke(t.cb,t),6e3));if(1>=zh(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else nn(t,11)}else if((n.J||t.g==n)&&qi(t),!Fi(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.T=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.I=c[1],t.ka=c[2];const u=c[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=c[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Da(r,r.h),r.h=null))}if(s.D){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(s.za=p,_e(s.F,s.D,p))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=rd(s,s.H?s.ka:null,s.V),o.J){jh(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(mr(a),Ks(a)),s.g=o}else ed(s);0<t.i.length&&br(t)}else c[0]!="stop"&&c[0]!="close"||nn(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?nn(t,7):$a(t):c[0]!="noop"&&t.l&&t.l.wa(c),t.A=0)}}Es(4)}catch{}}function tv(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ar(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function nv(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ar(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Ph(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ar(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=nv(n),s=tv(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var Mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sv(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ln){this.h=e!==void 0?e:n.h,zi(this,n.j),this.s=n.s,this.g=n.g,ji(this,n.m),this.l=n.l,e=n.i;var t=new Is;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),cc(this,t),this.o=n.o}else n&&(t=String(n).match(Mh))?(this.h=!!e,zi(this,t[1]||"",!0),this.s=is(t[2]||""),this.g=is(t[3]||"",!0),ji(this,t[4]),this.l=is(t[5]||"",!0),cc(this,t[6]||"",!0),this.o=is(t[7]||"")):(this.h=!!e,this.i=new Is(null,this.h))}ln.prototype.toString=function(){var n=[],e=this.j;e&&n.push(rs(e,uc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(rs(e,uc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(rs(t,t.charAt(0)=="/"?ov:rv,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",rs(t,lv)),n.join("")};function Tt(n){return new ln(n)}function zi(n,e,t){n.j=t?is(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ji(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function cc(n,e,t){e instanceof Is?(n.i=e,cv(n.i,n.h)):(t||(e=rs(e,av)),n.i=new Is(e,n.h))}function _e(n,e,t){n.i.set(e,t)}function yr(n){return _e(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function is(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function rs(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,iv),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function iv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var uc=/[#\/\?@]/g,rv=/[#\?:]/g,ov=/[#\?]/g,av=/[#\?@]/g,lv=/#/g;function Is(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Yt(n){n.g||(n.g=new Map,n.h=0,n.i&&sv(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}M=Is.prototype;M.add=function(n,e){Yt(this),this.i=null,n=Hn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function xh(n,e){Yt(n),e=Hn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Uh(n,e){return Yt(n),e=Hn(n,e),n.g.has(e)}M.forEach=function(n,e){Yt(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};M.oa=function(){Yt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};M.W=function(n){Yt(this);let e=[];if(typeof n=="string")Uh(this,n)&&(e=e.concat(this.g.get(Hn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};M.set=function(n,e){return Yt(this),this.i=null,n=Hn(this,n),Uh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};M.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Fh(n,e,t){xh(n,e),0<t.length&&(n.i=null,n.g.set(Hn(n,e),ma(t)),n.h+=t.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function Hn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function cv(n,e){e&&!n.j&&(Yt(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(xh(this,s),Fh(this,i,t))},n)),n.j=e}var uv=class{constructor(e,t){this.h=e,this.g=t}};function Vh(n){this.l=n||hv,te.PerformanceNavigationTiming?(n=te.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hv=10;function Bh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function zh(n){return n.h?1:n.g?n.g.size:0}function xo(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Da(n,e){n.g?n.g.add(e):n.h=e}function jh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Vh.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function qh(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ma(n.i)}function Ra(){}Ra.prototype.stringify=function(n){return te.JSON.stringify(n,void 0)};Ra.prototype.parse=function(n){return te.JSON.parse(n,void 0)};function dv(){this.g=new Ra}function fv(n,e,t){const s=t||"";try{Ph(n,function(i,r){let o=i;Bs(i)&&(o=Ia(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function pv(n,e){const t=new dr;if(te.Image){const s=new Image;s.onload=ci(hi,t,s,"TestLoadImage: loaded",!0,e),s.onerror=ci(hi,t,s,"TestLoadImage: error",!1,e),s.onabort=ci(hi,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=ci(hi,t,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function hi(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Gs(n){this.l=n.ac||null,this.j=n.jb||!1}Ue(Gs,Sa);Gs.prototype.g=function(){return new vr(this.l,this.j)};Gs.prototype.i=function(n){return function(){return n}}({});function vr(n,e){Ne.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Na,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(vr,Ne);var Na=0;M=vr.prototype;M.open=function(n,e){if(this.readyState!=Na)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ks(this)};M.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=Na};M.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hh(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Hh(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}M.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ws(this):ks(this),this.readyState==3&&Hh(this)}};M.Va=function(n){this.g&&(this.response=this.responseText=n,Ws(this))};M.Ua=function(n){this.g&&(this.response=n,Ws(this))};M.ga=function(){this.g&&Ws(this)};function Ws(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ks(n)}M.setRequestHeader=function(n,e){this.v.append(n,e)};M.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ks(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var gv=te.JSON.parse;function Ee(n){Ne.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kh,this.K=this.L=!1}Ue(Ee,Ne);var Kh="",mv=/^https?$/i,yv=["POST","PUT"];M=Ee.prototype;M.Ka=function(n){this.L=n};M.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$o.g(),this.C=this.u?lc(this.u):lc($o),this.g.onreadystatechange=Ke(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){hc(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=te.FormData&&n instanceof te.FormData,!(0<=lh(yv,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qh(this),0<this.B&&((this.K=vv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.qa,this)):this.A=Ta(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){hc(this,r)}};function vv(n){return Mn&&Py()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}M.qa=function(){typeof ga<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function hc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Gh(n),_r(n)}function Gh(n){n.D||(n.D=!0,xe(n,"complete"),xe(n,"error"))}M.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,xe(this,"complete"),xe(this,"abort"),_r(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_r(this,!0)),Ee.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?Wh(this):this.fb())};M.fb=function(){Wh(this)};function Wh(n){if(n.h&&typeof ga<"u"&&(!n.C[1]||It(n)!=4||n.aa()!=2)){if(n.v&&It(n)==4)Ta(n.Ha,0,n);else if(xe(n,"readystatechange"),It(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(Mh)[1]||null;if(!i&&te.self&&te.self.location){var r=te.self.location.protocol;i=r.substr(0,r.length-1)}s=!mv.test(i?i.toLowerCase():"")}t=s}if(t)xe(n,"complete"),xe(n,"success");else{n.m=6;try{var o=2<It(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Gh(n)}}finally{_r(n)}}}}function _r(n,e){if(n.g){Qh(n);const t=n.g,s=n.C[0]?Ui:null;n.g=null,n.C=null,e||xe(n,"ready");try{t.onreadystatechange=s}catch{}}}function Qh(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(te.clearTimeout(n.A),n.A=null)}function It(n){return n.g?n.g.readyState:0}M.aa=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),gv(e)}};function dc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Kh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yh(n){let e="";return va(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Oa(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Yh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):_e(n,e,t))}function ts(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Xh(n){this.Ca=0,this.i=[],this.j=new dr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ts("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ts("baseRetryDelayMs",5e3,n),this.bb=ts("retryDelaySeedMs",1e4,n),this.$a=ts("forwardChannelMaxRetries",2,n),this.ta=ts("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Vh(n&&n.concurrentRequestLimit),this.Fa=new dv,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=Xh.prototype;M.ma=8;M.G=1;function $a(n){if(Jh(n),n.G==3){var e=n.U++,t=Tt(n.F);_e(t,"SID",n.I),_e(t,"RID",e),_e(t,"TYPE","terminate"),Qs(n,t),e=new Hs(n,n.j,e,void 0),e.K=2,e.v=yr(Tt(t)),t=!1,te.navigator&&te.navigator.sendBeacon&&(t=te.navigator.sendBeacon(e.v.toString(),"")),!t&&te.Image&&(new Image().src=e.v,t=!0),t||(e.g=od(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ks(e)}id(n)}function wr(n){n.g&&(Pa(n),n.g.cancel(),n.g=null)}function Jh(n){wr(n),n.u&&(te.clearTimeout(n.u),n.u=null),qi(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&te.clearTimeout(n.m),n.m=null)}function br(n){Bh(n.h)||n.m||(n.m=!0,wh(n.Ja,n),n.C=0)}function _v(n,e){return zh(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=js(Ke(n.Ja,n,e),sd(n,n.C)),n.C++,!0)}M.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Hs(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=dh(r),fh(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Zh(this,i,e),t=Tt(this.F),_e(t,"RID",n),_e(t,"CVER",22),this.D&&_e(t,"X-HTTP-Session-Id",this.D),Qs(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(Yh(r)))+"&"+e:this.o&&Oa(t,this.o,r)),Da(this.h,i),this.Ya&&_e(t,"TYPE","init"),this.O?(_e(t,"$req",e),_e(t,"SID","null"),i.Z=!0,Po(i,t,null)):Po(i,t,e),this.G=2}}else this.G==3&&(n?fc(this,n):this.i.length==0||Bh(this.h)||fc(this))};function fc(n,e){var t;e?t=e.m:t=n.U++;const s=Tt(n.F);_e(s,"SID",n.I),_e(s,"RID",t),_e(s,"AID",n.T),Qs(n,s),n.o&&n.s&&Oa(s,n.o,n.s),t=new Hs(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Zh(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Da(n.h,t),Po(t,s,e)}function Qs(n,e){n.ia&&va(n.ia,function(t,s){_e(e,s,t)}),n.l&&Ph({},function(t,s){_e(e,s,t)})}function Zh(n,e,t){t=Math.min(n.i.length,t);var s=n.l?Ke(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{fv(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function ed(n){n.g||n.u||(n.Z=1,wh(n.Ia,n),n.A=0)}function La(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=js(Ke(n.Ia,n),sd(n,n.A)),n.A++,!0)}M.Ia=function(){if(this.u=null,td(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=js(Ke(this.eb,this),n)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Je(10),wr(this),td(this))};function Pa(n){n.B!=null&&(te.clearTimeout(n.B),n.B=null)}function td(n){n.g=new Hs(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Tt(n.sa);_e(e,"RID","rpc"),_e(e,"SID",n.I),_e(e,"CI",n.L?"0":"1"),_e(e,"AID",n.T),_e(e,"TYPE","xmlhttp"),Qs(n,e),n.o&&n.s&&Oa(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=yr(Tt(e)),t.s=null,t.P=!0,Nh(t,n)}M.cb=function(){this.v!=null&&(this.v=null,wr(this),La(this),Je(19))};function qi(n){n.v!=null&&(te.clearTimeout(n.v),n.v=null)}function nd(n,e){var t=null;if(n.g==e){qi(n),Pa(n),n.g=null;var s=2}else if(xo(n.h,e))t=e.D,jh(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=fr(),xe(s,new Ch(s,t)),br(n)}else ed(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&_v(n,e)||s==2&&La(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:nn(n,5);break;case 4:nn(n,10);break;case 3:nn(n,6);break;default:nn(n,2)}}}function sd(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function nn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=Ke(n.kb,n);t||(t=new ln("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||zi(t,"https"),yr(t)),pv(t.toString(),s)}else Je(2);n.G=0,n.l&&n.l.va(e),id(n),Jh(n)}M.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function id(n){if(n.G=0,n.la=[],n.l){const e=qh(n.h);(e.length!=0||n.i.length!=0)&&(nc(n.la,e),nc(n.la,n.i),n.h.i.length=0,ma(n.i),n.i.length=0),n.l.ua()}}function rd(n,e,t){var s=t instanceof ln?Tt(t):new ln(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ji(s,s.m);else{var i=te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ln(null,void 0);s&&zi(r,s),e&&(r.g=e),i&&ji(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&_e(s,t,e),_e(s,"VER",n.ma),Qs(n,s),s}function od(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Ee(new Gs({jb:!0})):new Ee(n.ra),e.Ka(n.H),e}function ad(){}M=ad.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Hi(){if(Mn&&!(10<=Number(My)))throw Error("Environmental error: no available transport.")}Hi.prototype.g=function(n,e){return new ot(n,e)};function ot(n,e){Ne.call(this),this.g=new Xh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Fi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fi(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Kn(this)}Ue(ot,Ne);ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Je(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=rd(n,null,n.V),br(n)};ot.prototype.close=function(){$a(this.g)};ot.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ia(n),n=t);e.i.push(new uv(e.ab++,n)),e.G==3&&br(e)};ot.prototype.M=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,ot.X.M.call(this)};function ld(n){Ca.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ue(ld,Ca);function cd(){Aa.call(this),this.status=1}Ue(cd,Aa);function Kn(n){this.g=n}Ue(Kn,ad);Kn.prototype.xa=function(){xe(this.g,"a")};Kn.prototype.wa=function(n){xe(this.g,new ld(n))};Kn.prototype.va=function(n){xe(this.g,new cd)};Kn.prototype.ua=function(){xe(this.g,"b")};Hi.prototype.createWebChannel=Hi.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;pr.NO_ERROR=0;pr.TIMEOUT=8;pr.HTTP_ERROR=6;Ah.COMPLETE="complete";Dh.EventType=qs;qs.OPEN="a";qs.CLOSE="b";qs.ERROR="c";qs.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;Ee.prototype.listenOnce=Ee.prototype.O;Ee.prototype.getLastError=Ee.prototype.Oa;Ee.prototype.getLastErrorCode=Ee.prototype.Ea;Ee.prototype.getStatus=Ee.prototype.aa;Ee.prototype.getResponseJson=Ee.prototype.Sa;Ee.prototype.getResponseText=Ee.prototype.fa;Ee.prototype.send=Ee.prototype.da;Ee.prototype.setWithCredentials=Ee.prototype.Ka;var wv=function(){return new Hi},bv=function(){return fr()},fo=pr,Ev=Ah,Iv=yn,pc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kv=Gs,di=Dh,Tv=Ee;const gc="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let Gn="9.19.0";/**
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
 */const pn=new sa("@firebase/firestore");function mc(){return pn.logLevel}function x(n,...e){if(pn.logLevel<=ge.DEBUG){const t=e.map(Ma);pn.debug(`Firestore (${Gn}): ${n}`,...t)}}function St(n,...e){if(pn.logLevel<=ge.ERROR){const t=e.map(Ma);pn.error(`Firestore (${Gn}): ${n}`,...t)}}function Ki(n,...e){if(pn.logLevel<=ge.WARN){const t=e.map(Ma);pn.warn(`Firestore (${Gn}): ${n}`,...t)}}function Ma(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
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
 */function ee(n="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+n;throw St(e),new Error(e)}function ve(n,e){n||ee()}function se(n,e){return n}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class Cv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Av{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let r=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ut)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new ud(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ze(e)}}class Dv{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rv{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new Dv(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ov{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=r=>{r.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string"),this.T=t.token,new Nv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class hd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=$v(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function me(n,e){return n<e?-1:n>e?1:0}function xn(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
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
 */class be{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new be(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new be(0,0))}static max(){return new ne(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ts{constructor(e,t,s){t===void 0?t=0:t>e.length&&ee(),s===void 0?s=e.length-t:s>e.length-t&&ee(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ts.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ts?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class we extends Ts{construct(e,t,s){return new we(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(v.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new we(t)}static emptyPath(){return new we([])}}const Lv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Ts{construct(e,t,s){return new He(e,t,s)}static isValidIdentifier(e){return Lv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new V(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(t)}static emptyPath(){return new He([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(we.fromString(e))}static fromName(e){return new j(we.fromString(e).popFirst(5))}static empty(){return new j(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new we(e.slice()))}}function Pv(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(s===1e9?new be(t+1,0):new be(t,s));return new jt(i,j.empty(),e)}function Mv(n){return new jt(n.readTime,n.key,-1)}class jt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new jt(ne.min(),j.empty(),-1)}static max(){return new jt(ne.max(),j.empty(),-1)}}function xv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:me(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ys(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==Uv)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,s)=>{t(e)})}static reject(e){return new _((t,s)=>{s(e)})}static waitFor(e){return new _((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},l=>s(l))}),o=!0,r===i&&t()})}static or(e){let t=_.resolve(!1);for(const s of e)t=t.next(i=>i?_.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new _((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new _((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function Xs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}xa.ct=-1;function Er(n){return n==null}function Gi(n){return n===0&&1/n==-1/0}function Vv(n){return typeof n=="number"&&Number.isInteger(n)&&!Gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Me.RED,this.left=i??Me.EMPTY,this.right=r??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Me(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(n,e,t,s,i){return this}insert(n,e,t){return new Me(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vc(this.data.getIterator())}getIteratorFrom(e){return new vc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class vc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new it([])}unionWith(e){let t=new Se(He.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Bv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bv("Invalid base64 string: "+i):i}}(e);return new Ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const zv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(ve(!!n),typeof n=="string"){let e=0;const t=zv.exec(n);if(ve(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ke(n.seconds),nanos:ke(n.nanos)}}function ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Un(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pd(n){const e=n.mapValue.fields.__previous_value__;return fd(e)?pd(e):e}function Ss(n){const e=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class jv{constructor(e,t,s,i,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Cs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fd(n)?4:qv(n)?9007199254740991:10:ee()}function yt(n,e){if(n===e)return!0;const t=gn(n);if(t!==gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ss(n).isEqual(Ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=qt(s.timestampValue),o=qt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ke(s.doubleValue),o=ke(i.doubleValue);return r===o?Gi(r)===Gi(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return xn(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(yc(r)!==yc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!yt(r[a],o[a])))return!1;return!0}(n,e);default:return ee()}}function As(n,e){return(n.values||[]).find(t=>yt(t,e))!==void 0}function Fn(n,e){if(n===e)return 0;const t=gn(n),s=gn(e);if(t!==s)return me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return me(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ke(i.integerValue||i.doubleValue),a=ke(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return _c(n.timestampValue,e.timestampValue);case 4:return _c(Ss(n),Ss(e));case 5:return me(n.stringValue,e.stringValue);case 6:return function(i,r){const o=Un(i),a=Un(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=me(o[l],a[l]);if(c!==0)return c}return me(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=me(ke(i.latitude),ke(r.latitude));return o!==0?o:me(ke(i.longitude),ke(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Fn(o[l],a[l]);if(c)return c}return me(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===pi.mapValue&&r===pi.mapValue)return 0;if(i===pi.mapValue)return 1;if(r===pi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=me(a[u],c[u]);if(h!==0)return h;const d=Fn(o[a[u]],l[c[u]]);if(d!==0)return d}return me(a.length,c.length)}(n.mapValue,e.mapValue);default:throw ee()}}function _c(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return me(n,e);const t=qt(n),s=qt(e),i=me(t.seconds,s.seconds);return i!==0?i:me(t.nanos,s.nanos)}function Vn(n){return Uo(n)}function Uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=qt(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Un(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,j.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Uo(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Uo(s.fields[a])}`;return r+"}"}(n.mapValue):ee();var e,t}function Fo(n){return!!n&&"integerValue"in n}function Ua(n){return!!n&&"arrayValue"in n}function wc(n){return!!n&&"nullValue"in n}function bc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ki(n){return!!n&&"mapValue"in n}function us(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=us(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=us(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(t)}setAll(e){let t=He.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=us(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];ki(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){vn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new nt(us(this.value))}}function gd(n){const e=[];return vn(n.fields,(t,s)=>{const i=new He([t]);if(ki(s)){const r=gd(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new it(e)}/**
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
 */class je{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,ne.min(),ne.min(),ne.min(),nt.empty(),0)}static newFoundDocument(e,t,s,i){return new je(e,1,t,ne.min(),s,i,0)}static newNoDocument(e,t){return new je(e,2,t,ne.min(),ne.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,ne.min(),ne.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wi{constructor(e,t){this.position=e,this.inclusive=t}}function Ec(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),t.key):s=Fn(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ic(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class md{}class Te extends md{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Gv(e,t,s):t==="array-contains"?new Yv(e,s):t==="in"?new Xv(e,s):t==="not-in"?new Jv(e,s):t==="array-contains-any"?new Zv(e,s):new Te(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Wv(e,s):new Qv(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fn(t,this.value)):t!==null&&gn(this.value)===gn(t)&&this.matchesComparison(Fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vt extends md{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new vt(e,t)}matches(e){return yd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function yd(n){return n.op==="and"}function vd(n){return Kv(n)&&yd(n)}function Kv(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function Vo(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+Vn(n.value);if(vd(n))return n.filters.map(e=>Vo(e)).join(",");{const e=n.filters.map(t=>Vo(t)).join(",");return`${n.op}(${e})`}}function _d(n,e){return n instanceof Te?function(t,s){return s instanceof Te&&t.op===s.op&&t.field.isEqual(s.field)&&yt(t.value,s.value)}(n,e):n instanceof vt?function(t,s){return s instanceof vt&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&_d(r,s.filters[o]),!0):!1}(n,e):void ee()}function wd(n){return n instanceof Te?function(e){return`${e.field.canonicalString()} ${e.op} ${Vn(e.value)}`}(n):n instanceof vt?function(e){return e.op.toString()+" {"+e.getFilters().map(wd).join(" ,")+"}"}(n):"Filter"}class Gv extends Te{constructor(e,t,s){super(e,t,s),this.key=j.fromName(s.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wv extends Te{constructor(e,t){super(e,"in",t),this.keys=bd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qv extends Te{constructor(e,t){super(e,"not-in",t),this.keys=bd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>j.fromName(s.referenceValue))}class Yv extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ua(t)&&As(t.arrayValue,this.value)}}class Xv extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class Jv extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!As(this.value.arrayValue,t)}}class Zv extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ua(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}/**
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
 */class e_{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function kc(n,e=null,t=[],s=[],i=null,r=null,o=null){return new e_(n,e,t,s,i,r,o)}function Fa(n){const e=se(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Vo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Er(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Vn(s)).join(",")),e.ft=t}return e.ft}function Va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Hv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_d(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ic(n.startAt,e.startAt)&&Ic(n.endAt,e.endAt)}function Bo(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ir{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function t_(n,e,t,s,i,r,o,a){return new Ir(n,e,t,s,i,r,o,a)}function Ba(n){return new Ir(n)}function Tc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function n_(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function s_(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function i_(n){return n.collectionGroup!==null}function Rn(n){const e=se(n);if(e.dt===null){e.dt=[];const t=s_(e),s=n_(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new hs(t)),e.dt.push(new hs(He.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new hs(He.keyField(),r))}}}return e.dt}function Ct(n){const e=se(n);if(!e.wt)if(e.limitType==="F")e.wt=kc(e.path,e.collectionGroup,Rn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Rn(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new hs(r.field,o))}const s=e.endAt?new Wi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Wi(e.startAt.position,e.startAt.inclusive):null;e.wt=kc(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e.wt}function zo(n,e,t){return new Ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function kr(n,e){return Va(Ct(n),Ct(e))&&n.limitType===e.limitType}function Ed(n){return`${Fa(Ct(n))}|lt:${n.limitType}`}function jo(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>wd(s)).join(", ")}]`),Er(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Vn(s)).join(",")),`Target(${t})`}(Ct(n))}; limitType=${n.limitType})`}function Tr(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):j.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of Rn(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=Ec(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,Rn(t),s)||t.endAt&&!function(i,r,o){const a=Ec(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,Rn(t),s))}(n,e)}function r_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Id(n){return(e,t)=>{let s=!1;for(const i of Rn(n)){const r=o_(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function o_(n,e,t){const s=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Fn(a,l):ee()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ee()}}/**
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
 */class Wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return dd(this.inner)}size(){return this.innerSize}}/**
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
 */const a_=new Ae(j.comparator);function At(){return a_}const kd=new Ae(j.comparator);function os(...n){let e=kd;for(const t of n)e=e.insert(t.key,t);return e}function Td(n){let e=kd;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function sn(){return ds()}function Sd(){return ds()}function ds(){return new Wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const l_=new Ae(j.comparator),c_=new Se(j.comparator);function le(...n){let e=c_;for(const t of n)e=e.add(t);return e}const u_=new Se(me);function Cd(){return u_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(e)?"-0":e}}function Dd(n){return{integerValue:""+n}}function h_(n,e){return Vv(e)?Dd(e):Ad(n,e)}/**
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
 */class Sr{constructor(){this._=void 0}}function d_(n,e,t){return n instanceof Qi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof Ds?Nd(n,e):n instanceof Rs?Od(n,e):function(s,i){const r=Rd(s,i),o=Sc(r)+Sc(s._t);return Fo(r)&&Fo(s._t)?Dd(o):Ad(s.serializer,o)}(n,e)}function f_(n,e,t){return n instanceof Ds?Nd(n,e):n instanceof Rs?Od(n,e):t}function Rd(n,e){return n instanceof Yi?Fo(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Qi extends Sr{}class Ds extends Sr{constructor(e){super(),this.elements=e}}function Nd(n,e){const t=$d(e);for(const s of n.elements)t.some(i=>yt(i,s))||t.push(s);return{arrayValue:{values:t}}}class Rs extends Sr{constructor(e){super(),this.elements=e}}function Od(n,e){let t=$d(e);for(const s of n.elements)t=t.filter(i=>!yt(i,s));return{arrayValue:{values:t}}}class Yi extends Sr{constructor(e,t){super(),this.serializer=e,this._t=t}}function Sc(n){return ke(n.integerValue||n.doubleValue)}function $d(n){return Ua(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function p_(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Ds&&s instanceof Ds||t instanceof Rs&&s instanceof Rs?xn(t.elements,s.elements,yt):t instanceof Yi&&s instanceof Yi?yt(t._t,s._t):t instanceof Qi&&s instanceof Qi}(n.transform,e.transform)}class g_{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Cr{}function Ld(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ar(n.key,st.none()):new Js(n.key,n.data,st.none());{const t=n.data,s=nt.empty();let i=new Se(He.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xt(n.key,s,new it(i.toArray()),st.none())}}function m_(n,e,t){n instanceof Js?function(s,i,r){const o=s.value.clone(),a=Ac(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Xt?function(s,i,r){if(!Ti(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ac(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Pd(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function fs(n,e,t,s){return n instanceof Js?function(i,r,o,a){if(!Ti(i.precondition,r))return o;const l=i.value.clone(),c=Dc(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(n,e,t,s):n instanceof Xt?function(i,r,o,a){if(!Ti(i.precondition,r))return o;const l=Dc(i.fieldTransforms,a,r),c=r.data;return c.setAll(Pd(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return Ti(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function y_(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Rd(s.transform,i||null);r!=null&&(t===null&&(t=nt.empty()),t.set(s.field,r))}return t||null}function Cc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&xn(t,s,(i,r)=>p_(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Js extends Cr{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xt extends Cr{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Pd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Ac(n,e,t){const s=new Map;ve(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,f_(o,a,t[i]))}return s}function Dc(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,d_(r,o,e))}return s}class Ar extends Cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends Cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class __{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&m_(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=fs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=fs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Sd();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const l=Ld(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&xn(this.mutations,e.mutations,(t,s)=>Cc(t,s))&&xn(this.baseMutations,e.baseMutations,(t,s)=>Cc(t,s))}}class za{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){ve(e.mutations.length===s.length);let i=l_;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new za(e,t,s,i)}}/**
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
 */class w_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b_{constructor(e){this.count=e}}/**
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
 */var Ie,ce;function E_(n){switch(n){default:return ee();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Md(n){if(n===void 0)return St("GRPC error has no .code"),v.UNKNOWN;switch(n){case Ie.OK:return v.OK;case Ie.CANCELLED:return v.CANCELLED;case Ie.UNKNOWN:return v.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return v.INTERNAL;case Ie.UNAVAILABLE:return v.UNAVAILABLE;case Ie.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ie.NOT_FOUND:return v.NOT_FOUND;case Ie.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ie.ABORTED:return v.ABORTED;case Ie.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ie.DATA_LOSS:return v.DATA_LOSS;default:return ee()}}(ce=Ie||(Ie={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ja{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gi}static getOrCreateInstance(){return gi===null&&(gi=new ja),gi}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let gi=null;/**
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
 */class Dr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Dr(ne.min(),i,Cd(),At(),le())}}class Zs{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Zs(s,t,le(),le(),le())}}/**
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
 */class Si{constructor(e,t,s,i){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=i}}class xd{constructor(e,t){this.targetId=e,this.Et=t}}class Ud{constructor(e,t,s=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Rc{constructor(){this.At=0,this.Rt=Oc(),this.vt=Ye.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),t=le(),s=le();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:ee()}}),new Zs(this.vt,this.bt,e,t,s)}xt(){this.Pt=!1,this.Rt=Oc()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class I_{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=At(),this.qt=Nc(),this.Ut=new Se(me)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const s=this.jt(t);switch(e.state){case 0:this.Wt(t)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,i)=>{this.Wt(i)&&t(i)})}Jt(e){var t;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Bo(o))if(i===0){const a=new j(o.path);this.Qt(s,a,je.newNoDocument(a,ne.min()))}else ve(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(t=ja.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Bo(a.target)){const l=new j(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,je.newNoDocument(l,e))}r.St&&(t.set(o,r.Ct()),r.xt())}});let s=le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Dr(e,t,this.Ut,this.Lt,s);return this.Lt=At(),this.qt=Nc(),this.Ut=new Se(me),i}Gt(e,t){if(!this.Wt(e))return;const s=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Rc,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Se(me),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Rc),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Nc(){return new Ae(j.comparator)}function Oc(){return new Ae(j.comparator)}/**
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
 */const k_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),T_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),S_=(()=>({and:"AND",or:"OR"}))();class C_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function A_(n,e){return Xi(n,e.toTimestamp())}function gt(n){return ve(!!n),ne.fromTimestamp(function(e){const t=qt(e);return new be(t.seconds,t.nanos)}(n))}function qa(n,e){return function(t){return new we(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Vd(n){const e=we.fromString(n);return ve(qd(e)),e}function qo(n,e){return qa(n.databaseId,e.path)}function po(n,e){const t=Vd(e);if(t.get(1)!==n.databaseId.projectId)throw new V(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Bd(t))}function Ho(n,e){return qa(n.databaseId,e)}function D_(n){const e=Vd(n);return e.length===4?we.emptyPath():Bd(e)}function Ko(n){return new we(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bd(n){return ve(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $c(n,e,t){return{name:qo(n,e),fields:t.value.mapValue.fields}}function R_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(ve(c===void 0||typeof c=="string"),Ye.fromBase64String(c||"")):(ve(c===void 0||c instanceof Uint8Array),Ye.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?v.UNKNOWN:Md(l.code);return new V(c,l.message||"")}(o);t=new Ud(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=po(n,s.document.name),r=gt(s.document.updateTime),o=s.document.createTime?gt(s.document.createTime):ne.min(),a=new nt({mapValue:{fields:s.document.fields}}),l=je.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];t=new Si(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=po(n,s.document),r=s.readTime?gt(s.readTime):ne.min(),o=je.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Si([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=po(n,s.document),r=s.removedTargetIds||[];t=new Si([],r,i,null)}else{if(!("filter"in e))return ee();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new b_(i),o=s.targetId;t=new xd(o,r)}}return t}function N_(n,e){let t;if(e instanceof Js)t={update:$c(n,e.key,e.value)};else if(e instanceof Ar)t={delete:qo(n,e.key)};else if(e instanceof Xt)t={update:$c(n,e.key,e.data),updateMask:V_(e.fieldMask)};else{if(!(e instanceof v_))return ee();t={verify:qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Qi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ds)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Rs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yi)return{fieldPath:r.field.canonicalString(),increment:o._t};throw ee()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:A_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(n,e.precondition)),t}function O_(n,e){return n&&n.length>0?(ve(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?gt(s.updateTime):gt(i);return r.isEqual(ne.min())&&(r=gt(i)),new g_(r,s.transformResults||[])}(t,e))):[]}function $_(n,e){return{documents:[Ho(n,e.path)]}}function L_(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Ho(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ho(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return jd(vt.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:In(u.field),direction:x_(u.dir)}}(c))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Er(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function P_(n){let e=D_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){ve(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=zd(u);return h instanceof vt&&vd(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new hs(kn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Er(h)?null:h}(t.limit));let l=null;t.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Wi(d,h)}(t.startAt));let c=null;return t.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Wi(d,h)}(t.endAt)),t_(e,i,o,r,a,"F",l,c)}function M_(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function zd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=kn(e.unaryFilter.field);return Te.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=kn(e.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kn(e.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=kn(e.unaryFilter.field);return Te.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(n):n.fieldFilter!==void 0?function(e){return Te.create(kn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return vt.create(e.compositeFilter.filters.map(t=>zd(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(n):ee()}function x_(n){return k_[n]}function U_(n){return T_[n]}function F_(n){return S_[n]}function In(n){return{fieldPath:n.canonicalString()}}function kn(n){return He.fromServerFormat(n.fieldPath)}function jd(n){return n instanceof Te?function(e){if(e.op==="=="){if(bc(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NAN"}};if(wc(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(bc(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NAN"}};if(wc(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(e.field),op:U_(e.op),value:e.value}}}(n):n instanceof vt?function(e){const t=e.getFilters().map(s=>jd(s));return t.length===1?t[0]:{compositeFilter:{op:F_(e.op),filters:t}}}(n):ee()}function V_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class cn{constructor(e,t,s,i,r=ne.min(),o=ne.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class B_{constructor(e){this.se=e}}function z_(n){const e=P_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zo(e,e.limit,"L"):e}/**
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
 */class j_{constructor(){this.He=new q_}addToCollectionParentIndex(e,t){return this.He.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(jt.min())}updateCollectionGroup(e,t,s){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class q_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Se(we.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Se(we.comparator)).toArray()}}/**
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
 */class Bn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Bn(0)}static bn(){return new Bn(-1)}}/**
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
 */class H_{constructor(){this.changes=new Wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?_.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class K_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class G_{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&fs(s.mutation,i,it.empty(),be.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=le()){const i=sn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=os();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=sn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,le()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=At();const o=ds(),a=ds();return t.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Xt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),fs(u.mutation,c,u.mutation.getFieldMask(),be.now())):o.set(c.key,it.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new K_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=ds();let i=new Ae((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=s.get(l)||it.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Sd();u.forEach(d=>{if(!r.has(d)){const f=Ld(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):i_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):_.resolve(sn());let a=-1,l=r;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:Td(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(s=>{let i=os();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=os();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(c,u){return new Ir(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,je.newInvalidDocument(c)))});let o=os();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&fs(c.mutation,l,it.empty(),be.now()),Tr(t,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return _.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:gt(s.createTime)}),_.resolve()}getNamedQuery(e,t){return _.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(s){return{name:s.name,query:z_(s.bundledQuery),readTime:gt(s.readTime)}}(t)),_.resolve()}}/**
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
 */class Q_{constructor(){this.overlays=new Ae(j.comparator),this.ts=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const s=sn();return _.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.re(e,t,r)}),_.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),_.resolve()}getOverlaysForCollection(e,t,s){const i=sn(),r=t.length+1,o=new j(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Ae((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=sn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=sn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}re(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new w_(t,s));let r=this.ts.get(t);r===void 0&&(r=le(),this.ts.set(t,r)),this.ts.set(t,r.add(s.key))}}/**
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
 */class Ha{constructor(){this.es=new Se(Re.ns),this.ss=new Se(Re.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const s=new Re(e,t);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.us(new Re(e,t))}cs(e,t){e.forEach(s=>this.removeReference(s,t))}hs(e){const t=new j(new we([])),s=new Re(t,e),i=new Re(t,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new j(new we([])),s=new Re(t,e),i=new Re(t,e+1);let r=le();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Re(e,0),s=this.es.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Re{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return j.comparator(e.key,t.key)||me(e.ds,t.ds)}static rs(e,t){return me(e.ds,t.ds)||j.comparator(e.key,t.key)}}/**
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
 */class Y_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Se(Re.ns)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new __(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Re(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,t){return _.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ys(s),r=i<0?0:i;return _.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Re(t,0),i=new Re(t,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),_.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Se(me);return t.forEach(i=>{const r=new Re(i,0),o=new Re(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),_.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Re(new j(r),0);let a=new Se(me);return this._s.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),_.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ve(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return _.forEach(t.mutations,i=>{const r=new Re(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,t){const s=new Re(t,0),i=this._s.firstAfterOrEqual(s);return _.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class X_{constructor(e){this.Ts=e,this.docs=new Ae(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return _.resolve(s?s.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let s=At();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():je.newInvalidDocument(i))}),_.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=At();const o=t.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xv(Mv(u),s)<=0||(i.has(u.key)||Tr(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return _.resolve(r)}getAllFromCollectionGroup(e,t,s,i){ee()}Es(e,t){return _.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new J_(this)}getSize(e){return _.resolve(this.size)}}class J_ extends H_{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),_.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class Z_{constructor(e){this.persistence=e,this.As=new Wn(t=>Fa(t),Va),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ha,this.targetCount=0,this.bs=Bn.vn()}forEachTarget(e,t){return this.As.forEach((s,i)=>t(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Rs&&(this.Rs=t),_.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Bn(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.Sn(t),_.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(r).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const s=this.As.get(t)||null;return _.resolve(s)}addMatchingKeys(e,t,s){return this.vs.os(t,s),_.resolve()}removeMatchingKeys(e,t,s){this.vs.cs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),_.resolve()}getMatchingKeysForTargetId(e,t){const s=this.vs.fs(t);return _.resolve(s)}containsKey(e,t){return _.resolve(this.vs.containsKey(t))}}/**
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
 */class ew{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new xa(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Z_(this),this.indexManager=new j_,this.remoteDocumentCache=function(s){return new X_(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new B_(t),this.xs=new W_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Q_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ps[e.toKey()];return s||(s=new Y_(t,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,s){x("MemoryPersistence","Starting transaction:",e);const i=new tw(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,t){return _.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,t)))}}class tw extends Fv{constructor(e){super(),this.currentSequenceNumber=e}}class Ka{constructor(e){this.persistence=e,this.$s=new Ha,this.Ms=null}static Fs(e){return new Ka(e)}get Bs(){if(this.Ms)return this.Ms;throw ee()}addReference(e,t,s){return this.$s.addReference(s,t),this.Bs.delete(s.toString()),_.resolve()}removeReference(e,t,s){return this.$s.removeReference(s,t),this.Bs.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),_.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Bs,s=>{const i=j.fromPath(s);return this.Ls(e,i).next(r=>{r||t.removeEntry(i,ne.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(s=>{s?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return _.or([()=>_.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class Ga{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Vi=s,this.Si=i}static Di(e,t){let s=le(),i=le();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ga(e,t.fromCache,s,i)}}/**
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
 */class nw{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Ni(e,t).next(r=>r||this.ki(e,t,i,s)).next(r=>r||this.Oi(e,t))}Ni(e,t){if(Tc(t))return _.resolve(null);let s=Ct(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=zo(t,null,"F"),s=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.$i(t,a);return this.Mi(t,c,o,l.readTime)?this.Ni(e,zo(t,null,"F")):this.Fi(e,c,t,l)}))})))}ki(e,t,s,i){return Tc(t)||i.isEqual(ne.min())?this.Oi(e,t):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(t,r);return this.Mi(t,o,s,i)?this.Oi(e,t):(mc()<=ge.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jo(t)),this.Fi(e,o,t,Pv(i,-1)))})}$i(e,t){let s=new Se(Id(e));return t.forEach((i,r)=>{Tr(e,r)&&(s=s.add(r))}),s}Mi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,t){return mc()<=ge.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",jo(t)),this.xi.getDocumentsMatchingQuery(e,t,jt.min())}Fi(e,t,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,s,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new Ae(me),this.qi=new Wn(r=>Fa(r),Va),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G_(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function iw(n,e,t,s){return new sw(n,e,t,s)}async function Hd(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Gi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=le();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(s,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function rw(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=_.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(m=>{const p=l.docVersions.get(f);ve(p!==null),m.version.compareTo(p)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Kd(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function ow(n,e){const t=se(n),s=e.snapshotVersion;let i=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});i=t.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ye.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,p,S){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,u)&&a.push(t.Ds.updateTargetData(r,f))});let l=At(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(aw(r,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!s.isEqual(ne.min())){const u=t.Ds.getLastRemoteSnapshotVersion(r).next(h=>t.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(t.Li=i,r))}function aw(n,e,t){let s=le(),i=le();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=At();return t.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function lw(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function cw(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ds.getTargetData(s,e).next(r=>r?(i=r,_.resolve(i)):t.Ds.allocateTargetId(s).next(o=>(i=new cn(e,o,0,s.currentSequenceNumber),t.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Li=t.Li.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function Go(n,e,t){const s=se(n),i=s.Li.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xs(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function Lc(n,e,t){const s=se(n);let i=ne.min(),r=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=se(a),h=u.qi.get(c);return h!==void 0?_.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(s,o,Ct(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,t?i:ne.min(),t?r:le())).next(a=>(uw(s,r_(e),a),{documents:a,Wi:r})))}function uw(n,e,t){let s=n.Ui.get(e)||ne.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ui.set(e,s)}class Pc{constructor(){this.activeTargetIds=Cd()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hw{constructor(){this.Br=new Pc,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,s){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Pc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dw{qr(e){}shutdown(){}}/**
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
 */class Mc{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mi=null;function go(){return mi===null?mi=268435456+Math.round(2147483648*Math.random()):mi++,"0x"+mi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pw{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ve="WebChannelConnection";class gw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,s,i,r){const o=go(),a=this.ao(e,t);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.ho(l,i,r),this.lo(e,a,l,s).then(c=>(x("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Ki("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,t,s,i,r,o){return this.co(e,t,s,i,r)}ho(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,t){const s=fw[e];return`${this.ro}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,s,i){const r=go();return new Promise((o,a)=>{const l=new Tv;l.setWithCredentials(!0),l.listenOnce(Ev.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fo.NO_ERROR:const u=l.getResponseJson();x(Ve,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case fo.TIMEOUT:x(Ve,`RPC '${e}' ${r} timed out`),a(new V(v.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const h=l.getStatus();if(x(Ve,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(p){const S=p.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(S)>=0?S:v.UNKNOWN}(f.status);a(new V(m,f.message))}else a(new V(v.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(v.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{x(Ve,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);x(Ve,`RPC '${e}' ${r} sending request:`,i),l.send(t,"POST",c,s,15)})}wo(e,t,s){const i=go(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wv(),a=bv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new kv({})),this.ho(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const c=r.join("");x(Ve,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new pw({Wr:p=>{d?x(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,p):(h||(x(Ve,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),x(Ve,`RPC '${e}' stream ${i} sending:`,p),u.send(p))},Hr:()=>u.close()}),m=(p,S,k)=>{p.listen(S,U=>{try{k(U)}catch(Y){setTimeout(()=>{throw Y},0)}})};return m(u,di.EventType.OPEN,()=>{d||x(Ve,`RPC '${e}' stream ${i} transport opened.`)}),m(u,di.EventType.CLOSE,()=>{d||(d=!0,x(Ve,`RPC '${e}' stream ${i} transport closed`),f.so())}),m(u,di.EventType.ERROR,p=>{d||(d=!0,Ki(Ve,`RPC '${e}' stream ${i} transport errored:`,p),f.so(new V(v.UNAVAILABLE,"The operation could not be completed")))}),m(u,di.EventType.MESSAGE,p=>{var S;if(!d){const k=p.data[0];ve(!!k);const U=k,Y=U.error||((S=U[0])===null||S===void 0?void 0:S.error);if(Y){x(Ve,`RPC '${e}' stream ${i} received error:`,Y);const J=Y.status;let C=function(F){const I=Ie[F];if(I!==void 0)return Md(I)}(J),R=Y.message;C===void 0&&(C=v.INTERNAL,R="Unknown error status: "+J+" with message "+Y.message),d=!0,f.so(new V(C,R)),u.close()}else x(Ve,`RPC '${e}' stream ${i} received:`,k),f.io(k)}}),m(a,Iv.STAT_EVENT,p=>{p.stat===pc.PROXY?x(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):p.stat===pc.NOPROXY&&x(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}function mo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){return new C_(n,!0)}/**
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
 */class Gd{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=t,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,t-s);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Wd{constructor(e,t,s,i,r,o,a,l){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Gd(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===t&&this.Ko(s,i)},s=>{e(()=>{const i=new V(v.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,t){const s=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mw extends Wd{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=R_(this.serializer,e),s=function(i){if(!("targetChange"in i))return ne.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?ne.min():r.readTime?gt(r.readTime):ne.min()}(e);return this.listener.zo(t,s)}jo(e){const t={};t.database=Ko(this.serializer),t.addTarget=function(i,r){let o;const a=r.target;return o=Bo(a)?{documents:$_(i,a)}:{query:L_(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Fd(i,r.resumeToken):r.snapshotVersion.compareTo(ne.min())>0&&(o.readTime=Xi(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=M_(this.serializer,e);s&&(t.labels=s),this.Fo(t)}Wo(e){const t={};t.database=Ko(this.serializer),t.removeTarget=e,this.Fo(t)}}class yw extends Wd{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=O_(e.writeResults,e.commitTime),s=gt(e.commitTime);return this.listener.Zo(s,t)}return ve(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Ko(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>N_(this.serializer,s))};this.Fo(t)}}/**
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
 */class vw extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new V(v.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(v.UNKNOWN,i.toString())})}fo(e,t,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(v.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class _w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(St(t),this.ru=!1):x("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class ww{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{_n(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l.du.add(4),await ei(l),l.mu.set("Unknown"),l.du.delete(4),await Nr(l)}(this))})}),this.mu=new _w(s,i)}}async function Nr(n){if(_n(n))for(const e of n.wu)await e(!0)}async function ei(n){for(const e of n.wu)await e(!1)}function Qd(n,e){const t=se(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),Ya(t)?Qa(t):Qn(t).No()&&Wa(t,e))}function Yd(n,e){const t=se(n),s=Qn(t);t.fu.delete(e),s.No()&&Xd(t,e),t.fu.size===0&&(s.No()?s.$o():_n(t)&&t.mu.set("Unknown"))}function Wa(n,e){n.gu.Ot(e.targetId),Qn(n).jo(e)}function Xd(n,e){n.gu.Ot(e),Qn(n).Wo(e)}function Qa(n){n.gu=new I_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Qn(n).start(),n.mu.ou()}function Ya(n){return _n(n)&&!Qn(n).xo()&&n.fu.size>0}function _n(n){return se(n).du.size===0}function Jd(n){n.gu=void 0}async function bw(n){n.fu.forEach((e,t)=>{Wa(n,e)})}async function Ew(n,e){Jd(n),Ya(n)?(n.mu.au(e),Qa(n)):n.mu.set("Unknown")}async function Iw(n,e,t){if(n.mu.set("Online"),e instanceof Ud&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(n,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ji(n,s)}else if(e instanceof Si?n.gu.Kt(e):e instanceof xd?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(ne.min()))try{const s=await Kd(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(Ye.EMPTY_BYTE_STRING,l.snapshotVersion)),Xd(i,a);const c=new cn(l.target,a,1,l.sequenceNumber);Wa(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await Ji(n,s)}}async function Ji(n,e,t){if(!Xs(e))throw e;n.du.add(1),await ei(n),n.mu.set("Offline"),t||(t=()=>Kd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Nr(n)})}function Zd(n,e){return e().catch(t=>Ji(n,t,e))}async function Or(n){const e=se(n),t=Ht(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;kw(e);)try{const i=await lw(e.localStore,s);if(i===null){e.lu.length===0&&t.$o();break}s=i.batchId,Tw(e,i)}catch(i){await Ji(e,i)}ef(e)&&tf(e)}function kw(n){return _n(n)&&n.lu.length<10}function Tw(n,e){n.lu.push(e);const t=Ht(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function ef(n){return _n(n)&&!Ht(n).xo()&&n.lu.length>0}function tf(n){Ht(n).start()}async function Sw(n){Ht(n).tu()}async function Cw(n){const e=Ht(n);for(const t of n.lu)e.Yo(t.mutations)}async function Aw(n,e,t){const s=n.lu.shift(),i=za.from(s,e,t);await Zd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Or(n)}async function Dw(n,e){e&&Ht(n).Jo&&await async function(t,s){if(i=s.code,E_(i)&&i!==v.ABORTED){const r=t.lu.shift();Ht(t).Oo(),await Zd(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Or(t)}var i}(n,e),ef(n)&&tf(n)}async function xc(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=_n(t);t.du.add(3),await ei(t),s&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Nr(t)}async function Rw(n,e){const t=se(n);e?(t.du.delete(2),await Nr(t)):e||(t.du.add(2),await ei(t),t.mu.set("Unknown"))}function Qn(n){return n.yu||(n.yu=function(e,t,s){const i=se(e);return i.nu(),new mw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Jr:bw.bind(null,n),Zr:Ew.bind(null,n),zo:Iw.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),Ya(n)?Qa(n):n.mu.set("Unknown")):(await n.yu.stop(),Jd(n))})),n.yu}function Ht(n){return n.pu||(n.pu=function(e,t,s){const i=se(e);return i.nu(),new yw(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Jr:Sw.bind(null,n),Zr:Dw.bind(null,n),Xo:Cw.bind(null,n),Zo:Aw.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await Or(n)):(await n.pu.stop(),n.lu.length>0&&(x("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class Xa{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Xa(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ja(n,e){if(St("AsyncQueue",`${e}: ${n}`),Xs(n))return new V(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Nn{constructor(e){this.comparator=e?(t,s)=>e(t,s)||j.comparator(t.key,s.key):(t,s)=>j.comparator(t.key,s.key),this.keyedMap=os(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Nn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Uc{constructor(){this.Iu=new Ae(j.comparator)}track(e){const t=e.doc.key,s=this.Iu.get(t);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(t):e.type===1&&s.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):ee():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,s)=>{e.push(s)}),e}}class zn{constructor(e,t,s,i,r,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new zn(e,t,Nn.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Nw{constructor(){this.Eu=void 0,this.listeners=[]}}class Ow{constructor(){this.queries=new Wn(e=>Ed(e),kr),this.onlineState="Unknown",this.Au=new Set}}async function nf(n,e){const t=se(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Nw),i)try{r.Eu=await t.onListen(s)}catch(o){const a=Ja(o,`Initialization of query '${jo(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Ru(t.onlineState),r.Eu&&e.vu(r.Eu)&&Za(t)}async function sf(n,e){const t=se(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function $w(n,e){const t=se(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Za(t)}function Lw(n,e,t){const s=se(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Za(n){n.Au.forEach(e=>{e.next()})}class rf{constructor(e,t,s){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new zn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class of{constructor(e){this.key=e}}class af{constructor(e){this.key=e}}class Pw{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=Id(e),this.Gu=new Nn(this.Ku)}get Qu(){return this.Lu}zu(e,t){const s=t?t.ju:new Uc,i=t?t.Gu:this.Gu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Tr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let S=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(s.track({type:3,doc:f}),S=!0):this.Wu(d,f)||(s.track({type:2,doc:f}),S=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),S=!0):d&&!f&&(s.track({type:1,doc:d}),S=!0,(l||c)&&(a=!0)),S&&(f?(o=o.add(f),r=p?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((c,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(s);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new zn(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Uc,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const t=[];return e.forEach(s=>{this.Uu.has(s)||t.push(new af(s))}),this.Uu.forEach(s=>{e.has(s)||t.push(new of(s))}),t}Xu(e){this.Lu=e.Wi,this.Uu=le();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return zn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Mw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class xw{constructor(e){this.key=e,this.ec=!1}}class Uw{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Wn(a=>Ed(a),kr),this.ic=new Map,this.rc=new Set,this.oc=new Ae(j.comparator),this.uc=new Map,this.cc=new Ha,this.ac={},this.hc=new Map,this.lc=Bn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Fw(n,e){const t=Qw(n);let s,i;const r=t.sc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await cw(t.localStore,Ct(e));t.isPrimaryClient&&Qd(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Vw(t,e,s,a==="current",o.resumeToken)}return i}async function Vw(n,e,t,s,i){n.dc=(h,d,f)=>async function(m,p,S,k){let U=p.view.zu(S);U.Mi&&(U=await Lc(m.localStore,p.query,!1).then(({documents:C})=>p.view.zu(C,U)));const Y=k&&k.targetChanges.get(p.targetId),J=p.view.applyChanges(U,m.isPrimaryClient,Y);return Vc(m,p.targetId,J.Yu),J.snapshot}(n,h,d,f);const r=await Lc(n.localStore,e,!0),o=new Pw(e,r.Wi),a=o.zu(r.documents),l=Zs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);Vc(n,t,c.Yu);const u=new Mw(e,t,o);return n.sc.set(e,u),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),c.snapshot}async function Bw(n,e){const t=se(n),s=t.sc.get(e),i=t.ic.get(s.targetId);if(i.length>1)return t.ic.set(s.targetId,i.filter(r=>!kr(r,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Go(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Yd(t.remoteStore,s.targetId),Wo(t,s.targetId)}).catch(Ys)):(Wo(t,s.targetId),await Go(t.localStore,s.targetId,!0))}async function zw(n,e,t){const s=Yw(n);try{const i=await function(r,o){const a=se(r),l=be.now(),c=o.reduce((d,f)=>d.add(f.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=At(),m=le();return a.Ki.getEntries(d,c).next(p=>{f=p,f.forEach((S,k)=>{k.isValidDocument()||(m=m.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(p=>{u=p;const S=[];for(const k of o){const U=y_(k,u.get(k.key).overlayedDocument);U!=null&&S.push(new Xt(k.key,U,gd(U.value.mapValue),st.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(p=>{h=p;const S=p.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,p.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Td(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new Ae(me)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,t),await ti(s,i.changes),await Or(s.remoteStore)}catch(i){const r=Ja(i,"Failed to persist write");t.reject(r)}}async function lf(n,e){const t=se(n);try{const s=await ow(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.uc.get(r);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ve(o.ec):i.removedDocuments.size>0&&(ve(o.ec),o.ec=!1))}),await ti(t,s,e)}catch(s){await Ys(s)}}function Fc(n,e,t){const s=se(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Za(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jw(n,e,t){const s=se(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new Ae(j.comparator);o=o.insert(r,je.newNoDocument(r,ne.min()));const a=le().add(r),l=new Dr(ne.min(),new Map,new Se(me),o,a);await lf(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),el(s)}else await Go(s.localStore,e,!1).then(()=>Wo(s,e,t)).catch(Ys)}async function qw(n,e){const t=se(n),s=e.batch.batchId;try{const i=await rw(t.localStore,e);uf(t,s,null),cf(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ti(t,i)}catch(i){await Ys(i)}}async function Hw(n,e,t){const s=se(n);try{const i=await function(r,o){const a=se(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ve(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);uf(s,e,t),cf(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ti(s,i)}catch(i){await Ys(i)}}function cf(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function uf(n,e,t){const s=se(n);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.ic.get(e))n.sc.delete(s),t&&n.nc.wc(s,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(s=>{n.cc.containsKey(s)||hf(n,s)})}function hf(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(Yd(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),el(n))}function Vc(n,e,t){for(const s of t)s instanceof of?(n.cc.addReference(s.key,e),Kw(n,s)):s instanceof af?(x("SyncEngine","Document no longer in limbo: "+s.key),n.cc.removeReference(s.key,e),n.cc.containsKey(s.key)||hf(n,s.key)):ee()}function Kw(n,e){const t=e.key,s=t.path.canonicalString();n.oc.get(t)||n.rc.has(s)||(x("SyncEngine","New document in limbo: "+t),n.rc.add(s),el(n))}function el(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new j(we.fromString(e)),s=n.lc.next();n.uc.set(s,new xw(t)),n.oc=n.oc.insert(t,s),Qd(n.remoteStore,new cn(Ct(Ba(t.path)),s,2,xa.ct))}}async function ti(n,e,t){const s=se(n),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,t).then(c=>{if((c||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ga.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,l){const c=se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,h=>_.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>_.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Xs(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,m)}}}(s.localStore,r))}async function Gw(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await Hd(t.localStore,e);t.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new V(v.CANCELLED,r))})}),i.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ti(t,s.Qi)}}function Ww(n,e){const t=se(n),s=t.uc.get(e);if(s&&s.ec)return le().add(s.key);{let i=le();const r=t.ic.get(e);if(!r)return i;for(const o of r){const a=t.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Qw(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ww.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jw.bind(null,e),e.nc.zo=$w.bind(null,e.eventManager),e.nc.wc=Lw.bind(null,e.eventManager),e}function Yw(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hw.bind(null,e),e}class Bc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return iw(this.persistence,new nw,e.initialUser,this.serializer)}createPersistence(e){return new ew(Ka.Fs,this.serializer)}createSharedClientState(e){return new hw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gw.bind(null,this.syncEngine),await Rw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ow}createDatastore(e){const t=Rr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new gw(i));var i;return function(r,o,a,l){return new vw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Fc(this.syncEngine,a,0),o=Mc.D()?new Mc:new dw,new ww(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,l,c){const u=new Uw(s,i,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=se(e);x("RemoteStore","RemoteStore shutting down."),t.du.add(5),await ei(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Jw{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=hd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{x("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(x("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ja(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yo(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Hd(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function zc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await e0(n);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>xc(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>xc(e.remoteStore,r)),n._onlineComponents=e}function Zw(n){return n.name==="FirebaseError"?n.code===v.FAILED_PRECONDITION||n.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function e0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Zw(t))throw t;Ki("Error using user provided cache. Falling back to memory cache: "+t),await yo(n,new Bc)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await yo(n,new Bc);return n._offlineComponents}async function ff(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await zc(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await zc(n,new Xw))),n._onlineComponents}function t0(n){return ff(n).then(e=>e.syncEngine)}async function Qo(n){const e=await ff(n),t=e.eventManager;return t.onListen=Fw.bind(null,e.syncEngine),t.onUnlisten=Bw.bind(null,e.syncEngine),t}function n0(n,e,t={}){const s=new Ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new df({next:h=>{r.enqueueAndForget(()=>sf(i,u)),h.fromCache&&a.source==="server"?l.reject(new V(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new rf(o,c,{includeMetadataChanges:!0,xu:!0});return nf(i,u)}(await Qo(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map;/**
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
 */function pf(n,e,t){if(!t)throw new V(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function s0(n,e,t,s){if(e===!0&&s===!0)throw new V(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qc(n){if(!j.isDocumentKey(n))throw new V(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hc(n){if(j.isDocumentKey(n))throw new V(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee()}function ut(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tl(n);throw new V(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new V(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,s0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kc(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Sv;switch(t.type){case"firstParty":return new Rv(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new V(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=jc.get(e);t&&(x("ComponentProvider","Removing Datastore"),jc.delete(e),t.terminate())}(this),Promise.resolve()}}function gf(n,e,t,s={}){var i;const r=(n=ut(n,$r))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ki("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ze.MOCK_USER;else{o=Zf(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new V(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ze(l)}n._authCredentials=new Cv(new ud(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class ni{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ni(this.firestore,e,this._query)}}class Ft extends ni{constructor(e,t,s){super(e,t,Ba(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new j(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function Gc(n,e,...t){if(n=Ce(n),pf("collection","path",e),n instanceof $r){const s=we.fromString(e,...t);return Hc(s),new Ft(n,null,s)}{if(!(n instanceof rt||n instanceof Ft))throw new V(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(we.fromString(e,...t));return Hc(s),new Ft(n.firestore,null,s)}}function Ci(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=hd.A()),pf("doc","path",e),n instanceof $r){const s=we.fromString(e,...t);return qc(s),new rt(n,null,new j(s))}{if(!(n instanceof rt||n instanceof Ft))throw new V(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(we.fromString(e,...t));return qc(s),new rt(n.firestore,n instanceof Ft?n.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Gd(this,"async_queue_retry"),this.qc=()=>{const t=mo();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new Ut;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Xs(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=t,t}enqueueAfterDelay(e,t,s){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=Xa.createAndSchedule(this,e,t,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&ee()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Wc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Kt extends $r{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new i0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mf(this),this._firestoreClient.terminate()}}function r0(n,e){const t=typeof n=="object"?n:Du(),s=typeof n=="string"?n:e||"(default)",i=ra(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Yf("firestore");r&&gf(i,...r)}return i}function Lr(n){return n._firestoreClient||mf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function mf(n){var e,t,s;const i=n._freezeSettings(),r=function(o,a,l,c){return new jv(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Jw(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(Ye.fromBase64String(e))}catch(t){throw new V(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jn(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this._methodName=e}}/**
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
 */class sl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const o0=/^__.*__$/;class a0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Js(e,this.data,t,this.fieldTransforms)}}class yf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class il{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Zi(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(vf(this.Yc)&&o0.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class l0{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Rr(e)}ua(e,t,s,i=!1){return new il({Yc:e,methodName:t,oa:s,path:He.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rl(n){const e=n._freezeSettings(),t=Rr(n._databaseId);return new l0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ol(n,e,t,s,i,r={}){const o=n.ua(r.merge||r.mergeFields?2:0,e,t,i);al("Data must be an object, but it was:",o,s);const a=_f(s,o);let l,c;if(r.merge)l=new it(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Yo(e,h,t);if(!o.contains(d))throw new V(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bf(u,d)||u.push(d)}l=new it(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new a0(new nt(a),l,c)}class Mr extends nl{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mr}}function c0(n,e,t,s){const i=n.ua(1,e,t);al("Data must be an object, but it was:",i,s);const r=[],o=nt.empty();vn(s,(l,c)=>{const u=ll(e,l,t);c=Ce(c);const h=i.na(u);if(c instanceof Mr)r.push(u);else{const d=xr(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new it(r);return new yf(o,a,i.fieldTransforms)}function u0(n,e,t,s,i,r){const o=n.ua(1,e,t),a=[Yo(e,s,t)],l=[i];if(r.length%2!=0)throw new V(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Yo(e,r[d])),l.push(r[d+1]);const c=[],u=nt.empty();for(let d=a.length-1;d>=0;--d)if(!bf(c,a[d])){const f=a[d];let m=l[d];m=Ce(m);const p=o.na(f);if(m instanceof Mr)c.push(f);else{const S=xr(m,p);S!=null&&(c.push(f),u.set(f,S))}}const h=new it(c);return new yf(u,h,o.fieldTransforms)}function xr(n,e){if(wf(n=Ce(n)))return al("Unsupported field value:",e,n),_f(n,e);if(n instanceof nl)return function(t,s){if(!vf(s.Yc))throw s.ia(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=xr(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=Ce(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return h_(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=be.fromDate(t);return{timestampValue:Xi(s.serializer,i)}}if(t instanceof be){const i=new be(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Xi(s.serializer,i)}}if(t instanceof sl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof jn)return{bytesValue:Fd(s.serializer,t._byteString)};if(t instanceof rt){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qa(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ia(`Unsupported field value: ${tl(t)}`)}(n,e)}function _f(n,e){const t={};return dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(n,(s,i)=>{const r=xr(i,e.Xc(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function wf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof sl||n instanceof jn||n instanceof rt||n instanceof nl)}function al(n,e,t){if(!wf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=tl(t);throw s==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+s)}}function Yo(n,e,t){if((e=Ce(e))instanceof Pr)return e._internalPath;if(typeof e=="string")return ll(n,e);throw Zi("Field path arguments must be of type string or ",n,!1,void 0,t)}const h0=new RegExp("[~\\*/\\[\\]]");function ll(n,e,t){if(e.search(h0)>=0)throw Zi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Pr(...e.split("."))._internalPath}catch{throw Zi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zi(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new V(v.INVALID_ARGUMENT,a+n+l)}function bf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(If("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class d0 extends Ef{data(){return super.data()}}function If(n,e){return typeof e=="string"?ll(n,e):e instanceof Pr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f0{convertValue(e,t="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ee()}}convertObject(e,t){const s={};return vn(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new sl(ke(e.latitude),ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const t=qt(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=we.fromString(e);ve(qd(s));const i=new Cs(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(t)||St(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tf extends Ef{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(If("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ai extends Tf{data(e={}){return super.data(e)}}class Sf{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ai(this._firestore,this._userDataWriter,s.key,s,new as(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ai(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ai(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:p0(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function p0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class ul extends f0{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function g0(n){n=ut(n,ni);const e=ut(n.firestore,Kt),t=Lr(e),s=new ul(e);return kf(n._query),n0(t,n._query).then(i=>new Sf(e,s,n,i))}function Qc(n,e,t){n=ut(n,rt);const s=ut(n.firestore,Kt),i=cl(n.converter,e,t);return Ur(s,[ol(rl(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,st.none())])}function Yc(n){return Ur(ut(n.firestore,Kt),[new Ar(n._key,st.none())])}function m0(n,e){const t=ut(n.firestore,Kt),s=Ci(n),i=cl(n.converter,e);return Ur(t,[ol(rl(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,st.exists(!1))]).then(()=>s)}function y0(n,...e){var t,s,i;n=Ce(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Wc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(n instanceof rt)c=ut(n.firestore,Kt),u=Ba(n._key.path),l={next:h=>{e[o]&&e[o](v0(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ut(n,ni);c=ut(h.firestore,Kt),u=h._query;const d=new ul(c);l={next:f=>{e[o]&&e[o](new Sf(c,d,h,f))},error:e[o+1],complete:e[o+2]},kf(n._query)}return function(h,d,f,m){const p=new df(m),S=new rf(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>nf(await Qo(h),S)),()=>{p.yc(),h.asyncQueue.enqueueAndForget(async()=>sf(await Qo(h),S))}}(Lr(c),u,a,l)}function Ur(n,e){return function(t,s){const i=new Ut;return t.asyncQueue.enqueueAndForget(async()=>zw(await t0(t),s,i)),i.promise}(Lr(n),e)}function v0(n,e,t){const s=t.docs.get(e._key),i=new ul(n);return new Tf(n,i,e._key,s,new as(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=rl(e)}set(e,t,s){this._verifyNotCommitted();const i=vo(e,this._firestore),r=cl(i.converter,t,s),o=ol(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,st.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const r=vo(e,this._firestore);let o;return o=typeof(t=Ce(t))=="string"||t instanceof Pr?u0(this._dataReader,"WriteBatch.update",r._key,t,s,i):c0(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,st.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vo(e,this._firestore);return this._mutations=this._mutations.concat(new Ar(t._key,st.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vo(n,e){if((n=Ce(n)).firestore!==e)throw new V(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(n){return Lr(n=ut(n,Kt)),new _0(n,e=>Ur(n,e))}(function(n,e=!0){(function(t){Gn=t})($s),Pn(new un("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Kt(new Av(t.getProvider("auth-internal")),new Ov(t.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xt(gc,"3.10.0",n),xt(gc,"3.10.0","esm2017")})();const b0={apiKey:"AIzaSyA3_psCtBNu52k8UzwPwpqpsb1BYjUC6bI",authDomain:"svelte-notes-44166.firebaseapp.com",projectId:"svelte-notes-44166",storageBucket:"svelte-notes-44166.appspot.com",messagingSenderId:"179800492317",appId:"1:179800492317:web:b00f948be30d1bc04179f4"},E0="http://localhost",I0=9099,k0="localhost",T0=8080;class S0{constructor(){at(this,"uid",null)}getFirestoreUid(){if(!this.uid)throw new Error("Entity has no uid");return this.uid}setFirestoreUid(e){return this.uid=e,this}}const pl=class extends S0{constructor(e,t="",s=[],i=!1,r=new Date,o=new Date){super(),this.title=e,this.content=t,this.tags=s,this.pinned=i,this.createdAt=r,this.updatedAt=o}};let rn=pl;at(rn,"converter",{toFirestore(e){return{title:e.title,content:e.content,pinned:e.pinned,tags:e.tags,createdAt:be.fromDate(e.createdAt),updatedAt:be.fromDate(e.createdAt)}},fromFirestore(e,t){const s=e.data(t),{title:i,content:r,tags:o,pinned:a,createdAt:l,updatedAt:c}=s;return new pl(i,r,o,a,l.toDate(),c.toDate()).setFirestoreUid(e.id)}});const Cn=class{constructor(){at(this,"app");at(this,"auth");at(this,"store");at(this,"currentUser",null);at(this,"authStateChangedCallbacks",[]);at(this,"notesListenerUnsubscribe",null);at(this,"localEnvironments",["local","development"]);this.app=Au(b0),this.auth=Iy(this.app),this.store=r0(this.app),this.localEnvironments.includes("production")&&(Gu(this.auth,`${E0}:${I0}`),gf(this.store,k0,T0)),lm(this.auth,e=>{this.currentUser=e,this.authStateChangedCallbacks.forEach(t=>{t(e)})})}static make(e=!1){return(e||Cn.instance===null)&&(Cn.instance=new Cn),Cn.instance}addOnAuthChangeHandler(e){this.authStateChangedCallbacks.push(e)}notesRef(e){return Gc(this.store,"users",e.uid,"notes").withConverter(rn.converter)}noteRef(e,t){return Ci(this.store,"users",e.uid,"notes",t.getFirestoreUid()).withConverter(rn.converter)}async updateUserNote(e,t){t.updatedAt=new Date,await Qc(this.noteRef(e,t),t,{merge:!0})}async getUserNotes(e){const t=await g0(this.notesRef(e)),s=[];return t.forEach(i=>{s.push(i.data())}),s}clearOnUserNotesChanged(){this.notesListenerUnsubscribe&&this.notesListenerUnsubscribe()}onUserNotesChanged(e,t){this.notesListenerUnsubscribe=y0(this.notesRef(e),s=>{const i=[];s.forEach(r=>{i.push(r.data())}),t(i)})}async deleteUser(e){return await this.deleteAllUserNotes(e),await Yc(Ci(this.store,"users",e.uid)),e.delete()}async deleteAllUserNotes(e){const t=w0(this.store),s=await this.getUserNotes(e);for(const i of s)t.delete(this.noteRef(e,i));return t.commit()}async deleteUserNote(e,t){return Yc(this.noteRef(e,t))}async createUserNote(e,t,s="",i=[]){const r=new rn(t,s,i),o=Gc(this.store,"users",e.uid,"notes").withConverter(rn.converter);return await m0(o,r),r}async signUp(e,t){const s=await im(this.auth,e,t),i=await Ci(this.store,"users",s.user.uid);return await Qc(i,{email:e,createdAt:be.fromDate(new Date)}),s.user}async signIn(e,t){return(await rm(this.auth,e,t)).user??null}async signOut(){await cm(this.auth)}};let Vt=Cn;at(Vt,"instance",null);Vt.make();const mn=wu(null),ps=wu([]),yi=Vt.make();yi.addOnAuthChangeHandler(async n=>{mn.set(n),n===null?(ps.set([]),yi.clearOnUserNotesChanged()):(ps.set(await yi.getUserNotes(n)),yi.onUserNotesChanged(n,e=>{ps.set(e)}))});const er=n=>n<10?`0${n}`:`${n}`,C0=(n=new Date)=>{const e=n.getFullYear(),t=er(n.getMonth()+1),s=er(n.getDate());return`${e}-${t}-${s}`},hl=(n=new Date)=>{const e=er(n.getHours()),t=er(n.getMinutes());return`${e}:${t}`},A0=(n=new Date)=>`${C0(n)} ${hl(n)}`,_o={},D0=(n,e,t)=>{_o[n]&&clearTimeout(_o[n]),_o[n]=setTimeout(e,t)},R0=(n,e,t)=>{const i=n.parseFromString(t,"text/html"),r=i.querySelectorAll("h1");if(r.length>0)return r[0].innerText;const o=i.childNodes;return o.length>0&&o[0].textContent?o[0].textContent.substring(0,255):e.title},vi=(n,...e)=>{let t=0;for(const s of e)n&s&&t++;return t===e.length},N0=n=>n===null?"":n.displayName===null?n.email??"":`${n.displayName} <${n.email}>`;function O0(n){let e,t,s,i;const r=n[1].default,o=Xo(r,n,n[0],null);return{c(){e=b("button"),o&&o.c(),this.h()},l(a){e=E(a,"BUTTON",{class:!0});var l=T(e);o&&o.l(l),l.forEach(g),this.h()},h(){w(e,"class","badge text-bg-secondary svelte-1ey8mfo")},m(a,l){H(a,e,l),o&&o.m(e,null),t=!0,s||(i=Bt(e,"click",n[2]),s=!0)},p(a,[l]){o&&o.p&&(!t||l&1)&&Jo(o,r,a,a[0],t?ea(r,a[0],l,null):Zo(a[0]),null)},i(a){t||(A(o,a),t=!0)},o(a){P(o,a),t=!1},d(a){a&&g(e),o&&o.d(a),s=!1,i()}}}function $0(n,e,t){let{$$slots:s={},$$scope:i}=e;function r(o){on.call(this,n,o)}return n.$$set=o=>{"$$scope"in o&&t(0,i=o.$$scope)},[i,s,r]}class Cf extends Oe{constructor(e){super(),$e(this,e,$0,O0,Le,{})}}function L0(n){let e;return{c(){e=W("Card body")},l(t){e=Q(t,"Card body")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function P0(n){let e,t,s;const i=n[3].default,r=Xo(i,n,n[2],null),o=r||L0();return{c(){e=b("div"),t=b("div"),o&&o.c(),this.h()},l(a){e=E(a,"DIV",{class:!0,style:!0});var l=T(e);t=E(l,"DIV",{class:!0});var c=T(t);o&&o.l(c),c.forEach(g),l.forEach(g),this.h()},h(){w(t,"class","card-body svelte-lmmfgp"),w(e,"class","card"),w(e,"style",n[0])},m(a,l){H(a,e,l),y(e,t),o&&o.m(t,null),s=!0},p(a,[l]){r&&r.p&&(!s||l&4)&&Jo(r,i,a,a[2],s?ea(i,a[2],l,null):Zo(a[2]),null),(!s||l&1)&&w(e,"style",a[0])},i(a){s||(A(o,a),s=!0)},o(a){P(o,a),s=!1},d(a){a&&g(e),o&&o.d(a)}}}function M0(n,e,t){let{$$slots:s={},$$scope:i}=e,{styles:r={}}=e,o="";const a=()=>{const l=[];t(0,o=Object.entries(r).reduce((c,u)=>{const[h,d]=u;return c.push(`${h}: ${d}`),c},l).join("; "))};return n.$$set=l=>{"styles"in l&&t(1,r=l.styles),"$$scope"in l&&t(2,i=l.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&a()},[o,r,i,s]}class Af extends Oe{constructor(e){super(),$e(this,e,M0,P0,Le,{styles:1})}}function x0(n){let e,t,s,i,r;const o=n[4].default,a=Xo(o,n,n[3],null);return{c(){e=b("button"),a&&a.c(),this.h()},l(l){e=E(l,"BUTTON",{type:!0,class:!0});var c=T(e);a&&a.l(c),c.forEach(g),this.h()},h(){w(e,"type","button"),w(e,"class",t="btn "+n[1]+" btn-sm"),e.disabled=n[0]},m(l,c){H(l,e,c),a&&a.m(e,null),s=!0,i||(r=Bt(e,"click",n[5]),i=!0)},p(l,[c]){a&&a.p&&(!s||c&8)&&Jo(a,o,l,l[3],s?ea(o,l[3],c,null):Zo(l[3]),null),(!s||c&2&&t!==(t="btn "+l[1]+" btn-sm"))&&w(e,"class",t),(!s||c&1)&&(e.disabled=l[0])},i(l){s||(A(a,l),s=!0)},o(l){P(a,l),s=!1},d(l){l&&g(e),a&&a.d(l),i=!1,r()}}}function U0(n,e,t){let{$$slots:s={},$$scope:i}=e,{active:r=!1}=e,{disabled:o=!1}=e,a="bdn-primary";function l(c){on.call(this,n,c)}return n.$$set=c=>{"active"in c&&t(2,r=c.active),"disabled"in c&&t(0,o=c.disabled),"$$scope"in c&&t(3,i=c.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&t(1,a=r?"btn-primary":"btn-secondary")},[o,a,r,i,s,l]}class qe extends Oe{constructor(e){super(),$e(this,e,U0,x0,Le,{active:2,disabled:0})}}function Xc(n,e,t){const s=n.slice();return s[14]=e[t],s[16]=t,s}function F0(n){let e;return{c(){e=W("Open")},l(t){e=Q(t,"Open")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function V0(n){let e;return{c(){e=W("🗑️")},l(t){e=Q(t,"🗑️")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function B0(n){let e,t;return e=new qe({props:{$$slots:{default:[z0]},$$scope:{ctx:n}}}),e.$on("click",function(){gs(n[3])&&n[3].apply(this,arguments)}),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},p(s,i){n=s;const r={};i&131072&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function z0(n){let e;return{c(){e=W("📌")},l(t){e=Q(t,"📌")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function j0(n){let e=n[14]+"",t;return{c(){t=W(e)},l(s){t=Q(s,e)},m(s,i){H(s,t,i)},p:We,d(s){s&&g(t)}}}function Jc(n){let e,t,s;return t=new Cf({props:{$$slots:{default:[j0]},$$scope:{ctx:n}}}),{c(){e=b("div"),ue(t.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var r=T(e);he(t.$$.fragment,r),r.forEach(g),this.h()},h(){w(e,"class","tag-container")},m(i,r){H(i,e,r),de(t,e,null),s=!0},p(i,r){const o={};r&131072&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){s||(A(t.$$.fragment,i),s=!0)},o(i){P(t.$$.fragment,i),s=!1},d(i){i&&g(e),fe(t)}}}function q0(n){let e,t,s=JSON.stringify(n[0],null,2)+"",i,r,o,a,l,c,u,h,d,f,m,p,S,k,U,Y,J,C;p=new qe({props:{$$slots:{default:[F0]},$$scope:{ctx:n}}}),p.$on("click",function(){gs(n[2])&&n[2].apply(this,arguments)}),k=new qe({props:{$$slots:{default:[V0]},$$scope:{ctx:n}}}),k.$on("click",function(){gs(n[1])&&n[1].apply(this,arguments)});let R=n[8]&&B0(n),F=n[7],I=[];for(let $=0;$<F.length;$+=1)I[$]=Jc(Xc(n,F,$));const O=$=>P(I[$],1,1,()=>{I[$]=null});return{c(){e=b("div"),t=b("span"),i=W(s),r=ie(),o=b("div"),a=b("p"),l=W(n[5]),c=ie(),u=b("p"),h=W(n[6]),d=ie(),f=b("div"),m=b("div"),ue(p.$$.fragment),S=ie(),ue(k.$$.fragment),U=ie(),R&&R.c(),Y=ie(),J=b("div");for(let $=0;$<I.length;$+=1)I[$].c();this.h()},l($){e=E($,"DIV",{class:!0});var X=T(e);t=E(X,"SPAN",{style:!0});var K=T(t);i=Q(K,s),K.forEach(g),r=re(X),o=E(X,"DIV",{class:!0});var oe=T(o);a=E(oe,"P",{class:!0});var q=T(a);l=Q(q,n[5]),q.forEach(g),c=re(oe),u=E(oe,"P",{class:!0});var ae=T(u);h=Q(ae,n[6]),ae.forEach(g),oe.forEach(g),d=re(X),f=E(X,"DIV",{class:!0});var pe=T(f);m=E(pe,"DIV",{class:!0});var D=T(m);he(p.$$.fragment,D),S=re(D),he(k.$$.fragment,D),U=re(D),R&&R.l(D),D.forEach(g),Y=re(pe),J=E(pe,"DIV",{class:!0});var G=T(J);for(let L=0;L<I.length;L+=1)I[L].l(G);G.forEach(g),pe.forEach(g),X.forEach(g),this.h()},h(){Ff(t,"display","none"),w(a,"class","title-container svelte-1cuxjbz"),w(u,"class","date-container svelte-1cuxjbz"),w(o,"class","bit svelte-1cuxjbz"),w(m,"class","icons svelte-1cuxjbz"),w(J,"class","tags-container svelte-1cuxjbz"),w(f,"class","bit bottom-bit svelte-1cuxjbz"),w(e,"class","list-item svelte-1cuxjbz")},m($,X){H($,e,X),y(e,t),y(t,i),y(e,r),y(e,o),y(o,a),y(a,l),y(o,c),y(o,u),y(u,h),y(e,d),y(e,f),y(f,m),de(p,m,null),y(m,S),de(k,m,null),y(m,U),R&&R.m(m,null),y(f,Y),y(f,J);for(let K=0;K<I.length;K+=1)I[K]&&I[K].m(J,null);C=!0},p($,X){n=$,(!C||X&1)&&s!==(s=JSON.stringify(n[0],null,2)+"")&&_t(i,s);const K={};X&131072&&(K.$$scope={dirty:X,ctx:n}),p.$set(K);const oe={};if(X&131072&&(oe.$$scope={dirty:X,ctx:n}),k.$set(oe),n[8]&&R.p(n,X),X&128){F=n[7];let q;for(q=0;q<F.length;q+=1){const ae=Xc(n,F,q);I[q]?(I[q].p(ae,X),A(I[q],1)):(I[q]=Jc(ae),I[q].c(),A(I[q],1),I[q].m(J,null))}for(lt(),q=F.length;q<I.length;q+=1)O(q);ct()}},i($){if(!C){A(p.$$.fragment,$),A(k.$$.fragment,$),A(R);for(let X=0;X<F.length;X+=1)A(I[X]);C=!0}},o($){P(p.$$.fragment,$),P(k.$$.fragment,$),P(R),I=I.filter(Boolean);for(let X=0;X<I.length;X+=1)P(I[X]);C=!1},d($){$&&g(e),fe(p),fe(k),R&&R.d(),ta(I,$)}}}function H0(n){let e,t;return e=new Af({props:{styles:n[4],$$slots:{default:[q0]},$$scope:{ctx:n}}}),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},p(s,[i]){const r={};i&16&&(r.styles=s[4]),i&131087&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function K0(n,e,t){const s=Lt(),i=Lt(),r=Lt();let{note:o}=e,{selected:a=!1}=e;const l=o.title,c=A0(o.createdAt),u=o.tags,h=o.pinned;let d=null,f=null,m=null;On(()=>{t(2,f=()=>{i("noteSelected",{note:o})}),t(3,m=()=>{confirm("Are you sure you want to unpin this note?")&&r("noteUnpinned",{note:o})}),t(1,d=()=>{confirm("Are you sure you want to delete this note?")&&s("noteDeleted",{note:o})})});let p={};const S=k=>{t(4,p=k?{border:"2px solid black"}:{})};return n.$$set=k=>{"note"in k&&t(0,o=k.note),"selected"in k&&t(9,a=k.selected)},n.$$.update=()=>{n.$$.dirty&512&&S(a)},[o,d,f,m,p,l,c,u,h,a]}class G0 extends Oe{constructor(e){super(),$e(this,e,K0,H0,Le,{note:0,selected:9})}}function W0(n){let e,t,s,i,r,o,a;return{c(){e=b("div"),t=b("span"),s=W("🔎"),i=ie(),r=b("input"),this.h()},l(l){e=E(l,"DIV",{class:!0});var c=T(e);t=E(c,"SPAN",{class:!0,id:!0});var u=T(t);s=Q(u,"🔎"),u.forEach(g),i=re(c),r=E(c,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),c.forEach(g),this.h()},h(){w(t,"class","input-group-text"),w(t,"id","search-bar-input"),w(r,"type","text"),w(r,"class","form-control"),w(r,"placeholder","search"),w(r,"aria-label","search"),w(r,"aria-describedby","search-bar-input"),r.disabled=n[1],w(e,"class","input-group mb-3")},m(l,c){H(l,e,c),y(e,t),y(t,s),y(e,i),y(e,r),mt(r,n[0]),o||(a=Bt(r,"input",n[2]),o=!0)},p(l,[c]){c&2&&(r.disabled=l[1]),c&1&&r.value!==l[0]&&mt(r,l[0])},i:We,o:We,d(l){l&&g(e),o=!1,a()}}}function Q0(n,e,t){let{input:s}=e,{disabled:i=!1}=e;function r(){s=this.value,t(0,s)}return n.$$set=o=>{"input"in o&&t(0,s=o.input),"disabled"in o&&t(1,i=o.disabled)},[s,i,r]}class Y0 extends Oe{constructor(e){super(),$e(this,e,Q0,W0,Le,{input:0,disabled:1})}}function Zc(n,e,t){const s=n.slice();return s[6]=e[t],s[8]=t,s}function eu(n){let e,t;return{c(){e=b("label"),t=W(n[2]),this.h()},l(s){e=E(s,"LABEL",{class:!0,for:!0});var i=T(e);t=Q(i,n[2]),i.forEach(g),this.h()},h(){w(e,"class","input-group-text"),w(e,"for","select")},m(s,i){H(s,e,i),y(e,t)},p(s,i){i&4&&_t(t,s[2])},d(s){s&&g(e)}}}function X0(n){let e,t=n[6][1]+"",s,i;return{c(){e=b("option"),s=W(t),this.h()},l(r){e=E(r,"OPTION",{});var o=T(e);s=Q(o,t),o.forEach(g),this.h()},h(){e.__value=i=n[6][0],e.value=e.__value},m(r,o){H(r,e,o),y(e,s)},p(r,o){o&8&&t!==(t=r[6][1]+"")&&_t(s,t),o&8&&i!==(i=r[6][0])&&(e.__value=i,e.value=e.__value)},d(r){r&&g(e)}}}function J0(n){let e,t=n[6][1]+"",s,i;return{c(){e=b("option"),s=W(t),this.h()},l(r){e=E(r,"OPTION",{});var o=T(e);s=Q(o,t),o.forEach(g),this.h()},h(){e.__value=i=n[6][0],e.value=e.__value,e.selected=!0},m(r,o){H(r,e,o),y(e,s)},p(r,o){o&8&&t!==(t=r[6][1]+"")&&_t(s,t),o&8&&i!==(i=r[6][0])&&(e.__value=i,e.value=e.__value)},d(r){r&&g(e)}}}function tu(n){let e;function t(r,o){return r[6][0]===r[0]?J0:X0}let s=t(n),i=s(n);return{c(){i.c(),e=Ri()},l(r){i.l(r),e=Ri()},m(r,o){i.m(r,o),H(r,e,o)},p(r,o){s===(s=t(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&g(e)}}}function Z0(n){let e,t,s,i=n[2]!==""&&eu(n),r=Object.entries(n[3]),o=[];for(let a=0;a<r.length;a+=1)o[a]=tu(Zc(n,r,a));return{c(){e=b("div"),i&&i.c(),t=ie(),s=b("select");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var l=T(e);i&&i.l(l),t=re(l),s=E(l,"SELECT",{class:!0,"aria-label":!0,id:!0});var c=T(s);for(let u=0;u<o.length;u+=1)o[u].l(c);c.forEach(g),l.forEach(g),this.h()},h(){s.disabled=n[1],w(s,"class","form-select"),w(s,"aria-label","Default select example"),w(s,"id","select-component"),w(e,"class","input-group mb-3")},m(a,l){H(a,e,l),i&&i.m(e,null),y(e,t),y(e,s);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null);n[5](s)},p(a,[l]){if(a[2]!==""?i?i.p(a,l):(i=eu(a),i.c(),i.m(e,t)):i&&(i.d(1),i=null),l&9){r=Object.entries(a[3]);let c;for(c=0;c<r.length;c+=1){const u=Zc(a,r,c);o[c]?o[c].p(u,l):(o[c]=tu(u),o[c].c(),o[c].m(s,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}l&2&&(s.disabled=a[1])},i:We,o:We,d(a){a&&g(e),i&&i.d(),ta(o,a),n[5](null)}}}function eb(n,e,t){let{disabled:s=!1}=e,{label:i=""}=e,{values:r={}}=e,{selected:o=""}=e,a;On(()=>{a!==null&&t(4,a.onchange=c=>{const u=c.target;u&&t(0,o=u.value)},a)});function l(c){zt[c?"unshift":"push"](()=>{a=c,t(4,a),t(3,r)})}return n.$$set=c=>{"disabled"in c&&t(1,s=c.disabled),"label"in c&&t(2,i=c.label),"values"in c&&t(3,r=c.values),"selected"in c&&t(0,o=c.selected)},[o,s,i,r,a,l]}class tb extends Oe{constructor(e){super(),$e(this,e,eb,Z0,Le,{disabled:1,label:2,values:3,selected:0})}}function nu(n,e,t){const s=n.slice();return s[18]=e[t],s}function nb(n){let e;return{c(){e=W("Create note")},l(t){e=Q(t,"Create note")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function su(n,e){let t,s,i,r;return s=new G0({props:{selected:e[0]?e[0].uid===e[18].uid:!1,note:e[18]}}),s.$on("noteDeleted",e[10]),s.$on("noteSelected",e[11]),s.$on("noteUnpinned",e[12]),{key:n,first:null,c(){t=b("div"),ue(s.$$.fragment),i=ie(),this.h()},l(o){t=E(o,"DIV",{class:!0});var a=T(t);he(s.$$.fragment,a),i=re(a),a.forEach(g),this.h()},h(){w(t,"class","svelte-1bhb4u3"),this.first=t},m(o,a){H(o,t,a),de(s,t,null),y(t,i),r=!0},p(o,a){e=o;const l={};a&17&&(l.selected=e[0]?e[0].uid===e[18].uid:!1),a&16&&(l.note=e[18]),s.$set(l)},i(o){r||(A(s.$$.fragment,o),r=!0)},o(o){P(s.$$.fragment,o),r=!1},d(o){o&&g(t),fe(s)}}}function sb(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,m,p=[],S=new Map,k;function U(I){n[8](I)}let Y={disabled:n[3]};n[2]!==void 0&&(Y.input=n[2]),i=new Y0({props:Y}),zt.push(()=>$n(i,"input",U)),l=new qe({props:{disabled:n[3],$$slots:{default:[nb]},$$scope:{ctx:n}}}),l.$on("click",n[6]);function J(I){n[9](I)}let C={disabled:n[3],values:n[5],label:"order by"};n[1]!==void 0&&(C.selected=n[1]),h=new tb({props:C}),zt.push(()=>$n(h,"selected",J));let R=n[4];const F=I=>I[18];for(let I=0;I<R.length;I+=1){let O=nu(n,R,I),$=F(O);S.set($,p[I]=su($,O))}return{c(){e=b("div"),t=b("div"),s=b("div"),ue(i.$$.fragment),o=ie(),a=b("div"),ue(l.$$.fragment),c=ie(),u=b("div"),ue(h.$$.fragment),f=ie(),m=b("div");for(let I=0;I<p.length;I+=1)p[I].c();this.h()},l(I){e=E(I,"DIV",{class:!0});var O=T(e);t=E(O,"DIV",{class:!0});var $=T(t);s=E($,"DIV",{class:!0});var X=T(s);he(i.$$.fragment,X),X.forEach(g),o=re($),a=E($,"DIV",{class:!0});var K=T(a);he(l.$$.fragment,K),K.forEach(g),$.forEach(g),c=re(O),u=E(O,"DIV",{});var oe=T(u);he(h.$$.fragment,oe),oe.forEach(g),f=re(O),m=E(O,"DIV",{class:!0});var q=T(m);for(let ae=0;ae<p.length;ae+=1)p[ae].l(q);q.forEach(g),O.forEach(g),this.h()},h(){w(s,"class","search-holder svelte-1bhb4u3"),w(a,"class","create-holder mb-3 svelte-1bhb4u3"),w(t,"class","search-create-container svelte-1bhb4u3"),w(m,"class","list-container svelte-1bhb4u3"),w(e,"class","wrapper svelte-1bhb4u3")},m(I,O){H(I,e,O),y(e,t),y(t,s),de(i,s,null),y(t,o),y(t,a),de(l,a,null),y(e,c),y(e,u),de(h,u,null),y(e,f),y(e,m);for(let $=0;$<p.length;$+=1)p[$]&&p[$].m(m,null);k=!0},p(I,[O]){const $={};O&8&&($.disabled=I[3]),!r&&O&4&&(r=!0,$.input=I[2],Ln(()=>r=!1)),i.$set($);const X={};O&8&&(X.disabled=I[3]),O&2097152&&(X.$$scope={dirty:O,ctx:I}),l.$set(X);const K={};O&8&&(K.disabled=I[3]),!d&&O&2&&(d=!0,K.selected=I[1],Ln(()=>d=!1)),h.$set(K),O&17&&(R=I[4],lt(),p=Vf(p,O,F,1,I,R,S,m,Bf,su,null,nu),ct())},i(I){if(!k){A(i.$$.fragment,I),A(l.$$.fragment,I),A(h.$$.fragment,I);for(let O=0;O<R.length;O+=1)A(p[O]);k=!0}},o(I){P(i.$$.fragment,I),P(l.$$.fragment,I),P(h.$$.fragment,I);for(let O=0;O<p.length;O+=1)P(p[O]);k=!1},d(I){I&&g(e),fe(i),fe(l),fe(h);for(let O=0;O<p.length;O+=1)p[O].d()}}}function ib(n,e,t){let s;sr(n,mn,C=>t(14,s=C));let{notes:i=[]}=e,{selectedNote:r=null}=e;const o=Lt(),a={title:"title",createdDesc:"created (desc)",createdAsc:"created (asc)"};let l="title",c="",u=!1,h=[],d=[];mn.subscribe(C=>{t(3,u=C===null)});const f=async()=>{s!==null&&o("noteCreated",{title:`Note ${i.length} (${hl()})`})},m=C=>{const R=[],F=[];for(const O of h)O.pinned?R.push(O):F.push(O);const I=(O,$)=>C==="title"?O.title<$.title?-1:O.title>$.title?1:0:C==="createdDesc"?O.createdAt>$.createdAt?-1:O.createdAt<$.createdAt?1:0:C==="createdAsc"?O.createdAt>$.createdAt?1:O.createdAt<$.createdAt?-1:0:0;t(4,d=[...R.sort(I),...F.sort(I)])},p=C=>{const R=C.toLowerCase();if(R===""){t(4,d=h.slice());return}t(4,d=h.slice().filter(F=>{if(F.title.toLowerCase().includes(R.toLowerCase()))return!0;for(const I of F.tags)if(I.toLowerCase().includes(R))return!0;return!1}))};function S(C){c=C,t(2,c)}function k(C){l=C,t(1,l)}function U(C){on.call(this,n,C)}function Y(C){on.call(this,n,C)}function J(C){on.call(this,n,C)}return n.$$set=C=>{"notes"in C&&t(7,i=C.notes),"selectedNote"in C&&t(0,r=C.selectedNote)},n.$$.update=()=>{n.$$.dirty&2&&m(l),n.$$.dirty&4&&p(c),n.$$.dirty&128&&(h=i,t(4,d=i))},[r,l,c,u,d,a,f,i,S,k,U,Y,J]}class rb extends Oe{constructor(e){super(),$e(this,e,ib,sb,Le,{notes:7,selectedNote:0})}}function Df(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let wn=Df();function ob(n){wn=n}const Rf=/[&<>"']/,ab=new RegExp(Rf.source,"g"),Nf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,lb=new RegExp(Nf.source,"g"),cb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},iu=n=>cb[n];function Be(n,e){if(e){if(Rf.test(n))return n.replace(ab,iu)}else if(Nf.test(n))return n.replace(lb,iu);return n}const ub=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Of(n){return n.replace(ub,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const hb=/(^|[^\[])\^/g;function ye(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(s,i)=>(i=i.source||i,i=i.replace(hb,"$1"),n=n.replace(s,i),t),getRegex:()=>new RegExp(n,e)};return t}const db=/[^\w:]/g,fb=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ru(n,e,t){if(n){let s;try{s=decodeURIComponent(Of(t)).replace(db,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}e&&!fb.test(t)&&(t=yb(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const _i={},pb=/^[^:]+:\/*[^/]*$/,gb=/^([^:]+:)[\s\S]*$/,mb=/^([^:]+:\/*[^/]*)[\s\S]*$/;function yb(n,e){_i[" "+n]||(pb.test(n)?_i[" "+n]=n+"/":_i[" "+n]=Di(n,"/",!0)),n=_i[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(gb,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(mb,"$1")+e:n+e}const tr={exec:function(){}};function ou(n,e){const t=n.replace(/\|/g,(r,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),s=t.split(/ \|/);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s}function Di(n,e,t){const s=n.length;if(s===0)return"";let i=0;for(;i<s;){const r=n.charAt(s-i-1);if(r===e&&!t)i++;else if(r!==e&&t)i++;else break}return n.slice(0,s-i)}function vb(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let s=0,i=0;for(;i<t;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])s++;else if(n[i]===e[1]&&(s--,s<0))return i;return-1}function _b(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function au(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function lu(n,e,t,s){const i=e.href,r=e.title?Be(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){s.state.inLink=!0;const a={type:"link",raw:t,href:i,title:r,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:r,text:Be(o)}}function wb(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const s=t[1];return e.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[o]=r;return o.length>=s.length?i.slice(s.length):i}).join(`
`)}class dl{constructor(e){this.options=e||wn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Di(s,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const s=t[0],i=wb(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(/#$/.test(s)){const i=Di(s,"#");(this.options.pedantic||!i||/ $/.test(i))&&(s=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(s);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s,i,r,o,a,l,c,u,h,d,f,m,p=t[1].trim();const S=p.length>1,k={type:"list",raw:"",ordered:S,start:S?+p.slice(0,-1):"",loose:!1,items:[]};p=S?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=S?p:"[*+-]");const U=new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(t=U.exec(e))||this.rules.block.hr.test(e)));){if(s=t[0],e=e.substring(s.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,J=>" ".repeat(3*J.length)),h=e.split(`
`,1)[0],this.options.pedantic?(o=2,f=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,f=u.slice(o),o+=t[1].length),l=!1,!u&&/^ *$/.test(h)&&(s+=h+`
`,e=e.substring(h.length+1),m=!0),!m){const J=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),C=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),F=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],h=d,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(R.test(h)||F.test(h)||J.test(h)||C.test(e)));){if(h.search(/[^ ]/)>=o||!h.trim())f+=`
`+h.slice(o);else{if(l||u.search(/[^ ]/)>=4||R.test(u)||F.test(u)||C.test(u))break;f+=`
`+h}!l&&!h.trim()&&(l=!0),s+=d+`
`,e=e.substring(d.length+1),u=h.slice(o)}}k.loose||(c?k.loose=!0:/\n *\n *$/.test(s)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(f),i&&(r=i[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:s,task:!!i,checked:r,loose:!1,text:f}),k.raw+=s}k.items[k.items.length-1].raw=s.trimRight(),k.items[k.items.length-1].text=f.trimRight(),k.raw=k.raw.trimRight();const Y=k.items.length;for(a=0;a<Y;a++)if(this.lexer.state.top=!1,k.items[a].tokens=this.lexer.blockTokens(k.items[a].text,[]),!k.loose){const J=k.items[a].tokens.filter(R=>R.type==="space"),C=J.length>0&&J.some(R=>/\n.*\n/.test(R.raw));k.loose=C}if(k.loose)for(a=0;a<Y;a++)k.items[a].loose=!0;return k}}html(e){const t=this.rules.block.html.exec(e);if(t){const s={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):Be(t[0]);s.type="paragraph",s.text=i,s.tokens=this.lexer.inline(i)}return s}}def(e){const t=this.rules.block.def.exec(e);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:i,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(t){const s={type:"table",header:ou(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=t[0];let i=s.align.length,r,o,a,l;for(r=0;r<i;r++)/^ *-+: *$/.test(s.align[r])?s.align[r]="right":/^ *:-+: *$/.test(s.align[r])?s.align[r]="center":/^ *:-+ *$/.test(s.align[r])?s.align[r]="left":s.align[r]=null;for(i=s.rows.length,r=0;r<i;r++)s.rows[r]=ou(s.rows[r],s.header.length).map(c=>({text:c}));for(i=s.header.length,o=0;o<i;o++)s.header[o].tokens=this.lexer.inline(s.header[o].text);for(i=s.rows.length,o=0;o<i;o++)for(l=s.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return s}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Be(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Be(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const o=Di(s.slice(0,-1),"\\");if((s.length-o.length)%2===0)return}else{const o=vb(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(s)?i=i.slice(1):i=i.slice(1,-1)),lu(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let i=(s[2]||s[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const r=s[0].charAt(0);return{type:"text",raw:r,text:r}}return lu(s,i,s[0],this.lexer)}}emStrong(e,t,s=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&s.match(/[\p{L}\p{N}]/u))return;const r=i[1]||i[2]||"";if(!r||r&&(s===""||this.rules.inline.punctuation.exec(s))){const o=i[0].length-1;let a,l,c=o,u=0;const h=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(i=h.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=a.length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const d=e.slice(0,o+i.index+(i[0].length-a.length)+l);if(Math.min(o,l)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const f=d.slice(2,-2);return{type:"strong",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(/\n/g," ");const i=/[^ ]/.test(s),r=/^ /.test(s)&&/ $/.test(s);return i&&r&&(s=s.substring(1,s.length-1)),s=Be(s,!0),{type:"codespan",raw:t[0],text:s}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const s=this.rules.inline.autolink.exec(e);if(s){let i,r;return s[2]==="@"?(i=Be(this.options.mangle?t(s[1]):s[1]),r="mailto:"+i):(i=Be(s[1]),r=i),{type:"link",raw:s[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let s;if(s=this.rules.inline.url.exec(e)){let i,r;if(s[2]==="@")i=Be(this.options.mangle?t(s[0]):s[0]),r="mailto:"+i;else{let o;do o=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(o!==s[0]);i=Be(s[0]),s[1]==="www."?r="http://"+s[0]:r=s[0]}return{type:"link",raw:s[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const s=this.rules.inline.text.exec(e);if(s){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):Be(s[0]):s[0]:i=Be(this.options.smartypants?t(s[0]):s[0]),{type:"text",raw:s[0],text:i}}}}const z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:tr,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};z._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;z._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;z.def=ye(z.def).replace("label",z._label).replace("title",z._title).getRegex();z.bullet=/(?:[*+-]|\d{1,9}[.)])/;z.listItemStart=ye(/^( *)(bull) */).replace("bull",z.bullet).getRegex();z.list=ye(z.list).replace(/bull/g,z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+z.def.source+")").getRegex();z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;z.html=ye(z.html,"i").replace("comment",z._comment).replace("tag",z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();z.paragraph=ye(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex();z.blockquote=ye(z.blockquote).replace("paragraph",z.paragraph).getRegex();z.normal={...z};z.gfm={...z.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};z.gfm.table=ye(z.gfm.table).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex();z.gfm.paragraph=ye(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",z.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex();z.pedantic={...z.normal,html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:tr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ye(z.normal._paragraph).replace("hr",z.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:tr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:tr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";N.punctuation=ye(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex();N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;N.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;N._comment=ye(z._comment).replace("(?:-->|$)","-->").getRegex();N.emStrong.lDelim=ye(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimAst=ye(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimUnd=ye(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex();N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;N.autolink=ye(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex();N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;N.tag=ye(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex();N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;N.link=ye(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex();N.reflink=ye(N.reflink).replace("label",N._label).replace("ref",z._label).getRegex();N.nolink=ye(N.nolink).replace("ref",z._label).getRegex();N.reflinkSearch=ye(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex();N.normal={...N};N.pedantic={...N.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()};N.gfm={...N.normal,escape:ye(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};N.gfm.url=ye(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex();N.breaks={...N.gfm,br:ye(N.br).replace("{2,}","*").getRegex(),text:ye(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function bb(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function cu(n){let e="",t,s;const i=n.length;for(t=0;t<i;t++)s=n.charCodeAt(t),Math.random()>.5&&(s="x"+s.toString(16)),e+="&#"+s+";";return e}class Gt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||wn,this.options.tokenizer=this.options.tokenizer||new dl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:z.normal,inline:N.normal};this.options.pedantic?(t.block=z.pedantic,t.inline=N.pedantic):this.options.gfm&&(t.block=z.gfm,this.options.breaks?t.inline=N.breaks:t.inline=N.gfm),this.tokenizer.rules=t}static get rules(){return{block:z,inline:N}}static lex(e,t){return new Gt(t).lex(e)}static lexInline(e,t){return new Gt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let s,i,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(s=a.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+s.raw,i.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){i=t[t.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s),o=r.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(s);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s,i,r,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+au("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+au("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index+a[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(s=u.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),i=t[t.length-1],i&&s.type==="text"&&i.type==="text"?(i.raw+=s.raw,i.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length),i=t[t.length-1],i&&s.type==="text"&&i.type==="text"?(i.raw+=s.raw,i.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,o,c)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e,cu)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e,cu))){e=e.substring(s.raw.length),t.push(s);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(function(f){d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(s=this.tokenizer.inlineText(r,bb)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(c=s.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=s.raw,i.text+=s.text):t.push(s);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class fl{constructor(e){this.options=e||wn}code(e,t,s){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,i);r!=null&&r!==e&&(s=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+Be(i)+'">'+(s?e:Be(e,!0))+`</code></pre>
`:"<pre><code>"+(s?e:Be(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,s,i){if(this.options.headerIds){const r=this.options.headerPrefix+i.slug(s);return`<h${t} id="${r}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,s){const i=t?"ol":"ul",r=t&&s!==1?' start="'+s+'"':"";return"<"+i+r+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,s){if(e=ru(this.options.sanitize,this.options.baseUrl,e),e===null)return s;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+s+"</a>",i}image(e,t,s){if(e=ru(this.options.sanitize,this.options.baseUrl,e),e===null)return s;let i=`<img src="${e}" alt="${s}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class $f{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}class Lf{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let s=e,i=0;if(this.seen.hasOwnProperty(s)){i=this.seen[e];do i++,s=e+"-"+i;while(this.seen.hasOwnProperty(s))}return t||(this.seen[e]=i,this.seen[s]=0),s}slug(e,t={}){const s=this.serialize(e);return this.getNextSafeSlug(s,t.dryrun)}}class Wt{constructor(e){this.options=e||wn,this.options.renderer=this.options.renderer||new fl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new $f,this.slugger=new Lf}static parse(e,t){return new Wt(t).parse(e)}static parseInline(e,t){return new Wt(t).parseInline(e)}parse(e,t=!0){let s="",i,r,o,a,l,c,u,h,d,f,m,p,S,k,U,Y,J,C,R;const F=e.length;for(i=0;i<F;i++){if(f=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(R=this.options.extensions.renderers[f.type].call({parser:this},f),R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))){s+=R||"";continue}switch(f.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Of(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{for(h="",u="",a=f.header.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(f.header[r].tokens),{header:!0,align:f.align[r]});for(h+=this.renderer.tablerow(u),d="",a=f.rows.length,r=0;r<a;r++){for(c=f.rows[r],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});d+=this.renderer.tablerow(u)}s+=this.renderer.table(h,d);continue}case"blockquote":{d=this.parse(f.tokens),s+=this.renderer.blockquote(d);continue}case"list":{for(m=f.ordered,p=f.start,S=f.loose,a=f.items.length,d="",r=0;r<a;r++)U=f.items[r],Y=U.checked,J=U.task,k="",U.task&&(C=this.renderer.checkbox(Y),S?U.tokens.length>0&&U.tokens[0].type==="paragraph"?(U.tokens[0].text=C+" "+U.tokens[0].text,U.tokens[0].tokens&&U.tokens[0].tokens.length>0&&U.tokens[0].tokens[0].type==="text"&&(U.tokens[0].tokens[0].text=C+" "+U.tokens[0].tokens[0].text)):U.tokens.unshift({type:"text",text:C}):k+=C),k+=this.parse(U.tokens,S),d+=this.renderer.listitem(k,J,Y);s+=this.renderer.list(d,m,p);continue}case"html":{s+=this.renderer.html(f.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{for(d=f.tokens?this.parseInline(f.tokens):f.text;i+1<F&&e[i+1].type==="text";)f=e[++i],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);s+=t?this.renderer.paragraph(d):d;continue}default:{const I='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(I);return}else throw new Error(I)}}}return s}parseInline(e,t){t=t||this.renderer;let s="",i,r,o;const a=e.length;for(i=0;i<a;i++){if(r=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(o=this.options.extensions.renderers[r.type].call({parser:this},r),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){s+=o||"";continue}switch(r.type){case"escape":{s+=t.text(r.text);break}case"html":{s+=t.html(r.text);break}case"link":{s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{s+=t.image(r.href,r.title,r.text);break}case"strong":{s+=t.strong(this.parseInline(r.tokens,t));break}case"em":{s+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{s+=t.codespan(r.text);break}case"br":{s+=t.br();break}case"del":{s+=t.del(this.parseInline(r.tokens,t));break}case"text":{s+=t.text(r.text);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return s}}class nr{constructor(e){this.options=e||wn}preprocess(e){return e}postprocess(e){return e}}at(nr,"passThroughHooks",new Set(["preprocess","postprocess"]));function Eb(n,e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+Be(s.message+"",!0)+"</pre>";if(e)return Promise.resolve(i);if(t){t(null,i);return}return i}if(e)return Promise.reject(s);if(t){t(s);return}throw s}}function Pf(n,e){return(t,s,i)=>{typeof s=="function"&&(i=s,s=null);const r={...s};s={...B.defaults,...r};const o=Eb(s.silent,s.async,i);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(_b(s),s.hooks&&(s.hooks.options=s),i){const a=s.highlight;let l;try{s.hooks&&(t=s.hooks.preprocess(t)),l=n(t,s)}catch(h){return o(h)}const c=function(h){let d;if(!h)try{s.walkTokens&&B.walkTokens(l,s.walkTokens),d=e(l,s),s.hooks&&(d=s.hooks.postprocess(d))}catch(f){h=f}return s.highlight=a,h?o(h):i(null,d)};if(!a||a.length<3||(delete s.highlight,!l.length))return c();let u=0;B.walkTokens(l,function(h){h.type==="code"&&(u++,setTimeout(()=>{a(h.text,h.lang,function(d,f){if(d)return c(d);f!=null&&f!==h.text&&(h.text=f,h.escaped=!0),u--,u===0&&c()})},0))}),u===0&&c();return}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(a=>n(a,s)).then(a=>s.walkTokens?Promise.all(B.walkTokens(a,s.walkTokens)).then(()=>a):a).then(a=>e(a,s)).then(a=>s.hooks?s.hooks.postprocess(a):a).catch(o);try{s.hooks&&(t=s.hooks.preprocess(t));const a=n(t,s);s.walkTokens&&B.walkTokens(a,s.walkTokens);let l=e(a,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(a){return o(a)}}}function B(n,e,t){return Pf(Gt.lex,Wt.parse)(n,e,t)}B.options=B.setOptions=function(n){return B.defaults={...B.defaults,...n},ob(B.defaults),B};B.getDefaults=Df;B.defaults=wn;B.use=function(...n){const e=B.defaults.extensions||{renderers:{},childTokens:{}};n.forEach(t=>{const s={...t};if(s.async=B.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const r=e.renderers[i.name];r?e.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=r.apply(this,o)),a}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),s.extensions=e),t.renderer){const i=B.defaults.renderer||new fl;for(const r in t.renderer){const o=i[r];i[r]=(...a)=>{let l=t.renderer[r].apply(i,a);return l===!1&&(l=o.apply(i,a)),l}}s.renderer=i}if(t.tokenizer){const i=B.defaults.tokenizer||new dl;for(const r in t.tokenizer){const o=i[r];i[r]=(...a)=>{let l=t.tokenizer[r].apply(i,a);return l===!1&&(l=o.apply(i,a)),l}}s.tokenizer=i}if(t.hooks){const i=B.defaults.hooks||new nr;for(const r in t.hooks){const o=i[r];nr.passThroughHooks.has(r)?i[r]=a=>{if(B.defaults.async)return Promise.resolve(t.hooks[r].call(i,a)).then(c=>o.call(i,c));const l=t.hooks[r].call(i,a);return o.call(i,l)}:i[r]=(...a)=>{let l=t.hooks[r].apply(i,a);return l===!1&&(l=o.apply(i,a)),l}}s.hooks=i}if(t.walkTokens){const i=B.defaults.walkTokens;s.walkTokens=function(r){let o=[];return o.push(t.walkTokens.call(this,r)),i&&(o=o.concat(i.call(this,r))),o}}B.setOptions(s)})};B.walkTokens=function(n,e){let t=[];for(const s of n)switch(t=t.concat(e.call(B,s)),s.type){case"table":{for(const i of s.header)t=t.concat(B.walkTokens(i.tokens,e));for(const i of s.rows)for(const r of i)t=t.concat(B.walkTokens(r.tokens,e));break}case"list":{t=t.concat(B.walkTokens(s.items,e));break}default:B.defaults.extensions&&B.defaults.extensions.childTokens&&B.defaults.extensions.childTokens[s.type]?B.defaults.extensions.childTokens[s.type].forEach(function(i){t=t.concat(B.walkTokens(s[i],e))}):s.tokens&&(t=t.concat(B.walkTokens(s.tokens,e)))}return t};B.parseInline=Pf(Gt.lexInline,Wt.parseInline);B.Parser=Wt;B.parser=Wt.parse;B.Renderer=fl;B.TextRenderer=$f;B.Lexer=Gt;B.lexer=Gt.lex;B.Tokenizer=dl;B.Slugger=Lf;B.Hooks=nr;B.parse=B;B.options;B.setOptions;B.use;B.walkTokens;B.parseInline;Wt.parse;Gt.lex;function Ib(n){let e;return{c(){e=W(n[1])},l(t){e=Q(t,n[1])},m(t,s){H(t,e,s)},p(t,s){s&2&&_t(e,t[1])},d(t){t&&g(e)}}}function kb(n){let e,t,s,i,r,o,a;return i=new qe({props:{$$slots:{default:[Ib]},$$scope:{ctx:n}}}),i.$on("click",n[4]),{c(){e=b("div"),t=b("input"),s=ie(),ue(i.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var c=T(e);t=E(c,"INPUT",{type:!0,class:!0,"aria-label":!0,"aria-describedby":!0}),s=re(c),he(i.$$.fragment,c),c.forEach(g),this.h()},h(){w(t,"type","text"),w(t,"class","form-control svelte-12izwv1"),w(t,"aria-label","Sizing example input"),w(t,"aria-describedby","inputGroup-sizing-sm"),w(e,"class","input-group input-group-sm")},m(l,c){H(l,e,c),y(e,t),mt(t,n[0]),y(e,s),de(i,e,null),r=!0,o||(a=[Bt(t,"input",n[3]),Bt(t,"keydown",n[2])],o=!0)},p(l,[c]){c&1&&t.value!==l[0]&&mt(t,l[0]);const u={};c&34&&(u.$$scope={dirty:c,ctx:l}),i.$set(u)},i(l){r||(A(i.$$.fragment,l),r=!0)},o(l){P(i.$$.fragment,l),r=!1},d(l){l&&g(e),fe(i),o=!1,zf(a)}}}function Tb(n,e,t){let{label:s="button"}=e,{value:i=""}=e;function r(l){on.call(this,n,l)}function o(){i=this.value,t(0,i)}function a(l){on.call(this,n,l)}return n.$$set=l=>{"label"in l&&t(1,s=l.label),"value"in l&&t(0,i=l.value)},[i,s,r,o,a]}class Sb extends Oe{constructor(e){super(),$e(this,e,Tb,kb,Le,{label:1,value:0})}}function uu(n,e,t){const s=n.slice();return s[9]=e[t],s[11]=t,s}function Cb(n){let e=n[9]+"",t;return{c(){t=W(e)},l(s){t=Q(s,e)},m(s,i){H(s,t,i)},p(s,i){i&1&&e!==(e=s[9]+"")&&_t(t,e)},d(s){s&&g(t)}}}function hu(n){let e,t;function s(){return n[7](n[9])}return e=new Cf({props:{$$slots:{default:[Cb]},$$scope:{ctx:n}}}),e.$on("click",s),{c(){ue(e.$$.fragment)},l(i){he(e.$$.fragment,i)},m(i,r){de(e,i,r),t=!0},p(i,r){n=i;const o={};r&4097&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(i){t||(A(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){fe(e,i)}}}function Ab(n){let e,t,s,i,r,o;function a(d){n[6](d)}let l={label:"add"};n[1]!==void 0&&(l.value=n[1]),t=new Sb({props:l}),zt.push(()=>$n(t,"value",a)),t.$on("keydown",n[4]),t.$on("click",n[3]);let c=n[0],u=[];for(let d=0;d<c.length;d+=1)u[d]=hu(uu(n,c,d));const h=d=>P(u[d],1,1,()=>{u[d]=null});return{c(){e=b("div"),ue(t.$$.fragment),i=ie(),r=b("div");for(let d=0;d<u.length;d+=1)u[d].c();this.h()},l(d){e=E(d,"DIV",{class:!0});var f=T(e);he(t.$$.fragment,f),f.forEach(g),i=re(d),r=E(d,"DIV",{class:!0});var m=T(r);for(let p=0;p<u.length;p+=1)u[p].l(m);m.forEach(g),this.h()},h(){w(e,"class","utility-item"),w(r,"class","utility-item")},m(d,f){H(d,e,f),de(t,e,null),H(d,i,f),H(d,r,f);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(r,null);o=!0},p(d,[f]){const m={};if(!s&&f&2&&(s=!0,m.value=d[1],Ln(()=>s=!1)),t.$set(m),f&5){c=d[0];let p;for(p=0;p<c.length;p+=1){const S=uu(d,c,p);u[p]?(u[p].p(S,f),A(u[p],1)):(u[p]=hu(S),u[p].c(),A(u[p],1),u[p].m(r,null))}for(lt(),p=c.length;p<u.length;p+=1)h(p);ct()}},i(d){if(!o){A(t.$$.fragment,d);for(let f=0;f<c.length;f+=1)A(u[f]);o=!0}},o(d){P(t.$$.fragment,d),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)P(u[f]);o=!1},d(d){d&&g(e),fe(t),d&&g(i),d&&g(r),ta(u,d)}}}function Db(n,e,t){let{tags:s=[]}=e,{onChange:i=()=>null}=e,r="";const o=d=>{s.includes(d)||(t(0,s=[...s,d]),i(s))},a=d=>{const f=s.indexOf(d);f!==-1&&(s.splice(f,1),t(0,s),i(s))},l=()=>{r!==""&&(o(r),t(1,r=""))},c=d=>{d.key==="Enter"&&l()};function u(d){r=d,t(1,r)}const h=d=>a(d);return n.$$set=d=>{"tags"in d&&t(0,s=d.tags),"onChange"in d&&t(5,i=d.onChange)},[s,r,a,l,c,i,u,h]}class Rb extends Oe{constructor(e){super(),$e(this,e,Db,Ab,Le,{tags:0,onChange:5})}}function Nb(n){let e,t,s,i;return{c(){e=b("div"),t=b("textarea"),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=T(e);t=E(o,"TEXTAREA",{class:!0,placeholder:!0}),T(t).forEach(g),o.forEach(g),this.h()},h(){w(t,"class","text-input svelte-14wu328"),w(t,"placeholder","text here"),w(e,"class","markdown-editor svelte-14wu328")},m(r,o){H(r,e,o),y(e,t),n[2](t),mt(t,n[0]),s||(i=Bt(t,"input",n[3]),s=!0)},p(r,[o]){o&1&&mt(t,r[0])},i:We,o:We,d(r){r&&g(e),n[2](null),s=!1,i()}}}function Ob(n,e,t){let{value:s=""}=e,i;On(()=>{i.addEventListener("keydown",a=>{if(a.key!=="Tab")return;a.preventDefault();const l=i.selectionStart,c=i.selectionEnd,u=i.value.substring(0,l),h=i.value.substring(c);t(1,i.value=`${u}    ${h}`,i),t(1,i.selectionStart=t(1,i.selectionEnd=l+1,i),i)})});function r(a){zt[a?"unshift":"push"](()=>{i=a,t(1,i)})}function o(){s=this.value,t(0,s)}return n.$$set=a=>{"value"in a&&t(0,s=a.value)},[s,i,r,o]}class $b extends Oe{constructor(e){super(),$e(this,e,Ob,Nb,Le,{value:0})}}function Lb(n){let e,t;return{c(){e=b("div"),t=b("div"),this.h()},l(s){e=E(s,"DIV",{class:!0});var i=T(e);t=E(i,"DIV",{class:!0});var r=T(t);r.forEach(g),i.forEach(g),this.h()},h(){w(t,"class","markdown-output svelte-ltjgcd"),w(e,"class","markdown-preview svelte-ltjgcd")},m(s,i){H(s,e,i),y(e,t),t.innerHTML=n[0]},p(s,[i]){i&1&&(t.innerHTML=s[0])},i:We,o:We,d(s){s&&g(e)}}}function Pb(n,e,t){let{html:s=""}=e;return n.$$set=i=>{"html"in i&&t(0,s=i.html)},[s]}class Mb extends Oe{constructor(e){super(),$e(this,e,Pb,Lb,Le,{html:0})}}function xb(n){let e;return{c(){e=W("Delete All Notes")},l(t){e=Q(t,"Delete All Notes")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function Ub(n){let e;return{c(){e=W("Delete Account")},l(t){e=Q(t,"Delete Account")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function Fb(n){let e,t,s,i,r,o,a;return s=new qe({props:{$$slots:{default:[xb]},$$scope:{ctx:n}}}),s.$on("click",function(){gs(n[0])&&n[0].apply(this,arguments)}),o=new qe({props:{$$slots:{default:[Ub]},$$scope:{ctx:n}}}),o.$on("click",function(){gs(n[1])&&n[1].apply(this,arguments)}),{c(){e=b("div"),t=b("div"),ue(s.$$.fragment),i=ie(),r=b("div"),ue(o.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var c=T(e);t=E(c,"DIV",{class:!0});var u=T(t);he(s.$$.fragment,u),u.forEach(g),i=re(c),r=E(c,"DIV",{class:!0});var h=T(r);he(o.$$.fragment,h),h.forEach(g),c.forEach(g),this.h()},h(){w(t,"class","button mb-3 svelte-1csktg"),w(r,"class","button mb-3 svelte-1csktg"),w(e,"class","buttons svelte-1csktg")},m(l,c){H(l,e,c),y(e,t),de(s,t,null),y(e,i),y(e,r),de(o,r,null),a=!0},p(l,c){n=l;const u={};c&32&&(u.$$scope={dirty:c,ctx:n}),s.$set(u);const h={};c&32&&(h.$$scope={dirty:c,ctx:n}),o.$set(h)},i(l){a||(A(s.$$.fragment,l),A(o.$$.fragment,l),a=!0)},o(l){P(s.$$.fragment,l),P(o.$$.fragment,l),a=!1},d(l){l&&g(e),fe(s),fe(o)}}}function Vb(n){let e,t,s;return t=new Af({props:{styles:{"background-color":"#e88e84"},$$slots:{default:[Fb]},$$scope:{ctx:n}}}),{c(){e=b("div"),ue(t.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var r=T(e);he(t.$$.fragment,r),r.forEach(g),this.h()},h(){w(e,"class","settings-container svelte-1csktg")},m(i,r){H(i,e,r),de(t,e,null),s=!0},p(i,[r]){const o={};r&35&&(o.$$scope={dirty:r,ctx:i}),t.$set(o)},i(i){s||(A(t.$$.fragment,i),s=!0)},o(i){P(t.$$.fragment,i),s=!1},d(i){i&&g(e),fe(t)}}}function Bb(n,e,t){let s;sr(n,mn,l=>t(2,s=l));const i=Vt.make();let r=()=>null,o=()=>null;const a=(l,c)=>c===window.prompt(`${l}\r
\r
Type "${c}" to confirm\r
\r
`);return On(()=>{t(0,r=()=>{s===null||!a("Are you sure you want to delete all your notes? This cannot be undone.","delete my notes")||i.deleteAllUserNotes(s).then(()=>alert("Notes deleted")).catch(console.error)}),t(1,o=()=>{s===null||!a("Are you sure you want to delete your account? This cannot be undone.","delete my account")||i.deleteUser(s).then(()=>alert("account deleted!")).catch(console.error)})}),[r,o]}class zb extends Oe{constructor(e){super(),$e(this,e,Bb,Vb,Le,{})}}function jb(n){let e,t,s,i,r,o,a;return{c(){e=b("div"),t=b("span"),s=W(n[1]),i=ie(),r=b("input"),this.h()},l(l){e=E(l,"DIV",{class:!0});var c=T(e);t=E(c,"SPAN",{class:!0,id:!0});var u=T(t);s=Q(u,n[1]),u.forEach(g),i=re(c),r=E(c,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),c.forEach(g),this.h()},h(){w(t,"class","input-group-text"),w(t,"id","basic-text"),w(r,"type","text"),w(r,"class","form-control"),w(r,"placeholder",n[2]),w(r,"aria-label","email"),w(r,"aria-describedby","basic-text"),w(e,"class","input-group mb-3")},m(l,c){H(l,e,c),y(e,t),y(t,s),y(e,i),y(e,r),mt(r,n[0]),o||(a=Bt(r,"input",n[3]),o=!0)},p(l,[c]){c&2&&_t(s,l[1]),c&4&&w(r,"placeholder",l[2]),c&1&&r.value!==l[0]&&mt(r,l[0])},i:We,o:We,d(l){l&&g(e),o=!1,a()}}}function qb(n,e,t){let{value:s}=e,{label:i="label"}=e,{placeholder:r="placeholder"}=e;function o(){s=this.value,t(0,s)}return n.$$set=a=>{"value"in a&&t(0,s=a.value),"label"in a&&t(1,i=a.label),"placeholder"in a&&t(2,r=a.placeholder)},[s,i,r,o]}class Hb extends Oe{constructor(e){super(),$e(this,e,qb,jb,Le,{value:0,label:1,placeholder:2})}}function Kb(n){let e,t,s,i,r,o,a;return{c(){e=b("div"),t=b("span"),s=W(n[1]),i=ie(),r=b("input"),this.h()},l(l){e=E(l,"DIV",{class:!0});var c=T(e);t=E(c,"SPAN",{class:!0,id:!0});var u=T(t);s=Q(u,n[1]),u.forEach(g),i=re(c),r=E(c,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),c.forEach(g),this.h()},h(){w(t,"class","input-group-text"),w(t,"id","basic-password"),w(r,"type","password"),w(r,"class","form-control"),w(r,"placeholder",n[2]),w(r,"aria-label","password"),w(r,"aria-describedby","basic-password"),w(e,"class","input-group mb-3")},m(l,c){H(l,e,c),y(e,t),y(t,s),y(e,i),y(e,r),mt(r,n[0]),o||(a=Bt(r,"input",n[3]),o=!0)},p(l,[c]){c&2&&_t(s,l[1]),c&4&&w(r,"placeholder",l[2]),c&1&&r.value!==l[0]&&mt(r,l[0])},i:We,o:We,d(l){l&&g(e),o=!1,a()}}}function Gb(n,e,t){let{value:s}=e,{label:i="label"}=e,{placeholder:r="placeholder"}=e;function o(){s=this.value,t(0,s)}return n.$$set=a=>{"value"in a&&t(0,s=a.value),"label"in a&&t(1,i=a.label),"placeholder"in a&&t(2,r=a.placeholder)},[s,i,r,o]}class Wb extends Oe{constructor(e){super(),$e(this,e,Gb,Kb,Le,{value:0,label:1,placeholder:2})}}function du(n){let e,t,s,i,r,o;function a(h){n[6](h)}let l={label:"email",placeholder:"email"};n[0]!==void 0&&(l.value=n[0]),e=new Hb({props:l}),zt.push(()=>$n(e,"value",a));function c(h){n[7](h)}let u={label:"password",placeholder:"password"};return n[1]!==void 0&&(u.value=n[1]),i=new Wb({props:u}),zt.push(()=>$n(i,"value",c)),{c(){ue(e.$$.fragment),s=ie(),ue(i.$$.fragment)},l(h){he(e.$$.fragment,h),s=re(h),he(i.$$.fragment,h)},m(h,d){de(e,h,d),H(h,s,d),de(i,h,d),o=!0},p(h,d){const f={};!t&&d&1&&(t=!0,f.value=h[0],Ln(()=>t=!1)),e.$set(f);const m={};!r&&d&2&&(r=!0,m.value=h[1],Ln(()=>r=!1)),i.$set(m)},i(h){o||(A(e.$$.fragment,h),A(i.$$.fragment,h),o=!0)},o(h){P(e.$$.fragment,h),P(i.$$.fragment,h),o=!1},d(h){fe(e,h),h&&g(s),fe(i,h)}}}function Qb(n){let e,t;return e=new qe({props:{$$slots:{default:[Xb]},$$scope:{ctx:n}}}),e.$on("click",n[5]),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},p(s,i){const r={};i&4096&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function Yb(n){let e,t,s,i;return e=new qe({props:{$$slots:{default:[Jb]},$$scope:{ctx:n}}}),e.$on("click",n[4]),s=new qe({props:{$$slots:{default:[Zb]},$$scope:{ctx:n}}}),s.$on("click",n[3]),{c(){ue(e.$$.fragment),t=ie(),ue(s.$$.fragment)},l(r){he(e.$$.fragment,r),t=re(r),he(s.$$.fragment,r)},m(r,o){de(e,r,o),H(r,t,o),de(s,r,o),i=!0},p(r,o){const a={};o&4096&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const l={};o&4096&&(l.$$scope={dirty:o,ctx:r}),s.$set(l)},i(r){i||(A(e.$$.fragment,r),A(s.$$.fragment,r),i=!0)},o(r){P(e.$$.fragment,r),P(s.$$.fragment,r),i=!1},d(r){fe(e,r),r&&g(t),fe(s,r)}}}function Xb(n){let e;return{c(){e=W("Sign out")},l(t){e=Q(t,"Sign out")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function Jb(n){let e;return{c(){e=W("Sign in")},l(t){e=Q(t,"Sign in")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function Zb(n){let e;return{c(){e=W("Sign up")},l(t){e=Q(t,"Sign up")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function eE(n){let e,t,s,i,r,o,a,l=n[2]===null&&du(n);const c=[Yb,Qb],u=[];function h(d,f){return d[2]===null?0:1}return r=h(n),o=u[r]=c[r](n),{c(){e=b("div"),l&&l.c(),t=ie(),s=b("div"),i=b("div"),o.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var f=T(e);l&&l.l(f),t=re(f),s=E(f,"DIV",{class:!0});var m=T(s);i=E(m,"DIV",{class:!0});var p=T(i);o.l(p),p.forEach(g),m.forEach(g),f.forEach(g),this.h()},h(){w(i,"class","col buttons-container svelte-1wgbmj1"),w(s,"class","row"),w(e,"class","account-container svelte-1wgbmj1")},m(d,f){H(d,e,f),l&&l.m(e,null),y(e,t),y(e,s),y(s,i),u[r].m(i,null),a=!0},p(d,[f]){d[2]===null?l?(l.p(d,f),f&4&&A(l,1)):(l=du(d),l.c(),A(l,1),l.m(e,t)):l&&(lt(),P(l,1,1,()=>{l=null}),ct());let m=r;r=h(d),r===m?u[r].p(d,f):(lt(),P(u[m],1,1,()=>{u[m]=null}),ct(),o=u[r],o?o.p(d,f):(o=u[r]=c[r](d),o.c()),A(o,1),o.m(i,null))},i(d){a||(A(l),A(o),a=!0)},o(d){P(l),P(o),a=!1},d(d){d&&g(e),l&&l.d(),u[r].d()}}}function tE(n,e,t){const s=Vt.make();let i="",r="",o=s.currentUser;const a=()=>{t(2,o=s.currentUser)},l=()=>{t(0,i=""),t(1,r="")},c=p=>{console.error("handleAuthErr",{e:p});let S="Something went wrong trying to authenticate";p instanceof wt&&(["auth/user-not-found","auth/wrong-password","auth/email-already-exists"].includes(p.code)?S="Invalid email or password":p.code==="auth/invalid-email"?S="Please enter a valid email":p.code==="auth/weak-password"&&(S="Password too weak")),alert(S),l()},u=()=>{s.signUp(i,r).then(()=>{a(),l()}).catch(c)},h=()=>{s.signIn(i,r).then(()=>{a(),l()}).catch(c)},d=()=>{s.signOut().then(()=>a()).catch(c)};function f(p){i=p,t(0,i)}function m(p){r=p,t(1,r)}return[i,r,o,u,h,d,f,m]}class nE extends Oe{constructor(e){super(),$e(this,e,tE,eE,Le,{})}}function sE(n){let e,t,s,i,r,o,a=n[0]/1e3+"",l,c,u,h,d,f,m,p,S,k,U,Y,J,C,R,F,I,O,$,X,K,oe,q,ae,pe,D,G,L,De,Pe,Xe,Ze,et,tt,Fr,Vr,Yn,Br,Xn,zr,jr,bn,Jt,Jn,qr,Hr,Zn,Kr,es,Gr;return{c(){e=b("div"),t=b("p"),s=W("Select a note to edit or preview"),i=ie(),r=b("p"),o=W("Notes are saved automatically after "),l=W(a),c=W(" seconds of inactivity"),u=ie(),h=b("p"),d=W("Use the search bar to search by note title or tag"),f=ie(),m=b("p"),p=W("Use tags to group together notes"),S=ie(),k=b("h2"),U=W("Hotkeys"),Y=ie(),J=b("table"),C=b("thead"),R=b("tr"),F=b("th"),I=W("Key"),O=b("th"),$=W("Action"),X=ie(),K=b("tbody"),oe=b("tr"),q=b("td"),ae=b("kbd"),pe=W("Ctrl"),D=W(" + "),G=b("kbd"),L=W("e"),De=b("td"),Pe=W("Toggle edit pane"),Xe=ie(),Ze=b("tr"),et=b("td"),tt=b("kbd"),Fr=W("Ctrl"),Vr=W(" + "),Yn=b("kbd"),Br=W("r"),Xn=b("td"),zr=W("Toggle read pane"),jr=ie(),bn=b("tr"),Jt=b("td"),Jn=b("kbd"),qr=W("Ctrl"),Hr=W(" + "),Zn=b("kbd"),Kr=W("c"),es=b("td"),Gr=W("Create new note"),this.h()},l(Zt){e=E(Zt,"DIV",{class:!0});var Fe=T(e);t=E(Fe,"P",{class:!0});var gl=T(t);s=Q(gl,"Select a note to edit or preview"),gl.forEach(g),i=re(Fe),r=E(Fe,"P",{class:!0});var si=T(r);o=Q(si,"Notes are saved automatically after "),l=Q(si,a),c=Q(si," seconds of inactivity"),si.forEach(g),u=re(Fe),h=E(Fe,"P",{class:!0});var ml=T(h);d=Q(ml,"Use the search bar to search by note title or tag"),ml.forEach(g),f=re(Fe),m=E(Fe,"P",{class:!0});var yl=T(m);p=Q(yl,"Use tags to group together notes"),yl.forEach(g),S=re(Fe),k=E(Fe,"H2",{});var vl=T(k);U=Q(vl,"Hotkeys"),vl.forEach(g),Y=re(Fe),J=E(Fe,"TABLE",{class:!0});var ii=T(J);C=E(ii,"THEAD",{});var _l=T(C);R=E(_l,"TR",{});var Wr=T(R);F=E(Wr,"TH",{});var wl=T(F);I=Q(wl,"Key"),wl.forEach(g),O=E(Wr,"TH",{});var bl=T(O);$=Q(bl,"Action"),bl.forEach(g),Wr.forEach(g),_l.forEach(g),X=re(ii),K=E(ii,"TBODY",{});var En=T(K);oe=E(En,"TR",{});var Qr=T(oe);q=E(Qr,"TD",{});var ri=T(q);ae=E(ri,"KBD",{});var El=T(ae);pe=Q(El,"Ctrl"),El.forEach(g),D=Q(ri," + "),G=E(ri,"KBD",{});var Il=T(G);L=Q(Il,"e"),Il.forEach(g),ri.forEach(g),De=E(Qr,"TD",{});var kl=T(De);Pe=Q(kl,"Toggle edit pane"),kl.forEach(g),Qr.forEach(g),Xe=re(En),Ze=E(En,"TR",{});var Yr=T(Ze);et=E(Yr,"TD",{});var oi=T(et);tt=E(oi,"KBD",{});var Tl=T(tt);Fr=Q(Tl,"Ctrl"),Tl.forEach(g),Vr=Q(oi," + "),Yn=E(oi,"KBD",{});var Sl=T(Yn);Br=Q(Sl,"r"),Sl.forEach(g),oi.forEach(g),Xn=E(Yr,"TD",{});var Cl=T(Xn);zr=Q(Cl,"Toggle read pane"),Cl.forEach(g),Yr.forEach(g),jr=re(En),bn=E(En,"TR",{});var Xr=T(bn);Jt=E(Xr,"TD",{});var ai=T(Jt);Jn=E(ai,"KBD",{});var Al=T(Jn);qr=Q(Al,"Ctrl"),Al.forEach(g),Hr=Q(ai," + "),Zn=E(ai,"KBD",{});var Dl=T(Zn);Kr=Q(Dl,"c"),Dl.forEach(g),ai.forEach(g),es=E(Xr,"TD",{});var Rl=T(es);Gr=Q(Rl,"Create new note"),Rl.forEach(g),Xr.forEach(g),En.forEach(g),ii.forEach(g),Fe.forEach(g),this.h()},h(){w(t,"class","svelte-1v3i9m9"),w(r,"class","svelte-1v3i9m9"),w(h,"class","svelte-1v3i9m9"),w(m,"class","svelte-1v3i9m9"),w(J,"class","table"),w(e,"class","prompt svelte-1v3i9m9")},m(Zt,Fe){H(Zt,e,Fe),y(e,t),y(t,s),y(e,i),y(e,r),y(r,o),y(r,l),y(r,c),y(e,u),y(e,h),y(h,d),y(e,f),y(e,m),y(m,p),y(e,S),y(e,k),y(k,U),y(e,Y),y(e,J),y(J,C),y(C,R),y(R,F),y(F,I),y(R,O),y(O,$),y(J,X),y(J,K),y(K,oe),y(oe,q),y(q,ae),y(ae,pe),y(q,D),y(q,G),y(G,L),y(oe,De),y(De,Pe),y(K,Xe),y(K,Ze),y(Ze,et),y(et,tt),y(tt,Fr),y(et,Vr),y(et,Yn),y(Yn,Br),y(Ze,Xn),y(Xn,zr),y(K,jr),y(K,bn),y(bn,Jt),y(Jt,Jn),y(Jn,qr),y(Jt,Hr),y(Jt,Zn),y(Zn,Kr),y(bn,es),y(es,Gr)},p(Zt,[Fe]){Fe&1&&a!==(a=Zt[0]/1e3+"")&&_t(l,a)},i:We,o:We,d(Zt){Zt&&g(e)}}}function iE(n,e,t){let{SAVE_DELAY_MS:s=666}=e;return n.$$set=i=>{"SAVE_DELAY_MS"in i&&t(0,s=i.SAVE_DELAY_MS)},[s]}class rE extends Oe{constructor(e){super(),$e(this,e,iE,sE,Le,{SAVE_DELAY_MS:0})}}function oE(n){let e;return{c(){e=W("✏️")},l(t){e=Q(t,"✏️")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function aE(n){let e;return{c(){e=W("👁️")},l(t){e=Q(t,"👁️")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function lE(n){let e;return{c(){e=W("🏷️")},l(t){e=Q(t,"🏷️")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function cE(n){let e;return{c(){e=W("📌")},l(t){e=Q(t,"📌")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function uE(n){let e;return{c(){e=W("⚙️")},l(t){e=Q(t,"⚙️")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function hE(n){let e;return{c(){e=W("👤")},l(t){e=Q(t,"👤")},m(t,s){H(t,e,s)},d(t){t&&g(e)}}}function fu(n){let e,t,s;return t=new Rb({props:{tags:n[5],onChange:n[15]}}),{c(){e=b("div"),ue(t.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var r=T(e);he(t.$$.fragment,r),r.forEach(g),this.h()},h(){w(e,"class","tags-container mt-2")},m(i,r){H(i,e,r),de(t,e,null),s=!0},p(i,r){const o={};r[0]&32&&(o.tags=i[5]),t.$set(o)},i(i){s||(A(t.$$.fragment,i),s=!0)},o(i){P(t.$$.fragment,i),s=!1},d(i){i&&g(e),fe(t)}}}function pu(n){let e,t;return e=new rE({props:{SAVE_DELAY_MS:Mf}}),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},p:We,i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function gu(n){let e,t;return e=new nE({}),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function mu(n){let e,t;return e=new zb({}),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function yu(n){let e,t,s,i=n[7]&n[10].EDITOR&&vu(n),r=n[7]&n[10].PREVIEW&&_u(n);return{c(){i&&i.c(),e=ie(),r&&r.c(),t=Ri()},l(o){i&&i.l(o),e=re(o),r&&r.l(o),t=Ri()},m(o,a){i&&i.m(o,a),H(o,e,a),r&&r.m(o,a),H(o,t,a),s=!0},p(o,a){o[7]&o[10].EDITOR?i?(i.p(o,a),a[0]&128&&A(i,1)):(i=vu(o),i.c(),A(i,1),i.m(e.parentNode,e)):i&&(lt(),P(i,1,1,()=>{i=null}),ct()),o[7]&o[10].PREVIEW?r?(r.p(o,a),a[0]&128&&A(r,1)):(r=_u(o),r.c(),A(r,1),r.m(t.parentNode,t)):r&&(lt(),P(r,1,1,()=>{r=null}),ct())},i(o){s||(A(i),A(r),s=!0)},o(o){P(i),P(r),s=!1},d(o){i&&i.d(o),o&&g(e),r&&r.d(o),o&&g(t)}}}function vu(n){let e,t,s;function i(o){n[21](o)}let r={};return n[1]!==void 0&&(r.value=n[1]),e=new $b({props:r}),zt.push(()=>$n(e,"value",i)),{c(){ue(e.$$.fragment)},l(o){he(e.$$.fragment,o)},m(o,a){de(e,o,a),s=!0},p(o,a){const l={};!t&&a[0]&2&&(t=!0,l.value=o[1],Ln(()=>t=!1)),e.$set(l)},i(o){s||(A(e.$$.fragment,o),s=!0)},o(o){P(e.$$.fragment,o),s=!1},d(o){fe(e,o)}}}function _u(n){let e,t;return e=new Mb({props:{html:n[4]}}),{c(){ue(e.$$.fragment)},l(s){he(e.$$.fragment,s)},m(s,i){de(e,s,i),t=!0},p(s,i){const r={};i[0]&16&&(r.html=s[4]),e.$set(r)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function dE(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,m,p,S,k,U,Y,J,C,R,F,I,O,$,X;r=new qe({props:{disabled:n[2],active:vi(n[7],n[10].EDITOR),$$slots:{default:[oE]},$$scope:{ctx:n}}}),r.$on("click",n[16]),a=new qe({props:{disabled:n[2],active:vi(n[7],n[10].PREVIEW),$$slots:{default:[aE]},$$scope:{ctx:n}}}),a.$on("click",n[17]),c=new qe({props:{disabled:n[2],active:n[3]&&!n[2],$$slots:{default:[lE]},$$scope:{ctx:n}}}),c.$on("click",n[18]),h=new qe({props:{disabled:n[2],active:n[6],$$slots:{default:[cE]},$$scope:{ctx:n}}}),h.$on("click",n[14]),k=new qe({props:{active:n[7]===n[10].SETTINGS,disabled:n[9]===null,$$slots:{default:[uE]},$$scope:{ctx:n}}}),k.$on("click",n[19]),Y=new qe({props:{active:n[7]===n[10].ACCOUNT,$$slots:{default:[hE]},$$scope:{ctx:n}}}),Y.$on("click",n[20]);let K=n[3]&&fu(n),oe=n[7]===0&&pu(),q=n[7]===n[10].ACCOUNT&&gu(),ae=n[7]===n[10].SETTINGS&&mu(),pe=n[0]!==null&&yu(n);return{c(){e=b("div"),t=b("div"),s=b("div"),i=b("div"),ue(r.$$.fragment),o=ie(),ue(a.$$.fragment),l=ie(),ue(c.$$.fragment),u=ie(),ue(h.$$.fragment),d=ie(),f=b("div"),m=b("small"),p=W(n[8]),S=ie(),ue(k.$$.fragment),U=ie(),ue(Y.$$.fragment),J=ie(),C=b("div"),K&&K.c(),R=ie(),F=b("div"),oe&&oe.c(),I=ie(),q&&q.c(),O=ie(),ae&&ae.c(),$=ie(),pe&&pe.c(),this.h()},l(D){e=E(D,"DIV",{class:!0});var G=T(e);t=E(G,"DIV",{class:!0});var L=T(t);s=E(L,"DIV",{class:!0});var De=T(s);i=E(De,"DIV",{class:!0});var Pe=T(i);he(r.$$.fragment,Pe),o=re(Pe),he(a.$$.fragment,Pe),l=re(Pe),he(c.$$.fragment,Pe),u=re(Pe),he(h.$$.fragment,Pe),Pe.forEach(g),d=re(De),f=E(De,"DIV",{class:!0});var Xe=T(f);m=E(Xe,"SMALL",{});var Ze=T(m);p=Q(Ze,n[8]),Ze.forEach(g),S=re(Xe),he(k.$$.fragment,Xe),U=re(Xe),he(Y.$$.fragment,Xe),Xe.forEach(g),De.forEach(g),J=re(L),C=E(L,"DIV",{class:!0});var et=T(C);K&&K.l(et),et.forEach(g),L.forEach(g),R=re(G),F=E(G,"DIV",{class:!0});var tt=T(F);oe&&oe.l(tt),I=re(tt),q&&q.l(tt),O=re(tt),ae&&ae.l(tt),$=re(tt),pe&&pe.l(tt),tt.forEach(g),G.forEach(g),this.h()},h(){w(i,"class","buttons-container"),w(f,"class","buttons-container"),w(s,"class","buttons-bar svelte-euz89m"),w(C,"class","utility-bar svelte-euz89m"),w(t,"class","top-bar svelte-euz89m"),w(F,"class","content-container svelte-euz89m"),w(e,"class","wrapper svelte-euz89m")},m(D,G){H(D,e,G),y(e,t),y(t,s),y(s,i),de(r,i,null),y(i,o),de(a,i,null),y(i,l),de(c,i,null),y(i,u),de(h,i,null),y(s,d),y(s,f),y(f,m),y(m,p),y(f,S),de(k,f,null),y(f,U),de(Y,f,null),y(t,J),y(t,C),K&&K.m(C,null),y(e,R),y(e,F),oe&&oe.m(F,null),y(F,I),q&&q.m(F,null),y(F,O),ae&&ae.m(F,null),y(F,$),pe&&pe.m(F,null),X=!0},p(D,G){const L={};G[0]&4&&(L.disabled=D[2]),G[0]&128&&(L.active=vi(D[7],D[10].EDITOR)),G[1]&2&&(L.$$scope={dirty:G,ctx:D}),r.$set(L);const De={};G[0]&4&&(De.disabled=D[2]),G[0]&128&&(De.active=vi(D[7],D[10].PREVIEW)),G[1]&2&&(De.$$scope={dirty:G,ctx:D}),a.$set(De);const Pe={};G[0]&4&&(Pe.disabled=D[2]),G[0]&12&&(Pe.active=D[3]&&!D[2]),G[1]&2&&(Pe.$$scope={dirty:G,ctx:D}),c.$set(Pe);const Xe={};G[0]&4&&(Xe.disabled=D[2]),G[0]&64&&(Xe.active=D[6]),G[1]&2&&(Xe.$$scope={dirty:G,ctx:D}),h.$set(Xe),(!X||G[0]&256)&&_t(p,D[8]);const Ze={};G[0]&128&&(Ze.active=D[7]===D[10].SETTINGS),G[0]&512&&(Ze.disabled=D[9]===null),G[1]&2&&(Ze.$$scope={dirty:G,ctx:D}),k.$set(Ze);const et={};G[0]&128&&(et.active=D[7]===D[10].ACCOUNT),G[1]&2&&(et.$$scope={dirty:G,ctx:D}),Y.$set(et),D[3]?K?(K.p(D,G),G[0]&8&&A(K,1)):(K=fu(D),K.c(),A(K,1),K.m(C,null)):K&&(lt(),P(K,1,1,()=>{K=null}),ct()),D[7]===0?oe?(oe.p(D,G),G[0]&128&&A(oe,1)):(oe=pu(),oe.c(),A(oe,1),oe.m(F,I)):oe&&(lt(),P(oe,1,1,()=>{oe=null}),ct()),D[7]===D[10].ACCOUNT?q?G[0]&128&&A(q,1):(q=gu(),q.c(),A(q,1),q.m(F,O)):q&&(lt(),P(q,1,1,()=>{q=null}),ct()),D[7]===D[10].SETTINGS?ae?G[0]&128&&A(ae,1):(ae=mu(),ae.c(),A(ae,1),ae.m(F,$)):ae&&(lt(),P(ae,1,1,()=>{ae=null}),ct()),D[0]!==null?pe?(pe.p(D,G),G[0]&1&&A(pe,1)):(pe=yu(D),pe.c(),A(pe,1),pe.m(F,null)):pe&&(lt(),P(pe,1,1,()=>{pe=null}),ct())},i(D){X||(A(r.$$.fragment,D),A(a.$$.fragment,D),A(c.$$.fragment,D),A(h.$$.fragment,D),A(k.$$.fragment,D),A(Y.$$.fragment,D),A(K),A(oe),A(q),A(ae),A(pe),X=!0)},o(D){P(r.$$.fragment,D),P(a.$$.fragment,D),P(c.$$.fragment,D),P(h.$$.fragment,D),P(k.$$.fragment,D),P(Y.$$.fragment,D),P(K),P(oe),P(q),P(ae),P(pe),X=!1},d(D){D&&g(e),fe(r),fe(a),fe(c),fe(h),fe(k),fe(Y),K&&K.d(),oe&&oe.d(),q&&q.d(),ae&&ae.d(),pe&&pe.d()}}}const Mf=666;function fE(n,e,t){let s;sr(n,mn,L=>t(9,s=L));const i=Lt(),r=Lt(),o=Lt(),a=Lt(),l=async()=>{s!==null&&a("noteCreated",{title:`Note ${hl()}`})};let{note:c=null}=e,u="",h="",d=[],f=(c==null?void 0:c.pinned)??!1;ps.subscribe(L=>{for(const De of L)De.uid===(c==null?void 0:c.uid)&&t(6,f=De.pinned)});let m=null;const p=()=>{if(m===null)throw new Error("DOMParser not initialised");return m};On(()=>{m=new DOMParser});const S=L=>{t(1,u=(L==null?void 0:L.content)??""),t(4,h=B(u)),t(5,d=(L==null?void 0:L.tags)??[]),!(R&8)&&!(R&4)&&t(7,R=8+4),t(6,f=(L==null?void 0:L.pinned)??!1)},k=()=>{D0("save",()=>{c!==null&&(t(0,c.content=u,c),t(0,c.title=R0(p(),c,h),c),o("noteContentChanged",{note:c}))},Mf)};var U=(L=>(L[L.ACCOUNT=1]="ACCOUNT",L[L.SETTINGS=2]="SETTINGS",L[L.EDITOR=4]="EDITOR",L[L.PREVIEW=8]="PREVIEW",L))(U||{});const Y=()=>{t(7,R&=-3),t(7,R&=-2)},J=()=>{Y(),t(7,R=R^8)},C=()=>{Y(),t(7,R=R^4)};On(()=>{document.addEventListener("keydown",L=>{F||(L.ctrlKey&&L.key==="e"&&(L.preventDefault(),C()),L.ctrlKey&&L.key==="r"&&(L.preventDefault(),J()),L.ctrlKey&&L.key==="c"&&(L.preventDefault(),l()))})});let R=1,F=!1;const I=()=>{t(2,F=c===null||s===null)};let O="";mn.subscribe(L=>{console.log("Right.svelte user.subscribe",{user:L}),t(8,O=N0(L)),t(7,R=L===null?1:4+8),I()});const $=()=>{c!==null&&i("notePinned",{note:c})};let X=!1;const K=L=>{c!==null&&(t(0,c.tags=L,c),r("noteTagsChanged",{note:c}))},oe=()=>{Y(),C()},q=()=>{Y(),J()},ae=()=>{t(3,X=!X)},pe=()=>{t(7,R=U.SETTINGS)},D=()=>{t(7,R=U.ACCOUNT)};function G(L){u=L,t(1,u)}return n.$$set=L=>{"note"in L&&t(0,c=L.note)},n.$$.update=()=>{n.$$.dirty[0]&1&&(S(c),I()),n.$$.dirty[0]&2&&(t(4,h=B(u)),k()),n.$$.dirty[0]&12&&F===!0&&X===!0&&t(3,X=!1)},[c,u,F,X,h,d,f,R,O,s,U,Y,J,C,$,K,oe,q,ae,pe,D,G]}class pE extends Oe{constructor(e){super(),$e(this,e,fE,dE,Le,{note:0},null,[-1,-1])}}function gE(n){let e,t,s,i,r,o,a;return s=new rb({props:{notes:n[1],selectedNote:n[0]}}),s.$on("noteDeleted",n[3]),s.$on("noteSelected",n[2]),s.$on("noteUnpinned",n[5]),s.$on("noteCreated",n[6]),o=new pE({props:{note:n[0]}}),o.$on("notePinned",n[4]),o.$on("noteTagsChanged",n[7]),o.$on("noteContentChanged",n[7]),o.$on("noteCreated",n[6]),{c(){e=b("div"),t=b("div"),ue(s.$$.fragment),i=ie(),r=b("div"),ue(o.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var c=T(e);t=E(c,"DIV",{class:!0});var u=T(t);he(s.$$.fragment,u),u.forEach(g),i=re(c),r=E(c,"DIV",{class:!0});var h=T(r);he(o.$$.fragment,h),h.forEach(g),c.forEach(g),this.h()},h(){w(t,"class","left-container svelte-10i16dg"),w(r,"class","right-container svelte-10i16dg"),w(e,"class","wrapper svelte-10i16dg")},m(l,c){H(l,e,c),y(e,t),de(s,t,null),y(e,i),y(e,r),de(o,r,null),a=!0},p(l,[c]){const u={};c&2&&(u.notes=l[1]),c&1&&(u.selectedNote=l[0]),s.$set(u);const h={};c&1&&(h.note=l[0]),o.$set(h)},i(l){a||(A(s.$$.fragment,l),A(o.$$.fragment,l),a=!0)},o(l){P(s.$$.fragment,l),P(o.$$.fragment,l),a=!1},d(l){l&&g(e),fe(s),fe(o)}}}function mE(n,e,t){let s;sr(n,mn,f=>t(8,s=f));const i=Vt.make();let r=null;const o=f=>{r&&r.uid===f.detail.note.uid||t(0,r=f.detail.note)},a=f=>{s!==null&&i.deleteUserNote(s,f.detail.note).then(()=>t(0,r=null)).catch(console.error)},l=f=>{if(s===null)return;const m=f.detail.note;m.pinned=!0,i.updateUserNote(s,m).catch(console.error)},c=f=>{if(s===null)return;const m=f.detail.note;m.pinned=!1,i.updateUserNote(s,m)},u=f=>{if(s===null)return;const m=f.detail.title,p=[`# ${m}`,"## Subheader","Some regular text!"].join(`\r
\r
`);i.createUserNote(s,m,p).catch(console.error)},h=f=>{s!==null&&i.updateUserNote(s,f.detail.note).catch(console.error)};let d=[];return ps.subscribe(f=>{t(1,d=f)}),[r,d,o,a,l,c,u,h]}class bE extends Oe{constructor(e){super(),$e(this,e,mE,gE,Le,{})}}export{bE as default};
