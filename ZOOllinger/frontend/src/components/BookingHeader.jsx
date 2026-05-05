import heroImage from '../assets/hero.png'
import { ticketIcon } from './Icons'

export function BookingHeader() {
  return (
    <header className="booking-hero">
      <div className="booking-hero__copy">
        <h1>Get Your Tickets</h1>
        <p className="booking-hero__text">
          Book your visit to ZOOllinger and create unforgettable memories.
        </p>
      </div>
    </header>
  )
}