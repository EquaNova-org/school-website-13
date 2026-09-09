import BlurText from '../components/BlurText';
import { useLanguage } from '../context/LanguageContext';
import photo from '../assets/photos/photo-16.jpg';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section about">
      <div className="wrap about__grid">
        <div className="about__media">
          <img src={photo} alt="Students and staff gathered at a school assembly" />
        </div>
        <div className="about__copy">
          <p className="eyebrow">{t.about.label}</p>
          <BlurText
            as="h2"
            text={t.about.title}
            delay={35}
            animateBy="words"
            direction="top"
            className="about__title"
          />
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
