'use strict'
var express=require('express');
var router=express.Router();
var calculadoraRouter=require('../controllers/calculadora.controllers');


//Pagina de inicio
router.get('/inicio',calculadoraRouter.getInicio);

//suma
router.post('/suma',calculadoraRouter.operaSuma);
//resta
 router.post('/resta',calculadoraRouter.operaResta);
//multiplicacion
router.post('/multiplicacion',calculadoraRouter.operaMulti);
//potencia
router.post('/potencia',calculadoraRouter.operaPotencia);
//raiz cuadrada
router.post('/raiz-cuadrada',calculadoraRouter.operaRaiz);

//division
router.post('/division',calculadoraRouter.operaDivision);
router.get('/resultado', calculadoraRouter.resultado);


module.exports=router;