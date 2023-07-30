import{Q as v}from"./QImg.bc947560.js";import{Q as s}from"./QInput.4be74ac7.js";import{Q as w}from"./QSpace.bf345db0.js";import{a as h}from"./QBtn.7230b9d6.js";import{Q as g}from"./QForm.a7a9cf19.js";import{_ as y,x as V,a3 as b,r as i,o as x,w as _,z as r,a4 as p,C as a,d as o,B as u,u as f,E as q}from"./index.40a06908.js";import{u as F}from"./app.4131c0f6.js";import"./QSpinner.b6030431.js";import"./use-dark.fdc177f8.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";import"./use-form.89b42433.js";import"./dom.45bd780c.js";import"./index.2cf0d985.js";const Q=V({name:"ProductPage",setup(){const e={title:"Faz Scheduler - Fazacap",description:"Application for play videos automatically"};F().setMetaDescription(e);const t=b(),m=i(!1),d=i(null),n=i(!1);function c(l){d.value&&(n.value=!0)}return x(()=>{}),_(t,()=>{}),{download:m,buttonDownload:n,inputUsername:d,downloadFile:c}}}),U={class:"row justify-center text-white"},D={class:"col-10"},P={class:"text-white q-pt-md"},B={class:"row q-py-xl"},I={class:"col row"},S={style:{width:"430px"}},$={key:0,class:"col text-left"},k=a("div",{class:"text-h3 text-weight-bold"},"Download",-1),z=a("div",{class:"text-h6 q-pt-lg text-grey-5"}," Fill data below to download application ",-1),C={class:"q-gutter-y-sm"},M={class:"row q-gutter-x-sm"},N={key:1,class:"col text-left"},E=a("div",{class:"text-h3 text-weight-bold"},[q(" Faz Scheduler"),a("br"),a("div",{class:"text-h4"},"Play Video automatically")],-1),O=a("div",{class:"text-h6 q-pt-lg text-grey-5"}," Play videos automatically and scheduled by using Free Faz Scheduler. which can connect with OBS and VMIX applications, so the list of videos can be played for 24 hours automatically. ",-1);function R(e,t,m,d,n,c){return r(),p("div",U,[a("div",D,[a("div",P,[a("div",B,[a("div",I,[a("div",S,[o(v,{src:"/img/slider-homepage.webp"})])]),e.download?(r(),p("div",$,[o(f,{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOut"},{default:u(()=>[k]),_:1}),o(g,{onSubmit:t[5]||(t[5]=l=>e.downloadFile())},{default:u(()=>[z,a("div",C,[o(s,{dense:"",placeholder:"Username","bg-color":"white",outlined:"",modelValue:e.inputUsername,"onUpdate:modelValue":t[0]||(t[0]=l=>e.inputUsername=l)},null,8,["modelValue"]),o(s,{dense:"",placeholder:"Email","bg-color":"white",outlined:"",modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=l=>e.text=l)},null,8,["modelValue"]),a("div",M,[o(s,{dense:"",class:"col",type:"password",placeholder:"Password","bg-color":"white",outlined:"",modelValue:e.text,"onUpdate:modelValue":t[2]||(t[2]=l=>e.text=l)},null,8,["modelValue"]),o(s,{dense:"",class:"col",type:"password",placeholder:"Retype Password","bg-color":"white",outlined:"",modelValue:e.text,"onUpdate:modelValue":t[3]||(t[3]=l=>e.text=l)},null,8,["modelValue"])]),o(s,{dense:"",placeholder:"Country","bg-color":"white",outlined:"",modelValue:e.text,"onUpdate:modelValue":t[4]||(t[4]=l=>e.text=l)},null,8,["modelValue"])]),o(w,{class:"q-pt-md"}),o(h,{loading:e.buttonDownload,type:"submit",class:"q-pa-md full-width",color:"negative",label:"Download Now"},null,8,["loading"])]),_:1})])):(r(),p("div",N,[o(f,{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOut"},{default:u(()=>[E]),_:1}),O,o(w,{class:"q-pt-md"}),o(h,{onClick:t[6]||(t[6]=l=>e.download=null),style:{width:"200px"},class:"q-pa-md",color:"negative",label:"More Info"})]))])])])])}var oe=y(Q,[["render",R]]);export{oe as default};
