# Ejercicio: Cambio de Nombre del Profesor

Ejercicio de práctica de `useState` en React. Partiendo de una lista de profesores, al hacer clic en uno de ellos cambia el nombre del profesor mostrado en el título. Se ha completado el ejercicio base, el bonus del formulario y dos ampliaciones propias.

## Requisitos del ejercicio

1. En el componente funcional `App`, importar `useState` desde React.
2. Definir dos variables de estado:
   - `name`: inicializada con `"Sofía"`, representa el nombre actual del profesor.
   - `newName`: inicializada con `''`, representa el nuevo nombre introducido por el usuario.
3. Renderizar un título `<h2>` con el texto "Teacher Name" seguido del valor de `name`.
4. Renderizar una lista `<ul>` con los nombres predefinidos ("Data", "Reyes", "Yolanda"); al hacer clic en cada `<li>`, actualizar el nombre mostrado mediante `setName`.

### Bonus propuesto

Añadir un formulario que al enviarse cambie el nombre:

- Función `changeName` que verifica que `newName` no esté vacío, actualiza `name` y restablece `newName` a cadena vacía.
- Input controlado (`type="text"`, `value` vinculado a `newName`, `onChange` que actualiza el estado, `placeholder="add a name"`).
- Botón `type="submit"` con el texto "Add".
- El formulario maneja el evento `onSubmit` con `changeName`.

## Desarrollo realizado

Se ha resuelto el ejercicio completo (base + bonus) y se ha ampliado con funcionalidad adicional, aplicando una arquitectura de componentes con separación de responsabilidades en lugar de concentrar todo el código en `App`.

### Estructura del proyecto

```
src/
├── App.jsx                      # Componente padre: estado y lógica
├── components/
│   ├── teacherName.jsx          # Título con el profesor activo
│   ├── teacherList.jsx          # Lista clicable con botón de borrado
│   └── teacherForm.jsx          # Formulario controlado (bonus)
└── data/
    └── profesores.js            # Datos iniciales (simula BBDD)
```

### Funcionalidad implementada

**Ejercicio base:**
- Título `<h2>` que muestra el profesor activo (`TeacherName`).
- Lista de profesores clicable: al pulsar un nombre, se actualiza el título (`TeacherList`).

**Bonus:**
- Formulario con input controlado y botón "Add" (`TeacherForm`).
- `changeName` valida que el campo no esté vacío, actualiza `name` con `e.preventDefault()` para evitar la recarga de página, y limpia el input tras enviar.

**Ampliaciones propias:**
- La lista de profesores es una variable de estado (`useState` inicializado desde `data/profesores.js`), no un array estático.
- Al enviar un nombre nuevo por el formulario, además de mostrarse en el título se **añade a la lista** (si no existe ya), usando spread para mantener la inmutabilidad: `setProfesores([...profesores, newName])`.
- Cada profesor tiene un botón ❌ para **eliminarlo de la lista**, implementado con `filter` y `e.stopPropagation()` para que el clic en la X no seleccione a la vez al profesor. Si se borra el profesor activo, el título se restablece a "Sofía".

### Conceptos aplicados

- `useState` con múltiples estados (`name`, `newName`, `profesores`).
- Inmutabilidad del estado: spread operator para añadir, `filter` para borrar.
- Input controlado y manejo de formularios (`onSubmit`, `e.preventDefault()`).
- Comunicación padre-hijo: el estado vive en `App` y baja como props; los eventos suben mediante callbacks (`onSelect`, `onDelete`).
- Propagación de eventos: `e.stopPropagation()` en elementos anidados con handlers propios.

## Ejecución

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.