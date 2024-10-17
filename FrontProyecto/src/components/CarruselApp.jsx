import React from 'react'
import { destacadosList } from '../data/destacadosList'
import imgDefault from '../assets/imgDefault.jpg'

const CarruselApp = () => {
  return (
    <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        
        <div className="carousel-inner">

            {destacadosList.map((destacado, index) => (
                <div key={index} className="carousel-item active" data-bs-interval="10000">
                    <img src={destacado.url} alt="imagen" />
                    <section>
                        <h5>{destacado.name}</h5>
                        <h6>{destacado.precio}</h6>
                    </section>
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