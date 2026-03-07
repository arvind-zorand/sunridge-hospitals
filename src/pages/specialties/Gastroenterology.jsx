import DoctorsGrid from "../../components/DoctorsGrid";

const services = [
  {
    icon: "🔬",
    title: "Upper GI Endoscopy & Colonoscopy",
    desc: "Minimally invasive procedures to detect ulcers, polyps, or early-stage cancers with precision.",
  },
  {
    icon: "🫀",
    title: "Liver Clinic (Hepatology)",
    desc: "Specialised management of Fatty Liver (NAFLD), Hepatitis B/C, and Cirrhosis.",
  },
  {
    icon: "💊",
    title: "Acid Reflux & GERD Solutions",
    desc: "Advanced medical management for chronic heartburn and long-term esophageal health.",
  },
  {
    icon: "🥗",
    title: "IBD & IBS Support",
    desc: "Tailored nutritional and medical protocols for Inflammatory Bowel Disease and Irritable Bowel Syndrome.",
  },
];

const Gastroenterology = ({ openAppointment }) => {
  return (
    <>
      {/* Hero */}
      <section className="specialty-hero">
        <div className="container">
          <span className="specialty-hero__eyebrow">Department</span>
          <h1 className="specialty-hero__title">
            Gastroenterology &amp; Hepatology
          </h1>
          <p className="specialty-hero__subtitle">
            Advanced Digestive Health &amp; Liver Care
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="specialty-intro">
        <div className="container">
          <p>
            Many digestive issues develop silently over years. Our gastroenterology
            team uses advanced endoscopic diagnostics to identify and treat the
            root causes of abdominal discomfort — covering the full spectrum from
            stomach and intestinal disorders to liver and pancreatic conditions.
          </p>
        </div>
      </section>

      {/* Services + Specialist */}
      <section className="specialty-services">
        <div className="container">

          <div className="specialist-spotlight">
            <div className="specialist-spotlight__avatar">VR</div>
            <div className="specialist-spotlight__body">
              <p className="specialist-spotlight__label">Lead Specialist</p>
              <p className="specialist-spotlight__name">Dr. Vamsidhar Reddy V</p>
              <p className="specialist-spotlight__focus">
                Gastroenterology &amp; Hepatology · Digestive Health &amp; Liver Care
              </p>
            </div>
          </div>

          <h2 className="specialty-services__heading">Clinical Services &amp; Procedures</h2>
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
            <p className="specialty-insight__label">Technology Note</p>
            <p>
              Our department utilises high-definition endoscopy systems for
              superior mucosal visualisation, enabling earlier detection and
              more accurate diagnosis of gastrointestinal conditions.
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
            key="gastroenterology"
            specialty="Gastroenterology"
            onBookAppointment={openAppointment}
          />
        </div>
      </section>
    </>
  );
};

export default Gastroenterology;