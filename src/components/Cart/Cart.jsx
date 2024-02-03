import React from "react";
import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="cart-main">
      <div>
        <ul>
          {props.items.map((item) => (
            <li>
              <div>
                {item.name}-{item.description}
              </div>
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>
      <button>Place Order</button>
      <button>Close</button>
    </div>
  );
};

export default Cart;
