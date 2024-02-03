import { useState } from "react";
import Header from "./components/Layout/Header";
import ShoeList from "./components/ShoeList";

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
  const [shoeList, setShoeList] = useState(INITIAL_ITEMS);

  const addShoeItemHandler = (item) => {
    setShoeList((prevList) => {
      return [...prevList, item];
    });
  };

  return (
    <>
      <Header addShoeItem={addShoeItemHandler} />
      <ShoeList shoes={shoeList} />
    </>
  );
}

export default App;
