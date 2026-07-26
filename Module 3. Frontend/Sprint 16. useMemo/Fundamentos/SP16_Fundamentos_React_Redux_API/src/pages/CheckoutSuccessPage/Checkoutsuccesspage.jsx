import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CheckoutSuccessPage() {
  // El thunk checkout() guarda el pedido confirmado en state.cart.order
  const order = useSelector((state) => state.cart.order);

  if (!order) {
    // Alguien llegó a /checkout directamente sin haber completado un pedido
    return (
      <section className="checkout-success">
        <h1>No hay ningún pedido reciente</h1>
        <Link to="/products" className="btn-primary">
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-success">
      <h1>Pedido confirmado</h1>
      <p>Pedido #{order.id} — Total: {order.total.toFixed(2)} €</p>

      <ul className="checkout-success-items">
        {order.items.map((item) => (
          <li key={item.id}>
            {item.product.name} x {item.quantity} — {item.priceAtPurchase} € c/u
          </li>
        ))}
      </ul>

      <Link to="/products" className="btn-primary">
        Seguir comprando
      </Link>
    </section>
  );
}

export default CheckoutSuccessPage;