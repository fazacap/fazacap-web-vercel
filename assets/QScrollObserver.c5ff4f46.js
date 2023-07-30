import{S as W,r as A,P as V,o as w,l as p,U as L,n as S,h as q,g as O,q as g,w as T}from"./index.f76139b6.js";import{c as P}from"./use-dark.c74718d7.js";import{g as D,a as x}from"./dom.cc2cfe49.js";function U(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),W.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Q=[null,document,document.body,document.scrollingElement,document.documentElement];function F(e,o){let t=D(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return Q.includes(t)?window:t}function R(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function C(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function H(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=R(e);if(t<=0){i!==o&&h(e,o);return}requestAnimationFrame(c=>{const r=c-n,a=i+(o-i)/Math.max(r,t)*r;h(e,a),a!==o&&H(e,o,t-r,c)})}function M(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=C(e);if(t<=0){i!==o&&b(e,o);return}requestAnimationFrame(c=>{const r=c-n,a=i+(o-i)/Math.max(r,t)*r;b(e,a),a!==o&&M(e,o,t-r,c)})}function h(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function b(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function B(e,o,t){if(t){H(e,o,t);return}h(e,o)}function I(e,o,t){if(t){M(e,o,t);return}b(e,o)}let v;function _(){if(v!==void 0)return v;const e=document.createElement("p"),o=document.createElement("div");x(e,{width:"100%",height:"200px"}),x(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),v=t-n,v}function G(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function X(){const e=A(!V.value);return e.value===!1&&w(()=>{e.value=!0}),e}const N=typeof ResizeObserver!="undefined",z=N===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var J=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let t=null,n,i={width:-1,height:-1};function c(s){s===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:s,offsetHeight:l}=n;(s!==i.width||l!==i.height)&&(i={width:s,height:l},o("resize",i))}}const{proxy:a}=O();if(N===!0){let s;const l=d=>{n=a.$el.parentNode,n?(s=new ResizeObserver(c),s.observe(n),r()):d!==!0&&S(()=>{l(!0)})};return w(()=>{l()}),p(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():n&&s.unobserve(n))}),L}else{let d=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",c,g.passive),l=void 0)},f=function(){d(),n&&n.contentDocument&&(l=n.contentDocument.defaultView,l.addEventListener("resize",c,g.passive),r())};const s=X();let l;return w(()=>{S(()=>{n=a.$el,n&&f()})}),p(d),a.trigger=c,()=>{if(s.value===!0)return q("object",{style:z.style,tabindex:-1,type:"text/html",data:z.url,"aria-hidden":"true",onLoad:f})}}}});const{passive:E}=g,Y=["both","horizontal","vertical"];var K=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Y.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,i,c;T(()=>e.scrollTarget,()=>{s(),a()});function r(){n!==null&&n();const f=Math.max(0,R(i)),m=C(i),u={top:f-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";t.position={top:f,left:m},t.directionChanged=t.direction!==y,t.delta=u,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),o("scroll",{...t})}function a(){i=F(c,e.scrollTarget),i.addEventListener("scroll",l,E),l(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",l,E),i=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")r();else if(n===null){const[m,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];n=()=>{u(m),n=null}}}const{proxy:d}=O();return T(()=>d.$q.lang.rtl,r),w(()=>{c=d.$el.parentNode,a()}),p(()=>{n!==null&&n(),s()}),Object.assign(d,{trigger:l,getPosition:()=>t}),L}});export{J as Q,F as a,K as b,U as c,B as d,C as e,R as f,_ as g,G as h,I as s};
