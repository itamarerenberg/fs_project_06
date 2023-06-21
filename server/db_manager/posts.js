const db_warper = require('./db_warper');

db = db_warper.getInstance();

async function getPostsByUserID(userId){

    query = `
    SELECT *
    FROM posts
    WHERE user_id = ?;`;

    return await db.async_query(query, [userId]);
}

async function addPost(post){
    query = `
    INSERT INTO posts
    (id, user_id, title, body, deleted)
    VALUES (?, ?, ?, ?);`;
    return await db.async_query(query, [post.id, post.userId, post.title, post.body, post.deleted]);
//(id, user_id, title, body)
}  

async function updatePost(post){
    query = `
    UPDATE posts
    SET user_id=?, title=?, body=?, deleted=?)
    WHERE id=?;`;

    return await db.async_query(query, [post.userId, post.title, post.body, post.deleted, post.id]);
}

// async function deletePost(){

// }

module.exports = {getPostsByUserID, addPost, updatePost};
