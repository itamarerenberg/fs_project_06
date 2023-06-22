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

router.put('/comments', (req, res) => {
    try{
        const comments = req.body;
        for(let i = 0; i < comments.length; i++){
            commentsDB.updateComment(comments[i]);
        }
        res.send(comments);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/comments', (req, res) => {
    try{
        const content = req.body;
        const newComment = commentsDB.addComment(content);
        res.send(newComment);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/comments/:id', (req, res) => {
    try{
        const id = req.params.id;
        const comment = commentsDB.getCommentById(id);
        //implement deletion by valid = false
        res.send(comment);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
