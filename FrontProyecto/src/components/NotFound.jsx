import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="stars">
      <div className="central-body">
        <img
          className="image-404"
          src="http://salehriaz.com/404Page/img/404.svg"
          alt="404 Page Not Found"
          width="300px"
        />
        <a href="../index.html" className="btn-go-home">
          Ir al inicio
        </a>
      </div>
      <div className="objects">
        <img
          className="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          alt="Rocket"
          width="40px"
        />
        <div className="earth-moon">
          <img
            className="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            alt="Earth"
            width="100px"
          />
          <img
            className="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            alt="Moon"
            width="80px"
          />
        </div>
        <div className="box_astronaut">
          <img
            className="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            alt="Astronaut"
            width="140px"
          />
        </div>
      </div>
      <div className="glowing_stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default NotFound;