"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={},i="Tutorial & Examples",s={unversionedId:"introduction/tutorial",id:"version-0.10.x/introduction/tutorial",title:"Tutorial & Examples",description:"If you prefer step-by-step tutorials on how to use SeaORM, you can checkout our SeaORM Tutorials.",source:"@site/versioned_docs/version-0.10.x/01-introduction/04-tutorial.md",sourceDirName:"01-introduction",slug:"/introduction/tutorial",permalink:"/SeaORM/docs/0.10.x/introduction/tutorial",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/01-introduction/04-tutorial.md",tags:[],version:"0.10.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680343373,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeaORM Concepts",permalink:"/SeaORM/docs/0.10.x/introduction/sea-orm"},next:{title:"Database & Async Runtime",permalink:"/SeaORM/docs/0.10.x/install-and-config/database-and-async-runtime"}},l={},p=[],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial--examples"},"Tutorial & Examples"),(0,o.kt)("p",null,"If you prefer step-by-step tutorials on how to use SeaORM, you can checkout our ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorials"),"."),(0,o.kt)("p",null,"It's a good idea to have a grasp of the basic concepts first, so let's continue."),(0,o.kt)("p",null,"If you are so eager and want something grab-and-go, SeaQL maintains a set of official examples contributed by the community (we welcome more!):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix v4 Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix3_example"},"Actix v3 Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example"))),(0,o.kt)("p",null,"If you are building a web API that perform selecting nested relation extensively. Consider serving a GraphQL server instead. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"seaography"),' is a GraphQL framework for building GraphQL resolvers using SeaORM entities. With GraphQL resolver in place select above nested relation is straightforward and easy. Check "',(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/#query-data-via-graphql"},"Getting Started with Seaography"),'" to learn more.'),(0,o.kt)("p",null,"You can also check ",(0,o.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-cookbook/"},"SeaORM Cookbook")," for frequently asked questions and the best practice of SeaORM."))}u.isMDXComponent=!0}}]);