import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../Components/Form/Form"
import Product from "../../Components/Product/Product";
import "./EditProduct.scss";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  console.log(id)

  const getProductById = async id => {
    const url = `http://localhost:8080/product/${id}`;
    const response = await fetch(url);
    const productData = await response.json();
    setProduct(productData);
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const handleUpdate = async updatedProduct => {
    const result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (result.ok) {
      alert("Product updated");
      setProduct(updatedProduct);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDelete = async updatedProduct => {

    const result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Product deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if(product == null){
    return null
  }


  return (
    <section className="edit-product">
      <h2 className="edit-product__title">Edit Product</h2>
      <div className="edit-product__content">
        <Product product={product} />
        <div className="edit-product__buttons">
          <button
            className={showForm ? "edit-product__button" : "edit-product__button edit-product__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button className="edit-product__button edit-product__button--secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <Form defaultFormState={product} formTitle="Update product" handleSubmit={handleUpdate} />}
    </section>
  );
};

export default EditProduct;
