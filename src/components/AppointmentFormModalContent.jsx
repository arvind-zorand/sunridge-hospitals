import { useNavigate } from "react-router-dom";

// src/components/AppointmentFormModalContent.jsx
import React, { useMemo, useState } from 'react'
import { doctors } from '../data/doctors'

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

const sendToGoogleSheet = async (payload) => {
  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Google Sheet logging failed", err);
  }
};


// --- Component ---
const AppointmentFormModalContent = ({ onClose, selectedDoctor = '' }) => {
  const COMPANY_NAME = 'Sunridge Hospital'
  const navigate = useNavigate();


  const today = useMemo(() => {
    const d = new Date()
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
  }, [])

  const [form, setForm] = useState(() => {
    const doc = doctors.find(d => d.name === selectedDoctor)

    return {
      fullName: '',
      phone: '',
      email: '',
      hospital: '',
      doctor: selectedDoctor || '',
      speciality: doc?.specialty || '',
      date: '',
    }
  })

  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ sending: false, ok: null, message: '' })

  const nameRegex = /^[A-Za-z][A-Za-z\s'.-]{2,}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validate = (draft = form) => {
    const next = {}
    if (!draft.fullName.trim()) next.fullName = 'Name is required.'
    else if (!nameRegex.test(draft.fullName.trim()))
      next.fullName =
        'Please enter a valid name (min 3 letters; letters, spaces, hyphens, apostrophes allowed).'

    if (!draft.email.trim()) next.email = 'Email is required.'
    else if (!emailRegex.test(draft.email.trim()))
      next.email = 'Please enter a valid email address.'

    if (!draft.phone.trim()) next.phone = 'Phone is required.'
    else if (!/[0-9+\-\s()]{10,}/.test(draft.phone.trim()))
      next.phone = 'Please enter at least 10 digits; +, spaces and dashes allowed.'

    if (!draft.hospital) next.hospital = 'Please select a hospital.'
    if (!draft.date) next.date = 'Please choose a date.'
    return next
  }

  const setField = (key, value) => {
    let draft = { ...form, [key]: value }

    if (key === 'doctor') {
      const selectedDoc = doctors.find((d) => d.name === value)
      draft.speciality = selectedDoc ? selectedDoc.specialty : ''
    }

    setForm(draft)
    setTouched((prev) => ({ ...prev, [key]: true }))
    setErrors(validate(draft))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // mark all fields touched (keeps your red errors working)
    const allTouched = Object.keys(form).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
    setTouched(allTouched)

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    try {
      setStatus({ sending: true, ok: null, message: 'Saving your request…' })

      const normalizedEmail = form.email.trim().toLowerCase()

      await sendToGoogleSheet({
        ...form,
        email: normalizedEmail,
        companyName: COMPANY_NAME,
        createdAt: new Date().toISOString(),
      })

      setStatus({
        sending: false,
        ok: true,
        message: 'Your appointment was created successfully.',
      })

      setForm({
        fullName: '',
        phone: '',
        email: '',
        hospital: '',
        doctor: '',
        speciality: '',
        date: '',
      })

      setTouched({})
      onClose()
      navigate('/thank-you')

    } catch (err) {
      console.error(err)

      setStatus({
        sending: false,
        ok: false,
        message: 'Failed to store the request. Please try again later.',
      })
    }
  }

  return (
    <div className="appointment appointment--modal">
      <div className="section-title">
        <h2>Request An Appointment</h2>
      </div>

      <div className="appointment__card">
        <form className="appointment__form" onSubmit={handleSubmit} noValidate>
          {/* Name + Phone */}
          <div className="appointment__grid">
            <div className="appointment__field">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Name"
                aria-label="Full Name"
                value={form.fullName}
                onChange={(e) => setField('fullName', e.target.value)}
                required
              />
              {touched.fullName && errors.fullName && <small className="field-error">{errors.fullName}</small>}
            </div>
            <div className="appointment__field">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                aria-label="Phone"
                value={form.phone}
                onChange={(e) => setField('phone', e.target.value)}
                required
                pattern="[0-9+\-\s()]{10,}"
                title="Please enter at least 10 digits; you may include +, spaces, and dashes."
              />
              {touched.phone && errors.phone && <small className="field-error">{errors.phone}</small>}
            </div>
          </div>

          {/* Email + Hospital */}
          <div className="appointment__grid">
            <div className="appointment__field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                required
              />
              {touched.email && errors.email && <small className="field-error">{errors.email}</small>}
            </div>
            <div className="appointment__field">
              <select
                name="hospital"
                value={form.hospital}
                onChange={(e) => setField('hospital', e.target.value)}
                aria-label="Select Hospital"
                required
              >
                <option value="" disabled>
                  Select Hospital
                </option>
                <option>Sunridge Moti Nagar</option>
              </select>
              {touched.hospital && errors.hospital && <small className="field-error">{errors.hospital}</small>}
            </div>
          </div>

          {/* Doctor */}
          <div className="appointment__grid">
            <div className="appointment__field appointment__field--full">
              <select
                name="doctor"
                value={form.doctor}
                onChange={(e) => setField('doctor', e.target.value)}
                aria-label="Select Doctor"
                required
              >
                <option value="" disabled>
                  Select Doctor
                </option>
                <option value="Not Sure">Assigned by Hospital</option>
                {doctors.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
              {touched.doctor && errors.doctor && <small className="field-error">{errors.doctor}</small>}
            </div>
            {/* Date */}
          <div className="appointment__date">
            <input
              type="date"
              name="date"
              placeholder="Select Date"
              aria-label="Appointment Date"
              min={today}
              value={form.date}
              onChange={(e) => setField('date', e.target.value)}
              required
            />
            {touched.date && errors.date && <small className="field-error">{errors.date}</small>}
          </div>
          </div>

          

          {/* Submit */}
          <div className="appointment__submit">
            <button
              type="submit"
              className="btn btn--accent appointment__submit-btn"
              disabled={status.sending}
            >
              {status.sending ? 'Saving…' : 'Book Now'}
            </button>
          </div>

          {/* Status */}
          {status.message && (
            <p
              aria-live="polite"
              className={`form-status ${status.ok === true ? 'form-status--ok' : status.ok === false ? 'form-status--error' : ''}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default AppointmentFormModalContent
