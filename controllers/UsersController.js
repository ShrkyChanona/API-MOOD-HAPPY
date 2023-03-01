const Users = require("../model/Users");

// Obtener todos los objetos
const getUsers = async (req, res) => {
    Users.find((err, collection) => {
        if (err) {
            res.send(err);
        }
        res.json(collection);
    });
};

// Crear un objeto con el formato indicado
const createUser = async (req, res) => {
    const user = new Users({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        membership: req.body.membership
    });

    user.save(async (err, document) => {
        if (err) {
            res.send(err);
        }
        res.json(document);
    });
};

// actualizar un elemento a partir del _id
const updateUser = async (req, res) => {
    Users.findOneAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                name: req.body.name,
                lastname: req.body.lastnmae,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            },
        },
        { new: true },
        (err, User) => {
            if (err) {
                res.send(err);
            } else res.json(User);
        }
    );
};

// borrar un elemento a través del _id
const deleteUser = async (req, res) => {
    Users.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "User Deleted" }))
        .catch((err) => res.send(err));
};

// 
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
