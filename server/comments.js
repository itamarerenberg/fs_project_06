const express = require('express');
const commentsDB = require('./db_manager/comments');
const router = express.Router();

router.get('/comments', async (req, res) => {
    try{
        const postId = req.query.postId;
        const comments = await commentsDB.getCommentsByPostId(postId);
        res.send(comments);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/comments', async (req, res) => {
    try{
        const comments = req.body;
        for(let i = 0; i < comments.length; i++){
            await commentsDB.updateComment(comments[i]);
        }
        res.send(comments);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/comments', async (req, res) => {
    try{
        const content = req.body;
        const id = await commentsDB.addComment(content);
        res.send({...content, id:id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/comments/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const comment = await commentsDB.getCommentById(id);
        comment.deleted = true;
        await commentsDB.updateComment(comment);
        res.send(comment);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
