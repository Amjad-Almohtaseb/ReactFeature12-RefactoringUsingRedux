import axios from "axios";
import { SIGNUP } from "./types";

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:8000/signup`, userData);
      dispatch({
        type: SIGNUP,
      });
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};
