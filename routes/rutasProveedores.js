import express from "express";

import validarProveedores from "../validaciones/validacionesProveedores.js";
const router = express.Router()

import { cargarFormulario, crearProveedor, listadoProveedor } from "../controllers/proveedoresController.js";

//Proveedores
router.get('/formulario', cargarFormulario)
router.post('/crear',
    validarProveedores(),
    crearProveedor
)
router.get('/listado', listadoProveedor)


export default router