import w from"./ArticlesListItem.brllDDo4.js";import k from"./ProseA.mXQaSoME.js";import v from"./ProseCodeInline.cVLdzCAN.js";import{u as I}from"./asyncData.6GjvMzoP.js";import{q as g}from"./query.43fpjKg6.js";import{d as A,X as S,H as C,I as r,b as a,c as n,e as o,g as i,F as b,Y as B,j as e,w as d,p as L,i as N,Z as V,W as q,l as F}from"./entry.YWA0lX9t.js";import"./preview.w8hOXHSH.js";import"./date.3uOv5BcS.js";const P=t=>(L("data-v-b83c54e7"),t=t(),N(),t),T={key:0,class:"articles-list"},Y={class:"featured"},j={class:"layout"},D={key:1,class:"tour"},E=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),H=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const u=t,{data:m}=([s,l]=S(async()=>I("articles",async()=>await g(V(u.path)).sort({date:-1}).find())),s=await s,l(),s),c=C(()=>m.value||[]);return(W,X)=>{var p;const _=w,f=k,h=v;return(p=r(c))!=null&&p.length?(a(),n("div",T,[o("div",Y,[i(_,{article:r(c)[0],featured:!0},null,8,["article"])]),o("div",j,[(a(!0),n(b,null,B(r(c).slice(1),(y,x)=>(a(),q(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),n("div",D,[E,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),R=F(H,[["__scopeId","data-v-b83c54e7"]]);export{R as default};