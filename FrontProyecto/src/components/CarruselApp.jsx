import React from 'react'
import { destacadosList } from '../data/destacadosList'
import imgDefault from '../assets/imgDefault.jpg'

const CarruselApp = () => {
  return (
    <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        
        <div className="carousel-inner">

            {destacadosList.map((destacado, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active': ""}`}
                data-bs-interval="10000">
                    <div className="row d-flex alig-items-center ">
                        <section className='col-6'>
                            <img src={destacado.url}
                            alt="imagen" 
                            className='img-fluid'
                            style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                            />
                        </section>
                        <section className='col-6 align-self-center'>
                            <h3>{destacado.name}</h3>
                            <h2>{destacado.precio}</h2>
                        </section>

                    </div>
                </div>
            ))}
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default CarruselApp