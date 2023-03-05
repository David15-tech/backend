'use strict'
var mongoose=require('mongoose');
var port='3700';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');
mongoose.connect('mongodb://127.0.0.1:27017/calculadora')
.then(()=>{
    console.log("Conexion establecida con la BDD")
    app.listen(port,()=>{
        console.log("Conexion establecida en el url: localhost:3700");
    })
})
.catch(err=>console.log(err))