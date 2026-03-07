import DoctorsGrid from "../../components/DoctorsGrid";

const services = [
  {
    icon: "🌬️",
    title: "Asthma & COPD Clinic",
    desc: "Advanced inhaler therapy and pulmonary rehabilitation programmes for chronic breathlessness.",
  },
  {
    icon: "🔭",
    title: "Interventional Pulmonology",
    desc: "Bronchoscopy-guided diagnostic biopsies and foreign body removal with minimally invasive techniques.",
  },
  {
    icon: "😴",
    title: "Sleep Medicine",
    desc: "Diagnosing and treating Obstructive Sleep Apnoea (OSA) and snoring through comprehensive Sleep Studies (Polysomnography).",
  },
  {
    icon: "📊",
    title: "Lung Function Testing (PFT)",
    desc: "In-house Spirometry to measure lung capacity and detect air-flow obstruction at the earliest stage.",
  },
];

const Pulmonology = ({ openAppointment }) => {
  return (
    <>
      {/* Hero */}
      <section className="specialty-hero">
        <div className="container">
          <span className="specialty-hero__eyebrow">Department</span>
          <h1 className="specialty-hero__title">
            Pulmonology &amp; Interventional Pulmonology
          </h1>
          <p className="specialty-hero__subtitle">
            Respiratory Wellness &amp; Sleep Medicine
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="specialty-intro">
        <div className="container">
          <p>
            In the post-pandemic era, lung health has become more critical than
            ever. Our pulmonology team specialises in diagnosing and treating the
            full range of respiratory conditions — from chronic lung disease and
            breathing disorders to sleep-related respiratory issues — using the
            latest diagnostic and interventional techniques.
          </p>
        </div>
      </section>

      {/* Services + Specialist */}
      <section className="specialty-services">
        <div className="container">

          <div className="specialist-spotlight">
            <div className="specialist-spotlight__avatar">SS</div>
            <div className="specialist-spotlight__body">
              <p className="specialist-spotlight__label">Lead Specialist</p>
              <p className="specialist-spotlight__name">Dr. Shaik Siddiq</p>
              <p className="specialist-spotlight__focus">
                Pulmonology &amp; Interventional Pulmonology · Respiratory Wellness &amp; Sleep Medicine
              </p>
            </div>
          </div>

          <h2 className="specialty-services__heading">Specialised Respiratory Care</h2>
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
            <p className="specialty-insight__label">Post-Pandemic Focus</p>
            <p>
              COVID-19 has left many patients with lingering respiratory complications.
              Our team provides dedicated post-COVID lung rehabilitation and monitoring
              to help patients regain full respiratory function and quality of life.
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
            key="pulmonology"
            specialty="Pulmonology"
            onBookAppointment={openAppointment}
          />
        </div>
      </section>
    </>
  );
};

export default Pulmonology;