function ItemCard({ product }) {
  const price = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(product.price);
  return (
    <div className="item-card">
      <h2>{product.title}</h2>
      <p>Price: {price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ItemCard;
