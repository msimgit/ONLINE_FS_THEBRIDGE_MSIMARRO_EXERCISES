import { useState } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

function ProductsPage() {
  // Estado: lo que el usuario ha escrito en el buscador
  const [searchText, setSearchText] = useState('');

  // Estado DERIVADO: se calcula en cada render, no se guarda en useState
  const filteredProducts = MOCK_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="products-page">
      <h1>Catálogo</h1>

      {/* Input controlado: value viene del estado, onChange lo actualiza */}
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
        <p className="no-results">
          No hay resultados para "{searchText}"
        </p>
      )}
    </section>
  );
}

export default ProductsPage;
