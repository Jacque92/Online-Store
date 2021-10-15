//Action creator

export const addToCart = (itemToAdd) => {
  return { type: "cart/addItem", payload: itemToAdd };
};

export const updateQuantity = (name, newQuantity) => {
  return { type: "cart/changeQuantity", payload: { name, newQuantity } };
};

//Cart Reducer
const initialCart = {};

export const cartReducer = (addedItem = initialCart, action) => {
  switch (action.type) {
    case "cart/addItem": {
      const { name, price } = action.payload;
      const quantity = addedItem[name] ? addedItem[name].quantity + 1 : 1;
      const subtotal = quantity * price;
      const newItem = { price, quantity, subtotal };

      return { ...addedItem, [name]: newItem };
    }

    case "cart/changeQuantity": {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = addedItem[name];
      const subtotal = newQuantity * addedItem[name].price;
      if (newQuantity === 0) {
        const keyArr = Object.entries(addedItem);
        return keyArr.filter(([key, value]) => {
          return key !== name;
        });
      } else {
        return {
          ...addedItem,
          [name]: {
            price: addedItem[name].subtotal,
            quantity: newQuantity,
            subtotal: subtotal,
          },
        };
      }
    }
    default: {
      return addedItem;
    }
  }
};
