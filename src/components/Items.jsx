import { useOutletContext } from 'react-router';
import ItemCard from './ItemCard';

const Items = () => {
  const context = useOutletContext();
  return (
    <>
      {context?.products ? (
        <div className="items">
          <ul>
            {context?.products.map((product) => (
              <li key={product.id}>
                <ItemCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      ) : context?.loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Server Error</h1>
      )}
    </>
  );
};

export default Items;
