import { body } from 'express-validator'
import { validationResult } from 'express-validator'


const dataValidacionMovimientos = ( req )=>{
    console.log(req);
    let resultado = validationResult(req)
    body('concepto').notEmpty().withMessage('El concepto es obligatorio'),
    body('importe').notEmpty().withMessage('El importe es obligatorio'),
    body('tipo').notEmpty().withMessage('El tipo es obligatorio'),
    body('fecha').notEmpty().withMessage('El concepto es obligatorio'),
    body('categoria').notEmpty().withMessage('La categoria es obligatoria'),
    body('proveedor').notEmpty().withMessage('El proveedor es obligatorio')
    console.log('Desde validaciones ' + resultado.array());
    return resultado.array()
}



export default dataValidacionMovimientos