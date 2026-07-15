import { useFetch } from "../hooks/useFetch";

export default function UsersList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Cargando users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.slice(0,5).map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}