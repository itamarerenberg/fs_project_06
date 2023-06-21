const mysql = require('mysql2')

console.log('started...');

const username = 'root'
const pwd = ''

const db_name = 'test1'

//create db
const con = mysql.createConnection({
    host: '127.0.0.1',
    user: username,
    password: pwd,
})

con.query(
    `SHOW DATABASES LIKE '${db_name}';`,
    (err, res) => {
        if (err) throw err;
        
        if (res.length === 0){
            con.query(`CREATE DATABASE ${db_name}`,
            (res, err) => {
                if (err) throw err;
                console.log(`${db_name} created!`);
            });
        }
        else{
            console.log(`${db_name} exisits`);
        }
    }
);

con.query(
    `USE ${db_name};`,
    (err, res) => {
        if (err) throw err;
        console.log(`using ${db_name}`);
    }
);

con.query(
    `CREATE TABLE users (id INT)`,
    (err, res) => {
        if (err) throw err;
        console.log(res);
    }
);


// var l = [1, 2, 3]
// console.log(l.join(', '))