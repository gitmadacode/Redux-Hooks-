//Los types describen lo que esta pasando en mi aplicación
//Ejem: al presionar agregarProducto, al guardar en la base de datos se guardo con exito o si existe un error
export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
export const AGREGAR_PRODUCTO_EXITO = 'AGREGAR_PRODUCTO_EXITO';
export const AGREGAR_PRODUCTO_ERROR = 'AGREGAR_PRODUCTO_ERROR';

export const COMENZAR_DESCARGA_PRODUCTOS = 'COMENZAR_DESCARGA_PRODUCTOS';
export const DESCARGA_PRODUCTOS_EXITO = 'DESCARGA_PRODUCTOS_EXITO';
export const DESCARGA_PRODUCTOS_ERROR = 'DESCARGA_PRODUCTOS_ERROR';

export const OBTENER_PRODUCTO_ELIMINAR = 'OBTENER_PRODUCTO_ELIMINAR';
export const PRODUCTO_ELIMINAR_EXITO = 'PRODUCTO_ELIMINAR_EXITO';
export const PRODUCTO_ELIMINAR_ERROR = 'PRODUCTO_ELIMINAR_ERROR';

export const OBTENER_PRODUCTO_EDITAR = 'OBTENER_PRODUCTO_EDITAR';
export const COMENZAR_EDICION_PRODUCTO = 'COMENZAR_EDICION_PRODUCTO';
export const PRODUCTO_EDITAR_EXITO = 'PRODUCTO_EDITAR_EXITO';
export const PRODUCTO_EDITAR_ERROR = 'PRODUCTO_EDITAR_ERROR';

//Estos types se utilizan en el action para ir describiendo  y ejecutando ciertas func
//pero en el reducer vamos a evaluar cada una de estas condiciones
//y nos van a servir para modificar el state de acuerdo a lo que este sucediendo