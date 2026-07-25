import api from './axios';

export const getReviews = async (productId) => {
  const response = await api.get(`/products/${productId}/reviews`);
  return response.data;
};