import BlurText from '../components/BlurText';
import { StatCard } from '../components/InfoCard';
import { useLanguage } from '../context/LanguageContext';
import photo from '../assets/photos/photo-15.jpg';
import './Achievements.css';

export default function Achievements() {
  const { t } = useLanguage();
  return (
    <section id="achievements" className="section section--navy achievements">
      <div className="wrap">
        <p className="eyebrow">{t.achievements.label}</p>
        <div className="achievements__stats">
          {t.achievements.stats.map((s, i) => (
            <StatCard key={i} value={s.value} title={s.title} />
          ))}
        </div>

        <div className="achievements__story">
          <div className="achievements__story-copy">
            <BlurText
              as="h2"
              text={t.achievements.nationalTitle}
              delay={30}
              animateBy="words"
              direction="top"
              className="achievements__story-title"
            />
            {t.achievements.nationalBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="achievements__story-media">
            <img src={photo} alt="School staff receiving the BYD presidential gift vehicle" />
          </div>
        </div>
      </div>
    </section>
  );
}
