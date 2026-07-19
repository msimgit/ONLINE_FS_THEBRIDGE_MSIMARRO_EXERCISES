import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

function HomePage() {
  // Destacados: los 4 primeros del catálogo (criterio simple, se puede cambiar)
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <section className="home">
      <div className="home-hero">
        <h1>WorldCup Shop</h1>
        <p>Las camisetas oficiales del Mundial 2026</p>
        <Link to="/products" className="btn-primary">
          Ver catálogo completo
        </Link>
      </div>

      <h2>Destacados</h2>
      <ProductGrid products={featuredProducts} />
    </section>
  );
}

export default HomePage;