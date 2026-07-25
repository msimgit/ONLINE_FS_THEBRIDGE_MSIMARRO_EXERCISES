import projects from '../data/projects';

function Projects() {
  return (
    <section>
      <h1>Proyectos</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.id}>
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">Ver proyecto</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;