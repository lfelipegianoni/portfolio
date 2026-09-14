import "./footer-styles.css";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";

export function Footer() {
  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    alert(message);
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="logo">
            <i className="fa-solid fa-code logo-icon"></i>
            <a href="#home" className="logo">
                <code>&lt;/&gt;</code> LuisFelipe.dev
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Redes sociais</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/luis-felipe-dos-santos-gianoni-5494ab257" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://github.com/lfelipegianoni" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="devicon-github-original"></i>
            </a>
          </div>
        </div>

        {/* Coluna 4: Informações de Contato */}
        <div className="footer-col">
          <h4>Informações de Contato</h4>
          <div className="contact-list">
            <div 
              className="contact-item clickable" 
              onClick={() => handleCopy('(15) 98152-0688', 'Telefone copiado!')}
            >
              <img src={phone} alt=""/>
              <span>
                (15) 98152-0688
              </span>
            </div>
            <div
              className="contact-item clickable" 
              onClick={() => handleCopy('lfelipe2305@hotmail.com.br', 'E-mail copiado!')}
            >
              <img src={mail} alt=""/>
              <span>lfelipe2305@hotmail.com.br</span>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Luis Felipe dos Santos Gianoni</p>
      </div>
    </footer>
  );
}