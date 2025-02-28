// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.user.user);
  const products = props.products;

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <div>
        {user ? (
          <>
            <SearchBar setQuery={setQuery} />
            {/* <Link to="/products/FormProduct">
      <button type="button" class="btn btn-secondary">Add a Product</button>
        </Link> */}
            <ListWrapper>{productList}</ListWrapper>
          </>
        ) : (
          <>
            <Redirect to="/" />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
