const express = require('express');
const picturesDB = require('./db_manager/pictures');
const router = express.Router();

router.get('/photos', async (req, res) => {
    try{
        const albumID = req.query.albumId;
        const index = req.query._start;
        const pictures = await picturesDB.getPictureByAlbumId(albumID)
        res.send(pictures[index]);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.get('/photos/amount', async (req, res) => {
    try{
        const albumID = req.query.albumId;
        const pictures = await picturesDB.getPictureByAlbumId(albumID)
        res.send({amount: pictures.length});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/photos/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const picture = req.body;
        await picturesDB.updatePicture({...picture, id: id})
        res.send({...picture, id: id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/photos', async (req, res) => {
    try{
        const content = req.body;
        const id = await picturesDB.addNewPicture(content)
        res.send({...content, id:id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})


module.exports = router;
