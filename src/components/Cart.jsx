import { useOutletContext } from 'react-router';
import CartCard from './CartCard';
import { formatPrice } from '../utils/price';
import '../styles/Cart.css';

const Cart = () => {
  const context = useOutletContext();
  const getProduct = (productId) => {
    return context?.products.find((obj) => obj.id === productId);
  };
  const totalPrice = (() => {
    const items = Array.from(context?.itemsInCart ?? []);
    let total = 0;
    for (const [id, quantity] of items) {
      total += getProduct(id).price * quantity;
    }
    return formatPrice(total);
  })();

  return (
    <div className="cart">
      <h1>Cart</h1>
      {context?.itemsCount === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div className="cart-content">
          <ul className="cart-items">
            {Array.from(context?.itemsInCart ?? []).map(([id, quantity]) => (
              <li key={id}>
                <CartCard
                  quantity={quantity}
                  productId={id}
                  getProduct={getProduct}
                />
              </li>
            ))}
          </ul>
          <div className="order-summary">
            <h2>Total: {totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
