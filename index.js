// definicion de librerias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

//Routes
const UsersRouter = require("./routes/users");
const BooksRouter = require("./routes/books");
const DynamicsRouter = require("./routes/dynamics");
const CoursesRouter = require("./routes/courses");
const CitesRouter = require("./routes/cites");

// variables de entorno
dotenv.config();

// Puerto 
const PORT = process.env.PORT || 8000;
const app = express();

// Libreria para mongodb - usa URL que debe existir en .env
// usa la Base de datos llamada mongo y la coleccion llamada todos
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
// se usa con express, peticiones cruzadas.
app.use(cors());
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// uso de router.js
app.use("/", console.log('hola mundo'));
app.use('/Users', UsersRouter);
app.use('/Books', BooksRouter);
app.use('/Dynamics', DynamicsRouter);
app.use('/Courses', CoursesRouter);
app.use('/Cites',CitesRouter);


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
