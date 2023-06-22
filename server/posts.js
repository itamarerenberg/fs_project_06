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

router.put('/posts', (req, res) => {
    try{
        const posts = req.body;
        for(let i = 0; i < posts.length; i++){
            postsDB.updatePost(posts[i]);
        }
        res.send(posts);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/posts', (req, res) => {
    try{
        const content = req.body;
        const newPost = postsDB.addPost(content);
        res.send(newPost);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/posts/:id', (req, res) => {
    try{
        const id = req.params.id;
        const post = postsDB.getPostById(id);
        //implement deletion by valid = false
        res.send(post);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
