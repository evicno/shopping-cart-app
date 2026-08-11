import { useOutletContext } from 'react-router';
import ItemCard from './ItemCard';
import '../styles/Shop.css';

const Items = () => {
  const context = useOutletContext();
  return (
    <>
      {context?.products ? (
        <ul className="items">
          {context?.products.map((product) => (
            <li key={product.id} class="item-card">
              <ItemCard product={product} />
            </li>
          ))}
        </ul>
      ) : context?.loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Server Error</h1>
      )}
    </>
  );
};

export default Items;
