import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const reducer = (state, action) => {};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducer, defaultCartState);

  const addItemToCart = () => {};
  const removeItemFromCart = () => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
