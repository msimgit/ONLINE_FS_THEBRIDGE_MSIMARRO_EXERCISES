import Box from "./components/Box";

export default function App() {
  return (
    <div>
      <h1>Cajas con props</h1>

      <Box color="red" text="Rojo" />
      <Box color="blue" text="Azul" />
      <Box color="green" text="Verde" />
    </div>
  );
}