import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import "./Footer.css";
  
  const Footer = () => {
    return (
      <footer className="footer body1">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hakkımızda</h3>
            <p>
              Kendi alanında lider olan firmamız, müşteri memnuniyetini ön planda
              tutarak kaliteli hizmet sunmayı hedeflemektedir.
            </p>
          </div>
          <div className="footer-section">
            <h3>Hızlı Bağlantılar</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Anasayfa</a>
              </li>
              <li>
                <a href="#about">Hakkımızda</a>
              </li>
              <li>
                <a href="#services">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="#contact">İletişim</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>İletişim Bilgileri</h3>
            <p>Adres: 1234 Sokak Adı, Şehir, Ülke</p>
            <p>
              Email: <a href="mailto:info@sirketiniz.com">info@sirketiniz.com</a>
            </p>
            <p>Telefon: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Bizi Takip Edin</h3>
            <div className="social-media">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Şirketiniz. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  