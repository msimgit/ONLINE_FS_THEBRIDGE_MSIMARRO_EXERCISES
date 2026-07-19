function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>WorldCup Shop — Camisetas del Mundial 2026</p>
      <p>
        © {currentYear} Mario Simarro · PixelForge Dev Studio
      </p>
    </footer>
  );
}

export default Footer;