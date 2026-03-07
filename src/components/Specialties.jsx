import { Link } from "react-router-dom";

const specialties = [
  { id: 1, title: "Cardiology", description: "Expert heart care and treatment", image: "/images/cardiology.webp" },
  { id: 2, title: "Neurology", description: "Advanced brain and nerve care", image: "/images/Neurology.webp" },
  { id: 3, title: "Orthopedics", description: "Comprehensive bone and joint care", image: "/images/Orthopaedics.webp" },
  { id: 4, title: "Gastroenterology", description: "Digestive health specialists", image: "/images/Gastroenterology.webp" },
  { id: 5, title: "Gynaecology", description: "Women's health specialists", image: "/images/Gynaecology.webp" },
  { id: 6, title: "Hepatology", description: "Liver and biliary system specialists", image: "/images/Hepatology.jpg" },
  { id: 7, title: "Internal Medicine & Diabetology", description: "Comprehensive adult medical care", image: "/images/Internal Medicine & Diabetology.webp" },
  { id: 9, title: "Pulmonology", description: "Respiratory and lung care specialists", image: "/images/Pulmonology.webp" },
  { id: 10, title: "Urology", description: "Urinary tract specialists", image: "/images/Urology.webp" },
];

const mainSpecialties = [
  {
    title: "Internal Medicine & General Physician",
    link: "/specialties/internal-medicine",
  },
  {
    title: "Gastroenterology & Hepatology",
    link: "/specialties/gastroenterology",
  },
  {
    title: "Orthopaedics & Joint Replacement",
    link: "/specialties/orthopedics",
  },
  {
    title: "General, Laparoscopic & Laser Surgery",
    link: "/specialties/general-surgery",
  },
  {
    title: "Pulmonology & Interventional Pulmonology",
    link: "/specialties/pulmonology",
  },
];

const looped = [...specialties, ...specialties];

const Specialties = () => {
  return (
    <section className="section section--light specialties" id="specialties">
      <div className="container">

        <div className="section-title reveal">
          <h2>Our Specialties</h2>
          <p>Comprehensive healthcare services provided by expert specialists</p>
        </div>

        {/* Slider (non clickable) */}
        <div className="specialties__marquee reveal">
          <div className="specialties__track">
            {looped.map((s, idx) => (
              <div
                key={`${s.id}-${idx}`}
                className="specialties__card"
              >
                <div className="specialties__image-wrapper">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="specialties__image-overlay" />
                </div>

                <div className="specialties__content">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Specialty Navigation */}
        <div className="specialties__main-nav reveal">

          <div className="section-title">
            <h3>Explore Our Core Departments</h3>
            <p>Click a department below to explore doctors, treatments and services</p>
          </div>

          <div className="specialties__main-grid">
            {mainSpecialties.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="specialties__main-card"
              >
                <span className="specialties__main-title">{s.title}</span>
                <span className="specialties__main-badge">View dept</span>
                <span className="specialties__main-arrow">→</span>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Specialties;