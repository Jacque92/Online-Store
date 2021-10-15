import React from "react";

export default function DisplayProduct({ product, handleAddToCart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 240,
        textAlign: "left",
        marginRight: 60,
        marginBottom: 120,
      }}
    >
      <div
        style={{
          width: 240,
          height: 300,
          border: "solid 1px black",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "solid 0.5px black",
            borderRadius: 8,
          }}
          src={product.img}
        ></img>
      </div>

      <p
        style={{
          margin: 0,
          marginTop: 10,
          fontSize: 18,
        }}
      >
        {product.name}
      </p>
      <h2
        style={{
          margin: 4,
          fontSize: 24,
          color: "darkred",
        }}
      >
        ${product.price}
      </h2>
      <button
        onClick={handleAddToCart}
        style={{
          fontSize: 16,
          margin: 0,
          marginTop: 8,
          width: 120,
          height: 32,
          alignSelf: "flex-end",
          backgroundColor: "black",
          color: "white",
          borderRadius: 6,
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
