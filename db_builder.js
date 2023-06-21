
tables = {
    users: {
        columns:[
            'id INT PRIMARI KEY',
            'name VARCHARE(255)',
            'address_id INT',
            'phone VARCHAR(255)',
            'website VARCHAR(255)',
            'company_id INT'
        ],
        constraints: [
            'PRIMARY KEY(id)',
            'FORGIN KEY(address_id) REFERENCES adress(id)',
            'FORGIN KEY(company_id) REFERENCES companies(id)'
        ]
    },
    
    posts: {
        columns:[
            'id INT',
            'user_id INT',
            'title VARCHAR(255)',
            'body TEXT',
        ],
        constraints: [
            'PRIMARY KEY(id)',
            'FORGIN KEY(user_id) REFERENCES users(id)',
        ]
    },
    
    comments: {
        columns:[
            'id INT',
            'post_id INT',
            'name VARCHAR(255)',
            'email VARCHAR(255)',
            'body TEXT',
        ],
        constraints: [
            'PRIMARY KEY(id)',
            'FORGIN KEY(post_id) REFERENCES posts(id)',
        ]
    },
    
    todos: {
        columns:[
            'id INT',
            'user_id INT',
            'title VARCHAR(255)',
            'complited BOOLEAN',
            'deleted BOOLEAN'
        ],
        constraints: [
            'PRIMARY KEY(id)',
            'FORGIN KEY(user_id) REFERENCES users(id)',
        ]
    },
    
    user_pwd: {
        columns:[
            'user_id INT',
            'password VARCHAR(255)' //TODO: handle encryption 
        ],
        constraints: [
            'UNIQUE FORGIN KEY(user_id) REFERENCES users(id)',
        ]
    },
    
    addresses:{
        columns:[
            'id INT',
            'street VARCHAR(255)',
            'suite VARCHAR(255)',
            'city VARCHAR(255)',
            'zipcode VARCHAR(255)',
            'geo_lat VARCHAR(255)',
            'geo_lng VARCHAR(255)',
        ],
        constraints: [
            'PRIMARY KEY(id) AUTO_INCREMENT',
        ]
    },
    
    companies: {
        columns: [
            'id INT',
            'name VARCHAR(255)',
            'catchPhrase VARCHAR(255)',
            'bs VARCHAR(255)',
        ],
        constraints: [
            'PRIMARY KEY(id) AUTO_INCREMENT',
        ]
    },
}


const mysql = require('mysql')

const username = 'root'
const pwd = ''

db_name = 'fs_proj_06_db'

//create db
const con = mysql.createConnection({
    host: '127.0.0.1',
    user: username,
    password: pwd,
})

con.connect((err, res) => {
    if (err) throw err;
    console.log('connecteted!')
    con.query(`CREATE DATABASE ${db_name};`, (err, res) => {
        if (err) throw err;
        console.log(`database ${db_name} created sucessfuly!`)
        console.log(`${con.database}`)
    })
})

// con.database = db_name

// con.connect((err, res) => {
//     if (err) throw err;
//     console.log('connecteted!');
//     build_db();
// })
const con1 = mysql.createConnection({
    host: '127.0.0.1',
    user: username,
    password: pwd,
    database: db_name
})

con1.connect((res, err) => {

})

function build_db(){
    //create tabels
    for (tbl in tables){
        //create table
        con.query(`CREATE TABLE ${tbl} (${tbl.columns.join(', ')});`, res => console.log(`${tbl} created!`))
    }

    //add constraints
    for (tbl in tables){
        con.query(`ALTER TABLE ${tbl} ADD ${tbl.constraints.join(', ')}`, res => res => console.log(`added constraints to ${tbl}!`))
    }
}



