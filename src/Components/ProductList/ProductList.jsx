import './ProductList.scss'
import Product from '../Product/Product'
import { Link } from "react-router-dom";

const ProductList = ({products}) => {
    return (
         <>
        <div className="product-list">
          {products.map(product => (
            <Link key={product.id} to={`/product/edit/${product.id}`}>
              <Product product={product} />
            </Link>))}
            </div>
            </>
      )
      }
      
      export default ProductList;