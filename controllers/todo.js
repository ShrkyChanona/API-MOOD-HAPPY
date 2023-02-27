// constante del modelo de datos
const Todo = require("../model/todo");

// Obtener todos los objetos
const getTodos = async (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(err);
    }
    res.json(todos);
  });
};

// Crear un objeto con el formato indicado
const createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  todo.save( async (err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

// actualizar un elemento a partir del _id
const updateTodo = async (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};

// borrar un elemento a través del _id
const deleteTodo = async (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
