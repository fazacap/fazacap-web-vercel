import{c as d,h as m,g as N,j as z,k as oe,m as ce,G as te,t as de,r as V,l as fe,u as ve,D as me,v as P,p as ge,q as be}from"./index.f664963b.js";import{u as ne,a as ae,Q as he}from"./QSpinner.6fae1613.js";import{c as re,h as ye,b as K,d as pe}from"./use-dark.fc6c72b5.js";import{a as ke}from"./dom.56e1b444.js";const F="0 0 24 24",U=e=>e,Q=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Q,"ion-ios":Q,"ion-logo":Q,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xe=new RegExp("^("+Object.keys(ue).join("|")+")"),qe=new RegExp("^("+Object.keys(le).join("|")+")"),H=new RegExp("^("+Object.keys(ie).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Ee=/^img:/,we=/^svguse:/,Re=/^ion-/,Le=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=re({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=N(),n=ae(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(u.iconMapFn!==null){const s=u.iconMapFn(a);if(s!==void 0)if(s.icon!==void 0){if(a=s.icon,a==="none"||!a)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if($e.test(a)===!0){const[s,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[p,b,k]=l.split("@@");return m("path",{style:b,d:p,transform:k})})}}if(Ee.test(a)===!0)return{img:!0,src:a.substring(4)};if(we.test(a)===!0){const[s,y=F]=a.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=a.match(xe);if(h!==null)o=ue[h[1]](a);else if(Le.test(a)===!0)o=a;else if(Re.test(a)===!0)o=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(H.test(a)===!0){o="notranslate material-symbols";const s=a.match(H);s!==null&&(a=a.substring(6),o+=ie[s[1]]),q=a}else{o="notranslate material-icons";const s=a.match(qe);s!==null&&(a=a.substring(2),o+=le[s[1]]),q=a}return{cls:o,content:q}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?m(e.tag,o,ye(t.default)):f.value.img===!0?m("span",o,K(t.default,[m("img",{src:f.value.src})])):f.value.svg===!0?m("span",o,K(t.default,[m("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?m("span",o,K(t.default,[m("svg",{viewBox:f.value.viewBox},[m("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(o.class+=" "+f.value.cls),m(e.tag,o,K(t.default,[f.value.content])))}}});function Ge(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Ce(e){return e.appContext.config.globalProperties.$router!==void 0}function Ye(e){return e.isUnmounted===!0||e.isDeactivated===!0}function X(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Be(e,t){for(const u in t){const n=t[u],i=e[u];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,o)=>f!==i[o]))return!1}return!0}function Y(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((u,n)=>u===t[n]):e.length===1&&e[0]===t}function _e(e,t){return Array.isArray(e)===!0?Y(e,t):Array.isArray(t)===!0?Y(t,e):e===t}function Se(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const u in e)if(_e(e[u],t[u])===!1)return!1;return!0}const Pe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Oe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const u=N(),{props:n,proxy:i,emit:f}=u,o=Ce(u),a=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>o===!0&&n.disable!==!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>o===!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),s=d(()=>h.value!==null),y=d(()=>a.value===!0||s.value===!0),l=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=d(()=>a.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(s.value===!1)return-1;const{matched:v}=h.value,{length:$}=v,w=v[$-1];if(w===void 0)return-1;const L=i.$route.matched;if(L.length===0)return-1;const C=L.findIndex(G.bind(null,w));if(C>-1)return C;const I=X(v[$-2]);return $>1&&X(w)===I&&L[L.length-1].path!==I?L.findIndex(G.bind(null,v[$-2])):C}),k=d(()=>s.value===!0&&b.value!==-1&&Be(i.$route.params,h.value.params)),c=d(()=>k.value===!0&&b.value===i.$route.matched.length-1&&Se(i.$route.params,h.value.params)),x=d(()=>s.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function B(v,{returnRouterError:$,to:w=n.to,replace:L=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const C=i.$router[L===!0?"replace":"push"](w);return $===!0?C:C.then(()=>{}).catch(()=>{})}function _(v){if(s.value===!0){const $=w=>B(v,w);f("click",v,$),v.defaultPrevented!==!0&&$()}else f("click",v)}return{hasRouterLink:s,hasHrefLink:a,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:k,linkIsExactActive:c,linkClass:x,linkAttrs:p,getLink:S,navigateToRouterLink:B,navigateOnClick:_}}function Te(e,t=250){let u=!1,n;return function(){return u===!1&&(u=!0,setTimeout(()=>{u=!1},t),n=e.apply(this,arguments)),n}}function J(e,t,u,n){u.modifiers.stop===!0&&te(e);const i=u.modifiers.color;let f=u.modifiers.center;f=f===!0||n===!0;const o=document.createElement("span"),a=document.createElement("span"),q=de(e),{left:h,top:s,width:y,height:l}=t.getBoundingClientRect(),p=Math.sqrt(y*y+l*l),b=p/2,k=`${(y-p)/2}px`,c=f?k:`${q.left-h-b}px`,x=`${(l-p)/2}px`,S=f?x:`${q.top-s-b}px`;a.className="q-ripple__inner",ke(a,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(_)};u.abort.push(B);let _=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,_=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,_=setTimeout(()=>{o.remove(),u.abort.splice(u.abort.indexOf(B),1)},275)},250)},50)}function Z(e,{modifiers:t,value:u,arg:n}){const i=Object.assign({},e.cfg.ripple,t,u);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var je=pe({name:"ripple",beforeMount(e,t){const u=t.instance.$.appContext.config.globalProperties.$q.config||{};if(u.ripple===!1)return;const n={cfg:u,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&J(i,e,n,i.qKeyEvent===!0)},keystart:Te(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&z(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&J(i,e,n,!0)},300)};Z(n,t),e.__qripple=n,oe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const u=e.__qripple;u!==void 0&&(u.enabled=t.value!==!1,u.enabled===!0&&Object(t.value)===t.value&&Z(u,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(u=>{u()}),ce(t,"main"),delete e._qripple)}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(se),Me={align:{type:String,validator:e=>Ae.includes(e)}};function Ke(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ie={xs:8,sm:10,md:14,lg:20,xl:24},De=["button","submit","reset"],Qe=/[^\s]\/[^\s]/,ze=["flat","outline","push","unelevated"],Ne=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ve={...ne,...Pe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ze.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Fe(e){const t=ae(e,Ie),u=Ke(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:o,navigateOnClick:a}=Oe({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>s.value===!0?e.tabindex||0:-1),l=d(()=>Ne(e,"standard")),p=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,o.value):De.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Qe.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=d(()=>u.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:k,attributes:p,hasLink:i,linkTag:f,navigateOnClick:a,isActionable:s}}const{passiveCapture:E}=be;let O=null,T=null,j=null;var Je=re({name:"QBtn",props:{...Ve,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:u}){const{proxy:n}=N(),{classes:i,style:f,innerClasses:o,attributes:a,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Fe(e),l=V(null),p=V(null);let b=null,k,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=d(()=>({center:e.round})),_=d(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const r={onClick:w,onKeydown:L,onMousedown:I};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${g}`]=C}return r}return{onClick:P}}),$=d(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...a.value,...v.value}));function w(r){if(l.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&l.value.contains(g)===!1&&g.contains(l.value)===!1){l.value.focus();const D=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",D,E),l.value!==null&&l.value.removeEventListener("blur",D,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",D,E),l.value.addEventListener("blur",D,E)}}s(r)}}function L(r){l.value!==null&&(u("keydown",r),z(r,[13,32])===!0&&T!==l.value&&(T!==null&&A(),r.defaultPrevented!==!0&&(l.value.focus(),T=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),l.value.addEventListener("blur",R,E)),P(r)))}function C(r){l.value!==null&&(u("touchstart",r),r.defaultPrevented!==!0&&(O!==l.value&&(O!==null&&A(),O=l.value,b=r.target,b.addEventListener("touchcancel",R,E),b.addEventListener("touchend",R,E)),k=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,k=!1},200)))}function I(r){l.value!==null&&(r.qSkipRipple=k===!0,u("mousedown",r),r.defaultPrevented!==!0&&j!==l.value&&(j!==null&&A(),j=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,E)))}function R(r){if(l.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===l.value)){if(r!==void 0&&r.type==="keyup"){if(T===l.value&&z(r,[13,32])===!0){const g=new MouseEvent("click",r);g.qKeyEvent=!0,r.defaultPrevented===!0&&ge(g),r.cancelBubble===!0&&te(g),l.value.dispatchEvent(g),P(r),r.qKeyEvent=!0}u("keyup",r)}A()}}function A(r){const g=p.value;r!==!0&&(O===l.value||j===l.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),O===l.value&&(b!==null&&(b.removeEventListener("touchcancel",R,E),b.removeEventListener("touchend",R,E)),O=b=null),j===l.value&&(document.removeEventListener("mouseup",R,E),j=null),T===l.value&&(document.removeEventListener("keyup",R,!0),l.value!==null&&l.value.removeEventListener("blur",R,E),T=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function M(r){P(r),r.qSkipRipple=!0}return fe(()=>{A(!0)}),Object.assign(n,{click:w}),()=>{let r=[];e.icon!==void 0&&r.push(m(W,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&r.push(m("span",{class:"block"},[e.label])),r=K(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(m(W,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},r)),e.loading!==null&&g.push(m(ve,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(he)])]:null)),me(m(h.value,$.value,g),[[je,S.value,void 0,B.value]])}}});export{W as Q,Je as a,Oe as b,Ye as c,Me as d,Ke as e,Ge as g,Pe as u,Ce as v};
