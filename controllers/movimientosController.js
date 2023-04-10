//import Categoria from "../models/categorias.js"
import Proveedor from "../models/proveedores.js";
import Movimiento from "../models/movimientos.js";
import Categoria from "../models/categorias.js";
import { validationResult } from "express-validator";
import { todasCategorias } from "../helpers/helpers.js";

const indexMovimientos = async (req, res) => {
  const movimientos = await Movimiento.findAll({
    include: [
      {
        model: Proveedor,
      },
      {
        model: Categoria,
      },
    ],
  });

  res.render("movimientos/indexMovimientos", {
    titulo: "Movimientos",
    encabezado: " Movimientos",
    movimientos,
  });
};

const formularioMovimientos = async (req, res) => {
  //const categorias = await Categoria.findAll()

  const proveedores = await Proveedor.findAll();
  const categorias = await todasCategorias();
  res.render("movimientos/formularioMovimientos", {
    titulo: "Crear Movimiento",
    encabezado: "Nuevo Movimiento",
    categorias,
    proveedores,
  });
};

const crearMovimiento = async (req, res) => {
  const proveedores = await Proveedor.findAll();
  const categorias = await todasCategorias();
  let resultado = validationResult(req);
  /* console.log(resultado)
  return */
  
  const { proveedor, tipo, importe, concepto, fecha, categoria } = req.body;
  const fechaMov = new Date(fecha).toLocaleDateString();

  if (!resultado.isEmpty()){
    return res.render('movimientos/formularioMovimientos',
    {
      titulo: "Crear Movimiento",
      encabezado: "Nuevo Movimiento",
      categorias,
      proveedores,
      errores: resultado.array()
    })
  }

  const movimiento = await Movimiento.create({
    proveedor_id: proveedor,
    tipo,
    importe,
    concepto,
    fecha: fechaMov,
    categoria_id: categoria,
  });

  res.redirect('/');
};

export { 
  formularioMovimientos,
  crearMovimiento,
  indexMovimientos
};
