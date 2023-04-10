import Movimiento from './movimientos.js'
import Categoria from "./categorias.js";
import Proveedor from './proveedores.js'



// relación entre movimientos y categorias
Movimiento.belongsTo(Categoria, {
    foreignKey: 'categoria_id'
  });
  Categoria.hasMany(Movimiento, {
    foreignKey: 'categoria_id'
  });
  
  // relación entre movimientos y proveedores
  Movimiento.belongsTo(Proveedor, {
    foreignKey: 'proveedor_id'
  });
  Proveedor.hasMany(Movimiento, {
    foreignKey: 'proveedor_id'
  });

  export {
    Movimiento,
    Categoria,
    Proveedor
  }