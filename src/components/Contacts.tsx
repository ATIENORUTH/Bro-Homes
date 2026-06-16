import { motion } from "framer-motion";

function LogoSVG() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="card-logo-svg"
    >
      {/* Outer Stylized House Roof */}
      <path
        d="M 50 12 L 85 40 H 73 L 50 21 L 27 40 H 15 Z"
        fill="currentColor"
      />
      {/* Small 4-Pane Window */}
      <rect x="44" y="28" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="28" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="44" y1="34" x2="56" y2="34" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Stylized W structure */}
      {/* Vertical pillars */}
      <path d="M 27 46 V 74 H 33 V 46 Z" fill="currentColor" />
      <path d="M 67 46 V 74 H 73 V 46 Z" fill="currentColor" />
      {/* Central V shape */}
      <path d="M 33 46 L 50 68 L 67 46 L 61 46 L 50 60 L 39 46 Z" fill="currentColor" />
      {/* Crossbar that runs in between */}
      <path d="M 30 56 H 70 V 59 H 30 Z" fill="currentColor" />
      
      {/* Bottom Rectangle Block */}
      <rect x="25" y="76" width="50" height="6" fill="currentColor" />
    </svg>
  );
}

export default function Contacts() {
  const phone1 = "+254713044664";
  const phone2 = "+254738750454";
  const email = "mombasa.homes@yahoo.com";

  return (
    <section id="contacts" className="contacts-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Our Director
        </motion.h2>

        <motion.div
          className="business-card-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          {/* Left side: Branding Block */}
          <div className="card-brand-side">
            <div className="logo-wrapper">
              <LogoSVG />
            </div>
            <h3 className="brand-name">BROS HOMES LTD</h3>
          </div>

          {/* Right side: Information Block */}
          <div className="card-info-side">
            <h3 className="company-title">BROS HOMES LIMITED</h3>
            <p className="company-services">
              Real Estate Managers, Commission Agents, Debt Collectors, Real Estate Developers, General Construction, Real Estate Consultant
            </p>

            <div className="card-divider"></div>

            <div className="director-info">
              <h4 className="director-name">WILLIS OJUOK</h4>
              <p className="director-role">Director</p>
            </div>

            <div className="contact-methods">
              {/* Phone call links */}
              <div className="contact-item">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div className="contact-links-group">
                  <a href={`tel:${phone1}`} className="contact-link" id="contact-phone-1">
                    {phone1}
                  </a>
                  <span className="divider-slash">/</span>
                  <a href={`tel:${phone2}`} className="contact-link" id="contact-phone-2">
                    {phone2}
                  </a>
                </div>
              </div>

              {/* WhatsApp quick links */}
              <div className="contact-item">
                <span className="contact-icon wa-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.459L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.435.002 9.851-4.407 9.854-9.842.002-2.634-1.02-5.11-2.885-6.978C16.368 1.917 13.9 1.9 12.012 1.9c-5.44 0-9.859 4.41-9.863 9.848-.002 1.776.47 3.514 1.365 5.068L2.525 21.65l4.122-1.082zM17.15 14.49c-.282-.141-1.664-.82-1.921-.913-.258-.094-.446-.141-.634.141-.188.281-.727.913-.891 1.099-.164.188-.328.211-.61.07-1.127-.564-1.918-1.036-2.678-2.338-.282-.482-.164-.741-.094-.881.063-.125.141-.282.211-.423.07-.141.094-.235.141-.376.047-.141.023-.258-.012-.328-.035-.07-.446-1.077-.61-1.477-.16-.388-.335-.335-.46-.341-.118-.006-.253-.007-.388-.007-.135 0-.353.05-.538.253-.186.203-.708.692-.708 1.688 0 .996.723 1.957.824 2.09.101.133 1.423 2.172 3.447 3.047.482.208.857.332 1.15.425.485.154.927.132 1.275.08.388-.058 1.664-.68 1.9-.1.236-.58.236-1.077.165-1.147-.07-.07-.258-.112-.54-.253z"/>
                  </svg>
                </span>
                <div className="contact-links-group">
                  <a
                    href={`https://wa.me/${phone1.replace(/\+/g, "")}?text=${encodeURIComponent("Hello Willis, I am looking to book a stay with Bro Homes.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link wa-link"
                    id="whatsapp-link-1"
                  >
                    Chat Willis
                  </a>
                  <span className="divider-slash">/</span>
                  <a
                    href={`https://wa.me/${phone2.replace(/\+/g, "")}?text=${encodeURIComponent("Hello Willis, I am looking to book a stay with Bro Homes.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link wa-link"
                    id="whatsapp-link-2"
                  >
                    WhatsApp 2
                  </a>
                </div>
              </div>

              {/* Email link */}
              <div className="contact-item">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent("Inquiry - Bro Homes Stay")}`}
                  className="contact-link"
                  id="contact-email"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
