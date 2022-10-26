import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/products">
        Products
      </Link>

      <Link className="nav__item" to="/product/create">
        Add Product
      </Link>
    </div>
  );
};

export default Nav;