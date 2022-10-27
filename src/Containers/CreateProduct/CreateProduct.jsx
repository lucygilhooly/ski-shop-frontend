import "./CreateProduct.scss";
import Form from "../../Components/Form/Form";

const CreateProduct = () => {
  const handleSubmit = async product => {
    const result = await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (result.ok) {
      alert("Product added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = { brand: "", price: "", skill_level: "", type: "", description: "", name:"", image: "" };

  return (
    <section className="create-product">
      <Form handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Add A New Product" />
    </section>
  );
};

export default CreateProduct;