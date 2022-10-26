import "./App.scss";
import ViewProducts from "./Containers/ViewProducts/ViewProducts";
import Home from "./Containers/Home/Home";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./Containers/CreateProduct/CreateProduct";
import EditProduct from "./Containers/EditProduct/EditProduct";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ViewProducts />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
