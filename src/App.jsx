// src/App.jsx
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Specialties from "./components/Specialties";
import WhyChooseUs from "./components/WhyChooseUs";
import DoctorsGrid from "./components/DoctorsGrid";
import AboutUs from "./components/AboutUs";
import EmergencyContact from "./components/EmergencyContact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import VideoBanner from "./components/VideoBanner";
import AdvertisingStrip from "./components/AdvertisingStrip";
import InsurancePartners from "./components/InsurancePartners";
import MapSection from "./components/MapSection";
import Modal from "./components/ModalComponent";
import AppointmentFormModalContent from "./components/AppointmentFormModalContent";
import WhatsAppButton from "./components/WhatsAppButton";
import ThankYou from "./pages/ThankYou";
import InternalMedicine from "./pages/specialties/InternalMedicine";
import Gastroenterology from "./pages/specialties/Gastroenterology";
import Orthopedics from "./pages/specialties/Orthopedics";
import Pulmonology from "./pages/specialties/Pulmonology";
import GeneralSurgery from "./pages/specialties/GeneralSurgery";

function ScrollRevealInit() {
	const location = useLocation();
	useEffect(() => {
		if (!("IntersectionObserver" in window)) {
			document
				.querySelectorAll(".reveal")
				.forEach((el) => el.classList.add("reveal--visible"));
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("reveal--visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);

		document.querySelectorAll(".reveal").forEach((el) => {
			if (!el.classList.contains("reveal--visible")) observer.observe(el);
		});

		const mo = new MutationObserver(() => {
			document.querySelectorAll(".reveal").forEach((el) => {
				if (!el.classList.contains("reveal--visible"))
					observer.observe(el);
			});
		});
		mo.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			mo.disconnect();
		};
	}, [location.pathname]);

	return null;
}

function PageTracker() {
	const location = useLocation();

	useEffect(() => {
		if (window.gtag) {
			window.gtag('event', 'page_view', {
				page_path: location.pathname,
				page_location: window.location.href,
				send_to: 'AW-11379742425'
			});
		}
	}, [location.pathname]);

	return null;
}

const HomePage = ({ openAppointment }) => (
	<>
		<HeroSlider onBookAppointment={openAppointment} />
		<Specialties />
		<WhyChooseUs />
		<Testimonials />
		<DoctorsGrid onBookAppointment={openAppointment} />
		<AdvertisingStrip />
		<VideoBanner />
		<InsurancePartners />
		<MapSection />
		<EmergencyContact onBookAppointment={openAppointment} />
	</>
);

const AboutPage = ({ openAppointment }) => (
	<>
		<AboutUs onBookAppointment={openAppointment} />
	</>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

export default function App() {
	const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
	const [selectedDoctor, setSelectedDoctor] = useState('');
	const openAppointment = (doctorName = '') => {
		setSelectedDoctor(doctorName);
		setIsAppointmentOpen(true);
	};
	const closeAppointment = () => setIsAppointmentOpen(false);

	function ScrollToHash() {
		const { hash } = useLocation();

		useEffect(() => {
			if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				setTimeout(() => {
				el.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}
			}
		}, [hash]);

		return null;
		}

	return (
		<Router>
			<ScrollToTop />
			<ScrollRevealInit />
			<ScrollToHash />
			<PageTracker />
			<div className="app">
				<Header onBookAppointment={openAppointment} />
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<HomePage openAppointment={openAppointment} />
							}
						/>
						<Route
							path="/about"
							element={
								<AboutPage openAppointment={openAppointment} />
							}
						/>
						{/* add other pages as needed */}
						<Route
							path="/thank-you"
							element={
								<ThankYou />
							}
						/>
						<Route path="/specialties/internal-medicine" element={<InternalMedicine openAppointment={openAppointment} />} />
						<Route path="/specialties/gastroenterology" element={<Gastroenterology openAppointment={openAppointment} />} />
						<Route path="/specialties/orthopedics" element={<Orthopedics openAppointment={openAppointment} />} />
						<Route path="/specialties/pulmonology" element={<Pulmonology openAppointment={openAppointment} />} />
						<Route path="/specialties/general-surgery" element={<GeneralSurgery openAppointment={openAppointment} />} />
						<Route
							path="*"
							element={
								<HomePage openAppointment={openAppointment} />
							}
						/>
					</Routes>
				</main>
				<Footer />
				<WhatsAppButton />
				<button
					className="appointment-float"
					onClick={() => openAppointment()}
					aria-label="Book Appointment"
				>
					📅 Book Appointment
				</button>
				<Modal
					isOpen={isAppointmentOpen}
					onClose={closeAppointment}
					ariaLabel="Book Appointment"
					>
					<AppointmentFormModalContent
						onClose={closeAppointment}
						selectedDoctor={selectedDoctor}
					/>
				</Modal>

			</div>
		</Router>
	);
}
