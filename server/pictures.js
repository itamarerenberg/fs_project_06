const express = require('express');
const picturesDB = require('./db_manager/pictures');
const router = express.Router();

router.get('/photos', (req, res) => {
    try{
        const albumID = req.query.albumId;
        const index = req.query._start;
        const picture = picturesDB.getPictureByAlbumId(albumID, index)
        res.send(picture);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
