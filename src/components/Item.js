import React, { useState } from "react";

function Item({ name, category, id }) {
  const [onItemClick, setOnItemClick] = useState(false);
  function handleClick() {
    setOnItemClick((prev) => !prev);
  }
  return (
    <li className={onItemClick ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={onItemClick ? "remove" : "add"} onClick={handleClick}>
        {onItemClick ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
