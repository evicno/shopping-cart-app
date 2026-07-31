import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import { getUpdatedCart } from './utils/cart';
import { fetchProducts } from './api/fetchProducts';

function App() {
  const [itemsInCart, setItemsInCart] = useState(new Map());
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetchProducts()
      .then((data) => {
        if (!ignore) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!ignore) {
          setLoading(false);
          console.log(error);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);
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
      <Outlet
        context={{ addItemsToCart, itemsCount, itemsInCart, products, loading }}
      />
    </>
  );
}

export default App;
