import{Q as Et}from"./QImg.1e498258.js";import{Q as G}from"./QSpace.556f9d4a.js";import{Q as Ht,a as J}from"./QBtn.68c64a4b.js";import{Q as St,a as Mt,b as Pt}from"./QList.25c172bd.js";import{Q as qt}from"./QSeparator.9ebd682c.js";import{r as q,j as Wt,p as tt,n as Bt,k as et,w as S,o as Lt,l as j,g as mt,m as Qt,q as O,s as $t,c as H,t as zt,h as ot,u as At,v as Ft,_ as Rt,x as Dt,y as nt,z as lt,A as it,B as g,d as m,C as p,D as Ot,E as Vt}from"./index.cec5be02.js";import{c as jt,g as Kt,a as It}from"./QScrollObserver.63704e8d.js";import{p as at,u as Nt,a as Ut,b as Xt,c as Yt,d as Zt,e as Gt,f as Jt,g as te,h as ee,r as oe,i as st,j as ne,k as le,Q as ie,_ as ae,l as se,m as re,n as ue,C as ce}from"./logo-fazacap-text.1d43aa2e.js";import{c as de,u as fe,a as he,h as me}from"./use-dark.de182390.js";import{c as ve}from"./dom.646b8c7a.js";import{a as ge}from"./focus-manager.b507780d.js";import"./QSpinner.ef69d5c1.js";const xe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function pe({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:o,proxy:i,emit:c}=mt(),l=q(null);let d=null;function f(a){return l.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Wt(a,13)===!0&&u.toggle(a)},contextClick(a){i.hide(a),tt(a),Bt(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:tt,mobileTouch(a){if(u.mobileCleanup(a),f(a)!==!0)return;i.hide(a),l.value.classList.add("non-selectable");const r=a.target;et(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){l.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),t.value===!0&&a!==void 0&&jt()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||l.value===null)return;let r;a===!0?i.$q.platform.is.mobile===!0?r=[[l.value,"touchstart","mobileTouch","passive"]]:r=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:r=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],et(u,"anchor",r)});function h(){Qt(u,"anchor")}function w(a){for(l.value=a;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;n()}function y(){if(o.target===!1||o.target===""||i.$el.parentNode===null)l.value=null;else if(o.target===!0)w(i.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(l.value=a.$el||a,n()):(l.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return S(()=>o.contextMenu,a=>{l.value!==null&&(h(),n(a))}),S(()=>o.target,()=>{l.value!==null&&h(),y()}),S(()=>o.noParentEvent,a=>{l.value!==null&&(a===!0?h():n())}),Lt(()=>{y(),e!==!0&&o.modelValue===!0&&l.value===null&&c("update:modelValue",!1)}),j(()=>{d!==null&&clearTimeout(d),h()}),{anchorEl:l,canShow:f,anchorEvents:u}}function we(t,e){const n=q(null);let o;function i(d,f){const u=`${f!==void 0?"add":"remove"}EventListener`,h=f!==void 0?f:o;d!==window&&d[u]("scroll",h,O.passive),window[u]("scroll",h,O.passive),o=f}function c(){n.value!==null&&(i(n.value),n.value=null)}const l=S(()=>t.noParentEvent,()=>{n.value!==null&&(c(),e())});return j(l),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:i}}const{notPassiveCapture:L}=O,C=[];function Q(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=at.length-1;for(;n>=0;){const o=at[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=C.length-1;o>=0;o--){const i=C[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function ye(t){C.push(t),C.length===1&&(document.addEventListener("mousedown",Q,L),document.addEventListener("touchstart",Q,L))}function rt(t){const e=C.findIndex(n=>n===t);e>-1&&(C.splice(e,1),C.length===0&&(document.removeEventListener("mousedown",Q,L),document.removeEventListener("touchstart",Q,L)))}let ut,ct;function dt(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function be(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const V={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{V[`${t}#ltr`]=t,V[`${t}#rtl`]=t});function ft(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:V[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function _e(t,e){let{top:n,left:o,right:i,bottom:c,width:l,height:d}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],o-=e[0],c+=e[1],i+=e[0],l+=e[0],d+=e[1]),{top:n,bottom:c,height:d,left:o,right:i,width:l,middle:o+(i-o)/2,center:n+(c-n)/2}}function ke(t,e,n){let{top:o,left:i}=t.getBoundingClientRect();return o+=e.top,i+=e.left,n!==void 0&&(o+=n[1],i+=n[0]),{top:o,bottom:o+1,height:1,left:i,right:i+1,width:1,middle:i,center:o}}function Te(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function ht(t,e,n,o){return{top:t[n.vertical]-e[o.vertical],left:t[n.horizontal]-e[o.horizontal]}}function vt(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{vt(t,e+1)},10);return}const{targetEl:n,offset:o,anchorEl:i,anchorOrigin:c,selfOrigin:l,absoluteOffset:d,fit:f,cover:u,maxHeight:h,maxWidth:w}=t;if($t.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:b,offsetTop:_}=window.visualViewport;b!==ut&&(E.setProperty("--q-pe-left",b+"px"),ut=b),_!==ct&&(E.setProperty("--q-pe-top",_+"px"),ct=_)}const{scrollLeft:y,scrollTop:a}=n,r=d===void 0?_e(i,u===!0?[0,0]:o):ke(i,d,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:w||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:W,offsetHeight:M}=n,{elWidth:B,elHeight:$}=f===!0||u===!0?{elWidth:Math.max(r.width,W),elHeight:u===!0?Math.max(r.height,M):M}:{elWidth:W,elHeight:M};let x={maxWidth:w,maxHeight:h};(f===!0||u===!0)&&(x.minWidth=r.width+"px",u===!0&&(x.minHeight=r.height+"px")),Object.assign(n.style,x);const k=Te(B,$);let v=ht(r,k,c,l);if(d===void 0||o===void 0)D(v,r,k,c,l);else{const{top:E,left:b}=v;D(v,r,k,c,l);let _=!1;if(v.top!==E){_=!0;const T=2*o[1];r.center=r.top-=T,r.bottom-=T+2}if(v.left!==b){_=!0;const T=2*o[0];r.middle=r.left-=T,r.right-=T+2}_===!0&&(v=ht(r,k,c,l),D(v,r,k,c,l))}x={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(x.maxHeight=v.maxHeight+"px",r.height>v.maxHeight&&(x.minHeight=x.maxHeight)),v.maxWidth!==void 0&&(x.maxWidth=v.maxWidth+"px",r.width>v.maxWidth&&(x.minWidth=x.maxWidth)),Object.assign(n.style,x),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==y&&(n.scrollLeft=y)}function D(t,e,n,o,i){const c=n.bottom,l=n.right,d=Kt(),f=window.innerHeight-d,u=document.body.clientWidth;if(t.top<0||t.top+c>f)if(i.vertical==="center")t.top=e[o.vertical]>f/2?Math.max(0,f-c):0,t.maxHeight=Math.min(c,f);else if(e[o.vertical]>f/2){const h=Math.min(f,o.vertical==="center"?e.center:o.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(c,h),t.top=Math.max(0,h-c)}else t.top=Math.max(0,o.vertical==="center"?e.center:o.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(c,f-t.top);if(t.left<0||t.left+l>u)if(t.maxWidth=Math.min(l,u),i.horizontal==="middle")t.left=e[o.horizontal]>u/2?Math.max(0,u-l):0;else if(e[o.horizontal]>u/2){const h=Math.min(u,o.horizontal==="middle"?e.middle:o.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(l,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,o.horizontal==="middle"?e.middle:o.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(l,u-t.left)}var Ce=de({name:"QMenu",inheritAttrs:!1,props:{...xe,...Nt,...fe,...Ut,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:dt},self:{type:String,validator:dt},offset:{type:Array,validator:be},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Xt,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:o}){let i=null,c,l,d;const f=mt(),{proxy:u}=f,{$q:h}=u,w=q(null),y=q(!1),a=H(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),r=he(t,h),{registerTick:W,removeTick:M}=Yt(),{registerTimeout:B}=Zt(),{transitionProps:$,transitionStyle:x}=Gt(t),{localScrollTarget:k,changeScrollEvent:v,unconfigureScrollTarget:E}=we(t,Y),{anchorEl:b,canShow:_}=pe({showing:y}),{hide:T}=Jt({showing:y,canShow:_,handleShow:yt,handleHide:bt,hideOnRouteChange:a,processOnMount:!0}),{showPortal:K,hidePortal:I,renderPortal:gt}=te(f,w,kt,"menu"),z={anchorEl:b,innerRef:w,onClickOutside(s){if(t.persistent!==!0&&y.value===!0)return T(s),(s.type==="touchstart"||s.target.classList.contains("q-dialog__backdrop"))&&Ft(s),!0}},N=H(()=>ft(t.anchor||(t.cover===!0?"center middle":"bottom start"),h.lang.rtl)),xt=H(()=>t.cover===!0?N.value:ft(t.self||"top start",h.lang.rtl)),pt=H(()=>(t.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),wt=H(()=>t.autoClose===!0?{onClick:_t}:{}),U=H(()=>y.value===!0&&t.persistent!==!0);S(U,s=>{s===!0?(ne(F),ye(z)):(st(F),rt(z))});function A(){ge(()=>{let s=w.value;s&&s.contains(document.activeElement)!==!0&&(s=s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function yt(s){if(i=t.noRefocus===!1?document.activeElement:null,ee(Z),K(),Y(),c=void 0,s!==void 0&&(t.touchPosition||t.contextMenu)){const R=zt(s);if(R.left!==void 0){const{top:Tt,left:Ct}=b.value.getBoundingClientRect();c={left:R.left-Ct,top:R.top-Tt}}}l===void 0&&(l=S(()=>h.screen.width+"|"+h.screen.height+"|"+t.self+"|"+t.anchor+"|"+h.lang.rtl,P)),t.noFocus!==!0&&document.activeElement.blur(),W(()=>{P(),t.noFocus!==!0&&A()}),B(()=>{h.platform.is.ios===!0&&(d=t.autoClose,w.value.click()),P(),K(!0),n("show",s)},t.transitionDuration)}function bt(s){M(),I(),X(!0),i!==null&&(s===void 0||s.qClickOutside!==!0)&&(((s&&s.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),B(()=>{I(!0),n("hide",s)},t.transitionDuration)}function X(s){c=void 0,l!==void 0&&(l(),l=void 0),(s===!0||y.value===!0)&&(oe(Z),E(),rt(z),st(F)),s!==!0&&(i=null)}function Y(){(b.value!==null||t.scrollTarget!==void 0)&&(k.value=It(b.value,t.scrollTarget),v(k.value,P))}function _t(s){d!==!0?(le(u,s),n("click",s)):d=!1}function Z(s){U.value===!0&&t.noFocus!==!0&&ve(w.value,s.target)!==!0&&A()}function F(s){n("escapeKey"),T(s)}function P(){vt({targetEl:w.value,offset:t.offset,anchorEl:b.value,anchorOrigin:N.value,selfOrigin:xt.value,absoluteOffset:c,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function kt(){return ot(At,$.value,()=>y.value===!0?ot("div",{role:"menu",...o,ref:w,tabindex:-1,class:["q-menu q-position-engine scroll"+pt.value,o.class],style:[o.style,x.value],...wt.value},me(e.default)):null)}return j(X),Object.assign(u,{focus:A,updatePosition:P}),gt}});const Ee=Dt({name:"MainLayout",setup(){return{showingProduct:q(!1)}}}),He={class:"row items-center no-wrap"},Se={class:"row q-gutter-xl items-center"},Me=p("div",{class:"text-link"},"HOME",-1),Pe=p("div",null,"PRODUCT",-1),qe=p("div",{class:"text-link"},"STORE",-1),We=p("div",{class:"text-link"},"ABOUT",-1),Be={class:"row q-gutter-x-lg items-center"},Le=p("div",{class:"text-grey-8 text-subtitle2 text-weight-bold"}," \xA9 2022 - Fazacap Studio ",-1),Qe={class:"row q-gutter-xl"},$e=p("div",{class:"text-link"},"Terms",-1),ze=p("div",{class:"text-link"},"Privacy",-1);function Ae(t,e,n,o,i,c){const l=nt("router-link"),d=nt("router-view");return lt(),it(ie,{view:"hHh lpR fff"},{default:g(()=>[m(se,{elevated:"",class:"bg-white",style:{padding:"12px 75px 12px 75px"}},{default:g(()=>[p("div",He,[p("div",null,[m(l,{to:"/"},{default:g(()=>[m(Et,{src:ae,width:"180px"})]),_:1})]),m(G),p("div",Se,[m(l,{to:"/"},{default:g(()=>[Me]),_:1}),p("div",{class:"q-px-sm text-link row q-gutter-x-xs",onMouseover:e[2]||(e[2]=f=>t.showingProduct=!0)},[Pe,m(Ht,{size:"20px",name:"arrow_drop_down"}),m(Ce,{onMouseleave:e[0]||(e[0]=f=>t.showingProduct=!1),modelValue:t.showingProduct,"onUpdate:modelValue":e[1]||(e[1]=f=>t.showingProduct=f),offset:[0,15],"transition-show":"jump-down","transition-hide":"jump-up"},{default:g(()=>[m(St,{style:{"min-width":"100px"}},{default:g(()=>[Ot((lt(),it(Mt,{to:"/product/fazscheduler",clickable:""},{default:g(()=>[m(Pt,{class:"text-negative text-weight-bold"},{default:g(()=>[Vt(" FAZ SCHEDULER")]),_:1})]),_:1})),[[ce]]),m(qt)]),_:1})]),_:1},8,["modelValue"])],32),m(l,{to:"/store"},{default:g(()=>[qe]),_:1}),m(l,{to:"/about"},{default:g(()=>[We]),_:1}),m(J,{to:"/contact",color:"negative",label:"contact"}),m(J,{flat:"",to:"/login",icon:"person",round:"",color:"negative"})])])]),_:1}),m(re,null,{default:g(()=>[m(d,{class:"bg-dark",style:{height:"calc(100vh - 116px)"}})]),_:1}),m(ue,{class:"bg-white text-dark",style:{padding:"13px 75px 13px 75px"}},{default:g(()=>[p("div",Be,[Le,m(G),p("div",Qe,[m(l,{to:"/terms"},{default:g(()=>[$e]),_:1}),m(l,{to:"/privacy"},{default:g(()=>[ze]),_:1})])])]),_:1})]),_:1})}var Ze=Rt(Ee,[["render",Ae]]);export{Ze as default};
