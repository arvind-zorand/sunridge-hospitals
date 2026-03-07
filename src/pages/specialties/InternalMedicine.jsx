import DoctorsGrid from "../../components/DoctorsGrid";

const services = [
  {
    icon: "🩺",
    title: "Diabetes & Hypertension Clinic",
    desc: "Personalized glycemic control and blood pressure management to prevent organ damage.",
  },
  {
    icon: "🦠",
    title: "Infectious Disease Management",
    desc: "Rapid diagnosis and treatment of viral fevers — Dengue, Malaria, Typhoid and seasonal infections.",
  },
  {
    icon: "👴",
    title: "Geriatric Care",
    desc: "Specialised health tracking for the elderly, focusing on polypharmacy and age-related wellness.",
  },
  {
    icon: "📋",
    title: "Preventive Screenings",
    desc: "Executive health check-ups designed to catch silent killers like high cholesterol or early-stage metabolic disorders.",
  },
];

const InternalMedicine = ({ openAppointment }) => {
  return (
    <>
      {/* Hero */}
      <section className="specialty-hero">
        <div className="container">
          <span className="specialty-hero__eyebrow">Department</span>
          <h1 className="specialty-hero__title">
            Internal Medicine &amp; General Physician
          </h1>
          <p className="specialty-hero__subtitle">
            Comprehensive Chronic Disease Management
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="specialty-intro">
        <div className="container">
          <p>
            Internal Medicine is the "engine room" of healthcare. Our specialist
            focuses on managing multi-system diseases that require a holistic
            rather than a localised approach — diagnosing and treating complex
            conditions such as diabetes, hypertension and infectious diseases
            with a whole-body perspective.
          </p>
        </div>
      </section>

      {/* Services + Specialist */}
      <section className="specialty-services">
        <div className="container">

          {/* Specialist spotlight */}
          <div className="specialist-spotlight">
            <div className="specialist-spotlight__avatar">SK</div>
            <div className="specialist-spotlight__body">
              <p className="specialist-spotlight__label">Lead Specialist</p>
              <p className="specialist-spotlight__name">Dr. P. Shirish Kumar</p>
              <p className="specialist-spotlight__focus">
                Internal Medicine &amp; General Physician · Chronic Disease Management
              </p>
            </div>
          </div>

          <h2 className="specialty-services__heading">Clinical Services</h2>
          <div className="specialty-services__grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="specialty-insight">
            <p className="specialty-insight__label">Clinical Perspective</p>
            <p>
              While many seek specialists for specific symptoms, "Generalism" in
              Internal Medicine is often more effective for complex patients with
              multiple conditions — avoiding fragmented care and treating the
              whole person.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="specialty-doctors">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Specialists</h2>
          </div>
          <DoctorsGrid
            key="internal-medicine"
            specialty="General Medicine"
            onBookAppointment={openAppointment}
          />
        </div>
      </section>
    </>
  );
};

export default InternalMedicine;