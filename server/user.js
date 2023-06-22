const express = require('express');
const userDB = require('./db_manager/user');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    p = await userDB.getPasswardByName(username);
    if (p !== null && p === password) {
        res.send(userDB.getUserByName(username));
    }
    else{
        res.status(401).send({ error: 'Invalid credentials' });
    }
});

router.post('/register', async (req, res) => {
    const newUser = req.body;
    try{
        id = await userDB.addUser(newUser);
        res.send({...newUser, id:id});
    } 
    catch (error) {
        res.status(400).send({error: error.message})
    }
});

router.put('/user/:id', async (req, res) => {
    try{
        const updatedUser = req.body;
        const id = req.params.id;
        await userDB.updateUser({updatedUser, id:id});
        res.send(updatedUser);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
