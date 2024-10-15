import React from 'react'
import imgDefault from '../assets/imgDefault.jpg'

const CarruselApp = () => {
  return (
    <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={imgDefault} class="d-block w-100" alt="imagen"/>
                </div>
                <div class="carousel-item">
                <img src={imgDefault} class="d-block w-100" alt="imagen"/>
                </div>
                <div class="carousel-item">
                <img src={imgDefault} class="d-block w-100" alt="imagen"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default CarruselApp