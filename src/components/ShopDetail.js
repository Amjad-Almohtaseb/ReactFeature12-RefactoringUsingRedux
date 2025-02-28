import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const shops = useSelector((state) => state.shops.shops);
  const products = useSelector((state) => state.products.products);
  const shopSlug = useParams().shopSlug;
  const shop = shops.find((shop) => shop.slug === shopSlug);

  if (!shop) return <Redirect to="/shops" />;
  const getProductById = (productId, products) =>
    products.find((product) => product.id === productId);

  const listOfProducts = shop.products.map((product) =>
    getProductById(product.id, products)
  );

  return (
    <DetailWrapper>
      <Link to="/shops">Back to Shops</Link>
      <Link to={`/shops/${shop.id}/products/new`}>Add Product</Link>
      <h1>{shop.name}</h1>
      <img src={shop.image} alt={shop.name} />

      <ProductList products={listOfProducts} />
    </DetailWrapper>
  );
};

export default ShopDetail;
