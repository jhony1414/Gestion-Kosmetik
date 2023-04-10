import express from "express";
import { body } from 'express-validator'
import dataValidcionMovimientos from "../validaciones/validacionesMovimientos.js";
const router = express.Router()

import { formularioMovimientos, crearMovimiento, indexMovimientos } from '../controllers/movimientosController.js'

router.get('/', indexMovimientos)
router.get('/movimientos/formulario', formularioMovimientos)
router.post('/movimientos/crear', crearMovimiento)


export default router