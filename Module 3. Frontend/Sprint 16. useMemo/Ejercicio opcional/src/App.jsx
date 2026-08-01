import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([3, 1, 5, 2]);
  const [asc, setAsc] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [count, setCount] = useState(0);

  const sortedItems = useMemo(() => {
    console.log("useMemo: recalculando lista ordenada");
    const copy = [...items];
    copy.sort((a, b) => (asc ? a - b : b - a));
    return copy;
  }, [items, asc]);

  const displayedItems = sorted ? sortedItems : items;

  const shuffleItems = () => {
    const copy = [...items];
    // algoritmo Fisher-Yates para mezclar sin sesgo
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setItems(copy);
    setSorted(false); // al mezclar, volvemos a mostrar el orden "crudo"
  };

  return (
    <div className="app">
      <h1>Ordenar lista</h1>

      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="button-row">
        <button onClick={shuffleItems}>Aleatorio 🔀</button>
        <button
          onClick={() => {
            setAsc(!asc);
            setSorted(true);
          }}
        >
          Ordenar ({asc ? "descendente" : "ascendente"})
        </button>
      </div>

      <hr />

      <p>Contador: {count}</p>
      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>
          Incrementar contador
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
