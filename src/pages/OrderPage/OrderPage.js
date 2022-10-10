import React from "react";
import Type from "./Type";

function OrderPage() {
  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div>
          <h2>Total Price:</h2>
          <br />
          <button>주문</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
