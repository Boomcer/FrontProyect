import React, { useEffect } from "react";
import { getProducts} from "../helpers/ApiFetch";
import CardProductApp from "../components/CardProductApp";

const HomeScreen = () => {
    const [productos, setProductos] = usaState ([]);
    
    useEffect(() => {
        traerProductos();
    },[]);

    const traerProductos = () =>{
        getProducts()
        .then ((response) => setProductos(response))
        .catch ((error) => console.error(error));
    };
    return(
        <div className="container">
            <div className="row mt-5">
                {productos.map ((item) => ( 
                <CardProductApp key={item.id} producto={item}/>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;