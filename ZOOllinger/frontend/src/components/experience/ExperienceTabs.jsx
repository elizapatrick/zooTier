export default function ExperienceTabs({ activeTab, setActiveTab }) {
  return (
    <div className="experience-tabs">
      <button
        className={`experience-tab ${activeTab === "map" ? "active" : ""}`}
        onClick={() => setActiveTab("map")}
      >
        Map
      </button>

      <button
        className={`experience-tab ${activeTab === "activities" ? "active" : ""}`}
        onClick={() => setActiveTab("activities")}
      >
        Activities
      </button>
    </div>
  )
}