import PropTypes from "prop-types"

ProductCard.propTypes = {
  name:    PropTypes.string.isRequired,
  price:   PropTypes.number.isRequired,
  inStock: PropTypes.bool,
}

const products = [
  { id: 1, name: "Laptop Pro",    price: 1200, inStock: true  },
  { id: 2, name: "Smartphone X", price: 800,  inStock: true  },
  { id: 3, name: "Tablet S",     price: 500,  inStock: false },
]

function ProductCard({ name, price, inStock = true }) {
  return (
    <div style={{
      border: "1px solid #E2E2E2", borderRadius: "8px",
      padding: "20px", marginBottom: "12px",
      opacity: inStock ? 1 : 0.5
    }}>
      <h3>{name}</h3>
      <p>{price}€</p>
      <span>{inStock ? "✅ En stock" : "❌ Agotado"}</span>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h1>Catálogo</h1>
      {products.map(p => (
        <ProductCard key={p.id} {...p} name={p.name} />
      ))}
    </div>
  )
}