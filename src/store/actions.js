export const ADD_PRODUCT = "ADD_PRODUCT";
export const deleteProduct = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: {
      productId: productId,
    },
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product: product,
    },
  };
};
