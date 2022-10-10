import React from "react";
import Type from "./Type";

function OrderPage() {
  return (
    <div>
      <Type orderType="products" />
      <Type orderType="options" />
    </div>
  );
}

export default OrderPage;
