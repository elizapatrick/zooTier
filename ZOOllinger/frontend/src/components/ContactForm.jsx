import { calendarIcon, mailIcon, ticketIcon } from './Icons'

export function ContactForm() {
  return (
    <section className="section-block contact-section">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Contact Information</p>
      </div>

      <form className="contact-form">
        <label className="field">
          <span>Full Name</span>
          <div className="field__input-wrap">
            <span className="field__icon">{ticketIcon}</span>
            <input type="text" defaultValue="John Doe" />
          </div>
        </label>

        <label className="field">
          <span>Email Address</span>
          <div className="field__input-wrap">
            <span className="field__icon">{mailIcon}</span>
            <input type="email" defaultValue="john@example.com" />
          </div>
        </label>

        <label className="field">
          <span>Visit Date</span>
          <div className="field__input-wrap">
            <span className="field__icon">{calendarIcon}</span>
            <input type="text" defaultValue="TT.mm.jjjj" />
          </div>
        </label>
      </form>
    </section>
  )
}