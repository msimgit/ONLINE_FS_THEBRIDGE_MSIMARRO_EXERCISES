import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useProduct } from '../../hooks/useProduct';
import { useReviews } from '../../hooks/useReviews';
import { addCartItem } from '../../store/cartSlice';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

function ProductDetailPage() {
  // useParams devuelve el id como string; el backend hace Number(id) en su capa
  const { id } = useParams();

  // Dos hooks independientes: cada uno con su propio loading y error
  const { data: product, loading, error } = useProduct(id);
  const {
    data: reviews,
    loading: reviewsLoading,
    error: reviewsError,
    refetch: refetchReviews,
  } = useReviews(id);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    await dispatch(addCartItem({ productId: product.id, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return <p className="status-message">Cargando producto...</p>;

  // Un 404 del backend entra por aquí: Axios lanza error con status 4xx
  if (error) {
    return (
      <section className="product-detail">
        <p className="status-message error">Producto no encontrado</p>
        <Link to="/products" className="btn-primary">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <img src={product.imageUrl} alt={product.name} />

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price} €</p>
        <p className="product-stock">Stock: {product.stock}</p>

        <div className="quantity-selector">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
          >
            +
          </button>
        </div>

        <button className="btn btn-primary" onClick={handleAddToCart}>
          {added ? 'Añadido' : `Añadir ${quantity} al carrito`}
        </button>
      </div>

      {/* Reviews: el hook ya está conectado; ReviewList (paso 6) es opcional
          por ahora según el enunciado. De momento, versión mínima: */}
      <div className="product-reviews">
        <h2>Reviews</h2>
        {reviewsLoading && <p>Cargando reviews...</p>}
        {reviewsError && <p>No se pudieron cargar las reviews</p>}
        {reviews && reviews.length === 0 && <p>Aún no hay reviews</p>}
        {reviews && reviews.length > 0 && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>{review.comment}</li>
            ))}
          </ul>
        )}

        <ReviewForm productId={id} onSuccess={refetchReviews} />
      </div>
    </section>
  );
}

export default ProductDetailPage;