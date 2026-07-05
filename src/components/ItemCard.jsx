function ItemCard({ product }) {
  return (
    <div className="item-card">
      <h2>{product.title}</h2>
      <p>Price: {product.price} €</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ItemCard;
