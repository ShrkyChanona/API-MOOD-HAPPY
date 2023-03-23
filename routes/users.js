// definicion de rutas
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/UsersController");
  
  const router = require("express").Router();
   
  // ruta get /users
  router.get("/:name", getUsers);
  // ruta post users
  router.post("/", createUser);
  // ruta put users
  router.put("/:id_user", updateUser);
  // ruta delete users
  router.delete("/:id_user", deleteUser);
  
  module.exports = router;

  //fetch(httt:://123.111.222:3000/Users, options{})