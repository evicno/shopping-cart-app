import { useOutletContext } from 'react-router';

function AddToCartForm({ productId }) {
  const context = useOutletContext();

  function handleSubmit(e) {
    e.preventDefault();
    context.addItemsToCart(productId, e.target.elements.quantity.value);
    e.target.reset();
  }

  return (
    <form className="select-product" onSubmit={handleSubmit}>
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="0"
        max="10"
        placeholder="0"
      />
      <button type="submit">Add to cart</button>
    </form>
  );
}

export default AddToCartForm;
