import { useState } from "react"
import ExperienceHeader from "../components/experience/ExperienceHeader"
import ExperienceTabs from "../components/experience/ExperienceTabs"
import ParkMap from "../components/experience/ParkMap"
import ActivitiesList from "../components/experience/ActivitiesList"
import "../components/experience/ExperienceRoute.css"

export default function ExperienceRoute() {
    const [activeTab, setActiveTab] = useState("map")

    return (
        <main className="experience-page">
            <ExperienceHeader />

            <ExperienceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "map" && <ParkMap />}
            {activeTab === "activities" && <ActivitiesList />}
        </main>
    )
}