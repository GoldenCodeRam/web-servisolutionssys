import{d,T as u,c,w as r,o as i,a,u as s,Z as p,g as f,t as _,h as w,b as t,e as b,n as g,f as y}from"./app-b369a8e7.js";import{_ as h}from"./GuestLayout.vue_vue_type_script_setup_true_lang-87865ed9.js";import{_ as k,a as x,b as V}from"./TextInput.vue_vue_type_script_setup_true_lang-b80d049f.js";import{P as v}from"./PrimaryButton-1ad5fe8f.js";import"./ApplicationLogo-23853f3c.js";import"./_plugin-vue_export-helper-c27b6911.js";const B=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],C={class:"flex items-center justify-end mt-4"},z=d({__name:"ForgotPassword",props:{status:{}},setup($){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(o,l)=>(i(),c(h,null,{default:r(()=>[a(s(p),{title:"Forgot Password"}),B,o.status?(i(),f("div",N,_(o.status),1)):w("",!0),t("form",{onSubmit:y(m,["prevent"])},[t("div",null,[a(k,{for:"email",value:"Email"}),a(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",C,[a(v,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[b(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}});export{z as default};