import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Instagram, Mail, Lock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const [showSecret, setShowSecret] = useState(false);

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Heart className="logo-icon" size={32} />
            <span className="logo-text">H & R</span>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
          
          <button className="secret-btn" onClick={() => setShowSecret(true)}>
            <Lock size={16} />
            {t.footer.secretMessage}
          </button>
          
          <p className="footer-copyright">{t.footer.copyright}</p>
        </div>
      </div>
      
      {showSecret && (
        <div className="secret-modal" onClick={() => setShowSecret(false)}>
          <div className="secret-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSecret(false)}>×</button>
            <div className="secret-glow"></div>
            <Heart className="secret-icon" size={48} />
            <p className="secret-text">{t.footer.secretText}</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;