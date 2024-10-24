import React, { useState } from 'react'
import imgDefault from '../assets/imgDefault.jpg'

const ProductApp = () => {

    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
        setFavorito(!favorito)
    }

  return (
    <div>
        <section>
            <h1>Nombre del producto</h1>
        </section>
        <div className='row d-flex'>
            <section className='col'>
                <img src={imgDefault} alt="imagen" />
            </section>

            <section className='col'>
                <div>
                    <h3>Precio</h3>
                </div>
                <div>
                    <button className='btn btn-primary'>Agregar al carrito</button>
                    <button onClick={toggleFavorito}>
                        {favorito? 
                        (<i className="bi bi-heart-fill" style={{color: 'blue'}}></i>) :
                        
                        (<i className="bi bi-heart" style={{color: 'blue'}}></i>)
                        }
                    </button>
                </div>
            </section>

        </div>
    </div>
  )
}

export default ProductApp