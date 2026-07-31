import { useOutletContext } from 'react-router';
import { formatPrice } from '../utils/price';

const CartCard = ({ quantity, productId }) => {
  const context = useOutletContext();
  const getProduct = () => {
    return Array.from(context?.products ?? []).find(
      (obj) => obj.id === productId,
    );
  };
  return (
    <>
      <img src={getProduct().image} alt={getProduct().title} />
      <h4>{getProduct().title}</h4>
      <p>Quantity: {quantity}</p>
      <p>Total: {formatPrice(getProduct().price * quantity)}</p>
    </>
  );
};

export default CartCard;
