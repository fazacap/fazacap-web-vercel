import{Q as a}from"./QCardSection.81aa1694.js";import{Q as o}from"./QCard.f8828589.js";import{Q as h}from"./QSeparator.8a1fef66.js";import{Q as u}from"./QPage.ba79ea27.js";import{u as f}from"./admin.def5e3ee.js";import{_ as x,x as m,c as b,z as c,A as g,B as t,C as s,d as e,a4 as l,a9 as r,af as n,E as i}from"./index.c19bfd92.js";import"./use-dark.78f9dc37.js";import"./index.2cf0d985.js";const p=m({name:"DashboardPage",setup(){const d=f();return d.getDataStatistic(),{dataStatistic:b(()=>d.dataStatistic)}}}),w={class:"row justify-between q-gutter-x-lg no-wrap"},v=s("div",{class:"text-h5 text-center text-weight-bold"},[i(" New"),s("br"),i(" Message ")],-1),S={key:0,class:"text-h2 text-center text-white text-weight-bold"},V=s("div",{class:"text-h5 text-center text-weight-bold"},[i(" Total"),s("br"),i(" Message ")],-1),y={key:0,class:"text-h2 text-center text-white text-weight-bold"},C=s("div",{class:"text-h5 text-center text-weight-bold"},[i(" Total"),s("br"),i(" Visitor ")],-1),P=s("div",{class:"text-h2 text-center text-white text-weight-bold"},"10",-1),Q=s("div",{class:"text-h5"},"VISITOR COUNTER",-1),N={class:"q-pt-md row justify-between q-gutter-x-lg no-wrap"},j=s("div",null,"Home Page Visit",-1),k=s("div",{class:"text-h3"},"10",-1),B=s("div",null,"Product Page Visit",-1),T=s("div",{class:"text-h3"},"10",-1),A=s("div",null,"About Page Visit",-1),D=s("div",{class:"text-h3"},"10",-1),M=s("div",null,"Contact Page Visit",-1),$=s("div",{class:"text-h3"},"10",-1);function q(d,_,E,I,O,R){return c(),g(u,null,{default:t(()=>[s("div",w,[e(o,{class:"card-dashboard row justify-between items-center"},{default:t(()=>[e(a,{class:"col-5"},{default:t(()=>[v]),_:1}),e(a,{class:"col bg-red-10"},{default:t(()=>[d.dataStatistic?(c(),l("div",S,r(d.dataStatistic.newMessage),1)):n("",!0)]),_:1})]),_:1}),e(o,{class:"card-dashboard row justify-between items-center"},{default:t(()=>[e(a,{class:"col-5"},{default:t(()=>[V]),_:1}),e(a,{class:"col bg-red-8"},{default:t(()=>[d.dataStatistic?(c(),l("div",y,r(d.dataStatistic.totalMessage),1)):n("",!0)]),_:1})]),_:1}),e(o,{class:"card-dashboard row justify-between items-center"},{default:t(()=>[e(a,{class:"col-5"},{default:t(()=>[C]),_:1}),e(a,{class:"col bg-red-6"},{default:t(()=>[P]),_:1})]),_:1})]),e(h,{spaced:"20px"}),Q,s("div",N,[e(o,{class:"card-dashboard"},{default:t(()=>[e(a,null,{default:t(()=>[j,k]),_:1})]),_:1}),e(o,{class:"card-dashboard"},{default:t(()=>[e(a,null,{default:t(()=>[B,T]),_:1})]),_:1}),e(o,{class:"card-dashboard"},{default:t(()=>[e(a,null,{default:t(()=>[A,D]),_:1})]),_:1}),e(o,{class:"card-dashboard"},{default:t(()=>[e(a,null,{default:t(()=>[M,$]),_:1})]),_:1})])]),_:1})}var W=x(p,[["render",q]]);export{W as default};
