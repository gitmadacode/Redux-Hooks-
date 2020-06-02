//Aca se ingresa tambien todo lo que se enviara a la bd
//Los actions son las funciones que modifican el state
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
}  from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//La funcion que se va  a utilizar en la vista
//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto());

        try {
            //Insertar en la API
            await clienteAxios.post('/productos', producto);

            //si todo sale bien actualizar el state 
            dispatch( agregarProductoExito(producto) );

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            //alerta de error
            Swal.fire({
                icon:'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta denuevo'
            })

            console.log(error);
            //si existe un error cambiar el state
            dispatch( agregarProductoError(true));
        }
    }
}

//Payload: la parte que va modificar los datos, el state, si solo vamos a agregar 1 producto no es obligatorio su uso
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
    });

//Si el producto se guarda en la bd
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
}) 

//Si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

//Funcion que descarga los productos desde la base de datos
export function obtenerProductosAction() {
    return async(dispatch) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa(respuesta.data) )
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError() )
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})