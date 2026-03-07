import DoctorsGrid from "../../components/DoctorsGrid";

const services = [
  {
    icon: "💡",
    title: "Advanced Laser Proctology",
    desc: "Painless, bloodless treatment for Piles (Haemorrhoids), Fissures, and Fistulas using laser technology.",
  },
  {
    icon: "🫁",
    title: "Laparoscopic Surgery",
    desc: "Keyhole procedures for gallbladder stone removal (Cholecystectomy), appendix removal, and hernia repair with advanced mesh.",
  },
  {
    icon: "🦶",
    title: "Diabetic Foot Surgery",
    desc: "Specialised wound care and limb-salvage procedures for diabetic patients requiring surgical intervention.",
  },
  {
    icon: "🏠",
    title: "Day-Care Procedures",
    desc: "Surgeries designed for 24-hour discharge, minimising hospital stay costs and reducing infection risks.",
  },
];

const GeneralSurgery = ({ openAppointment }) => {
  return (
    <>
      {/* Hero */}
      <section className="specialty-hero">
        <div className="container">
          <span className="specialty-hero__eyebrow">Department</span>
          <h1 className="specialty-hero__title">
            General, Laparoscopic &amp; Laser Surgery
          </h1>
          <p className="specialty-hero__subtitle">
            Minimally Invasive Precision Surgery
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="specialty-intro">
        <div className="container">
          <p>
            Modern surgery means less pain, faster recovery, and shorter hospital
            stays. Our surgical team has made the shift from traditional open
            surgery to advanced laparoscopic and laser techniques — delivering
            precision outcomes with minimal disruption to your daily life.
          </p>
        </div>
      </section>

      {/* Services + Specialist */}
      <section className="specialty-services">
        <div className="container">

          <div className="specialist-spotlight">
            <div className="specialist-spotlight__avatar">DS</div>
            <div className="specialist-spotlight__body">
              <p className="specialist-spotlight__label">Lead Specialist</p>
              <p className="specialist-spotlight__name">Dr. D. Suresh Babu</p>
              <p className="specialist-spotlight__focus">
                General, Laparoscopic &amp; Laser Surgery · Minimally Invasive Precision
              </p>
            </div>
          </div>

          <h2 className="specialty-services__heading">Technology Meets Surgery</h2>
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
            <p className="specialty-insight__label">Why Minimally Invasive?</p>
            <p>
              Laparoscopic and laser approaches significantly reduce post-operative
              pain, scarring, and recovery time compared to open surgery — allowing
              most patients to return to normal activities within days rather than weeks.
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
            key="general-surgery"
            specialty="General Surgery"
            onBookAppointment={openAppointment}
          />
        </div>
      </section>
    </>
  );
};

export default GeneralSurgery;