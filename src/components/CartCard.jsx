//import { useOutletContext } from 'react-router';
import { formatPrice } from '../utils/price';
import QuantitySelector from './QuantitySelector';
import '../styles/Cart.css';

const CartCard = ({ quantity, productId, getProduct }) => {
  // const context = useOutletContext();
  const product = getProduct(productId);
  return (
    <div className="cart-card">
      <img src={product.image} alt={product.title} height="70" />
      <h4>{product.title}</h4>
      <p>{quantity}</p>
      <QuantitySelector productId={productId} quantity={quantity} />
      <p>{formatPrice(product.price * quantity)}</p>
    </div>
  );
};

export default CartCard;
