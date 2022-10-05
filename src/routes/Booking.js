import React from "react";
import BookingInfo from "../components/BookingInfo";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";

function Booking() {
	return (
		<div>
			<Navbar />
			<HeroImage heading="BOOKING" text="For casual dining & large-scale gatherings." />
			<BookingInfo />
			<Footer />
		</div>
	);
}

export default Booking;
