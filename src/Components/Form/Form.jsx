import { useState } from "react";
import "./Form.scss";

const Form = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [product, setProduct] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

    if (Object.values(product).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(product);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="brand"
          value={product.brand}
          onInput={event => setProduct({ ...product, brand: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="price"
          value={product.price}
          onInput={event => setProduct({ ...product, price: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="skill level (Beginner, Intermediate, Advanced, Expert)"
          value={product.skill_level}
          onInput={event => setProduct({ ...product, skill_level: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="type"
          value={product.type}
          onInput={event => setProduct({ ...product, type: event.target.value })}
        />
         <input
          className="form-container__input"
          type="text"
          placeholder="description"
          value={product.description}
          onInput={event => setProduct({ ...product, description: event.target.value })}
        />
         <input
          className="form-container__input"
          type="text"
          placeholder="name"
          value={product.name}
          onInput={event => setProduct({ ...product, name: event.target.value })}
        />
         <input
          className="form-container__input"
          type="text"
          placeholder="image url"
          value={product.image}
          onInput={event => setProduct({ ...product, image: event.target.value })}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
