import { useState, useRef, useEffect } from 'react';
import { register } from '../../api/auth';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [success, setSuccess] = useState(false);

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!email.includes('@')) newErrors.email = 'El email no es válido';

    if (!password) newErrors.password = 'La contraseña es obligatoria';
    else if (password.length < 6)
      newErrors.password = 'Mínimo 6 caracteres';

    if (confirmPassword !== password)
      newErrors.confirmPassword = 'Las contraseñas no coinciden';

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    setApiError(null);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await register({ email, password });
      setSuccess(true);
    } catch (err) {
      setApiError('No se pudo completar el registro.');
    }
  };

  if (success) {
    return (
      <section className="auth-page">
        <h1>¡Cuenta creada!</h1>
        <p>Ya puedes iniciar sesión con tu email.</p>
      </section>
    );
  }

  return (
    <section className="auth-page">
      <h1>Crear cuenta</h1>

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

        <FormInput
          label="Repite la contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />

        {apiError && <p className="form-error">{apiError}</p>}

        <Button type="submit">Registrarme</Button>
      </form>
    </section>
  );
}

export default RegisterPage;