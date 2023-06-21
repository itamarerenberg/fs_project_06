const db_warper = require('./db_warper');

db = db_warper.getInstance();

async function getTodosByUserID(userId){

    query = `
    SELECT *
    FROM todos
    WHERE user_id = ?;`;

    return await db.async_query(query, [userId]);
}

async function addTodo(todo){
    query = `
    INSERT INTO todos
    (id, user_id, title, completed, deleted)
    VALUES (?, ?, ?, ?);`;

    return await db.async_query(query, [todo.id, todo.userId, todo.title, todo.completed, todo.deleted]);
//(id, user_id, title, body)
}  

async function updateTodo(todo){
    query = `
    UPDATE posts
    SET user_id=?, title=?, completed=?, deleted=?)
    WHERE id=?;`;

    return await db.async_query(query, [todo.userId, todo.title, todo.body, todo.deleted, todo.id]);
}

// async function deletePost(){

// }

module.exports = {getTodosByUserID, addTodo, updateTodo};
