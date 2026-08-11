import { useOutletContext } from 'react-router';
import '../styles/Cart.css';

const QuantitySelector = ({ productId, quantity }) => {
  const context = useOutletContext();
  return (
    <div className="quantity-selector">
      <button
        onClick={() => context?.decreaseQuantity(productId)}
        aria-label="Decrease quantity"
        disabled={quantity < 2 ? true : false}
      >
        -
      </button>

      <button
        onClick={() => context?.increaseQuantity(productId)}
        aria-label="Increase quantity"
      >
        +
      </button>

      <button
        onClick={() => context?.removeItem(productId)}
        aria-label="Remove item"
      >
        Remove
      </button>
    </div>
  );
};

export default QuantitySelector;
