'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var calculadoraSchema=Schema({
    valorResultado:Number
});
module.exports=mongoose.model('Resultados',calculadoraSchema);