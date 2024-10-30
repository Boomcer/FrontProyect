import React, { useEffect, useState } from 'react';
import imgDefault from '../assets/imgDefault.jpg'
import { getProduct } from '../helpers/ApiFetch';
import ProductApp from '../components/ProductApp';
import { useParams } from 'react-router-dom';
import '../css/general.css'

const ProductScreen = () => {

  const {id} = useParams()
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    traerProducto();
  },[]);

  const traerProducto = () =>{
    getProduct(id)
      .then((response) => {setProducto(response)})
      .catch((error) => {console.log(error)});
      setLoading(false);
  }

  return (
    <div className='screen'>
      {loading &&(
        <div className='row mt-5'>
          <div className='col'>
            <h3>Cargando...</h3>
          </div>
        </div>
      )}
      <div>
        {
          producto && (
            <ProductApp producto={producto}/>
          )
        }
      </div>
    </div>
  );
}

export default ProductScreen;