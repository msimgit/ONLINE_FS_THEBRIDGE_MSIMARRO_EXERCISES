import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Hola, soy Mario</h1>
      <p>Ingeniero industrial del sector del agua reorientándome hacia el desarrollo full stack.</p>
      <div>
        <Link to="/projects">Ver mis proyectos</Link>
        <Link to="/resume">Ver mi currículum</Link>
      </div>
    </section>
  );
}

export default Home;