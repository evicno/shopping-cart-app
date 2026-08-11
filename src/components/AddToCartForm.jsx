import { useState } from 'react';
import { useOutletContext } from 'react-router';
import '../styles/Shop.css';

function AddToCartForm({ productId }) {
  const [qty, setQty] = useState(0);
  const context = useOutletContext();
  const disabledButton = qty <= 0;

  function handleChange(e) {
    setQty(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    context.addItemsToCart(productId, e.target.elements.quantity.value);
    e.target.reset();
  }

  return (
    <form className="select-product" onSubmit={handleSubmit}>
      <div className="quantity-input">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="10"
          placeholder="0"
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={disabledButton}>
        Add to cart
      </button>
    </form>
  );
}

export default AddToCartForm;
