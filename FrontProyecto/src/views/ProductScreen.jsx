import React from 'react';
import imgDefault from '../assets/imgDefault.jpg'
import { useState } from 'react';

const ProductScreen = () => {

  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () =>{
    setFavorito(!favorito)
  }

  return (
    <div className='container-fluid vw-100'>
      <div className='row d-flex align-items-center justify-content-center'>
        <section className='col-6 d-flex' style={{justifyContent: 'center'}}>
          <img src={imgDefault} alt="imagen" />
          <button onClick={toggleFavorito} style={{ border: 'none', background: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>
              {favorito ? (
                <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: 'aqua' }}></i>
              ) : (
                <i className="bi bi-heart" style={{ fontSize: '2rem', color: 'aqua' }}></i>
              )}
            </button>
        </section>
        <section className='col-5 text-center'>
          <div>
            <h1>Nombre producto</h1>
            <h2>Precio</h2>
          </div>
          <div>
            <div className='row mx-5 gap-3'>
              <button className='btn btn-primary'>Comprar ahora</button>
              <button className='btn btn-primary'>Agregar al carrito</button>
            </div>
          </div>
        </section>
        <section className='row mx-5 px-5'>
              <h2>Descripcion</h2>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio earum, ducimus eos molestiae autem ea impedit doloremque praesentium explicabo debitis totam aliquam doloribus pariatur non nulla libero nostrum cupiditate?</h4>
        </section>
      </div>

    </div>
  );
}

export default ProductScreen;