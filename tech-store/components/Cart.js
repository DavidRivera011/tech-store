export default function Cart({ cart, removeFromCart, clearCart }) {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? <p>El carrito está vacío</p> : (
          cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} width="50" />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </div>
          ))
        )}
        {cart.length > 0 && <button onClick={clearCart}>Vaciar carrito</button>}
      </div>
    );
  }