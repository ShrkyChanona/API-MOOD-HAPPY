const Users = require("../model/Users");
const jwt = require("jsonwebtoken");
//Importamos la SDK de AWS y creamos un objeto de SNS
const AWS = require("aws-sdk");

// Obtener todos los objetos
const getUsers = async (req, res) => {
    const userFind = await Users.findOne({
        username: req.params.username,
        password: req.params.password
    });

    if (!userFind) {
        return res.send({
            message: "Usuario no encontrado"
        });
    }

    if (req.params.username === userFind.username) {
        if (req.params.password === userFind.password) {
            //create token 
            const token = jwt.sign(
                //payload del token
                {
                    username: userFind.username,
                    name: userFind.name,
                    email: userFind.email,
                    membership: userFind.membership
                }, process.env.TOKEN_SECRET, { expiresIn: '15m' }
            );
            //envia en formato json el token generado con la cabezera auth-token
            return res.header("auth-token", token).json({
                data: {
                    token,
                },
            });
            // return res.send({
            //     token
            // });
        }

        return res.send({
            message: "Contraseña incorrecta por favor intentalo de nuevo"
        });
    }
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
        else {
            const sns = new AWS.SNS();
            //Definicion de los parametros del mensaje SNS
            const paramsMessage = {
                Message: "Usted se ha afiliado exitosamente a Mood-Happy",
                TopicArn: "arn:aws:sns:us-west-2:123456789012:mi-topico-sns",
                EndPoind: req.body.email,
            }
            sns.publish(paramsMessage, (err, data) => {
                if(err){
                    console.log(err);
                } 
                else{
                    console.log(data);
                    res.send(data);
                }
            })
            res.json(document);
        }
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
