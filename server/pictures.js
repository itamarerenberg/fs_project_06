const express = require('express');
const picturesDB = require('./db_manager/pictures');
const router = express.Router();

router.get('/photos', (req, res) => {
    try{
        const albumID = req.query.albumId;
        const index = req.query._start;
        const pictures = picturesDB.getPictureByAlbumId(albumID)
        res.send(pictures[index]);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.get('/photos/amount', (req, res) => {
    try{
        const albumID = req.query.albumId;
        const pictures = picturesDB.getPictureByAlbumId(albumID)
        res.send({amount: pictures.length});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/photos/:id', (req, res) => {
    try{
        const id = req.params.id;
        const picture = req.body;
        picturesDB.updatePicture({...picture, id: id})
        res.send({...picture, id: id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/photos', (req, res) => {
    try{
        const content = req.body;
        const newPic = picturesDB.addNewPicture(content)
        res.send(newPic);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})


module.exports = router;
