import { useRef } from "react";

function RefForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos:", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario con useRef</h2>
      <input ref={nameRef} placeholder="Nombre" />
      <br />
      <input ref={emailRef} placeholder="Email" />
      <br />
      <textarea ref={messageRef} placeholder="Mensaje" />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default RefForm;