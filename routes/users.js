const jwt = require("jsonwebtoken");

//limite de peticiones temporales
const limit = require("express-rate-limit");
const limiter = limit({
  windowMs: 15 * 60 * 1000,
  max: 1,
  message: "Demasiadas solicitudes para el inicio de sesion, intentalo 15 minutos despues de tu logueo anterior"
});

//Limite de peticiones permanentes
// //definicion de objeto donde se almacenaran el numero de peticiones que se han realizado por direccion IP
// const requestCount = {}

// const ratelimit = (req, res, next) =>{
//   const clientIp = req.ip;

//   //verificacion de cuantas peticiones lleva
//   if(requestCount[clientIp] && requestCount[clientIp] >= 1){
//     return res.status(429).json({
//       message: "se han realizado demasiadas solicitudes para el inicio de sesion \n intentelo mas tarde",
//     })
//   }

//   //en caso de no superar el numero de limitaciones incrementa el contador
//   //el objeto apuntado por la direccion clientIP pregunta si el objeto esta vacio, en caso de 
//   requestCount[clientIp] = (requestCount[clientIp] || 0) +1;
//   next();
// };

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
router.get("/:username/:password",limiter,getUsers);
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