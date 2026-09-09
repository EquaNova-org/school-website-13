import { ValueCard } from '../components/InfoCard';
import { useLanguage } from '../context/LanguageContext';
import './Values.css';

export default function Values() {
  const { t } = useLanguage();
  return (
    <section id="values" className="section values">
      <div className="wrap">
        <p className="eyebrow">{t.values.label}</p>
        <div className="values__grid">
          {t.values.items.map((v, i) => (
            <ValueCard key={i} title={v.title} body={v.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
