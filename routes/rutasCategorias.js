import express from "express";
import { body } from 'express-validator'
import { cargarFormulario, crearCategoria, eliminarCategoria } from "../controllers/categoriasController.js";
import validarCategorias from "../validaciones/validacionesCategorias.js";

const router = express.Router()

//Categorias
router.get('/formulario', cargarFormulario)
router.post('/crear',
    validarCategorias(),
    crearCategoria
)
router.get('/eliminar/:id', eliminarCategoria)


export default router