import BlurText from '../components/BlurText';
import { useLanguage } from '../context/LanguageContext';
import photo from '../assets/photos/photo-03.jpg';
import './PathForward.css';

export default function PathForward() {
  const { t } = useLanguage();
  return (
    <section id="path" className="section pathfwd">
      <div className="wrap pathfwd__grid">
        <div className="pathfwd__media">
          <img src={photo} alt="Graduates on stage holding award certificates" />
        </div>
        <div className="pathfwd__copy">
          <p className="eyebrow">{t.path.label}</p>
          <BlurText
            as="h2"
            text={t.path.title}
            delay={35}
            animateBy="words"
            direction="top"
            className="pathfwd__title"
          />
          {t.path.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
