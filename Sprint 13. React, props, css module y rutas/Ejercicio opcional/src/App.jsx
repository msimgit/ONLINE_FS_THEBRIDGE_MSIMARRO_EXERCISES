import { useState } from 'react';
import './App.css';
import TeacherName from './components/teacherName';
import TeacherList from './components/teacherList';
import TeacherForm from './components/teacherForm';
import profesoresIniciales from './data/profesores';

function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState('');
  const [profesores, setProfesores] = useState(profesoresIniciales);

  const changeName = (e) => {
    e.preventDefault();
    if (newName === '') return;

    setName(newName);

    // Añadir a la lista solo si no existe ya
    if (!profesores.includes(newName)) {
      setProfesores([...profesores, newName]);
    }

    setNewName('');
  };

  const deleteTeacher = (profesor) => {
    setProfesores(profesores.filter((p) => p !== profesor));

    // Si borramos al profesor que estaba activo, reseteamos el título
    if (profesor === name) {
      setName("Sofía");
    }
  };

  return (
    <>
      <TeacherName name={name} />
      <TeacherList
        profesores={profesores}
        onSelect={setName}
        onDelete={deleteTeacher}
      />
      <TeacherForm
        newName={newName}
        setNewName={setNewName}
        changeName={changeName}
      />
    </>
  );
}

export default App;