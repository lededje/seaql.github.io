"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8999],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={},a="Self Referencing",l={unversionedId:"relation/self-referencing",id:"version-0.6.x/relation/self-referencing",title:"Self Referencing",description:"In previous section, we introduced the Linked trait. It can also help you define self referencing relations.",source:"@site/versioned_docs/version-0.6.x/07-relation/05-self-referencing.md",sourceDirName:"07-relation",slug:"/relation/self-referencing",permalink:"/pr-preview/pr-94/SeaORM/docs/0.6.x/relation/self-referencing",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/07-relation/05-self-referencing.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677056595,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chained Relations",permalink:"/pr-preview/pr-94/SeaORM/docs/0.6.x/relation/chained-relations"},next:{title:"Bakery Schema",permalink:"/pr-preview/pr-94/SeaORM/docs/0.6.x/relation/bakery-schema"}},c={},s=[],p={toc:s};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"self-referencing"},"Self Referencing"),(0,i.kt)("p",null,"In previous section, we introduced the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.6/sea_orm/entity/trait.Linked.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Linked"))," trait. It can also help you define self referencing relations."),(0,i.kt)("p",null,"The following example defines an Entity that references itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "self_join")]\npub struct Model {\n    #[sea_orm(primary_key, auto_increment = false)]\n    pub uuid: Uuid,\n    pub uuid_ref: Option<Uuid>,\n    pub time: Option<Time>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(belongs_to = "Entity", from = "Column::UuidRef", to = "Column::Uuid")]\n    SelfReferencing,\n}\n\npub struct SelfReferencingLink;\n\nimpl Linked for SelfReferencingLink {\n    type FromEntity = Entity;\n\n    type ToEntity = Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![Relation::SelfReferencing.def()]\n    }\n}\n')))}f.isMDXComponent=!0}}]);