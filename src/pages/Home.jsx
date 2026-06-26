import { Link } from 'react-router-dom'
import Contact from '../components/Contact.jsx'

function Home() {
  return (
    <>
      <main className="hero">
        <p className="hero-eyebrow">Student & vývojář</p>
        <h1 className="hero-title">Robin Petr</h1>
        <p className="hero-subtitle">
          Programování a elektrotechnika jsou moje vášeň. Tvořím weby, aplikace
          a buduji dostupné IT zázemí pro firmy.
        </p>
        <Link className="hero-cta" to="/byznys">
          Prohlédnout mé služby
        </Link>
      </main>

      <section id="o-mne" className="section">
        <h2 className="section-title">O mně</h2>

        <div className="about">
          <div className="about-text">
            <p>
              Jmenuji se Robin Petr a technologie jsou moje vášeň. Věnuji se
              programování a elektrotechnice, studuji na Gymnáziu Boženy Němcové,
              kde jsem zároveň předsedou Studentské rady.
            </p>
            <p>
              Baví mě řešit reálné problémy pomocí techniky — od webů a aplikací
              až po správu sítí a vybavení.
            </p>
          </div>

          <div className="about-side">
            <h3 className="about-heading">Co umím</h3>
            <ul className="tag-list">
              <li>Tvorba webů</li>
              <li>Vývoj aplikací</li>
              <li>Správa IT a sítí</li>
              <li>Elektrotechnika</li>
              <li>Obecné programování</li>
            </ul>

            <h3 className="about-heading">Úspěchy</h3>
            <ul className="about-list">
              <li>1. místo — Haxagon Skirmish 2026 (krajské kolo)</li>
              <li>3. místo — Haxagon Skirmish 2025 (krajské kolo)</li>
              <li>Účast na Hackathonu KHK</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

export default Home
