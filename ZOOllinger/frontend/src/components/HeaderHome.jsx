import NavButton from "./NavButton"
import { Home, PawPrint, Ticket } from "lucide-react"
import "./HeaderHome.css"
import logo from "../assets/ZooLogo.png"

export default function HeaderHome({ active = "home" }) {
    return (
        <header className="header">
            <div className="logo-box">
                <div>
                    <img height={75} src={logo} alt="Zoo Logo" />
                </div>

                <h1 className="logo-text">
                    <span className="logo-main">ZOO</span>
                    <span className="logo-sub">lllinger</span>
                </h1>
            </div>

            <nav className="nav">
                <NavButton icon={Home} label="Home" active={active === "home"} />
                <NavButton icon={PawPrint} label="Animals" active={active === "animals"} />
                <NavButton icon={Ticket} label="Get Tickets" active={active === "tickets"} />
            </nav>
        </header>
    )
}