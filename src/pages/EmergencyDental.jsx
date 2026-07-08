import EmergencyBackground from "../components/emergencyDental/EmergencyBackground";
import EmergencyHeader from "../components/emergencyDental/EmergencyHeader";
import EmergencySection from "../components/emergencyDental/EmergencySection";



export default function EmergencyDental() {
  return (
    <section
      className="
relative
min-h-screen
overflow-hidden
bg-blue-900
">
      <EmergencyBackground />

      <div className="relative z-20">
        <EmergencyHeader />
      </div>

      <div className="absolute inset-0 z-30 ">
        <EmergencySection />
      </div>

    </section>
  );
}
