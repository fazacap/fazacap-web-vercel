import{c as s,u as d,a as u,h as n}from"./use-dark.1816fc3f.js";import{c,h as l,g as q}from"./index.382e46f3.js";var i=s({name:"QCard",props:{...d,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=u(a,e),o=c(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>l(a.tag,{class:o.value},n(r.default))}});export{i as Q};
