// src/components/TicketCard.jsx

export default function TicketCard({
  title,
  subtitle,
  price,
  quantity,
  icon,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="ticket-card">
      <div className="ticket-card__icon">{icon}</div>

      <div className="ticket-card__info">
        <div className="ticket-card__title">{title}</div>
        <div className="ticket-card__subtitle">{subtitle}</div>
        <div className="ticket-card__price">${price}</div>
      </div>

      <div className="ticket-card__qty">
        <button onClick={onDecrease}>−</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
