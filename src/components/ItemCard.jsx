import AddToCartForm from './AddToCartForm';

function ItemCard({ product }) {
  const price = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(product.price);
  return (
    <div className="item-card">
      <div className="product">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>Price: {price}</p>
      </div>
      <AddToCartForm productId={product.id} />
    </div>
  );
}

export default ItemCard;
