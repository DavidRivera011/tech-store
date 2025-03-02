import products from "../data/products.json";
export default function ProductList({ addToCart }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} width="50" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}