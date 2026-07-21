import { useState, useEffect } from 'react';
import { getReviews } from '../api/reviews';

export const useReviews = (productId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(productId);
        setData(reviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  return { data, loading, error };
};