import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/cartSlice';

// item = { id, productId, quantity, product: { name, price, imageUrl, ... } }
function CartItem({ item }) {
  const dispatch = useDispatch();

  const subtotal = item.quantity * item.product.price;

  const handleRemove = () => {
    dispatch(removeCartItem(item.id));
  };

  return (
    <article className="cart-item">
      <img src={item.product.imageUrl} alt={item.product.name} />

      <div className="cart-item-info">
        <h3>{item.product.name}</h3>
        <p>{item.product.price} € x {item.quantity}</p>
      </div>

      <p className="cart-item-subtotal">{subtotal.toFixed(2)} €</p>

      <button className="btn-secondary" onClick={handleRemove}>
        Eliminar
      </button>
    </article>
  );
}

export default CartItem;