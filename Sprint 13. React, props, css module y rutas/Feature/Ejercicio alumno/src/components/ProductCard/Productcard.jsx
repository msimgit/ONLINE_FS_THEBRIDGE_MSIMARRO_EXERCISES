import { Link } from 'react-router-dom';

// Recibe el producto por props — destructuring directo en el parámetro
function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-card-body">
          <h3>{product.name}</h3>
          <p className="product-card-price">{product.price} €</p>
          {product.stock < 10 && (
            <p className="product-card-low-stock">¡Últimas unidades!</p>
          )}
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
