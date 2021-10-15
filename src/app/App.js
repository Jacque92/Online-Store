import "./App.css";
import React from "react";
import { store } from "./store";
import { AllProducts } from "../features/allProducts/AllProducts";
import { ShoppingCart } from "../features/shoppingCart/ShoppingCart";

function App(props) {
  const { state, dispatch } = props;

  return (
    <div className="App">
      <h1
        style={{
          paddingTop: 80,
        }}
      >
        Online Store
      </h1>
      <AllProducts allProducts={state.allProducts} dispatch={dispatch} />
      <ShoppingCart shoppingCart={state.cart} dispatch={dispatch} />
    </div>
  );
}

export default App;
