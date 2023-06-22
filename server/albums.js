const express = require('express');
const albumsDB = require('./db_manager/albums');
const router = express.Router();

router.get('/albums', (req, res) => {
    try{
        const userId = req.query.userId;
        const albums = albumsDB.getAlbumsByUserId(userId);
        res.send(albums);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/albums', (req, res) => {
    try{
        const albums = req.body;
        for(let i = 0; i < albums.length; i++){
            albumsDB.updateAlbum(albums[i]);
        }
        res.send(albums);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/albums/:id', (req, res) => {
    try{
        const id = req.params.id;
        const album = albumsDB.getAlbumById(id);
        //implement deletion by valid = false
        res.send(album);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/albums', (req, res) => {
    try{
        const content = req.body;
        const newAlbum = albumsDB.addAlbum(content);
        res.send(newAlbum);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
