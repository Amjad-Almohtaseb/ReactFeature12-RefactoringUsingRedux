import { add } from "lodash";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import { useHistory } from "react-router";

const FormProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setProduct({
      name: "",
      price: 0,
      description: "",
      image: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
    history.push("/products");
    resetForm();
  };
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleFormControlInput1">Name of product</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the name of product"
          onChange={handleChange}
          name="name"
          value={product.name}
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Price of product</label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the price of product"
          onChange={handleChange}
          name="price"
          value={product.price}
        />
      </div>

      <div className="form-group">
        <label for="exampleFormControlInput1">Description of product</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the description of product"
          onChange={handleChange}
          name="description"
          value={product.description}
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Image of product</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the URL of picture"
          onChange={handleChange}
          name="image"
          value={product.image}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default FormProduct;
