import React, { useRef } from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
const Header = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallRef = useRef();

  const addItem = (event) => {
    event.preventDefault();
    let myObj = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      Large: largeRef.current.value,
      Medium: mediumRef.current.value,
      Small: smallRef.current.value,
    };

    props.addShoeItem(myObj);
  };

  return (
    <div className="main-header">
      <form className="form" onSubmit={addItem}>
        <label htmlFor="shoe-name">Shoe Name</label>
        <input ref={nameRef} type="text" id="shoe-name" />
        <label htmlFor="description">Description</label>
        <input ref={descriptionRef} type="text" id="description" />
        <label htmlFor="price">Price</label>
        <input ref={priceRef} type="number" id="price" />
        <div className="amount">
          <label htmlFor="large">L</label>
          <input ref={largeRef} type="number" id="large" />
          <label htmlFor="medium">M</label>
          <input ref={mediumRef} type="number" id="medium" />
          <label htmlFor="small">S</label>
          <input ref={smallRef} type="number" id="small" />
        </div>
        <button>Add Item</button>
      </form>
      <button>Show Cart</button>
    </div>
  );
};

export default Header;
