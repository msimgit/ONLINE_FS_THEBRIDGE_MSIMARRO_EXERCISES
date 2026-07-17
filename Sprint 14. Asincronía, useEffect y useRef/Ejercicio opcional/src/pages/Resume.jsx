import { studies, experiences } from '../data/resume';

function Resume() {
  return (
    <section>
      <h1>Currículum</h1>

      <h2>Experiencia</h2>
      <ul>
        {experiences.map(exp => (
          <li key={exp.id}>
            <strong>{exp.title}</strong> — {exp.company} ({exp.date})
          </li>
        ))}
      </ul>

      <h2>Formación</h2>
      <ul>
        {studies.map(study => (
          <li key={study.id}>
            <strong>{study.title}</strong> — {study.institution} ({study.date})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;