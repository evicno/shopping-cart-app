import { useOutletContext } from 'react-router';
import CartCard from './CartCard';

const Cart = () => {
  const context = useOutletContext();
  return (
    <>
      <h1>Cart</h1>
      {context?.itemsCount === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div className="cart-items">
          <ul>
            {Array.from(context?.itemsInCart ?? []).map(([id, quantity]) => (
              <li key={id}>
                <CartCard quantity={quantity} productId={id} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cart;
