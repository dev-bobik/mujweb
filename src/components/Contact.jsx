function Contact() {
  return (
    <section id="kontakt" className="section">
      <h2 className="section-title">Pojďme se spojit</h2>
      <p className="section-subtitle">
        Máte dotaz nebo zájem o spolupráci? Ozvěte se — rád pomůžu.
      </p>

      <div className="contact-links">
        <a className="contact-link" href="mailto:robin.petr523@gmail.com">
          <span className="contact-label">E-mail</span>
          <span className="contact-value">robin.petr523@gmail.com</span>
        </a>

        <a className="contact-link" href="tel:+420776842178">
          <span className="contact-label">Telefon</span>
          <span className="contact-value">+420 776 842 178</span>
        </a>

        <a
          className="contact-link"
          href="https://instagram.com/petr.robin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-label">Instagram</span>
          <span className="contact-value">@petr.robin</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
