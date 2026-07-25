import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  const isDark = useSelector((state) => state.theme.isDark)

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App