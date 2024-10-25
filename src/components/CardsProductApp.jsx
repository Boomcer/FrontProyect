import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/ApiFetch.js";
import CardProductApp from "./CardProductApp.jsx";
import PaginationApp from "./PaginationApp.jsx";


const CarsProductApp = () => {
    
    const [productos, setProductos] = useState ([]);
    const [productsPerPage, setProductsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const totalProductos = productos.length;

const lastIndex = currentPage * productsPerPage
const firstIndex = lastIndex - productsPerPage  

    useEffect(() => {
        traerProductos();
    },[]);

    const traerProductos = () =>{
        getProducts()
        .then ((response) => setProductos(response))
        .catch ((error) => console.error(error));
    };
    return(
        <div className="container  p-3 bg-secondary h-50">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
                {productos.map ((item) => ( 
                <CardProductApp 
                    key={item.id} 
                    producto={item}
                />
                )).slice(firstIndex,lastIndex)}

            </div>
            <div>
                <PaginationApp 
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalProducts={totalProductos}
                />
            </div>
        </div>
    );
};

export default CarsProductApp;