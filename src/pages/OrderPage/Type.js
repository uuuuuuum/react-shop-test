import React, { useEffect, useState } from "react";
import Products from "./Products";
import axios from "axios";

export default function Type({ orderType }) {
  console.log("orderType, ", orderType);
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, []);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const ItemComponents = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => {
    return (
      <ItemComponents
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });
  console.log("optionItems,", optionItems, items);

  return <div>{optionItems}</div>;
}
