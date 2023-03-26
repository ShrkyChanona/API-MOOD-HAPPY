const jwt = require("jsonwebtoken");

// definicion de rutas
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UsersController");

const router = require("express").Router();

//VALIDATE USER
const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({
      error: "Acceso denegado",
    });    
  }

  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    //verified contiene los datos del usuario de forma cruda
    //almacenamos en una variable llamada user el objeto que contiene los valores del usuario
    req.user = verified
    next();
  }
  catch(err){
    res.status(400).json({
      error: "Error, el token expiro o es invalido"
    });
  }
}

// ruta get /users
router.get("/:username/:password", getUsers);
router.get("/validate", verifyToken ,(req, res) => {
  res.json({
    error: null,
    data: {
      user: req.user, // token payload information
    },
  });
})
// ruta post users
router.post("/", createUser);
// ruta put users
router.put("/:id_user", updateUser);
// ruta delete users
router.delete("/:id_user", deleteUser);

module.exports = router;