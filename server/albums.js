const express = require('express');
const albumsDB = require('./db_manager/albums');
const router = express.Router();

router.get('/albums', async (req, res) => {
    try{
        const userId = req.query.userId;
        const albums = await albumsDB.getAlbumsByUserId(userId);
        res.send(albums);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/albums', async (req, res) => {
    try{
        const albums = req.body;
        for(let i = 0; i < albums.length; i++){
            await albumsDB.updateAlbum(albums[i]);
        }
        res.send(albums);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/albums/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const album = await albumsDB.getAlbumById(id);
        album.deleted = true;
        await albumsDB.updateAlbum(album);
        res.send(album);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/albums', async (req, res) => {
    try{
        const content = req.body;
        const id = await albumsDB.addAlbum(content);
        res.send({...content, id:id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
