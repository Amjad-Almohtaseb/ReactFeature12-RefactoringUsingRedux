export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
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

export const updateProduct = (updatedProducts) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      updatedProducts: updatedProducts,
    },
  };
};
