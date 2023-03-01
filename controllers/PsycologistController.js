const Psycologist = require('../model/Psycologist');

const getPsycologists = async(req,res) => {
    Psycologist.find((err,document) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
};

const registPsycologist = async (req, res) => {
    const psycologist = new Psycologist({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        cellphone: req.body.cellphone,
    });

    psycologist.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

module.exports = { getPsycologists, registPsycologist};