import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
        <section className='header'>
        <h1 className='header__title'>SKI STORE</h1>
        <h1 className='header__title header__title--slashOne'>\</h1>
        <h1 className='header__title header__title--slashTwo'>\</h1>
        <h1 className='header__title header__title--slashThree'>\</h1>
        </section>
        <div className="links">
      <Link className="nav__item nav__item--home" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/products">
        Products
      </Link>

      <Link className="nav__item" to="/product/create">
        Add Product
      </Link>
      </div>
    </div>
  );
};

export default Nav;