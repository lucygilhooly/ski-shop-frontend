import React from 'react'
import './Product.scss'
import { Link } from "react-router-dom";


const Product = ({ product }) => {
  
  const {name, image, brand} = product;
  return (
    <div className='product'>
      <img className='product__image' src={image} alt={name}></img>
      <h1 className='product__name'>{name}</h1>
      <div className='product__info'>

            <Link key={product.id} to={`/product/info/${product.id}`}>
              More Info
            </Link>
      </div>
    </div>
  )
}

export default Product;