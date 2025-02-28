import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const products = useSelector((state) => state.products.products);

  const { productSlug } = useParams(); //bring me productSlug from url and it name is from route.
  const product = products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <Link to="/products">Back to Products</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
