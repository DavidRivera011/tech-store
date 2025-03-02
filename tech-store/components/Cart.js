import { useState } from "react";
import jsPDF from "jspdf";

export default function Cart({ cart, removeFromCart, clearCart }) {
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const confirmarCompra = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    if (!confirm("¿Seguro que quieres confirmar la compra?")) return;

    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("Factura de Compra", 80, 20);

    pdf.setFontSize(12);
    let y = 40;
    let total = 0;

    cart.forEach((item, index) => {
      pdf.text(`${index + 1}. ${item.name} - $${item.price}`, 20, y);
      y += 10;
      total += item.price;
    });

    pdf.text(`Total: $${total.toFixed(2)}`, 20, y + 10);
    pdf.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, y + 20);

    pdf.save("factura.pdf");

    setCompraConfirmada(true);

    setTimeout(() => clearCart(false), 100);
  };

  return (
    <div className="cart-container">
      <h2>🛒</h2>

      {compraConfirmada ? (
        <p>✅ ¡Gracias por tu compra! La factura ha sido generada.</p>
      ) : cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </div>
          </div>
        ))
      )}

      {!compraConfirmada && cart.length > 0 && (
        <>
          <button className="clear-cart" onClick={clearCart}>Vaciar carrito</button>
          <button className="buy-button" onClick={confirmarCompra}>Confirmar compra</button>
        </>
      )}
    </div>
  );
}
