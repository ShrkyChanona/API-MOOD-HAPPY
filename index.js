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
const PsycologistRouter = require("./routes/psycologists");
const AddressRouter = require("./routes/address");
const AudioBooksRouter = require("./routes/audiobooks");

// variables de entorno
dotenv.config();

// Puerto 
const PORT = process.env.PORT || 8000;
const app = express();
const fs = require('fs');
const https = require('https');

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
app.get('/',(req,res)=>{
  res.json({message: "Hello world"});
})
app.use('/Users', UsersRouter);
app.use('/Books', BooksRouter);
app.use('/Dynamics', DynamicsRouter);
app.use('/Courses', CoursesRouter);
app.use('/Cites',CitesRouter);
app.use('/Psycologists', PsycologistRouter );
app.use('/Address', AddressRouter);
app.use('/AudioBooks', AudioBooksRouter);

https.createServer({
  cert: fs.readFileSync('/etc/letsencrypt/archive/moodhappy.iothings.com.mx/fullchain1.pem'),
  key: fs.readFileSync('/etc/letsencrypt/archive/moodhappy.iothings.com.mx/privkey1.pem')
}, app).listen(PORT, function () {
  console.log(`server up on port ${PORT}`);
});
