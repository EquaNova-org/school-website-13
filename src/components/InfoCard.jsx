import './InfoCard.css';

export function StatCard({ value, title }) {
  return (
    <div className="info-card info-card--stat">
      <div className="info-card__value">{value}</div>
      <div className="info-card__title">{title}</div>
    </div>
  );
}

export function ValueCard({ title, body }) {
  return (
    <div className="info-card info-card--value">
      <h3 className="info-card__heading">{title}</h3>
      <p className="info-card__body">{body}</p>
    </div>
  );
}
