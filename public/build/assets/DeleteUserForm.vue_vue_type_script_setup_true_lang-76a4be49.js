import{o as m,g as w,r as h,d as v,x as C,l as B,m as D,i as V,c as E,a,w as r,s as f,y as U,j as p,q as y,b as e,n as k,h as A,p as g,T as S,z as T,e as _,u as i,A as N}from"./app-e2d48959.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as K,a as M,b as O}from"./TextInput.vue_vue_type_script_setup_true_lang-bcfe384b.js";const P={},W={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function j(c,n){return m(),w("button",W,[h(c.$slots,"default")])}const b=z(P,[["render",j]]),F={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},I=e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),L=[I],q=v({__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(c,{emit:n}){const o=c;C(()=>o.show,()=>{o.show?document.body.style.overflow="hidden":document.body.style.overflow="visible"});const s=()=>{o.closeable&&n("close")},d=t=>{t.key==="Escape"&&o.show&&s()};B(()=>document.addEventListener("keydown",d)),D(()=>{document.removeEventListener("keydown",d),document.body.style.overflow="visible"});const u=V(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[o.maxWidth]);return(t,l)=>(m(),E(U,{to:"body"},[a(f,{"leave-active-class":"duration-200"},{default:r(()=>[p(e("div",F,[a(f,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[p(e("div",{class:"fixed inset-0 transform transition-all",onClick:s},L,512),[[y,t.show]])]),_:1}),a(f,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[p(e("div",{class:k(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",u.value])},[t.show?h(t.$slots,"default",{key:0}):A("",!0)],2),[[y,t.show]])]),_:3})],512),[[y,t.show]])]),_:3})]))}}),G=["type"],H=v({__name:"SecondaryButton",props:{type:{default:"button"}},setup(c){return(n,o)=>(m(),w("button",{type:n.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[h(n.$slots,"default")],8,G))}}),J={class:"space-y-6"},Q=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),R={class:"p-6"},X=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),Y=e("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),Z={class:"mt-6"},ee={class:"mt-6 flex justify-end"},ae=v({__name:"DeleteUserForm",setup(c){const n=g(!1),o=g(null),s=S({password:""}),d=()=>{n.value=!0,T(()=>{var l;return(l=o.value)==null?void 0:l.focus()})},u=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>t(),onError:()=>{var l;return(l=o.value)==null?void 0:l.focus()},onFinish:()=>{s.reset()}})},t=()=>{n.value=!1,s.reset()};return(l,x)=>(m(),w("section",J,[Q,a(b,{onClick:d},{default:r(()=>[_("Delete Account")]),_:1}),a(q,{show:n.value,onClose:t},{default:r(()=>[e("div",R,[X,Y,e("div",Z,[a(K,{for:"password",value:"Password",class:"sr-only"}),a(M,{id:"password",ref_key:"passwordInput",ref:o,modelValue:i(s).password,"onUpdate:modelValue":x[0]||(x[0]=$=>i(s).password=$),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:N(u,["enter"])},null,8,["modelValue","onKeyup"]),a(O,{message:i(s).errors.password,class:"mt-2"},null,8,["message"])]),e("div",ee,[a(H,{onClick:t},{default:r(()=>[_(" Cancel ")]),_:1}),a(b,{class:k(["ml-3",{"opacity-25":i(s).processing}]),disabled:i(s).processing,onClick:u},{default:r(()=>[_(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}});export{ae as _};
