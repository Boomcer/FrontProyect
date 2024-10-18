import React from 'react'
import { productos } from '../data/productosList'
import imgDefault from '../assets/imgDefault.jpg';

const GridProductsApp = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            {productos.map((producto, index) =>(
            <div key={index} className='col-6 col-md-4 col-lg-2'>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imgDefault} className="card-img-top" alt="imagen"/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.precio}</p>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>

            ))}
        </div>
    </div>
  )
}

export default GridProductsApp