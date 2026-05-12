export default function NavButton({ icon: Icon, label, active = false }) {
  return (
    <button className={`nav-button ${active ? "active" : ""}`}>
      <Icon size={22} />
      <span>{label}</span>
    </button>
  )
}