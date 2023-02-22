"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8372],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||o;return t?a.createElement(m,s(s({ref:n},d),{},{components:t})):a.createElement(m,s({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={},s="Mock Interface",i={unversionedId:"write-test/mock",id:"version-0.6.x/write-test/mock",title:"Mock Interface",description:"You can unit test your application logic using the mock database interface.",source:"@site/versioned_docs/version-0.6.x/08-write-test/02-mock.md",sourceDirName:"08-write-test",slug:"/write-test/mock",permalink:"/pr-preview/pr-94/SeaORM/docs/0.6.x/write-test/mock",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/08-write-test/02-mock.md",tags:[],version:"0.6.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677057356,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Robust & Correct",permalink:"/pr-preview/pr-94/SeaORM/docs/0.6.x/write-test/testing"},next:{title:"Using SQLite",permalink:"/pr-preview/pr-94/SeaORM/docs/0.6.x/write-test/sqlite"}},c={},l=[{value:"Mocking Query Result",id:"mocking-query-result",level:2},{value:"Mocking Execution Result",id:"mocking-execution-result",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mock-interface"},"Mock Interface"),(0,r.kt)("p",null,"You can unit test your application logic using the mock database interface."),(0,r.kt)("p",null,"The mock database has no data in it, so you have to define the expected data to be returned when CRUD operations are performed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The query result should be provided to support select operations"),(0,r.kt)("li",{parentName:"ul"},"The exec result should be provided to support insert, update, and delete operations")),(0,r.kt)("p",null,"To ensure the correctness of your application logic, you can also validate the transaction log in the mock database."),(0,r.kt)("p",null,"Check out how we write unit tests using mock connection ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/executor/paginator.rs#L250"},"here"),"."),(0,r.kt)("h2",{id:"mocking-query-result"},"Mocking Query Result"),(0,r.kt)("p",null,"We create a mock database for PostgreSQL with ",(0,r.kt)("inlineCode",{parentName:"p"},"MockDatabase::new(DatabaseBackend::Postgres)"),". Then, query results are prepared using the ",(0,r.kt)("inlineCode",{parentName:"p"},"append_query_results")," method. Note that we pass a vector of vectors to it, representing multiple query results, each with more than one model. Finally, we convert it into a connection and use it to perform CRUD operations just like a normal live connection."),(0,r.kt)("p",null,"One special thing about ",(0,r.kt)("inlineCode",{parentName:"p"},"MockDatabase")," is that you can check the transaction log of it. Any SQL query run on the mock database will be recorded; you can validate each of the log to ensure the correctness of your application logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use sea_orm::{\n        entity::prelude::*, entity::*, tests_cfg::*,\n        DatabaseBackend, MockDatabase, Transaction,\n    };\n\n    #[async_std::test]\n    async fn test_find_cake() -> Result<(), DbErr> {\n        // Create MockDatabase with mock query results\n        let db = MockDatabase::new(DatabaseBackend::Postgres)\n            .append_query_results(vec![\n                // First query result\n                vec![cake::Model {\n                    id: 1,\n                    name: "New York Cheese".to_owned(),\n                }],\n                // Second query result\n                vec![\n                    cake::Model {\n                        id: 1,\n                        name: "New York Cheese".to_owned(),\n                    },\n                    cake::Model {\n                        id: 2,\n                        name: "Chocolate Forest".to_owned(),\n                    },\n                ],\n            ])\n            .append_query_results(vec![\n                // Third query result\n                vec![(\n                    cake::Model {\n                        id: 1,\n                        name: "Apple Cake".to_owned(),\n                    },\n                    fruit::Model {\n                        id: 2,\n                        name: "Apple".to_owned(),\n                        cake_id: Some(1),\n                    },\n                )],\n            ])\n            .into_connection();\n\n        // Find a cake from MockDatabase\n        // Return the first query result\n        assert_eq!(\n            cake::Entity::find().one(&db).await?,\n            Some(cake::Model {\n                id: 1,\n                name: "New York Cheese".to_owned(),\n            })\n        );\n\n        // Find all cakes from MockDatabase\n        // Return the second query result\n        assert_eq!(\n            cake::Entity::find().all(&db).await?,\n            vec![\n                cake::Model {\n                    id: 1,\n                    name: "New York Cheese".to_owned(),\n                },\n                cake::Model {\n                    id: 2,\n                    name: "Chocolate Forest".to_owned(),\n                },\n            ]\n        );\n\n        // Find all cakes with its related fruits\n        assert_eq!(\n            cake::Entity::find()\n                .find_also_related(fruit::Entity)\n                .all(&db)\n                .await?,\n            vec![(\n                cake::Model {\n                    id: 1,\n                    name: "Apple Cake".to_owned(),\n                },\n                Some(fruit::Model {\n                    id: 2,\n                    name: "Apple".to_owned(),\n                    cake_id: Some(1),\n                })\n            )]\n        );\n\n        // Checking transaction log\n        assert_eq!(\n            db.into_transaction_log(),\n            vec![\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"SELECT "cake"."id", "cake"."name" FROM "cake" LIMIT $1"#,\n                    vec![1u64.into()]\n                ),\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#,\n                    vec![]\n                ),\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"SELECT "cake"."id" AS "A_id", "cake"."name" AS "A_name", "fruit"."id" AS "B_id", "fruit"."name" AS "B_name", "fruit"."cake_id" AS "B_cake_id" FROM "cake" LEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id""#,\n                    vec![]\n                ),\n            ]\n        );\n\n        Ok(())\n    }\n}\n')),(0,r.kt)("h2",{id:"mocking-execution-result"},"Mocking Execution Result"),(0,r.kt)("p",null,"This is very similar to mocking query result, the differences are that we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"append_exec_results")," method here and we perform insert, update, and delete operations here in the unit test. The ",(0,r.kt)("inlineCode",{parentName:"p"},"append_exec_results")," method takes a vector of ",(0,r.kt)("inlineCode",{parentName:"p"},"MockExecResult"),", each representing the exec result of the corresponding operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use sea_orm::{\n        entity::prelude::*, entity::*, tests_cfg::*,\n        DatabaseBackend, MockDatabase, MockExecResult, Transaction,\n    };\n\n    #[async_std::test]\n    async fn test_insert_cake() -> Result<(), DbErr> {\n        // Create MockDatabase with mock execution result\n        let db = MockDatabase::new(DatabaseBackend::Postgres)\n            .append_query_results(vec![\n                vec![cake::Model {\n                    id: 15,\n                    name: "Apple Pie".to_owned(),\n                }],\n                vec![cake::Model {\n                    id: 16,\n                    name: "Apple Pie".to_owned(),\n                }],\n            ])\n            .append_exec_results(vec![\n                MockExecResult {\n                    last_insert_id: 15,\n                    rows_affected: 1,\n                },\n                MockExecResult {\n                    last_insert_id: 16,\n                    rows_affected: 1,\n                },\n            ])\n            .into_connection();\n\n        // Prepare the ActiveModel\n        let apple = cake::ActiveModel {\n            name: Set("Apple Pie".to_owned()),\n            ..Default::default()\n        };\n\n        // Insert the ActiveModel into MockDatabase\n        assert_eq!(\n            apple.clone().insert(&db).await?,\n            cake::Model {\n                id: 15,\n                name: "Apple Pie".to_owned()\n            }\n        );\n\n        // If you want to check the last insert id\n        let insert_result = cake::Entity::insert(apple).exec(&db).await?;\n        assert_eq!(insert_result.last_insert_id, 16);\n\n        // Checking transaction log\n        assert_eq!(\n            db.into_transaction_log(),\n            vec![\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id", "name""#,\n                    vec!["Apple Pie".into()]\n                ),\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id""#,\n                    vec!["Apple Pie".into()]\n                ),\n            ]\n        );\n\n        Ok(())\n    }\n}\n')))}u.isMDXComponent=!0}}]);