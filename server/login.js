const express = require('express');
const userDB = require('./db_manager/user');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (userDB.getPasswardByName(username) === password) {
        res.send(userDB.getUserByName(username));
    }
    else{
        res.status(401).send({ error: 'Invalid credentials' });
    }
  });

module.exports = router;
