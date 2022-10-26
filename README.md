## How to setup  Project 
    git clone 

<hr/>

## Installation from npm with MYSQL driver
    npm init 
    npm install --save sequelize mysql2 sequelize-cli express body-parser
    sequelize init or sequelize-cli init   or npx  sequelize-cli init 

## Change Database Configuration  and Migration 
    npx sequelize-cli db:migrate  

    OR

    sequelize-cli  db:migrate 

## Run Server 

    npm start

## Create Model 
  Example : 
  
     /* ----  System and User ---/*
     
   npx sequelize-cli model:generate --name Users --attributes    
fname:string,lname:string,sex:string,phone:string,email:string,username:string,password:string,role_id:integer,status:integer,token:string


npx sequelize-cli model:generate --name Roles --attributes role_name:string,role_status:integer


npx sequelize-cli model:generate --name AccessList --attributes acce_name:string,acce_url:string,acce_isMenu:integer,acce_subof:integer,acce_type:string


npx sequelize-cli model:generate --name RoleAccess --attributes role_id:integer,access_id:integer


/* ----- Guest or Visitor ----- */


npx sequelize-cli model:generate --name Applicator --attributes fname:string,lname:string,sex:string,national_id:string,dob:string,pob:string,address:string,phone:string,email:string,edu_level:integer,school:string,perstionl_status:string,photo:string,username:string,password:string


/* -----  Application -->

npx sequelize-cli model:generate --name Applications --attributes app_name:string,app_ministry:string,app_desc:string,app_startOn:string,app_closeON:string,app_status:integer


/* ----- Applied List  ---*/
 
 sequelize model:generate --name  AppliedList --attributes

 app_id:integer,
 applyer_id:integer,
 appl_on:string,
 appl_type:string

 /* ---- Applied Attachment -- */

sequelize model:generate --name  AppliedDocs --attributes
appl_id:integer,
appl_docs_name:string,
appl_file:string
