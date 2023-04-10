import express from "express";
import { body } from 'express-validator'
const router = express.Router()

import { formularioMovimientos, crearMovimiento, indexMovimientos } from '../controllers/movimientosController.js'
import validarMovimientos from "../validaciones/validacionesMovimientos.js";

router.get('/', indexMovimientos)
router.get('/movimientos/formulario', formularioMovimientos)
router.post('/movimientos/crear', 
    validarMovimientos(),
    crearMovimiento)


export default router