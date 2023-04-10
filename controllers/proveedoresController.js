import { validationResult } from 'express-validator'
import Proveedor from '../models/proveedores.js'

const cargarFormulario = async (req, res)=>{
    res.render('proveedores/formularioProveedor', {titulo:'Crear Proveedor', encabezado: 'Nuevo Proveedor'})
}

const crearProveedor = async (req, res)=>{
    const { nombre } = req.body

    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {
        return res.render('proveedores/formularioProveedor',
        {
            titulo:'Crear Proveedor',
            encabezado: 'Nuevo Proveedor',
            errores: resultado.array()
        })
    }

    await Proveedor.create({nombre})
    res.redirect('/proveedores/listado')
}

const listadoProveedor = async (req, res)=>{
    const proveedores = await Proveedor.findAll()
    proveedores.forEach(proveedor => {
        console.log(proveedor.nombre);
    });
    res.render('proveedores/listadoProveedor', {
        titulo:'Listado Proveedores',
        encabezado: 'Listado Proveedores',
        proveedores
    })
   

}





export {
    cargarFormulario,
    crearProveedor,
    listadoProveedor
}