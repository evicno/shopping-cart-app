import { useOutletContext } from 'react-router';

const CartCard = ({ quantity, productId }) => {
  const context = useOutletContext();
  const getProduct = () => {
    return Array.from(context?.products).find((obj) => obj.id === productId);
  };
  return (
    <h4>
      {quantity}
      {getProduct().title}
      {getProduct().price}
    </h4>
  );
};

export default CartCard;
