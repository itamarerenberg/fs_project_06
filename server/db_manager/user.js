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

    // return {
    //     "id": 3,
    //     "name": "Clementine Bauch",
    //     "username": "Samantha",
    //     "email": "Nathan@yesenia.net",
    //     "address": {
    //         "street": "Douglas Extension",
    //         "suite": "Suite 847",
    //         "city": "McKenziehaven",
    //         "zipcode": "59590-4157",
    //         "geo": {
    //             "lat": "-68.6102",
    //             "lng": "-47.0653"
    //         }
    //     },
    //     "phone": "1-464-123-4444",
    //     "website": "ramiro.info",
    //     "company": {
    //         "name": "Romaguera-Jacobson",
    //         "catchPhrase": "Face to face bifurcated interface",
    //         "bs": "e-enable strategic applications"
    //     }
    // };
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
                        db.query(query, [insertedId, user.password], (error, results) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(insertedId);
                            }
                        });
                    }));

                // resolve(insertedId);
            }
        });
    });
}

function updateUser(id, updatedUser){
    validateUser(updatedUser)

    return new Promise((resolve, reject) => {
        const query = `
            UPDATE  users
            SET name=?, username=?, email=?, phone=?, website=?, deleted=?
            WHERE id=? 
            `
        db.query(query, [user.name, user.username, user.email, user.phone, user.website, user.deleted, id], (error, results) => {
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
