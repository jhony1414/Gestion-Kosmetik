import Categoria from '../models/categorias.js'

const todasCategorias = async ()=>{
    const categorias = await Categoria.findAll()
    
    return categorias
}
const encuentraUnaCategoria = async ( nombre )=>{
    const categoria = await Categoria.findOne({
        where:{
            nombre
        }
    })
    return categoria

}
const nuevaCategoria = ( nombre )=>{
    const categoria = Categoria.create({nombre}) 
}




export {
    todasCategorias,
    encuentraUnaCategoria,
    nuevaCategoria
}