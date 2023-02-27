// definicion de rutas
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/registerController");
  
  const router = require("express").Router();
  
  // ruta get principal
  router.get("/", async (req, res) => {
    res.send("Let's build a CRUD API!");
  });
  
  // ruta get /users
  router.get("/Users", getUsers);
  // ruta post users
  router.post("/Users", createUser);
  // ruta put users
  router.put("/Users/:id_user", updateUser);
  // ruta delete users
  router.delete("/Users/:id_user", deleteUser);
  
  module.exports = router;

  //fetch(httt:://123.111.222:3000/Users, options{})