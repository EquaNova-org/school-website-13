import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
];

export default function LanguageSwitcher({ dark = true }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`lang-switch ${dark ? 'lang-switch--dark' : 'lang-switch--light'}`} role="group" aria-label="Language">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-switch__btn${lang === code ? ' is-active' : ''}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
