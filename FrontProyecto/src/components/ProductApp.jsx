  import React, { useState, useEffect } from 'react'
  import imgDefault from '../assets/imgDefault.jpg'
  import { Link } from 'react-router-dom'
  import '../css/general.css'

  const ProductApp = ({producto}) => {


      const [favorito, setFavorito] = useState(false);

      const toggleFavorito = () => {
          setFavorito(!favorito)
      }

    return (
      <div>
        <div className='align-items-center justify-content-center'>
        <p className='mt-2 ms-5'>
          {producto.title}
        </p>
        <section className=' center-content'>
          <section className='col-12 col-md-7 img-container'>
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

          <section className='col-12 col-md-5 text-center align-self-center'>
            <h4 className='mb-3'>$ {producto.price}</h4>
              <div className='row mx-3 gap-3 mb-3 center-content'>
                <Link className='p-0 btn-compra'>
                <button className='btn btn-primary w-100'>Comprar ahora</button>
                </Link>
                <button className='btn btn-primary btn-compra'>Agregar al carrito</button>
              </div>
          </section>

        </section>

          <section className='px-0'>
                <h2 className='px-3 description'>Descripcion</h2>
                <p className='px-5'>
                  {producto.description}</p>
          </section>
        </div>

      </div>
    )
  }

  export default ProductApp