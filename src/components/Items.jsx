import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/fetchProducts';

const Items = () => {
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

  return (
    <>
      {products ? (
        <div className="items">
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Server Error</h1>
      )}
    </>
  );
};

export default Items;
