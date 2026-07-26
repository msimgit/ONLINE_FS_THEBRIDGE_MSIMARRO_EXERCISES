import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReview } from '../../api/reviews';

// onSuccess: callback para recargar la lista de reviews (le pasamos refetch)
function ReviewForm({ productId, onSuccess }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <p className="status-message">
        <button className="btn-secondary" onClick={() => navigate('/login')}>
          Inicia sesión
        </button>{' '}
        para dejar una reseña.
      </p>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!comment.trim()) {
      setError('Escribe un comentario antes de enviar.');
      return;
    }

    setSubmitting(true);
    try {
      await createReview(productId, { rating: Number(rating), comment });
      setComment('');
      setRating(5);
      onSuccess?.();
    } catch (err) {
      setError(
        err.response?.data?.error || 'No se pudo enviar la reseña.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label htmlFor="rating">Puntuación</label>
      <select
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        {[5, 4, 3, 2, 1].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Escribe tu opinión sobre este producto..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {error && <p className="form-error">{error}</p>}

      <button className="btn-primary" type="submit" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar reseña'}
      </button>
    </form>
  );
}

export default ReviewForm;