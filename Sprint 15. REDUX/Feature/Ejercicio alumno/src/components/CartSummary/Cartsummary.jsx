import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkout } from '../../store/cartSlice';

// items = cart.items — el backend no manda total, lo calculamos aquí
function CartSummary({ items }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );

  const handleCheckout = async () => {
    try {
      await dispatch(checkout()).unwrap();
      navigate('/checkout');
    } catch {
      // El error ya queda en state.cart.error; CartPage lo puede mostrar
    }
  };

  return (
    <div className="cart-summary">
      <p className="cart-summary-total">Total: {total.toFixed(2)} €</p>
      <button
        className="btn-primary"
        onClick={handleCheckout}
        disabled={items.length === 0}
      >
        Finalizar compra
      </button>
    </div>
  );
}

export default CartSummary;