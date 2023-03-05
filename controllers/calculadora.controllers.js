'use strict'
var fs=require('fs');
var path=require('path');
const Resultado = require('../models/calculadora');

var controller = {
    getInicio:function(req,res){
        return res.status(201).send(
            "<h1>Aqui esta el Inicio</h1>"
        );
    },
    operaSuma: function(req, res) {
        var resultado = new Resultado();
        var params = req.body;
    
        resultado.valorResultado = (+params.num1) + (+params.num2);
    
        resultado.save()
            .then(() => {
                res.redirect(302, '/resultado');
            })
            .catch(err => {
                res.status(500).send({ message: "Error al guardar" });
            });
    },

    operaResta: function(req, res) {
        var resultado = new Resultado();
        var params = req.body;
    
        resultado.valorResultado = +params.num1 - +params.num2;;
    
        resultado.save()
        .then(() => {
            res.redirect(302, '/resultado');
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error al guardar resultado' });
        });
    },

    operaMulti: function(req, res) {
        var resultado = new Resultado();
        var params = req.body;
    
        resultado.valorResultado = (+params.num1) * (+params.num2);;
    
        resultado.save()
        .then(() => {
            res.redirect(302, '/resultado');
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error al guardar resultado' });
        });
    },

    operaPotencia: function(req, res) {
        var resultado = new Resultado();
        var params = req.body;
    
        resultado.valorResultado = (+params.num1) ** (+params.num2);;
    
        resultado.save()
        .then(() => {
            res.redirect(302, '/resultado');
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error al guardar resultado' });
        });
    },
    operaRaiz: function(req, res) {
        var resultado = new Resultado();
        var params = req.body;
    
        resultado.valorResultado = Math.sqrt(params.num1);;
    
        resultado.save()
        .then(() => {
            res.redirect(302, '/resultado');
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error al guardar resultado' });
        });
    },
    operaDivision: function(req, res) {
        var resultado = new Resultado();
        var params = req.body;
    
        resultado.valorResultado = params.num1 / params.num2;;
    
        resultado.save()
        .then(() => {
            res.redirect(302, '/resultado');
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error al guardar resultado' });
        });
    },

    resultado:function(req,res){
        Resultado.find({})
            .sort()
            .then((resultados) => {
                const resultado = resultados[resultados.length -1];
                res.status(200).send({ resultado });
            })
            .catch((err) => {
                res.status(500).send({ message: 'Error al obtener resultado' });
            });
    }
}
module.exports=controller;