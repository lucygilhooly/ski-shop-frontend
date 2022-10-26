import './ViewProducts.scss';
import { useState } from "react";
import Main from '../../Components/Main/Main';

function ViewProducts() {
const [searchTerm, setSearchTerm] = useState(" ")
// const [filter, setFilter] = useState(false)
  

const getSearchBoxValue = (event) => {
  const lowerSearchTerm = event.target.value.toLowerCase()
  setSearchTerm(lowerSearchTerm)
}
  return (
    <>
     
    <section className='viewProducts'>
    <div className="viewProducts__body">
      <Main getSearchBoxValue={getSearchBoxValue} searchTerm={searchTerm}/>
    </div>
    </section>
    </>
  );
}

export default ViewProducts;