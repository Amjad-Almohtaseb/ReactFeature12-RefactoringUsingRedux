import { SET_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";

// export const signup = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signup", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const signin = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signin", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signout = (history) => {
  history.push("/");
  return setUser();
};
// we will log out the user if his token is expired and he refresh the page
//because check for token  will work one time only if we refresh the site
//but if the user token is expired he will not log out auto because we didnot cover this case
export const checkForToken = (token) => {
  token = localStorage.getItem("myToken");

  if (token) {
    //check if token expiered or not when the user refresh the page
    const currentTime = Date.now();
    //we decode the token because we need the exp time from it
    const user = decode(token);
    //if the token is not expired
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  //if the token is expired or not exist dont give it any thing so it will delete the token.
  return setUser();
};
//purpose of this fn is store (signin/up case)or remove (logout case)the token from the local storage before go to reduser
// to benifit from it in check for token.
const setUser = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("myToken", token);
    return {
      type: SET_USER,
      //decode enable me to see what is inside the toke it self(the pay load that i make it inside the BE, so it is an object)
      payload: decode(token),
    };
  } else {
    delete instance.defaults.headers.common.Authorization;

    localStorage.removeItem("myToken");
    return {
      type: SET_USER,
      payload: null,
    };
  }
};
