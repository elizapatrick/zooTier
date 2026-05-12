import ActivityCard from "./ActivityCard"
import elephantImg from "../../assets/elephant.png"
import zebraImg from "../../assets/zebra.png"

export default function ActivitiesList() {
  return (
    <section className="activities-section">
      <div className="activities-inner">
        <h2>Today's Activities</h2>
        <p>All activities are included with your ticket</p>

        <ActivityCard
          image={elephantImg}
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
        <ActivityCard
          image={zebraImg}
          title="Zebra Feeding Observation"
          location="Savanna Zone, Area B"
          description="Watch our majestic Zebras enjoy their meal and learn about their diet."
          times={["10:30", "14:00", "16:30"]}
          animals={[
            { name: "Bambo", age: "25 years old" },
            { name: "Anna", age: "32 years old" },
            { name: "Hanna", age: "8 years old" },
          ]}
        />
      </div>
    </section>
  )
}