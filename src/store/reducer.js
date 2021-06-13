import { ADD_PRODUCT } from "./actions";
import slugify from "slugify";
import productsData from "../products";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      const productToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productToKeep,
      };

    case ADD_PRODUCT:
      action.payload.product.id =
        state.products[state.products.length - 1].id + 1;
      action.payload.product.slug = slugify(action.payload.product.name);

      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    default:
      return state;
  }
};

export default reducer;
