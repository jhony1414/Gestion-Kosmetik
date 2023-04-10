import { body } from 'express-validator'


const validarMovimientos = ( )=>{
   
    return[
            body('concepto').notEmpty().withMessage('El concepto es obligatorio'),
            body('importe').notEmpty().withMessage('El importe es obligatorio'),
            body('tipo').notEmpty().withMessage('El tipo es obligatorio'),
            body('fecha').notEmpty().withMessage('El concepto es obligatorio'),
            body('categoria').notEmpty().withMessage('La categoria es obligatoria'),
            body('proveedor').notEmpty().withMessage('El proveedor es obligatorio')
    ]

        
    
        
    
        
}



export default validarMovimientos