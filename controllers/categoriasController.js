import {check, validationResult } from 'express-validator'
//import Categoria from '../models/categorias.js'
import { todasCategorias, encuentraUnaCategoria, nuevaCategoria } from '../helpers/helpers.js'

const cargarFormulario = async (req, res)=>{
    //const categorias = await Categoria.findAll()
    const  categorias  = await todasCategorias()
    
    res.render('categorias/formularioCategorias', {titulo:'Crear Categoria', encabezado: 'Nueva Categoria', categorias})
}

const crearCategoria = async (req, res)=>{
    const  nombre  = req.body.nombre
    console.log(`nombre: ${req.body.nombre}`);
    console.log(typeof(nombre));
    
    const categorias =  await todasCategorias()
    
    let resultado = validationResult(req)
    
    
    if (!resultado.isEmpty()) {
        console.log(resultado.array());
        return res.render('categorias/formularioCategorias',
        {
            titulo:'Crear Categoria',
            encabezado: 'Nueva Categoria ',
            categorias,
            errores: resultado.array()
        })
    }else{
        const categoria = await encuentraUnaCategoria( nombre )
        if(categoria){
            return res.render('categorias/formularioCategorias', {titulo:'Crear Categoria', encabezado: 'Nueva Categoria', errores: [ { msg: `La categoria ${categoria.nombre}, ya existe` } ], categorias})
        }
        
    }

    await nuevaCategoria( nombre )
    res.redirect('/categorias/formulario')
}


export {
    crearCategoria,
    cargarFormulario
}