import './Main.scss'
import ProductList from '../ProductList/ProductList'
import DropDown from '../DropDown/DropDown'
import SearchBox from '../SearchBox/SearchBox'


import { useState } from 'react'
import { useEffect } from 'react'


const Main = ({searchTerm, getSearchBoxValue}) => {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");


  const getProducts = async() => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    setProducts(data)
  }
  const getTypes = async () => {
    const response = await fetch("http://localhost:8080/products/types");
    const data = await response.json();
    setTypes(data);
  };


  useEffect(() => {
   getProducts()
   getTypes(selectedType)
  },[selectedType])

  const handleSelectType = event => setSelectedType(event.target.value);


  const filterProducts = (products, searchTerm) => {
   return products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
  }
  console.log(selectedType)
 
    return (
      <section className='main'>
       <section className='header'>
        <h1 className='header__title'>SKI STORE</h1>
        <h1 className='header__title header__title--slashOne'>\</h1>
        <h1 className='header__title header__title--slashTwo'>\</h1>
        <h1 className='header__title header__title--slashThree'>\</h1>

        
        </section>
        <div className='main__products'>
          <SearchBox getSearchBoxValue={getSearchBoxValue}/>
          <form className="main__products--form">
         <DropDown options={types} onChange={handleSelectType}/>
         </form>
          <ProductList products={filterProducts(products, searchTerm)}/>
        </div>
     </section>
  )

    }
export default Main