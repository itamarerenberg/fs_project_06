const mysql = require('mysql2');
const { callbackify } = require('util');


const MYSQL_HOST='127.0.0.1'
const MYSQL_USER='root'
const MYSQL_PASSWORD=''
const DB_NAME = 'fs_proj_06_db'



class db_warper{
    constructor(){
        this.__pool = mysql.createPool(
            {
                connectionLimit : 100, //important
                host     : MYSQL_HOST,
                user     : MYSQL_USER,
                password : MYSQL_PASSWORD,
                database : DB_NAME,
                debug    :  false
            }
        )
    }

    async async_query(_query, param=[]){
        try{
            return await this.__pool.query(_query, param).promise();
        }catch(err){
            console.log(err)
            return []
        }
    }

    query(_query, param=[], callbac=()=>{}){
        return this.__pool.query(_query, param, callbac);
    }
}

let instance;

function getInstance(){
    if (!instance){
        instance = new db_warper();
    }
    return instance;
}

module.exports.getInstance = getInstance;