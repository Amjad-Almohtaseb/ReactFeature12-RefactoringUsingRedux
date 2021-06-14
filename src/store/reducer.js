import { ADD_PRODUCT, UPDATE_PRODUCT } from "./actions";
import productsData from "../products";
import slugify from "slugify";

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
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.updatedProducts.id
            ? action.payload.updatedProducts
            : product
        ),
      };

    default:
      return state;
  }
};

export default reducer;
