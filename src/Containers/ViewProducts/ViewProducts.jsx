import './ViewProducts.scss';
import { useState } from "react";
import Main from '../../Components/Main/Main';
import { useEffect } from 'react';

function ViewProducts() {
const [searchTerm, setSearchTerm] = useState(" ")  

const getSearchBoxValue = (event) => {
  const lowerSearchTerm = event.target.value.toLowerCase()
  setSearchTerm(lowerSearchTerm)
}
  return (
    <>
     
    <section className='viewProducts'>
    <div className="viewProducts__body">
      <Main  getSearchBoxValue={getSearchBoxValue} searchTerm={searchTerm}/>
    </div>
    </section>
    </>
  );
}

export default ViewProducts;