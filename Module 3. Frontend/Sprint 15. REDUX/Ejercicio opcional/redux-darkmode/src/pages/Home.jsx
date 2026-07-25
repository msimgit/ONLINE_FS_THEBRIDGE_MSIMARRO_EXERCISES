import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../features/theme/themeSlice.js'

function Home() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Cambiar modo
      </button>
      <br />
      <Link to="/about">Ir a About</Link>
    </div>
  )
}

export default Home