import React, { useRef, useState } from "react";
import "./ShoeList.css";

const INITIAL_CART = [];

const ShoeList = (props) => {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const handleBuyLarge = () => {};

  const handleBuyMedium = () => {};

  const handleBuySmall = () => {};

  return (
    <div>
      <ul>
        {props.shoes.map((item) => (
          <li>
            {item.name}-{item.description}-{item.price}
            <div className="quantity">
              <button onClick={handleBuyLarge}>
                Buy Large ( {item.Large})
              </button>

              <button onClick={handleBuyMedium}>
                Buy Medium ( {item.Medium})
              </button>

              <button onClick={handleBuySmall}>
                Buy Small ( {item.Small})
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;
