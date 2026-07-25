import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

function HomePage() {
  // data llega null al principio; lo renombramos a products al destructurar
  const { data: products, loading, error } = useProducts();

  if (loading) return <p className="status-message">Cargando productos...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  // Destacados: los 4 primeros del catálogo (mismo criterio que en Sprint 13)
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="home">
      <div className="home-hero">
        <h1>WorldCup Shop</h1>
        <p>Las camisetas oficiales del Mundial 2026</p>
        <Link to="/products" className="btn btn-primary">
          Ver catálogo completo
        </Link>
      </div>

      <h2>Destacados</h2>
      <ProductGrid products={featuredProducts} />
    </section>
  );
}

export default HomePage;