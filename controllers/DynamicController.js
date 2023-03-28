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
        description: req.body.description,
        image: req.body.image,
        imagesDes: req.body.imagesDes,
    });

    dynamic.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
}

const deleteDynamic = async (req, res) => {
    Dynamics.deleteOne({ _id: req.params.dynamicID })
      .then(() => res.json({ message: "Dynamic Deleted" }))
      .catch((err) => res.send(err));
  };

module.exports = {
    getDynamics, createDynamic, deleteDynamic
};