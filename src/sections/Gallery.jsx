import DriftWall from '../components/DriftWall';
import { useLanguage } from '../context/LanguageContext';
import { galleryPhotos } from '../data/galleryPhotos';
import './Gallery.css';

export default function Gallery() {
  const { t } = useLanguage();
  const items = galleryPhotos.map((image) => ({ image }));

  return (
    <section id="gallery" className="section section--navy gallery">
      <div className="wrap gallery__head">
        <p className="eyebrow">{t.gallery.label}</p>
        <h2 className="gallery__title">{t.gallery.title}</h2>
      </div>
      <div className="gallery__wall">
        <DriftWall
          items={items}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#0a1628"
        />
      </div>
    </section>
  );
}
