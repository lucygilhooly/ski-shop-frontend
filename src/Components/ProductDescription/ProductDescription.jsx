import React from 'react'
import './ProductDescription.scss'


const ProductDescription = ({ product }) => {
  
  const {name, image, price, brand, skill, type, description} = product;
  return (
    <div className='product'>
      <img className='product__image' src={image} alt={name}></img>
      <h1 className='product__name'>{name}</h1>
      <div className='product__info'>
        <p>£{price}</p>
        <p>{description}</p>
        <p>{brand}</p>
        <p>{skill}</p>
        
      </div>
    </div>
  )
}

export default ProductDescription;