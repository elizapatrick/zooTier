import { Clock, Info, MapPin } from "lucide-react"

export default function ActivityCard({
  image,
  title,
  location,
  description,
  times,
  animals,
}) {
  return (
    <article className="activity-card">
      <img src={image} alt={title} className="activity-image" />

      <div className="activity-content">
        <div className="activity-title-row">
          <h3>{title}</h3>
          <span className="included-badge">Included with your Ticket</span>
        </div>

        <p className="activity-location">
          <MapPin size={20} />
          {location}
        </p>

        <p className="activity-description">{description}</p>

        <h4>Today's Schedule:</h4>
        <div className="time-list">
          {times.map((time) => (
            <span key={time} className="time-pill">
              <Clock size={18} />
              {time}
            </span>
          ))}
        </div>

        <h4>Featured Animals:</h4>
        <div className="animal-list">
          {animals.map((animal) => (
            <div className="animal-box" key={animal.name}>
              <span className="info-circle">
                <Info size={18} />
              </span>
              <div>
                <strong>{animal.name}</strong>
                <p>{animal.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}