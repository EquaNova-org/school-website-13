import { useEffect, useState } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['#about', t.nav.about],
    ['#achievements', t.nav.achievements],
    ['#path', t.nav.path],
    ['#values', t.nav.values],
    ['#gallery', t.nav.gallery],
    ['#contact', t.nav.contact],
  ];

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner wrap">
        <a href="#top" className="site-header__mark">School&nbsp;No.&nbsp;13</a>

        <nav className="site-header__nav">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="site-header__right">
          <LanguageSwitcher dark />
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen(o => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="site-header__mobile">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
