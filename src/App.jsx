import { useState } from "react";
import Header from "./components/Layout/Header";
import ShoeList from "./components/Shoes/ShoeList";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

const INITIAL_ITEMS = [
  {
    id: "1",
    name: "Adidas",
    description: "100% cotton",
    price: "220",
    Large: "100",
    Medium: "20",
    Small: "20",
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [shoeList, setShoeList] = useState(INITIAL_ITEMS);

  const addShoeItemHandler = (item) => {
    setShoeList((prevList) => {
      return [...prevList, item];
    });
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <Header addShoeItem={addShoeItemHandler} showCart={handleShowCart} />
      <ShoeList shoes={shoeList} />
      {showCart && <Cart items={shoeList} />}
    </CartProvider>
  );
}

export default App;
