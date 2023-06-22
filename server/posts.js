// const express = require('express');
// const postsDB = require('./db_manager/posts');
// const router = express.Router();

router.get('/posts', async (req, res) => {
    try{
        const userId = req.query.userId;
        const posts = await postsDB.getPostsByUserID(userId);
        res.send(posts);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/posts', async (req, res) => {
    try{
        const posts = req.body;
        for(let i = 0; i < posts.length; i++){
            await postsDB.updatePost(posts[i]);
        }
        res.send(posts);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/posts', async (req, res) => {
    try{
        const content = req.body;
        const id = await postsDB.addPost(content);
        res.send({...content, id:id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/posts/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const post = await postsDB.getPostById(id);
        post.deleted = true;
        await postsDB.updatePost(post);
        res.send(post);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

// module.exports = router;
