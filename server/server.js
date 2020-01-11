require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require('mongoose');  
const path = require('path');

/// rest server basico
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// Habilitar la carpeta publica
app.use(express.static( path.resolve(__dirname, '../public')));

// Configuración global de rutas
app.use(require('./routes/index')); 


// let db='mongodb://localhost:27017/cafe';
let db=process.env.URLDB;
mongoose.set('useCreateIndex', true);
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false},(err,res)=>{
   if(err) throw err;
   console.log('Base de datos ONLINE');
}) 
app.listen(process.env.PORT,()=>{
    console.log('Escuchando puerto:', process.env.PORT);
})

// Notas los middleware se ubican antes del la conección a la db