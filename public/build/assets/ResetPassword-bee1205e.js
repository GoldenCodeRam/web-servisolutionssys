import{d as c,T as f,c as w,w as d,o as _,a as o,u as e,Z as V,b as t,e as b,n as g,f as k}from"./app-e2d48959.js";import{_ as v}from"./GuestLayout.vue_vue_type_script_setup_true_lang-9977a249.js";import{_ as l,a as m,b as i}from"./TextInput.vue_vue_type_script_setup_true_lang-bcfe384b.js";import{P}from"./PrimaryButton-3ba66d95.js";import"./ApplicationLogo-910da88f.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=["onSubmit"],x={class:"mt-4"},B={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},T=c({__name:"ResetPassword",props:{email:{},token:{}},setup(p){const n=p,s=f({token:n.token,email:n.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>{s.reset("password","password_confirmation")}})};return($,a)=>(_(),w(v,null,{default:d(()=>[o(e(V),{title:"Reset Password"}),t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[o(l,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",x,[o(l,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",B,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",C,[o(P,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:d(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}});export{T as default};
