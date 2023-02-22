"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},o="Save",l={unversionedId:"basic-crud/save",id:"version-0.8.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.8.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/pr-preview/pr-94/SeaORM/docs/0.8.x/basic-crud/save",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/05-basic-crud/04-save.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677057356,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/pr-preview/pr-94/SeaORM/docs/0.8.x/basic-crud/update"},next:{title:"Delete",permalink:"/pr-preview/pr-94/SeaORM/docs/0.8.x/basic-crud/delete"}},s={},p=[{value:"Save Behaviour",id:"save-behaviour",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"save"},"Save"),(0,n.kt)("p",null,"This is a helper method to save (insert / update) ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,n.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,n.kt)("p",null,"When saving an ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,n.kt)("inlineCode",{parentName:"li"},"NotSet")),(0,n.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,n.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\nlet banana = fruit::ActiveModel {\n    id: NotSet, // primary key is NotSet\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\n// Insert, because primary key `id` is `NotSet`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Unchanged`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n')))}d.isMDXComponent=!0}}]);