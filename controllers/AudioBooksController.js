const AudioBooks = require("../model/AudioBooks");

const getAudioBooks = async (req, res) => {
    AudioBooks.find((err,collection) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
};

const registAudioBook = async (req, res) => {
    const audiobook = new AudioBooks({
        category: req.body.category,
        description: req.body.description,
        author: req.body.author,
        date_of_publication: req.body.date_of_publication,
        lenguage: req.body.lenguage,
        duration: req.body.duration
    });

    audiobook.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

module.exports = {
    getAudioBooks, registAudioBook
}