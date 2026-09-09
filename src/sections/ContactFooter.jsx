import { useLanguage } from '../context/LanguageContext';
import { EMAIL } from '../data/content';
import './ContactFooter.css';

export default function ContactFooter() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="contact">
      <div className="wrap contact__grid">
        <div>
          <p className="eyebrow">{t.footer.label}</p>
          <h2 className="contact__name">{t.footer.name}</h2>
          <p className="contact__closing">{t.footer.closing}</p>
        </div>

        <div className="contact__details">
          <div>
            <span className="contact__label">Address</span>
            <p>{t.footer.address}<br />{t.footer.postcode}</p>
          </div>
          <div>
            <span className="contact__label">{t.footer.emailLabel}</span>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
        </div>
      </div>
      <div className="wrap contact__bottom">
        <span>&copy; {new Date().getFullYear()} School No. 13</span>
      </div>
    </footer>
  );
}
