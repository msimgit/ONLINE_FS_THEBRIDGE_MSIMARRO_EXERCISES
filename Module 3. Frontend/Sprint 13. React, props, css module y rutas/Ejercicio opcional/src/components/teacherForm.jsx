function TeacherForm({ newName, setNewName, changeName }) {
  return (
    <form onSubmit={changeName}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="add a name"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TeacherForm;