import React from "react";

export const TotalPrice = ({ bill }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h1>Total</h1>
      <h1 id="price" style={{ color: "darkred" }}>
        AUD$ {bill}
      </h1>
    </div>
  );
};
