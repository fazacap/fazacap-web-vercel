import{c as E,h as P}from"./use-dark.c74718d7.js";import{r as q,N as A,K as B,X as I,o as R,h as V,g as Q,v as S,n as j,a5 as D}from"./index.f76139b6.js";import{a as K}from"./focus-manager.b507780d.js";import{c as O}from"./QBtn.6a4ecc2a.js";var $=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:F,emit:l}){const C=Q(),u=q(null);let s=0;const i=[];function d(e){const r=typeof e=="boolean"?e:a.noErrorFocus!==!0,f=++s,h=(t,o)=>{l("validation"+(t===!0?"Success":"Error"),o)},x=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(a.greedy===!0?Promise.all(i.map(x)).then(t=>t.filter(o=>o.valid!==!0)):i.reduce((t,o)=>t.then(()=>x(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return f===s&&h(!0),!0;if(f===s){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),h(!1,o),r===!0){const p=t.find(({comp:g})=>typeof g.focus=="function"&&O(g.$)===!1);p!==void 0&&p.comp.focus()}}return!1})}function m(){s++,i.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function v(e){e!==void 0&&S(e);const r=s+1;d().then(f=>{r===s&&f===!0&&(a.onSubmit!==void 0?l("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&S(e),l("reset"),j(()=>{m(),a.autofocus===!0&&a.noResetFocus!==!0&&c()})}function c(){K(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),r=>r.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}A(D,{bindComponent(e){i.push(e)},unbindComponent(e){const r=i.indexOf(e);r>-1&&i.splice(r,1)}});let y=!1;return B(()=>{y=!0}),I(()=>{y===!0&&a.autofocus===!0&&c()}),R(()=>{a.autofocus===!0&&c()}),Object.assign(C.proxy,{validate:d,resetValidation:m,submit:v,reset:b,focus:c,getValidationComponents:()=>i}),()=>V("form",{class:"q-form",ref:u,onSubmit:v,onReset:b},P(F.default))}});export{$ as Q};
