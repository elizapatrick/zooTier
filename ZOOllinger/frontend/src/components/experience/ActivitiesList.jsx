import ActivityCard from "./ActivityCard"
import zooLogo from "../../assets/ZooLogo.png"

export default function ActivitiesList() {
  return (
    <section className="activities-section">
      <div className="activities-inner">
        <h2>Today's Activities</h2>
        <p>All activities are included with your ticket</p>

        <ActivityCard
          image={zooLogo}
          title="Elephant Feeding Observation"
          location="Savanna Zone, Area B"
          description="Watch our majestic elephants enjoy their meal and learn about their diet."
          times={["11:00", "14:00", "16:30"]}
          animals={[
            { name: "Dumbo", age: "25 years old" },
            { name: "Ella", age: "32 years old" },
            { name: "Ellie", age: "8 years old" },
          ]}
        />
      </div>
    </section>
  )
}