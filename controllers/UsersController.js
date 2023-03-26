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
            const sns = new AWS.SNS({
                accessKeyId: "AKIAWIOIRE5WOHA3PTOB",
                secretAccessKey: "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",
                region: 'us-east-1'
            });
            //Definicion de los parametros del mensaje SNS
            const paramsMessage = {
                Protocol: 'EMAIL', 
                TopicArn: "arn:aws:sns:us-east-1:430454155116:Users-registers",
                EndPoint: req.body.email,
            }
            //Suscribcion del usuario al sns
            sns.subscribe(paramsMessage, (err, data) => {
                if (err) {
                    console.log("Error al suscribirse a SNS", err);
                }
                else {
                    console.log("Usuario suscrito a SNS correctamente", data);
                    res.send(data);
                }
            })

            //Envio de mensaje SNS via email
            let today = new Date().toString();
            let params = {
                Message: `${req.email} \n\n Enviado: ${today}`,
                Subject: req.body.Subject,
                TopicArn: 'arn:aws:sns:us-east-1:430454155116:Users-registers'
            }

            sns.publish(params, (err,data) => {
                if (err) console.log(err, err.stack);
                else console.log(data);

            });
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
