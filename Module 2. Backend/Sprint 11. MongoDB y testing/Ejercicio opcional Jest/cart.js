export function getTotal(cart) {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

export function addProduct(cart, product) {
  const existing = cart.find((p) => p.id === product.id);

  if (existing) {
    // ya existe: incrementamos su cantidad sin mutar el original
    return cart.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
    );
  }

  // no existe: lo añadimos al final
  return [...cart, product];
}

export function removeProduct(cart, productId) {
  return cart.filter((p) => p.id !== productId);
}

export function clearCart() {
  return [];
}

export function getProduct(cart, productId) {
  return cart.find((p) => p.id === productId);
}