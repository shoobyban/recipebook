(function(e){function t(t){for(var o,i,a=t[0],c=t[1],l=t[2],g=0,d=[];g<a.length;g++)i=a[g],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"429e":function(e,t,n){"use strict";var o=n("8ed3"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"app"},a=i,c=(n("034f"),n("2877")),l=Object(c["a"])(a,r,s,!1,null,null,null),u=l.exports,g=n("5f5b"),d=n("b1e0"),f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),n("router-link",{attrs:{to:"/logout"}},[e._v("Logout")])],1),e.isMobile()?n("b-row",[e.selected.title?e._e():n("b-col",{staticClass:"scroll",attrs:{sm:"4"}},e._l(e.resultQuery,(function(t,o){return n("div",{key:o,staticClass:"listitem",on:{click:function(n){e.selected=t}}},[t.image?n("img",{attrs:{src:"data:image/png;base64,"+t.image}}):n("img",{attrs:{width:"44",height:"44"}}),e._v(" "+e._s(t.title)+" ")])})),0),e.selected.title?n("b-col",{staticClass:"scroll",attrs:{sm:"8"}},[e.isMobile()?n("b-button",{on:{click:function(t){e.selected={}}}},[e._v("Back")]):e._e(),n("h1",[e._v(e._s(e.selected.title))]),n("p",{domProps:{innerHTML:e._s(e.nl2br(e.selected.body))}})],1):e._e()],1):n("b-row",[n("b-col",{staticClass:"scroll",attrs:{sm:"5"}},e._l(e.resultQuery,(function(t,o){return n("div",{key:o,staticClass:"listitem",on:{click:function(n){e.selected=t}}},[t.image?n("img",{attrs:{src:"data:image/png;base64,"+t.image}}):n("img",{attrs:{width:"44",height:"44",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="}}),e._v(" "+e._s(t.title)+" ")])})),0),e.selected.title?n("b-col",{staticClass:"scroll",attrs:{sm:"7"}},[e.isMobile()?n("b-button",{on:{click:function(t){e.selected={}}}},[e._v("Back")]):e._e(),n("h1",[e._v(e._s(e.selected.title))]),n("p",{domProps:{innerHTML:e._s(e.nl2br(e.selected.body))}})],1):e._e()],1)],1)},h=[],m=(n("a623"),n("4de4"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("1276"),{cognitoInfo:{},token:"",loggedIn:!1,loadingState:!0,errorLoadingState:!1});function b(e){m.loggedIn=e}function v(){m.loggedIn=!1,m.token="",m.cognitoInfo={},console.log("saved lo",m),localStorage.setItem("recipelogin",JSON.stringify(m))}function y(e){m.cognitoInfo=e}function w(e){m.token=e,console.log("saved token",m),localStorage.setItem("recipelogin",JSON.stringify(m))}function A(){m=JSON.parse(localStorage.getItem("recipelogin")),console.log("loaded",m)}function I(){return m.token}var _={state:m,setLoggedIn:b,setLoggedOut:v,setCognitoInfo:y,setToken:w,getToken:I,load:A},k=n("bc3a"),S=n.n(k),O={name:"Home",methods:{nl2br:function(e){return"<"==e[0]?e:e.replace(/\n+/g,"<br/>\n")},isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},computed:{resultQuery:function(){var e=this;return this.searchQuery?this.recipes.filter((function(t){return e.searchQuery.toLowerCase().split(" ").every((function(e){return t.title.toLowerCase().includes(e)||t.body.toLowerCase().includes(e)}))})):this.recipes}},data:function(){return{userInfo:{},searchQuery:"",selected:{},recipes:[]}},mounted:function(){var e=this;_.load(),this.userInfo=_.getToken(),console.log("auth token:",_.getToken()),S.a.get("https://p4z8g78mya.execute-api.eu-west-2.amazonaws.com/prod/recipes",{headers:{Authorization:_.getToken(),"Content-Type":"application/json"}}).then((function(t){e.recipes=t.data})).catch((function(e){console.log("error",e)}))}},C=O,T=(n("429e"),Object(c["a"])(C,p,h,!1,null,"2fecf01d",null)),P=T.exports,L=n("0a89"),U={getUserInfo:function(){var e=R.auth.getSignInUserSession().getAccessToken().jwtToken,t="https://"+R.auth.getAppWebDomain()+"/oauth2/userInfo",n={headers:{Authorization:"Bearer "+e}};return S.a.get(t,n).then((function(e){return e.data}))}},j="60bf861o2iqcauorgqq7t5dkl1",E="cognito-idp.eu-west-2.amazonaws.com",x="https://wizguild.com/recipebook/login/oauth2/code/cognito",M="eu-west-2_KmsrwWT9b",Q="https://wizguild.com/recipebook/logout",B={ClientId:j,AppWebDomain:E,TokenScopesArray:["openid","email"],RedirectUriSignIn:x,RedirectUriSignOut:Q,UserPoolId:M},N=new L["a"](B);function q(){var e="CognitoIdentityServiceProvider."+N.getClientId(),t=N.signInUserSession.getAccessToken().getUsername();console.log("TOKEN:",N.signInUserSession.getAccessToken().getJwtToken());var n=e+"."+t+".userInfo";return n}N.userhandler={onSuccess:function(e){console.log("On Success result",e),_.setLoggedIn(!0),_.setToken(e.getAccessToken().getJwtToken()),U.getUserInfo().then((function(e){ne.push("/")}))},onFailure:function(e){_.setLoggedOut(),ne.go({path:"/error",query:{message:"Login failed due to "+e}})}};var z=new L["b"],J=z.getStorage(),R={auth:N,login:function(){N.getSession()},logout:function(){if(N.isUserSignedIn()){var e=this.getUserInfoStorageKey();N.signOut(),J.removeItem(e)}},getUserInfoStorageKey:q},K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h2",[e._v("Logged Out successfully")]),n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)])},$=[],H={mounted:function(){}},D=H,W=Object(c["a"])(D,K,$,!1,null,null,null),V=W.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.message)+" ")])},F=[],X={data:function(){return{message:""}},mounted:function(){this.message=this.$route.query.message}},Y=X,Z=Object(c["a"])(Y,G,F,!1,null,null,null),ee=Z.exports;function te(e,t,n){R.auth.isUserSignedIn()?U.getUserInfo().then((function(e){console.log("LOGIN RESPONSE",e),_.setLoggedIn(!0),_.setCognitoInfo(e),n()})):(_.setLoggedIn(!1),n({path:"/login",query:{redirect:e.fullPath}}))}o["default"].use(f["a"]);var ne=new f["a"]({mode:"history",base:"/recipebook",routes:[{path:"/",name:"Home",component:P,beforeEnter:te},{path:"/login",beforeEnter:function(e,t,n){R.auth.getSession()}},{path:"/login/oauth2/code/cognito",beforeEnter:function(e,t,n){var o=window.location.href;R.auth.parseCognitoWebResponse(o)}},{path:"/logout",component:V,beforeEnter:function(e,t,n){R.logout(),n()}},{path:"/error",component:ee}]});n("f9e3"),n("2dd8");o["default"].use(g["a"]),o["default"].use(d["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(u)},router:ne}).$mount("#app")},"85ec":function(e,t,n){},"8ed3":function(e,t,n){}});
//# sourceMappingURL=app.afc26f43.js.map