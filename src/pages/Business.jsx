import Contact from '../components/Contact.jsx'

function Business() {
  return (
    <>
      <main className="hero">
        <p className="hero-eyebrow">IT na klíč pro firmy</p>
        <h1 className="hero-title">
          Kompletní IT zázemí pro vaši firmu
        </h1>
        <p className="hero-subtitle">
          Postarám se o vaši techniku, sítě a vybavení, abyste se mohli naplno
          věnovat svému podnikání.
        </p>
        <a className="hero-cta" href="#kontakt">
          Kontaktujte mě
        </a>
      </main>

      <section id="sluzby" className="section">
        <h2 className="section-title">Co pro vás zajistím</h2>
        <p className="section-subtitle">
          Kompletní IT zázemí, abyste se mohli soustředit na své podnikání.
        </p>

        <div className="cards">
          <article className="card">
            <h3 className="card-title">Správa IT na klíč</h3>
            <p className="card-text">
              Postarám se o vaše počítače, sítě a systémy. Monitoring, údržba
              a rychlé řešení problémů — bez vlastního IT oddělení.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Přístroje a vybavení</h3>
            <p className="card-text">
              Dodám a zprovozním hardware na míru vaší provozovně — od počítačů
              a sítí po vybavení pro obchody.
            </p>
          </article>

          <article className="card">
            <h3 className="card-title">Podpora pro firmy a obchody</h3>
            <p className="card-text">
              Pokladní systémy, sítě a každodenní IT podpora. Když něco
              nefunguje, jsem po ruce.
            </p>
          </article>
        </div>
      </section>

      <Contact />
    </>
  )
}

export default Business
