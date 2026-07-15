import { useState } from "react";
import RefForm from "./components/RefForm";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos:", form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Formulario controlado (useState)</h2>
        <input name="name" value={form.name}
          onChange={handleChange} placeholder="Nombre" />
        <br />
        <input name="email" value={form.email}
          onChange={handleChange} placeholder="Email" />
        <br />
        <textarea name="message" value={form.message}
          onChange={handleChange} placeholder="Mensaje" />
        <br />
        <button
          type="submit"
          disabled={!form.name || !form.email || !form.message}
        >Enviar</button>
      </form>

      <RefForm />
    </>
  );
}

export default App;