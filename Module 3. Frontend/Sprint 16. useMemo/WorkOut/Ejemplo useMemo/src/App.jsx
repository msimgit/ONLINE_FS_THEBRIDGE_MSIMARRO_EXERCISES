import { useState, useMemo } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];

  // useMemo evita recalcular este filtro innecesariamente
  const filteredProducts = useMemo(() => {
    console.log("Filtrando productos...");
    return products.filter((p) =>
      p.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div>
      <h1>useMemo Example</h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <ul>
        {filteredProducts.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
