import DoctorsGrid from "../../components/DoctorsGrid";

const services = [
  {
    icon: "🦴",
    title: "Total Joint Replacement",
    desc: "Computer-assisted knee and hip replacements designed for longevity and natural movement.",
  },
  {
    icon: "🚑",
    title: "24/7 Trauma & Fracture Care",
    desc: "Dedicated emergency response for accidental injuries, using advanced nailing and plating techniques.",
  },
  {
    icon: "⚽",
    title: "Arthroscopy (Sports Medicine)",
    desc: "Keyhole surgery for ACL/PCL tears and meniscus repairs, helping athletes return to the field faster.",
  },
  {
    icon: "🏥",
    title: "Bone Health Clinic",
    desc: "Management of Osteoporosis and age-related bone density loss to prevent fragility fractures.",
  },
];

const Orthopedics = ({ openAppointment }) => {
  return (
    <>
      {/* Hero */}
      <section className="specialty-hero">
        <div className="container">
          <span className="specialty-hero__eyebrow">Department</span>
          <h1 className="specialty-hero__title">
            Orthopaedics &amp; Joint Replacement
          </h1>
          <p className="specialty-hero__subtitle">
            Mobility Restoration &amp; Trauma Recovery
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="specialty-intro">
        <div className="container">
          <p>
            Pain should never limit your life. Our orthopaedics team focuses on
            restoring movement and relieving pain through a full spectrum of
            surgical and non-surgical care — from emergency trauma response to
            planned joint replacements and sports injury recovery.
          </p>
        </div>
      </section>

      {/* Services + Specialist */}
      <section className="specialty-services">
        <div className="container">

          <div className="specialist-spotlight">
            <div className="specialist-spotlight__avatar">VE</div>
            <div className="specialist-spotlight__body">
              <p className="specialist-spotlight__label">Lead Specialist</p>
              <p className="specialist-spotlight__name">Dr. Vamshi Krishna Ejjagiri</p>
              <p className="specialist-spotlight__focus">
                Orthopaedics &amp; Joint Replacement · Mobility Restoration &amp; Trauma Recovery
              </p>
            </div>
          </div>

          <h2 className="specialty-services__heading">Surgical Roadmap</h2>
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
            <p className="specialty-insight__label">Our Approach</p>
            <p>
              Surgery is not always the first answer. Dr. Vamshi's team
              evaluates conservative options — physiotherapy and targeted
              injections — before recommending surgical intervention, ensuring
              every patient receives the most appropriate level of care.
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
            key="orthopedics"
            specialty="Orthopaedics"
            onBookAppointment={openAppointment}
          />
        </div>
      </section>
    </>
  );
};

export default Orthopedics;