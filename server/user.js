const express = require('express');
const userDB = require('./db_manager/user');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    p = userDB.getPasswardByName(username);
    if (p !== null && p === password) {
        res.send(userDB.getUserByName(username));
    }
    else{
        res.status(401).send({ error: 'Invalid credentials' });
    }
});

router.post('/register', (req, res) => {
    const newUser = req.body;
    try{
        user = userDB.addUser(newUser);
        res.send(user);
    } 
    catch (error) {
        res.status(400).send({error: error.message})
    }
});

router.put('/user/:id', (req, res) => {
    try{
        const updatedUser = req.body;
        const id = req.params.id;
        userDB.updateUser(id, updatedUser);
        res.send(updatedUser);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
