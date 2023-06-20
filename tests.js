// const mysql = require('mysql')

// console.log('started...');

// const username = 'root'
// const pwd = ''

// const db_name = 'test1'

// //create db
// const con = mysql.createConnection({
//     host: '127.0.0.1',
//     user: username,
//     password: pwd,
// })

// con.connect((err, res) => {
//     if (err) throw err;
//     console.log('connecteted!')
//     con.query(`CREATE DATABASE ${db_name};`, (err, res) => {
//         if (err) throw err;
//         console.log(`database ${db_name} created sucessfuly!`)
//     })
// })

var l = [1, 2, 3]
console.log(l.join(', '))