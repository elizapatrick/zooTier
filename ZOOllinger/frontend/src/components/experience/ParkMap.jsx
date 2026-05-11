import { Utensils, Droplets, DoorOpen } from "lucide-react"

function MapPin({ type, label, style }) {
  const baseType = type.split(" ")[0]

  const icons = {
    restaurant: <Utensils size={30} />,
    restroom: <Droplets size={30} />,
    exit: <DoorOpen size={30} />,
    animal: null,
  }

  return (
    <div className="map-pin-group" style={style}>
      <div className={`map-pin ${type}`}>
        {icons[baseType]}
      </div>

      <span className="map-label">{label}</span>
    </div>
  )
}

export default function ParkMap() {
  return (
    <section className="map-section">
      <div className="map-topbar">
        <h2>Interactive Park Map</h2>

        <div className="legend">
          <span><i className="dot quiet"></i>Quiet</span>
          <span><i className="dot moderate"></i>Moderate</span>
          <span><i className="dot crowded"></i>Crowded</span>

          <span className="divider"></span>

          <span><i className="icon restaurant"></i>Restaurant</span>
          <span><i className="icon restroom"></i>Restroom</span>
          <span><i className="icon exit"></i>Exit</span>
        </div>
      </div>

      <div className="park-map">
        <span className="zone savanna">SAVANNA ZONE</span>
        <span className="zone polar">POLAR ZONE</span>
        <span className="zone rainforest">RAINFOREST</span>
        <span className="zone asia">ASIA ZONE</span>

        <div className="boundary">
          ZOOIllinger Boundary
        </div>

        <MapPin type="exit" label="Main Exit" style={{ left: "50%", top: "10%" }} />

        <MapPin type="animal" label="Lion Pride" style={{ left: "15%", top: "26%" }} />
        <MapPin type="animal" label="Elephant Valley" style={{ left: "30%", top: "36%" }} />
        <MapPin type="restaurant" label="Savanna Grill" style={{ left: "45%", top: "30%" }} />
        <MapPin type="restroom" label="Central Restrooms" style={{ left: "50%", top: "45%" }} />

        <MapPin type="restroom" label="North Restrooms" style={{ left: "60%", top: "18%" }} />
        <MapPin type="restaurant" label="Polar Café" style={{ left: "70%", top: "17%" }} />
        <MapPin type="animal" label="Penguin Cove" style={{ left: "70%", top: "23%" }} />

        <MapPin type="animal moderate" label="Tropical Birds" style={{ left: "18%", top: "66%" }} />
        <MapPin type="animal" label="Gorilla Forest" style={{ left: "11%", top: "82%" }} />
        <MapPin type="restaurant" label="Rainforest Bistro" style={{ left: "25%", top: "74%" }} />

        <MapPin type="animal moderate" label="Tiger Temple" style={{ left: "61%", top: "66%" }} />
        <MapPin type="animal quiet" label="Reptile House" style={{ left: "70%", top: "74%" }} />
        <MapPin type="exit" label="South Exit" style={{ left: "78%", top: "88%" }} />
      </div>
    </section>
  )
}