import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Business from './pages/Business.jsx'

function App() {
  return (
    <>
      <header className="site-header">
        <Link className="logo" to="/">Robin Petr</Link>
        <nav className="site-nav">
          <Link to="/">O mně</Link>
          <Link to="/byznys">Byznys</Link>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/byznys" element={<Business />} />
      </Routes>

      <footer className="site-footer">
        <p>© 2026 Robin Petr</p>
      </footer>
    </>
  )
}

export default App
