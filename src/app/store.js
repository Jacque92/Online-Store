import { createStore, combineReducers } from "redux";
import Redux from "redux";
import { allProductReducer } from "../features/allProducts/allProductsSlice";
import { cartReducer } from "../features/shoppingCart/shoppingCartSlice";

export const store = createStore(
  combineReducers({
    allProducts: allProductReducer,
    cart: cartReducer,
  })
);
