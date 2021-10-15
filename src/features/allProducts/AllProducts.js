import React, { useEffect } from "react";
import DisplayProduct from "../../components/DisplayProduct";
import { loadData } from "./allProductsSlice";
import { addToCart } from "../shoppingCart/shoppingCartSlice";

export const AllProducts = (props) => {
  const { allProducts, dispatch } = props;

  const onFireRender = () => {
    dispatch(loadData());
  };

  useEffect(onFireRender, []);

  const handleAddToCart = (itemToAdd) => {
    dispatch(addToCart(itemToAdd));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: 100,
        paddingRight: 60,
      }}
    >
      {allProducts.map((item) => (
        <DisplayProduct
          product={item}
          handleAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
};
