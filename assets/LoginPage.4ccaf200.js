import{Q as p,a as w}from"./QBtn.c5406f8e.js";import{Q as m}from"./QInput.a6f7bbb9.js";import{Q as v}from"./QForm.2839c62d.js";import{Q as b}from"./QPage.b3e73624.js";import{Q as h}from"./QScrollArea.583a6ca2.js";import{u as _}from"./client.b54c0f28.js";import{_ as P,x as Q,aa as y,r as c,c as d,w as V,z as x,A as L,B as n,d as s,C as a,a9 as U}from"./index.75c1813e.js";import"./QSpinner.900ed84a.js";import"./use-dark.51f55d3d.js";import"./dom.a41e1995.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";import"./use-form.6432203f.js";import"./QScrollObserver.a32b05ee.js";import"./format.c2299dca.js";import"./index.2cf0d985.js";const q=Q({name:"LoginPage",setup(){const e=y(),o=_(),l=c(null),i=c(null),u=d(()=>o.loadingProcess),r=d(()=>o.loginStatus),t=d(()=>o.infoLogin);function g(){if(i.value&&l.value){const f={username:i.value,password:l.value};o.loginAccount(f)}}return V(r,()=>{r.value&&e.replace("/admin")}),{inputPassword:l,inputUsername:i,loadingProcess:u,infoLogin:t,loginAccount:g}}}),S={class:"row justify-center"},A={class:"col-10 q-pt-xl"},B=a("div",{class:"text-h4 text-weight-bold text-center text-white"}," USER LOGIN ",-1),$={class:"column flex-center q-gutter-y-sm q-py-xl no-wrap"},C={style:{width:"30vw"},class:"row"},k={class:"col"},I={class:"text-center text-white q-pt-lg"};function N(e,o,l,i,u,r){return x(),L(h,null,{default:n(()=>[s(b,null,{default:n(()=>[a("div",S,[a("div",A,[B,a("div",$,[a("div",C,[a("div",k,[s(v,{class:"q-gutter-y-md",onSubmit:o[2]||(o[2]=t=>e.loginAccount())},{default:n(()=>[s(m,{"hide-bottom-space":"",type:"text",rules:[t=>!!t],disable:e.loadingProcess,outlined:"","bg-color":"white",color:"negative",modelValue:e.inputUsername,"onUpdate:modelValue":o[0]||(o[0]=t=>e.inputUsername=t),label:"Username"},{prepend:n(()=>[s(p,{name:"person"})]),_:1},8,["rules","disable","modelValue"]),s(m,{"hide-bottom-space":"",rules:[t=>!!t],disable:e.loadingProcess,type:"password",outlined:"","bg-color":"white",color:"negative",modelValue:e.inputPassword,"onUpdate:modelValue":o[1]||(o[1]=t=>e.inputPassword=t),label:"Password"},{prepend:n(()=>[s(p,{name:"lock"})]),_:1},8,["rules","disable","modelValue"]),s(w,{size:"20px",loading:e.loadingProcess,type:"submit",class:"full-width q-py-md",label:"Log in",color:"negative"},null,8,["loading"])]),_:1}),a("div",I,U(e.infoLogin),1)])])])])])]),_:1})]),_:1})}var Z=P(q,[["render",N]]);export{Z as default};
