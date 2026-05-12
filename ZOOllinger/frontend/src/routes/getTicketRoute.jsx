import { useMemo, useState } from "react";
import "../App.css";
import "../routes/getTicketRoute.css";
import { BookingHeader } from "../components/BookingHeader";
import { ContactForm } from "../components/ContactForm";
import { OrderSummary } from "../components/OrderSummary";
import TicketCard from "../components/TicketCard";
import { adultIcon, childIcon, familyIcon } from "../components/Icons";
import { ticketOptions } from "../components/bookingData";
import HeaderHome from "../components/HeaderHome";

export default function GetTicketRoute() {
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(ticketOptions.map((ticket) => [ticket.id, 0]))
  );

  const selectedTickets = useMemo(() => {
    return ticketOptions
      .map((ticket) => ({
        ...ticket,
        quantity: quantities[ticket.id] ?? 0,
      }))
      .filter((ticket) => ticket.quantity > 0);
  }, [quantities]);

  const totalTickets = useMemo(() => {
    return selectedTickets.reduce((sum, ticket) => sum + ticket.quantity, 0);
  }, [selectedTickets]);

  const totalPrice = useMemo(() => {
    return selectedTickets.reduce(
      (sum, ticket) => sum + ticket.price * ticket.quantity,
      0
    );
  }, [selectedTickets]);

  const updateQuantity = (ticketId, delta) => {
    setQuantities((currentQuantities) => {
      const nextQuantity = Math.max(
        (currentQuantities[ticketId] ?? 0) + delta,
        0
      );

      return {
        ...currentQuantities,
        [ticketId]: nextQuantity,
      };
    });
  };

  const handlePurchase = () => {
    if (totalTickets === 0) return;
    window.alert("Purchase flow can be connected to your backend next.");
  };

  return (
    <>
    <HeaderHome active="tickets"></HeaderHome>
    <main className="booking-page">

      {/* HEADER */}
      <div className="booking-header-wrapper">
        <BookingHeader />
      </div>

      <section className="booking-layout">

        <div className="booking-layout__main">

          {/* SELECT TICKETS */}
          <section className="section-block">
            <div className="section-heading">
              <p className="section-heading__eyebrow">Select Tickets</p>
            </div>

            <div className="ticket-stack">
              {ticketOptions.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  title={ticket.title}
                  subtitle={ticket.subtitle}
                  price={ticket.price}
                  quantity={quantities[ticket.id] ?? 0}
                  icon={
                    ticket.id === "adult"
                      ? adultIcon
                      : ticket.id === "child"
                      ? childIcon
                      : familyIcon
                  }
                  onIncrease={() => updateQuantity(ticket.id, 1)}
                  onDecrease={() => updateQuantity(ticket.id, -1)}
                />
              ))}
            </div>
          </section>

          {/* ABSTAND UNTER SELECT TICKETS */}
          <div className="after-tickets-spacing"></div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>

          {/* ORDER SUMMARY */}
          <div className="order-summary-wrapper">
            <OrderSummary
              selectedTickets={selectedTickets}
              totalPrice={totalPrice}
              onPurchase={handlePurchase}
            />
          </div>

        </div>

      </section>
    </main>
    </>
  );
}
