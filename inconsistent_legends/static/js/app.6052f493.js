(function(e){function t(t){for(var a,c,l=t[0],i=t[1],s=t[2],b=0,d=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4791:function(e,t,n){"use strict";n("6d7b")},"4f52":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("79c4");function o(e,t,n,o,r,c){const l=Object(a["T"])("router-view");return Object(a["M"])(),Object(a["l"])(l,null,{default:Object(a["ib"])(({Component:e})=>[(Object(a["M"])(),Object(a["l"])(a["c"],null,[(Object(a["M"])(),Object(a["l"])(Object(a["V"])(e)))],1024))]),_:1})}var r=n("b082"),c=(n("a881"),n("b754"));const l=function(e){if(void 0==e||""==e)return"";new Date(e);return new Date(e)},i=function(e){return void 0==e||""==e?"":String(e.getFullYear())+"."+String(e.getMonth()+1)+"."+String(e.getDate())},s=function(){let e=document.documentElement.clientWidth,t=Math.min(document.body.clientHeight,9*e/16);e=16*t/9;let n={width:e,height:t};return n},u={"会议单位":["M5.17957 0.379941L0.529571 3.73994C-0.000428975 4.12994 0.269571 4.96994 0.929571 4.96994H10.2196C10.8796 4.96994 11.1496 4.12994 10.6196 3.73994L5.96957 0.379941C5.73957 0.209941 5.41957 0.209941 5.17957 0.379941Z","M1.32031 9.65002H9.84031","M2.58008 4.96997V9.58997","M8.66016 4.96997V9.58997","M6.28996 9.64996H4.85996C4.63996 9.64996 4.45996 9.46996 4.45996 9.24996V8.47996C4.45996 8.25996 4.63996 8.07996 4.85996 8.07996H6.28996C6.50996 8.07996 6.68996 8.25996 6.68996 8.47996V9.24996C6.69996 9.46996 6.51996 9.64996 6.28996 9.64996Z"],"生活单位":["M5.17957 0.379941L0.529571 3.73994C-0.000428975 4.12994 0.269571 4.96994 0.929571 4.96994H10.2196C10.8796 4.96994 11.1496 4.12994 10.6196 3.73994L5.96957 0.379941C5.73957 0.209941 5.41957 0.209941 5.17957 0.379941Z","M7.68047 3.23995L5.98047 2.00995C5.74047 1.83995 5.42047 1.83995 5.18047 2.00995L3.48047 3.23995","M2.53027 4.96997V9.58997","M5.49023 4.96997V9.58997","M1.32031 9.65002H9.84031","M8.62012 4.96997V9.58997"],"学院单位":["M5.17957 0.379941L0.529571 3.73994C-0.000428975 4.12994 0.269571 4.96994 0.929571 4.96994H10.2196C10.8796 4.96994 11.1496 4.12994 10.6196 3.73994L5.96957 0.379941C5.73957 0.209941 5.41957 0.209941 5.17957 0.379941Z","M2.53027 4.96997V9.58997","M4 4.96997V9.58997","M7 4.96997V9.58997","M1.32031 9.65002H9.84031","M8.62012 4.96997V9.58997"]};Array.prototype.remove=function(){var e,t,n=arguments,a=n.length;while(a&&this.length){e=n[--a];while(-1!==(t=this.indexOf(e)))this.splice(t,1)}return this};var b={str_to_date:l,date_to_str:i,PageSize:s,icon:u};const d=10.5;var p={name:"App",data(){return{transitionName:"",activeIndex:0}},watch:{},components:{},mounted(){let e=this;e.init()},computed:{...Object(r["c"])(["LifeCount","rem","InteractionId","Interaction"])},methods:{...Object(r["b"])(["updateLifeCount","updateRem"]),setRem(){let e=this;const t=b.PageSize().width/1280;let n=d*Math.min(t,50);e.updateRem(n),document.documentElement.style.fontSize=n+"px"},init(){let e=this;e.width=b.PageSize().width,e.operation_history=[],e.setRem()}}},O=(n("4791"),n("bdc7")),g=n.n(O);const m=g()(p,[["render",o]]);var h=m,f=n("5084");n("3c78"),n("27aa"),Object(r["c"])([]),Object(r["b"])([]),n("84d3");const j=Object(a["q"])('<div class="navbar navbar-expand-md navbar-light fixed-top bg-light nav-div"><a class="navbar-brand" href="#">Gallery of Inconsistent Legends</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarsExampleDefault"></div></div>',1),v={role:"main"},y={class:"legend_container"},_=Object(a["o"])("span",{class:"legend_title legendItem"},"Inconsisteny Category",-1),C={class:"container gallery_container"},I=Object(a["o"])("br",null,null,-1),T=["id"],M={style:{"margin-top":"1.5rem","font-weight":"bold"}},E={class:"row"},w={class:"card-image"},A=["src"],D={class:"card-label"},P={class:"card-image-caption"},N=Object(a["o"])("hr",null,null,-1);function S(e,t,n,o,r,c){return Object(a["M"])(),Object(a["n"])("div",{id:"Legend",onScroll:t[0]||(t[0]=(...e)=>c.onScroll&&c.onScroll(...e))},[j,Object(a["o"])("main",v,[Object(a["o"])("div",y,[_,(Object(a["M"])(!0),Object(a["n"])(a["b"],null,Object(a["R"])(r.types,e=>(Object(a["M"])(),Object(a["n"])("div",{class:"legendItem",key:"legend"+e},[Object(a["o"])("div",{class:Object(a["C"])(e+"-column typeLegend active"),style:Object(a["D"])({"background-color":c.typeColorMap(e)})},null,6),Object(a["o"])("span",null,Object(a["X"])("Inconsisteny in "+e),1)]))),128))]),Object(a["o"])("div",C,[I,(Object(a["M"])(!0),Object(a["n"])(a["b"],null,Object(a["R"])(Object.keys(r.assignment_data).sort(c.reverse),(e,t)=>(Object(a["M"])(),Object(a["n"])("div",{class:"year_container",key:"year"+t},[(Object(a["M"])(!0),Object(a["n"])(a["b"],null,Object(a["R"])(r.assignment_data[e],(t,n)=>(Object(a["M"])(),Object(a["n"])("div",{id:e+"_"+n,class:"assignment_container scroll-item",key:e+"_"+n},[Object(a["o"])("h4",M,Object(a["X"])(n+" (Total of "+t.length+")"),1),Object(a["o"])("div",E,[(Object(a["M"])(!0),Object(a["n"])(a["b"],null,Object(a["R"])(t,(t,o)=>(Object(a["M"])(),Object(a["n"])("div",{class:"card",key:e+"_"+n+"_"+o},[Object(a["o"])("div",w,[Object(a["o"])("img",{src:"./legend_img/"+t.image_url,alt:""},null,8,A),Object(a["o"])("div",D,[(Object(a["M"])(!0),Object(a["n"])(a["b"],null,Object(a["R"])(t.labels,e=>(Object(a["M"])(),Object(a["n"])("div",{class:"label",key:e,style:Object(a["D"])({"background-color":c.typeColorMap(e)})},null,4))),128))]),Object(a["o"])("div",P,[Object(a["o"])("b",null,Object(a["X"])(t.title),1)])])]))),128))]),N],8,T))),128))]))),128))])])],32)}var L={name:"Legend",components:{},data(){var e;return{assignment_data:null!==(e=this.assignment_data)&&void 0!==e?e:{},activeStep:0,totalNum:0,types:["mark","color"],typeColorCategory:["rgb(252,141,89)","rgb(153,213,148)","rgb(50,136,189)"]}},computed:{...Object(r["c"])([]),typeColorMap(){return c["b"]().domain(this.types).range(this.typeColorCategory).unknown(this.typeColorCategory[0])}},watch:{},created(){let e=window.screen.width,t=window.screen.height;c["c"](".Legend").style("width",e+"px").style("height",t+"px")},mounted(){let e=this;e.init()},methods:{...Object(r["b"])([]),init(){let e=this;e.assignment_data=new Object,c["a"]("legend.csv",(function(e){return e})).then((function(t){e.process(t)}))},process(e){let t=this,n=new Object;for(let a=0;a<e.length;a++){let o=e[a]["year"];Object.prototype.hasOwnProperty.call(n,o)||(n[o]={});let r=e[a]["assignment_name"];Object.prototype.hasOwnProperty.call(n[o],r)||(n[o][r]=[]),e[a]["labels"]=[];for(let n=0;n<t.types.length;n++)e[a][t.types[n]]&&e[a]["labels"].push(t.types[n]);n[o][r].push(e[a])}t.totalNum=e.length,t.assignment_data=n},open_url(e){window.open(e,"_blank")},reverse(e,t){return t-e},sum_subarray(e){let t=0;for(let n in e)t+=e[n].length;return t},jump(e){for(var t=document.querySelectorAll(".scroll-item"),n=0;n<t.length;n++)if(e===t[n].getAttribute("id")){t[n].scrollIntoView({block:"start",behavior:"smooth",callback:t=>{this.activeStep=e}});break}},onScroll(e){let t=document.querySelectorAll(".scroll-item");for(let n=t.length-1;n>=0;n--){let a=e.target.scrollTop>=t[n].offsetTop-t[0].offsetTop-.2*window.screen.height;if(a){this.activeStep=t[n].getAttribute("id");break}}}}};n("758a");const R=g()(L,[["render",S]]);var U=R;const k=[{path:"/",name:"",component:U,meta:{title:"gallery"}},{path:"/legend",name:"legend",component:U,meta:{title:"gallery"}}],x=Object(f["a"])({history:Object(f["b"])(),routes:k});x.beforeEach((e,t,n)=>{document.title=e.meta.title,n()});var V=x;const H={UPDATE_INTERACTION:"UPDATE_INTERACTION",UPDATE_INTERACTIONID:"UPDATE_INTERACTIONID",UPDATE_REM:"UPDATE_REM",UPDATE_LIFECOUNT:"UPDATE_LIFECOUNT",UPDATE_CLASSICIFACTION:"UPDATE_CLASSICIFACTION"};var F=Object(r["a"])({state:{InteractionId:0,Interaction:"",rem:0,LifeCount:0,classification:"year"},mutations:{[H.UPDATE_INTERACTION](e,t){e.Interaction=t},[H.UPDATE_INTERACTIONID](e,t){e.InteractionId=t},[H.UPDATE_REM](e,t){e.rem=t},[H.UPDATE_LIFECOUNT](e,t){e.LifeCount=t}},actions:{updateInteraction({commit:e},t){e(H.UPDATE_INTERACTION,t)},updateInteractionId({commit:e},t){e(H.UPDATE_INTERACTIONID,t)},updateRem({commit:e},t){e(H.UPDATE_REM,t)},updateLifeCount({commit:e},t){e(H.UPDATE_LIFECOUNT,t)}},modules:{}}),z=(n("ada9"),n("5dee"),n("5e81"),n("d7c7"));n("3b3a");Object(a["k"])(h).use(F).use(V).use(z["a"]).mount("#app")},"5e81":function(e,t,n){},"6d7b":function(e,t,n){},"758a":function(e,t,n){"use strict";n("a206")},"84d3":function(e,t,n){"use strict";n("4f52")},a206:function(e,t,n){}});