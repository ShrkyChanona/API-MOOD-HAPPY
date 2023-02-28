// definicion de rutas

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./controllers/todo");

const router = require("express").Router();

// ruta get principal
router.get("/", async (req, res) => {
  res.send("Let's build a CRUD API!");
});

// ruta get /todos
router.get("/todos", getTodos);
// ruta post todos
router.post("/todos", createTodo);
// ruta put todos
router.put("/todos/:todoID", updateTodo);
// ruta delete todos
router.delete("/todos/:todoID", deleteTodo);

module.exports = router;
