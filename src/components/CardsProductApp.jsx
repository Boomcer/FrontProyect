import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/ApiFetch.js";
import CardProductApp from "./CardProductApp.jsx";


const CarsProductApp = () => {
    
    const [productos, setProductos] = useState ([]);
    
    useEffect(() => {
        traerProductos();
    },[]);

    const traerProductos = () =>{
        getProducts()
        .then ((response) => setProductos(response))
        .catch ((error) => console.error(error));
    };
    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
                {productos.map ((item) => ( 
                <CardProductApp key={item.id} producto={item}/>
                ))}
            </div>
        </div>
    );
};

export default CarsProductApp;