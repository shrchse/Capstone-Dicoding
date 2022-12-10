/*! For license information please see 503.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcapstone=self.webpackChunkcapstone||[]).push([[503],{503:(e,t,a)=>{a.d(t,{ZF:()=>n.ZF});var n=a(238);(0,n.KN)("firebase","9.14.0","app")},238:(e,t,a)=>{a.d(t,{KN:()=>w,ZF:()=>v});var n=a(463),i=a(333),r=a(444),s=a(424);class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",h="0.8.4",l=new i.Yd("@firebase/app"),d={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,f=new Map;function g(e,t){try{e.container.addComponent(t)}catch(a){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function u(e){const t=e.name;if(f.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;f.set(t,e);for(const t of p.values())g(t,e);return!0}const m=new r.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});class b{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw m.create("app-deleted",{appName:this._name})}}function v(e,t={}){let a=e;"object"!=typeof t&&(t={name:t});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw m.create("bad-app-name",{appName:String(s)});if(a||(a=(0,r.aH)()),!a)throw m.create("no-options");const o=p.get(s);if(o){if((0,r.vZ)(a,o.options)&&(0,r.vZ)(i,o.config))return o;throw m.create("duplicate-app",{appName:s})}const c=new n.H0(s);for(const e of f.values())c.addComponent(e);const h=new b(a,i,c);return p.set(s,h),h}function w(e,t,a){var i;let r=null!==(i=d[e])&&void 0!==i?i:e;a&&(r+=`-${a}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}u(new n.wA(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}const I="firebase-heartbeat-store";let E=null;function _(){return E||(E=(0,s.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(I)}}).catch((e=>{throw m.create("idb-open",{originalErrorMessage:e.message})}))),E}async function C(e,t){var a;try{const a=(await _()).transaction(I,"readwrite"),n=a.objectStore(I);return await n.put(t,D(e)),a.done}catch(e){if(e instanceof r.ZR)l.warn(e.message);else{const t=m.create("idb-set",{originalErrorMessage:null===(a=e)||void 0===a?void 0:a.message});l.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}class y{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new S(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=O(),{heartbeatsToSend:t,unsentEntries:a}=function(e,t=1024){const a=[];let n=e.slice();for(const i of e){const e=a.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),L(a)>t){e.dates.pop();break}}else if(a.push({agent:i.agent,dates:[i.date]}),L(a)>t){a.pop();break}n=n.slice(1)}return{heartbeatsToSend:a,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,r.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function O(){return(new Date).toISOString().substring(0,10)}class S{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(e){var t;try{return(await _()).transaction(I).objectStore(I).get(D(e))}catch(e){if(e instanceof r.ZR)l.warn(e.message);else{const a=m.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});l.warn(a.message)}}}(this.app)||{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return C(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function L(e){return(0,r.L)(JSON.stringify({version:2,heartbeats:e})).length}u(new n.wA("platform-logger",(e=>new o(e)),"PRIVATE")),u(new n.wA("heartbeat",(e=>new y(e)),"PRIVATE")),w(c,h,""),w(c,h,"esm2017"),w("fire-js","")},463:(e,t,a)=>{a.d(t,{H0:()=>o,wA:()=>i});var n=a(444);class i{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const r="[DEFAULT]";class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&e.resolve(a)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(a)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:a})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:a});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[e,t]of this.instancesDeferred.entries())a===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var a;const n=this.normalizeInstanceIdentifier(t),i=null!==(a=this.onInitCallbacks.get(n))&&void 0!==a?a:new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const n of a)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===r?void 0:n),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch(e){}var n;return a||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:(e,t,a)=>{a.d(t,{Yd:()=>h});const n=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const r={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,o={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...a)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),i=o[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...a)};class h{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
//# sourceMappingURL=503.bundle.js.map