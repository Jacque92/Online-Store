import inventoryData from "../../data";

//Action Creator
export const loadData = () => {
  return { type: "allProducts/loadData", payload: inventoryData };
};

//allProductReducer
const initialState = [];
export const allProductReducer = (allProducts = initialState, action) => {
  switch (action.type) {
    case "allProducts/loadData": {
      return action.payload;
    }
    case "cart/addToCart": {
      return;
    }

    default:
      return allProducts;
  }
};
