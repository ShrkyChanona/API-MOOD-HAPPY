const Address = require('../model/Address');

const getAddresss = async(req,res) => {
    Address.find((err,document) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
};

const addAddress = async (req, res) => {
    const address = new Address({
        name_street: req.body.name_street,
        colony: req.body.colony,
        cp: req.body.cp,
        description: req.body.description,
    });

    address.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

module.exports = { getAddresss, addAddress};