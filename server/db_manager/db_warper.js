const mysql = require('mysql2');


const MYSQL_HOST='127.0.0.1'
const MYSQL_USER='root'
const MYSQL_PASSWORD=''
const DB_NAME = 'fs_proj_06_db'



class db_warper{
    constructor(){
        this.crete_pool();
    }

    __crete_pool(){
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
}