import DepthCarousel from '../components/DepthCarousel';
import BlurText from '../components/BlurText';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

import p14 from '../assets/photos/photo-14.jpg';
import p15 from '../assets/photos/photo-15.jpg';
import p19 from '../assets/photos/photo-19.jpg';
import p20 from '../assets/photos/photo-20.jpg';
import p02 from '../assets/photos/photo-02.jpg';

const carouselItems = [
  { image: p15, alt: 'BYD electric vehicle awarded to the school' },
  { image: p02, alt: 'Graduates holding certificates' },
  { image: p19, alt: 'Students at a formal school ceremony' },
  { image: p20, alt: 'Students performing at a school event' },
  { image: p14, alt: 'School leadership on stage' },
];

export default function Hero() {
  const { t } = useLanguage();
  const lines = t.hero.title.split('\n');

  return (
    <section id="top" className="hero">
      <div className="hero__wrap wrap">
        <div className="hero__copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <div className="hero__title" role="heading" aria-level="1">
            {lines.map((line) => (
              <BlurText
                key={line}
                as="div"
                text={line}
                delay={70}
                animateBy="words"
                direction="top"
                className="hero__title-line"
              />
            ))}
          </div>
          <p className="hero__body">{t.hero.body}</p>
        </div>

        <div className="hero__carousel">
          <DepthCarousel
            items={carouselItems}
            depth={220}
            spread={90}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            autoplay
            loop
          />
        </div>
      </div>
    </section>
  );
}
