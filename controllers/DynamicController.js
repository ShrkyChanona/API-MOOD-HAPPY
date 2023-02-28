const Dynamics = require("../model/Dynamics");

const getDynamics = async (req, res) => {
    Dynamics.find((err,collection) => {
        if(err){
            res.send(err);
        }
        res.json(collection);
    });
}

const createDynamic = async(req,res) =>{
    const dynamic = new Dynamics({
        name: req.body.name,
        description: req.body.description
    });

    dynamic.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
}

module.exports = {
    getDynamics, createDynamic
};