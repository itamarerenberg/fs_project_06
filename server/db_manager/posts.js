const db_warper = require('./db_warper');

db = db_warper.getInstance();

async function getPostsByUserID(userId){
    return new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM 
            posts
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

async function addPost(post){
    return new Promise((resolve, reject) => {
        const query = 
            `INSERT INTO posts
            (userId, title, body, deleted)
            VALUES (?, ?, ?, ?);`;
        
        db.query(query, [post.userId, post.title, post.body, false], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results.insertId;
                resolve(insertedId);
            }
        });
    });
}  

async function updatePost(post){
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE posts
            SET userId=?, title=?, body=?, deleted=?
            WHERE id=? 
            `
        db.query(query, [post.userId, post.title, post.body, post.deleted, post.id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results[0];
                resolve(insertedId);
            }
        });
    });
}

module.exports = {getPostsByUserID, addPost, updatePost};

// module.exports.getPostsByUserID = getPostsByUserID;

// module.exports.updatePost = updatePost;

// module.exports.addPost = addPost;

// module.exports.getPostById = getPostById;
