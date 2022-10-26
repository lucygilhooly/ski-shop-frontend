import React from 'react'
import './Product.scss'



const Product = ({ product }) => {
  const {name, image, price, brand, skill, type, description} = product;
  return (
    <div className='product'>
      <img className='product__image' src={image} alt={name}></img>
      <h1 className='product__name'>{name}</h1>
      <div className='product__info'>
        <p>£{price}</p>
        <p>{brand}</p>
        <p>{skill}</p>
        <p>{type}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Product;