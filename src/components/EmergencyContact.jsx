import React from "react";

const EmergencyContact = ({ onBookAppointment }) => {
	return (
		<section className="section section--purple emergency" id="contact">
			<div className="container">
				<div className="section-title reveal">
					<h2>Contact</h2>
					<p>
						We're here for you 24/7. In case of emergency, don't
						hesitate to contact us immediately.
					</p>
				</div>

				<div className="emergency__grid">
					<div className="emergency__item reveal">
						<div className="emergency__icon">📞</div>
						<h3>Emergency Hotline</h3>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.6rem",
							}}
						>
							<a
								className="emergency__value"
								href="tel: +919652766690"
							>
								9652766690
							</a>
							<a
								className="emergency__value"
								href="tel: +918055223347"
							>
								8055223347
							</a>
						</div>
					</div>

					<div className="emergency__item reveal">
						<div className="emergency__icon">🕒</div>
						<h3>Working Hours</h3>
						<p>24 hours a day</p>
						<p>7 days a week</p>
					</div>

					<div className="emergency__item reveal">
  <div className="emergency__icon">📍</div>
  <h3>Location</h3>
  <p>
    K/21, 8-3-167, Kalyan Nagar Phase 3 Rd, Phase-3, Pramila Enclave

    Kalyan Nagar, Moti Nagar, Hyderabad, Telangana 500114
  </p>
</div>

				</div>

				<div className="emergency__cta reveal">
					<button
						className="btn btn--accent"
						onClick={onBookAppointment}
						>
						Contact
					</button>

				</div>
			</div>
		</section>
	);
};

export default EmergencyContact;
