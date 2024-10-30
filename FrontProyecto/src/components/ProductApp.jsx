import React, { useState, useEffect } from 'react'
import imgDefault from '../assets/imgDefault.jpg'
import { Link } from 'react-router-dom'
import '../css/general.css'

const ProductApp = ({producto}) => {


    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
        setFavorito(!favorito)
    }

    console.log(producto)

  return (
    <div className='container-fluid vw-100'>
      <div className='row d-flex align-items-center justify-content-center'>
      <p className='mt-2'>{producto.title}</p>
        <section className='col-12 col-md-6 d-flex img-container'>
          <div className=' center-content img-border p-5'>
            <img src={producto.image}
            alt="imagen"
            className='img-movil' />
            
            <button onClick={toggleFavorito}
            className='btn-favorito'>
                {favorito ? (
                  <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: 'aqua' }}></i>
                ) : (
                  <i className="bi bi-heart" style={{ fontSize: '2rem', color: 'aqua' }}></i>
                )}
              </button>
          </div>
        </section>
        <section className='col-12 col-md-5 text-center'>
          <div className='my-3'>
            <h4>$ {producto.price}</h4>
          </div>
          <div>
            <div className='row mx-5 gap-3 center-content mb-3'>
              <Link className='p-0 btn-compra'>
              <button className='btn btn-primary w-100'>Comprar ahora</button>
              </Link>
              <button className='btn btn-primary btn-compra'>Agregar al carrito</button>
            </div>
          </div>
        </section>
        <section className='container row px-0'>
              <h2 className='px-4'>Descripcion</h2>
              <p className='px-2' style={{marginLeft:'2rem', maxWidth: '90vw'}}>
                {producto.description}</p>
        </section>
      </div>

    </div>
  )
}

export default ProductApp