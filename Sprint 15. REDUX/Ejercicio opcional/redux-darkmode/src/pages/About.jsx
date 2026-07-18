import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../features/theme/themeSlice.js'

function About() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Cambiar modo
      </button>
      <br />
      <Link to="/">Volver a Home</Link>
    </div>
  )
}

export default About