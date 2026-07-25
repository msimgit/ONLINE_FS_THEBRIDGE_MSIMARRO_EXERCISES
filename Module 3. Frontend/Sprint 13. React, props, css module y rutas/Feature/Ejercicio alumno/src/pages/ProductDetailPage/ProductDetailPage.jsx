import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../../data/mockProducts';

function ProductDetailPage() {
  // Lee el :id de la URL — llega como string, igual que los ids del mock
  const { id } = useParams();

  // Estado: cantidad seleccionada por el usuario
  const [quantity, setQuantity] = useState(1);

  // Busca el producto — si no existe, find devuelve undefined
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  // Patrón "no encontrado" — como el null del servicio en Express
  if (!product) {
    return (
      <section className="product-detail">
        <h1>Producto no encontrado</h1>
        <p>El producto con id "{id}" no existe en el catálogo.</p>
        <Link to="/products">Volver al catálogo</Link>
      </section>
    );
  }

  // Contador con límites: mínimo 1, máximo el stock disponible
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  return (
    <section className="product-detail">
      <Link to="/products" className="back-link">
        ← Volver al catálogo
      </Link>

      <div className="product-detail-content">
        <img src={product.imageUrl} alt={product.name} />

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price} €</p>
          <p className="product-stock">Stock: {product.stock} unidades</p>

          <div className="quantity-selector">
            <button onClick={decrease}>−</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>

          <button className="btn-primary">
            Añadir {quantity} al carrito
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
