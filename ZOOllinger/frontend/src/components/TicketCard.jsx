export function TicketCard({
  title,
  subtitle,
  price,
  quantity,
  icon,
  onIncrease,
  onDecrease,
}) {
  return (
    <article className="ticket-card">
      <div className="ticket-card__top">
        <div className="ticket-card__icon">{icon}</div>

        <div className="ticket-card__copy">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="ticket-card__price">
          <strong>${price}</strong>
          <span>per person</span>
        </div>
      </div>

      <div className="quantity-control" aria-label={`${title} quantity control`}>
        <button type="button" onClick={onDecrease} aria-label={`Decrease ${title} tickets`}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={onIncrease} aria-label={`Increase ${title} tickets`}>
          +
        </button>
      </div>
    </article>
  )
}