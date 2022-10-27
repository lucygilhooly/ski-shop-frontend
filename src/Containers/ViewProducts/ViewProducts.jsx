import './ViewProducts.scss';
import { useState } from "react";
import Main from '../../Components/Main/Main';
import { useEffect } from 'react';

function ViewProducts() {
const [searchTerm, setSearchTerm] = useState(" ")  
// const [product, setProduct] = useState([]);
// const [selectedProduct, setSelectedProduct] = useState("");

// const getProduct = async id => {
//     let url = `http://localhost:8080/product/${id}`;

//     if (id) {
//         url +=`?id=${id}`;
//     }

//     const response = await fetch(url);
//     const productData = await response.json();
//     setProduct(productData);
// }

// useEffect(() => {
//     getProduct(selectedProduct)
// },[selectedProduct])

// const handleSelectProduct = event => setSelectedProduct(event.target.value)

const getSearchBoxValue = (event) => {
  const lowerSearchTerm = event.target.value.toLowerCase()
  setSearchTerm(lowerSearchTerm)
}
  return (
    <>
     
    <section className='viewProducts'>
    <div className="viewProducts__body">
    {/* product={product} onChange={handleSelectProduct} */}
      <Main  getSearchBoxValue={getSearchBoxValue} searchTerm={searchTerm}/>
    </div>
    </section>
    </>
  );
}

export default ViewProducts;