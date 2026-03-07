// src/components/DoctorsGrid.jsx
import React, { useState, useEffect } from 'react'
import { doctors } from '../data/doctors'

const DoctorsGrid = ({ onBookAppointment = () => {}, specialty = null }) => {
  const [selected, setSelected] = useState(null)

  const filteredDoctors = specialty
    ? doctors.filter((d) => d.specialty === specialty)
    : doctors

  // ESC closes modal
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])

  // Lock scroll while modal open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', !!selected)
    document.documentElement.classList.toggle('no-scroll', !!selected)
  }, [selected])

  return (
    <section className="section section--white doctors" id="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Doctors</h2>
          <p>Meet our experienced and compassionate healthcare professionals</p>
        </div>

        <div className="doctors__grid">
          {filteredDoctors.map((doctor) => (
            <article
              key={doctor.id}
              className="doctors__card"
              onClick={() => setSelected(doctor)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(doctor)}
            >
              <div className="doctors__image-wrapper">
                <img src={doctor.image} alt={doctor.name} loading="lazy" />
              </div>

              <div className="doctors__content">
                <h3>{doctor.name}</h3>
                <p className="doctors__subtitle">{doctor.title}</p>
                <p className="doctors__specialty">{doctor.specialty}</p>
                <p className="doctors__availability">Available: {doctor.availability}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="doctors-modal" onClick={() => setSelected(null)}>
          <div
            className="doctors-modal__panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="doctors-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="doctors-modal__header">
              <img src={selected.image} alt={selected.name} loading="lazy" />
              <div>
                <h3>{selected.name}</h3>
                <p className="doctors-modal__degrees">{selected.degrees}</p>
                <p className="doctors-modal__title">{selected.title}</p>
                {selected.experienceYears > 0 && (
                  <p>{selected.experienceYears}+ years experience</p>
                )}
                <p className="doctors-modal__availability">
                  Available: {selected.availability}
                </p>
              </div>
            </div>

            <div className="doctors-modal__body">
              <h4>Expertise</h4>
              <ul>
                {selected.expertise.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
              <p>{selected.bio}</p>
            </div>

            <div className="doctors-modal__actions">
              <button
                className="btn btn--accent"
                onClick={() => onBookAppointment(selected.name)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default DoctorsGrid
