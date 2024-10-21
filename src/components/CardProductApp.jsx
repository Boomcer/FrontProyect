import React from "react";
import { Link } from "react-router-dom";


const CardProductApp = ({producto}) => {


  return (
    <div className="col"> 
      <div className="card" style="width: 18rem;">
        <img 
          src={producto.image} 
          className="card-img-top" 
          alt={producto.title}
          />
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">{producto.category}</p>
        </div>
        </div>
      </div>
  )
}

export default CardProductApp