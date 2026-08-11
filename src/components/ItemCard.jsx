import AddToCartForm from './AddToCartForm';
import { formatPrice } from '../utils/price';
import '../styles/Shop.css';

function ItemCard({ product }) {
  return (
    <>
      <div className="product">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} height="230" />
        <p>Price: {formatPrice(product.price)}</p>
      </div>
      <AddToCartForm productId={product.id} />
    </>
  );
}

export default ItemCard;
