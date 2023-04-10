import { body } from 'express-validator'

const validarProveedores = ()=>{
   return body('nombre').notEmpty().withMessage('El nombre es obligatorio')
}

export default validarProveedores