const express = require('express');
const commentsDB = require('./db_manager/comments');
const router = express.Router();

router.get('/comments', (req, res) => {
    try{
        const postId = req.query.postId;
        const comments = commentsDB.getCommentsByPostId(postId);
        res.send(comments);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
