"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={},o="Writing Migration",l={unversionedId:"migration/writing-migration",id:"migration/writing-migration",title:"Writing Migration",description:"Each migration contains two methods: up and down. The up method is used to alter the database schema, such as adding new tables, columns or indexes, while the down method revert the actions performed in the up method.",source:"@site/docs/03-migration/02-writing-migration.md",sourceDirName:"03-migration",slug:"/migration/writing-migration",permalink:"/SeaORM/docs/next/migration/writing-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/03-migration/02-writing-migration.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1680343373,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Migration",permalink:"/SeaORM/docs/next/migration/setting-up-migration"},next:{title:"Running Migration",permalink:"/SeaORM/docs/next/migration/running-migration"}},s={},m=[{value:"Creating Migrations",id:"creating-migrations",level:2},{value:"Defining Migration",id:"defining-migration",level:2},{value:"SeaQuery",id:"seaquery",level:3},{value:"Schema Creation Methods",id:"schema-creation-methods",level:4},{value:"Schema Mutation Methods",id:"schema-mutation-methods",level:4},{value:"Schema Inspection Methods",id:"schema-inspection-methods",level:4},{value:"Combining Multiple Schema Changes in one Migration",id:"combining-multiple-schema-changes-in-one-migration",level:2},{value:"Raw SQL",id:"raw-sql",level:3},{value:"Atomic Migration",id:"atomic-migration",level:2},{value:"Schema first or Entity first?",id:"schema-first-or-entity-first",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-migration"},"Writing Migration"),(0,r.kt)("p",null,"Each migration contains two methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"down"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method is used to alter the database schema, such as adding new tables, columns or indexes, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method revert the actions performed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method."),(0,r.kt)("h2",{id:"creating-migrations"},"Creating Migrations"),(0,r.kt)("p",null,"Generate a new migration file by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli migrate generate")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sea-orm-cli migrate generate NAME_OF_MIGRATION [--local-time]\n\n# E.g. to generate `migration/src/m20220101_000001_create_table.rs` shown below\nsea-orm-cli migrate generate create_table\n")),(0,r.kt)("p",null,"Or you can create a migration file using the template below. Name the file according to the naming convention ",(0,r.kt)("inlineCode",{parentName:"p"},"mYYYYMMDD_HHMMSS_migration_name.rs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220101_000001_create_table.rs"',title:'"migration/src/m20220101_000001_create_table.rs"'},"use sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table( ... )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table( ... )\n            .await\n    }\n}\n")),(0,r.kt)("p",null,"Additionally, you have to include the new migration in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm-migration/*/sea_orm_migration/migrator/trait.MigratorTrait.html#tymethod.migrations"},(0,r.kt)("inlineCode",{parentName:"a"},"MigratorTrait::migrations"))," method. Note that the migrations should be sorted in chronological order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/lib.rs"',title:'"migration/src/lib.rs"'},"pub use sea_orm_migration::*;\n\nmod m20220101_000001_create_table;\n\npub struct Migrator;\n\n#[async_trait]\nimpl MigratorTrait for Migrator {\n    fn migrations() -> Vec<Box<dyn MigrationTrait>> {\n        vec![\n            Box::new(m20220101_000001_create_table::Migration),\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"defining-migration"},"Defining Migration"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm-migration/*/sea_orm_migration/manager/struct.SchemaManager.html"},(0,r.kt)("inlineCode",{parentName:"a"},"SchemaManager"))," for API reference."),(0,r.kt)("h3",{id:"seaquery"},"SeaQuery"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query#table-create"},"here")," to take a quick tour of SeaQuery's DDL statements."),(0,r.kt)("p",null,"You would need ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query#iden"},(0,r.kt)("inlineCode",{parentName:"a"},"sea_query::Iden"))," to define identifiers that will be used in your migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Iden)]\nenum Post {\n    Table,\n    Id,\n    Title,\n    #[iden = "text"] // Renaming the identifier\n    Text,\n    Category,\n}\n\nassert_eq!(Post::Table.to_string(), "post");\nassert_eq!(Post::Id.to_string(), "id");\nassert_eq!(Post::Title.to_string(), "title");\nassert_eq!(Post::Text.to_string(), "text");\n')),(0,r.kt)("h4",{id:"schema-creation-methods"},"Schema Creation Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{EnumIter, Iterable};\n\n#[derive(Iden)]\nenum Post {\n    Table,\n    Id,\n    Title,\n    #[iden = "text"] // Renaming the identifier\n    Text,\n    Category,\n}\n\n#[derive(Iden, EnumIter)]\npub enum Category {\n    Table,\n    #[iden = "Feed"]\n    Feed,\n    #[iden = "Story"]\n    Story,\n}\n\nmanager\n    .create_table(\n        Table::create()\n            .table(Post::Table)\n            .if_not_exists()\n            .col(\n                ColumnDef::new(Post::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key(),\n            )\n            .col(ColumnDef::new(Post::Title).string().not_null())\n            .col(ColumnDef::new(Post::Text).string().not_null())\n            .col(\n                ColumnDef::new(Column::Category)\n                    .enumeration(Category, [Category::Feed, Category::Story]),\n                    // Or, write it like below.\n                    // Keep in mind that for it to work,\n                    // 1. you need to derive `EnumIter`,\n                    // 2. import `Iterable` into scope\n                    // 3. and make sure `Category::Table` is the first variant\n                    .enumeration(Category, Category::iter().skip(1)),\n            )\n            .to_owned(),\n    )\n    .await\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Index"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_index(sea_query::Index::create()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Foreign Key"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_foreign_key(sea_query::ForeignKey::create()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Data Type (PostgreSQL only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{EnumIter, Iterable};\n\n#[derive(Iden, EnumIter)]\npub enum Category {\n    Table,\n    #[iden = "Feed"]\n    Feed,\n    #[iden = "Story"]\n    Story,\n}\n\nmanager\n    .create_type(\n        Type::create()\n            .as_enum(Category::Table)\n            .values([Category::Feed, Category::Story])\n            // Or, write it like below.\n            // Keep in mind that for it to work,\n            // 1. you need to derive `EnumIter`,\n            // 2. import `Iterable` into scope\n            // 3. and make sure `Category::Table` is the first variant\n            .values(Category::iter().skip(1))\n            .to_owned(),\n    )\n    .await?;\n')))),(0,r.kt)("h4",{id:"schema-mutation-methods"},"Schema Mutation Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use entity::post;\n\nmanager.drop_table(sea_query::Table::drop()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alter Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.alter_table(sea_query::Table::alter()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rename Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.rename_table(sea_query::Table::rename()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Truncate Table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.truncate_table(sea_query::Table::truncate()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Index"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_index(sea_query::Index::drop()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Foreign Key"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_foreign_key(sea_query::ForeignKey::drop()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alter Data Type (PostgreSQL only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.alter_type(sea_query::Type::alter()..)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop Data Type (PostgreSQL only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_type(sea_query::Type::drop()..)\n")))),(0,r.kt)("h4",{id:"schema-inspection-methods"},"Schema Inspection Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Has Table",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.has_table(table_name)\n"))),(0,r.kt)("li",{parentName:"ul"},"Has Column",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"manager.has_column(table_name, column_name)\n")))),(0,r.kt)("h2",{id:"combining-multiple-schema-changes-in-one-migration"},"Combining Multiple Schema Changes in one Migration"),(0,r.kt)("p",null,"You can combine multiple changes within both up and down migration functions. Here is a complete example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n\n    manager\n        .create_table(\n            sea_query::Table::create()\n                .table(Post::Table)\n                .if_not_exists()\n                .col(\n                    ColumnDef::new(Post::Id)\n                        .integer()\n                        .not_null()\n                        .auto_increment()\n                        .primary_key()\n                )\n                .col(ColumnDef::new(Post::Title).string().not_null())\n                .col(ColumnDef::new(Post::Text).string().not_null())\n                .to_owned()\n        )\n        .await?\n    \n    manager\n        .create_index(\n            Index::create()\n                .if_not_exists()\n                .name("idx-post_title")\n                .table(Post::Table)\n                .col(Post::Title)                        \n                .to_owned(),\n        )\n        .await?;\n    \n    Ok(()) // All good!\n}\n')),(0,r.kt)("p",null,"and here we have the matching down function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n    \n    manager.drop_index(Index::drop().name("idx-post-title").to_owned())\n    .await?;\n    \n    manager.drop_table(Table::drop().table(Post::Table).to_owned())\n    .await?;\n\n    Ok(()) // All good!\n}\n')),(0,r.kt)("h3",{id:"raw-sql"},"Raw SQL"),(0,r.kt)("p",null,"You can write migration files in raw SQL, but then you lost the multi-backend compatibility SeaQuery offers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220101_000001_create_table.rs"',title:'"migration/src/m20220101_000001_create_table.rs"'},'use sea_orm::Statement;\nuse sea_orm_migration::prelude::*;\n\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let db = manager.get_connection();\n\n        // Use `execute_unprepared` if the SQL statement doesn\'t have value bindings\n        db.execute_unprepared(\n            "CREATE TABLE `cake` (\n                `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,\n                `name` varchar(255) NOT NULL\n            )"\n        )\n        .await?;\n\n        // Construct a `Statement` if the SQL contains value bindings\n        let stmt = Statement::from_sql_and_values(\n            manager.get_database_backend(),\n            r#"INSERT INTO `cake` (`name`) VALUES (?)"#,\n            ["Cheese Cake".into()]\n        );\n        db.execute(stmt).await?;\n\n        Ok(())\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .get_connection()\n            .execute_unprepared("DROP TABLE `cake`")\n            .await?;\n\n        Ok(())\n    }\n}\n')),(0,r.kt)("h2",{id:"atomic-migration"},"Atomic Migration"),(0,r.kt)("p",null,"Migration will be executed in Postgres atomically that means migration scripts will be executed inside a transaction. Changes done to the database will be rolled back if the migration failed. However, atomic migration is not supported in MySQL and SQLite."),(0,r.kt)("p",null,"You can start a transaction inside each migration to perform operations like ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/migration/seeding-data#seeding-data-transactionally"},"seeding sample data")," for a newly created table."),(0,r.kt)("h2",{id:"schema-first-or-entity-first"},"Schema first or Entity first?"),(0,r.kt)("p",null,"In the grand scheme of things, we recommend a schema first approach: you write migrations first and then generate entities from a live database."),(0,r.kt)("p",null,"At times, you might want to use the ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/schema-statement/create-table"},(0,r.kt)("inlineCode",{parentName:"a"},"create_*_from_entity"))," methods to bootstrap your database with several hand written entity files."),(0,r.kt)("p",null,"That's perfectly fine if you intend to never change the entity schema. Or, you can keep the original entity and embed a copy in the migration file."))}c.isMDXComponent=!0}}]);