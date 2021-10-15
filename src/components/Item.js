import React from "react";

export const Item = ({
  itemName,
  itemQuantity,
  itemAdded,
  handleInputChange,
}) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "0.5px solid lightgrey",
      }}
    >
      <h4 style={{ marginBottom: 4, width: "70%" }}>{itemName}</h4>
      <select
        value={itemQuantity}
        onChange={(event) => {
          handleInputChange(itemName, event.target.value);
        }}
        style={{ height: 30, alignSelf: "flex-end", width: "4%" }}
      >
        {[...Array(5).keys()].map((_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
      <h4
        style={{
          marginBottom: 4,
          textAlign: "right",
          width: "8%",
        }}
      >
        {itemAdded.subtotal}
      </h4>
    </li>
  );
};
