import express from "express";
const router = express.Router()

import { index } from "../controllers/inicioController.js";
import { cargarFormulario } from "../controllers/proveedoresController.js";

router.get('/', index)


export default router