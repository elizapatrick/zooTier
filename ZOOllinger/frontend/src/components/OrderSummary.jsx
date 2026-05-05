import { checkIcon, ticketIcon } from './Icons'
import { includedBenefits } from './bookingData'

export function OrderSummary({ selectedTickets, totalPrice, onPurchase }) {
  const hasSelection = selectedTickets.length > 0

  return (
    <section className="summary-card">
      <div className="summary-card__title">
        <span className="summary-card__title-icon">{ticketIcon}</span>
        <h2>Order Summary</h2>
      </div>

      {hasSelection ? (
        <ul className="summary-list">
          {selectedTickets.map((ticket) => (
            <li key={ticket.id} className="summary-list__item">
              <div>
                <strong>{ticket.title}</strong>
                <span>
                  {ticket.quantity} x ${ticket.price}
                </span>
              </div>
              <strong>${ticket.quantity * ticket.price}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p className="summary-empty">No tickets selected</p>
      )}

      <div className="summary-divider" />

      <div className="summary-total">
        <span>Total</span>
        <strong>${totalPrice}</strong>
      </div>

      <button type="button" className="summary-button" onClick={onPurchase} disabled={!hasSelection}>
        <span className="summary-button__icon">{checkIcon}</span>
        Complete Purchase
      </button>

      <div className="summary-divider" />

      <div className="summary-included">
        <h3>What&apos;s Included:</h3>
        <ul>
          {includedBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}