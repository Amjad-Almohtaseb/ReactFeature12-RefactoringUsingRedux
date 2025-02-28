import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../store/actions/productActions";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const FormProduct = () => {
  const shopId = useParams().shopId;
  const productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products.products);
  const updatedProducts = products.find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    updatedProducts
      ? updatedProducts
      : {
          name: "",
          price: 0,
          description: "",
          image: "",
        }
  );
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
    // submit button by default refresh the page and change the url when you click on it
    //so the data inside form will removed automatically after you click the button
    // and to prevent this we use event.preventDefault()
    event.preventDefault();
    if (updatedProducts) dispatch(updateProduct(product));
    else dispatch(addProduct(product, shopId));
    //history like redirect
    history.push("/products");
    resetForm();
  };
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <label for="exampleFormControlInput1">Name of product</label> */}
        <input
          type="text"
          className="form-control"
          // id="exampleFormControlInput1"
          placeholder="Name of product"
          //event will sent auto in the first formate
          onChange={handleChange} //or{(event)=>handleChange(event)}
          name="name"
          //bind our input to our state
          value={product.name}
        />
      </div>
      <div className="form-group">
        {/* <label for="exampleFormControlInput1">Price of product</label> */}
        <input
          type="number"
          className="form-control"
          // id="exampleFormControlInput1"
          placeholder="Price of product"
          onChange={handleChange}
          name="price"
          value={product.price}
        />
      </div>

      <div className="form-group">
        {/* <label for="exampleFormControlInput1">Description of product</label> */}
        <input
          type="text"
          className="form-control"
          // id="exampleFormControlInput1"
          placeholder="Description of product"
          onChange={handleChange}
          name="description"
          value={product.description}
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Image of product</label>
        <input
          type="file"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image of product"
          onChange={handleImage}
          name="image"
          // value={product.image}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        {updatedProducts ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default FormProduct;
