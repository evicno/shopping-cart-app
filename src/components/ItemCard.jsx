import AddToCartForm from './AddToCartForm';
import { formatPrice } from '../utils/price';

function ItemCard({ product }) {
  return (
    <div className="item-card">
      <div className="product">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>Price: {formatPrice(product.price)}</p>
      </div>
      <AddToCartForm productId={product.id} />
    </div>
  );
}

export default ItemCard;
