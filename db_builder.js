
const tables = {
    addresses:{
        columns:[
            'id INT PRIMARY KEY AUTO_INCREMENT',
            'street VARCHAR(255)',
            'suite VARCHAR(255)',
            'city VARCHAR(255)',
            'zipcode VARCHAR(255)',
            'geo_lat VARCHAR(255)',
            'geo_lng VARCHAR(255)',
        ],
        constraints: [
            // '',
            // 'id ',
        ]
    },
    
    companies: {
        columns: [
            'id INT PRIMARY KEY AUTO_INCREMENT',
            'name VARCHAR(255)',
            'catchPhrase VARCHAR(255)',
            'bs VARCHAR(255)',
        ],
        constraints: [
            // 'PRIMARY KEY(id)',
            // 'id AUTO_INCREMENT',
        ]
    },

    users: {
        columns:[
            'id INT',
            'name VARCHAR(255)',
            'address_id INT',
            'phone VARCHAR(255)',
            'website VARCHAR(255)',
            'company_id INT'
        ],
        constraints: [
            'PRIMARY KEY(id)',
            'FOREIGN KEY (address_id) REFERENCES addresses(id)',
            'FOREIGN KEY (company_id) REFERENCES companies(id)'
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
            'FOREIGN KEY (user_id) REFERENCES users(id)',
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
            'FOREIGN KEY (post_id) REFERENCES posts(id)',
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
            'FOREIGN KEY (user_id) REFERENCES users(id)',
        ]
    },
    
    user_pwd: {
        columns:[
            'user_id INT',
            'password VARCHAR(255)' //TODO: handle encryption 
        ],
        constraints: [
            'UNIQUE (user_id)',
            'FOREIGN KEY (user_id) REFERENCES users(id)',
        ]
    },
}


const mysql = require('mysql2')

// const username = 'root'
// const pwd = ''

MYSQL_HOST='127.0.0.1'
MYSQL_USER='root'
MYSQL_PASSWORD=''

db_name = 'fs_proj_06_db'

// console.log(`${process.env.MYSQL_HOST} ${process.env.MYSQL_USER} ${process.env.MYSQL_PASSWORD}`)
// async function main(){
    
// }
const con = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
})

//check if db already exist

con.query(
    `SHOW DATABASES LIKE '${db_name}';`,
    (err, res) => {
        if (err) throw err;
        
        if (res.length > 0){
            console.log(`droping ${db_name}`);
            con.query(`DROP DATABASE ${db_name};`,
            (err, res) => {
                if (err) throw err;
                console.log(`${db_name} droped!`);
                create_db();
            });
        }
        else create_db();
    }
);

function create_db(){
    con.query(
        `CREATE DATABASE ${db_name};`,

        (err, res) => {
            if (err) throw err;

            console.log(`${db_name} created!`);
            
            con.query(
                `USE ${db_name}`,
                (err, res) => {
                    if (err) throw err;
                    console.log(`using ${db_name}`);
                    build_db();
            });
        });
}


function build_db(){
    //create tabels
    for (tbl in tables){
        //create table
        console.log(tbl)
        con.query(`CREATE TABLE ${tbl} (${tables[tbl].columns.join(', ')});`, (err, res) => {
            if (err) throw err;
            console.log(`${tbl} created!`)
        })
    }

    //add constraints
    for (tbl in tables){
        for (cons in tables[tbl].constraints){
            con.query(`ALTER TABLE ${tbl} ADD CONSTRAINT ${tables[tbl].constraints[cons]}`, (err, res) => {
                if (err) throw err;
                console.log(`added constraints to ${tbl}!`)
            })
        }
        // con.query(`ALTER TABLE ${tbl} ADD CONSTRAINT (${tables[tbl].constraints.join(', ')})`, (err, res) => {
        //     if (err) throw err;
        //     console.log(`added constraints to ${tbl}!`)
        // })
    }
}



// con.connect((err, res) => {
//     if (err) throw err;
//     console.log('connecteted!')
//     con.query(`CREATE DATABASE ${db_name};`, (err, res) => {
//         if (err) throw err;
//         console.log(`database ${db_name} created sucessfuly!`)
//         console.log(`${con.database}`)
//     })
// })

// con.database = db_name

// con.connect((err, res) => {
//     if (err) throw err;
//     console.log('connecteted!');
//     build_db();
// })
// const con1 = mysql.createConnection({
//     host: '127.0.0.1',
//     user: username,
//     password: pwd,
//     database: db_name
// })

// con1.connect((res, err) => {

// })

// function build_db(){
//     //create tabels
//     for (tbl in tables){
//         //create table
//         con.query(`CREATE TABLE ${tbl} (${tbl.columns.join(', ')});`, res => console.log(`${tbl} created!`))
//     }

//     //add constraints
//     for (tbl in tables){
//         con.query(`ALTER TABLE ${tbl} ADD ${tbl.constraints.join(', ')}`, res => res => console.log(`added constraints to ${tbl}!`))
//     }
// }



