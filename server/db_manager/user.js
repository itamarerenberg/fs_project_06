function getUserByName(name){
    return {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-464-123-4444",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    };
}

function getPasswardByName(name){
    //return null if not exists
    return '1111';
}

function addUser(newUser){
    validateUser(newUser)
    //implement adding
    return newUser //return with id etc'
}

function updateUser(id, updatedUser){
    validateUser(updatedUser)
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
