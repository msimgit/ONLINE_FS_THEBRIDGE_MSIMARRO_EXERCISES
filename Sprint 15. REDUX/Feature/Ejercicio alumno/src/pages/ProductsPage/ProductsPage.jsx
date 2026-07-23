import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

function ProductsPage() {
  const { data: products, loading, error } = useProducts();

  // Estado del buscador: igual que en Sprint 13, no cambia nada
  const [searchText, setSearchText] = useState('');

  if (loading) return <p className="status-message">Cargando catálogo...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  // Estado derivado: se recalcula en cada render sobre los datos reales
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="products-page">
      <h1>Catálogo</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Buscar camiseta..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="status-message">No hay resultados para "{searchText}"</p>
      )}
    </section>
  );
}

export default ProductsPage;