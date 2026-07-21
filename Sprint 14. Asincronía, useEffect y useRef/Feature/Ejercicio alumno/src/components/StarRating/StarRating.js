function StarRating({ rating, max = 5 }) {
  return (
    <span className="star-rating" aria-label={`${rating} de ${max}`}>
      {'★'.repeat(rating)}{'☆'.repeat(max - rating)}
    </span>
  );
}

export default StarRating;