(function(t){function e(e){for(var r,o,c=e[0],u=e[1],i=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var u=a[c];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"25ea":function(t,e,a){"use strict";a("62d9")},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4");var r=a("c1df"),n=a.n(r),s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("quotes-page")},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("TheNavMenu"),a("TheModalAddQuote"),a("v-main",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.preloader,expression:"preloader"}],staticClass:"progress-wrap"},[a("v-progress-circular",{attrs:{size:70,color:"primary",indeterminate:""}})],1),a("router-view")],1),a("v-footer",{attrs:{color:"indigo",app:""}},[a("span",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])])],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-toolbar-title",[a("router-link",{attrs:{to:{name:"QuoteList"}}},[t._v(" Цитаты ")])],1),a("v-spacer"),a("v-btn",{on:{click:t.openModal}},[t._v(" Опубликовать цитату ")])],1)],1)},d=[],f={data:function(){return{drawer:!1,group:null}},methods:{openModal:function(){this.$store.commit("modalAddQuote")},createTag:function(){this.$store.dispatch("tags/createTag")}}},p=f,g=(a("f4b6"),a("2877")),b=a("6544"),m=a.n(b),h=a("40dc"),v=a("8336"),j=a("2fa4"),x=a("2a7f"),_=Object(g["a"])(p,l,d,!1,null,"2978c542",null),w=_.exports;m()(_,{VAppBar:h["a"],VBtn:v["a"],VSpacer:j["a"],VToolbarTitle:x["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Опубликовать цитату")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"auto-grow":"",name:"input-7-1",label:"Текст цитаты*",rows:"4","error-messages":t.errors.text},on:{input:function(e){return t.validate({text:t.quote_data.text})}},model:{value:t.quote_data.text,callback:function(e){t.$set(t.quote_data,"text",e)},expression:"quote_data.text"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Автор*",required:"","error-messages":t.errors.author},on:{input:function(e){return t.validate({author:t.quote_data.author})}},model:{value:t.quote_data.author,callback:function(e){t.$set(t.quote_data,"author",e)},expression:"quote_data.author"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:t.tags,label:"Теги*",multiple:"",counter:"3","error-messages":t.errors.tags},on:{change:function(e){return t.validate({tags:t.quote_data.tags})}},model:{value:t.quote_data.tags,callback:function(e){t.$set(t.quote_data,"tags",e)},expression:"quote_data.tags"}})],1)],1)],1),a("small",[t._v("*Обязательные поля")])],1),a("v-card-actions",{staticClass:"pb-5"},[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:t.closeModal}},[t._v(" Закрыть ")]),a("v-btn",{attrs:{color:"success",disabled:t.disabled},on:{click:t.saveQuote}},[t._v(" Сохранить ")])],1)],1)],1)},y=[],q=a("1da1"),C=(a("159b"),a("b64b"),a("96cf"),{data:function(){return{disabled:!1,quote_data:{text:"",author:"",tags:""},errors:{text:"",author:"",tags:""}}},props:{callModal:{default:!1}},computed:{tags:function(){return this.$store.getters["tags/getTags"]},dialog:function(){return this.$store.getters.getDialog}},methods:{closeModal:function(){this.$store.commit("modalAddQuote")},saveQuote:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.quote_data,r=t.validate(a),!r){e.next=18;break}return t.disabled=!0,e.next=6,t.$store.dispatch("quotes/createQuote",t.quote_data);case 6:if(n=e.sent,n.success&&(t.quote_data.author="",t.quote_data.text="",t.quote_data.tags=""),"/"!==t.$route.path){e.next=14;break}if(!t.$route.query.page){e.next=12;break}return e.next=12,t.$router.push("/");case 12:e.next=16;break;case 14:return e.next=16,t.$router.push("/");case 16:t.disabled=!1,t.closeModal();case 18:case"end":return e.stop()}}),e)})))()},validate:function(t){var e=this,a=!0;return Object.keys(t).forEach((function(r){switch(t[r]){case"":e.errors[r]="Обязательно для заполнения!",a=!1;break;default:e.errors[r]="";break}"text"===r&&t[r].length<20&&""!==t[r]&&(e.errors[r]="Минимальное количество символов 20!",a=!1),"author"===r&&t[r].length<3&&""!==t[r]&&(e.errors[r]="Минимальное количество символов 3!",a=!1),"author"===r&&t[r].length>19&&""!==t[r]&&(e.errors[r]="Максимальное количество символов 19!",a=!1),"tags"!==r||0!==t[r].length&&""!==t[r]||(e.errors[r]="Нужно выбрать хотя-бы 1 тег!",a=!1),"tags"===r&&t[r].length>3&&0!==t[r].length&&(e.errors[r]="Максимальное количество тегов 3!",a=!1)})),a}},beforeMount:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("tags/getTags");case 2:case"end":return e.stop()}}),e)})))()}}),V=C,Q=a("c6a6"),$=a("b0af"),O=a("99d9"),P=a("62ad"),T=a("a523"),R=a("169a"),z=a("0fd9"),M=a("8654"),A=a("a844"),S=Object(g["a"])(V,k,y,!1,null,"44ea9dc5",null),D=S.exports;m()(S,{VAutocomplete:Q["a"],VBtn:v["a"],VCard:$["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VCol:P["a"],VContainer:T["a"],VDialog:R["a"],VRow:z["a"],VSpacer:j["a"],VTextField:M["a"],VTextarea:A["a"]});var E={props:{source:String},data:function(){return{drawer:!1,dialog:!1}},computed:{preloader:function(){return this.$store.state.preloader}},components:{TheNavMenu:w,TheModalAddQuote:D},mounted:function(){console.log("http://quote-laravel-vue.local/api/")}},L=E,N=(a("25ea"),a("7496")),U=a("553a"),F=a("f6c4"),Y=a("490a"),B=Object(g["a"])(L,u,i,!1,null,null,null),G=B.exports;m()(B,{VApp:N["a"],VFooter:U["a"],VMain:F["a"],VProgressCircular:Y["a"]});var J={components:{QuotesPage:G}},H=J,I=Object(g["a"])(H,o,c,!1,null,null,null),K=I.exports,W=a("8c4f"),X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.quote&&404===t.quote.status?a("p",{staticClass:"text-h3 error--text text-center mt-5"},[t._v(" Цитата не найдена! ")]):t.quote?a("v-row",{staticClass:"justify-center",attrs:{dense:"",justify:"start",align:"start",wrap:"wrap"}},[a("v-col",{staticClass:"mt-2 mb-2",attrs:{cols:"12",sm:"6",lg:"4"}},[a("v-card",{staticClass:"d-flex justify-center flex-column align-center",attrs:{color:"#26c6da"}},[a("v-card-text",{staticClass:"headline white--text font-weight-bold"},[t._v(' " '+t._s(t.quote.text)+' " ')]),a("v-card-text",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"text--primary mb-1"},[t._v(" Автор: ")]),a("p",{staticClass:"text-h6 text--primary mb-0"},[t._v(" "+t._s(t.quote.author)+" ")])]),t.quote.tags.length?a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"text--primary mb-1"},[t._v(" Теги: ")]),a("v-flex",t._l(t.quote.tags,(function(e){return a("v-chip",{key:e.id,staticClass:"ma-2"},[t._v(" "+t._s(e.title)+" ")])})),1)],1):t._e(),a("v-card-text",[a("p",{staticClass:"text--primary text-date"},[t._v(" Дата создания - "),a("span",[t._v(t._s(t._f("covertTimestampToDate")(t.quote.created_at)))])])])],1)],1)],1):t._e()},Z=[],tt={computed:{quote:function(){return this.$store.getters["quotes/getQuote"]}},mounted:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("quotes/getQuote",t.$route.params.id);case 2:case"end":return e.stop()}}),e)})))()}},et=tt,at=(a("71f7"),a("cc20")),rt=a("0e8f"),nt=Object(g["a"])(et,X,Z,!1,null,"ed75506a",null),st=nt.exports;m()(nt,{VCard:$["a"],VCardText:O["b"],VChip:at["a"],VCol:P["a"],VFlex:rt["a"],VRow:z["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.quotes?a("v-container",[a("v-row",{attrs:{dense:"",justify:"start",align:"start",wrap:"wrap"}},t._l(t.quotes.data,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"6",mb:"4",xl:"3",lg:"3"}},[a("v-card",{attrs:{color:"#26c6da"}},[a("v-card-text",{staticClass:"headline white--text font-weight-bold"},[t._v(' "'+t._s(t._f("maxLengthText")(e.text))+'" ')]),a("v-card-text",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"text--primary mb-1"},[t._v(" Автор: ")]),a("p",{staticClass:"text-h6 text--primary mb-0"},[t._v(" "+t._s(e.author)+" ")])]),e.tags.length?a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"text--primary mb-1"},[t._v(" Теги: ")]),a("v-flex",t._l(e.tags,(function(e){return a("v-chip",{key:e.id,staticClass:"ma-2"},[t._v(" "+t._s(e.title)+" ")])})),1)],1):t._e(),a("v-card-text",[a("p",{staticClass:"text--primary text-date"},[t._v(" Дата создания - "),a("span",[t._v(t._s(t._f("covertTimestampToDate")(e.created_at)))])])]),a("v-card-actions",[a("v-layout",[a("v-flex",{staticClass:"text-center",attrs:{"justify-center":""}},[a("router-link",{staticClass:"link-btn",attrs:{to:{name:"Quote",params:{id:e.id}}}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"success"},on:{click:function(e){t.loader="loading"}},scopedSlots:t._u([{key:"loader",fn:function(){return[a("span",[t._v("Loading...")])]},proxy:!0}],null,!0)},[t._v(" Смотреть цитату ")])],1)],1)],1)],1)],1)],1)})),1),t.lengthPage>1?a("div",{staticClass:"pagination-wrap text-center"},[a("v-pagination",{attrs:{length:t.lengthPage,"total-visible":5},on:{input:t.paginate},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1):t._e()},ct=[],ut=(a("fb6a"),a("a9e3"),{data:function(){return{loader:null,loading:!1,page:null}},computed:{quotes:function(){return this.$store.getters["quotes/getQuotes"]},lengthPage:function(){return this.$store.getters["quotes/getQuotes"].last_page},currentPage:function(){return this.$route.query.page}},filters:{maxLengthText:function(t){var e=85;return t.length>e?"".concat(t.slice(0,e),"..."):t}},methods:{paginate:function(t){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.$route.query.page||Number(e.$route.query.page)!==t){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,e.$router.push({query:{page:t}});case 4:return a.next=6,e.$store.dispatch("quotes/getQuotes",t);case 6:case"end":return a.stop()}}),a)})))()},getQuotes:function(){this.$store.dispatch("quotes/getQuotes"),this.currentPage?this.page=Number(this.currentPage):this.page=1}},watch:{$route:function(t){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.query.page){a.next=4;break}return e.$store.commit("quotes/setCurrentPage",null),a.next=4,e.getQuotes();case 4:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getQuotes();case 2:case"end":return e.stop()}}),e)})))()}}),it=ut,lt=(a("625f"),a("a722")),dt=a("891e"),ft=Object(g["a"])(it,ot,ct,!1,null,"b87d5124",null),pt=ft.exports;m()(ft,{VBtn:v["a"],VCard:$["a"],VCardActions:O["a"],VCardText:O["b"],VChip:at["a"],VCol:P["a"],VContainer:T["a"],VFlex:rt["a"],VLayout:lt["a"],VPagination:dt["a"],VRow:z["a"]}),s["a"].use(W["a"]);var gt=[{path:"/quote-:id",name:"Quote",component:st},{path:"/:page?",name:"QuoteList",component:pt}],bt=new W["a"]({mode:"history",base:"/",routes:gt}),mt=bt,ht=a("2f62"),vt=a("bc3a"),jt=a.n(vt),xt={namespaced:!0,state:{tags:null},getters:{getTags:function(t){return t.tags}},mutations:{setTags:function(t,e){t.tags=e}},actions:{getTags:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=t.rootState,e.next=3,jt.a.get("".concat(r.api_url,"tags")).then((function(t){var e=t.data,r=[];return e&&e.forEach((function(t){r.push({text:t.title,value:t.id})})),a("setTags",r),t.data})).catch((function(t){return console.log(t,"error"),t}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()}}},_t=(a("99af"),{namespaced:!0,state:{quote:null,quotes:null,currentPage:null},getters:{getQuotes:function(t){return t.quotes},getQuote:function(t){return t.quote},getCurrentPage:function(t){return t.currentPage}},mutations:{setQuotes:function(t,e){t.quotes=e},setQuote:function(t,e){t.quote=e},setCurrentPage:function(t,e){t.currentPage=e}},actions:{createQuote:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function a(){var r,n,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.rootGetters,n=t.dispatch,s=t.commit,s("setPreloader",!0,{root:!0}),a.next=4,jt.a.post("".concat(r.getApiUrl,"quotes/create"),e).then((function(t){return n("getQuotes"),t.data})).catch((function(t){return console.log(t,"error"),t}));case 4:return o=a.sent,a.abrupt("return",o);case 6:case"end":return a.stop()}}),a)})))()},getQuote:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.commit,n=t.rootGetters,r("setPreloader",!0,{root:!0}),r("setQuote",null),s="".concat(n.getApiUrl,"quotes/").concat(e),a.next=6,jt.a.get(s).then((function(t){return r("setQuote",t.data),t})).catch((function(t){return r("setQuote",t.response),t.response}));case 6:r("setPreloader",!1,{root:!0});case 7:case"end":return a.stop()}}),a)})))()},getQuotes:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=t.getters,n=t.dispatch,s=t.rootGetters,a("setQuotes",null),a("setPreloader",!0,{root:!0}),n("checkAndSetCurrentPage"),o="".concat(s.getApiUrl,"quotes"),c=r.getCurrentPage,c&&(o="".concat(s.getApiUrl,"quotes?page=").concat(c)),e.next=9,jt.a.get(o).then((function(t){var e=t.data;return a("setQuotes",e),t.data})).catch((function(t){return console.log(t,"error"),t}));case 9:return u=e.sent,a("setPreloader",!1,{root:!0}),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))()},checkAndSetCurrentPage:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,r=mt.currentRoute.query.page,r&&a("setCurrentPage",r);case 3:case"end":return e.stop()}}),e)})))()}}});s["a"].use(ht["a"]);var wt=new ht["a"].Store({state:{api_url:"http://quote-laravel-vue.local/api/",dialog:!1,preloader:!1},getters:{getDialog:function(t){return t.dialog},getApiUrl:function(t){return t.api_url}},mutations:{modalAddQuote:function(t){t.dialog=!t.dialog},setPreloader:function(t,e){t.preloader=e}},actions:{},modules:{tags:xt,quotes:_t}}),kt=a("f309");s["a"].use(kt["a"]);var yt=new kt["a"]({});s["a"].config.productionTip=!1,s["a"].filter("covertTimestampToDate",(function(t){return n()(t).format("DD.MM.YYYY")})),new s["a"]({router:mt,store:wt,vuetify:yt,render:function(t){return t(K)}}).$mount("#app")},"5b8f":function(t,e,a){},"625f":function(t,e,a){"use strict";a("5b8f")},"62d9":function(t,e,a){},"71f7":function(t,e,a){"use strict";a("acd4")},acd4:function(t,e,a){},b9e0:function(t,e,a){},f4b6:function(t,e,a){"use strict";a("b9e0")}});
//# sourceMappingURL=app.880ef68e.js.map