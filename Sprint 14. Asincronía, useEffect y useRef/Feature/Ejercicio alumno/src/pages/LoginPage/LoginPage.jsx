import { useState, useRef, useEffect } from 'react';
import { login } from '../../api/auth';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

function LoginPage() {
  // Un estado por campo: React es el dueño del valor (formulario controlado)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Errores de validación por campo + error global del backend
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  // Paso 8: ref al primer input para el autofocus
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!email.includes('@')) newErrors.email = 'El email no es válido';
    if (!password) newErrors.password = 'La contraseña es obligatoria';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // sin esto, el navegador recarga la página

    const newErrors = validate();
    setErrors(newErrors);
    setApiError(null);

    // Si hay errores de validación, no llamamos al backend
    if (Object.keys(newErrors).length > 0) return;

    try {
      const result = await login({ email, password });
      console.log('Login correcto:', result);
      // La sesión (guardar token, redirigir...) llega en el Sprint 3
    } catch (err) {
      setApiError('No se pudo iniciar sesión. Revisa tus credenciales.');
    }
  };

  return (
    <section className="auth-page">
      <h1>Iniciar sesión</h1>

      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          ref={emailRef}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <FormInput
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        {apiError && <p className="form-error">{apiError}</p>}

        <Button type="submit">Entrar</Button>
      </form>
    </section>
  );
}

export default LoginPage;