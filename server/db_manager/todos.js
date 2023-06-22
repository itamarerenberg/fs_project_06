const db_warper = require('./db_warper');

db = db_warper.getInstance();

async function getTodosByUserID(userId){

    return new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM 
            todos
            WHERE userId = ?
            `
        db.query(query, [userId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

async function addTodo(todo){
    return new Promise((resolve, reject) => {
        const query = 
            `INSERT INTO todos
            (userId, title, completed, deleted)
            VALUES (?, ?, ?, ?);`;
        
        db.query(query, [todo.userId, todo.title, false, false], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results.insertId;
                resolve(insertedId);
            }
        });
    });
}  

async function updateTodo(todo){
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE todos
            SET userId=?, title=?, completed=?, deleted=?
            WHERE id=? 
            `
        db.query(query, [todo.userId, todo.title, todo.completed, todo.deleted, todo.id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results[0];
                resolve(insertedId);
            }
        });
    });
}

// async function deletePost(){

// }

module.exports = {getTodosByUserID, addTodo, updateTodo};
