//import Categoria from "../models/categorias.js"
import Proveedor from "../models/proveedores.js"
import Movimiento from "../models/movimientos.js"
import Categoria from "../models/categorias.js"
import dataValidacionMovimientos from "../validaciones/validacionesMovimientos.js"
import { validationResult } from 'express-validator'

import { todasCategorias } from "../helpers/helpers.js"

const indexMovimientos = async ( req, res )=>{
    const movimientos = await Movimiento.findAll({
        include: [
          {
            model: Proveedor,
          },
          {
            model: Categoria,
          },
        ],
      })
      
    res.render('movimientos/indexMovimientos', {
        titulo:'Movimientos', encabezado: ' Movimientos', movimientos})
}

const formularioMovimientos = async (req, res)=>{
    //const categorias = await Categoria.findAll()


    
    const proveedores = await Proveedor.findAll()
    const categorias = await todasCategorias()
    res.render('movimientos/formularioMovimientos', {titulo:'Crear Movimiento', encabezado: 'Nuevo Movimiento', categorias, proveedores})
}

const crearMovimiento = async (req, res)=>{

    let resultado = dataValidacionMovimientos(req)
    const { proveedor, tipo, importe, concepto, fecha, categoria} = req.body
    const fechaMov = new Date(fecha).toLocaleDateString()

    const movimiento = await Movimiento.create({
        proveedor_id: proveedor,
        tipo,
        importe,
        concepto,
        fecha: fechaMov,
        categoria_id: categoria
      });
      
    res.send( { movimiento } )
}


export {
    formularioMovimientos,
    crearMovimiento,
    indexMovimientos
}