import React from "react";
import { Item } from "../../components/Item";
import { TotalPrice } from "../../components/TotalPrice";
import { addToCart } from "../shoppingCart/shoppingCartSlice";
import { updateQuantity } from "../shoppingCart/shoppingCartSlice";

export const ShoppingCart = (props) => {
  const { shoppingCart, dispatch } = props;

  const handleAddToCart = (itemToAdd) => {
    dispatch(addToCart(itemToAdd));
  };

  const handleInputChange = (name, input) => {
    const newQuantity = Number(input);
    dispatch(updateQuantity(name, newQuantity));
  };

  const cartElements = [];
  for (let item in shoppingCart) {
    cartElements.push(item);
  }
  let total = 0;

  cartElements.map((item) => (total += shoppingCart[item].subtotal));

  return (
    <div
      style={{
        backgroundColor: "linen",
        width: "100%",
        padding: 8,
        paddingLeft: 80,
        paddingRight: 80,
        textAlign: "left",
        boxSizing: "border-box",
        position: "fixed",
        bottom: 0,
      }}
    >
      {cartElements.map((item) => (
        <Item
          itemName={item}
          itemQuantity={shoppingCart[item].quantity}
          itemAdded={shoppingCart[item]}
          handleInputChange={handleInputChange}
        />
      ))}

      <TotalPrice bill={total} />
    </div>
  );
};
