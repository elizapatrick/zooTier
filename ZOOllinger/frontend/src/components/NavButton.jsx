export default function NavButton({ icon: Icon, label, to, active = false}) {
  return (
    <button className={`nav-button ${active ? "active" : ""}`} onClick={() => window.location.href = to}>
      <Icon size={22} />
      <span>{label}</span>
    </button>
  )
}