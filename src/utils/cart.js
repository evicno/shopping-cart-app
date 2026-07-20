export function getUpdatedCart(cart, id, quantity) {
  const newCart = new Map(cart);
  if (!cart.has(id)) {
    // item to add not in cart
    newCart.set(id, quantity);
  } else {
    // item to add already in cart
    const previousQty = Number(cart.get(id));
    newCart.set(id, quantity + previousQty);
  }
  return newCart;
}
