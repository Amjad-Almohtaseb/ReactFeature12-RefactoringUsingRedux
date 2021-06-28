import axios from "axios";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: "DELETE_PRODUCT",
        payload: {
          productId: productId,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/products",
        newProduct
      ); //send formData in the requestزي اللي كنا نبعتها في البودي

      dispatch({
        type: ADD_PRODUCT,
        payload: {
          product: res.data,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        updatedProduct
      );
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: {
          updatedProduct: res.data,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      console.log(res.data);
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
