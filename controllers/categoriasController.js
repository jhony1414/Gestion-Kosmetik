import {validationResult } from 'express-validator'
//import Categoria from '../models/categorias.js'
import { todasCategorias, encuentraUnaCategoria, nuevaCategoria } from '../helpers/helpers.js'


const cargarFormulario = async (req, res)=>{
    
    //const categorias = await Categoria.findAll()
    const  categorias  = await todasCategorias()
    
    res.render('categorias/formularioCategorias', {titulo:'Crear Categoria', encabezado: 'Nueva Categoria', categorias})
}

const crearCategoria = async (req, res)=>{
    //global.estado = ''
    const  nombre  = req.body.nombre
    
    const categorias =  await todasCategorias()
    
    let resultado = validationResult(req)
    
    
    if (!resultado.isEmpty()) {
        resultado = JSON.stringify(resultado)
        console.log(resultado);
        return res.render('categorias/formularioCategorias',
        {
            titulo:'Crear Categoria',
            encabezado: 'Nueva Categoria ',
            categorias,
            errores: resultado
        })
    }else{
        const categoria = await encuentraUnaCategoria( nombre )
        if(categoria){
            return res.render('categorias/formularioCategorias', {titulo:'Crear Categoria', encabezado: 'Nueva Categoria', errores: [ { msg: `La categoria ${categoria.nombre}, ya existe` } ], categorias})
        }
        
    }
    
    global.estado = 'ok'
    await nuevaCategoria( nombre )
    res.redirect('/categorias/formulario')
    
}
const eliminarCategoria = async (req, res)=>{
    res.send(req.params.id)
    
}

export {
    crearCategoria,
    cargarFormulario,
    eliminarCategoria
}