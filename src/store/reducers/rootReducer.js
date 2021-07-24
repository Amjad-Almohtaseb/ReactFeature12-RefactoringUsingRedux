import productReducer from "./productReducer";
import { combineReducers } from "redux";
import shopReducer from "./shopsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
  user: authReducer,
});


export default rootReducer;
