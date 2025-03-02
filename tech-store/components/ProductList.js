import products from "../data/products.json";
export default function ProductList({ addToCart }) {
  return (
    <div className="product-list">
  {products.map((product) => (
    <div key={product.id} className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  ))}
</div>

  );
}