import React from 'react';
//useSelector Para acceder al state, useDispatch Para ejecutar las acciones
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {

    //Producto a editar
    const producto = useSelector(state => state.productos.productoeditar);
    if(!producto) return null; 
    //Destructuring
    const { nombre,precio,id } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        editarProductoAction();
    }
    
    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar producto
                    </h2>

                    <form
                        onSubmit={submitEditarProducto}
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="nombre producto"
                                name="nombre"
                                value={nombre}
                             />
                        </div>

                        <div className="form-group">
                        <label>Precio Producto</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="precio producto"
                            name="precio"
                            value={precio}
                         />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >Guardar cambios</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditarProducto;