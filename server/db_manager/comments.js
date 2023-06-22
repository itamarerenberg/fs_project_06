function getCommentsByPostId(postId){
    return new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM 
            comments
            WHERE postId = ?
            `
        db.query(query, [postId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function updateComment(newComment){
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE comments
            SET postId=?, name=?, body=?, email=?, deleted=?
            WHERE id=? 
            `
        db.query(query, [newComment.postId, newComment.name, newComment.body, newComment.email, newComment.deleted, newComment.id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results[0];
                resolve(insertedId);
            }
        });
    });
}

function addComment(newComment){//generate id
    return new Promise((resolve, reject) => {
        const query = 
            `INSERT INTO posts
            (postId, name, body, email, deleted)
            VALUES (?, ?, ?, ?);`;
        
        db.query(query, [newComment.postId, newComment.name, newComment.body, newComment.email, false], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results.insertId;
                resolve(insertedId);
            }
        });
    });
}


function getCommentById(id){
    return new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM 
            comments
            WHERE id = ?
            `
        db.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

module.exports.getCommentsByPostId = getCommentsByPostId;
module.exports.updateComment = updateComment;
module.exports.getCommentById = getCommentById;
module.exports.addComment = addComment;
