const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var fs=require('fs')

var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});

const mongoose=require('mongoose');
const branchesRoutes = require('./controller/branches')
const citiesRoutes = require('./controller/cities')
const coursesRoutes = require('./controller/courses')
const categoriesRoutes = require('./controller/categories')
const reviewsRoutes = require('./controller/reviews')
const studentsRoutes = require('./controller/students')
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/website");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);
app.use("/public", express.static(path.join("public")));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.use('/branch', branchesRoutes)
app.use('/city', citiesRoutes)
app.use('/category', categoriesRoutes)
app.use('/course', coursesRoutes)
app.use('/api/review', reviewsRoutes)
app.use('/api/student', studentsRoutes)

app.listen(8000,function(){
  console.log("server on port 8000 ");
})