// 1. Importar hooks y Axios en App.jsx
import { useState, useEffect } from "react";
import axios from "axios";

// El componente: TODO lo demás va DENTRO de esta función
function App() {
  // 2. Declarar los 3 estados
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Escribir el useEffect con async/await
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data.slice(0, 10));
      } catch (err) {
        setError("Error al cargar los posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // 4. Renderizado condicional + lista
  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} // ← aquí se cierra el componente

// 5. Export — fuera de la función, al final
export default App;
