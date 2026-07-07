import EmergencyBackground from "../components/emergencyDental/EmergencyBackground";
import EmergencyHeader from "../components/emergencyDental/EmergencyHeader";
import EmergensiIcons from "../components/emergencyDental/EmergensiIcons";

export default function EmergencyDental() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-b
      from-sky-50
      via-white
      to-sky-100
      "
    >
      {/* Background + Patient */}
      <EmergencyBackground />

      {/* Hero Content */}
      <div
        className="
        relative
        z-30
        pt-10
        "
      >
        <EmergencyHeader />
      </div>

      {/* Floating Features */}
      <div
        className="
        absolute
        inset-0
        z-40
        "
      >
        <EmergensiIcons />
      </div>
    </section>
  );
}
