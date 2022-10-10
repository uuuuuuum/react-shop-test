import React, { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import Type from "./Type";

function OrderPage() {
  const [orderDatas] = useContext(OrderContext);
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
          <h2>Total Price: {orderDatas.totals.total}</h2>
          <br />
          <button>주문</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
