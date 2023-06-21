const express = require('express');
const postsDB = require('./db_manager/posts');
const router = express.Router();

router.get('/posts', (req, res) => {
    try{
        const userId = req.query.userId;
        const posts = postsDB.getPostsByUserID(userId);
        res.send(posts);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
