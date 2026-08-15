//import { useOutletContext } from 'react-router';
import { formatPrice } from '../utils/price';
import QuantitySelector from './QuantitySelector';
import '../styles/Cart.css';

const CartCard = ({ quantity, productId, getProduct }) => {
  // const context = useOutletContext();
  const product = getProduct(productId);
  return (
    <>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>Quantity: {quantity}</p>
      <QuantitySelector productId={productId} quantity={quantity} />
      <p>Total: {formatPrice(product.price * quantity)}</p>
    </>
  );
};

export default CartCard;
