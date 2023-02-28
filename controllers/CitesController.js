const Cites = require("../model/Cites");

const getCites = async (req, res) => {
    Cites.find((err,collection) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
}

const createCite = async (req, res) => {
    const cite = new Cites({
        date_create: req.body.date_create,
        date_asis: req.body.date_asis,
        hour: req.body.hour
    });

    cite.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

module.exports = { getCites, createCite };