import React from "react";

function Products({ name, imagePath, updateItemCount }) {
  const hadleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCount(name, currentValue);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          style={{ marginLeft: "7px" }}
          type="number"
          name="qunatity"
          min="0"
          defaultValue={0}
          onChange={hadleChange}
        />
      </form>
    </div>
  );
}

export default Products;
