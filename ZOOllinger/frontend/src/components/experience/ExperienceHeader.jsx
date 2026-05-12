import { Link } from "react-router-dom"
import { Users } from "lucide-react"
import logo from "../../assets/ZooLogo.png"

export default function ExperienceHeader() {
  return (
    <header className="experience-header">
      <div className="experience-brand">
        <img src={logo} alt="Zoo Illinger Logo" />

        <div>
          <h1>Visitor Experience</h1>
          <p>Interactive Zoo Guide</p>
        </div>
      </div>

      <div className="experience-header-right">
        <div className="guest-box">
          <Users size={28} />
          <span>1’367 Guests in the Zoo</span>
          <span className="online-dot"></span>
        </div>

        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    </header>
  )
}