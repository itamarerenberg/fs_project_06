const db_warper = require('./db_warper');

db = db_warper.getInstance();


function getUserByName(name){

    return new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM users
            WHERE username = ?
            `
        db.query(query, [name], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results[0];
                resolve(insertedId);
            }
        });
    });
}

function getPasswardByName(name){
    return new Promise((resolve, reject) => {
        const query = `
            SELECT password FROM 
            user_pwd 
            INNER JOIN
            users
            ON users.id = user_pwd.useId
            WHERE username = ?
            `
        db.query(query, [name], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results[0];
                resolve(insertedId);
            }
        });
    });

}

function addUser(user) {
    return new Promise((resolve, reject) => {
        const query = 
            `INSERT INTO users
            (name, username, email, phone, website, deleted)
            VALUES (?, ?, ?, ?, ?, ?);`;
        
        db.query(query, [user.name, user.username, user.email, user.phone, user.website, false], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results.insertId;
                resolve(
                    new Promise((resolve, reject) => {
                        const query = `
                        INSERT INTO user_pwd
                        (userId, password)
                        VALUES (?, ?)
                        `
                        db.query(query, [insertedId, user.passward], (error, results) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(insertedId);
                            }
                        });
                    }));
            }
        });
    });
}

function updateUser(user){
    validateUser(user)

    return new Promise((resolve, reject) => {
        const query = `
            UPDATE users
            SET name=?, username=?, email=?, phone=?, website=?, deleted=?
            WHERE id=? 
            `
        db.query(query, [user.name, user.username, user.email, user.phone, user.website, user.deleted, user.id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const insertedId = results[0];
                resolve(insertedId);
            }
        });
    });

    //implement updating
}

function validateUser(user){
    //implement testing - throws correct exception


    return true;
}

module.exports.getUserByName = getUserByName;
module.exports.getPasswardByName = getPasswardByName;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
