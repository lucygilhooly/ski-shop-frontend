import React from 'react'
import EditProduct from '../EditProduct/EditProduct';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ProductInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductById = async id => {
        const url = `http://localhost:8080/product/${id}`;
        const response = await fetch(url);
        const productData = await response.json();
        setProduct(productData);
      };

      useEffect(() => {
        getProductById(id);
      }, [id]);

      if (product == null){
        return null;
      }

  return (
    <div className=''>
        <h1>ProductInfo</h1>
        <button><EditProduct /></button>
    </div>
  )
}

export default ProductInfo