const db_warper = require('./db_warper');

db = db_warper.getInstance();

async function getPostsByUserID(userId){

    query = `
    SELECT *
    FROM posts
    WHERE user_id = ? AND deleted = FALSE;`;

    return await db.async_query(query, [userId]);
}

async function addPost(post){
    query = `
    INSERT INTO posts
    (userId, title, body, deleted)
    VALUES (?, ?, ?, ?);`;

    return await db.async_query(query, [post.userId, post.title, post.body, false]);
}  

async function updatePost(post){
    query = `
    UPDATE posts
    SET user_id=?, title=?, body=?, deleted=?)
    WHERE id=?;`;

    return await db.async_query(query, [post.userId, post.title, post.body, post.deleted, post.id]);
}

module.exports = {getPostsByUserID, addPost, updatePost};

// module.exports.getPostsByUserID = getPostsByUserID;

// module.exports.updatePost = updatePost;

// module.exports.addPost = addPost;

// module.exports.getPostById = getPostById;