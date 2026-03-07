
import React from 'react'

const testimonialImages = [
  '/images/testimonals-1.jpeg',
  '/images/testimonals-2.jpeg',
  '/images/testimonals-3.jpeg',
  '/images/testimonals-4.jpeg',
  '/images/testimonals-5.jpeg',
]

// Duplicate once to make a seamless loop (A + A)
const looped = [...testimonialImages, ...testimonialImages]

const Testimonials = () => {
  return (
    <section className="section section--light testimonials">
      <div className="container">
        <div className="section-title reveal">
          <h2>Inside Sunridge Hospitals</h2>
          <p>Take a quick tour of our facilities and patient-first approach</p>
        </div>

        {/* Infinite marquee viewport */}
        <div className="testimonials__marquee reveal" aria-label="Testimonials image gallery">
        {/* Moving track that contains duplicated items */}
          <div className="testimonials__track">
            {looped.map((src, index) => (
              <figure className="testimonials__card" key={`${index}-${src}`}>
                <div className="testimonials__image-area">
                  <img src={src} alt={`Testimonial ${index + 1}`} loading="lazy" />
                </div>
                {/* Keep caption area for balanced padding; leave empty if not needed */}
                <figcaption className="testimonials__caption" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
