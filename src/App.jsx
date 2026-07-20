import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import { getUpdatedCart } from './utils/cart';

function App() {
  const [itemsInCart, setItemsInCart] = useState(new Map());
  const itemsCount = [...itemsInCart.values()].reduce(
    (sum, value) => sum + value,
    0,
  );

  const addItemsToCart = (id, quantity) => {
    setItemsInCart(getUpdatedCart(itemsInCart, id, Number(quantity)));
  };

  return (
    <>
      <Navbar itemsCount={itemsCount} />
      <Outlet context={addItemsToCart} />
    </>
  );
}

export default App;
