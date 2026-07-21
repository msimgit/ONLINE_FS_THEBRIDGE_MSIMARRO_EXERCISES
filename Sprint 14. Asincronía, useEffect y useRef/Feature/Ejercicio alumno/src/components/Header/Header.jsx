import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  // Estado: ¿está abierto el menú móvil? Empieza cerrado (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Invierte el valor actual: abierto → cerrado, cerrado → abierto
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Al pulsar un enlace, cerramos el menú (útil en móvil)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <NavLink to="/" className="header-logo" onClick={closeMenu}>
        WorldCup Shop
      </NavLink>

      {/* Botón hamburguesa — solo visible en móvil vía CSS */}
      <button
        className="header-burger"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* La clase cambia según el estado — el CSS hace el resto */}
      <nav className={isMenuOpen ? 'header-nav open' : 'header-nav'}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={closeMenu}>
          Productos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;