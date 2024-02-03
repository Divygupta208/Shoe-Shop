import React from "react";
import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="cart-main">
      <div>
        <div></div>
        <button>X</button>
      </div>
      <button>Place Order</button>
      <button>Close</button>
    </div>
  );
};

export default Cart;
