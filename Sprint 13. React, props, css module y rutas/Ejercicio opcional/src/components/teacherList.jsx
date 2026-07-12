function TeacherList({ profesores, onSelect, onDelete }) {
  return (
    <ul>
      {profesores.map((profesor) => (
        <li key={profesor} onClick={() => onSelect(profesor)}>
          {profesor}
          <button
            onClick={(e) => {
              e.stopPropagation(); // evita que el clic en la X también seleccione
              onDelete(profesor);
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TeacherList;