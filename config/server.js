import express from 'express'
import { engine } from '@paroi/express-edge'
import routes from '../routes/routes.js'
import rutasProveedores from '../routes/rutasProveedores.js'
import rutasCategorias from '../routes/rutasCategorias.js'
import rutasMovimientos from '../routes/rutasMovimientos.js'
import { dirname } from 'path'; //Solucion para dirname con modulos ES6
import { fileURLToPath } from 'url'; //Solucion para dirname con modulos ES6
const __dirname = dirname(fileURLToPath(import.meta.url)); //Solucion para dirname con modulos ES6
import dotenv from 'dotenv'
import db from './db.js'
import {
    Movimiento,
    Categoria,
    Proveedor
} from '../models/relaciones.js'


dotenv.config()

const server = async () => {
    // PORT
    const port = process.env.PORT || 3000
    const app = express()

    //Habilitar lectura de formularios
    app.use( express.urlencoded( { extended: true } ) )

    // Conexion a la base de datos
    try {
        //await db.authenticate()
        await db.sync()
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log( error);
    }

   
    // Habilitar gestor de plantillas edge
    app.use( engine )

     // Configurar vistas
    //app.set('views', '../views')
    app.set('views', `${__dirname}/../views`)
    //app.set('views', `${__dirname}./views`)

    //Carpeta Publica
    app.use( express.static('public') )

    // Routing
    
    app.use('/proveedores', rutasProveedores)
    app.use('/categorias', rutasCategorias)
    app.use('/', rutasMovimientos)
    

    // Iniciar Servidor
    app.listen(port, ()=>{
        console.log(`Servidor en : http://127.0.0.1:${port}`);
    })

}


export default server