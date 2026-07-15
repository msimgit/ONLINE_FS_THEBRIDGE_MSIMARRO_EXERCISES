import { useFetch } from "../hooks/useFetch";

export default function PostsList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.slice(0,5).map(p => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}