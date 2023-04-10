import { body } from 'express-validator'

const validarCategorias = ()=>{
   return body('nombre').notEmpty().withMessage('El nombre es obligatorio')
}

export default validarCategorias