import{c as l,w as p,Y as o,X as u,K as g,a as m,Z as s,$ as h,a0 as n}from"./index.f76139b6.js";import{a as r}from"./index.2cf0d985.js";function d(t){{const e={active:!0};if(typeof t=="function"){const i=l(t);e.val=i.value,p(i,c=>{e.val=c,e.active===!0&&o()})}else e.val=t;s.push(e),o(),u(()=>{e.active=!0,o()}),g(()=>{e.active=!1,o()}),m(()=>{s.splice(s.indexOf(e),1),o()})}}const a={}.APP_URL+"api",y=h("app",{state:()=>({infoStatus:null,loadingProcess:!1,loginStatus:!1,infoLogin:null}),actions:{sendMessage(){this.loadingProcess=!0,r.post(a+"/message").then(t=>{this.loadingProcess=!1,this.infoStatus="Thanks for sending us message,"}).catch(t=>{this.loadingProcess=!1})},loginAccount(t){this.loadingProcess=!0,this.infoLogin=null,r.post(a+"/login",t).then(e=>{n.set("user","true",{path:"/",secure:!0,sameSite:"Strict"}),this.loadLocalData()}).catch(e=>{this.infoLogin=e.response.data.message,this.loadingProcess=!1})},loadLocalData(){setTimeout(()=>{this.loginStatus=!0,setTimeout(()=>{this.loadingProcess=!1},1e3)},1e3)},logoutAccount(){n.set("user","true",{path:"/",secure:!0,sameSite:"Strict",expires:0}),this.loginStatus=!1},setMetaDescription(t){d({title:t.title,meta:{title:{name:"title",content:t.title},description:{name:"description",content:t.description},keywords:{name:"keywords",content:t.description},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"},ogTitle:{property:"og:title",content:t.title},ogDescription:{property:"og:description",content:t.description},ogType:{property:"og:type",content:"website"},ogImage:{property:"og:image",content:"thumbnail-meta.webp"},ogUrl:{property:"og:url",content:"https://www.fazacap.com/"},twitterTitle:{property:"twitter:title",content:t.title},twitterDescription:{property:"twitter:description",content:t.description},twitterCard:{property:"twitter:card",content:"summary_large_image"},twitterImage:{property:"twitter:image",content:"thumbnail-meta.webp"},twitterUrl:{property:"twitter:url",content:"https://www.fazacap.com/"}}})}}});export{y as u};
